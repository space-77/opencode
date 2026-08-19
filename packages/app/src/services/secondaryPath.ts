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
import type { SecondaryPath as types, __common__ } from "./types"
/**
 * @name secondary-path
 * @description secondary-path
 */
export default class SecondaryPath extends ApiClient {
  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRoot() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "get" }
    return this.request<__common__.RSecondaryPathControllerForwardRoot>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWith() {
    const config: DocReqConfig = { url: "/${ppPath}/${path}", method: "get" }
    return this.request<__common__.RSecondaryPathControllerForwardWith>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootPut() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "put" }
    return this.request<__common__.RSecondaryPathControllerForwardRootPut>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithPut() {
    const config: DocReqConfig = { url: "/${ppPath}/${path}", method: "put" }
    return this.request<__common__.RSecondaryPathControllerForwardWithPut>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootPost() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "post" }
    return this.request<__common__.RSecondaryPathControllerForwardRootPost>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootHead() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "head" }
    return this.request<__common__.RSecondaryPathControllerForwardRootHead>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithPost() {
    const config: DocReqConfig = { url: "/${ppPath}/${path}", method: "post" }
    return this.request<__common__.RSecondaryPathControllerForwardWithPost>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithHead() {
    const config: DocReqConfig = { url: "/${ppPath}/${path}", method: "head" }
    return this.request<__common__.RSecondaryPathControllerForwardWithHead>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootPatch() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "patch" }
    return this.request<__common__.RSecondaryPathControllerForwardRootPatch>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithPatch() {
    const config: DocReqConfig = { url: "/${ppPath}/${path}", method: "patch" }
    return this.request<__common__.RSecondaryPathControllerForwardWithPatch>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootDelete() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "delete" }
    return this.request<__common__.RSecondaryPathControllerForwardRootDelete>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithDelete() {
    const config: DocReqConfig = {
      url: "/${ppPath}/${path}",
      method: "delete",
    }
    return this.request<__common__.RSecondaryPathControllerForwardWithDelete>(config)
  }

  /**
   * @summary 二级路径转发到容器（根）
   * @description 拦截 /pp_<密文> 或 /ppr_<密文> 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发到根路径（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。非 pp_/ppr_ 前缀请求会交给后续路由处理。
   */
  secondaryPathControllerForwardRootOptions() {
    const config: DocReqConfig = { url: "/${ppPath}", method: "options" }
    return this.request<__common__.RSecondaryPathControllerForwardRootOptions>(config)
  }

  /**
   * @summary 二级路径转发到容器（带子路径）
   * @description 拦截 /pp_<密文>/... 或 /ppr_<密文>/... 形式的二级路径请求，解密密文还原 { userId, port }，定位用户运行中容器后转发到容器内对应端口。pp_ 前缀保留完整原始路径转发；ppr_ 前缀去除前缀后转发（后端收到根路径请求）。兼容 SSE、WebSocket 等所有请求类型。该路由不鉴权：密文的 GCM 认证标签即访问凭证，解密成功即放行。
   */
  secondaryPathControllerForwardWithOptions() {
    const config: DocReqConfig = {
      url: "/${ppPath}/${path}",
      method: "options",
    }
    return this.request<__common__.RSecondaryPathControllerForwardWithOptions>(config)
  }
}
export const secondaryPath = new SecondaryPath()
