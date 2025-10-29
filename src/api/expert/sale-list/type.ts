export interface IGetSaleListData {
  predictId: number // 预测id
  hitRule: string // 中奖规则
  predict: PredictionContent[] // 预测结果
  openDate: string // 开奖日期
  predictIsHit: PredictionHitResult[] // 预测结果分别是否命中
  isHit: 'y' | 'n' | 'i' // 是否命中 (y:中, n:未中, i:未开奖)
  hitDetail: string // 中奖结果
  openDetail: OpenResult[] // 开奖详情
  predictScore: number // 预测积分
  predictReadNumber: number // 预测阅读数
  playTypeRate: number // 玩法倍数
  winStars: number // 猜中获取星星数量
  bizFlag: 'b' | 't' | 'p' | 'r' // 业务类型
  bizId: number // 业务id
  year: number // 年份
  issue: number // 期号
  gameType: number // 游戏类型
  ucFlag: string // u,c
  gcFlag: string // ugc,pgc,ogc
  playTypeCode: string // 玩法code
  subPlayTypeCode: string // 子玩法code
  predictionTypeName: string // 预测类型名称
  playTypeSubCode: string // 玩法二级类型code
  playTypeName: string // 玩法一级类型名称
  playTypeSubName: string // 玩法二级类型名称
  playTypeCheckNumberCode: string // 正特码类型
  predictTitle: string // 预测标题
  seriesCode: string // 图纸系列代码
  seriesName: string // 图纸系列名称
  newspaperCode: string // 图纸报纸代码
  newspaperName: string // 图纸报纸名称
  layoutCode: string // 版面信息
  period: number // 年内期数
  userId: string
}

export interface PredictionContent {
  value: string // 预测的内容
  isHit: boolean // 是否命中
}

export interface PredictionHitResult {
  value: string // 预测的内容
  isHit: boolean // 是否命中
}

export interface OpenResult {
  nums: number[] // 开奖号码
  numsInfo: NumInfo[] // 号码详细信息
}

export interface NumInfo {
  num: number // 号码
  fiveElements: string // 五行
  shengxiao: string // 生肖
  size: string // 大小
  color: string // 颜色
  index: number // 索引
  oddEven: string // 奇偶
}

export interface User {
  userId: number // 用户id
  loginId: string // 登录id
  nickname: string // 用户昵称
  avatar: string // 用户头像
}

export interface IssueDetails {
  issueId: number // 期号ID
  issue: number // 第几期
  year: number // 年份
  name: string // 期刊名称
  likeCount: number // 点赞数量
  favoriteCount: number // 收藏数量
  threadCount: number // 回复数量
  readCount: number // 阅读数量
  gameType: number // 彩种
  imgPath: string // 图纸URI
  isColorful: 'y' | 'n' // 是否彩色
  isTop: string // 是否置顶
  isSelected: string // 是否精选
  isHot: string // 是否热门
  isBloom: string // 是否爆款
  isRecommended: string // 是否推荐
  commentFlag: 'y' | 'n' // 是否允许评论
  voteFlag: 'y' | 'n' // 是否允许投票
  score: number // 评分
  replyCount: number // 回复数量
  likeStatus: 'y' | 'n' // 是否点赞
  favoriteStatus: 'y' | 'n' // 是否收藏
  createTime: string // 创建时间
  updateTime: string // 更新时间
}

export interface Statistics {
  total: number // 总共发布了多少次心水
  winTotal: number // 本期赢得了几次
  failTotal: number // 本期输了几次
  longestWinningStreak: number // 史上最大连胜
  recentWinningStreak: number // 最近连胜
  winningStreakRankingsCount: number // 连胜次数
  sixKingCount: number // 六合王数量
  winnStreakRankingCount: number // 连胜榜数量
  pastChampionsCount: number // 历史冠军数量
  expertStatisticsCount: number // 专家统计数量
}

interface ExtensionField {
  [key: string]: any // 用于存储额外的扩展字段
}

export interface IListPlayTypeData {
  extensionField: ExtensionField // 扩展字段，JSON 存储
  display: string // 显示名称
  playTypeCode: string // 玩法 code
  predictionTypeName: string // 预测类型名称
  optionList: { value: string; label: string; active: boolean }[] // 可选内容
  maxCount: number // 最大数量
  minCount: number // 最小数量
  maxScore: number // 最大积分
  minScore: number // 最小积分
  rule: string // 玩法规则说明
  ruleExplain: string // 玩法规则详细说明
  gcFlag: 'ugc' | 'pgc' | 'ogc' // 内容类型
  gameType: number // 玩法 code
  isRecommend: 'y' | 'n' // 是否推荐
  children: any[] // 一级玩法对应的二级类型
}

export interface IGetSaleListQueryParams {
  page: number // 页码
  size: number // 每页显示条数
  sortName?: string // 排序字段
  sortOrder?: 'ASC' | 'DESC' // 排序顺序
  userId?: number // 用户ID
  id?: number | string // 卖料ID
  year?: number // 年份
  issue?: number // 期数
  gameType?: number | string // 彩种
  playTypeCode?: number // 玩法code
  searchId?: string // 卖料人登录ID或用户Id（模糊匹配）
  nickname?: string // 昵称
  isHit?: 'y' | 'n' | 'i' // 开奖结果 (y中奖, n未中奖, i未开奖)
  startTime?: string // 开始时间 (Start time, format: yyyy-MM-dd HH:mm:ss)
  endTime?: string // 结束时间 (End time, format: yyyy-MM-dd HH:mm:ss)
  tagId?: string // 用户标签 (User tag)
}
