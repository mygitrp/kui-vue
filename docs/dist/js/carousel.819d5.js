/*! kui-vue v2.1.0 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+qlZ":function(t,e,s){"use strict";var o=s("rMEQ"),a=s("Ff65");var l={directives:{resize:s("7+I9").a},components:{Code:o.a,Collapse:a.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(t={},e="k-demo-".concat(this.layout),s=this.layout,e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t)];var t,e,s},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},r=s("KHd+"),i=Object(r.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=i},"5smR":function(t,e,s){(t.exports=s("JPst")(!1)).push([t.i,"\n.k-carousel-item-demo {\n  height: 160px;\n  line-height: 160px;\n  background: #6c98d6;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n}\n",""])},WFpz:function(t,e,s){"use strict";var o=s("t/M4");s.n(o).a},lNxN:function(t,e,s){"use strict";s.r(e);var o=s("+qlZ"),a={base:'<Carousel>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',vertical:'<Carousel vertical>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',autoplay:'<Carousel autoplay>\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>',radius:'<Carousel dotsType="radius">\n  <CarouselItem class="k-carousel-item-demo">1</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">2</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">3</CarouselItem>\n  <CarouselItem class="k-carousel-item-demo">4</CarouselItem>\n</Carousel>'},l=a,r={components:{Demo:o.a},data:function(){return{code:l}}},i=(s("WFpz"),s("KHd+")),c=Object(i.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Carousel 走马灯")]),t._v(" "),s("p",[t._v("就是传说中的大图轮播")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"基本"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("最基本的用法。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{layout:"vertical",title:"垂直"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{vertical:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("垂直显示,此时不显示左右箭头")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.vertical))])])],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{layout:"vertical",title:"自动播放"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{autoplay:""}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("定时切换下一张。")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.autoplay))])]),t._v(" "),s("Demo",{attrs:{layout:"vertical",title:"圆形指示器"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Carousel",{attrs:{dotsType:"radius"}},[s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("1")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("2")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("3")]),t._v(" "),s("CarouselItem",{staticClass:"k-carousel-item-demo"},[t._v("4")])],1)],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("圆形指示器")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.radius))])])],1)],1),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据")]),t._v(" "),s("td",[t._v("String,Number")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("loop")]),t._v(" "),s("td",[t._v("是否开启循环")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("vertical")]),t._v(" "),s("td",[t._v("是否垂直模式显示")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("autoplay")]),t._v(" "),s("td",[t._v("是否自动切换")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("speed")]),t._v(" "),s("td",[t._v("自动切换的时间间隔，单位为毫秒")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("2000")])]),t._v(" "),s("tr",[s("td",[t._v("dots-type")]),t._v(" "),s("td",[t._v("指示器的类型，\n          "),s("code",[t._v("rect")]),t._v(" 为方块，\n          "),s("code",[t._v("radius")]),t._v("为圆点")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("2000")])])])])}],!1,null,null,null);e.default=c.exports},"t/M4":function(t,e,s){var o=s("5smR");"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(o,a);o.locals&&(t.exports=o.locals)}}]);