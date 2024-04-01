import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  plugins: [
    vue(),
    Layouts(),
    AutoImport({ 
      imports: [ //需要全局自动导入的模块API
        'vue',
        'vue-i18n',
        'vue-router',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts', //自动生成的导入文件路径
      dirs: [ //需要自动导入的模块文件
        'src/common/',
        'src/stores/',
      ],
      vueTemplate: true, //在vue模板中开启
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    Components({
      extensions: ['vue'], //需要全局自动导入的模块组件
      include: [/\.vue$/, /\.vue\?vue/], //包含匹配文件
      exclude: [/[\\/]\.git[\\/]/], //过滤匹配文件
      dts: 'src/components.d.ts', //自动生成的导入文件路径
      dirs: [ //需要自动导入的模块文件
        'src/components',
      ],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    Unocss(),
    Pages({
      extensions: ['vue'], //有效的文件后缀
      dirs: 'src/pages', //指定文件根目录
      extendRoute(route, parent) {
        return route
      },
    }),
    VueI18n({
      // runtimeOnly: true,
      // compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'src/language/*')],
    }),
  ],
  // 本地服务
  server:{
    open:true,
    port:8080,
    host:"0.0.0.0",
    proxy: { //设置代理
      '/api': { 
        target: 'http://localhost:8087/', //本地
        // target: 'http://xxx.xxx.xxx.xxx:8087/',
        changeOrigin: true, // 是否跨域
        rewrite: path => path.replace('/^\/api/', '/api'),
      },
    },
  },
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
      '@': `${path.resolve(__dirname, 'src')}`,
    }
  },
  css: {
    //配置scss的全局变量（可选）
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/mixin.scss";',
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build:{
    target:['ES2020'],//浏览器兼容性
    rollupOptions: {//Rollup打包配置
      output: {
        manualChunks(id) {
          if (id.includes('components')){
            return 'components'
          }
          if (id.includes('pages')){
            return 'pages'
          }
          if (id.includes('layouts')){
            return 'layouts'
          }
        },
      },
    },
    outDir:'dist',//指定输出目录
    assetsDir:'assets',//静态资源存放点，相对于输出目录dist
    assetsInlineLimit: 4096,//默认4kb，小于此大小的资源转为base64编码
    cssCodeSplit: false,//CSS是否拆分
  }
})
