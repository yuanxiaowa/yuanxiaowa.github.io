(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editor-id"],{7400:function(e,t,n){"use strict";var i=n("a954"),a=n.n(i);a.a},"9aa0":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticStyle:{"align-items":"stretch"},attrs:{"fill-height":"","align-start":""}},[n("file-tree",{style:{flex:"0 0 "+e.w+"px"},attrs:{path:e.$route.params.id,value:e.selectedFile},on:{input:e.onSelect}}),n("div",{staticClass:"vline",on:{mousedown:e.onMousedown}}),n("v-flex",[n("v-layout",{attrs:{"fill-height":"",column:""}},[n("v-toolbar",{attrs:{flat:""}},[n("div",{staticClass:"blue--text"},[e._v(e._s(e.selectedFile)+"\n          "),e.loading?n("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:14,width:1}}):e._e()],1)]),"text"===e.type?n("code-editor",{ref:"editor",staticClass:"flex",attrs:{filename:e.selectedFile},on:{save:e.saveFile},model:{value:e.contents,callback:function(t){e.contents=t},expression:"contents"}}):n("div",{staticClass:"pa-3"},["image"===e.type?n("img",{attrs:{src:e.filePath}}):"video"===e.type?n("video",{attrs:{src:e.filePath}}):"audio"===e.type?n("audio",{attrs:{src:e.filePath}}):e._e(),n("p",[n("a",{attrs:{href:e.filePath}},[e._v(e._s(e.selectedFile))])])])],1)],1)],1)},a=[],s=n("a34a"),o=n.n(s),r=n("3040"),l=n("c665"),c=n("dc0a"),u=n("aa9a"),d=n("d328"),v=n("11d9"),f=n("9ab4"),m=n("60a3"),p=n("f16a"),h=n.n(p),k=n("864f"),b=n("4758"),y=["jpg","jpeg","png","gif","ico","svg","webp"],g=["wma","mp3","mdi"],x=["mp4","3gp","ogg","wav"],w=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(d["a"])(this,Object(v["a"])(t).apply(this,arguments)),e.selectedFile="",e.contents="",e.loading=!1,e.type="",e.startX=0,e.startW=0,e.w=300,e.flag=!1,e}return Object(u["a"])(t,[{key:"loadContent",value:function(){return this.$axios.get(this.filePath,{responseType:"text"}).then(function(e){return e.request.responseText})}},{key:"onSelect",value:function(){var e=Object(r["a"])(o.a.mark(function e(t){var n;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t&&t!==this.selectedFile){e.next=2;break}return e.abrupt("return");case 2:if(this.loading=!0,this.selectedFile=t,!y.includes(this.extName)){e.next=8;break}this.type="image",e.next=21;break;case 8:if(!g.includes(this.extName)){e.next=12;break}this.type="audio",e.next=21;break;case 12:if(!x.includes(this.extName)){e.next=16;break}this.type="video",e.next=21;break;case 16:return this.type="text",e.next=19,this.loadContent();case 19:n=e.sent,this.contents=n;case 21:this.loading=!1;case 22:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveFile",value:function(){var e=this;this.$apollo.mutate({mutation:h.a,variables:{path:this.selectedFile,contents:this.contents},update:function(){e.$toast("保存成功~~~")}})}},{key:"onMousedown",value:function(e){var t=this;this.startX=e.clientX,this.startW=this.w;var n=function e(){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",t.onMousemove)};document.addEventListener("mouseup",n),document.addEventListener("mousemove",this.onMousemove)}},{key:"onMousemove",value:function(e){this.w=this.startW+e.clientX-this.startX}},{key:"extName",get:function(){return Object(b["b"])(this.selectedFile)}},{key:"filePath",get:function(){return Object(b["a"])(this.selectedFile)}}]),Object(c["a"])(t,e),t}(m["d"]);w=f["a"]([Object(m["a"])({components:{CodeEditor:k["a"]}})],w);var N=w,F=N,S=(n("7400"),n("2877")),j=Object(S["a"])(F,i,a,!1,null,null,null);j.options.__file="_id.vue";t["default"]=j.exports},a954:function(e,t,n){},f16a:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"path"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contents"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saveFile"},arguments:[{kind:"Argument",name:{kind:"Name",value:"path"},value:{kind:"Variable",name:{kind:"Name",value:"path"}}},{kind:"Argument",name:{kind:"Name",value:"contents"},value:{kind:"Variable",name:{kind:"Name",value:"contents"}}}],directives:[]}]}}],loc:{start:0,end:93}};n.loc.source={body:"mutation($path: String!, $contents: String!) {\n  saveFile(path: $path, contents: $contents)\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){i(e,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){i(e,t)}),e.definitions&&e.definitions.forEach(function(e){i(e,t)})}var a={};(function(){n.definitions.forEach(function(e){if(e.name){var t=new Set;i(e,t),a[e.name.value]=t}})})(),e.exports=n}}]);