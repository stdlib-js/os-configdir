// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).configdir=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function e(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return t.exec(r).slice(1)};function i(){for(var r="",t=!1,n=arguments.length-1;n>=-1&&!t;n--){var i=n>=0?arguments[n]:"/";if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(r=i+"/"+r,t="/"===i.charAt(0))}return(t?"/":"")+(r=e(v(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function o(r){var t=a(r),n="/"===g(r,-1);return(r=e(v(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function a(r){return"/"===r.charAt(0)}function u(){var r=Array.prototype.slice.call(arguments,0);return o(v(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function c(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=i(r).substr(1),e=i(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),a=Math.min(n.length,o.length),u=a,c=0;c<a;c++)if(n[c]!==o[c]){u=c;break}var s=[];for(c=u;c<n.length;c++)s.push("..");return(s=s.concat(o.slice(u))).join("/")}function s(r){var e=n(r),t=e[0],i=e[1];return t||i?(i&&(i=i.substr(0,i.length-1)),t+i):"."}function f(r,e){var t=n(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function l(r){return n(r)[3]}var p={extname:l,basename:f,dirname:s,sep:"/",delimiter:":",relative:c,join:u,isAbsolute:a,normalize:o,resolve:i};function v(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var g="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},m=r(Object.freeze({__proto__:null,resolve:i,normalize:o,isAbsolute:a,join:u,relative:c,sep:"/",delimiter:":",dirname:s,basename:f,extname:l,default:p})),h="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function d(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}var w=d,y=b;function E(r){if(w===setTimeout)return setTimeout(r,0);if((w===d||!w)&&setTimeout)return w=setTimeout,setTimeout(r,0);try{return w(r,0)}catch(e){try{return w.call(null,r,0)}catch(e){return w.call(this,r,0)}}}"function"==typeof h.setTimeout&&(w=setTimeout),"function"==typeof h.clearTimeout&&(y=clearTimeout);var j,T=[],_=!1,P=-1;function O(){_&&j&&(_=!1,j.length?T=j.concat(T):P=-1,T.length&&A())}function A(){if(!_){var r=E(O);_=!0;for(var e=T.length;e;){for(j=T,T=[];++P<e;)j&&j[P].run();P=-1,e=T.length}j=null,_=!1,function(r){if(y===clearTimeout)return clearTimeout(r);if((y===b||!y)&&clearTimeout)return y=clearTimeout,clearTimeout(r);try{y(r)}catch(e){try{return y.call(null,r)}catch(e){return y.call(this,r)}}}(r)}}function x(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];T.push(new V(r,e)),1!==T.length||_||E(A)}function V(r,e){this.fun=r,this.array=e}V.prototype.run=function(){this.fun.apply(null,this.array)};var k="browser",S="browser",M={},I=[],L={},N={},R={};function F(){}var $=F,C=F,B=F,D=F,G=F,U=F,z=F;function X(r){throw new Error("process.binding is not supported")}function H(){return"/"}function Z(r){throw new Error("process.chdir is not supported")}function W(){return 0}var Y=h.performance||{},q=Y.now||Y.mozNow||Y.msNow||Y.oNow||Y.webkitNow||function(){return(new Date).getTime()};function J(r){var e=.001*q.call(Y),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var K=new Date;function Q(){return(new Date-K)/1e3}var rr={nextTick:x,title:k,browser:true,env:M,argv:I,version:"",versions:L,on:$,addListener:C,once:B,off:D,removeListener:G,removeAllListeners:U,emit:z,binding:X,cwd:H,chdir:Z,umask:W,hrtime:J,platform:S,release:N,config:R,uptime:Q},er=r(Object.freeze({__proto__:null,addListener:C,argv:I,binding:X,browser:true,chdir:Z,config:R,cwd:H,default:rr,emit:z,env:M,hrtime:J,nextTick:x,off:D,on:$,once:B,platform:S,release:N,removeAllListeners:U,removeListener:G,title:k,umask:W,uptime:Q,version:"",versions:L})),tr=er.env,nr=er.platform,ir="win32"===nr,or="function"==typeof Object.defineProperty?Object.defineProperty:null;var ar=function(){try{return or({},"x",{}),!0}catch(r){return!1}},ur=Object.defineProperty,cr=Object.prototype,sr=cr.toString,fr=cr.__defineGetter__,lr=cr.__defineSetter__,pr=cr.__lookupGetter__,vr=cr.__lookupSetter__;var gr=function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===sr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(pr.call(r,e)||vr.call(r,e)?(n=r.__proto__,r.__proto__=cr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&fr&&fr.call(r,e,t.get),a&&lr&&lr.call(r,e,t.set),r},mr=ur,hr=gr,dr=ar()?mr:hr;var br=function(r,e,t){dr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},wr=br;var yr=function(r){return"string"==typeof r};var Er=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var jr=function(){return Er&&"symbol"==typeof Symbol.toStringTag},Tr=Object.prototype.toString,_r=Tr;var Pr=function(r){return _r.call(r)},Or=Object.prototype.hasOwnProperty;var Ar=function(r,e){return null!=r&&Or.call(r,e)},xr="function"==typeof Symbol?Symbol.toStringTag:"",Vr=Ar,kr=xr,Sr=Tr;var Mr=Pr,Ir=function(r){var e,t,n;if(null==r)return Sr.call(r);t=r[kr],e=Vr(r,kr);try{r[kr]=void 0}catch(e){return Sr.call(r)}return n=Sr.call(r),e?r[kr]=t:delete r[kr],n},Lr=jr()?Ir:Mr,Nr=String.prototype.valueOf;var Rr=Lr,Fr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},$r=jr();var Cr=function(r){return"object"==typeof r&&(r instanceof String||($r?Fr(r):"[object String]"===Rr(r)))},Br=yr,Dr=Cr;var Gr=wr,Ur=function(r){return Br(r)||Dr(r)},zr=Cr;Gr(Ur,"isPrimitive",yr),Gr(Ur,"isObject",zr);var Xr,Hr=Ur;function Zr(){if(void 0===Xr){var r=new ArrayBuffer(2),e=new Uint8Array(r),t=new Uint16Array(r);if(e[0]=1,e[1]=2,258===t[0])Xr="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");Xr="LE"}}return Xr}function Wr(){return void 0!==h.location?h.location.hostname:""}function Yr(){return[]}function qr(){return 0}function Jr(){return Number.MAX_VALUE}function Kr(){return Number.MAX_VALUE}function Qr(){return[]}function re(){return"Browser"}function ee(){return void 0!==h.navigator?h.navigator.appVersion:""}function te(){return{}}function ne(){return{}}function ie(){return"javascript"}function oe(){return"browser"}function ae(){return"/tmp"}var ue=ae,ce={EOL:"\n",arch:ie,platform:oe,tmpdir:ue,tmpDir:ae,networkInterfaces:te,getNetworkInterfaces:ne,release:ee,type:re,cpus:Qr,totalmem:Kr,freemem:Jr,uptime:qr,loadavg:Yr,hostname:Wr,endianness:Zr},se=r(Object.freeze({__proto__:null,endianness:Zr,hostname:Wr,loadavg:Yr,uptime:qr,freemem:Jr,totalmem:Kr,cpus:Qr,type:re,release:ee,networkInterfaces:te,getNetworkInterfaces:ne,arch:ie,platform:oe,tmpDir:ae,tmpdir:ue,EOL:"\n",default:ce})),fe=/./;var le=function(r){return"boolean"==typeof r},pe=Boolean.prototype.toString;var ve=Lr,ge=function(r){try{return pe.call(r),!0}catch(r){return!1}},me=jr();var he=function(r){return"object"==typeof r&&(r instanceof Boolean||(me?ge(r):"[object Boolean]"===ve(r)))},de=le,be=he;var we=wr,ye=function(r){return de(r)||be(r)},Ee=he;we(ye,"isPrimitive",le),we(ye,"isObject",Ee);var je=ye;var Te=function(){return new Function("return this;")()},_e="object"==typeof self?self:null,Pe="object"==typeof window?window:null,Oe="object"==typeof h?h:null;module.exports=Oe;var Ae=je.isPrimitive,xe=Te,Ve=_e,ke=Pe,Se=r(Object.freeze({__proto__:null}));var Me=function(r){if(arguments.length){if(!Ae(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return xe()}if(Ve)return Ve;if(ke)return ke;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")},Ie=Me(),Le=Ie.document&&Ie.document.childNodes,Ne=Int8Array,Re=fe,Fe=Le,$e=Ne;var Ce=function(){return"function"==typeof Re||"object"==typeof $e||"function"==typeof Fe};var Be=function(){return/^\s*function\s*([^(]*)/i},De=Be;wr(De,"REGEXP",Be());var Ge=De,Ue=Lr;var ze=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ue(r)};var Xe=function(r){return null!==r&&"object"==typeof r};wr(Xe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ze(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Xe));var He=Xe;var Ze=Lr,We=Ge.REGEXP,Ye=function(r){return He(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var qe=function(r){var e,t,n;if(("Object"===(t=Ze(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=We.exec(n.toString()))return e[1]}return Ye(r)?"Buffer":t},Je=qe;var Ke=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Je(r).toLowerCase():e},Qe=qe;var rt=Ke,et=function(r){return Qe(r).toLowerCase()},tt=Ce()?et:rt;var nt=function(r){return"function"===tt(r)};var it=function(){return null},ot=er.getuid,at=nt(ot)?ot:it,ut=tr,ct=ir,st=nr,ft=at;var lt=function(){var r,e;return ct?(r=ut.USERPROFILE||ut.HOMEDRIVE+ut.HOMEPATH||ut.HOME)||null:(r=ut.HOME)?r:(e=ut.LOGNAME||ut.USER||ut.LNAME||ut.USERNAME,"darwin"===st?e?"/Users/"+e:null:0===ft()?"/root":e?"/home/"+e:null)},pt=se,vt=lt,gt=nt(pt.homedir)?pt.homedir:vt,mt=Math.floor;var ht=function(r){return mt(r)===r},dt=ht;var bt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dt(r.length)&&r.length>=0&&r.length<=9007199254740991};var wt=function(r){return"number"==typeof r},yt=Number,Et=yt.prototype.toString;var jt=Lr,Tt=yt,_t=function(r){try{return Et.call(r),!0}catch(r){return!1}},Pt=jr();var Ot=function(r){return"object"==typeof r&&(r instanceof Tt||(Pt?_t(r):"[object Number]"===jt(r)))},At=wt,xt=Ot;var Vt=wr,kt=function(r){return At(r)||xt(r)},St=Ot;Vt(kt,"isPrimitive",wt),Vt(kt,"isObject",St);var Mt=kt,It=Number.POSITIVE_INFINITY,Lt=yt.NEGATIVE_INFINITY,Nt=It,Rt=Lt,Ft=ht;var $t=function(r){return r<Nt&&r>Rt&&Ft(r)},Ct=Mt.isPrimitive,Bt=$t;var Dt=function(r){return Ct(r)&&Bt(r)},Gt=Mt.isObject,Ut=$t;var zt=function(r){return Gt(r)&&Ut(r.valueOf())},Xt=Dt,Ht=zt;var Zt=wr,Wt=function(r){return Xt(r)||Ht(r)},Yt=zt;Zt(Wt,"isPrimitive",Dt),Zt(Wt,"isObject",Yt);var qt=Wt;var Jt=function(r){return r!=r},Kt=Mt.isPrimitive,Qt=Jt;var rn=function(r){return Kt(r)&&Qt(r)},en=Mt.isObject,tn=Jt;var nn=function(r){return en(r)&&tn(r.valueOf())},on=rn,an=nn;var un=wr,cn=function(r){return on(r)||an(r)},sn=nn;un(cn,"isPrimitive",rn),un(cn,"isObject",sn);var fn=bt,ln=qt.isPrimitive,pn=Hr.isPrimitive,vn=cn.isPrimitive;var gn=function(r,e,t){var n,i,o;if(!fn(r)&&!pn(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ln(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(pn(r)){if(!pn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,vn(e)){for(o=i;o<n;o++)if(vn(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},mn=gn,hn=Hr.isPrimitive;var dn=function(r){if(!hn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},bn=Hr.isPrimitive;var wn=function(r){if(!bn(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},yn=dn,En=wn,jn=Hr.isPrimitive;var Tn=function(r){return jn(r)&&r===En(r)&&r!==yn(r)},_n=It,Pn=Lt;var On=function(r){return r==r&&r>Pn&&r<_n},An=qt.isPrimitive;var xn=function(r){return An(r)&&r>=0},Vn=qt.isObject;var kn=function(r){return Vn(r)&&r.valueOf()>=0},Sn=xn,Mn=kn;var In=wr,Ln=function(r){return Sn(r)||Mn(r)},Nn=kn;In(Ln,"isPrimitive",xn),In(Ln,"isObject",Nn);var Rn=Ln.isPrimitive,Fn=Hr.isPrimitive;var $n=function(r,e){var t,n;if(!Fn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Rn(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Cn=qt.isPrimitive,Bn=Hr.isPrimitive;var Dn=function(r,e,t){var n,i;if(!Bn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Bn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Cn(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Gn=$n,Un=Dn;var zn=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Un(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Gn("0",i):Gn("0",i)+r,n&&(r="-"+r)),r},Xn=Tn,Hn=wn,Zn=dn,Wn=On,Yn=Mt.isPrimitive,qn=zn;var Jn=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Wn(n)){if(!Yn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=qn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=qn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Xn(r.specifier)?Hn(t):Zn(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Kn=Hr.isPrimitive,Qn=/[-\/\\^$*+?.()|[\]{}]/g;var ri=function(r){var e,t;if(!Kn(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Qn,"\\$&"):(e=(e=r.substring(1,t)).replace(Qn,"\\$&"),r=r[0]+e+r.substring(t))},ei=RegExp.prototype.exec;var ti=Lr,ni=function(r){try{return ei.call(r),!0}catch(r){return!1}},ii=jr();var oi=ri,ai=nt,ui=Hr.isPrimitive,ci=function(r){return"object"==typeof r&&(r instanceof RegExp||(ii?ni(r):"[object RegExp]"===ti(r)))};var si=Tn,fi=wn,li=dn,pi=function(r,e,t){if(!ui(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(ui(e))e=oi(e),e=new RegExp(e,"g");else if(!ci(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!ui(t)&&!ai(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},vi=On,gi=Mt.isPrimitive,mi=function(r){return Math.abs(r)},hi=/e\+(\d)$/,di=/e-(\d)$/,bi=/^(\d+)$/,wi=/^(\d+)e/,yi=/\.0$/,Ei=/\.0*e/,ji=/(\..*[^0])0*e/;var Ti=function(r){var e,t,n=parseFloat(r.arg);if(!vi(n)){if(!gi(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":mi(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=pi(t,ji,"$1e"),t=pi(t,Ei,"e"),t=pi(t,yi,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=pi(t,hi,"e+0$1"),t=pi(t,di,"e-0$1"),r.alternate&&(t=pi(t,bi,"$1."),t=pi(t,wi,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=si(r.specifier)?fi(t):li(t)},_i=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Pi=$n;var Oi=Hr.isPrimitive,Ai=mn,xi=Jt,Vi=Jn,ki=Ti,Si=function(r){var e,t,n,i,o;for(e=0,n=[],o=_i.exec(r);o;)(t=r.slice(e,_i.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=_i.lastIndex,o=_i.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Mi=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Pi(" ",n):Pi(" ",n)+r},Ii=zn,Li=String.fromCharCode;var Ni=function(r){var e,t,n,i,o,a,u,c,s;if(!Oi(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Si(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Oi(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ai(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,xi(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,xi(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Vi(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!xi(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=xi(o)?String(n.arg):Li(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ki(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ii(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Mi(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},Ri=Ni,Fi=m.join,$i=tr,Ci=ir,Bi=nr,Di=Hr.isPrimitive,Gi=gt,Ui=Ri;var zi=function(r){var e,t,n;if(arguments.length){if(!Di(r))throw new TypeError(Ui("invalid argument. Must provide a string. Value: `%s`.",r));e=r}else e="";return Ci?(n=$i.LOCALAPPDATA||$i.APPDATA)?Fi(n,e):null:null===(t=Gi())?null:"darwin"===Bi?Fi(t,"Library","Preferences",e):(n=$i.XDG_CONFIG_HOME||Fi(t,".config"),Fi(n,e))};return zi}));
//# sourceMappingURL=bundle.js.map
