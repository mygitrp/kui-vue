/*! kui-vue v2.1.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+qlZ":function(t,e,s){"use strict";var i=s("rMEQ"),n=s("Ff65");var r={directives:{resize:s("7+I9").a},components:{Code:i.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),s=this.layout,e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t)];var t,e,s},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},o=s("KHd+"),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=c},"0BeB":function(t,e,s){"use strict";s.r(e);var i={base:'<Steps current="1">\n  <Step title="已完成" description="这里是步骤的描述信息"></Step>\n  <Step title="进行中" description="这里是步骤的描述信息"></Step>\n  <Step title="待进行" description="这里是步骤的描述信息"></Step>\n</Steps>',mini:'<Steps current="1" mini>\n  <Step title="已完成"></Step>\n  <Step title="进行中"></Step>\n  <Step title="待进行"></Step>\n</Steps>',icon:'<Steps current="1">\n  <Step title="登陆" icon="md-lock"></Step>\n  <Step title="绑定手机" icon="md-phone-portrait"></Step>\n  <Step title="绑定邮箱" icon="e=md-mail"></Step>\n</Steps>',test:'<Steps :current="current">\n  <Step title="步骤1"></Step>\n  <Step title="步骤2"></Step>\n  <Step title="步骤3"></Step>\n  <Step title="步骤4"></Step>\n</Steps>\n<br/>\n<Button @click="step(\'next\')">下一步</Button>\n<Button @click="step(\'prev\')">上一步</Button>\n<script>\nexport default {\n  data() {\n    return {\n      current: 0\n    }\n  },\n  methods: {\n    step(t) {\n      this.current = t == \'next\' ? (this.current >= 3 ? 3 : this.current + 1) : (this.current <= 0 ? 0 : this.current - 1)\n    }\n  }\n}\n<\/script>\n',status:'<Steps :current="1" status="error">\n  <Step title="步骤1" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤2" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤3" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤4" description="这里是步骤的描述信息"></Step>\n</Steps>  ',vertical:'<Steps :current="1"  vertical>\n  <Step title="步骤1" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤2" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤3" description="这里是步骤的描述信息"></Step>\n  <Step title="步骤4" description="这里是步骤的描述信息"></Step>\n</Steps>  '},n=i,r={components:{Demo:s("+qlZ").a},data:function(){return{code:n,current:0}},methods:{step:function(t){this.current="next"==t?3<=this.current?3:this.current+1:this.current<=0?0:this.current-1}}},o=s("KHd+"),c=Object(o.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Steps 步骤条")]),e._v(" "),s("p",[e._v("拆分某项流程的步骤，引导用户按流程完成任务。")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Demo",{attrs:{title:"基本",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:"1"}},[s("Step",{attrs:{title:"已完成",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"进行中",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"待进行",description:"这里是步骤的描述信息"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("简单的步骤条。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),s("Demo",{attrs:{title:"迷你版",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:"1",mini:""}},[s("Step",{attrs:{title:"已完成"}}),e._v(" "),s("Step",{attrs:{title:"进行中"}}),e._v(" "),s("Step",{attrs:{title:"待进行"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("迷你版的步骤条，通过设置\n      "),s("code",[e._v("mini")]),e._v(" 启用.")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.mini))])]),e._v(" "),s("Demo",{attrs:{title:"自定义图标",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:"1"}},[s("Step",{attrs:{title:"登陆",icon:"md-lock"}}),e._v(" "),s("Step",{attrs:{title:"绑定手机",icon:"md-phone-portrait"}}),e._v(" "),s("Step",{attrs:{title:"绑定邮箱",icon:"md-mail"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("可以启用自定义图标。自定义\n      "),s("code",[e._v("icon")])]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.icon))])]),e._v(" "),s("Demo",{attrs:{title:"步骤切换",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:e.current}},[s("Step",{attrs:{title:"步骤1"}}),e._v(" "),s("Step",{attrs:{title:"步骤2"}}),e._v(" "),s("Step",{attrs:{title:"步骤3"}}),e._v(" "),s("Step",{attrs:{title:"步骤4"}})],1),e._v(" "),s("br"),e._v(" "),s("Button",{on:{click:function(t){return e.step("next")}}},[e._v("下一步")]),e._v(" "),s("Button",{on:{click:function(t){return e.step("prev")}}},[e._v("上一步")])],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通常配合内容及按钮使用，表示一个流程的处理进度。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.test))])]),e._v(" "),s("Demo",{attrs:{title:"步骤运行错误",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:1,status:"error"}},[s("Step",{attrs:{title:"步骤1",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤2",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤3",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤4",description:"这里是步骤的描述信息"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("使用\n      "),s("code",[e._v("Steps")]),e._v(" 的\n      "),s("code",[e._v("status")]),e._v(" 属性来指定当前步骤的状态。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.status))])]),e._v(" "),s("Demo",{attrs:{title:"垂直方向",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Steps",{attrs:{current:1,vertical:""}},[s("Step",{attrs:{title:"步骤1",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤2",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤3",description:"这里是步骤的描述信息"}}),e._v(" "),s("Step",{attrs:{title:"步骤4",description:"这里是步骤的描述信息"}})],1)],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("简单的竖直方向的小型步骤条。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.vertical))])]),e._v(" "),s("h3",[e._v("Steps API")]),e._v(" "),e._m(0),e._v(" "),s("h3",[e._v("Step API")]),e._v(" "),e._m(1)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("current")]),t._v(" "),s("td",[t._v("指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("vertical")]),t._v(" "),s("td",[t._v("是否垂直显示，默认水平显示 ")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("mini")]),t._v(" "),s("td",[t._v("是否显示迷你模式 ")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("指定当前步骤的状态，可选 wait process finish error")]),t._v(" "),s("td",[t._v("String ")]),t._v(" "),s("td",[t._v("process")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("步骤标题")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("步骤的详情描述，可选 ")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("icon")]),t._v(" "),s("td",[t._v("步骤图标的类型，可选 ")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("status")]),t._v(" "),s("td",[t._v("指定当前步骤的状态，可选 wait process finish error")]),t._v(" "),s("td",[t._v("String ")]),t._v(" "),s("td",[t._v("wait")])])])])}],!1,null,null,null);e.default=c.exports}}]);