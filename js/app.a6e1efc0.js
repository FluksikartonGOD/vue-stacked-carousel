(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={1:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-stacked-carousel/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,0]),i()})({0:function(t,e,i){t.exports=i("Vtdi")},DyPd:function(t,e,i){"use strict";var n=i("F+O8"),r=i("pJle"),a=i("KHd+"),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,null,null);s.exports},EWSE:function(t,e,i){var n=i("ZNfK");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("SZ7m").default;r("e2b4c6fa",n,!0,{sourceMap:!1,shadowMode:!1})},"F+O8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-stacked-carousel"},[t._v("\n  Work in progress\n")])},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},Jkpu:function(t,e,i){"use strict";var n=i("yrGX"),r=i.n(n);r.a},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var n=i("Kw5r"),r=i("BDG8"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("vue-stacked-carousel",{attrs:{items:t.vueStackedCarouselItems},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item,r=e.index,a=e.opacity;return i("div",{staticClass:"card"},[i("div",{staticClass:"inner-card",style:"opacity: "+a},[i("h3",[t._v(t._s(n.title))]),i("p",[t._v(t._s(n.description))]),i("span",[t._v("item - "+t._s(r))])])])}}])},[i("span",{attrs:{slot:"arrow-left"},slot:"arrow-left"},[t._v("arrow")]),i("span",{attrs:{slot:"arrow-right"},slot:"arrow-right"},[t._v("arrow")])])],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipe,expression:"swipe",arg:"swipe"}],staticClass:"vue-stacked-carousel"},[i("div",{staticClass:"vue-stacked-carousel-container",style:t.containerStyle},[t._l(t.items,function(e,n){return i("div",{key:n,staticClass:"vue-stacked-carousel-item",style:t.itemStyle(n).style},[t._t("default",null,{item:e,index:n,opacity:t.itemStyle(n).opacity})],2)}),i("div",{staticClass:"vue-stacked-carousel-arrow",class:t.arrowLeftClass,on:{click:t.slidePrev}},[t._t("arrow-left")],2),i("div",{staticClass:"vue-stacked-carousel-arrow",class:t.arrowRightClass,on:{click:t.slideNext}},[t._t("arrow-right")],2)],2)])},u=[],c=(i("rGqo"),i("HEwt"),i("xfY5"),{name:"vue-stacked-carousel",props:{items:{type:Array,default:function(){return[]}},itemDepthRatio:{type:Number,default:120},itemDistance:{type:Number,default:60},transitionDuration:{type:Number,default:.3},transitionWait:{type:Boolean,default:!0},transitionTimingFunction:{type:String,default:"ease-in-out"},arrowLeftClass:{type:String,default:"arrow-left"},arrowRightClass:{type:String,default:"arrow-right"}},data:function(){return{currentItem:0,highestHeight:0,highestWidth:0,containerStyle:{},inAnimation:!1}},computed:{itemLength:function(){return this.items.length}},mounted:function(){this.reCalculateSizes()},methods:{reCalculateSizes:function(){var t=0,e=0,i=Array.from(this.$el.querySelectorAll(".vue-stacked-carousel-item"));i.forEach(function(i){var n=i.getBoundingClientRect(),r=n.height,a=n.width;r>t&&(t=r),a>e&&(e=a)}),this.highestHeight=t,this.highestWidth=e,this.containerStyle={height:"".concat(this.highestHeight,"px"),width:"".concat(this.highestWidth,"px")}},itemStyle:function(t){var e,i=t-this.currentItem,n=t-this.currentItem;e=n>=0?this.itemLength-n:this.itemLength+n;var r=100/this.itemLength,a=r*e/100,s=-1*this.itemDepthRatio*i;s>0&&(s*=-1);var o=this.itemDistance*i,u={zIndex:e,transform:"translate3d(".concat(o,"px, 0, ").concat(s,"px)"),transitionDuration:"".concat(this.transitionDuration,"s"),transitionTimingFunction:this.transitionTimingFunction};return{style:u,opacity:a}},slideNext:function(){var t=this.currentItem===this.itemLength-1;t||this.inAnimation||(this.currentItem+=1,this.transitionWait&&this.setAnimation())},slidePrev:function(){var t=0===this.currentItem;t||this.inAnimation||(this.currentItem-=1,this.transitionWait&&this.setAnimation())},swipe:function(t){return"swipeleft"===t?this.slideNext():"swiperight"===t?this.slidePrev():void 0},setAnimation:function(){var t=this;this.inAnimation=!0;var e=this.transitionDuration;setTimeout(function(){t.inAnimation=!1},1e3*e)}}}),l=c,p=(i("Jkpu"),i("KHd+")),d=Object(p["a"])(l,o,u,!1,null,null,null),h=d.exports,f=(i("DyPd"),{name:"app",components:{VueStackedCarousel:h},data:function(){return{vueStackedCarouselItems:[{title:"A",description:"Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht"},{title:"B",description:"Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht"},{title:"C",description:"Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht"},{title:"D",description:"Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht"},{title:"E",description:"Gut angepasste Zahnreinigung ergeben ein völlig natürliches Zahngefühl und Zahnkosmetik und stören somit auch das Kausystem nicht"}]}}}),m=f,g=(i("ZL7j"),Object(p["a"])(m,a,s,!1,null,null,null)),v=g.exports;n["a"].use(r["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},ZL7j:function(t,e,i){"use strict";var n=i("EWSE"),r=i.n(n);r.a},ZNfK:function(t,e,i){e=t.exports=i("I1BE")(!1),e.push([t.i,".card{width:327px;border-radius:5px;background-color:#fff;-webkit-box-shadow:0 5px 20px 0 rgba(0,0,0,.15),0 2px 2px 0 rgba(0,0,0,.1);box-shadow:0 5px 20px 0 rgba(0,0,0,.15),0 2px 2px 0 rgba(0,0,0,.1);-webkit-box-sizing:border-box;box-sizing:border-box}.inner-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:20px;-webkit-transition:opacity .3s linear;transition:opacity .3s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-stacked-carousel-arrow.arrow-left{left:-70%}.vue-stacked-carousel-arrow.arrow-right{right:-70%}",""])},jLE7:function(t,e,i){e=t.exports=i("I1BE")(!1),e.push([t.i,".vue-stacked-carousel-container{position:relative;margin-left:auto;margin-right:auto;height:auto;-ms-touch-action:pan-x;touch-action:pan-x;-webkit-perspective:1200px;perspective:1200px}.vue-stacked-carousel-container .vue-stacked-carousel-item{position:absolute;top:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-property:all;transition-property:all;will-change:transform}.vue-stacked-carousel-container .vue-stacked-carousel-arrow{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])},pAgi:function(t,e){},pJle:function(t,e,i){"use strict";var n=i("pAgi"),r=i.n(n);e["default"]=r.a},yrGX:function(t,e,i){var n=i("jLE7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("SZ7m").default;r("bf800dc2",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.a6e1efc0.js.map