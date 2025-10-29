import type { BaseResponse } from '@/api/type'

/**
 * 分页相关参数
 */
interface Pagination {
  page: number // 页码
  size: number // 每页显示条数
}

/**
 * 排序相关参数
 */
interface Sorting {
  sortName?: string // 排序字段名，非必填
  sortOrder?: 'ASC' | 'DESC' // 排序顺序，非必填，ASC: 升序, DESC: 降序
}

/**
 * 组件相关参数
 */
interface ComponentInfo {
  componentId?: number // 组件ID，非必填
  websiteId?: string // 模板ID，非必填，最大长度128
  componentType?: string // 组件类型，非必填，最大长度128
  componentName?: string // 组件名称，非必填，最大长度128
}

// 综合所有类型声明
export interface GetRequest extends Pagination, Sorting, ComponentInfo {}

/**
 * 组件数据类型
 */
export interface TableData {
  pageCode: string // 页面编码
  componentId: string // 组件ID
  componentType: string // 组件类型
  componentName: string // 组件名称
  configParamJson: string // 组件参数配置
  sketchCodeList: string // 组件草图代码列表
  status: 'y' | 'n' // 状态，'y' 表示有效，'n' 表示无效
  isView: 'y' | 'n' // 是否可见，'y' 表示可见，'n' 表示不可见
  memo?: string // 备注，可选
}

/**
 * 返回数据类型
 */
export interface GetResponse extends BaseResponse {
  data?: {
    total: number // 总条数
    list: Array<TableData> // 当前数据列表
  }
}

export interface IAddSysComponentQueryParams {
  websiteId?: string // 站点ID
  componentType?: string // 组件类型
  componentRef?: string // 引用组件ID
  componentName?: string // 组件名称
  pageRenderingSeq?: number // 页面渲染顺序
  configParamJson?: string // 组件参数配置
  memo?: string // 备注
  status?: 'y' | 'n' // 状态; 'y' 表示有效, 'n' 表示无效
  isView?: 'y' | 'n' // 是否可见; 'y' 表示可见, 'n' 表示不可见
}
export interface AddResponse extends BaseResponse {}
export interface IEditSysComponentQueryParams {
  componentId: string // 组件ID
  componentType?: string // 组件类型
  componentName?: string // 组件名称
  configParamJson?: string // 组件参数配置
  preset?: string // 预设值 它跟configParamJSON 存储的是一样的。只是管理员才可以修改。其他人只能继承他重新做一个
  sketchCodeList?: string
  componentSort?: string
  status?: 'y' | 'n' // 状态; 'y' 表示有效, 'n' 表示无效
  isView?: 'y' | 'n' // 是否可见; 'y' 表示可见, 'n' 表示不可见
  memo?: string // 备注
  pageCode?: string

  // websiteId?: string // 站点ID
  // componentRef?: string // 引用组件ID
  // pageRenderingSeq?: number // 页面渲染顺序

  //  componentId
  //  componentType
  //  componentName
  //  configParamJson
  //  sketchCodeList
  //  componentSort
  //  status
  //  isView
  //  memo
  //  pageCode
}
export interface EditResponse extends BaseResponse {}

export interface IGetComponentIdAndNameQueryParams {
  page: number // 页码
  size: number // 每页显示条数
  sortName?: string // 排序字段名
  sortOrder?: 'ASC' | 'DESC' // 排序顺序
  componentId?: string // 组件ID, 只能包含数字和空格
  componentType?: string // 组件类型, sys->系统组件, template->模板组件, website->网站组件 (最大长度: 128)
  componentName?: string // 组件名称 (最大长度: 128)
  sketchCodeList?: string // 草图代码数组
  status?: 'y' | 'n' // 状态; y:有效, n:无效 (最大长度: 1)
  isView?: 'y' | 'n' // 是否可见; y:可见, n:不可见 (最大长度: 1)
  configParamJsonOff?: string // 组件参数配置开关, 1:显示 (默认), 2:不显示 (最大长度: 1)
}
export interface GetOneResponse extends BaseResponse {
  data?: {
    total: number // 总条数
    list: Array<TableData> // 当前数据列表
  }
}

export interface IDelSysComponentQueryParams {
  componentId: string // 组件ID
}
export interface DelResponse extends BaseResponse {}

export interface IGetSysComponentQueryParams {
  page: number // 页码
  size: number // 每页显示条数
  sortName?: string // 排序字段名称
  sortOrder?: 'ASC' | 'DESC' // 排序方向
  componentId?: string // 组件ID
  componentType?: string // 组件类型
  componentName?: string // 组件名称
  sketchCodeList?: string // 草图代码列表
  status?: string // 状态
  isView?: string // 是否可见
  configParamJsonOff?: string // 组件参数配置开关
  pageCode?: string // 页码code
}
export interface IGetSysComponentData {
  componentId: string // 组件ID
  componentType: string // 组件类型
  componentName: string // 组件名称
  configParamJson: string // 组件参数配置
  preset: string // 预设值
  sketchCodeList: string // 草图代码
  status: string // 状态; y, 有效; n, 无效
  isView: string // 是否可见; y, 可见; n, 不可见
  memo: string // 备注
  pageCode: string // 页码code
}

export interface IRegIdOrNameData {
  componentId: string // 组件ID
  componentType: string // 组件类型
  componentName: string // 组件名称
  configParamJson: string // 组件参数配置
  sketchCodeList: string // 草图代码
  status: string // 状态; y, 有效; n, 无效
  isView: string // 是否可见; y, 可见; n, 不可见
  memo: string // 备注
  pageCode: string // 页码code
}

export interface IDelSysComData {
  componentId: string // 组件ID
  componentType: string // 组件类型
  componentName: string // 组件名称
  configParamJson: string // 组件参数配置
  sketchCodeList: string // 草图代码
  status: string // 状态; y, 有效; n, 无效
  isView: string // 是否可见; y, 可见; n, 不可见
  memo: string // 备注
  pageCode: string // 页码code
}
