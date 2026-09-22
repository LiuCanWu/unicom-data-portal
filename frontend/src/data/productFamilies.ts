import type { ProductCategory } from '../types/product'


export interface ProductFamily {
  id: ProductCategory
  name: string
  englishName: string
  description: string
  order: number
}


export const productFamilies: ProductFamily[] = [
  {
    id: 'infrastructure',
    name: '数据基础设施',
    englishName: 'Data Infrastructure',
    description:
      '提供统一、高效、弹性的数据存储、计算与湖仓处理能力。',
    order: 1,
  },

  {
    id: 'data-engineering',
    name: '数据生产治理',
    englishName: 'Data Engineering',
    description:
      '覆盖数据采集、开发、加工、治理与高质量数据生产全流程。',
    order: 2,
  },

  {
    id: 'semantic',
    name: '智能语义',
    englishName: 'Semantic Intelligence',
    description:
      '连接数据与业务语义，为智能应用提供统一、可信的企业级语义底座。',
    order: 3,
  },

  {
    id: 'analytics',
    name: '数据分析智能',
    englishName: 'Data Intelligence',
    description:
      '面向管理、经营分析和业务人员提供自助分析与智能化数据应用能力。',
    order: 4,
  },

  {
    id: 'circulation',
    name: '数据流通',
    englishName: 'Data Circulation',
    description:
      '支撑数据安全流通、可信使用、价值交换与数据资产运营。',
    order: 5,
  },
]