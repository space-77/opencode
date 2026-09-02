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
    "destroyed" = "destroyed",
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
    "restart" = "restart",
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
  export enum Type {
    "positive" = "positive",
    "negative" = "negative",
  }
  export enum Type1 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
  }
  export enum Source {
    "human" = "human",
    "agent" = "agent",
  }
  export enum Type2 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
  }
  export enum Type3 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
  }
  export enum SortBy {
    "hitCount" = "hitCount",
    "createdAt" = "createdAt",
  }
  export enum SortOrder {
    "asc" = "asc",
    "desc" = "desc",
  }
  export enum Type4 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
  }
  export enum Type5 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
  }
  export enum Type6 {
    "npm" = "npm",
    "pip" = "pip",
    "linux" = "linux",
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
     * @example 张三
     * @description 用户名称
     */
    userName: string
    /**
     * @example nick
     * @description 用户昵称
     */
    nickName: string
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
     * @example /workspace/default
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
       * @example 张三
       * @description 用户名称
       */
      userName: string
      /**
       * @example nick
       * @description 用户昵称
       */
      nickName: string
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
       * @example /workspace/default
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

  export interface QueryContainersDto {
    /**
     * @example 1
     * @description 页码（从 1 开始）
     */
    page?: number
    /**
     * @example 20
     * @description 每页条数（最大 100）
     */
    pageSize?: number
    /**
     * @description 按容器状态过滤
     */
    status?: EnumLists.Status
    /**
     * @example dev
     * @description 按 agentName 模糊匹配（大小写不敏感）
     */
    keyword?: string
  }

  export interface PaginatedContainersResponseDto {
    /**
     * @description 容器列表
     */
    items: Array<__common__.ContainerEntity>
    /**
     * @example 42
     * @description 符合条件的总数
     */
    total: number
    /**
     * @example 1
     * @description 当前页码
     */
    page: number
    /**
     * @example 20
     * @description 每页条数
     */
    pageSize: number
  }

  export interface UpdateContainerDto {
    /**
     * @example my-dev-agent
     * @description Agent 名称（同一 userId + agentType 下唯一）
     */
    agentName?: string
    /**
     * @example 4
     * @description CPU 限制（如 "2"、"4"）
     */
    cpuLimit?: string
    /**
     * @example 4g
     * @description 内存限制（如 "2g"、"512m"）
     */
    memoryLimit?: string
    /**
     * @example /workspace/project-x
     * @description 工作目录路径（容器内绝对路径）
     */
    workDirectory?: string
    /**
     * @description 当容器处于 RUNNING 状态时，修改 cpuLimit/memoryLimit 后是否立即重启生效（默认 false 仅写入 DB）
     */
    restartIfRunning?: boolean
  }

  export interface ContainerIdResponseDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 被操作的容器 ID
     */
    id: string
  }

  export interface Object {}

  export interface ProjectResponseDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 项目唯一标识符 (UUID)
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
    containerId: string
    /**
     * @example /workspace/default/my-project
     * @description 项目工作树路径
     */
    worktree: string
    /**
     * @example git
     * @description 版本控制类型
     */
    vcs: string | null
    /**
     * @example my-project
     * @description 项目名称
     */
    name: string | null
    /**
     * @description 项目图标 (JSON 对象)
     */
    icon: object | null
    /**
     * @description 项目命令 (JSON 对象)
     */
    commands: object | null
    /**
     * @description 项目时间信息 (JSON 对象: { created, updated, initialized? })
     */
    time: object
    /**
     * @description 沙箱列表
     */
    sandboxes: Array<string>
    /**
     * @description 关联的会话 ID 列表
     */
    sessionIds: Array<string>
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

  export interface ProjectDetailResponseDto {
    /**
     * @description 项目元数据
     */
    project: {
      /**
       * @example 123e4567-e89b-12d3-a456-426614174000
       * @description 项目唯一标识符 (UUID)
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
      containerId: string
      /**
       * @example /workspace/default/my-project
       * @description 项目工作树路径
       */
      worktree: string
      /**
       * @example git
       * @description 版本控制类型
       */
      vcs: string | null
      /**
       * @example my-project
       * @description 项目名称
       */
      name: string | null
      /**
       * @description 项目图标 (JSON 对象)
       */
      icon: object | null
      /**
       * @description 项目命令 (JSON 对象)
       */
      commands: object | null
      /**
       * @description 项目时间信息 (JSON 对象: { created, updated, initialized? })
       */
      time: object
      /**
       * @description 沙箱列表
       */
      sandboxes: Array<string>
      /**
       * @description 关联的会话 ID 列表
       */
      sessionIds: Array<string>
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
     * @description 容器会话历史数据 ({ data: Session.Info[], cursor: { next?, previous? } })
     */
    sessions: object
    /**
     * @description 容器会话调用错误说明（null 表示成功）
     */
    sessionError: string | null
  }

  export interface ProjectTimeDto {
    /**
     * @example 1700000000000
     * @description 创建时间戳（毫秒）
     */
    created: number
    /**
     * @example 1700000000000
     * @description 更新时间戳（毫秒）
     */
    updated: number
    /**
     * @example 1700000000000
     * @description 初始化时间戳（毫秒）
     */
    initialized?: number
  }

  export interface CreateProjectDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 关联容器 ID
     */
    containerId: string
    /**
     * @example /workspace/default/my-project
     * @description 项目工作树路径
     */
    worktree: string
    /**
     * @example git
     * @description 版本控制类型
     */
    vcs?: string
    /**
     * @example my-project
     * @description 项目名称
     */
    name?: string
    /**
     * @description 项目图标 ({ url?, override?, color? })
     */
    icon?: object
    /**
     * @description 项目命令 ({ start? })
     */
    commands?: object
    /**
     * @description 项目时间信息
     */
    time: {
      /**
       * @example 1700000000000
       * @description 创建时间戳（毫秒）
       */
      created: number
      /**
       * @example 1700000000000
       * @description 更新时间戳（毫秒）
       */
      updated: number
      /**
       * @example 1700000000000
       * @description 初始化时间戳（毫秒）
       */
      initialized?: number
    }
    /**
     * @description 沙箱列表
     */
    sandboxes?: Array<string>
    /**
     * @description 关联的会话 ID 列表
     */
    sessionIds?: Array<string>
  }

  export interface UpdateProjectDto {
    /**
     * @example git
     * @description 版本控制类型
     */
    vcs?: string
    /**
     * @example my-project
     * @description 项目名称
     */
    name?: string
    /**
     * @description 项目图标 ({ url?, override?, color? })
     */
    icon?: object
    /**
     * @description 项目命令 ({ start? })
     */
    commands?: object
    /**
     * @description 项目时间信息
     */
    time?: {
      /**
       * @example 1700000000000
       * @description 创建时间戳（毫秒）
       */
      created: number
      /**
       * @example 1700000000000
       * @description 更新时间戳（毫秒）
       */
      updated: number
      /**
       * @example 1700000000000
       * @description 初始化时间戳（毫秒）
       */
      initialized?: number
    }
    /**
     * @description 沙箱列表
     */
    sandboxes?: Array<string>
    /**
     * @description 关联的会话 ID 列表
     */
    sessionIds?: Array<string>
  }

  export interface QueryProjectsDto {
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
     * @description 按容器 ID 过滤
     */
    containerId?: string
    /**
     * @example my-app
     * @description 按项目名称模糊匹配（大小写不敏感）
     */
    keyword?: string
  }

  export interface PaginatedProjectResponseDto {
    /**
     * @description 数据列表
     */
    items: Array<__common__.ProjectResponseDto>
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
     * @example https://testai.maxrocky.com/filedown/maximum-ai/feedback/user123/1-x.png?X-Amz-...
     * @description 上传后的 MinIO 签名访问 URL（默认 1 小时有效）
     */
    url: string
    /**
     * @example feedback/user123/1786437212589-x.png
     * @description MinIO 对象 key
     */
    objectKey: string
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

  export interface DownloadTokenDto {
    /**
     * @example /workspace/uploads/document.pdf
     * @description 要下载的文件路径，必须以 /workspace 开头
     */
    filePath: string
    /**
     * @example true
     * @description 是否为在线编辑申请（附带保存回调 token），默认 false 仅预览
     */
    mode?: string
  }

  export interface DownloadTokenResponseDto {
    /**
     * @example /containers/:id/workspace/upload/download?filePath=/workspace/a.docx&token=xxx
     * @description 带短时 token 的下载 URL（相对路径，前端需拼接 BASE_URL）
     */
    downloadUrl: string
    /**
     * @example /containers/:id/workspace/upload/callback?filePath=/workspace/a.docx&token=xxx
     * @description 带短时 token 的保存回调 URL（仅编辑模式返回，相对路径，前端需拼接 BASE_URL）
     */
    callbackUrl?: string
  }

  export interface OnlyOfficeCallbackDto {
    /**
     * @example 2
     * @description ONLYOFFICE 回调状态：1 就绪/2 保存中/3 出错/4 无变化/6 编辑中/7 强制保存
     */
    status: number
    /**
     * @description 文档服务器上最新文档的临时下载地址（保存时提供）
     */
    url?: string
    /**
     * @description 文档唯一 key
     */
    key?: string
    /**
     * @description 编辑用户列表
     */
    users?: Array<string>
  }

  export interface ConvertMarkdownToWordDto {
    /**
     * @example /workspace/default/docs/text.md
     * @description 要转换的 Markdown 文件路径，必须以 /workspace/ 开头且以 .md 结尾
     */
    filePath: string
  }

  export interface ConvertMarkdownToWordResponseDto {
    /**
     * @example /workspace/default/temp/a1b2c3d4e5f6.docx
     * @description 转换后的 Word 文件路径（/workspace 开头，可直接用于下载接口）
     */
    path: string
  }

  export interface CreateFolderDto {
    /**
     * @example default/a/b/c
     * @description 要创建的文件夹路径，相对于 /workspace。路径中不存在的层级会自动递归创建；已存在时幂等成功。支持传入 /workspace 或其子路径
     */
    folderPath: string
  }

  export interface CreateFolderResponseDto {
    /**
     * @example /workspace/default/a/b/c
     * @description 创建后的文件夹在工作区内的完整路径（以 /workspace 开头）
     */
    path: string
  }

  export interface CreateFileDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 要创建的文件路径，必须以 /workspace/ 开头（容器工作区路径，映射到宿主机 userData/{userId}/workspace）
     */
    filePath: string
    /**
* @example # 标题
正文
* @description 文件初始内容，缺省为空字符串
*/
    content?: string
    /**
     * @description 文件已存在时是否覆盖，默认 false（不覆盖，返回 409）
     */
    overwrite?: boolean
  }

  export interface UpdateFileDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 要修改的文件路径，必须以 /workspace/ 开头（容器工作区路径，映射到宿主机 userData/{userId}/workspace）
     */
    filePath: string
    /**
     * @example 全新内容
     * @description 目标内容。不传 startLine/endLine 时为全文覆盖；传行号时替换闭区间 [startLine, endLine] 内的行，空串表示删除该行范围
     */
    content: string
    /**
     * @example 2
     * @description 起始行号（从 1 开始），与 endLine 组成闭区间替换范围
     */
    startLine?: number
    /**
     * @example 3
     * @description 结束行号（从 1 开始，含），最大允许 总行数 + 1（末尾追加）
     */
    endLine?: number
  }

  export interface RenameFileDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 要重命名的文件或目录路径，必须以 /workspace/ 开头
     */
    filePath: string
    /**
     * @example readme.md
     * @description 新文件名（纯文件名，不含路径分隔符 / \ .. 及空字节）
     */
    newFilename: string
    /**
     * @description 目标已存在时是否覆盖，默认 false（返回 409）
     */
    overwrite?: boolean
  }

  export interface MoveFileDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 要移动的文件或目录路径，必须以 /workspace/ 开头
     */
    filePath: string
    /**
     * @example /workspace/default/archive
     * @description 目标目录路径，必须以 /workspace/ 开头；不存在时递归创建，文件/目录保留原名移入
     */
    targetDir: string
    /**
     * @description 目标位置已存在同名时是否覆盖，默认 false（返回 409）
     */
    overwrite?: boolean
  }

  export interface WorkspaceFilePathResponseDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 文件在工作区内的完整路径
     */
    path: string
  }

  export interface WorkspaceFileContentResponseDto {
    /**
     * @example /workspace/default/project/note.md
     * @description 文件在工作区内的完整路径
     */
    path: string
    /**
* @example # 标题
正文
* @description 文件内容（UTF-8 文本）
*/
    content: string
  }

  export interface CreateFeedbackDto {
    /**
     * @example positive
     * @description 反馈类型：positive（功能很赞）/ negative（功能有问题）
     */
    type: EnumLists.Type
    /**
     * @example <p>功能很赞</p>
     * @description 富文本内容，入库前会将 MinIO 签名 URL 归一化为标记存储
     */
    content: string
    /**
     * @example [{"question":"q","answer":"a"}]
     * @description 消息列表 JSON 字符串，格式 { question: string; answer: string }[]
     */
    messages?: string
  }

  export interface UpdateFeedbackDto {
    /**
     * @example negative
     * @description 反馈类型：positive（功能很赞）/ negative（功能有问题）
     */
    type?: EnumLists.Type
    /**
     * @example <p>功能有问题</p>
     * @description 富文本内容，入库前会将 MinIO 签名 URL 归一化为标记存储
     */
    content?: string
    /**
     * @example [{"question":"q","answer":"a"}]
     * @description 消息列表 JSON 字符串，格式 { question: string; answer: string }[]
     */
    messages?: string
  }

  export interface QueryFeedbackDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @example 10
     * @description 每页数量，最大 100
     */
    pageSize?: number
    /**
     * @example positive
     * @description 反馈类型过滤：positive / negative
     */
    type?: EnumLists.Type
  }

  export interface FeedbackResponseDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 反馈唯一标识符 (UUID)
     */
    id: string
    /**
     * @example user123
     * @description 用户 ID
     */
    userId: string
    /**
     * @example 张三
     * @description 用户名称
     */
    userName: string
    /**
     * @example nick
     * @description 用户昵称
     */
    nickName: string
    /**
     * @example positive
     * @description 反馈类型
     */
    type: EnumLists.Type
    /**
     * @description 富文本内容（详情接口已将 MinIO 标记还原为签名 URL；列表接口为归一化存储内容）
     */
    content: string
    /**
     * @description 消息列表 JSON 字符串，格式 { question: string; answer: string }[]
     */
    messages: string | null
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

  export interface FeedbackListItemDto {
    /**
     * @example 123e4567-e89b-12d3-a456-426614174000
     * @description 反馈唯一标识符 (UUID)
     */
    id: string
    /**
     * @example user123
     * @description 用户 ID
     */
    userId: string
    /**
     * @example 张三
     * @description 用户名称
     */
    userName: string
    /**
     * @example nick
     * @description 用户昵称
     */
    nickName: string
    /**
     * @example positive
     * @description 反馈类型
     */
    type: EnumLists.Type
    /**
     * @description 富文本内容（归一化存储内容）
     */
    content: string
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

  export interface PaginatedFeedbackListItemDto {
    /**
     * @description 数据列表
     */
    items: Array<__common__.FeedbackListItemDto>
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

  export interface WriteAgentsMdDto {
    /**
* @example # System Prompt
You are an opencode agent...
* @description AGENTS.md 文件内容（全量覆盖写入）
*/
    content: string
  }

  export interface AgentsMdResponseDto {
    /**
     * @example AGENTS.md
     * @description 文件名（固定 AGENTS.md）
     */
    path: string
    /**
* @example # System Prompt
...
* @description 文件内容（UTF-8 文本）
*/
    content: string
    /**
     * @example 2026-08-18T10:30:00.000Z
     * @description 最后修改时间（ISO 8601），文件不存在时为 null
     */
    lastModified: string | null
    /**
     * @example 1024
     * @description 文件字节数
     */
    size: number
  }

  export interface ConfigFileMetaDto {
    /**
     * @example opencode.jsonc
     * @description 文件名（纯文件名，不含路径）
     */
    name: string
    /**
     * @example 1024
     * @description 文件大小（字节数）
     */
    size: number
    /**
     * @example 2026-08-18T10:30:00.000Z
     * @description 最后修改时间（ISO 8601）
     */
    lastModified: string | null
  }

  export interface ConfigFileContentDto {
    /**
     * @example opencode.jsonc
     * @description 文件名（纯文件名，不含路径）
     */
    name: string
    /**
* @example {
  "theme": "dark"
}
* @description 文件内容（UTF-8 文本；userinfo.jsonc 中 access_token 字段会被脱敏为 ***）
*/
    content: string
    /**
     * @example 2026-08-18T10:30:00.000Z
     * @description 最后修改时间（ISO 8601）
     */
    lastModified: string | null
    /**
     * @example 1024
     * @description 文件大小（字节数）
     */
    size: number
  }

  export interface WriteConfigFileDto {
    /**
     * @example opencode.jsonc
     * @description 文件名（纯文件名，不含路径分隔符）
     */
    fileName: string
    /**
* @example {
  "theme": "dark"
}
* @description 文件内容（UTF-8 文本）
*/
    content: string
    /**
     * @description 文件已存在时是否覆盖，默认 false（返回 409）
     */
    overwrite?: boolean
    /**
     * @example true
     * @description 是否校验 JSON/JSONC 合法性（仅对 .json / .jsonc 文件生效），默认 true
     */
    validateJsonc?: boolean
  }

  export interface CreateDependencyRequestDto {
    /**
     * @example pip
     * @description 依赖类型：npm / pip / linux
     */
    type: EnumLists.Type1
    /**
     * @example pandas
     * @description 依赖包名称
     */
    name: string
    /**
     * @example 2.2.0
     * @description 依赖版本；留空表示不限版本
     */
    version?: string
    /**
     * @example human
     * @description 来源类型：human（人工登记，默认）/ agent（容器内 opencode 上报）
     */
    source?: EnumLists.Source
    /**
     * @example pip install 失败：内网镜像源无此包
     * @description 提交说明
     */
    remark?: string
  }

  export interface UpdateDependencyRequestDto {
    /**
     * @example pip
     * @description 依赖类型：npm / pip / linux
     */
    type?: EnumLists.Type2
    /**
     * @example pandas
     * @description 依赖包名称
     */
    name?: string
    /**
     * @example 2.2.0
     * @description 依赖版本；传空串表示清除版本约束
     */
    version?: string | null
    /**
     * @example 更新说明
     * @description 提交说明；传 null 表示清除说明
     */
    remark?: string | null
  }

  export interface CollectDependencyRequestDto {
    /**
     * @example true
     * @description 是否已收集：true 写入 collected_at 为当前时间，false 清空 collected_at
     */
    collected: boolean
  }

  export interface QueryDependencyRequestsDto {
    /**
     * @example 1
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @example 10
     * @description 每页数量，上限 100
     */
    pageSize?: number
    /**
     * @example pip
     * @description 依赖类型过滤：npm / pip / linux
     */
    type?: EnumLists.Type3
    /**
     * @example agent
     * @description 来源类型过滤：human / agent
     */
    source?: EnumLists.Source
    /**
     * @description 收集状态过滤：true / false
     */
    collected?: boolean
    /**
     * @example pan
     * @description 包名称关键词模糊匹配
     */
    keyword?: string
    /**
     * @example hitCount
     * @description 排序字段：hitCount（命中次数）/ createdAt（提交时间）
     */
    sortBy?: EnumLists.SortBy
    /**
     * @example desc
     * @description 排序方向：asc / desc，默认 desc
     */
    sortOrder?: EnumLists.SortOrder
  }

  export interface DependencyRequestResponseDto {
    /**
     * @description 依赖需求唯一标识符 (UUID)
     */
    id: string
    /**
     * @example pip
     * @description 依赖类型
     */
    type: EnumLists.Type4
    /**
     * @example pandas
     * @description 依赖包名称
     */
    name: string
    /**
     * @example 2.2.0
     * @description 依赖版本
     */
    version: string | null
    /**
     * @example agent
     * @description 来源类型
     */
    source: EnumLists.Source
    /**
     * @example user123
     * @description 提交人用户 ID
     */
    userId: string
    /**
     * @example 张三
     * @description 提交人名称
     */
    userName: string
    /**
     * @example nick
     * @description 提交人昵称
     */
    nickName: string
    /**
     * @description 提交说明
     */
    remark: string | null
    /**
     * @example 3
     * @description 上报命中次数
     */
    hitCount: number
    /**
     * @description 是否已收集
     */
    collected: boolean
    /**
     * @description 收集时间
     */
    collectedAt: string | null
    /**
     * @description 创建时间
     */
    createdAt: string
    /**
     * @description 更新时间
     */
    updatedAt: string
  }

  export interface DependencyRequestListItemDto {
    /**
     * @description 依赖需求唯一标识符 (UUID)
     */
    id: string
    /**
     * @example pip
     * @description 依赖类型
     */
    type: EnumLists.Type5
    /**
     * @example pandas
     * @description 依赖包名称
     */
    name: string
    /**
     * @example 2.2.0
     * @description 依赖版本
     */
    version: string | null
    /**
     * @example agent
     * @description 来源类型
     */
    source: EnumLists.Source
    /**
     * @example user123
     * @description 提交人用户 ID
     */
    userId: string
    /**
     * @example 张三
     * @description 提交人名称
     */
    userName: string
    /**
     * @example nick
     * @description 提交人昵称
     */
    nickName: string
    /**
     * @description 提交说明
     */
    remark: string | null
    /**
     * @example 3
     * @description 上报命中次数
     */
    hitCount: number
    /**
     * @description 是否已收集
     */
    collected: boolean
    /**
     * @description 收集时间
     */
    collectedAt: string | null
    /**
     * @description 创建时间
     */
    createdAt: string
    /**
     * @description 更新时间
     */
    updatedAt: string
  }

  export interface PaginatedDependencyRequestListItemDto {
    /**
     * @description 数据列表
     */
    items: Array<__common__.DependencyRequestListItemDto>
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

  export type RSecondaryPathControllerForwardRoot = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWith = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootPut = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithPut = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootPost = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootHead = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithPost = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithHead = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootPatch = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithPatch = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootDelete = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithDelete = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardRootOptions = Promise<[any, unknown]>
  export type RSecondaryPathControllerForwardWithOptions = Promise<[any, unknown]>
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
  export interface ContainersControllerListRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedContainersResponseDto
  }

  export interface ContainersControllerListParams {
    /**
     * @description 页码（从 1 开始）
     */
    page?: number
    /**
     * @description 每页条数（最大 100）
     */
    pageSize?: number
    /**
     * @description 按容器状态过滤
     */
    status?: EnumLists.Status
    /**
     * @description 按 agentName 模糊匹配（大小写不敏感）
     */
    keyword?: string
  }

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

  export interface ContainersControllerDeleteRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ContainerIdResponseDto
  }

  export interface ContainersControllerDeleteParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface ContainersControllerUpdateRes {
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

  export interface ContainersControllerUpdateParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 需要修改的字段（仅非 undefined 字段生效）
   */
  export interface ContainersControllerUpdateBody extends __common__.UpdateContainerDto {}

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

  export interface ContainersControllerRestartRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: Object
  }

  export interface ContainersControllerRestartParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    authorization: string
  }

  export interface ContainersControllerHotReloadRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: Object
  }

  export interface ContainersControllerHotReloadParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    authorization: string
  }

  export interface ContainersCreateWorkspaceFolderRes {
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

  export interface ContainersCreateWorkspaceFolderParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 可选的文件夹名称
   */
  export interface ContainersCreateWorkspaceFolderBody extends __common__.CreateWorkspaceFolderDto {}

  export interface ContainersGetAvailableWorkspaceRes {
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

  export interface ContainersGetAvailableWorkspaceParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export type RContainersGet = Promise<[any, Containers.ContainersGetRes["data"], Containers.ContainersGetRes]>
  export type RContainersStop = Promise<[any, Containers.ContainersStopRes["data"], Containers.ContainersStopRes]>
  export type RContainersStart = Promise<[any, Containers.ContainersStartRes["data"], Containers.ContainersStartRes]>
  export type RContainersCreate = Promise<[any, Containers.ContainersCreateRes["data"], Containers.ContainersCreateRes]>
  export type RContainersControllerList = Promise<
    [any, Containers.ContainersControllerListRes["data"], Containers.ContainersControllerListRes]
  >
  export type RContainersControllerDelete = Promise<
    [any, Containers.ContainersControllerDeleteRes["data"], Containers.ContainersControllerDeleteRes]
  >
  export type ContainersControllerUpdateParams1 = ContainersControllerUpdateParams & __common__.UpdateContainerDto

  export type RContainersControllerUpdate = Promise<
    [any, Containers.ContainersControllerUpdateRes["data"], Containers.ContainersControllerUpdateRes]
  >
  export type RContainersControllerRestart = Promise<
    [any, Containers.ContainersControllerRestartRes["data"], Containers.ContainersControllerRestartRes]
  >
  export type RContainersControllerHotReload = Promise<
    [any, Containers.ContainersControllerHotReloadRes["data"], Containers.ContainersControllerHotReloadRes]
  >
  export type ContainersCreateWorkspaceFolderParams1 = ContainersCreateWorkspaceFolderParams &
    __common__.CreateWorkspaceFolderDto

  export type RContainersCreateWorkspaceFolder = Promise<
    [any, Containers.ContainersCreateWorkspaceFolderRes["data"], Containers.ContainersCreateWorkspaceFolderRes]
  >
  export type RContainersGetAvailableWorkspace = Promise<
    [any, Containers.ContainersGetAvailableWorkspaceRes["data"], Containers.ContainersGetAvailableWorkspaceRes]
  >
}

export namespace Projects {
  export interface ProjectsControllerListRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedProjectResponseDto
  }

  export interface ProjectsControllerListParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，最大 500
     */
    pageSize?: number
    /**
     * @description 按容器 ID 过滤
     */
    containerId?: string
    /**
     * @description 按项目名称模糊匹配（大小写不敏感）
     */
    keyword?: string
  }

  export interface ProjectsControllerCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ProjectResponseDto
  }

  export interface ProjectsControllerCreateParams {}

  /**
   * @description 项目创建参数
   */
  export interface ProjectsControllerCreateBody extends __common__.CreateProjectDto {}

  export interface ProjectsControllerDetailRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ProjectDetailResponseDto
  }

  export interface ProjectsControllerDetailParams {
    /**
     * @description 项目 ID
     */
    id: string
  }

  export interface ProjectsControllerRemoveRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: { id?: string }
  }

  export interface ProjectsControllerRemoveParams {
    /**
     * @description 项目 ID
     */
    id: string
  }

  export interface ProjectsControllerUpdateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ProjectResponseDto
  }

  export interface ProjectsControllerUpdateParams {
    /**
     * @description 项目 ID
     */
    id: string
  }

  /**
   * @description 项目更新参数
   */
  export interface ProjectsControllerUpdateBody extends __common__.UpdateProjectDto {}

  export type RProjectsControllerList = Promise<
    [any, Projects.ProjectsControllerListRes["data"], Projects.ProjectsControllerListRes]
  >
  export type RProjectsControllerCreate = Promise<
    [any, Projects.ProjectsControllerCreateRes["data"], Projects.ProjectsControllerCreateRes]
  >
  export type RProjectsControllerDetail = Promise<
    [any, Projects.ProjectsControllerDetailRes["data"], Projects.ProjectsControllerDetailRes]
  >
  export type RProjectsControllerRemove = Promise<
    [any, Projects.ProjectsControllerRemoveRes["data"], Projects.ProjectsControllerRemoveRes]
  >
  export type ProjectsControllerUpdateParams1 = ProjectsControllerUpdateParams & __common__.UpdateProjectDto

  export type RProjectsControllerUpdate = Promise<
    [any, Projects.ProjectsControllerUpdateRes["data"], Projects.ProjectsControllerUpdateRes]
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
    /**
     * @description 当无可用 Agent 时自动创建容器，或唤醒已休眠/异常容器（0 或 1，默认 0）
     */
    autoCreate?: string
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
  export interface ProxyWithPathGetRes {
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

  export interface ProxyWithPathGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathPutRes {
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

  export interface ProxyWithPathPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathPostRes {
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

  export interface ProxyWithPathPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathDeleteRes {
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

  export interface ProxyWithPathDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathOptionsRes {
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

  export interface ProxyWithPathOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathHeadRes {
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

  export interface ProxyWithPathHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyWithPathPatchRes {
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

  export interface ProxyWithPathPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
    /**
     * @description 容器内的目标路径
     */
    path: any
  }

  export interface ProxyRootGetRes {
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

  export interface ProxyRootGetParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootPutRes {
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

  export interface ProxyRootPutParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootPostRes {
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

  export interface ProxyRootPostParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootDeleteRes {
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

  export interface ProxyRootDeleteParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootOptionsRes {
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

  export interface ProxyRootOptionsParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootHeadRes {
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

  export interface ProxyRootHeadParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export interface ProxyRootPatchRes {
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

  export interface ProxyRootPatchParams {
    /**
     * @description Agent 的唯一标识符 (UUID)
     */
    agentId: string
  }

  export type RProxyRootGet = Promise<[any, AgentProxy.ProxyRootGetRes["data"], AgentProxy.ProxyRootGetRes]>
  export type RProxyRootPut = Promise<[any, AgentProxy.ProxyRootPutRes["data"], AgentProxy.ProxyRootPutRes]>
  export type RProxyRootPost = Promise<[any, AgentProxy.ProxyRootPostRes["data"], AgentProxy.ProxyRootPostRes]>
  export type RProxyRootHead = Promise<[any, AgentProxy.ProxyRootHeadRes["data"], AgentProxy.ProxyRootHeadRes]>
  export type RProxyRootPatch = Promise<[any, AgentProxy.ProxyRootPatchRes["data"], AgentProxy.ProxyRootPatchRes]>
  export type RProxyRootDelete = Promise<[any, AgentProxy.ProxyRootDeleteRes["data"], AgentProxy.ProxyRootDeleteRes]>
  export type RProxyWithPathGet = Promise<[any, AgentProxy.ProxyWithPathGetRes["data"], AgentProxy.ProxyWithPathGetRes]>
  export type RProxyWithPathPut = Promise<[any, AgentProxy.ProxyWithPathPutRes["data"], AgentProxy.ProxyWithPathPutRes]>
  export type RProxyRootOptions = Promise<[any, AgentProxy.ProxyRootOptionsRes["data"], AgentProxy.ProxyRootOptionsRes]>
  export type RProxyWithPathPost = Promise<
    [any, AgentProxy.ProxyWithPathPostRes["data"], AgentProxy.ProxyWithPathPostRes]
  >
  export type RProxyWithPathHead = Promise<
    [any, AgentProxy.ProxyWithPathHeadRes["data"], AgentProxy.ProxyWithPathHeadRes]
  >
  export type RProxyWithPathPatch = Promise<
    [any, AgentProxy.ProxyWithPathPatchRes["data"], AgentProxy.ProxyWithPathPatchRes]
  >
  export type RProxyWithPathDelete = Promise<
    [any, AgentProxy.ProxyWithPathDeleteRes["data"], AgentProxy.ProxyWithPathDeleteRes]
  >
  export type RProxyWithPathOptions = Promise<
    [any, AgentProxy.ProxyWithPathOptionsRes["data"], AgentProxy.ProxyWithPathOptionsRes]
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
  export interface FileUploadRes {
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

  export interface FileUploadParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface FileUploadBody {
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

  export interface FileUploadControllerConvertMarkdownRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ConvertMarkdownToWordResponseDto
  }

  export interface FileUploadControllerConvertMarkdownParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface FileUploadControllerConvertMarkdownBody extends __common__.ConvertMarkdownToWordDto {}

  export interface FileUploadInitMultipartRes {
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

  export interface FileUploadInitMultipartParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 分块上传初始化参数
   */
  export interface FileUploadInitMultipartBody extends __common__.InitMultipartUploadDto {}

  export interface FileUploadChunkRes {
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

  export interface FileUploadChunkParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 上传会话 ID
     */
    uploadId: string
  }

  export interface FileUploadChunkBody {
    /**
     * @description 分块数据
     */
    chunk: File
    /**
     * @description 分块索引（从 0 开始）
     */
    chunkIndex: number
  }

  export interface FileUploadCompleteRes {
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

  export interface FileUploadCompleteParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 上传会话 ID
     */
    uploadId: string
  }

  export interface FileUploadDownloadRes {
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

  export interface FileUploadDownloadParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 要下载的文件路径，必须以 /workspace 开头
     */
    filePath: string
    /**
     * @description 可选：download-token 接口签发的短时访问 token
     */
    token?: string
  }

  export interface FileUploadControllerIssueDownloadRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.DownloadTokenResponseDto
  }

  export interface FileUploadControllerIssueDownloadParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface FileUploadControllerIssueDownloadBody extends __common__.DownloadTokenDto {}

  export interface FileUploadControllerOnlyOfficeRes {
    /**
     * @example 401
     */
    code: number
    /**
     * @example token 无效或已过期
     */
    message: string
    data: null | null
  }

  export interface FileUploadControllerOnlyOfficeParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 要写回的文件路径，必须以 /workspace 开头
     */
    filePath: string
    /**
     * @description download-token 接口签发的保存回调 token
     */
    token: string
  }

  export interface FileUploadControllerOnlyOfficeBody extends __common__.OnlyOfficeCallbackDto {}

  export interface WorkspaceFolderControllerCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.CreateFolderResponseDto
  }

  export interface WorkspaceFolderControllerCreateParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  /**
   * @description 要创建的文件夹路径（相对 /workspace）
   */
  export interface WorkspaceFolderControllerCreateBody extends __common__.CreateFolderDto {}

  export type FileUploadParams1 = FileUploadParams & FileUploadBody

  export type RFileUpload = Promise<[any, FileUpload.FileUploadRes["data"], FileUpload.FileUploadRes]>
  export type FileUploadChunkParams1 = FileUploadChunkParams & FileUploadChunkBody

  export type RFileUploadChunk = Promise<[any, FileUpload.FileUploadChunkRes["data"], FileUpload.FileUploadChunkRes]>
  export type RFileUploadComplete = Promise<
    [any, FileUpload.FileUploadCompleteRes["data"], FileUpload.FileUploadCompleteRes]
  >
  export type FileUploadInitMultipartParams1 = FileUploadInitMultipartParams & __common__.InitMultipartUploadDto

  export type RFileUploadInitMultipart = Promise<
    [any, FileUpload.FileUploadInitMultipartRes["data"], FileUpload.FileUploadInitMultipartRes]
  >
  export type FileUploadControllerOnlyOfficeParams1 = FileUploadControllerOnlyOfficeParams &
    __common__.OnlyOfficeCallbackDto

  export type RFileUploadControllerOnlyOffice = Promise<
    [any, FileUpload.FileUploadControllerOnlyOfficeRes["data"], FileUpload.FileUploadControllerOnlyOfficeRes]
  >
  export type WorkspaceFolderControllerCreateParams1 = WorkspaceFolderControllerCreateParams &
    __common__.CreateFolderDto

  export type RWorkspaceFolderControllerCreate = Promise<
    [any, FileUpload.WorkspaceFolderControllerCreateRes["data"], FileUpload.WorkspaceFolderControllerCreateRes]
  >
  export type FileUploadControllerIssueDownloadParams1 = FileUploadControllerIssueDownloadParams &
    __common__.DownloadTokenDto

  export type RFileUploadControllerIssueDownload = Promise<
    [any, FileUpload.FileUploadControllerIssueDownloadRes["data"], FileUpload.FileUploadControllerIssueDownloadRes]
  >
  export type FileUploadControllerConvertMarkdownParams1 = FileUploadControllerConvertMarkdownParams &
    __common__.ConvertMarkdownToWordDto

  export type RFileUploadControllerConvertMarkdown = Promise<
    [any, FileUpload.FileUploadControllerConvertMarkdownRes["data"], FileUpload.FileUploadControllerConvertMarkdownRes]
  >
}

export namespace WorkspaceFile {
  export interface WorkspaceFileControllerGetContentRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFileContentResponseDto
  }

  export interface WorkspaceFileControllerGetContentParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 要读取的文件路径，必须以 /workspace 开头
     */
    filePath: string
  }

  export interface WorkspaceFileControllerCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFilePathResponseDto
  }

  export interface WorkspaceFileControllerCreateParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface WorkspaceFileControllerCreateBody extends __common__.CreateFileDto {}

  export interface WorkspaceFileControllerDeleteRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFilePathResponseDto
  }

  export interface WorkspaceFileControllerDeleteParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
    /**
     * @description 要删除的文件路径，必须以 /workspace 开头
     */
    filePath: string
    /**
     * @description 是否递归删除目录及其全部内容，默认 false（目录返回 400）
     */
    recursive?: boolean
  }

  export interface WorkspaceFileControllerUpdateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFilePathResponseDto
  }

  export interface WorkspaceFileControllerUpdateParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface WorkspaceFileControllerUpdateBody extends __common__.UpdateFileDto {}

  export interface WorkspaceFileControllerRenameRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFilePathResponseDto
  }

  export interface WorkspaceFileControllerRenameParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface WorkspaceFileControllerRenameBody extends __common__.RenameFileDto {}

  export interface WorkspaceFileControllerMoveRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.WorkspaceFilePathResponseDto
  }

  export interface WorkspaceFileControllerMoveParams {
    /**
     * @description 容器的唯一标识符 (UUID)
     */
    id: string
  }

  export interface WorkspaceFileControllerMoveBody extends __common__.MoveFileDto {}

  export type WorkspaceFileControllerMoveParams1 = WorkspaceFileControllerMoveParams & __common__.MoveFileDto

  export type RWorkspaceFileControllerMove = Promise<
    [any, WorkspaceFile.WorkspaceFileControllerMoveRes["data"], WorkspaceFile.WorkspaceFileControllerMoveRes]
  >
  export type WorkspaceFileControllerCreateParams1 = WorkspaceFileControllerCreateParams & __common__.CreateFileDto

  export type RWorkspaceFileControllerCreate = Promise<
    [any, WorkspaceFile.WorkspaceFileControllerCreateRes["data"], WorkspaceFile.WorkspaceFileControllerCreateRes]
  >
  export type RWorkspaceFileControllerDelete = Promise<
    [any, WorkspaceFile.WorkspaceFileControllerDeleteRes["data"], WorkspaceFile.WorkspaceFileControllerDeleteRes]
  >
  export type WorkspaceFileControllerUpdateParams1 = WorkspaceFileControllerUpdateParams & __common__.UpdateFileDto

  export type RWorkspaceFileControllerUpdate = Promise<
    [any, WorkspaceFile.WorkspaceFileControllerUpdateRes["data"], WorkspaceFile.WorkspaceFileControllerUpdateRes]
  >
  export type WorkspaceFileControllerRenameParams1 = WorkspaceFileControllerRenameParams & __common__.RenameFileDto

  export type RWorkspaceFileControllerRename = Promise<
    [any, WorkspaceFile.WorkspaceFileControllerRenameRes["data"], WorkspaceFile.WorkspaceFileControllerRenameRes]
  >
  export type RWorkspaceFileControllerGetContent = Promise<
    [
      any,
      WorkspaceFile.WorkspaceFileControllerGetContentRes["data"],
      WorkspaceFile.WorkspaceFileControllerGetContentRes,
    ]
  >
}

export namespace Feedback {
  export interface FeedbackControllerFindManyRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedFeedbackListItemDto
  }

  export interface FeedbackControllerFindManyParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，最大 100
     */
    pageSize?: number
    /**
     * @description 反馈类型过滤：positive / negative
     */
    type?: EnumLists.Type
  }

  export interface FeedbackControllerCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.FeedbackResponseDto
  }

  export interface FeedbackControllerCreateParams {}

  export interface FeedbackControllerCreateBody extends __common__.CreateFeedbackDto {}

  export interface FeedbackControllerFindOneRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.FeedbackResponseDto
  }

  export interface FeedbackControllerFindOneParams {
    /**
     * @description 反馈 ID (UUID)
     */
    id: string
  }

  export interface FeedbackControllerUpdateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.FeedbackResponseDto
  }

  export interface FeedbackControllerUpdateParams {
    /**
     * @description 反馈 ID (UUID)
     */
    id: string
  }

  export interface FeedbackControllerUpdateBody extends __common__.UpdateFeedbackDto {}

  export interface FeedbackControllerRemoveRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: any | null
  }

  export interface FeedbackControllerRemoveParams {
    /**
     * @description 反馈 ID (UUID)
     */
    id: string
  }

  export interface FeedbackControllerUploadFileRes {
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

  export interface FeedbackControllerUploadFileParams {}

  export interface FeedbackControllerUploadFileBody {
    /**
     * @description 要上传的文件
     */
    file: File
  }

  export type RFeedbackControllerCreate = Promise<
    [any, Feedback.FeedbackControllerCreateRes["data"], Feedback.FeedbackControllerCreateRes]
  >
  export type FeedbackControllerUpdateParams1 = FeedbackControllerUpdateParams & __common__.UpdateFeedbackDto

  export type RFeedbackControllerUpdate = Promise<
    [any, Feedback.FeedbackControllerUpdateRes["data"], Feedback.FeedbackControllerUpdateRes]
  >
  export type RFeedbackControllerRemove = Promise<
    [any, Feedback.FeedbackControllerRemoveRes["data"], Feedback.FeedbackControllerRemoveRes]
  >
  export type RFeedbackControllerFindOne = Promise<
    [any, Feedback.FeedbackControllerFindOneRes["data"], Feedback.FeedbackControllerFindOneRes]
  >
  export type RFeedbackControllerFindMany = Promise<
    [any, Feedback.FeedbackControllerFindManyRes["data"], Feedback.FeedbackControllerFindManyRes]
  >
  export type RFeedbackControllerUploadFile = Promise<
    [any, Feedback.FeedbackControllerUploadFileRes["data"], Feedback.FeedbackControllerUploadFileRes]
  >
}

