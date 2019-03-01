/*! kui-vue v2.0.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+qlZ":function(t,o,e){"use strict";var n=e("rMEQ"),s=e("Ff65");var d={directives:{resize:e("7+I9").a},components:{Code:n.a,Collapse:s.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},o="k-demo-".concat(this.layout),e=this.layout,o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t)];var t,o,e},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},v=e("KHd+"),c=Object(v.a)(d,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),e("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[e("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),e("div",{staticClass:"k-demo-line"}),t._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null);c.options.__file="demo.vue";var i=c.exports;o.a=i},bnpq:function(t,o,e){"use strict";e.r(o);var n={base:'<Modal v-model="d1"></Modal>',custom:'<Button @click="d2=!d2">自定义宽度</Button>\n<Button @click="d3=!d3">内容和页脚</Button>\n<Button @click="d4=!d4">按钮文字</Button>\n<Modal v-model="d2" width="300"></Modal>\n<Modal v-model="d3" title="我是自定义标题">\n   <p>我是自定义内容</p>\n   <div slot="footer">\n    <Button type="danger">自定义1</Button>\n    <Button type="success">自定义2</Button>\n   </div>\n</Modal>\n<Modal v-model="d4" width="300" cancelText="不要取消" okText="别点我"></Modal>',canMove:'<Modal v-model="d5" isMove>我可以拖动的</Modal>',mode:'<Button @click="show(\'success\')">Success</Button>\n<Button @click="show(\'error\')">Error</Button>\n<Button @click="show(\'warning\')">Warning</Button>\n<Button @click="show(\'info\')">Info</Button>\n<Button @click="show(\'ios-happy\')">happy</Button>\n<Modal v-model="d6" type="toast" :icon="icon" :color="color">恭喜你中了5000万...</Modal>\n<script>\nexport default {\n  data() {\n    return {\n      color: "",\n      icon: "success",\n      d6: false,\n    }\n  },\n  methods: {\n    show(type) {\n      this.icon = type;\n      this.d6 = !this.d6;\n      this.color = type == "happy" ? "orange" : "";\n    }\n  }\n}\n<\/script>'},s=n,d={components:{Demo:e("+qlZ").a},data:function(){return{color:"",icon:"success",d1:!1,d2:!1,d3:!1,d4:!1,d5:!1,d6:!1,code:s}},methods:{test:function(){alert("")},show:function(t){this.icon=t,this.d6=!this.d6,this.color="happy"==t?"orange":""}}},v=e("KHd+"),c=Object(v.a)(d,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("h2",[o._v("Modal 对话框")]),o._v(" "),e("h3"),o._v(" "),e("Demo",{attrs:{title:"基础"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(t){o.d1=!o.d1}}},[o._v("普通对话框")]),o._v(" "),e("Modal",{model:{value:o.d1,callback:function(t){o.d1=t},expression:"d1"}})],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("通过\n      "),e("code",[o._v("v-model")]),o._v("双向绑定\n      "),e("code",[o._v("Modal")]),o._v("是否展示")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.base))])]),o._v(" "),e("Demo",{attrs:{title:"自定义"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(t){o.d2=!o.d2}}},[o._v("自定义宽度")]),o._v(" "),e("Button",{on:{click:function(t){o.d3=!o.d3}}},[o._v("内容和页脚")]),o._v(" "),e("Button",{on:{click:function(t){o.d4=!o.d4}}},[o._v("按钮文字")]),o._v(" "),e("Modal",{attrs:{width:"300"},model:{value:o.d2,callback:function(t){o.d2=t},expression:"d2"}}),o._v(" "),e("Modal",{attrs:{title:"我是自定义标题"},model:{value:o.d3,callback:function(t){o.d3=t},expression:"d3"}},[e("p",[o._v("我是自定义内容")]),o._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"danger"}},[o._v("自定义1")]),o._v(" "),e("Button",{attrs:{type:"success"}},[o._v("自定义2")])],1)]),o._v(" "),e("Modal",{attrs:{width:"300",cancelText:"不要取消",okText:"别点我"},model:{value:o.d4,callback:function(t){o.d4=t},expression:"d4"}})],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("通过\n      "),e("code",[o._v("title")]),o._v("来设置标题，\n      "),e("code",[o._v("width")]),o._v("控制宽度， 还有\n      "),e("code",[o._v("slot")]),o._v("展示自定义内容\n    ")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.custom))])]),o._v(" "),e("Demo",{attrs:{title:"可拖动"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(t){o.d5=!o.d5}}},[o._v("普通对话框")]),o._v(" "),e("Modal",{attrs:{isMove:""},model:{value:o.d5,callback:function(t){o.d5=t},expression:"d5"}},[o._v("我可以拖动的")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("有人想要拖动\n      "),e("code",[o._v("Modal")]),o._v("，真奇葩，\n      "),e("code",[o._v("isMove")]),o._v("就可以搞定的")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.canMove))])]),o._v(" "),e("Demo",{attrs:{title:"Toast"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("Button",{on:{click:function(t){o.show("success")}}},[o._v("Success")]),o._v(" "),e("Button",{on:{click:function(t){o.show("error")}}},[o._v("Error")]),o._v(" "),e("Button",{on:{click:function(t){o.show("warning")}}},[o._v("Warning")]),o._v(" "),e("Button",{on:{click:function(t){o.show("info")}}},[o._v("Info")]),o._v(" "),e("Button",{on:{click:function(t){o.show("ios-happy")}}},[o._v("happy")]),o._v(" "),e("Modal",{attrs:{isMove:"",type:"toast",icon:o.icon,color:o.color},model:{value:o.d6,callback:function(t){o.d6=t},expression:"d6"}},[o._v("恭喜你中了5000万...")])],1),o._v(" "),e("div",{attrs:{slot:"desc"},slot:"desc"},[o._v("这个模式只是用来展示最后的结果，\n      "),e("code",[o._v("type=toast")]),o._v("就可以了")]),o._v(" "),e("div",{attrs:{slot:"code"},slot:"code"},[o._v(o._s(o.code.mode))])]),o._v(" "),e("h3",[o._v("API")]),o._v(" "),o._m(0)],1)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("对话框是否显示，可使用 v-model 双向绑定数据。")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("对话框标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("对话框宽度")]),t._v(" "),e("td",[t._v("Number,String")]),t._v(" "),e("td",[t._v("520")])]),t._v(" "),e("tr",[e("td",[t._v("okText")]),t._v(" "),e("td",[t._v("确定按钮文字")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("确定")])]),t._v(" "),e("tr",[e("td",[t._v("cancelText")]),t._v(" "),e("td",[t._v("取消按钮文字")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("取消")])]),t._v(" "),e("tr",[e("td",[t._v("isMove")]),t._v(" "),e("td",[t._v("弹框是否可拖动，type 为modal可以用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("弹框的模式，可选值为 modal，toast ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("modal")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("弹框的图标，type为toast可用 ，默认可选值为success，warning,error,info,也可以自定义，参照\n          "),e("a",{attrs:{href:"#/icon"}},[t._v("Icon")]),t._v("值 ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("success")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("弹框的图标的颜色，type为toast可用 ")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("ok")]),t._v(" "),e("td",[t._v("点击确定的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("cancel")]),t._v(" "),e("td",[t._v("点击取消的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("close")]),t._v(" "),e("td",[t._v("窗口关闭的回调")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);c.options.__file="modal.vue";o.default=c.exports}}]);