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
import type { FileUpload as types } from "./types"
/**
 * @name file-upload
 * @description file-upload
 */
export default class FileUpload extends ApiClient {
  /**
   * @summary 单文件直传到工作区
   * @description 上传单个文件到容器对应的工作区目录，支持指定子目录
   */
  fileUpload(params: types.FileUploadParams1) {
    const { id, ...body } = params
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = `/containers/${id}/workspace/upload`
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RFileUpload>(config)
  }

  /**
   * @summary 上传单个分块
   * @description 上传分块数据到指定的上传会话
   */
  fileUploadChunk(params: types.FileUploadChunkParams1) {
    const { id, uploadId, ...body } = params
    const contentType = "multipart/form-data"
    const formData = this.formData(body, contentType)
    const url = `/containers/${id}/workspace/upload/multipart/${uploadId}/chunk`
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RFileUploadChunk>(config)
  }

  /**
   * @summary 完成分块上传
   * @description 合并所有分块为完整文件
   */
  fileUploadComplete({ id, uploadId }: types.FileUploadCompleteParams) {
    const url = `/containers/${id}/workspace/upload/multipart/${uploadId}/complete`
    const config: DocReqConfig = { url, method: "post" }
    return this.request<types.RFileUploadComplete>(config)
  }

  /**
   * @summary 从工作区下载文件
   * @description 下载容器工作区中的文件，文件路径必须以 /workspace 开头。支持两种认证方式：请求头认证（indicatorUserId + x-proxy-signature），或 URL 携带短时签名 token（?token=，由 download-token 接口签发，供 ONLYOFFICE 等无请求头客户端使用）。
   */
  fileUploadDownload(params: types.FileUploadDownloadParams) {
    const { id, ...query } = params
    const url = `/containers/${id}/workspace/upload/download?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.download(config)
  }

  /**
   * @summary 初始化分块上传
   * @description 创建分块上传会话，返回 uploadId 用于后续分块上传
   */
  fileUploadInitMultipart(params: types.FileUploadInitMultipartParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/upload/multipart/init`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RFileUploadInitMultipart>(config)
  }

  /**
   * @summary ONLYOFFICE 在线编辑保存回调
   * @description ONLYOFFICE 文档服务器在用户保存后回调此接口（URL 携带短时 token），从回调体中的 url 下载最新文档并写回工作区。返回 ONLYOFFICE 期望的 { error: 0 }。
   */
  fileUploadControllerOnlyOffice(params: types.FileUploadControllerOnlyOfficeParams1) {
    const { id, token, filePath, ...body } = params
    const url = `/containers/${id}/workspace/upload/callback?${this.serialize({
      token,
      filePath,
    })}`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RFileUploadControllerOnlyOffice>(config)
  }

  /**
   * @summary 签发文件下载（及可选保存回调）短时 token URL
   * @description 校验文件可下载后，返回带短时签名 token 的相对 URL（前端按 BASE_URL 拼接）。mode=edit 时额外返回保存回调 URL，供 ONLYOFFICE 在线编辑写回文件。
   */
  fileUploadControllerIssueDownload(params: types.FileUploadControllerIssueDownloadParams1) {
    const { id, ...body } = params
    const url = `/containers/${id}/workspace/upload/download-token`
    const config: DocReqConfig = { url, body, method: "post" }
    return this.request<types.RFileUploadControllerIssueDownload>(config)
  }
}
export const fileUpload = new FileUpload()
