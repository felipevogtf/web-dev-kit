import"./chunk-FFSF6J74.js";import"./chunk-5CQYSX7V.js";import{a as j}from"./chunk-MFBDSYPO.js";import"./chunk-IUVOC6MI.js";import"./chunk-YLAGGKEJ.js";import{c as W,e as A,g as B}from"./chunk-VRQ656LY.js";import{a as N}from"./chunk-I4GIYI3M.js";import"./chunk-MSJIMFUE.js";import{c as H,d as f,f as m,h as _,i as C,j as x}from"./chunk-W7AFIDCE.js";import{h as z}from"./chunk-EQOIL2DI.js";import{Cb as s,Db as g,Fb as S,Gb as T,Hb as E,Jb as F,Ta as a,Ua as M,ga as y,hc as L,ib as c,lc as D,mb as w,nb as P,ob as O,pa as b,pb as n,qa as v,qb as o,rb as u,sb as k,tb as h,ub as I}from"./chunk-RTIVNVYJ.js";function K(l,i){if(l&1){let d=k();n(0,"article",10),h("click",function(){let t=b(d).$implicit,e=I();return v(e.navigate(t.link))}),n(1,"div",11),u(2,"i",12),o(),n(3,"div")(4,"h3",13),s(5),o(),n(6,"p",14),s(7),o()()()}if(l&2){let d=i.$implicit;a(2),c("ngClass",d.icon),a(3),g(d.title),a(2),g(d.description)}}var V=(()=>{let i=class i{constructor(r){this.router=r,this.search="",this.filterItems=[],this.submenus=[],this.submenus=N.reduce((t,e)=>(e.childs&&t.push(...e.childs),t),[]),console.log(this.submenus)}ngOnInit(){setTimeout(()=>{this.filterItems=this.submenus},100)}filter(){let r=this.submenus.filter(e=>e.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())||e.description?.toLowerCase().includes(this.search.toLowerCase()));this.filterItems=r;let t=this.filterItems.length}navigate(r){this.router.navigate([r])}test(){console.log("test")}};i.\u0275fac=function(t){return new(t||i)(M(z))},i.\u0275cmp=y({type:i,selectors:[["app-home"]],standalone:!0,features:[F],decls:14,vars:4,consts:[[1,"home-header"],[1,"home-header__title"],[1,"home-header__description"],[1,"home-content"],[1,"home-content__title"],[1,"home-content__input"],[3,"ngModelChange","id","placeholder","ngModel"],["slot","end",1,"fa-solid","fa-magnifying-glass"],[1,"home-content__tools"],[1,"tool-card"],[1,"tool-card",3,"click"],[1,"tool-card__icon"],[3,"ngClass"],[1,"tool-card__title"],[1,"tool-card__description"]],template:function(t,e){t&1&&(n(0,"header",0)(1,"h1",1),s(2,"Web Dev Kits"),o(),n(3,"p",2),s(4," Web Dev Kits es tu aliado principal en el desarrollo web. Ponemos a tu disposici\xF3n una amplia gama de herramientas esenciales, desde generadores de hashes hasta codificadores/decodificadores y m\xE1s. Simplifica tu proceso de codificaci\xF3n de datos y mejora tu eficiencia en el desarrollo web con nuestras herramientas vers\xE1tiles y precisas. "),o()(),n(5,"section",3)(6,"h2",4),s(7,"Todas las herramientas"),o(),n(8,"div",5)(9,"wdk-input",6),E("ngModelChange",function(p){return T(e.search,p)||(e.search=p),p}),h("ngModelChange",function(){return e.filter()}),u(10,"i",7),o()(),n(11,"article",8),P(12,K,8,3,"article",9,w),o()()),t&2&&(a(9),c("id","search")("placeholder",""),S("ngModel",e.search),a(2),c("@filterAnimation",e.filterItems.length),a(),O(e.filterItems))},dependencies:[D,L,B,W,A,j],styles:[".home-header__description[_ngcontent-%COMP%]{color:var(--text-primary-light);text-wrap:pretty;line-height:1.5}.home-content[_ngcontent-%COMP%]{margin-top:50px}.home-content__input[_ngcontent-%COMP%]{margin:20px 0}.home-content[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row;align-items:center}.home-content[_ngcontent-%COMP%]   .input-container__icon[_ngcontent-%COMP%]{color:var(--text-primary);position:absolute;right:0;display:flex;justify-content:center;align-items:center;margin:5px;height:50px;width:50px}.home-content[_ngcontent-%COMP%]   .input-container__input[_ngcontent-%COMP%]{padding:10px 55px 10px 10px}.home-content__tools[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(200px,100%),1fr));gap:10px}.tool-card[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;row-gap:20px;background-color:var(--bg-secondary);border-radius:var(--base-radius);border:1px solid var(--border-primary);padding:20px;color:var(--text-primary);text-align:center;text-wrap:pretty;transition:transform .1s ease-in,background-color .1s ease-in,border .1s ease-in}.tool-card__icon[_ngcontent-%COMP%]{font-size:40px}.tool-card__title[_ngcontent-%COMP%]{margin:0}.tool-card__description[_ngcontent-%COMP%]{margin:5px;font-size:.9em;line-height:1.2;color:var(--text-primary-light)}.tool-card[_ngcontent-%COMP%]:hover{cursor:pointer;border-color:var(--border-primary-focus);background-color:var(--bg-secondary-light)}.tool-card[_ngcontent-%COMP%]:active{transform:scale(.95)}"],data:{animation:[H("filterAnimation",[_(":increment",[C(":enter",[m({opacity:0,transform:"translateY(20px)"}),x(10,[f("200ms ease-out",m({opacity:1,transform:"translateY(0)"}))])],{optional:!0})]),_(":decrement",[C(":leave",[x(10,[f("200ms ease-out",m({opacity:0,transform:"translateY(20px)"}))])])])])]}});let l=i;return l})();var _e=[{path:"",component:V}];export{_e as homeRoutes};