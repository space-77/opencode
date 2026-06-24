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
import type { Audit as types } from "./types"
/**
 * @name audit
 * @description audit
 */
export default class Audit extends ApiClient {
  /**
   * @summary 查询操作日志
   * @description 分页查询系统操作日志，支持按用户、操作类型和时间范围筛选
   */
  auditListOperations(query: types.AuditListOperationsParams) {
    const url = `/audit/operations?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RAuditListOperations>(config)
  }

  /**
   * @summary 导出操作日志为 CSV
   * @description 将操作日志导出为 CSV 字符串（位于统一响应的 data 字段内）
   */
  auditExportOperations(query: types.AuditExportOperationsParams) {
    const url = `/audit/operations/export?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RAuditExportOperations>(config)
  }

  /**
   * @summary 查询健康检查日志
   * @description 分页查询容器健康检查日志，支持按容器 ID 和时间范围筛选
   */
  auditListHealthChecks(query: types.AuditListHealthChecksParams) {
    const url = `/audit/health-checks?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RAuditListHealthChecks>(config)
  }
}
export const audit = new Audit()
