# AGENTS.md — 联通数据智能产品门户开发协作规范

> 适用范围：`unicom-data-portal/` 整个仓库。供 VSCode Codex 等代码代理读取。
> 维护原则：以仓库中的真实代码、配置和构建结果为最终依据；本文是截至 Task14.4 的项目交接约束，不代表所有任务已在本机验证通过。

## 1. 项目目标与边界

项目名称：联通数据智能产品门户（Unicom Data Portal，仓库名 `unicom-data-portal`）。

**MVP 目标**：为中国联通的数据智能产品提供统一对外展示入口，包含产品介绍、产品体系、产品详情、Demo/视频资源入口与试用入口占位，便于内外部客户快速理解和选择产品。

**门户不是各产品的业务运行平台**：不在门户内重新研发 AI Agent、NL2SQL、RAG、模型调用、数据开发/治理引擎、可信空间引擎、本体计算等底层产品能力；这些能力由独立产品或演示环境提供，门户负责介绍与跳转。

MVP 优先支持**纯前端静态展示**，不应为了静态页面强行引入后端、数据库或运维组件。既有 FastAPI 后端可保留，是否部署应由实际功能需要决定。

当前不做或未经批准不得擅自新增：完整登录/用户中心、IAM、多租户权限、自动创建试用环境、CRM、复杂 CMS、Demo 业务编排、重型运维技术栈。

## 2. 技术栈与仓库约定

| 模块 | 选型与约定 |
| --- | --- |
| 前端 | Vue 3 + TypeScript + Vite + Vue Router + Element Plus + Axios |
| 后端（已有基础） | Python FastAPI + Pydantic Settings，含健康检查接口 |
| 运行/部署方向 | 静态前端优先；后续视需要使用 Nginx、Docker Compose |
| 数据管理（MVP） | 前端 `src/data/` 中的静态配置，不预设数据库 |
| 样式 | `frontend/src/style.css` 的设计变量 + Vue SFC `scoped` CSS |
| 版本管理 | Git，提交粒度围绕单个任务/合理的功能闭环 |

预期结构（实际文件名与路径必须以工作区检查为准）：

```text
unicom-data-portal/
├─ AGENTS.md
├─ README.md
├─ frontend/
│  ├─ package.json
│  └─ src/
│     ├─ components/
│     │  ├─ PageHero.vue
│     │  └─ product/
│     ├─ data/
│     │  ├─ products.ts
│     │  ├─ productFamilies.ts
│     │  └─ experiences.ts
│     ├─ types/
│     │  ├─ product.ts
│     │  └─ experience.ts
│     ├─ views/
│     │  ├─ HomeView.vue
│     │  ├─ ProductsView.vue
│     │  ├─ ProductDetailView.vue
│     │  └─ ExperienceView.vue
│     └─ router/
├─ backend/
│  └─ app/
├─ content/
├─ docs/
│  ├─ project-scope.md
│  └─ project-context.md
└─ deploy/
```

启动与校验（在 `frontend/` 执行）：

```powershell
npm install
npm run dev
npm run build
```

`npm run build` 包含 `vue-tsc -b && vite build`；前端必须在 TypeScript 检查和构建均通过时才可报告构建成功。后端若实际涉及修改，再根据现有虚拟环境/依赖运行对应检查，不要臆造命令。

## 3. 核心产品范围：8 个

| 产品 | 典型 slug | 展示定位 |
| --- | --- | --- |
| 湖仓一体数据平台 | `lakehouse` | 统一数据存储与计算底座 |
| 全链路数据智能生产流水线 | `data-pipeline` | 采集、加工、治理、质检与高质量供数 |
| AI高质量数据集 | `ai-dataset` | 面向模型训练及 AI 应用的高质量数据资产 |
| 本体建模平台 | `ontology` | 对象、关系、规则、行动等企业业务语义 |
| 专家级数据智能体 | `data-agent` | 智能问数、报表、报告、分析 |
| 自助数据分析平台 | `self-service-bi` | 业务自助取数、分析、图表、脑图 |
| 企业可信数据空间 | `trusted-data-space` | 跨主体可信共享、使用控制、流通协作 |
| 数据计量计价平台 | `data-pricing` | 成本、收益、定价、计量计费、价值运营 |

**重要：**上表 `slug` 是历史设计约定；修改导航或跳转前须检查 `frontend/src/data/products.ts` 真实 `id` 与 `slug`，不要推断二者相同。当前首页“核心产品”历史配置是 7 个 featured 产品（自助数据分析未列入），但完整目录与体系图覆盖 8 个。

五个分类：`infrastructure`（数据基础设施）、`data-engineering`（数据生产治理）、`semantic`（智能语义）、`analytics`（数据分析智能）、`circulation`（数据流通）。产品分类以源码为准，不凭页面文字修改类型定义。

## 4. 页面与交互边界

主要路由：`/`、`/products`、`/products/:slug`、`/experience`、`/solutions`、`/about`，以及 404。路由需依据实际 `router` 配置确认。

