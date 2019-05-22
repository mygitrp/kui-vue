/*! kui-vue v2.1.8 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"+qlZ":function(t,e,n){"use strict";var i=n("rMEQ"),o=n("Ff65");var r={directives:{resize:n("7+I9").a},components:{Code:i.a,Collapse:o.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),n=this.layout,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)];var t,e,n},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},d=n("KHd+"),v=Object(d.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=v},F6PW:function(t,e,n){"use strict";n.r(e);var i={base:'<Button @click="bordered=!bordered" type="primary">表格边框</Button>\n<Button @click="mini=!mini" type="primary">mini</Button>\n<Table :data="data" :columns="col" :mini="mini" @selection="select" @row-click="rowClick" :text-max-length="20" :bordered="bordered" @editor-change="editorChange"></Table>\n<script>\nexport default {\n  data() {\n    return {\n      code: code,\n      bordered: false,\n      mini: false,\n      data: [\n        { nick: "<a>链接文字长--链接文字长--链接文字长--</a>", center: "居中", right: "右对其", birthday: "", tip: \'短文字提示\', action: "", edit: \'点我编辑\' },\n        { nick: "高总", center: "居中", right: "右对其", birthday: "", tip: \'我是很长很长很长很长很长很长很长很长很长一段文字\', action: "", edit: \'点我编辑\' },\n        { nick: "娟娟", center: "居中", right: "右对其", birthday: "", tip: \'短文字提示\', action: "", edit: \'点我编辑\' },\n        { nick: "鱼雷", center: "居中", right: "右对其", birthday: "", tip: \'我是很长很长很长很长很长很长很长很长很长一段文字\', action: "", edit: \'点我编辑\' }\n      ],\n      col: [\n        { type: "selection" },\n        { title: "姓名", key: "nick",type:\'html\' },\n        { title: "右对其", key: "right", textAlign: "right" },\n        { title: "居中", key: "center", textAlign: "center" },\n        { title: "文字提示", key: "tip", },\n        { title: "可以编辑", key: "edit", sortable: true, type: \'editor\' },\n        {\n          title: "出生年月",\n          key: "birthday",\n          width: 150,\n          render: (h, p) => {\n            return h("DatePicker",\n              {\n                props: { mini: true, width: 120, lang: "en", transfer: true, value: p.row.birthday },\n                on: { change: v => { p.row.birthday = v; console.log(\'回调\', this.data) } }\n              },\n            );\n          }\n        },\n        {\n          title: "操作",\n          key: "action",\n          width: 100,\n          render: (h, p) => {\n            return h("Poptip",\n              {\n                props: { transfer: true, confirm: true, title: "是否删除数据？", placement: "left-bottom" },\n                on: { ok: () => { this.data.splice(p.index, 1); } }\n              },\n              [h("Button", { props: { type: "danger", mini: true } }, "删除")]\n            );\n          }\n        }\n      ],\n      row: []\n    };\n  },\n  methods: {\n    editorChange(a,b){\n      this.$Message.info(a.edit)\n      console.log(a,b,)\n    },\n    rowClick(row) {\n      console.log(row)\n    },\n    change(a, b) {\n      this.$Message.info(a + \':\' + b)\n    },\n    select(row) {\n      this.row = row;\n      console.log("当前选中：", row);\n    }\n  }\n};\n<\/script>'},o=i,r={components:{Demo:n("+qlZ").a},data:function(){var n=this;return{code:o,bordered:!1,mini:!1,data:[{nick:"<a>链接文字长--链接文字长--链接文字长--</a>",center:"居中",right:"右对其",birthday:"",tip:"短文字提示",action:"",edit:"点我编辑"},{nick:"高总",center:"居中",right:"右对其",birthday:"",tip:"我是很长很长很长很长很长很长很长很长很长一段文字",action:"",edit:"点我编辑"},{nick:"娟娟",center:"居中",right:"右对其",birthday:"",tip:"短文字提示",action:"",edit:"点我编辑"},{nick:"鱼雷",center:"居中",right:"右对其",birthday:"",tip:"我是很长很长很长很长很长很长很长很长很长一段文字",action:"",edit:"点我编辑"}],col:[{type:"selection"},{title:"姓名",key:"nick",type:"html",sortable:!0},{title:"右对其",key:"right",textAlign:"right",sortable:!0},{title:"居中",key:"center",textAlign:"center",sortable:!0},{title:"文字提示",key:"tip",sortable:!0},{title:"可以编辑",key:"edit",sortable:!0,type:"editor"},{title:"出生年月",key:"birthday",width:150,sortable:!0,render:function(t,e){return t("DatePicker",{props:{mini:!0,width:120,lang:"en",transfer:!0,value:e.row.birthday},on:{change:function(t){e.row.birthday=t,console.log("回调",n.data)}}})}},{title:"操作",key:"action",width:100,render:function(t,e){return t("Poptip",{props:{transfer:!0,confirm:!0,title:"是否删除数据？",placement:"left-bottom"},on:{ok:function(){n.data.splice(e.index,1)}}},[t("Button",{props:{type:"danger",mini:!0}},"删除")])}}],row:[]}},methods:{editorChange:function(t,e){this.$Message.info(t.edit),console.log(t,e)},rowClick:function(t){console.log(t)},change:function(t,e){this.$Message.info(t+":"+e)},select:function(t,e){this.row=t,console.log("当前选中：",t,e)}}},d=n("KHd+"),v=Object(d.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Table 表格")]),e._v(" "),n("Alert",[e._v("注意：非 template/render 模式下，需使用 k-table。")]),e._v(" "),n("h3",[e._v("代码示例")]),e._v(" "),n("Demo",{attrs:{title:"基础／组件嵌套",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary",mini:""},on:{click:function(t){e.bordered=!e.bordered}}},[e._v("表格边框")]),e._v(" "),n("Button",{attrs:{type:"primary",mini:""},on:{click:function(t){e.mini=!e.mini}}},[e._v("mini")]),e._v(" "),n("Table",{attrs:{data:e.data,columns:e.col,mini:e.mini,"text-max-length":20,bordered:e.bordered},on:{selection:e.select,"sort-change":e.change,"row-click":e.rowClick,"editor-change":e.editorChange}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("表格没做太复杂的展示，通过\n      "),n("code",[e._v("bordered")]),e._v("可以设置是否有边框，\n      "),n("code",[e._v("mini")]),e._v("来设置表格大小模式,\n      type等于"),n("code",[e._v("editor")]),e._v("时，数值可以编辑")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("h3",[e._v("Table API")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("Column API")]),e._v(" "),e._m(1)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border",staticStyle:{overflow:"visible"}},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("bordered")]),t._v(" "),n("td",[t._v("是否显示边框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("header-fixed")]),t._v(" "),n("td",[t._v("是否固定表头")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("scrollbar-fixed")]),t._v(" "),n("td",[t._v("是否表格底部固定横向滚动条")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("mini")]),t._v(" "),n("td",[t._v("表格是否为mini模式")]),t._v(" "),n("td",[t._v("Boolean ")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("显示的结构化数据")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")])]),t._v(" "),n("tr",[n("td",[t._v("columns")]),t._v(" "),n("td",[t._v("表格列的配置描述，")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")])]),t._v(" "),n("tr",[n("td",[t._v("noDataText")]),t._v(" "),n("td",[t._v("数据为空时显示的提示内容")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("暂无数据")])]),t._v(" "),n("tr",[n("td",[t._v("selection")]),t._v(" "),n("td",[t._v("多选或单选触发，多选：返回当前所有已经选择的项"),n("br"),t._v("单选：返回所有勾选和 当前选择单项 ")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("row-click")]),t._v(" "),n("td",[t._v("单击某一行时触发 ")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("返回当前行的数据，index")])]),t._v(" "),n("tr",[n("td",[t._v("editor-change")]),t._v(" "),n("td",[t._v("当编辑框离开焦点时触发 ，type 为editor 有效")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("返回当前行的数据，index")])]),t._v(" "),n("tr",[n("td",[t._v("sort-change")]),t._v(" "),n("td",[t._v("排序发生改变时处罚 ")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("返回当前key值和排序的顺序 asc / desc")])]),t._v(" "),n("tr",[n("td",[t._v("sort-single")]),t._v(" "),n("td",[t._v("是否单个排序，当异步执行时，当前触发的排序生效，其他排序不生效")]),t._v(" "),n("td",[t._v("Boolen")]),t._v(" "),n("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("列类型，可选值为 selection、html、editor")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("列头显示文字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("text-align")]),t._v(" "),n("td",[t._v("列文字对其方式 ，可选值left，center，right")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("text-max-length")]),t._v(" "),n("td",[t._v("表格的字符最大限度，超过部分会以点点点显示")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("对应列内容的字段名")]),t._v(" "),n("td",[t._v("String ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("列宽")]),t._v(" "),n("td",[t._v("Number ")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("overflow")]),t._v(" "),n("td",[t._v("当设置列宽\n          "),n("code",[t._v("width")]),t._v("之后，超出文字是否隐藏以点点点显示")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("tooltip")]),t._v(" "),n("td",[t._v("文字过长隐藏之后，鼠标划过 是否展示title")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("render")]),t._v(" "),n("td",[t._v("自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引")]),t._v(" "),n("td",[t._v("Function ")]),t._v(" "),n("td",[t._v("-")])])])])}],!1,null,null,null);e.default=v.exports}}]);