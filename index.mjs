// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/os-platform@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/os-homedir@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){return this instanceof t?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}function u(t,r){for(var e=0,n=t.length-1;n>=0;n--){var s=t[n];"."===s?t.splice(n,1):".."===s?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}var l=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,f=function(t){return l.exec(t).slice(1)};function c(){for(var t="",r=!1,e=arguments.length-1;e>=-1&&!r;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,r="/"===n.charAt(0))}return(r?"/":"")+(t=u(b(t.split("/"),(function(t){return!!t})),!r).join("/"))||"."}function a(t){var r=p(t),e="/"===y(t,-1);return(t=u(b(t.split("/"),(function(t){return!!t})),!r).join("/"))||r||(t="."),t&&e&&(t+="/"),(r?"/":"")+t}function p(t){return"/"===t.charAt(0)}function m(){return a(b(Array.prototype.slice.call(arguments,0),(function(t,r){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function h(t,r){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var e=t.length-1;e>=0&&""===t[e];e--);return r>e?[]:t.slice(r,e-r+1)}t=c(t).substr(1),r=c(r).substr(1);for(var n=e(t.split("/")),s=e(r.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}var l=[];for(u=o;u<n.length;u++)l.push("..");return(l=l.concat(s.slice(o))).join("/")}function d(t){var r=f(t),e=r[0],n=r[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function v(t,r){var e=f(t)[2];return r&&e.substr(-1*r.length)===r&&(e=e.substr(0,e.length-r.length)),e}function g(t){return f(t)[3]}var j={extname:g,basename:v,dirname:d,sep:"/",delimiter:":",relative:h,join:m,isAbsolute:p,normalize:a,resolve:c};function b(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}var y="b"==="ab".substr(-1)?function(t,r,e){return t.substr(r,e)}:function(t,r,e){return r<0&&(r=t.length+r),t.substr(r,e)},A=o(Object.freeze({__proto__:null,basename:v,default:j,delimiter:":",dirname:d,extname:g,isAbsolute:p,join:m,normalize:a,relative:h,resolve:c,sep:"/"})).join;function w(o){var u,l,f;if(arguments.length){if(!n(o))throw new TypeError(i("0mL3B",o));u=o}else u="";return r?(f=t.LOCALAPPDATA||t.APPDATA)?A(f,u):null:null===(l=s())?null:"darwin"===e?A(l,"Library","Preferences",u):(f=t.XDG_CONFIG_HOME||A(l,".config"),A(f,u))}export{w as default};
//# sourceMappingURL=index.mjs.map
