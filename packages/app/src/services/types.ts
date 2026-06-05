/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA DOC2TS                        ##
 * ##                                                           ##
 * ## AUTHOR: space-77                                          ##
 * ## SOURCE: https://github.com/space-77/doc2ts                ##
 * ---------------------------------------------------------------
 */

export namespace EnumLists {
  export enum Status {
    "pending" = "pending",
    "running" = "running",
    "stopped" = "stopped",
    "error" = "error",
  }
  export enum AgentType {
    "cloud" = "cloud",
    "local" = "local",
  }
  export enum AccessMode {
    "container_name" = "container_name",
    "ip_port" = "ip_port",
  }
  export enum OperationType {
    "create" = "create",
    "start" = "start",
    "stop" = "stop",
    "delete" = "delete",
  }
}

export namespace __common__ {
  export interface ApiEnvelopeDto {
    /**
     * @example 200
     * @description 业务状态码，200 表示成功，非 200 表示异常
     */
    code: number;
    /**
     * @description 响应数据
     */
    data: object;
    /**
     * @example success
     * @description 提示信息
     */
    message: string;
  }

  export interface ContainerEntity {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 容器唯一标识符 (UUID)
     */
    id: string;
    /**
     * @example user123
     * @description 用户 ID
     */
    userId: string;
    /**
     * @example abc123def456
     * @description Docker 容器 ID
     */
    dockerContainerId: object | null;
    /**
     * @example opencode-user123-cloud
     * @description 容器名称
     */
    containerName: string;
    /**
     * @example running
     * @description 容器状态
     */
    status: EnumLists.Status;
    /**
     * @example opencode
     * @description Agent 名称
     */
    agentName: string;
    /**
     * @example cloud
     * @description Agent 类型
     */
    agentType: EnumLists.AgentType;
    /**
     * @example v1.0.0
     * @description Agent 版本号
     */
    agentVersion: object | null;
    /**
     * @example /workspace
     * @description 工作目录路径
     */
    workDirectory: string;
    /**
     * @example 3000
     * @description 容器内部端口
     */
    containerPort: object | null;
    /**
     * @example 8080
     * @description 宿主机端口
     */
    hostPort: object | null;
    /**
     * @example /api
     * @description 转发路径
     */
    forwardPath: object | null;
    /**
     * @example container_name
     * @description 访问模式
     */
    accessMode: EnumLists.AccessMode;
    /**
     * @example http://localhost:8080
     * @description 连接 URL
     */
    connectionUrl: object | null;
    /**
     * @example 2024-01-15T10:30:00Z
     * @description 最后心跳时间
     */
    heartbeatAt: object | null;
    /**
     * @example 1.0
     * @description CPU 限制
     */
    cpuLimit: object | null;
    /**
     * @example 512M
     * @description 内存限制
     */
    memoryLimit: object | null;
    /**
     * @example Container failed to start
     * @description 错误消息
     */
    errorMessage: object | null;
    /**
     * @description 健康检查失败次数
     */
    healthFailCount: number;
    /**
     * @example 2024-01-15T10:00:00Z
     * @description 创建时间
     */
    createdAt: string;
    /**
     * @example 2024-01-15T10:30:00Z
     * @description 更新时间
     */
    updatedAt: string;
  }

  export interface CreateContainerDto {
    /**
     * @example cloud
     * @description Agent 类型 (Agent Type)
     */
    agentType?: EnumLists.AgentType;
    /**
     * @example opencode
     * @description Agent 名称
     */
    agentName?: string;
  }

  export interface HeartbeatDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @example 5
     * @description 等待时间（秒），用于长轮询
     */
    waitTime?: number;
  }

  export interface ContainerLogsQueryDto {
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
    /**
     * @example 100
     * @description 返回最后 N 行日志，最大 1000
     */
    tail?: number;
    /**
     * @example error
     * @description 日志内容关键字搜索
     */
    keyword?: string;
  }

  export interface MetricsResponseDto {
    /**
     * @example 45.5
     * @description CPU 使用率（百分比）
     */
    cpuUsage: number;
    /**
     * @example [object Object]
     * @description 内存使用情况
     */
    memory: object;
    /**
     * @example [object Object]
     * @description 磁盘使用情况
     */
    disk: object;
    /**
     * @example 5
     * @description 活跃容器数量
     */
    activeContainers: number;
    /**
     * @example 3600
     * @description 系统运行时间（秒）
     */
    uptime: number;
  }

  export interface AuditQueryDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number;
    /**
     * @example 20
     * @description 每页数量，最大 500
     */
    pageSize?: number;
    /**
     * @example user123
     * @description 用户 ID 筛选
     */
    userId?: string;
    /**
     * @example create
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType;
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
  }

  export interface HealthLogQueryDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number;
    /**
     * @example 20
     * @description 每页数量，最大 500
     */
    pageSize?: number;
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 容器 ID 筛选 (UUID)
     */
    containerId?: string;
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
  }

  export interface OperationLogsExportDto {
    /**
* @example id,userId,operationType,operationResult,createdAt
...
* @description CSV 文件内容
*/
    csv: string;
    /**
     * @example operation-logs.csv
     * @description 建议的文件名
     */
    filename: string;
  }

  export interface LogsT {
    /**
     * @example 2024-01-15T10:30:00Z
     * @description 日志时间戳
     */
    timestamp?: string;
    /**
     * @example Application started successfully
     * @description 日志内容
     */
    message?: string;
    /**
     * @example info
     * @description 日志级别
     */
    level?: string;
  }

  export interface ItemsT {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    id?: string;
    /**
     * @example user123
     */
    userId?: string;
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    containerId?: string | null;
    /**
     * @example create
     */
    operationType?: EnumLists.OperationType;
    /**
     * @example success
     */
    operationResult?: string;
    /**
     * @example 192.168.1.1
     */
    ipAddress?: string | null;
    errorMessage?: string | null;
    /**
     * @example 2024-01-15T10:30:00Z
     */
    createdAt?: string;
  }

  export interface ItemsT1 {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    id?: string;
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    containerId?: string;
    /**
     * @example healthy
     */
    status?: string;
    /**
     * @example 150
     */
    responseTime?: number;
    errorMessage?: string | null;
    /**
     * @example 2024-01-15T10:30:00Z
     */
    createdAt?: string;
  }
}

