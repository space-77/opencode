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
import type { DependencyResources as types } from "./types"
/**
 * @name dependency-resources
 * @description dependency-resources
 */
export default class DependencyResources extends ApiClient {
  /**
   * @param { Mirror } mirror 过滤单一镜像；缺省返回四类镜像聚合结果
   * @summary 查询离线镜像可用依赖资源
   * @description 聚合查询 apt / pip / npm / cdn 四类离线镜像的可用资源。不带 mirror 参数时返回四类镜像聚合结果；单一镜像故障不阻断整体，对应分组标记 ok=false 与错误信息。结果短缓存 60s（DEPENDENCY_RESOURCE_CACHE_TTL 可配）。
   */
  dependencyResourceControllerQuery(mirror?: Mirror) {
    const url = `/dependency-resources?${this.serialize({ mirror })}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RDependencyResourceControllerQuery>(config)
  }
}
export const dependencyResources = new DependencyResources()
