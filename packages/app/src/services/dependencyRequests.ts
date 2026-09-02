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
import type { DependencyRequests as types } from "./types"
/**
 * @name dependency-requests
 * @description dependency-requests
 */
export default class DependencyRequests extends ApiClient {
  /**
   * @summary 上报/登记依赖需求
   * @description 容器内 opencode 安装依赖失败时调用（source=agent），也可后台人工登记（source=human，默认）。同一「类型 + 包名 + 版本」重复上报不新建记录，而是累加 hit_count。提交人由服务端从认证上下文获取：带 indicatorUserId 头时优先使用，否则从 Authorization: Bearer token 解析（容器内路径）。
   */
  dependencyRequestControllerCreate(params: types.DependencyRequestControllerCreateParams1) {
    const { authorization, ...body } = params
    const headers = { authorization }
    const url = "/dependency-requests"
    const config: DocReqConfig = { url, body, headers, method: "post" }
    return this.request<types.RDependencyRequestControllerCreate>(config)
  }

  /**
   * @summary 修改依赖需求
   * @description 可修改 type / name / version / remark。collected、collected_at、hit_count 与提交人不可修改。
   */
  dependencyRequestControllerUpdate(params: types.DependencyRequestControllerUpdateParams1) {
    const { id, ...body } = params
    const url = `/dependency-requests/${id}`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RDependencyRequestControllerUpdate>(config)
  }

  /**
   * @param { String } id 依赖需求 ID (UUID)
   * @summary 删除依赖需求
   * @description 删除任意一条依赖需求记录，不做归属校验
   */
  dependencyRequestControllerRemove(id: string) {
    const url = `/dependency-requests/${id}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RDependencyRequestControllerRemove>(config)
  }

  /**
   * @param { String } id 依赖需求 ID (UUID)
   * @summary 获取依赖需求详情
   * @description 返回完整信息，不按提交人隔离
   */
  dependencyRequestControllerFindOne(id: string) {
    const url = `/dependency-requests/${id}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RDependencyRequestControllerFindOne>(config)
  }

  /**
   * @summary 分页查询依赖需求列表
   * @description 返回全部依赖需求（不按提交人隔离），支持按 type / source / collected / keyword 过滤，按 hitCount 或 createdAt 排序。作为运维收集内网镜像源的待办清单。
   */
  dependencyRequestControllerFindMany(query: types.DependencyRequestControllerFindManyParams) {
    const url = `/dependency-requests?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RDependencyRequestControllerFindMany>(config)
  }

  /**
   * @summary 标记收集状态
   * @description 仅管理员可调。置为已收集时写入 collected_at 为当前时间，置为未收集时清空 collected_at。
   */
  dependencyRequestControllerMarkCollected(params: types.DependencyRequestControllerMarkCollectedParams1) {
    const { id, ...body } = params
    const url = `/dependency-requests/${id}/collect`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RDependencyRequestControllerMarkCollected>(config)
  }
}
export const dependencyRequests = new DependencyRequests()
