<h1 align='center'>vitest-demo</h1>

<br>

<p align='center'>
<a href="./README.en.md">English</a> | <b>简体中文</b>
</p>

<br>

## 介绍

什么是Vitest？

Vitest 是由 Vite 驱动的测试框架。它的主要优势之一是它与 Vite 的统一配置。可以和Vite共用配置。如果存在`vite.config.ts`，vitest 将读取你的根目录 `vite.config.ts` 以匹配插件.如果创建 `vitest.config.ts`，那么它优先级将会最高。

主要功能：

支持对 Vue、React、Svelte、Lit等框架进行单元测试，组件测试。
开箱即用的 TypeScript / JSX 支持

## 安装 

> yarn add -D vitest || npm install -D vitest

```js
//package.json
"scripts": {
    "test": "vitest", //监听模式
    //...
}
```

(可选)如果需要测试代码覆盖率 需要安装 `@vitest/coverage-v8` 或 `@vitest/coverage-istanbul`

> yarn add @vitest/coverage-v8 -D || pnpm install @vitest/coverage-v8 -D

```js
//package.json
"scripts": {
    "coverage": "vitest run --coverage", //覆盖率测试
}
```

(可选)如果需要直观的在页面上显示测试的相关内容，需要安装 `@vitest/ui`

> yarn add -D @vitest/ui || pnpm install -D @vitest/ui

```js
//package.json
"scripts": {
    "vitestui": "vitest --ui", //vitest Ui
}
```

(可选)如果需要测试浏览器环境下的表现，需要安装 `jsdom`

> yarn add jsdom -D || pnpm install jsdom -D

```js 
//vite.config.js
export default defineConfig({
  //...
  test: {
    environment: 'jsdom' //默认是node环境
  }
})
```

(可选)如果需要对vue组件进行测试，需要安装@vue/test-utils

> yarn add -D @vue/test-utils || pnpm install -D @vue/test-utils

```js
//简单示例
import { mount } from '@vue/test-utils'
import TodoApp from './TodoApp.vue'

test('renders a todo', () => {
  const wrapper = mount(TodoApp) //包裹
  const todo = wrapper.get('[data-test="todo"]') //查找标签元素
  expect(todo.text()).toBe('Learn Vue.js 3') //断言文本
})
```

## 配置

如果你使用的是Vite构建的项目，那么直接在 `vite.config.ts` 配置最好，如果不是，则新建一个 `vitest.config.ts` 进行配置. 如果使用了Vite构建项目，但是又新建立了 `vitest.config.ts` 那Vite的配置会被覆盖。

> IDE 集成: Vitest 提供了 [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) 的官方扩展，以增强测试体验

 - 非Vite构建项目

```js
//vitest.config.ts

import { defineConfig } from 'vitest/config'

export default defineConfig{
    test:{
        coverage: { // v8 测试代码覆盖率
            reporter: ['text', 'json', 'html'],
        },
        // include: ['test/**/*.test.ts'], //匹配包含文件
        // exclude:[], //排除文件
    }
}
```

 - Vite构建项目

需要在配置文件顶端，加入`三斜杠指令`

```js
//vite.config.ts

/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // ...
    include: ['test/**/*.test.ts'], //匹配包含文件
    // exclude:[], // 排除文件
    environment: 'jsdom', //浏览器环境
  },
})
```

打包的配置，在 `vite` 配置文件中加入以下代码，清除无用代码。

```js
//vite.config.ts
  define: {
    'import.meta.vitest': 'undefined', 
  }, 
```

`TypeScript` 的支持，需要在 `TypeScript` 配置中进行配置

```js
// tsconfig.json
{
  "compilerOptions": {
    "types": [
      "vitest/importMeta"
    ]
  }
}
```

## 简单示例

在根目录添加 `__tests__` 文件夹，添加测试文件

```js __tests__/index.test.ts
import { expect, test } from 'vitest'
import { testName } from '../src/index'

test('vitest-test', () => {
    expect(testName('jack')).toBe('jack')
})
```

```js src/index.ts
export function testName (name) {
    return name
}
```

## 问题集合

### 执行vitestui 报错 Cannot read properties of undefined (reading 'config')

vitest 和 vitest/ui 的版本和 vite 不匹配

> pnpm i vitest@latest @vitest/ui@latest -D

<br>

### 项目结构

```m
|—— __tests__/  //项目的测试代码文件
|—— coverage/   //项目的覆盖率测试文档
|—— public/     //公用静态资源
|—— src/
  |—— apis/        //各类封装的api接口
  |—— assets/      //公共样式和静态资源
  |—— common/      //公共方法及类型
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

构建测试，则需执行以下命令

```bash
pnpm test
pnpm vitestui
pnpm coverage
```
