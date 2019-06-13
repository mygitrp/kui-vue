/*! kui-vue v2.2.2 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+qlZ":function(t,e,n){"use strict";var o=n("rMEQ"),i=n("Ff65");var s={directives:{resize:n("7+I9").a},components:{Code:o.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},c=n("KHd+"),r=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=r},zz0q:function(t,e,n){"use strict";n.r(e);var o={base:'<Button @click="info" type="primary">普通提示 </Button>\n<script>\n  info() {\n    this.$Notice.open({\n      title: "通知的标题",\n      content: "通知的描述",\n      duration: 5\n    });\n  }\n<\/script>',withIcon:'<Button @click="notice(\'info\')" type="primary">消息提示 </Button>\n<Button @click="notice(\'warning\')" type="warning">警告提示 </Button>\n<Button @click="notice(\'success\')" type="success">成功提示 </Button>\n<Button @click="notice(\'error\')" type="danger">错误提示 </Button>\n<script>\n  notice(type) {\n    this.$Notice[type]({\n      title: "通知的标题",\n      content: "通知的描述",\n      duration: 5\n    });\n  }\n<\/script>',static:"this.$Notice.info(options)\nthis.$Notice.success(options)\nthis.$Notice.warning(options)\nthis.$Notice.error(options)",destory:"this.$Notice.open(options)\nthis.$Notice.destroy()"},i=o,s=n("rMEQ"),c={components:{Demo:n("+qlZ").a,Code:s.a},data:function(){return{code:i}},methods:{info:function(){this.$Notice.open({title:"通知的标题",content:"通知的描述",duration:5})},notice:function(t){this.$Notice[t]({title:"通知的标题",content:"通知的描述",duration:5})}}},r=n("KHd+"),a=Object(r.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Notice 通知提醒")]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary"},on:{click:e.info}},[e._v("普通提示 ")])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[e._v("Notice")]),e._v("的基本用法")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("Demo",{attrs:{title:"带图标的提醒"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary"},on:{click:function(t){return e.notice("info")}}},[e._v("消息提示 ")]),e._v(" "),n("Button",{attrs:{type:"warning"},on:{click:function(t){return e.notice("warning")}}},[e._v("警告提示 ")]),e._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(t){return e.notice("success")}}},[e._v("成功提示 ")]),e._v(" "),n("Button",{attrs:{type:"danger"},on:{click:function(t){return e.notice("error")}}},[e._v("错误提示 ")])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过调用不同的方法，可展示不同的类型")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.withIcon))])]),e._v(" "),n("h3",[e._v("API")]),e._v(" "),n("Alert",[e._v("组件提供了一些静态方法，使用方式如下")]),e._v(" "),n("Code",{attrs:{lang:"javascript"}},[e._v(e._s(e.code.static))]),e._v(" "),n("Alert",[e._v("另外提供了全局配置和全局销毁的方法：")]),e._v(" "),n("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.destory))]),e._v(" "),n("p",[e._v("参数 options 为对象，具体说明如下：")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("通知提醒的标题 ")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("提示内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("duration")]),t._v(" "),n("td",[t._v("自动关闭的延时，单位秒，不关闭可以写 0")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("close")]),t._v(" "),n("td",[t._v("关闭时的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=a.exports}}]);