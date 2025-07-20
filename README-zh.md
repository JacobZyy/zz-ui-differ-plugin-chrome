# React + Vite + CRXJS

这个模板可以帮助你使用 React、TypeScript 和 Vite 快速开始开发 Chrome 扩展。它集成了 CRXJS Vite 插件，让 Chrome 扩展开发变得更加流畅。

## 特性

- 使用 React 和 TypeScript
- TypeScript 支持
- Vite 构建工具
- CRXJS Vite 插件集成
- Chrome 扩展清单配置

## 快速开始

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 打开 Chrome 浏览器，访问 `chrome://extensions/`，启用"开发者模式"，然后从 `dist` 目录加载未打包的扩展。

4. 生产环境构建：

```bash
npm run build
```

## 项目结构

- `src/popup/` - 扩展弹出窗口 UI
- `src/content/` - 内容脚本
- `manifest.config.ts` - Chrome 扩展清单配置

## 文档

- [React 文档](https://reactjs.org/)
- [Vite 文档](https://vitejs.dev/)
- [CRXJS 文档](https://crxjs.dev/vite-plugin)

## Chrome 扩展开发注意事项

- 使用 `manifest.config.ts` 配置你的扩展
- CRXJS 插件会自动处理清单生成
- 内容脚本应放置在 `src/content/` 目录
- 弹出窗口 UI 应放置在 `src/popup/` 目录
