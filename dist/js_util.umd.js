(function(o,u){typeof exports=="object"&&typeof module<"u"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(o=typeof globalThis<"u"?globalThis:o||self,u(o.js_util={}))})(this,function(o){"use strict";function u(n){return typeof n=="object"?[n]:document.querySelectorAll(n)}function c(n){const e=u(n);for(let t=0;t<e.length;t++)e[t].style.display="none"}function f(n){const e=u(n);for(let t=0;t<e.length;t++)e[t].style.display="block"}function g(n,e=null){u(n).forEach(a=>{e.forEach(s=>{for(const r in s){const i=s[r];a.style[r]=typeof i=="number"?`${i}px`:i}})})}function d(n,e){const t=u(n),a=e.split(" ");for(let s=0;s<t.length;s++)a.forEach(r=>{t[s].classList?t[s].classList.add(r):t[s].className+=" "+r})}function m(n,e){const t=u(n),a=e.split(" ");for(let s=0;s<t.length;s++)a.forEach(r=>{t[s].classList?t[s].classList.remove(r):t[s].className+=" "+r})}function h(n,e){const t=u(n),a=e.split(" ");for(let s=0;s<t.length;s++)a.forEach(r=>{t[s].classList.toggle(r)})}function _(n,e,t="class"){const a=u(n);let s=!1;return typeof e=="string"&&t==="class"&&e.includes(" ")&&(e=e.split(" ")),a.forEach(r=>{if(!s)if(Array.isArray(e))if(t==="class"){const i=Array.from(r.classList);s=e.every(l=>i.includes(l))}else{const i=r.getAttribute(t);s=e.some(l=>l===i)}else t==="class"?s=r.classList.contains(e):s=r.getAttribute(t)===e}),s}function y(n,e){const t=u(n)[0];return t?t.getAttribute(e):null}function A(n,e,t){u(n).forEach(s=>{s.setAttribute(e,t)})}function v(n){const e=n.toLowerCase();if(e==="true"||e==="1")return!0;if(e==="false"||e==="0")return!1;throw new Error('Invalid input. Only "true", "false", "1", or "0" are allowed.')}function w(n){const e=parseFloat(n);if(isNaN(e))throw new Error("Invalid input. Cannot convert to a number.");return e}function b(n){switch(n){case"chrome":return navigator.userAgent.indexOf("Chrome")!=-1&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return typeof InstallTrigger<"u";case"ie":return!!document.documentMode;case"edge":return!!(navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("Edge/")!=-1);default:return null}}function T(n){var e=navigator.userAgent||navigator.vendor||window.opera;switch(n){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(e);case"ios":return typeof navigator.standalone=="boolean";default:return!0}}async function p(n=100){return new Promise((e,t)=>{isNaN(n)?t(new Error("is not a number")):setTimeout(e,n)})}o.u_addClass=d,o.u_browser=b,o.u_getAttr=y,o.u_hide=c,o.u_matches=_,o.u_removeClass=m,o.u_setAttr=A,o.u_show=f,o.u_stringToBoolean=v,o.u_stringToNumber=w,o.u_style=g,o.u_system=T,o.u_take_your_time=p,o.u_toggleClass=h,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
