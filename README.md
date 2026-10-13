# AI码人士

周作松的个人主页。中文单页，深色，没有后端。

计划中的生产地址是 [https://aicoder.vercel.app](https://aicoder.vercel.app)。项目名用 `aicoder` 时，Vercel 会给出这个子域名。

## 技术栈

- Next.js（App Router）+ TypeScript + Tailwind CSS
- `output: "export"`：`npm run build` 把站点导出成静态文件，放在 `out/`
- 不需要环境变量，也不需要数据库或接口

## 本地运行

```bash
npm install
npm run dev
```

终端会打印本地地址，用浏览器打开即可。

本项目是静态导出，`npm start`（`next start`）不能用来预览。

## 本地构建

```bash
npm run build
```

构建成功后，首页在 `out/index.html`。用静态服务器打开 `out/`：

```bash
npx serve out
```

## 部署到 Vercel

不需要把仓库镜像到 GitHub。这个仓库以 Origin 为准，用 Vercel CLI 从本机目录部署。

先安装并登录（只需一次）：

```bash
npm install -g vercel
vercel login
```

创建名为 `aicoder` 的项目，关联当前目录，再发生产部署：

```bash
vercel project add aicoder
vercel link --project aicoder --yes
vercel --prod
```

不需要配置环境变量。部署完成后，生产地址应为 [https://aicoder.vercel.app](https://aicoder.vercel.app)。如果 `aicoder` 这个项目名已经被占用，CLI 会提示改名，子域名会跟着变。

`.vercel/` 只在本机生成，已写入 `.gitignore`，不要提交。

## 改外链

`src/content/site.ts` 里的 GitHub、X / Twitter、博客、小红书、知乎目前都是 `href: "#"`，页面上标了「待填写」。换成真实地址后再重新构建、部署。
