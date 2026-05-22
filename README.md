# 欧瑞博产品说明书 H5 / ORVIBO Product Manuals H5

[English](#english) | [简体中文](#简体中文)

---

## 简体中文

一个为欧瑞博智能家居产品打造的移动端说明书浏览应用，基于 React + Vite + Tailwind CSS 构建。

### 在线预览

https://weisss.github.io/feishu-h5/

### 功能特性

- **分类浏览** — 按产品大类（智能门锁、智能开关、智能中控屏等）快速定位
- **层级导航** — 大类 → 产品系列 → 具体型号，三级结构清晰明了
- **飞书文档嵌入** — 直接在产品页内阅读飞书 Wiki 上的说明书，无需跳转
- **顶部导航遮挡** — 自动隐藏飞书文档的面包屑和登录栏，阅读体验更沉浸
- **分享功能** — 一键分享当前说明书页面，他人可直接打开对应型号
- **响应式设计** — 专为移动端优化，同时兼容桌面端浏览
- **Hash 路由** — 支持浏览器刷新和分享链接直达，无需服务端配置

### 技术栈

| 技术 | 说明 |
|------|------|
| React 19 | UI 框架 |
| TypeScript | 类型安全 |
| Vite 8 | 构建工具 |
| React Router 7 | 客户端路由（HashRouter） |
| Tailwind CSS 4 | 样式方案 |
| Lucide React | 图标库 |

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/weisss/feishu-h5.git
cd feishu-h5

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产包
npm run build
```

构建产物位于 `dist/` 目录，`base: './'` 配置支持直接本地打开或部署到任意静态托管。

### 数据来源

产品分类与说明书链接来自 [产品资料.md](产品资料.md)，涵盖智能门锁、智能开关插座、智能中控屏、窗帘电机、智能照明、智能安防、集成空调等 10+ 个产品大类。

### 自动部署

本项目使用 GitHub Actions 自动构建并部署到 GitHub Pages，推送代码到 `main` 分支即可触发。

### 许可证

MIT

---

## English

A mobile-first product manual browser for ORVIBO smart home devices, built with React + Vite + Tailwind CSS.

### Live Demo

https://weisss.github.io/feishu-h5/

### Features

- **Category browsing** — Quickly locate products by category (smart locks, switches, control panels, etc.)
- **Hierarchical navigation** — Category → Product line → Specific model, three-level structure
- **Feishu doc embedding** — Read manuals directly from Feishu Wiki without leaving the app
- **Top nav masking** — Auto-hides Feishu breadcrumb and login bar for immersive reading
- **Share** — One-tap share of the current manual page; recipients open directly to the right model
- **Responsive design** — Optimized for mobile, works on desktop too
- **Hash routing** — Supports browser refresh and direct links, no server config needed

### Tech Stack

| Tech | Purpose |
|------|---------|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 8 | Build tool |
| React Router 7 | Client-side routing (HashRouter) |
| Tailwind CSS 4 | Styling |
| Lucide React | Icon library |

### Local Development

```bash
# Clone
git clone https://github.com/weisss/feishu-h5.git
cd feishu-h5

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Build output goes to `dist/`. The `base: './'` config supports opening locally or deploying to any static host.

### Data Source

Product categories and manual links come from [产品资料.md](产品资料.md), covering 10+ product categories including smart locks, switches, control panels, curtain motors, lighting, security, and HVAC systems.

### Auto Deployment

GitHub Actions automatically builds and deploys to GitHub Pages on every push to `main`.

### License

MIT
