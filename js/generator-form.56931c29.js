(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generator-form"],{"028b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.exportFile}},[t._t("default")],2)},s=[],a=n("9ab4"),i=n("60a3");let o=class extends i["d"]{exportFile(){var t=URL.createObjectURL(new Blob([this.value()],{type:this.type})),e=document.createElement("a");e.href=t,e.download=this.filename,e.click(),URL.revokeObjectURL(t)}};a["b"]([Object(i["c"])(Function)],o.prototype,"value",void 0),a["b"]([Object(i["c"])({type:String,default:"application/json"})],o.prototype,"type",void 0),a["b"]([Object(i["c"])(String)],o.prototype,"filename",void 0),o=a["b"]([Object(i["a"])({})],o);var l=o,c=l,m=n("2877"),u=Object(m["a"])(c,r,s,!1,null,null,null);e["a"]=u.exports},"12d2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("column-layout",{attrs:{width:"50%"}},[n("div",{staticClass:"mx-1",attrs:{slot:"top"},slot:"top"},[n("v-layout",[n("import-file",{on:{input:function(e){t.model=e}}},[n("v-btn",{attrs:{small:""}},[t._v("导入")])],1),n("v-btn",{attrs:{small:""},on:{click:t.loadDemo}},[t._v("加载样例")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",small:""},on:{click:t.updateResult}},[t._v("生成")]),n("export-file",{attrs:{value:t.getResult,type:"text/html",filename:"表单"}},[n("v-btn",{attrs:{small:""}},[t._v("导出")])],1),"html"===t.output_format?n("v-btn",{attrs:{small:""},on:{click:t.preview}},[t._v("\n        预览\n      ")]):t._e(),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.show_dialog=!0}}},[n("v-icon",[t._v("settings")])],1)],1)],1),n("code-editor",{staticClass:"fill-height",attrs:{slot:"left",lang:"json"},slot:"left",model:{value:t.model,callback:function(e){t.model=e},expression:"model"}}),n("code-editor",{staticClass:"fill-height",attrs:{lang:"react"===t.framework?"jsx":"html"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}}),n("x-dialog",{attrs:{title:"配置"},model:{value:t.show_dialog,callback:function(e){t.show_dialog=e},expression:"show_dialog"}},[n("v-select",{attrs:{label:"框架",items:t.frameworks},model:{value:t.framework,callback:function(e){t.framework=e},expression:"framework"}}),n("v-select",{attrs:{label:"ui",items:t.uis},model:{value:t.ui,callback:function(e){t.ui=e},expression:"ui"}}),n("v-select",{attrs:{label:"生成格式",items:t.output_formats},model:{value:t.output_format,callback:function(e){t.output_format=e},expression:"output_format"}}),"html"===t.output_format?[n("v-textarea",{attrs:{label:"脚本"},model:{value:t.scripts,callback:function(e){t.scripts=e},expression:"scripts"}}),n("v-textarea",{attrs:{label:"样式"},model:{value:t.styles,callback:function(e){t.styles=e},expression:"styles"}})]:t._e()],2)],1)},s=[],a=n("9ab4"),i=n("60a3"),o=n("864f"),l=n("c35a"),c=n("028b"),m=n("b88f"),u=n("9498");let p=class extends i["d"]{constructor(){super(...arguments),this.model="",this.result="",this.ui="",this.output_format="html",this.framework="vue",this.scripts="",this.styles="",this.frameworks=Object(u["c"])(),this.output_formats=Object(u["d"])(),this.uis=[],this.show_dialog=!1}loadDemo(){this.model=JSON.stringify({type:"object",title:"个人信息",properties:{username:{title:"用户名",type:"string",messages:{required:"请输入用户名"}},password:{title:"密码",type:"string",attrs:{type:"password"}},gendar:{title:"性别",type:"string",default:"男",ui:"radios",enum:["男","女"]},birthday:{title:"生日",type:"string",format:"date"},personality:{title:"个性签名",type:"string"},experiences:{title:"工作经历",type:"array",items:{type:"object",properties:{company:{type:"string",title:"工作单位"},date:{title:"工作时间",type:"string",format:"daterange"},director:{title:"直接上属",type:"string"}}}},other:{type:"object",title:"其他",properties:{email:{type:"string",title:"邮箱",format:"email"},url:{type:"string",title:"个人网站",format:"url"}},required:["email"]}},required:["username","password","gendar"]},null,2)}get conf(){return Object(u["b"])(this.framework)}onFrameworkChange(){this.$nextTick(()=>{this.uis=this.conf.uis.map(t=>{let e=t.name;return e}),this.uis.includes(this.ui)||(this.scripts=this.conf.scripts.map(t=>`<script src="${t}"></scrip`+"t>").join("\n"),this.styles="",this.ui=this.uis[0])})}onModelChange(){clearTimeout(this.timer),this.timer=setTimeout(this.updateResult,300)}updateResult(){if(this.model)try{var t=JSON.parse(this.model);try{this.result=Object(u["a"])(t,{framework:this.framework,ui:this.ui,output_format:this.output_format,scripts:this.scripts,styles:this.styles})}catch(e){console.error(e)}}catch(e){}}getResult(){return this.result}onUiChange(t){let e=this.conf.uis.find(e=>{let n=e.name;return n===t});e&&(this.scripts+="\n"+e.scripts.map(t=>`<script src="${t}"></scrip`+"t>").join("\n"),this.styles+=e.links.map(t=>`<link rel="stylesheet" href="${t}">`).join("\n"))}preview(){var t=window.open("","_blank");t.document.write(this.result),t.document.close()}};a["b"]([Object(i["e"])("framework",{immediate:!0})],p.prototype,"onFrameworkChange",null),a["b"]([Object(i["e"])("model")],p.prototype,"onModelChange",null),a["b"]([Object(i["e"])("ui")],p.prototype,"onUiChange",null),p=a["b"]([Object(i["a"])({components:{CodeEditor:o["a"],ImportFile:l["a"],ExportFile:c["a"],ColumnLayout:m["a"]}})],p);var d=p,h=d,f=n("2877"),b=n("3afd"),g=n.n(b),v=Object(f["a"])(h,r,s,!1,null,null,null);"function"===typeof g.a&&g()(v);e["default"]=v.exports},"3afd":function(t,e){},4516:function(t,e,n){"use strict";var r=n("ab04"),s=n.n(r);s.a},9498:function(t,e,n){"use strict";var r=n("9fdd");function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){return Object.keys(t).map(e=>{var n=t[e];if(void 0!==n&&null!==n){var r='"';return"string"===typeof n&&n.indexOf('"')>-1&&(r="'"),`${e}=${r}${n}${r}`}}).filter(Boolean).join(" ")}function o(t){let e=t.name,n=t.attrs,r=t.content,s=t.schema;return s&&s.attrs&&(n=Object.assign({},n,s.attrs)),"input"===e?`<${e}${n?" "+i(n):""}>`:(Array.isArray(r)&&(r=r.join("")),`<${e}${n?" "+i(n):""}>${r||""}</${e}>`)}function l(t){let e=t.content,n=t.styles,r=t.scripts;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>表单</title>\n  ${n}\n</head>\n<body>\n  ${e}\n  ${r}\n</body>\n</html>`}class c{constructor(){this.scripts=[]}normalizeSchema(t,e){if(Object.assign(t,e),"object"===t.type||"array"===t.type){let e,n=t.required||[],r=t._path;e="object"===t.type?t.properties=t.properties||{}:t.items.properties=t.items.properties||{},Object.keys(e).forEach(s=>{var a=e[s];n.includes(s)&&(a.required=!0),this.normalizeSchema(a,{_path:this.getName(s,r&&r+("object"===t.type?"":"[]")),_path_parent:r,key:s})})}}getId(t){return t+Math.random().toString().substring(2)}getSchemaResult(t){return"number"===t.schema.type?this.parseNumber(t):"array"===t.schema.type?this.parseArray(t):"boolean"===t.schema.type?this.parseBoolean(t):"object"===t.schema.type?this.parseObject(t):this.parseString(t)}getName(t,e){return e?`${e}[${t}]`:t}getItemWrap(t,e){return o({name:"div",attrs:e,content:t})}getRules(t){return{required:t.required,max:t.max,min:t.min,pattern:t.pattern}}getExtraAttrs(t){return t.attrs||{}}getLabel(t,e){return e?"":o({name:"label",content:t.title})}parseNumber(t){let e=t.schema,n=t.ignore_title,r=t.name;return this.getItemWrap([this.getLabel(e,n),o({name:"input",attrs:s({type:"number",value:e.default,name:r},this.getRules(e),this.getExtraAttrs(e))})])}parseString(t){let e=t.schema,n=t.ignore_title,r=t.name;return this.getItemWrap([this.getLabel(e,n),o({name:"input",attrs:s({type:e.format,value:e.default,name:r},this.getRules(e),this.getExtraAttrs(e))})])}parseBoolean(t){let e=t.schema,n=t.ignore_title,r=t.name;return this.getItemWrap([this.getLabel(e,n),o({name:"input",attrs:s({type:"checkbox",checked:e.default?"checked":void 0,name:r},this.getRules(e),this.getExtraAttrs(e))})])}parseObject(t){let e=t.schema,n=t.ignore_title,r=t.name;var s=e.required||[],a=Object.keys(e.properties||{}).map(t=>{let n=e.properties[t];s.includes(t)&&(n.required=!0);let a=this.getName(t,r);return this.getSchemaResult({schema:n,name:a})}).join("");return o({name:"fieldset",attrs:this.getExtraAttrs(e),content:[!n&&e.title?o({name:"legend"}):"",a]})}parseArray(t){let e=t.schema,n=t.ignore_title,r=t.name;var a="",i="",l=this.getId("button"),c=this.getId("table"),m=this.getId("id");return Object.keys(e.items.properties||{}).forEach(t=>{var n=e.items[t];a+=o({name:"th",content:n.title}),i+=o({name:"td",content:this.getSchemaResult({schema:n,name:this.getName(t,`${r}[\${${m}}]`),ignore_title:!0})})}),a=o({name:"tr",content:[a,o({name:"th",content:"操作"})]}),i=o({name:"tr",content:[i,o({name:"td",content:o({name:"button",attrs:{type:"button",class:"j-del"},content:"删除"})})]}),this.scripts.push(`var ${m} = 0\n    var ${l} = document.getElementById('${l}')\n    var ${c} = document.getElementById('${c}')\n    ${l}.addEventListener('click', function() {\n      var tr = document.createElement('tr')\n      ${m}++\n      tr.innerHTML = \`${i}\`\n      ${c}.querySelector('tbody').appendChild(tr)\n    })\n    ${c}.addEventListener('click', function(e) {\n      if (e.target.classList.contains('j-del')) {\n        var tr = e.target.parentNode.parentNode\n        tr.parentNode.removeChild(tr)\n      }\n    })`),this.getItemWrap([o({name:"table",attrs:s({id:c,border:"1"},this.getExtraAttrs(e)),content:[n?"":o({name:"caption",content:e.title}),o({name:"thead",content:a}),o({name:"tbody"})]}),o({name:"button",attrs:{type:"button",id:l},content:"添加一行"})])}getForm(t){return o({name:"form",attrs:{action:"",method:"post"},content:t})}getAction(){return o({name:"button",content:"保存"})}parse(t){let e=t.schema,n=t.single_file,r=t.styles,s=t.scripts;var a=this.getForm(this.getSchemaResult({schema:e})+this.getAction());return this.scripts.length>0&&(s+=`<script>${this.scripts.join("\n")}</scrip`+"t>"),n?a:l({content:a,styles:r,scripts:s})}}function m(t){var e=t.map(t=>o({name:"th",content:t.text})).join("");return o({name:"table",attrs:{style:"width:100%"},content:[o({name:"thead",content:e}),o({name:"tbody"})]})}class u extends c{constructor(){super(...arguments),this.methods=[]}getName(t,e){return e?/[^\w$]/.test(t)?`${e}[${t}]`:`${e}.${t}`:t}getItemWrap(t,e){return e&&(e.dynamic_prop?(e[":prop"]=e.dynamic_prop.replace(/model\./,""),delete e.prop,delete e.dynamic_prop):e.prop&&(e.prop=e.prop.replace(/model\./,""))),o({name:"el-form-item",attrs:e,content:t})}getRules(t){var e=[],n=t.messages||{};if(t.required&&e.push({required:!0,message:n.required}),(t.minimum||t.maximum)&&e.push({min:t.minimum,max:t.maximum,message:n.range}),"array"===t.type&&e.push({type:"array",message:n.array}),t.format&&e.push({type:t.format,message:n.format}),e.length>0)return JSON.stringify(e)}getForm(t){return this.methods.push("submit() {\n      this.$refs.form.validate((v, data) => {\n        console.log(v, data)\n      })\n    }"),`<el-form ref="form" :model="model" status-icon @submit.native.prevent="submit">${t}</el-form>`}getAction(){return this.methods.push("reset() {\n      console.log(this.model)\n    }"),this.getItemWrap(o({name:"el-button",attrs:{type:"primary","native-type":"submit"},content:"提交"})+o({name:"el-button",attrs:{"@click":"reset"},content:"重置"}))}parseNumber(t){let e=t.schema,n=t.ignore_title,r=t.name,s=t.key,a=t.parent,i=t.dynamic_prop;var l,c=n?void 0:e.title;return a&&(a[s]=e.default||null),l="rate"===e.ui?o({name:"el-rate",attrs:{"v-model":r},schema:e}):o({name:"el-input-number",attrs:{"v-model":r,min:e.minimum,max:e.maximum},schema:e}),this.getItemWrap(l,{label:c,prop:r,dynamic_prop:i,":rules":this.getRules(e)})}parseString(t){let e=t.schema,n=t.ignore_title,r=t.name,s=t.key,a=t.parent,i=t.dynamic_prop;var l,c=n?void 0:e.title;return a&&(a[s]=e.default||null),l=e.enum?"radios"===e.ui?o({name:"el-radio-group",attrs:{"v-model":r},content:e.enum.map(t=>o({name:"el-radio",attrs:{label:t}})),schema:e}):o({name:"el-select",attrs:{"v-model":r},content:e.enum.map(t=>o({name:"el-option",attrs:{label:t,value:t}})),schema:e}):["date","daterange","datetime","datetimerange"].includes(e.format)?o({name:"el-date-picker",attrs:{"v-model":r,type:e.format},schema:e}):"time"===e.format?o({name:"el-time-select",attrs:{"v-model":r},schema:e}):"image"===e.format?o({name:"el-upload",attrs:{"v-model":r,drag:!0,action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card"},content:'<i class="el-icon-upload"></i>\n  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>\n  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>',schema:e}):"color"===e.format?o({name:"el-color-picker",attrs:{"v-model":r},schema:e}):o({name:"el-input",attrs:{"v-model":r},schema:e}),this.getItemWrap(l,{label:c,prop:r,dynamic_prop:i,":rules":this.getRules(e)})}parseBoolean(t){let e=t.schema,n=t.ignore_title,r=t.name,s=t.key,a=t.parent,i=t.dynamic_prop;var l,c=n?void 0:e.title;return a&&(a[s]=e.default||null),l="switch"===e.ui?o({name:"el-switch",attrs:{"v-model":r},schema:e}):o({name:"el-checkbox",attrs:{"v-model":r},schema:e}),this.getItemWrap(l,{label:c,prop:r,dynamic_prop:i,":rules":this.getRules(e)})}parseObject(t){let e=t.schema,n=t.ignore_title,r=t.name,s=t.key,a=t.parent,i=t.dynamic_prop;var l=n?void 0:e.title,c=a&&(a[s]=e.default||{}),m=Object.keys(e.properties||{}).map(t=>{var n=e.properties[t];return this.getSchemaResult({schema:n,key:t,name:this.getName(t,r),parent:c,dynamic_prop:i})}).join("");return o({name:"el-card",attrs:{class:"box-card"},content:[o({name:"div",attrs:{slot:"header"},content:l}),m]})}parseArray(t){let e=t.schema,n=t.ignore_title,r=t.name,s=t.key,a=t.parent,i=t.dynamic_prop;var l=n?void 0:e.title;a&&(a[s]=e.default||[]);var c={},m=e.items.properties||{},u=Object.keys(m).map(t=>{var e=m[t];return c[t]=e.default||null,o({name:"el-table-column",attrs:{label:e.title,prop:t},content:o({name:"template",attrs:{"slot-scope":"{row,$index}"},content:this.getSchemaResult({schema:e,name:this.getName(t,"row"),dynamic_prop:`\`${r}.\${$index}.${t}\``,key:t,ignore_title:!0})})})}),p=this.getId("delLine");this.methods.push(`${p}({$index}){\n      this.${r}.splice($index, 1)\n    }`),u.push(o({name:"el-table-column",attrs:{label:"操作"},content:o({name:"template",attrs:{"slot-scope":"scope"},content:o({name:"el-button",attrs:{"@click":`${p}(scope)`,size:"mini",type:"danger"},content:"删除"})})}));let d=this.getId("newLine");return this.methods.push(`${d}(){\n      this.${r}.push(${JSON.stringify(c)})\n    }`),this.getItemWrap([o({name:"el-table",attrs:{":data":r},content:u.join(""),schema:e}),o({name:"el-button",attrs:{"@click":d,size:"mini",type:"success"},content:"新增"})],{label:l,prop:r,dynamic_prop:i,":rules":this.getRules(e)})}parse(t){let e=t.schema,n=t.single_file,r=t.styles,s=t.scripts;var a={},i=this.getForm(this.getSchemaResult({schema:e,name:"model",key:"model",parent:a})+this.getAction());let o=`{\n      ${`data() {\n        return ${JSON.stringify(a,null,2)}\n      },\n      methods: {\n        ${this.methods.join(",\n")}\n      }`}\n    }`;return n?`<template>\n      ${i}\n      </template>\n      <script>\n      export default ${o}\n      </scrip`+"t>":(s+=`<script>var vue = new Vue(${o}).$mount('#app')</scrip`+"t>",l({content:`<div id="app">${i}</div>`,scripts:s,styles:r}))}}function p(t){var e=t.map(t=>o({name:"el-table-column",attrs:{prop:t.name,label:t.text}})).join("");return o({name:"el-table",attrs:{":data":"tableData"},content:e})}class d extends c{parseBoolean(){return'<Form.Item>\n          {getFieldDecorator(\'remember\', {\n            valuePropName: \'checked\',\n            initialValue: true,\n          })(\n            <Checkbox>Remember me</Checkbox>\n          )}\n          <a className="login-form-forgot" href="">Forgot password</a>\n          <Button type="primary" htmlType="submit" className="login-form-button">\n            Log in\n          </Button>\n          Or <a href="">register now!</a>\n        </Form.Item>'}parseString(){return"<Form.Item>\n          {getFieldDecorator('userName', {\n            rules: [{ required: true, message: 'Please input your username!' }],\n          })(\n            <Input prefix={<Icon type=\"user\" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder=\"Username\" />\n          )}\n        </Form.Item>"}getForm(t){return`<Form onSubmit={this.handleSubmit}>${t}</Form>`}}function h(t){var e=t.map(t=>({title:t.text,dataIndex:t.name,key:t.name}));return`<Table dataSource={dataSource} columns={${JSON.stringify(e)}} />`}n.d(e,"d",function(){return b}),n.d(e,"c",function(){return g}),n.d(e,"b",function(){return v}),n.d(e,"a",function(){return y}),n.d(e,"e",function(){return j});const f={vue:{uis:[{name:"element-ui",scripts:["https://cdn.bootcss.com/element-ui/2.5.4/index.js"],links:["https://cdn.bootcss.com/element-ui/2.5.4/theme-chalk/index.css"]},{name:"iview",scripts:["https://cdn.bootcss.com/iview/3.2.2-rc.1/iview.min.js"],links:["https://cdn.bootcss.com/iview/3.2.2-rc.1/styles/iview.css"]}],scripts:["https://cdn.bootcss.com/vue/2.6.4/vue.min.js"]},react:{uis:[{name:"anted",scripts:["https://cdn.bootcss.com/antd/3.13.2/antd.js"],links:["https://cdn.bootcss.com/antd/3.13.2/antd.css"]}],scripts:["https://cdn.bootcss.com/react/16.8.1/cjs/react.production.min.js","https://cdn.bootcss.com/react-dom/16.8.1/cjs/react-dom.production.min.js","https://cdn.bootcss.com/babel-standalone/6.26.0/babel.min.js"]},jquery:{uis:[{name:"bootstrap",scripts:["https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.min.js"],links:["https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css"]}],scripts:["https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js","https://cdn.bootcss.com/jquery-validate/1.19.0/jquery.validate.min.js"]},"通用":{uis:[{name:"通用",scripts:[],links:[]}],scripts:[]}};function b(){return[{value:"file",text:"单文件格式"},{value:"html",text:"html"}]}function g(){return Object.keys(f)}function v(t){return Object(r["a"])(f[t])}function y(t,e){e.framework;let n=e.ui,r=e.output_format,s=e.scripts,a=e.styles;var i;return i="element-ui"===n?new u:"antd"===n?new d:new c,i.normalizeSchema(t,{}),i.parse({schema:t,single_file:"file"===r,scripts:s,styles:a})}function j(t,e){return"element-ui"===e?p(t):"antd"===e?h(t):m(t)}},"9fdd":function(t,e,n){"use strict";function r(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}var s=n("4aa2"),a=Object(s["a"])(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}),i=a;function o(t,e,n,s){var a=function(r){var a=e.length,i=0;while(i<a){if(t===e[i])return n[i];i+=1}for(var l in e[i+1]=t,n[i+1]=r,t)r[l]=s?o(t[l],e,n,!0):t[l];return r};switch(i(t)){case"Object":return a({});case"Array":return a([]);case"Date":return new Date(t.valueOf());case"RegExp":return r(t);default:return t}}var l=Object(s["a"])(function(t){return null!=t&&"function"===typeof t.clone?t.clone():o(t,[],[],!0)});e["a"]=l},ab04:function(t,e,n){},b88f:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":"",column:""}},[n("div",[t._t("top")],2),n("v-layout",[n("div",{ref:"left",style:{flex:"0 0 "+t._w}},[t._t("left")],2),n("div",{staticClass:"vline",on:{mousedown:t.onMousedown}}),n("v-flex",[t._t("default")],2)],1)],1)},s=[],a=n("9ab4"),i=n("60a3");let o=class extends i["d"]{constructor(){super(...arguments),this.startX=0,this.startW=0,this.flag=!1,this.w=0}created(){this.w=this.width}get _w(){return"number"===typeof this.w?this.w+"px":this.w}mounted(){this.w=this.$refs.left.offsetWidth}onMousedown(t){this.startX=t.clientX,this.startW=this.w;var e=()=>{document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",this.onMousemove)};document.addEventListener("mouseup",e),document.addEventListener("mousemove",this.onMousemove)}onMousemove(t){this.w=this.startW+t.clientX-this.startX,console.log(this.w),this.$emit("change")}};a["b"]([Object(i["c"])(String)],o.prototype,"width",void 0),o=a["b"]([Object(i["a"])({})],o);var l=o,c=l,m=(n("4516"),n("2877")),u=Object(m["a"])(c,r,s,!1,null,null,null);e["a"]=u.exports},c35a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.onClick}},[n("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:t.accept},on:{change:t.onChange}}),t._t("default")],2)},s=[],a=n("9ab4"),i=n("60a3");let o=class extends i["d"]{onChange(t){var e=t.target.files,n=new FileReader;n.readAsText(e[0]),n.onload=(t=>{this.$emit("input",t.target.result)})}onClick(){this.$refs.file.click()}};a["b"]([Object(i["c"])(String)],o.prototype,"accept",void 0),o=a["b"]([Object(i["a"])({})],o);var l=o,c=l,m=n("2877"),u=Object(m["a"])(c,r,s,!1,null,null,null);e["a"]=u.exports}}]);