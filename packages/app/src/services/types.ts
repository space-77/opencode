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
  export enum OperationResult {
    "success" = "success",
    "failed" = "failed",
  }
  export enum CheckType {
    "container_status" = "container_status",
    "service_health" = "service_health",
  }
  export enum CheckResult {
    "success" = "success",
    "failed" = "failed",
  }
}

export namespace __common__ {
  export interface ApiEnvelopeDto {
    /**
     * @example 200
     * @description 业务状态码，200 表示成功，非 200 表示异常
     */
    code: number
    /**
     * @description 响应数据
     */
    data: object | null
    /**
     * @example success
     * @description 提示信息
     */
    message: string
  }

  export interface ContainerEntity {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 容器唯一标识符 (UUID)
     */
    id: string
    /**
     * @example user123
     * @description 用户 ID
     */
    userId: string
    /**
     * @example abc123def456
     * @description Docker 容器 ID
     */
    dockerContainerId: string | null
    /**
     * @example user123-agent
     * @description 容器名称
     */
    containerName: string
    /**
     * @example running
     * @description 容器状态
     */
    status: EnumLists.Status
    /**
     * @example opencode
     * @description Agent 名称
     */
    agentName: string
    /**
     * @example cloud
     * @description Agent 类型
     */
    agentType: EnumLists.AgentType
    /**
     * @example 1.0.0
     * @description Agent 版本号
     */
    agentVersion: string | null
    /**
     * @example /workspace
     * @description 工作目录路径
     */
    workDirectory: string
    /**
     * @example 5354
     * @description 容器内部端口
     */
    containerPort: number | null
    /**
     * @example 60001
     * @description 宿主机端口
     */
    hostPort: number | null
    /**
     * @example /agent-proxy/123e4567-e89b-12d3-a456-426614174000
     * @description 转发路径
     */
    forwardPath: string | null
    /**
     * @example container_name
     * @description 访问模式
     */
    accessMode: EnumLists.AccessMode
    /**
     * @example http://localhost:3000/agent-proxy/123e4567-e89b-12d3-a456-426614174000
     * @description 连接 URL
     */
    connectionUrl: string | null
    /**
     * @example 2024-01-15T10:30:00.000Z
     * @description 最后心跳时间
     */
    heartbeatAt: string | null
    /**
     * @example 1.0
     * @description CPU 限制
     */
    cpuLimit: string | null
    /**
     * @example 512M
     * @description 内存限制
     */
    memoryLimit: string | null
    /**
     * @example Container failed to start
     * @description 错误消息
     */
    errorMessage: string | null
    /**
     * @description 健康检查失败次数
     */
    healthFailCount: number
    /**
     * @example 2024-01-15T10:00:00.000Z
     * @description 创建时间
     */
    createdAt: string
    /**
     * @example 2024-01-15T10:30:00.000Z
     * @description 更新时间
     */
    updatedAt: string
  }

  export interface CreateContainerDto {
    /**
     * @example cloud
     * @description Agent 类型 (Agent Type)
     */
    agentType?: EnumLists.AgentType
    /**
     * @example opencode
     * @description Agent 名称
     */
    agentName?: string
  }

  export interface CreateWorkspaceFolderDto {
    /**
     * @example my-project
     * @description 工作区子文件夹名称；不传则使用 UUID 自动生成
     */
    folderName?: string
  }

  export interface WorkspaceFolderResponseDto {
    /**
     * @example 550e8400-e29b-41d4-a716-446655440000
     * @description 创建的文件夹名称
     */
    folderName: string
    /**
     * @example /workspace/550e8400-e29b-41d4-a716-446655440000
     * @description 容器内完整路径
     */
    path: string
  }

  export interface ContainerStatsDto {
    /**
     * @example 0.50%
     * @description CPU 使用率
     */
    cpuPercent: string
    /**
     * @example 0.50%
     * @description CPU 总量
     */
    cpuTotal: string
    /**
     * @example 1.0
     * @description CPU 核心数限制
     */
    cpuCores: string
    /**
     * @example 128MiB
     * @description 内存使用量
     */
    memoryUsage: string
    /**
     * @example 0B
     * @description 内存缓存
     */
    memoryCache: string
    /**
     * @example 512MiB
     * @description 内存限制
     */
    memoryLimit: string
    /**
     * @example 0B
     * @description 容器大小
     */
    containerSize: string
    /**
     * @example 0B
     * @description 虚拟大小
     */
    virtualSize: string
  }