export namespace App {
  export interface AppHelloRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: any | null;
  }

  export interface AppHelloParams {}

  export type RAppHello = Promise<
    [any, App.AppHelloRes["data"], App.AppHelloRes]
  >;
}

export namespace Containers {
  export interface ContainersCreateRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.ContainerEntity;
  }

  export interface ContainersCreateParams {}

  /**
   * @description 容器创建参数
   */
  export interface ContainersCreateBody extends __common__.CreateContainerDto {}

  export interface ContainersStartRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.ContainerEntity;
  }

  export interface ContainersStartParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string;
  }

  export interface ContainersStopRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.ContainerEntity;
  }

  export interface ContainersStopParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string;
  }

  export interface ContainersGetRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.ContainerEntity;
  }

  export interface ContainersGetParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string;
  }

  export type RContainersGet = Promise<
    [any, Containers.ContainersGetRes["data"], Containers.ContainersGetRes]
  >;
  export type RContainersStop = Promise<
    [any, Containers.ContainersStopRes["data"], Containers.ContainersStopRes]
  >;
  export type RContainersStart = Promise<
    [any, Containers.ContainersStartRes["data"], Containers.ContainersStartRes]
  >;
  export type RContainersCreate = Promise<
    [
      any,
      Containers.ContainersCreateRes["data"],
      Containers.ContainersCreateRes
    ]
  >;
}

export namespace Agents {
  export interface AgentsListRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: Array<__common__.ContainerEntity>;
  }

  export interface AgentsListParams {
    /**
     * @description Agent 类型筛选（cloud 或 local）
     */
    agentType?: EnumLists.AgentType;
  }

  export interface AgentsGetRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.ContainerEntity;
  }

  export interface AgentsGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    id: string;
  }

  export type RAgentsGet = Promise<
    [any, Agents.AgentsGetRes["data"], Agents.AgentsGetRes]
  >;
  export type RAgentsList = Promise<
    [any, Agents.AgentsListRes["data"], Agents.AgentsListRes]
  >;
}

export namespace Proxy {
  export interface ProxyWithPathGetRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathPutRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathPostRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathDeleteRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathOptionsRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathHeadRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyWithPathPatchRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyWithPathPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
    /**
     * @description 容器内的目标路径
     */
    path: any;
  }

  export interface ProxyRootGetRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootPutRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootPostRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootDeleteRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootOptionsRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootHeadRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export interface ProxyRootPatchRes {
    /**
     * @example 404
     */
    code: number;
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string;
    data: any | null;
  }

  export interface ProxyRootPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string;
  }

  export type RProxyRootGet = Promise<
    [any, Proxy.ProxyRootGetRes["data"], Proxy.ProxyRootGetRes]
  >;
  export type RProxyRootPut = Promise<
    [any, Proxy.ProxyRootPutRes["data"], Proxy.ProxyRootPutRes]
  >;
  export type RProxyRootPost = Promise<
    [any, Proxy.ProxyRootPostRes["data"], Proxy.ProxyRootPostRes]
  >;
  export type RProxyRootHead = Promise<
    [any, Proxy.ProxyRootHeadRes["data"], Proxy.ProxyRootHeadRes]
  >;
  export type RProxyRootPatch = Promise<
    [any, Proxy.ProxyRootPatchRes["data"], Proxy.ProxyRootPatchRes]
  >;
  export type RProxyRootDelete = Promise<
    [any, Proxy.ProxyRootDeleteRes["data"], Proxy.ProxyRootDeleteRes]
  >;
  export type RProxyWithPathGet = Promise<
    [any, Proxy.ProxyWithPathGetRes["data"], Proxy.ProxyWithPathGetRes]
  >;
  export type RProxyWithPathPut = Promise<
    [any, Proxy.ProxyWithPathPutRes["data"], Proxy.ProxyWithPathPutRes]
  >;
  export type RProxyRootOptions = Promise<
    [any, Proxy.ProxyRootOptionsRes["data"], Proxy.ProxyRootOptionsRes]
  >;
  export type RProxyWithPathPost = Promise<
    [any, Proxy.ProxyWithPathPostRes["data"], Proxy.ProxyWithPathPostRes]
  >;
  export type RProxyWithPathHead = Promise<
    [any, Proxy.ProxyWithPathHeadRes["data"], Proxy.ProxyWithPathHeadRes]
  >;
  export type RProxyWithPathPatch = Promise<
    [any, Proxy.ProxyWithPathPatchRes["data"], Proxy.ProxyWithPathPatchRes]
  >;
  export type RProxyWithPathDelete = Promise<
    [any, Proxy.ProxyWithPathDeleteRes["data"], Proxy.ProxyWithPathDeleteRes]
  >;
  export type RProxyWithPathOptions = Promise<
    [any, Proxy.ProxyWithPathOptionsRes["data"], Proxy.ProxyWithPathOptionsRes]
  >;
}

