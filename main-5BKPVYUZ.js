import{b as A,c as M,e as y,f as F,g as b}from"./chunk-N2KWI3KA.js";import{b as re}from"./chunk-TIUIOPJX.js";import{a as X,b as Y,d as G,e as Q,f as ee,g as te,h as ne,i as ie,j as oe}from"./chunk-SM4CZLVT.js";import{$ as g,$a as U,Ka as $,La as j,Mb as J,Na as l,Oa as x,S as N,Sa as V,Tb as K,Wb as v,Xa as p,Za as k,ab as w,bb as W,cb as P,da as I,db as O,ea as L,eb as a,fb as s,gb as c,hb as Z,ja as z,ka as D,kb as _,lb as h,ob as u,pb as T,qb as q,ta as H,ub as f,va as B,vb as R}from"./chunk-AF3MTKOE.js";var ge="@",S=class{constructor(e,t,n,o,r){this.doc=e,this.delegate=t,this.zone=n,this.animationType=o,this.moduleImpl=r,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-XBOPVOMR.js")).catch(t=>{throw new N(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:n})=>{let o=t(this.animationType,this.doc),r=new n(this.delegate,o,this.zone);return this.delegate=r,r})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let o=new E(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let d=r.createRenderer(e,t);o.use(d)}).catch(r=>{o.use(n)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,o){this.delegate.insertBefore(e,t,n,o)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,o){this.delegate.setAttribute(e,t,n,o)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,o){this.delegate.setStyle(e,t,n,o)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ge)}};function ae(i="animations"){return z([{provide:$,useFactory:(e,t,n)=>new S(e,t,n,i),deps:[J,X,V]},{provide:H,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var le=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["app-not-found"]],standalone:!0,features:[f],decls:2,vars:0,template:function(o,r){o&1&&(a(0,"p"),u(1,"not-found works!"),s())},dependencies:[v]});let i=e;return i})();var de=[{path:"",loadChildren:()=>import("./chunk-PFSNWFYA.js").then(i=>i.HomeModule)},{path:"encoding",loadChildren:()=>import("./chunk-5C3ZFZDV.js").then(i=>i.EncodingModule)},{path:"hashing",loadChildren:()=>import("./chunk-DMXJ7Y2F.js").then(i=>i.HashingModule)},{path:"code",loadChildren:()=>import("./chunk-ICUVLJ7G.js").then(i=>i.CodeModule)},{path:"**",component:le}];var ce={providers:[ie(de),D(re.forRoot()),ae()]};var _e=(i,e)=>e.id;function he(i,e){if(i&1){let t=Z();a(0,"div",9),_("click",function(){I(t);let o=h().$implicit,r=h();return L(r.toggleLink(o))}),c(1,"i",10),a(2,"span"),u(3),s(),c(4,"i",11),s()}if(i&2){let t=h().$implicit;l(1),p("ngClass",t.icon),l(2),T(t.title),l(1),k("nav__dropdown--rotate",t.toggle)}}var me=()=>({exact:!0});function fe(i,e){if(i&1&&(a(0,"div",12),c(1,"i",10),a(2,"span"),u(3),s()()),i&2){let t=h().$implicit;p("routerLinkActiveOptions",R(4,me))("routerLink",t.link),l(1),p("ngClass",t.icon),l(2),T(t.title)}}function ve(i,e){if(i&1&&(a(0,"li",12),c(1,"i",10),u(2),s()),i&2){let t=e.$implicit;p("routerLinkActiveOptions",R(4,me))("routerLink",t.link),l(1),p("ngClass",t.icon),l(1),q("",t.title," ")}}function ye(i,e){if(i&1&&(a(0,"ul",13),P(1,ve,3,5,"li",14,W),s()),i&2){let t=h().$implicit;p("@myInsertRemoveTrigger",void 0),O(1,t.childs)}}function Ce(i,e){if(i&1&&(a(0,"li",6),U(1,he,5,4,"div",7)(2,fe,4,5)(3,ye,3,1,"ul",8),s()),i&2){let t=e.$implicit;l(1),w(1,t.childs?1:2),l(2),w(3,t.childs&&t.toggle?3:-1)}}var pe=(()=>{let e=class e{constructor(n){this.router=n,this.isToggle=!1,this.menus=[{id:1,icon:"fa-solid fa-home",title:"Inicio",link:"/"},{id:2,icon:"fa-solid fa-arrow-right-arrow-left",title:"Encodode / Decode",toggle:!1,childs:[{icon:"fa-solid fa-arrow-right-arrow-left",title:"Base 64",link:"/encoding/base64"},{icon:"fa-solid fa-link",title:"URL",link:"/encoding/url"}]},{id:3,icon:"fa-solid fa-lock",title:"Hashing",toggle:!1,childs:[{icon:"fa-solid fa-fingerprint",title:"Hash",link:"/hashing"},{icon:"fa-solid fa-key",title:"HMAC",link:"/hashing/hmac"}]},{id:4,icon:"fa-solid fa-code",title:"Code",toggle:!1,childs:[{icon:"fa-brands fa-square-js",title:"Javascript",link:"/code/javascript"}]}],this.router.events.subscribe(o=>{o instanceof G&&this.checkRoute()})}toggle(){this.isToggle=!this.isToggle}toggleLink(n){(()=>{let r=this.menus.filter(d=>d.toggle&&d!=n);for(let d of r)d.toggle=!1})(),n.toggle=!n.toggle}checkRoute(){(()=>{let m=this.menus.filter(C=>C.toggle);for(let C of m)C.toggle=!1})();let o=this.router.url,d=this.menus.filter(m=>m.link===o?!0:m.childs?m.childs.some(C=>C.link===o):!1)[0];d.toggle=!0}};e.\u0275fac=function(o){return new(o||e)(x(ee))},e.\u0275cmp=g({type:e,selectors:[["nav-menu"]],standalone:!0,features:[f],decls:10,vars:4,consts:[[1,"nav"],[1,"nav__header"],[1,"nav__toggle","icon-button",3,"click"],[1,"fa-solid","fa-bars"],[1,"nav__overlay",3,"click"],[1,"nav__menu"],[1,"nav__item"],["class","nav__item nav__link"],["class","nav__submenu"],[1,"nav__item","nav__link",3,"click"],[3,"ngClass"],[1,"nav__dropdown","fa-solid","fa-angle-down"],["routerLinkActive","nav__link--active",1,"nav__item","nav__link",3,"routerLinkActiveOptions","routerLink"],[1,"nav__submenu"],["class","nav__item nav__link","routerLinkActive","nav__link--active",3,"routerLinkActiveOptions","routerLink"],["class","nav__item"]],template:function(o,r){o&1&&(a(0,"aside",0)(1,"div",1)(2,"button",2),_("click",function(){return r.toggle()}),c(3,"i",3),s(),a(4,"span"),u(5," Web Dev Kit"),s()(),a(6,"div",4),_("click",function(){return r.toggle()}),s(),a(7,"ul",5),P(8,Ce,4,2,"li",15,_e),s()()),o&2&&(l(6),k("nav__overlay--visible",r.isToggle),l(1),k("nav__menu--visible",r.isToggle),O(8,r.menus))},dependencies:[v,K,oe,te,ne],styles:[".nav[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.nav__menu[_ngcontent-%COMP%]{padding:0;margin:0;display:flex;flex-direction:column;row-gap:10px;background-color:var(--bg-secondary);min-height:100vh;max-height:100vh;overflow-y:hidden}.nav__menu[_ngcontent-%COMP%]:hover{overflow-y:auto}.nav__header[_ngcontent-%COMP%]{height:60px;display:flex;flex-direction:column;align-items:center;justify-content:center}.nav__toggle[_ngcontent-%COMP%]{display:none}.nav__submenu[_ngcontent-%COMP%]{padding:0;display:flex;flex-direction:column;row-gap:10px}.nav__submenu[_ngcontent-%COMP%]   .nav__link[_ngcontent-%COMP%]{padding-left:40px}.nav__dropdown[_ngcontent-%COMP%]{margin-left:auto;transition:transform .3s ease-in 10ms}.nav__dropdown--rotate[_ngcontent-%COMP%]{transform:rotate(-180deg)}.nav__item[_ngcontent-%COMP%]{list-style:none}.nav__link[_ngcontent-%COMP%]{display:flex;padding:20px;flex-direction:row;column-gap:15px;transition:transform .1s ease-in,background-color .1s ease-in,border .1s ease-in}.nav__link[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.8em}.nav__link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:var(--bg-secondary-light)}.nav__link--active[_ngcontent-%COMP%]{background:var(--primary-color);color:var(--primary-color-contrast)}.nav__link--active[_ngcontent-%COMP%]:hover{background:var(--primary-color-light)}@media screen and (max-width: 600px){.nav__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.nav__menu[_ngcontent-%COMP%]{transform:translate(-300px) translateZ(0);position:fixed;min-width:300px;z-index:1;transition:transform .3s ease-out}.nav__menu--visible[_ngcontent-%COMP%]{transform:none;transition:transform .3s ease-in;box-shadow:10px 30px 20px #0000004d}.nav__overlay[_ngcontent-%COMP%]{position:fixed;width:100%;height:100vh;background:black;opacity:0;z-index:1;display:none}.nav__overlay--visible[_ngcontent-%COMP%]{display:block;opacity:.4}.nav__toggle[_ngcontent-%COMP%]{display:inline;margin:5px}}"],data:{animation:[A("myInsertRemoveTrigger",[b(":enter",[y({height:0,opacity:0}),M("150ms ease-in",y({height:"*",opacity:1}))]),b(":leave",[M("150ms ease-out",y({height:0,opacity:0}))])]),A("openClose",[F("true",y({height:"*"})),F("false",y({height:"0px"})),b("false <=> true",M(500))])]}});let i=e;return i})();var ue=(()=>{let e=class e{constructor(n){this.renderer=n,this.title="web-dev-kit"}onResize(){this.renderer.addClass(document.body,"resize-animation-stopper"),clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.renderer.removeClass(document.body,"resize-animation-stopper")},200)}};e.\u0275fac=function(o){return new(o||e)(x(j))},e.\u0275cmp=g({type:e,selectors:[["app-root"]],hostBindings:function(o,r){o&1&&_("resize",function(m){return r.onResize(m)},!1,B)},standalone:!0,features:[f],decls:4,vars:0,consts:[[1,"main-section"],[1,"main-section__sidenav"],[1,"main-section__content","main-section__content--padding"]],template:function(o,r){o&1&&(a(0,"section",0),c(1,"nav-menu",1),a(2,"main",2),c(3,"router-outlet"),s()())},dependencies:[v,Q,pe],styles:[".main-section[_ngcontent-%COMP%]{display:grid;min-height:100vh;grid-template-columns:minmax(300px,1fr) minmax(100px,11fr)}.main-section__sidenav[_ngcontent-%COMP%]{padding:0;margin:0;top:0;position:sticky;height:100vh;overflow:hidden;border-right:1px solid var(--border-primary);background-color:var(--bg-secondary)}.main-section__content[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 auto;overflow:auto;box-sizing:border-box}.main-section__content--padding[_ngcontent-%COMP%]{padding:15px}@media (max-width: 600px){.main-section[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:60px}.main-section__sidenav[_ngcontent-%COMP%]{position:sticky;height:auto;border-right:none;border-bottom:1px solid var(--border-primary);z-index:10}}"]});let i=e;return i})();Y(ue,ce).catch(i=>console.error(i));
