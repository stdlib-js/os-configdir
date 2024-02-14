// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function i(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var i=n>=0?arguments[n]:"/";if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,t="/"===i.charAt(0))}return(t?"/":"")+(e=r(g(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function a(e){var t=o(e),n="/"===d(e,-1);return(e=r(g(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function o(e){return"/"===e.charAt(0)}function c(){var e=Array.prototype.slice.call(arguments,0);return a(g(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function s(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=i(e).substr(1),r=i(r).substr(1);for(var n=t(e.split("/")),a=t(r.split("/")),o=Math.min(n.length,a.length),c=o,s=0;s<o;s++)if(n[s]!==a[s]){c=s;break}var u=[];for(s=c;s<n.length;s++)u.push("..");return(u=u.concat(a.slice(c))).join("/")}function u(e){var r=n(e),t=r[0],i=r[1];return t||i?(i&&(i=i.substr(0,i.length-1)),t+i):"."}function l(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function f(e){return n(e)[3]}var p={extname:f,basename:l,dirname:u,sep:"/",delimiter:":",relative:s,join:c,isAbsolute:o,normalize:a,resolve:i};function g(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var d="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},h=e(Object.freeze({__proto__:null,basename:l,default:p,delimiter:":",dirname:u,extname:f,isAbsolute:o,join:c,normalize:a,relative:s,resolve:i,sep:"/"})),v="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function w(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}var y=w,m=b;function E(e){if(y===setTimeout)return setTimeout(e,0);if((y===w||!y)&&setTimeout)return y=setTimeout,setTimeout(e,0);try{return y(e,0)}catch(r){try{return y.call(null,e,0)}catch(r){return y.call(this,e,0)}}}"function"==typeof v.setTimeout&&(y=setTimeout),"function"==typeof v.clearTimeout&&(m=clearTimeout);var _,k=[],j=!1,x=-1;function S(){j&&_&&(j=!1,_.length?k=_.concat(k):x=-1,k.length&&A())}function A(){if(!j){var e=E(S);j=!0;for(var r=k.length;r;){for(_=k,k=[];++x<r;)_&&_[x].run();x=-1,r=k.length}_=null,j=!1,function(e){if(m===clearTimeout)return clearTimeout(e);if((m===b||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(e);try{m(e)}catch(r){try{return m.call(null,e)}catch(r){return m.call(this,e)}}}(e)}}function T(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];k.push(new V(e,r)),1!==k.length||j||E(A)}function V(e,r){this.fun=e,this.array=r}V.prototype.run=function(){this.fun.apply(null,this.array)};var O={},$=[],I={},F={},L={};function C(){}var P=C,R=C,M=C,N=C,Z=C,G=C,U=C;function B(e){throw new Error("process.binding is not supported")}function W(){return"/"}function X(e){throw new Error("process.chdir is not supported")}function z(){return 0}var D=v.performance||{},H=D.now||D.mozNow||D.msNow||D.oNow||D.webkitNow||function(){return(new Date).getTime()};function q(e){var r=.001*H.call(D),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var J=new Date;function K(){return(new Date-J)/1e3}var Q={nextTick:T,title:"browser",browser:true,env:O,argv:$,version:"",versions:I,on:P,addListener:R,once:M,off:N,removeListener:Z,removeAllListeners:G,emit:U,binding:B,cwd:W,chdir:X,umask:z,hrtime:q,platform:"browser",release:F,config:L,uptime:K},Y=e(Object.freeze({__proto__:null,addListener:R,argv:$,binding:B,browser:true,chdir:X,config:L,cwd:W,default:Q,emit:U,env:O,hrtime:q,nextTick:T,off:N,on:P,once:M,platform:"browser",release:F,removeAllListeners:G,removeListener:Z,title:"browser",umask:z,uptime:K,version:"",versions:I})),ee=Y.env,re=Y.platform,te="win32"===re,ne="function"==typeof Object.defineProperty?Object.defineProperty:null;var ie=Object.defineProperty;function ae(e){return"number"==typeof e}function oe(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ce(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+oe(i):oe(i)+e,n&&(e="-"+e)),e}var se=String.prototype.toLowerCase,ue=String.prototype.toUpperCase;function le(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ae(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ce(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ce(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ue.call(e.specifier)?ue.call(t):se.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fe(e){return"string"==typeof e}var pe=Math.abs,ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase,he=String.prototype.replace,ve=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ye=/^(\d+)e/,me=/\.0$/,Ee=/\.0*e/,_e=/(\..*[^0])0*e/;function ke(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ae(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":pe(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=he.call(t,_e,"$1e"),t=he.call(t,Ee,"e"),t=he.call(t,me,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=he.call(t,ve,"e+0$1"),t=he.call(t,we,"e-0$1"),e.alternate&&(t=he.call(t,be,"$1."),t=he.call(t,ye,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===de.call(e.specifier)?de.call(t):ge.call(t)}function je(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function xe(e,r,t){var n=r-e.length;return n<0?e:e=t?e+je(n):je(n)+e}var Se=String.fromCharCode,Ae=isNaN,Te=Array.isArray;function Ve(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Oe(e){var r,t,n,i,a,o,c,s,u;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(fe(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Ve(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=le(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ae(a)?String(n.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ke(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ce(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=xe(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var $e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ie(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fe(e){var r,t,n,i;for(t=[],i=0,n=$e.exec(e);n;)(r=e.slice(i,$e.lastIndex-n[0].length)).length&&t.push(r),t.push(Ie(n)),i=$e.lastIndex,n=$e.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Le(e){return"string"==typeof e}function Ce(e){var r,t;if(!Le(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Fe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Oe.apply(null,r)}var Pe,Re=Object.prototype,Me=Re.toString,Ne=Re.__defineGetter__,Ze=Re.__defineSetter__,Ge=Re.__lookupGetter__,Ue=Re.__lookupSetter__;Pe=function(){try{return ne({},"x",{}),!0}catch(e){return!1}}()?ie:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Me.call(e))throw new TypeError(Ce("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Me.call(t))throw new TypeError(Ce("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Ge.call(e,r)||Ue.call(e,r)?(n=e.__proto__,e.__proto__=Re,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ne&&Ne.call(e,r,t.get),o&&Ze&&Ze.call(e,r,t.set),e};var Be=Pe;function We(e,r,t){Be(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Xe(e){return"string"==typeof e}var ze="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function De(){return ze&&"symbol"==typeof Symbol.toStringTag}var He=Object.prototype.toString;var qe=Object.prototype.hasOwnProperty;function Je(e,r){return null!=e&&qe.call(e,r)}var Ke="function"==typeof Symbol?Symbol:void 0,Qe="function"==typeof Ke?Ke.toStringTag:"";var Ye=De()?function(e){var r,t,n;if(null==e)return He.call(e);t=e[Qe],r=Je(e,Qe);try{e[Qe]=void 0}catch(r){return He.call(e)}return n=He.call(e),r?e[Qe]=t:delete e[Qe],n}:function(e){return He.call(e)},er=String.prototype.valueOf;var rr,tr=De();function nr(e){return"object"==typeof e&&(e instanceof String||(tr?function(e){try{return er.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ye(e)))}function ir(e){return Xe(e)||nr(e)}function ar(){if(void 0===rr){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])rr="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");rr="LE"}}return rr}function or(){return void 0!==v.location?v.location.hostname:""}function cr(){return[]}function sr(){return 0}function ur(){return Number.MAX_VALUE}function lr(){return Number.MAX_VALUE}function fr(){return[]}function pr(){return"Browser"}function gr(){return void 0!==v.navigator?v.navigator.appVersion:""}function dr(){return{}}function hr(){return{}}function vr(){return"javascript"}function wr(){return"browser"}function br(){return"/tmp"}We(ir,"isPrimitive",Xe),We(ir,"isObject",nr);var yr=br;function mr(){return"$HOME"}var Er={homedir:mr,EOL:"\n",arch:vr,platform:wr,tmpdir:yr,tmpDir:br,networkInterfaces:dr,getNetworkInterfaces:hr,release:gr,type:pr,cpus:fr,totalmem:lr,freemem:ur,uptime:sr,loadavg:cr,hostname:or,endianness:ar},_r=e(Object.freeze({__proto__:null,EOL:"\n",arch:vr,cpus:fr,default:Er,endianness:ar,freemem:ur,getNetworkInterfaces:hr,homedir:mr,hostname:or,loadavg:cr,networkInterfaces:dr,platform:wr,release:gr,tmpDir:br,tmpdir:yr,totalmem:lr,type:pr,uptime:sr})),kr=/./,jr="function"==typeof Object.defineProperty?Object.defineProperty:null;var xr=Object.defineProperty;function Sr(e){return"number"==typeof e}function Ar(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Tr(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ar(i):Ar(i)+e,n&&(e="-"+e)),e}var Vr=String.prototype.toLowerCase,Or=String.prototype.toUpperCase;function $r(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Sr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Tr(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Tr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Or.call(e.specifier)?Or.call(t):Vr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ir(e){return"string"==typeof e}var Fr=Math.abs,Lr=String.prototype.toLowerCase,Cr=String.prototype.toUpperCase,Pr=String.prototype.replace,Rr=/e\+(\d)$/,Mr=/e-(\d)$/,Nr=/^(\d+)$/,Zr=/^(\d+)e/,Gr=/\.0$/,Ur=/\.0*e/,Br=/(\..*[^0])0*e/;function Wr(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Sr(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Fr(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Pr.call(t,Br,"$1e"),t=Pr.call(t,Ur,"e"),t=Pr.call(t,Gr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Pr.call(t,Rr,"e+0$1"),t=Pr.call(t,Mr,"e-0$1"),e.alternate&&(t=Pr.call(t,Nr,"$1."),t=Pr.call(t,Zr,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Cr.call(e.specifier)?Cr.call(t):Lr.call(t)}function Xr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function zr(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Xr(n):Xr(n)+e}var Dr=String.fromCharCode,Hr=isNaN,qr=Array.isArray;function Jr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Kr(e){var r,t,n,i,a,o,c,s,u;if(!qr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ir(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Jr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Hr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Hr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=$r(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Hr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Hr(a)?String(n.arg):Dr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Wr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Tr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Qr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Yr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function et(e){var r,t,n,i;for(t=[],i=0,n=Qr.exec(e);n;)(r=e.slice(i,Qr.lastIndex-n[0].length)).length&&t.push(r),t.push(Yr(n)),i=Qr.lastIndex,n=Qr.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function rt(e){return"string"==typeof e}function tt(e){var r,t;if(!rt(e))throw new TypeError(tt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[et(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Kr.apply(null,r)}var nt,it=Object.prototype,at=it.toString,ot=it.__defineGetter__,ct=it.__defineSetter__,st=it.__lookupGetter__,ut=it.__lookupSetter__;nt=function(){try{return jr({},"x",{}),!0}catch(e){return!1}}()?xr:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===at.call(e))throw new TypeError(tt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===at.call(t))throw new TypeError(tt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(st.call(e,r)||ut.call(e,r)?(n=e.__proto__,e.__proto__=it,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ot&&ot.call(e,r,t.get),o&&ct&&ct.call(e,r,t.set),e};var lt=nt;function ft(e,r,t){lt(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function pt(e){return"boolean"==typeof e}var gt=Object.prototype.toString;var dt="function"==typeof Symbol?Symbol:void 0,ht="function"==typeof dt?dt.toStringTag:"";var vt=De()?function(e){var r,t,n;if(null==e)return gt.call(e);t=e[ht],r=Je(e,ht);try{e[ht]=void 0}catch(r){return gt.call(e)}return n=gt.call(e),r?e[ht]=t:delete e[ht],n}:function(e){return gt.call(e)},wt=Boolean,bt=Boolean.prototype.toString;var yt=De();function mt(e){return"object"==typeof e&&(e instanceof wt||(yt?function(e){try{return bt.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===vt(e)))}function Et(e){return pt(e)||mt(e)}function _t(){return new Function("return this;")()}ft(Et,"isPrimitive",pt),ft(Et,"isObject",mt);var kt="object"==typeof self?self:null,jt="object"==typeof window?window:null,xt="object"==typeof v?v:null,St="object"==typeof globalThis?globalThis:null;var At=function(e){if(arguments.length){if(!pt(e))throw new TypeError(tt("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return _t()}if(St)return St;if(kt)return kt;if(jt)return jt;if(xt)return xt;throw new Error("unexpected error. Unable to resolve global object.")}(),Tt=At.document&&At.document.childNodes,Vt=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var $t,It=/^\s*function\s*([^(]*)/i;ft(Ot,"REGEXP",It),$t=Array.isArray?Array.isArray:function(e){return"[object Array]"===vt(e)};var Ft=$t;function Lt(e){return null!==e&&"object"==typeof e}var Ct=function(e){if("function"!=typeof e)throw new TypeError(tt("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ft(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Lt);function Pt(e){var r,t,n,i;if(("Object"===(t=vt(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=It.exec(n.toString()))return r[1]}return Lt(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ft(Lt,"isObjectLikeArray",Ct);var Rt="function"==typeof kr||"object"==typeof Vt||"function"==typeof Tt?function(e){return Pt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Pt(e).toLowerCase():r};var Mt=/./,Nt="function"==typeof Object.defineProperty?Object.defineProperty:null;var Zt=Object.defineProperty;function Gt(e){return"number"==typeof e}function Ut(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Bt(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+Ut(i):Ut(i)+e,n&&(e="-"+e)),e}var Wt=String.prototype.toLowerCase,Xt=String.prototype.toUpperCase;function zt(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Gt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Bt(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Bt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Xt.call(e.specifier)?Xt.call(t):Wt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Dt(e){return"string"==typeof e}var Ht=Math.abs,qt=String.prototype.toLowerCase,Jt=String.prototype.toUpperCase,Kt=String.prototype.replace,Qt=/e\+(\d)$/,Yt=/e-(\d)$/,en=/^(\d+)$/,rn=/^(\d+)e/,tn=/\.0$/,nn=/\.0*e/,an=/(\..*[^0])0*e/;function on(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Gt(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Ht(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Kt.call(t,an,"$1e"),t=Kt.call(t,nn,"e"),t=Kt.call(t,tn,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Kt.call(t,Qt,"e+0$1"),t=Kt.call(t,Yt,"e-0$1"),e.alternate&&(t=Kt.call(t,en,"$1."),t=Kt.call(t,rn,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Jt.call(e.specifier)?Jt.call(t):qt.call(t)}function cn(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function sn(e,r,t){var n=r-e.length;return n<0?e:e=t?e+cn(n):cn(n)+e}var un=String.fromCharCode,ln=isNaN,fn=Array.isArray;function pn(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function gn(e){var r,t,n,i,a,o,c,s,u;if(!fn(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Dt(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=pn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ln(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ln(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=zt(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ln(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ln(a)?String(n.arg):un(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=on(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Bt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=sn(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var dn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function hn(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function vn(e){var r,t,n,i;for(t=[],i=0,n=dn.exec(e);n;)(r=e.slice(i,dn.lastIndex-n[0].length)).length&&t.push(r),t.push(hn(n)),i=dn.lastIndex,n=dn.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function wn(e){return"string"==typeof e}function bn(e){var r,t;if(!wn(e))throw new TypeError(bn("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[vn(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return gn.apply(null,r)}var yn,mn=Object.prototype,En=mn.toString,_n=mn.__defineGetter__,kn=mn.__defineSetter__,jn=mn.__lookupGetter__,xn=mn.__lookupSetter__;yn=function(){try{return Nt({},"x",{}),!0}catch(e){return!1}}()?Zt:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===En.call(e))throw new TypeError(bn("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===En.call(t))throw new TypeError(bn("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(jn.call(e,r)||xn.call(e,r)?(n=e.__proto__,e.__proto__=mn,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&_n&&_n.call(e,r,t.get),o&&kn&&kn.call(e,r,t.set),e};var Sn=yn;function An(e,r,t){Sn(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Tn(e){return"boolean"==typeof e}var Vn=Object.prototype.toString;var On="function"==typeof Symbol?Symbol:void 0,$n="function"==typeof On?On.toStringTag:"";var In=De()?function(e){var r,t,n;if(null==e)return Vn.call(e);t=e[$n],r=Je(e,$n);try{e[$n]=void 0}catch(r){return Vn.call(e)}return n=Vn.call(e),r?e[$n]=t:delete e[$n],n}:function(e){return Vn.call(e)},Fn=Boolean,Ln=Boolean.prototype.toString;var Cn=De();function Pn(e){return"object"==typeof e&&(e instanceof Fn||(Cn?function(e){try{return Ln.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===In(e)))}function Rn(e){return Tn(e)||Pn(e)}function Mn(){return new Function("return this;")()}An(Rn,"isPrimitive",Tn),An(Rn,"isObject",Pn);var Nn="object"==typeof self?self:null,Zn="object"==typeof window?window:null,Gn="object"==typeof v?v:null,Un="object"==typeof globalThis?globalThis:null;var Bn=function(e){if(arguments.length){if(!Tn(e))throw new TypeError(bn("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Mn()}if(Un)return Un;if(Nn)return Nn;if(Zn)return Zn;if(Gn)return Gn;throw new Error("unexpected error. Unable to resolve global object.")}(),Wn=Bn.document&&Bn.document.childNodes,Xn=Int8Array;function zn(){return/^\s*function\s*([^(]*)/i}var Dn,Hn=/^\s*function\s*([^(]*)/i;An(zn,"REGEXP",Hn),Dn=Array.isArray?Array.isArray:function(e){return"[object Array]"===In(e)};var qn=Dn;function Jn(e){return null!==e&&"object"==typeof e}var Kn=function(e){if("function"!=typeof e)throw new TypeError(bn("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!qn(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Jn);function Qn(e){var r,t,n,i;if(("Object"===(t=In(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Hn.exec(n.toString()))return r[1]}return Jn(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}An(Jn,"isObjectLikeArray",Kn);var Yn="function"==typeof Mt||"object"==typeof Xn||"function"==typeof Wn?function(e){return Qn(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Qn(e).toLowerCase():r};var ei=Y.getuid,ri="function"===Yn(ei)?ei:function(){return null};var ti=_r,ni=function(e){return"function"===Rt(e)}(ti.homedir)?ti.homedir:function(){var e,r;return te?(e=ee.USERPROFILE||ee.HOMEDRIVE+ee.HOMEPATH||ee.HOME)||null:(e=ee.HOME)?e:(r=ee.LOGNAME||ee.USER||ee.LNAME||ee.USERNAME,"darwin"===re?r?"/Users/"+r:null:0===ri()?"/root":r?"/home/"+r:null)};function ii(e){return"number"==typeof e}function ai(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oi(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ai(i):ai(i)+e,n&&(e="-"+e)),e}var ci=String.prototype.toLowerCase,si=String.prototype.toUpperCase;function ui(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ii(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=oi(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=oi(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===si.call(e.specifier)?si.call(t):ci.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function li(e){return"string"==typeof e}var fi=Math.abs,pi=String.prototype.toLowerCase,gi=String.prototype.toUpperCase,di=String.prototype.replace,hi=/e\+(\d)$/,vi=/e-(\d)$/,wi=/^(\d+)$/,bi=/^(\d+)e/,yi=/\.0$/,mi=/\.0*e/,Ei=/(\..*[^0])0*e/;function _i(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ii(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":fi(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=di.call(t,Ei,"$1e"),t=di.call(t,mi,"e"),t=di.call(t,yi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=di.call(t,hi,"e+0$1"),t=di.call(t,vi,"e-0$1"),e.alternate&&(t=di.call(t,wi,"$1."),t=di.call(t,bi,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===gi.call(e.specifier)?gi.call(t):pi.call(t)}function ki(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ji(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ki(n):ki(n)+e}var xi=String.fromCharCode,Si=isNaN,Ai=Array.isArray;function Ti(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vi(e){var r,t,n,i,a,o,c,s,u;if(!Ai(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(li(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Ti(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Si(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Si(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=ui(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Si(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Si(a)?String(n.arg):xi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_i(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=oi(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ji(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Oi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $i(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ii(e){var r,t,n,i;for(t=[],i=0,n=Oi.exec(e);n;)(r=e.slice(i,Oi.lastIndex-n[0].length)).length&&t.push(r),t.push($i(n)),i=Oi.lastIndex,n=Oi.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Fi(e){return"string"==typeof e}function Li(e){var r,t,n;if(!Fi(e))throw new TypeError(Li("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ii(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Vi.apply(null,t)}var Ci=h.join;function Pi(e){var r,t,n;if(arguments.length){if(!Xe(e))throw new TypeError(Li("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return te?(n=ee.LOCALAPPDATA||ee.APPDATA)?Ci(n,r):null:null===(t=ni())?null:"darwin"===re?Ci(t,"Library","Preferences",r):(n=ee.XDG_CONFIG_HOME||Ci(t,".config"),Ci(n,r))}export{Pi as default};
//# sourceMappingURL=mod.js.map
