/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+qlZ":function(t,e,n){"use strict";n("MnsJ");var o=n("rMEQ"),a=n("Ff65");var s={directives:{resize:n("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},r=n("KHd+"),d=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=d},MnsJ:function(t,e,n){var o=n("WArN");"string"==typeof o&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};n("LboF")(o,a);o.locals&&(t.exports=o.locals)},WArN:function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,"",""])},akxJ:function(t,e,n){"use strict";n.r(e);var o=n("+qlZ"),a={base:'<Badge count="3">\n  <Button>最新消息</Button>\n</Badge>\n<Badge count="15" color="orange" style="margin:0 30px;">\n  <Button>最新评论</Button>\n</Badge>\n<Dropdown trigger="click">\n  <a style="margin-right:30px;">通知列表\n    <Icon type="ios-arrow-down" /></a>\n  <DropdownMenu slot="list">\n    <DropdownItem>紧急通知\n      <Badge count="8" mark />\n    </DropdownItem>\n    <DropdownItem>普通通知\n      <Badge count="12" mark />\n    </DropdownItem>\n  </DropdownMenu>\n</Dropdown>',dot:'<Badge dot>\n  <div style="width:50px;height:50px;background:#ddd"></div>\n</Badge>\n<Badge dot style="margin-left:20px;">\n  <Icon type="ios-archive" size="30"></Icon>\n</Badge>\n<Badge dot style="margin-left:20px;">\n  <a href="#">我是一个连接</a>\n</Badge>',maxCount:'<Badge count="50" max-count="10" color="orange">\n  <Button>最新消息</Button>\n</Badge>\n<Badge count="10055" max-count="999" style="margin-left:60px;" color="green">\n  <Button>最新消息</Button>\n</Badge>\n<Badge count="hot" style="margin-left:60px;">\n  <Button>热门</Button>\n</Badge>\n<Badge count="new" style="margin-left:60px;">\n  <Button>最新</Button>\n</Badge>'},s=a,r={components:{Demo:o.a},data:function(){return{m:1,code:s}}},d=n("KHd+"),i=Object(d.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Badge 徽标")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{layout:"vertical",title:"基础"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{count:"3"}},[n("Button",[t._v("最新消息")])],1),t._v(" "),n("Badge",{staticStyle:{margin:"0 30px"},attrs:{count:"15",color:"orange"}},[n("Button",[t._v("最新评论")])],1),t._v(" "),n("Dropdown",{attrs:{trigger:"click"}},[n("a",{staticStyle:{"margin-right":"30px"}},[t._v("通知列表\n          "),n("Icon",{attrs:{type:"ios-arrow-down"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[t._v("紧急通知\n            "),n("Badge",{attrs:{count:"8",mark:""}})],1),t._v(" "),n("DropdownItem",[t._v("普通通知\n            "),n("Badge",{attrs:{count:"12",mark:""}})],1)],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[t._v("Badge")]),t._v("基础使用")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{layout:"vertical",title:"点"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{dot:""}},[n("div",{staticStyle:{width:"50px",height:"50px",background:"#ddd"}})]),t._v(" "),n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[n("Icon",{attrs:{type:"ios-archive",size:"30"}})],1),t._v(" "),n("Badge",{staticStyle:{"margin-left":"20px"},attrs:{dot:""}},[n("a",{attrs:{href:"#"}},[t._v("我是一个连接")])])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n      "),n("code",[t._v("dot")]),t._v("来展示一个点")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.dot))])]),t._v(" "),n("Demo",{attrs:{layout:"vertical",title:"最大值 / 自定义"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Badge",{attrs:{count:"50","max-count":"10",color:"orange"}},[n("Button",[t._v("最新消息")])],1),t._v(" "),n("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"10055","max-count":"999",color:"green"}},[n("Button",[t._v("最新消息")])],1),t._v(" "),n("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"hot"}},[n("Button",[t._v("热门")])],1),t._v(" "),n("Badge",{staticStyle:{"margin-left":"60px"},attrs:{count:"new"}},[n("Button",[t._v("最新")])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("数字模式超出隐藏，设置\n      "),n("code",[t._v("max-count")]),t._v("配合\n      "),n("code",[t._v("count")])]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.maxCount))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("count")]),t._v(" "),n("td",[t._v("显示的文字")]),t._v(" "),n("td",[t._v("String，Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("max-count")]),t._v(" "),n("td",[t._v("展示封顶的数字值，高于的部分会以+号显示")]),t._v(" "),n("td",[t._v("String，Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("dot")]),t._v(" "),n("td",[t._v("不展示数字，只有一个小红点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("mark")]),t._v(" "),n("td",[t._v("是否单独使用")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])])])])}],!1,null,null,null);e.default=i.exports}}]);