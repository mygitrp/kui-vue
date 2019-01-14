/*! kui-vue v2.0.2 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+qlZ":function(t,e,o){"use strict";var n=o("rMEQ"),s=o("Ff65");var i={directives:{resize:o("7+I9").a},components:{Code:n.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),o=this.layout,e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t)];var t,e,o},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=o("KHd+"),c=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);c.options.__file="demo.vue";var r=c.exports;e.a=r},Anko:function(t,e,o){(t.exports=o("JPst")(!1)).push([t.i,"\n.custom-backtop {\n  background: #2d94ff;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n",""])},hig4:function(t,e,o){"use strict";o.r(e);var n=o("+qlZ"),s={base:"<BackTop></BackTop>",custom:'<BackTop bottom="90" right="100">\n    <div class="custom-backtop">UP</div>\n</BackTop>\n<style>\n.custom-backtop {\n  background: #2d94ff;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n}\n</style>\n'},i=s,a={components:{Demo:n.a},data:function(){return{code:i}}},c=(o("q0ej"),o("KHd+")),r=Object(c.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("BackTop")]),t._v(" "),o("p",[t._v("当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        向下滚动页面，灰色的按钮为默认效果。\n        "),o("BackTop")],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n        默认位置距离页面右部和底部 50px，滚动至距顶端 400px 时显示。\n      ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基础用法",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        自定义按钮为蓝色的按钮\n        "),o("BackTop",{attrs:{bottom:"90",right:"100"}},[o("div",{staticClass:"custom-backtop"},[t._v("UP")])])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n        可以自定义回到顶部按钮的样式\n        "),o("code",[t._v("bottom")]),t._v("为90px，\n        "),o("code",[t._v("right")]),t._v("为100px\n      ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.custom))])])],1)],1),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("height")]),t._v(" "),o("td",[t._v("页面滚动高度达到该值时才显示\n          "),o("code",[t._v("BackTop")]),t._v("组件 ")]),t._v(" "),o("td",[t._v("String,Number")]),t._v(" "),o("td",[t._v("400")])]),t._v(" "),o("tr",[o("td",[t._v("bottom")]),t._v(" "),o("td",[t._v("组件距离底部的距离 ")]),t._v(" "),o("td",[t._v("String,Number ")]),t._v(" "),o("td",[t._v("40")])]),t._v(" "),o("tr",[o("td",[t._v("right")]),t._v(" "),o("td",[t._v("组件距离右部的距离 ")]),t._v(" "),o("td",[t._v("String,Number ")]),t._v(" "),o("td",[t._v("40")])]),t._v(" "),o("tr",[o("td",[t._v("click")]),t._v(" "),o("td",[t._v("点击按钮时触发 ")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);r.options.__file="backtop.vue";e.default=r.exports},q0ej:function(t,e,o){"use strict";var n=o("un8C");o.n(n).a},un8C:function(t,e,o){var n=o("Anko");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(n,s);n.locals&&(t.exports=n.locals)}}]);