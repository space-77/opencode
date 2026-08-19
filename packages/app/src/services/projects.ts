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
import type { Projects as types, __common__ } from "./types"
/**
 * @name projects
 * @description projects
 */
export default class Projects extends ApiClient {
  /**
   * @summary 分页查询当前用户的项目列表
   * @description 返回当前认证用户的项目列表，支持按 containerId 过滤、按 name 关键词模糊匹配分页查询。pageSize 上限 100，按创建时间倒序。仅返回当前用户自己的项目。
   */
  projectsControllerList(query: types.ProjectsControllerListParams) {
    const url = `/projects?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RProjectsControllerList>(config)
  }

  /**
   * @summary 创建用户项目
   * @description 为当前用户创建一个新项目记录，关联到指定容器。
   */
  projectsControllerCreate(body: __common__.CreateProjectDto) {
    const config: DocReqConfig = { url: "/projects", body, method: "post" }
    return this.request<types.RProjectsControllerCreate>(config)
  }

  /**
   * @param { String } id 项目 ID
   * @summary 查询项目详情（含会话历史）
   * @description 返回指定项目的完整元数据，并聚合容器内 opencode 的 GET /api/session 会话历史。当容器不可达时，仍返回项目元数据，sessions 字段降级为空并附带 sessionError。
   */
  projectsControllerDetail(id: string) {
    const config: DocReqConfig = { url: `/projects/${id}`, method: "get" }
    return this.request<types.RProjectsControllerDetail>(config)
  }

  /**
   * @param { String } id 项目 ID
   * @summary 删除用户项目
   * @description 删除当前用户的项目记录（仅删 agent-sphere DB，不影响容器内 opencode 数据）。
   */
  projectsControllerRemove(id: string) {
    const config: DocReqConfig = { url: `/projects/${id}`, method: "delete" }
    return this.request<types.RProjectsControllerRemove>(config)
  }

  /**
   * @summary 修改用户项目
   * @description 更新指定项目的可变字段（vcs、name、icon、commands、sandboxes、sessionIds、time）。worktree 和 containerId 不可修改。
   */
  projectsControllerUpdate(params: types.ProjectsControllerUpdateParams1) {
    const { id, ...body } = params
    const config: DocReqConfig = {
      url: `/projects/${id}`,
      body,
      method: "patch",
    }
    return this.request<types.RProjectsControllerUpdate>(config)
  }
}
export const projects = new Projects()
