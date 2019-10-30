/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var a=s("rMEQ"),i=s("Ff65");var v={directives:{resize:s("7+I9").a},components:{Code:a.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},l=s("KHd+"),c=Object(l.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=c},"5y+9":function(t,e,s){"use strict";s.r(e);var a={base:'<p>{{checked}}</p>\n<Switch v-model="checked"></Switch>',theme:'<Switch :value="true"></Switch>\n<Switch :value="true" type="success"></Switch>\n<Switch :value="true" type="danger"></Switch>\n<Switch :value="true" type="warning"></Switch>',text:'<Switch :value="false" true-text="是" false-text="否"></Switch>',disabled:'<Switch :value="false" disabled></Switch>\n<Switch :value="true" disabled></Switch>\n<Switch :value="true" disabled true-text="是" false-text="否"></Switch>'},i=a,v={components:{Demo:s("+qlZ").a},data:function(){return{code:i,checked:!1}}},l=s("KHd+"),c=Object(l.a)(v,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Switch 开关")]),e._v(" "),s("Alert",[e._v("注意：没有使用 kui-loader 时，必须使用 k-switch 标签。")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"基本用法",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("span",{staticStyle:{padding:"0 10px",width:"50px",display:"inline-block"}},[e._v(e._s(e.checked))]),e._v(" "),s("k-switch",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v(" "),s("k-switch",{attrs:{mini:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("可使用\n        "),s("code",[e._v("v-model")]),e._v("进行数据双向绑定")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),s("Demo",{attrs:{title:"主题",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!0}}),e._v(" "),s("k-switch",{attrs:{value:!0,type:"success"}}),e._v(" "),s("k-switch",{attrs:{value:!0,type:"danger"}}),e._v(" "),s("k-switch",{attrs:{value:!0,type:"warning"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("设置\n        "),s("code",[e._v("type")]),e._v("属性可改变组件主题")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.theme))])])],1),e._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"文字",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!1,"true-text":"是","false-text":"否"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),s("code",[e._v("true-text")]),e._v("和\n        "),s("code",[e._v("false-text")]),e._v("设置选中和非选中呈现文字")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.text))])]),e._v(" "),s("Demo",{attrs:{title:"禁用",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!1,disabled:""}}),e._v(" "),s("k-switch",{attrs:{value:!0,disabled:""}}),e._v(" "),s("k-switch",{attrs:{value:!0,disabled:"","true-text":"是","false-text":"否"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),s("code",[e._v("disabled")]),e._v("属性设置组件是否被禁用")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.disabled))])])],1)],1),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("指定当前是否选中，可以使用 v-model 双向绑定数据")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("禁用开关 ")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("主题颜色 可传入 success，warning，danger，primary ")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("mini")]),t._v(" "),s("td",[t._v("是否展示迷你模式")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("true-text")]),t._v(" "),s("td",[t._v("当value为true时 ，显示的文字")]),t._v(" "),s("td",[t._v("String ")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("false-text")]),t._v(" "),s("td",[t._v("当value为false时 ，显示的文字")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("当value 改变时触发,返回true | false")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=c.exports},MnsJ:function(t,e,s){var a=s("WArN");"string"==typeof a&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};s("LboF")(a,i);a.locals&&(t.exports=a.locals)},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])}}]);