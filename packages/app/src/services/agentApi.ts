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
import type { AgentApi as types, __common__ } from "./types"
/**
 * @name agent-api
 * @description agent-api
 */
export default class AgentApi extends ApiClient {
  /**
   * @summary 查询任务执行结果
   */
  agentApiControllerGetTask(params: types.AgentApiControllerGetTaskParams) {
    const { taskId, ...query } = params
    const url = `/agent-api/tasks/${taskId}/result?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RAgentApiControllerGetTask>(config)
  }

  /**
   * @param { String } id
   * @summary 模板详情
   * @description 模板须属于当前 uid；跨用户返回 403 业务错误
   */
  promptTemplateControllerGet(id: string) {
    const url = `/agent-api/prompt-templates/${id}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RPromptTemplateControllerGet>(config)
  }

  /**
   * @summary 上传文件到工作目录
   */
  agentApiControllerUploadFile(body: types.AgentApiControllerUploadFileBody) {
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = "/agent-api/workspace/upload"
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RAgentApiControllerUploadFile>(config)
  }

  /**
   * @summary 发起 agent 任务
   * @description 注入规范性提示词后异步调用 opencode 执行
   */
  agentApiControllerCreateTask(body: __common__.CreateTaskDto) {
    const config: DocReqConfig = {
      url: "/agent-api/tasks",
      body,
      method: "post",
    }
    return this.request<types.RAgentApiControllerCreateTask>(config)
  }

  /**
   * @summary 模板列表
   * @description 仅返回当前 uid 名下模板，按更新时间倒序（不分页）
   */
  promptTemplateControllerList() {
    const url = "/agent-api/prompt-templates"
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RPromptTemplateControllerList>(config)
  }

  /**
   * @summary 创建提示词模板
   * @description 按上下文 uid 创建模板；content 可含 $1/$2 等占位符
   */
  promptTemplateControllerCreate(body: __common__.CreateTemplateDto) {
    const url = "/agent-api/prompt-templates"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RPromptTemplateControllerCreate>(config)
  }

  /**
   * @param { String } id
   * @summary 删除模板
   * @description 物理删除；只影响后续新任务，进行中任务不受影响
   */
  promptTemplateControllerRemove(id: string) {
    const url = `/agent-api/prompt-templates/${id}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RPromptTemplateControllerRemove>(config)
  }

  /**
   * @summary 更新模板
   * @description 部分更新：仅覆盖请求携带的字段
   */
  promptTemplateControllerUpdate(params: types.PromptTemplateControllerUpdateParams1) {
    const { id, ...body } = params
    const url = `/agent-api/prompt-templates/${id}`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RPromptTemplateControllerUpdate>(config)
  }

  /**
   * @summary 创建工作目录
   * @description 按上下文 uid 创建专属工作目录，返回加密 workspace_path
   */
  agentApiControllerCreateWorkspace() {
    const config: DocReqConfig = {
      url: "/agent-api/workspace",
      method: "post",
    }
    return this.request<types.RAgentApiControllerCreateWorkspace>(config)
  }
}
export const agentApi = new AgentApi()
