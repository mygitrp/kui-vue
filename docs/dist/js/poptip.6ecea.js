/*! kui-vue v2.0.9 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+qlZ":function(t,e,o){"use strict";var n=o("rMEQ"),i=o("Ff65");var c={directives:{resize:o("7+I9").a},components:{Code:n.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),o=this.layout,e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t)];var t,e,o},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},v=o("KHd+"),l=Object(v.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},XjKo:function(t,e,o){"use strict";o.r(e);var n={base:'<Poptip trigger="hover" title="标题" content="内容">\n   <Button>hover激活</Button>\n</Poptip>\n<Poptip trigger="click" title="标题" content="内容">\n   <Button>click激活</Button>\n</Poptip>',position:'<Poptip title="标题" content="内容" placement="top-left"><Button>上左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top"><Button>上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="top-right"><Button>上右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-top"><Button>右上</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right"><Button>右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="right-bottom"><Button>右下</Button> </Poptip>\n<Poptip title="标题" content="内容" placement="bottom-right"><Button>下右</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom"><Button>下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="bottom-left"><Button>下左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-bottom"><Button>左下</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left"><Button>左</Button></Poptip>\n<Poptip title="标题" content="内容" placement="left-top"><Button>左上</Button></Poptip>',slot:'<Poptip content="内容" placement="right-top">\n   <Button>Click me</Button>\n   <div slot="content" class="k-table k-table-border">\n    <table>\n     <thead>\n     <tr>\n      <th>姓名</th>\n      <th>电话</th>\n      <th>住址</th>\n     </tr>\n     </thead>\n      <tr>\n      <td>张山</td>\n      <td>13256652545</td>\n      <td>广东省深圳市宝安区软件产业基地三诺大厦19楼</td>\n     </tr> <tr>\n      <td>王二</td>\n      <td>36254525658</td>\n      <td>浙江省杭州市阿里西溪园区3A18楼</td>\n     </tr>\n    </table>\n   </div>\n</Poptip>',confirm:'<Poptip confirm title="您确认删除这条内容吗？" @ok="ok" @cancel="cancel"> \n  <Button>删除</Button> \n</Poptip>\n<Poptip confirm title="Are you OK?" @ok="ok" @cancel="cancel" ok-text="yes" cancel-text="no"> \n  <Button>自定义</Button>\n </Poptip>'},i=n,c={components:{Demo:o("+qlZ").a},data:function(){return{code:i}},methods:{ok:function(){this.$Message.info("你点了确定")},cancel:function(){this.$Message.info("你点了取消")}}},v=o("KHd+"),l=Object(v.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Poptip 气泡提示")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Row",{attrs:{gutter:"8"}},[o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"基本"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Poptip",{attrs:{trigger:"hover",title:"标题",content:"内容"}},[o("Button",[t._v("hover激活")])],1),t._v(" "),o("Poptip",{attrs:{trigger:"click",title:"标题",content:"内容"}},[o("Button",[t._v("click激活")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可以分别使用\n        "),o("code",[t._v("click")]),t._v("和\n        "),o("code",[t._v("hover")]),t._v("来触发展示")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),o("Demo",{attrs:{title:"位置"}},[o("div",{staticStyle:{overflow:"hidden"},attrs:{slot:"content"},slot:"content"},[o("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-left"}},[o("Button",[t._v("上左")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top"}},[o("Button",[t._v("上边")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"top-right"}},[o("Button",[t._v("上右")])],1)],1),t._v(" "),o("div",{staticStyle:{float:"left",height:"150px",width:"80px"}},[o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-top"}},[o("Button",[t._v("左上")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left"}},[o("Button",[t._v("左边")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"left-bottom"}},[o("Button",[t._v("左下")])],1)],1),t._v(" "),o("div",{staticStyle:{"margin-left":"300px",height:"150px",width:"80px"}},[o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-top"}},[o("Button",[t._v("右上")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right"}},[o("Button",[t._v("右边")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"right-bottom"}},[o("Button",[t._v("右下")])],1)],1),t._v(" "),o("div",{staticStyle:{"margin-left":"80px","white-space":"nowrap"}},[o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-left"}},[o("Button",[t._v("下左")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom"}},[o("Button",[t._v("下边")])],1),t._v(" "),o("Poptip",{attrs:{title:"标题",content:"内容",placement:"bottom-right"}},[o("Button",[t._v("下右")])],1)],1)]),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[o("code",[t._v("Poptip")]),t._v("的位置一共有12种，通过\n        "),o("code",[t._v("placement")]),t._v("控制")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.position))])])],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("Demo",{attrs:{title:"嵌套"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Poptip",{attrs:{trigger:"click",content:"内容",placement:"right-top"}},[o("Button",[t._v("Click me")]),t._v(" "),o("div",{staticClass:"k-table k-table-border",attrs:{slot:"content"},slot:"content"},[o("table",[o("thead",[o("tr",[o("th",[t._v("姓名")]),t._v(" "),o("th",[t._v("电话")]),t._v(" "),o("th",[t._v("住址")])])]),t._v(" "),o("tr",[o("td",[t._v("张山")]),t._v(" "),o("td",[t._v("13256652545")]),t._v(" "),o("td",[t._v("广东省深圳市宝安区软件产业基地三诺大厦19楼")])]),t._v(" "),o("tr",[o("td",[t._v("王二")]),t._v(" "),o("td",[t._v("36254525658")]),t._v(" "),o("td",[t._v("浙江省杭州市阿里西溪园区3A18楼")])])])])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),o("code",[t._v("slot=content")]),t._v("来自定义展示内容")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.slot))])]),t._v(" "),o("Demo",{attrs:{title:"确认框"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Poptip",{attrs:{confirm:"",title:"您确认删除这条内容吗？"},on:{ok:t.ok,cancel:t.cancel}},[o("Button",[t._v("删除")])],1),t._v(" "),o("Poptip",{attrs:{confirm:"",title:"Are you OK?","ok-text":"yes","cancel-text":"no"},on:{ok:t.ok,cancel:t.cancel}},[o("Button",[t._v("自定义")])],1)],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("启用\n        "),o("code",[t._v("confirm")]),t._v("来自定义一个确认框模式")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.confirm))])])],1)],1),t._v(" "),o("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("trigger")]),t._v(" "),o("td",[t._v("触发方式，可选值为hover（悬停）click（点击）,在 confirm 模式下，只有 click 有效")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("click")])]),t._v(" "),o("tr",[o("td",[t._v("title")]),t._v(" "),o("td",[t._v("显示的标题")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("content")]),t._v(" "),o("td",[t._v("显示的正文内容，只在非 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("placement")]),t._v(" "),o("td",[t._v("提示框出现的位置，可选值为top，top-left，top-right，bottom，bottom-left，bottom-right，left，left-top，left-bottom，right，right-top，right-bottom")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("top")])]),t._v(" "),o("tr",[o("td",[t._v("width")]),t._v(" "),o("td",[t._v("宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("confirm")]),t._v(" "),o("td",[t._v("是否开启对话框模式")]),t._v(" "),o("td",[t._v("Boolean ")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("transfer")]),t._v(" "),o("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("ok-text")]),t._v(" "),o("td",[t._v("确定按钮的文字，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("确定")])]),t._v(" "),o("tr",[o("td",[t._v("cancel-text")]),t._v(" "),o("td",[t._v("取消按钮的文字，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("取消")])]),t._v(" "),o("tr",[o("td",[t._v("cancel")]),t._v(" "),o("td",[t._v("点击取消的回调，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("ok")]),t._v(" "),o("td",[t._v("点击确定的回调，只在 confirm 模式下有效")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}],!1,null,null,null);e.default=l.exports}}]);