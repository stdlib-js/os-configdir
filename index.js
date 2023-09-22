// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path"),require("process"),require("os")):"function"==typeof define&&define.amd?define(["path","process","os"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).configdir=e(r.require$$0$2,r.require$$0,r.require$$0$1)}(this,(function(r,e,t){"use strict";var n=e.env,o=e.platform,i="win32"===o,a="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function u(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(o):l(o)+r,n&&(r="-"+r)),r}var s=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function y(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function g(r){return"string"==typeof r}var d=Math.abs,b=String.prototype.toLowerCase,v=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,_=/e-(\d)$/,m=/^(\d+)$/,j=/^(\d+)e/,E=/\.0$/,S=/\.0*e/,O=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!u(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":d(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,O,"$1e"),t=h.call(t,S,"e"),t=h.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,w,"e+0$1"),t=h.call(t,_,"e-0$1"),r.alternate&&(t=h.call(t,m,"$1."),t=h.call(t,j,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)}function T(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function P(r,e,t){var n=e-r.length;return n<0?r:r=t?r+T(n):T(n)+r}var x=String.fromCharCode,k=isNaN,V=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,o,i,a,c,u,l;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(g(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,k(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(i)?String(n.arg):x(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=P(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=C.exec(r);n;)(e=r.slice(o,C.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=C.lastIndex,n=C.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function B(r){return"string"==typeof r}function R(r){var e,t,n;if(!B(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return L.apply(null,t)}var G,M=Object.prototype,U=M.toString,N=M.__defineGetter__,q=M.__defineSetter__,H=M.__lookupGetter__,X=M.__lookupSetter__;G=function(){try{return a({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(r,e)||X.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var Z=G;function D(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"string"==typeof r}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return z&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var Y,rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";Y=J()?function(r){var e,t,n,o,i;if(null==r)return K.call(r);t=r[er],i=er,e=null!=(o=r)&&Q.call(o,i);try{r[er]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[er]=t:delete r[er],n}:function(r){return K.call(r)};var tr=Y,nr=String.prototype.valueOf;var or=J();function ir(r){return"object"==typeof r&&(r instanceof String||(or?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object String]"===tr(r)))}function ar(r){return W(r)||ir(r)}D(ar,"isPrimitive",W),D(ar,"isObject",ir);var cr=/./,ur="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr,fr=Object.defineProperty,sr=Object.prototype,pr=sr.toString,yr=sr.__defineGetter__,gr=sr.__defineSetter__,dr=sr.__lookupGetter__,br=sr.__lookupSetter__;lr=function(){try{return ur({},"x",{}),!0}catch(r){return!1}}()?fr:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===pr.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===pr.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(dr.call(r,e)||br.call(r,e)?(n=r.__proto__,r.__proto__=sr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&yr&&yr.call(r,e,t.get),a&&gr&&gr.call(r,e,t.set),r};var vr=lr;function hr(r,e,t){vr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function wr(r){return"boolean"==typeof r}var _r=Object.prototype.toString;var mr=Object.prototype.hasOwnProperty;var jr,Er="function"==typeof rr?rr.toStringTag:"";jr=J()?function(r){var e,t,n,o,i;if(null==r)return _r.call(r);t=r[Er],i=Er,e=null!=(o=r)&&mr.call(o,i);try{r[Er]=void 0}catch(e){return _r.call(r)}return n=_r.call(r),e?r[Er]=t:delete r[Er],n}:function(r){return _r.call(r)};var Sr=jr,Or=Boolean,Ar=Boolean.prototype.toString;var Tr=J();function Pr(r){return"object"==typeof r&&(r instanceof Or||(Tr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Sr(r)))}function xr(r){return wr(r)||Pr(r)}function kr(){return new Function("return this;")()}hr(xr,"isPrimitive",wr),hr(xr,"isObject",Pr);var Vr="object"==typeof self?self:null,$r="object"==typeof window?window:null,Lr="object"==typeof global?global:null,Cr="object"==typeof globalThis?globalThis:null;var Fr=function(r){if(arguments.length){if(!wr(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return kr()}if(Cr)return Cr;if(Vr)return Vr;if($r)return $r;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Fr.document&&Fr.document.childNodes,Br=Int8Array;function Rr(){return/^\s*function\s*([^(]*)/i}var Gr,Mr=/^\s*function\s*([^(]*)/i;hr(Rr,"REGEXP",Mr),Gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Sr(r)};var Ur=Gr;function Nr(r){return null!==r&&"object"==typeof r}var qr=function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Nr);function Hr(r){var e,t,n,o;if(("Object"===(t=Sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Mr.exec(n.toString()))return e[1]}return Nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}hr(Nr,"isObjectLikeArray",qr);var Xr="function"==typeof cr||"object"==typeof Br||"function"==typeof Ir?function(r){return Hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Hr(r).toLowerCase():e};var Zr=/./,Dr="function"==typeof Object.defineProperty?Object.defineProperty:null;var Wr,zr=Object.defineProperty,Jr=Object.prototype,Kr=Jr.toString,Qr=Jr.__defineGetter__,Yr=Jr.__defineSetter__,re=Jr.__lookupGetter__,ee=Jr.__lookupSetter__;Wr=function(){try{return Dr({},"x",{}),!0}catch(r){return!1}}()?zr:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Kr.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Kr.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(re.call(r,e)||ee.call(r,e)?(n=r.__proto__,r.__proto__=Jr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Qr&&Qr.call(r,e,t.get),a&&Yr&&Yr.call(r,e,t.set),r};var te=Wr;function ne(r,e,t){te(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function oe(r){return"boolean"==typeof r}var ie=Object.prototype.toString;var ae=Object.prototype.hasOwnProperty;var ce,ue="function"==typeof rr?rr.toStringTag:"";ce=J()?function(r){var e,t,n,o,i;if(null==r)return ie.call(r);t=r[ue],i=ue,e=null!=(o=r)&&ae.call(o,i);try{r[ue]=void 0}catch(e){return ie.call(r)}return n=ie.call(r),e?r[ue]=t:delete r[ue],n}:function(r){return ie.call(r)};var le=ce,fe=Boolean.prototype.toString;var se=J();function pe(r){return"object"==typeof r&&(r instanceof Or||(se?function(r){try{return fe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===le(r)))}function ye(r){return oe(r)||pe(r)}function ge(){return new Function("return this;")()}ne(ye,"isPrimitive",oe),ne(ye,"isObject",pe);var de="object"==typeof self?self:null,be="object"==typeof window?window:null,ve="object"==typeof global?global:null,he="object"==typeof globalThis?globalThis:null;var we=function(r){if(arguments.length){if(!oe(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ge()}if(he)return he;if(de)return de;if(be)return be;if(ve)return ve;throw new Error("unexpected error. Unable to resolve global object.")}(),_e=we.document&&we.document.childNodes,me=Int8Array;function je(){return/^\s*function\s*([^(]*)/i}var Ee,Se=/^\s*function\s*([^(]*)/i;ne(je,"REGEXP",Se),Ee=Array.isArray?Array.isArray:function(r){return"[object Array]"===le(r)};var Oe=Ee;function Ae(r){return null!==r&&"object"==typeof r}var Te=function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Oe(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ae);function Pe(r){var e,t,n,o;if(("Object"===(t=le(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Se.exec(n.toString()))return e[1]}return Ae(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ne(Ae,"isObjectLikeArray",Te);var xe="function"==typeof Zr||"object"==typeof me||"function"==typeof _e?function(r){return Pe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pe(r).toLowerCase():e};var ke=e.getuid,Ve="function"===xe(ke)?ke:function(){return null};var $e=t,Le=function(r){return"function"===Xr(r)}($e.homedir)?$e.homedir:function(){var r,e;return i?(r=n.USERPROFILE||n.HOMEDRIVE+n.HOMEPATH||n.HOME)||null:(r=n.HOME)?r:(e=n.LOGNAME||n.USER||n.LNAME||n.USERNAME,"darwin"===o?e?"/Users/"+e:null:0===Ve()?"/root":e?"/home/"+e:null)};function Ce(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Fe=r.join;return function(r){var e,t,a;if(arguments.length){if(!W(r))throw new TypeError(Ce("0mL3B,IL",r));e=r}else e="";return i?(a=n.LOCALAPPDATA||n.APPDATA)?Fe(a,e):null:null===(t=Le())?null:"darwin"===o?Fe(t,"Library","Preferences",e):(a=n.XDG_CONFIG_HOME||Fe(t,".config"),Fe(a,e))}}));
//# sourceMappingURL=index.js.map