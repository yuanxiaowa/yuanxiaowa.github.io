(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["music-id"],{"0285":function(t,e,r){},3272:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r("bc3a"),i=r.n(n),u=(r("4758"),r("9530")),o=r.n(u),a=r("53b8");const s={async search(t,e){var r=await i.a.get("https://api.imjad.cn/cloudmusic/",{params:{type:"search",s:t,offset:e}}),n=r.data;if(200!==n.code)throw new Error("加载失败...");var u=n.result.songCount,o=n.result.songs.map(t=>({singer:t.ar[0].name,cover:t.al.picUrl,title:t.al.name,arName:t.name,id:t.id,mv:t.mv}));return{page:e+1,pages:Math.ceil(u/20),items:o}},getUrl(t){return i.a.get(`https://api.imjad.cn/cloudmusic/?type=song&br=128000&id=${t}`).then(({data:{data:[{url:t}]}})=>{if(!t)throw new Error("抱歉，该歌曲不存在");return t})},getLyric(t){return i.a.get(`https://api.imjad.cn/cloudmusic/?type=lyric&br=128000&id=${t}`).then(({data:t})=>{if(200!==t.code)throw new Error(t);if(t.nolyric||!t.lrc)throw new Error("无歌词");return t.lrc.lyric})},getRecoms(){throw new Error("暂无功能")},getHotKey(){throw new Error("暂无功能")},getSmartbox(t){throw new Error("暂无功能")},getMvUrl(t){return i.a.get(`https://api.imjad.cn/cloudmusic/?type=mv&br=128000&id=${t}`).then(({data:{data:t,code:e}})=>{if(200!==e)throw new Error("抱歉，没有找到该mv");return{cover:t.cover,url:t.brs[Object.keys(t.brs)[0]]}})}},c={async search(t,e,r){var n=await a["a"].query({query:o.a`query ($kw: String!,$type:String!, $page:Int) {
        musicSearch(kw:$kw, type:$type,page:$page) {
          page
          pages
          items
        }
      }`,variables:{kw:t,page:e,type:r}}),i=n.data.musicSearch,u=i.page,s=i.pages,c=i.items;return{page:u,pages:s,items:c}},getLyric(t){throw new Error("暂无功能")},getUrl(t){throw new Error("暂无功能")},getRecoms(){throw new Error("暂无功能")},getHotKey(){throw new Error("暂无功能")},getSmartbox(t){throw new Error("暂无功能")},getMvUrl(t){throw new Error("暂无功能")}};function l(t){return"wangyiyun"===t?s:c}},"3c75":function(t,e,r){(function(e,r){t.exports=r()})(0,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=20)}([function(t,e,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(11),i=r(16),u=r(18),o=Object.defineProperty;e.f=r(0)?Object.defineProperty:function(t,e,r){if(n(t),e=u(e,!0),n(r),i)try{return o(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";e.__esModule=!0;var n=r(8),i=u(n);function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},function(t,e,r){t.exports={default:r(9),__esModule:!0}},function(t,e,r){r(19);var n=r(2).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(1),i=r(4).document,u=n(i)&&n(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,r){var n=r(4),i=r(2),u=r(12),o=r(15),a="prototype",s=function(t,e,r){var c,l,f,p=t&s.F,h=t&s.G,y=t&s.S,d=t&s.P,v=t&s.B,m=t&s.W,w=h?i:i[e]||(i[e]={}),g=w[a],_=h?n:y?n[e]:(n[e]||{})[a];for(c in h&&(r=e),r)l=!p&&_&&void 0!==_[c],l&&c in w||(f=l?_[c]:r[c],w[c]=h&&"function"!=typeof _[c]?r[c]:v&&l?u(f,n):m&&_[c]==f?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[a]=t[a],e}(f):d&&"function"==typeof f?u(Function.call,f):f,d&&((w.virtual||(w.virtual={}))[c]=f,t&s.R&&g&&!g[c]&&o(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(5),i=r(17);t.exports=r(0)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){t.exports=!r(0)&&!r(3)(function(){return 7!=Object.defineProperty(r(13)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(1);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(14);n(n.S+n.F*!r(0),"Object",{defineProperty:r(5).f})},function(t,e,r){var n,i,u;(function(o,a){i=[t,e,r(6),r(7)],n=a,u="function"===typeof n?n.apply(e,i):n,void 0===u||(t.exports=u)})(0,function(t,e,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(r),u=o(n);function o(t){return t&&t.__esModule?t:{default:t}}var a=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g,s=0,c=1,l={title:"ti",artist:"ar",album:"al",offset:"offset",by:"by"};function f(){}var p=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;(0,i.default)(this,t),this.lrc=e,this.tags={},this.lines=[],this.handler=r,this.state=s,this.curLine=0,this._init()}return(0,u.default)(t,[{key:"_init",value:function(){this._initTag(),this._initLines()}},{key:"_initTag",value:function(){for(var t in l){var e=this.lrc.match(new RegExp("\\["+l[t]+":([^\\]]*)]","i"));this.tags[t]=e&&e[1]||""}}},{key:"_initLines",value:function(){for(var t=this.lrc.split("\n"),e=0;e<t.length;e++){var r=t[e],n=a.exec(r);if(n){var i=r.replace(a,"").trim();i&&this.lines.push({time:60*n[1]*1e3+1e3*n[2]+10*(n[3]||0),txt:i})}}this.lines.sort(function(t,e){return t.time-e.time})}},{key:"_findCurNum",value:function(t){for(var e=0;e<this.lines.length;e++)if(t<=this.lines[e].time)return e;return this.lines.length-1}},{key:"_callHandler",value:function(t){t<0||this.handler({txt:this.lines[t].txt,lineNum:t})}},{key:"_playRest",value:function(){var t=this,e=this.lines[this.curNum],r=e.time-(+new Date-this.startStamp);this.timer=setTimeout(function(){t._callHandler(t.curNum++),t.curNum<t.lines.length&&t.state===c&&t._playRest()},r)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];this.lines.length&&(this.state=c,this.curNum=this._findCurNum(t),this.startStamp=+new Date-t,e||this._callHandler(this.curNum-1),this.curNum<this.lines.length&&(clearTimeout(this.timer),this._playRest()))}},{key:"togglePlay",value:function(){var t=+new Date;this.state===c?(this.stop(),this.pauseStamp=t):(this.state=c,this.play((this.pauseStamp||t)-(this.startStamp||t),!0),this.pauseStamp=0)}},{key:"stop",value:function(){this.state=s,clearTimeout(this.timer)}},{key:"seek",value:function(t){this.play(t)}}]),t}();e.default=p,t.exports=e["default"]})}])})},5342:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-xs-center"},[r("audio",{ref:"audio",attrs:{src:t.url,controls:"",autoplay:""},on:{timeupdate:t.onUpdate,play:t.onPlay,pause:t.onPause}}),r("div",t._l(t.lyric_lines,function(e,n){return r("div",{key:n,class:n===t.current_line?"primary--text":"",domProps:{innerHTML:t._s(e)}})}),0)])},i=[],u=r("9ab4"),o=r("60a3"),a=r("3c75"),s=r.n(a),c=r("3272");let l=class extends o["d"]{constructor(){super(...arguments),this.url="",this.lyric_lines=[],this.current_line=0}async created(){var t=this.$route.params.id,e=this.$route.query,r=e.url,n=e.type;if(r)this.url=r;else{let e=Object(c["a"])(n);e.getUrl(t).then(t=>{this.url=t,this.$refs.audio.play()},this.$toast),e.getLyric(t).then(t=>{this.lyricer=new s.a(t,this.onLyricUpdate),this.lyric_lines=this.lyricer.lines.map(({txt:t})=>t||"&nbsp;")})}}onUpdate(){var t=this.$refs.audio;this.lyricer&&this.lyricer.seek(1e3*t.currentTime)}onLyricUpdate({txt:t,lineNum:e}){this.current_line=e}onPlay(){this.lyricer&&this.lyricer.play()}onPause(){this.lyricer&&this.lyricer.stop()}};l=u["a"]([Object(o["a"])({})],l);var f=l,p=f,h=(r("cff9"),r("2877")),y=Object(h["a"])(p,n,i,!1,null,null,null);y.options.__file="_id.vue";e["default"]=y.exports},cff9:function(t,e,r){"use strict";var n=r("0285"),i=r.n(n);i.a}}]);