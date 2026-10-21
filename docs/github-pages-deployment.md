# GitHub Pages 部署说明

本项目将 `frontend/dist` 部署到独立仓库 `LiuCanWu/unicom-data-portal`，目标地址为 <https://liucanwu.github.io/unicom-data-portal/>。不会使用或修改 `LiuCanWu.github.io` 博客仓库。所有 PowerShell 命令除注明外在仓库根目录运行。

## 发布前检查

GitHub Pages 免费公开站点的源仓库和前端构建产物可能被任何人查看。请先由项目负责人确认产品文案、指标、案例、视频外链和架构图片允许公开。现有 Task15 文档也要求这些内容审核。

当前 Git 历史已经跟踪 `backend/.env` 和大量 `backend/.venv` 文件。**不要将当前历史直接推送到公开仓库。** `.gitignore` 只能阻止将来的误添加，不能删除已提交的历史内容。先检查环境文件、全部历史记录和其他可能敏感内容，再由负责人决定采用经审核的全新 Git 历史或清理历史。仅在最新提交中删除这些文件仍会让旧提交可见。任何已经泄露的凭证需要另行轮换。本次交付不自动执行历史重写、提交或推送。

## 创建仓库与首次推送

1. 登录 GitHub，进入 <https://github.com/new>，Owner 选 `LiuCanWu`，Repository name 填 `unicom-data-portal`。使用免费 Pages 时选择 **Public**。不要选已有的 `LiuCanWu.github.io` 仓库；若仓库已存在，先核对其归属和内容。建议新建时不勾选 README、`.gitignore` 或许可证初始化，以免首次推送产生不必要的合并。
2. 完成上节公开内容和 Git 历史审核，并整理成确认可公开的提交。首次提交前执行 `git status --short`、`git diff --stat`、`git diff --cached --stat` 和 `git ls-files backend/.env backend/.venv`，逐项核对待提交文件。仓库中现有未提交的 Task15 改动与本任务的改动应分别审核。特别确认最终要推送的**全部历史**不含敏感文件。不要使用 `git push --force`。
3. 在已获确认且已建立安全历史的仓库根目录，按实际待提交文件执行 `git add <已审核的文件>`，再执行 `git commit -m "chore: configure GitHub Pages deployment"`。不要无检查地使用 `git add .`。
4. 执行 `git remote -v`。如没有 `origin`，执行 `git remote add origin https://github.com/LiuCanWu/unicom-data-portal.git`；如果已有 `origin`，先核对它是否指向目标仓库，不要直接覆盖。确认本地分支为 `main`，远程是新建空仓库且已完成身份认证后，执行 `git push -u origin main`。推送前再次检查源仓库和文件清单。

本机目前未检测到 GitHub CLI。网页创建仓库及 GitHub 登录/授权需在用户账户下完成。GitHub 可能要求使用浏览器、凭证管理器或个人访问令牌完成 HTTPS 推送授权；不要将令牌写入仓库文件或命令示例。

## 启用 Pages 并查看部署

1. 打开 <https://github.com/LiuCanWu/unicom-data-portal/settings/pages>，在 **Build and deployment → Source** 选择 **GitHub Actions**。
2. 工作流位于 `.github/workflows/deploy-pages.yml`，在 `main` 分支每次推送后自动运行，也可在仓库 **Actions → Deploy frontend to GitHub Pages → Run workflow** 手动运行。工作流在 `frontend` 执行 `npm ci` 和 `npm run build`，将 `frontend/dist` 上传为 Pages 产物并部署。Node.js 使用 22。
3. 在 <https://github.com/LiuCanWu/unicom-data-portal/actions> 查看 `build` 与 `deploy` 两个 job。两者成功后，进入 Settings → Pages 查看发布地址，并打开 <https://liucanwu.github.io/unicom-data-portal/> 验证页面。随后检查产品列表、产品详情、体验中心、联系页与浏览器前进/后退，并在详情页刷新。

本地核查命令（在 `frontend` 目录）：

```powershell
npm ci
npm run build
npm run dev
```

开发服务器默认使用 `/`；生产构建默认使用 `/unicom-data-portal/`，路由在 `#` 后。若以后仍要向根路径 Nginx 站点构建，可在 PowerShell 中使用 `$env:VITE_BASE_PATH='/'` 后运行 `npm run build`，再执行 `Remove-Item Env:VITE_BASE_PATH`。这个覆盖项只用于明确的非 Pages 部署；GitHub Actions 不设置它。

## 故障排查

| 现象 | 检查方法 |
| --- | --- |
| CSS、JS、图片或图标 404 | 查看部署后的 `index.html` 是否引用 `/unicom-data-portal/assets/` 和 `/unicom-data-portal/favicon.svg`，产品架构图路径是否带相同前缀；确认 Pages 发布的是 `frontend/dist`。 |
| 页面刷新 404 | 站内 URL 应为 `/unicom-data-portal/#/products/...`。如果是旧的 `/unicom-data-portal/products/...` History 链接，需要先访问站点首页再用新链接。 |
| Actions 构建失败 | 查看 Actions 中 `npm ci`、`vue-tsc -b` 和 `vite build` 的具体报错；检查 `frontend/package-lock.json` 与 `package.json` 同步，Node 版本满足项目要求。 |
| Pages 未更新 | 检查 Source 是否为 GitHub Actions、工作流是否在 `main` 触发、`build` 与 `deploy` 是否成功、仓库 Actions/Pages 权限是否允许部署。 |
| 联系页无法提交 | 静态演示站刻意显示“准备中”，没有后端，也不收集联系人信息。 |

## 运行边界与后续维护

GitHub Pages 只提供静态文件托管，不运行 FastAPI、数据库、短信验证或真实产品试用环境。Demo/试用占位状态依现有产品数据展示。体验中心若有外部视频链接，能否访问仍取决于该平台和公开授权。

中国内地访问 GitHub Pages 的稳定性存在不确定性，发布后应在实际网络中验证。若需稳定的国内访问，可另行评估经批准的国内云服务器、域名和相关合规要求；现有 `deploy/` 资料可作为独立部署方案参考，但根路径部署要使用上面的 `VITE_BASE_PATH` 覆盖配置。

后续用 Codex 修改门户后，先本地执行 `npm run build`，审核改动与公开内容，再提交并推送到 `main`。GitHub Actions 会自动重新构建和部署；以 Actions 成功且公网实测通过作为更新完成的依据。
