<h1 align='center'>template-vue3</h1>

<br>

<p align='center'>
<b>English</b> | <a href="./README.en.md">Chinese Simplified</a>
</p>

<br>

## Introduction

- Build a project based on [Vue 3](https://cn.vuejs.org/), [Vite](https://cn.vitejs.dev/), [pnpm](https://pnpm.io/).

- Vite uses [ esbuild ](https://esbuild.github.io/getting-started/) for package management

- Use Typescript (https://www.typescriptlang.org/) for type declaration and checking

- File-based [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) [vue-router](https://router.vuejs.org/) route management and [vite-plugin-vue-layouts]( https://github.com/johncampionjr/vite-plugin-vue-layouts) Layout management

- Use [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) for automated management

- Use [ axios ] (https://www.axios-http.cn/docs/intro) to make a network request

- Use [ Pinia ] (https://pinia.vuejs.org) for status management

- Use SCSS (https://www.sass.hk/guide/) for style extension

- Added the [ VueUse ](https://vueuse.org/guide/) Composition API tool to simplify development

- Add [ vue-i18n ](./locales) for internationalization and translation

<br>

> Vitesse requires Node version >=14.18
> Vue3 only supports browsers that natively support ES2015

## Introduction

### Project structure

```m
|—— docs/       //Documentation for the project
|—— public/     //public static resources
|—— src/
  |—— APIS/         //Various encapsulated API interfaces
  |—— assets/       //common style and static assets
  |—— components/   //Components in various packages
  |—— language/     //all kinds of language files
  |—— layouts/      //Customized template
  |—— modules/      //Imported modules
  |—— pages/        //A file that automatically generates routes
  |—— stores/       //pinia
  |—— App.vue
  |—— auto-imports.d.ts
  |—— components.d.ts
  |—— main.ts       //Entry file
|—— .env.development//environment variable
|—— .env.production //environment variable
|—— .gitignore      //Git configuration file
|—— .npmrc          //npm configuration file
|—— build-test.sh   //build-test
|—— index.html
|—— package.json
|—— pnpm-lock.yaml
|—— README.en.md
|—— README.md
|—— serve.js        //build-test to package the test server script
|—— tsconfig.json   //typeScript
|—— tsconfig.node.json
|—— vite.config.ts  //vite
```

## Use

### Development

Just execute the following command to see it in http://localhost:3333

```bash
pnpm dev
```

### build

To build the app, you only need to execute the following command

```bash
pnpm build
```

Then you'll see the 'dist' folder for publishing generated.

To build a test, run the following command:

```bash
pnpm build-test
```

Then you'll see the 'dist' folder for publishing generated. and execute an execution that simulates a static file server