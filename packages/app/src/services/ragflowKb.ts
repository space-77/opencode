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
import type { RagflowKb as types } from "./types"
/**
 * @name ragflow-kb
 * @description ragflow-kb
 */
export default class RagflowKb extends ApiClient {
  /**
   * @param { String } authorization
   * @summary 查询用户可访问的 RAGFlow 知识库列表
   * @description 按请求身份读取用户 userinfo.jsonc 的 ragflow_base_url（按用户缓存，mtime/TTL 失效），将入站 Authorization 头原样透传上游 GET {base}/v1/kb/list，过滤空库后返回。未配置或上游失败返回业务错误（HTTP 200 + {code, message}）。
   */
  ragflowKbControllerList(authorization: string) {
    const headers = { authorization }
    const config: DocReqConfig = {
      url: "/ragflow/kbs",
      headers,
      method: "get",
    }
    return this.request<types.RRagflowKbControllerList>(config)
  }
}
export const ragflowKb = new RagflowKb()
