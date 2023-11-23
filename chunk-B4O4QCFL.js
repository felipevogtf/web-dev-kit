import{c as w1,h as y1,i as A1,j as P1,k as F1,l as T1}from"./chunk-GE2WG3CC.js";import{$ as V1,Fa as M1,Ga as p1,Ia as C1,Ka as Z,La as D,Ob as k1,Q as z1,S as R2,Sa as u1,T as v1,Ta as c2,Va as v2,_ as J,aa as h1,ab as V2,ba as z2,bb as h2,cb as L1,eb as d1,f as D2,gb as E2,ib as g1,jb as x1,kb as N1,lb as b1,nb as S1,qb as a2}from"./chunk-WVNT4QDC.js";function B1(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),r.push.apply(r,e)}return r}function t(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?B1(Object(r),!0).forEach(function(e){C(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):B1(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function k2(c){"@babel/helpers - typeof";return k2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k2(c)}function I4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function D1(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function O4(c,a,r){return a&&D1(c.prototype,a),r&&D1(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function C(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function c1(c,a){return G4(c)||j4(c,a)||f4(c,a)||Y4()}function t2(c){return W4(c)||_4(c)||f4(c)||X4()}function W4(c){if(Array.isArray(c))return W2(c)}function G4(c){if(Array.isArray(c))return c}function _4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function j4(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],s=!0,i=!1,n,f;try{for(r=r.call(c);!(s=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&r.return!=null&&r.return()}finally{if(i)throw f}}return e}}function f4(c,a){if(c){if(typeof c=="string")return W2(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W2(c,a)}}function W2(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function X4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R1=function(){},a1={},l4={},o4=null,t4={mark:R1,measure:R1};try{typeof window<"u"&&(a1=window),typeof document<"u"&&(l4=document),typeof MutationObserver<"u"&&(o4=MutationObserver),typeof performance<"u"&&(t4=performance)}catch{}var $4=a1.navigator||{},E1=$4.userAgent,U1=E1===void 0?"":E1,E=a1,M=l4,q1=o4,M2=t4,P6=!!E.document,T=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",m4=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),p2,C2,u2,L2,d2,A="___FONT_AWESOME___",G2=16,H4="fa",z4="svg-inline--fa",_="data-fa-i2svg",_2="data-fa-pseudo-element",K4="data-fa-pseudo-element-pending",e1="data-prefix",r1="data-icon",I1="fontawesome-i2svg",Q4="async",J4=["HTML","HEAD","STYLE","SCRIPT"],v4=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",s1=[h,p];function m2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[h]}})}var i2=m2((p2={},C(p2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),C(p2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),p2)),n2=m2((C2={},C(C2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(C2,p,{solid:"fass",regular:"fasr",light:"fasl"}),C2)),f2=m2((u2={},C(u2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(u2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),u2)),Z4=m2((L2={},C(L2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(L2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),L2)),c3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,V4="fa-layers-text",a3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,e3=m2((d2={},C(d2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(d2,p,{900:"fass",400:"fasr",300:"fasl"}),d2)),h4=[1,2,3,4,5,6,7,8,9,10],r3=h4.concat([11,12,13,14,15,16,17,18,19,20]),s3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l2=new Set;Object.keys(n2[h]).map(l2.add.bind(l2));Object.keys(n2[p]).map(l2.add.bind(l2));var i3=[].concat(s1,t2(l2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(h4.map(function(c){return"".concat(c,"x")})).concat(r3.map(function(c){return"w-".concat(c)})),r2=E.FontAwesomeConfig||{};function n3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function f3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(O1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],O1.forEach(function(c){var a=c1(c,2),r=a[0],e=a[1],s=f3(n3(r));s!=null&&(r2[e]=s)}));var O1,M4={styleDefault:"solid",familyDefault:"classic",cssPrefix:H4,replacementClass:z4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var K=t(t({},M4),r2);K.autoReplaceSvg||(K.observeMutations=!1);var H={};Object.keys(M4).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(r){K[c]=r,s2.forEach(function(e){return e(H)})},get:function(){return K[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){K.cssPrefix=a,s2.forEach(function(r){return r(H)})},get:function(){return K.cssPrefix}});E.FontAwesomeConfig=H;var s2=[];function l3(c){return s2.push(c),function(){s2.splice(s2.indexOf(c),1)}}var R=G2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function o3(c){if(!(!c||!T)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=M.head.childNodes,e=null,s=r.length-1;s>-1;s--){var i=r[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return M.head.insertBefore(a,e),c}}var t3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function o2(){for(var c=12,a="";c-- >0;)a+=t3[Math.random()*62|0];return a}function Q(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function i1(c){return c.classList?Q(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function p4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m3(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(p4(c[r]),'" ')},"").trim()}function A2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function n1(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function H3(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:l,path:m}}function z3(c){var a=c.transform,r=c.width,e=r===void 0?G2:r,s=c.height,i=s===void 0?G2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&m4?l+="translate(".concat(a.x/R-e/2,"em, ").concat(a.y/R-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var v3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function C4(){var c=H4,a=z4,r=H.cssPrefix,e=H.replacementClass,s=v3;if(r!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return s}var W1=!1;function U2(){H.autoAddCss&&!W1&&(o3(C4()),W1=!0)}var V3={mixout:function(){return{dom:{css:C4,insertCss:U2}}},hooks:function(){return{beforeDOMElementCreation:function(){U2()},beforeI2svg:function(){U2()}}}},P=E||{};P[A]||(P[A]={});P[A].styles||(P[A].styles={});P[A].hooks||(P[A].hooks={});P[A].shims||(P[A].shims=[]);var S=P[A],u4=[],h3=function c(){M.removeEventListener("DOMContentLoaded",c),w2=1,u4.map(function(a){return a()})},w2=!1;T&&(w2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),w2||M.addEventListener("DOMContentLoaded",h3));function M3(c){T&&(w2?setTimeout(c,0):u4.push(c))}function H2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?p4(c):"<".concat(a," ").concat(m3(e),">").concat(i.map(H2).join(""),"</").concat(a,">")}function G1(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var p3=function(a,r){return function(e,s,i,n){return a.call(r,e,s,i,n)}},q2=function(a,r,e,s){var i=Object.keys(a),n=i.length,f=s!==void 0?p3(r,s):r,l,m,o;for(e===void 0?(l=1,o=a[i[0]]):(l=0,o=e);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function C3(c){for(var a=[],r=0,e=c.length;r<e;){var s=c.charCodeAt(r++);if(s>=55296&&s<=56319&&r<e){var i=c.charCodeAt(r++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),r--)}else a.push(s)}return a}function j2(c){var a=C3(c);return a.length===1?a[0].toString(16):null}function u3(c,a){var r=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&r>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function _1(c){return Object.keys(c).reduce(function(a,r){var e=c[r],s=!!e.icon;return s?a[e.iconName]=e.icon:a[r]=e,a},{})}function X2(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,s=e===void 0?!1:e,i=_1(a);typeof S.hooks.addPack=="function"&&!s?S.hooks.addPack(c,_1(a)):S.styles[c]=t(t({},S.styles[c]||{}),i),c==="fas"&&X2("fa",a)}var g2,x2,N2,X=S.styles,L3=S.shims,d3=(g2={},C(g2,h,Object.values(f2[h])),C(g2,p,Object.values(f2[p])),g2),f1=null,L4={},d4={},g4={},x4={},N4={},g3=(x2={},C(x2,h,Object.keys(i2[h])),C(x2,p,Object.keys(i2[p])),x2);function x3(c){return~i3.indexOf(c)}function N3(c,a){var r=a.split("-"),e=r[0],s=r.slice(1).join("-");return e===c&&s!==""&&!x3(s)?s:null}var b4=function(){var a=function(i){return q2(X,function(n,f,l){return n[l]=q2(f,i,{}),n},{})};L4=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),d4=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),N4=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var r="far"in X||H.autoFetchSvg,e=q2(L3,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});g4=e.names,x4=e.unicodes,f1=P2(H.styleDefault,{family:H.familyDefault})};l3(function(c){f1=P2(c.styleDefault,{family:H.familyDefault})});b4();function l1(c,a){return(L4[c]||{})[a]}function b3(c,a){return(d4[c]||{})[a]}function G(c,a){return(N4[c]||{})[a]}function S4(c){return g4[c]||{prefix:null,iconName:null}}function S3(c){var a=x4[c],r=l1("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function U(){return f1}var o1=function(){return{prefix:null,iconName:null,rest:[]}};function P2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?h:r,s=i2[e][c],i=n2[e][c]||n2[e][s],n=c in S.styles?c:null;return i||n||null}var j1=(N2={},C(N2,h,Object.keys(f2[h])),C(N2,p,Object.keys(f2[p])),N2);function F2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,s=e===void 0?!1:e,i=(a={},C(a,h,"".concat(H.cssPrefix,"-").concat(h)),C(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return j1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return j1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=N3(H.cssPrefix,o);if(X[o]?(o=d3[f].includes(o)?Z4[f][o]:o,n=o,m.prefix=o):g3[f].indexOf(o)>-1?(n=o,m.prefix=P2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?S4(m.iconName):{},V=G(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!X.far&&X.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},o1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(X.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=U()||"fas"),l}var k3=function(){function c(){I4(this,c),this.definitions={}}return O4(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=t(t({},r.definitions[f]||{}),n[f]),X2(f,n[f]);var l=f2[h][f];l&&X2(l,n[f]),b4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];r[f]||(r[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(r[f][z]=m)}),r[f][l]=m}),r}}]),c}(),X1=[],Y={},$={},w3=Object.keys($);function y3(c,a){var r=a.mixoutsTo;return X1=c,Y={},Object.keys($).forEach(function(e){w3.indexOf(e)===-1&&delete $[e]}),X1.forEach(function(e){var s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(r[n]=s[n]),k2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=s[n][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){Y[n]||(Y[n]=[]),Y[n].push(i[n])})}e.provides&&e.provides($)}),r}function Y2(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),s=2;s<r;s++)e[s-2]=arguments[s];var i=Y[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function j(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var s=Y[c]||[];s.forEach(function(i){i.apply(null,r)})}function F(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return $[c]?$[c].apply(null,a):void 0}function $2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||U();if(a)return a=G(r,a)||a,G1(k4.definitions,r,a)||G1(S.styles,r,a)}var k4=new k3,A3=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,j("noAuto")},P3={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(j("beforeI2svg",a),F("pseudoElements2svg",a),F("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,M3(function(){T3({autoReplaceSvgRoot:r}),j("watch",a)})}},F3={icon:function(a){if(a===null)return null;if(k2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:G(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=P2(a[0]);return{prefix:e,iconName:G(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(c3))){var s=F2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U(),iconName:G(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:G(i,a)||a}}}},x={noAuto:A3,config:H,dom:P3,parse:F3,library:k4,findIconDefinition:$2,toHtml:H2},T3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?M:r;(Object.keys(S.styles).length>0||H.autoFetchSvg)&&T&&H.autoReplaceSvg&&x.dom.i2svg({node:e})};function T2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return H2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(T){var e=M.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function B3(c){var a=c.children,r=c.main,e=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(n1(n)&&r.found&&!e.found){var f=r.width,l=r.height,m={x:f/l/2,y:.5};s.style=A2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function D3(c){var a=c.prefix,r=c.iconName,e=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:e}]}]}function t1(c){var a=c.icons,r=a.main,e=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=e.found?e:r,N=L.width,b=L.height,k=s==="fak",u=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(B){return z.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:u,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},w=k&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[_]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||o2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:i,main:r,mask:e,maskId:m,transform:n,symbol:f,styles:t(t({},w),z.styles)}),I=e.found&&r.found?F("generateAbstractMask",g)||{children:[],attributes:{}}:F("generateAbstractIcon",g)||{children:[],attributes:{}},O=I.children,B2=I.attributes;return g.children=O,g.attributes=B2,f?D3(g):B3(g)}function Y1(c){var a=c.content,r=c.width,e=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[_]="");var o=t({},n.styles);n1(s)&&(o.transform=z3({transform:s,startCentered:!0,width:r,height:e}),o["-webkit-transform"]=o.transform);var z=A2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function R3(c){var a=c.content,r=c.title,e=c.extra,s=t(t(t({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),i=A2(e.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var I2=S.styles;function K2(c){var a=c[0],r=c[1],e=c.slice(4),s=c1(e,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:r,icon:n}}var E3={found:!1,width:512,height:512};function U3(c,a){!v4&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function Q2(c,a){var r=a;return a==="fa"&&H.styleDefault!==null&&(a=U()),new Promise(function(e,s){var i={found:!1,width:512,height:512,icon:F("missingIconAbstract")||{}};if(r==="fa"){var n=S4(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&I2[a]&&I2[a][c]){var f=I2[a][c];return e(K2(f))}U3(c,a),e(t(t({},E3),{},{icon:H.showMissingIcons&&c?F("missingIconAbstract")||{}:{}}))})}var $1=function(){},J2=H.measurePerformance&&M2&&M2.mark&&M2.measure?M2:{mark:$1,measure:$1},e2='FA "6.4.2"',q3=function(a){return J2.mark("".concat(e2," ").concat(a," begins")),function(){return w4(a)}},w4=function(a){J2.mark("".concat(e2," ").concat(a," ends")),J2.measure("".concat(e2," ").concat(a),"".concat(e2," ").concat(a," begins"),"".concat(e2," ").concat(a," ends"))},m1={begin:q3,end:w4},b2=function(){};function K1(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}function I3(c){var a=c.getAttribute?c.getAttribute(e1):null,r=c.getAttribute?c.getAttribute(r1):null;return a&&r}function O3(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function W3(){if(H.autoReplaceSvg===!0)return S2.replace;var c=S2[H.autoReplaceSvg];return c||S2.replace}function G3(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function _3(c){return M.createElement(c)}function y4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?G3:_3:r;if(typeof c=="string")return M.createTextNode(c);var s=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(y4(n,{ceFn:e}))}),s}function j3(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var S2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(s){r.parentNode.insertBefore(y4(s),r)}),r.getAttribute(_)===null&&H.keepOriginalSource){var e=M.createComment(j3(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~i1(r).indexOf(H.replacementClass))return S2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(f){return H2(f)}).join(`
`);r.setAttribute(_,""),r.innerHTML=n}};function Q1(c){c()}function A4(c,a){var r=typeof a=="function"?a:b2;if(c.length===0)r();else{var e=Q1;H.mutateApproach===Q4&&(e=E.requestAnimationFrame||Q1),e(function(){var s=W3(),i=m1.begin("mutate");c.map(s),i(),r()})}}var H1=!1;function P4(){H1=!0}function Z2(){H1=!1}var y2=null;function J1(c){if(q1&&H.observeMutations){var a=c.treeCallback,r=a===void 0?b2:a,e=c.nodeCallback,s=e===void 0?b2:e,i=c.pseudoElementsCallback,n=i===void 0?b2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;y2=new q1(function(m){if(!H1){var o=U();Q(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!K1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),r(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&K1(z.target)&&~s3.indexOf(z.attributeName))if(z.attributeName==="class"&&I3(z.target)){var v=F2(i1(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute(e1,V||o),L&&z.target.setAttribute(r1,L)}else O3(z.target)&&s(z.target)})}}),T&&y2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function X3(){y2&&y2.disconnect()}function Y3(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function $3(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=F2(i1(c));return s.prefix||(s.prefix=U()),a&&r&&(s.prefix=a,s.iconName=r),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=b3(s.prefix,c.innerText)||l1(s.prefix,j2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function K3(c){var a=Q(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return H.autoA11y&&(r?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(e||o2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Q3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=$3(c),e=r.iconName,s=r.prefix,i=r.rest,n=K3(c),f=Y2("parseNodeAttributes",{},c),l=a.styleParser?Y3(c):[];return t({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var J3=S.styles;function F4(c){var a=H.autoReplaceSvg==="nest"?Z1(c,{styleParser:!1}):Z1(c);return~a.extra.classes.indexOf(V4)?F("generateLayersText",c,a):F("generateSvgReplacementMutation",c,a)}var q=new Set;s1.map(function(c){q.add("fa-".concat(c))});Object.keys(i2[h]).map(q.add.bind(q));Object.keys(i2[p]).map(q.add.bind(q));q=t2(q);function c4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var r=M.documentElement.classList,e=function(z){return r.add("".concat(I1,"-").concat(z))},s=function(z){return r.remove("".concat(I1,"-").concat(z))},i=H.autoFetchSvg?q:s1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(J3));i.includes("fa")||i.push("fa");var n=[".".concat(V4,":not([").concat(_,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(_,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=Q(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),s("complete");else return Promise.resolve();var l=m1.begin("onTree"),m=f.reduce(function(o,z){try{var v=F4(z);v&&o.push(v)}catch(V){v4||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){A4(v,function(){e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function Z3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;F4(c).then(function(r){r&&A4([r],a)})}function c6(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:$2(a||{}),s=r.mask;return s&&(s=(s||{}).icon?s:$2(s||{})),c(e,t(t({},r),{},{mask:s}))}}var a6=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,s=e===void 0?y:e,i=r.symbol,n=i===void 0?!1:i,f=r.mask,l=f===void 0?null:f,m=r.maskId,o=m===void 0?null:m,z=r.title,v=z===void 0?null:z,V=r.titleId,L=V===void 0?null:V,N=r.classes,b=N===void 0?[]:N,k=r.attributes,u=k===void 0?{}:k,d=r.styles,w=d===void 0?{}:d;if(a){var g=a.prefix,I=a.iconName,O=a.icon;return T2(t({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:r}),H.autoA11y&&(v?u["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||o2()):(u["aria-hidden"]="true",u.focusable="false")),t1({icons:{main:K2(O),mask:l?K2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:I,transform:t(t({},y),s),symbol:n,title:v,maskId:o,titleId:L,extra:{attributes:u,styles:w,classes:b}})})}},e6={mixout:function(){return{icon:c6(a6)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=c4,r.nodeCallback=Z3,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,s=e===void 0?M:e,i=r.callback,n=i===void 0?function(){}:i;return c4(s,n)},a.generateSvgReplacementMutation=function(r,e){var s=e.iconName,i=e.title,n=e.titleId,f=e.prefix,l=e.transform,m=e.symbol,o=e.mask,z=e.maskId,v=e.extra;return new Promise(function(V,L){Promise.all([Q2(s,f),o.iconName?Q2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=c1(N,2),k=b[0],u=b[1];V([r,t1({icons:{main:k,mask:u},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.transform,f=r.styles,l=A2(f);l.length>0&&(s.style=l);var m;return n1(n)&&(m=F("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(m||i.icon),{children:e,attributes:s}}}},r6={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.classes,i=s===void 0?[]:s;return T2({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(t2(i)).join(" ")},children:n}]})}}}},s6={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.title,i=s===void 0?null:s,n=e.classes,f=n===void 0?[]:n,l=e.attributes,m=l===void 0?{}:l,o=e.styles,z=o===void 0?{}:o;return T2({type:"counter",content:r},function(){return j("beforeDOMElementCreation",{content:r,params:e}),R3({content:r.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(t2(f))}})})}}}},i6={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,i=s===void 0?y:s,n=e.title,f=n===void 0?null:n,l=e.classes,m=l===void 0?[]:l,o=e.attributes,z=o===void 0?{}:o,v=e.styles,V=v===void 0?{}:v;return T2({type:"text",content:r},function(){return j("beforeDOMElementCreation",{content:r,params:e}),Y1({content:r,transform:t(t({},y),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(t2(m))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var s=e.title,i=e.transform,n=e.extra,f=null,l=null;if(m4){var m=parseInt(getComputedStyle(r).fontSize,10),o=r.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,Y1({content:r.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},n6=new RegExp('"',"ug"),a4=[1105920,1112319];function f6(c){var a=c.replace(n6,""),r=u3(a,0),e=r>=a4[0]&&r<=a4[1],s=a.length===2?a[0]===a[1]:!1;return{value:j2(s?a[0]:a),isSecondary:e||s}}function e4(c,a){var r="".concat(K4).concat(a.replace(":","-"));return new Promise(function(e,s){if(c.getAttribute(r)!==null)return e();var i=Q(c.children),n=i.filter(function(O){return O.getAttribute(_2)===a})[0],f=E.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(a3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),e();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?n2[v][l[2].toLowerCase()]:e3[v][m],L=f6(z),N=L.value,b=L.isSecondary,k=l[0].startsWith("FontAwesome"),u=l1(V,N),d=u;if(k){var w=S3(N);w.iconName&&w.prefix&&(u=w.iconName,V=w.prefix)}if(u&&!b&&(!n||n.getAttribute(e1)!==V||n.getAttribute(r1)!==d)){c.setAttribute(r,d),n&&c.removeChild(n);var g=Q3(),I=g.extra;I.attributes[_2]=a,Q2(u,V).then(function(O){var B2=t1(t(t({},g),{},{icons:{main:O,mask:o1()},prefix:V,iconName:d,extra:I,watchable:!0})),B=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(B,c.firstChild):c.appendChild(B),B.outerHTML=B2.map(function(q4){return H2(q4)}).join(`
`),c.removeAttribute(r),e()}).catch(s)}else e()}else e()})}function l6(c){return Promise.all([e4(c,"::before"),e4(c,"::after")])}function o6(c){return c.parentNode!==document.head&&!~J4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(_2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function r4(c){if(T)return new Promise(function(a,r){var e=Q(c.querySelectorAll("*")).filter(o6).map(l6),s=m1.begin("searchPseudoElements");P4(),Promise.all(e).then(function(){s(),Z2(),a()}).catch(function(){s(),Z2(),r()})})}var t6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=r4,r}}},provides:function(a){a.pseudoElements2svg=function(r){var e=r.node,s=e===void 0?M:e;H.searchPseudoElements&&r4(s)}}},s4=!1,m6={mixout:function(){return{dom:{unwatch:function(){P4(),s4=!0}}}},hooks:function(){return{bootstrap:function(){J1(Y2("mutationObserverCallbacks",{}))},noAuto:function(){X3()},watch:function(r){var e=r.observeMutationsRoot;s4?Z2():J1(Y2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},i4=function(a){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return e.flipX=!0,e;if(n&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(n){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},r)},H6={mixout:function(){return{parse:{transform:function(r){return i4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-transform");return s&&(r.transform=i4(s)),r}}},provides:function(a){a.generateAbstractTransformGrouping=function(r){var e=r.main,s=r.transform,i=r.containerWidth,n=r.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:t(t({},e.icon.attributes),V.path)}]}]}}}},O2={x:0,y:0,width:"100%",height:"100%"};function n4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function z6(c){return c.tag==="g"?c.children:[c]}var v6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-mask"),i=s?F2(s.split(" ").map(function(n){return n.trim()})):o1();return i.prefix||(i.prefix=U()),r.mask=i,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(a){a.generateAbstractMask=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.mask,f=r.maskId,l=r.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=H3({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},O2),{},{fill:"white"})},N=o.children?{children:o.children.map(n4)}:{},b={tag:"g",attributes:t({},V.inner),children:[n4(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},k={tag:"g",attributes:t({},V.outer),children:[b]},u="mask-".concat(f||o2()),d="clip-".concat(f||o2()),w={tag:"mask",attributes:t(t({},O2),{},{id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:z6(v)},w]};return e.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")")},O2)}),{children:e,attributes:s}}}},V6={provides:function(a){var r=!1;E.matchMedia&&(r=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},h6={hooks:function(){return{parseNodeAttributes:function(r,e){var s=e.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return r.symbol=i,r}}}},M6=[V3,e6,r6,s6,i6,t6,m6,H6,v6,V6,h6];y3(M6,{mixoutsTo:x});var F6=x.noAuto,T6=x.config,B6=x.library,D6=x.dom,T4=x.parse,R6=x.findIconDefinition,E6=x.toHtml,B4=x.icon,U6=x.layer,p6=x.text,C6=x.counter;var L6=["*"],d6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},g6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},x6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(r=>a[r]?r:null).filter(r=>r)},N6=c=>c.prefix!==void 0&&c.iconName!==void 0,b6=(c,a)=>N6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},S6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=R2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),k6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...e){for(let s of e){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=R2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),w6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=h1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[z2]});let c=a;return c})(),y6=(()=>{let a=class a{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(D(C1),D(p1))},a.\u0275cmp=J({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[z2,a2],ngContentSelectors:L6,decls:1,vars:0,template:function(s,i){s&1&&(g1(),x1(0))},encapsulation:2});let c=a;return c})(),D4=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,s,i,n,f){this.sanitizer=e,this.config=s,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){g6();return}if(e){let s=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(s);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=b6(e,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(d6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?T4.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...x6(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,s){let i=B4(e,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(s){return new(s||a)(D(w1),D(S6),D(k6),D(w6,8),D(y6,8))},a.\u0275cmp=J({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(d1("innerHTML",i.renderedIconHTML,M1),u1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[z2,a2],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var R4=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=V1({type:a}),a.\u0275inj=v1({});let c=a;return c})();var E4={prefix:"far",iconName:"clipboard",icon:[384,512,[128203],"f328","M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]};var j6={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var U4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var r0=(()=>{let a=class a{constructor(){this.placeholder="",this.value="",this.iconClip=E4,this.iconCheck=U4,this.animationRunning=!1}copyClipboard(){return D2(this,null,function*(){if(!(!this.value||this.animationRunning))try{yield navigator.clipboard.writeText(this.value),this.changeIcon()}catch(e){console.error("Failed to copy: ",e)}})}changeIcon(){return D2(this,null,function*(){this.animationRunning=!0,yield this.delay(1e3),this.animationRunning=!1})}delay(e){return new Promise(s=>setTimeout(s,e))}onChange(e){}onTouched(){}writeValue(e){this.value=e}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}onInputChange(e){this.onChange(e),this.onTouched()}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=J({type:a,selectors:[["custom-textarea"]],inputs:{id:"id",placeholder:"placeholder",label:"label"},standalone:!0,features:[S1([{provide:y1,useExisting:z1(()=>a),multi:!0}]),a2],decls:7,vars:11,consts:[[1,"label-container",3,"for"],[1,"textarea-container"],["rows","10",1,"textarea-container__area","textarea",3,"id","placeholder","ngModel","ngModelChange"],[1,"textarea-container__button","icon-button",3,"click"],[1,"icon-button__icon-custom",3,"icon"]],template:function(s,i){s&1&&(V2(0,"label",0),N1(1),h2(),V2(2,"div",1)(3,"textarea",2),E2("ngModelChange",function(f){return i.value=f})("ngModelChange",function(f){return i.onInputChange(f)}),h2(),V2(4,"button",3),E2("click",function(){return i.copyClipboard()}),L1(5,"fa-icon",4)(6,"fa-icon",4),h2()()),s&2&&(c2("for",i.id),Z(1),b1(i.label),Z(2),c2("id",i.id)("placeholder",i.placeholder)("ngModel",i.value),Z(2),v2("icon-button__icon--visible",!i.animationRunning),c2("icon",i.iconClip),Z(1),v2("icon-button__icon--visible",i.animationRunning),c2("icon",i.iconCheck))},dependencies:[k1,T1,A1,P1,F1,R4,D4],styles:[".label-container[_ngcontent-%COMP%]{display:block;margin:10px 0}.textarea-container[_ngcontent-%COMP%]{position:relative}.textarea-container__button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:5px}.textarea-container__area[_ngcontent-%COMP%]{padding:10px 55px 10px 10px}.icon-button__icon-custom[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}"]});let c=a;return c})();export{k6 as a,D4 as b,R4 as c,E4 as d,j6 as e,U4 as f,r0 as g};
