(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fireworks"],{"09ee":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"fireworks"},[s("canvas",{ref:"canvas"}),t._m(0)])},h=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"fireworks__title red--text"},[t._v("\n    新年快乐！！！\n    "),s("div",{staticClass:"display-2"},[t._v("Happy New Year!")])])}],n=s("c665"),a=s("dc0a"),o=s("aa9a"),r=s("d328"),u=s("11d9"),c=s("9ab4"),v=s("60a3"),l=function(){function t(i){Object(n["a"])(this,t),this.canvas=i,this.ctx=this.canvas.getContext("2d"),this.canvas.height=window.innerHeight,this.canvas.width=window.innerWidth,this.aDots=[],this.aLines=[],this.iMaxDist=170,this.iMinDist=10,this.beat=30,this.drawLine=!1,this.mouse={vx:0,vy:0,px:0,py:0,x:this.canvas.width/2,y:this.canvas.height/2,tm:void 0,moving:!1},this.heartSpeed=30,this.init()}return Object(o["a"])(t,[{key:"init",value:function(){this.getGrd(),this.canvas.addEventListener("mousemove",this.updateMouse.bind(this),!1),this.canvas.addEventListener("click",this.toggleLine.bind(this),!1)}},{key:"getGrd",value:function(){this.grd=this.ctx.createLinearGradient(0,0,this.canvas.width,0),this.breakpoint=20;for(var t=0;t<this.breakpoint;t++){var i=.7*window.innerWidth/this.breakpoint*t,s="hsla( "+i+", 100%, 50%, 1 )";this.grd.addColorStop(1/this.breakpoint*t,s)}}},{key:"toggleLine",value:function(){this.drawLine=!this.drawLine}},{key:"buildDot",value:function(){this.aDots.push(new d(this.mouse))}},{key:"updateMouse",value:function(t){this.mouse.moving=!0,clearTimeout(this.mouse.tm),this.mouse.tm=setTimeout(this.mouseStop.bind(this),500),this.mouse.px=this.mouse.x,this.mouse.py=this.mouse.y,this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.vx=this.mouse.x-this.mouse.px,this.mouse.vy=this.mouse.y-this.mouse.py,this.buildDot(),this.buildDot(),this.buildDot()}},{key:"mouseStop",value:function(){this.mouse.moving=!1}},{key:"getDist",value:function(t,i){var s=t.x-i.x,e=t.y-i.y;return Math.sqrt(s*s+e*e)}},{key:"checkLines",value:function(){this.aLines=[];for(var t=this.aDots.length-1;t>=0;t--)for(var i=this.aDots.length-1;i>t;i--){var s=this.getDist(this.aDots[t],this.aDots[i]);s<this.iMaxDist&&s>this.iMinDist&&this.aDots[t].r+this.aDots[i].r>5.5&&this.aLines.push(new y(this.aDots[t],this.aDots[i],s,this.iMaxDist))}}},{key:"heartBeat",value:function(){for(var t=f(0,window.innerWidth),i=f(0,window.innerHeight),s=0;s<f(50,100);s++)this.aDots.push(new d({x:t,y:i,vx:f(-8,8),vy:f(-5,5)}));this.beat=0}},{key:"drawOverlay",value:function(){this.ctx.globalCompositeOperation="overlay",this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle=this.grd,this.ctx.fill()}},{key:"update",value:function(){for(var t=this.aDots.length-1;t>=0;t--)this.aDots[t].alive?this.aDots[t].update():this.aDots.splice(t,1);this.drawLine&&this.checkLines(),this.beat>=this.heartSpeed&&!this.mouse.moving?this.heartBeat():this.beat++}},{key:"draw",value:function(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="rgba( 1, 0, 0, 1 )",this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);for(var t=this.aDots.length-1;t>=0;t--)this.aDots[t].draw(this.ctx);if(this.drawLine)for(t=this.aLines.length-1;t>=0;t--)this.aLines[t].draw(this.ctx);this.drawOverlay()}},{key:"run",value:function(){this.update(),this.draw(),this.bRuning&&requestAnimationFrame(this.run.bind(this))}},{key:"start",value:function(){var t=this;this.bRuning=!0,this.run(),this.resizeHandler=function(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,t.getGrd()},window.addEventListener("resize",this.resizeHandler)}},{key:"stop",value:function(){this.bRuning=!1,window.removeEventListener("resize",this.resizeHandler)}}]),t}(),d=function(){function t(i){Object(n["a"])(this,t),this.x=i.x,this.y=i.y,this.vx=1.1*f(i.vx-1.5,i.vx+1.5),this.vy=1.1*f(i.vy-1.5,i.vy+1.5),this.r=f(0,4),this.life=f(1,5)*(.3*this.r),this.alive=!0,this.friction=f(.02,.2),this.a=1}return Object(o["a"])(t,[{key:"isOut",value:function(){return this.x<0||this.x>window.innerWidth||this.y<0||this.y>window.innerHeight}},{key:"update",value:function(){(this.x<0||this.x>window.innerWidth)&&(this.vx*=-.8),(this.y<0||this.y>window.innerHeight)&&(this.vy*=-.8),this.lx=this.x,this.ly=this.y,this.x+=this.vx,this.y+=this.vy,this.vx>2?this.vx-=this.friction:this.vx<-2&&(this.vx+=this.friction),this.vy>2?this.vy-=this.friction:this.vy<-2&&(this.vy+=this.friction),this.life<=0?this.a<=0?this.alive=!1:this.a-=.09:this.life-=.1}},{key:"draw",value:function(t){t.beginPath(),t.moveTo(this.lx,this.ly),t.lineTo(this.x,this.y),t.strokeStyle="rgba( 255, 255, 255, "+this.a+" )",t.lineWidth=this.r,t.lineCap="round",t.stroke(),t.closePath()}}]),t}(),y=function(){function t(i,s,e,h){Object(n["a"])(this,t),this.x1=i.x,this.y1=i.y,this.x2=s.x,this.y2=s.y,this.w=.1,this.size=e,this.mSize=h,this.a=this.getDistAlpha(),this.a=Math.min(i.a,s.a,this.a)}return Object(o["a"])(t,[{key:"getDistAlpha",value:function(){var t=100*this.size/this.mSize,i=100-100*t/100;return i/100}},{key:"draw",value:function(t){t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.strokeStyle="rgba( 255, 255, 255, "+2*this.a+" )",t.lineWidth=this.w,t.stroke(),t.closePath()}}]),t}(),f=function(t,i){return Math.random()*(i-t)+t},w=function(t){function i(){return Object(n["a"])(this,i),Object(r["a"])(this,Object(u["a"])(i).apply(this,arguments))}return Object(o["a"])(i,[{key:"mounted",value:function(){this.fireworks=new l(this.$refs.canvas),this.fireworks.start()}},{key:"beforeDestroy",value:function(){this.fireworks.stop()}}]),Object(a["a"])(i,t),i}(v["d"]);w=c["a"]([Object(v["a"])({})],w);var x=w,m=x,p=(s("7ba9"),s("2877")),b=Object(p["a"])(m,e,h,!1,null,null,null);b.options.__file="fireworks.vue";i["default"]=b.exports},"1c48":function(t,i,s){},"7ba9":function(t,i,s){"use strict";var e=s("1c48"),h=s.n(e);h.a}}]);