import{a as L,b as g,c as x,d as N,e as S,g as F,h as A,p as k}from"./chunk-6IE7XVRO.js";import{$ as v,C as i,J as f,L as H,R as s,S as l,T as C,X as m,aa as h,ba as p,ca as d,f as z,ia as u,m as V,q as M}from"./chunk-VAZFKGSO.js";var b={prefix:"far",iconName:"clipboard",icon:[384,512,[128203],"f328","M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]};var O=(()=>{let e=class e{constructor(){this.placeholder="",this.value="",this.iconClip=b,this.iconCheck=k,this.animationRunning=!1}copyClipboard(){return z(this,null,function*(){if(!(!this.value||this.animationRunning))try{yield navigator.clipboard.writeText(this.value),this.changeIcon()}catch(c){console.error("Failed to copy: ",c)}})}changeIcon(){return z(this,null,function*(){this.animationRunning=!0,yield this.delay(1e3),this.animationRunning=!1})}delay(c){return new Promise(r=>setTimeout(r,c))}onChange(c){}onTouched(){}writeValue(c){this.value=c}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){}onInputChange(c){this.onChange(c),this.onTouched()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=M({type:e,selectors:[["custom-textarea"]],inputs:{id:"id",placeholder:"placeholder",label:"label"},standalone:!0,features:[p([{provide:L,useExisting:V(()=>e),multi:!0}]),d],decls:7,vars:11,consts:[[1,"label-container",3,"for"],[1,"textarea-container"],["rows","10",1,"textarea-container__area","textarea",3,"id","placeholder","ngModel","ngModelChange"],[1,"textarea-container__button","icon-button",3,"click"],[1,"icon-button__icon-custom",3,"icon"]],template:function(r,a){r&1&&(s(0,"label",0),v(1),l(),s(2,"div",1)(3,"textarea",2),m("ngModelChange",function(o){return a.value=o})("ngModelChange",function(o){return a.onInputChange(o)}),l(),s(4,"button",3),m("click",function(){return a.copyClipboard()}),C(5,"fa-icon",4)(6,"fa-icon",4),l()()),r&2&&(f("for",a.id),i(1),h(a.label),i(2),f("id",a.id)("placeholder",a.placeholder)("ngModel",a.value),i(2),H("icon-button__icon--visible",!a.animationRunning),f("icon",a.iconClip),i(1),H("icon-button__icon--visible",a.animationRunning),f("icon",a.iconCheck))},dependencies:[u,S,g,x,N,A,F],styles:[".label-container[_ngcontent-%COMP%]{display:block;margin:10px 0}.textarea-container[_ngcontent-%COMP%]{position:relative}.textarea-container__button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:5px}.textarea-container__area[_ngcontent-%COMP%]{padding:10px 55px 10px 10px}.icon-button__icon-custom[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}"]});let n=e;return n})();export{b as a,O as b};