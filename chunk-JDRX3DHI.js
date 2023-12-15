import{X as a1,Y as e1,ea as r1}from"./chunk-RXD3M7OQ.js";function s1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?s1(Object(e),!0).forEach(function(r){u(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):s1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function u2(c){"@babel/helpers - typeof";return u2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u2(c)}function s3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function i3(c,a,e){return a&&i1(c.prototype,a),e&&i1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function q2(c,a){return f3(c)||o3(c,a)||y1(c,a)||m3()}function i2(c){return n3(c)||l3(c)||y1(c)||t3()}function n3(c){if(Array.isArray(c))return A2(c)}function f3(c){if(Array.isArray(c))return c}function l3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function o3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,f;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(l){n=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw f}}return r}}function y1(c,a){if(c){if(typeof c=="string")return A2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A2(c,a)}}function A2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function t3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n1=function(){},W2={},A1={},P1=null,T1={mark:n1,measure:n1};try{typeof window<"u"&&(W2=window),typeof document<"u"&&(A1=document),typeof MutationObserver<"u"&&(P1=MutationObserver),typeof performance<"u"&&(T1=performance)}catch{}var H3=W2.navigator||{},f1=H3.userAgent,l1=f1===void 0?"":f1,R=W2,M=A1,o1=P1,l2=T1,U4=!!R.document,B=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",B1=~l1.indexOf("MSIE")||~l1.indexOf("Trident/"),o2,t2,m2,H2,z2,A="___FONT_AWESOME___",P2=16,F1="fa",D1="svg-inline--fa",G="data-fa-i2svg",T2="data-fa-pseudo-element",z3="data-fa-pseudo-element-pending",G2="data-prefix",j2="data-icon",t1="fontawesome-i2svg",v3="async",V3=["HTML","HEAD","STYLE","SCRIPT"],R1=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",_2=[h,p];function n2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var c2=n2((o2={},u(o2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),u(o2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),o2)),a2=n2((t2={},u(t2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(t2,p,{solid:"fass",regular:"fasr",light:"fasl"}),t2)),e2=n2((m2={},u(m2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(m2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),m2)),h3=n2((H2={},u(H2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(H2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),H2)),M3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,E1="fa-layers-text",p3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u3=n2((z2={},u(z2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(z2,p,{900:"fass",400:"fasr",300:"fasl"}),z2)),U1=[1,2,3,4,5,6,7,8,9,10],C3=U1.concat([11,12,13,14,15,16,17,18,19,20]),L3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r2=new Set;Object.keys(a2[h]).map(r2.add.bind(r2));Object.keys(a2[p]).map(r2.add.bind(r2));var d3=[].concat(_2,i2(r2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(U1.map(function(c){return"".concat(c,"x")})).concat(C3.map(function(c){return"w-".concat(c)})),J=R.FontAwesomeConfig||{};function g3(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function x3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(m1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],m1.forEach(function(c){var a=q2(c,2),e=a[0],r=a[1],s=x3(g3(e));s!=null&&(J[r]=s)}));var m1,I1={styleDefault:"solid",familyDefault:"classic",cssPrefix:F1,replacementClass:D1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var $=t(t({},I1),J);$.autoReplaceSvg||($.observeMutations=!1);var H={};Object.keys(I1).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){$[c]=e,Z.forEach(function(r){return r(H)})},get:function(){return $[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){$.cssPrefix=a,Z.forEach(function(e){return e(H)})},get:function(){return $.cssPrefix}});R.FontAwesomeConfig=H;var Z=[];function N3(c){return Z.push(c),function(){Z.splice(Z.indexOf(c),1)}}var D=P2,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b3(c){if(!(!c||!B)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return M.head.insertBefore(a,r),c}}var S3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s2(){for(var c=12,a="";c-- >0;)a+=S3[Math.random()*62|0];return a}function Q(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function X2(c){return c.classList?Q(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function O1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function k3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(O1(c[e]),'" ')},"").trim()}function d2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function Y2(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function w3(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function y3(c){var a=c.transform,e=c.width,r=e===void 0?P2:e,s=c.height,n=s===void 0?P2:s,i=c.startCentered,f=i===void 0?!1:i,l="";return f&&B1?l+="translate(".concat(a.x/D-r/2,"em, ").concat(a.y/D-n/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):l+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),l+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var A3=`:root, :host {
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
}`;function q1(){var c=F1,a=D1,e=H.cssPrefix,r=H.replacementClass,s=A3;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var H1=!1;function S2(){H.autoAddCss&&!H1&&(b3(q1()),H1=!0)}var P3={mixout:function(){return{dom:{css:q1,insertCss:S2}}},hooks:function(){return{beforeDOMElementCreation:function(){S2()},beforeI2svg:function(){S2()}}}},P=R||{};P[A]||(P[A]={});P[A].styles||(P[A].styles={});P[A].hooks||(P[A].hooks={});P[A].shims||(P[A].shims=[]);var S=P[A],W1=[],T3=function c(){M.removeEventListener("DOMContentLoaded",c),C2=1,W1.map(function(a){return a()})},C2=!1;B&&(C2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),C2||M.addEventListener("DOMContentLoaded",T3));function B3(c){B&&(C2?setTimeout(c,0):W1.push(c))}function f2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?O1(c):"<".concat(a," ").concat(k3(r),">").concat(n.map(f2).join(""),"</").concat(a,">")}function z1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var F3=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},k2=function(a,e,r,s){var n=Object.keys(a),i=n.length,f=s!==void 0?F3(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[n[0]]):(l=0,o=r);l<i;l++)m=n[l],o=f(o,a[m],m,a);return o};function D3(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function B2(c){var a=D3(c);return a.length===1?a[0].toString(16):null}function R3(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function v1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function F2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=v1(a);typeof S.hooks.addPack=="function"&&!s?S.hooks.addPack(c,v1(a)):S.styles[c]=t(t({},S.styles[c]||{}),n),c==="fas"&&F2("fa",a)}var v2,V2,h2,_=S.styles,E3=S.shims,U3=(v2={},u(v2,h,Object.values(e2[h])),u(v2,p,Object.values(e2[p])),v2),$2=null,G1={},j1={},_1={},X1={},Y1={},I3=(V2={},u(V2,h,Object.keys(c2[h])),u(V2,p,Object.keys(c2[p])),V2);function O3(c){return~d3.indexOf(c)}function q3(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!O3(s)?s:null}var $1=function(){var a=function(n){return k2(_,function(i,f,l){return i[l]=k2(f,n,{}),i},{})};G1=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var f=n[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=i})}return s}),j1=a(function(s,n,i){if(s[i]=i,n[2]){var f=n[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=i})}return s}),Y1=a(function(s,n,i){var f=n[2];return s[i]=i,f.forEach(function(l){s[l]=i}),s});var e="far"in _||H.autoFetchSvg,r=k2(E3,function(s,n){var i=n[0],f=n[1],l=n[2];return f==="far"&&!e&&(f="fas"),typeof i=="string"&&(s.names[i]={prefix:f,iconName:l}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});_1=r.names,X1=r.unicodes,$2=g2(H.styleDefault,{family:H.familyDefault})};N3(function(c){$2=g2(c.styleDefault,{family:H.familyDefault})});$1();function Q2(c,a){return(G1[c]||{})[a]}function W3(c,a){return(j1[c]||{})[a]}function W(c,a){return(Y1[c]||{})[a]}function Q1(c){return _1[c]||{prefix:null,iconName:null}}function G3(c){var a=X1[c],e=Q2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function E(){return $2}var K2=function(){return{prefix:null,iconName:null,rest:[]}};function g2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=c2[r][c],n=a2[r][c]||a2[r][s],i=c in S.styles?c:null;return n||i||null}var V1=(h2={},u(h2,h,Object.keys(e2[h])),u(h2,p,Object.keys(e2[p])),h2);function x2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},u(a,h,"".concat(H.cssPrefix,"-").concat(h)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),i=null,f=h;(c.includes(n[h])||c.some(function(m){return V1[h].includes(m)}))&&(f=h),(c.includes(n[p])||c.some(function(m){return V1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=q3(H.cssPrefix,o);if(_[o]?(o=U3[f].includes(o)?h3[f][o]:o,i=o,m.prefix=o):I3[f].indexOf(o)>-1?(i=o,m.prefix=g2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==n[h]&&o!==n[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=i==="fa"?Q1(m.iconName):{},V=W(m.prefix,m.iconName);v.prefix&&(i=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!_.far&&_.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},K2());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(_.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=W(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=E()||"fas"),l}var j3=function(){function c(){s3(this,c),this.definitions={}}return i3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),i[f]),F2(f,i[f]);var l=e2[h][f];l&&F2(l,i[f]),$1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],f=i.prefix,l=i.iconName,m=i.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),h1=[],X={},Y={},_3=Object.keys(Y);function X3(c,a){var e=a.mixoutsTo;return h1=c,X={},Object.keys(Y).forEach(function(r){_3.indexOf(r)===-1&&delete Y[r]}),h1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),u2(s[i])==="object"&&Object.keys(s[i]).forEach(function(f){e[i]||(e[i]={}),e[i][f]=s[i][f]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){X[i]||(X[i]=[]),X[i].push(n[i])})}r.provides&&r.provides(Y)}),e}function D2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=X[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function j(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=X[c]||[];s.forEach(function(n){n.apply(null,e)})}function T(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Y[c]?Y[c].apply(null,a):void 0}function R2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||E();if(a)return a=W(e,a)||a,z1(K1.definitions,e,a)||z1(S.styles,e,a)}var K1=new j3,Y3=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,j("noAuto")},$3={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(j("beforeI2svg",a),T("pseudoElements2svg",a),T("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,B3(function(){K3({autoReplaceSvgRoot:e}),j("watch",a)})}},Q3={icon:function(a){if(a===null)return null;if(u2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=g2(a[0]);return{prefix:r,iconName:W(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(M3))){var s=x2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||E(),iconName:W(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=E();return{prefix:n,iconName:W(n,a)||a}}}},x={noAuto:Y3,config:H,dom:$3,parse:Q3,library:K1,findIconDefinition:R2,toHtml:f2},K3=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(S.styles).length>0||H.autoFetchSvg)&&B&&H.autoReplaceSvg&&x.dom.i2svg({node:r})};function N2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return f2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function J3(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(Y2(i)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=d2(t(t({},n),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Z3(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:i}),children:r}]}]}function J2(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,L=r.found?r:e,N=L.width,b=L.height,k=s==="fak",C=[H.replacementClass,n?"".concat(H.cssPrefix,"-").concat(n):""].filter(function(F){return z.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(z.classes).join(" "),d={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(b)})},w=k&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/b*16*.0625,"em")}:{};V&&(d.attributes[G]=""),l&&(d.children.push({tag:"title",attributes:{id:d.attributes["aria-labelledby"]||"title-".concat(o||s2())},children:[l]}),delete d.attributes.title);var g=t(t({},d),{},{prefix:s,iconName:n,main:e,mask:r,maskId:m,transform:i,symbol:f,styles:t(t({},w),z.styles)}),I=r.found&&e.found?T("generateAbstractMask",g)||{children:[],attributes:{}}:T("generateAbstractIcon",g)||{children:[],attributes:{}},O=I.children,b2=I.attributes;return g.children=O,g.attributes=b2,f?Z3(g):J3(g)}function M1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(m[G]="");var o=t({},i.styles);Y2(s)&&(o.transform=y3({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=d2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),n&&v.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),v}function c4(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=d2(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var w2=S.styles;function E2(c){var a=c[0],e=c[1],r=c.slice(4),s=q2(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var a4={found:!1,width:512,height:512};function e4(c,a){!R1&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function U2(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=E()),new Promise(function(r,s){var n={found:!1,width:512,height:512,icon:T("missingIconAbstract")||{}};if(e==="fa"){var i=Q1(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&w2[a]&&w2[a][c]){var f=w2[a][c];return r(E2(f))}e4(c,a),r(t(t({},a4),{},{icon:H.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}var p1=function(){},I2=H.measurePerformance&&l2&&l2.mark&&l2.measure?l2:{mark:p1,measure:p1},K='FA "6.4.2"',r4=function(a){return I2.mark("".concat(K," ").concat(a," begins")),function(){return J1(a)}},J1=function(a){I2.mark("".concat(K," ").concat(a," ends")),I2.measure("".concat(K," ").concat(a),"".concat(K," ").concat(a," begins"),"".concat(K," ").concat(a," ends"))},Z2={begin:r4,end:J1},M2=function(){};function u1(c){var a=c.getAttribute?c.getAttribute(G):null;return typeof a=="string"}function s4(c){var a=c.getAttribute?c.getAttribute(G2):null,e=c.getAttribute?c.getAttribute(j2):null;return a&&e}function i4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function n4(){if(H.autoReplaceSvg===!0)return p2.replace;var c=p2[H.autoReplaceSvg];return c||p2.replace}function f4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function l4(c){return M.createElement(c)}function Z1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?f4:l4:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(Z1(i,{ceFn:r}))}),s}function o4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var p2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(Z1(s),e)}),e.getAttribute(G)===null&&H.keepOriginalSource){var r=M.createComment(o4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~X2(e).indexOf(H.replacementClass))return p2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(f){return f2(f)}).join(`
`);e.setAttribute(G,""),e.innerHTML=i}};function C1(c){c()}function c3(c,a){var e=typeof a=="function"?a:M2;if(c.length===0)e();else{var r=C1;H.mutateApproach===v3&&(r=R.requestAnimationFrame||C1),r(function(){var s=n4(),n=Z2.begin("mutate");c.map(s),n(),e()})}}var c1=!1;function a3(){c1=!0}function O2(){c1=!1}var L2=null;function L1(c){if(o1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?M2:a,r=c.nodeCallback,s=r===void 0?M2:r,n=c.pseudoElementsCallback,i=n===void 0?M2:n,f=c.observeMutationsRoot,l=f===void 0?M:f;L2=new o1(function(m){if(!c1){var o=E();Q(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!u1(z.addedNodes[0])&&(H.searchPseudoElements&&i(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&i(z.target.parentNode),z.type==="attributes"&&u1(z.target)&&~L3.indexOf(z.attributeName))if(z.attributeName==="class"&&s4(z.target)){var v=x2(X2(z.target)),V=v.prefix,L=v.iconName;z.target.setAttribute(G2,V||o),L&&z.target.setAttribute(j2,L)}else i4(z.target)&&s(z.target)})}}),B&&L2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function t4(){L2&&L2.disconnect()}function m4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],f=n.slice(1);return i&&f.length>0&&(r[i]=f.join(":").trim()),r},{})),e}function H4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=x2(X2(c));return s.prefix||(s.prefix=E()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=W3(s.prefix,c.innerText)||Q2(s.prefix,B2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function z4(c){var a=Q(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||s2()):(a["aria-hidden"]="true",a.focusable="false")),a}function v4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function d1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=H4(c),r=e.iconName,s=e.prefix,n=e.rest,i=z4(c),f=D2("parseNodeAttributes",{},c),l=a.styleParser?m4(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},f)}var V4=S.styles;function e3(c){var a=H.autoReplaceSvg==="nest"?d1(c,{styleParser:!1}):d1(c);return~a.extra.classes.indexOf(E1)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}var U=new Set;_2.map(function(c){U.add("fa-".concat(c))});Object.keys(c2[h]).map(U.add.bind(U));Object.keys(c2[p]).map(U.add.bind(U));U=i2(U);function g1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=M.documentElement.classList,r=function(z){return e.add("".concat(t1,"-").concat(z))},s=function(z){return e.remove("".concat(t1,"-").concat(z))},n=H.autoFetchSvg?U:_2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(V4));n.includes("fa")||n.push("fa");var i=[".".concat(E1,":not([").concat(G,"])")].concat(n.map(function(o){return".".concat(o,":not([").concat(G,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=Q(c.querySelectorAll(i))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=Z2.begin("onTree"),m=f.reduce(function(o,z){try{var v=e3(z);v&&o.push(v)}catch(V){R1||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){c3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function h4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;e3(c).then(function(e){e&&c3([e],a)})}function M4(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:R2(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:R2(s||{})),c(r,t(t({},e),{},{mask:s}))}}var p4=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?y:r,n=e.symbol,i=n===void 0?!1:n,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,L=V===void 0?null:V,N=e.classes,b=N===void 0?[]:N,k=e.attributes,C=k===void 0?{}:k,d=e.styles,w=d===void 0?{}:d;if(a){var g=a.prefix,I=a.iconName,O=a.icon;return N2(t({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(L||s2()):(C["aria-hidden"]="true",C.focusable="false")),J2({icons:{main:E2(O),mask:l?E2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:I,transform:t(t({},y),s),symbol:i,title:v,maskId:o,titleId:L,extra:{attributes:C,styles:w,classes:b}})})}},u4={mixout:function(){return{icon:M4(p4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=g1,e.nodeCallback=h4,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,n=e.callback,i=n===void 0?function(){}:n;return g1(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,z=r.maskId,v=r.extra;return new Promise(function(V,L){Promise.all([U2(s,f),o.iconName?U2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var b=q2(N,2),k=b[0],C=b[1];V([e,J2({icons:{main:k,mask:C},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:n,titleId:i,extra:v,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,f=e.styles,l=d2(f);l.length>0&&(s.style=l);var m;return Y2(i)&&(m=T("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(m||n.icon),{children:r,attributes:s}}}},C4={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return N2({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(f){Array.isArray(f)?f.map(function(l){i=i.concat(l.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(i2(n)).join(" ")},children:i}]})}}}},L4={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,f=i===void 0?[]:i,l=r.attributes,m=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return N2({type:"counter",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),c4({content:e.toString(),title:n,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(i2(f))}})})}}}},d4={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?y:s,i=r.title,f=i===void 0?null:i,l=r.classes,m=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return N2({type:"text",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),M1({content:e,transform:t(t({},y),n),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(i2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,f=null,l=null;if(B1){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,M1({content:e.innerHTML,width:f,height:l,transform:n,title:s,extra:i,watchable:!0})])}}},g4=new RegExp('"',"ug"),x1=[1105920,1112319];function x4(c){var a=c.replace(g4,""),e=R3(a,0),r=e>=x1[0]&&e<=x1[1],s=a.length===2?a[0]===a[1]:!1;return{value:B2(s?a[0]:a),isSecondary:r||s}}function N1(c,a){var e="".concat(z3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=Q(c.children),i=n.filter(function(O){return O.getAttribute(T2)===a})[0],f=R.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(p3),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(i&&!l)return c.removeChild(i),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?a2[v][l[2].toLowerCase()]:u3[v][m],L=x4(z),N=L.value,b=L.isSecondary,k=l[0].startsWith("FontAwesome"),C=Q2(V,N),d=C;if(k){var w=G3(N);w.iconName&&w.prefix&&(C=w.iconName,V=w.prefix)}if(C&&!b&&(!i||i.getAttribute(G2)!==V||i.getAttribute(j2)!==d)){c.setAttribute(e,d),i&&c.removeChild(i);var g=v4(),I=g.extra;I.attributes[T2]=a,U2(C,V).then(function(O){var b2=J2(t(t({},g),{},{icons:{main:O,mask:K2()},prefix:V,iconName:d,extra:I,watchable:!0})),F=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(F,c.firstChild):c.appendChild(F),F.outerHTML=b2.map(function(r3){return f2(r3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function N4(c){return Promise.all([N1(c,"::before"),N1(c,"::after")])}function b4(c){return c.parentNode!==document.head&&!~V3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(T2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function b1(c){if(B)return new Promise(function(a,e){var r=Q(c.querySelectorAll("*")).filter(b4).map(N4),s=Z2.begin("searchPseudoElements");a3(),Promise.all(r).then(function(){s(),O2(),a()}).catch(function(){s(),O2(),e()})})}var S4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=b1,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;H.searchPseudoElements&&b1(s)}}},S1=!1,k4={mixout:function(){return{dom:{unwatch:function(){a3(),S1=!0}}}},hooks:function(){return{bootstrap:function(){L1(D2("mutationObserverCallbacks",{}))},noAuto:function(){t4()},watch:function(e){var r=e.observeMutationsRoot;S1?O2():L1(D2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},k1=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var n=s.toLowerCase().split("-"),i=n[0],f=n.slice(1).join("-");if(i&&f==="h")return r.flipX=!0,r;if(i&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(i){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},w4={mixout:function(){return{parse:{transform:function(e){return k1(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=k1(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,n=e.containerWidth,i=e.iconWidth,f={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(i/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},y2={x:0,y:0,width:"100%",height:"100%"};function w1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function y4(c){return c.tag==="g"?c.children:[c]}var A4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),n=s?x2(s.split(" ").map(function(i){return i.trim()})):K2();return n.prefix||(n.prefix=E()),e.mask=n,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.mask,f=e.maskId,l=e.transform,m=n.width,o=n.icon,z=i.width,v=i.icon,V=w3({transform:l,containerWidth:z,iconWidth:m}),L={tag:"rect",attributes:t(t({},y2),{},{fill:"white"})},N=o.children?{children:o.children.map(w1)}:{},b={tag:"g",attributes:t({},V.inner),children:[w1(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},k={tag:"g",attributes:t({},V.outer),children:[b]},C="mask-".concat(f||s2()),d="clip-".concat(f||s2()),w={tag:"mask",attributes:t(t({},y2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,k]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:y4(v)},w]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(C,")")},y2)}),{children:r,attributes:s}}}},P4={provides:function(a){var e=!1;R.matchMedia&&(e=R.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=t(t({},n),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},T4={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),n=s===null?!1:s===""?!0:s;return e.symbol=n,e}}}},B4=[P3,u4,C4,L4,d4,S4,k4,w4,A4,P4,T4];X3(B4,{mixoutsTo:x});var I4=x.noAuto,O4=x.config,q4=x.library,W4=x.dom,F4=x.parse,G4=x.findIconDefinition,j4=x.toHtml,D4=x.icon,_4=x.layer,R4=x.text,E4=x.counter;var m6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let s of r){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let n of s.icon[2])typeof n=="string"&&(this.definitions[s.prefix][n]=s)}}addIconPacks(...r){for(let s of r){let n=Object.keys(s).map(i=>s[i]);this.addIcons(...n)}}getIconDefinition(r,s){return r in this.definitions&&s in this.definitions[r]?this.definitions[r][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=a1({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var H6=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=r1({type:a}),a.\u0275inj=e1({});let c=a;return c})();var v6={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var V6={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};export{m6 as a,H6 as b,v6 as c,V6 as d};
