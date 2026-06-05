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
import type { App as types } from "./types";
/**
 * @name App
 * @description App
 */
export default class App extends ApiClient {
  /**
   * @summary 欢迎页面
   * @description 返回 API 服务的欢迎信息
   */
  appHello() {
    const config: DocReqConfig = { url: "/", method: "get" };
    return this.request<types.RAppHello>(config);
  }
}
export const app = new App();
