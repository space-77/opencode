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
import type { Agents as types } from "./types";
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
    const config: DocReqConfig = { url: `/agents/${id}`, method: "get" };
    return this.request<types.RAgentsGet>(config);
  }

  /**
   * @param { AgentType } agentType Agent 类型筛选（cloud 或 local）
   * @summary 获取用户的 Agent 列表
   * @description 返回当前用户的所有 Agent，支持按类型筛选
   */
  agentsList(agentType?: AgentType) {
    const url = `/agents?${this.serialize({ agentType })}`;
    const config: DocReqConfig = { url, method: "get" };
    return this.request<types.RAgentsList>(config);
  }
}
export const agents = new Agents();
