(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-index"],{"007b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("search-wrap",{attrs:{"default-type":"tencent",types:t.types,"search-handler":t.searchHandler,"get-route-arg":t.getRouteArg},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[r.series?n("div",{class:r.collapsed?"video-list-collapsed":""},t._l(r.series,function(e,r){return n("v-btn",{key:r,attrs:{small:"",to:t.getRouteArg({url:e.url,type:t.type})}},[t._v(t._s(e.name))])}),1):t._e(),r.series?n("div",[n("v-btn",{attrs:{icon:""},on:{click:function(t){r.collapsed=!r.collapsed}}},[t._v(t._s(r.collapsed?"展开":"收缩"))])],1):t._e()]}}])},[n("div",{attrs:{slot:"other"},slot:"other"},t._l(t.recommends,function(e,r){return n("v-card",{key:r},[n("v-card-title",[n("div",{staticClass:"headline orange--text"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),n("v-divider"),n("v-card-text",t._l(e.items,function(e,r){return n("list-item",{key:r,staticClass:"my-1",attrs:{data:e}},[n("template",{slot:"actions"},[n("v-btn",{attrs:{color:"primary",to:e.to}},[n("v-icon",[t._v("play_circle_filled")])],1)],1)],2)}),1)],1)}),1)])},o=[],i=n("4795"),a=n.n(i),c=n("9ab4"),u=n("60a3"),s=n("df56"),l=n("af40"),p=n("cdf7");function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)})}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function m(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?g(t):e}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}var k=function(t){function e(){var t;return v(this,e),t=m(this,w(e).apply(this,arguments)),t.types=[],t.recommends=[],t}return _(e,t),b(e,[{key:"created",value:function(){var t=d(a.a.mark(function t(){var e=this;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:Object(p["b"])(this.type).then(function(t){e.recommends=t.map(function(t){return t.items.map(function(t){return Object.assign(t,{to:{name:"video-player",query:{url:t.url,video_only:!0}}})}),t})}),Object(p["d"])().then(function(t){e.types=t});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"searchHandler",value:function(t){return Object(p["a"])(this.type).search(t)}},{key:"getRouteArg",value:function(t){return{name:"video-player",query:{url:t.url,direct:!this.item_type.indirect}}}},{key:"type",get:function(){return this.$route.query.type}},{key:"item_type",get:function(){var t=this;return this.types.find(function(e){return e.value===t.type})}}]),e}(u["d"]);k=c["b"]([Object(u["a"])({components:{SearchWrap:s["a"],ListItem:l["a"]}})],k);var O=k,j=O,S=(n("fb57"),n("2877")),P=n("8f0e"),C=n.n(P),$=Object(S["a"])(j,r,o,!1,null,null,null);"function"===typeof C.a&&C()($);e["default"]=$.exports},5056:function(t,e,n){},"8f0e":function(t,e){},af40:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",t._b({attrs:{xs12:""}},"v-flex",{sm6:!t.full,md2:!t.full},!1),[n("router-link",{staticClass:"d-block",attrs:{to:t.data.to}},[n("v-img",{attrs:{src:t.data.cover||"","lazy-src":"https://img.imjad.cn/images/2019/02/15/330720-140F40QG761.jpg",width:"100%","aspect-ratio":1.3}},[t._t("img-text")],2)],1)],1),n("v-flex",t._b({attrs:{xs12:""}},"v-flex",{sm6:!t.full,md10:!t.full},!1),[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[t.data.title?n("div",{staticClass:"headline text-ellipse"},[n("router-link",{attrs:{to:t.data.to,title:t.data.title}},[t._v("\n              "+t._s(t.data.title)+"\n            ")])],1):t._e(),t.data.desc?n("div",{staticClass:"grey--text",domProps:{innerHTML:t._s(t.data.desc)}}):t._e(),t._t("default")],2)]),n("v-card-actions",[t._t("actions")],2)],1)],1)],1)},o=[],i=n("9ab4"),a=n("60a3");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}var d=function(t){function e(){return u(this,e),s(this,p(e).apply(this,arguments))}return f(e,t),e}(a["d"]);i["b"]([Object(a["c"])()],d.prototype,"data",void 0),i["b"]([Object(a["c"])()],d.prototype,"full",void 0),i["b"]([Object(a["c"])({default:200,type:Number})],d.prototype,"imgWidth",void 0),d=i["b"]([Object(a["a"])({})],d);var v=d,h=v,b=n("2877"),m=Object(b["a"])(h,r,o,!1,null,null,null);e["a"]=m.exports},cdf7:function(t,e,n){"use strict";n.d(e,"a",function(){return m}),n.d(e,"c",function(){return g}),n.d(e,"b",function(){return w}),n.d(e,"d",function(){return x});var r=n("4795"),o=n.n(r),i=n("bc3a"),a=n.n(i),c=n("9530"),u=n.n(c),s=n("53b8");function l(){var t=y(["\n        query {\n          videoSites {\n            text\n            value\n            indirect\n          }\n        }\n      "]);return l=function(){return t},t}function p(){var t=y(["query ($url: String!) {\n        video(url:$url) {\n          title\n          type\n          cover\n          url\n          desc\n          rate\n          series\n          nodirect\n        }\n      }"]);return p=function(){return t},t}function f(){var t=y(["query ($kw: String!,$type:String!, $page:Int) {\n        videoSearch(kw:$kw, type:$type,page:$page) {\n          page\n          pages\n          items\n        }\n      }"]);return f=function(){return t},t}function y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)})}}var h={search:function(){var t=v(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].query({query:u()(f()),variables:e});case 2:return n=t.sent,r=n.data.videoSearch,t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),info:function(){var t=v(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].query({query:u()(p()),variables:e});case 2:return n=t.sent,r=n.data.video,t.abrupt("return",r);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()},b={search:function(){var t=v(o.a.mark(function t(e){var n,r,i,c,u;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("https://api.imjad.cn/bilibili/v2/",{params:{get:"search",keyword:e.kw,page:e.page}});case 2:if(n=t.sent,r=n.data,i=r.code,c=r.data,u=r.message,0===i){t.next=9;break}throw new Error(u);case 9:return t.abrupt("return",{page:c.page,pages:-1,items:c.items.archive.map(function(t){return t.url="https://www.bilibili.com/video/".concat(t.goto).concat(t.param),t})});case 10:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),info:function(){var t=v(o.a.mark(function t(e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:throw new Error("暂无数据");case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()};function m(t){return"bilibili"===t?b:h}function g(t){return t.startsWith("https://www.bilibili.com")?b:h}function w(t){return _.apply(this,arguments)}function _(){return _=v(o.a.mark(function t(e){var n,r,i,c;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.a.get("https://api.apiopen.top/todayVideo");case 2:return n=t.sent,r=n.data,c=[],r.result.forEach(function(t){var e=t.data;"textCard"!==t.type?(e=e.content.data,e.playUrl&&i.items.push({title:e.title,cover:e.cover.detail,desc:e.description,url:e.playUrl})):i&&i.title===e.text||(i={title:e.text,items:[]},c.push(i))}),t.abrupt("return",c.filter(function(t){return t.items.length>0}));case 7:case"end":return t.stop()}},t)})),_.apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return k=v(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].query({fetchPolicy:"cache-first",query:u()(l())});case 2:return e=t.sent,n=e.data.videoSites,t.abrupt("return",n);case 5:case"end":return t.stop()}},t)})),k.apply(this,arguments)}},df56:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-xs":"","grid-list-md":""}},[n("v-layout",[n("div",[n("v-autocomplete",{attrs:{items:t.types,placeholder:"来源"},on:{change:t.onTypeChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),n("v-text-field",{attrs:{placeholder:"请输入关键字","append-icon":"search",loading:t.loading,autofocus:""},on:{"click:append":function(e){return t.onSearch(!0)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(!0)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t.loading?n("div",{staticClass:"text-xs-center"},[n("v-progress-circular",{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1):t.keyword?t.error_text?n("div",{staticClass:"text-xs-center grey--text"},[t._v("\n    "+t._s(t.error_text)+"\n    "),n("v-btn",{attrs:{small:"",color:"error",flat:""},on:{click:t.search}},[t._v("重试")])],1):n("div",[n("v-layout",[n("v-flex",[t._v("\n        搜索结果 "+t._s(0===t.contents.length?"无":"")+"\n      ")]),n("v-btn",{attrs:{icon:"",title:"刷新"},on:{click:t.search}},[n("v-icon",[t._v("refresh")])],1),n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:t.layout}},[n("v-icon",[t._v(t._s(t.full?"list":"grid_on"))])],1)],1),n("v-layout",[n("v-slide-y-transition",{staticStyle:{"flex-wrap":"wrap",display:"flex"},attrs:{group:""}},t._l(t.contents,function(e,r){return n("v-flex",t._b({key:r,attrs:{data:e,xs12:"","d-flex":""}},"v-flex",{sm6:t.full,md4:t.full,lg3:t.full,xl2:t.full},!1),[n("list-item",{attrs:{full:t.full,data:e}},[t.full?t._e():t._t("default",null,{item:e}),e.type?n("span",{staticClass:"blue white--text px-1",attrs:{slot:"img-text"},slot:"img-text"},[t._v("\n              "+t._s(e.type)+"\n            ")]):t._e(),n("template",{slot:"actions"},[n("v-btn",{attrs:{color:"primary",to:e.to}},[n("v-icon",[t._v("play_circle_filled")])],1),t._t("actions",null,{item:e})],2)],2)],1)}),1)],1),n("div",{staticClass:"text-xs-center"},[t.total_page>0?n("v-pagination",{attrs:{length:t.total_page},on:{input:function(e){return t.onSearch(!1)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t.total_page<0?n("div",[n("v-btn",{attrs:{disabled:t.page<=1},on:{click:function(e){return t.toPage(t.page-1)}}},[t._v("上一页")]),n("v-btn",{on:{click:function(e){return t.toPage(t.page+1)}}},[t._v("下一页")])],1):t._e()],1)],1):t._t("other")],2)},o=[],i=n("4795"),a=n.n(i),c=n("9ab4"),u=n("60a3"),s=n("af40");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,c,"next",t)}function c(t){p(i,r,o,a,c,"throw",t)}a(void 0)})}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function h(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}var _=function(t){function e(){var t;return y(this,e),t=h(this,m(e).apply(this,arguments)),t.contents=[],t.keyword="",t.type="",t.page=1,t.limit=20,t.full=!1,t.loading=!1,t.total_page=0,t.error_text="",t}return g(e,t),v(e,[{key:"beforeRouteUpdate",value:function(){this.syncParams(),this.keyword&&this.search()}},{key:"syncParams",value:function(){var t=this.$route.query;this.keyword=t.keyword,this.limit=Number(t.limit)||20,this.page=Number(t.page)||1,this.type=t.type||this.defaultType}},{key:"onTypeChange",value:function(){this.keyword&&this.onSearch(!0)}},{key:"onSearch",value:function(t){t&&(this.page=1),this.$router.push({name:this.$route.name,query:{keyword:this.keyword,page:String(this.page),limit:String(this.limit),type:this.type}})}},{key:"search",value:function(){var t=f(a.a.mark(function t(){var e,n,r,o=this;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.contents=[],t.prev=2,t.next=5,this.searchHandler({kw:this.keyword,page:this.page,type:this.type});case 5:e=t.sent,n=e.pages,r=e.items,this.total_page=n,this.contents=r.map(function(t){return t.collapsed=!0,t.to=o.getRouteArg(t),t}),this.error_text="",t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),this.error_text=t.t0.message;case 16:this.loading=!1;case 17:case"end":return t.stop()}},t,this,[[2,13]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"toPage",value:function(t){this.page=t,this.onSearch(!1)}},{key:"layout",value:function(){this.full=!this.full,this.$emit("layout",this.full)}}]),e}(u["d"]);c["b"]([Object(u["c"])()],_.prototype,"types",void 0),c["b"]([Object(u["c"])(Function)],_.prototype,"searchHandler",void 0),c["b"]([Object(u["c"])()],_.prototype,"defaultType",void 0),c["b"]([Object(u["c"])()],_.prototype,"getRouteArg",void 0),c["b"]([Object(u["e"])("$route",{immediate:!0})],_.prototype,"beforeRouteUpdate",null),_=c["b"]([Object(u["a"])({components:{ListItem:s["a"]}})],_);var x=_,k=x,O=n("2877"),j=Object(O["a"])(k,r,o,!1,null,null,null);e["a"]=j.exports},fb57:function(t,e,n){"use strict";var r=n("5056"),o=n.n(r);o.a}}]);