  export interface ContainerDetailResponseDto {
    /**
     * @description 容器信息
     */
    container: {
      /**
       * @example 123e4567-e89b-12d3-a456-426614174000
       * @description 容器唯一标识符 (UUID)
       */
      id: string
      /**
       * @example user123
       * @description 用户 ID
       */
      userId: string
      /**
       * @example abc123def456
       * @description Docker 容器 ID
       */
      dockerContainerId: string | null
      /**
       * @example user123-agent
       * @description 容器名称
       */
      containerName: string
      /**
       * @example running
       * @description 容器状态
       */
      status: Status
      /**
       * @example opencode
       * @description Agent 名称
       */
      agentName: string
      /**
       * @example cloud
       * @description Agent 类型
       */
      agentType: AgentType
      /**
       * @example 1.0.0
       * @description Agent 版本号
       */
      agentVersion: string | null
      /**
       * @example /workspace
       * @description 工作目录路径
       */
      workDirectory: string
      /**
       * @example 5354
       * @description 容器内部端口
       */
      containerPort: number | null
      /**
       * @example 60001
       * @description 宿主机端口
       */
      hostPort: number | null
      /**
       * @example /agent-proxy/123e4567-e89b-12d3-a456-426614174000
       * @description 转发路径
       */
      forwardPath: string | null
      /**
       * @example container_name
       * @description 访问模式
       */
      accessMode: AccessMode
      /**
       * @example http://localhost:3000/agent-proxy/123e4567-e89b-12d3-a456-426614174000
       * @description 连接 URL
       */
      connectionUrl: string | null
      /**
       * @example 2024-01-15T10:30:00.000Z
       * @description 最后心跳时间
       */
      heartbeatAt: string | null
      /**
       * @example 1.0
       * @description CPU 限制
       */
      cpuLimit: string | null
      /**
       * @example 512M
       * @description 内存限制
       */
      memoryLimit: string | null
      /**
       * @example Container failed to start
       * @description 错误消息
       */
      errorMessage: string | null
      /**
       * @description 健康检查失败次数
       */
      healthFailCount: number
      /**
       * @example 2024-01-15T10:00:00.000Z
       * @description 创建时间
       */
      createdAt: string
      /**
       * @example 2024-01-15T10:30:00.000Z
       * @description 更新时间
       */
      updatedAt: string
    }
    /**
     * @description 容器运行时统计（仅 running 状态时有值）
     */
    stats: {
      /**
       * @example 0.50%
       * @description CPU 使用率
       */
      cpuPercent: string
      /**
       * @example 0.50%
       * @description CPU 总量
       */
      cpuTotal: string
      /**
       * @example 1.0
       * @description CPU 核心数限制
       */
      cpuCores: string
      /**
       * @example 128MiB
       * @description 内存使用量
       */
      memoryUsage: string
      /**
       * @example 0B
       * @description 内存缓存
       */
      memoryCache: string
      /**
       * @example 512MiB
       * @description 内存限制
       */
      memoryLimit: string
      /**
       * @example 0B
       * @description 容器大小
       */
      containerSize: string
      /**
       * @example 0B
       * @description 虚拟大小
       */
      virtualSize: string
    } | null
  }

