/*! kui-vue v2.0.3 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/lo1":function(t,e,s){"use strict";s.r(e);var n={install:"$ npm install kui-vue --save",import:'\x3c!-- import Vue.js --\x3e\n<script src="//vuejs.org/js/vue.min.js"><\/script>\n\x3c!-- import stylesheet --\x3e\n<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">\n\x3c!-- import kui --\x3e\n<script src="//unpkg.com/kui-vue/dist/k-ui.js"><\/script>',demo:'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>kui example</title>\n  <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">\n  <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"><\/script>\n  <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"><\/script>\n</head>\n<body>\n<div id="app">\n  <k-button @click="show">Click me!</k-button>\n  <Modal v-model="visible" title="Welcome">Welcome to use kui</Modal>\n</div>\n<script>\n  new Vue({\n    el: \'#app\',\n    data: {\n      visible: false\n    },\n    methods: {\n      show: function () {\n        this.visible = true;\n      }\n    }\n  })\n  <\/script>\n</body>\n</html>'},i=n,c={components:{Code:s("rMEQ").a},data:function(){return{code:i}}},l=s("KHd+"),o=Object(l.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("安装")]),t._v(" "),s("h3",[t._v("CDN 引入")]),t._v(" "),s("p",[t._v("在页面上引入 js 和 css 文件即可开始使用：")]),t._v(" "),s("Code",{attrs:{expand:""}},[t._v(t._s(t.code.import))]),t._v(" "),s("h3",[t._v("示例")]),t._v(" "),s("Code",{attrs:{lang:"html",expand:""}},[t._v(t._s(t.code.demo))]),t._v(" "),s("h3",[t._v("NPM 安装")]),t._v(" "),s("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.install))])],1)},[],!1,null,null,null);o.options.__file="install.vue";e.default=o.exports}}]);