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
import type { Agents as types } from "./types"
/**
 * @name agents
 * @description agents
 */
export default class Agents extends ApiClient {
  /**
   * @param { String } id Agent 的唯一标识符 (UUID)
   * @summary 获取 Agent 详情
   * @description 根据 Agent ID 获取详细信息
   */
  agentsGet(id: string) {
    const config: DocReqConfig = { url: `/agents/${id}`, method: "get" }
    return this.request<types.RAgentsGet>(config)
  }

  /**
   * @summary 获取用户的 Agent 列表
   * @description 返回当前用户的所有 Agent，支持按类型筛选。当 autoCreate=1 时：若用户无 Agent 则自动创建一个 OpenCode 容器；若用户已有处于休眠(STOPPED)或异常(ERROR)状态的容器则自动唤醒后返回。
   */
  agentsList(query: types.AgentsListParams) {
    const url = `/agents?${this.serialize(query)}`
    const config: DocReqConfig = { url, method: "get" }
    return this.request<types.RAgentsList>(config)
  }
}
export const agents = new Agents()
