(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[475],{7774:function(e,n,r){"use strict";var a=r(5893),t=(r(7294),r(1664));n.Z=function(){return(0,a.jsxs)("nav",{className:"navbar pt-6 pb-6",children:[(0,a.jsx)("div",{className:"navbar-brand",children:(0,a.jsx)("a",{className:"navbar-item",href:"/",children:(0,a.jsx)("img",{src:"/mogmog-logo.svg",width:"100",style:{maxHeight:"unset"},alt:"mogmog"})})}),(0,a.jsx)("div",{id:"navbarBasicExample",className:"navbar-menu",children:(0,a.jsxs)("div",{className:"navbar-start",children:[(0,a.jsx)(t.default,{href:"/",children:(0,a.jsx)("a",{className:"navbar-item",children:"\u98df\u54c1\u4e00\u89a7"})}),(0,a.jsx)(t.default,{href:"/products/new",children:(0,a.jsx)("a",{className:"navbar-item",children:"\u65b0\u898f\u8ffd\u52a0"})})]})})]})}},5826:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var a=r(5893),t=r(6265),s=(r(7294),function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("figure",{className:"image is-96x96 mb-1",children:(0,a.jsx)("img",{src:"//placehold.jp/400x400.png",alt:""})}),(0,a.jsx)("div",{className:"file is-boxed",children:(0,a.jsxs)("label",{className:"file-label",children:[(0,a.jsx)("input",{className:"file-input",type:"file",name:"resume"}),(0,a.jsxs)("span",{className:"file-cta",children:[(0,a.jsx)("span",{className:"file-icon",children:(0,a.jsx)("i",{className:"fas fa-upload"})}),(0,a.jsx)("span",{className:"file-label",children:"Choose a file\u2026"})]})]})})]})});function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var i=function(e){var n=e.product,r=e.onChange,t=e.onSubmit,l=function(e){r(c(c({},n),e))};return(0,a.jsxs)("form",{onSubmit:function(e){t(),e.preventDefault()},children:[(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"label",children:"Name"}),(0,a.jsx)("div",{className:"control",children:(0,a.jsx)("input",{type:"text",className:"input",value:n.name,onChange:function(e){return l({name:e.target.value})},placeholder:"name"})})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"label",children:"Amazon \u5546\u54c1\u30da\u30fc\u30b8 URL"}),(0,a.jsx)("div",{className:"control",children:(0,a.jsx)("input",{type:"text",className:"input",value:n.amazonUrl,onChange:function(e){return l({amazonUrl:e.target.value})},placeholder:"amazonUrl"})})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"label",children:"\u8868\u306e\u753b\u50cf"}),(0,a.jsx)("div",{className:"control",children:(0,a.jsx)(s,{})})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{className:"label",children:"\u6210\u5206\u8868\u306e\u753b\u50cf"}),(0,a.jsx)("div",{className:"control",children:(0,a.jsx)(s,{})})]}),(0,a.jsx)("div",{className:"control",children:(0,a.jsx)("button",{className:"button is-link",type:"submit",children:"\u6295\u7a3f"})})]})}},6071:function(e,n,r){"use strict";var a=r(3848),t=r(9448);n.default=void 0;var s=t(r(7294)),l=r(1689),c=r(2441),i=r(5749),o={};function u(e,n,r,a){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,r,a).catch((function(e){0}));var t=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;o[n+"%"+r+(t?"%"+t:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,c.useRouter)(),t=r&&r.asPath||"/",f=s.default.useMemo((function(){var n=(0,l.resolveHref)(t,e.href,!0),r=a(n,2),s=r[0],c=r[1];return{href:s,as:e.as?(0,l.resolveHref)(t,e.as):c||s}}),[t,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,h=e.shallow,b=e.scroll,j=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var x=s.Children.only(m),g=x&&"object"===typeof x&&x.ref,N=(0,i.useIntersection)({rootMargin:"200px"}),y=a(N,2),O=y[0],w=y[1],E=s.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,s.useEffect)((function(){var e=w&&n&&(0,l.isLocalURL)(d),a="undefined"!==typeof j?j:r&&r.locale,t=o[d+"%"+p+(a?"%"+a:"")];e&&!t&&u(r,d,p,{locale:a})}),[p,d,w,j,n,r]);var C={ref:E,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,r,a,t,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),n[t?"replace":"push"](r,a,{shallow:s,locale:i,scroll:c}))}(e,r,d,p,v,h,b,j)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var _="undefined"!==typeof j?j:r&&r.locale,L=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(p,_,r&&r.locales,r&&r.domainLocales);C.href=L||(0,l.addBasePath)((0,l.addLocale)(p,_,r&&r.defaultLocale))}return s.default.cloneElement(x,C)};n.default=f},5749:function(e,n,r){"use strict";var a=r(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!l,i=(0,t.useRef)(),o=(0,t.useState)(!1),u=a(o,2),f=u[0],d=u[1],p=(0,t.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var a=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var a=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:t,elements:a}),r}(r),t=a.id,s=a.observer,l=a.elements;return l.set(e,n),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),c.delete(t))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,t.useEffect)((function(){if(!l&&!f){var e=(0,s.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[f]),[p,f]};var t=r(7294),s=r(8391),l="undefined"!==typeof IntersectionObserver;var c=new Map},8332:function(e,n,r){"use strict";r.r(n);var a=r(5893),t=r(7294),s=r(5826),l=r(7774);n.default=function(){var e=(0,t.useState)({id:123,name:"",nutritionImageUrl:"//placehold.jp/100x100.png",amazonUrl:"",coverImageUrl:"//placehold.jp/100x100.png",createdAt:"2022-01-23 12:12:12"}),n=e[0],r=e[1];return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(s.Z,{product:n,onChange:r,onSubmit:function(){console.log(n)}})]})}},4874:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/new",function(){return r(8332)}])},1664:function(e,n,r){e.exports=r(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=4874,e(e.s=n);var n}));var n=e.O();_N_E=n}]);