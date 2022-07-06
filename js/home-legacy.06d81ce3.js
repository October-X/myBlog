"use strict";(self["webpackChunktest_site"]=self["webpackChunktest_site"]||[]).push([[177],{7259:function(e,t,i){i.r(t),i.d(t,{default:function(){return C}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"container",staticClass:"home-container",on:{wheel:e.handleWheel}},[i("ul",{staticClass:"carousel-container",style:{marginTop:e.marginTop},on:{transitionend:e.handletransitionend}},e._l(e.data,(function(e){return i("li",{key:e.id},[i("CarouselItem",{attrs:{carousel:e}})],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index>=1,expression:"index >= 1"}],staticClass:"icon arrow-up",on:{click:function(t){return e.switchTo(e.index-1)}}},[i("Icon",{attrs:{type:"arrowUp"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.index<e.data.length-1,expression:"index < data.length - 1"}],staticClass:"icon arrow-down",on:{click:function(t){return e.switchTo(e.index+1)}}},[i("Icon",{attrs:{type:"arrowDown"}})],1),i("ul",{staticClass:"indivator"},e._l(e.data,(function(t,n){return i("li",{key:t.id,class:{active:e.index===n},on:{click:function(t){return e.switchTo(n)}}})})),0)])},s=[],r=i(4367),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"container",staticClass:"carousel-item-container",on:{mousemove:e.handleMouseMove,mouseleave:e.handleMouseLeave}},[i("div",{ref:"image",staticClass:"carousel-img",style:e.imagePosition},[i("ImageLoader",{attrs:{src:e.carousel.bigImg,placeholder:e.carousel.midImg},on:{load:this.showText}})],1),i("div",{ref:"title",staticClass:"carousel-title"},[e._v(" "+e._s(e.carousel.title)+" ")]),i("div",{ref:"desc",staticClass:"carousel-desc"},[e._v(" "+e._s(e.carousel.description)+" ")])])},a=[],h=(i(2222),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"image-loader-container"},[e.everythingDone?e._e():i("img",{staticClass:"placeholder",attrs:{src:e.placeholder}}),i("img",{style:{opacity:e.originalOpacity,transition:e.duration+"s"},attrs:{src:e.src,alt:""},on:{load:e.handleLoad}})])}),c=[],d=(i(9653),{props:{src:{type:String,required:!0},placeholder:{type:String,required:!0},duration:{type:Number,default:.5}},data:function(){return{originLoaded:!1,everythingDone:!1}},computed:{originalOpacity:function(){return this.originLoaded?1:0}},methods:{handleLoad:function(){var e=this;this.originLoaded=!0,setTimeout((function(){e.everythingDone=!0,e.$emit("load")}),this.duration)}}}),l=d,u=i(1001),f=(0,u.Z)(l,h,c,!1,null,"50a79321",null),m=f.exports,g={props:["carousel"],components:{ImageLoader:m},data:function(){return{titleWidth:0,descWidth:0,containerSize:null,innerSize:null,mouseX:0,mouseY:0}},mounted:function(){this.titleWidth=this.$refs.title.clientWidth,this.descWidth=this.$refs.desc.clientWidth,this.setSize(),this.mouseX=this.center.x,this.mouseY=this.center.y,window.addEventListener("resize",this.setSize)},destroyed:function(){window.removeEventListener("resize",this.setSize)},computed:{imagePosition:function(){if(this.innerSize&&this.containerSize){var e=this.innerSize.width-this.containerSize.width,t=this.innerSize.height-this.containerSize.height,i=-e/this.innerSize.width*this.mouseX,n=-t/this.innerSize.height*this.mouseY;return{transform:"translate(".concat(i,"px,").concat(n,"px)")}}},center:function(){return{x:this.innerSize.width/2,y:this.innerSize.height/2}}},methods:{showText:function(){this.$refs.title.style.opacity=1,this.$refs.title.style.width=0,this.$refs.title.clientWidth,this.$refs.title.style.transition="1s",this.$refs.title.style.width=this.titleWidth+"px",this.$refs.desc.style.opacity=1,this.$refs.desc.style.width=0,this.$refs.desc.clientWidth,this.$refs.desc.style.transition="2s 1s",this.$refs.desc.style.width=this.descWidth+"px"},setSize:function(){this.containerSize={width:this.$refs.container.clientWidth,height:this.$refs.container.clientHeight},this.innerSize={width:this.$refs.image.clientWidth,height:this.$refs.image.clientHeight}},handleMouseMove:function(e){var t=this.$refs.container.getBoundingClientRect();this.mouseX=e.clientX-t.left,this.mouseY=e.clientY-t.top},handleMouseLeave:function(){this.mouseX=this.center.x,this.mouseY=this.center.y}}},p=g,w=(0,u.Z)(p,o,a,!1,null,"3b522eba",null),v=w.exports,y=i(7717),x=i(6250),z={components:{CarouselItem:v,Icon:y.Z},data:function(){return{index:0,containerHeight:0,switching:!1}},computed:(0,r.Z)((0,r.Z)({},(0,x.mapState)("banner",["loading","data"])),{},{marginTop:function(){return-this.index*this.containerHeight+"px"}}),created:function(){this.$store.dispatch("banner/fetchBanner")},mounted:function(){this.containerHeight=this.$refs.container.clientHeight,window.addEventListener("resize",this.handleresize)},destroyed:function(){window.removeEventListener("resize",this.handleresize)},methods:{switchTo:function(e){this.index=e},handleWheel:function(e){this.switching||(this.index>0&&e.deltaY<0?(this.switching=!0,this.index--):this.index<this.data.length-1&&e.deltaY>0&&(this.switching=!0,this.index++))},handletransitionend:function(){this.switching=!1},handleresize:function(){this.containerHeight=this.$refs.container.clientHeight}}},$=z,S=(0,u.Z)($,n,s,!1,null,"ed70d68a",null),C=S.exports}}]);
//# sourceMappingURL=home-legacy.06d81ce3.js.map