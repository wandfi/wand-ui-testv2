"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5641],{85859:function(e,t,n){n.d(t,{Ry:function(){return hideOthers}});var r=new WeakMap,a=new WeakMap,o={},c=0,unwrapHost=function(e){return e&&(e.host||unwrapHost(e.parentNode))},applyAttributeToOthers=function(e,t,n,i){var u=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=unwrapHost(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});o[n]||(o[n]=new WeakMap);var l=o[n],d=[],s=new Set,f=new Set(u),keep=function(e){!e||s.has(e)||(s.add(e),keep(e.parentNode))};u.forEach(keep);var deep=function(e){!e||f.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))deep(e);else{var t=e.getAttribute(i),o=null!==t&&"false"!==t,c=(r.get(e)||0)+1,u=(l.get(e)||0)+1;r.set(e,c),l.set(e,u),d.push(e),1===c&&o&&a.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(i,"true")}})};return deep(t),s.clear(),c++,function(){d.forEach(function(e){var t=r.get(e)-1,o=l.get(e)-1;r.set(e,t),l.set(e,o),t||(a.has(e)||e.removeAttribute(i),a.delete(e)),o||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,a=new WeakMap,o={})}},hideOthers=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),applyAttributeToOthers(r,a,n,"aria-hidden")):function(){return null}}},75649:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(50044),a=n(2265),o="right-scroll-bar-position",c="width-before-scroll-bar",i=n(55835),u=(0,n(18427)._)(),nothing=function(){},l=a.forwardRef(function(e,t){var n=a.useRef(null),o=a.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),c=o[0],l=o[1],d=e.forwardProps,s=e.children,f=e.className,v=e.removeScrollBar,p=e.enabled,h=e.shards,m=e.sideCar,g=e.noIsolation,b=e.inert,y=e.allowPinchZoom,$=e.as,E=void 0===$?"div":$,w=(0,r.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=(0,i.q)([n,t]),C=(0,r.__assign)((0,r.__assign)({},w),c);return a.createElement(a.Fragment,null,p&&a.createElement(m,{sideCar:u,removeScrollBar:v,shards:h,noIsolation:g,inert:b,setCallbacks:l,allowPinchZoom:!!y,lockRef:n}),d?a.cloneElement(a.Children.only(s),(0,r.__assign)((0,r.__assign)({},C),{ref:S})):a.createElement(E,(0,r.__assign)({},C,{className:f,ref:S}),s))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:c,zeroRight:o};var d=n(26898),s=n(98662),f={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],a=t["padding"===e?"paddingRight":"marginRight"];return[parse(n),parse(r),parse(a)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return f;var t=getOffset(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},v=(0,s.Ws)(),getStyles=function(e,t,n,r){var a=e.left,i=e.top,u=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(o," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(o," .").concat(o," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},RemoveScrollBar=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,c=a.useMemo(function(){return getGapWidth(o)},[o]);return a.createElement(v,{styles:getStyles(c,!t,o,n?"":"!important")})},p=!1;if("undefined"!=typeof window)try{var h=Object.defineProperty({},"passive",{get:function(){return p=!0,!0}});window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch(e){p=!1}var m=!!p&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var r=getScrollVariables(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,a){var o,c=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,s=i>0,f=0,v=0;do{var p=getScrollVariables(e,u),h=p[0],m=p[1]-p[2]-c*h;(h||m)&&elementCouldBeScrolled(e,u)&&(f+=m,v+=h),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(a&&0===f||!a&&i>f)?d=!0:!s&&(a&&0===v||!a&&-i>v)&&(d=!0),d},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},g=0,b=[],y=(0,d.L)(u,function(e){var t=a.useRef([]),n=a.useRef([0,0]),o=a.useRef(),c=a.useState(g++)[0],i=a.useState(function(){return(0,s.Ws)()})[0],u=a.useRef(e);a.useEffect(function(){u.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var t=(0,r.__spreadArray)([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var r,a=getTouchXY(e),c=n.current,i="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],d=e.target,s=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=locationCouldBeScrolled(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=locationCouldBeScrolled(s,d)),!f)return!1;if(!o.current&&"changedTouches"in e&&(i||l)&&(o.current=r),!r)return!0;var v=o.current||r;return handleScroll(v,t,e,"h"===v?i:l,!0)},[]),d=a.useCallback(function(e){if(b.length&&b[b.length-1]===i){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var a=(u.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(a.length>0?l(e,a[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),f=a.useCallback(function(e,n,r,a){var o={name:e,delta:n,target:r,should:a};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),v=a.useCallback(function(e){n.current=getTouchXY(e),o.current=void 0},[]),p=a.useCallback(function(t){f(t.type,getDeltaXY(t),t.target,l(t,e.lockRef.current))},[]),h=a.useCallback(function(t){f(t.type,getTouchXY(t),t.target,l(t,e.lockRef.current))},[]);a.useEffect(function(){return b.push(i),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",d,m),document.addEventListener("touchmove",d,m),document.addEventListener("touchstart",v,m),function(){b=b.filter(function(e){return e!==i}),document.removeEventListener("wheel",d,m),document.removeEventListener("touchmove",d,m),document.removeEventListener("touchstart",v,m)}},[]);var y=e.removeScrollBar,$=e.inert;return a.createElement(a.Fragment,null,$?a.createElement(i,{styles:"\n  .block-interactivity-".concat(c," {pointer-events: none;}\n  .allow-interactivity-").concat(c," {pointer-events: all;}\n")}):null,y?a.createElement(RemoveScrollBar,{gapMode:"margin"}):null)}),$=a.forwardRef(function(e,t){return a.createElement(l,(0,r.__assign)({},e,{ref:t,sideCar:y}))});$.classNames=l.classNames;var E=$},31244:function(e,t,n){n.d(t,{EW:function(){return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c}});var r=n(2265);let a=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:$3db38b7d1fb3fe6a$var$createFocusGuard()),a++,()=>{1===a&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),a--}},[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},52759:function(e,t,n){let r;n.d(t,{M:function(){return f}});var a=n(13428),o=n(2265),c=n(42210),i=n(9381),u=n(16459);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},f=(0,o.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:p,...h}=e,[m,g]=(0,o.useState)(null),b=(0,u.W)(f),y=(0,u.W)(p),$=(0,o.useRef)(null),E=(0,c.e)(t,e=>g(e)),w=(0,o.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,o.useEffect)(()=>{if(r){function handleFocusIn(e){if(w.paused||!m)return;let t=e.target;m.contains(t)?$.current=t:$d3863c46a17e8a28$var$focus($.current,{select:!0})}function handleFocusOut(e){if(w.paused||!m)return;let t=e.relatedTarget;null===t||m.contains(t)||$d3863c46a17e8a28$var$focus($.current,{select:!0})}document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut);let e=new MutationObserver(function(e){let t=document.activeElement;for(let n of e)n.removedNodes.length>0&&!(null!=m&&m.contains(t))&&$d3863c46a17e8a28$var$focus(m)});return m&&e.observe(m,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut),e.disconnect()}}},[r,m,w.paused]),(0,o.useEffect)(()=>{if(m){v.add(w);let e=document.activeElement,t=m.contains(e);if(!t){let t=new CustomEvent(l,s);m.addEventListener(l,b),m.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if($d3863c46a17e8a28$var$focus(r,{select:t}),document.activeElement!==n)return}($d3863c46a17e8a28$var$getTabbableCandidates(m).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&$d3863c46a17e8a28$var$focus(m))}return()=>{m.removeEventListener(l,b),setTimeout(()=>{let t=new CustomEvent(d,s);m.addEventListener(d,y),m.dispatchEvent(t),t.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=e?e:document.body,{select:!0}),m.removeEventListener(d,y),v.remove(w)},0)}}},[m,b,y,w]);let S=(0,o.useCallback)(e=>{if(!n&&!r||w.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,a=document.activeElement;if(t&&a){let t=e.currentTarget,[r,o]=function(e){let t=$d3863c46a17e8a28$var$getTabbableCandidates(e),n=$d3863c46a17e8a28$var$findVisible(t,e),r=$d3863c46a17e8a28$var$findVisible(t.reverse(),e);return[n,r]}(t),c=r&&o;c?e.shiftKey||a!==o?e.shiftKey&&a===r&&(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(o,{select:!0})):(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(r,{select:!0})):a===t&&e.preventDefault()}},[n,r,w.paused]);return(0,o.createElement)(i.WV.div,(0,a.Z)({tabIndex:-1},h,{ref:E,onKeyDown:S}))});function $d3863c46a17e8a28$var$getTabbableCandidates(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $d3863c46a17e8a28$var$findVisible(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function $d3863c46a17e8a28$var$focus(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let v=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=$d3863c46a17e8a28$var$arrayRemove(r,e)).unshift(e)},remove(e){var t;null===(t=(r=$d3863c46a17e8a28$var$arrayRemove(r,e))[0])||void 0===t||t.resume()}});function $d3863c46a17e8a28$var$arrayRemove(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}}}]);