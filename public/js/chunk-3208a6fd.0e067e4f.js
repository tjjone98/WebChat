(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3208a6fd"],{"25bc":function(e,o,n){},6172:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"page__message"},[n("section",{staticClass:"page__left"},[n("RoomList",{on:{reRenderRoom:function(o){return e.reRenderRoom()}}})],1),n("section",{staticClass:"page__right"},[n("Room",{key:e.renderRoom})],1)])},r=[],s=n("f25e"),a=n("2391"),c=n("0c12"),i={name:"MessagesDetail",components:{RoomList:s["a"],Room:a["a"]},data:function(){return{roomId:this.$route.params.handle,renderRoom:0}},methods:{reRenderRoom:function(){this.renderRoom+=1}},created:function(){var e=this;c["a"].$on("forceRerender",(function(){e.renderRoom+=1}))},beforeDestroy:function(){c["a"].$off("forceRerender")}},u=i,f=(n("b1e0"),n("2877")),d=Object(f["a"])(u,t,r,!1,null,"7212993e",null);o["default"]=d.exports},b1e0:function(e,o,n){"use strict";var t=n("25bc"),r=n.n(t);r.a}}]);
//# sourceMappingURL=chunk-3208a6fd.0e067e4f.js.map