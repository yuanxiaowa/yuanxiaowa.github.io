(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["special-id"],{"4bc2":function(e,t,i){"use strict";var a=i("6701"),n=i.n(a);n.a},6701:function(e,t,i){},"8a5c":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ApolloQuery",{staticClass:"pa-2",staticStyle:{display:"flex","flex-direction":"column",height:"100%"},attrs:{query:i("9834"),fetchPolicy:"no-cache",variables:{id:e.$route.params.id}},on:{result:e.onResult},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.isLoading,n=t.result.data;return!i&&n?[a("div",{staticClass:"headline"},[e._v(e._s(e.title)+"\n      "),e.loading?a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):a("v-btn",{attrs:{color:"primary"},on:{click:e.produceHtml}},[e._v("获取代码")])],1),a("json-editor",{ref:"editor",staticStyle:{flex:"1"},attrs:{schema:e.schema,layout:e.layout,value:e.defdata},on:{submit:e.submit,loaded:function(t){e.loading=!1}}}),e.show_dialog?a("x-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.show_dialog,callback:function(t){e.show_dialog=t},expression:"show_dialog"}},[a("v-textarea",{attrs:{autofocus:""},model:{value:e.result_code,callback:function(t){e.result_code=t},expression:"result_code"}}),a("v-layout",[a("v-spacer"),a("v-btn",{on:{click:function(t){e.show_dialog=!1}}},[e._v("关闭")])],1)],1):e._e()]:void 0}}])})},n=[],s=i("9ab4"),l=i("60a3"),o=i("b17e"),r=i("9530"),d=i.n(r),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("iframe",{ref:"ifr",staticStyle:{width:"100%"},attrs:{src:e.url,frameborder:"0"},on:{load:e.onFrameLoad}})},u=[];let m=class extends l["d"]{constructor(e){super(e),this.url="/ody-json-schema/index.html",this.promise_data=new Promise(e=>{this.promise_resolve=e})}onSchemaChange(e){e&&this.promise_resolve()}handler({data:{formData:e}}){e&&this.$emit("submit",e)}async onFrameLoad(){await this.promise_data,this.$emit("loaded");var e=this.$refs.if,t=e.contentWindow,i=this.layout;i=this.layout?[...i,{type:"submit",title:"保存"}]:["*",{type:"submit",title:"保存"}],t.postMessage({schema:this.schema,layout:i,data:this.value},"*")}created(){window.addEventListener("message",this.handler)}beforeDestroy(){window.removeEventListener("message",this.handler)}};s["a"]([Object(l["c"])()],m.prototype,"schema",void 0),s["a"]([Object(l["c"])()],m.prototype,"layout",void 0),s["a"]([Object(l["c"])()],m.prototype,"value",void 0),s["a"]([Object(l["e"])("schema",{immediate:!0})],m.prototype,"onSchemaChange",null),m=s["a"]([Object(l["a"])({})],m);var h=m,p=h,v=(i("4bc2"),i("2877")),f=Object(v["a"])(p,c,u,!1,null,null,null);f.options.__file="JsonEditor.vue";var y=f.exports;let k=class extends l["d"]{constructor(){super(...arguments),this.title="",this.schema=null,this.defdata=null,this.layout=null,this.template="",this.styles="",this.scripts="",this.result_code="",this.show_dialog=!1,this.loading=!0}getVue(){return i.e("chunk-2d229a34").then(i.bind(null,"ddfd")).then(e=>e.default)}onResult({loading:e,data:t}){if(e)return;let i=t.special;this.title=i.name,this.template=i.template,this.scripts=i.scripts,this.styles=i.styles;let a=[];a.push((async()=>{try{return JSON.parse(i.schema)}catch(e){return this.$axios.get(i.schema).then(({data:e})=>e)}})()),a.push((async()=>{if(i.layout)try{return JSON.parse(i.layout)}catch(e){return this.$axios.get(i.layout).then(({data:e})=>e)}})()),a.push((async()=>{if(i.data)try{return JSON.parse(i.data)}catch(e){return this.$axios.get(i.data).then(({data:e})=>e)}})()),Promise.all(a).then(([e,t,i])=>{this.schema=e,this.layout=t,this.defdata=i})}async produceHtml(){const e=await this.getVue();var t=new e({template:`<div>${this.template}</div>`,data:Object(o["b"])(this.defdata),mounted:()=>{var e=t.$el.innerHTML;this.styles&&(e=`<style>${this.styles}</style>`+e),this.scripts&&(e+=`<script>${this.scripts}</`+"script>"),this.result_code=e,this.show_dialog=!0}});t.$mount()}async submit(e){this.defdata=e,this.$apollo.mutate({mutation:d.a`mutation($item:SpecialInput!){
        editSpecial(item:$item)
      }`,variables:{item:{id:this.$route.params.id,data:JSON.stringify(e,null,2)}}}),this.template&&this.produceHtml()}};k=s["a"]([Object(l["a"])({components:{JsonEditor:y}})],k);var b=k,g=b,_=(i("bffa"),Object(v["a"])(g,a,n,!1,null,null,null));_.options.__file="_id.vue";t["default"]=_.exports},9834:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:126}};i.loc.source={body:"query($id: ID!){\n  special(id: $id) {\n    id\n    name\n    template\n    schema\n    data\n    layout\n    styles\n    scripts\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var n={};(function(){i.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),n[e.name.value]=t}})})(),e.exports=i},"9e10":function(e,t,i){},bffa:function(e,t,i){"use strict";var a=i("9e10"),n=i.n(a);n.a}}]);