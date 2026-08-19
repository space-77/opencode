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
   * @description 根据容器 ID 获取详细信息
   */
  containersGet(id: string) {
    const config: DocReqConfig = { url: `/containers/${id}`, method: "get" }
    return this.request<types.RContainersGet>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 停止容器
   * @description 停止指定的容器实例
   */
  containersStop(id: string) {
    const url = `/containers/${id}/stop`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RContainersStop>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 启动容器
   * @description 启动指定的容器实例
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
   * @summary 分页查询当前用户的容器列表
   * @description 返回当前认证用户的容器列表，支持按状态过滤、agentName 模糊匹配分页查询。pageSize 上限 100，按创建时间倒序。仅返回当前用户自己的容器，不包含其他用户数据。
   */
  containersControllerList(query: types.ContainersControllerListParams) {
    const url = `/containers?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainersControllerList>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 删除容器
   * @description 删除属于当前用户的指定容器。流程：归属校验 → 停止并删除 Docker 容器（容器不存在则跳过）→ 物理删除 DB 记录 → 审计日志。
   */
  containersControllerDelete(id: string) {
    const config: DocReqConfig = { url: `/containers/${id}`, method: "delete" }
    return this.request<types.RContainersControllerDelete>(config)
  }

  /**
   * @summary 修改容器配置
   * @description 修改容器的可变字段（agentName / cpuLimit / memoryLimit / workDirectory）。restartIfRunning 默认 false 仅写入 DB；为 true 且容器处于 RUNNING 时通过 docker update 热更新资源限制，失败则回退重启。
   */
  containersControllerUpdate(params: types.ContainersControllerUpdateParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RContainersControllerUpdate>(config)
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
