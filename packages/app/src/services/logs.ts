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
import type { Logs as types } from "./types"
/**
 * @name logs
 * @description logs
 */
export default class Logs extends ApiClient {
  /**
   * @summary 获取容器日志
   * @description 查询指定容器的日志，支持时间范围筛选和关键字搜索
   */
  containerLogsGet(params: types.ContainerLogsGetParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/logs?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainerLogsGet>(config)
  }
}
export const logs = new Logs()
