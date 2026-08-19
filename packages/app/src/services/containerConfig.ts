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
import type { ContainerConfig as types } from "./types"
/**
 * @name container-config
 * @description container-config
 */
export default class ContainerConfig extends ApiClient {
  /**
   * @summary 列出配置文件 / 读取单个配置文件内容
   * @description 不传 fileName 时列出 config 目录下所有直接子文件的元数据（不递归子目录）。传 fileName 时返回该文件内容；对 userinfo.jsonc/json 中的 access_token 字段自动脱敏为 ***。文件不存在时，列表场景会自动创建空目录后返回 []；读取场景返回 404。
   */
  containerConfigControllerGetFiles(params: types.ContainerConfigControllerGetFilesParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/config/files?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainerConfigControllerGetFiles>(config)
  }

  /**
   * @param { String } id 容器 ID (UUID)
   * @summary 读取 AGENTS.md 提示词文件
   * @description 读取容器对应宿主机 userData/{userId}/config/AGENTS.md 内容。文件不存在时返回空内容（content="", size=0, lastModified=null），不返回 404。
   */
  containerConfigControllerGetAgents(id: string) {
    const url = `/containers/${id}/config/agents-md`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RContainerConfigControllerGetAgents>(config)
  }

  /**
   * @summary 写入单个配置文件
   * @description 写入 userData/{userId}/config/{fileName}。文件已存在且 overwrite=false 时返回 409。对 userinfo.jsonc/json：若新 content 中 access_token 为 *** 或未包含该字段，则保留原真实 token（合并）；否则视为用户明确更新 token，原样写入。validateJsonc 默认 true，对 .json/.jsonc 文件做合法性校验。
   */
  containerConfigControllerWriteFile(params: types.ContainerConfigControllerWriteFileParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/config/files`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RContainerConfigControllerWriteFile>(config)
  }

  /**
   * @summary 删除单个配置文件
   * @description 删除 userData/{userId}/config/{fileName}。userinfo.jsonc/json 为承载 access_token 的关键文件，不允许删除（返回 400）。其他文件可删除；AGENTS.md 删除后可通过 PUT /agents-md 重新创建。
   */
  containerConfigControllerDeleteFile(params: types.ContainerConfigControllerDeleteFileParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/config/files?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RContainerConfigControllerDeleteFile>(config)
  }

  /**
   * @summary 写入 AGENTS.md 提示词文件
   * @description 全量覆盖写入 AGENTS.md。文件不存在时自动创建；父目录不存在时递归创建。容器内通过 Docker -v 挂载实时生效。
   */
  containerConfigControllerWriteAgents(params: types.ContainerConfigControllerWriteAgentsParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/config/agents-md`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RContainerConfigControllerWriteAgents>(config)
  }
}
export const containerConfig = new ContainerConfig()
