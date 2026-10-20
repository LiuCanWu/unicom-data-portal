# 联通数据智能产品门户 — 项目上下文（Task01～Task14）

> 目的：作为 Codex 与项目人员的**历史决策和产品上下文交接文档**，避免仅从代码推断意图。
> 版本：2026-10-20 交接整理版。
> 重要说明：本文件根据此前任务沟通和已提供的代码方案整理，不是对用户本地仓库的现场审计；实际落地状态以 Git、文件内容、`npm run build` 和页面验收为准。

## 一、项目背景和建设目标

### 1.1 背景

中国联通数据中台正在推进系列数据产品的标准化、产品化、对内赋能与对外推广。产品能力横跨数据存算、生产治理、AI 高质量数据、业务语义、数据分析与智能体、可信流通及数据价值运营。此前各产品相对独立，缺少面向客户的统一认知与体验入口。

门户建设参考字节火山引擎 VeDI、阿里瓴羊系列产品及腾讯相关数据智能产品的官网呈现方式，但**不等于复制它们的具体产品功能**。门户在产品化转型中的作用是：统一品牌/体系认知、清晰传达产品价值、承载 Demo 和试用入口、促进售前交流与后续转化。

### 1.2 MVP 边界

当前定位是**轻量数据产品展示门户**，不是新的智能计算产品。

- 做：官网式首页、产品体系、产品列表、详情介绍、能力与场景展示、案例指标、体验中心、演示/试用跳转或占位。
- 暂不做：Agent、NL2SQL、RAG、模型调用、可信数据空间底层功能、本体建模执行引擎等产品能力的开发；复杂权限、CRM、重型 CMS 和自动试用环境管理。
- 第一版可以完全静态部署；已有 FastAPI 基础代码并不意味着 MVP 必须运行后端。
- Demo 与独立试用环境由各产品团队提供。无真实链接时，应如实显示“准备中”，不能把展示页冒充真实 Demo。

### 1.3 用户及典型场景

主要对象：联通内部业务人员、售前/市场团队、对外行业客户、合作伙伴、管理及评审人员。典型路径：了解产品体系 → 识别匹配的产品 → 阅读详情与案例 → 观看 Demo → 提出试用/咨询意向 → 进入独立产品试用环境（开放后）。

## 二、产品体系和内容口径

### 2.1 8 个产品

| 序号 | 当前统一名称 | slug 约定 | 主要定位 | 首页推荐状态（历史设置） |
| --- | --- | --- | --- | --- |
| 1 | 湖仓一体数据平台 | `lakehouse` | 大规模数据统一承载、存算与多引擎融合 | 精选 |
| 2 | 全链路数据智能生产流水线 | `data-pipeline` | 数据采集、开发加工、智能算子、质检与治理 | 精选 |
| 3 | AI高质量数据集 | `ai-dataset` | 面向 AI 训练/应用的高质量多模态数据资产 | 精选 |
| 4 | 本体建模平台 | `ontology` | 对象、关系、规则、行动构成企业语义层 | 精选 |
| 5 | 专家级数据智能体 | `data-agent` | 智能问数、报表、报告、分析与决策辅助 | 精选 |
| 6 | 自助数据分析平台 | `self-service-bi` | 自助取数、分析、图表和脑图 | 非精选，但应在完整目录与体系图展示 |
| 7 | 企业可信数据空间 | `trusted-data-space` | 可信共享、空间运营和数据流通 | 精选 |
| 8 | 数据计量计价平台 | `data-pricing` | 成本核算、收益评估、定价计费、价值运营 | 精选 |

名称、`id`、`slug`、`featured`、`order` 可能在实际仓库中有所差异；开发时必须检查 `frontend/src/data/products.ts`。不要通过更改产品名称掩盖映射错误。

### 2.2 五大分类

| 类型标识 | 中文产品家族 | 包含产品（概念） |
| --- | --- | --- |
| `infrastructure` | 数据基础设施 | 湖仓一体数据平台 |
| `data-engineering` | 数据生产治理 | 全链路流水线、AI高质量数据集 |
| `semantic` | 智能语义 | 本体建模平台 |
| `analytics` | 数据分析智能 | 自助数据分析平台、专家级数据智能体 |
| `circulation` | 数据流通 | 企业可信数据空间、数据计量计价平台 |

### 2.3 首页产品体系逻辑

Task14 多次优化后，最终选用较克制的**四层可点击架构图**，在首屏右侧展示完整 8 产品：

```text
应用层：自助数据分析平台 | 专家级数据智能体 | 数据计量计价平台
                      ↑ 数据服务
流通层：数据提供方 → 企业可信数据空间 ← 数据使用方
                      ↑ 高质量数据供给
加工层：全链路数据智能生产流水线 → AI高质量数据集 ↔ 本体建模平台
                      ↑ 统一数据供给
底座层：湖仓一体数据平台
        内部数据 / 开源数据 / 商用数据 / 行业数据
```

