// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).configdir=r()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function o(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var o=n>=0?arguments[n]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o.charAt(0))}return(t?"/":"")+(e=r(d(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function i(e){var t=a(e),n="/"===g(e,-1);return(e=r(d(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function a(e){return"/"===e.charAt(0)}function u(){var e=Array.prototype.slice.call(arguments,0);return i(d(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function c(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=o(e).substr(1),r=o(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),a=Math.min(n.length,i.length),u=a,c=0;c<a;c++)if(n[c]!==i[c]){u=c;break}var l=[];for(c=u;c<n.length;c++)l.push("..");return(l=l.concat(i.slice(u))).join("/")}function l(e){var r=n(e),t=r[0],o=r[1];return t||o?(o&&(o=o.substr(0,o.length-1)),t+o):"."}function f(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function s(e){return n(e)[3]}var p={extname:s,basename:f,dirname:l,sep:"/",delimiter:":",relative:c,join:u,isAbsolute:a,normalize:i,resolve:o};function d(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var g="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},v=e(Object.freeze({__proto__:null,basename:f,default:p,delimiter:":",dirname:l,extname:s,isAbsolute:a,join:u,normalize:i,relative:c,resolve:o,sep:"/"})),y="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function b(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}var m=b,w=h;function _(e){if(m===setTimeout)return setTimeout(e,0);if((m===b||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(r){try{return m.call(null,e,0)}catch(r){return m.call(this,e,0)}}}"function"==typeof y.setTimeout&&(m=setTimeout),"function"==typeof y.clearTimeout&&(w=clearTimeout);var j,E=[],A=!1,T=-1;function O(){A&&j&&(A=!1,j.length?E=j.concat(E):T=-1,E.length&&S())}function S(){if(!A){var e=_(O);A=!0;for(var r=E.length;r;){for(j=E,E=[];++T<r;)j&&j[T].run();T=-1,r=E.length}j=null,A=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===h||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(r){try{return w.call(null,e)}catch(r){return w.call(this,e)}}}(e)}}function k(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];E.push(new P(e,r)),1!==E.length||A||_(S)}function P(e,r){this.fun=e,this.array=r}P.prototype.run=function(){this.fun.apply(null,this.array)};var x="browser",L="browser",V={},M=[],I={},B={},C={};function F(){}var N=F,R=F,G=F,U=F,$=F,D=F,z=F;function H(e){throw new Error("process.binding is not supported")}function X(){return"/"}function Z(e){throw new Error("process.chdir is not supported")}function W(){return 0}var q=y.performance||{},J=q.now||q.mozNow||q.msNow||q.oNow||q.webkitNow||function(){return(new Date).getTime()};function K(e){var r=.001*J.call(q),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Q=new Date;function Y(){return(new Date-Q)/1e3}var ee={nextTick:k,title:x,browser:true,env:V,argv:M,version:"",versions:I,on:N,addListener:R,once:G,off:U,removeListener:$,removeAllListeners:D,emit:z,binding:H,cwd:X,chdir:Z,umask:W,hrtime:K,platform:L,release:B,config:C,uptime:Y},re=e(Object.freeze({__proto__:null,addListener:R,argv:M,binding:H,browser:true,chdir:Z,config:C,cwd:X,default:ee,emit:z,env:V,hrtime:K,nextTick:k,off:U,on:N,once:G,platform:L,release:B,removeAllListeners:D,removeListener:$,title:x,umask:W,uptime:Y,version:"",versions:I})),te=re.env,ne=re.platform,oe="win32"===ne,ie="function"==typeof Object.defineProperty?Object.defineProperty:null;var ae=Object.defineProperty;function ue(e){return"number"==typeof e}function ce(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function le(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ce(o):ce(o)+e,n&&(e="-"+e)),e}var fe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function pe(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ue(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=le(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=le(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):fe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function de(e){return"string"==typeof e}var ge=Math.abs,ve=String.prototype.toLowerCase,ye=String.prototype.toUpperCase,be=String.prototype.replace,he=/e\+(\d)$/,me=/e-(\d)$/,we=/^(\d+)$/,_e=/^(\d+)e/,je=/\.0$/,Ee=/\.0*e/,Ae=/(\..*[^0])0*e/;function Te(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":ge(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=be.call(t,Ae,"$1e"),t=be.call(t,Ee,"e"),t=be.call(t,je,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=be.call(t,he,"e+0$1"),t=be.call(t,me,"e-0$1"),e.alternate&&(t=be.call(t,we,"$1."),t=be.call(t,_e,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ye.call(e.specifier)?ye.call(t):ve.call(t)}function Oe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Se(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Oe(n):Oe(n)+e}var ke=String.fromCharCode,Pe=isNaN,xe=Array.isArray;function Le(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ve(e){var r,t,n,o,i,a,u,c,l;if(!xe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(de(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=Le(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Pe(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Pe(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=pe(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Pe(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Pe(i)?String(n.arg):ke(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Te(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=le(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Se(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ie(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Be(e){var r,t,n,o;for(t=[],o=0,n=Me.exec(e);n;)(r=e.slice(o,Me.lastIndex-n[0].length)).length&&t.push(r),t.push(Ie(n)),o=Me.lastIndex,n=Me.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function Ce(e){return"string"==typeof e}function Fe(e){var r,t,n;if(!Ce(e))throw new TypeError(Fe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Be(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ve.apply(null,t)}var Ne,Re=Object.prototype,Ge=Re.toString,Ue=Re.__defineGetter__,$e=Re.__defineSetter__,De=Re.__lookupGetter__,ze=Re.__lookupSetter__;Ne=function(){try{return ie({},"x",{}),!0}catch(e){return!1}}()?ae:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Ge.call(e))throw new TypeError(Fe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ge.call(t))throw new TypeError(Fe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(De.call(e,r)||ze.call(e,r)?(n=e.__proto__,e.__proto__=Re,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ue&&Ue.call(e,r,t.get),a&&$e&&$e.call(e,r,t.set),e};var He=Ne;function Xe(e,r,t){He(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ze(e){return"string"==typeof e}var We="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function qe(){return We&&"symbol"==typeof Symbol.toStringTag}var Je=Object.prototype.toString;var Ke=Object.prototype.hasOwnProperty;var Qe,Ye="function"==typeof Symbol?Symbol:void 0,er="function"==typeof Ye?Ye.toStringTag:"";Qe=qe()?function(e){var r,t,n,o,i;if(null==e)return Je.call(e);t=e[er],i=er,r=null!=(o=e)&&Ke.call(o,i);try{e[er]=void 0}catch(r){return Je.call(e)}return n=Je.call(e),r?e[er]=t:delete e[er],n}:function(e){return Je.call(e)};var rr=Qe,tr=String.prototype.valueOf;var nr,or=qe();function ir(e){return"object"==typeof e&&(e instanceof String||(or?function(e){try{return tr.call(e),!0}catch(e){return!1}}(e):"[object String]"===rr(e)))}function ar(e){return Ze(e)||ir(e)}function ur(){if(void 0===nr){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])nr="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");nr="LE"}}return nr}function cr(){return void 0!==y.location?y.location.hostname:""}function lr(){return[]}function fr(){return 0}function sr(){return Number.MAX_VALUE}function pr(){return Number.MAX_VALUE}function dr(){return[]}function gr(){return"Browser"}function vr(){return void 0!==y.navigator?y.navigator.appVersion:""}function yr(){return{}}function br(){return{}}function hr(){return"javascript"}function mr(){return"browser"}function wr(){return"/tmp"}Xe(ar,"isPrimitive",Ze),Xe(ar,"isObject",ir);var _r=wr;function jr(){return"$HOME"}var Er={homedir:jr,EOL:"\n",arch:hr,platform:mr,tmpdir:_r,tmpDir:wr,networkInterfaces:yr,getNetworkInterfaces:br,release:vr,type:gr,cpus:dr,totalmem:pr,freemem:sr,uptime:fr,loadavg:lr,hostname:cr,endianness:ur},Ar=e(Object.freeze({__proto__:null,EOL:"\n",arch:hr,cpus:dr,default:Er,endianness:ur,freemem:sr,getNetworkInterfaces:br,homedir:jr,hostname:cr,loadavg:lr,networkInterfaces:yr,platform:mr,release:vr,tmpDir:wr,tmpdir:_r,totalmem:pr,type:gr,uptime:fr})),Tr=/./,Or="function"==typeof Object.defineProperty?Object.defineProperty:null;var Sr,kr=Object.defineProperty,Pr=Object.prototype,xr=Pr.toString,Lr=Pr.__defineGetter__,Vr=Pr.__defineSetter__,Mr=Pr.__lookupGetter__,Ir=Pr.__lookupSetter__;Sr=function(){try{return Or({},"x",{}),!0}catch(e){return!1}}()?kr:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===xr.call(e))throw new TypeError(Fe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===xr.call(t))throw new TypeError(Fe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Mr.call(e,r)||Ir.call(e,r)?(n=e.__proto__,e.__proto__=Pr,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Lr&&Lr.call(e,r,t.get),a&&Vr&&Vr.call(e,r,t.set),e};var Br=Sr;function Cr(e,r,t){Br(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Fr(e){return"boolean"==typeof e}var Nr=Object.prototype.toString;var Rr=Object.prototype.hasOwnProperty;var Gr,Ur="function"==typeof Ye?Ye.toStringTag:"";Gr=qe()?function(e){var r,t,n,o,i;if(null==e)return Nr.call(e);t=e[Ur],i=Ur,r=null!=(o=e)&&Rr.call(o,i);try{e[Ur]=void 0}catch(r){return Nr.call(e)}return n=Nr.call(e),r?e[Ur]=t:delete e[Ur],n}:function(e){return Nr.call(e)};var $r=Gr,Dr=Boolean,zr=Boolean.prototype.toString;var Hr=qe();function Xr(e){return"object"==typeof e&&(e instanceof Dr||(Hr?function(e){try{return zr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===$r(e)))}function Zr(e){return Fr(e)||Xr(e)}function Wr(){return new Function("return this;")()}Cr(Zr,"isPrimitive",Fr),Cr(Zr,"isObject",Xr);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(e){if(arguments.length){if(!Fr(e))throw new TypeError(Fe("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Wr()}if(Kr)return Kr;if(qr)return qr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Qr.document&&Qr.document.childNodes,et=Int8Array;function rt(){return/^\s*function\s*([^(]*)/i}var tt,nt=/^\s*function\s*([^(]*)/i;Cr(rt,"REGEXP",nt),tt=Array.isArray?Array.isArray:function(e){return"[object Array]"===$r(e)};var ot=tt;function it(e){return null!==e&&"object"==typeof e}var at=function(e){if("function"!=typeof e)throw new TypeError(Fe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ot(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(it);function ut(e){var r,t,n,o;if(("Object"===(t=$r(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=nt.exec(n.toString()))return r[1]}return it(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Cr(it,"isObjectLikeArray",at);var ct="function"==typeof Tr||"object"==typeof et||"function"==typeof Yr?function(e){return ut(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ut(e).toLowerCase():r};var lt=/./,ft="function"==typeof Object.defineProperty?Object.defineProperty:null;var st,pt=Object.defineProperty,dt=Object.prototype,gt=dt.toString,vt=dt.__defineGetter__,yt=dt.__defineSetter__,bt=dt.__lookupGetter__,ht=dt.__lookupSetter__;st=function(){try{return ft({},"x",{}),!0}catch(e){return!1}}()?pt:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===gt.call(e))throw new TypeError(Fe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===gt.call(t))throw new TypeError(Fe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(bt.call(e,r)||ht.call(e,r)?(n=e.__proto__,e.__proto__=dt,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&vt&&vt.call(e,r,t.get),a&&yt&&yt.call(e,r,t.set),e};var mt=st;function wt(e,r,t){mt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _t(e){return"boolean"==typeof e}var jt=Object.prototype.toString;var Et=Object.prototype.hasOwnProperty;var At,Tt="function"==typeof Ye?Ye.toStringTag:"";At=qe()?function(e){var r,t,n,o,i;if(null==e)return jt.call(e);t=e[Tt],i=Tt,r=null!=(o=e)&&Et.call(o,i);try{e[Tt]=void 0}catch(r){return jt.call(e)}return n=jt.call(e),r?e[Tt]=t:delete e[Tt],n}:function(e){return jt.call(e)};var Ot=At,St=Boolean.prototype.toString;var kt=qe();function Pt(e){return"object"==typeof e&&(e instanceof Dr||(kt?function(e){try{return St.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ot(e)))}function xt(e){return _t(e)||Pt(e)}function Lt(){return new Function("return this;")()}wt(xt,"isPrimitive",_t),wt(xt,"isObject",Pt);var Vt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,It="object"==typeof globalThis?globalThis:null;var Bt=function(e){if(arguments.length){if(!_t(e))throw new TypeError(Fe("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Lt()}if(It)return It;if(Vt)return Vt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Ct=Bt.document&&Bt.document.childNodes,Ft=Int8Array;function Nt(){return/^\s*function\s*([^(]*)/i}var Rt,Gt=/^\s*function\s*([^(]*)/i;wt(Nt,"REGEXP",Gt),Rt=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ot(e)};var Ut=Rt;function $t(e){return null!==e&&"object"==typeof e}var Dt=function(e){if("function"!=typeof e)throw new TypeError(Fe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ut(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}($t);function zt(e){var r,t,n,o;if(("Object"===(t=Ot(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Gt.exec(n.toString()))return r[1]}return $t(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}wt($t,"isObjectLikeArray",Dt);var Ht="function"==typeof lt||"object"==typeof Ft||"function"==typeof Ct?function(e){return zt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?zt(e).toLowerCase():r};var Xt=re.getuid,Zt="function"===Ht(Xt)?Xt:function(){return null};var Wt=Ar,qt=function(e){return"function"===ct(e)}(Wt.homedir)?Wt.homedir:function(){var e,r;return oe?(e=te.USERPROFILE||te.HOMEDRIVE+te.HOMEPATH||te.HOME)||null:(e=te.HOME)?e:(r=te.LOGNAME||te.USER||te.LNAME||te.USERNAME,"darwin"===ne?r?"/Users/"+r:null:0===Zt()?"/root":r?"/home/"+r:null)};function Jt(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var Kt=v.join;return function(e){var r,t,n;if(arguments.length){if(!Ze(e))throw new TypeError(Jt("0mL3B,IL",e));r=e}else r="";return oe?(n=te.LOCALAPPDATA||te.APPDATA)?Kt(n,r):null:null===(t=qt())?null:"darwin"===ne?Kt(t,"Library","Preferences",r):(n=te.XDG_CONFIG_HOME||Kt(t,".config"),Kt(n,r))}}));
//# sourceMappingURL=browser.js.map