(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{o6bk:function(t,n,e){"use strict";e.r(n);var r=e("ofXK"),o=e("tyNb"),c=e("fXoL");let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-back-ofice"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Rb(0,"p"),c.Cc(1,"back-ofice works!"),c.Qb())},styles:[""]}),t})(),i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["app-login"]],decls:2,vars:0,template:function(t,n){1&t&&(c.Rb(0,"p"),c.Cc(1,"login works!"),c.Qb())},styles:[""]}),t})(),u=(()=>{class t{constructor(){this.userLogged=!1}isUserLogged(){return this.userLogged}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac}),t})(),a=(()=>{class t{constructor(t,n){this.router=t,this.user=n}canActivate(t,n){return!!this.user.isUserLogged()||(console.log(this.router),this.router.navigate(["back-office/login"]),!1)}}return t.\u0275fac=function(n){return new(n||t)(c.Zb(o.b),c.Zb(u))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac}),t})();e.d(n,"BackOfficeModule",(function(){return l}));const f=[r.b,o.d.forChild([{path:"",component:s,canActivate:[a]},{path:"login",component:i}])],p=[a,u];let l=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},providers:[...p],imports:[[...f]]}),t})()}}]);