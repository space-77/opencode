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
import type { OpencodeVersions as types, __common__ } from "./types"
/**
 * @name opencode-versions
 * @description opencode-versions
 */
export default class OpencodeVersions extends ApiClient {
  /**
   * @summary 查询 opencode 版本清单
   * @description 返回宿主机版本仓库中所有版本，含激活状态、默认状态、基线状态、二进制可用性与灰度摘要。列表以文件系统实际状态对账，二进制缺失的版本标记为不可用。
   */
  opencodeVersionControllerList() {
    const config: DocReqConfig = { url: "/opencode-versions", method: "get" }
    return this.request<types.ROpencodeVersionControllerList>(config)
  }

  /**
   * @summary 上传并导入 opencode 版本
   * @description 接收 opencode 二进制与目标版本号，校验（可执行、版本号一致、架构匹配）通过后落盘到版本仓库。校验失败或版本已存在时拒绝导入并清理临时文件。
   */
  opencodeVersionControllerUpload(body: types.OpencodeVersionControllerUploadBody) {
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = "/opencode-versions/upload"
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.ROpencodeVersionControllerUpload>(config)
  }

  /**
   * @param { String } version 版本号
   * @summary 删除 opencode 版本
   * @description 删除非激活、非默认的版本及其二进制文件。激活版本与全局默认版本不可删除。
   */
  opencodeVersionControllerRemove(version: string) {
    const url = `/opencode-versions/${version}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.ROpencodeVersionControllerRemove>(config)
  }

  /**
   * @summary 修改版本元数据
   * @description 修改版本备注或设置/取消全局默认版本。版本号与二进制内容不可变。
   */
  opencodeVersionControllerUpdate(params: types.OpencodeVersionControllerUpdateParams1) {
    const { version, ...body } = params
    const url = `/opencode-versions/${version}`
    const config: DocReqConfig = { url, body, method: "patch" }
    return this.request<types.ROpencodeVersionControllerUpdate>(config)
  }

  /**
   * @summary 设置灰度规则
   * @description 为指定版本配置灰度规则。whitelist 类型需提供 userIds；percentage 类型需提供 percentage（0-100），命中判定基于用户标识的稳定哈希，同一用户在规则不变时结果恒定。
   */
  opencodeVersionControllerSetGray(body: __common__.SetGrayRuleDto) {
    const url = "/opencode-versions/gray-rules"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.ROpencodeVersionControllerSetGray>(config)
  }

  /**
   * @param { String } version 版本号
   * @summary 查询指定版本的灰度规则
   */
  opencodeVersionControllerGetGray(version: string) {
    const url = `/opencode-versions/gray-rules/${version}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.ROpencodeVersionControllerGetGray>(config)
  }

  /**
   * @summary 诊断 opencode 版本仓库状态
   * @description 返回版本管理是否启用、固定路径文件是否存在、是文件还是目录、当前激活版本，以及无法识别激活版本时的具体原因。用于排查容器挂载失败与「当前为 无」等问题。
   */
  opencodeVersionControllerDiagnose() {
    const url = "/opencode-versions/diagnose"
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.ROpencodeVersionControllerDiagnose>(config)
  }

  /**
   * @param { String } version 目标版本号
   * @summary 激活 opencode 版本
   * @description 校验通过后把 current 软链原子切换到目标版本。已运行容器不受影响，需重启（或下次创建）才会使用新版本。
   */
  opencodeVersionControllerActivate(version: string) {
    const url = `/opencode-versions/${version}/activate`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.ROpencodeVersionControllerActivate>(config)
  }

  /**
   * @summary 回滚到上一个激活版本
   * @description 把 current 软链切回上一次实际激活过的版本，无需重新导入二进制。
   */
  opencodeVersionControllerRollback() {
    const url = "/opencode-versions/rollback"
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.ROpencodeVersionControllerRollback>(config)
  }

