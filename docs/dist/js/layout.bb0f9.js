/*! kui-vue v2.1.11 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+qlZ":function(t,e,n){"use strict";var o=n("rMEQ"),i=n("Ff65");var a={directives:{resize:n("7+I9").a},components:{Code:o.a,Collapse:i.a},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"k-demo-".concat(this.layout),this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?"".concat(this.domHeight,"px"):"".concat(this.demoHeight,"px")}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:"".concat(this.codeHeight)}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}},s=n("KHd+"),l=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},[],!1,null,null,null).exports;e.a=l},"5ijs":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNzY4NTdhZC0yZmUwLTRjNTctYWUxNC04N2UxYzE2OGEyOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FDQjYyRkE5M0M0MTFFODlFN0U5REM5RUJFRTM5NDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0FDQjYyRjk5M0M0MTFFODlFN0U5REM5RUJFRTM5NDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjQ3ODU4ZjYtY2NkZS00ODJlLWI4NTMtY2UyYmFiZjQ5N2I0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI3Njg1N2FkLTJmZTAtNGM1Ny1hZTE0LTg3ZTFjMTY4YTI5NiIvPiA8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"},AT8x:function(t,e,n){t.exports=n.p+"fonts/react.svg?3db60ea"},KNpd:function(t,e,n){"use strict";n.r(e);var o={base:'<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Content>Content</Content>\n  <Footer>Footer</Footer>\n</Layout>\n<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Layout>\n    <Sider>Sider</Sider>\n    <Content>Content</Content>\n  </Layout>\n  <Footer>Footer</Footer>\n</Layout>\n<Layout class="demo-k-layout">\n  <Header>Header</Header>\n  <Layout>\n    <Content pull-left>Content</Content>\n    <Sider>Sider</Sider>\n  </Layout>\n  <Footer>Footer</Footer>\n</Layout>\n\n<Layout class="demo-k-layout">\n  <Sider>Sider</Sider>\n  <Layout>\n    <Header>Header</Header>\n    <Content>Content</Content>\n    <Footer>Footer</Footer>\n  </Layout>\n</Layout>',tmb:'<Layout>\n  <Header>\n    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">\n      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>\n      <MenuItem name="1" icon="ios-home">首页</MenuItem>\n      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>\n      <MenuItem name="3" icon="ios-heart">评论</MenuItem>\n    </Menu>\n  </Header>\n  <Content style="padding:0 50px;">\n    <Breadcrumb style="margin:20px 0;">\n      <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>\n      <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>\n      <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>\n    </Breadcrumb>\n    <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">\n      Content\n    </div>\n  </Content>\n  <Footer>\n    2009-2018 &copy; KUI\n  </Footer>\n</Layout>',tlc:'<Layout>\n  <Header>\n    <Menu mode="horizontal" theme="dark" activeName="1" style="line-height:62px;">\n      <div style="width:120px;height:31px;background:#848b9c;float:left;margin: 15px 30px 0 0;"></div>\n      <MenuItem name="1" icon="ios-home">首页</MenuItem>\n      <MenuItem name="2" icon="logo-buffer">文章</MenuItem>\n      <MenuItem name="3" icon="ios-heart">评论</MenuItem>\n    </Menu>\n  </Header>\n  <Layout>\n    <Sider>\n      <Menu theme=\'dark\' active-name="1" width="auto">\n        <SubMenu name="0">\n          <template slot="title">\n            <Icon type="ios-paper" />我的产品\n          </template>\n          <MenuItem name="0-1">我的产品1</MenuItem>\n          <MenuItem name="0-2">我的产品2</MenuItem>\n          <MenuItem name="0-3">我的产品3</MenuItem>\n          <MenuItem name="0-4">我的产品4</MenuItem>\n        </SubMenu>\n        <SubMenu name="1">\n          <template slot="title">\n            <Icon type="logo-apple" />商品管理\n          </template>\n          <MenuItem name="1-1">商品信息</MenuItem>\n          <MenuItem name="1-2">商品列表</MenuItem>\n          <MenuItem name="1-3">商品新增</MenuItem>\n          <MenuItem name="1-4">商品筛选</MenuItem>\n        </SubMenu>\n\n        <SubMenu name="2">\n          <template slot="title">\n            <Icon type="md-walk" />用户管理\n          </template>\n          <MenuGroup title="超级管理">\n            <MenuItem name="2-1">用户信息</MenuItem>\n            <MenuItem name="2-2">用户列表</MenuItem>\n          </MenuGroup>\n          <MenuGroup title="普通管理">\n            <MenuItem name="2-3">用户新增</MenuItem>\n            <MenuItem name="2-4">用户筛选</MenuItem>\n          </MenuGroup>\n        </SubMenu>\n      </Menu>\n    </Sider>\n    <Content style="padding:20px 50px;">\n      <Breadcrumb style="margin:0 0 20px 0;">\n        <BreadcrumbItem to="/" icon="ios-home">Home</BreadcrumbItem>\n        <BreadcrumbItem to="/breadcrumb" icon="logo-buffer">breadcrumb</BreadcrumbItem>\n        <BreadcrumbItem icon="ios-heart">other</BreadcrumbItem>\n      </Breadcrumb>\n      <div style="border:1px solid #eee;padding:20px;height:200px;background:#fff">\n        Content\n      </div>\n    </Content>\n  </Layout>\n</Layout>'},i=o,a={components:{Demo:n("+qlZ").a},data:function(){return{code:i}}},s=n("KHd+"),l=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Layout 布局")]),t._v(" "),n("p",[t._v("协助进行页面级整体布局。")]),t._v(" "),n("h3",[t._v("设计规则")]),t._v(" "),n("h4",[t._v("尺寸")]),t._v(" "),n("p",[t._v("一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。")]),t._v(" "),t._m(0),t._v(" "),n("h4",[t._v("交互")]),t._v(" "),t._m(1),t._v(" "),n("h4",[t._v("视觉")]),t._v(" "),n("p",[t._v("导航样式上需要根据信息层级合理的选择样式：")]),t._v(" "),t._m(2),t._v(" "),n("h3",[t._v("组件概述")]),t._v(" "),t._m(3),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("Alert",[t._v("功能不多，他就是简单的布局。未采用\n    "),n("code",[t._v("flex")])]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"典型布局",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",{staticClass:"demo-k-layout"},[n("Header",[t._v("Header")]),t._v(" "),n("Content",[t._v("Content")]),t._v(" "),n("Footer",[t._v("Footer")])],1),t._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Header",[t._v("Header")]),t._v(" "),n("Layout",[n("Sider",[t._v("Sider")]),t._v(" "),n("Content",[t._v("Content")])],1),t._v(" "),n("Footer",[t._v("Footer")])],1),t._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Header",[t._v("Header")]),t._v(" "),n("Layout",[n("Content",{attrs:{"pull-left":""}},[t._v("Content")]),t._v(" "),n("Sider",[t._v("Sider")])],1),t._v(" "),n("Footer",[t._v("Footer")])],1),t._v(" "),n("Layout",{staticClass:"demo-k-layout"},[n("Sider",[t._v("Sider")]),t._v(" "),n("Layout",[n("Header",[t._v("Header")]),t._v(" "),n("Content",[t._v("Content")]),t._v(" "),n("Footer",[t._v("Footer")])],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("典型的页面布局。")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"上中下布局",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",[n("Header",[n("Menu",{staticStyle:{"line-height":"62px"},attrs:{mode:"horizontal",theme:"dark",activeName:"1"}},[n("div",{staticStyle:{width:"120px",height:"31px",background:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),t._v(" "),n("MenuItem",{attrs:{name:"1",icon:"ios-home"}},[t._v("首页")]),t._v(" "),n("MenuItem",{attrs:{name:"2",icon:"logo-buffer"}},[t._v("文章")]),t._v(" "),n("MenuItem",{attrs:{name:"3",icon:"ios-heart"}},[t._v("评论")])],1)],1),t._v(" "),n("Content",{staticStyle:{padding:"0 50px"}},[n("Breadcrumb",{staticStyle:{margin:"20px 0"}},[n("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home"}},[t._v("Home")]),t._v(" "),n("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer"}},[t._v("breadcrumb")]),t._v(" "),n("BreadcrumbItem",{attrs:{icon:"ios-heart"}},[t._v("other")])],1),t._v(" "),n("div",{staticStyle:{border:"1px solid #eee",padding:"20px",height:"200px",background:"#fff"}},[t._v("\n            Content\n          ")])],1),t._v(" "),n("Footer",[t._v("\n          2009-2018 © KUI\n        ")])],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("最基本的『上-中-下』布局。 一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。\n    ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.tmb))])]),t._v(" "),n("Demo",{attrs:{title:"顶部-侧边布局-通栏",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Layout",[n("Header",[n("Menu",{staticStyle:{"line-height":"62px"},attrs:{mode:"horizontal",theme:"dark",activeName:"1"}},[n("div",{staticStyle:{width:"120px",height:"31px",background:"#848b9c",float:"left",margin:"15px 30px 0 0"}}),t._v(" "),n("MenuItem",{attrs:{name:"1",icon:"ios-home"}},[t._v("首页")]),t._v(" "),n("MenuItem",{attrs:{name:"2",icon:"logo-buffer"}},[t._v("文章")]),t._v(" "),n("MenuItem",{attrs:{name:"3",icon:"ios-heart"}},[t._v("评论")])],1)],1),t._v(" "),n("Layout",[n("Sider",[n("Menu",{attrs:{theme:"dark","active-name":"1",width:"auto"}},[n("SubMenu",{attrs:{name:"0"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-paper"}}),t._v("我的产品\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"0-1"}},[t._v("我的产品1")]),t._v(" "),n("MenuItem",{attrs:{name:"0-2"}},[t._v("我的产品2")]),t._v(" "),n("MenuItem",{attrs:{name:"0-3"}},[t._v("我的产品3")]),t._v(" "),n("MenuItem",{attrs:{name:"0-4"}},[t._v("我的产品4")])],2),t._v(" "),n("SubMenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"logo-apple"}}),t._v("商品管理\n                ")],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[t._v("商品信息")]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[t._v("商品列表")]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[t._v("商品新增")]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[t._v("商品筛选")])],2),t._v(" "),n("SubMenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-walk"}}),t._v("用户管理\n                ")],1),t._v(" "),n("MenuGroup",{attrs:{title:"超级管理"}},[n("MenuItem",{attrs:{name:"2-1"}},[t._v("用户信息")]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[t._v("用户列表")])],1),t._v(" "),n("MenuGroup",{attrs:{title:"普通管理"}},[n("MenuItem",{attrs:{name:"2-3"}},[t._v("用户新增")]),t._v(" "),n("MenuItem",{attrs:{name:"2-4"}},[t._v("用户筛选")])],1)],2)],1)],1),t._v(" "),n("Content",{staticStyle:{padding:"20px 50px"}},[n("Breadcrumb",{staticStyle:{margin:"0 0 20px 0"}},[n("BreadcrumbItem",{attrs:{to:"/",icon:"ios-home"}},[t._v("Home")]),t._v(" "),n("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"logo-buffer"}},[t._v("breadcrumb")]),t._v(" "),n("BreadcrumbItem",{attrs:{icon:"ios-heart"}},[t._v("other")])],1),t._v(" "),n("div",{staticStyle:{border:"1px solid #eee",padding:"20px",height:"200px",background:"#fff"}},[t._v("\n              Content\n            ")])],1)],1)],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。 ")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.tlc))])])],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"k-item-list"},[n("li",[t._v("顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。")]),t._v(" "),n("li",[t._v("顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。")]),t._v(" "),n("li",[t._v("顶部导航高度的范围计算公式为：48+8n。")]),t._v(" "),n("li",[t._v("侧边导航宽度的范围计算公式：200+8n。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"k-item-list"},[n("li",[t._v("一级导航和末级的导航需要在可视化的层面被强调出来；")]),t._v(" "),n("li",[t._v("当前项应该在呈现上优先级最高；")]),t._v(" "),n("li",[t._v("当导航收起的时候，当前项的样式自动赋予给它的上一个层级；")]),t._v(" "),n("li",[t._v("左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"k-item-list"},[n("li",[n("strong",[t._v("大色块强调")]),t._v(" "),n("p",[t._v("建议用于底色为深色系时，当前页面父级的导航项。")])]),t._v(" "),n("li",[n("strong",[t._v("高亮火柴棍")]),t._v(" "),n("p",[t._v("当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。")])]),t._v(" "),n("li",[n("strong",[t._v("字体高亮变色")]),t._v(" "),n("p",[t._v("从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。")])]),t._v(" "),n("li",[n("strong",[t._v("字体放大")]),t._v(" "),n("p",[t._v("12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"k-item-list"},[n("li",[n("code",[t._v("Layout")]),t._v("：布局容器，其下可嵌套\n      "),n("code",[t._v("Header")]),t._v(" "),n("code",[t._v("Sider")]),t._v(" "),n("code",[t._v("Content")]),t._v(" "),n("code",[t._v("Footer")]),t._v("或\n      "),n("code",[t._v("Layout")]),t._v(" 本身，可以放在任何父容器中。")]),t._v(" "),n("li",[n("code",[t._v("Header")]),t._v("：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),n("li",[n("code",[t._v("Sider")]),t._v("：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在\n      "),n("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),n("li",[n("code",[t._v("Content")]),t._v("：内容部分，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[t._v("Layout")]),t._v(" 中。")]),t._v(" "),n("li",[n("code",[t._v("Footer")]),t._v("：底部布局，自带默认样式，其下可嵌套任何元素，只能放在\n      "),n("code",[t._v("Layout")]),t._v(" 中。")])])}],!1,null,null,null);e.default=l.exports},YRx6:function(t,e,i){"use strict";i.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:i("5ijs")}}),this._v("K UIKIT")])])}],o={nav:[{title:"开始",child:[{title:"安装",link:"/install",icon:"ios-cog"},{title:"快速上手",link:"/start",icon:"ios-walk"},{title:"SSR 支持",link:"/ssr",icon:"ios-cloud"},{title:"更新日志",link:"/log",log:1,icon:"ios-paper"},{title:"定制主题",link:"/theme",icon:"md-shirt"},{title:"kui-loader",link:"/kui-loader",icon:"ios-link"}]},{title:"基础组件",child:[{title:"图标",sub:"Icon",link:"/icon",icon:"ios-heart"},{title:"按钮",sub:"Button",link:"/button",icon:"ios-square"},{title:"颜色",sub:"ColorPicker",link:"/colorpicker",icon:"ios-color-palette"},{title:"栅格",sub:"Grid",link:"/grid",icon:"ios-grid"},{title:"布局",sub:"Layout",link:"/layout",icon:"ios-albums"}]},{title:"表单",child:[{title:"输入框",sub:"Input",link:"/input",icon:"ios-create"},{title:"多选框",sub:"Checkbox",link:"/checkbox",icon:"ios-checkbox"},{title:"单选框",sub:"Radio",link:"/radio",icon:"ios-checkmark-circle"},{title:"开关",sub:"Switch",link:"/switch",icon:"ios-switch"},{title:"下拉框",sub:"Select",link:"/select",icon:"ios-arrow-down"},{title:"日期",sub:"datePicker",link:"/datepicker",icon:"ios-calendar"},{title:"表格",sub:"Table",link:"/table",icon:"ios-grid"},{title:"上传",sub:"Upload",link:"/upload",icon:"ios-cloud-upload"},{title:"表单",sub:"Form",link:"/form",icon:"ios-list"}]},{title:"视图",child:[{title:"警告提示",sub:"Alert",link:"/alert",icon:"ios-alert"},{title:"徽标",sub:"Badge",link:"/badge",icon:"ios-mail-unread"},{title:"卡片",sub:"Card",link:"/card",icon:"ios-card"},{title:"走马灯",sub:"Carousel",link:"/carousel",icon:"ios-film"},{title:"折叠面板",sub:"Collapse",link:"/collapse",icon:"ios-funnel"},{title:"图片预览",sub:"imagePreview",link:"/imagepreview",icon:"ios-images"},{title:"全局提示",sub:"Message",link:"/message",icon:"ios-chatboxes"},{title:"通知提醒",sub:"Notice",link:"/notice",icon:"ios-notifications"},{title:"对话框",sub:"Modal",link:"/modal",icon:"ios-chatbubbles"},{title:"标签",sub:"Tag",link:"/tag",icon:"ios-bookmark"},{title:"时间轴",sub:"TimeLine",link:"/timeline",icon:"ios-time"},{title:"气泡提示",sub:"Poptip",link:"/poptip",icon:"ios-chatbubbles"},{title:"文字提示",sub:"Tooltip",link:"/tooltip",icon:"ios-text"},{title:"树形控件",sub:"Tree",link:"/tree",icon:"ios-git-merge"},{title:"树选择",sub:"TreeSelect",link:"/treeselect",icon:"ios-git-pull-request"}]},{title:"导航",child:[{title:"图钉",sub:"Affix",link:"/affix",icon:"ios-pin"},{title:"面包屑",sub:"Breadcrumb",link:"/breadcrumb",icon:"ios-arrow-forward"},{title:"回到顶部",sub:"BackTop",link:"/backtop",icon:"md-arrow-up"},{title:"下拉菜单",sub:"Dropdown",link:"/dropdown",icon:"ios-arrow-dropdown-circle"},{title:"加载进度",sub:"Loading",link:"/loading",icon:"ios-pulse"},{title:"导航菜单",sub:"Menu",link:"/menu",icon:"ios-list"},{title:"分页",sub:"Page",link:"/page",icon:"ios-fastforward"},{title:"步骤条",sub:"Steps",link:"/steps",icon:"ios-done-all"},{title:"标签页",sub:"Tabs",link:"/tabs",icon:"ios-photos"}]}]},a=o,s={data:function(){return{key:"",nav:a.nav,activeName:"",isShowNav:!1,components:[]}},computed:{navStyles:function(){return this.isShowNav?{left:0}:{}}},methods:{change:function(t){var e=this,n=t.value.toLowerCase();this.activeName="/"+n,this.$router.push(n),setTimeout(function(){return e.key=""},500)},showNav:function(){this.isShowNav=!this.isShowNav},go:function(e){this.key="",this.showNav(),0<=e.indexOf("http")?window.open(e):(this.$router.push({path:e}),this.nav.forEach(function(t){t.child.forEach(function(t){t.link==e&&(document.title="".concat(t.title," ").concat(t.sub||""," - KUI"))})}))}},created:function(){var n=this;this.nav.forEach(function(t,e){return t.child.forEach(function(t){t.selected=!1,t.link==n.$route.path&&(document.title=t.title+(t.sub||"")+" - KUI",n.activeName=t.link),0<e&&n.components.push({title:t.title,name:t.sub})})})}},l=i("KHd+"),r=Object(l.a)(s,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("section",{staticClass:"body"},[o("header",[n._m(0),n._v(" "),o("div",{staticClass:"search-component"},[o("Select",{attrs:{placeholder:"搜索组件...",filterable:""},on:{change:n.change},model:{value:n.key,callback:function(t){n.key=t},expression:"key"}},n._l(n.components,function(t,e){return o("Option",{key:e,attrs:{value:t.name}},[n._v(n._s(t.name)+" "+n._s(t.title))])}),1)],1),n._v(" "),o("Menu",{staticStyle:{float:"right"},attrs:{mode:"horizontal",activeName:"/install"},on:{select:n.go}},[o("MenuItem",{attrs:{name:"/",icon:"md-home"}},[n._v("首页")]),n._v(" "),o("MenuItem",{attrs:{name:"/install",icon:"ios-options"}},[n._v("组件")]),n._v(" "),o("MenuItem",{attrs:{name:"https://github.com/chuchur-china/kui-vue",icon:"logo-github"}},[n._v("Github")]),n._v(" "),o("MenuItem",{attrs:{name:"https://react.k-ui.cn"}},[o("img",{staticStyle:{height:"15px",margin:"0"},attrs:{src:i("AT8x")}}),n._v("KUI React")]),n._v(" "),o("MenuItem",{attrs:{name:"https://www.chuchur.com",icon:"ios-leaf"}},[n._v("Blog")])],1)],1),n._v(" "),o("section",{staticClass:"main"},[o("Row",[o("Col",{staticClass:"colNav",style:n.navStyles,attrs:{span:"4"}},[o("nav",{staticClass:"nav"},[o("Menu",{attrs:{activeName:n.activeName,width:"auto"},on:{select:n.go}},n._l(n.nav,function(t,e){return o("MenuGroup",{key:e,attrs:{title:t.title,name:t.title}},n._l(t.child,function(t,e){return o("MenuItem",{key:e,attrs:{icon:t.icon,name:t.link||t.weblink}},["/log"===t.link?o("Badge",{attrs:{dot:""}},[n._v(n._s(t.title))]):[n._v(n._s(t.title))],n._v(" "),t.sub?o("span",{staticClass:"sub"},[n._v(n._s(t.sub))]):n._e()],2)}),1)}),1)],1),n._v(" "),o("div",{staticClass:"drawer-button",on:{click:n.showNav}},[o("Icon",{attrs:{type:"android-menu"}})],1)]),n._v(" "),o("Col",{staticClass:"colMain",attrs:{span:"20"}},[o("div",{staticClass:"content"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)])],1)],1)])},n,!1,null,null,null);e.default=r.exports}}]);