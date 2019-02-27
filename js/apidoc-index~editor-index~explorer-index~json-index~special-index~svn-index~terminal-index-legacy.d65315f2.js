(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apidoc-index~editor-index~explorer-index~json-index~special-index~svn-index~terminal-index"],{"199d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("data-table",{ref:"table",attrs:{title:t.title,fields:t.fields,gql:t.gql_list}},[n("template",{slot:"actions"},[t.has_add?n("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:function(e){return t.onEdit()}}},[n("v-icon",[t._v("add")])],1):t._e(),t.has_add?n("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:t.refreshTable}},[n("v-icon",[t._v("refresh")])],1):t._e()],1)],2),n("my-dialog",{attrs:{width:t.dialogWidth,persistent:"",title:t.dialog_title},model:{value:t.show_edit,callback:function(e){t.show_edit=e},expression:"show_edit"}},[n("my-form",{ref:"form",attrs:{schema:t.schema,"ui-schema":t.uiSchema,"submit-handler":t.onSubmit},on:{cancel:function(e){t.show_edit=!1}}})],1)],1)},r=[],a=n("4795"),o=n.n(a),u=n("9ab4"),s=n("60a3"),c=n("2638"),l=n.n(c);function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function f(t,e,n,i,r,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(i,r)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function o(t){f(a,i,r,o,u,"next",t)}function u(t){f(a,i,r,o,u,"throw",t)}o(void 0)})}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function y(t,e){return!e||"object"!==d(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function k(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}var w=function(t){function e(){var t;return h(this,e),t=y(this,g(e).apply(this,arguments)),t.items=[],t.pagination={rowsPerPage:10,page:1,descending:!1,sortBy:"",totalItems:0},t.loading=!1,t.search="",t}return k(e,t),v(e,[{key:"created",value:function(){this.serverPage||this.fetchData()}},{key:"refresh",value:function(){this.fetchData()}},{key:"refetch",value:function(){this.serverPage&&this.fetchData()}},{key:"onSearch",value:function(t){this.search=t,this.serverPage&&this.refetch()}},{key:"render",value:function(){var t=this,e=arguments[0];return e("v-card",[e("v-card-title",[e("div",{class:"headline"},[this.title]),e("v-spacer"),e("v-text-field",{attrs:{value:this.search,"append-icon":"search",label:"搜索","hide-details":!0,clearable:!0,solo:!0},on:{input:this.onSearch}}),this.$slots.actions]),e("v-data-table",l()([{attrs:{headers:this.fields,items:this.items,pagination:this.pagination,loading:this.loading,search:this.search}},{on:{"update:pagination":function(e){t.pagination=e,t.refetch()}},scopedSlots:{items:function(n){return t.fields.map(function(t,i){return e("td",{key:i},[t.component?t.component(n):n.item[t.value]])})}}}]))])}},{key:"fetchData",value:function(){var t=p(o.a.mark(function t(){var e,n,i;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$apollo.query({query:this.gql,variables:Object.assign({search:this.search},this.pagination,this.gqlVars)});case 3:e=t.sent,n=e.data,i=n[Object.keys(n)[0]],this.serverPage?(this.items=i.items,this.pagination.totalItems=i.totalItems):(this.items=i,this.pagination.totalItems=i.length),this.loading=!1;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(s["d"]);u["b"]([Object(s["c"])(Array)],w.prototype,"fields",void 0),u["b"]([Object(s["c"])()],w.prototype,"gql",void 0),u["b"]([Object(s["c"])()],w.prototype,"gqlVars",void 0),u["b"]([Object(s["c"])({type:Boolean,default:!0})],w.prototype,"immediate",void 0),u["b"]([Object(s["c"])(Boolean)],w.prototype,"serverPage",void 0),u["b"]([Object(s["c"])(String)],w.prototype,"itemKey",void 0),u["b"]([Object(s["c"])(String)],w.prototype,"title",void 0),w=u["b"]([Object(s["a"])({})],w);var _,j,S=w,q=S,$=n("2877"),x=Object($["a"])(q,_,j,!1,null,null,null),D=x.exports,P=n("8477"),N=n("3f7a"),F=n("a684");function T(t){return T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function E(t,e,n,i,r,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(i,r)}function I(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function o(t){E(a,i,r,o,u,"next",t)}function u(t){E(a,i,r,o,u,"throw",t)}o(void 0)})}}function V(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function A(t,e,n){return e&&C(t.prototype,e),n&&C(t,n),t}function B(t,e){return!e||"object"!==T(e)&&"function"!==typeof e?K(t):e}function K(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}function J(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}var R=function(t){function e(){var t;return V(this,e),t=B(this,z(e).apply(this,arguments)),t.show_edit=!1,t.edit_type="add",t.dialog_title="编辑",t}return J(e,t),A(e,[{key:"onEdit",value:function(){var t=I(o.a.mark(function t(e){var n,i,r,a,u;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.editFn){t.next=3;break}return this.editFn(e),t.abrupt("return");case 3:if(this.show_edit=!0,n=this.$refs.form,!e){t.next=17;break}return this.edit_type="edit",this.dialog_title="编辑",i=this.gfq.detail,r=i.query,a=i.name,t.next=11,this.$apollo.query({query:r,variables:{id:e.id}});case 11:u=t.sent,e=u.data,delete e[a].__typename,n.updateData(e[a]),t.next=20;break;case 17:this.edit_type="add",this.dialog_title="添加",n.clearData();case 20:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"onDelete",value:function(){var t=I(o.a.mark(function t(e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("确定要删除吗？");case 2:return t.next=4,this.$apollo.mutate({mutation:this.gfq.del.mutation,variables:{id:e}});case 4:this.$toast("操作成功"),this.refreshTable();case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"onSubmit",value:function(){var t=I(o.a.mark(function t(e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.mutate({mutation:this.gfq.edit.mutation,variables:{item:e}});case 2:this.show_edit=!1,this.$toast("保存成功"),this.refreshTable();case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"refreshTable",value:function(){this.$refs.table.refresh()}},{key:"onDetailClick",value:function(t){this.detailFn?this.detailFn(t):this.$router.push({name:"".concat(this.name,"-id"),params:{id:t[this.routeKey]}})}},{key:"gfq",get:function(){return F[this.name]}},{key:"has_detail",get:function(){return 2&this.curd}},{key:"has_delete",get:function(){return 1&this.curd}},{key:"has_update",get:function(){return 4&this.curd}},{key:"has_add",get:function(){return 8&this.curd}},{key:"gql_list",get:function(){return this.gfq.list.query}},{key:"fields",get:function(){var t=this,e=this.$createElement,n=this.tableNames.map(function(e){return"string"===typeof e?{text:t.schema.properties[e].title,value:e,sortable:!1}:e});return n.push({text:"操作",sortable:!1,component:function(n){var i=n.item,r=[];return t.has_detail&&r.push(e("v-btn",{on:{click:function(){return t.onDetailClick(i)}},attrs:{small:!0,fab:!0,fla:!0,t:!0}},["查看"])),t.has_update&&r.push(e("v-btn",{attrs:{small:!0,fab:!0,flat:!0}},[e("v-icon",{on:{click:function(){return t.onEdit(i)}}},["edit "])])),t.has_delete&&r.push(e("v-btn",{attrs:{small:!0,color:"error",fab:!0,flat:!0}},[e("v-icon",{on:{click:function(){return t.onDelete(i.id)}}},["delet "])])),r}}),n}}]),e}(s["d"]);u["b"]([Object(s["c"])()],R.prototype,"schema",void 0),u["b"]([Object(s["c"])()],R.prototype,"uiSchema",void 0),u["b"]([Object(s["c"])(Array)],R.prototype,"tableNames",void 0),u["b"]([Object(s["c"])({type:Number,default:15})],R.prototype,"curd",void 0),u["b"]([Object(s["c"])(String)],R.prototype,"name",void 0),u["b"]([Object(s["c"])(String)],R.prototype,"title",void 0),u["b"]([Object(s["c"])({type:String,default:"id"})],R.prototype,"routeKey",void 0),u["b"]([Object(s["c"])({default:500})],R.prototype,"dialogWidth",void 0),u["b"]([Object(s["c"])(Function)],R.prototype,"editFn",void 0),u["b"]([Object(s["c"])(Function)],R.prototype,"detailFn",void 0),R=u["b"]([Object(s["a"])({components:{DataTable:D,MyForm:P["a"],MyDialog:N["a"]}})],R);var W=R,G=W,L=Object($["a"])(G,i,r,!1,null,null,null);e["a"]=L.exports},9834:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:137}};n.loc.source={body:"query($id: ID!){\r\n  special(id: $id) {\r\n    id\r\n    name\r\n    template\r\n    schema\r\n    data\r\n    layout\r\n    styles\r\n    scripts\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){i(t,e)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){i(t,e)}),t.definitions&&t.definitions.forEach(function(t){i(t,e)})}var r={};(function(){n.definitions.forEach(function(t){if(t.name){var e=new Set;i(t,e),r[t.name.value]=e}})})(),t.exports=n},a684:function(t,e,n){"use strict";n.r(e),n.d(e,"path",function(){return _}),n.d(e,"explorer",function(){return j}),n.d(e,"svn",function(){return S}),n.d(e,"editor",function(){return q}),n.d(e,"apidoc",function(){return $}),n.d(e,"json",function(){return x}),n.d(e,"terminal",function(){return D}),n.d(e,"special",function(){return P}),n.d(e,"skl",function(){return N});var i=n("9530"),r=n.n(i);function a(){var t=w(["mutation($ext:String,$path:String,$content:String,$id:ID!){\n      editSkl(ext:$ext,path:$path,content:$content,id:$id)\n    }"]);return a=function(){return t},t}function o(){var t=w(["mutation($id:ID!){\n      delSpecial(id: $id)\n    }"]);return o=function(){return t},t}function u(){var t=w(["mutation($item:SpecialInput!){\n      editSpecial(item:$item)\n    }"]);return u=function(){return t},t}function s(){var t=w(["query{\n      specials {\n        id\n        name\n      }\n    }"]);return s=function(){return t},t}function c(){var t=w(["query($id: ID!){\n      terminal(id: $id) {\n        id\n        username\n        host\n        password\n      }\n    }"]);return c=function(){return t},t}function l(){var t=w(["mutation($id: ID!){\n      delTerminal(id: $id)\n    }"]);return l=function(){return t},t}function d(){var t=w(["mutation($item: TerminalInput!){\n      editTerminal(item: $item)\n    }"]);return d=function(){return t},t}function f(){var t=w(["{\n      terminals {\n        id\n        username\n        host\n        token\n      }\n    }"]);return f=function(){return t},t}function p(){var t=w(['query{\n      paths(type: "json") {\n        id\n        path\n        name\n      }\n    }']);return p=function(){return t},t}function h(){var t=w(['query{\n      paths(type: "apidoc markdown") {\n        id\n        path\n        name\n        type\n      }\n    }']);return h=function(){return t},t}function m(){var t=w(['query{\n      paths(type: "editor") {\n        id\n        path\n        name\n      }\n    }']);return m=function(){return t},t}function v(){var t=w(['query{\n      paths(type: "svn") {\n        id\n        path\n        name\n      }\n    }']);return v=function(){return t},t}function y(){var t=w(['query{\n      paths(type: "explorer") {\n        id\n        path\n        name\n      }\n    }']);return y=function(){return t},t}function b(){var t=w(["mutation($id: ID!){\n      delPath(id: $id)\n    }"]);return b=function(){return t},t}function g(){var t=w(["mutation($item: PathInput!){\n      editPath(item: $item)\n    }"]);return g=function(){return t},t}function k(){var t=w(["query($id: ID!){\n      path(id: $id) {\n        id\n        path\n        name\n      }\n    }"]);return k=function(){return t},t}function O(){var t=w(["query{\n      paths {\n        id\n        path\n        name\n      }\n    }"]);return O=function(){return t},t}function w(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var _={list:{query:r()(O()),name:"paths"},detail:{query:r()(k()),vars:["id"],name:"path"},edit:{mutation:r()(g()),vars:["item"],name:"editPath"},del:{mutation:r()(b()),vars:["id"],name:"delPath"}},j=Object.assign({},_,{list:{query:r()(y()),name:"paths"}}),S=Object.assign({},_,{list:{query:r()(v()),name:"paths"}}),q=Object.assign({},_,{list:{query:r()(m()),name:"paths"}}),$=Object.assign({},_,{list:{query:r()(h()),name:"paths"}}),x=Object.assign({},_,{list:{query:r()(p()),name:"paths"}}),D={list:{query:r()(f()),name:"terminals"},edit:{mutation:r()(d()),vars:["item"],name:"editTerminal"},del:{mutation:r()(l()),vars:["id"],name:"delTerminal"},detail:{query:r()(c()),vars:["id"],name:"terminal"}},P={list:{query:r()(s()),name:"specials"},edit:{mutation:r()(u()),vars:["item"],name:"editSpecial"},del:{mutation:r()(o()),vars:["id"],name:"delSpecial"},detail:{query:n("9834"),vars:["id"],name:"special"}},N={edit:{mutation:r()(a())}}}}]);