(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generator"],{1879:function(e,t,n){},c978:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("v-tabs",{attrs:{value:e.active,dark:"","slider-color":"yellow"},on:{change:e.onTabChange}},e._l(e.menus,function(t){return n("v-tab",{key:t.name,attrs:{ripple:""}},[n("span",{domProps:{innerHTML:e._s(t.text)}})])}),1),n("v-flex",[n("v-slide-x-transition",[n("router-view")],1)],1)],1)},r=[],o=n("c665"),i=n("dc0a"),u=n("aa9a"),s=n("d328"),c=n("11d9"),l=n("9ab4"),b=n("60a3"),f=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.menus=[{name:"generator-form",text:"&nbsp;&nbsp;表单"},{name:"generator-model",text:"模式"},{name:"generator-table",text:"表格"}],e}return Object(u["a"])(t,[{key:"onTabChange",value:function(e){this.$router.push({name:this.menus[e].name})}},{key:"active",get:function(){var e=this.$route.name;return this.menus.findIndex(function(t){return t.name===e})}}]),Object(i["a"])(t,e),t}(b["d"]);f=l["a"]([Object(b["a"])({})],f);var m=f,v=m,p=(n("e9fb"),n("2877")),h=Object(p["a"])(v,a,r,!1,null,null,null);h.options.__file="generator.vue";t["default"]=h.exports},e9fb:function(e,t,n){"use strict";var a=n("1879"),r=n.n(a);r.a}}]);