# 拾页 · 个人网站与博客

一个前后端分离的个人网站框架：

- `frontend/`：Vue 3 + Vue Router + Vite，默认使用本地静态文章数据，可独立部署。
- `backend/`：Spring Boot 3 + Java 21，提供示例 REST API，后续可接数据库和后台管理。

## 启动前端

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

访问终端中显示的地址，通常为 `http://localhost:5173`。

## 启动后端

安装 Maven 后执行：

```powershell
cd backend
mvn spring-boot:run
```

后端默认地址为 `http://localhost:8080`，健康检查接口为 `/api/health`，文章接口为 `/api/posts`。

## 静态部署

```powershell
cd frontend
npm.cmd run build
```

将 `frontend/dist/` 部署到 Vercel、Netlify、Cloudflare Pages 或 Nginx 即可。项目已包含 Vercel 和 Netlify/Cloudflare Pages 的单页路由回退配置，静态模式无需启动后端。

## 接入后端

复制 `frontend/.env.example` 为 `frontend/.env.local`，设置：

```env
VITE_API_BASE_URL=http://localhost:8080
```

目前页面默认读取 `src/data/articles.js`，这是为了保证纯静态部署可用；`src/services/postService.js` 已预留后端请求方法。
