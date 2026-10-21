import type { Product } from '../types/product'


export const products: Product[] = [

  {
    id: 'lakehouse',

    slug: 'lakehouse',

    name: '湖仓一体数据平台',

    shortName: '湖仓一体',

    category: 'infrastructure',

    tagline:
      '打造自主可控、超大规模、多引擎融合的数据智能底座。',

    description:
      '聚焦信创适配难、数据存储规模大、数据处理时效低等问题，建设自主可控的湖仓一体大数据平台，统一承载结构化、半结构化和非结构化数据，构建统一数据湖、多引擎融合计算和集群管控能力，为总部、省分及行业客户提供稳定高效的数据基础设施。',

    values: [
      {
        title: '统一数据底座',
        description:
          '推动分散数据向统一大数据底座集约，减少多套平台重复建设与数据割裂。',
      },
      {
        title: '自主可控',
        description:
          '适配国产软硬件及操作系统，提升企业大数据基础设施自主可控能力。',
      },
      {
        title: '数据提质增效',
        description:
          '通过湖仓一体和多引擎融合，缩短数据生产链路，提高数据处理与供给效率。',
      },
    ],

    features: [
      {
        title: '全栈信创适配',
        description:
          '支持国产CPU、国产操作系统及主流开源大数据组件，形成完整信创适配能力。',
      },
      {
        title: '超大规模数据湖',
        description:
          '通过多集群联邦和统一数据路由，实现逻辑统一、物理分散、统一访问的数据湖存储。',
      },
      {
        title: '多引擎融合计算',
        description:
          '统一支持离线、实时和交互式分析等计算引擎，实现一份数据多引擎共享。',
      },
      {
        title: '统一元数据与权限',
        description:
          '跨引擎共享元数据、数据血缘和权限体系，减少数据重复建设。',
      },
      {
        title: '统一集群管控',
        description:
          '支持多集群纳管、监控、资源开通、扩缩容和线上化运维。',
      },
      {
        title: 'Data + AI 一体化',
        description:
          '支持图片、音频、视频、文档、向量及模型等多模态和AI数据统一管理。',
      },
    ],

    architectureDescription:
      '以国产化基础设施为底座，向上构建统一存储层和湖仓一体能力，统一承载结构化、半结构化和非结构化数据；计算层融合离线批计算、实时流计算和交互式分析等多类引擎，并通过统一元数据、权限和资源调度能力，为经营分析、实时营销、自助取数及AI开发等场景提供数据支撑。',

    scenarios: [
      {
        title: '集团统一数据底座',
        description:
          '支撑总部和省分大规模数据统一存储、计算与资源共享。',
      },
      {
        title: '经营分析',
        description:
          '支撑经营数据离线、实时和交互式分析。',
      },
      {
        title: '实时营销',
        description:
          '基于实时计算能力快速支撑实时业务场景。',
      },
      {
        title: 'AI数据底座',
        description:
          '统一承载多模态文件、向量、文档索引和模型相关数据。',
      },
    ],

    advantages: [
      {
        title: '超大规模',
        description:
          '具备大规模数据湖和多集群统一承载能力。',
      },
      {
        title: '全栈自主可控',
        description:
          '完成主流国产软硬件兼容适配并实现生产规模化应用。',
      },
      {
        title: '多引擎融合',
        description:
          '实现离线、实时、查询分析等不同计算引擎之间的数据共享。',
      },
      {
        title: '规模化实践',
        description:
          '已在集团总部及省分形成大规模生产应用实践。',
      },
    ],

    metrics: [
      {
        value: '1.5万+',
        label: '算力节点',
      },
      {
        value: '360PB+',
        label: '数据存储规模',
      },
      {
        value: '900+',
        label: '算力租户',
      },
      {
        value: '4倍+',
        label: '数据加工效率提升',
      },
    ],

    cases: [
      {
        title: '集团湖仓一体数据底座',
        description:
          '面向总部和分子公司提供统一算力保障与技术支撑，承载大规模离线采集、计算和数据加工任务。',
        result:
          '形成全国性规模化湖仓一体生产能力。',
      },
      {
        title: '中国矿产集团数据底座',
        description:
          '支撑矿产产业链系统数据以及合同、模型等非结构化数据统一入湖，并支撑海运场景实时数据加工。',
        result:
          '推动周/月级数据分析向分钟级、秒级实时监控演进。',
      },
    ],

    tags: [
      '湖仓一体',
      '信创',
      '超大规模数据湖',
      '多引擎融合',
      'Data+AI',
    ],

    featured: true,

    order: 1,

    status: 'available',
  },

  {
  id: 'data-pipeline',

  slug: 'data-pipeline',

  name: '全链路数据智能生产流水线',

  shortName: '数据生产流水线',

  category: 'data-engineering',

  tagline:
    '构建覆盖采集、加工、质检、治理和数据集生产的一站式智能数据生产体系。',

  description:
    '面向传统数据生产流程链路长、效率低、标准不统一等问题，构建覆盖数据采集、开发加工、智能质检、治理和高质量数据集生产的全链路数据流水线，通过统一工具和智能化能力提升企业数据生产效率与质量。',

  values: [
    {
      title: '统一生产流程',
      description:
        '将分散的数据采集、加工、治理和质检过程整合为标准化生产流水线。',
    },
    {
      title: '提升生产效率',
      description:
        '通过智能算子和自动化编排减少重复人工操作，提高数据加工效率。',
    },
    {
      title: '面向AI供数',
      description:
        '同时支撑传统数据开发与高质量AI数据生产，为智能应用提供数据基础。',
    },
  ],

  features: [
    {
      title: '多源数据采集',
      description:
        '支持结构化、非结构化及多模态数据统一接入和汇聚。',
    },
    {
      title: '数据开发加工',
      description:
        '通过可视化编排和标准化开发能力支撑复杂数据加工流程。',
    },
    {
      title: '智能算子',
      description:
        '沉淀可复用智能数据处理能力，降低数据加工开发门槛。',
    },
    {
      title: '智能数据质检',
      description:
        '围绕数据完整性、规范性、一致性等维度开展自动化质量检测。',
    },
    {
      title: '任务调度运维',
      description:
        '统一管理数据生产任务、运行状态和异常处理。',
    },
    {
      title: '高质量数据生产',
      description:
        '面向AI场景支撑数据清洗、加工、标注、增强与质量提升。',
    },
  ],

  architectureDescription:
    '以多源异构数据为输入，通过统一数据采集、开发加工、智能算子、质量检测和任务调度形成标准化数据生产流水线，并向结构化数据应用和高质量AI数据集等不同场景持续供给标准化数据。',

  scenarios: [
    {
      title: '企业数据开发',
      description:
        '统一承载批量、实时等企业数据开发加工任务。',
    },
    {
      title: '多模态数据加工',
      description:
        '支撑文本、图片、音频、视频等非结构化数据处理。',
    },
    {
      title: '高质量数据集生产',
      description:
        '为模型训练和智能应用生产可直接使用的数据集。',
    },
    {
      title: '数据质量治理',
      description:
        '将数据质量检测融入数据生产全过程。',
    },
  ],

  advantages: [
    {
      title: '全链路',
      description:
        '覆盖从数据接入到加工、质检、治理和输出的完整流程。',
    },
    {
      title: '智能化',
      description:
        '通过智能算子和自动化能力降低人工数据加工工作量。',
    },
    {
      title: '标准化',
      description:
        '沉淀统一生产规范和可复用数据处理能力。',
    },
    {
      title: 'AI Ready',
      description:
        '兼顾传统数据开发和面向大模型的高质量数据生产。',
    },
  ],

  metrics: [
    {
      value: '163+',
      label: '智能数据算子',
    },
    {
      value: '12维',
      label: '质量评价维度',
    },
    {
      value: '74项',
      label: '数据质检项',
    },
    {
      value: '75%+',
      label: '智能化生产占比',
    },
  ],

  cases: [
    {
      title: '集团数据生产提效',
      description:
        '通过标准化生产流水线统一数据开发、加工和治理流程，减少人工操作和重复建设。',
    },
    {
      title: 'AI高质量数据生产',
      description:
        '围绕文本、图片、音频、视频等数据开展智能清洗、质检和加工，为AI应用提供高质量数据。',
    },
  ],

  tags: [
    '数据生产',
    '智能算子',
    '数据质检',
    '多模态',
    'AI Ready',
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

  shortName: '本体平台',

  category: 'semantic',

  tagline:
    '构建企业级智能语义底座，打通数据到AI业务场景的最后一公里。',

  description:
    '以高质量数据为基础，围绕业务对象、属性、关系、规则和行动构建企业级本体模型，建立业务语义与底层数据之间的动态映射，为智能体和智能应用提供统一语义、业务逻辑、推理约束和可执行能力。',

  values: [
    {
      title: '让AI理解业务',
      description:
        '将技术字段转化为业务对象、关系和口径，解决AI只懂数据、不懂业务的问题。',
    },
    {
      title: '让推理可信可解释',
      description:
        '将业务规则和因果关系显式建模，为智能分析和决策提供逻辑约束。',
    },
    {
      title: '让能力跨场景复用',
      description:
        '通用业务对象和规则一次建设、多场景复用，减少重复语义建设。',
    },
  ],

  features: [
    {
      title: '本体对象建模',
      description:
        '围绕业务对象、属性及关系构建统一、可复用的企业业务认知模型。',
    },
    {
      title: '本体规则建模',
      description:
        '将制度、流程、专家经验和业务逻辑沉淀为可管理、可复用的规则资产。',
    },
    {
      title: '本体行动建模',
      description:
        '将系统操作和业务行为封装为标准行动，为智能应用执行提供能力。',
    },
    {
      title: '本体数据关联',
      description:
        '建立物理表、字段、指标与本体对象、属性和关系的语义映射。',
    },
    {
      title: '本体服务共享',
      description:
        '通过MCP、SDK等方式向智能体、开发者和业务系统提供本体服务。',
    },
    {
      title: '本体更新迭代',
      description:
        '支持多版本、影响分析、版本发布、历史回溯和持续优化。',
    },
  ],

  architectureDescription:
    '以数仓、数据湖和数据中台资产为数据基础，通过对象、规则、行动建模形成企业业务本体，并完成数据映射与动态实例生成；向上将本体封装为标准语义查询、推理和行动服务，为智能体及各类智能业务应用提供统一语义层。',

  scenarios: [
    {
      title: '智能问数与根因分析',
      description:
        '基于本体关系和业务逻辑生成因果分析路径，提升根因定位能力。',
    },
    {
      title: '宽带退单稽核',
      description:
        '围绕业务流程、退单原因和处置动作构建本体，支撑原因识别与闭环处理。',
    },
    {
      title: '智能化数据治理',
      description:
        '利用统一业务语义提升数据口径对齐和语义治理效率。',
    },
    {
      title: '智能决策执行',
      description:
        '通过规则和行动能力支撑智能体从分析建议向业务执行延伸。',
    },
  ],

  advantages: [
    {
      title: '统一业务语义',
      description:
        '建立企业业务对象、属性和关系的统一表达。',
    },
    {
      title: '规则内嵌',
      description:
        '将分散业务逻辑显性化并作为AI推理护栏。',
    },
    {
      title: '数据动态关联',
      description:
        '业务语义模型与底层真实数据动态连接。',
    },
    {
      title: '服务化共享',
      description:
        '本体能力可通过标准服务向多类智能应用复用。',
    },
  ],

  metrics: [
    {
      value: '6大环节',
      label: '标准建模方法',
    },
    {
      value: '10万+',
      label: '本体属性支撑目标',
    },
    {
      value: '≥95%',
      label: '规则判定准确率目标',
    },
    {
      value: '≥99%',
      label: '本体服务API成功率目标',
    },
  ],

  cases: [
    {
      title: '政企收入根因分析',
      description:
        '构建多层业务对象和因果关系，支持自动生成分析链路并识别收入变化根因。',
      result:
        '目标实现根因识别准确率90%+、分析效率由周/天级缩短至分钟级。',
    },
    {
      title: '宽带退单原因稽核',
      description:
        '构建宽带业务流程、退单原因规则和业务处置行动本体。',
      result:
        '退单原因识别准确率目标由65%提升至90%以上。',
    },
  ],

  tags: [
    '本体',
    '智能语义',
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

  shortName: '数据智能体',

  category: 'analytics',

  tagline:
    '面向管理、经营分析和一线业务人员，重构企业数据分析与经营决策流程。',

  description:
    '面向管理人员、经营分析人员和一线业务人员三类角色，构建智能问数、智能报表、智能报告和智能分析四项核心能力，通过自然语言交互降低数据使用门槛，提升企业经营分析和数据决策效率。',

  values: [
    {
      title: '降低数据使用门槛',
      description:
        '业务人员通过自然语言直接使用数据，减少传统层层取数流程。',
    },
    {
      title: '重构分析流程',
      description:
        '从简单查询逐步升级到诊断、预测和指导型分析。',
    },
    {
      title: '赋能多类角色',
      description:
        '针对管理、经营分析、一线人员提供不同深度的数据服务。',
    },
  ],

  features: [
    {
      title: '智能问数',
      description:
        '根据账期、地域、指标和维度理解问数意图，提供数据卡片、详情、下钻和解读。',
    },
    {
      title: '智能报表',
      description:
        '通过报表选项卡和自然语言灵活配置查询条件、指标和报表内容。',
    },
    {
      title: '智能报告',
      description:
        '基于历史报告和知识生成报告大纲，并支持Word、PPT、HTML等输出。',
    },
    {
      title: '智能分析',
      description:
        '围绕业务异动开展异常识别、归因分析、深度思考和趋势预测。',
    },
    {
      title: '智能体记忆',
      description:
        '支持记忆抽取、组织、检索、更新和共享，增强连续分析体验。',
    },
    {
      title: '业务语义与本体',
      description:
        '结合数据语义和业务本体能力，提升智能分析对业务逻辑的理解。',
    },
  ],

  architectureImage: '/images/products/data-agent-architecture.png',

  architectureDescription:
    '底层接入数据库、数据文件和数据接口，在通用能力层提供语义理解、代码生成、知识检索、数据语义和业务本体等能力，并构建智能体记忆体系；上层形成智能问数、智能报表、智能报告和智能分析四类应用能力，统一通过PC、移动端和小程序服务不同业务角色。',

  scenarios: [
    {
      title: '管理人员看数',
      description:
        '快速获取核心经营数据、趋势变化和重点异常。',
    },
    {
      title: '经营分析',
      description:
        '辅助分析人员开展异动诊断、归因分析和经营报告生成。',
    },
    {
      title: '一线业务取数',
      description:
        '通过移动端和自然语言快速查询业务数据。',
    },
    {
      title: '行业数据分析',
      description:
        '向政务、工业、金融等行业场景输出智能数据分析能力。',
    },
  ],

  advantages: [
    {
      title: '自然语言交互',
      description:
        '降低复杂查询、报表和数据分析工具的使用门槛。',
    },
    {
      title: '分析能力递进',
      description:
        '覆盖描述、诊断、预测和指导型数据分析过程。',
    },
    {
      title: '角色化服务',
      description:
        '针对不同业务角色提供差异化的数据分析体验。',
    },
    {
      title: '多端协同',
      description:
        '支持PC、移动应用和小程序等不同终端形式。',
    },
  ],

  metrics: [
    {
      value: '3类',
      label: '核心用户角色',
    },
    {
      value: '4项',
      label: '核心产品能力',
    },
    {
      value: '4阶段',
      label: '数据分析方法论',
    },
  ],

  cases: [
    {
      title: '企业经营分析',
      description:
        '面向政企、财务、客服等内部业务线提供智能问数、报表和经营分析能力。',
    },
    {
      title: '行业智能分析',
      description:
        '面向政务、工业、金融等行业形成可复制的数据智能分析产品能力。',
    },
  ],

  tags: [
    '数据智能体',
    '智能问数',
    '智能报表',
    '智能报告',
    '智能分析',
  ],

  featured: true,

  order: 5,

  status: 'available',
}, 

  {
  id: 'self-service-bi',

  slug: 'self-service-bi',

  name: '自助数据分析平台',

  shortName: '自助分析',

  category: 'analytics',

  tagline:
    '让业务人员成为数据分析的主人，实现人人可用、人人分析。',

  description:
    '面向管理决策者、业务分析师和一线业务人员，通过可视化操作降低数据分析门槛，构建自助取数、自助分析、自助图表、自助脑图四大能力，覆盖从数据获取、加工、探索到业务应用的完整自助分析流程。',

  values: [
    {
      title: '业务自主取数',
      description:
        '减少传统需求沟通和IT开发过程，让业务人员直接获取所需数据。',
    },
    {
      title: '低门槛分析',
      description:
        '通过类Excel、拖拽和可视化分析流降低分析工具学习成本。',
    },
    {
      title: '快速业务响应',
      description:
        '缩短数据需求响应周期，提高营销、经营分析等场景的数据时效性。',
    },
  ],

  features: [
    {
      title: '自助分析',
      description:
        '提供类Excel交互、可视化分析流和分析操作自动记录能力。',
    },
    {
      title: '自助取数',
      description:
        '通过标签、条件拖拽和复合查询方式快速获取业务数据。',
    },
    {
      title: '自助图表',
      description:
        '提供多类可视化组件和仪表板能力，支持下钻、上卷、联动和跳转。',
    },
    {
      title: '自助脑图',
      description:
        '按照业务思维逐层下钻分析，辅助目标客群筛选和业务洞察。',
    },
  ],

  architectureDescription:
    '平台围绕数据接入、轻量预处理、数据探索和业务应用构建自助分析能力，上层提供自助分析、自助取数、自助图表和自助脑图四类业务工具，并通过项目、权限、任务、数据分发及运维能力支撑企业级应用。',

  scenarios: [
    {
      title: '业务自助取数',
      description:
        '通过拖拽标签和条件快速生成业务用户清单。',
    },
    {
      title: '交互式探索分析',
      description:
        '业务人员基于数据进行多轮分析、加工和探索。',
    },
    {
      title: '经营报表',
      description:
        '快速构建经营分析类、通报类和专题类报表。',
    },
    {
      title: '客群洞察',
      description:
        '通过脑图式下钻定位目标客户群并形成营销策略。',
    },
  ],

  advantages: [
    {
      title: '业务友好',
      description:
        '通过类Excel和拖拽式操作降低使用门槛。',
    },
    {
      title: '分析灵活',
      description:
        '支持数据处理、探索、图表和脑图多种分析方式。',
    },
    {
      title: '响应快速',
      description:
        '减少数据需求排期和开发等待时间。',
    },
    {
      title: 'IT减负',
      description:
        '将高频简单取数分析需求交由业务人员自助完成。',
    },
  ],

  metrics: [
    {
      value: '4大',
      label: '核心产品能力',
    },
    {
      value: '60+',
      label: '可视化组件',
    },
    {
      value: '30+',
      label: '系统内置函数',
    },
  ],

  cases: [
    {
      title: '营销客群快速筛选',
      description:
        '通过标签拖拽和自助取数快速筛选目标客户群，减少传统脚本开发与多轮需求沟通。',
    },
    {
      title: '经营分析报表',
      description:
        '通过自助图表快速完成经营分析、专题分析等可视化应用。',
    },
  ],

  tags: [
    '自助分析',
    '自助取数',
    '数据可视化',
    'BI',
    '业务分析',
  ],

  featured: false,

  order: 6,

  status: 'available',
},

{
  id: 'trusted-data-space',

  slug: 'trusted-data-space',

  name: '企业可信数据空间',

  shortName: '可信数据空间',

  category: 'circulation',

  tagline:
    '构建安全可信、可控可管的数据流通基础设施，让数据可用、可控、可追溯。',

  description:
    '充分复用数据中台存算、开发、治理和开放共享能力，升级可信认证、使用控制、清算和空间运营能力，对内构建企业可信数据流通环境，对外通过空间连接实现与合作伙伴及外部可信数据空间的互联互通。',

  values: [
    {
      title: '让数据敢流通',
      description:
        '通过身份认证、策略控制和可信技术降低敏感数据共享风险。',
    },
    {
      title: '让数据能流通',
      description:
        '通过连接器和统一流通流程解决跨主体数据连接和互操作问题。',
    },
    {
      title: '让流通可运营',
      description:
        '通过空间运营、清算、日志和场景管理形成持续的数据流通运营能力。',
    },
  ],

  features: [
    {
      title: '空间入驻与认证',
      description:
        '统一管理空间主体、身份认证和连接器注册激活。',
    },
    {
      title: '数据使用控制',
      description:
        '通过精细化策略管理数据使用范围、条件和行为。',
    },
    {
      title: '可信数据交付',
      description:
        '支持密态交付、存证溯源等方式保障数据安全使用。',
    },
    {
      title: '数据产品流通',
      description:
        '覆盖数据产品上架、发布、发现、订购和使用过程。',
    },
    {
      title: '空间运营管理',
      description:
        '提供运营、场景、清算和日志审计等管理能力。',
    },
    {
      title: '空间互联互通',
      description:
        '支持企业内部空间以及外部行业、城市等可信数据空间连接。',
    },
  ],

  architectureDescription:
    '以湖仓一体、数据开发、数据资产、数据治理和开放共享等数据中台能力为基础，通过连接器连接供数方与用数方，并在上层建设空间入驻认证、控制、运营、清算和场景等能力，实现数据产品接入、发布、订购、可信交付、使用控制和空间互联。',

  scenarios: [
    {
      title: '省分数据可信流通',
      description:
        '支撑集团内部总部、省分和子公司之间重要敏感数据安全流通。',
    },
    {
      title: '数智公司数据共享',
      description:
        '强化数据资源供给透视和使用运营分析。',
    },
    {
      title: '跨境数据可信流通',
      description:
        '支撑境内外组织间业务及经营数据合规可信流通。',
    },
    {
      title: '供应链数据共享',
      description:
        '支撑产业上下游数据共享和业务协同。',
    },
    {
      title: '通信行业结算互信',
      description:
        '支撑通信行业结算数据互通及差异溯源。',
    },
  ],

  advantages: [
    {
      title: '数据中台能力复用',
      description:
        '基于既有数据存算、开发治理和开放共享能力升级建设。',
    },
    {
      title: '可用不可见',
      description:
        '通过隐私计算、密态交付等方式降低原始数据暴露风险。',
    },
    {
      title: '精细化使用控制',
      description:
        '提供细粒度数据使用策略和全过程管控。',
    },
    {
      title: '内外空间互联',
      description:
        '同时支撑企业内部可信流通及外部可信数据空间互联。',
    },
  ],

  metrics: [
    {
      value: '12个',
      label: '省分密态计算接入',
    },
    {
      value: '5类',
      label: '业务场景',
    },
    {
      value: '24种',
      label: '原子使用策略',
    },
    {
      value: '30%',
      label: '亿级隐私计算效率提升',
    },
  ],

  cases: [
    {
      title: '集团内部数据可信流通',
      description:
        '构建总部、省分和子公司可信数据流通体系，提升敏感数据供给效率与安全管控能力。',
    },
    {
      title: '跨空间互联',
      description:
        '通过连接器支撑与行业、城市及合作伙伴可信数据空间互联。',
    },
  ],

  tags: [
    '可信数据空间',
    '数据流通',
    '使用控制',
    '隐私计算',
    '空间互联',
  ],

  featured: true,

  order: 7,

  status: 'available',
},

{
  id: 'data-pricing',

  slug: 'data-pricing',

  name: '数据计量计价平台',

  shortName: '计量计价',

  category: 'circulation',

  tagline:
    '让数据成本算得清、价值看得见、价格定得准、流通算得明。',

  description:
    '围绕数据资产全生命周期价值管理，构建成本、收益、定价、计费和价值五大能力中心，实现数据成本核算、收益洞察、科学定价、流通计量计费和价值运营，支撑企业数据资产精益运营和数据要素价值释放。',

  values: [
    {
      title: '算清数据成本',
      description:
        '建立全要素成本核算体系，看清数据建设、加工和运营投入。',
    },
    {
      title: '量化数据价值',
      description:
        '通过收益和贡献度分析衡量数据对业务场景的实际赋能价值。',
    },
    {
      title: '支撑数据流通',
      description:
        '建立科学定价、计量、计费和结算体系，为内部共享和外部流通提供依据。',
    },
  ],

  features: [
    {
      title: '成本管理',
      description:
        '通过成本智算图谱实现从底层资源到业务项目的成本穿透。',
    },
    {
      title: '收益管理',
      description:
        '构建多维收益评估与贡献模型，量化不同数据赋能场景的收益。',
    },
    {
      title: '定价管理',
      description:
        '支持成本、衍生和市场等定价模型，完成数据资产科学定价。',
    },
    {
      title: '计费管理',
      description:
        '支持数据流通计量、批价、计费、账单和明细溯源。',
    },
    {
      title: '价值运营',
      description:
        '通过成本、用量和收益分析持续优化数据资产运营策略。',
    },
  ],

  architectureDescription:
    '平台围绕成本管理、收益管理、定价管理、计费管理和价值管理五大能力中心建设，底层自动接入成本、项目、流通、收益和价值等数据，上层支撑成本核算、收益洞察、数据资产定价、流通计量计费及运营价值透视等业务。',

  scenarios: [
    {
      title: '企业数据成本管理',
      description:
        '核算数据建设和运营投入，实现成本透明化管理。',
    },
    {
      title: '数据赋能收益评估',
      description:
        '测算数据对营销、经营等业务场景的实际贡献。',
    },
    {
      title: '内部数据共享结算',
      description:
        '为跨部门、跨组织数据共享提供计量和成本分摊依据。',
    },
    {
      title: '外部数据流通',
      description:
        '支持数据产品定价、计费、结算和收益分配。',
    },
    {
      title: '数据资产价值运营',
      description:
        '通过数据价值矩阵识别高价值、潜力和低效数据资产。',
    },
  ],

  advantages: [
    {
      title: '全生命周期价值管理',
      description:
        '贯通数据投入、使用、收益、定价和流通全过程。',
    },
    {
      title: '成本精细穿透',
      description:
        '支持成本逐层下钻到数据资源和业务项目。',
    },
    {
      title: '多模型科学定价',
      description:
        '综合成本、衍生价值和市场因素进行数据定价。',
    },
    {
      title: '价值运营闭环',
      description:
        '通过监测、策略、任务和反馈持续优化数据资产价值。',
    },
  ],

  metrics: [
    {
      value: '5大',
      label: '能力中心',
    },
    {
      value: '12项',
      label: '业务功能',
    },
    {
      value: '7类',
      label: '成本核算规则',
    },
    {
      value: '3类',
      label: '定价模型',
    },
  ],

  cases: [
    {
      title: '数据成本精准核算',
      description:
        '通过成本智算图谱按机构、资源类型、项目等维度拆解数据成本。',
    },
    {
      title: '数据流通计量计价',
      description:
        '建立数据定价、计量、计费和结算闭环，为内部结算及外部流通提供量化依据。',
    },
    {
      title: '数据价值运营',
      description:
        '通过成本、用量、收益多维分析识别数据资产价值并制定运营策略。',
    },
  ],

  tags: [
    '数据计量',
    '数据计价',
    '成本管理',
    '收益评估',
    '价值运营',
  ],

  featured: true,

  order: 8,

  status: 'available',
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
