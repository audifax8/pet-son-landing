function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _createSuper(t){var n=_isNativeReflectConstruct();return function(){var e,r=_getPrototypeOf(t);if(n){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _slicedToArray(t,n){return _arrayWithHoles(t)||_iterableToArrayLimit(t,n)||_unsupportedIterableToArray(t,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function _iterableToArrayLimit(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{o6bk:function(t,n,e){"use strict";e.r(n),e.d(n,"BackOfficeModule",(function(){return st}));var r=e("ofXK"),o=e("tyNb"),a=e("3Pt+"),i=e("fXoL");function c(t,n){if(1&t&&(i.Pb(0,"div",5),i.Pb(1,"a",6),i.tc(2),i.Ob(),i.Ob()),2&t){var e=n.$implicit;i.yb(1),i.fc("routerLink",e.fragment),i.yb(1),i.uc(e.title)}}var s,l=((s=function(){function t(){_classCallCheck(this,t),this.links=[{title:"Administrar equipo",fragment:"manage-team"}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=i.Db({type:s,selectors:[["app-back-office"]],decls:7,vars:1,consts:[[1,"wrapper","m-2"],[1,"list-group"],[1,"list-group-item","active"],["class","active",4,"ngFor","ngForOf"],[1,"container"],[1,"active"],["data-toggle","collapse","aria-expanded","false",1,"list-group-item",3,"routerLink"]],template:function(t,n){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.Pb(2,"span",2),i.tc(3,"Acciones"),i.Ob(),i.rc(4,c,3,2,"div",3),i.Ob(),i.Pb(5,"div",4),i.Kb(6,"router-outlet"),i.Ob(),i.Ob()),2&t&&(i.yb(4),i.fc("ngForOf",n.links))},directives:[r.k,o.f,o.d],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;width:100%;align-items:stretch}"]}),s),u=e("mrSG"),m=function(){function t(n,e,r){_classCallCheck(this,t),this.formGroupIntance=n,this.controlName=e,this.inputValue=r}return _createClass(t,[{key:"execute",value:function(){var t=this.formGroupIntance.get(this.controlName);t&&t.setValue(this.inputValue)}}]),t}(),b=function(t){return t.DEFAULT="DEFAULT",t.EDIT="EDIT",t.DEFINITIVE="DEFINITIVE",t.MARK_AS_DIRTY_AND_TOUCHED="MARK_AS_DIRTY_AND_TOUCHED",t.RESET="RESET",t}({}),f=function(){function t(n,e,r){_classCallCheck(this,t),this.formGroupIntance=n,this.controlName=e,this.validationRules=r}return _createClass(t,[{key:"execute",value:function(){var t=this.formGroupIntance.get(this.controlName);t&&(this.validationRules?t.setValidators(this.validationRules):t.clearValidators())}}]),t}(),d=e("ZF+8");function p(t,n){if(1&t&&(i.Pb(0,"pre",18),i.tc(1),i.bc(2,"async"),i.Ob()),2&t){var e=i.ac();i.yb(1),i.uc(i.cc(2,1,e.error$))}}function h(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese el nombre de usuario o email. "),i.Ob())}function g(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese la contrase\xf1a. "),i.Ob())}function O(t,n){if(1&t&&(i.Pb(0,"pre"),i.tc(1),i.bc(2,"json"),i.Ob()),2&t){var e=i.ac();i.yb(1),i.uc(i.cc(2,1,e.loginForm.value))}}var C,y,v,P,_=function(t){return{"is-invalid":t}},S=((C=function(){function t(n,e,r,o,a){_classCallCheck(this,t),this.commandS=n,this.formS=e,this.router=r,this.userS=o,this.externalLibsS=a,this.loginConstants={USER_NAME:"USER_NAME",PASSWORD:"PASSWORD"},this.regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,this.isDevMode=this.externalLibsS.isDevMode}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loadForm(),this.user$=this.userS.user$,this.subscription=this.user$.subscribe((function(){return t.router.navigate(["back-office"])})),this.error$=this.userS.errorMessage$}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"loadForm",value:function(){this.loginForm=this.getFormInstance(),this.commandS.addCommand(new f(this.loginForm,this.loginConstants.USER_NAME,[a.l.required])),this.commandS.addCommand(new f(this.loginForm,this.loginConstants.PASSWORD,[a.l.required,a.l.pattern(this.regexPassword)])),this.isDevMode&&(this.commandS.addCommand(new m(this.loginForm,this.loginConstants.USER_NAME,"amarele91@hotmail.com")),this.commandS.addCommand(new m(this.loginForm,this.loginConstants.PASSWORD,"Grymmjow8@"))),this.commandS.executeCommands()}},{key:"getFormInstance",value:function(){var t=new a.e({}),n=new a.c,e=new a.c;return t.addControl(this.loginConstants.USER_NAME,n),t.addControl(this.loginConstants.PASSWORD,e),t}},{key:"login",value:function(){var t=this.formS.getInputValue(this.loginConstants.USER_NAME,this.loginForm),n=this.formS.getInputValue(this.loginConstants.PASSWORD,this.loginForm);t&&n?this.userS.login(t,n):this.formS.markAsTouchedAndMarkAsDirty(this.loginForm)}},{key:"socialLogin",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=t,n.next="GOOGLE"===n.t0?3:6;break;case 3:return n.next=5,this.userS.GoogleAuth();case 5:this.router.navigate(["back-office/pets"]);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"clearForm",value:function(){this.formS.reset(this.loginForm)}},{key:"logout",value:function(){this.userS.logout()}}]),t}()).\u0275fac=function(t){return new(t||C)(i.Jb(d.a),i.Jb(d.d),i.Jb(o.c),i.Jb(d.e),i.Jb(d.c))},C.\u0275cmp=i.Db({type:C,selectors:[["app-login"]],decls:27,vars:13,consts:[[1,"row"],[1,"col-lg-10","col-xl-9","mx-auto"],["class","text-center",4,"ngIf"],[1,"card","card-signin","flex-row","my-5"],[1,"card-img-left","d-none","d-md-flex"],[1,"card-body"],[1,"card-title","text-center","text-primary"],[3,"formGroup"],[1,"form-group"],["id","userNameEmail","aria-describedby","emailHelp","placeholder","usuario o email",1,"form-control",3,"formControlName","ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["id","password","type","password","aria-describedby","password","placeholder","contrase\xf1a",1,"form-control",3,"formControlName","ngClass"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"click"],[1,"btn","btn-lg","btn-warning","btn-block",3,"click"],[1,"my-4"],[1,"btn","btn-lg","btn-google","btn-block",3,"click"],[1,"fab","fa-google","mr-2"],[1,"text-center"]],template:function(t,n){1&t&&(i.Pb(0,"div",0),i.Pb(1,"div",1),i.rc(2,p,3,3,"pre",2),i.Pb(3,"div",3),i.Kb(4,"div",4),i.Pb(5,"div",5),i.Pb(6,"h5",6),i.tc(7,"Iniciar Sesi\xf3n"),i.Ob(),i.Pb(8,"form",7),i.Pb(9,"div",8),i.Kb(10,"input",9),i.Pb(11,"div",10),i.rc(12,h,2,0,"span",11),i.Ob(),i.Ob(),i.Pb(13,"div",8),i.Kb(14,"input",12),i.Pb(15,"div",10),i.rc(16,g,2,0,"span",11),i.Ob(),i.Ob(),i.Kb(17,"hr"),i.Pb(18,"button",13),i.Wb("click",(function(){return n.login()})),i.tc(19,"Ingresar"),i.Ob(),i.Pb(20,"button",14),i.Wb("click",(function(){return n.clearForm()})),i.tc(21,"Limpiar Formulario"),i.Ob(),i.Kb(22,"hr",15),i.Pb(23,"button",16),i.Wb("click",(function(){return n.socialLogin("GOOGLE")})),i.Kb(24,"i",17),i.tc(25," Ingresar con cuenta de Google "),i.Ob(),i.Ob(),i.rc(26,O,3,3,"pre",11),i.Ob(),i.Ob(),i.Ob(),i.Ob()),2&t&&(i.yb(2),i.fc("ngIf",n.isDevMode),i.yb(6),i.fc("formGroup",n.loginForm),i.yb(2),i.gc("formControlName",n.loginConstants.USER_NAME),i.fc("ngClass",i.hc(9,_,n.formS.isTouchedOrDirtyAndInvalid(n.loginConstants.USER_NAME,n.loginForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.loginConstants.USER_NAME,n.loginForm)),i.yb(2),i.gc("formControlName",n.loginConstants.PASSWORD),i.fc("ngClass",i.hc(11,_,n.formS.isTouchedOrDirtyAndInvalid(n.loginConstants.PASSWORD,n.loginForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.loginConstants.PASSWORD,n.loginForm)),i.yb(10),i.fc("ngIf",n.isDevMode))},directives:[r.l,a.m,a.j,a.f,a.a,a.i,a.d,r.j],pipes:[r.b,r.f],styles:["[_ngcontent-%COMP%]:root{--input-padding-x:1.5rem;--input-padding-y:.75rem}body[_ngcontent-%COMP%]{background:#007bff;background:linear-gradient(90deg,#0062e6,#33aeff)}.card-signin[_ngcontent-%COMP%]{border:0;border-radius:1rem;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1);overflow:hidden}.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin[_ngcontent-%COMP%]   .card-img-left[_ngcontent-%COMP%]{width:45%;background:scroll 50% url(Azul.c13a2a644230511ca8dc.png);background-size:cover}.card-signin[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:2rem}.form-signin[_ngcontent-%COMP%]{width:100%}.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:all .2s}.form-label-group[_ngcontent-%COMP%]{position:relative;margin-bottom:1rem}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:auto;border-radius:2rem}.form-label-group[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{padding:var(--input-padding-y) var(--input-padding-x)}.form-label-group[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:-moz-placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:12px;color:#777}.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ label[_ngcontent-%COMP%]{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:12px;color:#777}.btn-google[_ngcontent-%COMP%]{color:#fff;background-color:#ea4335}.btn-facebook[_ngcontent-%COMP%]{color:#fff;background-color:#3b5998}"]}),C),I=e("lJxs"),A=((P=function(){function t(n,e){_classCallCheck(this,t),this.router=n,this.userS=e}return _createClass(t,[{key:"canActivate",value:function(t,n){var e=this;return this.userS.user$.pipe(Object(I.a)((function(t){return!!t||(e.router.navigate(["back-office/login"]),!1)})))}}]),t}()).\u0275fac=function(t){return new(t||P)(i.Tb(o.c),i.Tb(d.e))},P.\u0275prov=i.Fb({token:P,factory:P.\u0275fac}),P),M=((v=function(){function t(n,e){_classCallCheck(this,t),this.commandS=n,this.formS=e,this.loginConstants={USER_NAME:"name",PASSWORD:"PASSWORD"}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getFormInstance",value:function(){var t=new a.e({}),n=new a.c,e=new a.c;return t.addControl(this.loginConstants.USER_NAME,n),t.addControl(this.loginConstants.PASSWORD,e),t}}]),t}()).\u0275fac=function(t){return new(t||v)(i.Jb(d.a),i.Jb(d.d))},v.\u0275cmp=i.Db({type:v,selectors:[["app-new-pet"]],decls:2,vars:0,template:function(t,n){1&t&&(i.Pb(0,"p"),i.tc(1,"new-pet works!"),i.Ob())},styles:[""]}),v),k=((y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=i.Db({type:y,selectors:[["app-pets"]],decls:2,vars:0,template:function(t,n){1&t&&(i.Pb(0,"p"),i.tc(1,"pets works!"),i.Ob())},styles:[""]}),y),w=e("S/Aq");function D(t,n){if(1&t&&(i.Pb(0,"li",1),i.tc(1),i.Ob()),2&t){var e=n.$implicit;i.yb(1),i.vc(" ",e.name,"\n")}}var E,T,R=((E=function(){function t(n,e,r){_classCallCheck(this,t),this.commandS=n,this.formS=e,this.afs=r,this.petTypeConstants={NAME:"NAME"}}return _createClass(t,[{key:"ngOnInit",value:function(){this.petTypeForm=this.getFormInstance(),this.getPetTypes(),this.items$=this.afs.collection("petType").valueChanges(),this.petTypes$=this.afs.collection("petType").valueChanges()}},{key:"getFormInstance",value:function(){var t=new a.e({}),n=new a.c;return t.addControl(this.petTypeConstants.NAME,n),t}},{key:"getPetTypes",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))}}]),t}()).\u0275fac=function(t){return new(t||E)(i.Jb(d.a),i.Jb(d.d),i.Jb(w.a))},E.\u0275cmp=i.Db({type:E,selectors:[["app-pet-type"]],decls:8,vars:8,consts:[["class","text",4,"ngFor","ngForOf"],[1,"text"]],template:function(t,n){1&t&&(i.Pb(0,"p"),i.tc(1,"pet-type works!"),i.Ob(),i.Pb(2,"pre"),i.tc(3),i.bc(4,"json"),i.bc(5,"async"),i.Ob(),i.rc(6,D,2,1,"li",0),i.bc(7,"async")),2&t&&(i.yb(3),i.vc(" ",i.cc(4,2,i.cc(5,4,n.petTypes$)),""),i.yb(3),i.fc("ngForOf",i.cc(7,6,n.items$)))},directives:[r.k],pipes:[r.f,r.b],styles:[""]}),E),F=e("2Vo4"),N=e("itXk"),x=e("eIep"),$=e("AytR"),L=e("tk/3"),j=((T=function t(n){var e=this;_classCallCheck(this,t),this.http=n,this.pageBS=new F.a(1),this.page$=this.pageBS.asObservable(),this.limitBS=new F.a(50),this.limit$=this.limitBS.asObservable(),this.backResponse$=Object(N.a)([this.page$,this.limit$]).pipe(Object(x.a)((function(t){var n=_slicedToArray(t,2),r=n[0],o=n[1];return e.http.get("".concat($.a.api_url,"team-member/?page=").concat(r,"&limit=").concat(o))}))),this.teamMembers$=Object(N.a)([this.backResponse$]).pipe(Object(I.a)((function(t){return _slicedToArray(t,1)[0].data}))),this.totalItems$=Object(N.a)([this.backResponse$]).pipe(Object(I.a)((function(t){return _slicedToArray(t,1)[0].totalItems})))}).\u0275fac=function(t){return new(t||T)(i.Tb(L.b))},T.\u0275prov=i.Fb({token:T,factory:T.\u0275fac}),T);function U(t,n){if(1&t){var e=i.Qb();i.Pb(0,"tr"),i.Pb(1,"th",4),i.tc(2),i.Ob(),i.Pb(3,"td"),i.tc(4),i.Ob(),i.Pb(5,"td"),i.tc(6),i.Ob(),i.Pb(7,"td"),i.tc(8),i.Ob(),i.Pb(9,"td"),i.Pb(10,"button",5),i.Wb("click",(function(){i.nc(e);var t=n.$implicit;return i.ac().edit(t.firebaseId)})),i.tc(11," Editar "),i.Ob(),i.Ob(),i.Pb(12,"td"),i.Pb(13,"button",6),i.Wb("click",(function(){i.nc(e);var t=n.$implicit;return i.ac().delete(t.firebaseId)})),i.tc(14," Eliminar "),i.Ob(),i.Ob(),i.Ob()}if(2&t){var r=n.$implicit,o=n.index;i.yb(2),i.uc(o+1),i.yb(2),i.uc(r.name),i.yb(2),i.uc(r.occupation),i.yb(2),i.uc(r.role)}}function J(t,n){if(1&t&&(i.Pb(0,"pre"),i.tc(1),i.bc(2,"json"),i.bc(3,"async"),i.Ob()),2&t){var e=i.ac();i.yb(1),i.vc(" ",i.cc(2,1,i.cc(3,3,e.teamMembers$))," ")}}var W,K,G,z=((K=function(){function t(n,e,r){_classCallCheck(this,t),this.router=n,this.mtS=e,this.externalLibsS=r,this.isDevMode=this.externalLibsS.isDevMode,this.teamMembers$=this.mtS.teamMembers$,this.totalItems$=this.mtS.totalItems$}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"edit",value:function(t){this.router.navigate(["back-office/new-team-member/"+t])}},{key:"delete",value:function(t){}}]),t}()).\u0275fac=function(t){return new(t||K)(i.Jb(o.c),i.Jb(j),i.Jb(d.c))},K.\u0275cmp=i.Db({type:K,selectors:[["app-manage-team"]],decls:19,vars:4,consts:[[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],["scope","row"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,n){1&t&&(i.Pb(0,"table",0),i.Pb(1,"thead"),i.Pb(2,"tr"),i.Pb(3,"th",1),i.tc(4,"#"),i.Ob(),i.Pb(5,"th",1),i.tc(6,"Nombre"),i.Ob(),i.Pb(7,"th",1),i.tc(8,"Ocupaci\xf3n"),i.Ob(),i.Pb(9,"th",1),i.tc(10,"Rol"),i.Ob(),i.Pb(11,"th",1),i.tc(12,"Editar"),i.Ob(),i.Pb(13,"th",1),i.tc(14,"Eliminar"),i.Ob(),i.Ob(),i.Ob(),i.Pb(15,"tbody"),i.rc(16,U,15,4,"tr",2),i.bc(17,"async"),i.Ob(),i.Ob(),i.rc(18,J,4,5,"pre",3)),2&t&&(i.yb(16),i.fc("ngForOf",i.cc(17,2,n.teamMembers$)),i.yb(2),i.fc("ngIf",n.isDevMode))},directives:[r.k,r.l],pipes:[r.b,r.f],styles:[""]}),K),H=((W=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=i.Db({type:W,selectors:[["app-manage-pets"]],decls:2,vars:0,template:function(t,n){1&t&&(i.Pb(0,"p"),i.tc(1,"manage-pets works!"),i.Ob())},styles:[""]}),W),q=e("7Cbv"),B=((G=function(t){_inherits(e,t);var n=_createSuper(e);function e(){return _classCallCheck(this,e),n.call(this)}return _createClass(e,[{key:"getId",value:function(){return this.id}},{key:"getFormInstance",value:function(){var t=new a.e({}),n=new a.c,r=new a.c,o=new a.c,i=new a.c,c=new a.c;return t.addControl(e.formConstants.ID,n),t.addControl(e.formConstants.NAME,r),t.addControl(e.formConstants.ROLE,o),t.addControl(e.formConstants.DESCRIPTION,i),t.addControl(e.formConstants.OCCUPATION,c),t}},{key:"mapFormToTeamMember",value:function(t,n){return Object.assign(Object.assign({creationDate:this.creationDate},t.value),{avatar:n})}}]),e}(function(){return function t(){_classCallCheck(this,t),this.id=Object(q.a)(),this.creationDate=(new Date).toJSON()}}())).FILE_STORE_PATH="pet-son/team-members/",G.COLLECTION_PATH="team-member/",G.formConstants={ID:"id",NAME:"name",ROLE:"role",DESCRIPTION:"description",OCCUPATION:"occupation"},G);function V(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese un nombre de usuario. "),i.Ob())}function Y(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese el rol en la fundaci\xf3n. "),i.Ob())}function X(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese una descrici\xf3n. "),i.Ob())}function Z(t,n){1&t&&(i.Pb(0,"span"),i.tc(1," Ingrese la ocupaci\xf3n. "),i.Ob())}function Q(t,n){if(1&t&&(i.Pb(0,"div",3),i.Kb(1,"img",14),i.Ob()),2&t){var e=i.ac();i.yb(1),i.fc("src",e.avatarFullPath,i.oc)}}function tt(t,n){if(1&t&&(i.Pb(0,"pre"),i.tc(1),i.bc(2,"json"),i.Ob()),2&t){var e=i.ac();i.yb(1),i.uc(i.cc(2,1,e.teamMemberForm.value))}}function nt(t,n){if(1&t&&(i.Pb(0,"pre"),i.tc(1),i.Ob()),2&t){var e=i.ac();i.yb(1),i.uc(e.teamMemberForm.errors)}}var et,rt,ot=function(t){return{"is-invalid":t}},at=((et=function(){function t(n,e,r,o,a){_classCallCheck(this,t),this.rote=n,this.roter=e,this.commandS=r,this.formS=o,this.externalLibsS=a,this.formConstants=B.formConstants,this.isPendingAvatar=!1,this.isDevMode=this.externalLibsS.isDevMode,this.teamMember=new B}return _createClass(t,[{key:"ngOnInit",value:function(){this.teamMemberForm=this.teamMember.getFormInstance(),this.rote.snapshot.paramMap.get("teamMemberId")||this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}},{key:"loadFormByState",value:function(t,n,e,r){switch(t){case b.DEFAULT:this.commandS.addCommand(new f(n,this.formConstants.ID,[a.l.required])),this.commandS.addCommand(new f(n,this.formConstants.NAME,[a.l.required])),this.commandS.addCommand(new f(n,this.formConstants.ROLE,[a.l.required])),this.commandS.addCommand(new f(n,this.formConstants.DESCRIPTION,[a.l.required])),this.commandS.addCommand(new f(n,this.formConstants.OCCUPATION,[a.l.required])),this.commandS.addCommand(new m(n,this.formConstants.ID,e));break;case b.EDIT:this.commandS.addCommand(new m(n,this.formConstants.ID,e)),this.commandS.addCommand(new m(n,this.formConstants.NAME,r.name)),this.commandS.addCommand(new m(n,this.formConstants.ROLE,r.role)),this.commandS.addCommand(new m(n,this.formConstants.DESCRIPTION,r.description)),this.commandS.addCommand(new m(n,this.formConstants.OCCUPATION,r.occupation));break;case b.MARK_AS_DIRTY_AND_TOUCHED:this.formS.markAsTouchedAndMarkAsDirty(n),this.avatar||(this.isPendingAvatar=!0);break;case b.RESET:this.formS.reset(n)}this.commandS.executeCommands()}},{key:"create",value:function(){!this.teamMemberForm.invalid&&this.avatar?this.save():this.loadFormByState(b.MARK_AS_DIRTY_AND_TOUCHED,this.teamMemberForm)}},{key:"clear",value:function(){this.isPendingAvatar=!1,this.avatar=null,this.avatarFullPath=null,this.teamMember=new B,this.loadFormByState(b.RESET,this.teamMemberForm),this.loadFormByState(b.DEFAULT,this.teamMemberForm,this.teamMember.getId())}},{key:"loadAvatar",value:function(t){this.avatar=t.target.files[0],this.isPendingAvatar=!1}},{key:"save",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||et)(i.Jb(o.a),i.Jb(o.c),i.Jb(d.a),i.Jb(d.d),i.Jb(d.c))},et.\u0275cmp=i.Db({type:et,selectors:[["app-new-team-member"]],decls:43,vars:31,consts:[[1,"jumbotron","t-20"],[1,"display-16"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["aria-describedby","nameHelp",1,"form-control",3,"formControlName","id","ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["for","exampleInputPassword1"],["aria-describedby","roleHelp",1,"form-control",3,"formControlName","id","ngClass"],["type","file","id","avatar",1,"form-control",3,"ngClass","change"],["class","form-group",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"my-4"],[3,"src"]],template:function(t,n){1&t&&(i.Pb(0,"div",0),i.Pb(1,"h3",1),i.tc(2,"Crear miembro equipo"),i.Ob(),i.Pb(3,"form",2),i.Pb(4,"div",3),i.Pb(5,"label",4),i.tc(6,"Nombre"),i.Ob(),i.Kb(7,"input",5),i.Pb(8,"div",6),i.rc(9,V,2,0,"span",7),i.Ob(),i.Ob(),i.Pb(10,"div",3),i.Pb(11,"label",8),i.tc(12,"Rol en la fundaci\xf3n"),i.Ob(),i.Kb(13,"input",9),i.Pb(14,"div",6),i.rc(15,Y,2,0,"span",7),i.Ob(),i.Ob(),i.Pb(16,"div",3),i.Pb(17,"label",8),i.tc(18,"Descripci\xf3n"),i.Ob(),i.Kb(19,"input",9),i.Pb(20,"div",6),i.rc(21,X,2,0,"span",7),i.Ob(),i.Ob(),i.Pb(22,"div",3),i.Pb(23,"label",8),i.tc(24,"Ocupaci\xf3n"),i.Ob(),i.Kb(25,"input",9),i.Pb(26,"div",6),i.rc(27,Z,2,0,"span",7),i.Ob(),i.Ob(),i.Pb(28,"div",3),i.Pb(29,"label",8),i.tc(30,"Cargar foto"),i.Ob(),i.Pb(31,"input",10),i.Wb("change",(function(t){return n.loadAvatar(t)})),i.Ob(),i.Pb(32,"div",6),i.Pb(33,"span"),i.tc(34," Seleccione una foto. "),i.Ob(),i.Ob(),i.Ob(),i.rc(35,Q,2,1,"div",11),i.Pb(36,"button",12),i.Wb("click",(function(){return n.create()})),i.tc(37,"Crear"),i.Ob(),i.Pb(38,"button",12),i.Wb("click",(function(){return n.clear()})),i.tc(39,"Limpiar"),i.Ob(),i.Ob(),i.Kb(40,"hr",13),i.rc(41,tt,3,3,"pre",7),i.rc(42,nt,2,1,"pre",7),i.Ob()),2&t&&(i.yb(3),i.fc("formGroup",n.teamMemberForm),i.yb(4),i.gc("formControlName",n.formConstants.NAME),i.gc("id",n.formConstants.NAME),i.fc("ngClass",i.hc(21,ot,n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.NAME,n.teamMemberForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.NAME,n.teamMemberForm)),i.yb(4),i.gc("formControlName",n.formConstants.ROLE),i.gc("id",n.formConstants.ROLE),i.fc("ngClass",i.hc(23,ot,n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.ROLE,n.teamMemberForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.ROLE,n.teamMemberForm)),i.yb(4),i.gc("formControlName",n.formConstants.DESCRIPTION),i.gc("id",n.formConstants.DESCRIPTION),i.fc("ngClass",i.hc(25,ot,n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.DESCRIPTION,n.teamMemberForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.DESCRIPTION,n.teamMemberForm)),i.yb(4),i.gc("formControlName",n.formConstants.OCCUPATION),i.gc("id",n.formConstants.OCCUPATION),i.fc("ngClass",i.hc(27,ot,n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.OCCUPATION,n.teamMemberForm))),i.yb(2),i.fc("ngIf",n.formS.isTouchedOrDirtyAndInvalid(n.formConstants.OCCUPATION,n.teamMemberForm)),i.yb(4),i.fc("ngClass",i.hc(29,ot,n.isPendingAvatar)),i.yb(4),i.fc("ngIf",n.isDevMode),i.yb(6),i.fc("ngIf",n.isDevMode),i.yb(1),i.fc("ngIf",n.isDevMode))},directives:[a.m,a.j,a.f,a.a,a.i,a.d,r.j,r.l],pipes:[r.f],styles:[""]}),et),it=[r.c,a.k,a.g,o.e.forChild([{path:"",component:l,canActivate:[A],children:[{path:"",redirectTo:"manage-team",pathMatch:"full"},{path:"new-pet",component:M,canActivate:[A]},{path:"pets",component:k,canActivate:[A]},{path:"pet-type",component:R,canActivate:[A]},{path:"new-team-member",component:at,canActivate:[A]},{path:"new-team-member/:teamMemberId",component:at,canActivate:[A]},{path:"manage-pets",component:H,canActivate:[A]},{path:"manage-team",component:z,canActivate:[A]}]},{path:"login",component:S}])],ct=[A,j],st=((rt=function t(){_classCallCheck(this,t)}).\u0275mod=i.Hb({type:rt}),rt.\u0275inj=i.Gb({factory:function(t){return new(t||rt)},providers:[].concat(ct),imports:[[].concat(it)]}),rt)}}]);