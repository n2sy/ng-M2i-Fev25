import{a as S}from"./chunk-F5M6GUGJ.js";import{g as L}from"./chunk-UOZMT72A.js";import{b as V,d as E,e as k,g as y,i as M,j as N,t as T,u as F,v as P,x as H}from"./chunk-DMKBKUFJ.js";import"./chunk-FJVERUXC.js";import{Fa as p,Ha as x,Ja as u,Na as n,Oa as o,Pa as C,Qa as v,Ta as _,U as b,Ua as a,W as w,Ya as s,Za as l,da as d,ea as g,gb as h,va as f}from"./chunk-ELDOSICJ.js";function R(i,t){i&1&&(n(0,"div",3),l(1,"Login et/ou Mot de passe invalides"),o())}function A(i,t){i&1&&(n(0,"div",3),l(1,"Veuillez saisir une adresse mail valide"),o())}function q(i,t){i&1&&(n(0,"div",3),l(1,"Le nombre minimal de caract\xE8res est 5"),o())}function I(i,t){if(i&1){let e=v();n(0,"button",9),_("click",function(){d(e);let r=a(),m=s(2);return g(r.loginHandler(m))}),l(1," Login "),o(),n(2,"button",10),_("click",function(){d(e);let r=a();return g(r.toggleShowLogin())}),l(3," Switch to Register "),o()}if(i&2){a();let e=s(2);x("disabled",e.invalid)}}function O(i,t){if(i&1){let e=v();n(0,"button",11),_("click",function(){d(e);let r=a(),m=s(2);return g(r.registerHandler(m.value))}),l(1," S'inscrire "),o(),n(2,"button",12),_("click",function(){d(e);let r=a();return g(r.toggleShowLogin())}),l(3," Switch to Login "),o()}if(i&2){a();let e=s(2);x("disabled",e.invalid)}}var D=class i{langageParDefaut="php";monCommentaire="RAS...";showLogin=!0;showError=!1;authSer=b(S);router=b(L);submitHandler(t){console.log(t.value)}resetHandler(t){t.reset()}toggleShowLogin(){this.showLogin=!this.showLogin}registerHandler(t){this.authSer.inscription(t).subscribe({next:e=>{alert(e.message),this.toggleShowLogin()},error:e=>{console.log("Probl\xE8me avec l'inscription de l'utilisateur")}})}loginHandler(t){this.authSer.seConnecter(t.value).subscribe({next:e=>{localStorage.setItem("access_token",e.token),alert(e.message),this.router.navigateByUrl("/cv")},error:e=>{this.showError=!0,t.reset()}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=w({type:i,selectors:[["app-login"]],standalone:!0,features:[h],decls:19,vars:4,consts:[["f","ngForm"],["inpLogin","ngModel"],["inpPwd","ngModel"],[1,"alert","alert-danger"],["ngModel","","name","email","required","","email","","type","text",1,"form-control"],["for",""],["ngModel","","name","password","minlength","5","type","text",1,"form-control"],[1,"row"],[1,"col-6","offset-4"],[1,"btn","btn-primary",3,"click","disabled"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click","disabled"],[1,"btn","btn-info",3,"click"]],template:function(e,c){if(e&1&&(p(0,R,2,0,"div",3),n(1,"form",null,0)(3,"label"),l(4,"Login"),o(),C(5,"input",4,1),p(7,A,2,0,"div",3),n(8,"label",5),l(9,"Mot de passe"),o(),C(10,"input",6,2),p(12,q,2,0,"div",3),C(13,"br")(14,"br"),n(15,"div",7)(16,"div",8),p(17,I,4,1)(18,O,4,1),o()()()),e&2){let r=s(6),m=s(11);u(c.showError?0:-1),f(7),u(r.invalid&&r.dirty?7:-1),f(5),u(m.invalid&&m.dirty?12:-1),f(5),u(c.showLogin?17:18)}},dependencies:[H,N,V,E,k,T,P,F,M,y],styles:[".ng-invalid.ng-dirty[_ngcontent-%COMP%]{border-color:red}.ng-valid.ng-touched[_ngcontent-%COMP%]{border-color:green}"]})};export{D as LoginComponent};
