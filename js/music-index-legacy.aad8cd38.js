(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["music-index"],{"2c53":function(t,e,r){},"2f34":function(t,e,r){"use strict";var n=r("2c53"),a=r.n(n);a.a},3272:function(t,e,r){"use strict";r.d(e,"a",function(){return w}),r.d(e,"b",function(){return b});var n=r("6eec"),a=r("9393"),i=r("a34a"),c=r.n(i),s=r("3040"),o=r("bc3a"),u=r.n(o),l=r("4758"),p=r("9530"),h=r.n(p),v=r("53b8");function f(){var t=Object(n["a"])(["query ($kw: String!,$type:String!, $page:Int) {\n        musicSearch(kw:$kw, type:$type,page:$page) {\n          page\n          pages\n          items\n        }\n      }"]);return f=function(){return t},t}var d={search:function(){var t=Object(s["a"])(c.a.mark(function t(e,r){var n,a,i,s;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.imjad.cn/cloudmusic/",{params:{type:"search",s:e,offset:r}});case 2:if(n=t.sent,a=n.data,200===a.code){t.next=6;break}throw new Error("加载失败...");case 6:return i=a.result.songCount,s=a.result.songs.map(function(t){return{singer:t.ar[0].name,cover:t.al.picUrl,title:t.al.name,arName:t.name,id:t.id,mv:t.mv}}),t.abrupt("return",{page:r+1,pages:Math.ceil(i/20),items:s});case 9:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),getUrl:function(t){return u.a.get("https://api.imjad.cn/cloudmusic/?type=song&br=128000&id=".concat(t)).then(function(t){var e=Object(a["a"])(t.data.data,1),r=e[0].url;if(!r)throw new Error("抱歉，该歌曲不存在");return r})},getLyric:function(t){return u.a.get("https://api.imjad.cn/cloudmusic/?type=lyric&br=128000&id=".concat(t)).then(function(t){var e=t.data;if(200!==e.code)throw new Error(e);if(e.nolyric||!e.lrc)throw new Error("无歌词");return e.lrc.lyric})},getRecoms:function(){throw new Error("暂无功能")},getHotKey:function(){throw new Error("暂无功能")},getSmartbox:function(t){throw new Error("暂无功能")},getMvUrl:function(t){return u.a.get("https://api.imjad.cn/cloudmusic/?type=mv&br=128000&id=".concat(t)).then(function(t){var e=t.data,r=e.data,n=e.code;if(200!==n)throw new Error("抱歉，没有找到该mv");return{cover:r.cover,url:r.brs[Object.keys(r.brs)[0]]}})}},y={search:function(){var t=Object(s["a"])(c.a.mark(function t(e,r,n){var a,i,s,o,u;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["a"].query({query:h()(f()),variables:{kw:e,page:r,type:n}});case 2:return a=t.sent,i=a.data.musicSearch,s=i.page,o=i.pages,u=i.items,t.abrupt("return",{page:s,pages:o,items:u});case 8:case"end":return t.stop()}},t,this)}));return function(e,r,n){return t.apply(this,arguments)}}(),getLyric:function(t){throw new Error("暂无功能")},getUrl:function(t){throw new Error("暂无功能")},getRecoms:function(){throw new Error("暂无功能")},getHotKey:function(){throw new Error("暂无功能")},getSmartbox:function(t){throw new Error("暂无功能")},getMvUrl:function(t){throw new Error("暂无功能")}},m=(function(){var t=Object(s["a"])(c.a.mark(function t(e,r){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:throw new Error("暂无功能");case 1:case"end":return t.stop()}},t,this)}))}(),function(){var t=Object(s["a"])(c.a.mark(function t(){var e,r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])("https://u.y.qq.com/cgi-bin/musicu.fcg?data={%22comm%22:{%22ct%22:24},%22recomPlaylist%22:{%22method%22:%22get_hot_recommend%22,%22param%22:{%22async%22:1,%22cmd%22:2},%22module%22:%22playlist.HotRecommendServer%22},%22playlist%22:{%22method%22:%22get_playlist_by_category%22,%22param%22:{%22id%22:8,%22curPage%22:1,%22size%22:40,%22order%22:5,%22titleid%22:8},%22module%22:%22playlist.PlayListPlazaServer%22},%22new_album%22:{%22module%22:%22music.web_album_library%22,%22method%22:%22get_album_by_tags%22,%22param%22:{%22area%22:7,%22company%22:-1,%22genre%22:-1,%22type%22:-1,%22year%22:-1,%22sort%22:2,%22get_tags%22:1,%22sin%22:0,%22num%22:40,%22click_albumid%22:0}},%22toplist%22:{%22module%22:%22music.web_toplist_svr%22,%22method%22:%22get_toplist_index%22,%22param%22:{}}}");case 2:return e=t.sent,r=e.recomPlaylist.data.v_hot,t.abrupt("return",r);case 5:case"end":return t.stop()}},t,this)}))}(),function(){var t=Object(s["a"])(c.a.mark(function t(){var e,r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])("https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?","jsonpCallback");case 2:return e=t.sent,r=e.data.hotkey,t.abrupt("return",r);case 5:case"end":return t.stop()}},t,this)}))}(),function(){var t=Object(s["a"])(c.a.mark(function t(e){var r,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])("https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?&key=".concat(encodeURIComponent(e)),"jsonpCallback");case 2:return r=t.sent,n=r.data.song.itemlist,t.abrupt("return",n);case 5:case"end":return t.stop()}},t,this)}))}(),{search:function(){var t=Object(s["a"])(c.a.mark(function t(e,r){var n,a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.apiopen.top/searchMusic",{params:{name:e}});case 2:return n=t.sent,a=n.data,i=a.result.map(function(t){return Object.assign(t,{artist:t.author,cover:t.pic,type:"",id:t.songid})}),t.abrupt("return",{page:1,pages:1,items:i});case 6:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),getUrl:function(t){return u.a.get("https://api.apiopen.top/musicDetails?id=".concat(t)).then(function(t){var e=Object(a["a"])(t.data.result.songList,1),r=e[0].songLink;if(!r)throw new Error("抱歉，该歌曲不存在");return r})},getLyric:function(){var t=Object(s["a"])(c.a.mark(function t(e){var r,n,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.apiopen.top/musicDetails?id=".concat(e)).then(function(t){var e=Object(a["a"])(t.data.result.songList,1),r=e[0].lrcLink;return r});case 2:return r=t.sent,t.next=5,u.a.get(r);case 5:return n=t.sent,i=n.data,t.abrupt("return",i);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getRecoms:function(){throw new Error("暂无功能")},getHotKey:function(){throw new Error("暂无功能")},getSmartbox:function(t){throw new Error("暂无功能")},getMvUrl:function(t){throw new Error("暂无功能")}}),g={wangyiyun:d,qqjt:m};function w(t){return g[t]||y}function b(t){return _.apply(this,arguments)}function _(){return _=Object(s["a"])(c.a.mark(function t(e){var r,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.apiopen.top/musicRankings");case 2:return r=t.sent,n=r.data,t.abrupt("return",n.result.map(function(t){return t.content=t.content.map(function(t){return Object.assign(t,{id:t.song_id})}),t}));case 5:case"end":return t.stop()}},t,this)})),_.apply(this,arguments)}},"7d65":function(t,e,r){},aa6a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("search-wrap",{attrs:{"default-type":"wangyiyun",types:t.types,"search-handler":t.searchHandler},on:{play:t.toPlay},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return r("div",{staticClass:"grey--text"},[t._v("\n    歌手："+t._s(n.singer)+"\n    "),n.arName?[t._v("\n      专辑："+t._s(n.arName)+"\n    ")]:t._e()],2)}},{key:"actions",fn:function(e){var n=e.item;return n.mv?r("v-btn",{attrs:{color:"blue"},on:{click:function(e){t.toPlayMv(n)}}},[r("v-icon",[t._v("videocam")]),t._v("\n    MV\n  ")],1):t._e()}}])},[r("div",{attrs:{slot:"other"},slot:"other"},t._l(t.recommends,function(e,n){return r("v-card",{key:n},[r("v-card-title",[r("div",{staticClass:"headline orange--text"},[t._v("\n          "+t._s(e.name)+"\n        ")])]),r("v-divider"),r("v-card-text",t._l(e.content,function(e,n){return r("v-card",{key:n,staticClass:"my-1",attrs:{flat:""}},[r("v-layout",[r("div",[r("v-img",{attrs:{src:e.pic_big,"lazy-src":"https://img.imjad.cn/images/2019/02/15/330720-140F40QG761.jpg",width:"200","aspect-ratio":1.3}})],1),r("v-flex",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v(t._s(e.title))]),r("div",{staticClass:"grey--text"},[t._v("\n                    歌手："+t._s(e.author)+"\n                    "),e.album_title?[t._v("\n                      专辑："+t._s(e.album_title)+"\n                    ")]:t._e()],2)])]),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:function(r){t.toPlay(e,"qqjt")}}},[r("v-icon",[t._v("play_circle_filled")])],1)],1)],1)],1)],1)}),1)],1)}),1)])},a=[],i=r("a34a"),c=r.n(i),s=r("3040"),o=r("c665"),u=r("dc0a"),l=r("aa9a"),p=r("d328"),h=r("11d9"),v=r("9ab4"),f=r("60a3"),d=r("3272"),y=r("df56"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(p["a"])(this,Object(h["a"])(e).apply(this,arguments)),t.types=[],t.recommends=[],t}return Object(l["a"])(e,[{key:"created",value:function(){var t=this;Object(d["b"])(this.type).then(function(e){t.recommends=e}),this.types=[{value:"wangyiyun",text:"网易云音乐"},{value:"qqjt",text:"千千静听"},{value:"qq",text:"QQ音乐"},{value:"kuwo",text:"酷我"},{value:"netease",text:"网易"},{value:"xiami",text:"虾米"},{value:"kugou",text:"酷狗"},{value:"baidu",text:"百度"},{value:"1ting",text:"一听"},{value:"migu",text:"咪咕"},{value:"lizhi",text:"荔枝"},{value:"qingting",text:"蜻蜓"},{value:"ximalaya",text:"喜马拉雅"},{value:"kg",text:"全民K歌"},{value:"5singyc",text:"5sing原创"},{value:"5singfc",text:"5sing翻唱"}]}},{key:"searchHandler",value:function(){var t=Object(s["a"])(c.a.mark(function t(e){var r,n,a;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.type,n=e.kw,a=e.page,t.abrupt("return",Object(d["a"])(r).search(n,a,r));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"toPlay",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.type;this.$router.push({name:"music-id",params:{id:t.id},query:{url:t.url,type:e}})}},{key:"toPlayMv",value:function(){var t=Object(s["a"])(c.a.mark(function t(e){var r;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["a"])(this.type).getMvUrl(e.mv);case 2:r=t.sent,this.$router.push({name:"music-mv",query:r});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"type",get:function(){return this.$route.query.type}}]),Object(u["a"])(e,t),e}(f["d"]);m=v["a"]([Object(f["a"])({components:{SearchWrap:y["a"]}})],m);var g=m,w=g,b=(r("2f34"),r("2877")),_=Object(b["a"])(w,n,a,!1,null,null,null);_.options.__file="index.vue";e["default"]=_.exports},cf5c:function(t,e,r){"use strict";var n=r("7d65"),a=r.n(n);a.a},df56:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",[r("div",[r("v-autocomplete",{attrs:{items:t.types,placeholder:"来源"},on:{change:t.onTypeChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),r("v-text-field",{attrs:{placeholder:"请输入关键字","append-icon":"search",loading:t.loading,autofocus:""},on:{"click:append":function(e){t.onSearch(!0)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onSearch(!0)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.loading?r("div",{staticClass:"text-xs-center"},[r("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1):t.keyword?t.error_text?r("div",{staticClass:"text-xs-center grey--text"},[t._v("\n    "+t._s(t.error_text)+"\n    "),r("v-btn",{attrs:{small:"",color:"error",flat:""},on:{click:t.search}},[t._v("重试")])],1):r("div",[r("v-layout",[r("v-flex",[t._v("\n        搜索结果 "+t._s(0===t.contents.length?"无":"")+"\n      ")]),r("v-btn",{attrs:{icon:"",title:"刷新"},on:{click:t.search}},[r("v-icon",[t._v("refresh")])],1)],1),r("v-layout",{attrs:{wrap:""}},[r("v-slide-y-transition",{staticStyle:{display:"block",width:"100%"},attrs:{group:""}},t._l(t.contents,function(e,n){return r("v-flex",{key:n,staticClass:"my-1",attrs:{xs12:""}},[r("v-card",{attrs:{flat:""}},[r("v-layout",[r("div",[r("v-img",{attrs:{src:e.cover,"lazy-src":"https://img.imjad.cn/images/2019/02/15/330720-140F40QG761.jpg",width:"200","aspect-ratio":1.3}},[e.type?r("span",{staticClass:"blue white--text px-1"},[t._v("\n                    "+t._s(e.type)+"\n                  ")]):t._e()])],1),r("v-flex",[r("v-card-title",{attrs:{"primary-title":""}},[r("div",[r("div",{staticClass:"headline"},[t._v(t._s(e.title))]),t._t("default",null,{item:e})],2)]),r("v-card-actions",[r("v-btn",{attrs:{color:"primary"},on:{click:function(r){t.play(e)}}},[r("v-icon",[t._v("play_circle_filled")])],1),t._t("actions",null,{item:e})],2)],1)],1)],1)],1)}),1)],1),r("div",{staticClass:"text-xs-center"},[t.total_page>0?r("v-pagination",{attrs:{length:t.total_page},on:{input:function(e){t.onSearch(!1)}},model:{value:t.offset,callback:function(e){t.offset=e},expression:"offset"}}):t.total_page<0?r("div",[r("v-btn",{attrs:{disabled:t.offset<=1},on:{click:function(e){t.toPage(t.offset-1)}}},[t._v("上一页")]),r("v-btn",{on:{click:function(e){t.toPage(t.offset+1)}}},[t._v("下一页")])],1):t._e()],1)],1):t._t("other")],2)},a=[],i=r("a34a"),c=r.n(i),s=r("3040"),o=r("c665"),u=r("dc0a"),l=r("aa9a"),p=r("d328"),h=r("11d9"),v=r("9ab4"),f=r("60a3"),d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(p["a"])(this,Object(h["a"])(e).apply(this,arguments)),t.contents=[],t.keyword="",t.type="",t.offset=1,t.limit=20,t.loading=!1,t.total_page=0,t.error_text="",t}return Object(l["a"])(e,[{key:"beforeRouteUpdate",value:function(){this.syncParams(),this.keyword&&this.search()}},{key:"syncParams",value:function(){var t=this.$route.query;this.keyword=t.keyword,this.limit=Number(t.limit)||20,this.offset=Number(t.offset)||1,this.type=t.type||this.defaultType}},{key:"onTypeChange",value:function(){this.keyword&&this.onSearch(!0)}},{key:"onSearch",value:function(t){t&&(this.offset=1),this.$router.push({name:this.$route.name,query:{keyword:this.keyword,offset:String(this.offset),limit:String(this.limit),type:this.type}})}},{key:"search",value:function(){var t=Object(s["a"])(c.a.mark(function t(){var e,r,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.contents=[],t.prev=2,t.next=5,this.searchHandler({kw:this.keyword,page:this.offset-1,type:this.type});case 5:e=t.sent,r=e.pages,n=e.items,this.total_page=r,this.contents=n.map(function(t){return t.collapsed=!0,t}),this.error_text="",t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),this.error_text=t.t0.message;case 16:this.loading=!1;case 17:case"end":return t.stop()}},t,this,[[2,13]])}));return function(){return t.apply(this,arguments)}}()},{key:"play",value:function(t){}},{key:"toPage",value:function(t){this.offset=t,this.onSearch(!1)}}]),Object(u["a"])(e,t),e}(f["d"]);v["a"]([Object(f["c"])()],d.prototype,"types",void 0),v["a"]([Object(f["c"])(Function)],d.prototype,"searchHandler",void 0),v["a"]([Object(f["c"])()],d.prototype,"defaultType",void 0),v["a"]([Object(f["e"])("$route",{immediate:!0})],d.prototype,"beforeRouteUpdate",null),v["a"]([Object(f["b"])()],d.prototype,"play",null),d=v["a"]([Object(f["a"])({})],d);var y=d,m=y,g=(r("cf5c"),r("2877")),w=Object(g["a"])(m,n,a,!1,null,null,null);w.options.__file="SearchWrap.vue";e["a"]=w.exports}}]);