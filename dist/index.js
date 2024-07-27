"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(P,t){
var u=require("path").join,a=require('@stdlib/process-env/dist'),o=require('@stdlib/assert-is-windows/dist'),f=require('@stdlib/os-platform/dist'),l=require('@stdlib/assert-is-string/dist').isPrimitive,q=require('@stdlib/os-homedir/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e){var r,n,i;if(arguments.length){if(!l(e))throw new TypeError(A('0mL3B',e));r=e}else r="";return o?(i=a.LOCALAPPDATA||a.APPDATA,i?u(i,r):null):(n=q(),n===null?null:f==="darwin"?u(n,"Library","Preferences",r):(i=a.XDG_CONFIG_HOME||u(n,".config"),u(i,r)))}t.exports=d
});var g=s();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