**图示用于客户理解，不应误读为严格的物理部署依赖**：例如可信数据空间并不是所有智能体应用的唯一必经路径；计量计价出现在应用层是为了官网阅读简化，其能力也可以横向服务多环节；本体是业务语义能力而非简单的数据集“后处理步骤”。对外技术方案应进一步按真实产品接口/部署边界说明。

首页其他内容包括：一句话价值主张、8/5/7 动态数量（总产品/产品分类/精选产品）、六阶段能力地图、五大产品家族目录、七大核心产品、四类业务场景、企业级优势与 CTA。

六阶段价值链：数据底座 → 数据生产 → 智能语义 → 智能应用 → 可信流通 → 价值运营。它是叙事和导航结构，不等同于严格的执行流水线。

### 2.4 典型内容资产及注意事项

下列内容来自项目此前用于产品介绍的材料或讨论口径，供核对 `products.ts` 使用，不保证是最新对外发布口径。对外展示前应由各产品负责人确认。

**湖仓一体数据平台**：强调全栈信创、大规模数据湖、多引擎融合计算、统一元数据与权限、集群管控；历史宣传指标含 `1.5万+ 节点`、`360PB+`、`900+ 租户`、`4倍+ 处理效率`。存在大型集团数据平台及中国矿产场景资料。

**全链路数据智能生产流水线**：多源接入、加工治理、智能算子、质量检测、任务调度、AI 数据供给。历史口径有 `163+ 智能算子`、`12个维度`、`74项质检`、`75%+ 智能化生产比例`；是否属于实际成效或建设指标须再确认。

**AI高质量数据集**：目前只有基本产品定位和简要内容，**尚未提供对应独立产品介绍 PPT**。不得编造丰富产品能力、客户案例或现网实测指标。总体 AI 数据集建设目标与该单产品已交付能力需要严格区分。

**本体建模平台**：对象/关系/规则/行动作为业务语义基础，连接数据与 AI；曾讨论 6 个本体建设环节和政企收入根因分析、宽带退单审核场景。`10万+ 属性`、`≥95% 规则判定准确率`、`≥99% API成功率` 等历史口径属于建设/验收目标，不应当作已实现。

**专家级数据智能体**：面向管理、经营分析、一线 3 类角色，核心能力智能问数、智能报表、智能报告、智能分析；与业务本体/数据语义协作，支持描述、诊断、预测、建议类分析路径。门户只做产品介绍和入口，不在自身实现这些能力。

**自助数据分析平台**：自助取数、自助分析、自助图表、自助脑图；历史资料提及 `60+ 可视化组件`、`30+ 分析函数`。应与智能体产品明确差异：自助分析强调人工自主探索，数据智能体强调自然语言与智能执行辅助。

**企业可信数据空间**：可信认证、使用控制、可信交付、流通运营及空间互联；材料提及 `12个省份`、`5类场景`、`24种原子使用策略`、某隐私计算场景效率提升等。需再次确认表述及测算对象。

**数据计量计价平台**：成本、收益、定价、结算/计费、价值运营 5 个中心；历史资料提及 `12项业务功能`、`7类成本规则`、`3类定价模型`。与可信数据空间形成价值协作，但不是同一个产品。

## 三、技术架构与关键数据结构

### 3.1 技术选型

- 前端：Vue 3、TypeScript、Vite、Vue Router、Element Plus、Axios。
- 后端基础：FastAPI，存在 `/api/health` 健康检查与 CORS、Vite 本地反向代理集成的历史方案。
- 本期内容：前端静态 TypeScript 对象配置（`frontend/src/data/`）。
- 部署方向：内部演示或外部官网均先评估纯静态发布；历史曾规划 Nginx、Docker Compose，但部署实施属于 Task15，不计入已完成项。
- Windows 11 开发，使用 PowerShell、VSCode；`npm` 必须在 `frontend` 子目录执行。

### 3.2 主要类型

`frontend/src/types/product.ts` 历史版本：

```ts
export type ProductCategory =
  | 'infrastructure'
  | 'data-engineering'
  | 'semantic'
  | 'analytics'
  | 'circulation'

export interface ProductFeature { title: string; description: string }
export interface ProductScenario { title: string; description?: string }
export interface ProductAdvantage { title: string; description: string }
export interface ProductValue { title: string; description: string }
export interface ProductMetric { value: string; label: string; description?: string }
export interface ProductCase { title: string; description: string; result?: string }
export interface ProductLink { label: string; url: string; enabled: boolean }

export interface Product {
  id: string
  slug: string
  name: string
  shortName?: string
  category: ProductCategory
  tagline: string
  description: string
  values?: ProductValue[]
  features: ProductFeature[]
  scenarios: ProductScenario[]
  advantages?: ProductAdvantage[]
  metrics?: ProductMetric[]
  cases?: ProductCase[]
  tags: string[]
  coverImage?: string
  architectureImage?: string
  architectureDescription?: string
  demoVideo?: string
  demoLink?: ProductLink
  trialLink?: ProductLink
  featured: boolean
  order: number
  status: 'available' | 'coming-soon'
}
```

