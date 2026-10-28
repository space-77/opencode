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
import type { AdminTemplate as types, __common__ } from "./types"
/**
 * @name admin-template
 * @description admin-template
 */
export default class AdminTemplate extends ApiClient {
  /**
   * @summary api_management 推送模型清单并同步到模板与用户配置
   * @description 接收 api_management /v1/models 原生结构的模型清单：转换为 provider.zhiyuan 后与模板比对，有变化才原子写入 temp/opencode/opencode.jsonc；再按范围（默认全部，可用 userIds 指定）下发到各 userData/{uid}/config；最后对 opencode.jsonc 有变化的用户容器批量热重载（不重启）。同一份清单重复推送幂等：不写文件、不备份、不热重载。返回模板结果、逐用户明细、逐容器明细。
   */
  modelPushSyncController(body: __common__.ModelPushSyncDto) {
    const url = "/admin-template/models/sync"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RModelPushSyncController>(config)
  }

  /**
   * @summary 列出模板 tool
   * @description 返回模板 plugins/ 下所有 .ts 文件的名称、大小与最后修改时间，按文件名排序；非 .ts 文件不出现。
   */
  templateToolControllerList() {
    const url = "/admin-template/plugins"
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RTemplateToolControllerList>(config)
  }

  /**
   * @param { String } name 工具文件名（.ts）
   * @summary 读取模板 tool 源码
   */
  templateToolControllerRead(name: string) {
    const url = `/admin-template/plugins/${name}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RTemplateToolControllerRead>(config)
  }

  /**
   * @param { FileName } fileName
   * @summary 读取模板配置文件
   * @description 读取 CONFIG_TEMPLATE_DIR 下 AGENTS.md / opencode.jsonc / userinfo.jsonc 中的一个。文件不存在时返回空内容且 exists=false，不返回 404。userinfo.jsonc 的 access_token 会被掩码为 ***。
   */
  templateFilesControllerRead(fileName: FileName) {
    const url = `/admin-template/config-files?${this.serialize({ fileName })}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RTemplateFilesControllerRead>(config)
  }

  /**
   * @summary 列出模板 skill
   * @description 扫描模板目录 skills/ 下的直接子目录，返回名称、描述、启用状态与不合规原因。缺少 SKILL.md 或 frontmatter 不合规的条目仍返回并带 issue，不中断整个查询。
   */
  templateSkillControllerList() {
    const config: DocReqConfig = {
      url: "/admin-template/skills",
      method: "get",
    }
    return this.request<types.RTemplateSkillControllerList>(config)
  }

  /**
   * @summary 写入模板 tool 源码
   * @description 覆盖写入已有 .ts 文件；语法错误返回 400 且不落盘；文件不存在返回 404。
   */
  templateToolControllerWrite(params: types.TemplateToolControllerWriteParams1) {
    const { name, ...body } = params
    const url = `/admin-template/plugins/${name}`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RTemplateToolControllerWrite>(config)
  }

  /**
   * @summary 写入模板配置文件（全量覆盖）
   * @description 全量覆盖写入模板文件；.jsonc 文件默认先校验 JSON/JSONC 合法性，不合法返回 400 且不落盘。写入 userinfo.jsonc 时若提交内容中 access_token 为空或为 ***，保留模板中既有 token。写入只改模板，不同步到任何用户目录、不重启任何容器。
   */
  templateFilesControllerWrite(body: __common__.WriteTemplateFileDto) {
    const url = "/admin-template/config-files"
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RTemplateFilesControllerWrite>(config)
  }

  /**
   * @summary 新建模板 tool
   * @description 文件名必须以 .ts 结尾；空内容返回 400；TypeScript 语法错误返回 400 且不落盘（只校验语法，不做类型检查与模块解析）。同名且未声明覆盖时返回 409。
   */
  templateToolControllerCreate(body: __common__.CreateTemplateToolDto) {
    const url = "/admin-template/plugins"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RTemplateToolControllerCreate>(config)
  }

