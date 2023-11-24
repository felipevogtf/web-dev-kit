import{a as me,b as Ae}from"./chunk-TIUIOPJX.js";import{a as pe,c as I,e as fe,g as ge}from"./chunk-QUJM2K5G.js";import{c as le,j as ce,m as de,n as he,o as ue}from"./chunk-SM4CZLVT.js";import{$ as b,$a as P,E as D,Ha as Y,Ja as B,La as H,Na as u,Oa as c,Qa as j,Ra as C,Sa as V,U as T,Ub as oe,Vb as ae,Wa as Q,Wb as S,X as Z,Xa as m,Ya as K,Za as M,aa as R,ab as X,ba as W,da as x,ea as v,eb as d,f as k,fb as g,gb as A,hb as q,i as J,kb as z,l as O,lb as h,mb as ee,nb as te,ob as N,ub as ie,wb as ne,xb as se,zb as re}from"./chunk-AF3MTKOE.js";var L=(()=>{let s=class s{constructor(e){this.library=e,this.library.addIcons(fe)}};s.\u0275fac=function(t){return new(t||s)(c(pe))},s.\u0275cmp=b({type:s,selectors:[["html-viewer"]],inputs:{html:"html",width:"width",height:"height"},standalone:!0,features:[ie],decls:1,vars:1,consts:[[1,"html-viewer",3,"innerHTML"]],template:function(t,n){t&1&&A(0,"div",0),t&2&&m("innerHTML",n.html,Y)},dependencies:[S,I],styles:[".html-viewer[_ngcontent-%COMP%]{padding:15px;background-color:var(--bg-secondary);min-height:100%}"]});let i=s;return i})();var Pe=["gutterEls"];function we(i,s){if(i&1){let l=q();d(0,"div",2,3),z("keydown",function(t){x(l);let n=h().index,r=h();return v(r.startKeyboardDrag(t,n*2+1,n+1))})("mousedown",function(t){x(l);let n=h().index,r=h();return v(r.startMouseDrag(t,n*2+1,n+1))})("touchstart",function(t){x(l);let n=h().index,r=h();return v(r.startMouseDrag(t,n*2+1,n+1))})("mouseup",function(t){x(l);let n=h().index,r=h();return v(r.clickGutter(t,n+1))})("touchend",function(t){x(l);let n=h().index,r=h();return v(r.clickGutter(t,n+1))}),A(2,"div",4),g()}if(i&2){let l=h(),e=l.index,t=l.$implicit,n=h();K("flex-basis",n.gutterSize,"px")("order",e*2+1),Q("aria-label",n.gutterAriaLabel)("aria-orientation",n.direction)("aria-valuemin",t.minSize)("aria-valuemax",t.maxSize)("aria-valuenow",t.size)("aria-valuetext",n.getAriaAreaSizeText(t.size))}}function Ee(i,s){if(i&1&&P(0,we,3,10,"div",1),i&2){let l=s.last;m("ngIf",l===!1)}}var ke=["*"];function w(i){if(i.changedTouches!==void 0&&i.changedTouches.length>0)return{x:i.changedTouches[0].clientX,y:i.changedTouches[0].clientY};if(i.clientX!==void 0&&i.clientY!==void 0)return{x:i.clientX,y:i.clientY};if(i.currentTarget!==void 0){let s=i.currentTarget;return{x:s.offsetLeft,y:s.offsetTop}}return null}function _e(i,s,l){return Math.abs(i.x-s.x)<=l&&Math.abs(i.y-s.y)<=l}function Oe(i,s){if(s==="horizontal")switch(i.key){case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":break;default:return null}if(s==="vertical")switch(i.key){case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":break;default:return null}let l=i.currentTarget,e=i.key==="PageUp"||i.key==="PageDown"?50*10:50,t=l.offsetLeft,n=l.offsetTop;switch(i.key){case"ArrowLeft":t-=e;break;case"ArrowRight":t+=e;break;case"ArrowUp":n-=e;break;case"ArrowDown":n+=e;break;case"PageUp":s==="vertical"?n-=e:t+=e;break;case"PageDown":s==="vertical"?n+=e:t-=e;break;default:return null}return{x:t,y:n}}function be(i,s){let l=i.nativeElement.getBoundingClientRect();return s==="horizontal"?l.width:l.height}function E(i){return typeof i=="boolean"?i:i!=="false"}function _(i,s){return i==null?s:(i=Number(i),!isNaN(i)&&i>=0?i:s)}function xe(i,s){if(i==="percent"){let l=s.reduce((t,n)=>n!=="*"?t+n:t,0),e=s.filter(t=>t==="*");return e.length>1?!1:(e.length===1||l>99.9)&&l<100.1}if(i==="pixel")return s.filter(l=>l==="*").length===1}function F(i){return i.size==="*"?null:i.component.lockSize===!0?i.size:i.component.minSize===null?null:i.component.minSize>i.size?i.size:i.component.minSize}function G(i){return i.size==="*"?null:i.component.lockSize===!0?i.size:i.component.maxSize===null?null:i.component.maxSize<i.size?i.size:i.component.maxSize}function y(i,s,l,e){return s.reduce((t,n)=>{let r=De(i,n,t.remain,e);return t.list.push(r),t.remain=r.pixelRemain,t},{remain:l,list:[]})}function De(i,s,l,e){if(l===0)return{areaSnapshot:s,pixelAbsorb:0,percentAfterAbsorption:s.sizePercentAtStart,pixelRemain:0};if(s.sizePixelAtStart===0&&l<0)return{areaSnapshot:s,pixelAbsorb:0,percentAfterAbsorption:0,pixelRemain:l};if(i==="percent")return Te(s,l,e);if(i==="pixel")return Re(s,l,e)}function Te(i,s,l){let t=(i.sizePixelAtStart+s)/l*100;if(s>0){if(i.area.maxSize!==null&&t>i.area.maxSize){let n=i.area.maxSize/100*l;return{areaSnapshot:i,pixelAbsorb:n,percentAfterAbsorption:i.area.maxSize,pixelRemain:i.sizePixelAtStart+s-n}}return{areaSnapshot:i,pixelAbsorb:s,percentAfterAbsorption:t>100?100:t,pixelRemain:0}}else if(s<0){if(i.area.minSize!==null&&t<i.area.minSize){let n=i.area.minSize/100*l;return{areaSnapshot:i,pixelAbsorb:n,percentAfterAbsorption:i.area.minSize,pixelRemain:i.sizePixelAtStart+s-n}}else if(t<0)return{areaSnapshot:i,pixelAbsorb:-i.sizePixelAtStart,percentAfterAbsorption:0,pixelRemain:s+i.sizePixelAtStart};return{areaSnapshot:i,pixelAbsorb:s,percentAfterAbsorption:t,pixelRemain:0}}}function Re(i,s,l){let e=i.sizePixelAtStart+s;if(s>0)return i.area.maxSize!==null&&e>i.area.maxSize?{areaSnapshot:i,pixelAbsorb:i.area.maxSize-i.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:e-i.area.maxSize}:{areaSnapshot:i,pixelAbsorb:s,percentAfterAbsorption:-1,pixelRemain:0};if(s<0)return i.area.minSize!==null&&e<i.area.minSize?{areaSnapshot:i,pixelAbsorb:i.area.minSize+s-e,percentAfterAbsorption:-1,pixelRemain:e-i.area.minSize}:e<0?{areaSnapshot:i,pixelAbsorb:-i.sizePixelAtStart,percentAfterAbsorption:-1,pixelRemain:s+i.sizePixelAtStart}:{areaSnapshot:i,pixelAbsorb:s,percentAfterAbsorption:-1,pixelRemain:0}}function ve(i,s){s.areaSnapshot.area.size!=="*"&&(i==="percent"?s.areaSnapshot.area.size=s.percentAfterAbsorption:i==="pixel"&&(s.areaSnapshot.area.size=s.areaSnapshot.sizePixelAtStart+s.pixelAbsorb))}var je=new Z("angular-split-global-config"),$=(()=>{let s=class s{set direction(e){this._direction=e==="vertical"?"vertical":"horizontal",this.renderer.addClass(this.elRef.nativeElement,`as-${this._direction}`),this.renderer.removeClass(this.elRef.nativeElement,`as-${this._direction==="vertical"?"horizontal":"vertical"}`),this.build(!1,!1)}get direction(){return this._direction}set unit(e){this._unit=e==="pixel"?"pixel":"percent",this.renderer.addClass(this.elRef.nativeElement,`as-${this._unit}`),this.renderer.removeClass(this.elRef.nativeElement,`as-${this._unit==="pixel"?"percent":"pixel"}`),this.build(!1,!0)}get unit(){return this._unit}set gutterSize(e){this._gutterSize=_(e,11),this.build(!1,!1)}get gutterSize(){return this._gutterSize}set gutterStep(e){this._gutterStep=_(e,1)}get gutterStep(){return this._gutterStep}set restrictMove(e){this._restrictMove=E(e)}get restrictMove(){return this._restrictMove}set useTransition(e){this._useTransition=E(e),this._useTransition?this.renderer.addClass(this.elRef.nativeElement,"as-transition"):this.renderer.removeClass(this.elRef.nativeElement,"as-transition")}get useTransition(){return this._useTransition}set disabled(e){this._disabled=E(e),this._disabled?this.renderer.addClass(this.elRef.nativeElement,"as-disabled"):this.renderer.removeClass(this.elRef.nativeElement,"as-disabled")}get disabled(){return this._disabled}set dir(e){this._dir=e==="rtl"?"rtl":"ltr",this.renderer.setAttribute(this.elRef.nativeElement,"dir",this._dir)}get dir(){return this._dir}set gutterDblClickDuration(e){this._gutterDblClickDuration=_(e,0)}get gutterDblClickDuration(){return this._gutterDblClickDuration}get transitionEnd(){return new J(e=>this.transitionEndSubscriber=e).pipe(D(20))}constructor(e,t,n,r,o){this.ngZone=e,this.elRef=t,this.cdRef=n,this.renderer=r,this.gutterClickDeltaPx=2,this._config={direction:"horizontal",unit:"percent",gutterSize:11,gutterStep:1,restrictMove:!1,useTransition:!1,disabled:!1,dir:"ltr",gutterDblClickDuration:0},this.dragStart=new C(!1),this.dragEnd=new C(!1),this.gutterClick=new C(!1),this.gutterDblClick=new C(!1),this.dragProgressSubject=new O,this.dragProgress$=this.dragProgressSubject.asObservable(),this.isDragging=!1,this.isWaitingClear=!1,this.isWaitingInitialMove=!1,this.dragListeners=[],this.snapshot=null,this.startPoint=null,this.endPoint=null,this.displayedAreas=[],this.hiddenAreas=[],this._clickTimeout=null,this.direction=this._direction,this._config=o?Object.assign(this._config,o):this._config,Object.keys(this._config).forEach(a=>{this[a]=this._config[a]})}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>this.renderer.addClass(this.elRef.nativeElement,"as-init"))})}getNbGutters(){return this.displayedAreas.length===0?0:this.displayedAreas.length-1}addArea(e){let t={component:e,order:0,size:0,minSize:null,maxSize:null,sizeBeforeCollapse:null,gutterBeforeCollapse:0};e.visible===!0?(this.displayedAreas.push(t),this.build(!0,!0)):this.hiddenAreas.push(t)}removeArea(e){if(this.displayedAreas.some(t=>t.component===e)){let t=this.displayedAreas.find(n=>n.component===e);this.displayedAreas.splice(this.displayedAreas.indexOf(t),1),this.build(!0,!0)}else if(this.hiddenAreas.some(t=>t.component===e)){let t=this.hiddenAreas.find(n=>n.component===e);this.hiddenAreas.splice(this.hiddenAreas.indexOf(t),1)}}updateArea(e,t,n){e.visible===!0&&this.build(t,n)}showArea(e){let t=this.hiddenAreas.find(r=>r.component===e);if(t===void 0)return;let n=this.hiddenAreas.splice(this.hiddenAreas.indexOf(t),1);this.displayedAreas.push(...n),this.build(!0,!0)}hideArea(e){let t=this.displayedAreas.find(r=>r.component===e);if(t===void 0)return;let n=this.displayedAreas.splice(this.displayedAreas.indexOf(t),1);n.forEach(r=>{r.order=0,r.size=0}),this.hiddenAreas.push(...n),this.build(!0,!0)}getVisibleAreaSizes(){return this.displayedAreas.map(e=>e.size)}setVisibleAreaSizes(e){if(e.length!==this.displayedAreas.length)return!1;let t=e.map(r=>_(r,"*"));return xe(this.unit,t)===!1?!1:(this.displayedAreas.forEach((r,o)=>r.component._size=t[o]),this.build(!1,!0),!0)}build(e,t){if(this.stopDragging(),e===!0&&(this.displayedAreas.every(n=>n.component.order!==null)&&this.displayedAreas.sort((n,r)=>n.component.order-r.component.order),this.displayedAreas.forEach((n,r)=>{n.order=r*2,n.component.setStyleOrder(n.order)})),t===!0){let n=xe(this.unit,this.displayedAreas.map(r=>r.component.size));switch(this.unit){case"percent":{let r=100/this.displayedAreas.length;this.displayedAreas.forEach(o=>{o.size=n?o.component.size:r,o.minSize=F(o),o.maxSize=G(o)});break}case"pixel":{if(n)this.displayedAreas.forEach(r=>{r.size=r.component.size,r.minSize=F(r),r.maxSize=G(r)});else{let r=this.displayedAreas.filter(o=>o.component.size==="*");if(r.length===0&&this.displayedAreas.length>0)this.displayedAreas.forEach((o,a)=>{o.size=a===0?"*":o.component.size,o.minSize=a===0?null:F(o),o.maxSize=a===0?null:G(o)});else if(r.length>1){let o=!1;this.displayedAreas.forEach(a=>{a.component.size==="*"?o===!1?(a.size="*",a.minSize=null,a.maxSize=null,o=!0):(a.size=100,a.minSize=null,a.maxSize=null):(a.size=a.component.size,a.minSize=F(a),a.maxSize=G(a))})}}break}}}this.refreshStyleSizes(),this.cdRef.markForCheck()}refreshStyleSizes(){if(this.unit==="percent")if(this.displayedAreas.length===1)this.displayedAreas[0].component.setStyleFlex(0,0,"100%",!1,!1);else{let e=this.getNbGutters()*this.gutterSize;this.displayedAreas.forEach(t=>{t.size==="*"?this.displayedAreas.length===1?t.component.setStyleFlex(1,1,"100%",!1,!1):t.component.setStyleFlex(1,1,"auto",!1,!1):t.component.setStyleFlex(0,0,`calc( ${t.size}% - ${t.size/100*e}px )`,t.minSize!==null&&t.minSize===t.size,t.maxSize!==null&&t.maxSize===t.size)})}else this.unit==="pixel"&&this.displayedAreas.forEach(e=>{e.size==="*"?this.displayedAreas.length===1?e.component.setStyleFlex(1,1,"100%",!1,!1):e.component.setStyleFlex(1,1,"auto",!1,!1):this.displayedAreas.length===1?e.component.setStyleFlex(0,0,"100%",!1,!1):e.component.setStyleFlex(0,0,`${e.size}px`,e.minSize!==null&&e.minSize===e.size,e.maxSize!==null&&e.maxSize===e.size)})}clickGutter(e,t){let n=w(e);this.startPoint&&_e(this.startPoint,n,this.gutterClickDeltaPx)&&(!this.isDragging||this.isWaitingInitialMove)&&(this._clickTimeout!==null?(window.clearTimeout(this._clickTimeout),this._clickTimeout=null,this.notify("dblclick",t),this.stopDragging()):this._clickTimeout=window.setTimeout(()=>{this._clickTimeout=null,this.notify("click",t),this.stopDragging()},this.gutterDblClickDuration))}startKeyboardDrag(e,t,n){if(this.disabled===!0||this.isWaitingClear===!0)return;let r=Oe(e,this.direction);r!==null&&(this.endPoint=r,this.startPoint=w(e),e.preventDefault(),e.stopPropagation(),this.setupForDragEvent(t,n),this.startDragging(),this.drag(),this.stopDragging())}startMouseDrag(e,t,n){e.preventDefault(),e.stopPropagation(),this.startPoint=w(e),!(this.startPoint===null||this.disabled===!0||this.isWaitingClear===!0)&&(this.setupForDragEvent(t,n),this.dragListeners.push(this.renderer.listen("document","mouseup",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchend",this.stopDragging.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchcancel",this.stopDragging.bind(this))),this.ngZone.runOutsideAngular(()=>{this.dragListeners.push(this.renderer.listen("document","mousemove",this.mouseDragEvent.bind(this))),this.dragListeners.push(this.renderer.listen("document","touchmove",this.mouseDragEvent.bind(this)))}),this.startDragging())}setupForDragEvent(e,t){if(this.snapshot={gutterNum:t,lastSteppedOffset:0,allAreasSizePixel:be(this.elRef,this.direction)-this.getNbGutters()*this.gutterSize,allInvolvedAreasSizePercent:100,areasBeforeGutter:[],areasAfterGutter:[]},this.displayedAreas.forEach(n=>{let r={area:n,sizePixelAtStart:be(n.component.elRef,this.direction),sizePercentAtStart:this.unit==="percent"?n.size:-1};n.order<e?this.restrictMove===!0?this.snapshot.areasBeforeGutter=[r]:this.snapshot.areasBeforeGutter.unshift(r):n.order>e&&(this.restrictMove===!0?this.snapshot.areasAfterGutter.length===0&&(this.snapshot.areasAfterGutter=[r]):this.snapshot.areasAfterGutter.push(r))}),this.restrictMove&&this.unit==="percent"){let n=this.snapshot.areasBeforeGutter[0],r=this.snapshot.areasAfterGutter[0];if(n.area.size==="*"||r.area.size==="*"){let o=this.displayedAreas.reduce((a,p)=>n.area!==p&&r.area!==p?a+p.size:a,0);this.snapshot.allInvolvedAreasSizePercent=100-o}else this.snapshot.allInvolvedAreasSizePercent=[...this.snapshot.areasBeforeGutter,...this.snapshot.areasAfterGutter].reduce((o,a)=>o+a.sizePercentAtStart,0)}this.snapshot.areasBeforeGutter.length===0||this.snapshot.areasAfterGutter.length}startDragging(){this.displayedAreas.forEach(e=>e.component.lockEvents()),this.isDragging=!0,this.isWaitingInitialMove=!0}mouseDragEvent(e){e.preventDefault(),e.stopPropagation();let t=w(e);this._clickTimeout!==null&&!_e(this.startPoint,t,this.gutterClickDeltaPx)&&(window.clearTimeout(this._clickTimeout),this._clickTimeout=null),this.isDragging!==!1&&(this.endPoint=w(e),this.endPoint!==null&&this.drag())}drag(){if(this.isWaitingInitialMove)if(this.startPoint.x!==this.endPoint.x||this.startPoint.y!==this.endPoint.y)this.ngZone.run(()=>{this.isWaitingInitialMove=!1,this.renderer.addClass(this.elRef.nativeElement,"as-dragging"),this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.notify("start",this.snapshot.gutterNum)});else return;let e=this.direction==="horizontal"?this.startPoint.x-this.endPoint.x:this.startPoint.y-this.endPoint.y;this.dir==="rtl"&&this.direction==="horizontal"&&(e=-e);let t=Math.round(e/this.gutterStep)*this.gutterStep;if(t===this.snapshot.lastSteppedOffset)return;this.snapshot.lastSteppedOffset=t;let n=y(this.unit,this.snapshot.areasBeforeGutter,-t,this.snapshot.allAreasSizePixel),r=y(this.unit,this.snapshot.areasAfterGutter,t,this.snapshot.allAreasSizePixel);if(n.remain!==0&&r.remain!==0?Math.abs(n.remain)===Math.abs(r.remain)||(Math.abs(n.remain)>Math.abs(r.remain)?r=y(this.unit,this.snapshot.areasAfterGutter,t+n.remain,this.snapshot.allAreasSizePixel):n=y(this.unit,this.snapshot.areasBeforeGutter,-(t-r.remain),this.snapshot.allAreasSizePixel)):n.remain!==0?r=y(this.unit,this.snapshot.areasAfterGutter,t+n.remain,this.snapshot.allAreasSizePixel):r.remain!==0&&(n=y(this.unit,this.snapshot.areasBeforeGutter,-(t-r.remain),this.snapshot.allAreasSizePixel)),this.unit==="percent"){let o=[...n.list,...r.list],p=o.find(f=>f.percentAfterAbsorption=="*")??o.find(f=>f.percentAfterAbsorption!==0&&f.percentAfterAbsorption!==f.areaSnapshot.area.minSize&&f.percentAfterAbsorption!==f.areaSnapshot.area.maxSize);p&&(p.percentAfterAbsorption=this.snapshot.allInvolvedAreasSizePercent-o.filter(f=>f!==p).reduce((f,Ce)=>f+Ce.percentAfterAbsorption,0))}n.list.forEach(o=>ve(this.unit,o)),r.list.forEach(o=>ve(this.unit,o)),this.refreshStyleSizes(),this.notify("progress",this.snapshot.gutterNum)}stopDragging(e){if(e&&(e.preventDefault(),e.stopPropagation()),this.isDragging!==!1){for(this.displayedAreas.forEach(t=>t.component.unlockEvents());this.dragListeners.length>0;){let t=this.dragListeners.pop();t&&t()}this.isDragging=!1,this.isWaitingInitialMove===!1&&this.notify("end",this.snapshot.gutterNum),this.renderer.removeClass(this.elRef.nativeElement,"as-dragging"),this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum-1].nativeElement,"as-dragged"),this.snapshot=null,this.isWaitingClear=!0,this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.startPoint=null,this.endPoint=null,this.isWaitingClear=!1})})}}notify(e,t){let n=this.getVisibleAreaSizes();e==="start"?this.dragStart.emit({gutterNum:t,sizes:n}):e==="end"?this.dragEnd.emit({gutterNum:t,sizes:n}):e==="click"?this.gutterClick.emit({gutterNum:t,sizes:n}):e==="dblclick"?this.gutterDblClick.emit({gutterNum:t,sizes:n}):e==="transitionEnd"?this.transitionEndSubscriber&&this.ngZone.run(()=>this.transitionEndSubscriber.next(n)):e==="progress"&&this.dragProgressSubject.next({gutterNum:t,sizes:n})}ngOnDestroy(){this.stopDragging()}collapseArea(e,t,n){let r=this.displayedAreas.find(p=>p.component===e);if(r===void 0)return;let o=n==="right"?1:-1;r.sizeBeforeCollapse||(r.sizeBeforeCollapse=r.size,r.gutterBeforeCollapse=o),r.size=t;let a=this.gutterEls.find(p=>p.nativeElement.style.order===`${r.order+o}`);a&&this.renderer.addClass(a.nativeElement,"as-split-gutter-collapsed"),this.updateArea(e,!1,!1)}expandArea(e){let t=this.displayedAreas.find(r=>r.component===e);if(t===void 0||!t.sizeBeforeCollapse)return;t.size=t.sizeBeforeCollapse,t.sizeBeforeCollapse=null;let n=this.gutterEls.find(r=>r.nativeElement.style.order===`${t.order+t.gutterBeforeCollapse}`);n&&this.renderer.removeClass(n.nativeElement,"as-split-gutter-collapsed"),this.updateArea(e,!1,!1)}getAriaAreaSizeText(e){return e==="*"?null:e.toFixed(0)+" "+this.unit}};s.\u0275fac=function(t){return new(t||s)(c(V),c(B),c(j),c(H),c(je,8))},s.\u0275cmp=b({type:s,selectors:[["as-split"]],viewQuery:function(t,n){if(t&1&&se(Pe,5),t&2){let r;ne(r=re())&&(n.gutterEls=r)}},inputs:{direction:"direction",unit:"unit",gutterSize:"gutterSize",gutterStep:"gutterStep",restrictMove:"restrictMove",useTransition:"useTransition",disabled:"disabled",dir:"dir",gutterDblClickDuration:"gutterDblClickDuration",gutterClickDeltaPx:"gutterClickDeltaPx",gutterAriaLabel:"gutterAriaLabel"},outputs:{transitionEnd:"transitionEnd",dragStart:"dragStart",dragEnd:"dragEnd",gutterClick:"gutterClick",gutterDblClick:"gutterDblClick"},exportAs:["asSplit"],ngContentSelectors:ke,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["role","separator","tabindex","0","class","as-split-gutter",3,"flex-basis","order","keydown","mousedown","touchstart","mouseup","touchend",4,"ngIf"],["role","separator","tabindex","0",1,"as-split-gutter",3,"keydown","mousedown","touchstart","mouseup","touchend"],["gutterEls",""],[1,"as-split-gutter-icon"]],template:function(t,n){t&1&&(ee(),te(0),P(1,Ee,1,1,"ng-template",0)),t&2&&(u(1),m("ngForOf",n.displayedAreas))},dependencies:[oe,ae],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{border:none;flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%] > .as-split-gutter.as-split-gutter-collapsed[_ngcontent-%COMP%]{flex-basis:1px!important;pointer-events:none}[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}[_nghost-%COMP%]    >.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]    >.as-split-area.as-hidden{flex:0 1 0px!important;overflow-x:hidden;overflow-y:hidden}[_nghost-%COMP%]    >.as-split-area .iframe-fix{position:absolute;top:0;left:0;width:100%;height:100%}.as-horizontal[_nghost-%COMP%]{flex-direction:row}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:row;cursor:col-resize;height:100%}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-horizontal[_nghost-%COMP%]    >.as-split-area{height:100%}.as-vertical[_nghost-%COMP%]{flex-direction:column}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{flex-direction:column;cursor:row-resize;width:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}.as-vertical[_nghost-%COMP%]    >.as-split-area{width:100%}.as-vertical[_nghost-%COMP%]    >.as-split-area.as-hidden{max-width:0}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:default}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]   .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}.as-transition.as-init[_nghost-%COMP%]:not(.as-dragging) > .as-split-gutter[_ngcontent-%COMP%], .as-transition.as-init[_nghost-%COMP%]:not(.as-dragging)    >.as-split-area{transition:flex-basis .3s}"],changeDetection:0});let i=s;return i})(),ze=(()=>{let s=class s{set order(e){this._order=_(e,null),this.split.updateArea(this,!0,!1)}get order(){return this._order}set size(e){this._size=_(e,"*"),this.split.updateArea(this,!1,!0)}get size(){return this._size}set minSize(e){this._minSize=_(e,null),this.split.updateArea(this,!1,!0)}get minSize(){return this._minSize}set maxSize(e){this._maxSize=_(e,null),this.split.updateArea(this,!1,!0)}get maxSize(){return this._maxSize}set lockSize(e){this._lockSize=E(e),this.split.updateArea(this,!1,!0)}get lockSize(){return this._lockSize}set visible(e){this._visible=E(e),this._visible?(this.split.showArea(this),this.renderer.removeClass(this.elRef.nativeElement,"as-hidden")):(this.split.hideArea(this),this.renderer.addClass(this.elRef.nativeElement,"as-hidden"))}get visible(){return this._visible}constructor(e,t,n,r){this.ngZone=e,this.elRef=t,this.renderer=n,this.split=r,this._order=null,this._size="*",this._minSize=null,this._maxSize=null,this._lockSize=!1,this._visible=!0,this.lockListeners=[],this.renderer.addClass(this.elRef.nativeElement,"as-split-area")}ngOnInit(){this.split.addArea(this),this.ngZone.runOutsideAngular(()=>{this.transitionListener=this.renderer.listen(this.elRef.nativeElement,"transitionend",t=>{t.propertyName==="flex-basis"&&this.split.notify("transitionEnd",-1)})});let e=this.renderer.createElement("div");this.renderer.addClass(e,"iframe-fix"),this.dragStartSubscription=this.split.dragStart.subscribe(()=>{this.renderer.setStyle(this.elRef.nativeElement,"position","relative"),this.renderer.appendChild(this.elRef.nativeElement,e)}),this.dragEndSubscription=this.split.dragEnd.subscribe(()=>{this.renderer.removeStyle(this.elRef.nativeElement,"position"),this.renderer.removeChild(this.elRef.nativeElement,e)})}setStyleOrder(e){this.renderer.setStyle(this.elRef.nativeElement,"order",e)}setStyleFlex(e,t,n,r,o){this.renderer.setStyle(this.elRef.nativeElement,"flex-grow",e),this.renderer.setStyle(this.elRef.nativeElement,"flex-shrink",t),this.renderer.setStyle(this.elRef.nativeElement,"flex-basis",n),r===!0?this.renderer.addClass(this.elRef.nativeElement,"as-min"):this.renderer.removeClass(this.elRef.nativeElement,"as-min"),o===!0?this.renderer.addClass(this.elRef.nativeElement,"as-max"):this.renderer.removeClass(this.elRef.nativeElement,"as-max")}lockEvents(){this.ngZone.runOutsideAngular(()=>{this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"selectstart",()=>!1)),this.lockListeners.push(this.renderer.listen(this.elRef.nativeElement,"dragstart",()=>!1))})}unlockEvents(){for(;this.lockListeners.length>0;){let e=this.lockListeners.pop();e&&e()}}ngOnDestroy(){this.unlockEvents(),this.transitionListener&&this.transitionListener(),this.dragStartSubscription?.unsubscribe(),this.dragEndSubscription?.unsubscribe(),this.split.removeArea(this)}collapse(e=0,t="right"){this.split.collapseArea(this,e,t)}expand(){this.split.expandArea(this)}};s.\u0275fac=function(t){return new(t||s)(c(V),c(B),c(H),c($))},s.\u0275dir=W({type:s,selectors:[["as-split-area"],["","as-split-area",""]],inputs:{order:"order",size:"size",minSize:"minSize",maxSize:"maxSize",lockSize:"lockSize",visible:"visible"},exportAs:["asSplitArea"]});let i=s;return i})(),Se=(()=>{let s=class s{};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=R({type:s}),s.\u0275inj=T({imports:[S]});let i=s;return i})();function Le(i,s){i&1&&(d(0,"span",18),A(1,"i",19),g())}var ye=(()=>{let s=class s{constructor(e,t){this.sanitizer=e,this.changeDetectorRef=t,this.editorOptions={theme:"vs-dark",language:"javascript",fontSize:"16px",lineHeight:"21px",fontFamily:"Cascadia Code, system-ui",fontLigatures:!0,minimap:{enabled:!1}},this.code="",this.output="",this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML()),this.loading=!0,this.running=!1,this.animationRunning=!1,this.codeEvent=new O;let n=console.log,r=console.error,o=console.warn;console.log=(...a)=>{this.output+=this.logToHTML(a.join(" "))+`
`,n.apply(console,a)},console.error=(...a)=>{this.output+=this.errorToHTML(a.join(" "))+`
`,r.apply(console,a)},console.warn=(...a)=>{this.output+=this.warnToHTML(a.join(" "))+`
`,o.apply(console,a)},this.codeEvent.pipe(D(1e3)).subscribe(a=>{this.play()})}ngOnInit(){}executeCode(){this.codeEvent.next(this.code)}clear(){this.running=!0,this.output="",this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML())}play(){return k(this,null,function*(){this.running||(this.clear(),setTimeout(()=>{let e=this.execute(this.code);this.output+=e,this.outputHTML=this.sanitizerHTML(this.consoleHeaderHTML()+this.output),this.running=!1},300))})}execute(e){let t="";try{let r=new Function(e)();r&&(t=`<p style="padding: 0px 20px;">${r}</p>
`)}catch(n){t=this.errorToHTML(n)+`
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
    `}logToHTML(e){return`
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
    `}sanitizerHTML(e){return this.sanitizer.bypassSecurityTrustHtml(e)}onMonacoEditorInit(e){this.loading=!1,this.changeDetectorRef.detectChanges()}copyClipboard(){return k(this,null,function*(){if(!(!this.code||this.animationRunning))try{yield navigator.clipboard.writeText(this.code),this.changeIcon()}catch(e){console.error("Failed to copy: ",e)}})}changeIcon(){return k(this,null,function*(){this.animationRunning=!0,yield this.delay(1e3),this.animationRunning=!1})}delay(e){return new Promise(t=>setTimeout(t,e))}};s.\u0275fac=function(t){return new(t||s)(c(le),c(j))},s.\u0275cmp=b({type:s,selectors:[["app-javascript"]],decls:24,vars:16,consts:[[1,"javascript"],[1,"javascript-editor"],[1,"javascript-editor__header"],[1,"icon-button","icon-button--dark",3,"click"],[1,"icon-button__icon"],[1,"fa-solid","fa-play"],[1,"fa-solid","fa-circle-notch","fa-spin"],[1,"grid-editor"],["direction","vertical"],[2,"overflow-y","hidden",3,"size","minSize"],[1,"javascript-editor__content"],["class","loader"],[1,"monaco-editor",3,"options","ngModel","ngModelChange","onInit"],[1,"icon-button","icon-button--light",3,"click"],[1,"icon-button__icon-custom","fa-regular","fa-clipboard"],[1,"icon-button__icon-custom","fa-solid","fa-check"],[3,"size","minSize"],[3,"html"],[1,"loader"],[1,"fa-solid","fa-code","fa-bounce"]],template:function(t,n){t&1&&(d(0,"section",0)(1,"h2"),N(2,"Javascript Compiler"),g(),d(3,"div",1)(4,"div",2)(5,"label"),N(6,"Entrada"),g(),d(7,"button",3),z("click",function(){return n.play()}),d(8,"span",4),A(9,"i",5),g(),d(10,"span",4),A(11,"i",6),g()()()()(),d(12,"section",7)(13,"as-split",8)(14,"as-split-area",9)(15,"div",10),P(16,Le,2,0,"span",11),d(17,"ngx-monaco-editor",12),z("ngModelChange",function(o){return n.code=o})("ngModelChange",function(){return n.executeCode()})("onInit",function(o){return n.onMonacoEditorInit(o)}),g(),d(18,"button",13),z("click",function(){return n.copyClipboard()}),d(19,"span",4),A(20,"i",14)(21,"i",15),g()()()(),d(22,"as-split-area",16),A(23,"html-viewer",17),g()()()),t&2&&(u(8),M("icon-button__icon--visible",!n.running),u(2),M("icon-button__icon--visible",n.running),u(4),m("size",70)("minSize",40),u(2),X(16,n.loading?16:-1),u(1),m("options",n.editorOptions)("ngModel",n.code),u(3),M("icon-button__icon--visible",!n.animationRunning),u(1),M("icon-button__icon--visible",n.animationRunning),u(1),m("size",30)("minSize",20),u(1),m("html",n.outputHTML))},dependencies:[de,he,me,L,$,ze],styles:[".javascript[_ngcontent-%COMP%]{display:flex;flex-direction:column}.javascript-editor__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-bottom:3px}.javascript-editor__header[_ngcontent-%COMP%]   .icon-button__icon[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.javascript-editor__header[_ngcontent-%COMP%]   .icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}.javascript-editor__content[_ngcontent-%COMP%]{position:relative;min-height:max(100%,300px);background-color:var(--bg-secondary-dark);display:flex;justify-content:center;align-items:center;overflow:hidden}.javascript-editor__content[_ngcontent-%COMP%]   .monaco-editor[_ngcontent-%COMP%]{position:absolute;padding:10px 0;min-height:100%;width:100%;box-sizing:border-box}.javascript-editor__content[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{display:block;position:absolute;margin:auto;font-size:50px;color:var(--color-light-contrast)}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin:5px}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button__icon-custom[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);opacity:0;transition:opacity 80ms ease-in}.javascript-editor__content[_ngcontent-%COMP%]   .icon-button__icon--visible[_ngcontent-%COMP%]{opacity:1;transition:opacity 80ms ease-out .1s}.javascript-editor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.javascript--console[_ngcontent-%COMP%]{margin-top:30px;min-height:max(100%,100px)}.javascript--console[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding:10px 0}.grid-editor[_ngcontent-%COMP%]{height:100%;max-height:700px;border:1px solid var(--border-primary);border-radius:var(--base-radius);overflow:hidden}@media (height > 1000px){.grid-editor[_ngcontent-%COMP%]{max-height:800px}}@media (height > 1200px){.grid-editor[_ngcontent-%COMP%]{max-height:1000px}}@media (height > 1500px){.grid-editor[_ngcontent-%COMP%]{max-height:1200px}}"]});let i=s;return i})();var Fe=[{path:"",redirectTo:"javascript",pathMatch:"full"},{path:"javascript",component:ye}],bt=(()=>{let s=class s{};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=R({type:s}),s.\u0275inj=T({imports:[S,ce.forChild(Fe),ue,Ae,ge,I,L,Se]});let i=s;return i})();export{bt as CodeModule};