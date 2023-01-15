(()=>{"use strict";var t={424:(t,n,r)=>{r.d(n,{Z:()=>_});var e=r(81),a=r.n(e),o=r(645),i=r.n(o),m=r(626),c=r.n(m),s=new URL(r(681),r.b),l=i()(a()),d=c()(s);l.push([t.id,"@font-face {\r\n\t/* https://www.dafont.com/spongeboy-me-bob.font */\r\n\tfont-family: 'Spongeboy Me Bob';\r\n\tsrc: url("+d+") format('woff');\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Spongeboy Me Bob';\r\n}\r\n\r\n.navbar {\r\n\tdisplay: flex;\r\n\tjustify-content: right;\r\n\theight: 12rem;\r\n}\r\n\r\n.navbar__nav {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tmargin-right: 12rem;\r\n\twidth: 30rem;\r\n}\r\n\r\n.navbar__nav__item {\r\n\tfont-size: 1.6rem;\r\n\tcolor: rgb(220, 0, 0);\r\n\tpadding: 0.8rem;\r\n\tborder-radius: 1.5rem;\r\n}\r\n\r\n.navbar__nav__item:hover {\r\n\tcursor: pointer;\r\n\tcolor: rgb(251, 227, 128);\r\n}\r\n\r\n.navbar__nav__item--active {\r\n\tbackground-color: rgb(220, 0, 0);\r\n\tcolor: white;\r\n}\r\n\r\n.background-image {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tz-index: -1;\r\n\tobject-fit: cover;\r\n\topacity: 0.5;\r\n}\r\n\r\n@media only screen and (max-width: 1300px) {\r\n\t.navbar__nav__item {\r\n\t\tfont-size: 1.4rem;\r\n\t\tpadding: 0.7rem;\r\n\t\tborder-radius: 1.4rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n\t.navbar__nav {\r\n\t\tmargin: auto;\r\n\t}\r\n\r\n\t.navbar__nav__item {\r\n\t\tfont-size: 1.4rem;\r\n\t\tpadding: 0.7rem;\r\n\t\tborder-radius: 1.4rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.navbar__nav {\r\n\t\tmargin: auto;\r\n\t\tjustify-content: space-evenly;\r\n\t}\r\n\r\n\t.navbar__nav__item {\r\n\t\tfont-size: 1.2rem;\r\n\t\tpadding: 0.5rem;\r\n\t\tborder-radius: 1.2rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 550px) {\r\n\t.navbar__nav__item {\r\n\t\tfont-size: 1rem;\r\n\t\tpadding: 0.4rem;\r\n\t\tborder-radius: 1.1rem;\r\n\t}\r\n}",""]);const _=l},101:(t,n,r)=>{r.d(n,{Z:()=>m});var e=r(81),a=r.n(e),o=r(645),i=r.n(o)()(a());i.push([t.id,".contact {\r\n\tmargin: auto;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmax-width: 65rem;\r\n\theight: 43rem;\r\n\tbackground-color: rgb(251, 227, 128);\r\n\tborder: 4px solid rgb(220, 0, 0);\r\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 7.5px 15px 0px;\r\n}\r\n\r\n.contact__title-container {\r\n\tdisplay: flex;\r\n\tmargin-top: 2rem;\r\n\talign-items: center;\r\n}\r\n\r\n.contact__title-container__title {\r\n\tmargin: auto;\r\n\tfont-size: 3rem;\r\n\ttext-align: center;\r\n\tcolor: rgb(220, 0, 0);\r\n\tline-height: 5rem;\r\n}\r\n\r\n.contact__title-container__image {\r\n\twidth: 15rem;\r\n\tmargin-right: 2rem;\r\n}\r\n\r\n.contact__info {\r\n\tmargin: auto;\r\n\tmargin-top: 2rem;\r\n\tmargin-bottom: 1rem;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\theight: 25rem;\r\n}\r\n\r\n.contact__info__item {\r\n\tfont-size: 2.2rem;\r\n\tline-height: 5rem;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n\t.contact {\r\n\t\twidth: 50rem;\r\n\t\theight: 40rem;\r\n\t}\r\n\r\n\t.contact__title-container__title {\r\n\t\tfont-size: 2rem;\r\n\t\tline-height: 4rem;\r\n\t}\r\n\r\n\t.contact__title-container__image {\r\n\t\twidth: 12rem;\r\n\t}\r\n\r\n\t.contact__info {\r\n\t\tmargin-top: 1rem;\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t.contact__info__item {\r\n\t\tfont-size: 1.8rem;\r\n\t\tline-height: 4rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n\t.contact {\r\n\t\twidth: 40rem;\r\n\t\theight: 38rem;\r\n\t}\r\n\r\n\t.contact__title-container {\r\n\t\tmargin-top: 0rem;\r\n\t\tflex-direction: column-reverse;\r\n\t\twidth: 32rem;\r\n\t\tmargin: auto;\r\n\t}\r\n\r\n\t.contact__title-container__image {\r\n\t\twidth: 10rem;\r\n\t\tmargin-right: 0;\r\n\t\tmargin-top: 2rem;\r\n\t\tmargin-bottom: 1rem;\r\n\t}\r\n\r\n\t.contact__info {\r\n\t\tmargin-top: 0;\r\n\t\tmargin-bottom: 1rem;\r\n\t}\r\n\r\n\t.contact__info__item {\r\n\t\tfont-size: 1.5rem;\r\n\t\tline-height: 3rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n\t.contact {\r\n\t\twidth: 100%;\r\n\t\theight: 34rem;\r\n\t\tborder-left: none;\r\n\t\tborder-right: none;\r\n\t}\r\n\r\n\t.contact__title-container {\r\n\t\twidth: 25rem;\r\n\t\tmargin-bottom: 0;\r\n\t\tmargin-top: 0;\r\n\t}\r\n\r\n\t.contact__title-container__title {\r\n\t\tfont-size: 1.6rem;\r\n\t}\r\n\r\n\t.contact__title-container__image {\r\n\t\twidth: 9rem;\r\n\t}\r\n\r\n\t.contact__info {\r\n\t\tmargin-bottom: 0;\r\n\t\theight: 14rem;\r\n\t}\r\n\r\n\t.contact__info__item {\r\n\t\tfont-size: 1.2rem;\r\n\t\tline-height: 2rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 470px) {\r\n\t.contact__title-container {\r\n\t\tmargin: auto;\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n\t.contact__title-container__title {\r\n\t\tfont-size: 1.3rem;\r\n\t}\r\n\r\n\t.contact__title-container__image {\r\n\t\twidth: 8rem;\r\n\t}\r\n\r\n\t.contact__info {\r\n\t\tmargin-left: 1rem;\r\n\t\tmargin-right: 01rem;\r\n\t}\r\n\r\n\t.contact__info__item {\r\n\t\tfont-size: 1.1rem;\r\n\t\tline-height: 2rem;\r\n\t}\r\n}\r\n",""]);const m=i},943:(t,n,r)=>{r.d(n,{Z:()=>m});var e=r(81),a=r.n(e),o=r(645),i=r.n(o)()(a());i.push([t.id,".home {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: fit-content;\r\n\tmargin: auto;\r\n}\r\n\r\n.home__title {\r\n\tmargin-top: 10rem;\r\n\tfont-size: 5rem;\r\n\tbackground-color: rgb(251, 227, 128);\r\n\tcolor: rgb(220, 0, 0);\r\n\tpadding: 1.4rem;\r\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 7.5px 15px 0px;\r\n}\r\n\r\n.home__button {\r\n\tfont-family: 'Spongeboy Me Bob';\r\n\tmargin: auto;\r\n\tmargin-top: 4rem;\r\n\twidth: 13rem;\r\n\theight: 3.6rem;\r\n\tfont-size: 1.6rem;\r\n\tborder-radius: 2rem;\r\n\tbackground-color: rgb(220, 0, 0);\r\n\tcolor: white;\r\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 7.5px 15px 0px;\r\n}\r\n\r\n.home__button:hover {\r\n\tcursor: pointer;\r\n\twidth: 13.8rem;\r\n\theight: 3.8rem;\r\n\tfont-size: 1.7rem;\r\n\tcolor: rgb(251, 227, 128);\r\n}\r\n\r\n@media only screen and (max-width: 1300px) {\r\n\t.home__title {\r\n\t\tfont-size: 4rem;\t\r\n\t}\r\n\r\n\t.home__button {\r\n\t\twidth: 12rem;\r\n\t\theight: 3.4rem;\r\n\t\tfont-size: 1.4rem;\r\n\t}\r\n\r\n\t.home__button:hover {\r\n\t\twidth: 12.8rem;\r\n\t\theight: 3.6rem;\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n\t.home__title {\r\n\t\tfont-size: 3rem;\t\r\n\t}\r\n\r\n\t.home__button {\r\n\t\twidth: 11rem;\r\n\t\theight: 3.2rem;\r\n\t\tfont-size: 1.3rem;\r\n\t}\r\n\r\n\t.home__button:hover {\r\n\t\twidth: 11.8rem;\r\n\t\theight: 3.4rem;\r\n\t\tfont-size: 1.4rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n\t.home__title {\r\n\t\tfont-size: 2rem;\t\r\n\t}\r\n\r\n\t.home__button {\r\n\t\twidth: 10rem;\r\n\t\theight: 3rem;\r\n\t\tfont-size: 1.1rem;\r\n\t}\r\n\r\n\t.home__button:hover {\r\n\t\twidth: 10.8rem;\r\n\t\theight: 3.2rem;\r\n\t\tfont-size: 1.2rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 550px) {\r\n\t.home__title {\r\n\t\tfont-size: 1.2rem;\t\r\n\t\tpadding: 0.8rem;\r\n\t}\r\n\r\n\t.home__button {\r\n\t\twidth: 9rem;\r\n\t\theight: 2rem;\r\n\t\tfont-size: 0.9rem;\r\n\t\tmargin-top: 1.5rem;\r\n\t}\r\n\r\n\t.home__button:hover {\r\n\t\twidth: 9.8rem;\r\n\t\theight: 2.4rem;\r\n\t\tfont-size: 1rem;\r\n\t}\r\n}\r\n",""]);const m=i},223:(t,n,r)=>{r.d(n,{Z:()=>m});var e=r(81),a=r.n(e),o=r(645),i=r.n(o)()(a());i.push([t.id,".menu {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tbackground-color: rgb(228, 212, 158);\r\n\tmax-width: 60rem;\r\n\tmargin: auto;\r\n\tborder: 4px solid rgb(81, 39, 0);\r\n\tbox-shadow: rgba(0, 0, 0, 0.15) 0px 7.5px 15px 0px;\r\n}\r\n\r\n.menu__title {\r\n\tfont-size: 5rem;\r\n\tcolor: rgb(104, 32, 23);\r\n\tmargin: auto;\r\n\tmargin-top: 2rem;\r\n}\r\n\r\n.menu__list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: fit-content;\r\n\tmargin: auto;\r\n\tmargin-top: 4rem;\r\n\tmargin-bottom: 2rem;\r\n\theight: 30rem;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.menu__list__item {\r\n\tfont-size: 3rem;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n\t.menu {\r\n\t\twidth: 45rem;\t\t\r\n\t}\r\n\r\n\t.menu__title {\r\n\t\tfont-size: 4rem;\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\theight: 25rem;\r\n\t}\r\n\r\n\t.menu__list__item {\r\n\t\tfont-size: 2.2rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n\t.menu {\r\n\t\twidth: 100%;\t\r\n\t\tborder-left: none;\r\n\t\tborder-right: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\t.menu__title {\r\n\t\tfont-size: 3rem;\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\theight: 20rem;\r\n\t\tmargin-top: 2rem;\r\n\t}\r\n\r\n\t.menu__list__item {\r\n\t\tfont-size: 1.8rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n\t.menu__title {\r\n\t\tfont-size: 2rem;\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\theight: 15rem;\r\n\t}\r\n\r\n\t.menu__list__item {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 350px) {\r\n\t.menu__title {\r\n\t\tfont-size: 1.5rem;\r\n\t}\r\n\r\n\t.menu__list {\r\n\t\theight: 13rem;\r\n\t}\r\n\r\n\t.menu__list__item {\r\n\t\tfont-size: 1.2rem;\r\n\t}\r\n}\r\n",""]);const m=i},917:(t,n,r)=>{r.d(n,{Z:()=>m});var e=r(81),a=r.n(e),o=r(645),i=r.n(o)()(a());i.push([t.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}",""]);const m=i},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r="",e=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),e&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=t(n),e&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(t,r,e,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(e)for(var m=0;m<this.length;m++){var c=this[m][0];null!=c&&(i[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);e&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},626:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function r(t){for(var r=-1,e=0;e<n.length;e++)if(n[e].identifier===t){r=e;break}return r}function e(t,e){for(var o={},i=[],m=0;m<t.length;m++){var c=t[m],s=e.base?c[0]+e.base:c[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var _=r(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==_)n[_].references++,n[_].updater(u);else{var p=a(u,e);e.byIndex=m,n.splice(m,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function a(t,n){var r=n.domAPI(n);return r.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;r.update(t=n)}else r.remove()}}t.exports=function(t,a){var o=e(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var m=r(o[i]);n[m].references--}for(var c=e(t,a),s=0;s<o.length;s++){var l=r(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:t=>{var n={};t.exports=function(t,r){var e=function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,r)=>{t.exports=function(t){var n=r.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(r){!function(t,n,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,a&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(e,t,n.options)}(n,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},681:(t,n,r)=>{t.exports=r.p+"08e39298960a8a9bf554.woff"}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var n=r.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{const t=r.p+"3a3565befe80305ea3e4.jpg",n=r.p+"fca918550aa8ec9206fe.png",e=r.p+"fcf5ae562ae7181b69db.jpg";var a=r(379),o=r.n(a),i=r(795),m=r.n(i),c=r(569),s=r.n(c),l=r(565),d=r.n(l),_=r(216),u=r.n(_),p=r(589),h=r.n(p),f=r(943),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=m(),g.insertStyleElement=u(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b=function(){const t=document.createElement("div");t.className="home";const n=document.createElement("h1");n.className="home__title",n.innerHTML="Come aboard the Krusty Krab";const r=document.createElement("button");r.textContent="Order Now",r.className="home__button",t.append(n,r),document.getElementById("content").append(t)};var v=r(223),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=u(),o()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;var y=r(101),w={};w.styleTagTransform=h(),w.setAttributes=d(),w.insert=s().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=u(),o()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const E=r.p+"12b11416f29ca85536dd.png";r.p;var N=r(917),z={};z.styleTagTransform=h(),z.setAttributes=d(),z.insert=s().bind(null,"head"),z.domAPI=m(),z.insertStyleElement=u(),o()(N.Z,z),N.Z&&N.Z.locals&&N.Z.locals;var C=r(424),T={};T.styleTagTransform=h(),T.setAttributes=d(),T.insert=s().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=u(),o()(C.Z,T),C.Z&&C.Z.locals&&C.Z.locals;const Z=document.getElementById("content"),S=document.createElement("img");S.src=t,S.className="background-image",Z.append(S);const k=document.createElement("header");k.className="navbar";const M=document.createElement("nav");M.className="navbar__nav";const j=document.createElement("a");j.className="navbar__nav__item",j.textContent="Home",j.addEventListener("click",(()=>{Z.textContent="",j.className="navbar__nav__item navbar__nav__item--active",I.className=B.className="navbar__nav__item",Z.append(S),Z.append(k),b()}));const A=document.createElement("img");A.src=n,A.className="background-image";const I=document.createElement("a");I.className="navbar__nav__item",I.textContent="Menu",I.addEventListener("click",(()=>{Z.textContent="",I.className="navbar__nav__item navbar__nav__item--active",j.className=B.className="navbar__nav__item",Z.append(A),Z.append(k),function(){const t=document.createElement("div");t.className="menu";const n=document.createElement("h1");n.innerHTML="GALLEY GRUB",n.className="menu__title";const r=document.createElement("ul");r.className="menu__list";const e=document.createElement("li");e.textContent="Krabby Patty ........ 2.00",e.className="menu__list__item";const a=document.createElement("li");a.textContent="Krabby Patty ........ 3.99",a.className="menu__list__item";const o=document.createElement("li");o.textContent="Krabby Deluxe ....... 3.00",o.className="menu__list__item";const i=document.createElement("li");i.textContent="SeaWeed Salad ....... 1.50",i.className="menu__list__item";const m=document.createElement("li");m.textContent="Coral Bits .............. 1.59",m.className="menu__list__item",r.append(e,a,o,i,m),t.append(n,r),document.getElementById("content").append(t)}()}));const L=document.createElement("img");L.src=e,L.className="background-image";const B=document.createElement("a");B.className="navbar__nav__item",B.textContent="Contact",B.addEventListener("click",(()=>{Z.textContent="",B.className="navbar__nav__item navbar__nav__item--active",j.className=I.className="navbar__nav__item",Z.append(L),Z.append(k),function(){const t=document.createElement("div");t.className="contact";const n=document.createElement("div");n.className="contact__title-container";const r=document.createElement("img");r.src=E,r.className="contact__title-container__image";const e=document.createElement("h1");e.innerHTML="The most efficient service of the Seven Seas!",e.className="contact__title-container__title",n.append(e,r);const a=document.createElement("ul");a.className="contact__info";const o=document.createElement("li");o.textContent="📍 Bikini Bottom, 124 Conch Street",o.className="contact__info__item";const i=document.createElement("li");i.textContent="🕑 Mon - Sat: 8am - 6pm (Tuesday closes 8pm)",i.className="contact__info__item";const m=document.createElement("li");m.textContent="📞 (715) 820-3420",m.className="contact__info__item",a.append(o,i,m),t.append(n,a),document.getElementById("content").append(t)}()})),M.append(j,I,B),k.append(M),Z.append(k),j.className="navbar__nav__item navbar__nav__item--active",b()})()})();