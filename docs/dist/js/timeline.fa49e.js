/*! kui-vue v2.0.6 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+qlZ":function(e,t,i){"use strict";var n=i("rMEQ"),o=i("Ff65");var s={directives:{resize:i("7+I9").a},components:{Code:n.a,Collapse:o.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(e={},t="k-demo-".concat(this.layout),i=this.layout,t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e)];var e,t,i},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},c=i("KHd+"),a=Object(c.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[i("div",{ref:"demo",staticClass:"k-demo-main"},[i("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),i("div",{staticClass:"k-desc"},[i("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),i("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),i("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[i("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),i("div",{staticClass:"k-demo-line"}),e._v(" "),i("Collapse",[i("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null).exports;t.a=a},JQaM:function(e,t,i){"use strict";i.r(t);var n={base:"<TimeLine>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>",withIcon:'<TimeLine>\n   <TimeLineItem icon="ios-ribbon">发布2.0版本</TimeLineItem>\n   <TimeLineItem icon="ios-bug">修复bug</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>',color:'<TimeLine>\n   <TimeLineItem icon="ios-ribbon" color="#cba302">发布2.0版本</TimeLineItem>\n   <TimeLineItem icon="ios-bug" color="red">修复bug</TimeLineItem>\n   <TimeLineItem>发布1.0版本</TimeLineItem>\n</TimeLine>'},o=n,s={components:{Demo:i("+qlZ").a},data:function(){return{code:o}}},c=i("KHd+"),a=Object(c.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",[e._v("TimeLine 时间轴")]),e._v(" "),i("h3",[e._v("代码示例")]),e._v(" "),i("Demo",{attrs:{title:"基础"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",[e._v("发布1.0版本")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("code",[e._v("TimeLine")]),e._v("内部必须包含\n      "),i("code",[e._v("TimeLineItem")])]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),i("Demo",{attrs:{title:"图标"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",{attrs:{icon:"ios-ribbon"}},[e._v("发布2.0版本")]),e._v(" "),i("TimeLineItem",{attrs:{icon:"ios-bug"}},[e._v("修复bug")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("给\n      "),i("code",[e._v("TimeLineItem")]),e._v("设置\n      "),i("code",[e._v("icon")]),e._v("可以改变图标展示")]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.withIcon))])]),e._v(" "),i("Demo",{attrs:{title:"颜色"}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("TimeLine",[i("TimeLineItem",{attrs:{icon:"ios-ribbon",color:"#cba302"}},[e._v("发布2.0版本")]),e._v(" "),i("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e._v("修复bug")]),e._v(" "),i("TimeLineItem",[e._v("发布1.0版本")])],1)],1),e._v(" "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("code",[e._v("color")]),e._v("可以改变图标的颜色")]),e._v(" "),i("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.color))])]),e._v(" "),i("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-border"},[i("table",[i("tr",[i("th",[e._v("属性")]),e._v(" "),i("th",[e._v("说明")]),e._v(" "),i("th",[e._v("类型")]),e._v(" "),i("th",[e._v("默认值")])]),e._v(" "),i("tr",[i("td",[e._v("icon")]),e._v(" "),i("td",[e._v("时间轴item 图标")]),e._v(" "),i("td",[e._v("String")]),e._v(" "),i("td",[e._v("-")])]),e._v(" "),i("tr",[i("td",[e._v("color")]),e._v(" "),i("td",[e._v("时间轴item 颜色")]),e._v(" "),i("td",[e._v("String")]),e._v(" "),i("td",[e._v("-")])]),e._v(" "),i("tr",[i("td",[e._v("dot")]),e._v(" "),i("td",[e._v("自定义时间轴点")]),e._v(" "),i("td",[e._v("slot")]),e._v(" "),i("td",[e._v("-")])])])])}],!1,null,null,null);t.default=a.exports}}]);