  export interface HeartbeatDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @example 5
     * @description 等待时间（秒），用于长轮询
     */
    waitTime?: number
  }

  export interface HeartbeatResponseDto {
    /**
     * @example 2024-01-15T10:30:00.000Z
     * @description 更新后的心跳时间
     */
    heartbeatAt: string
  }

  export interface ContainerLogsQueryDto {
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
    /**
     * @example 100
     * @description 返回最后 N 行日志，最大 1000
     */
    tail?: number
    /**
     * @example error
     * @description 日志内容关键字搜索
     */
    keyword?: string
  }

  export interface ContainerStatusMetricsDto {
    /**
     * @example 10
     * @description 容器总数
     */
    total: number
    /**
     * @example 5
     * @description 运行中容器数
     */
    running: number
    /**
     * @example 3
     * @description 已停止容器数
     */
    stopped: number
    /**
     * @example 1
     * @description 错误状态容器数
     */
    error: number
    /**
     * @example 1
     * @description 创建中容器数
     */
    pending: number
  }

  export interface ResourceMetricsDto {
    /**
     * @example 1073741824
     * @description 用户数据目录占用字节数
     */
    userDataBytes: number
  }

  export interface UserMetricsDto {
    /**
     * @example 3
     * @description 活跃用户数
     */
    active: number
    /**
     * @example 8
     * @description 总用户数
     */
    total: number
  }

  export interface SystemMetricsResponseDto {
    /**
     * @description 容器状态统计
     */
    containers: {
      /**
       * @example 10
       * @description 容器总数
       */
      total: number
      /**
       * @example 5
       * @description 运行中容器数
       */
      running: number
      /**
       * @example 3
       * @description 已停止容器数
       */
      stopped: number
      /**
       * @example 1
       * @description 错误状态容器数
       */
      error: number
      /**
       * @example 1
       * @description 创建中容器数
       */
      pending: number
    }
    /**
     * @description 资源占用统计
     */
    resources: {
      /**
       * @example 1073741824
       * @description 用户数据目录占用字节数
       */
      userDataBytes: number
    }
    /**
     * @description 用户统计
     */
    users: {
      /**
       * @example 3
       * @description 活跃用户数
       */
      active: number
      /**
       * @example 8
       * @description 总用户数
       */
      total: number
    }
  }

  export interface AuditQueryDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @example 20
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @example user123
     * @description 用户 ID 筛选
     */
    userId?: string
    /**
     * @example create
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
  }

  export interface HealthLogQueryDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @example 20
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 容器 ID 筛选 (UUID)
     */
    containerId?: string
    /**
     * @example 2024-01-15T00:00:00Z
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @example 2024-01-15T23:59:59Z
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
  }

  export interface OperationLogsExportDto {
    /**
* @example id,userId,operationType,operationResult,createdAt
...
* @description CSV 文件内容
*/
    csv: string
    /**
     * @example operation-logs.csv
     * @description 建议的文件名
     */
    filename: string
  }

  export interface OperationLogEntity {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 日志唯一标识符 (UUID)
     */
    id: string
    /**
     * @example user123
     * @description 用户 ID
     */
    userId: string
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 关联容器 ID
     */
    containerId: string | null
    /**
     * @example create
     * @description 操作类型
     */
    operationType: EnumLists.OperationType
    /**
     * @example success
     * @description 操作结果
     */
    operationResult: EnumLists.OperationResult
    /**
     * @example 192.168.1.1
     * @description 客户端 IP 地址
     */
    ipAddress: string | null
    /**
     * @description 错误消息
     */
    errorMessage: string | null
    /**
     * @example 2024-01-15T10:30:00.000Z
     * @description 创建时间
     */
    createdAt: string
  }

  export interface PaginatedOperationLogEntity {
    /**
     * @description 数据列表
     */
    items: Array<__common__.OperationLogEntity>
    /**
     * @example 100
     * @description 总记录数
     */
    total: number
    /**
     * @example 1
     * @description 当前页码
     */
    page: number
    /**
     * @example 20
     * @description 每页数量
     */
    pageSize: number
  }

  export interface HealthCheckLogEntity {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 日志唯一标识符 (UUID)
     */
    id: string
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 容器 ID
     */
    containerId: string
    /**
     * @example container_status
     * @description 检查类型
     */
    checkType: EnumLists.CheckType
    /**
     * @example success
     * @description 检查结果
     */
    checkResult: EnumLists.CheckResult
    /**
     * @example 150
     * @description 响应时间（毫秒）
     */
    responseTime: number | null
    /**
     * @description 错误消息
     */
    errorMessage: string | null
    /**
     * @example 2024-01-15T10:30:00.000Z
     * @description 创建时间
     */
    createdAt: string
  }

  export interface PaginatedHealthCheckLogEntity {
    /**
     * @description 数据列表
     */
    items: Array<__common__.HealthCheckLogEntity>
    /**
     * @example 100
     * @description 总记录数
     */
    total: number
    /**
     * @example 1
     * @description 当前页码
     */
    page: number
    /**
     * @example 20
     * @description 每页数量
     */
    pageSize: number
  }

  export interface UploadFileDto {
    /**
     * @example subdir/nested
     * @description 目标子目录路径，相对于 /workspace，不指定则上传到根目录。支持传入 /workspace 或其子路径
     */
    targetDir?: string
  }

  export interface UploadFileResponseDto {
    /**
     * @example document.pdf
     * @description 文件名
     */
    filename: string
    /**
     * @example /workspace/uploads/document.pdf
     * @description 文件在工作区内的完整路径
     */
    path: string
  }

  export interface InitMultipartUploadDto {
    /**
     * @example large-file.zip
     * @description 文件名
     */
    filename: string
    /**
     * @example 104857600
     * @description 文件总大小（字节）
     */
    totalSize: number
    /**
     * @example 10
     * @description 总分块数
     */
    totalChunks: number
    /**
     * @example uploads
     * @description 目标子目录路径，相对于 /workspace，不指定则上传到根目录。支持传入 /workspace 或其子路径
     */
    targetDir?: string
  }

  export interface InitUploadResponseDto {
    /**
     * @example 550e8400-e29b-41d4-a716-446655440000
     * @description 上传会话 ID
     */
    uploadId: string
    /**
     * @example 2026-06-15T10:00:00.000Z
     * @description 会话过期时间（ISO 8601 格式）
     */
    expiresAt: string
  }

  export interface UploadChunkDto {
    /**
     * @description 分块索引（从 0 开始）
     */
    chunkIndex: number
  }

  export interface UploadChunkResponseDto {
    /**
     * @example 3
     * @description 已接收的分块数
     */
    receivedChunks: number
    /**
     * @example 10
     * @description 总分块数
     */
    totalChunks: number
  }

  export interface CompleteUploadResponseDto {
    /**
     * @example large-file.zip
     * @description 文件名
     */
    filename: string
    /**
     * @example /workspace/uploads/large-file.zip
     * @description 文件在工作区内的完整路径
     */
    path: string
  }

  export interface LogsT {
    /**
     * @example 2024-01-15T10:30:00Z
     * @description 日志时间戳
     */
    timestamp?: string
    /**
     * @example Application started successfully
     * @description 日志内容
     */
    message?: string
    /**
     * @example info
     * @description 日志级别
     */
    level?: string
  }
}

