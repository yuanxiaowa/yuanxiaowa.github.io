(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["json-id"],{c6ab:function(t,e){},eb54:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("code-editor",{staticStyle:{height:"100%"},attrs:{value:t.data,lang:"json","read-only":""}})},n=[],r=a("9ab4"),o=a("60a3"),c=a("4758"),i=a("864f");let u=class extends o["d"]{constructor(){super(...arguments),this.data=""}get url(){const t=this.$route.params.id;if(t&&"-"!==t)return Object(c["a"])(t)}created(){this.url&&this.$axios.get(this.url,{responseType:"text"}).then(t=>{this.data=t.request.responseText})}};u=r["b"]([Object(o["a"])({components:{CodeEditor:i["a"]}})],u);var l=u,d=l,p=a("2877"),h=a("c6ab"),b=a.n(h),f=Object(p["a"])(d,s,n,!1,null,null,null);"function"===typeof b.a&&b()(f);e["default"]=f.exports}}]);