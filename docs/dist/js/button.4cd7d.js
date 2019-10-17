/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+qlZ":function(t,o,e){"use strict";e("MnsJ");var n=e("rMEQ"),r=e("Ff65");var i={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:r.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},a=e("KHd+"),s=Object(a.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;o.a=s},"0rU2":function(t,o,e){"use strict";e.r(o);var n={base:'<Button>Default</Button>\n<Button type="primary">Primary</Button>\n<Button type="primary" hollow>hollow</Button>\n<Button type="primary" circle>circle</Button> \n<Button type="link" circle>link</Button>',disabled:'<Button type="primary">Primary</Button>\n<Button disabled type="primary">disabled</Button>',withIcon:'<Button type="primary" icon="ios-search">搜索</Button>\n<Button type="success" icon="ios-arrow-back">Backward</Button>\n<Button type="danger" icon="ios-arrow-forward" icon-align="right">Forward</Button>\n<Button type="primary" icon="ios-play" circle />\n<Button type="primary" icon="ios-pause" />\n<Button type="primary" icon="ios-square" />\n<Button type="primary" icon="ios-search" loading>loading</Button>\n<Button type="primary" :loading="loading" @click="loading=true">loading</Button>',size:'<Button type="primary" large>Large</Button>\n<Button type="primary">Base</Button>\n<Button type="primary" mini>Mini</Button>',group:'<ButtonGroup large>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n</ButtonGroup>\n<ButtonGroup circle>\n  <Button>待发货</Button>\n  <Button>已发货</Button>\n  <Button>已签收</Button>\n  </ButtonGroup>\n<ButtonGroup mini circle>\n  <Button  type="success">编辑</Button>\n  <Button  type="danger">删除</Button>\n  <Button  type="primary">保存</Button>\n</ButtonGroup>'},r=n,i={components:{Demo:e("+qlZ").a},data:function(){return{code:r,loading:!1}}},a=e("KHd+"),s=Object(a.a)(i,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"demo-button"},[e("h2",[o._v("Button 按钮")]),o._v(" "),e("Alert",[o._v("注意：非 template/render 模式下，需使用 k-button。")]),o._v(" "),e("h3",[o._v("代码示例")]),o._v(" "),e("Row",{attrs:{gutter:"8"}},[e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"基础",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",[o._v("Default")]),o._v(" "),e("Button",{attrs:{type:"primary"}},[o._v("Primary")]),o._v(" "),e("Button",{attrs:{type:"primary",hollow:""}},[o._v("hollow")]),o._v(" "),e("Button",{attrs:{type:"primary",circle:""}},[o._v("circle")]),o._v(" "),e("Button",{attrs:{type:"link",circle:""}},[o._v("link")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("使用\n        "),e("code",[o._v("type")]),o._v("、\n        "),e("code",[o._v("hollow")]),o._v("、\n        "),e("code",[o._v("circle")]),o._v("属性来定义\n        "),e("code",[o._v("Button")]),o._v(" 的样式。")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.base)+" ")])]),o._v(" "),e("Demo",{attrs:{title:"带图标",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary",icon:"ios-search"}},[o._v("搜索")]),o._v(" "),e("Button",{attrs:{type:"success",icon:"ios-arrow-back"}},[o._v("Backward")]),o._v(" "),e("Button",{attrs:{type:"danger",icon:"ios-arrow-forward","icon-align":"right"}},[o._v("Forward")]),o._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-play",circle:""}}),o._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-pause"}}),o._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-square"}}),o._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-search",loading:""}},[o._v("loading")]),o._v(" "),e("Button",{attrs:{type:"primary",loading:o.loading},on:{click:function(t){o.loading=!0}}},[o._v("loading")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("通过添加\n        "),e("code",[o._v("icon")]),o._v("属性 设置按钮按钮图标。")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.withIcon))])])],1),o._v(" "),e("Col",{attrs:{span:"12"}},[e("Demo",{attrs:{title:"禁用",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary"}},[o._v("Primary")]),o._v(" "),e("Button",{attrs:{disabled:"",type:"primary"}},[o._v("disabled")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("通过添加\n        "),e("code",[o._v("disabled")]),o._v("属性可将按钮设置为不可用状态。")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.disabled))])]),o._v(" "),e("Demo",{attrs:{title:"尺寸",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{attrs:{type:"primary",large:""}},[o._v("Large")]),o._v(" "),e("Button",{attrs:{type:"primary"}},[o._v("Base")]),o._v(" "),e("Button",{attrs:{type:"primary",mini:""}},[o._v("Mini")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[e("code",[o._v("mini")]),o._v("为小尺寸，\n        "),e("code",[o._v("large")]),o._v("为大尺寸")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.size))])])],1)],1),o._v(" "),e("Demo",{attrs:{title:"按钮组合",layout:"vertical"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("ButtonGroup",{attrs:{large:""}},[e("Button",[o._v("待发货")]),o._v(" "),e("Button",[o._v("已发货")]),o._v(" "),e("Button",[o._v("已签收")])],1),o._v(" "),e("ButtonGroup",{attrs:{circle:""}},[e("Button",[o._v("待发货")]),o._v(" "),e("Button",[o._v("已发货")]),o._v(" "),e("Button",[o._v("已签收")])],1),o._v(" "),e("ButtonGroup",{attrs:{mini:"",circle:""}},[e("Button",{attrs:{type:"success"}},[o._v("编辑")]),o._v(" "),e("Button",{attrs:{type:"danger"}},[o._v("删除")]),o._v(" "),e("Button",{attrs:{type:"primary"}},[o._v("保存")])],1)],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("将多个\n      "),e("code",[o._v("Button")]),o._v("放入\n      "),e("code",[o._v("ButtonGroup")]),o._v("内，可实现按钮组合的效果。")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.group))])]),o._v(" "),e("h3",[o._v("API")]),o._v(" "),o._m(0)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("按钮类型，可选值为primary、link、success、warning、danger或者不设置")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("mini")]),t._v(" "),e("td",[t._v("按钮显示小尺寸")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("large")]),t._v(" "),e("td",[t._v("按钮显示大尺寸")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("circle")]),t._v(" "),e("td",[t._v("按钮是否圆角")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("hollow")]),t._v(" "),e("td",[t._v("按钮是否颜色镂空")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("按钮的图标")]),t._v(" "),e("td",[t._v("String ")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("icon-align")]),t._v(" "),e("td",[t._v("图标位置，提供left，right选项")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("left")])]),t._v(" "),e("tr",[e("td",[t._v("loading")]),t._v(" "),e("td",[t._v("按钮是否进入加载模式")]),t._v(" "),e("td",[t._v("Boolean ")]),t._v(" "),e("td",[t._v("false")])])])])}],!1,null,null,null);o.default=s.exports},MnsJ:function(t,o,e){var n=e("WArN");"string"==typeof n&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};e("LboF")(n,r);n.locals&&(t.exports=n.locals)},WArN:function(t,o,e){(t.exports=e("JPst")(!1)).push([t.i,"",""])}}]);