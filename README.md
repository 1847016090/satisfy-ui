## 搭建自己的 UI 库

### 建立 `satisfy-ui` 项目

```deep
mkdir satisfy-ui && cd satisfy-ui
npm init -y
mkdir components && cd components && touch index.ts
```

## TypeScript

```
yarn add typescript --dev
```

新建 tsconfig.json 并写入以下内容

## 测试

components 文件夹下面新建 alert

```
alert
    ├── alert.tsx           # 源文件
    ├── index.ts            # 入口文件
    ├── interface.ts        # 类型声明文件
    └── style
        ├── index.less      # 样式文件
        └── index.ts        # 样式文件里为什么存在一个index.ts - 按需加载样式 管理样式依赖 后面章节会提到
```

### 安装 React 相关依赖：

```
yarn add react react-dom @types/react @types/react-dom --dev # 开发时依赖，宿主环境一定存在

yarn add prop-types            # 运行时依赖，宿主环境可能不存在 安装本组件库时一起安装
```

> 此处依旧安装了 prop-types 这个库，因为无法保证宿主环境也使用 typescript，从而能够进行静态检查，故使用 prop-types 保证 javascript 用户也能得到友好的运行时报错信息。

## 编写 Alert 组件

# 开发与调试

此处选择 [docz](https://github.com/doczjs/docz) 来辅助预览调试。

> docz 基于 MDX（Markdown + JSX），可以在 Markdown 中引入 React 组件，使得一边编写文档，一边预览调试成为了可能。而且得益于 React 组件生态，我们可以像编写应用一般编写文档，不仅仅是枯燥的文字。docz 也内置了一些组件，比如`<Playground>`。

## 安装 docz 以及自定义配置
```
yarn add docz --dev

yarn add rimraf --dev # 清空目录的一个辅助库
```

## 增加 npm scripts 至 package.json。
```
"scripts": {
  "dev": "docz dev", // 启动本地开发环境
  "start": "npm run dev", // dev命令别名
  "build:doc": "rimraf doc-site && docz build", // 后续会配置打包出来的文件目录名为doc-site，故每次build前删除
  "preview:doc": "docz serve" // 预览文档站点
},
```

> 注意：本节所有操作都是针对站点应用。打包指代文档站点打包，而非组件库。

新建doczrc.js配置文件，并写入以下内容：

doczrc.js

```
export default {
  files: './components/**/*.{md,markdown,mdx}', // 识别的文件后缀
  dest: 'doc-site', // 打包出来的文件目录名
  title: 'satisfy-ui', // 站点标题
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
};
```

## 由于使用了less作为样式预处理器，故需要安装 less 插件。
```
yarn add less gatsby-plugin-less --dev
```

新建gatsby-config.js，并写入以下内容：
gatsby-config.js
```
module.exports = {
  plugins: ['gatsby-theme-docz', 'gatsby-plugin-less'],
};
```

## 标准化发布流程
本节主要是讲解如何通过一行命令完成以下六点内容：

- 版本更新
- 生成 CHANGELOG
- 推送至 git 仓库
- 组件库打包
- 发布至 npm
- 打 tag 并推送至 git