export namespace App {
  export interface AppHelloRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    /**
     * @example Hello World!
     */
    data: string
  }

  export interface AppHelloParams {}

  export type RAppHello = Promise<[any, App.AppHelloRes["data"], App.AppHelloRes]>
}

export namespace Containers {
  export interface ContainersCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerEntity
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
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerEntity
  }

  export interface ContainersStartParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface ContainersStopRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerEntity
  }

  export interface ContainersStopParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface ContainersGetRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerDetailResponseDto
  }

  export interface ContainersGetParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface ContainersControllerCreateWorkspaceFolderRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFolderResponseDto
  }

  export interface ContainersControllerCreateWorkspaceFolderParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 可选的文件夹名称
   */
  export interface ContainersControllerCreateWorkspaceFolderBody extends __common__.CreateWorkspaceFolderDto {}

  export interface ContainersControllerGetAvailableWorkspaceRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFolderResponseDto
  }

  export interface ContainersControllerGetAvailableWorkspaceParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export type RContainersGet = Promise<[any, Containers.ContainersGetRes["data"], Containers.ContainersGetRes]>
  export type RContainersStop = Promise<[any, Containers.ContainersStopRes["data"], Containers.ContainersStopRes]>
  export type RContainersStart = Promise<[any, Containers.ContainersStartRes["data"], Containers.ContainersStartRes]>
  export type RContainersCreate = Promise<[any, Containers.ContainersCreateRes["data"], Containers.ContainersCreateRes]>
  export type ContainersControllerCreateWorkspaceFolderParams1 = ContainersControllerCreateWorkspaceFolderParams &
    __common__.CreateWorkspaceFolderDto

  export type RContainersControllerCreateWorkspaceFolder = Promise<
    [
      any,
      Containers.ContainersControllerCreateWorkspaceFolderRes["data"],
      Containers.ContainersControllerCreateWorkspaceFolderRes,
    ]
  >
  export type RContainersControllerGetAvailableWorkspace = Promise<
    [
      any,
      Containers.ContainersControllerGetAvailableWorkspaceRes["data"],
      Containers.ContainersControllerGetAvailableWorkspaceRes,
    ]
  >
}

export namespace Agents {
  export interface AgentsListRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: Array<__common__.ContainerEntity>
  }

  export interface AgentsListParams {
    /**
     * @description Agent 类型筛选（cloud 或 local）
     */
    agentType?: EnumLists.AgentType
  }

  export interface AgentsGetRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerDetailResponseDto
  }

  export interface AgentsGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    id: string
  }

  export type RAgentsGet = Promise<[any, Agents.AgentsGetRes["data"], Agents.AgentsGetRes]>
  export type RAgentsList = Promise<[any, Agents.AgentsListRes["data"], Agents.AgentsListRes]>
}

