import{a as g}from"./chunk-B3D5XFKA.js";import{D as r,E as o,H as h,J as n,L as d,Q as f,X as x,ca as v,ea as m,i as u,m as c,n as p,v as a,w as l}from"./chunk-C6QHDSMV.js";var S=(()=>{class e{constructor(t,i){this.userService=t,this.router=i,this.userName="",this.userCorreo="",this.userSaldo=0}ngOnInit(){let t=this.userService.getUser();t?(this.userName=t.nombre,this.userCorreo=t.correo,this.userSaldo=t.saldo):console.error("No hay usuario iniciado sesi\xF3n.")}cerrarSesion(){this.userService.clearUser(),this.router.navigate(["/login"])}static{this.\u0275fac=function(i){return new(i||e)(l(g),l(v))}}static{this.\u0275cmp=c({type:e,selectors:[["app-dash"]],standalone:!0,features:[f],decls:18,vars:3,consts:[[1,"min-h-screen","bg-gray-100","p-4"],[1,"max-w-4xl","mx-auto","bg-white","rounded-xl","shadow-md","p-6"],[1,"flex","justify-between","items-center","mb-6"],[1,"text-2xl","font-semibold","text-gray-800"],[1,"text-sm","text-gray-500"],[1,"bg-blue-500","text-white","px-4","py-2","rounded-md",3,"click"],[1,"bg-blue-50","p-6","rounded-lg","shadow-lg","mb-6"],[1,"text-xl","font-semibold","text-gray-700"],[1,"mt-4"],[1,"text-2xl","font-bold","text-green-600"]],template:function(i,s){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),n(5),o(),r(6,"p",4),n(7),o()(),r(8,"button",5),h("click",function(){return s.cerrarSesion()}),n(9,"Cerrar sesi\xF3n"),o()(),r(10,"div",6)(11,"h3",7),n(12,"Estado actual de tu dinero"),o(),r(13,"div",8)(14,"p",9),n(15),o(),r(16,"p",4),n(17,"Saldo disponible en tu cuenta"),o()()()()()),i&2&&(a(5),d("Bienvenido, ",s.userName,""),a(2),d("Correo: ",s.userCorreo,""),a(8),d("$ ",s.userSaldo," "))}})}}return e})();var C=[{path:"dash",component:S}],j=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=u({imports:[x,m.forChild(C),m]})}}return e})();export{j as DashuserModule};