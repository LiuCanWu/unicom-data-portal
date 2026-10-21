# Task15 静态演示环境部署说明

执行目录：除特别注明外，Windows 命令在仓库根目录的 PowerShell 中运行；Linux 命令在服务器终端运行。当前只准备部署产物，公网发布须由项目负责人确认。

## 本地检查与发布范围

- `frontend/package.json` 的 `npm run build` 执行 `vue-tsc -b && vite build`，产物在 `frontend/dist/`。
- 路由采用 `createWebHistory()`，Nginx 必须把页面路径回退至 `index.html`。
- 页面数据来自 `frontend/src/data/`。`getHealth()` 无页面调用；联系页原来依赖 `/api/contacts`，静态演示已显示“准备中”，不会提交信息。FastAPI 不需要部署。
- 唯一产品架构图片路径是 `/images/products/data-agent-architecture.png`，打包脚本会验证它与 JS/CSS 已进入 `dist`。详情页使用 Element Plus 图片预览。
- 体验中心存在一条微信视频外链，产品数据和图片版权、对外展示范围均须内容负责人审核。静态构建成功不代表公开授权。

## 资源与审批清单

优先请公司运维确认是否已有批准的国内演示服务器、统一 Web 发布平台、域名、ICP备案接入、证书和公司对外发布许可；同时确认 SSH 部署账户、Nginx 管理方式、站点独占目录与 80/443 端口策略。若没有现成环境，由公司按采购流程评估阿里云 ECS 或腾讯云轻量应用服务器的中国内地地域、小规格 Linux 实例、固定公网地址和域名。本站为静态内容，初版无需数据库、后端或 Docker。

公网发布前还须确认：产品文案中的指标与案例、微信视频外链的公开授权、`data-agent-architecture.png` 的版权及保密分级、域名备案主体和证书归属。未收到这些确认时不得上传到公网服务器。

中国内地服务器提供网站服务时，先由主体按接入商要求完成 ICP 备案/接入核验，再正式开通域名访问。具体办理条件参见[阿里云备案说明](https://help.aliyun.com/zh/icp-filing/basic-icp-service/support/for-the-record-process-faq)或[腾讯云轻量应用服务器备案说明](https://cloud.tencent.com/document/product/1207/45756)，由公司合规与接入商核定。证书须覆盖实际域名；证书私钥仅放服务器受限目录，不能进入仓库或部署包。若公司要求公安备案、ICP备案号展示或安全测评，按内部合规流程补齐。

## 构建与上传

在仓库根目录执行：

```powershell
.\deploy\package.ps1
```

脚本构建、检查资源，并生成 `deploy/packages/unicom-data-portal-YYYYMMDD-HHMMSS.tar.gz` 和 SHA256 输出。`packages/` 已被 Git 忽略。部署包只包含 `frontend/dist/` 内容，不包含源代码、文档、后端或环境文件。

获得上传授权后，可用 `-SshTarget` 仅上传包和部署脚本：

```powershell
.\deploy\package.ps1 -SshTarget 'deploy@example-host' -RemoteInbox '~/unicom-data-portal-inbox'
```

此命令只上传，不执行服务器部署。SSH 主机、账户和目标目录由运维提供；推荐用本机 SSH config 管理密钥，不在命令或仓库写入凭据。也可由公司统一发布平台接收 tar.gz。

## Linux 服务器一次性准备（必须先获服务器修改授权）

以下示例以 Ubuntu/Debian、已有 Nginx 和专用站点域名为例。安装 Nginx、创建账号与授权目录由运维按企业标准完成。`deploy` 用户仅需写入独占站点目录，重载 Nginx 应通过受限 sudo 规则授权，不应授予任意 root 权限。

```bash
sudo install -d -o deploy -g deploy -m 0755 /var/www/unicom-data-portal/releases
sudo cp deploy/nginx-http.conf /etc/nginx/sites-available/unicom-data-portal.conf
# 编辑 server_name 为批准的域名，然后按现有 Nginx 站点管理规则启用配置。
sudo nginx -t
sudo systemctl reload nginx
```

`nginx-http.conf` 用于未配置证书时的内部联调；公网 HTTPS 发布时将批准域名和证书路径填入 `nginx-https.conf` 并替换站点配置。HTTPS 模板将 HTTP 重定向到 HTTPS。启用前先核对 DNS、证书链、私钥权限和 443 访问策略，再运行 `nginx -t` 和重载。不要在未满足备案与发布授权时开放公网服务。

Nginx 根目录固定为 `/var/www/unicom-data-portal/current`。两个模板都实现 History 回退、HTML 重新验证、带哈希的 `/assets/` 长缓存、图片短缓存、gzip、访问/错误日志、基础响应头、隐藏文件拒绝和 `/api/` 404。只把构建产物放入这个站点目录，不把仓库或配置文件复制进去。

## 发布和回滚（必须先获服务器修改授权）

在 Linux 服务器上，进入上传收件目录后运行：

```bash
bash deploy.sh ./unicom-data-portal-YYYYMMDD-HHMMSS.tar.gz
```

脚本解包到新版本目录，检查关键文件，运行 `sudo nginx -t`，原子切换 `current` 符号链接并重载 Nginx。旧版本留在 `releases/`，且新版本会保留旧版带哈希资源，避免已有浏览器页面短暂请求失败。重载失败时自动恢复旧链接。需要人工回滚时：

```bash
bash deploy.sh --rollback
```

每次发布只上传静态部署包，脚本不会清理旧版本；运维应定期审视磁盘占用，确认不再需要的旧版本后按企业变更流程清理。禁止将 `SITE_DIR` 指向其他服务的目录。

## 上线验收

1. 用浏览器打开 `/`、`/products`、`/experience`、`/products/data-agent`，确认内容与跳转。
2. 在详情页直接刷新，确认不是 404；检查 CSS、JS、图片请求均为 200，点击架构图可放大。
3. 检查 `/contact` 显示“准备中”，没有 `/api/contacts` 请求；`/api/health` 并不代表站点状态。
4. 在 PC 与手机宽度检查导航、卡片、图片和表单占位布局；检查开发者工具没有混合内容和本地 API 请求。
5. 检查证书域名、有效期、证书链、HTTP 跳转及安全响应头。静态资源应可缓存，`index.html` 应重新验证。
6. 分别由中国电信、中国联通、中国移动的实际网络访问同一正式 URL，记录运营商、城市、时间、HTTP 状态和页面资源加载情况。单个服务器或本地网络检查不能证明跨运营商访问稳定。

当前仓库没有可核实的服务器、域名、备案、证书、SSH 信息或公开发布授权，因此这些线上步骤尚未执行，也没有可提供的演示 URL。
