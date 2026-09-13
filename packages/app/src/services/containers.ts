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
import type { Containers as types, __common__ } from "./types"
/**
 * @name containers
 * @description containers
 */
export default class Containers extends ApiClient {
  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 获取容器详情
   * @description 根据容器 ID 获取详细信息。容器归属者本人或管理员（isAdmin）可查看。
   */
  containersGet(id: string) {
    const config: DocReqConfig = { url: `/containers/${id}`, method: "get" }
    return this.request<types.RContainersGet>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 停止容器
   * @description 停止指定的容器实例。容器归属者本人或管理员（isAdmin）可操作；审计日志记录发起请求的操作者。
   */
  containersStop(id: string) {
    const url = `/containers/${id}/stop`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RContainersStop>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 启动容器
   * @description 启动指定的容器实例。容器归属者本人或管理员（isAdmin）可操作；审计日志记录发起请求的操作者。
   */
  containersStart(id: string) {
    const url = `/containers/${id}/start`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RContainersStart>(config)
  }

  /**
   * @summary 创建新容器
   * @description 为用户创建一个新的 Agent 容器
   */
  containersCreate(body: __common__.CreateContainerDto) {
    const config: DocReqConfig = { url: "/containers", body, method: "post" }
    return this.request<types.RContainersCreate>(config)
  }

  /**
   * @summary 分页查询所有容器列表
   * @description 返回全部用户的容器列表，支持按状态过滤、agentName 模糊匹配分页查询。pageSize 上限 100，按创建时间倒序。不做用户维度过滤，用于运维视角查看所有容器。
   */
  containersControllerList(query: types.ContainersControllerListParams) {
    const url = `/containers?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainersControllerList>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 删除容器
   * @description 删除指定容器。容器归属者本人或管理员（isAdmin）可操作。流程：归属校验 → 停止并删除 Docker 容器（容器不存在则跳过）→ 物理删除 DB 记录 → 审计日志（记操作者）。
   */
  containersControllerDelete(id: string) {
    const config: DocReqConfig = { url: `/containers/${id}`, method: "delete" }
    return this.request<types.RContainersControllerDelete>(config)
  }

  /**
   * @summary 修改容器配置
   * @description 修改容器的可变字段（agentName / cpuLimit / memoryLimit / workDirectory）。容器归属者本人或管理员（isAdmin）可操作。restartIfRunning 默认 false 仅写入 DB；为 true 且容器处于 RUNNING 时通过 docker update 热更新资源限制，失败则回退重启。
   */
  containersControllerUpdate(params: types.ContainersControllerUpdateParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RContainersControllerUpdate>(config)
  }

  /**
   * @summary 重启容器（容器内 Agent 自重启）
   * @description 仅要求 Authorization: Bearer <token>（无需 indicatorUserId 头）。受理后先通知前端打开全局 loading，延迟 2 秒再重启容器；重启完成后通知前端恢复。接口立即返回，不等待重启完成
   */
  containersControllerRestart(params: types.ContainersControllerRestartParams) {
    const { id, ...headers } = params
    const url = `/containers/${id}/restart`
    const config: DocReqConfig = { url, headers, method: "post" }
    return this.request<types.RContainersControllerRestart>(config)
  }

  /**
   * @summary 热重载容器配置
   * @description 仅要求 Authorization: Bearer <token>（无需 indicatorUserId 头）。直接转发到容器内 POST /system/hot-reload，不延迟、不重启容器；容器内 server 负责发布 hot_reload/hot_reload_complete/hot_reload_failed 事件通知前端
   */
  containersControllerHotReload(params: types.ContainersControllerHotReloadParams) {
    const { id, ...headers } = params
    const url = `/containers/${id}/system/hot-reload`
    const config: DocReqConfig = { url, headers, method: "post" }
    return this.request<types.RContainersControllerHotReload>(config)
  }

  /**
   * @summary 创建工作区文件夹
   * @description 在容器 /workspace 目录下创建子文件夹；未指定 folderName 时使用 UUID 命名
   */
  containersCreateWorkspaceFolder(params: types.ContainersCreateWorkspaceFolderParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/folders`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RContainersCreateWorkspaceFolder>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 获取可用工作区
   * @description 返回一个未使用的工作区目录（目录为空且无关联 session）；若无空闲工作区则自动新建
   */
  containersGetAvailableWorkspace(id: string) {
    const url = `/containers/${id}/workspace/available`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainersGetAvailableWorkspace>(config)
  }
}
export const containers = new Containers()