export namespace AgentProxy {
  export interface ProxyControllerWithPathGetRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathPutRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathPostRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathDeleteRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathOptionsRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathHeadRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerWithPathPatchRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerWithPathPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyControllerRootGetRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootPutRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootPostRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootDeleteRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootOptionsRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootHeadRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyControllerRootPatchRes {
    /**
     * @example 404
     */
    code: number
    /**
     * @example Agent 不存在或容器未运行
     */
    message: string
    data: null | null
  }

  export interface ProxyControllerRootPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export type RProxyControllerRootGet = Promise<
    [any, AgentProxy.ProxyControllerRootGetRes["data"], AgentProxy.ProxyControllerRootGetRes]
  >
  export type RProxyControllerRootPut = Promise<
    [any, AgentProxy.ProxyControllerRootPutRes["data"], AgentProxy.ProxyControllerRootPutRes]
  >
  export type RProxyControllerRootPost = Promise<
    [any, AgentProxy.ProxyControllerRootPostRes["data"], AgentProxy.ProxyControllerRootPostRes]
  >
  export type RProxyControllerRootHead = Promise<
    [any, AgentProxy.ProxyControllerRootHeadRes["data"], AgentProxy.ProxyControllerRootHeadRes]
  >
  export type RProxyControllerRootPatch = Promise<
    [any, AgentProxy.ProxyControllerRootPatchRes["data"], AgentProxy.ProxyControllerRootPatchRes]
  >
  export type RProxyControllerRootDelete = Promise<
    [any, AgentProxy.ProxyControllerRootDeleteRes["data"], AgentProxy.ProxyControllerRootDeleteRes]
  >
  export type RProxyControllerWithPathGet = Promise<
    [any, AgentProxy.ProxyControllerWithPathGetRes["data"], AgentProxy.ProxyControllerWithPathGetRes]
  >
  export type RProxyControllerWithPathPut = Promise<
    [any, AgentProxy.ProxyControllerWithPathPutRes["data"], AgentProxy.ProxyControllerWithPathPutRes]
  >
  export type RProxyControllerRootOptions = Promise<
    [any, AgentProxy.ProxyControllerRootOptionsRes["data"], AgentProxy.ProxyControllerRootOptionsRes]
  >
  export type RProxyControllerWithPathPost = Promise<
    [any, AgentProxy.ProxyControllerWithPathPostRes["data"], AgentProxy.ProxyControllerWithPathPostRes]
  >
  export type RProxyControllerWithPathHead = Promise<
    [any, AgentProxy.ProxyControllerWithPathHeadRes["data"], AgentProxy.ProxyControllerWithPathHeadRes]
  >
  export type RProxyControllerWithPathPatch = Promise<
    [any, AgentProxy.ProxyControllerWithPathPatchRes["data"], AgentProxy.ProxyControllerWithPathPatchRes]
  >
  export type RProxyControllerWithPathDelete = Promise<
    [any, AgentProxy.ProxyControllerWithPathDeleteRes["data"], AgentProxy.ProxyControllerWithPathDeleteRes]
  >
  export type RProxyControllerWithPathOptions = Promise<
    [any, AgentProxy.ProxyControllerWithPathOptionsRes["data"], AgentProxy.ProxyControllerWithPathOptionsRes]
  >
}

export namespace Heartbeat {
  export interface HeartbeatUpdateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.HeartbeatResponseDto
  }

  export interface HeartbeatUpdateParams {}

  /**
   * @description 心跳请求参数
   */
  export interface HeartbeatUpdateBody extends __common__.HeartbeatDto {}

  export type RHeartbeatUpdate = Promise<[any, Heartbeat.HeartbeatUpdateRes["data"], Heartbeat.HeartbeatUpdateRes]>
}

export namespace Logs {
  export interface ContainerLogsGetRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: {
      /**
       * @description 日志条目列表
       */
      logs?: Array<__common__.LogsT>
      /**
       * @example 150
       * @description 日志总数
       */
      total?: number
    }
  }

  export interface ContainerLogsGetParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
    /**
     * @description 返回最后 N 行日志，最大 1000
     */
    tail?: number
    /**
     * @description 日志内容关键字搜索
     */
    keyword?: string
  }

  export type RContainerLogsGet = Promise<[any, Logs.ContainerLogsGetRes["data"], Logs.ContainerLogsGetRes]>
}

