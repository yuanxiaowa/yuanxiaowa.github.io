(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generator-model"],{1748:function(t,e,n){},4516:function(t,e,n){"use strict";var a=n("782e"),s=n.n(a);s.a},"782e":function(t,e,n){},b88f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("div",[t._t("top")],2),n("v-layout",[n("div",{ref:"left",style:{flex:"0 0 "+t._w}},[t._t("left")],2),n("div",{staticClass:"vline",on:{mousedown:t.onMousedown}}),n("v-flex",[t._t("default")],2)],1)],1)},s=[],o=n("c665"),i=n("dc0a"),r=n("aa9a"),c=n("d328"),l=n("11d9"),u=n("9ab4"),d=n("60a3"),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.startX=0,t.startW=0,t.flag=!1,t.w=0,t}return Object(r["a"])(e,[{key:"created",value:function(){this.w=this.width}},{key:"mounted",value:function(){this.w=this.$refs.left.offsetWidth}},{key:"onMousedown",value:function(t){var e=this;this.startX=t.clientX,this.startW=this.w;var n=function t(){document.removeEventListener("mouseup",t),document.removeEventListener("mousemove",e.onMousemove)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",this.onMousemove)}},{key:"onMousemove",value:function(t){this.w=this.startW+t.clientX-this.startX,console.log(this.w),this.$emit("change")}},{key:"_w",get:function(){return"number"===typeof this.w?this.w+"px":this.w}}]),Object(i["a"])(e,t),e}(d["d"]);u["a"]([Object(d["c"])(String)],f.prototype,"width",void 0),f=u["a"]([Object(d["a"])({})],f);var v=f,h=v,p=(n("4516"),n("2877")),m=Object(p["a"])(h,a,s,!1,null,null,null);m.options.__file="ColumnLayout.vue";e["a"]=m.exports},da7a:function(t,e,n){"use strict";var a=n("1748"),s=n.n(a);s.a},dc25:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("column-layout",{attrs:{width:"50%"}},[n("v-btn",{on:{click:t.loadDemo}},[t._v("加载示例")]),n("v-layout",{staticClass:"px-2",attrs:{slot:"top"},slot:"top"},[n("v-select",{attrs:{label:"转换为",items:t.items},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("v-btn",{on:{click:t.transform}},[t._v("转换")])],1),n("code-editor",{staticClass:"fill-height",attrs:{slot:"left",lang:"typescript"},slot:"left",model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("code-editor",{staticClass:"fill-height",attrs:{lang:"json"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)},s=[],o=n("a34a"),i=n.n(o),r=n("6eec"),c=n("3040"),l=n("c665"),u=n("dc0a"),d=n("aa9a"),f=n("d328"),v=n("11d9"),h=n("9ab4"),p=n("60a3"),m=n("864f"),b=n("b88f"),y=n("9530"),w=n.n(y);function g(){var t=Object(r["a"])(["\n        query($code: String!, $type: String!) {\n          tsToModel(code: $code, type:$type)\n        }\n      "]);return g=function(){return t},t}var j=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(f["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.code="",t.result="",t.type="json-schema",t.items=["json-schema","graphql"],t}return Object(d["a"])(e,[{key:"transform",value:function(){var t=Object(c["a"])(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:w()(g()),variables:{code:this.code,type:this.type}});case 2:e=t.sent,n=e.data.tsToModel,this.result=n;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadDemo",value:function(){this.code="class UserInfo {\n  /**\n   * 用户名\n   */\n  username: string\n  /**\n   * 密码\n   */\n  password: string\n  /**\n   * 年龄\n   */\n  age: number\n  /**\n   * 是否为活跃用户\n   */\n  is_active: boolean = false\n  /**\n   * 出生日期\n   */\n  birthday: Date\n  /**\n   * 身份证号\n   */\n  idcard?: string\n  /**\n   * 爱好\n   */\n  hobbys: string[]\n}\n\nclass Manager extends UserInfo {\n  /**\n   * 角色名\n   */\n  role_name: string\n}"}}]),Object(u["a"])(e,t),e}(p["d"]);j=h["a"]([Object(p["a"])({components:{CodeEditor:m["a"],ColumnLayout:b["a"]}})],j);var O=j,_=O,k=(n("da7a"),n("2877")),x=Object(k["a"])(_,a,s,!1,null,null,null);x.options.__file="model.vue";e["default"]=x.exports}}]);