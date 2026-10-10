# UDP MVP 项目范围

## 1. 项目定位

联通数据智能产品门户是面向内部售前人员、
合作伙伴及外部客户的数据产品统一展示入口。

门户本身不承载具体数据产品业务能力。

## 2. MVP 建设范围

第一阶段建设：

1. 门户首页
2. 产品家族
3. 产品详情
4. Demo 展示
5. 产品体验入口
6. 联系/试用入口

## 3. 非 MVP 范围

当前阶段暂不建设：

- 用户注册登录体系
- IAM
- 租户体系
- 自动创建试用环境
- 产品业务能力
- AI Agent 能力
- NL2SQL
- RAG
- 大模型调用
- Demo 编排平台
- CRM
- 重型 CMS

## 4. 产品体验原则

门户负责：

产品介绍
→ Demo 展示
→ 体验入口

真正的产品能力由独立产品环境提供。

## 5. 第一批产品

暂定：

1. 湖仓一体
2. 全链路数据智能生产流水线
3. AI 高质量数据集
4. 专家级数据智能体

## 6. 项目现状与后续规划

当前代码状态、方案架构图、已完成能力、风险和分阶段待办见：

- [项目现状与后续规划](docs/PROJECT_STATUS.md)

## 7. 本地启动

前端：

```bash
cd frontend
npm install
npm run dev
```

后端：

```bash
cd backend
python -m uvicorn app.main:app --reload
```

后端健康检查地址：`http://localhost:8000/api/health`。前端 API 地址可通过 `VITE_API_BASE_URL` 配置。
