(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fe"],{2505:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ApolloQuery",{attrs:{query:a("e53d"),skip:!t.path,variables:{path:t.path+"/src"}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.result,o=a.data,s=a.loading;return[n("v-autocomplete",{attrs:{label:"项目名",value:t.value,items:t.getNames(o),loading:s},on:{input:t.input}})]}}])})},o=[],s=a("9ab4"),c=a("60a3");let i=class extends c["d"]{input(t){}getNames(t){return t?t.files.filter(({name:t,hidden:e})=>{return!e&&!["api","assets","common","components","config","data","plugins","settings","styles","utils"].includes(t)}).map(t=>t.name):[]}};s["a"]([Object(c["c"])(String)],i.prototype,"value",void 0),s["a"]([Object(c["c"])(String)],i.prototype,"path",void 0),s["a"]([Object(c["b"])()],i.prototype,"input",null),i=s["a"]([Object(c["a"])({name:"fe-project"})],i);var l=i,r=l,u=(a("2b9b"),a("2877")),p=Object(u["a"])(r,n,o,!1,null,null,null);p.options.__file="Project.vue";e["a"]=p.exports},"2b9b":function(t,e,a){"use strict";var n=a("8119"),o=a.n(n);o.a},"32fb":function(t,e,a){"use strict";var n=a("8c23"),o=a.n(n);o.a},"5a1b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.action(e)}}},[a("fe-root",{model:{value:t.path,callback:function(e){t.path=e},expression:"path"}}),a("v-layout",[a("fe-project",{attrs:{path:t.path},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-btn",{attrs:{color:"primary"}},[t._v("新增项目")])],1),a("v-layout",[a("v-text-field",{model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),a("v-btn",[t._v("提交内容")])],1),a("v-btn",[t._v("更新api")]),a("v-btn",{attrs:{icon:"",color:"primary--text"},on:{click:function(e){t.show_conf=!0}}},[a("v-icon",[t._v("settings")])],1)],1),a("v-dialog",{on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.show_conf=!1}},model:{value:t.show_conf,callback:function(e){t.show_conf=e},expression:"show_conf"}},[a("fe-conf",{on:{submit:t.onConfSubmit,cancel:function(e){t.show_conf=!1}}})],1)],1)},o=[],s=a("9ab4"),c=a("60a3"),i=a("c327"),l=a("2505"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n    更改配置\n  ")]),a("v-card-text",[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("v-text-field",{attrs:{label:"模板路径"},model:{value:t.template_path,callback:function(e){t.template_path=e},expression:"template_path"}}),a("v-text-field",{attrs:{label:"资源路径"},model:{value:t.assets_path,callback:function(e){t.assets_path=e},expression:"assets_path"}})],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{on:{click:t.cancel}},[t._v("取消")]),a("v-btn",{attrs:{color:"primary"},on:{click:t.submit}},[t._v("保存")])],1)],1)},u=[];let p=class extends c["d"]{constructor(){super(...arguments),this.template_path="",this.assets_path=""}submit(){this.$emit("submit",{template_path:this.template_path,assets_path:this.assets_path})}cancel(){}};s["a"]([Object(c["b"])()],p.prototype,"cancel",null),p=s["a"]([Object(c["a"])({})],p);var f=p,d=f,v=(a("b326"),a("2877")),h=Object(v["a"])(d,r,u,!1,null,null,null);h.options.__file="Conf.vue";var b=h.exports;let m=class extends c["d"]{constructor(){super(...arguments),this.path="",this.name="",this.comment="",this.show_conf=!1}onConfSubmit(){}};m=s["a"]([Object(c["a"])({components:{FeRoot:i["a"],FeProject:l["a"],FeConf:b}})],m);var _=m,y=_,x=(a("7feb"),Object(v["a"])(y,n,o,!1,null,null,null));x.options.__file="fe.vue";e["default"]=x.exports},"7feb":function(t,e,a){"use strict";var n=a("cb12"),o=a.n(n);o.a},8119:function(t,e,a){},"8c23":function(t,e,a){},b326:function(t,e,a){"use strict";var n=a("cf01"),o=a.n(n);o.a},c327:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-autocomplete",{attrs:{label:"根目录",value:t.value,items:t.paths},on:{input:t.input}}),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-btn",{attrs:{slot:"activator",icon:"",color:"primary"},on:{click:t.toAddPath},slot:"activator"},[a("v-icon",[t._v("add")])],1),a("v-card",[a("v-card-text",[a("v-text-field",{ref:"tf-path",attrs:{label:"路径"},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addPath(e):null}},model:{value:t.added_path,callback:function(e){t.added_path=e},expression:"added_path"}})],1)],1)],1)],1)},o=[],s=a("9ab4"),c=a("60a3");let i=class extends c["d"]{constructor(){super(...arguments),this.paths=[],this.show=!1,this.added_path=""}input(t){}mounted(){var t=localStorage.getItem("fb-dirs");t&&(this.paths=JSON.parse(t))}addPath(){if(!this.added_path)return this.$toast("请输入路径");this.paths.push(this.added_path),this.added_path="",this.show=!1,localStorage.setItem("fb-dirs",JSON.stringify(this.paths))}toAddPath(){setTimeout(()=>{this.$refs["tf-path"].focus()},100)}};s["a"]([Object(c["c"])(String)],i.prototype,"value",void 0),s["a"]([Object(c["b"])()],i.prototype,"input",null),i=s["a"]([Object(c["a"])({})],i);var l=i,r=l,u=(a("32fb"),a("2877")),p=Object(u["a"])(r,n,o,!1,null,null,null);p.options.__file="Root.vue";e["a"]=p.exports},cb12:function(t,e,a){},cf01:function(t,e,a){}}]);