import{a as O}from"./chunk-YLAGGKEJ.js";import{a as k,g as M}from"./chunk-VRQ656LY.js";import{Ib as w,Jb as y,Ta as d,X as u,ga as c,gb as h,ib as l,kb as b,lb as m,lc as _,pb as a,qb as r,rb as f,tb as g,ub as C,vb as v,wb as s}from"./chunk-RTIVNVYJ.js";var P=[[["","slot","start"]],[["","slot","end"]]],S=["[slot='start']","[slot='end']"];function T(o,t){if(o&1&&f(0,"wdk-label",0),o&2){let p=C();l("id",p.id)("label",p.label)}}var L=(()=>{let t=class t{constructor(){this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.placeholder="",this.label="",this.disabled=!1,this.readonly=!1}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}onInputChange(e){let i=e.target.value;this.value=i,this.onChange(i),this.onTouched()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c({type:t,selectors:[["wdk-input"]],inputs:{id:"id",placeholder:"placeholder",label:"label",readonly:"readonly",disabled:"disabled"},standalone:!0,features:[w([{provide:k,useExisting:u(()=>t),multi:!0}]),y],ngContentSelectors:S,decls:5,vars:10,consts:[[3,"id","label"],[1,"wdk-input"],["type","text",3,"input","id","placeholder","disabled","readonly","value"]],template:function(i,n){i&1&&(v(P),h(0,T,1,2,"wdk-label",0),a(1,"div",1),s(2),a(3,"input",2),g("input",function(x){return n.onInputChange(x)}),r(),s(4,1),r()),i&2&&(m(n.label?0:-1),d(),b("wdk-input--disabled",n.disabled)("wdk-input--readonly",n.readonly),d(2),l("id",n.id)("placeholder",n.placeholder)("disabled",n.disabled)("readonly",n.readonly)("value",n.value))},dependencies:[_,O,M],styles:["[_nghost-%COMP%]{width:100%}.wdk-input[_ngcontent-%COMP%]{box-sizing:border-box;height:40px;width:100%;padding:0 15px;border:solid 1px var(--primary-content);outline:2px solid transparent;border-radius:var(--base-radius);overflow:hidden;background-color:#fff;display:flex;flex-direction:row;align-items:center;gap:10px}.wdk-input[_ngcontent-%COMP%]:focus-within{border-color:var(--primary)}.wdk-input--disabled[_ngcontent-%COMP%]{opacity:.8;pointer-events:none}.wdk-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;width:100%;border:none}.wdk-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}"]});let o=t;return o})();export{L as a};