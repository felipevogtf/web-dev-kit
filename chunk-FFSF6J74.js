import{a as S,b as x}from"./chunk-5CQYSX7V.js";import{a as P}from"./chunk-YLAGGKEJ.js";import{a as M,g as O}from"./chunk-VRQ656LY.js";import{Ib as _,Jb as w,Ta as l,Ua as m,X as u,ga as h,gb as b,ib as a,kb as C,lb as f,lc as k,pb as r,qb as d,rb as p,tb as s,ub as y,vb as g,wb as v}from"./chunk-RTIVNVYJ.js";var D=[[["","slot","start"]]],E=["[slot='start']"];function F(o,n){if(o&1&&p(0,"wdk-label",0),o&2){let c=y();a("id",c.id)("label",c.label)}}var U=(()=>{let n=class n{constructor(e){this.clipboardService=e,this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.placeholder="",this.label="",this.disabled=!1,this.readonly=!1}onCopy(){this.clipboardService.copyClipboard(this.value)}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}onInputChange(e){let i=e.target.value;this.value=i,this.onChange(i),this.onTouched()}};n.\u0275fac=function(i){return new(i||n)(m(x))},n.\u0275cmp=h({type:n,selectors:[["wdk-copy-input"]],inputs:{id:"id",placeholder:"placeholder",label:"label",readonly:"readonly",disabled:"disabled"},standalone:!0,features:[_([{provide:M,useExisting:u(()=>n),multi:!0}]),w],ngContentSelectors:E,decls:6,vars:10,consts:[[3,"id","label"],[1,"wdk-copy-input"],["type","text",3,"input","id","placeholder","disabled","readonly","value"],["color","tertiary","size","sm",3,"click"],[1,"fa-regular","fa-clipboard"]],template:function(i,t){i&1&&(g(D),b(0,F,1,2,"wdk-label",0),r(1,"div",1),v(2),r(3,"input",2),s("input",function(I){return t.onInputChange(I)}),d(),r(4,"wdk-button",3),s("click",function(){return t.onCopy()}),p(5,"i",4),d()()),i&2&&(f(t.label?0:-1),l(),C("wdk-input--disabled",t.disabled)("wdk-input--readonly",t.readonly),l(2),a("id",t.id)("placeholder",t.placeholder)("disabled",t.disabled)("readonly",t.readonly)("value",t.value))},dependencies:[k,P,S,O],styles:["[_nghost-%COMP%]{width:100%}.wdk-copy-input[_ngcontent-%COMP%]{box-sizing:border-box;height:40px;width:100%;padding-left:15px;padding-right:5px;border:solid 1px var(--primary-content);outline:2px solid transparent;border-radius:var(--base-radius);overflow:hidden;background-color:#fff;display:flex;flex-direction:row;align-items:center;gap:10px}.wdk-copy-input[_ngcontent-%COMP%]:focus-within{border-color:var(--primary)}.wdk-copy-input--disabled[_ngcontent-%COMP%]{opacity:.8;pointer-events:none}.wdk-copy-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;width:100%;border:none}.wdk-copy-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.wdk-copy-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:read-only{pointer-events:none}"]});let o=n;return o})();export{U as a};
