(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["music-index"],{3272:function(t,e,r){"use strict";r.d(e,"a",function(){return v}),r.d(e,"b",function(){return f}),r.d(e,"c",function(){return w});var a=r("bc3a"),n=r.n(a),i=(r("4758"),r("9530")),s=r.n(i),o=r("53b8");function c(t,e){return p(t)||u(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var r=[],a=!0,n=!1,i=void 0;try{for(var s,o=t[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)if(r.push(s.value),e&&r.length===e)break}catch(c){n=!0,i=c}finally{try{a||null==o["return"]||o["return"]()}finally{if(n)throw i}}return r}function p(t){if(Array.isArray(t))return t}function d(t,e){return`歌手：${t} ${e?` &nbsp; 专辑：${e}`:""}`}const y={async search(t,e){var r=await n.a.get("https://api.imjad.cn/cloudmusic/",{params:{type:"search",s:t,offset:e}}),a=r.data;if(200!==a.code)throw new Error("加载失败...");var i=a.result.songCount,s=a.result.songs.map(t=>({author:t.ar[0].name,cover:t.al.picUrl,title:t.al.name,arName:t.name,id:t.id,mv:t.mv,desc:d(t.ar[0].name,t.name)}));return{page:e+1,pages:Math.ceil(i/20),items:s}},getUrl(t){return n.a.get(`https://api.imjad.cn/cloudmusic/?type=song&br=128000&id=${t}`).then(t=>{let e=c(t.data.data,1),r=e[0].url;if(!r)throw new Error("抱歉，该歌曲不存在");return r})},getLyric(t){return n.a.get(`https://api.imjad.cn/cloudmusic/?type=lyric&br=128000&id=${t}`).then(t=>{let e=t.data;if(200!==e.code)throw new Error(e);if(e.nolyric||!e.lrc)throw new Error("无歌词");return e.lrc.lyric})},getRecoms(){throw new Error("暂无功能")},getHotKey(){throw new Error("暂无功能")},getSmartbox(t){throw new Error("暂无功能")},getMvUrl(t){return n.a.get(`https://api.imjad.cn/cloudmusic/?type=mv&br=128000&id=${t}`).then(t=>{let e=t.data,r=e.data,a=e.code;if(200!==a)throw new Error("抱歉，没有找到该mv");return{cover:r.cover,url:r.brs[Object.keys(r.brs)[0]]}})}},h={async search(t,e,r){var a=await o["a"].query({query:s.a`query ($kw: String!,$type:String!, $page:Int) {
        musicSearch(kw:$kw, type:$type,page:$page) {
          page
          pages
          items
        }
      }`,variables:{kw:t,page:e,type:r}}),n=a.data.musicSearch,i=n.page,c=n.pages,l=n.items;return{page:i,pages:c,items:l}},getLyric(t){throw new Error("暂无功能")},getUrl(t){throw new Error("暂无功能")},getRecoms(){throw new Error("暂无功能")},getHotKey(){throw new Error("暂无功能")},getSmartbox(t){throw new Error("暂无功能")},getMvUrl(t){throw new Error("暂无功能")}},m={async search(t,e){var r=await n.a.get("https://api.apiopen.top/searchMusic",{params:{name:t}}),a=r.data,i=a.result.map(t=>Object.assign(t,{cover:t.pic,type:"",id:t.songid}));return{page:1,pages:1,items:i}},getUrl(t){return n.a.get(`https://api.apiopen.top/musicDetails?id=${t}`).then(t=>{let e=c(t.data.result.songList,1),r=e[0].songLink;if(!r)throw new Error("抱歉，该歌曲不存在");return r})},async getLyric(t){var e=await n.a.get(`https://api.apiopen.top/musicDetails?id=${t}`).then(t=>{let e=c(t.data.result.songList,1),r=e[0].lrcLink;return r}),r=await n.a.get(e),a=r.data;return a},getRecoms(){throw new Error("暂无功能")},getHotKey(){throw new Error("暂无功能")},getSmartbox(t){throw new Error("暂无功能")},getMvUrl(t){throw new Error("暂无功能")}},g={wangyiyun:y,qqjt:m};function v(t){return g[t]||h}async function f(t){var e=await o["a"].query({fetchPolicy:"cache-and-network",query:s.a`
      query($type:String!) {
        musicRecomms(type:$type)
      }
    `,variables:{type:t}}),r=e.data.musicRecomms;return r}async function w(){var t=await o["a"].query({fetchPolicy:"cache-and-network",query:s.a`
      query {
        musicSites {
          text
          value
        }
      }
    `}),e=t.data.musicSites;return e}},"8cc1":function(t,e){},aa6a:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("search-wrap",{attrs:{"default-type":"wangyiyun",types:t.types,"search-handler":t.searchHandler,"get-route-arg":t.getRouteArg},scopedSlots:t._u([{key:"actions",fn:function(e){var a=e.item;return a.mv?r("v-btn",{attrs:{color:"blue"},on:{click:function(e){return t.toPlayMv(a)}}},[r("v-icon",[t._v("videocam")]),t._v("\n    MV\n  ")],1):t._e()}}],null,!0)},[r("div",{attrs:{slot:"other"},slot:"other"},t._l(t.recommends,function(e,a){return r("v-card",{key:a},[r("v-card-title",[r("div",{staticClass:"headline orange--text"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),r("v-divider"),r("v-card-text",t._l(e.items,function(e,a){return r("list-item",{key:a,staticClass:"my-1",attrs:{data:e}},[r("template",{slot:"actions"},[r("v-btn",{attrs:{color:"primary",to:e.to}},[r("v-icon",[t._v("play_circle_filled")])],1)],1)],2)}),1)],1)}),1)])},n=[],i=r("9ab4"),s=r("60a3"),o=r("3272"),c=r("df56"),l=r("af40");let u=class extends s["d"]{constructor(){super(...arguments),this.types=[{text:"网易云音乐",value:"wangyiyun"}],this.recommends=[]}created(){Object(o["b"])(this.type).then(t=>{this.recommends=t.map(t=>{return t.items=t.items.map(t=>Object.assign(t,{to:{name:"music-id",params:{id:t.id},query:{type:"wangyiyun"}}})),t})}),Object(o["c"])().then(t=>{this.types=t})}async searchHandler(t){let e=t.type,r=t.kw,a=t.page;return Object(o["a"])(e).search(r,a,e)}get type(){return this.$route.query.type||"wangyiyun"}getRouteArg(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.type;return{name:"music-id",params:{id:t.id},query:{url:t.url,type:e}}}async toPlayMv(t){var e=await Object(o["a"])(this.type).getMvUrl(t.mv);this.$router.push({name:"music-mv",query:e})}};u=i["b"]([Object(s["a"])({components:{SearchWrap:c["a"],ListItem:l["a"]}})],u);var p=u,d=p,y=r("2877"),h=r("8cc1"),m=r.n(h),g=Object(y["a"])(d,a,n,!1,null,null,null);"function"===typeof m.a&&m()(g);e["default"]=g.exports},af40:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",t._b({attrs:{xs12:""}},"v-flex",{sm6:!t.full,md2:!t.full},!1),[r("router-link",{staticClass:"d-block",attrs:{to:t.data.to}},[r("v-img",{attrs:{src:t.data.cover||"","lazy-src":"https://img.imjad.cn/images/2019/02/15/330720-140F40QG761.jpg",width:"100%","aspect-ratio":1.3}},[t._t("img-text")],2)],1)],1),r("v-flex",t._b({attrs:{xs12:""}},"v-flex",{sm6:!t.full,md10:!t.full},!1),[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[t.data.title?r("div",{staticClass:"headline text-ellipse"},[r("router-link",{attrs:{to:t.data.to,title:t.data.title}},[t._v("\n              "+t._s(t.data.title)+"\n            ")])],1):t._e(),t.data.desc?r("div",{staticClass:"grey--text",domProps:{innerHTML:t._s(t.data.desc)}}):t._e(),t._t("default")],2)]),r("v-card-actions",[t._t("actions")],2)],1)],1)],1)},n=[],i=r("9ab4"),s=r("60a3");let o=class extends s["d"]{};i["b"]([Object(s["c"])()],o.prototype,"data",void 0),i["b"]([Object(s["c"])()],o.prototype,"full",void 0),i["b"]([Object(s["c"])({default:200,type:Number})],o.prototype,"imgWidth",void 0),o=i["b"]([Object(s["a"])({})],o);var c=o,l=c,u=r("2877"),p=Object(u["a"])(l,a,n,!1,null,null,null);e["a"]=p.exports},df56:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-xs":"","grid-list-md":""}},[r("v-layout",[r("div",[r("v-autocomplete",{attrs:{items:t.types,placeholder:"来源"},on:{change:t.onTypeChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),r("v-text-field",{attrs:{placeholder:"请输入关键字","append-icon":"search",loading:t.loading,autofocus:""},on:{"click:append":function(e){return t.onSearch(!0)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(!0)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.loading?r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1):t.keyword?t.error_text?r("div",{staticClass:"text-xs-center grey--text"},[t._v("\n    "+t._s(t.error_text)+"\n    "),r("v-btn",{attrs:{small:"",color:"error",flat:""},on:{click:t.search}},[t._v("重试")])],1):r("div",[r("v-layout",[r("v-flex",[t._v("\n        搜索结果 "+t._s(0===t.contents.length?"无":"")+"\n      ")]),r("v-btn",{attrs:{icon:"",title:"刷新"},on:{click:t.search}},[r("v-icon",[t._v("refresh")])],1),r("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:t.layout}},[r("v-icon",[t._v(t._s(t.full?"list":"grid_on"))])],1)],1),r("v-layout",[r("v-slide-y-transition",{staticStyle:{"flex-wrap":"wrap",display:"flex"},attrs:{group:""}},t._l(t.contents,function(e,a){return r("v-flex",t._b({key:a,attrs:{data:e,xs12:"","d-flex":""}},"v-flex",{sm6:t.full,md4:t.full,lg3:t.full,xl2:t.full},!1),[r("list-item",{attrs:{full:t.full,data:e}},[t.full?t._e():t._t("default",null,{item:e}),e.type?r("span",{staticClass:"blue white--text px-1",attrs:{slot:"img-text"},slot:"img-text"},[t._v("\n              "+t._s(e.type)+"\n            ")]):t._e(),r("template",{slot:"actions"},[r("v-btn",{attrs:{color:"primary",to:e.to}},[r("v-icon",[t._v("play_circle_filled")])],1),t._t("actions",null,{item:e})],2)],2)],1)}),1)],1),r("div",{staticClass:"text-xs-center"},[t.total_page>0?r("v-pagination",{attrs:{length:t.total_page},on:{input:function(e){return t.onSearch(!1)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t.total_page<0?r("div",[r("v-btn",{attrs:{disabled:t.page<=1},on:{click:function(e){return t.toPage(t.page-1)}}},[t._v("上一页")]),r("v-btn",{on:{click:function(e){return t.toPage(t.page+1)}}},[t._v("下一页")])],1):t._e()],1)],1):t._t("other")],2)},n=[],i=r("9ab4"),s=r("60a3"),o=r("af40");let c=class extends s["d"]{constructor(){super(...arguments),this.contents=[],this.keyword="",this.type="",this.page=1,this.limit=20,this.full=!1,this.loading=!1,this.total_page=0,this.error_text=""}beforeRouteUpdate(){this.syncParams(),this.keyword&&this.search()}syncParams(){let t=this.$route.query;this.keyword=t.keyword,this.limit=Number(t.limit)||20,this.page=Number(t.page)||1,this.type=t.type||this.defaultType}onTypeChange(){this.keyword&&this.onSearch(!0)}onSearch(t){t&&(this.page=1),this.$router.push({name:this.$route.name,query:{keyword:this.keyword,page:String(this.page),limit:String(this.limit),type:this.type}})}async search(){this.loading=!0,this.contents=[];try{var t=await this.searchHandler({kw:this.keyword,page:this.page,type:this.type}),e=t.pages,r=t.items;this.total_page=e,this.contents=r.map(t=>{return t.collapsed=!0,t.to=this.getRouteArg(t),t}),this.error_text=""}catch(a){this.error_text=a.message}this.loading=!1}toPage(t){this.page=t,this.onSearch(!1)}layout(){this.full=!this.full,this.$emit("layout",this.full)}};i["b"]([Object(s["c"])()],c.prototype,"types",void 0),i["b"]([Object(s["c"])(Function)],c.prototype,"searchHandler",void 0),i["b"]([Object(s["c"])()],c.prototype,"defaultType",void 0),i["b"]([Object(s["c"])()],c.prototype,"getRouteArg",void 0),i["b"]([Object(s["e"])("$route",{immediate:!0})],c.prototype,"beforeRouteUpdate",null),c=i["b"]([Object(s["a"])({components:{ListItem:o["a"]}})],c);var l=c,u=l,p=r("2877"),d=Object(p["a"])(u,a,n,!1,null,null,null);e["a"]=d.exports}}]);