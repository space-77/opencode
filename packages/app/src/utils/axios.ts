// oxlint-disable typescript/no-unsafe-type-assertion
import { BASE_URL, SUCCESS_CODE } from "@/config"
import axios from "axios"
import { setupCache } from "axios-cache-interceptor"

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: BASE_URL,
  // 超时
  timeout: 1000 * 60 * 4,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})

setupCache(service, { ttl: 2000 })

service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use(
  (response) => {
    const { data: resData } = response

    // 二进制数据则直接返回
    if (response.request?.responseType === "blob" || response.request?.responseType === "arraybuffer") {
      return response
    }

    const { code, data } = resData

    if (code !== SUCCESS_CODE) return [response, data, resData] as any

    return [null, data, resData] as any
  },
  (error) => {
    const { message: msg, response = {} } = error
    let message = response.data?.message || response.data?.msg || msg

    if (message === "Network Error") {
      message = "后端接口连接异常"
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时"
    } else if (message.includes("Request failed with status code")) {
      message = `系统接口${message.substr(message.length - 3)}异常`
    }
    return [Promise.reject(error), response.data, response]
  },
)

export default service
