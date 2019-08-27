/*! kui-vue v2.3.1 by chuchur (c) 2019 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{pckD:function(e,n,v){"use strict";v.r(n);var o={install:"npm i kui-loader --save-dev",webconfig:"module: {\n    rules: [\n        {\n          test: /.vue$/,\n          use: [\n            {\n              loader: 'vue-loader',\n              options: { }\n            },\n            {\n              loader: 'kui-loader',\n              options: { prefix: false }\n            }\n          ]\n        }\n    ]\n}"},t=o,_={components:{Code:v("rMEQ").a},data:function(){return{code:t}}},a=v("KHd+"),l=Object(a.a)(_,function(){var e=this,n=e.$createElement,v=e._self._c||n;return v("div",[v("h2",[e._v("KUI-Loader")]),e._v(" "),v("h3",[e._v("用途")]),e._v(" "),v("p",[e._v("在vue 里面，自定义组件名称是无法和 原生的html组件 重名的， 在vue1.x 版本有这个限制，但是在vue2.x 以后，有虚拟DOM ，所以可以使用原生组件来命名自定义组件，但是有大小写区分(template/render模式)")]),e._v(" "),v("h3",[e._v("使用方法")]),e._v(" "),v("h4",[e._v("安装")]),e._v(" "),v("p",[e._v("通过 npm 安装 kui-loader")]),e._v(" "),v("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.install))]),e._v(" "),v("h4",[e._v("配置")]),e._v(" "),v("p",[e._v("配置 webpack，修改 vue-loader 的配置，如下：")]),e._v(" "),v("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.webconfig))]),e._v(" "),v("h4",[e._v("说明")]),e._v(" "),v("p",[e._v("可以直接写 <Switch> 标签；")]),e._v(" "),v("p",[e._v("参数 prefix 设置为 true 后，所有 kui 组件标签名都可以使用前缀 k-")])],1)},[],!1,null,null,null);n.default=l.exports}}]);