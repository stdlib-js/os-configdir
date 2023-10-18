// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/os-platform@v0.1.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/os-homedir@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){if(this instanceof r){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(t,e);return new n}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function u(r,t){for(var e=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var l=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(r){return l.exec(r).slice(1)};function f(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=u(j(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function c(r){var t=p(r),e="/"===y(r,-1);return(r=u(j(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function p(r){return"/"===r.charAt(0)}function m(){var r=Array.prototype.slice.call(arguments,0);return c(j(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function v(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=f(r).substr(1),t=f(t).substr(1);for(var n=e(r.split("/")),i=e(t.split("/")),s=Math.min(n.length,i.length),o=s,u=0;u<s;u++)if(n[u]!==i[u]){o=u;break}var l=[];for(u=o;u<n.length;u++)l.push("..");return(l=l.concat(i.slice(o))).join("/")}function h(r){var t=a(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function d(r,t){var e=a(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function g(r){return a(r)[3]}var b={extname:g,basename:d,dirname:h,sep:"/",delimiter:":",relative:v,join:m,isAbsolute:p,normalize:c,resolve:f};function j(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var y="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},A=o(Object.freeze({__proto__:null,basename:d,default:b,delimiter:":",dirname:h,extname:g,isAbsolute:p,join:m,normalize:c,relative:v,resolve:f,sep:"/"})).join;function w(o){var u,l,a;if(arguments.length){if(!n(o))throw new TypeError(s("invalid argument. Must provide a string. Value: `%s`.",o));u=o}else u="";return t?(a=r.LOCALAPPDATA||r.APPDATA)?A(a,u):null:null===(l=i())?null:"darwin"===e?A(l,"Library","Preferences",u):(a=r.XDG_CONFIG_HOME||A(l,".config"),A(a,u))}export{w as default};
//# sourceMappingURL=index.mjs.map
