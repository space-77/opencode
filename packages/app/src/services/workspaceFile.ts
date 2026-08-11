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
import type { WorkspaceFile as types } from "./types"
/**
 * @name workspace-file
 * @description workspace-file
 */
export default class WorkspaceFile extends ApiClient {
  /**
   * @summary 移动工作区文件或目录
   * @description 将容器工作区内的文件或目录移动到目标目录（保留原文件名）。targetDir 不存在时递归创建。overwrite 控制目标位置已存在同名时是否覆盖，默认 false（返回 409）。不支持移入自身子目录。
   */
  workspaceFileControllerMove(params: types.WorkspaceFileControllerMoveParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/file/move`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RWorkspaceFileControllerMove>(config)
  }

  /**
   * @summary 新建工作区文件
   * @description 在容器工作区（映射到宿主机 userData/{userId}/workspace）中新建文件，可携带初始内容。overwrite 控制是否覆盖已存在文件，默认 false；文件已存在且不覆盖时返回 409。
   */
  workspaceFileControllerCreate(params: types.WorkspaceFileControllerCreateParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/file`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RWorkspaceFileControllerCreate>(config)
  }

  /**
   * @summary 删除工作区文件
   * @description 删除容器工作区（映射到宿主机 userData/{userId}/workspace）中的指定文件。
   */
  workspaceFileControllerDelete(params: types.WorkspaceFileControllerDeleteParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/workspace/file?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RWorkspaceFileControllerDelete>(config)
  }

  /**
   * @summary 修改工作区文件内容
   * @description 全量覆盖文件内容，或按行范围替换指定行内容（行号从 1 开始，闭区间 [startLine, endLine]，语义对齐常见文本编辑器）。不传 startLine/endLine 时为全文覆盖；content 为空串时删除指定行范围；endLine 允许为 总行数 + 1 以在末尾追加。
   */
  workspaceFileControllerUpdate(params: types.WorkspaceFileControllerUpdateParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/file`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RWorkspaceFileControllerUpdate>(config)
  }

  /**
   * @summary 重命名工作区文件或目录
   * @description 对容器工作区内的文件或目录重命名（不改目录）。newFilename 为纯文件名（不含路径分隔符）。overwrite 控制目标已存在时是否覆盖，默认 false（返回 409）。
   */
  workspaceFileControllerRename(params: types.WorkspaceFileControllerRenameParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/file/rename`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.RWorkspaceFileControllerRename>(config)
  }

  /**
   * @summary 获取工作区文件内容
   * @description 读取容器工作区（映射到宿主机 userData/{userId}/workspace）中指定文件的内容（UTF-8 文本）。
   */
  workspaceFileControllerGetContent(params: types.WorkspaceFileControllerGetContentParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/workspace/file?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RWorkspaceFileControllerGetContent>(config)
  }
}
export const workspaceFile = new WorkspaceFile()
