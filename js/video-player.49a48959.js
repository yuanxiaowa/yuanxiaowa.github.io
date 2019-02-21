(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-player"],{"55f4":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video-wrap"},[t.t_direct?!t.loading&&t.info&&t.info.url?[t.error_text?r("div",{staticClass:"text-xs-center"},[t._v("\n      出错了\n      "),r("v-btn",{attrs:{color:"red--text"},on:{click:t.reload}},[t._v("重试")])],1):t.need_dplayer?r("video-player",{attrs:{src:t.info.url},on:{error:t.onError}}):r("video",{staticStyle:{width:"100%"},attrs:{crossorigin:"anonymous",src:t.info.url,controls:""}})]:t._e():r("iframe",{attrs:{width:"100%",height:"100%",src:t.url,frameborder:"0",allowfullscreen:""}}),r("div",{staticClass:"ma-2"},[t.direct?t._e():r("v-select",{attrs:{items:t.items,dense:""},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}}),t.loading?r("div",[r("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}),t._v("\n      正在获取数据...\n    ")],1):t.info?r("div",[r("v-layout",[r("h3",[t._v(t._s(t.info.title))]),r("v-spacer"),r("a",{attrs:{href:t.play_url,target:"_blank"}},[t._v("到源网站播放")])],1),r("div",{staticClass:"gray--text",domProps:{innerHTML:t._s(t.info.desc)}}),t.info.series?r("div",{staticClass:"mt-2"},[r("b",[t._v(t._s(t.info.series.title)+"剧集列表：")]),r("div",t._l(t.info.series.items,function(e,i){return r("v-btn",{key:i,attrs:{color:e.url===t.play_url?"primary--text":void 0,to:{query:{url:e.url,direct:String(t.direct)}}}},[t._v(t._s(e.title))])}),1)]):t._e()],1):t._e()],1)],2)},a=[],o=r("9ab4"),s=r("60a3"),n=r("cdf7"),l=r("5912"),c=r("9530"),u=r.n(c),d=r("4bb5");let p=class extends s["d"]{constructor(){super(...arguments),this.items=[],this.source="http://jqaaa.com/jx.php",this.info=null,this.loading=!1,this.error_text="",this.t_direct=!0,this.play_url=""}async created(){if(!this.$route.query.type){var t=await this.$apollo.query({query:u.a`
          query {
            videoResolvers {
              id
              text
              value
            }
          }
        `}),e=t.data.videoResolvers;this.items=e}this.setPlaying(!1)}beforeRouteUpdate(){this.t_direct=this.direct,this.$route.query.video_only?this.info={url:this.$route.query.url}:(this.loading=!0,this.play_url=this.$route.query.url,Object(n["c"])(this.play_url).info({url:this.play_url}).then(t=>{this.info=t,t.nodirect&&(this.t_direct=!1,this.play_url=t.url),this.error_text=""}).finally(()=>{this.loading=!1}))}get direct(){return Boolean(this.$route.query.direct)}get url(){return`${this.source}?url=${encodeURIComponent(this.play_url)}`}get need_dplayer(){return![].some(t=>this.info.url.startsWith(t))}onError(t){}reload(){location.reload()}};o["a"]([d["c"]],p.prototype,"setPlaying",void 0),o["a"]([Object(s["e"])("$route",{immediate:!0})],p.prototype,"beforeRouteUpdate",null),p=o["a"]([Object(s["a"])({components:{VideoPlayer:l["a"]}})],p);var v=p,y=v,h=(r("a97b"),r("2877")),f=Object(h["a"])(y,i,a,!1,null,null,null);f.options.__file="player.vue";e["default"]=f.exports},a97b:function(t,e,r){"use strict";var i=r("ddfc"),a=r.n(i);a.a},cdf7:function(t,e,r){"use strict";r.d(e,"a",function(){return u}),r.d(e,"c",function(){return d}),r.d(e,"b",function(){return p});var i=r("bc3a"),a=r.n(i),o=r("9530"),s=r.n(o),n=r("53b8");const l={async search(t){var e=await n["a"].query({query:s.a`query ($kw: String!,$type:String!, $page:Int) {
        videoSearch(kw:$kw, type:$type,page:$page) {
          page
          pages
          items
        }
      }`,variables:t}),r=e.data.videoSearch;return r},async info(t){var e=await n["a"].query({query:s.a`query ($url: String!) {
        video(url:$url) {
          title
          type
          cover
          url
          desc
          rate
          series
          nodirect
        }
      }`,variables:t}),r=e.data.video;return r}},c={async search(t){var e=await a.a.get("https://api.imjad.cn/bilibili/v2/",{params:{get:"search",keyword:t.kw}}),r=e.data,i=r.code,o=r.data,s=r.message;if(0!==i)throw new Error(s);return{page:o.page,pages:-1,items:o.items.archive.map(t=>{return t.url=`https://www.bilibili.com/video/${t.goto}${t.param}`,t})}},async info(t){throw new Error("暂无数据")}};function u(t){return"bilibili"===t?c:l}function d(t){return t.startsWith("https://www.bilibili.com")?c:l}async function p(t){var e=await a.a.get("https://api.apiopen.top/todayVideo"),r=e.data;return r.result.map(t=>{var e=t.data;return"textCard"===t.type?e.text:(e=e.content.data,e.playUrl?{title:e.title,cover:e.cover.detail,desc:e.description,url:e.playUrl}:void 0)}).filter(Boolean)}},ddfc:function(t,e,r){}}]);