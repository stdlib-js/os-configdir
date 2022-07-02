// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/os-platform@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/os-homedir@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function o(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===u(r,-1);return(r=function(r,t){for(var n=0,s=r.length-1;s>=0;s--){var e=r[s];"."===e?r.splice(s,1):".."===e?(r.splice(s,1),n++):n&&(r.splice(s,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(f(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function l(){var r=Array.prototype.slice.call(arguments,0);return o(f(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function f(r,t){if(r.filter)return r.filter(t);for(var n=[],s=0;s<r.length;s++)t(r[s],s,r)&&n.push(r[s]);return n}var u="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)};function m(o){var f,u,m;if(arguments.length){if(!s(o))throw new TypeError(i("0O43N",o));f=o}else f="";return t?(m=r.LOCALAPPDATA||r.APPDATA)?l(m,f):null:null===(u=e())?null:"darwin"===n?l(u,"Library","Preferences",f):(m=r.XDG_CONFIG_HOME||l(u,".config"),l(m,f))}export{m as default};
//# sourceMappingURL=index.mjs.map
