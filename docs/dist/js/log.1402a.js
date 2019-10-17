/*! kui-vue v2.3.5 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{BvjC:function(v,_,e){"use strict";e.r(_);var o=e("KHd+"),c=Object(o.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"demo-logs"},[e("h2",[v._v("更新日志")]),v._v(" "),e("TimeLine",[e("TimeLineItem",[e("h3",[v._v("2.3.5"),e("span",[v._v(" 2019-10-17 ")])]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Modal")]),v._v("关闭动画")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("组件表单验证的问题")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Table")]),v._v("`row-click`冒泡不执行的问题")]),v._v(" "),e("h3",[v._v("2.3.4"),e("span",[v._v(" 2019-10-9 ")])]),v._v(" "),e("p",[v._v("重写了"),e("code",[v._v("Menu")]),e("code",[v._v("MenuItem")]),v._v("一系列组件,增加了二级菜单")]),v._v(" "),e("p",[v._v("重写了"),e("code",[v._v("Badge")]),v._v("组件,修复了一些显示问题")]),v._v(" "),e("p",[v._v("重写了"),e("code",[v._v("Tab")]),v._v("组件,修复了在Modal中显示不完整的问题")]),v._v(" "),e("p",[v._v("优化了"),e("code",[v._v("Tooltip")]),v._v("等组件,加入了浅色显示")]),v._v(" "),e("p",[e("code",[v._v("Input")]),v._v("组件 修正了文字大小不统一的问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("button")]),v._v("组件组合使用的颜色问题")]),v._v(" "),e("p",[v._v("表单"),e("code",[v._v("Form")]),v._v("组件优化,错误拼写更正")]),v._v(" "),e("p",[e("code",[v._v("Modal")]),v._v("组件 新增了mask-closable 属性,点遮罩阻止关闭, 默认确定按钮点击不再关闭窗体⚠️")]),v._v(" "),e("p",[e("code",[v._v("Input")]),v._v("组件 修正了文字大小不统一的问题")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-ribbon",color:"green"}},[e("h3",[v._v("2.2.9"),e("span",[v._v(" 2019-8-26 ")])]),v._v(" "),e("p",[v._v("组件库整体优化，组件按需加载体积更小")]),v._v(" "),e("p",[v._v("图标库升级到5.6.10版本")]),v._v(" "),e("p",[v._v("修复Form组件特殊情况的验证问题")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("新增Loading模式")]),v._v(" "),e("p",[e("code",[v._v("ImagePreview")]),v._v("组件增加全局显示模式")]),v._v(" "),e("p",[e("code",[v._v("Switch")]),v._v("组件新增mini模式")]),v._v(" "),e("p",[v._v("新增抽屉"),e("code",[v._v("Drawer")]),v._v("组件，"),e("a",{attrs:{href:"#/drawer"}},[v._v("#体验")])]),v._v(" "),e("h4",[v._v("Modal组件优化")]),v._v(" "),e("p",[v._v("优化展示隐藏动画 "),e("a",{attrs:{href:"#/modal"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("删除toast模式，新增提示框、confrim模式")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("info，success，warning，error，show")]),v._v("等全局模式")]),v._v(" "),e("p",[v._v("新增异步回调")]),v._v(" "),e("h4",[v._v("Input")]),v._v("\n      \b"),e("p",[v._v("修复@input事件调用两次的问题")]),v._v(" "),e("p",[v._v("增加大尺寸模式")]),v._v(" "),e("p",[v._v("优化图标左右位置显示")]),v._v(" "),e("h4",[v._v("Button")]),v._v(" "),e("p",[v._v("增加大尺寸模式")]),v._v(" "),e("p",[v._v("增加图标位置显示，左右可控")]),v._v(" "),e("p",[v._v("增加按钮loading模式")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("2.2.7"),e("span",[v._v(" 2019-7-23 ")])]),v._v(" "),e("p",[v._v("统一表单组件大小")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Radio,Checkbox")]),v._v("等组件的"),e("code",[v._v("disabled")]),v._v("属性动态属性问题")]),v._v(" "),e("h4",[v._v("全面修复完善表单验证组件如下:")]),v._v(" "),e("p",[v._v("Input 组件，数字类型和最大值最小值验证")]),v._v(" "),e("p",[v._v("Input 清除之后的验证")]),v._v(" "),e("p",[v._v("Chebox单独使用和组合使用的验证")]),v._v(" "),e("p",[v._v("Radio单独使用和组合使用的验证")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("2.2.2"),e("span",[v._v(" 2019-6-13 ")])]),v._v(" "),e("p",[v._v("为了移动端更好的体验，默认取消全局定位，本次改动受影响的组件"),e("code",[v._v("ColorPicker,DatePicker,Poptip,Select,Tooltip,TreeSelect")]),v._v("，如果发现组件下拉部分被遮挡，请给设置组件"),e("code",[v._v("transfer='true'")])]),v._v(" "),e("p",[v._v("文档代码展示模块新增了复制代码和放大显示")]),v._v(" "),e("p",[v._v("新增了"),e("code",[v._v("Dropdown")]),v._v("组件")]),v._v(" "),e("p",[e("code",[v._v("Modal")]),v._v('组件新增宽度支持百分比`width="80%"`显示，优化关闭按钮显示')]),v._v(" "),e("p",[e("code",[v._v("Poptip")]),v._v("组件新增了暗黑模式，默认宽度由150px改为200px")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("ToolTip")]),v._v("显示隐藏的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("DatePicker")]),v._v("在IE，Safari等浏览器下无法设置时间的问题。")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Notice,Message")]),v._v("组件显示隐藏动画展示的问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Select,DatePikcer")]),v._v("组件下拉展示的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Poptip")]),v._v("内容或标题过长展示的问题")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("2.1.8"),e("span",[v._v(" 2019-5-22 ")])]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增可编辑模式")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Page")]),v._v("组件，当Total改变时page重置的问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("ImagePreview")]),v._v("组件")]),v._v(" "),e("p",[e("code",[v._v("Modal")]),v._v("组件,新增一些属性，可以最大化，居中显示，和自定义显示动画")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Modal")]),v._v("组件拖动")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Checkbox,Radio")]),v._v("组件动态赋值的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Input")]),v._v("组件type为number时表单验证不通过的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("loading")]),v._v("组件显示异常的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Radio")]),v._v("组件无法选中的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("组件在表单中值改变后的验证问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("DatePicker")]),v._v("组件赋值错误导致显示异常的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("DatePicker")]),v._v("表单验证的问题")]),v._v(" "),e("p",[e("code",[v._v("DatePicker")]),v._v("支持时间戳格式")]),v._v(" "),e("p",[e("code",[v._v("Icon")]),v._v("库升级到4.5.6")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("2.0.3"),e("span",[v._v(" 2019-1-27 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Poptip,Tooltip")]),v._v("显示坐标错误的问题,非常感谢用户`@tiantian8144`提出问题")]),v._v(" "),e("p",[v._v("修复一些组件在box-sizing: border-box;模式下展示怪异的问题")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("DatePicker")]),v._v("组件的问题,非常感谢用户`@醒`提出问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Table")]),v._v("组件,选中表格内容")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Menu")]),v._v("组件展开折叠和accordion不生效的问题,非常感谢用户`@^_^¦¦¦`提出问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Checkbox")]),v._v("组件动态赋值不触发change事件的问题,非常感谢用户`@^_^¦¦¦`提出问题")]),v._v(" "),e("p",[v._v("完善文档目录结构")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.9.7"),e("span",[v._v(" 2018-9-29 ")])]),v._v(" "),e("p",[v._v("优化webpack的编译，组件体积更小")]),v._v(" "),e("p",[v._v("增加了对SSR服务端渲染的支持（for Nuxt），可以更愉快的玩耍了😊")]),v._v(" "),e("p",[v._v("移除优化了一些不必要的组件事件，和奇葩的设计要求")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增排序,和rowclick行点击事件")]),v._v(" "),e("p",[e("code",[v._v("Upload")]),v._v("组件新增max-file-size,和file-extension属性分别控制上传大小和上传扩展名")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-ribbon",color:"green"}},[e("h3",[v._v("1.9.0"),e("span",[v._v(" 2018-8-8 ")])]),v._v(" "),e("p",[v._v("把原来的辣眼睛的logo 重新设计了，换上新的，组件风格统一了圆角4px")]),v._v(" "),e("p",[e("code",[v._v("Icon")]),v._v("库升级到4.3.0，使用更加规范，有效区分了ios和安卓粗细线条")]),v._v(" "),e("p",[e("code",[v._v("Input")]),v._v("新增icon-align属性控制图标显示位置")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("组件几处bug")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Menu")]),v._v("组件初始化的问题，新增open-name 属性，可以默认展开子菜单")]),v._v(" "),e("p",[e("code",[v._v("page")]),v._v("组件新增了一些属性控制辅助显示")]),v._v(" "),e("p",[e("code",[v._v("Tabs")]),v._v("新增animated属性控制切换动画")]),v._v(" "),e("p",[v._v("去掉了一部分组件的事件绑定")]),v._v(" "),e("p",[v._v("文档可以搜索组件，去掉了左右分裂滚动，因为会导致很多奇葩的问题")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.8.8"),e("span",[v._v(" 2018-7-13 ")])]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("文字处理完善")]),v._v(" "),e("p",[e("code",[v._v("Menu")]),v._v("完善在特定情况下显示不全的问题")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增text-max-length 属性，统一处理文字限制")]),v._v(" "),e("p",[e("code",[v._v("Upload")]),v._v("组件新增beforeUpload，afterUpload事件")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("DatePicker")]),v._v("组件特定情况下换行的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Page")]),v._v("组件打印错误的ios-bug")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Table")]),v._v("组件数据为空时全选的问题")]),v._v(" "),e("p",[v._v("修复下拉transfer多组件干扰的问题")]),v._v(" "),e("p",[v._v("组件内部调用隔离，用于兼容第三方UI组件库")]),v._v(" "),e("p",[v._v("修复一些问题")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-ribbon",color:"green"}},[e("h3",[v._v("1.8.0"),e("span",[v._v(" 2018-7-6 ")])]),v._v(" "),e("p",[v._v("KUI for React1.0 发布了")]),v._v(" "),e("p",[v._v("重写了部分组件，优化和修复一些问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("poptip")]),v._v("等一系列组件特定情况下无法销毁的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Table")]),v._v("全选反选的问题")]),v._v(" "),e("p",[v._v("新增布局组件"),e("code",[v._v("Layout")]),v._v("等一些列组件和子组件")]),v._v(" "),e("p",[v._v("修复transfer钩子无法销毁的问题")]),v._v(" "),e("p",[e("code",[v._v("Select")]),v._v("无法赋值，和搜索的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("TreeSelect")]),v._v("lable 无法更改的bug")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增表头固定")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Tooltip")]),v._v("组件显示隐藏的问题")]),v._v(" "),e("p",[v._v("优化transfer性能问题")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.7.7"),e("span",[v._v(" 2018-6-12 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Tree，TreeSelect")]),v._v("异步加载的问题")]),v._v(" "),e("p",[e("code",[v._v("Tooltip")]),v._v("组件新增"),e("code",[v._v("breaked")]),v._v("属性，文字过长强制换行")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增"),e("code",[v._v("overflow，tooltip")]),v._v("属性")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("TreeSelect")]),v._v("组件")]),v._v(" "),e("p",[v._v("优化一些细节，规范一些组件名称和函数定义")]),v._v(" "),e("p",[v._v("修复文档部分示例展示错误")]),v._v(" "),e("p",[v._v("打包编译升级webpack4")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.7.5"),e("span",[v._v(" 2018-5-24 ")])]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Poptip")]),v._v("等一些列组件的定位卡顿问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Menu")]),v._v("手风琴模式的展示卡顿问题")]),v._v(" "),e("p",[v._v("文档加入了自定义滚动容器 @海豚xxx，优化移动端阅读")]),v._v(" "),e("p",[v._v("优化一些细节")]),v._v(" "),e("p",[v._v("修复IE9+"),e("code",[v._v("Tree")]),v._v("组件选中的问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("datePicker")]),v._v("更加友好展示")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Tabs")]),v._v("子集增加删除宽度错误的bug")]),v._v(" "),e("p",[v._v("优化一些其他的1像素的问题")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ribbon"}},[e("h3",[v._v("1.7.0"),e("span",[v._v(" 2018-5-10 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("，"),e("code",[v._v("dataPicker")]),e("code",[v._v("colorPicker")]),v._v("等组件在Modal组件内时，下拉位置偏移的问题")]),v._v(" "),e("p",[e("code",[v._v("emitter")]),v._v("加入了滚动监听")]),v._v(" "),e("p",[v._v("修复下拉组件在浏览器的一些兼容性问题")]),v._v(" "),e("p",[v._v("修复IE9+浏览器中的花式bug")]),v._v(" "),e("p",[v._v("重写了"),e("code",[v._v("Page")]),v._v("组件，保持队形")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Tabs")]),v._v("，"),e("code",[v._v("TabPane")]),v._v("组件")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Modal")]),e("code",[v._v("Select")]),v._v("组件展示1像素的问题")]),v._v(" "),e("p",[v._v("修复文档表单展示问题")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.6.8"),e("span",[v._v(" 2018-5-8 ")])]),v._v(" "),e("p",[v._v("修复Form验证的问题")]),v._v(" "),e("p",[v._v("修复Select选中的问题")]),v._v(" "),e("p",[v._v("修复Modal图标展示的问题")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("tree")]),v._v("组件选中的问题")]),v._v(" "),e("p",[v._v("修复一部分组件mini模式怪异展示")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Modal")]),v._v("显示滚动条的问题")]),v._v(" "),e("p",[e("code",[v._v("checkbox")]),v._v("组件新增"),e("code",[v._v("indeterminate")]),v._v("，协助全选展示")]),v._v(" "),e("p",[v._v("修复Select无法选中的问题，修复poptip confirm模式怪异问题")]),v._v(" "),e("p",[v._v("修复表单自定义类型验证")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Carousel")]),v._v("，"),e("code",[v._v("Collapse")]),v._v("，"),e("code",[v._v("Tree")]),v._v("，"),e("code",[v._v("Steps")]),v._v("等组件")]),v._v(" "),e("p",[v._v("优化表单验证 双向排列验证提示")])]),v._v(" "),e("TimeLineItem",[e("h3",[v._v("1.6.1"),e("span",[v._v(" 2018-4-25 ")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Tooltip")]),v._v("，"),e("code",[v._v("Tag")]),v._v("，"),e("code",[v._v("Breadcrumb")]),v._v("，"),e("code",[v._v("BackTop")]),v._v("，"),e("code",[v._v("Affix")]),v._v("，"),e("code",[v._v("Card")]),v._v("等组件")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("RadioGroup")]),v._v("无法选中的bug")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("无法赋值的ios-bug")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Poptip")]),v._v("子元素有"),e("code",[v._v("margin")]),v._v("时无法对齐的问题")]),v._v(" "),e("p",[v._v("完善表单文档")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"trophy",color:"green"}},[e("h3",[v._v("1.6"),e("span",[v._v(" 2018-4-22 ")])]),v._v(" "),e("p",[v._v("为了有效区分和名称，框架更名为"),e("code",[v._v("kui-vue")])]),v._v(" "),e("p",[v._v("统一组件的事件回调")]),v._v(" "),e("p",[v._v("重写了"),e("code",[v._v("Checkbox")]),v._v("，"),e("code",[v._v("Radio")]),v._v("，"),e("code",[v._v("Select")]),e("code",[v._v("Menu")]),v._v("等一系列组件")]),v._v(" "),e("p",[v._v("完成了"),e("code",[v._v("Form")]),v._v("表单验证 "),e("a",{attrs:{href:"#/form"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("完善文档，分离代码示例和模版")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Menu")]),v._v(","),e("code",[v._v("MenuGroup")]),v._v(","),e("code",[v._v("MenuItem")]),v._v(","),e("code",[v._v("SubMenu")]),v._v(" 组件\n        "),e("a",{attrs:{href:"#/menu"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("优化了文档的可读性")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Select")]),v._v("组件，可清空状态")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("datePicker")]),v._v("在safari下展示怪异模式")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Page")]),v._v("组件跳转翻页的问题以及按钮字符换行的问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Loading")]),v._v("组件展示半透明模式")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.4.9"),e("span",[v._v(" 2018-3-20 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("colorPicker")]),v._v("组件，当页面滚动时找不到对象的错误")]),v._v(" "),e("p",[v._v("优化了文档页面首次载入过慢的问题\n        "),e("a",{attrs:{href:"https://www.chuchur.com/article/vue-code-optimization",target:"_blank"}},[v._v("#解决方案")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Loading")]),v._v("组件 "),e("a",{attrs:{href:"#/loading"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Badge")]),v._v("组件 "),e("a",{attrs:{href:"#/badge"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("优化文档，加入了代码展示部分 展开折叠")]),v._v(" "),e("p",[v._v("修复了文档"),e("code",[v._v("Table")]),v._v("部分，日期下拉导致出现滚动条，部分被隐藏")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.4.6 "),e("span",[v._v(" 2018-1-31 ")])]),v._v(" "),e("p",[v._v("加入了全局的"),e("code",[v._v("document click，scroll")]),v._v("指令优化显示一系列组件的下拉显示将更加人性化")]),v._v(" "),e("p",[v._v("修复了"),e("code",[v._v("DatePicker")]),v._v("组件层级显示问题")]),v._v(" "),e("p",[v._v("优化了"),e("code",[v._v("Page")]),v._v("组件在"),e("code",[v._v("mini")]),v._v("模式显示的问题")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.4.5 "),e("span",[v._v(" 2018-1-29 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Table")]),v._v("组件 "),e("code",[v._v("bordered")]),v._v("显示问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Table")]),v._v("组件 无数据时文字显示问题，优化表格表头字体大小")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Table")]),v._v("组件 "),e("code",[v._v("mini")]),v._v("显示模式 "),e("a",{attrs:{href:"#/table"}},[v._v("#体检")])]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Select")]),v._v(","),e("code",[v._v("DataPicker等组件mini")]),v._v("模式 "),e("code",[v._v("icon")]),v._v("显示问题")]),v._v(" "),e("p",[v._v("优化"),e("code",[v._v("Select")]),v._v(","),e("code",[v._v("DataPicker")]),v._v(","),e("code",[v._v("colorPicker")]),v._v("等组件点击隐藏的问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Input")]),v._v(" 组件可以设置右侧图标\n        "),e("a",{attrs:{href:"#/input"}},[v._v("#体检")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Button")]),v._v(" 组件可以设置图标 "),e("a",{attrs:{href:"#/button"}},[v._v("#体检")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Poptip")]),v._v(" 组件 "),e("a",{attrs:{href:"#/poptip"}},[v._v("#体检")])]),v._v(" "),e("p",[e("code",[v._v("DatePicker")]),v._v("，"),e("code",[v._v("colorPicker")]),v._v("，"),e("code",[v._v("Select")]),v._v("等下拉组件新增"),e("code",[v._v("transifer")]),v._v("属性，下拉组件可以append到body尾部，解决了父级overflow遮挡的问题\n        "),e("a",{attrs:{href:"#/table"}},[v._v("#体检")])]),v._v(" "),e("p",[v._v("增加了几个钩子，优化了一些显示细节")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.4.3 "),e("span",[v._v(" 2018-1-22 ")])]),v._v(" "),e("p",[v._v("修复多个下拉组件显示隐藏的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Modal")]),v._v("组件冒泡显示移除的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Message")]),v._v("组件显示隐藏警告提示的问题")]),v._v(" "),e("p",[v._v("废弃一些组件")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Modal")]),v._v(" "),e("code",[v._v("Toast")]),v._v("模式，优化动画流畅性，加入点击Mask，和ESC键关闭弹框。\n        "),e("a",{attrs:{href:"#/modal"}},[v._v("#体验")])]),v._v(" "),e("p",[v._v("解决"),e("code",[v._v("Message")]),v._v("，"),e("code",[v._v("Notice")]),v._v("组件动画的流畅性。\n        "),e("a",{attrs:{href:"#/message"}},[v._v("#体验Msessage")]),v._v("，\n        "),e("a",{attrs:{href:"#/notice"}},[v._v("#体验Notice")]),v._v("，\n        "),e("a",{attrs:{href:"https://www.chuchur.com/article/vue-v-for-transition",target:"_blank"}},[v._v("#解决方案")])])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-ribbon",color:"green"}},[e("h3",[v._v("1.4 "),e("span",[v._v(" 2018-1-19 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("DataPicker")]),v._v("时间选择完整性")]),v._v(" "),e("p",[v._v("修复完善文档多处文字错误")]),v._v(" "),e("p",[v._v("新增Upload组件。\n        "),e("a",{attrs:{href:"https://www.chuchur.com/article/ajax-upload-download",target:"_blank"}},[v._v("#解决方案")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Select")]),v._v(","),e("code",[v._v("DatePicker")]),v._v(","),e("code",[v._v("mini")]),v._v("属性，可以使用小尺寸")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("DatePicker")]),v._v(" width 属性，可以自定义宽度")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.3.7 "),e("span",[v._v(" 2018-1-17 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("组件无法赋值的问题")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Input")]),v._v("组件默认参数定义出错的问题")]),v._v(" "),e("p",[v._v("清理"),e("code",[v._v("Table")]),v._v("组件打印字符")]),v._v(" "),e("p",[v._v("完善文档说明")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Alert")]),v._v("组件")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Message")]),v._v("组件")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Notice")]),v._v("组件")]),v._v(" "),e("p",[e("code",[v._v("Table")]),v._v("组件新增文字对其属性")]),v._v(" "),e("p",[e("code",[v._v("Modal")]),v._v("组件新增可拖动属性")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.3.5 "),e("span",[v._v(" 2018-1-10 ")])]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Select")]),v._v("组件数据动态改变后无法选中的bug")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Option")]),v._v("组件"),e("code",[v._v("label")]),v._v("赋值的问题")]),v._v(" "),e("p",[v._v("增加"),e("code",[v._v("Option")]),v._v("组件")]),v._v(" "),e("p",[v._v("修改"),e("code",[v._v("Select")]),v._v("组件数据结构")]),v._v(" "),e("p",[v._v("修复文档多处错误,完善文档数据结构")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("render")]),v._v("模式下无法渲染的问题")]),v._v(" "),e("p",[v._v("修复表格组件冲突问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("icon")]),v._v("组件")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("TimeLine")])])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-bug",color:"red"}},[e("h3",[v._v("1.2.8 "),e("span",[v._v(" 2018-1-3 ")])]),v._v(" "),e("p",[v._v("修复部分组件在禁用状态下显示异常的问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Form")]),v._v("组件")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("colorPicker")]),v._v("组件内存泄漏问题")]),v._v(" "),e("p",[v._v("部分组件加入禁用状态")]),v._v(" "),e("p",[v._v("完善文档")]),v._v(" "),e("p",[v._v("修复下拉组件绑定数据的问题")]),v._v(" "),e("p",[v._v("完善表单问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("color")]),v._v("组件")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-cloud-upload"}},[e("h3",[v._v("1.2 "),e("span",[v._v("2017-12-19")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Switch")]),v._v(" 组件")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Select")]),v._v("组件")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Page")]),v._v("分页组件")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Input")]),v._v("组件 ")]),v._v(" "),e("p",[v._v("修复在ie下表格无法选中的bug")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-cloud-upload"}},[e("h3",[v._v("1.1 "),e("span",[v._v(" 2017-12-18")])]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Radio")]),v._v("组件")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Checkbox")]),v._v("组件")]),v._v(" "),e("p",[v._v("修复"),e("code",[v._v("Table")]),v._v(" 组件更新数据更新问题")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Select")]),v._v(" 组件")]),v._v(" "),e("p",[v._v("完善"),e("code",[v._v("Modal")]),v._v(" 回调问题")]),v._v(" "),e("p",[v._v("日期控件新增回调")]),v._v(" "),e("p",[v._v("新增"),e("code",[v._v("Row")]),v._v("，"),e("code",[v._v("Col")]),v._v(" 组件")]),v._v(" "),e("p",[v._v("完成"),e("code",[v._v("Table")]),v._v("，"),e("code",[v._v("Page")]),v._v("，"),e("code",[v._v("Button")]),v._v("，"),e("code",[v._v("DatePicker")]),v._v("等组件")])]),v._v(" "),e("TimeLineItem",{attrs:{icon:"ios-flask"}},[e("h3",[v._v(" 1. 0.0 "),e("span",[v._v("2017-12-10")])]),v._v(" "),e("p",[v._v("着手开发")])])],1)],1)},[],!1,null,null,null);_.default=c.exports}}]);