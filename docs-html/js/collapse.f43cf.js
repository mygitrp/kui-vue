/*! kui-vue v1.9.0 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/uBS":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Collapse 折叠面板")]),t._v(" "),n("p",[t._v("可以折叠/展开的内容区域。")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"基础"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{model:{value:t.acitve,callback:function(e){t.acitve=e},expression:"acitve"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("默认可以同时展开一个或者多个面板")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{layout:"vertical",title:"手风琴"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{attrs:{accrodion:""},model:{value:t.acitve1,callback:function(e){t.acitve1=e},expression:"acitve1"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("只允许同时展开一个面板")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.accrodion))])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{layout:"vertical",title:"嵌套面板"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{model:{value:t.acitve2,callback:function(e){t.acitve2=e},expression:"acitve2"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("Collapse",{model:{value:t.acitve3,callback:function(e){t.acitve3=e},expression:"acitve3"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])])],1)],1),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("嵌套折叠面板。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.collapse))])]),t._v(" "),n("Demo",{attrs:{layout:"vertical",title:"简洁模式"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Collapse",{attrs:{sample:""},model:{value:t.acitve1,callback:function(e){t.acitve1=e},expression:"acitve1"}},[n("Panel",{attrs:{title:"我是标题",name:"1"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"2"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])]),t._v(" "),n("Panel",{attrs:{title:"我是标题",name:"3"}},[n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")]),t._v(" "),n("p",[t._v("我是内容，要写很多文字")])])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("一套没有边框的简洁样式。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.sample))])])],1)],1),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("当前激活的面板的 name，可以使用 v-model 双向绑定")]),t._v(" "),n("td",[t._v("Array | String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("accordion")]),t._v(" "),n("td",[t._v("是否开启手风琴模式，开启后每次至多展开一个面板 ")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("sample")]),t._v(" "),n("td",[t._v("是否开启简洁模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("切换面板时触发回调，返回当前选项卡的展开折叠状态")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return l})},"3fQC":function(t,e,n){"use strict";n.r(e);var a=n("/uBS"),l=n("CFI+");for(var s in l)"default"!==s&&function(t){n.d(e,t,function(){return l[t]})}(s);var v=n("KHd+"),i=Object(v.a)(l.default,a.a,a.b,!1,null,null,null);i.options.__file="collapse.vue",e.default=i.exports},AGwT:function(t,e,n){"use strict";n.r(e);var a=n("mNc1"),l=n("f2WU");for(var s in l)"default"!==s&&function(t){n.d(e,t,function(){return l[t]})}(s);var v=n("KHd+"),i=Object(v.a)(l.default,a.a,a.b,!1,null,null,null);i.options.__file="demo.vue",e.default=i.exports},"CFI+":function(t,e,n){"use strict";n.r(e);var a=n("bncw"),l=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e.default=l.a},"DhP+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={base:'<Collapse v-model="acitve">\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',accrodion:'<Collapse v-model="acitve" accrodion>\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',collapse:'<Collapse v-model="acitve">\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <Collapse v-model="acitve">\n      <Panel title="我是标题" name="1">\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n      </Panel>\n      <Panel title="我是标题" name="2">\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n        <p>我是内容，要写很多文字</p>\n      </Panel>\n    </Collapse>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>',sample:'<Collapse v-model="acitve" sample>\n  <Panel title="我是标题" name="1">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="2">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n  <Panel title="我是标题" name="3">\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n    <p>我是内容，要写很多文字</p>\n  </Panel>\n</Collapse>\n<script>\nexport default {\n  data() {\n    return {\n      acitve: \'1\',\n    }\n  }\n}\n<\/script>'};e.default=a},LHuI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("YEIV")),l=i(n("w3Nn")),s=i(n("Ff65")),v=i(n("7+I9"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:v.default},components:{Code:l.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},ZNdt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,l=n("AGwT"),s=(a=l)&&a.__esModule?a:{default:a};e.default=s.default},bncw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(n("ZNdt")),l=s(n("DhP+"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:a.default},data:function(){return{code:l.default,acitve:"1",acitve1:"1",acitve2:"1",acitve3:"1"}}}},f2WU:function(t,e,n){"use strict";n.r(e);var a=n("LHuI"),l=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e.default=l.a},mNc1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},l=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return l})}}]);