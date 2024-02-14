// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("path"),require("process"),require("os")):"function"==typeof define&&define.amd?define(["path","process","os"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).configdir=r(e.require$$0$2,e.require$$0,e.require$$0$1)}(this,(function(e,r,t){"use strict";var i=r.env,n=r.platform,a="win32"===n,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(e){return"number"==typeof e}function l(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function u(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+l(n):l(n)+e,i&&(e="-"+e)),e}var p=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function g(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!s(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=u(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=u(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function d(e){return"string"==typeof e}var h=Math.abs,b=String.prototype.toLowerCase,w=String.prototype.toUpperCase,v=String.prototype.replace,y=/e\+(\d)$/,m=/e-(\d)$/,E=/^(\d+)$/,_=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,S=/(\..*[^0])0*e/;function j(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":h(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=v.call(t,S,"$1e"),t=v.call(t,k,"e"),t=v.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,y,"e+0$1"),t=v.call(t,m,"e-0$1"),e.alternate&&(t=v.call(t,E,"$1."),t=v.call(t,_,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var i=r-e.length;return i<0?e:e=t?e+A(i):A(i)+e}var V=String.fromCharCode,$=isNaN,F=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,n,a,o,c,s,l;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(d(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=O(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=g(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$(a)?String(i.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=j(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=u(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=T(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,i,n;for(t=[],n=0,i=C.exec(e);i;)(r=e.slice(n,C.lastIndex-i[0].length)).length&&t.push(r),t.push(R(i)),n=C.lastIndex,i=C.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function L(e){return"string"==typeof e}function Z(e){var r,t;if(!L(e))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var G,M=Object.prototype,W=M.toString,B=M.__defineGetter__,N=M.__defineSetter__,U=M.__lookupGetter__,X=M.__lookupSetter__;G=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(U.call(e,r)||X.call(e,r)?(i=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&B&&B.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};var q=G;function H(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"string"==typeof e}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function Y(e,r){return null!=e&&Q.call(e,r)}var ee="function"==typeof Symbol?Symbol:void 0,re="function"==typeof ee?ee.toStringTag:"";var te=J()?function(e){var r,t,i;if(null==e)return K.call(e);t=e[re],r=Y(e,re);try{e[re]=void 0}catch(r){return K.call(e)}return i=K.call(e),r?e[re]=t:delete e[re],i}:function(e){return K.call(e)},ie=String.prototype.valueOf;var ne=J();function ae(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object String]"===te(e)))}function oe(e){return z(e)||ae(e)}H(oe,"isPrimitive",z),H(oe,"isObject",ae);var ce=/./,se="function"==typeof Object.defineProperty?Object.defineProperty:null;var le=Object.defineProperty;function ue(e){return"number"==typeof e}function pe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function fe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+pe(n):pe(n)+e,i&&(e="-"+e)),e}var ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase;function he(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ue(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=fe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=fe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===de.call(e.specifier)?de.call(t):ge.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function be(e){return"string"==typeof e}var we=Math.abs,ve=String.prototype.toLowerCase,ye=String.prototype.toUpperCase,me=String.prototype.replace,Ee=/e\+(\d)$/,_e=/e-(\d)$/,xe=/^(\d+)$/,ke=/^(\d+)e/,Se=/\.0$/,je=/\.0*e/,Ae=/(\..*[^0])0*e/;function Te(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ue(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":we(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=me.call(t,Ae,"$1e"),t=me.call(t,je,"e"),t=me.call(t,Se,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=me.call(t,Ee,"e+0$1"),t=me.call(t,_e,"e-0$1"),e.alternate&&(t=me.call(t,xe,"$1."),t=me.call(t,ke,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ye.call(e.specifier)?ye.call(t):ve.call(t)}function Ve(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $e(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ve(i):Ve(i)+e}var Fe=String.fromCharCode,Oe=isNaN,Ie=Array.isArray;function Ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Re(e){var r,t,i,n,a,o,c,s,l;if(!Ie(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(be(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ce(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Oe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Oe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=he(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Oe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Oe(a)?String(i.arg):Fe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Te(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=fe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=$e(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Le(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ze(e){var r,t,i,n;for(t=[],n=0,i=Pe.exec(e);i;)(r=e.slice(n,Pe.lastIndex-i[0].length)).length&&t.push(r),t.push(Le(i)),n=Pe.lastIndex,i=Pe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ge(e){return"string"==typeof e}function Me(e){var r,t;if(!Ge(e))throw new TypeError(Me("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ze(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Re.apply(null,r)}var We,Be=Object.prototype,Ne=Be.toString,Ue=Be.__defineGetter__,Xe=Be.__defineSetter__,qe=Be.__lookupGetter__,He=Be.__lookupSetter__;We=function(){try{return se({},"x",{}),!0}catch(e){return!1}}()?le:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ne.call(e))throw new TypeError(Me("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ne.call(t))throw new TypeError(Me("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(qe.call(e,r)||He.call(e,r)?(i=e.__proto__,e.__proto__=Be,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ue&&Ue.call(e,r,t.get),o&&Xe&&Xe.call(e,r,t.set),e};var ze=We;function De(e,r,t){ze(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Je(e){return"boolean"==typeof e}var Ke=Object.prototype.toString;var Qe="function"==typeof Symbol?Symbol:void 0,Ye="function"==typeof Qe?Qe.toStringTag:"";var er=J()?function(e){var r,t,i;if(null==e)return Ke.call(e);t=e[Ye],r=Y(e,Ye);try{e[Ye]=void 0}catch(r){return Ke.call(e)}return i=Ke.call(e),r?e[Ye]=t:delete e[Ye],i}:function(e){return Ke.call(e)},rr=Boolean,tr=Boolean.prototype.toString;var ir=J();function nr(e){return"object"==typeof e&&(e instanceof rr||(ir?function(e){try{return tr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===er(e)))}function ar(e){return Je(e)||nr(e)}function or(){return new Function("return this;")()}De(ar,"isPrimitive",Je),De(ar,"isObject",nr);var cr="object"==typeof self?self:null,sr="object"==typeof window?window:null,lr="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var pr=function(e){if(arguments.length){if(!Je(e))throw new TypeError(Me("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return or()}if(ur)return ur;if(cr)return cr;if(sr)return sr;if(lr)return lr;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=pr.document&&pr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var hr,br=/^\s*function\s*([^(]*)/i;De(dr,"REGEXP",br),hr=Array.isArray?Array.isArray:function(e){return"[object Array]"===er(e)};var wr=hr;function vr(e){return null!==e&&"object"==typeof e}var yr=function(e){if("function"!=typeof e)throw new TypeError(Me("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!wr(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(vr);function mr(e){var r,t,i,n;if(("Object"===(t=er(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=br.exec(i.toString()))return r[1]}return vr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}De(vr,"isObjectLikeArray",yr);var Er="function"==typeof ce||"object"==typeof gr||"function"==typeof fr?function(e){return mr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?mr(e).toLowerCase():r};var _r=/./,xr="function"==typeof Object.defineProperty?Object.defineProperty:null;var kr=Object.defineProperty;function Sr(e){return"number"==typeof e}function jr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ar(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+jr(n):jr(n)+e,i&&(e="-"+e)),e}var Tr=String.prototype.toLowerCase,Vr=String.prototype.toUpperCase;function $r(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Sr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ar(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ar(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Vr.call(e.specifier)?Vr.call(t):Tr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fr(e){return"string"==typeof e}var Or=Math.abs,Ir=String.prototype.toLowerCase,Cr=String.prototype.toUpperCase,Rr=String.prototype.replace,Pr=/e\+(\d)$/,Lr=/e-(\d)$/,Zr=/^(\d+)$/,Gr=/^(\d+)e/,Mr=/\.0$/,Wr=/\.0*e/,Br=/(\..*[^0])0*e/;function Nr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Sr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Or(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Rr.call(t,Br,"$1e"),t=Rr.call(t,Wr,"e"),t=Rr.call(t,Mr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Rr.call(t,Pr,"e+0$1"),t=Rr.call(t,Lr,"e-0$1"),e.alternate&&(t=Rr.call(t,Zr,"$1."),t=Rr.call(t,Gr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Cr.call(e.specifier)?Cr.call(t):Ir.call(t)}function Ur(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Xr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ur(i):Ur(i)+e}var qr=String.fromCharCode,Hr=isNaN,zr=Array.isArray;function Dr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Jr(e){var r,t,i,n,a,o,c,s,l;if(!zr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Fr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Dr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Hr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Hr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=$r(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Hr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Hr(a)?String(i.arg):qr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Nr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ar(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Xr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Yr(e){var r,t,i,n;for(t=[],n=0,i=Kr.exec(e);i;)(r=e.slice(n,Kr.lastIndex-i[0].length)).length&&t.push(r),t.push(Qr(i)),n=Kr.lastIndex,i=Kr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function et(e){return"string"==typeof e}function rt(e){var r,t;if(!et(e))throw new TypeError(rt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Yr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Jr.apply(null,r)}var tt,it=Object.prototype,nt=it.toString,at=it.__defineGetter__,ot=it.__defineSetter__,ct=it.__lookupGetter__,st=it.__lookupSetter__;tt=function(){try{return xr({},"x",{}),!0}catch(e){return!1}}()?kr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===nt.call(e))throw new TypeError(rt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===nt.call(t))throw new TypeError(rt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(ct.call(e,r)||st.call(e,r)?(i=e.__proto__,e.__proto__=it,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&at&&at.call(e,r,t.get),o&&ot&&ot.call(e,r,t.set),e};var lt=tt;function ut(e,r,t){lt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function pt(e){return"boolean"==typeof e}var ft=Object.prototype.toString;var gt="function"==typeof Symbol?Symbol:void 0,dt="function"==typeof gt?gt.toStringTag:"";var ht=J()?function(e){var r,t,i;if(null==e)return ft.call(e);t=e[dt],r=Y(e,dt);try{e[dt]=void 0}catch(r){return ft.call(e)}return i=ft.call(e),r?e[dt]=t:delete e[dt],i}:function(e){return ft.call(e)},bt=Boolean,wt=Boolean.prototype.toString;var vt=J();function yt(e){return"object"==typeof e&&(e instanceof bt||(vt?function(e){try{return wt.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ht(e)))}function mt(e){return pt(e)||yt(e)}function Et(){return new Function("return this;")()}ut(mt,"isPrimitive",pt),ut(mt,"isObject",yt);var _t="object"==typeof self?self:null,xt="object"==typeof window?window:null,kt="object"==typeof global?global:null,St="object"==typeof globalThis?globalThis:null;var jt=function(e){if(arguments.length){if(!pt(e))throw new TypeError(rt("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Et()}if(St)return St;if(_t)return _t;if(xt)return xt;if(kt)return kt;throw new Error("unexpected error. Unable to resolve global object.")}(),At=jt.document&&jt.document.childNodes,Tt=Int8Array;function Vt(){return/^\s*function\s*([^(]*)/i}var $t,Ft=/^\s*function\s*([^(]*)/i;ut(Vt,"REGEXP",Ft),$t=Array.isArray?Array.isArray:function(e){return"[object Array]"===ht(e)};var Ot=$t;function It(e){return null!==e&&"object"==typeof e}var Ct=function(e){if("function"!=typeof e)throw new TypeError(rt("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Ot(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(It);function Rt(e){var r,t,i,n;if(("Object"===(t=ht(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Ft.exec(i.toString()))return r[1]}return It(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}ut(It,"isObjectLikeArray",Ct);var Pt="function"==typeof _r||"object"==typeof Tt||"function"==typeof At?function(e){return Rt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Rt(e).toLowerCase():r};var Lt=r.getuid,Zt="function"===Pt(Lt)?Lt:function(){return null};var Gt=t,Mt=function(e){return"function"===Er(e)}(Gt.homedir)?Gt.homedir:function(){var e,r;return a?(e=i.USERPROFILE||i.HOMEDRIVE+i.HOMEPATH||i.HOME)||null:(e=i.HOME)?e:(r=i.LOGNAME||i.USER||i.LNAME||i.USERNAME,"darwin"===n?r?"/Users/"+r:null:0===Zt()?"/root":r?"/home/"+r:null)};function Wt(e){return"number"==typeof e}function Bt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Nt(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Bt(n):Bt(n)+e,i&&(e="-"+e)),e}var Ut=String.prototype.toLowerCase,Xt=String.prototype.toUpperCase;function qt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Wt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Nt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Nt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Xt.call(e.specifier)?Xt.call(t):Ut.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ht(e){return"string"==typeof e}var zt=Math.abs,Dt=String.prototype.toLowerCase,Jt=String.prototype.toUpperCase,Kt=String.prototype.replace,Qt=/e\+(\d)$/,Yt=/e-(\d)$/,ei=/^(\d+)$/,ri=/^(\d+)e/,ti=/\.0$/,ii=/\.0*e/,ni=/(\..*[^0])0*e/;function ai(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Wt(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":zt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Kt.call(t,ni,"$1e"),t=Kt.call(t,ii,"e"),t=Kt.call(t,ti,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Kt.call(t,Qt,"e+0$1"),t=Kt.call(t,Yt,"e-0$1"),e.alternate&&(t=Kt.call(t,ei,"$1."),t=Kt.call(t,ri,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Jt.call(e.specifier)?Jt.call(t):Dt.call(t)}function oi(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ci(e,r,t){var i=r-e.length;return i<0?e:e=t?e+oi(i):oi(i)+e}var si=String.fromCharCode,li=isNaN,ui=Array.isArray;function pi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function fi(e){var r,t,i,n,a,o,c,s,l;if(!ui(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ht(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=pi(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,li(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,li(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=qt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!li(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=li(a)?String(i.arg):si(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=ai(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Nt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ci(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var gi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function di(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function hi(e){var r,t,i,n;for(t=[],n=0,i=gi.exec(e);i;)(r=e.slice(n,gi.lastIndex-i[0].length)).length&&t.push(r),t.push(di(i)),n=gi.lastIndex,i=gi.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function bi(e){return"string"==typeof e}function wi(e){var r,t,i;if(!bi(e))throw new TypeError(wi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=hi(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return fi.apply(null,t)}var vi=e.join;return function(e){var r,t,o;if(arguments.length){if(!z(e))throw new TypeError(wi("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return a?(o=i.LOCALAPPDATA||i.APPDATA)?vi(o,r):null:null===(t=Mt())?null:"darwin"===n?vi(t,"Library","Preferences",r):(o=i.XDG_CONFIG_HOME||vi(t,".config"),vi(o,r))}}));
//# sourceMappingURL=index.js.map