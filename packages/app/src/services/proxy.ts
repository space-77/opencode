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
import type { Proxy as types } from "./types"
/**
 * @name proxy
 * @description proxy
 */
export default class Proxy extends ApiClient {
  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootGet(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "get" }
    return this.request<types.RProxyRootGet>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootPut(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "put" }
    return this.request<types.RProxyRootPut>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootPost(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "post" }
    return this.request<types.RProxyRootPost>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootHead(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "head" }
    return this.request<types.RProxyRootHead>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootPatch(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "patch" }
    return this.request<types.RProxyRootPatch>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootDelete(agentId: string) {
    const config: DocReqConfig = { url: `/proxy/${agentId}`, method: "delete" }
    return this.request<types.RProxyRootDelete>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathGet({ path, agentId }: types.ProxyWithPathGetParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RProxyWithPathGet>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathPut({ path, agentId }: types.ProxyWithPathPutParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "put" }
    return this.request<types.RProxyWithPathPut>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyRootOptions(agentId: string) {
    const config: DocReqConfig = {
      url: `/proxy/${agentId}`,
      method: "options",
    }
    return this.request<types.RProxyRootOptions>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathPost({ path, agentId }: types.ProxyWithPathPostParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RProxyWithPathPost>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathHead({ path, agentId }: types.ProxyWithPathHeadParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "head" }
    return this.request<types.RProxyWithPathHead>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathPatch({ path, agentId }: types.ProxyWithPathPatchParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "patch" }
    return this.request<types.RProxyWithPathPatch>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathDelete({ path, agentId }: types.ProxyWithPathDeleteParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RProxyWithPathDelete>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyWithPathOptions({ path, agentId }: types.ProxyWithPathOptionsParams) {
    const url = `/proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "options" }
    return this.request<types.RProxyWithPathOptions>(config)
  }
}
export const proxy = new Proxy()