  /**
   * @param { String } version 版本号
   * @summary 清除灰度规则
   * @description 清除后该版本不再通过灰度被选中，已有容器不受影响。
   */
  opencodeVersionControllerClearGray(version: string) {
    const url = `/opencode-versions/gray-rules/${version}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.ROpencodeVersionControllerClearGray>(config)
  }

  /**
   * @summary 初始化 opencode 版本分块上传
   * @description 创建分块上传会话，返回 uploadId 用于后续分块上传。用于绕开 Nginx client_max_body_size 限制：约 146MB 的二进制可拆成多个小分块上传（建议每块 5~10MB）。分块临时存放在版本仓库的 .staging 目录，不写入用户工作区。
   */
  opencodeVersionControllerInitChunked(body: __common__.InitChunkedUploadDto) {
    const url = "/opencode-versions/upload/init"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.ROpencodeVersionControllerInitChunked>(config)
  }

  /**
   * @summary 上传 opencode 版本二进制的单个分块
   * @description 上传指定索引的分块数据；同一索引重复上传会覆盖，可用于失败重传。
   */
  opencodeVersionControllerUploadChunk(params: types.OpencodeVersionControllerUploadChunkParams1) {
    const { uploadId, ...body } = params
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = `/opencode-versions/upload/${uploadId}/chunk`
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.ROpencodeVersionControllerUploadChunk>(config)
  }

  /**
   * @param { String } version 目标版本号；省略时使用当前激活版本
   * @summary 批量更新容器 opencode 版本
   * @description 按目标版本（默认当前激活版本）逐个重启容器。单个容器失败不中断整体流程，返回逐容器结果。会中断容器内正在进行的会话，建议先用预览接口确认影响范围。
   */
  opencodeVersionControllerBatchUpdate(version?: string) {
    const body = { version }
    const url = "/opencode-versions/containers/batch-update"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.ROpencodeVersionControllerBatchUpdate>(config)
  }

  /**
   * @param { String } version 目标版本号；省略时使用当前激活版本
   * @summary 预览批量更新影响范围
   * @description 返回将被影响的容器清单及其当前版本与目标版本，不实际重启任何容器。
   */
  opencodeVersionControllerPreviewBatch(version?: string) {
    const body = { version }
    const url = "/opencode-versions/containers/batch-preview"
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.ROpencodeVersionControllerPreviewBatch>(config)
  }

  /**
   * @param { String } uploadId 上传会话 ID
   * @summary 取消分块上传
   * @description 删除该会话已接收的临时分块并使 uploadId 失效。
   */
  opencodeVersionControllerCancelChunked(uploadId: string) {
    const url = `/opencode-versions/upload/${uploadId}`
    const config: DocReqConfig = { url, method: "delete" }
    return this.request<types.ROpencodeVersionControllerCancelChunked>(config)
  }

  /**
   * @summary 修复 current/opencode 被创建成目录的异常
   * @description 若宿主机上 current/opencode 是目录，容器启动会报 "not a directory: Are you trying to mount a directory onto a file" 而完全起不来。本接口删除该异常目录，并用当前激活版本的二进制重新覆盖为文件。若无法确定版本则仅删除目录，容器将回退镜像内置版本。
   */
  opencodeVersionControllerRepairCurrent() {
    const url = "/opencode-versions/repair-current"
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.ROpencodeVersionControllerRepairCurrent>(config)
  }

  /**
   * @param { String } uploadId 上传会话 ID
   * @summary 完成分块上传并导入版本
   * @description 按顺序合并全部分块，执行二进制校验（可执行、版本号与声明一致、架构匹配）后登记版本。校验失败或版本已存在时清理临时文件，版本仓库不残留不可用版本。
   */
  opencodeVersionControllerCompleteChunked(uploadId: string) {
    const url = `/opencode-versions/upload/${uploadId}/complete`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.ROpencodeVersionControllerCompleteChunked>(config)
  }

  /**
   * @summary 更新单个容器的 opencode 版本
   * @description 重启指定容器使其使用目标版本（默认当前激活版本），保留容器身份与数据挂载。会中断容器内正在进行的会话。
   */
  opencodeVersionControllerUpdateContainer(params: types.OpencodeVersionControllerUpdateContainerParams1) {
    const { containerId, ...body } = params
    const url = `/opencode-versions/containers/${containerId}/version`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.ROpencodeVersionControllerUpdateContainer>(config)
  }
}
export const opencodeVersions = new OpencodeVersions()
