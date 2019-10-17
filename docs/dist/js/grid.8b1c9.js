/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+qlZ":function(t,o,s){"use strict";s("MnsJ");var e=s("rMEQ"),l=s("Ff65");var n={directives:{resize:s("7+I9").a},components:{Code:e.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,o,s){return o in t?Object.defineProperty(t,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[o]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},v=s("KHd+"),a=Object(v.a)(n,function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=a},MnsJ:function(t,o,s){var e=s("WArN");"string"==typeof e&&(e=[[t.i,e,""]]);var l={insert:"head",singleton:!1};s("LboF")(e,l);e.locals&&(t.exports=e.locals)},WArN:function(t,o,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])},aTpQ:function(t,o,s){"use strict";s.r(o);var e={base:'<Row>\n  <Col span="12">col-12</Col>\n  <Col span="12">col-12</Col>\n</Row>\n<Row>\n  <Col span="8">col-8</Col>\n  <Col span="8">col-8</Col>\n  <Col span="8">col-8</Col>\n</Row>\n<Row>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n  <Col span="6">col-6</Col>\n</Row>',gutter:'<Row gutter="10" class="pd">\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n  <Col span="6">\n    <div>col-6</div>\n  </Col>\n</Row>',offset:'<Row>\n  <Col span="8">col-8</Col>\n  <Col span="8" offset=8>col-8 | offset-8</Col>\n</Row>\n<Row>\n  <Col span="6">col-6</Col>\n  <Col span="6" offset=6>col-6 | offset-6</Col>\n  <Col span="6">col-6</Col>\n</Row>\n<Row>\n  <Col span="12" offset=12>col-12 offset-12</Col>\n</Row>'},l=e,n={components:{Demo:s("+qlZ").a},data:function(){return{code:l}}},v=s("KHd+"),a=Object(v.a)(n,function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"demo-grid"},[s("h2",[t._v("Grid 栅格")]),t._v(" "),s("p",[t._v("采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题")]),t._v(" "),s("p",[t._v("两个概念，行row和列col，具体使用方法如下：")]),t._v(" "),t._m(0),t._v(" "),s("Alert",[t._v("注意：非 template/render 模式下，需使用 k-col。")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Demo",{attrs:{title:"基础",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Row",[s("Col",{attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),s("Col",{attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("Col",{attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("col-6")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[s("code",[t._v("col")]),t._v("必须放在\n      "),s("code",[t._v("row")]),t._v("里面")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"分栏间隔",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Row",{staticClass:"pd",attrs:{gutter:"10"}},[s("Col",{attrs:{span:"6"}},[s("div",[t._v("col-6")])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",[t._v("col-6")])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",[t._v("col-6")])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",[t._v("col-6")])])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("使用\n      "),s("code",[t._v("gutter")]),t._v("熟悉来设置分栏的间隔")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.gutter))])]),t._v(" "),s("Demo",{attrs:{title:"栅格偏移",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Row",[s("Col",{attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),s("Col",{attrs:{span:"8",offset:"8"}},[t._v("col-8 | offset-8")])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),s("Col",{attrs:{span:"6",offset:"6"}},[t._v("col-6 | offset-6")]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("col-6")])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12",offset:"12"}},[t._v("col-12 offset-12")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过设置\n      "),s("code",[t._v("offset")]),t._v("属性，将列进行左右偏移，偏移栅格数为\n      "),s("code",[t._v("offset")]),t._v("的值。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.offset))])]),t._v(" "),s("h3",[t._v("Row API")]),t._v(" "),t._m(1),t._v(" "),s("h3",[t._v("Col API")]),t._v(" "),t._m(2)],1)},[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ul",{staticClass:"k-item-list"},[s("li",[t._v("使用\n      "),s("code",[t._v("row")]),t._v("在水平方向创建一行")]),t._v(" "),s("li",[t._v("将一组\n      "),s("code",[t._v("col")]),t._v("插入在\n      "),s("code",[t._v("row")]),t._v("中")]),t._v(" "),s("li",[t._v("在每个\n      "),s("code",[t._v("col")]),t._v("中，键入自己的内容")]),t._v(" "),s("li",[t._v("通过设置\n      "),s("code",[t._v("col")]),t._v("的\n      "),s("code",[t._v("span")]),t._v("参数，指定跨越的范围，其范围是1到24")]),t._v(" "),s("li",[t._v("每个\n      "),s("code",[t._v("row")]),t._v("中的\n      "),s("code",[t._v("col")]),t._v("总和应该为24")])])},function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("gutter")]),t._v(" "),s("td",[t._v("栅格间距，单位 px，左右平分")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("0")])])])])},function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("span")]),t._v(" "),s("td",[t._v("栅格的占位格数，可选值为0~24的整数")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("offset")]),t._v(" "),s("td",[t._v("栅格左侧的间隔格数，可选值为1~24的整数")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);o.default=a.exports}}]);