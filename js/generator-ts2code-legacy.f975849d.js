(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generator-ts2code"],{4516:function(e,t,n){"use strict";var o=n("ab04"),r=n.n(o);r.a},"693a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("column-layout",{attrs:{width:"50%"}},[n("v-layout",{staticClass:"px-2",attrs:{slot:"top","align-center":""},slot:"top"},[n("v-btn",{attrs:{small:""},on:{click:e.loadDemo}},[e._v("加载样例")]),n("v-select",{attrs:{label:"转换为",items:e.items},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("v-btn",{attrs:{small:""},on:{click:e.transform}},[e._v("转换")])],1),n("code-editor",{staticClass:"fill-height",attrs:{slot:"left",lang:"typescript"},slot:"left",model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("code-editor",{staticClass:"fill-height",attrs:{lang:"json"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)},r=[],i=n("4795"),a=n.n(i),u=n("9ab4"),s=n("60a3"),l=n("864f"),c=n("b88f");function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t,n,o,r,i,a){try{var u=e[i](a),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(o,r)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(o,r){var i=e.apply(t,n);function a(e){d(i,o,r,a,u,"next",e)}function u(e){d(i,o,r,a,u,"throw",e)}a(void 0)})}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}var _=function(e){function t(){var e;return y(this,t),e=b(this,w(t).apply(this,arguments)),e.code="",e.result="",e.type="json-schema",e.items=["json-schema","graphql"],e}return k(t,e),v(t,[{key:"transform",value:function(){var e=p(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.query({query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:void 0,variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"code"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"ts2Code"},arguments:[{kind:"Argument",name:{kind:"Name",value:"code"},value:{kind:"Variable",name:{kind:"Name",value:"code"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],directives:[],selectionSet:void 0}]}}],loc:{start:0,end:108,source:{body:"\n        query($code: String!, $type: String!) {\n          ts2Code(code: $code, type:$type)\n        }\n      ",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:{code:this.code,type:this.type}});case 2:t=e.sent,n=t.data.ts2Code,this.result=n;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"loadDemo",value:function(){this.code="class UserInfo {\n  /**\n   * 用户名\n   */\n  username: string\n  /**\n   * 密码\n   */\n  password: string\n  /**\n   * 年龄\n   */\n  age: number\n  /**\n   * 是否为活跃用户\n   */\n  is_active: boolean = false\n  /**\n   * 出生日期\n   */\n  birthday: Date\n  /**\n   * 身份证号\n   */\n  idcard?: string\n  /**\n   * 爱好\n   */\n  hobbys: string[]\n}\n\nclass Manager extends UserInfo {\n  /**\n   * 角色名\n   */\n  role_name: string\n  /**\n   * 额外字段\n   */\n  other: {\n    /**\n     * 额外字段1\n     */\n    f1: string\n    /**\n     * 额外字段2\n     */\n    f2: any\n  }\n}"}}]),t}(s["d"]);_=u["b"]([Object(s["a"])({components:{CodeEditor:l["a"],ColumnLayout:c["a"]}})],_);var O=_,j=O,S=n("2877"),x=n("9fa7"),N=n.n(x),E=Object(S["a"])(j,o,r,!1,null,null,null);"function"===typeof N.a&&N()(E);t["default"]=E.exports},"9fa7":function(e,t){},ab04:function(e,t,n){},b88f:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("div",[e._t("top")],2),n("v-layout",[n("div",{ref:"left",style:{flex:"0 0 "+e._w}},[e._t("left")],2),n("div",{staticClass:"vline",on:{mousedown:e.onMousedown}}),n("v-flex",[e._t("default")],2)],1)],1)},r=[],i=n("9ab4"),a=n("60a3");function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var v=function(e){function t(){var e;return s(this,t),e=f(this,p(t).apply(this,arguments)),e.startX=0,e.startW=0,e.flag=!1,e.w=0,e}return y(t,e),c(t,[{key:"created",value:function(){this.w=this.width}},{key:"mounted",value:function(){this.w=this.$refs.left.offsetWidth}},{key:"onMousedown",value:function(e){var t=this;this.startX=e.clientX,this.startW=this.w;var n=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t.onMousemove)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",this.onMousemove)}},{key:"onMousemove",value:function(e){this.w=this.startW+e.clientX-this.startX,console.log(this.w),this.$emit("change")}},{key:"_w",get:function(){return"number"===typeof this.w?this.w+"px":this.w}}]),t}(a["d"]);i["b"]([Object(a["c"])(String)],v.prototype,"width",void 0),v=i["b"]([Object(a["a"])({})],v);var b=v,h=b,w=(n("4516"),n("2877")),k=Object(w["a"])(h,o,r,!1,null,null,null);t["a"]=k.exports}}]);