import{a as S}from"./chunk-YLAGGKEJ.js";import{a as P,g as z}from"./chunk-VRQ656LY.js";import{Ib as k,Jb as c,Mb as M,Ta as f,Ua as C,X as b,Y as h,ga as d,gb as v,hc as O,ib as i,kb as y,lb as x,lc as p,pb as a,qb as l,rb as u,tb as g,ub as _,vb as w,wb as s}from"./chunk-RTIVNVYJ.js";var E=[[["","slot","start"]],"*",[["","slot","end"]]],V=["[slot='start']","*","[slot='end']"],A=(o,e)=>[o,e],j=(()=>{let e=class e{constructor(){this.color="primary",this.full=!1,this.disabled=!1,this.size="lg"}getSizeClass(){return`wdk-button--${this.size}`}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["wdk-button"]],inputs:{color:"color",size:"size",full:"full",disabled:"disabled"},standalone:!0,features:[c],ngContentSelectors:V,decls:4,vars:7,consts:[["type","button",1,"wdk-button",3,"ngClass","disabled"]],template:function(n,r){n&1&&(w(E),a(0,"button",0),s(1),s(2,1),s(3,2),l()),n&2&&(y("wdk-button--full",r.full),i("ngClass",M(4,A,r.color,r.getSizeClass()))("disabled",r.disabled))},dependencies:[p,O],styles:["[_nghost-%COMP%]:has(.wdk-button--full){width:100%}.wdk-button[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:var(--base-radius);border:none;font-weight:500;min-height:40px;border:2px solid currentColor;outline:2px solid transparent;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:15px;transition:background-color .3s ease-out,transform .1s ease-in,outline-color .1s ease-in,border-color .1s ease-in}.wdk-button[_ngcontent-%COMP%]:hover{cursor:pointer}.wdk-button[_ngcontent-%COMP%]:active{transform:scale(.95)}.wdk-button[_ngcontent-%COMP%]:disabled{pointer-events:none;opacity:.8}.wdk-button--full[_ngcontent-%COMP%]{width:100%}.wdk-button--lg[_ngcontent-%COMP%]{padding:5px 20px;min-height:40px;font-size:1rem}.wdk-button--md[_ngcontent-%COMP%]{padding:5px 15px;min-height:32px;font-size:.9rem}.wdk-button--sm[_ngcontent-%COMP%]{padding:5px 10px;min-height:24px;font-size:.75rem}.primary[_ngcontent-%COMP%]{background-color:var(--primary);border-color:var(--primary);color:var(--primary-contrast)}.primary[_ngcontent-%COMP%]:hover{background-color:var(--primary-light);border-color:var(--primary-light)}.primary[_ngcontent-%COMP%]:focus{outline-color:var(--primary-content)}.secondary[_ngcontent-%COMP%]{background-color:transparent;border-color:var(--primary);color:var(--secondary-color-contrast)}.secondary[_ngcontent-%COMP%]:hover{background-color:var(--secondary-light)}.secondary[_ngcontent-%COMP%]:focus{outline-color:var(--primary-content)}.tertiary[_ngcontent-%COMP%]{background-color:transparent;border-color:transparent;color:var(--secondary-color-contrast)}.tertiary[_ngcontent-%COMP%]:hover{background-color:var(--secondary-light)}.tertiary[_ngcontent-%COMP%]:focus{outline-color:var(--primary-content)}.danger[_ngcontent-%COMP%]{background-color:var(--danger);border-color:var(--danger);color:var(--danger-contrast)}.danger[_ngcontent-%COMP%]:hover{background-color:var(--danger-light);border-color:var(--danger-light)}.danger[_ngcontent-%COMP%]:focus{outline-color:var(--danger-content)}"]});let o=e;return o})();var F=(()=>{let e=class e{constructor(){}copyClipboard(t){return navigator.clipboard.writeText(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function N(o,e){if(o&1&&u(0,"wdk-label",0),o&2){let m=_();i("id",m.id)("label",m.label)}}var W=(()=>{let e=class e{constructor(t){this.clipboardService=t,this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.placeholder="",this.label="",this.disabled=!1,this.readonly=!1}onCopy(){this.clipboardService.copyClipboard(this.value)}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){}onInputChange(t){let n=t.target.value;this.value=n,this.onChange(n),this.onTouched()}};e.\u0275fac=function(n){return new(n||e)(C(F))},e.\u0275cmp=d({type:e,selectors:[["wdk-copy-textarea"]],inputs:{id:"id",placeholder:"placeholder",label:"label",readonly:"readonly",disabled:"disabled"},standalone:!0,features:[k([{provide:P,useExisting:b(()=>e),multi:!0}]),c],decls:6,vars:6,consts:[[3,"id","label"],[1,"wdk-textarea"],[1,"wdk-textarea__header"],["color","tertiary","size","sm",3,"click"],[1,"fa-regular","fa-clipboard"],["rows","10",3,"input","id","placeholder","disabled","readonly","value"]],template:function(n,r){n&1&&(v(0,N,1,2,"wdk-label",0),a(1,"div",1)(2,"div",2)(3,"wdk-button",3),g("click",function(){return r.onCopy()}),u(4,"i",4),l()(),a(5,"textarea",5),g("input",function(D){return r.onInputChange(D)}),l()()),n&2&&(x(r.label?0:-1),f(5),i("id",r.id)("placeholder",r.placeholder)("disabled",r.disabled)("readonly",r.readonly)("value",r.value))},dependencies:[p,S,j,z],styles:[".wdk-textarea[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:var(--base-radius);border:solid 1px var(--primary-content);overflow:hidden;background-color:#fff;height:max-content}.wdk-textarea[_ngcontent-%COMP%]:focus-within{border-color:var(--primary)}.wdk-textarea__header[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;padding:5px;border-bottom:solid 1px var(--primary-content)}.wdk-textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:10px 15px;box-sizing:border-box;border:none;outline:none;width:100%;height:100%;resize:none}"]});let o=e;return o})();export{j as a,F as b,W as c};