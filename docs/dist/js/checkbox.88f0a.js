/*! kui-vue v2.3.1 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+qlZ":function(e,t,n){"use strict";n("MnsJ");var c=n("rMEQ"),l=n("Ff65");var a={directives:{resize:n("7+I9").a},components:{Code:c.a,Collapse:l.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},o=n("KHd+"),s=Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("span",{staticClass:"k-code-expan",on:{click:e.toggle}},[e._v("\n        "+e._s(e.textTip)+"\n      ")])])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null).exports;t.a=s},GL9v:function(e,t,n){"use strict";n.r(t);var c={base:'<p>{{checked}}</p>\n<Checkbox v-model="checked">单选框 </Checkbox>\n<Button @click="checked=!checked">Click me</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n    };\n  }\n<\/script>',disabled:'<CheckboxGroup :value="[\'苹果🍎\',\'香蕉🍌\']">\n  <Checkbox label="苹果🍎" disabled></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="香蕉🍌" disabled></Checkbox>\n  <Checkbox label="栗子🌰" disabled></Checkbox>\n</CheckboxGroup>',group:'<CheckboxGroup v-model="data">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="橘子🍊"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<Button @click="data=[]">清除</Button>\n<Button @click="data=[\'苹果🍎\']">选中苹果</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n    };\n  }\n<\/script>\n',checkAll:'<Checkbox :value="checkAll" :indeterminate="indeterminate" @click.prevent.native="handelCheckAll">全选</Checkbox>\n<CheckboxGroup v-model="check" @change="handelCheck">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="葡萄🍇"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n</CheckboxGroup>\n<script>\nexport default {\n  data() {\n  return {\n    checkAll: false,\n    indeterminate: false,\n    check: []\n  };\n  },\n  methods: {\n  handelCheckAll(v) {\n    if (this.indeterminate) {\n      this.checkAll = false;\n    } else {\n      this.checkAll = !this.checkAll;\n    }\n    this.indeterminate = false;\n\n    if (this.checkAll) {\n      this.check = ["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"];\n    } else {\n      this.check = [];\n    }\n  },\n  handelCheck(data) {\n    if (data.length === 4) {\n      this.indeterminate = false;\n      this.checkAll = true;\n    } else if (data.length > 0) {\n      this.indeterminate = true;\n      this.checkAll = false;\n    } else {\n      this.indeterminate = false;\n      this.checkAll = false;\n    }\n  }\n  }\n};\n<\/script>\n'},l=c,a={components:{Demo:n("+qlZ").a},data:function(){return{code:l,checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"],checkAll:!1,indeterminate:!1,check:[],test:[],check1:[]}},mounted:function(){var t=this;setTimeout(function(e){t.test=["122","2🍌","3🍇"]},3e3)},methods:{test1:function(e){console.log(e)},handelCheckAll:function(e){console.log(e),this.indeterminate?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminate=!1,this.checkAll?this.check=["苹果🍎","香蕉🍌","葡萄🍇","栗子🌰"]:this.check=[]},handelCheck:function(e){4===e.length?(this.indeterminate=!1,this.checkAll=!0):(0<e.length?this.indeterminate=!0:this.indeterminate=!1,this.checkAll=!1)}}},o=n("KHd+"),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Checkbox 多选框")]),t._v(" "),n("h3",[t._v("代码示例 ")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v(t._s(t.checked))]),t._v(" "),n("Checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("单选框 ")]),t._v(" "),n("Button",{on:{click:function(e){t.checked=!t.checked}}},[t._v("Click me")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("单独使用 ,使用\n        "),n("code",[t._v("v-model")]),t._v(" 可以双向绑定数据。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"组合使用"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.data)),n("br"),t._v(" "),n("CheckboxGroup",{model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},[n("Checkbox",{attrs:{label:"苹果🍎"}}),t._v(" "),n("Checkbox",{attrs:{label:"橘子🍊"}}),t._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌"}}),t._v(" "),n("Checkbox",{attrs:{label:"栗子🌰"}}),t._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇"}}),t._v(" "),n("Checkbox",{attrs:{label:"梨子🍐"}})],1),t._v(" "),n("Button",{on:{click:function(e){t.data=[]}}},[t._v("清除")]),t._v(" "),n("Button",{on:{click:function(e){t.data=["苹果🍎"]}}},[t._v("选中苹果")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("结合\n        "),n("code",[t._v("CheckboxGroup")]),t._v("来组合使用,通过\n        "),n("code",[t._v("disabled")]),t._v("可以设置组件是否被禁用")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"可不用"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("CheckboxGroup",{attrs:{value:["苹果🍎","香蕉🍌"]}},[n("Checkbox",{attrs:{label:"苹果🍎",disabled:""}}),t._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),t._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌",disabled:""}}),t._v(" "),n("Checkbox",{attrs:{label:"栗子🌰",disabled:""}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过"),n("code",[t._v("disabled")]),t._v("设置不可用")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])]),t._v(" "),n("Demo",{attrs:{title:"全选"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Checkbox",{attrs:{value:t.checkAll,indeterminate:t.indeterminate},nativeOn:{click:function(e){return e.preventDefault(),t.handelCheckAll(e)}}},[t._v("全选")]),t._v(" "),n("CheckboxGroup",{on:{change:t.handelCheck},model:{value:t.check,callback:function(e){t.check=e},expression:"check"}},[n("Checkbox",{attrs:{label:"苹果🍎"}}),t._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇"}}),t._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌"}}),t._v(" "),n("Checkbox",{attrs:{label:"栗子🌰"}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("全选组合 ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.checkAll))])])],1)],1),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0),t._v(" "),n("h3",[t._v("CheckboxGroup API")]),t._v(" "),t._m(1)],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),e._v(" "),n("td",[e._v(" String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("在选项状态发生改变时触发，返回当前状态")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])}],!1,null,null,null);t.default=s.exports},MnsJ:function(e,t,n){var c=n("WArN");"string"==typeof c&&(c=[[e.i,c,""]]);var l={insert:"head",singleton:!1};n("LboF")(c,l);c.locals&&(e.exports=c.locals)},WArN:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,"",""])}}]);