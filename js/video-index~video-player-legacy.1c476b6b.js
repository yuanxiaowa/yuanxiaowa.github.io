(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-index~video-player"],{4127:function(e,t,r){"use strict";var n=r("d233"),i=r("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,o(t)?t:[t])},l=Date.prototype.toISOString,s={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,i,a,o,u,l,d,f,p,v,y,m){var h=t;if("function"===typeof l?h=l(r,h):h instanceof Date&&(h=p(h)),null===h){if(a)return u&&!y?u(r,s.encoder,m):r;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||n.isBuffer(h)){if(u){var b=y?r:u(r,s.encoder,m);return[v(b)+"="+v(u(h,s.encoder,m))]}return[v(r)+"="+v(String(h))]}var g,w=[];if("undefined"===typeof h)return w;if(Array.isArray(l))g=l;else{var k=Object.keys(h);g=d?k.sort(d):k}for(var x=0;x<g.length;++x){var S=g[x];o&&null===h[S]||(Array.isArray(h)?c(w,e(h[S],i(r,S),i,a,o,u,l,d,f,p,v,y,m)):c(w,e(h[S],r+(f?"."+S:"["+S+"]"),i,a,o,u,l,d,f,p,v,y,m)))}return w};e.exports=function(e,t){var r=e,o=t?n.assign({},t):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var u="undefined"===typeof o.delimiter?s.delimiter:o.delimiter,l="boolean"===typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,f="boolean"===typeof o.skipNulls?o.skipNulls:s.skipNulls,p="boolean"===typeof o.encode?o.encode:s.encode,v="function"===typeof o.encoder?o.encoder:s.encoder,y="function"===typeof o.sort?o.sort:null,m="undefined"===typeof o.allowDots?s.allowDots:!!o.allowDots,h="function"===typeof o.serializeDate?o.serializeDate:s.serializeDate,b="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly,g=o.charset||s.charset;if("undefined"!==typeof o.charset&&"utf-8"!==o.charset&&"iso-8859-1"!==o.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof o.format)o.format=i["default"];else if(!Object.prototype.hasOwnProperty.call(i.formatters,o.format))throw new TypeError("Unknown format option provided.");var w,k,x=i.formatters[o.format];"function"===typeof o.filter?(k=o.filter,r=k("",r)):Array.isArray(o.filter)&&(k=o.filter,w=k);var S,N=[];if("object"!==typeof r||null===r)return"";S=o.arrayFormat in a?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var j=a[S];w||(w=Object.keys(r)),y&&w.sort(y);for(var O=0;O<w.length;++O){var A=w[O];f&&null===r[A]||c(N,d(r[A],A,j,l,f,p?v:null,k,y,m,h,x,b,g))}var P=N.join(u),D=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&(D+="iso-8859-1"===g?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),P.length>0?D+P:""}},4328:function(e,t,r){"use strict";var n=r("4127"),i=r("9e6a"),a=r("b313");e.exports={formats:a,parse:i,stringify:n}},"9e6a":function(e,t,r){"use strict";var n=r("d233"),i=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},o=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},u="utf8=%26%2310003%3B",c="utf8=%E2%9C%93",l=function(e,t){var r,l={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,f=s.split(t.delimiter,d),p=-1,v=t.charset;if(t.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&(f[r]===c?v="utf-8":f[r]===u&&(v="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)if(r!==p){var y,m,h=f[r],b=h.indexOf("]="),g=-1===b?h.indexOf("="):b+1;-1===g?(y=t.decoder(h,a.decoder,v),m=t.strictNullHandling?null:""):(y=t.decoder(h.slice(0,g),a.decoder,v),m=t.decoder(h.slice(g+1),a.decoder,v)),m&&t.interpretNumericEntities&&"iso-8859-1"===v&&(m=o(m)),i.call(l,y)?l[y]=n.combine(l[y],m):l[y]=m}return l},s=function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var a,o=e[i];if("[]"===o&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var u="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(u,10);r.parseArrays||""!==u?!isNaN(c)&&o!==u&&String(c)===u&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[],a[c]=n):a[u]=n:a={0:n}}n=a}return n},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,u=a.exec(n),c=u?n.slice(0,u.index):n,l=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}var d=0;while(null!==(u=o.exec(n))&&d<r.depth){if(d+=1,!r.plainObjects&&i.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(u[1])}return u&&l.push("["+n.slice(u.index)+"]"),s(l,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"===typeof r.depth?r.depth:a.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:a.decoder,r.allowDots="undefined"===typeof r.allowDots?a.allowDots:!!r.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,"undefined"!==typeof r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if("undefined"===typeof r.charset&&(r.charset=a.charset),""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var i="string"===typeof e?l(e,r):e,o=r.plainObjects?Object.create(null):{},u=Object.keys(i),c=0;c<u.length;++c){var s=u[c],f=d(s,i[s],r);o=n.merge(o,f,r)}return n.compact(o)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},cdf7:function(e,t,r){"use strict";var n=r("4795"),i=r.n(n),a=r("bc3a"),o=r.n(a),u=r("9530"),c=r.n(u),l=r("53b8");function s(e,t,r,n,i,a,o){try{var u=e[a](o),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,i)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)})}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}var y=function(){function e(){f(this,e),this.origin="https://www.bilibili.com"}return v(e,[{key:"search",value:function(){var e=d(i.a.mark(function e(t){var r,n,a,u,c;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.imjad.cn/bilibili/v2/",{params:{get:"search",keyword:t.kw,page:t.page}});case 2:if(r=e.sent,n=r.data,a=n.code,u=n.data,c=n.message,0===a){e.next=9;break}throw new Error(c);case 9:return e.abrupt("return",{page:u.page,pages:-1,items:u.items.archive.map(function(e){return e.url="https://www.bilibili.com/video/".concat(e.goto).concat(e.param),e})});case 10:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"info",value:function(){var e=d(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("暂无数据");case 1:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();function m(e,t,r,n,i,a,o){try{var u=e[a](o),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){m(a,n,i,o,u,"next",e)}function u(e){m(a,n,i,o,u,"throw",e)}o(void 0)})}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),e}var k=function(){function e(){b(this,e)}return w(e,[{key:"search",value:function(){var e=h(i.a.mark(function e(t){var r,n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].query({query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:void 0,variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"kw"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"page"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"videoSearch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"kw"},value:{kind:"Variable",name:{kind:"Name",value:"kw"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"Variable",name:{kind:"Name",value:"page"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"page"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"pages"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:void 0}]}}]}}],loc:{start:0,end:165,source:{body:"query ($kw: String!,$type:String!, $page:Int) {\n        videoSearch(kw:$kw, type:$type,page:$page) {\n          page\n          pages\n          items\n        }\n      }",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:t});case 2:return r=e.sent,n=r.data.videoSearch,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"info",value:function(){var e=h(i.a.mark(function e(t){var r,n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].query({query:{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:void 0,variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"url"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"video"},arguments:[{kind:"Argument",name:{kind:"Name",value:"url"},value:{kind:"Variable",name:{kind:"Name",value:"url"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"title"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"type"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"cover"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"url"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"desc"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"rate"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"series"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"nodirect"},arguments:[],directives:[],selectionSet:void 0}]}}]}}],loc:{start:0,end:194,source:{body:"query ($url: String!) {\n        video(url:$url) {\n          title\n          type\n          cover\n          url\n          desc\n          rate\n          series\n          nodirect\n        }\n      }",name:"GraphQL request",locationOffset:{line:1,column:1}}}},variables:t});case 2:return r=e.sent,n=r.data.video,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),x=r("4328"),S=r.n(x);function N(e){return A(e)||O(e)||j()}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function O(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function A(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function P(e,t,r,n,i,a,o){try{var u=e[a](o),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,i)}function D(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){P(a,n,i,o,u,"next",e)}function u(e){P(a,n,i,o,u,"throw",e)}o(void 0)})}}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t,r){return t&&E(e.prototype,t),r&&E(e,r),e}var F=function(){function e(){T(this,e),this.origin="http://www.icourses.cn"}return L(e,[{key:"search",value:function(){var e=D(i.a.mark(function e(t){var r,n,a,u,c,l,s,d;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.kw,n=t.page,e.next=3,o.a.post("".concat(this.origin,"/web//sword/portal/shareSearchPage"),S.a.stringify({kw:r,eduLevel:"",priSubjectLevel:"",subSubjectLevel:"",thirdSubjectLevel:"",provinceId:"",curPage:n,pageSize:20,listType:1}));case 3:return a=e.sent,u=a.data,c=document.createElement("div"),c.innerHTML=u,l=N(c.querySelectorAll(".larPagination-i")).reverse().find(function(e){return/\d/.test(e.innerHTML)}),s=0,l&&(s=+l.innerHTML),d=N(c.querySelectorAll(".icourse-item-modulebox")).map(function(e){var t=e.querySelector(".icourse-desc-title"),r=t.getAttribute("href"),n=t.innerText,i=e.querySelector("img").getAttribute("src"),a=e.querySelectorAll(".icourse-desc-school"),o=a[1].innerText.trim(),u=a[0].innerText.trim();return{title:n,url:r,cover:i,desc:o,type:u}}),e.abrupt("return",{page:n,pages:s,items:d});case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"info",value:function(){var e=D(i.a.mark(function e(t){var r,n,a,u,c,l,s,d,f,p,v,y,m,h,b,g;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.url.match(/courseId=(\w+)/)[1],e.next=3,o.a.get("".concat(this.origin,"/web/sword/portal/shareChapter?cid=").concat(r));case 3:return n=e.sent,a=n.data,u=document.createElement("div"),u.innerHTML=a,c="",l="",d=N(u.querySelector("#chapters").children).map(function(){var e=D(i.a.mark(function e(t,r){var n,a,o,u,c,l;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.dataset.id,a=t.querySelector(".chapter-title-text"),o=a.innerText,c=t.querySelectorAll(".chapter-body-content-text"),!(c.length>0)){e.next=9;break}return l=N(c).slice(1).map(function(){var e=D(i.a.mark(function e(t,r){var n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dataset.secid,e.abrupt("return",{title:t.innerText.trim(),id:n,more:!0,items:null});case 2:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),e.next=8,Promise.all(l);case 8:u=e.sent;case 9:return e.abrupt("return",{id:n,title:o,items:u,more:c.length>0});case 10:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()),e.next=12,Promise.all(d);case 12:if(f=e.sent,p={title:l,url:s,series:{more:!0,title:c,items:f}},y=0,t.arg){for(m=t.arg.split("-"),h=f,b=0;b<m.length-1;b++)v=h[m[b]],h=v.items;y=m[m.length-1]}else{v=f[0];while(v.items)v=v.items[0]}return e.next=18,this.getDir(v.id);case 18:return g=e.sent,v.items=g,p.url=g[y].url,p.title=g[y].title,e.abrupt("return",p);case 23:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getDir",value:function(){var e=D(i.a.mark(function e(t){var r,n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(this.origin,"/web//sword/portal/getRess"),{params:{sectionId:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.model.listRes.filter(function(e){return e.video}).map(function(e){return{title:e.title,url:e.fullResUrl}}));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();function q(){var e=V(["\n        query {\n          videoSites {\n            text\n            value\n            indirect\n          }\n        }\n      "]);return q=function(){return e},e}function V(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function C(e,t,r,n,i,a,o){try{var u=e[a](o),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,i)}function H(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function o(e){C(a,n,i,o,u,"next",e)}function u(e){C(a,n,i,o,u,"throw",e)}o(void 0)})}}r.d(t,"a",function(){return z}),r.d(t,"c",function(){return B}),r.d(t,"b",function(){return U}),r.d(t,"d",function(){return G});var R=new y,I=new k,$=new F,Q={bilibili:R,icourses:$};function z(e){return Q[e]||I}function B(e){return e.startsWith(R.origin)?R:e.startsWith($.origin)?$:I}function U(e){return M.apply(this,arguments)}function M(){return M=H(i.a.mark(function e(t){var r,n,a,u;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.apiopen.top/todayVideo");case 2:return r=e.sent,n=r.data,u=[],n.result.forEach(function(e){var t=e.data;"textCard"!==e.type?(t=t.content.data,t.playUrl&&a.items.push({title:t.title,cover:t.cover.detail,desc:t.description,url:t.playUrl})):a&&a.title===t.text||(a={title:t.text,items:[]},u.push(a))}),e.abrupt("return",u.filter(function(e){return e.items.length>0}));case 7:case"end":return e.stop()}},e)})),M.apply(this,arguments)}function G(){return J.apply(this,arguments)}function J(){return J=H(i.a.mark(function e(){var t,r;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].query({fetchPolicy:"cache-first",query:c()(q())});case 2:return t=e.sent,r=t.data.videoSites,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)})),J.apply(this,arguments)}},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(Array.isArray(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},o=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},u=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=o(t,i)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"===typeof t[a]?t[a]=e(t[a],r,i):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var o=r[a];return n.call(t,a)?t[a]=e(t[a],o,i):t[a]=o,t},a)},c=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},l=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(i){return n}},s=function(e,t,r){if(0===e.length)return e;var n="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var a="",o=0;o<n.length;++o){var u=n.charCodeAt(o);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122?a+=n.charAt(o):u<128?a+=i[u]:u<2048?a+=i[192|u>>6]+i[128|63&u]:u<55296||u>=57344?a+=i[224|u>>12]+i[128|u>>6&63]+i[128|63&u]:(o+=1,u=65536+((1023&u)<<10|1023&n.charCodeAt(o)),a+=i[240|u>>18]+i[128|u>>12&63]+i[128|u>>6&63]+i[128|63&u])}return a},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],o=i.obj[i.prop],u=Object.keys(o),c=0;c<u.length;++c){var l=u[c],s=o[l];"object"===typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:o,prop:l}),r.push(s))}return a(t),e},f=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},v=function(e,t){return[].concat(e,t)};e.exports={arrayToObject:o,assign:c,combine:v,compact:d,decode:l,encode:s,isBuffer:p,isRegExp:f,merge:u}}}]);