export type ProductCategory =
  | 'infrastructure'
  | 'data-engineering'
  | 'semantic'
  | 'analytics'
  | 'circulation'


export interface ProductFeature {
  title: string
  description: string
}


export interface ProductScenario {
  title: string
  description?: string
}


export interface ProductLink {
  label: string
  url: string
  enabled: boolean
}


export interface Product {
  id: string

  /**
   * URL 使用
   * example:
   * /products/lakehouse
   */
  slug: string

  /**
   * 产品正式名称
   */
  name: string

  /**
   * 产品简称，可选
   */
  shortName?: string

  /**
   * 所属产品家族
   */
  category: ProductCategory

  /**
   * 首页或卡片上的一句话定位
   */
  tagline: string

  /**
   * 产品详细简介
   */
  description: string

  /**
   * 产品核心能力
   */
  features: ProductFeature[]

  /**
   * 典型应用场景
   */
  scenarios: ProductScenario[]

  /**
   * 产品关键词
   */
  tags: string[]

  /**
   * 产品图片
   */
  coverImage?: string

  /**
   * 架构图
   */
  architectureImage?: string

  /**
   * Demo 视频
   */
  demoVideo?: string

  /**
   * Demo / 试用入口
   */
  demoLink?: ProductLink
  trialLink?: ProductLink

  /**
   * 是否核心产品
   */
  featured: boolean

  /**
   * 排序
   */
  order: number

  /**
   * 产品状态
   */
  status: 'available' | 'coming-soon'
}