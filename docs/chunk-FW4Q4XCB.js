import{a as I}from"./chunk-TITLQPKD.js";import{a as F}from"./chunk-6345ZAK3.js";import{h as $}from"./chunk-UOZMT72A.js";import"./chunk-FJVERUXC.js";import{$a as N,Fa as x,Ha as s,Ja as h,Ka as S,La as k,Ma as y,Na as o,O as f,Oa as i,Pa as d,Qa as J,T as Y,Ta as m,U as C,Ua as u,W as l,Za as a,ab as E,da as G,ea as V,fb as H,gb as p,ib as U,ja as P,kb as w,lb as T,sa as O,va as c,wa as B}from"./chunk-ELDOSICJ.js";var _=class e{oneCandidate;eventToListe=new P;sendCandidateToListe(){this.eventToListe.emit(this.oneCandidate)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-item"]],inputs:{oneCandidate:"oneCandidate"},outputs:{eventToListe:"eventToListe"},standalone:!0,features:[p],decls:4,vars:5,consts:[[1,"list-group-item",3,"click"],[3,"src"]],template:function(t,r){t&1&&(o(0,"li",0),m("click",function(){return r.sendCandidateToListe()}),d(1,"img",1),w(2,"noAvatar"),a(3),i()),t&2&&(c(),s("src",T(2,3,r.oneCandidate.avatar),O),c(2),E(" ",r.oneCandidate.prenom," ",r.oneCandidate.nom,`
`))},dependencies:[I],styles:["img[_ngcontent-%COMP%]{width:50px;height:50px}"]})};function q(e,n){if(e&1){let t=J();o(0,"app-item",2),m("eventToListe",function(M){G(t);let j=u();return V(j.sendCandidateToCv(M))}),i()}if(e&2){let t=n.$implicit;s("oneCandidate",t)}}var R=class e{allCandidates=[];eventToCv=new P;candSer=C(F);ngOnInit(){this.candSer.getAllCandidatesAPI().subscribe({next:n=>{this.allCandidates=n},error:n=>{alert("Probl\xE8me de connexion ! Donn\xE9es fictives charg\xE9es..."),this.allCandidates=this.candSer.getAllCandidates()}})}sendCandidateToCv(n){this.eventToCv.emit(n)}afficherCandidates(){console.log(this.candSer.getAllCandidates())}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-liste"]],outputs:{eventToCv:"eventToCv"},standalone:!0,features:[p],decls:3,vars:0,consts:[[1,"list-group"],[3,"oneCandidate"],[3,"eventToListe","oneCandidate"]],template:function(t,r){t&1&&(o(0,"ol",0),k(1,q,1,1,"app-item",1,S),i()),t&2&&(c(),y(r.allCandidates))},dependencies:[_]})};var v=class e{allRecrues=[];getAllRecrues(){return this.allRecrues}addRecrue(n){this.allRecrues.indexOf(n)==-1?this.allRecrues.push(n):alert("Ce candidat a d\xE9j\xE0 \xE9t\xE9 recrut\xE9 !")}constructor(){}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var Q=e=>[e],D=class e{selCand;recrueSer=C(v);recruterCandidat(){this.recrueSer.addRecrue(this.selCand)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-details"]],inputs:{selCand:"selCand"},standalone:!0,features:[p],decls:52,vars:10,consts:[[1,"card-container"],[1,"card"],[1,"front"],[1,"cover"],["src","rotating_card_thumb2.png"],[1,"user"],[1,"img-circle",3,"src"],[1,"content"],[1,"main"],[1,"name"],[1,"profession"],[1,"text-center"],[1,"footer"],[1,"rating"],[1,"fa","fa-mail-forward"],[1,"back"],[1,"header"],[1,"motto"],[1,"stats-container"],[1,"stats"],[1,"social-links","text-center"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-info",3,"routerLink"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),d(4,"img",4),i(),o(5,"div",5),d(6,"img",6),w(7,"noAvatar"),i(),o(8,"div",7)(9,"div",8)(10,"h3",9),a(11),i(),o(12,"p",10),a(13),i(),o(14,"p",11),a(15),i()(),o(16,"div",12)(17,"div",13),d(18,"i",14),a(19," Auto Rotation "),i()()()(),o(20,"div",15)(21,"div",16)(22,"h5",17),a(23,'"To be or not to be, this is my awesome motto!"'),i()(),o(24,"div",7)(25,"div",8)(26,"h4",11),a(27,"Job Description"),i(),o(28,"p",11),a(29," Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others... "),i(),o(30,"div",18)(31,"div",19)(32,"h4"),a(33,"235"),i(),o(34,"p"),a(35,"Followers"),i()(),o(36,"div",19)(37,"h4"),a(38,"114"),i(),o(39,"p"),a(40,"Following"),i()(),o(41,"div",19)(42,"h4"),a(43,"35"),i(),o(44,"p"),a(45,"Projects"),i()()()()(),o(46,"div",12)(47,"div",20)(48,"button",21),m("click",function(){return r.recruterCandidat()}),a(49," Recruter "),i(),o(50,"button",22),a(51," Details "),i()()()()()()),t&2&&(c(6),s("src",T(7,6,r.selCand==null?null:r.selCand.avatar),O),c(5),E("",r.selCand==null?null:r.selCand.prenom," ",r.selCand==null?null:r.selCand.nom,""),c(2),N("",r.selCand==null?null:r.selCand.age,"\xA0ans"),c(2),N(" ",r.selCand==null?null:r.selCand.profession," "),c(35),s("routerLink",U(8,Q,r.selCand._id)))},dependencies:[I,$],styles:["body[_ngcontent-%COMP%]{margin-top:60px;font-size:14px;font-family:Helvetica Nueue,Arial,Verdana,sans-serif;background-color:#e5e9ed}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]:active{outline:0!important}.card-container[_ngcontent-%COMP%]{-webkit-perspective:800px;-moz-perspective:800px;-o-perspective:800px;perspective:800px;margin-bottom:30px}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .card[_ngcontent-%COMP%], .card-container.hover.manual-flip[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg)}.card-container.static[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%], .card-container.static.hover[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{-webkit-transform:none;-moz-transform:none;-o-transform:none;transform:none}.card[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .5s;-moz-transition:-moz-transform .5s;-o-transition:-o-transform .5s;transition:transform .5s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;background-color:#fff;box-shadow:0 1px 3px #00000024}.front[_ngcontent-%COMP%]{z-index:2}.back[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);z-index:3}.back[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{position:absolute;left:0;bottom:4px}.card[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border-radius:4px;color:#444}.card-container[_ngcontent-%COMP%], .front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{width:100%;height:420px;border-radius:4px}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{height:105px;overflow:hidden;border-radius:4px 4px 0 0}.card[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{border-radius:50%;display:block;height:120px;margin:-55px auto 0;overflow:hidden;width:120px}.card[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:none repeat scroll 0 0 #fff;border:4px solid #FFFFFF;width:100%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{background-color:#0000;box-shadow:none;padding:10px 20px 20px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{min-height:160px}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{height:215px}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:22px;line-height:28px;margin:10px 0 0;text-align:center;text-transform:capitalize}.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:5px 0;font-weight:400;line-height:20px}.card[_ngcontent-%COMP%]   .profession[_ngcontent-%COMP%]{color:#999;text-align:center;margin-bottom:20px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{border-top:1px solid #EEEEEE;color:#999;margin:30px 0 0;padding:10px 0 0;text-align:center}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{font-size:18px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 7px}.card[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .btn-simple[_ngcontent-%COMP%]{margin-top:-6px}.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:15px 20px;height:90px}.card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]{border-bottom:1px solid #EEEEEE;color:#999;font-size:14px;font-weight:400;padding-bottom:10px;text-align:center}.card[_ngcontent-%COMP%]   .stats-container[_ngcontent-%COMP%]{width:100%;margin-top:50px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{display:block;float:left;width:33.333333%;text-align:center}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:first-child{border-right:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]:last-child{border-left:1px solid #EEEEEE}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:300;margin-bottom:5px}.card[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#777}.title[_ngcontent-%COMP%]{color:#506a85;text-align:center;font-weight:300;font-size:44px;margin-bottom:90px;line-height:90%}.title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:17px;color:#999;text-transform:uppercase;margin:0}.space-30[_ngcontent-%COMP%]{height:30px;display:block}.space-50[_ngcontent-%COMP%]{height:50px;display:block}.space-200[_ngcontent-%COMP%]{height:200px;display:block}.white-board[_ngcontent-%COMP%]{background-color:#fff;min-height:200px;padding:60px 60px 20px}.ct-heart[_ngcontent-%COMP%]{color:#f74933}pre.prettyprint[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #999;margin-top:20px;padding:20px;text-align:left}.atv[_ngcontent-%COMP%], .str[_ngcontent-%COMP%]{color:#05ae0e}.tag[_ngcontent-%COMP%], .pln[_ngcontent-%COMP%], .kwd[_ngcontent-%COMP%]{color:#3472f7}.atn[_ngcontent-%COMP%]{color:#2c93ff}.pln[_ngcontent-%COMP%]{color:#333}.com[_ngcontent-%COMP%]{color:#999}.btn-simple[_ngcontent-%COMP%]{opacity:.8;color:#666;background-color:transparent}.btn-simple[_ngcontent-%COMP%]:hover, .btn-simple[_ngcontent-%COMP%]:focus{background-color:transparent;box-shadow:none;opacity:1}.btn-simple[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px}.navbar-brand-logo[_ngcontent-%COMP%]{padding:0}.navbar-brand-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border:1px solid #333333;border-radius:50%;float:left;overflow:hidden;width:60px}.navbar[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#fff;float:left;font-size:18px;font-weight:400;line-height:20px;margin-left:10px;margin-top:10px;width:60px}.navbar-default[_ngcontent-%COMP%]   .navbar-brand-logo[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:#555}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]{-ms-backface-visibility:visible;backface-visibility:visible}.back[_ngcontent-%COMP%]{visibility:hidden;-ms-transition:all .2s cubic-bezier(.92,.01,.83,.67)}.front[_ngcontent-%COMP%]{z-index:4}.card-container[_ngcontent-%COMP%]:not(.manual-flip):hover   .back[_ngcontent-%COMP%], .card-container.manual-flip.hover[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{z-index:5;visibility:visible}}"]})};var L=class e{constructor(){}afficherInfos(){console.log("Je suis le First Service")}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var b=class e{constructor(n){this.firstSer=n}bonjour(){console.log("Je suis le second Service"),this.firstSer.afficherInfos()}static \u0275fac=function(t){return new(t||e)(Y(L))};static \u0275prov=f({token:e,factory:e.\u0275fac})};function Z(e,n){if(e&1&&d(0,"app-item",1),e&2){let t=n.$implicit;s("oneCandidate",t)}}function ee(e,n){if(e&1&&(o(0,"div")(1,"h4"),a(2,"Liste des recrues"),i(),o(3,"ol",0),k(4,Z,1,1,"app-item",1,S),i()()),e&2){let t=u();c(4),y(t.tabRecrues)}}var A=class e{constructor(n){this.recrueSer=n}tabRecrues=[];ngOnInit(){this.tabRecrues=this.recrueSer.getAllRecrues()}static \u0275fac=function(t){return new(t||e)(B(v))};static \u0275cmp=l({type:e,selectors:[["app-recruter"]],standalone:!0,features:[p],decls:1,vars:1,consts:[[1,"list-group"],[3,"oneCandidate"]],template:function(t,r){t&1&&x(0,ee,6,0,"div"),t&2&&h(r.tabRecrues.length!=0?0:-1)},dependencies:[_]})};function te(e,n){if(e&1&&d(0,"app-details",4),e&2){let t=u();s("selCand",t.selectedCandidate)}}function ne(e,n){e&1&&(o(0,"h3"),a(1,"Veuillez sel\xE9ctionner un candidat..."),i())}var W=class e{tabCandidats=[];selectedCandidate;recupererCandidatSelectionne(n){this.selectedCandidate=n}secondSer=C(b);candSer=C(F);ngOnInit(){this.secondSer.bonjour(),this.tabCandidats=this.candSer.getAllCandidates()}addNewCandidate(){}afficherCandidates(){console.log(this.candSer.getAllCandidates())}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-cv"]],standalone:!0,features:[H([b]),p],decls:7,vars:1,consts:[[1,"row"],[1,"col-5"],[3,"eventToCv"],[1,"col-7"],[3,"selCand"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-liste",2),m("eventToCv",function(j){return r.recupererCandidatSelectionne(j)}),i()(),o(3,"div",3),x(4,te,1,1,"app-details",4)(5,ne,2,0,"h3"),i()(),d(6,"app-recruter")),t&2&&(c(4),h(r.selectedCandidate?4:5))},dependencies:[R,D,A]})};export{W as CvComponent};
