(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editor-id"],{4516:function(e,t,n){"use strict";var i=n("ab04"),o=n.n(i);o.a},"9aa0":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("column-layout",{attrs:{width:"300px"},on:{change:e.onLayoutChange}},[n("file-tree",{staticClass:"fill-height",attrs:{slot:"left",path:e.$route.params.id,value:e.selectedFile},on:{input:e.onSelect},slot:"left"}),n("v-layout",{attrs:{"fill-height":"",column:""}},[n("v-toolbar",{attrs:{flat:""}},[n("div",{staticClass:"blue--text"},[e._v(e._s(e.selectedFile)+"\n        "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:14,width:1}}):e._e()],1)]),"text"===e.type?n("code-editor",{ref:"editor",staticClass:"flex",attrs:{filename:e.selectedFile},on:{save:e.saveFile},model:{value:e.contents,callback:function(t){e.contents=t},expression:"contents"}}):n("div",{staticClass:"pa-3"},["image"===e.type?n("img",{attrs:{src:e.filePath}}):"video"===e.type?n("video",{attrs:{src:e.filePath}}):"audio"===e.type?n("audio",{attrs:{src:e.filePath}}):e._e(),n("p",[n("a",{attrs:{href:e.filePath}},[e._v(e._s(e.selectedFile))])])])],1)],1)},o=[],r=n("4795"),a=n.n(r),s=n("9ab4"),u=n("60a3"),c=n("f16a"),l=n.n(c),f=n("864f"),p=n("b88f"),d=n("4758");function v(e){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t,n,i,o,r,a){try{var s=e[r](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,o)}function m(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var r=e.apply(t,n);function a(e){h(r,i,o,a,s,"next",e)}function s(e){h(r,i,o,a,s,"throw",e)}a(void 0)})}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function k(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function w(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}var S=["jpg","jpeg","png","gif","ico","svg","webp"],j=["wma","mp3","mdi"],N=["mp4","3gp","ogg","wav"],P=function(e){function t(){var e;return y(this,t),e=w(this,x(t).apply(this,arguments)),e.selectedFile="",e.contents="",e.loading=!1,e.type="",e}return _(t,e),k(t,[{key:"loadContent",value:function(){return this.$axios.get(this.filePath,{responseType:"text"}).then(function(e){return e.request.responseText})}},{key:"onSelect",value:function(){var e=m(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t&&t!==this.selectedFile){e.next=2;break}return e.abrupt("return");case 2:if(this.loading=!0,this.selectedFile=t,!S.includes(this.extName)){e.next=8;break}this.type="image",e.next=21;break;case 8:if(!j.includes(this.extName)){e.next=12;break}this.type="audio",e.next=21;break;case 12:if(!N.includes(this.extName)){e.next=16;break}this.type="video",e.next=21;break;case 16:return this.type="text",e.next=19,this.loadContent();case 19:n=e.sent,this.contents=n;case 21:this.loading=!1;case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveFile",value:function(){var e=this;this.$apollo.mutate({mutation:l.a,variables:{path:this.selectedFile,contents:this.contents},update:function(){e.$toast("保存成功~~~")}})}},{key:"onLayoutChange",value:function(){var e=this.$refs.editor;e&&e.onResize()}},{key:"extName",get:function(){return Object(d["b"])(this.selectedFile)}},{key:"filePath",get:function(){return Object(d["a"])(this.selectedFile)}}]),t}(u["d"]);P=s["b"]([Object(u["a"])({components:{CodeEditor:f["a"],ColumnLayout:p["a"]}})],P);var E=P,F=E,C=n("2877"),$=n("c3f3"),T=n.n($),D=Object(C["a"])(F,i,o,!1,null,null,null);"function"===typeof T.a&&T()(D);t["default"]=D.exports},ab04:function(e,t,n){},b88f:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("div",[e._t("top")],2),n("v-layout",[n("div",{ref:"left",style:{flex:"0 0 "+e._w}},[e._t("left")],2),n("div",{staticClass:"vline",on:{mousedown:e.onMousedown}}),n("v-flex",[e._t("default")],2)],1)],1)},o=[],r=n("9ab4"),a=n("60a3");function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var m=function(e){function t(){var e;return u(this,t),e=f(this,d(t).apply(this,arguments)),e.startX=0,e.startW=0,e.flag=!1,e.w=0,e}return v(t,e),l(t,[{key:"created",value:function(){this.w=this.width}},{key:"mounted",value:function(){this.w=this.$refs.left.offsetWidth}},{key:"onMousedown",value:function(e){var t=this;this.startX=e.clientX,this.startW=this.w;var n=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t.onMousemove)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",this.onMousemove)}},{key:"onMousemove",value:function(e){this.w=this.startW+e.clientX-this.startX,console.log(this.w),this.$emit("change")}},{key:"_w",get:function(){return"number"===typeof this.w?this.w+"px":this.w}}]),t}(a["d"]);r["b"]([Object(a["c"])(String)],m.prototype,"width",void 0),m=r["b"]([Object(a["a"])({})],m);var y=m,b=y,k=(n("4516"),n("2877")),w=Object(k["a"])(b,i,o,!1,null,null,null);t["a"]=w.exports},c3f3:function(e,t){},f16a:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contents"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saveFile"},arguments:[{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}},{kind:"Argument",name:{kind:"Name",value:"contents"},value:{kind:"Variable",name:{kind:"Name",value:"contents"}}}],directives:[]}]}}],loc:{start:0,end:93}};n.loc.source={body:"mutation($path: String!, $contents: String!) {\n  saveFile(path: $path, contents: $contents)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,t)}),e.definitions&&e.definitions.forEach(function(e){i(e,t)})}var o={};(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;i(e,t),o[e.name.value]=t}})})(),e.exports=n}}]);