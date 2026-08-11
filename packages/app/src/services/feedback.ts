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
import type { Feedback as types, __common__ } from "./types"
/**
 * @name feedback
 * @description feedback
 */
export default class Feedback extends ApiClient {
  /**
   * @summary 创建反馈
   * @description 支持正向/负向反馈，富文本内容入库前会归一化 MinIO URL
   */
  feedbackControllerCreate(body: __common__.CreateFeedbackDto) {
    const config: DocReqConfig = { url: "/feedback", body, method: "post" }
    return this.request<types.RFeedbackControllerCreate>(config)
  }

  /**
   * @summary 修改反馈
   * @description 可修改类型/富文本/消息列表，content 会重新归一化
   */
  feedbackControllerUpdate(params: types.FeedbackControllerUpdateParams1) {
    const { id, ...body } = params
    const config: DocReqConfig = {
      url: `/feedback/${id}`,
      body,
      method: "put",
    }
    return this.request<types.RFeedbackControllerUpdate>(config)
  }

  /**
   * @param { String } id 反馈 ID (UUID)
   * @summary 删除反馈
   * @description 非管理员只能删除自己的反馈，管理员可删除任意反馈
   */
  feedbackControllerRemove(id: string) {
    const config: DocReqConfig = { url: `/feedback/${id}`, method: "delete" }
    return this.request<types.RFeedbackControllerRemove>(config)
  }

  /**
   * @param { String } id 反馈 ID (UUID)
   * @summary 获取反馈详情
   * @description 返回完整反馈信息，content 中的 MinIO 文件标记会被还原为重新签名的可访问 URL
   */
  feedbackControllerFindOne(id: string) {
    const config: DocReqConfig = { url: `/feedback/${id}`, method: "get" }
    return this.request<types.RFeedbackControllerFindOne>(config)
  }

  /**
   * @summary 分页查询反馈列表
   * @description 非管理员只能查看自己的反馈，管理员可查看全部。列表项不含 messages 字段
   */
  feedbackControllerFindMany(query: types.FeedbackControllerFindManyParams) {
    const url = `/feedback?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RFeedbackControllerFindMany>(config)
  }

  /**
   * @param { File } file 要上传的文件
   * @summary 上传文件到 MinIO
   * @description 将文件上传到配置的 MinIO bucket，返回带默认有效期（1 小时）的签名访问 URL
   */
  feedbackControllerUploadFile(file: File) {
    const contentType = "multipart/form-data"
    const formData = this.formData({ file }, contentType)
    const url = "/feedback/upload"
    const config: DocReqConfig = {
      url,
      formData,
      headers: { "Content-Type": contentType },
      method: "post",
    }
    return this.request<types.RFeedbackControllerUploadFile>(config)
  }
}
export const feedback = new Feedback()
