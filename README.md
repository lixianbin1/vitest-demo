<h1 align='center'>template-vue3</h1>

<br>

<p align='center'>
<a href="./README.en.md">English</a> | <b>简体中文</b>
</p>

<br>

## 介绍

- 基于[Vue 3](https://cn.vuejs.org/), [Vite](https://cn.vitejs.dev/), [pnpm](https://pnpm.io/)进行项目搭建

- Vite使用[ esbuild ](https://esbuild.github.io/getting-started/) 进行打包管理

- 使用[ Typescript ](https://www.typescriptlang.org/) 进行类型声明和检查

- 基于文件的[ vite-plugin-pages ](https://github.com/hannoeru/vite-plugin-pages) [vue-router](https://router.vuejs.org/)路由管理和 [ vite-plugin-vue-layouts ](https://github.com/johncampionjr/vite-plugin-vue-layouts) 布局管理

- 使用[ unplugin-auto-import ](https://github.com/antfu/unplugin-auto-import) 和[unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 进行自动化管理

- 使用[ axios ](https://www.axios-http.cn/docs/intro)进行网络请求

- 使用[ Pinia ](https://pinia.vuejs.org)进行状态管理

- 使用[ SCSS ](https://www.sass.hk/guide/)进行样式扩展

- 加入[ VueUse ](https://vueuse.org/guide/) Composition API 工具以便于简化开发工作

- 加入 [ vue-i18n ](./locales) 进行国际化进行翻译

- 加入 [ unplugin-icons ] 进行图标管理和自动导入. 可以使用[iconify](https://icon-sets.iconify.design/) 里面的任意图标

<br>

> Vitesse 需要 Node 版本 >=14.18
> Vue3 只支持原生支持 ES2015 的浏览器

## 介绍

### 项目结构

```m
|—— docs/       //项目的文档介绍
|—— public/     //公用静态资源
|—— src/
  |—— apis/        //各类封装的api接口
  |—— assets/      //公共样式和静态资源
  |—— components/  //各类封装的组件
  |—— language/    //各类语言文件
  |—— layouts/     //自定义的模板
  |—— modules/     //各类导入的模块
  |—— pages/       //自动生成路由的文件
  |—— stores/      //pinia存储的全局数据
  |—— App.vue
  |—— auto-imports.d.ts
  |—— components.d.ts
  |—— main.ts       //入口文件
|—— .env.development//环境变量
|—— .env.production //环境变量
|—— .gitignore      //Git配置文件
|—— .npmrc          //npm配置文件
|—— build-test.sh   //build-test打包测试脚本
|—— index.html
|—— package.json
|—— pnpm-lock.yaml
|—— README.en.md
|—— README.md
|—— serve.js        //build-test打包测试服务器脚本
|—— tsconfig.json   //typeScript的配置
|—— tsconfig.node.json
|—— vite.config.ts  //vite的各项配置
```

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

构建测试，则需执行以下命令

```bash
pnpm build-test
```

然后你会看到用于发布的 `dist` 文件夹被生成。并执行模拟静态文件服务器的执行