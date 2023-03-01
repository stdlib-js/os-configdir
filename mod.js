// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function o(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o.charAt(0))}return(t?"/":"")+(e=r(v(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function i(e){var t=u(e),n="/"===m(e,-1);return(e=r(v(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function u(e){return"/"===e.charAt(0)}function a(){var e=Array.prototype.slice.call(arguments,0);return i(v(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function c(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=o(e).substr(1),r=o(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),u=Math.min(n.length,i.length),a=u,c=0;c<u;c++)if(n[c]!==i[c]){a=c;break}var f=[];for(c=a;c<n.length;c++)f.push("..");return(f=f.concat(i.slice(a))).join("/")}function f(e){var r=n(e),t=r[0],o=r[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function l(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function s(e){return n(e)[3]}var p={extname:s,basename:l,dirname:f,sep:"/",delimiter:":",relative:c,join:a,isAbsolute:u,normalize:i,resolve:o};function v(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var m="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},y=e(Object.freeze({__proto__:null,basename:l,default:p,delimiter:":",dirname:f,extname:s,isAbsolute:u,join:a,normalize:i,relative:c,resolve:o,sep:"/"})),b="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function h(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}var g=h,w=d;function _(e){if(g===setTimeout)return setTimeout(e,0);if((g===h||!g)&&setTimeout)return g=setTimeout,setTimeout(e,0);try{return g(e,0)}catch(r){try{return g.call(null,e,0)}catch(r){return g.call(this,e,0)}}}"function"==typeof b.setTimeout&&(g=setTimeout),"function"==typeof b.clearTimeout&&(w=clearTimeout);var j,E=[],A=!1,O=-1;function T(){A&&j&&(A=!1,j.length?E=j.concat(E):O=-1,E.length&&L())}function L(){if(!A){var e=_(T);A=!0;for(var r=E.length;r;){for(j=E,E=[];++O<r;)j&&j[O].run();O=-1,r=E.length}j=null,A=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===d||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(r){try{return w.call(null,e)}catch(r){return w.call(this,e)}}}(e)}}function S(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];E.push(new M(e,r)),1!==E.length||A||_(L)}function M(e,r){this.fun=e,this.array=r}M.prototype.run=function(){this.fun.apply(null,this.array)};var P={},k=[],N={},B={},D={};function U(){}var x=U,I=U,V=U,H=U,R=U,z=U,C=U;function G(e){throw new Error("process.binding is not supported")}function F(){return"/"}function X(e){throw new Error("process.chdir is not supported")}function $(){return 0}var q=b.performance||{},J=q.now||q.mozNow||q.msNow||q.oNow||q.webkitNow||function(){return(new Date).getTime()};function K(e){var r=.001*J.call(q),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Q=new Date;function W(){return(new Date-Q)/1e3}var Y={nextTick:S,title:"browser",browser:true,env:P,argv:k,version:"",versions:N,on:x,addListener:I,once:V,off:H,removeListener:R,removeAllListeners:z,emit:C,binding:G,cwd:F,chdir:X,umask:$,hrtime:K,platform:"browser",release:B,config:D,uptime:W},Z=e(Object.freeze({__proto__:null,addListener:I,argv:k,binding:G,browser:true,chdir:X,config:D,cwd:F,default:Y,emit:C,env:P,hrtime:K,nextTick:S,off:H,on:x,once:V,platform:"browser",release:B,removeAllListeners:z,removeListener:R,title:"browser",umask:$,uptime:W,version:"",versions:N})),ee=Z.env,re=Z.platform,te="win32"===re,ne="function"==typeof Object.defineProperty?Object.defineProperty:null;var oe,ie=Object.defineProperty,ue=Object.prototype,ae=ue.toString,ce=ue.__defineGetter__,fe=ue.__defineSetter__,le=ue.__lookupGetter__,se=ue.__lookupSetter__;oe=function(){try{return ne({},"x",{}),!0}catch(e){return!1}}()?ie:function(e,r,t){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===ae.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===ae.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(le.call(e,r)||se.call(e,r)?(n=e.__proto__,e.__proto__=ue,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ce&&ce.call(e,r,t.get),u&&fe&&fe.call(e,r,t.set),e};var pe=oe;function ve(e,r,t){pe(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function me(e){return"string"==typeof e}var ye="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function be(){return ye&&"symbol"==typeof Symbol.toStringTag}var he=Object.prototype.toString;var de=Object.prototype.hasOwnProperty;var ge="function"==typeof Symbol?Symbol.toStringTag:"";var we=be()?function(e){var r,t,n,o,i;if(null==e)return he.call(e);t=e[ge],i=ge,r=null!=(o=e)&&de.call(o,i);try{e[ge]=void 0}catch(r){return he.call(e)}return n=he.call(e),r?e[ge]=t:delete e[ge],n}:function(e){return he.call(e)},_e=String.prototype.valueOf;var je,Ee=be();function Ae(e){return"object"==typeof e&&(e instanceof String||(Ee?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object String]"===we(e)))}function Oe(e){return me(e)||Ae(e)}function Te(){if(void 0===je){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])je="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");je="LE"}}return je}function Le(){return void 0!==b.location?b.location.hostname:""}function Se(){return[]}function Me(){return 0}function Pe(){return Number.MAX_VALUE}function ke(){return Number.MAX_VALUE}function Ne(){return[]}function Be(){return"Browser"}function De(){return void 0!==b.navigator?b.navigator.appVersion:""}function Ue(){return{}}function xe(){return{}}function Ie(){return"javascript"}function Ve(){return"browser"}function He(){return"/tmp"}ve(Oe,"isPrimitive",me),ve(Oe,"isObject",Ae);var Re=He;function ze(){return"$HOME"}var Ce={homedir:ze,EOL:"\n",arch:Ie,platform:Ve,tmpdir:Re,tmpDir:He,networkInterfaces:Ue,getNetworkInterfaces:xe,release:De,type:Be,cpus:Ne,totalmem:ke,freemem:Pe,uptime:Me,loadavg:Se,hostname:Le,endianness:Te},Ge=e(Object.freeze({__proto__:null,EOL:"\n",arch:Ie,cpus:Ne,default:Ce,endianness:Te,freemem:Pe,getNetworkInterfaces:xe,homedir:ze,hostname:Le,loadavg:Se,networkInterfaces:Ue,platform:Ve,release:De,tmpDir:He,tmpdir:Re,totalmem:ke,type:Be,uptime:Me})),Fe=/./;function Xe(e){return"boolean"==typeof e}var $e=Boolean.prototype.toString;var qe=be();function Je(e){return"object"==typeof e&&(e instanceof Boolean||(qe?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===we(e)))}function Ke(e){return Xe(e)||Je(e)}function Qe(){return new Function("return this;")()}ve(Ke,"isPrimitive",Xe),ve(Ke,"isObject",Je);var We="object"==typeof self?self:null,Ye="object"==typeof window?window:null,Ze="object"==typeof b?b:null;var er=function(e){if(arguments.length){if(!Xe(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Qe()}if(We)return We;if(Ye)return Ye;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),rr=er.document&&er.document.childNodes,tr=Int8Array;function nr(){return/^\s*function\s*([^(]*)/i}var or=/^\s*function\s*([^(]*)/i;ve(nr,"REGEXP",or);var ir=Array.isArray?Array.isArray:function(e){return"[object Array]"===we(e)};function ur(e){return null!==e&&"object"==typeof e}function ar(e){var r,t,n,o;if(("Object"===(t=we(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=or.exec(n.toString()))return r[1]}return ur(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ve(ur,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!ir(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ur));var cr="function"==typeof Fe||"object"==typeof tr||"function"==typeof rr?function(e){return ar(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ar(e).toLowerCase():r};function fr(e){return"function"===cr(e)}var lr=Z.getuid,sr=fr(lr)?lr:function(){return null};var pr=Ge,vr=fr(pr.homedir)?pr.homedir:function(){var e,r;return te?(e=ee.USERPROFILE||ee.HOMEDRIVE+ee.HOMEPATH||ee.HOME)||null:(e=ee.HOME)?e:(r=ee.LOGNAME||ee.USER||ee.LNAME||ee.USERNAME,"darwin"===re?r?"/Users/"+r:null:0===sr()?"/root":r?"/home/"+r:null)};function mr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var yr=y.join;function br(e){var r,t,n;if(arguments.length){if(!me(e))throw new TypeError(mr("0O43N",e));r=e}else r="";return te?(n=ee.LOCALAPPDATA||ee.APPDATA)?yr(n,r):null:null===(t=vr())?null:"darwin"===re?yr(t,"Library","Preferences",r):(n=ee.XDG_CONFIG_HOME||yr(t,".config"),yr(n,r))}export{br as default};
//# sourceMappingURL=mod.js.map
