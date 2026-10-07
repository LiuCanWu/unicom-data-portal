import type { Product } from '../types/product'


export const products: Product[] = [

  {
    id: 'lakehouse',

    slug: 'lakehouse',

    name: '湖仓一体平台',

    category: 'infrastructure',

    tagline:
      '面向企业级数据场景，提供统一的数据存储、计算与湖仓分析能力。',

    description:
      '构建统一的数据存储与计算底座，支撑大规模结构化、半结构化及多模态数据的统一管理和高效处理，为数据开发、分析及AI应用提供稳定的数据基础设施。',

    features: [
      {
        title: '湖仓统一',
        description:
          '统一数据湖与数据仓库能力，降低多套数据体系建设和运维复杂度。',
      },
      {
        title: '统一存算',
        description:
          '提供面向企业大规模数据场景的统一存储与计算能力。',
      },
      {
        title: '批流融合',
        description:
          '支撑离线和实时数据处理场景。',
      },
      {
        title: '弹性计算',
        description:
          '根据不同业务负载提供灵活的数据计算资源。',
      },
    ],

    scenarios: [
      {
        title: '企业数据仓库',
      },
      {
        title: '实时数据分析',
      },
      {
        title: 'AI数据底座',
      },
    ],

    tags: [
      '湖仓一体',
      '数据存储',
      '数据计算',
      '批流融合',
    ],

    featured: true,

    order: 1,

    status: 'available',
  },

  {
    id: 'data-pipeline',

    slug: 'data-pipeline',

    name: '全链路数据智能生产流水线',

    category: 'data-engineering',

    tagline:
      '覆盖数据采集、加工、质检与治理的数据智能生产全链路。',

    description:
      '面向集团及行业数据生产场景，汇聚多源异构数据，通过低代码流水线、智能算子和统一调度能力，实现数据采集、加工、质量检测和治理的一体化数据生产。',

    features: [
      {
        title: '多源数据采集',
        description:
          '支持多模态数据实时、离线、增量及全量采集。',
      },
      {
        title: '智能数据加工',
        description:
          '通过智能算子和低代码编排提升数据生产效率。',
      },
      {
        title: '智能数据质检',
        description:
          '围绕多维质量指标对数据进行自动化质量评价。',
      },
      {
        title: '全链路调度',
        description:
          '统一管理数据处理任务和生产流程。',
      },
    ],

    scenarios: [
      {
        title: '企业数据加工',
      },
      {
        title: 'AI数据生产',
      },
      {
        title: '多模态数据处理',
      },
    ],

    tags: [
      '数据采集',
      '数据加工',
      '低代码',
      '数据质量',
    ],

    featured: true,

    order: 2,

    status: 'available',
  },

  {
    id: 'ai-dataset',

    slug: 'ai-dataset',

    name: 'AI高质量数据集',

    category: 'data-engineering',

    tagline:
      '面向大模型和智能应用，打造高可信、高可用、高安全的AI-Ready数据。',

    description:
      '围绕文本、图片、音频、视频等多模态数据，提供数据采集、清洗、加工、标注、增强、质量评价和数据集管理能力，为模型训练、微调、RAG及智能应用持续提供高质量数据。',

    features: [
      {
        title: '多模态数据集',
        description:
          '统一管理文本、图片、音频、视频及多模态数据。',
      },
      {
        title: '智能加工',
        description:
          '通过智能算子完成清洗、加工、增强等数据处理任务。',
      },
      {
        title: '质量评价',
        description:
          '构建统一的数据集质量评价体系。',
      },
      {
        title: '数据集管理',
        description:
          '覆盖数据集创建、加工、版本和发布生命周期。',
      },
    ],

    scenarios: [
      {
        title: '大模型训练',
      },
      {
        title: '模型微调',
      },
      {
        title: 'RAG知识数据',
      },
      {
        title: '智能体数据供给',
      },
    ],

    tags: [
      'AI Ready',
      '数据集',
      '多模态',
      '高质量数据',
    ],

    featured: true,

    order: 3,

    status: 'available',
  },

  {
    id: 'ontology',

    slug: 'ontology',

    name: '本体建模平台',

    category: 'semantic',

    tagline:
      '构建企业级业务语义层，为上层智能应用提供统一语义、规则与推理能力。',

    description:
      '围绕业务对象、属性、关系、规则和行动构建企业级本体模型，建立业务语义与底层数据之间的动态映射关系，并通过标准化本体服务向上层智能应用提供可信、可解释、可复用的语义能力。',

    features: [
      {
        title: '本体对象建模',
        description:
          '围绕业务对象、属性与关系构建统一业务模型。',
      },
      {
        title: '本体规则建模',
        description:
          '沉淀制度规范、业务逻辑与专家经验，构建统一规则体系。',
      },
      {
        title: '本体行动建模',
        description:
          '将业务操作和系统动作标准化，为智能应用提供可执行能力。',
      },
      {
        title: '本体数据关联',
        description:
          '建立物理数据与业务对象之间的语义映射关系。',
      },
      {
        title: '本体服务共享',
        description:
          '通过标准服务接口向智能体和业务系统提供语义能力。',
      },
      {
        title: '本体更新迭代',
        description:
          '支持本体版本管理、变更分析、回溯和持续优化。',
      },
    ],

    scenarios: [
      {
        title: '智能问数与根因分析',
      },
      {
        title: '宽带退单原因稽核',
      },
      {
        title: '智能化数据治理',
      },
      {
        title: '智能业务决策',
      },
    ],

    tags: [
      '本体',
      '语义层',
      '业务对象',
      '业务规则',
      '语义推理',
    ],

    featured: true,

    order: 4,

    status: 'available',
  },

  {
    id: 'data-agent',

    slug: 'data-agent',

    name: '专家级数据智能体',

    category: 'analytics',

    tagline:
      '面向管理、经营分析和一线人员，提供智能化数据分析与业务辅助能力。',

    description:
      '围绕企业经营管理和业务运营场景，通过数据、业务知识与专家能力协同，为不同角色提供智能问数、经营洞察、分析报告及辅助决策能力。',

    features: [
      {
        title: '智能问数',
        description:
          '通过自然语言快速查询和理解企业经营数据。',
      },
      {
        title: '智能分析',
        description:
          '围绕经营指标进行多维分析与原因定位。',
      },
      {
        title: '智能报告',
        description:
          '自动生成结构化经营分析报告。',
      },
      {
        title: '角色化服务',
        description:
          '服务管理人员、经营分析人员与一线业务人员。',
      },
    ],

    scenarios: [
      {
        title: '管理驾驶舱',
      },
      {
        title: '经营分析',
      },
      {
        title: '一线运营',
      },
    ],

    tags: [
      '数据智能体',
      '智能问数',
      '经营分析',
      '智能报告',
    ],

    featured: true,

    order: 5,

    status: 'available',
  },

  {
    id: 'self-service-bi',

    slug: 'self-service-bi',

    name: '自助分析平台',

    category: 'analytics',

    tagline:
      '让业务人员更便捷地完成数据探索、分析和可视化。',

    description:
      '面向业务人员和数据分析人员提供数据查询、分析、可视化与报表能力，降低数据分析使用门槛。',

    features: [
      {
        title: '自助取数',
        description: '支持业务用户灵活获取分析数据。',
      },
      {
        title: '可视化分析',
        description: '提供丰富的数据可视化能力。',
      },
      {
        title: '报表管理',
        description: '统一管理企业分析报表。',
      },
    ],

    scenarios: [
      {
        title: '经营分析',
      },
      {
        title: '专题分析',
      },
    ],

    tags: [
      'BI',
      '自助分析',
      '数据可视化',
    ],

    featured: false,

    order: 6,

    status: 'available',
  },

  {
    id: 'trusted-data-space',

    slug: 'trusted-data-space',

    name: '可信数据空间',

    category: 'circulation',

    tagline:
      '构建安全可信、可控可管的数据流通与共享环境。',

    description:
      '面向跨组织数据流通场景，通过身份、权限、使用控制和全流程审计等机制，实现数据可信共享与安全使用。',

    features: [
      {
        title: '可信连接',
        description: '建立数据提供方与使用方之间的可信连接。',
      },
      {
        title: '使用控制',
        description: '保障数据按照约定范围和方式使用。',
      },
      {
        title: '全程审计',
        description: '支持数据流通过程全链路记录和审计。',
      },
    ],

    scenarios: [
      {
        title: '企业数据流通',
      },
      {
        title: '行业数据共享',
      },
    ],

    tags: [
      '可信数据空间',
      '数据流通',
      '数据安全',
    ],

    featured: true,

    order: 7,

    status: 'available',
  },

  {
    id: 'data-pricing',

    slug: 'data-pricing',

    name: '数据计量计价平台',

    category: 'circulation',

    tagline:
      '支撑数据产品和数据服务的计量、计费与价值运营。',

    description:
      '围绕数据产品和数据服务使用过程，提供使用量计量、计费规则和价值运营能力。',

    features: [
      {
        title: '数据计量',
        description: '记录数据产品和服务的使用情况。',
      },
      {
        title: '计价规则',
        description: '支持灵活配置数据产品计价模型。',
      },
      {
        title: '运营分析',
        description: '分析数据产品使用与价值情况。',
      },
    ],

    scenarios: [
      {
        title: '数据服务运营',
      },
      {
        title: '数据产品经营',
      },
    ],

    tags: [
      '数据计量',
      '数据计价',
      '数据运营',
    ],

    featured: true,

    order: 8,

    status: 'coming-soon',
  },
]



export function getProductBySlug(
  slug: string,
): Product | undefined {
  return products.find(
    product => product.slug === slug,
  )
}


export function getFeaturedProducts(): Product[] {
  return products
    .filter(product => product.featured)
    .sort((a, b) => a.order - b.order)
}


export function getProductsByCategory(
  category: Product['category'],
): Product[] {
  return products
    .filter(product => product.category === category)
    .sort((a, b) => a.order - b.order)
}