(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-player"],{"55f4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"con",staticClass:"video-wrap"},[e.direct?r("iframe",{attrs:{width:"100%",height:e.height,src:e.url,frameborder:"0",allowfullscreen:""}}):!e.loading&&e.info&&e.info.url?[e.error_text?r("div",{staticClass:"text-xs-center"},[e._v("\n      出错了\n      "),r("v-btn",{attrs:{color:"red--text"},on:{click:e.reload}},[e._v("重试")])],1):e.independent?r("iframe",{attrs:{width:"100%",height:e.height,src:e.info.url,frameborder:"0",allowfullscreen:""}}):r("video-player",{attrs:{src:e.info.url},on:{error:e.onError}})]:e._e(),r("div",{staticClass:"ma-2"},[e.direct?r("v-select",{attrs:{items:e.items,dense:""},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}}):e._e(),e.loading?r("div",[r("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}),e._v("\n      正在获取数据...\n    ")],1):e.info?r("div",[r("v-layout",[r("h3",[e._v(e._s(e.info.title))]),r("v-spacer"),e.play_url?r("a",{attrs:{href:e.play_url,target:"_blank"}},[e._v("到源网站播放")]):e._e()],1),r("div",{staticClass:"gray--text",domProps:{innerHTML:e._s(e.info.desc)}}),e.info.series?r("div",{staticClass:"mt-2"},[r("b",[e._v(e._s(e.info.series.title)+"剧集列表：")]),e.info.series.more?r("v-tabs",{attrs:{dark:"","slider-color":"yellow"},on:{change:function(t){return e.loadMore(e.info.series.items[t])}}},[e._l(e.info.series.items,function(t){return r("v-tab",{key:t.id,attrs:{ripple:""}},[e._v("\n            "+e._s(t.title)+"\n          ")])}),e._l(e.info.series.items,function(t,n){return r("v-tab-item",{key:t.id},[t.more?r("v-expansion-panel",{on:{input:function(r){return e.loadMore(t.items[r])}}},e._l(t.items,function(t,i){return r("v-expansion-panel-content",{key:t.id,scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[e._v(e._s(t.title))])]},proxy:!0}],null,!0)},[t.items?r("v-list",e._l(t.items,function(t,o){return r("v-list-tile",{key:o,on:{click:function(r){return e.play(t,[n,i,o])}}},[r("v-list-tile-content",[e._v(e._s(t.title))])],1)}),1):r("v-progress-circular",{staticClass:"ma-3",attrs:{indeterminate:"",color:"primary"}})],1)}),1):[t.items?r("v-list",e._l(t.items,function(t,i){return r("v-list-tile",{key:i,on:{click:function(r){return e.play(t,[n,i])}}},[r("v-list-tile-content",[e._v(e._s(t.title))])],1)}),1):r("v-progress-circular",{staticClass:"ma-3",attrs:{indeterminate:"",color:"primary"}})]],2)})],2):r("div",e._l(e.info.series.items,function(t,n){return r("v-btn",{key:n,attrs:{color:t.url===e.play_url?"primary--text":void 0,to:{query:{url:t.url,direct:String(e.direct)}}}},[e._v(e._s(t.title))])}),1)],1):e._e()],1):e._e()],1)],2)},i=[],o=r("4795"),u=r.n(o),s=r("9ab4"),a=r("60a3"),l=r("cdf7"),c=r("5912"),f=r("9530"),p=r.n(f),d=r("4bb5");function y(e){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(){var e=h(["\n          query {\n            videoResolvers {\n              id\n              text\n              value\n            }\n          }\n        "]);return v=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e,t,r,n,i,o,u){try{var s=e[o](u),a=s.value}catch(l){return void r(l)}s.done?t(a):Promise.resolve(a).then(n,i)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function u(e){b(o,n,i,u,s,"next",e)}function s(e){b(o,n,i,u,s,"throw",e)}u(void 0)})}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}function k(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}var P=Object(d["e"])("music"),$=function(e){function t(){var e;return _(this,t),e=k(this,j(t).apply(this,arguments)),e.items=[],e.source="http://jqaaa.com/jx.php",e.info=null,e.loading=!1,e.error_text="",e.play_url="",e.direct=!0,e.tindex=0,e.height="300px",e.independent=!1,e}return O(t,e),w(t,[{key:"created",value:function(){var e=m(u.a.mark(function e(){var t,r;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$route.query.type){e.next=6;break}return e.next=3,this.$apollo.query({query:p()(v())});case 3:t=e.sent,r=t.data.videoResolvers,this.items=r;case 6:this.setPlaying(!1);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"beforeRouteUpdate",value:function(){var e=this;if(this.direct="true"===String(this.$route.query.direct),this.$route.query.video_only)this.info={url:this.$route.query.url};else{var t=this.$route.query.arg;this.info&&t||(this.loading=!0,this.play_url=this.$route.query.url,Object(l["c"])(this.play_url).info({url:this.play_url,arg:t}).then(function(t){e.info=t,e.independent=!!t.independent,t.nodirect&&(e.play_url=t.url),e.error_text=""}).finally(function(){e.loading=!1}))}}},{key:"mounted",value:function(){this.height=3*this.$refs.con.offsetWidth/4+"px"}},{key:"onError",value:function(e){}},{key:"reload",value:function(){location.reload()}},{key:"loadMore",value:function(){var e=m(u.a.mark(function e(t){return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.items){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(l["c"])(this.play_url).getDir(t.id);case 4:t.items=e.sent;case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"play",value:function(e,t){this.info.url=e.url,this.info.title=e.title,this.$router.push({query:Object.assign({},this.$route.query,{arg:t.join("-")})})}},{key:"url",get:function(){return"".concat(this.source,"?url=").concat(encodeURIComponent(this.play_url))}}]),t}(a["d"]);s["b"]([P.Mutation],$.prototype,"setPlaying",void 0),s["b"]([Object(a["e"])("$route",{immediate:!0})],$.prototype,"beforeRouteUpdate",null),$=s["b"]([Object(a["a"])({components:{VideoPlayer:c["a"]}})],$);var C=$,S=C,E=(r("a97b"),r("2877")),R=r("724d"),M=r.n(R),T=Object(E["a"])(S,n,i,!1,null,null,null);"function"===typeof M.a&&M()(T);t["default"]=T.exports},"724d":function(e,t){},9035:function(e,t,r){},a97b:function(e,t,r){"use strict";var n=r("9035"),i=r.n(n);i.a}}]);