export namespace Monitoring {
  export interface MonitoringMetricsRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.SystemMetricsResponseDto
  }

  export interface MonitoringMetricsParams {}

  export type RMonitoringMetrics = Promise<
    [any, Monitoring.MonitoringMetricsRes["data"], Monitoring.MonitoringMetricsRes]
  >
}

export namespace Audit {
  export interface AuditListOperationsRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedOperationLogEntity
  }

  export interface AuditListOperationsParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @description 用户 ID 筛选
     */
    userId?: string
    /**
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
  }

  export interface AuditExportOperationsRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.OperationLogsExportDto
  }

  export interface AuditExportOperationsParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @description 用户 ID 筛选
     */
    userId?: string
    /**
     * @description 操作类型筛选
     */
    operationType?: EnumLists.OperationType
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
  }

  export interface AuditListHealthChecksRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedHealthCheckLogEntity
  }

  export interface AuditListHealthChecksParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @description 容器 ID 筛选 (UUID)
     */
    containerId?: string
    /**
     * @description 开始时间 (ISO 8601 格式)
     */
    since?: string
    /**
     * @description 结束时间 (ISO 8601 格式)
     */
    until?: string
  }

  export type RAuditListOperations = Promise<[any, Audit.AuditListOperationsRes["data"], Audit.AuditListOperationsRes]>
  export type RAuditExportOperations = Promise<
    [any, Audit.AuditExportOperationsRes["data"], Audit.AuditExportOperationsRes]
  >
  export type RAuditListHealthChecks = Promise<
    [any, Audit.AuditListHealthChecksRes["data"], Audit.AuditListHealthChecksRes]
  >
}

export namespace FileUpload {
  export interface FileUploadControllerRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.UploadFileResponseDto
  }

  export interface FileUploadControllerParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface FileUploadControllerBody {
    /**
     * @description 要上传的文件
     */
    file: File
    /**
     * @example uploads/documents
     * @description 目标子目录（相对于 /workspace），可选
     */
    targetDir?: string
  }

  export interface FileUploadControllerInitMultipartRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.InitUploadResponseDto
  }

  export interface FileUploadControllerInitMultipartParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 分块上传初始化参数
   */
  export interface FileUploadControllerInitMultipartBody extends __common__.InitMultipartUploadDto {}

  export interface FileUploadControllerChunkRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.UploadChunkResponseDto
  }

  export interface FileUploadControllerChunkParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 上传会话 ID
     */
    uploadId: string
  }

  export interface FileUploadControllerChunkBody {
    /**
     * @description 分块数据
     */
    chunk: File
    /**
     * @description 分块索引（从 0 开始）
     */
    chunkIndex: number
  }

  export interface FileUploadControllerCompleteRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.CompleteUploadResponseDto
  }

  export interface FileUploadControllerCompleteParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 上传会话 ID
     */
    uploadId: string
  }

  export interface FileUploadControllerDownloadRes {
    /**
     * @example 400
     */
    code: number
    /**
     * @example 请求参数错误或路径非法
     */
    message: string
    data: null | null
  }

  export interface FileUploadControllerDownloadParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 要下载的文件路径，必须以 /workspace 开头
     */
    filePath: string
  }

  export type FileUploadControllerParams1 = FileUploadControllerParams & FileUploadControllerBody

  export type RFileUploadController = Promise<
    [any, FileUpload.FileUploadControllerRes["data"], FileUpload.FileUploadControllerRes]
  >
  export type FileUploadControllerChunkParams1 = FileUploadControllerChunkParams & FileUploadControllerChunkBody

  export type RFileUploadControllerChunk = Promise<
    [any, FileUpload.FileUploadControllerChunkRes["data"], FileUpload.FileUploadControllerChunkRes]
  >
  export type RFileUploadControllerComplete = Promise<
    [any, FileUpload.FileUploadControllerCompleteRes["data"], FileUpload.FileUploadControllerCompleteRes]
  >
  export type FileUploadControllerInitMultipartParams1 = FileUploadControllerInitMultipartParams &
    __common__.InitMultipartUploadDto

  export type RFileUploadControllerInitMultipart = Promise<
    [any, FileUpload.FileUploadControllerInitMultipartRes["data"], FileUpload.FileUploadControllerInitMultipartRes]
  >
}
