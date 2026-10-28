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
   * @description 修改容器的可变字段（agentName / cpuLimit / memoryLimit / workDirectory / idleTimeoutMinutes）。容器归属者本人或管理员（isAdmin）可操作。cpuLimit / memoryLimit 有变化且 Docker 容器存在（RUNNING / STOPPED 均可）时立即通过 docker update 热更新资源限制；update 失败时仅当 restartIfRunning=true 回退 stop + start 重启生效，默认直接返回错误。
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

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 查询用户指引状态
   * @description 返回该容器归属用户的新手引导状态。从未上报过的容器返回 pending，前端据此判断是否需要自动启动引导。仅归属者本人或管理员可查询。
   */
  containersControllerGetTourState(id: string) {
    const config: DocReqConfig = {
      url: `/containers/${id}/tour`,
      method: "get",
    }
    return this.request<types.RContainersControllerGetTourState>(config)
  }

  /**
   * @summary 保存用户指引状态
   * @description 上报新手引导的当前状态与停留步骤。前端 localStorage 为权威，此处仅做服务端留痕；version 需与前端步骤表版本一致。仅归属者本人或管理员可操作。
   */
  containersControllerSaveTourState(params: types.ContainersControllerSaveTourStateParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/tour`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RContainersControllerSaveTourState>(config)
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 重置用户指引
   * @description 清空指引状态回到 pending，下次进入页面将重新开始引导。供用户主动重看或运营/客服手动触发。仅归属者本人或管理员可操作。
   */
  containersControllerResetTourState(id: string) {
    const url = `/containers/${id}/tour/reset`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RContainersControllerResetTourState>(config)
  }
}
export const containers = new Containers()