export namespace SecondaryPath {
  export interface SecondaryPathControllerForwardRootParams {}

  export interface SecondaryPathControllerForwardRootPutParams {}

  export interface SecondaryPathControllerForwardRootPostParams {}

  export interface SecondaryPathControllerForwardRootDeleteParams {}

  export interface SecondaryPathControllerForwardRootOptionsParams {}

  export interface SecondaryPathControllerForwardRootHeadParams {}

  export interface SecondaryPathControllerForwardRootPatchParams {}

  export interface SecondaryPathControllerForwardWithParams {}

  export interface SecondaryPathControllerForwardWithPutParams {}

  export interface SecondaryPathControllerForwardWithPostParams {}

  export interface SecondaryPathControllerForwardWithDeleteParams {}

  export interface SecondaryPathControllerForwardWithOptionsParams {}

  export interface SecondaryPathControllerForwardWithHeadParams {}

  export interface SecondaryPathControllerForwardWithPatchParams {}
}

export namespace ContainerConfig {
  export interface ContainerConfigControllerGetAgentsRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.AgentsMdResponseDto
  }

  export interface ContainerConfigControllerGetAgentsParams {
    /**
     * @description 容器 ID (UUID)
     */
    id: string
  }

  export interface ContainerConfigControllerWriteAgentsRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.AgentsMdResponseDto
  }

  export interface ContainerConfigControllerWriteAgentsParams {
    /**
     * @description 容器 ID (UUID)
     */
    id: string
  }

  /**
   * @description AGENTS.md 内容（全量覆盖）
   */
  export interface ContainerConfigControllerWriteAgentsBody extends __common__.WriteAgentsMdDto {}

  export interface ContainerConfigControllerGetFilesRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: Array<__common__.ConfigFileMetaDto>
  }

  export interface ContainerConfigControllerGetFilesParams {
    /**
     * @description 容器 ID (UUID)
     */
    id: string
    /**
     * @description 可选；传入则读取单个文件内容，不传则列出所有文件
     */
    fileName?: string
  }

  export interface ContainerConfigControllerWriteFileRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.ConfigFileContentDto
  }

  export interface ContainerConfigControllerWriteFileParams {
    /**
     * @description 容器 ID (UUID)
     */
    id: string
  }

  /**
   * @description 文件写入参数
   */
  export interface ContainerConfigControllerWriteFileBody extends __common__.WriteConfigFileDto {}

  export interface ContainerConfigControllerDeleteFileRes {
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
       * @example custom.jsonc
       */
      name?: string
    }
  }

  export interface ContainerConfigControllerDeleteFileParams {
    /**
     * @description 容器 ID (UUID)
     */
    id: string
    /**
     * @description 要删除的文件名
     */
    fileName: string
  }

  export type RContainerConfigControllerGetFiles = Promise<
    [
      any,
      ContainerConfig.ContainerConfigControllerGetFilesRes["data"],
      ContainerConfig.ContainerConfigControllerGetFilesRes,
    ]
  >
  export type RContainerConfigControllerGetAgents = Promise<
    [
      any,
      ContainerConfig.ContainerConfigControllerGetAgentsRes["data"],
      ContainerConfig.ContainerConfigControllerGetAgentsRes,
    ]
  >
  export type ContainerConfigControllerWriteFileParams1 = ContainerConfigControllerWriteFileParams &
    __common__.WriteConfigFileDto

  export type RContainerConfigControllerWriteFile = Promise<
    [
      any,
      ContainerConfig.ContainerConfigControllerWriteFileRes["data"],
      ContainerConfig.ContainerConfigControllerWriteFileRes,
    ]
  >
  export type RContainerConfigControllerDeleteFile = Promise<
    [
      any,
      ContainerConfig.ContainerConfigControllerDeleteFileRes["data"],
      ContainerConfig.ContainerConfigControllerDeleteFileRes,
    ]
  >
  export type ContainerConfigControllerWriteAgentsParams1 = ContainerConfigControllerWriteAgentsParams &
    __common__.WriteAgentsMdDto

  export type RContainerConfigControllerWriteAgents = Promise<
    [
      any,
      ContainerConfig.ContainerConfigControllerWriteAgentsRes["data"],
      ContainerConfig.ContainerConfigControllerWriteAgentsRes,
    ]
  >
}

