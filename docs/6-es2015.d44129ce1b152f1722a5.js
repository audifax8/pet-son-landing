(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{o6bk:function(t,e,n){"use strict";n.r(e);var s=n("ofXK"),o=n("tyNb"),a=n("3Pt+"),r=n("fXoL");function i(t,e){if(1&t&&(r.Pb(0,"li",4),r.Pb(1,"a",5),r.sc(2),r.Ob(),r.Ob()),2&t){const t=e.$implicit;r.Ab(1),r.gc("routerLink",t.fragment),r.Ab(1),r.tc(t.title)}}let c=(()=>{class t{constructor(){this.links=[{title:"Nueva mascota",fragment:"new-pet"},{title:"Nuevo tipo mascota",fragment:"pet-type"},{title:"Crear miembro equipo",fragment:"new-team-member"},{title:"Administrar mascotas",fragment:"manage-pets"},{title:"Administrar equipo",fragment:"manage-team"},{title:"Todas las mascotas",fragment:"pets"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-back-ofice"]],decls:5,vars:1,consts:[[1,"wrapper"],["id","sidebar"],[1,"list-unstyled","components"],["class","active",4,"ngFor","ngForOf"],[1,"active"],["data-toggle","collapse","aria-expanded","false",1,"dropdown-toggle",3,"routerLink"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"nav",1),r.Pb(2,"ul",2),r.qc(3,i,3,2,"li",3),r.Ob(),r.Ob(),r.Mb(4,"router-outlet"),r.Ob()),2&t&&(r.Ab(3),r.gc("ngForOf",e.links))},directives:[s.k,o.e,o.c],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:stretch}"]}),t})();class m{constructor(t,e,n){this.formGroupIntance=t,this.controlName=e,this.inputValue=n}execute(){const t=this.formGroupIntance.get(this.controlName);t&&t.setValue(this.inputValue)}}var b=function(t){return t.DEFAULT="DEFAULT",t.EDIT="EDIT",t.DEFINITIVE="DEFINITIVE",t.MARK_AS_DIRTY_AND_TOUCHED="MARK_AS_DIRTY_AND_TOUCHED",t.RESET="RESET",t}({});class l{constructor(t,e,n){this.formGroupIntance=t,this.controlName=e,this.validationRules=n}execute(){const t=this.formGroupIntance.get(this.controlName);t&&(this.validationRules?t.setValidators(this.validationRules):t.clearValidators())}}var d=n("ZF+8");function u(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.cc(2,"json"),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.tc(r.dc(2,1,t.loginForm.value))}}function h(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.cc(2,"json"),r.cc(3,"async"),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.tc(r.dc(2,1,r.dc(3,3,t.user$)))}}function p(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.cc(2,"async"),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.tc(r.dc(2,1,t.error$))}}let f=(()=>{class t{constructor(t,e,n,s,o){this.commandS=t,this.formS=e,this.router=n,this.userS=s,this.externalLibsS=o,this.loginConstants={USER_NAME:"USER_NAME",PASSWORD:"PASSWORD"},this.regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,this.isDevMode=this.externalLibsS.isDevMode}ngOnInit(){this.loadForm(),this.user$=this.userS.user$,this.subscription=this.user$.subscribe(()=>this.router.navigate(["back-office"])),this.error$=this.userS.errorMessage$}ngOnDestroy(){this.subscription.unsubscribe()}loadForm(){this.loginForm=this.getFormInstance(),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.USER_NAME,[a.l.required])),this.commandS.addCommand(new l(this.loginForm,this.loginConstants.PASSWORD,[a.l.required,a.l.pattern(this.regexPassword)])),this.isDevMode&&(this.commandS.addCommand(new m(this.loginForm,this.loginConstants.USER_NAME,"amarele1991@gmail.com")),this.commandS.addCommand(new m(this.loginForm,this.loginConstants.PASSWORD,"Grymmjow8@"))),this.commandS.executeCommands()}getFormInstance(){const t=new a.e({}),e=new a.c,n=new a.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}login(){const t=this.formS.getInputValue(this.loginConstants.USER_NAME,this.loginForm),e=this.formS.getInputValue(this.loginConstants.PASSWORD,this.loginForm);this.userS.login(t,e)}logout(){this.userS.logout()}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(d.a),r.Lb(d.e),r.Lb(o.b),r.Lb(d.f),r.Lb(d.c))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-login"]],decls:22,vars:6,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control",3,"formControlName"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1",1,"form-control",3,"formControlName"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"h1",1),r.sc(2,"Login"),r.Ob(),r.Pb(3,"form",2),r.Pb(4,"div",3),r.Pb(5,"label",4),r.sc(6,"Email address"),r.Ob(),r.Mb(7,"input",5),r.Pb(8,"small",6),r.sc(9,"We'll never share your email with anyone else."),r.Ob(),r.Ob(),r.Pb(10,"div",3),r.Pb(11,"label",7),r.sc(12,"Password"),r.Ob(),r.Mb(13,"input",8),r.Ob(),r.Pb(14,"button",9),r.Xb("click",(function(){return e.login()})),r.sc(15,"Login"),r.Ob(),r.Pb(16,"button",9),r.Xb("click",(function(){return e.logout()})),r.sc(17,"Close"),r.Ob(),r.Ob(),r.Mb(18,"hr",10),r.qc(19,u,3,3,"pre",11),r.qc(20,h,4,5,"pre",11),r.qc(21,p,3,3,"pre",11),r.Ob()),2&t&&(r.Ab(3),r.gc("formGroup",e.loginForm),r.Ab(4),r.hc("formControlName",e.loginConstants.USER_NAME),r.Ab(6),r.hc("formControlName",e.loginConstants.PASSWORD),r.Ab(6),r.gc("ngIf",e.isDevMode),r.Ab(1),r.gc("ngIf",e.isDevMode),r.Ab(1),r.gc("ngIf",e.isDevMode))},directives:[a.m,a.j,a.f,a.a,a.i,a.d,s.l],pipes:[s.f,s.b],styles:[""]}),t})();var g=n("lJxs");let O=(()=>{class t{constructor(t,e){this.router=t,this.userS=e}canActivate(t,e){return this.userS.user$.pipe(Object(g.a)(t=>!!t||(this.router.navigate(["back-office/login"]),!1)))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(o.b),r.Tb(d.f))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{constructor(t,e){this.commandS=t,this.formS=e,this.loginConstants={USER_NAME:"name",PASSWORD:"PASSWORD"}}ngOnInit(){}getFormInstance(){const t=new a.e({}),e=new a.c,n=new a.c;return t.addControl(this.loginConstants.USER_NAME,e),t.addControl(this.loginConstants.PASSWORD,n),t}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(d.a),r.Lb(d.e))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-new-pet"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.sc(1,"new-pet works!"),r.Ob())},styles:[""]}),t})(),A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-pets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.sc(1,"pets works!"),r.Ob())},styles:[""]}),t})();var S=n("mrSG"),P=n("S/Aq");function v(t,e){if(1&t&&(r.Pb(0,"li",1),r.sc(1),r.Ob()),2&t){const t=e.$implicit;r.Ab(1),r.uc(" ",t.name,"\n")}}let I=(()=>{class t{constructor(t,e,n){this.commandS=t,this.formS=e,this.afs=n,this.petTypeConstants={NAME:"NAME"}}ngOnInit(){this.petTypeForm=this.getFormInstance(),this.getPetTypes(),this.items$=this.afs.collection("petType").valueChanges(),this.petTypes$=this.afs.collection("petType").valueChanges()}getFormInstance(){const t=new a.e({}),e=new a.c;return t.addControl(this.petTypeConstants.NAME,e),t}getPetTypes(){return Object(S.__awaiter)(this,void 0,void 0,(function*(){}))}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(d.a),r.Lb(d.e),r.Lb(P.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-pet-type"]],decls:8,vars:8,consts:[["class","text",4,"ngFor","ngForOf"],[1,"text"]],template:function(t,e){1&t&&(r.Pb(0,"p"),r.sc(1,"pet-type works!"),r.Ob(),r.Pb(2,"pre"),r.sc(3),r.cc(4,"json"),r.cc(5,"async"),r.Ob(),r.qc(6,v,2,1,"li",0),r.cc(7,"async")),2&t&&(r.Ab(3),r.uc(" ",r.dc(4,2,r.dc(5,4,e.petTypes$)),""),r.Ab(3),r.gc("ngForOf",r.dc(7,6,e.items$)))},directives:[s.k],pipes:[s.f,s.b],styles:[""]}),t})();var M=n("XNiG");let E=(()=>{class t{constructor(t){this.dbS=t,this.teamMembersSubject=new M.a,this.teamMembers$=this.teamMembersSubject.asObservable(),this.test$=this.dbS.getCollection("team-member").pipe(Object(g.a)(t=>t.map(t=>Object.assign(Object.assign({},t.payload.doc.data()),{firebaseId:t.payload.doc.id}))))}loadTeamMembers(){this.dbS.getCollection("team-member").subscribe(t=>this.teamMembersSubject.next(t),t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(d.b))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac}),t})();function w(t,e){if(1&t){const t=r.Qb();r.Pb(0,"tr"),r.Pb(1,"th",4),r.sc(2),r.Ob(),r.Pb(3,"td"),r.sc(4),r.Ob(),r.Pb(5,"td"),r.sc(6),r.Ob(),r.Pb(7,"td"),r.sc(8),r.Ob(),r.Pb(9,"td"),r.Pb(10,"button",5),r.Xb("click",(function(){r.nc(t);const n=e.$implicit;return r.bc().edit(n.firebaseId)})),r.sc(11," Editar "),r.Ob(),r.Ob(),r.Pb(12,"td"),r.Pb(13,"button",6),r.Xb("click",(function(){r.nc(t);const n=e.$implicit;return r.bc().delete(n.firebaseId)})),r.sc(14," Eliminar "),r.Ob(),r.Ob(),r.Ob()}if(2&t){const t=e.$implicit,n=e.index;r.Ab(2),r.tc(n+1),r.Ab(2),r.tc(t.name),r.Ab(2),r.tc(t.occupation),r.Ab(2),r.tc(t.role)}}function y(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.cc(2,"json"),r.cc(3,"async"),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.uc(" ",r.dc(2,1,r.dc(3,3,t.teamMembers$))," ")}}let F=(()=>{class t{constructor(t,e,n,s){this.router=t,this.mtS=e,this.externalLibsS=n,this.dbS=s,this.isDevMode=this.externalLibsS.isDevMode}ngOnInit(){this.teamMembers$=this.mtS.test$}edit(t){this.router.navigate([`back-office/new-team-member/${t}`])}delete(t){this.dbS.deleteCollection("team-member",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.b),r.Lb(E),r.Lb(d.c),r.Lb(d.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-manage-team"]],decls:19,vars:4,consts:[[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(r.Pb(0,"table",0),r.Pb(1,"thead"),r.Pb(2,"tr"),r.Pb(3,"th",1),r.sc(4,"#"),r.Ob(),r.Pb(5,"th",1),r.sc(6,"Nombre"),r.Ob(),r.Pb(7,"th",1),r.sc(8,"Ocupaci\xf3n"),r.Ob(),r.Pb(9,"th",1),r.sc(10,"Rol"),r.Ob(),r.Pb(11,"th",1),r.sc(12,"Editar"),r.Ob(),r.Pb(13,"th",1),r.sc(14,"Eliminar"),r.Ob(),r.Ob(),r.Ob(),r.Pb(15,"tbody"),r.qc(16,w,15,4,"tr",2),r.cc(17,"async"),r.Ob(),r.Ob(),r.qc(18,y,4,5,"pre",3)),2&t&&(r.Ab(16),r.gc("ngForOf",r.dc(17,2,e.teamMembers$)),r.Ab(2),r.gc("ngIf",e.isDevMode))},directives:[s.k,s.l],pipes:[s.b,s.f],styles:[""]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-manage-pets"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Pb(0,"p"),r.sc(1,"manage-pets works!"),r.Ob())},styles:[""]}),t})();var D=n("7Cbv");let N=(()=>{class t extends class{constructor(){this.id=Object(D.a)(),this.creationDate=(new Date).toJSON()}}{constructor(){super()}getId(){return this.id}getFormInstance(){const e=new a.e({}),n=new a.c,s=new a.c,o=new a.c,r=new a.c,i=new a.c;return e.addControl(t.formConstants.ID,n),e.addControl(t.formConstants.NAME,s),e.addControl(t.formConstants.ROLE,o),e.addControl(t.formConstants.DESCRIPTION,r),e.addControl(t.formConstants.OCCUPATION,i),e}mapFormToTeamMember(t,e){return Object.assign(Object.assign({creationDate:this.creationDate},t.value),{avatar:e})}}return t.FILE_STORE_PATH="pet-son/team-members/",t.COLLECTION_PATH="team-member/",t.formConstants={ID:"id",NAME:"name",ROLE:"role",DESCRIPTION:"description",OCCUPATION:"occupation"},t})();function L(t,e){1&t&&(r.Pb(0,"span"),r.sc(1," Ingrese un nombre de usuario. "),r.Ob())}function R(t,e){1&t&&(r.Pb(0,"span"),r.sc(1," Ingrese el rol en la fundaci\xf3n. "),r.Ob())}function k(t,e){1&t&&(r.Pb(0,"span"),r.sc(1," Ingrese una descrici\xf3n. "),r.Ob())}function _(t,e){1&t&&(r.Pb(0,"span"),r.sc(1," Ingrese la ocupaci\xf3n. "),r.Ob())}function $(t,e){if(1&t&&(r.Pb(0,"div",3),r.Mb(1,"img",14),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.gc("src",t.avatarFullPath,r.oc)}}function x(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.cc(2,"json"),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.tc(r.dc(2,1,t.teamMemberForm.value))}}function U(t,e){if(1&t&&(r.Pb(0,"pre"),r.sc(1),r.Ob()),2&t){const t=r.bc();r.Ab(1),r.tc(t.teamMemberForm.errors)}}const q=function(t){return{"is-invalid":t}};let j=(()=>{class t{constructor(t,e,n,s,o,a,r){this.rote=t,this.roter=e,this.commandS=n,this.formS=s,this.externalLibsS=o,this.fileStorageS=a,this.dbS=r,this.formConstants=N.formConstants,this.isPendingAvatar=!1,this.isDevMode=this.externalLibsS.isDevMode,this.teamMember=new N}ngOnInit(){this.teamMemberForm=this.teamMember.getFormInstance();const t=this.rote.snapshot.paramMap.get("teamMemberId");t?this.dbS.getCollectionById(N.COLLECTION_PATH,t).subscribe(e=>{e.exists&&this.loadFormByState(b.EDIT,this.teamMemberForm,t,e.data())}):this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}loadFormByState(t,e,n,s){switch(t){case b.DEFAULT:this.commandS.addCommand(new l(e,this.formConstants.ID,[a.l.required])),this.commandS.addCommand(new l(e,this.formConstants.NAME,[a.l.required])),this.commandS.addCommand(new l(e,this.formConstants.ROLE,[a.l.required])),this.commandS.addCommand(new l(e,this.formConstants.DESCRIPTION,[a.l.required])),this.commandS.addCommand(new l(e,this.formConstants.OCCUPATION,[a.l.required])),this.commandS.addCommand(new m(e,this.formConstants.ID,n));break;case b.EDIT:this.commandS.addCommand(new m(e,this.formConstants.ID,n)),this.commandS.addCommand(new m(e,this.formConstants.NAME,s.name)),this.commandS.addCommand(new m(e,this.formConstants.ROLE,s.role)),this.commandS.addCommand(new m(e,this.formConstants.DESCRIPTION,s.description)),this.commandS.addCommand(new m(e,this.formConstants.OCCUPATION,s.occupation)),this.fileStorageS.getFile(N.FILE_STORE_PATH,s.id).then(t=>{this.avatarFullPath=t});break;case b.MARK_AS_DIRTY_AND_TOUCHED:this.formS.markAsTouchedAndMarkAsDirty(e),this.avatar||(this.isPendingAvatar=!0);break;case b.RESET:this.formS.reset(e)}this.commandS.executeCommands()}create(){!this.teamMemberForm.invalid&&this.avatar?this.save():this.loadFormByState(b.MARK_AS_DIRTY_AND_TOUCHED,this.teamMemberForm)}clear(){this.isPendingAvatar=!1,this.avatar=null,this.avatarFullPath=null,this.teamMember=new N,this.loadFormByState(b.RESET,this.teamMemberForm),this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}loadAvatar(t){this.avatar=t.target.files[0],this.isPendingAvatar=!1}save(){this.fileStorageS.saveFile(N.FILE_STORE_PATH,this.teamMember.getId(),this.avatar).then(t=>{this.avatarFullPath=t.metadata.fullPath,this.dbS.saveCollection(N.COLLECTION_PATH,this.teamMember.mapFormToTeamMember(this.teamMemberForm,this.avatarFullPath)).then(t=>{this.roter.navigate([`back-office/new-team-member/${t.id}`])},t=>console.log(t))})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.a),r.Lb(o.b),r.Lb(d.a),r.Lb(d.e),r.Lb(d.c),r.Lb(d.d),r.Lb(d.b))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-new-team-member"]],decls:43,vars:31,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["aria-describedby","nameHelp",1,"form-control",3,"formControlName","id","ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["for","exampleInputPassword1"],["aria-describedby","roleHelp",1,"form-control",3,"formControlName","id","ngClass"],["type","file","id","avatar",1,"form-control",3,"ngClass","change"],["class","form-group",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[3,"src"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"h3",1),r.sc(2,"Crear miembro equipo"),r.Ob(),r.Pb(3,"form",2),r.Pb(4,"div",3),r.Pb(5,"label",4),r.sc(6,"Nombre"),r.Ob(),r.Mb(7,"input",5),r.Pb(8,"div",6),r.qc(9,L,2,0,"span",7),r.Ob(),r.Ob(),r.Pb(10,"div",3),r.Pb(11,"label",8),r.sc(12,"Rol en la fundaci\xf3n"),r.Ob(),r.Mb(13,"input",9),r.Pb(14,"div",6),r.qc(15,R,2,0,"span",7),r.Ob(),r.Ob(),r.Pb(16,"div",3),r.Pb(17,"label",8),r.sc(18,"Descripci\xf3n"),r.Ob(),r.Mb(19,"input",9),r.Pb(20,"div",6),r.qc(21,k,2,0,"span",7),r.Ob(),r.Ob(),r.Pb(22,"div",3),r.Pb(23,"label",8),r.sc(24,"Ocupaci\xf3n"),r.Ob(),r.Mb(25,"input",9),r.Pb(26,"div",6),r.qc(27,_,2,0,"span",7),r.Ob(),r.Ob(),r.Pb(28,"div",3),r.Pb(29,"label",8),r.sc(30,"Cargar foto"),r.Ob(),r.Pb(31,"input",10),r.Xb("change",(function(t){return e.loadAvatar(t)})),r.Ob(),r.Pb(32,"div",6),r.Pb(33,"span"),r.sc(34," Seleccione una foto. "),r.Ob(),r.Ob(),r.Ob(),r.qc(35,$,2,1,"div",11),r.Pb(36,"button",12),r.Xb("click",(function(){return e.create()})),r.sc(37,"Crear"),r.Ob(),r.Pb(38,"button",12),r.Xb("click",(function(){return e.clear()})),r.sc(39,"Limpiar"),r.Ob(),r.Ob(),r.Mb(40,"hr",13),r.qc(41,x,3,3,"pre",7),r.qc(42,U,2,1,"pre",7),r.Ob()),2&t&&(r.Ab(3),r.gc("formGroup",e.teamMemberForm),r.Ab(4),r.hc("formControlName",e.formConstants.NAME),r.hc("id",e.formConstants.NAME),r.gc("ngClass",r.ic(21,q,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.NAME,e.teamMemberForm))),r.Ab(2),r.gc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.NAME,e.teamMemberForm)),r.Ab(4),r.hc("formControlName",e.formConstants.ROLE),r.hc("id",e.formConstants.ROLE),r.gc("ngClass",r.ic(23,q,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.ROLE,e.teamMemberForm))),r.Ab(2),r.gc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.ROLE,e.teamMemberForm)),r.Ab(4),r.hc("formControlName",e.formConstants.DESCRIPTION),r.hc("id",e.formConstants.DESCRIPTION),r.gc("ngClass",r.ic(25,q,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.DESCRIPTION,e.teamMemberForm))),r.Ab(2),r.gc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.DESCRIPTION,e.teamMemberForm)),r.Ab(4),r.hc("formControlName",e.formConstants.OCCUPATION),r.hc("id",e.formConstants.OCCUPATION),r.gc("ngClass",r.ic(27,q,e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.OCCUPATION,e.teamMemberForm))),r.Ab(2),r.gc("ngIf",e.formS.isTouchedOrDirtyAndInvalid(e.formConstants.OCCUPATION,e.teamMemberForm)),r.Ab(4),r.gc("ngClass",r.ic(29,q,e.isPendingAvatar)),r.Ab(4),r.gc("ngIf",e.isDevMode),r.Ab(6),r.gc("ngIf",e.isDevMode),r.Ab(1),r.gc("ngIf",e.isDevMode))},directives:[a.m,a.j,a.f,a.a,a.i,a.d,s.j,s.l],pipes:[s.f],styles:[""]}),t})();n.d(e,"BackOfficeModule",(function(){return W}));const H=[s.c,a.k,a.g,o.d.forChild([{path:"",component:c,canActivate:[O],children:[{path:"",redirectTo:"new-team-member",pathMatch:"full"},{path:"new-pet",component:C,canActivate:[O]},{path:"pets",component:A,canActivate:[O]},{path:"pet-type",component:I,canActivate:[O]},{path:"new-team-member",component:j,canActivate:[O]},{path:"new-team-member/:teamMemberId",component:j,canActivate:[O]},{path:"manage-pets",component:T,canActivate:[O]},{path:"manage-team",component:F,canActivate:[O]}]},{path:"login",component:f}])],G=[O,E];let W=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[...G],imports:[[...H]]}),t})()}}]);