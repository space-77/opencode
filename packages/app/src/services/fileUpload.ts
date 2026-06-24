/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA DOC2TS                        ##
 * ##                                                           ##
 * ## AUTHOR: space-77                                          ##
 * ## SOURCE: https://github.com/space-77/doc2ts                ##
 * ---------------------------------------------------------------
 */

import type { DocReqConfig } from "doc2ts"
import ApiClient from "./client"
import type { FileUpload as types } from "./types"
/**
 * @name file-upload
 * @description file-upload
 */
export default class FileUpload extends ApiClient {
  /**
   * @summary 单文件直传到工作区
   * @description 上传单个文件到容器对应的工作区目录，支持指定子目录
   */
  fileUploadController(params: types.FileUploadControllerParams1) {
    const { id, ...body } = params
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = `/containers/${id}/workspace/upload`
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RFileUploadController>(config)
  }

  /**
   * @summary 上传单个分块
   * @description 上传分块数据到指定的上传会话
   */
  fileUploadControllerChunk(params: types.FileUploadControllerChunkParams1) {
    const { id, uploadId, ...body } = params
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = `/containers/${id}/workspace/upload/multipart/${uploadId}/chunk`
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RFileUploadControllerChunk>(config)
  }

  /**
   * @summary 完成分块上传
   * @description 合并所有分块为完整文件
   */
  fileUploadControllerComplete({ id, uploadId }: types.FileUploadControllerCompleteParams) {
    const url = `/containers/${id}/workspace/upload/multipart/${uploadId}/complete`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RFileUploadControllerComplete>(config)
  }

  /**
   * @summary 从工作区下载文件
   * @description 下载容器工作区中的文件，文件路径必须以 /workspace 开头
   */
  fileUploadControllerDownload(params: types.FileUploadControllerDownloadParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/workspace/upload/download?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.download(config)
  }

  /**
   * @summary 初始化分块上传
   * @description 创建分块上传会话，返回 uploadId 用于后续分块上传
   */
  fileUploadControllerInitMultipart(params: types.FileUploadControllerInitMultipartParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/upload/multipart/init`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RFileUploadControllerInitMultipart>(config)
  }
}
export const fileUpload = new FileUpload()
