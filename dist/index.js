"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(P,t){
var u=require("path").join,a=require('@stdlib/process-env/dist'),o=require('@stdlib/assert-is-windows/dist'),f=require('@stdlib/os-platform/dist'),l=require('@stdlib/assert-is-string/dist').isPrimitive,q=require('@stdlib/os-homedir/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist');function d(i){var r,e,n;if(arguments.length){if(!l(i))throw new TypeError(A('0mL3B',i));r=i}else r="";return o?(n=a.LOCALAPPDATA||a.APPDATA,n?u(n,r):null):(e=q(),e===null?null:f==="darwin"?u(e,"Library","Preferences",r):(n=a.XDG_CONFIG_HOME||u(e,".config"),u(n,r)))}t.exports=d
});var g=s();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
