(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-687899c4","chunk-7b30674b"],{3115:function(t,e,s){},"7b00":function(t,e,s){"use strict";s.r(e);var n=function(t,e){e._c;return e._m(0)},a=[function(t,e){var n=e._c;return n("div",{staticClass:"page notfound"},[n("section",{staticClass:"section mt-6 section--notfound"},[n("div",{staticClass:"section__heading"},[n("span",{staticClass:"section__title"},[e._v("Oops! Page Not Found")])]),n("div",{staticClass:"section__content"},[n("p",{staticClass:"section__lead"},[e._v("404 Error, The page you were looking for couldn't be found")]),n("div",{staticClass:"notfound__dp"},[n("img",{attrs:{src:s("b5ea"),alt:"404 Not Found"}})])])])])}],i={name:"NotFound"},o=i,r=(s("c54b"),s("2877")),c=Object(r["a"])(o,n,a,!0,null,"41e80640",null);e["default"]=c.exports},8722:function(t,e,s){"use strict";var n=s("3115"),a=s.n(n);a.a},9398:function(t,e,s){},b5ea:function(t,e,s){t.exports=s.p+"img/undraw_empty_xct9.a5768414.svg"},c54b:function(t,e,s){"use strict";var n=s("9398"),a=s.n(n);a.a},dda5:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page profile"},[s("section",{staticClass:"section section--profile mt-6 profile__content"},[t._m(0),s("div",{staticClass:"section__content"},[t.user?s("div",{staticClass:"infobox__container"},[s("span",{staticClass:"lead"},[t._v("Your current profile")]),s("div",{staticClass:"infobox__item"},[s("img",{staticClass:"profile__image",attrs:{src:t.user.image,alt:""}})]),s("div",{staticClass:"infobox__item"},[s("span",{staticClass:"infobox__item--left"},[t._v("Username")]),s("span",{staticClass:"infobox__item--right"},[t._v(t._s(t.user.username))])]),s("div",{staticClass:"infobox__item"},[s("span",{staticClass:"infobox__item--left"},[t._v("Fullname")]),s("span",{staticClass:"infobox__item--right"},[t._v(t._s(t.user.fullName))])])]):t._e()])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section__heading mt-6 mb-3"},[s("span",{staticClass:"section__title"},[t._v("Dashboard")])])}],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),o=s("bc3a"),r=s.n(o),c=s("2f62");s("7b00");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"UserProfile",data:function(){return{user:null}},computed:l({},Object(c["c"])(["getUserData","isAuthorized"])),methods:l({},Object(c["b"])(["saveUserData","toggleAuthState"])),created:function(){var t=this,e={method:"get",url:"/v1/user/current"};r()(e).then((function(e){t.$store.dispatch("toggleAuthState",!0),t.$store.dispatch("saveUserData",e.data),t.user=e.data}))}},f=_,d=(s("8722"),s("2877")),p=Object(d["a"])(f,n,a,!1,null,"3592d8fc",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-687899c4.ea20909e.js.map