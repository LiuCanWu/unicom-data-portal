// 机构基础事实参考：济南市政府 2026-07-14 招聘介绍、哈工大计算学部 2022-05-18 机构介绍。
// 审核状态仅供内容维护使用。页面公开发布前需由院方确认组织介绍及建议性表述。
export type AboutReviewStatus = 'source-backed' | 'needs-internal-review'

export const aboutContent = {
  hero: {
    title: '中国联通软件研究院',
    englishName: 'China Unicom Software Research Institute',
    statement: '深耕自主研发，赋能数字化转型',
    description: '立足核心 IT 系统自主研发与规模化生产运营实践，持续推进技术创新与能力沉淀，为数字化、智能化发展提供技术支撑。',
    reviewStatus: 'needs-internal-review' as AboutReviewStatus,
  },
  introduction: {
    title: '关于中国联通软件研究院',
    paragraphs: [
      '中国联通软件研究院成立于 2015 年 7 月 1 日，本部位于北京，是中国联通 IT 自主研发和数字化转型的重要技术力量。',
      '软件研究院承担中国联通业务支撑域、管理支撑域、数据域及信息安全相关系统的研发和生产运营任务，在核心业务系统、智慧客服、大数据平台、数字化基础设施等领域积累了研发建设与生产运营经验。',
      '依托长期自主研发与大规模生产实践，软件研究院持续推进技术创新、能力沉淀和软件产品化建设，促进成熟技术能力向标准化产品和行业解决方案转化。',
    ],
    reviewStatus: 'needs-internal-review' as AboutReviewStatus, // 第三段产品化方向及整体对外口径待院方确认
  },
  principles: [
    {
      label: '核心使命',
      description: '以自主研发和技术创新为基础，支撑中国联通数字化转型，持续提升核心软件系统研发和智能化运营能力。',
      reviewStatus: 'needs-internal-review' as AboutReviewStatus,
    },
    {
      label: '发展愿景',
      description: '推动成熟技术能力向标准化、产品化、可复制交付转化，持续提升数据智能产品能力与行业赋能水平。',
      reviewStatus: 'needs-internal-review' as AboutReviewStatus,
    },
  ],
  milestones: [
    {
      marker: '2015',
      title: '软件研究院成立',
      description: '中国联通软件研究院于 2015 年 7 月成立，持续推进核心 IT 能力自主研发建设。',
      reviewStatus: 'source-backed' as AboutReviewStatus,
    },
    {
      marker: '持续推进',
      title: '核心系统集约化建设',
      description: '围绕核心业务支撑、智慧客服、数据平台等领域，推进集团级系统研发和建设。',
      reviewStatus: 'needs-internal-review' as AboutReviewStatus,
    },
    {
      marker: '持续深化',
      title: '数字化与智能化发展',
      description: '依托大数据、人工智能等技术，推动数据智能能力在业务运营场景中的应用。',
      reviewStatus: 'needs-internal-review' as AboutReviewStatus,
    },
    {
      marker: '发展方向',
      title: '产品化探索',
      description: '探索成熟技术能力的标准化、模块化和场景化交付。',
      reviewStatus: 'needs-internal-review' as AboutReviewStatus,
    },
  ],
  capabilities: [
    { title: '核心系统自主研发', description: '长期开展通信核心业务支撑系统研发与技术演进。', icon: 'system' },
    { title: '大规模生产运营', description: '积累集团级软件系统研发、部署、运维与运营实践。', icon: 'operations' },
    { title: '大数据与人工智能', description: '围绕数据平台、数据治理、智能分析和 AI 应用，建设数据智能技术能力。', icon: 'data' },
    { title: '技术创新与产品化', description: '推进成熟能力标准化、模块化与持续演进，支撑多场景应用与交付。', icon: 'innovation' },
  ],
  outcomes: [
    { title: '规模化系统建设', description: '持续承担核心 IT 系统研发与生产运营任务。' },
    { title: '自主研发技术积累', description: '在业务支撑、客服、数据等领域沉淀研发实践。' },
    { title: '专业能力建设', description: '围绕系统研发、数据技术与运营保障完善专业能力。' },
    { title: '行业创新探索', description: '结合数字化转型需求探索技术应用与协作场景。' },
  ],
} as const
