import{h as t}from"./chunk-C6QHDSMV.js";var i=(()=>{class s{constructor(){this.user=null;let e=sessionStorage.getItem("user");this.user=e?JSON.parse(e):null}setUser(e){this.user=e,sessionStorage.setItem("user",JSON.stringify(e))}getUser(){if(!this.user){let e=sessionStorage.getItem("user");this.user=e?JSON.parse(e):null}return this.user}clearUser(){this.user=null,sessionStorage.removeItem("user")}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275prov=t({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{i as a};