`frontend/src/types/experience.ts` 历史版本：

```ts
export type ExperienceType = 'demo' | 'video' | 'trial'
export type ExperienceStatus = 'available' | 'preparing'

export interface ExperienceItem {
  id: string
  productId: string
  type: ExperienceType
  title: string
  description: string
  status: ExperienceStatus
  featured?: boolean
  previewImage?: string
  url?: string
  tags: string[]
  order: number
}
```

`Product` 与 `ExperienceItem` 的关系以 `productId` 映射产品数据；详情跳转使用真实 `slug`。如果未来新增服务端 API，应保留前端类型安全，避免把 UI 数据结构和后端 DTO 随意混合。

### 3.3 路由与页面

| 路由 | Vue 页面 / 意图 |
| --- | --- |
| `/` | 首页 `HomeView.vue` |
| `/products` | 产品中心 `ProductsView.vue` |
| `/products/:slug` | 通用详情模板 `ProductDetailView.vue` |
| `/experience` | 体验中心 `ExperienceView.vue` |
| `/solutions` | 解决方案介绍（MVP 可简化） |
| `/about` | 关于/公司相关介绍（MVP 可简化） |
| 其他 | 404 页面 |

详情页使用 `ProductHero.vue`、`ProductSectionTitle.vue`、`ProductFeatureGrid.vue`、`ProductScenarioGrid.vue` 等复用组件。对 `Product` 缺失的 `metrics`、`cases` 应隐藏对应区块，不构造虚假空卡片。

`ProductHero.vue` Props：`product: Product`、`categoryName: string`；emit：`experience`、`trial`。`ProductSectionTitle.vue` Props：`eyebrow?: string`、`title: string`、`description?: string`。曾因两个组件的 Props 混淆触发 TS2345 构建失败，检查后修复，不要在错误组件上硬加 `title`。

## 四、Task01～Task14 演进记录

以下“完成/提供”指此前对话中已逐步推进或生成代码方案；没有直接验证本地仓库的状态不标为“已构建验收”。

| Task | 主题 | 关键结果 / 决策 | 交接状态 |
| --- | --- | --- | --- |
| 01 | 项目初始化 | `frontend`、`backend`、`content`、`docs`、`deploy`、`.gitignore`、README、范围说明 | 已提供实施步骤；核对仓库 |
| 02 | Vue 前端初始化 | Vue3 + TS + Vite，路由、Element Plus、Axios | 已提供实施步骤；核对仓库 |
| 03 | FastAPI 初始化 | `app/main.py`、路由、配置、`/api/health` | 已提供实施步骤；核对仓库 |
| 04 | 前后端联调 | 本地 CORS、Axios、Vite `/api` 代理 | 已提供实施步骤；核对仓库 |
| 05 | 信息架构与路由 | 首页/产品/详情/体验/解决方案/关于/404 | 已提供实施步骤；核对仓库 |
| 06 | 全局 UI | Header、Footer、DefaultLayout、PageHero、全局设计体系 | 已提供实施步骤；核对仓库 |
| 07 | 首页 V1 | Hero、产品家族、核心产品、优势、应用场景、CTA | 已提供实施步骤；后续 Task14 重构 |
| 08 | 产品数据模型 | 5 类分类、8 产品、类型及查询函数；首页 7 精选产品 | 已提供实施步骤；核对仓库 |
| 09 | 产品中心 | 分类筛选、产品卡片、产品价值链 | 已提供实施步骤；Task14.3 重构 |
| 10 | 产品详情模板 | 通用 Hero、价值、能力、场景、架构及 CTA | 已提供实施步骤；Task14.4 重构 |
| 11 | 产品内容深化 | 依据多个介绍 PPT 深化 7 产品；AI数据集保留基础版；加入指标、案例 | 已提供内容；须核对口径 |
| 12 | 体验中心 | 三类资源、`ExperienceItem`、8 个准备中 Demo、重点资源与过滤 | 已提供实施步骤；Task14.3 重构 |
| 13 | 试用/联系入口 | 原拟轻量申请及转化流程 | **用户明确跳过，未实施** |
| 14.1 | 全局视觉精修 | 统一颜色、字体、边距、卡片样式、Header、PageHero | 已提供代码；核对仓库 |
| 14.2 | 首页重构 | 8 产品分层体系图，减少字/增强层次、动态统计、六阶段地图 | 多轮迭代至最终代码；核对仓库 |
| 14.3 | 产品/体验中心精修 | 产品家族展示、筛选、列表；体验模式/重点资源/状态/流程 | 已提供完整代码；核对仓库 |
| 14.4 | 产品详情视觉精修 | Hero、SectionTitle、指标展示、架构无图展示、案例、体验 CTA | 已提供完整代码；核对仓库 |

