/*! kui-vue v2.1.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+qlZ":function(t,a,e){"use strict";var n=e("rMEQ"),s=e("Ff65");var l={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},a="k-demo-".concat(this.layout),e=this.layout,a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t)];var t,a,e},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},o=e("KHd+"),v=Object(o.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;a.a=v},nDMT:function(t,a,e){"use strict";e.r(a);var n={base:'<Checkbox v-model="animated">animated</Checkbox>\n<Tabs :value="3" :animated="animated">\n  <TabPane label="Tab1" name="1">我是内容1....</TabPane>\n  <TabPane label="Tab2" name="2">我是内容2....</TabPane>\n  <TabPane label="Tab3" name="3">我是内容3....</TabPane>\n</Tabs>\n<script>\nexport default {\n  data() {\n    return {\n      animated:true,\n    }\n  }\n}\n<\/script>',disabled:'<Tabs>\n  <TabPane label="Tab1">我是内容1....</TabPane>\n  <TabPane label="Tab2" disabled>我是内容2....</TabPane>\n  <TabPane label="Tab3">我是内容3....</TabPane>\n</Tabs>',icon:'<Tabs>\n  <TabPane label="Tab1" icon="logo-windows">我是内容1....</TabPane>\n  <TabPane label="Tab2" icon="logo-apple">我是内容2....</TabPane>\n  <TabPane label="Tab3" icon="logo-android">我是内容3....</TabPane>\n</Tabs>',card:'<Tabs card>\n  <TabPane label="Tab1" icon="logo-windows">我是内容1....</TabPane>\n  <TabPane label="Tab2" icon="logo-apple">我是内容2....</TabPane>\n  <TabPane label="Tab3" icon="logo-android">我是内容3....</TabPane>\n  <Button slot="extra" mini>Action</Button>\n</Tabs>',closable:'<Tabs card closable>\n  <TabPane :label="\'Tab \'+n" v-for="n in m" :closable="n!=1" :key="n">我是内容{{n}}....</TabPane>\n  <Button slot="extra" mini @click="m++">+</Button>\n</Tabs>\n<script>\nexport default {\n  data() {\n    return {\n      m:3,\n    }\n  }\n}\n<\/script>',sample:'<Tabs :value="1" sample>\n  <TabPane label="TabTitle 1" name="1">\n    <p>我是内容1....</p>\n    <p>我是内容1....</p>\n    <p>我是内容1....</p>\n  </TabPane>\n  <TabPane label="TabTitle 2" name="2">\n    <p>我是内容2....</p>\n    <p>我是内容2....</p>\n    <p>我是内容2....</p>\n  </TabPane>\n  <TabPane label="TabTitle 3" name="3">\n    <p>我是内容2....</p>\n    <p>我是内容2....</p>\n    <p>我是内容2....</p>\n  </TabPane>\n</Tabs>'},s=n,l={components:{Demo:e("+qlZ").a},data:function(){return{code:s,m:3,animated:!0}}},o=e("KHd+"),v=Object(o.a)(l,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("h2",[a._v("Tabs 标签页")]),a._v(" "),e("p",[a._v("选项卡切换组件。")]),a._v(" "),e("h3",[a._v("代码示例")]),a._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基础"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Checkbox",{model:{value:a.animated,callback:function(t){a.animated=t},expression:"animated"}},[a._v("animated")]),a._v(" "),e("Tabs",{attrs:{value:3,animated:a.animated}},[e("TabPane",{attrs:{label:"Tab1",name:"1"}},[a._v("我是内容1....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab2",name:"2"}},[a._v("我是内容2....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab3",name:"3"}},[a._v("我是内容3....")])],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[a._v("Value")]),a._v("和\n        "),e("code",[a._v("TabPane")]),a._v("的\n        "),e("code",[a._v("name")]),a._v("值匹配,默认选中第一项。可以使用 v-model 双向绑定数据。")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.base))])]),a._v(" "),e("Demo",{attrs:{title:"禁用"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tabs",[e("TabPane",{attrs:{label:"Tab1"}},[a._v("我是内容1....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab2",disabled:""}},[a._v("我是内容2....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab3"}},[a._v("我是内容3....")])],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("禁用某一项。")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.disabled))])]),a._v(" "),e("Demo",{attrs:{title:"图标"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tabs",[e("TabPane",{attrs:{label:"Tab1",icon:"logo-windows"}},[a._v("我是内容1....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab2",icon:"logo-apple"}},[a._v("我是内容2....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab3",icon:"logo-android"}},[a._v("我是内容3....")])],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("有图标的标签。")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.icon))])])],1),a._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"卡片式页签"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tabs",{attrs:{card:""}},[e("TabPane",{attrs:{label:"Tab1",icon:"logo-windows"}},[a._v("我是内容1....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab2",icon:"logo-apple"}},[a._v("我是内容2....")]),a._v(" "),e("TabPane",{attrs:{label:"Tab3",icon:"logo-android"}},[a._v("我是内容3....")]),a._v(" "),e("Button",{attrs:{slot:"extra",mini:""},slot:"extra"},[a._v("Action")])],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("设置 slot extra 可以在页签右边添加附加操作。")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.card))])]),a._v(" "),e("Demo",{attrs:{title:"新增和关闭页签"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Tabs",{attrs:{card:"",closable:""}},[a._l(a.m,function(t){return e("TabPane",{key:t,attrs:{label:"Tab "+t,closable:1!=t}},[a._v("我是内容"+a._s(t)+"....")])}),a._v(" "),e("Button",{attrs:{slot:"extra",mini:""},on:{click:function(t){a.m++}},slot:"extra"},[a._v("+")])],2)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[a._v("只有卡片样式支持新增和关闭。使用\n        "),e("code",[a._v("closable=false")]),a._v("禁止关闭。")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.closable))])]),a._v(" "),e("Demo",{attrs:{title:"简洁模式"}},[e("div",{staticStyle:{padding:"15px",background:"#eee"},attrs:{slot:"content"},slot:"content"},[e("Tabs",{attrs:{value:1,sample:""}},[e("TabPane",{attrs:{label:"TabTitle 1",name:"1"}},[e("p",[a._v("我是内容1....")]),a._v(" "),e("p",[a._v("我是内容1....")]),a._v(" "),e("p",[a._v("我是内容1....")])]),a._v(" "),e("TabPane",{attrs:{label:"TabTitle 2",name:"2"}},[e("p",[a._v("我是内容2....")]),a._v(" "),e("p",[a._v("我是内容2....")]),a._v(" "),e("p",[a._v("我是内容2....")])]),a._v(" "),e("TabPane",{attrs:{label:"TabTitle 3",name:"3"}},[e("p",[a._v("我是内容2....")]),a._v(" "),e("p",[a._v("我是内容2....")]),a._v(" "),e("p",[a._v("我是内容2....")])])],1)],1),a._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[a._v("sample=true")]),a._v("开启简洁模式")]),a._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[a._v(a._s(a.code.sample))])])],1)],1),a._v(" "),e("h3",[a._v("Tabs API")]),a._v(" "),a._m(0),a._v(" "),e("h3",[a._v("TabsPane API")]),a._v(" "),a._m(1)],1)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-border",staticStyle:{overflow:"visible"}},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据")]),t._v(" "),e("td",[t._v("[String,Number]")]),t._v(" "),e("td",[t._v("默认为第一项的 name")])]),t._v(" "),e("tr",[e("td",[t._v("card")]),t._v(" "),e("td",[t._v("是否为卡片样式")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("closable")]),t._v(" "),e("td",[t._v("是否可以关闭页签，仅在 card=true 时有效")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("tab 被点击时触发，返回 name")]),t._v(" "),e("td",[t._v("Fucntion")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("colose")]),t._v(" "),e("td",[t._v("tab 被关闭时触发，返回 name")]),t._v(" "),e("td",[t._v("Fucntion")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("extra")]),t._v(" "),e("td",[t._v("附加内容 ")]),t._v(" "),e("td",[t._v("slot")]),t._v(" "),e("td",[t._v("-")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-border",staticStyle:{overflow:"visible"}},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("用于标识当前面板，对应 value，默认为其索引值")]),t._v(" "),e("td",[t._v("[String,Number]")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td",[t._v("选项卡头显示文字")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("选项卡图标")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("animated")]),t._v(" "),e("td",[t._v("切换tab是否展示动画")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("是否禁用该选项卡")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("closable")]),t._v(" "),e("td",[t._v("是否可以关闭页签，仅在 card=true 时有效")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")])])])])}],!1,null,null,null);a.default=v.exports}}]);