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
import type { Containers as types, __common__ } from "./types";
/**
 * @name containers
 * @description containers
 */
export default class Containers extends ApiClient {
  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 获取容器详情
   * @description 根据容器 ID 获取详细信息
   */
  containersGet(id: string) {
    const config: DocReqConfig = { url: `/containers/${id}`, method: "get" };
    return this.request<types.RContainersGet>(config);
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 停止容器
   * @description 停止指定的容器实例
   */
  containersStop(id: string) {
    const url = `/containers/${id}/stop`;
    const config: DocReqConfig = { url, method: "post" };
    return this.request<types.RContainersStop>(config);
  }

  /**
   * @param { String } id 容器的唯一标识符 (UUID)
   * @summary 启动容器
   * @description 启动指定的容器实例
   */
  containersStart(id: string) {
    const url = `/containers/${id}/start`;
    const config: DocReqConfig = { url, method: "post" };
    return this.request<types.RContainersStart>(config);
  }

  /**
   * @summary 创建新容器
   * @description 为用户创建一个新的 Agent 容器
   */
  containersCreate(body: __common__.CreateContainerDto) {
    const config: DocReqConfig = { url: "/containers", body, method: "post" };
    return this.request<types.RContainersCreate>(config);
  }
}
export const containers = new Containers();
