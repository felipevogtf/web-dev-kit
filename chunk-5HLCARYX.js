import{a as R,b as $}from"./chunk-BM7ES2Y5.js";import{a as D,c as v,e as J,g as N}from"./chunk-B4O4QCFL.js";import{c as S,g as I,j as k,k as F,l as z}from"./chunk-GE2WG3CC.js";import{$ as w,D as x,Fa as j,Ka as p,La as m,Na as H,Ob as f,T,Ta as u,Ua as L,Va as M,Xa as O,Ya as P,_ as h,ab as r,bb as s,cb as l,f as y,gb as b,k as C,kb as g,qb as E}from"./chunk-WVNT4QDC.js";var _=(()=>{let t=class t{constructor(e){this.library=e,this.library.addIcons(J)}};t.\u0275fac=function(i){return new(i||t)(m(D))},t.\u0275cmp=h({type:t,selectors:[["html-viewer"]],inputs:{html:"html",width:"width",height:"height"},standalone:!0,features:[E],decls:1,vars:5,consts:[[1,"html-viewer",3,"innerHTML"]],template:function(i,o){i&1&&l(0,"div",0),i&2&&(L("width",o.width)("height",o.height),u("innerHTML",o.html,j))},dependencies:[f,v],styles:[".html-viewer[_ngcontent-%COMP%]{padding:15px;border:solid 1px var(--border-primary);border-radius:var(--base-radius);overflow:auto}"]});let n=t;return n})();function W(n,t){n&1&&(r(0,"span",12),l(1,"i",13),s())}var V=(()=>{let t=class t{constructor(e,i){this.sanitizer=e,this.changeDetectorRef=i,this.editorOptions={theme:"vs-dark",language:"javascript",fontSize:"16px",lineHeight:"21px",fontFamily:"Cascadia Code, system-ui",fontLigatures:!0},this.code="",this.output="",this.outputHTML="",this.loading=!0,this.running=!1,this.codeEvent=new C;let o=console.log,c=console.error,d=console.warn;console.log=(...a)=>{this.output+=this.logToHTML(a.join(" "))+`
`,o.apply(console,a)},console.error=(...a)=>{this.output+=this.errorToHTML(a.join(" "))+`
`,c.apply(console,a)},console.warn=(...a)=>{this.output+=this.warnToHTML(a.join(" "))+`
`,d.apply(console,a)},this.codeEvent.pipe(x(1e3)).subscribe(a=>{this.play()})}ngOnInit(){}executeCode(){this.codeEvent.next(this.code)}clear(){this.running=!0,this.output="",this.outputHTML=""}play(){return y(this,null,function*(){this.running||(this.clear(),setTimeout(()=>{let e=this.execute(this.code);this.output+=e,this.outputHTML=this.sanitizerHTML(this.output),this.running=!1},300))})}execute(e){let i="";try{let c=new Function(e)();c&&(i=`<p>${c}</p>
`)}catch(o){i=this.errorToHTML(o)+`
`}return i}logToHTML(e){return`
    <p
      style="
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
      <span>${e}</span>
    </p>
    `}errorToHTML(e){return`
    <p
      style="
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
      <span>${e}</span>
    </p>
    `}warnToHTML(e){return`
    <p
      style="
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
      <span>${e}</span>
    </p>
    `}sanitizerHTML(e){return this.sanitizer.bypassSecurityTrustHtml(e)}onMonacoEditorInit(e){this.loading=!1,this.changeDetectorRef.detectChanges()}};t.\u0275fac=function(i){return new(i||t)(m(S),m(H))},t.\u0275cmp=h({type:t,selectors:[["app-javascript"]],decls:19,vars:9,consts:[[1,"javascript"],[1,"javascript-editor"],[1,"javascript-editor__header"],[1,"icon-button",3,"click"],[1,"icon-button__icon"],[1,"fa-solid","fa-play"],[1,"fa-solid","fa-circle-notch","fa-spin"],[1,"javascript-editor__content"],["class","loader"],[1,"monaco-editor",3,"options","ngModel","ngModelChange","onInit"],[1,"javascript--console"],[3,"html","height"],[1,"loader"],[1,"fa-solid","fa-code","fa-bounce"]],template:function(i,o){i&1&&(r(0,"section",0)(1,"h2"),g(2,"Javascript Compiler"),s(),r(3,"div",1)(4,"div",2)(5,"label"),g(6,"Entrada"),s(),r(7,"button",3),b("click",function(){return o.play()}),r(8,"span",4),l(9,"i",5),s(),r(10,"span",4),l(11,"i",6),s()()(),r(12,"div",7),O(13,W,2,0,"span",8),r(14,"ngx-monaco-editor",9),b("ngModelChange",function(d){return o.code=d})("ngModelChange",function(){return o.executeCode()})("onInit",function(d){return o.onMonacoEditorInit(d)}),s()()(),r(15,"div",10)(16,"label"),g(17,"Salida"),s(),l(18,"html-viewer",11),s()()),i&2&&(p(8),M("icon-button__icon--visible",!o.running),p(2),M("icon-button__icon--visible",o.running),p(3),P(13,o.loading?13:-1),p(1),u("options",o.editorOptions)("ngModel",o.code),p(4),u("html",o.outputHTML)("height","400px"))},dependencies:[k,F,R,_],styles:[".javascript[_ngcontent-%COMP%]{display:flex;flex-direction:column}.javascript-editor__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:5px}.javascript-editor__content[_ngcontent-%COMP%]{position:relative;height:600px;background:var(--color-light);border-radius:var(--base-radius);display:flex;justify-content:center;align-items:center}.javascript-editor__content[_ngcontent-%COMP%]   .monaco-editor[_ngcontent-%COMP%]{position:absolute;border-radius:var(--base-radius);overflow:hidden;padding:10px 0;min-height:100%;width:100%;box-sizing:border-box}.javascript-editor__content[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{display:block;position:absolute;margin:auto;font-size:50px;color:var(--color-light-contrast)}.javascript-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.javascript--console[_ngcontent-%COMP%]{margin-top:30px}.javascript--console[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.icon-button__icon[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}"]});let n=t;return n})();var q=[{path:"",redirectTo:"javascript",pathMatch:"full"},{path:"javascript",component:V}],dt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=w({type:t}),t.\u0275inj=T({imports:[f,I.forChild(q),z,$,N,v,_]});let n=t;return n})();export{dt as CodeModule};
