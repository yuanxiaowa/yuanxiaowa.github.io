(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["video-player"],{"55f4":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"con",staticClass:"video-wrap"},[t.direct?i("iframe",{attrs:{width:"100%",height:t.height,src:t.url,frameborder:"0",allowfullscreen:""}}):!t.loading&&t.info&&t.info.url?[t.error_text?i("div",{staticClass:"text-xs-center"},[t._v("\n      出错了\n      "),i("v-btn",{attrs:{color:"red--text"},on:{click:t.reload}},[t._v("重试")])],1):t.independent?i("iframe",{attrs:{width:"100%",height:t.height,src:t.info.url,frameborder:"0",allowfullscreen:""}}):i("video-player",{attrs:{src:t.info.url},on:{error:t.onError}})]:t._e(),i("div",{staticClass:"ma-2"},[t.direct?i("v-select",{attrs:{items:t.items,dense:""},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}}):t._e(),t.loading?i("div",[i("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}),t._v("\n      正在获取数据...\n    ")],1):t.info?i("div",[i("v-layout",[i("h3",[t._v(t._s(t.info.title))]),i("v-spacer"),t.play_url?i("a",{attrs:{href:t.play_url,target:"_blank"}},[t._v("到源网站播放")]):t._e()],1),i("div",{staticClass:"gray--text",domProps:{innerHTML:t._s(t.info.desc)}}),t.info.series?i("div",{staticClass:"mt-2"},[i("b",[t._v(t._s(t.info.series.title)+"剧集列表：")]),t.info.series.more?i("v-tabs",{attrs:{dark:"","slider-color":"yellow"},on:{change:function(e){return t.loadMore(t.info.series.items[e])}}},[t._l(t.info.series.items,function(e){return i("v-tab",{key:e.id,attrs:{ripple:""}},[t._v("\n            "+t._s(e.title)+"\n          ")])}),t._l(t.info.series.items,function(e,r){return i("v-tab-item",{key:e.id},[e.more?i("v-expansion-panel",{on:{input:function(i){return t.loadMore(e.items[i])}}},t._l(e.items,function(e,s){return i("v-expansion-panel-content",{key:e.id,scopedSlots:t._u([{key:"header",fn:function(){return[i("div",[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[e.items?i("v-list",t._l(e.items,function(e,n){return i("v-list-tile",{key:n,on:{click:function(i){return t.play(e,[r,s,n])}}},[i("v-list-tile-content",[t._v(t._s(e.title))])],1)}),1):i("v-progress-circular",{staticClass:"ma-3",attrs:{indeterminate:"",color:"primary"}})],1)}),1):[e.items?i("v-list",t._l(e.items,function(e,s){return i("v-list-tile",{key:s,on:{click:function(i){return t.play(e,[r,s])}}},[i("v-list-tile-content",[t._v(t._s(e.title))])],1)}),1):i("v-progress-circular",{staticClass:"ma-3",attrs:{indeterminate:"",color:"primary"}})]],2)})],2):i("div",t._l(t.info.series.items,function(e,r){return i("v-btn",{key:r,attrs:{color:e.url===t.play_url?"primary--text":void 0,to:{query:{url:e.url,direct:String(t.direct)}}}},[t._v(t._s(e.title))])}),1)],1):t._e()],1):t._e()],1)],2)},s=[],n=i("9ab4"),o=i("60a3"),l=i("cdf7"),a=i("5912"),u=i("9530"),c=i.n(u),d=i("4bb5");const h=Object(d["e"])("music");let p=class extends o["d"]{constructor(){super(...arguments),this.items=[],this.source="http://jqaaa.com/jx.php",this.info=null,this.loading=!1,this.error_text="",this.play_url="",this.direct=!0,this.tindex=0,this.height="300px",this.independent=!1}async created(){if(!this.$route.query.type){var t=await this.$apollo.query({query:c.a`
          query {
            videoResolvers {
              id
              text
              value
            }
          }
        `}),e=t.data.videoResolvers;this.items=e}this.setPlaying(!1)}beforeRouteUpdate(){if(this.direct="true"===String(this.$route.query.direct),this.$route.query.video_only)this.info={url:this.$route.query.url};else{var t=this.$route.query.arg;this.info&&t||(this.loading=!0,this.play_url=this.$route.query.url,Object(l["c"])(this.play_url).info({url:this.play_url,arg:t}).then(t=>{this.info=t,this.independent=!!t.independent,t.nodirect&&(this.play_url=t.url),this.error_text=""}).finally(()=>{this.loading=!1}))}}get url(){return`${this.source}?url=${encodeURIComponent(this.play_url)}`}mounted(){this.height=3*this.$refs.con.offsetWidth/4+"px"}onError(t){}reload(){location.reload()}async loadMore(t){t.items||(t.items=await Object(l["c"])(this.play_url).getDir(t.id))}play(t,e){this.info.url=t.url,this.info.title=t.title,this.$router.push({query:Object.assign({},this.$route.query,{arg:e.join("-")})})}};n["b"]([h.Mutation],p.prototype,"setPlaying",void 0),n["b"]([Object(o["e"])("$route",{immediate:!0})],p.prototype,"beforeRouteUpdate",null),p=n["b"]([Object(o["a"])({components:{VideoPlayer:a["a"]}})],p);var f=p,v=f,y=(i("a97b"),i("2877")),_=i("724d"),m=i.n(_),b=Object(y["a"])(v,r,s,!1,null,null,null);"function"===typeof m.a&&m()(b);e["default"]=b.exports},"724d":function(t,e){},9035:function(t,e,i){},a97b:function(t,e,i){"use strict";var r=i("9035"),s=i.n(r);s.a}}]);