export namespace Heartbeat {
  export interface HeartbeatUpdateRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: {
      /**
       * @description 是否有待执行任务
       */
      hasTask?: boolean;
      /**
       * @description 任务详情（如果有任务）
       */
      task?: object | null;
    };
  }

  export interface HeartbeatUpdateParams {}

  /**
   * @description 心跳请求参数
   */
  export interface HeartbeatUpdateBody extends __common__.HeartbeatDto {}

  export type RHeartbeatUpdate = Promise<
    [any, Heartbeat.HeartbeatUpdateRes["data"], Heartbeat.HeartbeatUpdateRes]
  >;
}

export namespace Logs {
  export interface ContainerLogsGetRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: {
      /**
       * @description 日志条目列表
       */
      logs?: Array<__common__.LogsT>;
      /**
       * @example 150
       * @description 日志总数
       */
      total?: number;
    };
  }

  export interface ContainerLogsGetParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string;
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
    /**
     * @description 返回最后 N 行日志，最大 1000
     */
    tail?: number;
    /**
     * @description 日志内容关键字搜索
     */
    keyword?: string;
  }

  export type RContainerLogsGet = Promise<
    [any, Logs.ContainerLogsGetRes["data"], Logs.ContainerLogsGetRes]
  >;
}

export namespace Monitoring {
  export interface MonitoringMetricsRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: __common__.MetricsResponseDto;
  }

  export interface MonitoringMetricsParams {}

  export type RMonitoringMetrics = Promise<
    [
      any,
      Monitoring.MonitoringMetricsRes["data"],
      Monitoring.MonitoringMetricsRes
    ]
  >;
}

export namespace Audit {
  export interface AuditListOperationsRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: {
      items?: Array<__common__.ItemsT>;
      /**
       * @example 100
       */
      total?: number;
      /**
       * @example 1
       */
      page?: number;
      /**
       * @example 20
       */
      pageSize?: number;
    };
  }

  export interface AuditListOperationsParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number;
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number;
    /**
     * @description 用户 ID 筛选
     */
    userId?: string;
    /**
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType;
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
  }

  export interface AuditExportOperationsRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: {
      /**
* @example id,userId,operationType,operationResult,createdAt
...
*/
      csv?: string;
      /**
       * @example operation-logs.csv
       */
      filename?: string;
    };
  }

  export interface AuditExportOperationsParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number;
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number;
    /**
     * @description 用户 ID 筛选
     */
    userId?: string;
    /**
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType;
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
  }

  export interface AuditListHealthChecksRes {
    /**
     * @example 200
     */
    code: number;
    /**
     * @example success
     */
    message: string;
    data: {
      items?: Array<__common__.ItemsT1>;
      /**
       * @example 100
       */
      total?: number;
      /**
       * @example 1
       */
      page?: number;
      /**
       * @example 20
       */
      pageSize?: number;
    };
  }

  export interface AuditListHealthChecksParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number;
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number;
    /**
     * @description 容器 ID 筛选 (UUID)
     */
    containerId?: string;
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string;
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string;
  }

  export type RAuditListOperations = Promise<
    [any, Audit.AuditListOperationsRes["data"], Audit.AuditListOperationsRes]
  >;
  export type RAuditExportOperations = Promise<
    [
      any,
      Audit.AuditExportOperationsRes["data"],
      Audit.AuditExportOperationsRes
    ]
  >;
  export type RAuditListHealthChecks = Promise<
    [
      any,
      Audit.AuditListHealthChecksRes["data"],
      Audit.AuditListHealthChecksRes
    ]
  >;
}
