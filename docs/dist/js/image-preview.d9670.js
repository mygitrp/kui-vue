/*! kui-vue v2.2.4 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+qlZ":function(t,e,o){"use strict";var s=o("rMEQ"),i=o("Ff65");var n={directives:{resize:o("7+I9").a},components:{Code:s.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},a=o("KHd+"),r=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("span",{staticClass:"k-code-expan",on:{click:t.toggle}},[t._v("\n        "+t._s(t.textTip)+"\n      ")])])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=r},mzba:function(t,e,o){"use strict";o.r(e);var s=o("+qlZ"),i={base:'<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg" />\n<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg" />\n<ImagePreview v-model="showView" :url="url" />\n <script>\nexport default {\n  components: { Demo },\n  data() {\n    return {\n      showView: false, url: \'\',\n    };\n  },\n  methods: {\n    showImg(e) {\n      this.url = e.target.src\n      this.showView = true\n    },\n  }\n};\n<\/script>',ani:'<img src="https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg" style="height:120px;float:left;margin-right:20px;cursor:zoom-in" @click="showImg1" />\n<img src="https://www.chuchur.com/upload/2018-7-2/kui-react.jpg" style="height:120px;cursor:zoom-in" @click="showImg1" />\n<ImagePreview v-model="showView1" :url="url1" animateIn="rotateIn" animateOut="rotateOut" />\n<script>\nexport default {\n  components: { Demo },\n  data() {\n    return {\n      showView: false, url: \'\',\n    };\n  },\n  methods: {\n    showImg1(e) {\n      this.url1 = e.target.src\n      this.showView1 = true\n    },\n  }\n};\n<\/script>'},n=i,a={components:{Demo:s.a},data:function(){return{code:n,showView:!1,url:"",showView1:!1,url1:""}},methods:{showImg:function(t){this.url=t.target.src,this.showView=!0},showImg1:function(t){this.url1=t.target.src,this.showView1=!0}}},r=o("KHd+"),c=Object(r.a)(a,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("ImagePreview 图片预览")]),e._v(" "),o("p",[e._v("使用场景：后台有一个商品，使用Table组件以列表形式显示，商品有缩略图，点击缩略图看大图，达到预览目的")]),e._v(" "),o("h3",[e._v("代码示例")]),e._v(" "),o("Demo",{attrs:{title:"基础",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("img",{staticStyle:{height:"120px",float:"left","margin-right":"20px",cursor:"zoom-in"},attrs:{src:"https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg"},on:{click:e.showImg}}),e._v(" "),o("img",{staticStyle:{height:"120px",cursor:"zoom-in"},attrs:{src:"https://www.chuchur.com/upload/2018-7-2/kui-react.jpg"},on:{click:e.showImg}})]),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n      "),o("code",[e._v("v-model")]),e._v("双向绑定\n      "),o("code",[e._v("Modal")]),e._v("是否展示。通过指定url值来显示要展示的图片")]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),o("Demo",{attrs:{title:"动画展示",layout:"vertical"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("img",{staticStyle:{height:"120px",float:"left","margin-right":"20px",cursor:"zoom-in"},attrs:{src:"https://chuchur.com/upload/2017-11-3/kui-for-vue.jpg"},on:{click:e.showImg1}}),e._v(" "),o("img",{staticStyle:{height:"120px",cursor:"zoom-in"},attrs:{src:"https://www.chuchur.com/upload/2018-7-2/kui-react.jpg"},on:{click:e.showImg1}})]),e._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("结合Animate库通过\n      "),o("code",[e._v("animateIn")]),e._v("来控制进场动画\n      "),o("code",[e._v("animateOut")]),e._v("控制出场动画，前提是先的引入"),o("a",{attrs:{href:"https://daneden.github.io/animate.css/",target:"_blank"}},[e._v("Animate库")])]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.ani))])]),e._v(" "),o("h3",[e._v("API")]),e._v(" "),e._m(0),e._v(" "),o("ImagePreview",{attrs:{url:e.url},model:{value:e.showView,callback:function(t){e.showView=t},expression:"showView"}}),e._v(" "),o("ImagePreview",{attrs:{url:e.url1,animateIn:"flipInX",animateOut:"flipOutY"},model:{value:e.showView1,callback:function(t){e.showView1=t},expression:"showView1"}})],1)},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("value")]),t._v(" "),o("td",[t._v("绑定的值，可使用 v-model 双向绑定,控制是否显示")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("url")]),t._v(" "),o("td",[t._v("图片展示的绝对地址，支持base64，和Blob，不支持相对路径")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("animateIn")]),t._v(" "),o("td",[t._v("图片进场动画")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("zoomIn")])]),t._v(" "),o("tr",[o("td",[t._v("animateOut")]),t._v(" "),o("td",[t._v("图片出场动画")]),t._v(" "),o("td",[t._v("String ")]),t._v(" "),o("td",[t._v("zoomOut")])])])])}],!1,null,null,null);e.default=c.exports}}]);