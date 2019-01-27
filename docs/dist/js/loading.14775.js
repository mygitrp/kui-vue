/*! kui-vue v2.0.3 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+qlZ":function(t,n,o){"use strict";var i=o("rMEQ"),e=o("Ff65");var s={directives:{resize:o("7+I9").a},components:{Code:i.a,Collapse:e.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},n="k-demo-".concat(this.layout),o=this.layout,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t)];var t,n,o},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=o("KHd+"),r=Object(a.a)(s,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);r.options.__file="demo.vue";var c=r.exports;n.a=c},cXnc:function(t,n,o){"use strict";o.r(n);var i={useInRouter:"import kui from 'kui-vue';\nVue.use(kui);\n\nrouter.beforeEach((to, from, next) => {\n  kui.Loading.start();\n  next();\n});\n\nrouter.afterEach(route => {\n  kui.Loading.finish();\n});",useInAjax:"<script>\n// 以jQuery的Ajax为例，部分代码省略\nimport $ from 'jquery';\nexport default {\n  methods: {\n    getData () {\n      this.$Loading.start();\n      $.ajax({\n        url: '/api/someurl',\n        type: 'get',\n        success: () => {\n          this.$Loading.finish();\n        }\n        error: () => {\n          this.$Loading.error();\n        }\n      });\n    }\n  }\n}\n<\/script>",test:'<Button @click="start()">start</Button>\n<Button @click="finish">finish</Button>\n<Button @click="error">error</Button>\n<Button @click="config">config</Button>\n<Button @click="upload(30)">upload 30</Button>\n<Button @click="upload(80)">upload 80</Button>\n<script>\n  methods: {\n    config() {\n      this.$Loading.config({\n      type: "line",\n      color: "orange",\n      height: 10\n      });\n    },\n    upload(percent){\n      this.$Loading.upload(percent);\n    },\n    start() {\n      this.$Loading.start();\n    },\n    finish() {\n      this.$Loading.finish();\n    },\n    error() {\n      this.$Loading.error();\n    }\n  }\n<\/script>',theme:"<Button @click=\"loading('flip')\">flip</Button>\n<Button @click=\"loading('bounce')\">bounce</Button>\n<Button @click=\"loading('zoom')\">zoom</Button>\n<Button @click=\"loading('rotate')\">rotate</Button>\n<script>\n...\nmethods: {\n  loading(type) {\n    this.$Loading.start(type);\n    setTimeout(() => {\n      this.$Loading.finish();\n    }, 3000);\n  },\n}\n...\n<\/script>"},e=i,s=o("+qlZ"),a=o("rMEQ"),r={components:{Demo:s.a,Code:a.a},data:function(){return{code:e}},methods:{config:function(){this.$Loading.config({type:"line",color:"orange",height:10})},upload:function(t){this.$Loading.upload(t)},start:function(t){this.$Loading.start(t)},loading:function(t){var n=this;this.$Loading.start(t),setTimeout(function(){n.finish()},3e3)},finish:function(){this.$Loading.finish()},error:function(){this.$Loading.error()}}},c=o("KHd+"),d=Object(c.a)(r,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h2",[n._v("LoadingBar 加载进度")]),n._v(" "),o("h3",[n._v("用处")]),n._v(" "),o("p",[n._v("全局创建一个显示页面加载、异步请求、文件上传等的加载 或 进度条")]),n._v(" "),o("h3",[n._v("在路由中使用")]),n._v(" "),o("Code",{attrs:{lang:"javascript"}},[n._v(n._s(n.code.useInRouter))]),n._v(" "),o("h3",[n._v("在异步请求中使用")]),n._v(" "),o("Code",{attrs:{lang:"javascript"}},[n._v(n._s(n.code.useInAjax))]),n._v(" "),o("Demo",{attrs:{title:"模拟请求"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",{on:{click:function(t){n.start("line")}}},[n._v("start")]),n._v(" "),o("Button",{on:{click:n.finish}},[n._v("finish")]),n._v(" "),o("Button",{on:{click:n.error}},[n._v("error")]),n._v(" "),o("Button",{on:{click:n.config}},[n._v("config")]),n._v(" "),o("Button",{on:{click:function(t){n.upload(30)}}},[n._v("upload 30")]),n._v(" "),o("Button",{on:{click:function(t){n.upload(80)}}},[n._v("upload 80")])],1),n._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[n._v("start")]),n._v("触发开始，\n        "),o("code",[n._v("finish")]),n._v("结束，\n        "),o("code",[n._v("upload")]),n._v("可以手动更新进度\n      ")]),n._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[n._v(n._s(n.code.test))])]),n._v(" "),o("Demo",{attrs:{title:"主题"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Button",{on:{click:function(t){n.loading("flip")}}},[n._v("flip")]),n._v(" "),o("Button",{on:{click:function(t){n.loading("bounce")}}},[n._v("bounce")]),n._v(" "),o("Button",{on:{click:function(t){n.loading("zoom")}}},[n._v("zoom")]),n._v(" "),o("Button",{on:{click:function(t){n.loading("rotate")}}},[n._v("rotate")])],1),n._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[n._v("用\n        "),o("code",[n._v("Loading")]),n._v("来 表示异步加载，不只是单纯的加载进度，很多种情况下，在异步加载的时候，不允许用户再一次进行操作，所以这种情况，建议使用以下几种方式进行模拟，在此种模拟方式的时候，默认会弹出透明浮层，直到\n        "),o("code",[n._v("finish")]),n._v(" 才可以进行第二操作。")]),n._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[n._v(n._s(n.code.theme))])]),n._v(" "),o("h3",[n._v("API")]),n._v(" "),o("p",[n._v("通过直接调用以下方法来使用组件：")]),n._v(" "),o("Code",{attrs:{lang:"js"}},[n._v("\n      this.$Loading.start() \nthis.$Loading.finish() \nthis.$Loading.error() \nthis.$Loading.update(percent)\n    ")]),n._v(" "),o("p",[n._v("另外提供了全局配置和全局销毁的方法：")]),n._v(" "),o("Code",{attrs:{lang:"js"}},[n._v("\n      this.$Loading.config(options)\nthis.$Loading.destroy()\n    ")]),n._v(" "),n._m(0)],1)},[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("type")]),t._v(" "),o("td",[t._v("进度的主题，可取值为 line，zoom，flip，bounce，rotate")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("line")])]),t._v(" "),o("tr",[o("td",[t._v("loading-text")]),t._v(" "),o("td",[t._v("加载中的文字提示，type为line无效")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("空")])]),t._v(" "),o("tr",[o("td",[t._v("color")]),t._v(" "),o("td",[t._v("进度条的颜色，type为line 有效")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("默认为主题颜色")])]),t._v(" "),o("tr",[o("td",[t._v("height")]),t._v(" "),o("td",[t._v("进度条的高度，type为line 有效 ")]),t._v(" "),o("td",[t._v("String，Number")]),t._v(" "),o("td",[t._v("2")])]),t._v(" "),o("tr",[o("td",[t._v("start")]),t._v(" "),o("td",[t._v("开始从 0 显示进度条，并自动加载进度，type为line有效，可传参[type,loading-text] ")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("finish")]),t._v(" "),o("td",[t._v("结束进度条，自动补全剩余进度，type为line有效")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("error")]),t._v(" "),o("td",[t._v("以错误的类型结束进度条，自动补全剩余进度 ，type为line有效")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("update")]),t._v(" "),o("td",[t._v("精确加载到指定的进度，type为line有效")]),t._v(" "),o("td",[t._v("Function")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);d.options.__file="loading.vue";n.default=d.exports}}]);