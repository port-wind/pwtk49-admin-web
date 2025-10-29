import type { BaseResponse } from '@/api/type'
export interface GetRequest {
  page: number // 页码
  size: number // 每页显示条数
  sortName?: string // 排序字段名称
  sortOrder?: SortOrder // 排序顺序
  appId?: string // 新闻站点ID
  siteName?: string // 新闻站点名称
  typeName?: string // 分类名称
  typeId?: string // 分类id
}
export interface GetResponse extends BaseResponse {
  data?: {
    total: number // 总条数
    list: TableData[]
  }
}

export interface TableData {
  appId: string //新闻站点ID
  siteName: string // 新闻站点名称
  typeId: string // 分类id
  parentTypeId: string // 父级分类ID
  path: string // 保存到顶级分类所有分类的id比如 1,2,4 。所有下级LIKE 1,% 所有上级LIKE %2
  innerTypeName: string //分类内部名称
  typeName: string //分类名称
  level: string //分类层级
  updateTime: string //修改时间
  status: '1' | '0' //状态;1,正常;0,删除;
}

// 定义 SortOrder 类型
type SortOrder = 'ASC' | 'DESC'

//新闻站点名称
export interface GetNameRequest {
  appId: string // 新闻站点ID
  typeName: string // 分类名称
}
export interface GetNameResponse extends BaseResponse {
  data?: {
    typeName: string // 分类名称
  }
}

export interface GetLevelRequest {
  appId?: string // 新闻站点ID
  level: string // 分类层级(长度不能超过11位)
  typeName?: string // 分类名称
}
export interface GetLevelResponse extends BaseResponse {
  data?: {}
}

export interface IReqTreeListQueryParams {
  page: number // 页码，必填，int32
  size: number // 每页显示条数，必填，int32
  sortName?: string // 排序字段名称，可选
  sortOrder?: 'ASC' | 'DESC' // 排序方式，可选，ASC 或 DESC
}

export interface IReqTreeListData {
  appId: string // 新闻站点 ID
  siteName: string // 新闻站点名称
  websiteUrl: string // 官网地址
  queryDataUrl: string // 爬取数据地址
  children?: ICategory[] // 该网站的栏目 (分类数组)
}

interface ICategory {
  appId: string // App ID
  siteName: string // 新闻站点名称
  typeId: number // 分类 ID (int32)
  parentTypeId: number // 父级分类 ID (int32)
  path: string // 路径
  articleSiteAppid: string // 新闻站点 ID
  innerTypeName: string // 分类内部名称
  typeName: string // 分类名称
  level: number // 分类层级 (int32)
  updateTime: number // 修改时间 (int64)
  status: '1' | '0' // 状态 ("1"：正常，"0"：删除)
  pathName: string // 路径名称
  children?: ICategory[] // 该层级的下级，可选 (递归数组)
}
