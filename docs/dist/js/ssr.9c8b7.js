/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{dyju:function(n,e,t){"use strict";t.r(e);var i={components:{Code:t("rMEQ").a},data:function(){return{c1:"$ npx create-nuxt-app <project-name>",c2:"yarn create nuxt-app <project-name>",config:"import Vue from 'vue';\nimport kui from 'kui-vue';\n\nVue.use(kui);\nimport 'kui-vue/dist/k-ui.css';",plugins:"module.exports = {\n  /*\n  ** Headers of the page\n  */\n  head: {\n    title: '{{ name }}',\n    meta: [\n      { charset: 'utf-8' },\n      { name: 'viewport', content: 'width=device-width, initial-scale=1' },\n      { hid: 'description', name: 'description', content: '{{escape description }}' }\n    ],\n    link: [\n      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }\n    ]\n  },\n  plugins: [\n      {src: '~plugins/kui', ssr: true}\n  ],\n  //....\n}"}}},r=t("KHd+"),s=Object(r.a)(i,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("服务端渲染的支持")]),n._v(" "),t("h3",[n._v("nuxt 环境构建")]),n._v(" "),t("p",[n._v("使用npx 或者 yarn 初始化项目,使用npm i npx -g 安装npx 或 yarn")]),n._v(" "),t("Code",[n._v(n._s(n.c1))]),n._v(" "),t("p",[n._v("或者使用yarn")]),n._v(" "),t("Code",[n._v(n._s(n.c2))]),n._v(" "),t("p",[n._v("更多详情请参阅 https://nuxtjs.org/guide/installation")]),n._v(" "),t("br"),n._v(" "),n._m(0),n._v(" "),t("Code",{attrs:{lang:"js"}},[n._v(n._s(n.config))]),n._v(" "),t("br"),n._v(" "),n._m(1),n._v(" "),t("Code",{attrs:{lang:"js"}},[n._v(n._s(n.plugins))]),n._v(" "),t("p",[n._v("至此，配置完成，所有组件将支持服务端渲染了。只要是对Nuxt universal 模式的支持")])],1)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("一步步完成后找到"),t("code",[n._v("plugins")]),n._v("目录，新建"),t("code",[n._v("kui.js")]),n._v("，写入一下内容：")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("然后修改根目录"),t("code",[n._v("nuxt.config.js")]),n._v("，修改配置文件，如下")])}],!1,null,null,null);e.default=s.exports}}]);