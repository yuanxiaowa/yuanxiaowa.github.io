(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["special-id"],{"8a5c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ApolloQuery",{staticClass:"pa-2",staticStyle:{display:"flex","flex-direction":"column",height:"100%"},attrs:{query:n("9834"),fetchPolicy:"no-cache",variables:{id:e.$route.params.id}},on:{result:e.onResult},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.isLoading,i=t.result.data;return!n&&i?[r("div",{staticClass:"headline"},[e._v(e._s(e.title)+"\n      "),e.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):r("v-btn",{attrs:{color:"primary"},on:{click:e.produceHtml}},[e._v("获取代码")])],1),r("json-editor",{ref:"editor",staticStyle:{flex:"1"},attrs:{schema:e.schema,layout:e.layout,value:e.defdata},on:{submit:e.submit,loaded:function(t){e.loading=!1}}}),e.show_dialog?r("x-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.show_dialog,callback:function(t){e.show_dialog=t},expression:"show_dialog"}},[r("v-textarea",{attrs:{autofocus:""},model:{value:e.result_code,callback:function(t){e.result_code=t},expression:"result_code"}}),r("v-layout",[r("v-spacer"),r("v-btn",{on:{click:function(t){e.show_dialog=!1}}},[e._v("关闭")])],1)],1):e._e()]:void 0}}],null,!0)})},i=[],a=n("4795"),o=n.n(a),u=n("9ab4"),c=n("60a3"),s=n("9fdd"),l=n("9530"),f=n.n(l),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("iframe",{ref:"ifr",staticStyle:{width:"100%"},attrs:{src:e.url,frameborder:"0"},on:{load:e.onFrameLoad}})},p=[];function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e){return b(e)||h(e)||y()}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function b(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function w(e,t,n,r,i,a,o){try{var u=e[a](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,i)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){w(a,r,i,o,u,"next",e)}function u(e){w(a,r,i,o,u,"throw",e)}o(void 0)})}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function S(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function N(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}var P=function(e){function t(e){var n;return g(this,t),n=S(this,x(t).call(this,e)),n.url="/ody-json-schema/index.html",n.promise_data=new Promise(function(e){n.promise_resolve=e}),n}return N(t,e),_(t,[{key:"onSchemaChange",value:function(e){e&&this.promise_resolve()}},{key:"handler",value:function(e){var t=e.data.formData;t&&this.$emit("submit",t)}},{key:"onFrameLoad",value:function(){var e=k(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.promise_data;case 2:this.$emit("loaded"),t=this.$refs.if,n=t.contentWindow,r=this.layout,r=this.layout?[].concat(v(r),[{type:"submit",title:"保存"}]):["*",{type:"submit",title:"保存"}],n.postMessage({schema:this.schema,layout:r,data:this.value},"*");case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){window.addEventListener("message",this.handler)}},{key:"beforeDestroy",value:function(){window.removeEventListener("message",this.handler)}}]),t}(c["d"]);u["b"]([Object(c["c"])()],P.prototype,"schema",void 0),u["b"]([Object(c["c"])()],P.prototype,"layout",void 0),u["b"]([Object(c["c"])()],P.prototype,"value",void 0),u["b"]([Object(c["e"])("schema",{immediate:!0})],P.prototype,"onSchemaChange",null),P=u["b"]([Object(c["a"])({})],P);var $=P,D=$,F=n("2877"),A=Object(F["a"])(D,d,p,!1,null,null,null),T=A.exports;function C(e){return C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function J(){var e=L(["mutation($item:SpecialInput!){\n        editSpecial(item:$item)\n      }"]);return J=function(){return e},e}function L(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function R(e,t){return q(e)||I(e,t)||V()}function V(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function I(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)if(n.push(o.value),t&&n.length===t)break}catch(c){i=!0,a=c}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw a}}return n}function q(e){if(Array.isArray(e))return e}function H(e,t,n,r,i,a,o){try{var u=e[a](o),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,i)}function z(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){H(a,r,i,o,u,"next",e)}function u(e){H(a,r,i,o,u,"throw",e)}o(void 0)})}}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return t&&Q(e.prototype,t),n&&Q(e,n),e}function U(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function K(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}var Y=function(e){function t(){var e;return M(this,t),e=U(this,B(t).apply(this,arguments)),e.title="",e.schema=null,e.defdata=null,e.layout=null,e.template="",e.styles="",e.scripts="",e.result_code="",e.show_dialog=!1,e.loading=!0,e}return K(t,e),G(t,[{key:"getVue",value:function(){return n.e("chunk-2d229a34").then(n.bind(null,"ddfd")).then(function(e){return e.default})}},{key:"onResult",value:function(e){var t=this,n=e.loading,r=e.data;if(!n){var i=r.special;this.title=i.name,this.template=i.template,this.scripts=i.scripts,this.styles=i.styles;var a=[];a.push(z(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",JSON.parse(i.schema));case 4:return e.prev=4,e.t0=e["catch"](0),e.abrupt("return",t.$axios.get(i.schema).then(function(e){var t=e.data;return t}));case 7:case"end":return e.stop()}},e,null,[[0,4]])}))()),a.push(z(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!i.layout){e.next=8;break}return e.prev=1,e.abrupt("return",JSON.parse(i.layout));case 5:return e.prev=5,e.t0=e["catch"](1),e.abrupt("return",t.$axios.get(i.layout).then(function(e){var t=e.data;return t}));case 8:case"end":return e.stop()}},e,null,[[1,5]])}))()),a.push(z(o.a.mark(function e(){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!i.data){e.next=8;break}return e.prev=1,e.abrupt("return",JSON.parse(i.data));case 5:return e.prev=5,e.t0=e["catch"](1),e.abrupt("return",t.$axios.get(i.data).then(function(e){var t=e.data;return t}));case 8:case"end":return e.stop()}},e,null,[[1,5]])}))()),Promise.all(a).then(function(e){var n=R(e,3),r=n[0],i=n[1],a=n[2];t.schema=r,t.layout=i,t.defdata=a})}}},{key:"produceHtml",value:function(){var e=z(o.a.mark(function e(){var t,n,r=this;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getVue();case 2:t=e.sent,n=new t({template:"<div>".concat(this.template,"</div>"),data:Object(s["a"])(this.defdata),mounted:function(){var e=n.$el.innerHTML;r.styles&&(e="<style>".concat(r.styles,"</style>")+e),r.scripts&&(e+="<script>".concat(r.scripts,"</")+"script>"),r.result_code=e,r.show_dialog=!0}}),n.$mount();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"submit",value:function(){var e=z(o.a.mark(function e(t){return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.defdata=t,this.$apollo.mutate({mutation:f()(J()),variables:{item:{id:this.$route.params.id,data:JSON.stringify(t,null,2)}}}),this.template&&this.produceHtml();case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(c["d"]);Y=u["b"]([Object(c["a"])({components:{JsonEditor:T}})],Y);var Z=Y,ee=Z,te=n("bace"),ne=n.n(te),re=Object(F["a"])(ee,r,i,!1,null,null,null);"function"===typeof ne.a&&ne()(re);t["default"]=re.exports},9834:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:126}};n.loc.source={body:"query($id: ID!){\n  special(id: $id) {\n    id\n    name\n    template\n    schema\n    data\n    layout\n    styles\n    scripts\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){r(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){r(e,t)}),e.definitions&&e.definitions.forEach(function(e){r(e,t)})}var i={};(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;r(e,t),i[e.name.value]=t}})})(),e.exports=n},"9fdd":function(e,t,n){"use strict";function r(e){return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""))}var i=n("4aa2"),a=Object(i["a"])(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}),o=a;function u(e,t,n,i){var a=function(r){var a=t.length,o=0;while(o<a){if(e===t[o])return n[o];o+=1}for(var c in t[o+1]=e,n[o+1]=r,e)r[c]=i?u(e[c],t,n,!0):e[c];return r};switch(o(e)){case"Object":return a({});case"Array":return a([]);case"Date":return new Date(e.valueOf());case"RegExp":return r(e);default:return e}}var c=Object(i["a"])(function(e){return null!=e&&"function"===typeof e.clone?e.clone():u(e,[],[],!0)});t["a"]=c},bace:function(e,t){}}]);