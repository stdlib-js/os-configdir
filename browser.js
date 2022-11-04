// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).configdir=r()}(this,(function(){"use strict";function e(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function o(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o.charAt(0))}return(t?"/":"")+(e=r(m(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function i(e){var t=u(e),n="/"===v(e,-1);return(e=r(m(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function u(e){return"/"===e.charAt(0)}function f(){var e=Array.prototype.slice.call(arguments,0);return i(m(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function a(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=o(e).substr(1),r=o(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),u=Math.min(n.length,i.length),f=u,a=0;a<u;a++)if(n[a]!==i[a]){f=a;break}var c=[];for(a=f;a<n.length;a++)c.push("..");return(c=c.concat(i.slice(f))).join("/")}function c(e){var r=n(e),t=r[0],o=r[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function l(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function s(e){return n(e)[3]}var p={extname:s,basename:l,dirname:c,sep:"/",delimiter:":",relative:a,join:f,isAbsolute:u,normalize:i,resolve:o};function m(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var v="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},y=e(Object.freeze({__proto__:null,resolve:o,normalize:i,isAbsolute:u,join:f,relative:a,sep:"/",delimiter:":",dirname:c,basename:l,extname:s,default:p})),b="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function d(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}var g=d,w=h;function _(e){if(g===setTimeout)return setTimeout(e,0);if((g===d||!g)&&setTimeout)return g=setTimeout,setTimeout(e,0);try{return g(e,0)}catch(r){try{return g.call(null,e,0)}catch(r){return g.call(this,e,0)}}}"function"==typeof b.setTimeout&&(g=setTimeout),"function"==typeof b.clearTimeout&&(w=clearTimeout);var j,E=[],A=!1,O=-1;function T(){A&&j&&(A=!1,j.length?E=j.concat(E):O=-1,E.length&&L())}function L(){if(!A){var e=_(T);A=!0;for(var r=E.length;r;){for(j=E,E=[];++O<r;)j&&j[O].run();O=-1,r=E.length}j=null,A=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===h||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(r){try{return w.call(null,e)}catch(r){return w.call(this,e)}}}(e)}}function S(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];E.push(new P(e,r)),1!==E.length||A||_(L)}function P(e,r){this.fun=e,this.array=r}P.prototype.run=function(){this.fun.apply(null,this.array)};var M="browser",k="browser",N={},x=[],B={},D={},U={};function I(){}var V=I,H=I,R=I,z=I,C=I,G=I,F=I;function X(e){throw new Error("process.binding is not supported")}function $(){return"/"}function q(e){throw new Error("process.chdir is not supported")}function J(){return 0}var K=b.performance||{},Q=K.now||K.mozNow||K.msNow||K.oNow||K.webkitNow||function(){return(new Date).getTime()};function W(e){var r=.001*Q.call(K),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Y=new Date;function Z(){return(new Date-Y)/1e3}var ee={nextTick:S,title:M,browser:true,env:N,argv:x,version:"",versions:B,on:V,addListener:H,once:R,off:z,removeListener:C,removeAllListeners:G,emit:F,binding:X,cwd:$,chdir:q,umask:J,hrtime:W,platform:k,release:D,config:U,uptime:Z},re=e(Object.freeze({__proto__:null,addListener:H,argv:x,binding:X,browser:true,chdir:q,config:U,cwd:$,default:ee,emit:F,env:N,hrtime:W,nextTick:S,off:z,on:V,once:R,platform:k,release:D,removeAllListeners:G,removeListener:C,title:M,umask:J,uptime:Z,version:"",versions:B})),te=re.env,ne=re.platform,oe="win32"===ne,ie="function"==typeof Object.defineProperty?Object.defineProperty:null;var ue,fe=Object.defineProperty,ae=Object.prototype,ce=ae.toString,le=ae.__defineGetter__,se=ae.__defineSetter__,pe=ae.__lookupGetter__,me=ae.__lookupSetter__;ue=function(){try{return ie({},"x",{}),!0}catch(e){return!1}}()?fe:function(e,r,t){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===ce.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===ce.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(pe.call(e,r)||me.call(e,r)?(n=e.__proto__,e.__proto__=ae,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&le&&le.call(e,r,t.get),u&&se&&se.call(e,r,t.set),e};var ve=ue;function ye(e,r,t){ve(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function be(e){return"string"==typeof e}var de="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function he(){return de&&"symbol"==typeof Symbol.toStringTag}var ge=Object.prototype.toString;var we=Object.prototype.hasOwnProperty;var _e="function"==typeof Symbol?Symbol.toStringTag:"";var je=he()?function(e){var r,t,n,o,i;if(null==e)return ge.call(e);t=e[_e],i=_e,r=null!=(o=e)&&we.call(o,i);try{e[_e]=void 0}catch(r){return ge.call(e)}return n=ge.call(e),r?e[_e]=t:delete e[_e],n}:function(e){return ge.call(e)},Ee=String.prototype.valueOf;var Ae,Oe=he();function Te(e){return"object"==typeof e&&(e instanceof String||(Oe?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object String]"===je(e)))}function Le(e){return be(e)||Te(e)}function Se(){if(void 0===Ae){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])Ae="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");Ae="LE"}}return Ae}function Pe(){return void 0!==b.location?b.location.hostname:""}function Me(){return[]}function ke(){return 0}function Ne(){return Number.MAX_VALUE}function xe(){return Number.MAX_VALUE}function Be(){return[]}function De(){return"Browser"}function Ue(){return void 0!==b.navigator?b.navigator.appVersion:""}function Ie(){return{}}function Ve(){return{}}function He(){return"javascript"}function Re(){return"browser"}function ze(){return"/tmp"}ye(Le,"isPrimitive",be),ye(Le,"isObject",Te);var Ce=ze;function Ge(){return"$HOME"}var Fe={homedir:Ge,EOL:"\n",arch:He,platform:Re,tmpdir:Ce,tmpDir:ze,networkInterfaces:Ie,getNetworkInterfaces:Ve,release:Ue,type:De,cpus:Be,totalmem:xe,freemem:Ne,uptime:ke,loadavg:Me,hostname:Pe,endianness:Se},Xe=e(Object.freeze({__proto__:null,endianness:Se,hostname:Pe,loadavg:Me,uptime:ke,freemem:Ne,totalmem:xe,cpus:Be,type:De,release:Ue,networkInterfaces:Ie,getNetworkInterfaces:Ve,arch:He,platform:Re,tmpDir:ze,tmpdir:Ce,EOL:"\n",homedir:Ge,default:Fe})),$e=/./;function qe(e){return"boolean"==typeof e}var Je=Boolean.prototype.toString;var Ke=he();function Qe(e){return"object"==typeof e&&(e instanceof Boolean||(Ke?function(e){try{return Je.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===je(e)))}function We(e){return qe(e)||Qe(e)}function Ye(){return new Function("return this;")()}ye(We,"isPrimitive",qe),ye(We,"isObject",Qe);var Ze="object"==typeof self?self:null,er="object"==typeof window?window:null,rr="object"==typeof b?b:null;var tr=function(e){if(arguments.length){if(!qe(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Ye()}if(Ze)return Ze;if(er)return er;if(rr)return rr;throw new Error("unexpected error. Unable to resolve global object.")}(),nr=tr.document&&tr.document.childNodes,or=Int8Array;function ir(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;ye(ir,"REGEXP",ur);var fr=Array.isArray?Array.isArray:function(e){return"[object Array]"===je(e)};function ar(e){return null!==e&&"object"==typeof e}function cr(e){var r,t,n,o;if(("Object"===(t=je(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ur.exec(n.toString()))return r[1]}return ar(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ye(ar,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!fr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ar));var lr="function"==typeof $e||"object"==typeof or||"function"==typeof nr?function(e){return cr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?cr(e).toLowerCase():r};function sr(e){return"function"===lr(e)}var pr=re.getuid,mr=sr(pr)?pr:function(){return null};var vr=Xe,yr=sr(vr.homedir)?vr.homedir:function(){var e,r;return oe?(e=te.USERPROFILE||te.HOMEDRIVE+te.HOMEPATH||te.HOME)||null:(e=te.HOME)?e:(r=te.LOGNAME||te.USER||te.LNAME||te.USERNAME,"darwin"===ne?r?"/Users/"+r:null:0===mr()?"/root":r?"/home/"+r:null)};function br(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var dr=y.join;return function(e){var r,t,n;if(arguments.length){if(!be(e))throw new TypeError(br("0O43N",e));r=e}else r="";return oe?(n=te.LOCALAPPDATA||te.APPDATA)?dr(n,r):null:null===(t=yr())?null:"darwin"===ne?dr(t,"Library","Preferences",r):(n=te.XDG_CONFIG_HOME||dr(t,".config"),dr(n,r))}}));
//# sourceMappingURL=browser.js.map
