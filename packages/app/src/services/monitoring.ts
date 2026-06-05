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
import type { Monitoring as types } from "./types";
/**
 * @name monitoring
 * @description monitoring
 */
export default class Monitoring extends ApiClient {
  /**
   * @summary 获取系统监控指标
   * @description 返回系统的 CPU、内存、磁盘使用情况和容器统计信息
   */
  monitoringMetrics() {
    const config: DocReqConfig = { url: "/monitoring/metrics", method: "get" };
    return this.request<types.RMonitoringMetrics>(config);
  }
}
export const monitoring = new Monitoring();