- **首页**：展示整体价值主张、8 产品架构图、能力地图、产品家族、7 个精选产品、应用场景、优势和 CTA。
- **产品中心**：产品体系、5 类产品、分类筛选与产品卡片跳转。
- **产品详情**：产品价值、能力、指标、架构、场景、优势、案例、Demo/试用入口；某产品没有指标或案例数据时不渲染空区块。
- **体验中心**：Demo / 视频 / 试用三种资源类型，筛选、重点资源与状态区分。
- **无真实链接时**：保持准备中/占位说明，不得伪造 URL、伪造“已开通试用”或真实使用指标。

演示与试用严格区分：Demo 用于低成本理解产品功能和操作路径；试用意味着进入独立实际产品环境，可能涉及账号、数据、网络、权限和计算资源。门户当前不创建环境。

产品体系图的展示原则：按“应用层—流通层—加工层—底座层”突出层次与逻辑，完整映射 8 个产品；强调“减少文字、增强层次、官网质感”，不要改成复杂 PPT 式信息堆叠。

## 5. 数据真实性与内容规范

1. **先核对现有产品配置**，再改文案与指标。不得自造客户案例、经济收益、成熟度、上线状态、公开网址或建设成效。
2. 区分**已达成事实、阶段目标、规划指标、示例演示口径**。例如本体平台部分准确率/API 指标属于目标，不能改写为已实现成效。
3. AI高质量数据集尚未提供单独的产品介绍 PPT，已有简版信息可以保留，**不要在没有材料的情况下擅自深化为详细功能、客户案例或实测效果**。
4. 产品宣传措辞保持专业、克制、可验证，避免绝对化表述（如“业界第一”“100%可靠”）。
5. 图片、产品架构图、演示视频如没有真实资产，使用已设计的文字/图形展示方案，不引用未授权内容。

## 6. Codex 执行工作方式

每次开发任务按以下步骤推进：

1. **先读后改**：检查 `AGENTS.md`、`docs/project-context.md`、关联源码、配置、Git 状态与已有测试；如文档和代码不一致，指出并以真实源码为依据。
2. **控制范围**：仅改本次任务相关文件；不要顺手重构产品数据结构、改路由、重写整个首页或引入新依赖。
3. **优先复用**：使用现有类型、数据函数、Vue 组件与 CSS 变量；保留原有导航及跳转行为。
4. **实施时验证**：修改前识别依赖和使用点；修改后执行 `npm run build`，条件允许时做相关页面冒烟测试。
5. **反馈必须真实**：说明修改文件、功能效果、运行的命令、成功/失败及未验证内容。**绝不能只因为输出了代码就宣布 Task 已验收。**
6. **尊重未完成项**：Task13 尚被跳过；Task15/16 尚未作为本交接的一部分实施。未经明确指令，不擅自开始。
7. **安全保护**：不要提交真实口令、Token、密钥、内网地址或客户数据；使用示例环境变量文件，不把开发代理输出中的敏感内容提交 Git。
8. **平台兼容**：开发者主要在 Windows 11、PowerShell、VSCode 中工作；给出命令时说明执行目录，不假定 Bash 命令在 PowerShell 可直接运行。

### 特别需要防范的既有构建问题

- `ProductDetailView.vue` 引用 `ProductHero.vue` 时出现 `title` 属性缺失（TS2345）：历史原因是 `ProductHero.vue` 的 Props 与 `ProductSectionTitle.vue` 的 Props 定义混淆。**正确设计**：`ProductHero` 接收 `product: Product`、`categoryName: string`，发出 `experience`、`trial` 事件；`ProductSectionTitle` 接收 `eyebrow?`、`title`、`description?`。不要简单给 `<ProductHero>` 增加无关 `title` 来掩盖问题。
- 曾出现项目根目录直接 `npm run dev` 找不到 `package.json`（ENOENT）：npm 命令在 `frontend/` 执行。
- 早期有 `request.ts` / `requset.ts` 拼写不一致的问题：使用前确认现有实际文件路径。
- Vue Router `createWebHistory()` 发布到 Nginx 静态站点时需要 SPA fallback（如 `try_files $uri $uri/ /index.html;`）。

## 7. 任务状态与资料入口

- Task01～Task12：此前按步骤提供并迭代实现方案，**实际代码及构建结果需在本地复核**。
- Task13：**明确跳过，尚未实施**。
- Task14.1～14.4：已提供全局样式、首页、产品中心/体验中心与详情页精修方案及代码；**不可仅凭历史对话推断已经复制到仓库或通过最新构建**。
- Task15/16：后续规划，当前无需执行。

更完整的产品决策、任务演进、文件职责和历史素材事实，请读 [`docs/project-context.md`](docs/project-context.md)。

> 如需改变产品范围、引入新的后端能力、外部集成或调整建设优先级，请先征询项目负责人的明确授权。
