/*! kui-vue v2.0.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+qlZ":function(t,e,o){"use strict";var s=o("rMEQ"),n=o("Ff65");var i={directives:{resize:o("7+I9").a},components:{Code:s.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),o=this.layout,e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t)];var t,e,o},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=o("KHd+"),f=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);f.options.__file="demo.vue";var c=f.exports;e.a=c},juCT:function(t,e,o){"use strict";o.r(e);var s={base:'<Affix>\n  <Button>Affix top</Button>\n</Affix>\n<Affix offsetBottom="0">\n  <Button>Affix Bottom</Button>\n</Affix>',offset:'<Affix offsetTop="200">\n  <Button>200px to Affix top</Button>\n</Affix>\n<Affix offsetBottom="100">\n  <Button>100px to Affix bottom</Button>\n</Affix>',callback:'<Affix offsetTop="150" @change="handle">\n  <Button>150px to Affix top</Button>\n</Affix>\n<Affix offsetBottom="100" @change="handle">\n  <Button>100px to Affix bottom</Button>\n</Affix>\n<script>\nexport default {\n  methods: {\n    handle(v) {\n      if (v) {\n        this.$Message.success(\'当前状态：\' + v)\n      } else {\n        this.$Message.error(\'当前状态：\' + v)\n      }\n    }\n  }\n}\n<\/script>\n'},n=s,i={components:{Demo:o("+qlZ").a},data:function(){return{code:n}},methods:{handle:function(t){t?this.$Message.success("当前状态："+t):this.$Message.error("当前状态："+t)}}},a=o("KHd+"),f=Object(a.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Affix 图钉")]),t._v(" "),o("p",[t._v("将页面元素钉在可视范围。")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基本",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Affix",[o("Button",[t._v("Affix top")])],1),t._v(" "),o("Affix",{attrs:{offsetBottom:"0"}},[o("Button",[t._v("Affix Bottom")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),o("code",[t._v("offsetTop")]),t._v("和\n        "),o("code",[t._v("offsetBottom")]),t._v("来设定固定位置")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"偏移",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Affix",{attrs:{offsetTop:"200"}},[o("Button",[t._v("200px to Affix top")])],1),t._v(" "),o("Affix",{attrs:{offsetBottom:"100"}},[o("Button",[t._v("100px to Affix bottom")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("默认\n        "),o("code",[t._v("offsetTop")]),t._v("值为0")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.offset))])])],1)],1),t._v(" "),o("Demo",{attrs:{title:"事件回调"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Affix",{attrs:{offsetTop:"150"},on:{change:t.handle}},[o("Button",[t._v("150px to Affix top")])],1),t._v(" "),o("Affix",{attrs:{offsetBottom:"100"},on:{change:t.handle}},[o("Button",[t._v("100px to Affix bottom")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("当固定状态发生改变时触发回调")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.callback))])]),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("offsetTop")]),t._v(" "),o("td",[t._v("距离窗口顶部达到指定偏移量后触发 ")]),t._v(" "),o("td",[t._v("String,Number")]),t._v(" "),o("td",[t._v("0")])]),t._v(" "),o("tr",[o("td",[t._v("offsetBottom")]),t._v(" "),o("td",[t._v("距离窗口底部达到指定偏移量后触发 ")]),t._v(" "),o("td",[t._v("String,Number ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("change")]),t._v(" "),o("td",[t._v("在固定状态发生改变时触发,返回当前固定状态 false | true")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);f.options.__file="affix.vue";e.default=f.exports}}]);