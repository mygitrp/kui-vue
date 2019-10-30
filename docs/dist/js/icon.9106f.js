/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+qlZ":function(o,i,e){"use strict";e("MnsJ");var s=e("rMEQ"),t=e("Ff65");var a={directives:{resize:e("7+I9").a},components:{Code:s.a,Collapse:t.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,expand:!1}},computed:{textTip:function(){return this.expand?"收起代码":"展开代码"},classes:function(){return["k-demo",function(o,i,e){return i in o?Object.defineProperty(o,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[i]=e,o}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){this.expand=!this.expand}},mounted:function(){this.setHeight()}},d=e("KHd+"),r=Object(d.a)(a,function(){var o=this,i=o.$createElement,e=o._self._c||i;return e("div",{directives:[{name:"resize",rawName:"v-resize",value:o.setHeight,expression:"setHeight"}],ref:"dom",class:o.classes,style:o.styles},[e("div",{ref:"demo",staticClass:"k-demo-main"},[e("div",{staticClass:"k-content"},[o._t("content")],2),o._v(" "),e("div",{staticClass:"k-desc"},[e("a",{staticClass:"k-desc-title"},[o._v(o._s(o.title))]),o._v(" "),e("div",{staticClass:"k-desc-content"},[o._t("desc")],2),o._v(" "),e("span",{staticClass:"k-code-expan",on:{click:o.toggle}},[o._v("\n        "+o._s(o.textTip)+"\n      ")])])]),o._v(" "),e("div",{staticClass:"k-demo-line"}),o._v(" "),e("Collapse",[e("Code",{directives:[{name:"show",rawName:"v-show",value:o.expand,expression:"expand"}],ref:"code",attrs:{lang:o.lang}},[o._t("code")],2)],1)],1)},[],!1,null,null,null).exports;i.a=r},ETss:function(o,i,e){"use strict";e.r(i);var s={base:'<Icon type="logo-apple" />\n<Icon type="logo-apple" size="25" />\n<Icon type="logo-apple" size="30" color="green" />\n<Icon type="ios-sync" spin size="25" />'},t={ios:["ios-add","ios-add-circle","ios-add-circle-outline","ios-airplane","ios-alarm","ios-albums","ios-alert","ios-american-football","ios-analytics","ios-aperture","ios-apps","ios-appstore","ios-archive","ios-arrow-back","ios-arrow-down","ios-arrow-dropdown","ios-arrow-dropdown-circle","ios-arrow-dropleft","ios-arrow-dropleft-circle","ios-arrow-dropright","ios-arrow-dropright-circle","ios-arrow-dropup","ios-arrow-dropup-circle","ios-arrow-forward","ios-arrow-round-back","ios-arrow-round-down","ios-arrow-round-forward","ios-arrow-round-up","ios-arrow-up","ios-at","ios-attach","ios-backspace","ios-barcode","ios-baseball","ios-basket","ios-basketball","ios-battery-charging","ios-battery-dead","ios-battery-full","ios-beaker","ios-bed","ios-beer","ios-bicycle","ios-bluetooth","ios-boat","ios-body","ios-bonfire","ios-book","ios-bookmark","ios-bookmarks","ios-bowtie","ios-briefcase","ios-browsers","ios-brush","ios-bug","ios-build","ios-bulb","ios-bus","ios-business","ios-cafe","ios-calculator","ios-calendar","ios-call","ios-camera","ios-car","ios-card","ios-cart","ios-cash","ios-cellular","ios-chatboxes","ios-chatbubbles","ios-checkbox","ios-checkbox-outline","ios-checkmark","ios-checkmark-circle","ios-checkmark-circle-outline","ios-clipboard","ios-clock","ios-close","ios-close-circle","ios-close-circle-outline","ios-cloud","ios-cloud-circle","ios-cloud-done","ios-cloud-download","ios-cloud-outline","ios-cloud-upload","ios-cloudy","ios-cloudy-night","ios-code","ios-code-download","ios-code-working","ios-cog","ios-color-fill","ios-color-filter","ios-color-palette","ios-color-wand","ios-compass","ios-construct","ios-contact","ios-contacts","ios-contract","ios-contrast","ios-copy","ios-create","ios-crop","ios-cube","ios-cut","ios-desktop","ios-disc","ios-document","ios-done-all","ios-download","ios-easel","ios-egg","ios-exit","ios-expand","ios-eye","ios-eye-off","ios-fastforward","ios-female","ios-filing","ios-film","ios-finger-print","ios-fitness","ios-flag","ios-flame","ios-flash","ios-flash-off","ios-flashlight","ios-flask","ios-flower","ios-folder","ios-folder-open","ios-football","ios-funnel","ios-gift","ios-git-branch","ios-git-commit","ios-git-compare","ios-git-merge","ios-git-network","ios-git-pull-request","ios-glasses","ios-globe","ios-grid","ios-hammer","ios-hand","ios-happy","ios-headset","ios-heart","ios-heart-dislike","ios-heart-empty","ios-heart-half","ios-help","ios-help-buoy","ios-help-circle","ios-help-circle-outline","ios-home","ios-hourglass","ios-ice-cream","ios-image","ios-images","ios-infinite","ios-information","ios-information-circle","ios-information-circle-outline","ios-jet","ios-journal","ios-key","ios-keypad","ios-laptop","ios-leaf","ios-link","ios-list","ios-list-box","ios-locate","ios-lock","ios-log-in","ios-log-out","ios-magnet","ios-mail","ios-mail-open","ios-mail-unread","ios-male","ios-man","ios-map","ios-medal","ios-medical","ios-medkit","ios-megaphone","ios-menu","ios-mic","ios-mic-off","ios-microphone","ios-moon","ios-more","ios-move","ios-musical-note","ios-musical-notes","ios-navigate","ios-notifications","ios-notifications-off","ios-notifications-outline","ios-nuclear","ios-nutrition","ios-open","ios-options","ios-outlet","ios-paper","ios-paper-plane","ios-partly-sunny","ios-pause","ios-paw","ios-people","ios-person","ios-person-add","ios-phone-landscape","ios-phone-portrait","ios-photos","ios-pie","ios-pin","ios-pint","ios-pizza","ios-planet","ios-play","ios-play-circle","ios-podium","ios-power","ios-pricetag","ios-pricetags","ios-print","ios-pulse","ios-qr-scanner","ios-quote","ios-radio","ios-radio-button-off","ios-radio-button-on","ios-rainy","ios-recording","ios-redo","ios-refresh","ios-refresh-circle","ios-remove","ios-remove-circle","ios-remove-circle-outline","ios-reorder","ios-repeat","ios-resize","ios-restaurant","ios-return-left","ios-return-right","ios-reverse-camera","ios-rewind","ios-ribbon","ios-rocket","ios-rose","ios-sad","ios-save","ios-school","ios-search","ios-send","ios-settings","ios-share","ios-share-alt","ios-shirt","ios-shuffle","ios-skip-backward","ios-skip-forward","ios-snow","ios-speedometer","ios-square","ios-square-outline","ios-star","ios-star-half","ios-star-outline","ios-stats","ios-stopwatch","ios-subway","ios-sunny","ios-swap","ios-switch","ios-sync","ios-tablet-landscape","ios-tablet-portrait","ios-tennisball","ios-text","ios-thermometer","ios-thumbs-down","ios-thumbs-up","ios-thunderstorm","ios-time","ios-timer","ios-today","ios-train","ios-transgender","ios-trash","ios-trending-down","ios-trending-up","ios-trophy","ios-tv","ios-umbrella","ios-undo","ios-unlock","ios-videocam","ios-volume-high","ios-volume-low","ios-volume-mute","ios-volume-off","ios-walk","ios-wallet","ios-warning","ios-watch","ios-water","ios-wifi","ios-wine","ios-woman"],md:["md-add","md-add-circle","md-add-circle-outline","md-airplane","md-alarm","md-albums","md-alert","md-american-football","md-analytics","md-aperture","md-apps","md-appstore","md-archive","md-arrow-back","md-arrow-down","md-arrow-dropdown","md-arrow-dropdown-circle","md-arrow-dropleft","md-arrow-dropleft-circle","md-arrow-dropright","md-arrow-dropright-circle","md-arrow-dropup","md-arrow-dropup-circle","md-arrow-forward","md-arrow-round-back","md-arrow-round-down","md-arrow-round-forward","md-arrow-round-up","md-arrow-up","md-at","md-attach","md-backspace","md-barcode","md-baseball","md-basket","md-basketball","md-battery-charging","md-battery-dead","md-battery-full","md-beaker","md-bed","md-beer","md-bicycle","md-bluetooth","md-boat","md-body","md-bonfire","md-book","md-bookmark","md-bookmarks","md-bowtie","md-briefcase","md-browsers","md-brush","md-bug","md-build","md-bulb","md-bus","md-business","md-cafe","md-calculator","md-calendar","md-call","md-camera","md-car","md-card","md-cart","md-cash","md-cellular","md-chatboxes","md-chatbubbles","md-checkbox","md-checkbox-outline","md-checkmark","md-checkmark-circle","md-checkmark-circle-outline","md-clipboard","md-clock","md-close","md-close-circle","md-close-circle-outline","md-cloud","md-cloud-circle","md-cloud-done","md-cloud-download","md-cloud-outline","md-cloud-upload","md-cloudy","md-cloudy-night","md-code","md-code-download","md-code-working","md-cog","md-color-fill","md-color-filter","md-color-palette","md-color-wand","md-compass","md-construct","md-contact","md-contacts","md-contract","md-contrast","md-copy","md-create","md-crop","md-cube","md-cut","md-desktop","md-disc","md-document","md-done-all","md-download","md-easel","md-egg","md-exit","md-expand","md-eye","md-eye-off","md-fastforward","md-female","md-filing","md-film","md-finger-print","md-fitness","md-flag","md-flame","md-flash","md-flash-off","md-flashlight","md-flask","md-flower","md-folder","md-folder-open","md-football","md-funnel","md-gift","md-git-branch","md-git-commit","md-git-compare","md-git-merge","md-git-network","md-git-pull-request","md-glasses","md-globe","md-grid","md-hammer","md-hand","md-happy","md-headset","md-heart","md-heart-dislike","md-heart-empty","md-heart-half","md-help","md-help-buoy","md-help-circle","md-help-circle-outline","md-home","md-hourglass","md-ice-cream","md-image","md-images","md-infinite","md-information","md-information-circle","md-information-circle-outline","md-jet","md-journal","md-key","md-keypad","md-laptop","md-leaf","md-link","md-list","md-list-box","md-locate","md-lock","md-log-in","md-log-out","md-magnet","md-mail","md-mail-open","md-mail-unread","md-male","md-man","md-map","md-medal","md-medical","md-medkit","md-megaphone","md-menu","md-mic","md-mic-off","md-microphone","md-moon","md-more","md-move","md-musical-note","md-musical-notes","md-navigate","md-notifications","md-notifications-off","md-notifications-outline","md-nuclear","md-nutrition","md-open","md-options","md-outlet","md-paper","md-paper-plane","md-partly-sunny","md-pause","md-paw","md-people","md-person","md-person-add","md-phone-landscape","md-phone-portrait","md-photos","md-pie","md-pin","md-pint","md-pizza","md-planet","md-play","md-play-circle","md-podium","md-power","md-pricetag","md-pricetags","md-print","md-pulse","md-qr-scanner","md-quote","md-radio","md-radio-button-off","md-radio-button-on","md-rainy","md-recording","md-redo","md-refresh","md-refresh-circle","md-remove","md-remove-circle","md-remove-circle-outline","md-reorder","md-repeat","md-resize","md-restaurant","md-return-left","md-return-right","md-reverse-camera","md-rewind","md-ribbon","md-rocket","md-rose","md-sad","md-save","md-school","md-search","md-send","md-settings","md-share","md-share-alt","md-shirt","md-shuffle","md-skip-backward","md-skip-forward","md-snow","md-speedometer","md-square","md-square-outline","md-star","md-star-half","md-star-outline","md-stats","md-stopwatch","md-subway","md-sunny","md-swap","md-switch","md-sync","md-tablet-landscape","md-tablet-portrait","md-tennisball","md-text","md-thermometer","md-thumbs-down","md-thumbs-up","md-thunderstorm","md-time","md-timer","md-today","md-train","md-transgender","md-trash","md-trending-down","md-trending-up","md-trophy","md-tv","md-umbrella","md-undo","md-unlock","md-videocam","md-volume-high","md-volume-low","md-volume-mute","md-volume-off","md-walk","md-wallet","md-warning","md-watch","md-water","md-wifi","md-wine","md-woman"],logo:["logo-android","logo-angular","logo-apple","logo-bitbucket","logo-bitcoin","logo-buffer","logo-chrome","logo-closed-captioning","logo-codepen","logo-css3","logo-designernews","logo-dribbble","logo-dropbox","logo-euro","logo-facebook","logo-flickr","logo-foursquare","logo-freebsd-devil","logo-game-controller-a","logo-game-controller-b","logo-github","logo-google","logo-googleplus","logo-hackernews","logo-html5","logo-instagram","logo-ionic","logo-ionitron","logo-javascript","logo-linkedin","logo-markdown","logo-model-s","logo-no-smoking","logo-nodejs","logo-npm","logo-octocat","logo-pinterest","logo-playstation","logo-polymer","logo-python","logo-reddit","logo-rss","logo-sass","logo-skype","logo-slack","logo-snapchat","logo-steam","logo-tumblr","logo-tux","logo-twitch","logo-twitter","logo-usd","logo-vimeo","logo-vk","logo-whatsapp","logo-windows","logo-wordpress","logo-xbox","logo-xing","logo-yahoo","logo-yen","logo-youtube"]};s.icons=t;var a=s,d={components:{Demo:e("+qlZ").a},data:function(){return{code:a,key:"",type:"ios",logos:[],applist:[],copyhtml:""}},mounted:function(){this.logos=a.icons.logo,this.applist=a.icons.ios},methods:{switchIcon:function(){this.filter(this.key)},search:function(o){var i=this.key;i=i.replace(/ /g,""),this.filter(i)},filter:function(i){if(i){var o="ios"==this.type?a.icons.ios:a.icons.md;this.applist=o.filter(function(o){return 0<=o.indexOf(i)});var e=a.icons.logo;this.logos=e.filter(function(o){return 0<=o.indexOf(i)})}else this.applist="ios"==this.type?a.icons.ios:a.icons.md,this.logos=a.icons.logo},copy:function(o){var i=this;this.copyhtml='<Icon type="'.concat(o,'" />'),setTimeout(function(){i.$refs.copyDom.select(),document.execCommand("copy"),i.$Message.success("复制成功！")})}}},r=e("KHd+"),l=Object(r.a)(d,function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",[s("h2",[e._v("Icon 图标")]),e._v(" "),e._m(0),e._v(" "),s("h3",[e._v("代码示例")]),e._v(" "),s("Demo",{attrs:{title:"基本用法",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("Icon",{attrs:{type:"logo-apple"}}),e._v(" "),s("Icon",{attrs:{type:"logo-apple",size:"25"}}),e._v(" "),s("Icon",{attrs:{type:"logo-apple",size:"30",color:"green"}}),e._v(" "),s("Icon",{attrs:{type:"ios-sync",spin:"",size:"25"}})],1),e._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("可以通过\n      "),s("code",[e._v("type")]),e._v(",\n      "),s("code",[e._v("size")]),e._v(" "),s("code",[e._v("color")]),e._v("属性分别设置图标的类型、大小、颜色,也可以通过设置 "),s("code",[e._v("spin")]),e._v(" 属性来实现动画旋转效果。")]),e._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),s("h3",[e._v("API")]),e._v(" "),e._m(1),e._v(" "),s("h3",[e._v("图标列表")]),e._v(" "),s("Input",{staticStyle:{width:"80%",margin:"0 auto",display:"inherit"},attrs:{placeholder:"输入英文关键字，搜索图标，点击图标即可复制",icon:"logo-apple","icon-align":"left",large:"",clearable:""},on:{input:e.search},model:{value:e.key,callback:function(o){e.key=o},expression:"key"}}),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"show-icons"},[e.applist.length?[s("div",{staticClass:"icon-head"},[s("h3",[e._v("App icons ")]),e._v(" "),s("div",{staticClass:"icon-title",staticStyle:{"text-align":"center"}},[s("RadioGroup",{on:{change:e.switchIcon},model:{value:e.type,callback:function(o){e.type=o},expression:"type"}},[s("RadioButton",{attrs:{label:"ios"}},[e._v("IOS")]),e._v(" "),s("RadioButton",{attrs:{label:"Material"}},[e._v("Material")])],1)],1)]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"icon-item"},e._l(e.applist,function(i,o){return s("span",{key:o,on:{click:function(o){return o.stopPropagation(),e.copy(i)}}},[s("Icon",{attrs:{type:i}})],1)}),0)]:e._e(),e._v(" "),e.logos.length?[s("h3",[e._v("Logos")]),e._v(" "),s("div",{staticClass:"icon-item"},e._l(e.logos,function(i,o){return s("span",{key:o,on:{click:function(o){return o.stopPropagation(),e.copy(i)}}},[s("Icon",{attrs:{type:i}})],1)}),0)]:e._e(),e._v(" "),e.applist.length||e.logos.length?e._e():s("h3",{staticStyle:{"text-align":"center"}},[e._v('\n      No results for "'+e._s(e.key)+'"\n    ')])],2),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.copyhtml,expression:"copyhtml"}],ref:"copyDom",staticStyle:{position:"absolute",left:"-9999px"},attrs:{type:"text"},domProps:{value:e.copyhtml},on:{input:function(o){o.target.composing||(e.copyhtml=o.target.value)}}})],1)},[function(){var o=this,i=o.$createElement,e=o._self._c||i;return e("p",[o._v("kui 的图标使用开源项目\n    "),e("a",{attrs:{href:"http://ionicons.com/",target:"_blank"}},[o._v("ionicons")]),o._v("，当前版本4.5.10\n  ")])},function(){var o=this,i=o.$createElement,e=o._self._c||i;return e("div",{staticClass:"table-border"},[e("table",[e("tr",[e("th",[o._v("属性")]),o._v(" "),e("th",[o._v("说明")]),o._v(" "),e("th",[o._v("类型")]),o._v(" "),e("th",[o._v("默认值")])]),o._v(" "),e("tr",[e("td",[o._v("type")]),o._v(" "),e("td",[o._v("图标的名称")]),o._v(" "),e("td",[o._v("String")]),o._v(" "),e("td",[o._v("-")])]),o._v(" "),e("tr",[e("td",[o._v("size")]),o._v(" "),e("td",[o._v("图标的大小，单位是 px")]),o._v(" "),e("td",[o._v("String,Number ")]),o._v(" "),e("td",[o._v("-")])]),o._v(" "),e("tr",[e("td",[o._v("color")]),o._v(" "),e("td",[o._v("图标的颜色")]),o._v(" "),e("td",[o._v("String ")]),o._v(" "),e("td",[o._v("-")])]),o._v(" "),e("tr",[e("td",[o._v("spin")]),o._v(" "),e("td",[o._v("图标是否选择")]),o._v(" "),e("td",[o._v("Boolen ")]),o._v(" "),e("td",[o._v("false")])])])])}],!1,null,null,null);i.default=l.exports},MnsJ:function(o,i,e){var s=e("WArN");"string"==typeof s&&(s=[[o.i,s,""]]);var t={insert:"head",singleton:!1};e("LboF")(s,t);s.locals&&(o.exports=s.locals)},WArN:function(o,i,e){(o.exports=e("JPst")(!1)).push([o.i,"",""])}}]);