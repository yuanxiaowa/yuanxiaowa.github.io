(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["svn-index"],{1551:function(e,t,i){},"199d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("data-table",{ref:"table",attrs:{title:e.title,fields:e.fields,gql:e.gql_list}},[i("template",{slot:"actions"},[e.has_add?i("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:function(t){e.onEdit()}}},[i("v-icon",[e._v("add")])],1):e._e(),e.has_add?i("v-btn",{attrs:{color:"primary",small:"",icon:"",flat:""},on:{click:e.refreshTable}},[i("v-icon",[e._v("refresh")])],1):e._e()],1)],2),i("my-dialog",{attrs:{width:e.dialogWidth,persistent:"",title:e.dialog_title},model:{value:e.show_edit,callback:function(t){e.show_edit=t},expression:"show_edit"}},[i("my-form",{ref:"form",attrs:{schema:e.schema,"ui-schema":e.uiSchema,"submit-handler":e.onSubmit},on:{cancel:function(t){e.show_edit=!1}}})],1)],1)},n=[],s=i("9ab4"),r=i("60a3"),o=i("92fa"),d=i.n(o);let l=class extends r["d"]{constructor(){super(...arguments),this.items=[],this.pagination={rowsPerPage:10,page:1,descending:!1,sortBy:"",totalItems:0},this.loading=!1,this.search=""}created(){this.serverPage||this.fetchData()}refresh(){this.fetchData()}refetch(){this.serverPage&&this.fetchData()}onSearch(e){this.search=e,this.serverPage&&this.refetch()}render(){const e=arguments[0];return e("v-card",[e("v-card-title",[e("div",{class:"headline"},[this.title]),e("v-spacer"),e("v-text-field",{attrs:{value:this.search,"append-icon":"search",label:"搜索","hide-details":!0,clearable:!0,solo:!0},on:{input:this.onSearch}}),this.$slots.actions]),e("v-data-table",d()([{attrs:{headers:this.fields,items:this.items,pagination:this.pagination,loading:this.loading,search:this.search}},{on:{"update:pagination":e=>{this.pagination=e,this.refetch()}},scopedSlots:{items:t=>this.fields.map((i,a)=>e("td",{key:a},[i.component?i.component(t):t.item[i.value]]))}}]))])}async fetchData(){this.loading=!0;var e=await this.$apollo.query({query:this.gql,variables:Object.assign({search:this.search},this.pagination,this.gqlVars)}),t=e.data;let i=t[Object.keys(t)[0]];this.serverPage?(this.items=i.items,this.pagination.totalItems=i.totalItems):(this.items=i,this.pagination.totalItems=i.length),this.loading=!1}};s["a"]([Object(r["c"])(Array)],l.prototype,"fields",void 0),s["a"]([Object(r["c"])()],l.prototype,"gql",void 0),s["a"]([Object(r["c"])()],l.prototype,"gqlVars",void 0),s["a"]([Object(r["c"])({type:Boolean,default:!0})],l.prototype,"immediate",void 0),s["a"]([Object(r["c"])(Boolean)],l.prototype,"serverPage",void 0),s["a"]([Object(r["c"])(String)],l.prototype,"itemKey",void 0),s["a"]([Object(r["c"])(String)],l.prototype,"title",void 0),l=s["a"]([Object(r["a"])({})],l);var c,u,m=l,h=m,p=(i("6224"),i("2877")),v=Object(p["a"])(h,c,u,!1,null,null,null);v.options.__file="DataTable.vue";var f=v.exports,y=i("8477"),b=i("3f7a"),g=i("a684");let k=class extends r["d"]{constructor(){super(...arguments),this.show_edit=!1,this.edit_type="add",this.dialog_title="编辑"}get gfq(){return g[this.name]}get has_detail(){return 2&this.curd}get has_delete(){return 1&this.curd}get has_update(){return 4&this.curd}get has_add(){return 8&this.curd}get gql_list(){return this.gfq.list.query}async onEdit(e){if(this.editFn)this.editFn(e);else{this.show_edit=!0;var t=this.$refs.form;if(e){this.edit_type="edit",this.dialog_title="编辑";var i=this.gfq.detail,a=i.query,n=i.name,s=await this.$apollo.query({query:a,variables:{id:e.id}});e=s.data;delete e[n].__typename,t.updateData(e[n])}else this.edit_type="add",this.dialog_title="添加",t.clearData()}}async onDelete(e){await this.$confirm("确定要删除吗？"),await this.$apollo.mutate({mutation:this.gfq.del.mutation,variables:{id:e}}),this.$toast("操作成功"),this.refreshTable()}async onSubmit(e){await this.$apollo.mutate({mutation:this.gfq.edit.mutation,variables:{item:e}}),this.show_edit=!1,this.$toast("保存成功"),this.refreshTable()}refreshTable(){this.$refs.table.refresh()}get fields(){const e=this.$createElement;var t=this.tableNames.map(e=>{return"string"===typeof e?{text:this.schema.properties[e].title,value:e,sortable:!1}:e});return t.push({text:"操作",sortable:!1,component:({item:t})=>{var i=[];return this.has_detail&&i.push(e("v-btn",{on:{click:()=>this.onDetailClick(t)},attrs:{small:!0,fab:!0,fla:!0,t:!0}},["查看"])),this.has_update&&i.push(e("v-btn",{attrs:{small:!0,fab:!0,flat:!0}},[e("v-icon",{on:{click:()=>this.onEdit(t)}},["edit "])])),this.has_delete&&i.push(e("v-btn",{attrs:{small:!0,color:"error",fab:!0,flat:!0}},[e("v-icon",{on:{click:()=>this.onDelete(t.id)}},["delet "])])),i}}),t}onDetailClick(e){this.detailFn?this.detailFn(e):this.$router.push({name:`${this.name}-id`,params:{id:e[this.routeKey]}})}};s["a"]([Object(r["c"])()],k.prototype,"schema",void 0),s["a"]([Object(r["c"])()],k.prototype,"uiSchema",void 0),s["a"]([Object(r["c"])(Array)],k.prototype,"tableNames",void 0),s["a"]([Object(r["c"])({type:Number,default:15})],k.prototype,"curd",void 0),s["a"]([Object(r["c"])(String)],k.prototype,"name",void 0),s["a"]([Object(r["c"])(String)],k.prototype,"title",void 0),s["a"]([Object(r["c"])({type:String,default:"id"})],k.prototype,"routeKey",void 0),s["a"]([Object(r["c"])({default:500})],k.prototype,"dialogWidth",void 0),s["a"]([Object(r["c"])(Function)],k.prototype,"editFn",void 0),s["a"]([Object(r["c"])(Function)],k.prototype,"detailFn",void 0),k=s["a"]([Object(r["a"])({components:{DataTable:f,MyForm:y["a"],MyDialog:b["a"]}})],k);var q=k,$=q,_=(i("e86d"),Object(p["a"])($,a,n,!1,null,null,null));_.options.__file="DataTableCommon.vue";t["a"]=_.exports},"2e92":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("data-table-common",{attrs:{title:"项目列表",schema:i("7b7d"),"table-names":e.tableNames,"ui-schema":e.uiSchema,"route-key":"path",name:"svn"}})},n=[],s=i("9ab4"),r=i("60a3"),o=i("199d");let d=class extends r["d"]{constructor(){super(...arguments),this.uiSchema=["name","path",{key:"type",show:!1,default:"svn"}],this.tableNames=["name","path"]}};d=s["a"]([Object(r["a"])({components:{DataTableCommon:o["a"]}})],d);var l=d,c=l,u=(i("6c93"),i("2877")),m=Object(u["a"])(c,a,n,!1,null,null,null);m.options.__file="index.vue";t["default"]=m.exports},"3de0":function(e,t,i){},6224:function(e,t,i){"use strict";var a=i("1551"),n=i.n(a);n.a},"6c93":function(e,t,i){"use strict";var a=i("d3e6"),n=i.n(a);n.a},"7b7d":function(e){e.exports={type:"object",properties:{name:{type:"string",title:"名字"},path:{type:"string",title:"路径"},type:{type:"string"}},required:["name","path"]}},9834:function(e,t){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"special"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"template"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"schema"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layout"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scripts"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:137}};i.loc.source={body:"query($id: ID!){\r\n  special(id: $id) {\r\n    id\r\n    name\r\n    template\r\n    schema\r\n    data\r\n    layout\r\n    styles\r\n    scripts\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){a(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){a(e,t)}),e.definitions&&e.definitions.forEach(function(e){a(e,t)})}var n={};(function(){i.definitions.forEach(function(e){if(e.name){var t=new Set;a(e,t),n[e.name.value]=t}})})(),e.exports=i},a684:function(e,t,i){"use strict";i.r(t),i.d(t,"path",function(){return s}),i.d(t,"explorer",function(){return r}),i.d(t,"svn",function(){return o}),i.d(t,"editor",function(){return d}),i.d(t,"apidoc",function(){return l}),i.d(t,"json",function(){return c}),i.d(t,"terminal",function(){return u}),i.d(t,"special",function(){return m}),i.d(t,"skl",function(){return h});var a=i("9530"),n=i.n(a),s={list:{query:n.a`query{
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
    }`,vars:["id"],name:"delSpecial"},detail:{query:i("9834"),vars:["id"],name:"special"}},h={edit:{mutation:n.a`mutation($ext:String,$path:String,$content:String,$id:ID!){
      editSkl(ext:$ext,path:$path,content:$content,id:$id)
    }`}}},d3e6:function(e,t,i){},e86d:function(e,t,i){"use strict";var a=i("3de0"),n=i.n(a);n.a}}]);