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
import type { AgentProxy as types } from "./types"
/**
 * @name agent-proxy
 * @description agent-proxy
 */
export default class AgentProxy extends ApiClient {
  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootGet(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RProxyControllerRootGet>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootPut(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "put" }
    return this.request<types.RProxyControllerRootPut>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootPost(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RProxyControllerRootPost>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootHead(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "head" }
    return this.request<types.RProxyControllerRootHead>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootPatch(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "patch" }
    return this.request<types.RProxyControllerRootPatch>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootDelete(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RProxyControllerRootDelete>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathGet({ path, agentId }: types.ProxyControllerWithPathGetParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RProxyControllerWithPathGet>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathPut({ path, agentId }: types.ProxyControllerWithPathPutParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "put" }
    return this.request<types.RProxyControllerWithPathPut>(config)
  }

  /**
   * @param { String } agentId Agent 的唯一标识符 (UUID)
   * @summary 代理请求到容器根路径
   * @description 将请求透传到指定 Agent 容器的根路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerRootOptions(agentId: string) {
    const url = `/agent-proxy/${agentId}`
    const config: DocReqConfig = { url, method: "options" }
    return this.request<types.RProxyControllerRootOptions>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathPost({ path, agentId }: types.ProxyControllerWithPathPostParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RProxyControllerWithPathPost>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathHead({ path, agentId }: types.ProxyControllerWithPathHeadParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "head" }
    return this.request<types.RProxyControllerWithPathHead>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathPatch({ path, agentId }: types.ProxyControllerWithPathPatchParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "patch" }
    return this.request<types.RProxyControllerWithPathPatch>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathDelete({ path, agentId }: types.ProxyControllerWithPathDeleteParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RProxyControllerWithPathDelete>(config)
  }

  /**
   * @summary 代理请求到容器（带路径）
   * @description 将请求透传到指定 Agent 容器的任意路径。成功时直接返回容器原始响应（不包裹统一结构）；失败时返回 `{ code, data, message }`。
   */
  proxyControllerWithPathOptions({ path, agentId }: types.ProxyControllerWithPathOptionsParams) {
    const url = `/agent-proxy/${agentId}/${path}`
    const config: DocReqConfig = { url, method: "options" }
    return this.request<types.RProxyControllerWithPathOptions>(config)
  }
}
export const agentProxy = new AgentProxy()
