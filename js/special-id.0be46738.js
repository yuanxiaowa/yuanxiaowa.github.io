(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["special-id"],{"8a5c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ApolloQuery",{staticClass:"pa-2",staticStyle:{display:"flex","flex-direction":"column",height:"100%"},attrs:{query:i("9834"),fetchPolicy:"no-cache",variables:{id:e.$route.params.id}},on:{result:e.onResult},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.isLoading,n=t.result.data;return!i&&n?[a("div",{staticClass:"headline"},[e._v(e._s(e.title)+"\n      "),e.loading?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):a("v-btn",{attrs:{color:"primary"},on:{click:e.produceHtml}},[e._v("获取代码")])],1),a("json-editor",{ref:"editor",staticStyle:{flex:"1"},attrs:{schema:e.schema,layout:e.layout,value:e.defdata},on:{submit:e.submit,loaded:function(t){e.loading=!1}}}),e.show_dialog?a("x-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.show_dialog,callback:function(t){e.show_dialog=t},expression:"show_dialog"}},[a("v-textarea",{attrs:{autofocus:""},model:{value:e.result_code,callback:function(t){e.result_code=t},expression:"result_code"}}),a("v-layout",[a("v-spacer"),a("v-btn",{on:{click:function(t){e.show_dialog=!1}}},[e._v("关闭")])],1)],1):e._e()]:void 0}}],null,!0)})},n=[],s=i("9ab4"),r=i("60a3"),l=i("9fdd"),o=i("9530"),d=i.n(o),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("iframe",{ref:"ifr",staticStyle:{width:"100%"},attrs:{src:e.url,frameborder:"0"},on:{load:e.onFrameLoad}})},u=[];let m=class extends r["d"]{constructor(e){super(e),this.url="/ody-json-schema/index.html",this.promise_data=new Promise(e=>{this.promise_resolve=e})}onSchemaChange(e){e&&this.promise_resolve()}handler(e){let t=e.data.formData;t&&this.$emit("submit",t)}async onFrameLoad(){await this.promise_data,this.$emit("loaded");var e=this.$refs.if,t=e.contentWindow,i=this.layout;i=this.layout?[...i,{type:"submit",title:"保存"}]:["*",{type:"submit",title:"保存"}],t.postMessage({schema:this.schema,layout:i,data:this.value},"*")}created(){window.addEventListener("message",this.handler)}beforeDestroy(){window.removeEventListener("message",this.handler)}};s["b"]([Object(r["c"])()],m.prototype,"schema",void 0),s["b"]([Object(r["c"])()],m.prototype,"layout",void 0),s["b"]([Object(r["c"])()],m.prototype,"value",void 0),s["b"]([Object(r["e"])("schema",{immediate:!0})],m.prototype,"onSchemaChange",null),m=s["b"]([Object(r["a"])({})],m);var h=m,f=h,p=i("2877"),v=Object(p["a"])(f,c,u,!1,null,null,null),y=v.exports;function b(e,t){return w(e)||k(e,t)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(e,t){var i=[],a=!0,n=!1,s=void 0;try{for(var r,l=e[Symbol.iterator]();!(a=(r=l.next()).done);a=!0)if(i.push(r.value),t&&i.length===t)break}catch(o){n=!0,s=o}finally{try{a||null==l["return"]||l["return"]()}finally{if(n)throw s}}return i}function w(e){if(Array.isArray(e))return e}let _=class extends r["d"]{constructor(){super(...arguments),this.title="",this.schema=null,this.defdata=null,this.layout=null,this.template="",this.styles="",this.scripts="",this.result_code="",this.show_dialog=!1,this.loading=!0}getVue(){return i.e("chunk-2d229a34").then(i.bind(null,"ddfd")).then(e=>e.default)}onResult(e){let t=e.loading,i=e.data;if(t)return;let a=i.special;this.title=a.name,this.template=a.template,this.scripts=a.scripts,this.styles=a.styles;let n=[];n.push((async()=>{try{return JSON.parse(a.schema)}catch(e){return this.$axios.get(a.schema).then(e=>{let t=e.data;return t})}})()),n.push((async()=>{if(a.layout)try{return JSON.parse(a.layout)}catch(e){return this.$axios.get(a.layout).then(e=>{let t=e.data;return t})}})()),n.push((async()=>{if(a.data)try{return JSON.parse(a.data)}catch(e){return this.$axios.get(a.data).then(e=>{let t=e.data;return t})}})()),Promise.all(n).then(e=>{let t=b(e,3),i=t[0],a=t[1],n=t[2];this.schema=i,this.layout=a,this.defdata=n})}async produceHtml(){const e=await this.getVue();var t=new e({template:`<div>${this.template}</div>`,data:Object(l["a"])(this.defdata),mounted:()=>{var e=t.$el.innerHTML;this.styles&&(e=`<style>${this.styles}</style>`+e),this.scripts&&(e+=`<script>${this.scripts}</`+"script>"),this.result_code=e,this.show_dialog=!0}});t.$mount()}async submit(e){this.defdata=e,this.$apollo.mutate({mutation:d.a`mutation($item:SpecialInput!){
        editSpecial(item:$item)
      }`,variables:{item:{id:this.$route.params.id,data:JSON.stringify(e,null,2)}}}),this.template&&this.produceHtml()}};_=s["b"]([Object(r["a"])({components:{JsonEditor:y}})],_);var S=_,N=S,x=i("bace"),O=i.n(x),$=Object(p["a"])(N,a,n,!1,null,null,null);"function"===typeof O.a&&O()($);t["default"]=$.exports},9834:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:126}};i.loc.source={body:"query($id: ID!){\n  special(id: $id) {\n    id\n    name\n    template\n    schema\n    data\n    layout\n    styles\n    scripts\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var n={};(function(){i.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),n[e.name.value]=t}})})(),e.exports=i},"9fdd":function(e,t,i){"use strict";function a(e){return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""))}var n=i("4aa2"),s=Object(n["a"])(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}),r=s;function l(e,t,i,n){var s=function(a){var s=t.length,r=0;while(r<s){if(e===t[r])return i[r];r+=1}for(var o in t[r+1]=e,i[r+1]=a,e)a[o]=n?l(e[o],t,i,!0):e[o];return a};switch(r(e)){case"Object":return s({});case"Array":return s([]);case"Date":return new Date(e.valueOf());case"RegExp":return a(e);default:return e}}var o=Object(n["a"])(function(e){return null!=e&&"function"===typeof e.clone?e.clone():l(e,[],[],!0)});t["a"]=o},bace:function(e,t){}}]);