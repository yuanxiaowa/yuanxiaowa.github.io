(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"754b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-wrap text-xs-center"},[i("canvas",{ref:"cv"}),i("div",{staticClass:"about-layer white--text"},[i("h1",{staticClass:"pt-2"},[t._v("关于我")]),i("div",{staticClass:"mt-3"},[i("div",{staticClass:"light-blue--text mb-2"},[t._v("\n        一个多少懂点的前端er\n      ")]),t._l(t.infos,function(e){return i("p",{key:e.url},[i("label",{staticClass:"grey--text"},[t._v(t._s(e.label)+"：")]),i("a",{staticClass:"white--text cursor-auto",attrs:{href:e.url,target:e.target}},[t._v(t._s(e.text))])])}),t._m(0),t._m(1)],2)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("label",{staticClass:"grey--text"},[t._v("segmentfault:  ")]),i("a",{staticClass:"white--text cursor-auto",attrs:{href:"https://segmentfault.com/u/yuanxiaowa",target:"_blank"}},[i("img",{staticClass:"about-h",attrs:{src:"https://cdn.segmentfault.com/v-5c4ec07f/global/img/favicon.ico"}}),t._v("\n          yuanxiaowa\n        ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("label",{staticClass:"grey--text"},[t._v("github:  ")]),i("iframe",{staticClass:"about-h",attrs:{src:"https://ghbtns.com/github-btn.html?user=yuanxiaowa&type=follow&count=true",frameborder:"0",scrolling:"0",width:"220px"}})])}],n=i("c665"),o=i("dc0a"),h=i("aa9a"),r=i("d328"),c=i("11d9"),u=i("9ab4"),l=i("60a3"),v={debug:!1,friction:.5,trails:20,size:50,dampening:.25,tension:.98},d=2*Math.PI,m=function(){function t(e){Object(n["a"])(this,t),this.value=0,this.init(e||{})}return Object(h["a"])(t,[{key:"init",value:function(t){this.phase=t.phase||0,this.offset=t.offset||0,this.frequency=t.frequency||.001,this.amplitude=t.amplitude||1}},{key:"update",value:function(){return this.phase+=this.frequency,this.value=this.offset+Math.sin(this.phase)*this.amplitude,this.value}}]),t}(),f=function t(){Object(n["a"])(this,t),this.x=0,this.y=0,this.vy=0,this.vx=0},y=function(){function t(e){Object(n["a"])(this,t),this.init(e||{})}return Object(h["a"])(t,[{key:"init",value:function(t){this.ctx=t.ctx,this.spring=t.spring+.1*Math.random()-.05,this.friction=v.friction+.01*Math.random()-.005,this.nodes=[];for(var e,i=0;i<v.size;i++)e=new f,e.x=t.x,e.y=t.y,this.nodes.push(e)}},{key:"update",value:function(t){var e=t.x,i=t.y,s=this.spring,a=this.nodes[0];a.vx+=(e-a.x)*s,a.vy+=(i-a.y)*s;for(var n,o=0,h=this.nodes.length;o<h;o++)a=this.nodes[o],o>0&&(n=this.nodes[o-1],a.vx+=(n.x-a.x)*s,a.vy+=(n.y-a.y)*s,a.vx+=n.vx*v.dampening,a.vy+=n.vy*v.dampening),a.vx*=this.friction,a.vy*=this.friction,a.x+=a.vx,a.y+=a.vy,s*=v.tension}},{key:"draw",value:function(){var t,e,i=this.ctx,s=this.nodes[0].x,a=this.nodes[0].y;i.beginPath(),i.moveTo(s,a);for(var n=1,o=this.nodes.length-2;n<o;n++)t=this.nodes[n],e=this.nodes[n+1],s=.5*(t.x+e.x),a=.5*(t.y+e.y),i.quadraticCurveTo(t.x,t.y,s,a);t=this.nodes[n],e=this.nodes[n+1],i.quadraticCurveTo(t.x,t.y,e.x,e.y),i.stroke(),i.closePath()}}]),t}(),g=function(){function t(e){Object(n["a"])(this,t),this.tendrils=[],this.cv=e,this.ctx=e.getContext("2d"),this.target={},this.init()}return Object(h["a"])(t,[{key:"reset",value:function(){this.tendrils=[];for(var t=0;t<v.trails;t++)this.tendrils.push(new y({spring:.45+t/v.trails*.025,x:this.target.x,y:this.target.y,ctx:this.ctx}))}},{key:"loop",value:function(){var t=this.ctx;t.globalCompositeOperation="source-over",t.fillStyle="rgba(8,5,16,0.4)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.globalCompositeOperation="lighter",t.strokeStyle="hsla("+Math.round(this.hue.update())+",90%,50%,0.25)",t.lineWidth=1;for(var e,i=0;i<v.trails;i++)e=this.tendrils[i],e.update({x:this.target.x,y:this.target.y}),e.draw();this.rid=requestAnimationFrame(this.loop)}},{key:"resize",value:function(){this.cv.width=this.cv.parentNode.offsetWidth,this.cv.height=this.cv.parentNode.offsetHeight}},{key:"mousemove",value:function(t){t.touches?(this.target.x=t.touches[0].pageX,this.target.y=t.touches[0].pageY):(this.target.x=t.clientX,this.target.y=t.clientY)}},{key:"touchstart",value:function(t){1==t.touches.length&&(this.target.x=t.touches[0].pageX,this.target.y=t.touches[0].pageY)}},{key:"init",value:function(){var t=this,e=this.ctx;this.resize=this.resize.bind(this),this.mousemove=this.mousemove.bind(this),this.touchstart=this.touchstart.bind(this),this.loop=this.loop.bind(this),this.hue=new m({phase:Math.random()*d,amplitude:85,frequency:.0015,offset:285}),document.body.addEventListener("orientationchange",this.resize),window.addEventListener("resize",this.resize),document.addEventListener("mousemove",this.mousemove),document.addEventListener("touchmove",this.mousemove),document.addEventListener("touchstart",this.touchstart),this.target.x=Math.random()*e.canvas.width,this.target.y=Math.random()*e.canvas.height,this.resize(),this.reset(),this.loop(),this.mousemove({clientX:Math.random()*this.cv.width,clientY:Math.random()*this.cv.height}),setTimeout(function(){t.mousemove({clientX:Math.random()*t.cv.width,clientY:Math.random()*t.cv.height})},100),setTimeout(function(){t.mousemove({clientX:Math.random()*t.cv.width,clientY:Math.random()*t.cv.height})},500),setTimeout(function(){t.mousemove({clientX:Math.random()*t.cv.width,clientY:Math.random()*t.cv.height})},1e3),setTimeout(function(){t.mousemove({clientX:Math.random()*t.cv.width,clientY:Math.random()*t.cv.height})},2e3)}},{key:"destroy",value:function(){cancelAnimationFrame(this.rid),document.body.removeEventListener("orientationchange",this.resize),window.removeEventListener("resize",this.resize),document.removeEventListener("mousemove",this.mousemove),document.removeEventListener("touchmove",this.mousemove),document.removeEventListener("touchstart",this.touchstart)}}]),t}(),p=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.infos=[{label:"邮箱",url:"mailto:yuanxiaowa@qq.com",text:"yuanxiaowa@qq.com"}],t}return Object(h["a"])(e,[{key:"mounted",value:function(){this.traviolet=new g(this.$refs.cv)}},{key:"beforeDestroy",value:function(){this.traviolet.destroy()}}]),Object(o["a"])(e,t),e}(l["d"]);p=u["a"]([Object(l["a"])({})],p);var x=p,b=x,w=(i("b643"),i("2877")),_=Object(w["a"])(b,s,a,!1,null,null,null);_.options.__file="about.vue";e["default"]=_.exports},b643:function(t,e,i){"use strict";var s=i("dfc6"),a=i.n(s);a.a},dfc6:function(t,e,i){}}]);