Task14 后续曾讨论采用 ChatGPT 做产品/架构/验收、VSCode Codex 负责直接查看仓库、修改代码、执行构建的协作方式。本次两份交接文档即服务该转型。

## 五、当前页面的视觉与功能原则

### 5.1 统一设计语言

强调央企 B2B 官网的专业可信感，主色以蓝/深蓝为主，浅蓝灰作为留白背景；减少不必要渐变、装饰、过多小标签与密集边框；突出结构和可读性，避免“大屏 PPT 直接塞进网页”。常用全局变量在 `frontend/src/style.css` 中，可能包括 `--color-primary`、`--color-text-primary`、`--color-text-secondary`、`--color-bg-light`、`--color-border`、`--page-max-width` 等，实际以源码为准。

### 5.2 页面职责

- 首页：第一眼认知体系，不承担长篇产品说明。Hero 右侧 8 产品四层架构，点击能进入对应详情。
- 产品中心：先讲体系与分类，再让客户筛选产品。5 类产品家族、全部产品列表、跳转详情。
- 体验中心：先讲 Demo/视频/试用三种方式，再展示重点资源、全部资源和状态。初版 8 个 Demo 为 `preparing`，没有实测 URL 时不可展示可用。
- 详情页：是什么 → 价值 → 核心能力 → 关键指标 → 产品架构 → 场景 → 优势 → 案例 → Demo/试用；按是否有真实数据有条件展示。

### 5.3 Demo vs 试用

| 维度 | Demo | 独立试用 |
| --- | --- | --- |
| 客户目的 | 快速理解“如何使用、有什么效果” | 自己操作，验证本业务场景适配性 |
| 交互自由度 | 通常预设样例和固定路径 | 相对自由，有账号/数据/配额约束 |
| 实现依赖 | 视频、演示页面或独立演示环境 | 实际产品环境、权限、资源、运维和安全 |
| 门户职责 | 展示资源与跳转 | 展示入口/申请状态/跳转，不代建环境 |

## 六、历史问题与检查事项

1. `npm run build` 曾报 `ProductHero` 缺少必填 `title`（TS2345）：属于组件 Props 混淆，不应简单添加 `title` 参数掩盖错误。应核对两个组件的真实定义。
2. 从仓库根目录执行 `npm run dev` 曾发生 `ENOENT package.json`；应进入 `frontend/`。
3. 曾存在 `request.ts` / `requset.ts` 拼写冲突，跨文件更改须核对导入路径。
4. `Vue Router` 历史模式为 `createWebHistory`，静态部署须做 SPA fallback。
5. Header 的导航高亮问题曾被明确延后，除非影响后续开发，不应自动扩大改动范围。
6. 部分产品数字属于“建设目标”，不是“上线成效”；详情页不能统一用“已达成”语气。
7. 多轮 Task14 代码曾以整文件形式提供，因此真实仓库可能处在不同版本；**Codex 必须先检查文件和 Git 状态，严禁按此文档假定代码已落地**。

## 七、后续建设边界（仅记录，不构成任务书）

- Task13：此前跳过的试用申请/联系转化功能，需要产品负责人决定何时补做。MVP 可以先使用明确的占位，不要求后端收集客户数据。
- Task15：未来可开展静态发布、Nginx/容器部署与环境安全设置，具体架构须根据真实内外部目标与资源决定；**本文件不是 Task15 任务书**。
- Task16：未来进行端到端 MVP 验收、缺陷清单、后续 V2 路线规划。

## 八、Codex 接手时的首次核验建议

首次打开仓库时，建议只进行阅读和检查，先不改业务代码：

1. 查看 `git status`、`frontend/package.json`、`frontend/src/router/`、`frontend/src/data/` 及相关 Vue 页面。
2. 检查 `Product`/`ExperienceItem` 类型、产品的 `id`、`slug`、featured 与 status 映射；验证产品体系图的 8 个详情跳转。
3. 在 `frontend/` 运行 `npm run build`，记录真实结果。
4. 确认没有真实外部试用链接时仍处于准备中状态；不要创造虚假链接。
5. 给出“代码现状 vs 本交接文档”的差异清单，再由负责人决定是否修复。

**总原则：项目先强调产品体系的准确表达与可演示性，再推动真实 Demo、试用环境、部署、运营转化；不要让门户变成重复研发各数据产品能力的新平台。**
