(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generator"],{1879:function(e,t,n){},c978:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("v-tabs",{attrs:{value:e.active,dark:"","slider-color":"yellow"},on:{change:e.onTabChange}},e._l(e.menus,function(t){return n("v-tab",{key:t.name,attrs:{ripple:""}},[e._v("\n      "+e._s(t.text)+"\n    ")])}),1),n("v-flex",[n("v-slide-x-transition",[n("router-view")],1)],1)],1)},r=[],u=n("c665"),i=n("dc0a"),o=n("aa9a"),c=n("d328"),s=n("11d9"),l=n("9ab4"),f=n("60a3"),v=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.menus=[{name:"generator-form",text:"表单"},{name:"generator-table",text:"表格"}],e}return Object(o["a"])(t,[{key:"onTabChange",value:function(e){this.$router.push({name:this.menus[e].name})}},{key:"active",get:function(){var e=this.$route.name;return this.menus.findIndex(function(t){return t.name===e})}}]),Object(i["a"])(t,e),t}(f["d"]);v=l["a"]([Object(f["a"])({})],v);var b=v,h=b,m=(n("e9fb"),n("2877")),d=Object(m["a"])(h,a,r,!1,null,null,null);d.options.__file="generator.vue";t["default"]=d.exports},e9fb:function(e,t,n){"use strict";var a=n("1879"),r=n.n(a);r.a}}]);