import type {
  ExperienceItem,
} from '../types/experience'


export const experiences: ExperienceItem[] = [
  {
    id: 'lakehouse-demo',

    productId: 'lakehouse',

    type: 'demo',

    title: '湖仓一体数据平台',

    description:
      '了解湖仓一体平台在超大规模数据湖、多引擎融合计算、统一集群管控及信创适配方面的核心能力。',

    status: 'preparing',

    featured: true,

    tags: [
      '湖仓一体',
      '多引擎',
      '数据底座',
    ],

    order: 1,
  },

  {
    id: 'data-pipeline-demo',

    productId: 'data-pipeline',

    type: 'demo',

    title: '全链路数据智能生产流水线',

    description:
      '体验从数据接入、开发加工、智能算子、数据质检到高质量数据生产的完整数据生产流程。',

    status: 'preparing',

    featured: true,

    tags: [
      '数据生产',
      '智能算子',
      '数据质检',
    ],

    order: 2,
  },

  {
    id: 'ai-dataset-demo',

    productId: 'ai-dataset',

    type: 'demo',

    title: 'AI高质量数据集',

    description:
      '了解面向大模型训练、微调、RAG与智能应用的多模态高质量数据生产能力。',

    status: 'preparing',

    featured: false,

    tags: [
      'AI Ready',
      '多模态',
      '高质量数据',
    ],

    order: 3,
  },

  {
    id: 'ontology-demo',

    productId: 'ontology',

    type: 'demo',

    title: '本体建模平台',

    description:
      '体验业务对象、属性、关系、规则和行动建模，以及本体模型发布与语义服务过程。',

    status: 'preparing',

    featured: true,

    tags: [
      '本体',
      '智能语义',
      '语义建模',
    ],

    order: 4,
  },

  {
    id: 'data-agent-demo',

    productId: 'data-agent',

    type: 'demo',

    title: '专家级数据智能体',

    description:
      '体验智能问数、智能报表、智能报告与智能分析等数据智能应用能力。',

    status: 'preparing',

    featured: true,

    tags: [
      '智能问数',
      '智能报告',
      '智能分析',
    ],

    order: 5,
  },

  {
    id: 'self-service-bi-demo',

    productId: 'self-service-bi',

    type: 'demo',

    title: '自助数据分析平台',

    description:
      '体验自助取数、自助分析、自助图表和自助脑图等业务人员自主分析能力。',

    status: 'preparing',

    featured: false,

    tags: [
      '自助分析',
      '自助取数',
      'BI',
    ],

    order: 6,
  },

  {
    id: 'trusted-data-space-demo',

    productId: 'trusted-data-space',

    type: 'demo',

    title: '企业可信数据空间',

    description:
      '了解数据产品上架、订购、可信交付、使用控制和空间互联等数据可信流通能力。',

    status: 'preparing',

    featured: true,

    tags: [
      '可信流通',
      '使用控制',
      '空间互联',
    ],

    order: 7,
  },

  {
    id: 'data-pricing-demo',

    productId: 'data-pricing',

    type: 'demo',

    title: '数据计量计价平台',

    description:
      '体验数据成本核算、收益洞察、科学定价、流通计量计费与数据价值运营能力。',

    status: 'preparing',

    featured: true,

    tags: [
      '数据计量',
      '数据计价',
      '价值运营',
    ],

    order: 8,
  },

  {
  id: 'data-agent-video',

  productId: 'data-agent',

  type: 'video',

  title: '数据智能体产品介绍',

  description:
    '通过视频了解智能问数、智能报表、智能报告与智能分析核心能力。',

  status: 'available',

  url:
    'https://channels.weixin.qq.com/finder-preview/pages/sph?id=Af5DYG7N5a',

  tags: [
    '数据智能体',
    '产品讲解',
  ],

  order: 20,
}
]


export function getExperiences() {
  return [
    ...experiences,
  ].sort(
    (a, b) =>
      a.order - b.order,
  )
}


export function getFeaturedExperiences() {
  return experiences
    .filter(
      item =>
        item.featured,
    )
    .sort(
      (a, b) =>
        a.order - b.order,
    )
}