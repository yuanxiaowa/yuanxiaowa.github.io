(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-player"],{"55f4":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video-wrap"},[t.direct?r("iframe",{attrs:{width:"100%",height:"100%",src:t.url,frameborder:"0",allowfullscreen:""}}):!t.loading&&t.info&&t.info.url?[t.error_text?r("div",{staticClass:"text-xs-center"},[t._v("\n      出错了\n      "),r("v-btn",{attrs:{color:"red--text"},on:{click:t.reload}},[t._v("重试")])],1):r("video-player",{attrs:{src:t.info.url},on:{error:t.onError}})]:t._e(),r("div",{staticClass:"ma-2"},[t.direct?t._e():r("v-select",{attrs:{items:t.items,dense:""},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}}),t.loading?r("div",[r("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}),t._v("\n      正在获取数据...\n    ")],1):t.info?r("div",[r("v-layout",[r("h3",[t._v(t._s(t.info.title))]),r("v-spacer"),t.play_url?r("a",{attrs:{href:t.play_url,target:"_blank"}},[t._v("到源网站播放")]):t._e()],1),r("div",{staticClass:"gray--text",domProps:{innerHTML:t._s(t.info.desc)}}),t.info.series?r("div",{staticClass:"mt-2"},[r("b",[t._v(t._s(t.info.series.title)+"剧集列表：")]),r("div",t._l(t.info.series.items,function(e,i){return r("v-btn",{key:i,attrs:{color:e.url===t.play_url?"primary--text":void 0,to:{query:{url:e.url,direct:String(t.direct)}}}},[t._v(t._s(e.title))])}),1)]):t._e()],1):t._e()],1)],2)},a=[],s=r("9ab4"),o=r("60a3"),n=r("cdf7"),l=r("5912"),u=r("9530"),c=r.n(u),d=r("4bb5");const p=Object(d["e"])("music");let v=class extends o["d"]{constructor(){super(...arguments),this.items=[],this.source="http://jqaaa.com/jx.php",this.info=null,this.loading=!1,this.error_text="",this.play_url="",this.direct=!0}async created(){if(!this.$route.query.type){var t=await this.$apollo.query({query:c.a`
          query {
            videoResolvers {
              id
              text
              value
            }
          }
        `}),e=t.data.videoResolvers;this.items=e}this.setPlaying(!1)}beforeRouteUpdate(){this.direct="true"===String(this.$route.query.direct),this.$route.query.video_only?this.info={url:this.$route.query.url}:(this.loading=!0,this.play_url=this.$route.query.url,Object(n["c"])(this.play_url).info({url:this.play_url}).then(t=>{this.info=t,t.nodirect&&(this.play_url=t.url),this.error_text=""}).finally(()=>{this.loading=!1}))}get url(){return`${this.source}?url=${encodeURIComponent(this.play_url)}`}onError(t){}reload(){location.reload()}};s["b"]([p.Mutation],v.prototype,"setPlaying",void 0),s["b"]([Object(o["e"])("$route",{immediate:!0})],v.prototype,"beforeRouteUpdate",null),v=s["b"]([Object(o["a"])({components:{VideoPlayer:l["a"]}})],v);var y=v,h=y,f=(r("a97b"),r("2877")),b=r("724d"),m=r.n(b),g=Object(f["a"])(h,i,a,!1,null,null,null);"function"===typeof m.a&&m()(g);e["default"]=g.exports},"724d":function(t,e){},9035:function(t,e,r){},a97b:function(t,e,r){"use strict";var i=r("9035"),a=r.n(i);a.a},cdf7:function(t,e,r){"use strict";r.d(e,"a",function(){return c}),r.d(e,"c",function(){return d}),r.d(e,"b",function(){return p}),r.d(e,"d",function(){return v});var i=r("bc3a"),a=r.n(i),s=r("9530"),o=r.n(s),n=r("53b8");const l={async search(t){var e=await n["a"].query({query:o.a`query ($kw: String!,$type:String!, $page:Int) {
        videoSearch(kw:$kw, type:$type,page:$page) {
          page
          pages
          items
        }
      }`,variables:t}),r=e.data.videoSearch;return r},async info(t){var e=await n["a"].query({query:o.a`query ($url: String!) {
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
      }`,variables:t}),r=e.data.video;return r}},u={async search(t){var e=await a.a.get("https://api.imjad.cn/bilibili/v2/",{params:{get:"search",keyword:t.kw,page:t.page}}),r=e.data,i=r.code,s=r.data,o=r.message;if(0!==i)throw new Error(o);return{page:s.page,pages:-1,items:s.items.archive.map(t=>{return t.url=`https://www.bilibili.com/video/${t.goto}${t.param}`,t})}},async info(t){throw new Error("暂无数据")}};function c(t){return"bilibili"===t?u:l}function d(t){return t.startsWith("https://www.bilibili.com")?u:l}async function p(t){var e,r=await a.a.get("https://api.apiopen.top/todayVideo"),i=r.data,s=[];return i.result.forEach(t=>{var r=t.data;"textCard"!==t.type?(r=r.content.data,r.playUrl&&e.items.push({title:r.title,cover:r.cover.detail,desc:r.description,url:r.playUrl})):e&&e.title===r.text||(e={title:r.text,items:[]},s.push(e))}),s.filter(t=>t.items.length>0)}async function v(){var t=await n["a"].query({fetchPolicy:"cache-first",query:o.a`
        query {
          videoSites {
            text
            value
            indirect
          }
        }
      `}),e=t.data.videoSites;return e}}}]);