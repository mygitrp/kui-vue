/*! kui-vue v2.1.11 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"+qlZ":function(e,t,l){"use strict";var a=l("rMEQ"),n=l("Ff65");var v={directives:{resize:l("7+I9").a},components:{Code:a.a,Collapse:n.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",function(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},s=l("KHd+"),o=Object(s.a)(v,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[l("div",{ref:"demo",staticClass:"k-demo-main"},[l("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),l("div",{staticClass:"k-desc"},[l("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),l("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),l("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[l("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),l("div",{staticClass:"k-demo-line"}),e._v(" "),l("Collapse",[l("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},[],!1,null,null,null).exports;t.a=o},"cBB+":function(e,t,l){"use strict";l.r(t);var a={base:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Button @click="select=\'\'">清除</Button>\n<Button @click="select=1">选中橘子</Button>\n<script>\n  export default {\n    data() {\n      return {\n      select: "3",\n      data: [\n        { label: "苹果🍎", value: 0 },\n        { label: "橘子🍊", value: 1 },\n        { label: "香蕉🍌", value: 2 },\n        { label: "栗子🌰", value: 3 },\n        { label: "葡萄🍇", value: 4 }\n      ],\n      };\n    }\n  }\n<\/script>',size:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Select :width="200" v-model="select" mini >\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: ""\n      };\n    }\n  }\n<\/script>',clearable:'<Select :width="200" clearable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<Select :width="200" clearable mini  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: ""\n      };\n    }\n  }\n<\/script>',search:'<Select :width="200" filterable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: "",\n        data: [\n          { label: "苹果🍎", value: 0 },\n          { label: "橘子🍊", value: 1 },\n          { label: "香蕉🍌", value: 2 },\n          { label: "栗子🌰", value: 3 },\n          { label: "葡萄🍇", value: 4 }\n        ],\n      };\n    }\n  }\n<\/script>',disabled:'<Select disabled :width="200"  v-model="select"></Select>\n<Select :width="200">\n  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" :disabled="y==3"></Option>\n</Select>\ndata() {\n  return {\n    select: "3",\n    data: [\n      { label: "苹果🍎", value: 0 },\n      { label: "橘子🍊", value: 1 },\n      { label: "香蕉🍌", value: 2 },\n      { label: "栗子🌰", value: 3 },\n      { label: "葡萄🍇", value: 4 }\n    ],\n  };\n}'},n=a,v={components:{Demo:l("+qlZ").a},data:function(){return{code:n,select:"3",select1:2,select2:2,select3:1,select4:1,data:[{label:"苹果🍎",value:0},{label:"橘子🍊",value:1},{label:"香蕉🍌",value:2},{label:"栗子🌰",value:3},{label:"葡萄🍇",value:4}]}}},s=l("KHd+"),o=Object(s.a)(v,function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",[a("h2",[l._v("Select 选择器")]),l._v(" "),a("Alert",[l._v("注意：非 template/render 模式下，需使用 k-select")]),l._v(" "),a("h3",[l._v("代码示例")]),l._v(" "),a("Row",{attrs:{gutter:"8"}},[a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"基础用法"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Select",{attrs:{width:200},model:{value:l.select,callback:function(e){l.select=e},expression:"select"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value}},[l._v(l._s(e.label))])}),1),l._v(" "),a("Button",{on:{click:function(e){l.select=""}}},[l._v("清除")]),l._v(" "),a("Button",{on:{click:function(e){l.select=1}}},[l._v("选中橘子")])],1),l._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[l._v("通过\n        "),a("code",[l._v("v-model")]),l._v("进行数据双向绑定")]),l._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[l._v(l._s(l.code.base))])]),l._v(" "),a("Demo",{attrs:{title:"尺寸"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Select",{attrs:{width:200,value:""},model:{value:l.select1,callback:function(e){l.select1=e},expression:"select1"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value}},[l._v(l._s(e.label))])}),1),l._v(" "),a("Select",{attrs:{width:200,mini:"",value:""},model:{value:l.select1,callback:function(e){l.select1=e},expression:"select1"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value}},[l._v(l._s(e.label))])}),1)],1),l._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[l._v("通过\n        "),a("code",[l._v("width")]),l._v("和\n        "),a("code",[l._v("mini")]),l._v("可控制组件尺寸大小")]),l._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[l._v(l._s(l.code.size))])]),l._v(" "),a("Demo",{attrs:{title:"可清除"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Select",{attrs:{width:200,clearable:""},model:{value:l.select2,callback:function(e){l.select2=e},expression:"select2"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value,label:e.label}})}),1),l._v(" "),a("Select",{attrs:{width:200,clearable:"",mini:""},model:{value:l.select2,callback:function(e){l.select2=e},expression:"select2"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value,label:e.label}})}),1)],1),l._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[l._v("通过\n        "),a("code",[l._v("clearable")]),l._v("可控制组件是否显示清除按钮")]),l._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[l._v(l._s(l.code.clearable))])])],1),l._v(" "),a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"可搜索"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Select",{attrs:{width:200,filterable:""},model:{value:l.select3,callback:function(e){l.select3=e},expression:"select3"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value,label:e.label}})}),1)],1),l._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[l._v("通过\n        "),a("code",[l._v("filterable")]),l._v("可设置组件是否呈现搜索模式")]),l._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[l._v(l._s(l.code.search))])]),l._v(" "),a("Demo",{attrs:{title:"禁用"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Select",{attrs:{disabled:"",width:200}}),l._v(" "),a("Select",{attrs:{width:200},model:{value:l.select4,callback:function(e){l.select4=e},expression:"select4"}},l._l(l.data,function(e,t){return a("Option",{key:t,attrs:{value:e.value,label:e.label,disabled:3==t}})}),1)],1),l._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[l._v("通过\n        "),a("code",[l._v("disabled")]),l._v("可设置组件是否被禁用")]),l._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[l._v(l._s(l.code.disabled))])])],1)],1),l._v(" "),a("h3",[l._v("Select API")]),l._v(" "),l._m(0),l._v(" "),a("h3",[l._v("Option API")]),l._v(" "),l._m(1)],1)},[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[e._v("属性")]),e._v(" "),l("th",[e._v("说明")]),e._v(" "),l("th",[e._v("类型")]),e._v(" "),l("th",[e._v("默认值")])]),e._v(" "),l("tr",[l("td",[e._v("value")]),e._v(" "),l("td",[e._v("指定选中项目的 value 值，可以使用 v-model 双向绑定数据")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("width")]),e._v(" "),l("td",[e._v("组件宽度")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("placeholder")]),e._v(" "),l("td",[e._v("选择框默认文字")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("请选择")])]),e._v(" "),l("tr",[l("td",[e._v("disabled")]),e._v(" "),l("td",[e._v("是否禁用当前项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("clearable")]),e._v(" "),l("td",[e._v("是否可以清空选项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("change")]),e._v(" "),l("td",[e._v("在选项状态发生改变时触发，返回选择项{value:xx,label:xx}")]),e._v(" "),l("td",[e._v("Function")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("openChange")]),e._v(" "),l("td",[e._v("下拉框展开或收起时触发")]),e._v(" "),l("td",[e._v("Function")]),e._v(" "),l("td",[e._v("true / false")])])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[e._v("属性")]),e._v(" "),l("th",[e._v("说明")]),e._v(" "),l("th",[e._v("类型")]),e._v(" "),l("th",[e._v("默认值")])]),e._v(" "),l("tr",[l("td",[e._v("value")]),e._v(" "),l("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("label")]),e._v(" "),l("td",[e._v("选项显示的内容")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("mini")]),e._v(" "),l("td",[e._v("组件尺寸大小")]),e._v(" "),l("td",[e._v("Boolean ")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("disabled")]),e._v(" "),l("td",[e._v("是否禁用当前项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("transfer")]),e._v(" "),l("td",[e._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])])])])}],!1,null,null,null);t.default=o.exports}}]);