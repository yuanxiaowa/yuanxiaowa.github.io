(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["terminal-index"],{"199d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("data-table",{ref:"table",attrs:{title:t.title,fields:t.fields,gql:t.gql_list}},[i("template",{slot:"actions"},[t.has_add?i("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:function(e){return t.onEdit()}}},[i("v-icon",[t._v("add")])],1):t._e(),t.has_add?i("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:t.refreshTable}},[i("v-icon",[t._v("refresh")])],1):t._e()],1)],2),i("my-dialog",{attrs:{width:t.dialogWidth,persistent:"",title:t.dialog_title},model:{value:t.show_edit,callback:function(e){t.show_edit=e},expression:"show_edit"}},[i("my-form",{ref:"form",attrs:{schema:t.schema,"ui-schema":t.uiSchema,"submit-handler":t.onSubmit},on:{cancel:function(e){t.show_edit=!1}}})],1)],1)},n=[],s=i("9ab4"),r=i("60a3"),o=i("2638"),d=i.n(o);let l=class extends r["d"]{constructor(){super(...arguments),this.items=[],this.pagination={rowsPerPage:10,page:1,descending:!1,sortBy:"",totalItems:0},this.loading=!1,this.search=""}created(){this.serverPage||this.fetchData()}refresh(){this.fetchData()}refetch(){this.serverPage&&this.fetchData()}onSearch(t){this.search=t,this.serverPage&&this.refetch()}render(){const t=arguments[0];return t("v-card",[t("v-card-title",[t("div",{class:"headline"},[this.title]),t("v-spacer"),t("v-text-field",{attrs:{value:this.search,"append-icon":"search",label:"搜索","hide-details":!0,clearable:!0,solo:!0},on:{input:this.onSearch}}),this.$slots.actions]),t("v-data-table",d()([{attrs:{headers:this.fields,items:this.items,pagination:this.pagination,loading:this.loading,search:this.search}},{on:{"update:pagination":t=>{this.pagination=t,this.refetch()}},scopedSlots:{items:e=>this.fields.map((i,a)=>t("td",{key:a},[i.component?i.component(e):e.item[i.value]]))}}]))])}async fetchData(){this.loading=!0;var t=await this.$apollo.query({query:this.gql,variables:Object.assign({search:this.search},this.pagination,this.gqlVars)}),e=t.data;let i=e[Object.keys(e)[0]];this.serverPage?(this.items=i.items,this.pagination.totalItems=i.totalItems):(this.items=i,this.pagination.totalItems=i.length),this.loading=!1}};s["b"]([Object(r["c"])(Array)],l.prototype,"fields",void 0),s["b"]([Object(r["c"])()],l.prototype,"gql",void 0),s["b"]([Object(r["c"])()],l.prototype,"gqlVars",void 0),s["b"]([Object(r["c"])({type:Boolean,default:!0})],l.prototype,"immediate",void 0),s["b"]([Object(r["c"])(Boolean)],l.prototype,"serverPage",void 0),s["b"]([Object(r["c"])(String)],l.prototype,"itemKey",void 0),s["b"]([Object(r["c"])(String)],l.prototype,"title",void 0),l=s["b"]([Object(r["a"])({})],l);var c,m,u=l,h=u,p=i("2877"),v=Object(p["a"])(h,c,m,!1,null,null,null),b=v.exports,f=i("8477"),y=i("3f7a"),g=i("a684");let k=class extends r["d"]{constructor(){super(...arguments),this.show_edit=!1,this.edit_type="add",this.dialog_title="编辑"}get gfq(){return g[this.name]}get has_detail(){return 2&this.curd}get has_delete(){return 1&this.curd}get has_update(){return 4&this.curd}get has_add(){return 8&this.curd}get gql_list(){return this.gfq.list.query}async onEdit(t){if(this.editFn)this.editFn(t);else{this.show_edit=!0;var e=this.$refs.form;if(t){this.edit_type="edit",this.dialog_title="编辑";var i=this.gfq.detail,a=i.query,n=i.name,s=await this.$apollo.query({query:a,variables:{id:t.id}});t=s.data;delete t[n].__typename,e.updateData(t[n])}else this.edit_type="add",this.dialog_title="添加",e.clearData()}}async onDelete(t){await this.$confirm("确定要删除吗？"),await this.$apollo.mutate({mutation:this.gfq.del.mutation,variables:{id:t}}),this.$toast("操作成功"),this.refreshTable()}async onSubmit(t){await this.$apollo.mutate({mutation:this.gfq.edit.mutation,variables:{item:t}}),this.show_edit=!1,this.$toast("保存成功"),this.refreshTable()}refreshTable(){this.$refs.table.refresh()}get fields(){const t=this.$createElement;var e=this.tableNames.map(t=>{return"string"===typeof t?{text:this.schema.properties[t].title,value:t,sortable:!1}:t});return e.push({text:"操作",sortable:!1,component:e=>{let i=e.item;var a=[];return this.has_detail&&a.push(t("v-btn",{on:{click:()=>this.onDetailClick(i)},attrs:{small:!0,fab:!0,fla:!0,t:!0}},["查看"])),this.has_update&&a.push(t("v-btn",{attrs:{small:!0,fab:!0,flat:!0}},[t("v-icon",{on:{click:()=>this.onEdit(i)}},["edit "])])),this.has_delete&&a.push(t("v-btn",{attrs:{small:!0,color:"error",fab:!0,flat:!0}},[t("v-icon",{on:{click:()=>this.onDelete(i.id)}},["delet "])])),a}}),e}onDetailClick(t){this.detailFn?this.detailFn(t):this.$router.push({name:`${this.name}-id`,params:{id:t[this.routeKey]}})}};s["b"]([Object(r["c"])()],k.prototype,"schema",void 0),s["b"]([Object(r["c"])()],k.prototype,"uiSchema",void 0),s["b"]([Object(r["c"])(Array)],k.prototype,"tableNames",void 0),s["b"]([Object(r["c"])({type:Number,default:15})],k.prototype,"curd",void 0),s["b"]([Object(r["c"])(String)],k.prototype,"name",void 0),s["b"]([Object(r["c"])(String)],k.prototype,"title",void 0),s["b"]([Object(r["c"])({type:String,default:"id"})],k.prototype,"routeKey",void 0),s["b"]([Object(r["c"])({default:500})],k.prototype,"dialogWidth",void 0),s["b"]([Object(r["c"])(Function)],k.prototype,"editFn",void 0),s["b"]([Object(r["c"])(Function)],k.prototype,"detailFn",void 0),k=s["b"]([Object(r["a"])({components:{DataTable:b,MyForm:f["a"],MyDialog:y["a"]}})],k);var q=k,$=q,_=Object(p["a"])($,a,n,!1,null,null,null);e["a"]=_.exports},"65a1":function(t){t.exports={type:"object",properties:{host:{type:"string",title:"主机名"},username:{type:"string",title:"用户名"},password:{type:"string",title:"密码"},port:{type:"number",title:"端口号",default:22}},required:["host","username","password","port"]}},9008:function(t,e){},9834:function(t,e){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:137}};i.loc.source={body:"query($id: ID!){\r\n  special(id: $id) {\r\n    id\r\n    name\r\n    template\r\n    schema\r\n    data\r\n    layout\r\n    styles\r\n    scripts\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&e.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){a(t,e)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){a(t,e)}),t.definitions&&t.definitions.forEach(function(t){a(t,e)})}var n={};(function(){i.definitions.forEach(function(t){if(t.name){var e=new Set;a(t,e),n[t.name.value]=e}})})(),t.exports=i},a684:function(t,e,i){"use strict";i.r(e),i.d(e,"path",function(){return s}),i.d(e,"explorer",function(){return r}),i.d(e,"svn",function(){return o}),i.d(e,"editor",function(){return d}),i.d(e,"apidoc",function(){return l}),i.d(e,"json",function(){return c}),i.d(e,"terminal",function(){return m}),i.d(e,"special",function(){return u}),i.d(e,"skl",function(){return h});var a=i("9530"),n=i.n(a),s={list:{query:n.a`query{
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
    }`,name:"paths"}}),m={list:{query:n.a`{
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
    }`,vars:["id"],name:"terminal"}},u={list:{query:n.a`query{
      specials {
        id
        name
      }
    }`,name:"specials"},edit:{mutation:n.a`mutation($item:SpecialInput!){
      editSpecial(item:$item)
    }`,vars:["item"],name:"editSpecial"},del:{mutation:n.a`mutation($id:ID!){
      delSpecial(id: $id)
    }`,vars:["id"],name:"delSpecial"},detail:{query:i("9834"),vars:["id"],name:"special"}},h={edit:{mutation:n.a`mutation($ext:String,$path:String,$content:String,$id:ID!){
      editSkl(ext:$ext,path:$path,content:$content,id:$id)
    }`}}},d323:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("data-table-common",{attrs:{title:"主机列表",schema:i("65a1"),"table-names":t.tableNames,"ui-schema":t.uiSchema,"route-key":"token",name:"terminal"}})},n=[],s=i("9ab4"),r=i("60a3"),o=i("199d");let d=class extends r["d"]{constructor(){super(...arguments),this.uiSchema=["host","username",{key:"password",options:{type:"password"}},"port"],this.tableNames=["host","username"]}};d=s["b"]([Object(r["a"])({components:{DataTableCommon:o["a"]}})],d);var l=d,c=l,m=i("2877"),u=i("9008"),h=i.n(u),p=Object(m["a"])(c,a,n,!1,null,null,null);"function"===typeof h.a&&h()(p);e["default"]=p.exports}}]);