/*! kui-vue v1.9.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4yAM":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("安装")]),t._v(" "),n("h3",[t._v("CDN 引入")]),t._v(" "),n("p",[t._v("在页面上引入 js 和 css 文件即可开始使用：")]),t._v(" "),n("Code",{attrs:{expand:""}},[t._v(t._s(t.code.import))]),t._v(" "),n("h3",[t._v("示例")]),t._v(" "),n("Code",{attrs:{lang:"html",expand:""}},[t._v(t._s(t.code.demo))]),t._v(" "),n("h3",[t._v("NPM 安装")]),t._v(" "),n("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.install))])],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},PHQF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={install:"$ npm install kui-vue --save",import:'\x3c!-- import Vue.js --\x3e\n<script src="//vuejs.org/js/vue.min.js"><\/script>\n\x3c!-- import stylesheet --\x3e\n<link rel="stylesheet" href="//unpkg.com/kui-vue/dist/k-ui.css">\n\x3c!-- import kui --\x3e\n<script src="//unpkg.com/kui-vue/dist/k-ui.js"><\/script>',demo:'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>kui example</title>\n  <link rel="stylesheet" type="text/css" href="http://unpkg.com/kui-vue/dist/k-ui.css">\n  <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"><\/script>\n  <script type="text/javascript" src="http://unpkg.com/kui-vue/dist/k-ui.js"><\/script>\n</head>\n<body>\n<div id="app">\n  <k-button @click="show">Click me!</k-button>\n  <Modal v-model="visible" title="Welcome">Welcome to use kui</Modal>\n</div>\n<script>\n  new Vue({\n    el: \'#app\',\n    data: {\n      visible: false\n    },\n    methods: {\n      show: function () {\n        this.visible = true;\n      }\n    }\n  })\n  <\/script>\n</body>\n</html>'};e.default=i},iRGd:function(t,e,n){"use strict";n.r(e);var i=n("4yAM"),s=n("jh0v");for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);var r=n("KHd+"),c=Object(r.a)(s.default,i.a,i.b,!1,null,null,null);c.options.__file="install.vue",e.default=c.exports},jh0v:function(t,e,n){"use strict";n.r(e);var i=n("mYhF"),s=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=s.a},mYhF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("PHQF")),s=u(n("w3Nn"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Code:s.default},data:function(){return{code:i.default}}}}}]);