import{a as B,b as W}from"./chunk-CCZPYMHF.js";import{a as N,b as A,c as V}from"./chunk-CG4KZEMM.js";import{a as $,c as M,e as R,g as D}from"./chunk-UBIAMWFM.js";import{c as k,j as z,m as I,n as F,o as J}from"./chunk-WLISSTD6.js";import{$ as v,E as w,Ha as H,Oa as s,Pa as h,Ra as P,U as O,Ya as m,Zb as b,_a as f,aa as j,ab as S,bb as L,f as _,fb as r,gb as l,hb as d,l as T,lb as y,qb as C,wb as E}from"./chunk-YE4O7DTM.js";var x=(()=>{let i=class i{constructor(e){this.library=e,this.library.addIcons(R)}};i.\u0275fac=function(t){return new(t||i)(h($))},i.\u0275cmp=v({type:i,selectors:[["html-viewer"]],inputs:{html:"html",width:"width",height:"height"},standalone:!0,features:[E],decls:1,vars:1,consts:[[1,"html-viewer",3,"innerHTML"]],template:function(t,n){t&1&&d(0,"div",0),t&2&&m("innerHTML",n.html,H)},dependencies:[b,M],styles:[".html-viewer[_ngcontent-%COMP%]{padding:15px;background-color:var(--bg-secondary);min-height:100%}"]});let o=i;return o})();function Q(o,i){o&1&&(r(0,"span",18),d(1,"i",19),l())}var G=(()=>{let i=class i{constructor(e,t){this.sanitizer=e,this.changeDetectorRef=t,this.editorOptions={theme:"vs-dark",language:"javascript",fontSize:"16px",lineHeight:"21px",fontFamily:"Cascadia Code, system-ui",fontLigatures:!0,minimap:{enabled:!1}},this.code="",this.output="",this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML()),this.loading=!0,this.running=!1,this.animationRunning=!1,this.codeEvent=new T;let n=console.log,a=console.error,u=console.warn;console.log=(...c)=>{let p="";c.forEach(g=>{p+=this.logToHTML(g)+`
`}),this.output+=p,n.apply(console,c)},console.error=(...c)=>{let p="";c.forEach(g=>{p+=this.errorToHTML(g)+`
`}),this.output+=p,a.apply(console,c)},console.warn=(...c)=>{let p="";c.forEach(g=>{p+=this.warnToHTML(g)+`
`}),this.output+=p,u.apply(console,c)},this.codeEvent.pipe(w(1e3)).subscribe(c=>{this.play()})}ngOnInit(){this.play()}executeCode(){this.codeEvent.next(this.code)}clear(){this.running=!0,this.output="",this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML())}play(){return _(this,null,function*(){this.running||(this.clear(),setTimeout(()=>{let e=this.execute(this.code);this.output+=e,this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML()+this.output),this.running=!1},300))})}execute(e){let t="";try{let a=new Function(e)();a&&(typeof a=="object"?t=`<pre>${JSON.stringify(a,null,2)}</pre>`:t=`<p style="padding: 0px 20px;">${a}</p>`)}catch(n){t=this.errorToHTML(n)+`
`}return t}consoleHeaderHTML(){return`
    <p
      style="
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 0px 20px;
        color: var(--color-light-contrast);
      "
    >
      <i class="fa-solid fa-chevron-right"></i>
      <span>Consola</span>
    </p>
    `}logToHTML(e){let t="";return typeof e=="object"?t=`<pre style="margin: 0;">${JSON.stringify(e,null,2)}</pre>`:t=`<span>${e}</span>`,`
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-light);
        color: var(--color-light-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-chevron-right"></i>
      ${t}
    </div>
    `}errorToHTML(e){let t="";return typeof e=="object"?t=`<pre style="margin: 0;">${JSON.stringify(e,null,2)}</pre>`:t=`<span>${e}</span>`,`
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-danger);
        color: var(--color-danger-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-xmark"></i>
      ${t}
    </div>
    `}warnToHTML(e){let t="";return typeof e=="object"?t=`<pre style="margin: 0;">${JSON.stringify(e,null,2)}</pre>`:t=`<span>${e}</span>`,`
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-warning);
        color: var(--color-warning-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-triangle-exclamation"></i>
      ${t}
    </div>
    `}sanitizerHTML(e){return this.sanitizer.bypassSecurityTrustHtml(e)}onMonacoEditorInit(e){this.loading=!1,this.changeDetectorRef.detectChanges()}copyClipboard(){return _(this,null,function*(){if(!(!this.code||this.animationRunning))try{yield navigator.clipboard.writeText(this.code),this.changeIcon()}catch(e){console.error("Failed to copy: ",e)}})}changeIcon(){return _(this,null,function*(){this.animationRunning=!0,yield this.delay(1e3),this.animationRunning=!1})}delay(e){return new Promise(t=>setTimeout(t,e))}};i.\u0275fac=function(t){return new(t||i)(h(k),h(P))},i.\u0275cmp=v({type:i,selectors:[["app-javascript"]],decls:24,vars:16,consts:[[1,"javascript"],[1,"javascript-editor"],[1,"javascript-editor__header"],[1,"icon-button","icon-button--dark",3,"click"],[1,"icon-button__icon"],[1,"fa-solid","fa-play"],[1,"fa-solid","fa-circle-notch","fa-spin"],[1,"grid-editor"],["direction","vertical"],[2,"overflow-y","hidden",3,"size","minSize"],[1,"javascript-editor__content"],["class","loader"],[1,"monaco-editor",3,"options","ngModel","ngModelChange","onInit"],[1,"icon-button","icon-button--light",3,"click"],[1,"icon-button__icon-custom","fa-regular","fa-clipboard"],[1,"icon-button__icon-custom","fa-solid","fa-check"],[3,"size","minSize"],[3,"html"],[1,"loader"],[1,"fa-solid","fa-code","fa-bounce"]],template:function(t,n){t&1&&(r(0,"section",0)(1,"h2"),C(2,"Javascript Compiler"),l(),r(3,"div",1)(4,"div",2)(5,"label"),C(6,"Entrada"),l(),r(7,"button",3),y("click",function(){return n.play()}),r(8,"span",4),d(9,"i",5),l(),r(10,"span",4),d(11,"i",6),l()()()()(),r(12,"section",7)(13,"as-split",8)(14,"as-split-area",9)(15,"div",10),S(16,Q,2,0,"span",11),r(17,"ngx-monaco-editor",12),y("ngModelChange",function(u){return n.code=u})("ngModelChange",function(){return n.executeCode()})("onInit",function(u){return n.onMonacoEditorInit(u)}),l(),r(18,"button",13),y("click",function(){return n.copyClipboard()}),r(19,"span",4),d(20,"i",14)(21,"i",15),l()()()(),r(22,"as-split-area",16),d(23,"html-viewer",17),l()()()),t&2&&(s(8),f("icon-button__icon--visible",!n.running),s(2),f("icon-button__icon--visible",n.running),s(4),m("size",70)("minSize",40),s(2),L(16,n.loading?16:-1),s(1),m("options",n.editorOptions)("ngModel",n.code),s(3),f("icon-button__icon--visible",!n.animationRunning),s(1),f("icon-button__icon--visible",n.animationRunning),s(1),m("size",30)("minSize",20),s(1),m("html",n.outputHTML))},dependencies:[I,F,B,x,N,A],styles:[".javascript[_ngcontent-%COMP%]{display:flex;flex-direction:column}.javascript-editor__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-bottom:3px}.javascript-editor__header[_ngcontent-%COMP%]   .icon-button__icon[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.javascript-editor__header[_ngcontent-%COMP%]   .icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}.javascript-editor__content[_ngcontent-%COMP%]{position:relative;min-height:max(100%,300px);background-color:var(--bg-secondary-dark);display:flex;justify-content:center;align-items:center;overflow:hidden}.javascript-editor__content[_ngcontent-%COMP%]   .monaco-editor[_ngcontent-%COMP%]{position:absolute;padding:10px 0;min-height:100%;width:100%;box-sizing:border-box}.javascript-editor__content[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{display:block;position:absolute;margin:auto;font-size:50px;color:var(--color-light-contrast)}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:5px}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button__icon-custom[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}.javascript-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.javascript--console[_ngcontent-%COMP%]{margin-top:30px;min-height:max(100%,100px)}.javascript--console[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.grid-editor[_ngcontent-%COMP%]{height:100%;max-height:700px;border:1px solid var(--border-primary);border-radius:var(--base-radius);overflow:hidden}@media (height > 1000px){.grid-editor[_ngcontent-%COMP%]{max-height:800px}}@media (height > 1200px){.grid-editor[_ngcontent-%COMP%]{max-height:1000px}}@media (height > 1500px){.grid-editor[_ngcontent-%COMP%]{max-height:1200px}}"]});let o=i;return o})();var U=[{path:"",redirectTo:"javascript",pathMatch:"full"},{path:"javascript",component:G}],_t=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=j({type:i}),i.\u0275inj=O({imports:[b,z.forChild(U),J,W,D,M,x,V]});let o=i;return o})();export{_t as CodeModule};