  /**
   * @param { String } name 工具文件名（.ts）
   * @summary 删除模板 tool
   */
  templateToolControllerRemove(name: string) {
    const url = `/admin-template/plugins/${name}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RTemplateToolControllerRemove>(config)
  }

  /**
   * @summary 重命名模板 tool
   */
  templateToolControllerRename(params: types.TemplateToolControllerRenameParams1) {
    const { name, ...body } = params
    const url = `/admin-template/plugins/${name}/rename`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RTemplateToolControllerRename>(config)
  }

  /**
   * @param { String } authorization
   * @summary 拉取上游模型清单并转换为 provider.zhiyuan 结构
   * @description 请求 `{MODEL_BASE_URL}/v1/models`，透传调用方的 Authorization: Bearer <token>。把返回的 data[] 映射为 opencode 的 provider.zhiyuan（id→模型键、context_window→limit.context、max_output_tokens→limit.output、input_modalities→modalities、supports_deep_thinking+thinking_depth_levels→variants）。只返回不落盘，落盘请使用配置模板文件写入接口。
   */
  upstreamModelControllerFetch(authorization: string) {
    const headers = { authorization }
    const url = "/admin-template/models/upstream"
    const config: DocReqConfig = { url, headers, method: "get" }
    return this.request<types.RUpstreamModelControllerFetch>(config)
  }

  /**
   * @summary 创建空白模板 skill
   * @description 生成 skills/<name>/SKILL.md，frontmatter 含 name 与 description（未给则用占位文案）。同名返回 409。
   */
  templateSkillControllerCreate(body: __common__.CreateTemplateSkillDto) {
    const url = "/admin-template/skills"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RTemplateSkillControllerCreate>(config)
  }

  /**
   * @summary 重命名模板 skill
   * @description 整体移动目录，并把模板 opencode.jsonc 中该 skill 的权限规则迁移到新名称，避免残留孤儿规则。
   */
  templateSkillControllerRename(params: types.TemplateSkillControllerRenameParams1) {
    const { name, ...body } = params
    const url = `/admin-template/skills/${name}/rename`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RTemplateSkillControllerRename>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 启用模板 skill
   * @description 移除 permission.skill 下该 skill 的规则。未禁用时幂等成功。
   */
  templateSkillControllerEnable(name: string) {
    const url = `/admin-template/skills/${name}/enable`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RTemplateSkillControllerEnable>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 删除模板 skill
   * @description 删除该 skill 目录及全部内容，并移除模板 opencode.jsonc 中对应的权限规则。
   */
  templateSkillControllerRemove(name: string) {
    const url = `/admin-template/skills/${name}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RTemplateSkillControllerRemove>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 禁用模板 skill
   * @description 在模板 opencode.jsonc 的 permission.skill 下写入 deny 规则，不移动 skill 文件。已禁用时幂等成功。
   */
  templateSkillControllerDisable(name: string) {
    const url = `/admin-template/skills/${name}/disable`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RTemplateSkillControllerDisable>(config)
  }

  /**
   * @summary 把模板配置批量下发到用户 config 目录
   * @description 按文件维度强制覆盖：模板中的 AGENTS.md / opencode.jsonc / userinfo.jsonc 与 skills/**、tools/** 逐文件写入用户 userData/{uid}/config；用户自建且模板中没有的文件保留不动。覆盖前备份到 userData/{uid}/.config-backup/{timestamp}/；userinfo.jsonc 保留用户真实 access_token。不传 userIds 时扫描 userData 下的全部用户目录。下发不重启容器。
   */
  adminBatchControllerSyncConfig(userIds: __common__.BatchSyncDto["userIds"]) {
    const body = { userIds }
    const url = "/admin-template/batch/sync-config"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RAdminBatchControllerSyncConfig>(config)
  }

  /**
   * @summary 读取模板 skill 内某个文件的内容
   */
  templateSkillControllerReadFile(params: types.TemplateSkillControllerReadFileParams) {
    const { name, ...query } = params
    const url = `/admin-template/skills/${name}/files/content?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RTemplateSkillControllerReadFile>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 列出模板 skill 内的文件
   * @description 递归返回该 skill 目录下所有文件与目录的相对路径。
   */
  templateSkillControllerListFiles(name: string) {
    const url = `/admin-template/skills/${name}/files`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RTemplateSkillControllerListFiles>(config)
  }

  /**
   * @summary 写入模板 skill 内某个文件
   * @description 写入 SKILL.md 时会校验 frontmatter（必须含非空 name 与 description），不通过返回 400 且不落盘；其他文件不做校验。
   */
  templateSkillControllerWriteFile(params: types.TemplateSkillControllerWriteFileParams1) {
    const { name, ...body } = params
    const url = `/admin-template/skills/${name}/files/content`
    const config: DocReqConfig = { url, body, method: "put" }
    return this.request<types.RTemplateSkillControllerWriteFile>(config)
  }

  /**
   * @summary 上传文件到模板 skill 目录
   */
  templateSkillControllerUploadFile(params: types.TemplateSkillControllerUploadFileParams) {
    const { name, ...query } = params
    const url = `/admin-template/skills/${name}/files?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RTemplateSkillControllerUploadFile>(config)
  }

  /**
   * @summary 删除模板 skill 内的文件
   * @description 删除 SKILL.md 同样允许，之后该 skill 在列表中标记为不合规。
   */
  templateSkillControllerDeleteFile(params: types.TemplateSkillControllerDeleteFileParams) {
    const { name, ...query } = params
    const url = `/admin-template/skills/${name}/files?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.RTemplateSkillControllerDeleteFile>(config)
  }

  /**
   * @summary 以压缩包导入模板 skill
   * @description 上传 .zip / .rar / .gz / .tar / .tar.gz / .tgz，服务端落 staging → 解压 → 归一化 → 校验 SKILL.md → 整体落位。校验不通过时清除本次全部产物并回滚。包内自带唯一顶层目录时以该目录名为准，否则以包名为准。
   */
  templateSkillControllerImportArchive(body: types.TemplateSkillControllerImportArchiveBody) {
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = "/admin-template/skills/import"
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RTemplateSkillControllerImportArchive>(config)
  }

  /**
   * @summary 批量重启用户容器
   * @description 对目标容器逐个执行重启编排（通知前端 loading → docker restart → 健康等待 → 通知完成），并发上限 5。容器不在运行中（Docker 侧未运行）记 skipped 而非失败。不传 containerIds 与 userIds 时重启全部在库容器。返回逐容器明细。
   */
  adminBatchControllerRestartContainers(params: types.AdminBatchControllerRestartContainersParams1) {
    const { authorization, ...body } = params
    const headers = { authorization }
    const url = "/admin-template/batch/restart-containers"
    const config: DocReqConfig = { url, body, headers, method: "post" }
    return this.request<types.RAdminBatchControllerRestartContainers>(config)
  }
}
export const adminTemplate = new AdminTemplate()
