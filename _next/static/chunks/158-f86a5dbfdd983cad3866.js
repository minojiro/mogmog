(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{3301:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(5723));t.default=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o="string"===typeof t?t:"$get",u="string"===typeof t?n[0]:t;return i.default(!1===(null===u||void 0===u?void 0:u.enabled)?null:[e.$path(u),o],(function(){return e[o](u)}),u)}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3367);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||i&&u}},7947:function(e,t,n){"use strict";var r=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),a=(o=n(617))&&o.__esModule?o:{default:o},c=n(3367),f=n(4287),s=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,u=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){u=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,f=h.length;c<f;c++){var s=h[c];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=i.props[s],d=r[s]||new Set;"name"===s&&u||!d.has(l)?(d.add(l),r[s]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:o})}))}function y(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(f.HeadManagerContext);return u.default.createElement(a.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}y.rewind=function(){};var g=y;t.default=g},617:function(e,t,n){"use strict";var r=n(3115),i=n(2553),o=n(2012),u=(n(450),n(9807)),a=n(7690),c=n(9828);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),l=function(e){u(n,e);var t=f(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),i=n(7381),o=n(3585),u=n(5725);e.exports=function(e){return r(e)||i(e)||o(e)||u()}},5723:function(e,t,n){"use strict";n.r(t),n.d(t,{SWRConfig:function(){return D},cache:function(){return l},default:function(){return H},mutate:function(){return A},trigger:function(){return R},useSWRInfinite:function(){return W}});var r=n(7294),i=Object.prototype.hasOwnProperty;var o=new WeakMap,u=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):o.has(e[n])?r=o.get(e[n]):(r=u,o.set(e[n],u++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),c=!0,f={isOnline:function(){return c},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){c=!0,e()}),!1),window.addEventListener("offline",(function(){return c=!1}),!1))}},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=new a;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),p=s({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"===typeof t){for(r in o=0,t){if(i.call(t,r)&&++o&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!==t&&n!==n},isPaused:function(){return!1}},f),h="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),v=h?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},y=h?r.useEffect:r.useLayoutEffect,g=(0,r.createContext)({});g.displayName="SWRConfigContext";var b=g,m=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},O={},S={},j={},k={},x={},C={},M={},P=function(){var e=0;return function(){return++e}}();if(!h){var E=function(e){if(p.isDocumentVisible()&&p.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof p.registerOnFocus&&p.registerOnFocus((function(){return E(j)})),"function"===typeof p.registerOnReconnect&&p.registerOnReconnect((function(){return E(k)}))}var R=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=x[r];if(r&&u){for(var a=l.get(r),c=l.get(i),f=l.get(o),s=[],d=0;d<u.length;++d)s.push(u[d](t,a,c,f,d>0));return Promise.all(s).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},_=function(e,t,n,r){var i=x[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},A=function(e,t,n){return void 0===n&&(n=!0),m(void 0,void 0,void 0,(function(){var r,i,o,u,a,c,f,s,d,p,h,v,y;return w(this,(function(g){switch(g.label){case 0:if(r=l.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,R(e,n)];if(C[i]=P()-1,M[i]=0,u=C[i],a=S[i],s=!1,t&&"function"===typeof t)try{t=t(l.get(i))}catch(b){t=void 0,f=b}if(!t||"function"!==typeof t.then)return[3,5];s=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return c=g.sent(),[3,4];case 3:return d=g.sent(),f=d,[3,4];case 4:return[3,6];case 5:c=t,g.label=6;case 6:if((p=function(){if(u!==C[i]||a!==S[i]){if(f)throw f;return!0}})())return[2,c];if("undefined"!==typeof c&&l.set(i,c),l.set(o,f),M[i]=P()-1,!s&&p())return[2,c];if(h=x[i]){for(v=[],y=0;y<h.length;++y)v.push(h[y](!!n,c,f,void 0,y>0));return[2,Promise.all(v).then((function(){if(f)throw f;return l.get(i)}))]}if(f)throw f;return[2,c]}}))}))};Object.defineProperty(b.Provider,"default",{value:p});var D=b.Provider,I=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},p,(0,r.useContext)(b),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,a=l.serializeKey(i),c=a[0],f=a[1],s=a[2],d=a[3],g=(0,r.useRef)(o);y((function(){g.current=o}));var E=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},R=function(){var e=l.get(c);return"undefined"===typeof e?o.initialData:e},D=function(){return!!l.get(d)||c&&E()},I=R(),T=l.get(s),V=D(),z=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),W=(0,r.useRef)({data:I,error:T,isValidating:V});(0,r.useDebugValue)(W.current.data);var H,K,L=(0,r.useState)({})[1],F=(0,r.useCallback)((function(e){var t=!1;for(var n in e)W.current[n]!==e[n]&&(W.current[n]=e[n],z.current[n]&&(t=!0));if(t){if($.current||!N.current)return;L({})}}),[]),$=(0,r.useRef)(!1),q=(0,r.useRef)(c),N=(0,r.useRef)(!1),G=(0,r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];$.current||N.current&&c===q.current&&(t=g.current)[e].apply(t,n)}),[c]),U=(0,r.useCallback)((function(e,t){return A(q.current,e,t)}),[]),Q=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},B=(0,r.useCallback)((function(t){return void 0===t&&(t={}),m(e,void 0,void 0,(function(){var e,n,r,i,a,p,h,v,y,b;return w(this,(function(m){switch(m.label){case 0:if(!c||!u)return[2,!1];if($.current)return[2,!1];if(g.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,i=void 0!==r&&r,a=!0,p="undefined"!==typeof O[c]&&i,m.label=1;case 1:return m.trys.push([1,6,,7]),F({isValidating:!0}),l.set(d,!0),p||_(c,W.current.data,W.current.error,!0),h=void 0,v=void 0,p?(v=S[c],[4,O[c]]):[3,3];case 2:return h=m.sent(),[3,5];case 3:return o.loadingTimeout&&!l.get(c)&&setTimeout((function(){a&&G("onLoadingSlow",c,o)}),o.loadingTimeout),O[c]=null!==f?u.apply(void 0,f):u(c),S[c]=v=P(),[4,O[c]];case 4:h=m.sent(),setTimeout((function(){delete O[c],delete S[c]}),o.dedupingInterval),G("onSuccess",h,c,o),m.label=5;case 5:return S[c]>v?[2,!1]:C[c]&&(v<=C[c]||v<=M[c]||0===M[c])?(F({isValidating:!1}),[2,!1]):(l.set(s,void 0),l.set(d,!1),y={isValidating:!1},"undefined"!==typeof W.current.error&&(y.error=void 0),o.compare(W.current.data,h)||(y.data=h),o.compare(l.get(c),h)||l.set(c,h),F(y),p||_(c,h,y.error,!1),[3,7]);case 6:return b=m.sent(),delete O[c],delete S[c],g.current.isPaused()?(F({isValidating:!1}),[2,!1]):(l.set(s,b),W.current.error!==b&&(F({isValidating:!1,error:b}),p||_(c,void 0,b,!1)),G("onError",b,c,o),o.shouldRetryOnError&&G("onErrorRetry",b,c,o,B,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(y((function(){if(c){$.current=!1;var e=N.current;N.current=!0;var t=W.current.data,n=R();q.current=c,o.compare(t,n)||F({data:n});var r=function(){return B({dedupe:!0})};(e||E())&&("undefined"===typeof n||h?r():v(r));var i=!1,u=Q(j,(function(){!i&&g.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),g.current.focusThrottleInterval))})),a=Q(k,(function(){g.current.revalidateOnReconnect&&r()})),f=Q(x,(function(e,t,n,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||o.compare(W.current.data,t)||(a.data=t,c=!0),W.current.error!==n&&(a.error=n,c=!0),"undefined"!==typeof i&&W.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&F(a),!!e&&(u?r():B())}));return function(){F=function(){return null},$.current=!0,u(),a(),f()}}}),[c,B]),y((function(){var t=null,n=function(){return m(e,void 0,void 0,(function(){return w(this,(function(e){switch(e.label){case 0:return W.current.error||!g.current.refreshWhenHidden&&!g.current.isDocumentVisible()||!g.current.refreshWhenOffline&&!g.current.isOnline()?[3,2]:[4,B({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return g.current.refreshInterval&&t&&(t=setTimeout(n,g.current.refreshInterval)),[2]}}))}))};return g.current.refreshInterval&&(t=setTimeout(n,g.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,B]),o.suspense){if(H=l.get(c),K=l.get(s),"undefined"===typeof H&&(H=I),"undefined"===typeof K&&(K=T),"undefined"===typeof H&&"undefined"===typeof K){if(O[c]||B(),O[c]&&"function"===typeof O[c].then)throw O[c];H=O[c]}if("undefined"===typeof H&&K)throw K}var J=(0,r.useMemo)((function(){var e={revalidate:B,mutate:U};return Object.defineProperties(e,{error:{get:function(){return z.current.error=!0,o.suspense?K:q.current===c?W.current.error:T},enumerable:!0},data:{get:function(){return z.current.data=!0,o.suspense?H:q.current===c?W.current.data:I},enumerable:!0},isValidating:{get:function(){return z.current.isValidating=!0,!!c&&W.current.isValidating},enumerable:!0}}),e}),[B,I,T,U,c,o.suspense,K,H]);return J},T=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},V=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function W(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},p,(0,r.useContext)(b),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]?t[1]:o.fetcher,a=o.initialSize,c=void 0===a?1:a,f=o.revalidateAll,s=void 0!==f&&f,d=o.persistSize,h=void 0!==d&&d,v=z(o,["initialSize","revalidateAll","persistSize"]),g=null;try{g=l.serializeKey(i(0,null))[0]}catch(R){}var m=(0,r.useState)({})[1],w=null;g&&(w="ctx@"+g);var O=null;g&&(O="len@"+g);var S=(0,r.useRef)(!1),j=(0,r.useCallback)((function(){var e=l.get(O);return"undefined"!==typeof e?e:c}),[O,c]),k=(0,r.useRef)(j());y((function(){S.current?l.set(O,h?k.current:c):S.current=!0}),[g]);var x=(0,r.useRef)(),C=I(g?["inf",g]:null,(function(){return T(e,void 0,void 0,(function(){var e,t,n,r,a,c,f,d,p,h,v;return V(this,(function(y){switch(y.label){case 0:e=l.get(w)||{},t=e.data,n=e.force,r=[],a=j(),c=null,f=0,y.label=1;case 1:return f<a?(d=l.serializeKey(i(f,c)),p=d[0],h=d[1],p?(v=l.get(p),s||n||"undefined"===typeof v||"undefined"===typeof n&&0===f&&"undefined"!==typeof x.current||t&&!o.compare(t[f],v)?null===h?[3,3]:[4,u.apply(void 0,h)]:[3,6]):[3,8]):[3,8];case 2:return v=y.sent(),[3,5];case 3:return[4,u(p)];case 4:v=y.sent(),y.label=5;case 5:l.set(p,v),y.label=6;case 6:r.push(v),c=v,y.label=7;case 7:return++f,[3,1];case 8:return l.delete(w),[2,r]}}))}))}),v);y((function(){x.current=C.data}),[C.data]);var M=(0,r.useCallback)((function(e,t){if(void 0===t&&(t=!0),t&&"undefined"!==typeof e){var n=x.current;l.set(w,{data:n,force:!1})}else t&&l.set(w,{force:!0});return C.mutate(e,t)}),[w]),P=(0,r.useCallback)((function(e){var t;return"function"===typeof e?t=e(j()):"number"===typeof e&&(t=e),"number"===typeof t&&(l.set(O,t),k.current=t),m({}),M((function(e){return e}))}),[O,j,M,m]),E={size:j(),setSize:P,mutate:M};return Object.defineProperties(E,{error:{get:function(){return C.error},enumerable:!0},data:{get:function(){return C.data},enumerable:!0},revalidate:{get:function(){return C.revalidate},enumerable:!0},isValidating:{get:function(){return C.isValidating},enumerable:!0}}),E}var H=I}}]);