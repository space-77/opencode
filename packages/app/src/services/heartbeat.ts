/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA DOC2TS                        ##
 * ##                                                           ##
 * ## AUTHOR: space-77                                          ##
 * ## SOURCE: https://github.com/space-77/doc2ts                ##
 * ---------------------------------------------------------------
 */

import type { DocReqConfig } from "doc2ts";
import ApiClient from "./client";
import type { Heartbeat as types, __common__ } from "./types";
/**
 * @name heartbeat
 * @description heartbeat
 */
export default class Heartbeat extends ApiClient {
  /**
   * @summary 更新容器心跳
   * @description Agent 客户端定期调用此接口更新心跳状态，支持长轮询等待任务
   */
  heartbeatUpdate(body: __common__.HeartbeatDto) {
    const config: DocReqConfig = { url: "/heartbeat", body, method: "post" };
    return this.request<types.RHeartbeatUpdate>(config);
  }
}
export const heartbeat = new Heartbeat();
