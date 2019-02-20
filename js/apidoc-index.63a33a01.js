(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apidoc-index"],{1551:function(t,e,a){},"199d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-table",{ref:"table",attrs:{title:t.title,fields:t.fields,gql:t.gql_list}},[a("template",{slot:"actions"},[t.has_add?a("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:function(e){t.onEdit()}}},[a("v-icon",[t._v("add")])],1):t._e(),t.has_add?a("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:t.refreshTable}},[a("v-icon",[t._v("refresh")])],1):t._e()],1)],2),a("my-dialog",{attrs:{width:t.dialogWidth,persistent:"",title:t.dialog_title},model:{value:t.show_edit,callback:function(e){t.show_edit=e},expression:"show_edit"}},[a("my-form",{ref:"form",attrs:{schema:t.schema,"ui-schema":t.uiSchema,"submit-handler":t.onSubmit},on:{cancel:function(e){t.show_edit=!1}}})],1)],1)},n=[],s=a("9ab4"),r=a("60a3"),o=a("92fa"),d=a.n(o);let l=class extends r["d"]{constructor(){super(...arguments),this.items=[],this.pagination={rowsPerPage:10,page:1,descending:!1,sortBy:"",totalItems:0},this.loading=!1,this.search=""}created(){this.serverPage||this.fetchData()}refresh(){this.fetchData()}refetch(){this.serverPage&&this.fetchData()}onSearch(t){this.search=t,this.serverPage&&this.refetch()}render(){const t=arguments[0];return t("v-card",[t("v-card-title",[t("div",{class:"headline"},[this.title]),t("v-spacer"),t("v-text-field",{attrs:{value:this.search,"append-icon":"search",label:"搜索","hide-details":!0,clearable:!0,solo:!0},on:{input:this.onSearch}}),this.$slots.actions]),t("v-data-table",d()([{attrs:{headers:this.fields,items:this.items,pagination:this.pagination,loading:this.loading,search:this.search}},{on:{"update:pagination":t=>{this.pagination=t,this.refetch()}},scopedSlots:{items:e=>this.fields.map((a,i)=>t("td",{key:i},[a.component?a.component(e):e.item[a.value]]))}}]))])}async fetchData(){this.loading=!0;var t=await this.$apollo.query({query:this.gql,variables:Object.assign({search:this.search},this.pagination,this.gqlVars)}),e=t.data;let a=e[Object.keys(e)[0]];this.serverPage?(this.items=a.items,this.pagination.totalItems=a.totalItems):(this.items=a,this.pagination.totalItems=a.length),this.loading=!1}};s["a"]([Object(r["c"])(Array)],l.prototype,"fields",void 0),s["a"]([Object(r["c"])()],l.prototype,"gql",void 0),s["a"]([Object(r["c"])()],l.prototype,"gqlVars",void 0),s["a"]([Object(r["c"])({type:Boolean,default:!0})],l.prototype,"immediate",void 0),s["a"]([Object(r["c"])(Boolean)],l.prototype,"serverPage",void 0),s["a"]([Object(r["c"])(String)],l.prototype,"itemKey",void 0),s["a"]([Object(r["c"])(String)],l.prototype,"title",void 0),l=s["a"]([Object(r["a"])({})],l);var c,u,m=l,h=m,p=(a("6224"),a("2877")),v=Object(p["a"])(h,c,u,!1,null,null,null);v.options.__file="DataTable.vue";var f=v.exports,y=a("8477"),b=a("3f7a"),g=a("a684");let k=class extends r["d"]{constructor(){super(...arguments),this.show_edit=!1,this.edit_type="add",this.dialog_title="编辑"}get gfq(){return g[this.name]}get has_detail(){return 2&this.curd}get has_delete(){return 1&this.curd}get has_update(){return 4&this.curd}get has_add(){return 8&this.curd}get gql_list(){return this.gfq.list.query}async onEdit(t){if(this.editFn)this.editFn(t);else{this.show_edit=!0;var e=this.$refs.form;if(t){this.edit_type="edit",this.dialog_title="编辑";var a=this.gfq.detail,i=a.query,n=a.name,s=await this.$apollo.query({query:i,variables:{id:t.id}});t=s.data;delete t[n].__typename,e.updateData(t[n])}else this.edit_type="add",this.dialog_title="添加",e.clearData()}}async onDelete(t){await this.$confirm("确定要删除吗？"),await this.$apollo.mutate({mutation:this.gfq.del.mutation,variables:{id:t}}),this.$toast("操作成功"),this.refreshTable()}async onSubmit(t){await this.$apollo.mutate({mutation:this.gfq.edit.mutation,variables:{item:t}}),this.show_edit=!1,this.$toast("保存成功"),this.refreshTable()}refreshTable(){this.$refs.table.refresh()}get fields(){const t=this.$createElement;var e=this.tableNames.map(t=>{return"string"===typeof t?{text:this.schema.properties[t].title,value:t,sortable:!1}:t});return e.push({text:"操作",sortable:!1,component:({item:e})=>{var a=[];return this.has_detail&&a.push(t("v-btn",{on:{click:()=>this.onDetailClick(e)},attrs:{small:!0,fab:!0,fla:!0,t:!0}},["查看"])),this.has_update&&a.push(t("v-btn",{attrs:{small:!0,fab:!0,flat:!0}},[t("v-icon",{on:{click:()=>this.onEdit(e)}},["edit "])])),this.has_delete&&a.push(t("v-btn",{attrs:{small:!0,color:"error",fab:!0,flat:!0}},[t("v-icon",{on:{click:()=>this.onDelete(e.id)}},["delet "])])),a}}),e}onDetailClick(t){this.detailFn?this.detailFn(t):this.$router.push({name:`${this.name}-id`,params:{id:t[this.routeKey]}})}};s["a"]([Object(r["c"])()],k.prototype,"schema",void 0),s["a"]([Object(r["c"])()],k.prototype,"uiSchema",void 0),s["a"]([Object(r["c"])(Array)],k.prototype,"tableNames",void 0),s["a"]([Object(r["c"])({type:Number,default:15})],k.prototype,"curd",void 0),s["a"]([Object(r["c"])(String)],k.prototype,"name",void 0),s["a"]([Object(r["c"])(String)],k.prototype,"title",void 0),s["a"]([Object(r["c"])({type:String,default:"id"})],k.prototype,"routeKey",void 0),s["a"]([Object(r["c"])({default:500})],k.prototype,"dialogWidth",void 0),s["a"]([Object(r["c"])(Function)],k.prototype,"editFn",void 0),s["a"]([Object(r["c"])(Function)],k.prototype,"detailFn",void 0),k=s["a"]([Object(r["a"])({components:{DataTable:f,MyForm:y["a"],MyDialog:b["a"]}})],k);var $=k,q=$,_=(a("e86d"),Object(p["a"])(q,i,n,!1,null,null,null));_.options.__file="DataTableCommon.vue";e["a"]=_.exports},"2d67":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("data-table-common",{attrs:{title:"文档列表",schema:a("7b7d"),"table-names":t.tableNames,"ui-schema":t.uiSchema,"route-key":"path",name:"apidoc","detail-fn":t.detailFn}})},n=[],s=a("9ab4"),r=a("60a3"),o=a("199d"),d=a("4758"),l=a("a684");let c=class extends r["d"]{constructor(){super(...arguments),this.uiSchema=["name",{key:"path",default:"-"},{key:"type",default:"apidoc",enum:[{value:"apidoc",text:"接口文档"},{value:"markdown",text:"markdown文档"}]}],this.tableNames=["name",{text:"路径",sortable:!1,component:this.getComponent1},{text:"类型",name:"type",component({item:t}){return"apidoc"===t.type?"接口文档":"markdown文档"}}]}detailFn(t){"apidoc"===t.type?this.$router.push({name:"apidoc-id",params:{id:t.path}}):this.$router.push({name:"apidoc-md",query:{path:t.path}})}getComponent1({item:t}){const e=this.$createElement;return[e("link-content",{attrs:{url:t.path}},[" ",t.path," "]),!Object(d["c"])(t.path)&&e("v-btn",{attrs:{icon:!0,small:!0,color:"blue--text",title:"编辑"},on:{click:()=>this.onEdit(t)}},[e("v-icon",["edit "])])]}async onEdit(t){var e=t.path;if(!e||"-"===e){let a={id:t.id};"apidoc"===t.type?a.ext="yaml":a.ext="md";let i=await this.$apollo.mutate({mutation:l["skl"].edit.mutation,variables:a}),n=i.data.editSkl;e=n}if("apidoc"===t.type)return this.$router.push({name:"apidoc-edit",query:{path:e}});this.$router.push({name:"file-edit",query:{path:e}})}};c=s["a"]([Object(r["a"])({components:{DataTableCommon:o["a"]}})],c);var u=c,m=u,h=(a("a76c"),a("2877")),p=Object(h["a"])(m,i,n,!1,null,null,null);p.options.__file="index.vue";e["default"]=p.exports},"3de0":function(t,e,a){},6224:function(t,e,a){"use strict";var i=a("1551"),n=a.n(i);n.a},"7b7d":function(t){t.exports={type:"object",properties:{name:{type:"string",title:"名字"},path:{type:"string",title:"路径"},type:{type:"string"}},required:["name","path"]}},"92ec":function(t,e,a){},9834:function(t,e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:126}};a.loc.source={body:"query($id: ID!){\n  special(id: $id) {\n    id\n    name\n    template\n    schema\n    data\n    layout\n    styles\n    scripts\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var a=t.type;"NamedType"===a.kind&&e.add(a.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){i(t,e)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){i(t,e)}),t.definitions&&t.definitions.forEach(function(t){i(t,e)})}var n={};(function(){a.definitions.forEach(function(t){if(t.name){var e=new Set;i(t,e),n[t.name.value]=e}})})(),t.exports=a},a684:function(t,e,a){"use strict";a.r(e),a.d(e,"path",function(){return s}),a.d(e,"explorer",function(){return r}),a.d(e,"svn",function(){return o}),a.d(e,"editor",function(){return d}),a.d(e,"apidoc",function(){return l}),a.d(e,"json",function(){return c}),a.d(e,"terminal",function(){return u}),a.d(e,"special",function(){return m}),a.d(e,"skl",function(){return h});var i=a("9530"),n=a.n(i),s={list:{query:n.a`query{
      paths {
        id
        path
        name
      }
    }`,name:"paths"},detail:{query:n.a`query($id: ID!){
      path(id: $id) {
        id
        path
        name
      }
    }`,vars:["id"],name:"path"},edit:{mutation:n.a`mutation($item: PathInput!){
      editPath(item: $item)
    }`,vars:["item"],name:"editPath"},del:{mutation:n.a`mutation($id: ID!){
      delPath(id: $id)
    }`,vars:["id"],name:"delPath"}},r=Object.assign({},s,{list:{query:n.a`query{
      paths(type: "explorer") {
        id
        path
        name
      }
    }`,name:"paths"}}),o=Object.assign({},s,{list:{query:n.a`query{
      paths(type: "svn") {
        id
        path
        name
      }
    }`,name:"paths"}}),d=Object.assign({},s,{list:{query:n.a`query{
      paths(type: "editor") {
        id
        path
        name
      }
    }`,name:"paths"}}),l=Object.assign({},s,{list:{query:n.a`query{
      paths(type: "apidoc markdown") {
        id
        path
        name
        type
      }
    }`,name:"paths"}}),c=Object.assign({},s,{list:{query:n.a`query{
      paths(type: "json") {
        id
        path
        name
      }
    }`,name:"paths"}}),u={list:{query:n.a`{
      terminals {
        id
        username
        host
        token
      }
    }`,name:"terminals"},edit:{mutation:n.a`mutation($item: TerminalInput!){
      editTerminal(item: $item)
    }`,vars:["item"],name:"editTerminal"},del:{mutation:n.a`mutation($id: ID!){
      delTerminal(id: $id)
    }`,vars:["id"],name:"delTerminal"},detail:{query:n.a`query($id: ID!){
      terminal(id: $id) {
        id
        username
        host
        password
      }
    }`,vars:["id"],name:"terminal"}},m={list:{query:n.a`query{
      specials {
        id
        name
      }
    }`,name:"specials"},edit:{mutation:n.a`mutation($item:SpecialInput!){
      editSpecial(item:$item)
    }`,vars:["item"],name:"editSpecial"},del:{mutation:n.a`mutation($id:ID!){
      delSpecial(id: $id)
    }`,vars:["id"],name:"delSpecial"},detail:{query:a("9834"),vars:["id"],name:"special"}},h={edit:{mutation:n.a`mutation($ext:String,$path:String,$content:String,$id:ID!){
      editSkl(ext:$ext,path:$path,content:$content,id:$id)
    }`}}},a76c:function(t,e,a){"use strict";var i=a("92ec"),n=a.n(i);n.a},e86d:function(t,e,a){"use strict";var i=a("3de0"),n=a.n(i);n.a}}]);