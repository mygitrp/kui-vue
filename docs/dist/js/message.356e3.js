/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var n=s("rMEQ"),o=s("Ff65");var i={directives:{resize:s("7+I9").a},components:{Code:n.a,Collapse:o.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},c=s("KHd+"),a=Object(c.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=a},MnsJ:function(t,e,s){var n=s("WArN");"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};s("LboF")(n,o);n.locals&&(t.exports=n.locals)},QNKr:function(t,e,s){"use strict";s.r(e);var n={base:'<Button @click="info" type="primary">普通提示 </Button>\n<script>\ninfo() {\n  this.$Message.info("普通提示");\n}\n<\/script>',type:'<Button @click="warning" type="warning">警告提示 </Button>\n<Button @click="success" type="success">成功提示 </Button>\n<Button @click="error" type="danger">错误提示 </Button>\n<script>\nwarning() {\n  this.$Message.warning("警告提示");\n  },\nsuccess() {\n  this.$Message.success("成功提示");\n},\nerror() {\n  this.$Message.error("错误提示");\n}\n<\/script>',time:'<Button @click="config" type="success">10秒后关闭</Button>\n<Button @click="config2" type="primary">5秒后关闭</Button>\n<Button @click="config3" type="primary">手动关闭</Button>\n<script>\nconfig() {\n  this.$Message.success("10秒后关闭的", 10);\n},\nconfig2() {\n  this.$Message.config({\n    type: "info",\n    duration: 5,\n    content: "5秒后关闭的"\n  });\n},\nconfig3() {\n  this.$Message.config({\n    type: "info",\n    duration: 5,\n    closable: true,\n    content: "手动关闭",\n    close: () => { this.$Message.success("我是回调"); }\n  });\n}\n<\/script>',static:"this.$Message.info(content, [duration], onClose)\nthis.$Message.success(content, [duration], onClose)\nthis.$Message.warning(content, [duration], onClose)\nthis.$Message.error(content, [duration], onClose)",destory:"this.$Message.config(options)\nthis.$Message.destroy()"},o=n,i=s("+qlZ"),c=s("rMEQ"),a={components:{Demo:i.a,Code:c.a},data:function(){return{code:o}},methods:{info:function(){this.$Message.info("普通提示")},warning:function(){this.$Message.warning("警告提示")},success:function(){this.$Message.success("成功提示")},error:function(){this.$Message.error("错误提示")},config:function(){this.$Message.success("10秒后关闭的",10)},config2:function(){this.$Message.config({type:"info",duration:5,content:"5秒后关闭的"})},config3:function(){var t=this;this.$Message.config({type:"info",duration:0,closable:!0,content:"手动关闭",close:function(){t.$Message.success("我是回调")}})}}},r=s("KHd+"),v=Object(r.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Message 全局提示")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Demo",{attrs:{title:"基础用法"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示 ")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("Message")]),t._v("的基本用法")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"提示类型"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Button",{attrs:{type:"warning"},on:{click:t.warning}},[t._v("警告提示 ")]),t._v(" "),s("Button",{attrs:{type:"success"},on:{click:t.success}},[t._v("成功提示 ")]),t._v(" "),s("Button",{attrs:{type:"danger"},on:{click:t.error}},[t._v("错误提示 ")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),s("code",[t._v("type")]),t._v("来设置提示类型")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.type))])]),t._v(" "),s("Demo",{attrs:{title:"自定义时长"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Button",{attrs:{type:"success"},on:{click:t.config}},[t._v("10秒后关闭")]),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:t.config2}},[t._v("5秒后关闭")]),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:t.config3}},[t._v("手动关闭")])],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以自定义配置，其中\n      "),s("code",[t._v("duration")]),t._v("来控制自动关闭时长")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.time))])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("Alert",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),s("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.static))]),t._v(" "),s("br"),t._v(" "),s("Alert",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),s("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.destory))]),t._v(" "),s("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("提示类型，提供 info、success、error、warning四种可选类型")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("info")])]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("提示内容")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("自动关闭的延时，单位秒，0为 不自动关闭")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[t._v("closable")]),t._v(" "),s("td",[t._v("是否可手动关闭")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("close")]),t._v(" "),s("td",[t._v("关闭时的回调")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=v.exports},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])}}]);