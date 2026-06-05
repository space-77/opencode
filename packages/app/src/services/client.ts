import type { DocReqConfig, IApiClient } from 'doc2ts'
import qs from 'qs'
import service from '@/utils/axios'
import { downloadFileStream } from '@/utils/file'

export default class ApiClient implements IApiClient {
  static FETCH_MAP = new Map() // 防重复容器

  /**
   * @description 公共请求方法
   */
  async request<T = any>(reqConfig: DocReqConfig): Promise<T> {
    const { config = {}, url: path, method, body, formData, headers } = reqConfig

    return service({ url: path, method, headers, data: body || formData, ...(config || {}) })
  }

  /**
   * @description 文件下载方法
   */
  protected async download<T = Blob>(reqConfig: DocReqConfig, fileName?: string): Promise<T> {
    const { config = {}, url: path, method, body, formData, headers } = reqConfig
    const { responseType } = (config || {}) as any

    try {
      const res = await service({ url: path, method, headers, data: body || formData, timeout: (config as any).timeout, responseType })
      const { data } = res

      if (data.type === 'application/json') {
        // 如果是 JSON数据， 证明这里下载失败了并不是返回文件流， 需要处理 Blob 成 JSON，提示用户下载失败
        return new Promise((_, reject) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            try {
              const { code, message } = JSON.parse(e.target?.result as string)
              if (code !== 200) {
                reject(new Error(message || '文件下载失败，请稍后重试'))
              }
            } catch {
              reject(new Error('文件下载失败，无法解析错误信息'))
            }
          }
          reader.onerror = () => {
            reject(new Error('文件下载失败，读取错误数据失败'))
          }
          reader.readAsText(data)
        })
      }

      fileName = fileName || res.headers['content-disposition']?.split('=')?.[1] || 'unknown'
      try {
        fileName = decodeURIComponent(fileName as string)
      } catch {
      }

      downloadFileStream(data as Blob, fileName as string)
      return data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  /**
   * @description 拼接参数
   */
  protected serialize(query: Record<string, any>) {
    return qs.stringify(query, { skipNulls: true })
  }

  /**
   * @description 创建 formdata
   */
  protected formData(formData: Record<string, any>, type: string) {
    if (!(formData instanceof Object) || Array.isArray(formData)) return
    const dataList = Object.entries(formData)

    if (type.startsWith('multipart/form-data')) {
      const fd = new FormData()
      dataList.forEach(([k, v]) => {
        if (v === undefined) return
        if (Array.isArray(v)) {
          v.forEach((item: any) => fd.append(k, item))
        } else {
          fd.append(k, v)
        }
      })
      return fd
    }
    if (type.startsWith('application/x-www-form-urlencoded')) {
      const fd = new URLSearchParams()
      dataList.forEach(([k, v]) => {
        if (v === undefined) return
        if (Array.isArray(v)) {
          v.forEach((item: any) => fd.set(k, item))
        } else {
          fd.set(k, v)
        }
      })
      return fd
    }
  }
}
