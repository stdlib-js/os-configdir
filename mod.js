// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return t.exec(e).slice(1)};function i(){for(var e="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var i=n>=0?arguments[n]:"/";if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,t="/"===i.charAt(0))}return(t?"/":"")+(e=r(g(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function o(e){var t=a(e),n="/"===h(e,-1);return(e=r(g(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&n&&(e+="/"),(t?"/":"")+e}function a(e){return"/"===e.charAt(0)}function u(){var e=Array.prototype.slice.call(arguments,0);return o(g(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function c(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=i(e).substr(1),r=i(r).substr(1);for(var n=t(e.split("/")),o=t(r.split("/")),a=Math.min(n.length,o.length),u=a,c=0;c<a;c++)if(n[c]!==o[c]){u=c;break}var s=[];for(c=u;c<n.length;c++)s.push("..");return(s=s.concat(o.slice(u))).join("/")}function s(e){var r=n(e),t=r[0],i=r[1];return t||i?(i&&(i=i.substr(0,i.length-1)),t+i):"."}function l(e,r){var t=n(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function f(e){return n(e)[3]}var p={extname:f,basename:l,dirname:s,sep:"/",delimiter:":",relative:c,join:u,isAbsolute:a,normalize:o,resolve:i};function g(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var h="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},d=e(Object.freeze({__proto__:null,basename:l,default:p,delimiter:":",dirname:s,extname:f,isAbsolute:a,join:u,normalize:o,relative:c,resolve:i,sep:"/"})),v="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function m(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}var w=m,y=b;function E(e){if(w===setTimeout)return setTimeout(e,0);if((w===m||!w)&&setTimeout)return w=setTimeout,setTimeout(e,0);try{return w(e,0)}catch(r){try{return w.call(null,e,0)}catch(r){return w.call(this,e,0)}}}"function"==typeof v.setTimeout&&(w=setTimeout),"function"==typeof v.clearTimeout&&(y=clearTimeout);var _,j=[],A=!1,T=-1;function O(){A&&_&&(A=!1,_.length?j=_.concat(j):T=-1,j.length&&k())}function k(){if(!A){var e=E(O);A=!0;for(var r=j.length;r;){for(_=j,j=[];++T<r;)_&&_[T].run();T=-1,r=j.length}_=null,A=!1,function(e){if(y===clearTimeout)return clearTimeout(e);if((y===b||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(e);try{y(e)}catch(r){try{return y.call(null,e)}catch(r){return y.call(this,e)}}}(e)}}function S(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];j.push(new x(e,r)),1!==j.length||A||E(k)}function x(e,r){this.fun=e,this.array=r}x.prototype.run=function(){this.fun.apply(null,this.array)};var L={},M=[],P={},V={},I={};function N(){}var F=N,R=N,$=N,C=N,U=N,B=N,D=N;function G(e){throw new Error("process.binding is not supported")}function z(){return"/"}function H(e){throw new Error("process.chdir is not supported")}function X(){return 0}var Z=v.performance||{},W=Z.now||Z.mozNow||Z.msNow||Z.oNow||Z.webkitNow||function(){return(new Date).getTime()};function q(e){var r=.001*W.call(Z),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var J=new Date;function K(){return(new Date-J)/1e3}var Q={nextTick:S,title:"browser",browser:true,env:L,argv:M,version:"",versions:P,on:F,addListener:R,once:$,off:C,removeListener:U,removeAllListeners:B,emit:D,binding:G,cwd:z,chdir:H,umask:X,hrtime:q,platform:"browser",release:V,config:I,uptime:K},Y=e(Object.freeze({__proto__:null,addListener:R,argv:M,binding:G,browser:true,chdir:H,config:I,cwd:z,default:Q,emit:D,env:L,hrtime:q,nextTick:S,off:C,on:F,once:$,platform:"browser",release:V,removeAllListeners:B,removeListener:U,title:"browser",umask:X,uptime:K,version:"",versions:P})),ee=Y.env,re=Y.platform,te="win32"===re,ne="function"==typeof Object.defineProperty?Object.defineProperty:null;var ie=Object.defineProperty;function oe(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ue(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ae(i):ae(i)+e,n&&(e="-"+e)),e}var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function le(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!oe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=ue(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=ue(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function fe(e){return"string"==typeof e}var pe=Math.abs,ge=String.prototype.toLowerCase,he=String.prototype.toUpperCase,de=String.prototype.replace,ve=/e\+(\d)$/,me=/e-(\d)$/,be=/^(\d+)$/,we=/^(\d+)e/,ye=/\.0$/,Ee=/\.0*e/,_e=/(\..*[^0])0*e/;function je(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!oe(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":pe(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=de.call(t,_e,"$1e"),t=de.call(t,Ee,"e"),t=de.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,ve,"e+0$1"),t=de.call(t,me,"e-0$1"),e.alternate&&(t=de.call(t,be,"$1."),t=de.call(t,we,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===he.call(e.specifier)?he.call(t):ge.call(t)}function Ae(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Te(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Ae(n):Ae(n)+e}var Oe=String.fromCharCode,ke=isNaN,Se=Array.isArray;function xe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Le(e){var r,t,n,i,o,a,u,c,s;if(!Se(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(fe(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=xe(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ke(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ke(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=le(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ke(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ke(o)?String(n.arg):Oe(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=je(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ue(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Te(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ve(e){var r,t,n,i;for(t=[],i=0,n=Me.exec(e);n;)(r=e.slice(i,Me.lastIndex-n[0].length)).length&&t.push(r),t.push(Pe(n)),i=Me.lastIndex,n=Me.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Ie(e){return"string"==typeof e}function Ne(e){var r,t,n;if(!Ie(e))throw new TypeError(Ne("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ve(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Le.apply(null,t)}var Fe,Re=Object.prototype,$e=Re.toString,Ce=Re.__defineGetter__,Ue=Re.__defineSetter__,Be=Re.__lookupGetter__,De=Re.__lookupSetter__;Fe=function(){try{return ne({},"x",{}),!0}catch(e){return!1}}()?ie:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$e.call(e))throw new TypeError(Ne("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$e.call(t))throw new TypeError(Ne("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Be.call(e,r)||De.call(e,r)?(n=e.__proto__,e.__proto__=Re,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Ce&&Ce.call(e,r,t.get),a&&Ue&&Ue.call(e,r,t.set),e};var Ge=Fe;function ze(e,r,t){Ge(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function He(e){return"string"==typeof e}var Xe="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Ze(){return Xe&&"symbol"==typeof Symbol.toStringTag}var We=Object.prototype.toString;var qe=Object.prototype.hasOwnProperty;var Je="function"==typeof Symbol?Symbol:void 0,Ke="function"==typeof Je?Je.toStringTag:"";var Qe=Ze()?function(e){var r,t,n,i,o;if(null==e)return We.call(e);t=e[Ke],o=Ke,r=null!=(i=e)&&qe.call(i,o);try{e[Ke]=void 0}catch(r){return We.call(e)}return n=We.call(e),r?e[Ke]=t:delete e[Ke],n}:function(e){return We.call(e)},Ye=String.prototype.valueOf;var er,rr=Ze();function tr(e){return"object"==typeof e&&(e instanceof String||(rr?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object String]"===Qe(e)))}function nr(e){return He(e)||tr(e)}function ir(){if(void 0===er){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])er="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");er="LE"}}return er}function or(){return void 0!==v.location?v.location.hostname:""}function ar(){return[]}function ur(){return 0}function cr(){return Number.MAX_VALUE}function sr(){return Number.MAX_VALUE}function lr(){return[]}function fr(){return"Browser"}function pr(){return void 0!==v.navigator?v.navigator.appVersion:""}function gr(){return{}}function hr(){return{}}function dr(){return"javascript"}function vr(){return"browser"}function mr(){return"/tmp"}ze(nr,"isPrimitive",He),ze(nr,"isObject",tr);var br=mr;function wr(){return"$HOME"}var yr={homedir:wr,EOL:"\n",arch:dr,platform:vr,tmpdir:br,tmpDir:mr,networkInterfaces:gr,getNetworkInterfaces:hr,release:pr,type:fr,cpus:lr,totalmem:sr,freemem:cr,uptime:ur,loadavg:ar,hostname:or,endianness:ir},Er=e(Object.freeze({__proto__:null,EOL:"\n",arch:dr,cpus:lr,default:yr,endianness:ir,freemem:cr,getNetworkInterfaces:hr,homedir:wr,hostname:or,loadavg:ar,networkInterfaces:gr,platform:vr,release:pr,tmpDir:mr,tmpdir:br,totalmem:sr,type:fr,uptime:ur})),_r=/./;function jr(e){return"boolean"==typeof e}var Ar=Boolean,Tr=Boolean.prototype.toString;var Or=Ze();function kr(e){return"object"==typeof e&&(e instanceof Ar||(Or?function(e){try{return Tr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Qe(e)))}function Sr(e){return jr(e)||kr(e)}function xr(){return new Function("return this;")()}ze(Sr,"isPrimitive",jr),ze(Sr,"isObject",kr);var Lr="object"==typeof self?self:null,Mr="object"==typeof window?window:null,Pr="object"==typeof v?v:null,Vr="object"==typeof globalThis?globalThis:null;var Ir=function(e){if(arguments.length){if(!jr(e))throw new TypeError(Ne("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return xr()}if(Vr)return Vr;if(Lr)return Lr;if(Mr)return Mr;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")}(),Nr=Ir.document&&Ir.document.childNodes,Fr=Int8Array;function Rr(){return/^\s*function\s*([^(]*)/i}var $r=/^\s*function\s*([^(]*)/i;ze(Rr,"REGEXP",$r);var Cr=Array.isArray?Array.isArray:function(e){return"[object Array]"===Qe(e)};function Ur(e){return null!==e&&"object"==typeof e}function Br(e){var r,t,n,i;if(("Object"===(t=Qe(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=$r.exec(n.toString()))return r[1]}return Ur(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ze(Ur,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ne("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Cr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ur));var Dr="function"==typeof _r||"object"==typeof Fr||"function"==typeof Nr?function(e){return Br(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Br(e).toLowerCase():r};function Gr(e){return"function"===Dr(e)}var zr=Y.getuid,Hr=Gr(zr)?zr:function(){return null};var Xr=Er,Zr=Gr(Xr.homedir)?Xr.homedir:function(){var e,r;return te?(e=ee.USERPROFILE||ee.HOMEDRIVE+ee.HOMEPATH||ee.HOME)||null:(e=ee.HOME)?e:(r=ee.LOGNAME||ee.USER||ee.LNAME||ee.USERNAME,"darwin"===re?r?"/Users/"+r:null:0===Hr()?"/root":r?"/home/"+r:null)},Wr=d.join;function qr(e){var r,t,n;if(arguments.length){if(!He(e))throw new TypeError(Ne("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return te?(n=ee.LOCALAPPDATA||ee.APPDATA)?Wr(n,r):null:null===(t=Zr())?null:"darwin"===re?Wr(t,"Library","Preferences",r):(n=ee.XDG_CONFIG_HOME||Wr(t,".config"),Wr(n,r))}export{qr as default};
//# sourceMappingURL=mod.js.map
