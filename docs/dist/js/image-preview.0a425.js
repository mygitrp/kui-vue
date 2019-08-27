/*! kui-vue v2.3.1 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+qlZ":function(t,e,s){"use strict";s("MnsJ");var o=s("rMEQ"),i=s("Ff65");var n={directives:{resize:s("7+I9").a},components:{Code:o.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},c=s("KHd+"),a=Object(c.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=a},MnsJ:function(t,e,s){var o=s("WArN");"string"==typeof o&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};s("LboF")(o,i);o.locals&&(t.exports=o.locals)},WArN:function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])},mzba:function(t,e,s){"use strict";s.r(e);var o=s("+qlZ"),i={base:'<Button @click="$ImagePreview.show(\'https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg\')">预览</Button>\n<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="show" />\n<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="show" />\n <script>\nexport default {\n  methods: {\n    show(e){\n      this.$ImagePreview.show(e.target.src)\n    }\n  },\n};\n<\/script>'},n=i,c={components:{Demo:o.a},data:function(){return{code:n}},methods:{show:function(t){this.$ImagePreview.show(t.target.src)}}},a=s("KHd+"),r=Object(a.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("ImagePreview 图片预览")]),e._v(" "),s("p",[e._v("使用场景：后台有一个商品，使用Table组件以列表形式显示，商品有缩略图，点击缩略图看大图，达到预览目的")]),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Demo",{attrs:{title:"基础",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Button",{on:{click:function(t){return e.$ImagePreview.show("https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg")}}},[e._v("预览")]),e._v(" "),s("br"),e._v(" "),s("img",{staticStyle:{height:"50px",float:"left","margin-right":"20px",cursor:"zoom-in"},attrs:{src:"https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg"},on:{click:e.show}}),e._v(" "),s("img",{staticStyle:{height:"50px",cursor:"zoom-in"},attrs:{src:"https://www.chuchur.com/upload/2018-7-2/kui-react.jpg"},on:{click:e.show}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("提供全局的展示方法"),s("code",[e._v("$ImagePreview.show()")])]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("show")]),t._v(" "),s("td",[t._v("显示预览图片")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}],!1,null,null,null);e.default=r.exports}}]);