export namespace DependencyRequests {
  export interface DependencyRequestControllerFindManyRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.PaginatedDependencyRequestListItemDto
  }

  export interface DependencyRequestControllerFindManyParams {
    /**
     * @description 页码，从 1 开始
     */
    page?: number
    /**
     * @description 每页数量，上限 100
     */
    pageSize?: number
    /**
     * @description 依赖类型过滤：npm / pip / linux
     */
    type?: EnumLists.Type6
    /**
     * @description 来源类型过滤：human / agent
     */
    source?: EnumLists.Source
    /**
     * @description 收集状态过滤：true / false
     */
    collected?: boolean
    /**
     * @description 包名称关键词模糊匹配
     */
    keyword?: string
    /**
     * @description 排序字段：hitCount（命中次数）/ createdAt（提交时间）
     */
    sortBy?: EnumLists.SortBy
    /**
     * @description 排序方向：asc / desc，默认 desc
     */
    sortOrder?: EnumLists.SortOrder
  }

  export interface DependencyRequestControllerCreateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.DependencyRequestResponseDto
  }

  export interface DependencyRequestControllerCreateParams {
    authorization: string
  }

  export interface DependencyRequestControllerCreateBody extends __common__.CreateDependencyRequestDto {}

  export interface DependencyRequestControllerFindOneRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.DependencyRequestResponseDto
  }

  export interface DependencyRequestControllerFindOneParams {
    /**
     * @description 依赖需求 ID (UUID)
     */
    id: string
  }

  export interface DependencyRequestControllerUpdateRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.DependencyRequestResponseDto
  }

  export interface DependencyRequestControllerUpdateParams {
    /**
     * @description 依赖需求 ID (UUID)
     */
    id: string
  }

  export interface DependencyRequestControllerUpdateBody extends __common__.UpdateDependencyRequestDto {}

  export interface DependencyRequestControllerRemoveRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: { id?: string }
  }

  export interface DependencyRequestControllerRemoveParams {
    /**
     * @description 依赖需求 ID (UUID)
     */
    id: string
  }

  export interface DependencyRequestControllerMarkCollectedRes {
    /**
     * @example 200
     */
    code: number
    /**
     * @example success
     */
    message: string
    data: __common__.DependencyRequestResponseDto
  }

  export interface DependencyRequestControllerMarkCollectedParams {
    /**
     * @description 依赖需求 ID (UUID)
     */
    id: string
  }

  export interface DependencyRequestControllerMarkCollectedBody extends __common__.CollectDependencyRequestDto {}

  export type DependencyRequestControllerCreateParams1 = DependencyRequestControllerCreateParams &
    __common__.CreateDependencyRequestDto

  export type RDependencyRequestControllerCreate = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerCreateRes["data"],
      DependencyRequests.DependencyRequestControllerCreateRes,
    ]
  >
  export type DependencyRequestControllerUpdateParams1 = DependencyRequestControllerUpdateParams &
    __common__.UpdateDependencyRequestDto

  export type RDependencyRequestControllerUpdate = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerUpdateRes["data"],
      DependencyRequests.DependencyRequestControllerUpdateRes,
    ]
  >
  export type RDependencyRequestControllerRemove = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerRemoveRes["data"],
      DependencyRequests.DependencyRequestControllerRemoveRes,
    ]
  >
  export type RDependencyRequestControllerFindOne = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerFindOneRes["data"],
      DependencyRequests.DependencyRequestControllerFindOneRes,
    ]
  >
  export type RDependencyRequestControllerFindMany = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerFindManyRes["data"],
      DependencyRequests.DependencyRequestControllerFindManyRes,
    ]
  >
  export type DependencyRequestControllerMarkCollectedParams1 = DependencyRequestControllerMarkCollectedParams &
    __common__.CollectDependencyRequestDto

  export type RDependencyRequestControllerMarkCollected = Promise<
    [
      any,
      DependencyRequests.DependencyRequestControllerMarkCollectedRes["data"],
      DependencyRequests.DependencyRequestControllerMarkCollectedRes,
    ]
  >
}
