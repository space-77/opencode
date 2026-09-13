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
import type { Skills as types } from "./types"
/**
 * @name skills
 * @description skills
 */
export default class Skills extends ApiClient {
  /**
   * @summary 查询当前用户的 skill 列表
   * @description 扫描 userData/{userID}/config/skills 下的直接子目录，返回每个 skill 的名称、描述与启用状态。缺少 SKILL.md 或 frontmatter 不合规的条目仍会返回并带 issue 说明；同名冲突时按目录名字典序取第一个生效。skills 目录不存在时返回空列表。
   */
  skillControllerList() {
    const config: DocReqConfig = { url: "/skills", method: "get" }
    return this.request<types.RSkillControllerList>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 启用 skill
   * @description 移除 opencode.jsonc 中 permission.skill 下该 skill 的规则，使其恢复默认可用。未禁用时幂等成功。
   */
  skillControllerEnable(name: string) {
    const url = `/skills/${name}/enable`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RSkillControllerEnable>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 删除 skill
   * @description 删除该 skill 在 skills 目录下的完整目录及其全部内容，并移除对应的禁用规则避免残留。目录不存在时返回 404。
   */
  skillControllerRemove(name: string) {
    const config: DocReqConfig = { url: `/skills/${name}`, method: "delete" }
    return this.request<types.RSkillControllerRemove>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 禁用 skill
   * @description 在 userData/{userID}/config/opencode.jsonc 的 permission.skill 下写入 deny 规则，不移动 skill 文件。已禁用时幂等成功。配置文件不存在时自动创建；配置文件损坏时返回 400 且不改写。
   */
  skillControllerDisable(name: string) {
    const url = `/skills/${name}/disable`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RSkillControllerDisable>(config)
  }

  /**
   * @param { String } name skill 目录名
   * @summary 校验 skill 是否符合规范
   * @description 按目录名校验 skills 目录下某个 skill：必须含 SKILL.md 且 frontmatter 含非空 name 与 description。校验不通过时删除该 skill 目录（回到本次新增前状态）并返回 400。
   */
  skillControllerValidate(name: string) {
    const url = `/skills/${name}/validate`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RSkillControllerValidate>(config)
  }

  /**
   * @summary 以压缩包新增 skill
   * @description 上传 .zip / .rar / .gz / .tar / .tar.gz / .tgz 压缩包，服务端落 staging → 解压 → 归一化 → 校验 SKILL.md → 整体落位。解压后必须含合规 SKILL.md（frontmatter 含非空 name 与 description），否则清除本次产物并回滚。包内自带唯一顶层目录时以该目录名为准，否则以包名作为 skill 目录名。默认覆盖同名 skill。
   */
  skillControllerImportArchive(body: types.SkillControllerImportArchiveBody) {
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = "/skills/import"
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RSkillControllerImportArchive>(config)
  }
}
export const skills = new Skills()
