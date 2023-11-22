import{A as t2,B as o2,D as p,E as R1,F as x2,H as c2,I as K2,L as J2,V as I1,W as O1,X as U1,Z as G1,_ as W1,a as B,b as Y,ba as Z2,ca as c1,ga as q1,h as T1,ha as a1,i as _1,j as B1,ka as j1,m as X2,n as L2,o as Q,p as K,q as Y2,r as J,s as E,t as Z,w as Q2,z as E1}from"./chunk-VAZFKGSO.js";var c3=(()=>{let c=class c{constructor(r,i){this._renderer=r,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(r,i){this._renderer.setProperty(this._elementRef.nativeElement,r,i)}registerOnTouched(r){this.onTouched=r}registerOnChange(r){this.onChange=r}setDisabledState(r){this.setProperty("disabled",r)}};c.\u0275fac=function(i){return new(i||c)(p(o2),p(t2))},c.\u0275dir=E({type:c});let a=c;return a})(),H4=(()=>{let c=class c extends c3{};c.\u0275fac=(()=>{let r;return function(s){return(r||(r=Q2(c)))(s||c)}})(),c.\u0275dir=E({type:c,features:[c2]});let a=c;return a})(),a3=new K("NgValueAccessor");var z4={provide:a3,useExisting:X2(()=>e3),multi:!0};function V4(){let a=a1()?a1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var d4=new K("CompositionEventMode"),e3=(()=>{let c=class c extends c3{constructor(r,i,s){super(r,i),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!V4())}writeValue(r){let i=r??"";this.setProperty("value",i)}_handleInput(r){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(r)}_compositionStart(){this._composing=!0}_compositionEnd(r){this._composing=!1,this._compositionMode&&this.onChange(r)}};c.\u0275fac=function(i){return new(i||c)(p(o2),p(t2),p(d4,8))},c.\u0275dir=E({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,s){i&1&&U1("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[Z2([z4]),c2]});let a=c;return a})();var p4=new K("NgValidators"),M4=new K("NgAsyncValidators");function r3(a){return a!=null}function i3(a){return O1(a)?T1(a):a}function s3(a){let c={};return a.forEach(e=>{c=e!=null?B(B({},c),e):c}),Object.keys(c).length===0?null:c}function n3(a,c){return c.map(e=>e(a))}function C4(a){return!a.validate}function t3(a){return a.map(c=>C4(c)?c:e=>c.validate(e))}function g4(a){if(!a)return null;let c=a.filter(r3);return c.length==0?null:function(e){return s3(n3(e,c))}}function o3(a){return a!=null?g4(t3(a)):null}function L4(a){if(!a)return null;let c=a.filter(r3);return c.length==0?null:function(e){let r=n3(e,c).map(i3);return B1(r).pipe(_1(s3))}}function l3(a){return a!=null?L4(t3(a)):null}function $1(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function x4(a){return a._rawValidators}function b4(a){return a._rawAsyncValidators}function e1(a){return a?Array.isArray(a)?a:[a]:[]}function N2(a,c){return Array.isArray(a)?a.includes(c):a===c}function X1(a,c){let e=e1(c);return e1(a).forEach(i=>{N2(e,i)||e.push(i)}),e}function Y1(a,c){return e1(c).filter(e=>!N2(a,e))}var y2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=o3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=l3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,e){return this.control?this.control.hasError(c,e):!1}getError(c,e){return this.control?this.control.getError(c,e):null}},r1=class extends y2{get formDirective(){return null}get path(){return null}},m2=class extends y2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},i1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},N4={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},c8=Y(B({},N4),{"[class.ng-submitted]":"isSubmitted"}),a8=(()=>{let c=class c extends i1{constructor(r){super(r)}};c.\u0275fac=function(i){return new(i||c)(p(m2,2))},c.\u0275dir=E({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,s){i&2&&J2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c2]});let a=c;return a})();var l2="VALID",b2="INVALID",a2="PENDING",f2="DISABLED";function y4(a){return(S2(a)?a.validators:a)||null}function S4(a){return Array.isArray(a)?o3(a):a||null}function w4(a,c){return(S2(c)?c.asyncValidators:a)||null}function k4(a){return Array.isArray(a)?l3(a):a||null}function S2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var s1=class{constructor(c,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===l2}get invalid(){return this.status===b2}get pending(){return this.status==a2}get disabled(){return this.status===f2}get enabled(){return this.status!==f2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(X1(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(X1(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(Y1(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(Y1(c,this._rawAsyncValidators))}hasValidator(c){return N2(this._rawValidators,c)}hasAsyncValidator(c){return N2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=a2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=f2,this.errors=null,this._forEachChild(r=>{r.disable(Y(B({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(B({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(c={}){let e=this._parentMarkedDirty(c.onlySelf);this.status=l2,this._forEachChild(r=>{r.enable(Y(B({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(Y(B({},c),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===l2||this.status===a2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?f2:l2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=a2,this._hasOwnPendingAsyncValidator=!0;let e=i3(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,e={}){this.errors=c,this._updateControlsErrors(e.emitEvent!==!1)}get(c){let e=c;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(c,e){let r=e?this.get(e):this;return r&&r.errors?r.errors[c]:null}hasError(c,e){return!!this.getError(c,e)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new x2,this.statusChanges=new x2}_calculateStatus(){return this._allControlsDisabled()?f2:this.errors?b2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(a2)?a2:this._anyControlsHaveStatus(b2)?b2:l2}_anyControlsHaveStatus(c){return this._anyControls(e=>e.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){S2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let e=this._parent&&this._parent.dirty;return!c&&!!e&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=S4(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=k4(this._rawAsyncValidators)}};var f3=new K("CallSetDisabledState",{providedIn:"root",factory:()=>n1}),n1="always";function A4(a,c){return[...c.path,a]}function D4(a,c,e=n1){F4(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),T4(a,c),B4(a,c),_4(a,c),P4(a,c)}function Q1(a,c){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(c)})}function P4(a,c){if(c.valueAccessor.setDisabledState){let e=r=>{c.valueAccessor.setDisabledState(r)};a.registerOnDisabledChange(e),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function F4(a,c){let e=x4(a);c.validator!==null?a.setValidators($1(e,c.validator)):typeof e=="function"&&a.setValidators([e]);let r=b4(a);c.asyncValidator!==null?a.setAsyncValidators($1(r,c.asyncValidator)):typeof r=="function"&&a.setAsyncValidators([r]);let i=()=>a.updateValueAndValidity();Q1(c._rawValidators,i),Q1(c._rawAsyncValidators,i)}function T4(a,c){c.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&m3(a,c)})}function _4(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&m3(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function m3(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function B4(a,c){let e=(r,i)=>{c.valueAccessor.writeValue(r),i&&c.viewToModelUpdate(r)};a.registerOnChange(e),c._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function E4(a,c){if(!a.hasOwnProperty("model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(c,e.currentValue)}function R4(a){return Object.getPrototypeOf(a.constructor)===H4}function I4(a,c){if(!c)return null;Array.isArray(c);let e,r,i;return c.forEach(s=>{s.constructor===e3?e=s:R4(s)?r=s:i=s}),i||r||e||null}function K1(a,c){let e=a.indexOf(c);e>-1&&a.splice(e,1)}function J1(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var O4=class extends s1{constructor(c=null,e,r){super(y4(e),w4(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),S2(e)&&(e.nonNullable||e.initialValueIsDefault)&&(J1(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,e={}){this.value=this._pendingValue=c,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(c,e={}){this.setValue(c,e)}reset(c=this.defaultValue,e={}){this._applyFormState(c),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){K1(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){K1(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){J1(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var U4={provide:m2,useExisting:X2(()=>G4)},Z1=(()=>Promise.resolve())(),G4=(()=>{let c=class c extends m2{constructor(r,i,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new O4,this._registered=!1,this.name="",this.update=new x2,this._parent=r,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=I4(this,n)}ngOnChanges(r){if(this._checkForErrors(),!this._registered||"name"in r){if(this._registered&&(this._checkName(),this.formDirective)){let i=r.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in r&&this._updateDisabled(r),E4(r,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(r){this.viewModel=r,this.update.emit(r)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){D4(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(r){Z1.then(()=>{this.control.setValue(r,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(r){let i=r.isDisabled.currentValue,s=i!==0&&q1(i);Z1.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(r){return this._parent?A4(r,this._parent):[r]}};c.\u0275fac=function(i){return new(i||c)(p(r1,9),p(p4,10),p(M4,10),p(a3,10),p(R1,8),p(f3,8))},c.\u0275dir=E({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Z2([U4]),c2,Z]});let a=c;return a})();var W4=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=J({type:c}),c.\u0275inj=Q({});let a=c;return a})();var q4=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=J({type:c}),c.\u0275inj=Q({imports:[W4]});let a=c;return a})();var r8=(()=>{let c=class c{static withConfig(r){return{ngModule:c,providers:[{provide:f3,useValue:r.callSetDisabledState??n1}]}}};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=J({type:c}),c.\u0275inj=Q({imports:[q4]});let a=c;return a})();function h3(a,c){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);c&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,r)}return e}function f(a){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?h3(Object(e),!0).forEach(function(r){M(a,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):h3(Object(e)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))})}return a}function I2(a){"@babel/helpers - typeof";return I2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},I2(a)}function j4(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function v3(a,c){for(var e=0;e<c.length;e++){var r=c[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function $4(a,c,e){return c&&v3(a.prototype,c),e&&v3(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function M(a,c,e){return c in a?Object.defineProperty(a,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[c]=e,a}function g1(a,c){return Y4(a)||K4(a,c)||E3(a,c)||Z4()}function M2(a){return X4(a)||Q4(a)||E3(a)||J4()}function X4(a){if(Array.isArray(a))return m1(a)}function Y4(a){if(Array.isArray(a))return a}function Q4(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function K4(a,c){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,t;try{for(e=e.call(a);!(i=(n=e.next()).done)&&(r.push(n.value),!(c&&r.length===c));i=!0);}catch(o){s=!0,t=o}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw t}}return r}}function E3(a,c){if(a){if(typeof a=="string")return m1(a,c);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m1(a,c)}}function m1(a,c){(c==null||c>a.length)&&(c=a.length);for(var e=0,r=new Array(c);e<c;e++)r[e]=a[e];return r}function J4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u3=function(){},L1={},R3={},I3=null,O3={mark:u3,measure:u3};try{typeof window<"u"&&(L1=window),typeof document<"u"&&(R3=document),typeof MutationObserver<"u"&&(I3=MutationObserver),typeof performance<"u"&&(O3=performance)}catch{}var c6=L1.navigator||{},H3=c6.userAgent,z3=H3===void 0?"":H3,I=L1,V=R3,V3=I3,w2=O3,n8=!!I.document,T=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",U3=~z3.indexOf("MSIE")||~z3.indexOf("Trident/"),k2,A2,D2,P2,F2,D="___FONT_AWESOME___",h1=16,G3="fa",W3="svg-inline--fa",$="data-fa-i2svg",v1="data-fa-pseudo-element",a6="data-fa-pseudo-element-pending",x1="data-prefix",b1="data-icon",d3="fontawesome-i2svg",e6="async",r6=["HTML","HEAD","STYLE","SCRIPT"],q3=function(){try{return!0}catch{return!1}}(),z="classic",d="sharp",N1=[z,d];function C2(a){return new Proxy(a,{get:function(e,r){return r in e?e[r]:e[z]}})}var H2=C2((k2={},M(k2,z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),M(k2,d,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),k2)),z2=C2((A2={},M(A2,z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),M(A2,d,{solid:"fass",regular:"fasr",light:"fasl"}),A2)),V2=C2((D2={},M(D2,z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),M(D2,d,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),D2)),i6=C2((P2={},M(P2,z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),M(P2,d,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),P2)),s6=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,j3="fa-layers-text",n6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,t6=C2((F2={},M(F2,z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),M(F2,d,{900:"fass",400:"fasr",300:"fasl"}),F2)),$3=[1,2,3,4,5,6,7,8,9,10],o6=$3.concat([11,12,13,14,15,16,17,18,19,20]),l6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d2=new Set;Object.keys(z2[z]).map(d2.add.bind(d2));Object.keys(z2[d]).map(d2.add.bind(d2));var f6=[].concat(N1,M2(d2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat($3.map(function(a){return"".concat(a,"x")})).concat(o6.map(function(a){return"w-".concat(a)})),v2=I.FontAwesomeConfig||{};function m6(a){var c=V.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function h6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}V&&typeof V.querySelector=="function"&&(p3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],p3.forEach(function(a){var c=g1(a,2),e=c[0],r=c[1],i=h6(m6(e));i!=null&&(v2[r]=i)}));var p3,X3={styleDefault:"solid",familyDefault:"classic",cssPrefix:G3,replacementClass:W3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v2.familyPrefix&&(v2.cssPrefix=v2.familyPrefix);var s2=f(f({},X3),v2);s2.autoReplaceSvg||(s2.observeMutations=!1);var h={};Object.keys(X3).forEach(function(a){Object.defineProperty(h,a,{enumerable:!0,set:function(e){s2[a]=e,u2.forEach(function(r){return r(h)})},get:function(){return s2[a]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){s2.cssPrefix=c,u2.forEach(function(e){return e(h)})},get:function(){return s2.cssPrefix}});I.FontAwesomeConfig=h;var u2=[];function v6(a){return u2.push(a),function(){u2.splice(u2.indexOf(a),1)}}var R=h1,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u6(a){if(!(!a||!T)){var c=V.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var e=V.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return V.head.insertBefore(c,r),a}}var H6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p2(){for(var a=12,c="";a-- >0;)c+=H6[Math.random()*62|0];return c}function n2(a){for(var c=[],e=(a||[]).length>>>0;e--;)c[e]=a[e];return c}function y1(a){return a.classList?n2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function Y3(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z6(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,'="').concat(Y3(a[e]),'" ')},"").trim()}function G2(a){return Object.keys(a||{}).reduce(function(c,e){return c+"".concat(e,": ").concat(a[e].trim(),";")},"")}function S1(a){return a.size!==A.size||a.x!==A.x||a.y!==A.y||a.rotate!==A.rotate||a.flipX||a.flipY}function V6(a){var c=a.transform,e=a.containerWidth,r=a.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:o,path:m}}function d6(a){var c=a.transform,e=a.width,r=e===void 0?h1:e,i=a.height,s=i===void 0?h1:i,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&U3?o+="translate(".concat(c.x/R-r/2,"em, ").concat(c.y/R-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/R,"em), calc(-50% + ").concat(c.y/R,"em)) "):o+="translate(".concat(c.x/R,"em, ").concat(c.y/R,"em) "),o+="scale(".concat(c.size/R*(c.flipX?-1:1),", ").concat(c.size/R*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var p6=`:root, :host {
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
}`;function Q3(){var a=G3,c=W3,e=h.cssPrefix,r=h.replacementClass,i=p6;if(e!==a||r!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(t,".".concat(r))}return i}var M3=!1;function t1(){h.autoAddCss&&!M3&&(u6(Q3()),M3=!0)}var M6={mixout:function(){return{dom:{css:Q3,insertCss:t1}}},hooks:function(){return{beforeDOMElementCreation:function(){t1()},beforeI2svg:function(){t1()}}}},P=I||{};P[D]||(P[D]={});P[D].styles||(P[D].styles={});P[D].hooks||(P[D].hooks={});P[D].shims||(P[D].shims=[]);var S=P[D],K3=[],C6=function a(){V.removeEventListener("DOMContentLoaded",a),O2=1,K3.map(function(c){return c()})},O2=!1;T&&(O2=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),O2||V.addEventListener("DOMContentLoaded",C6));function g6(a){T&&(O2?setTimeout(a,0):K3.push(a))}function g2(a){var c=a.tag,e=a.attributes,r=e===void 0?{}:e,i=a.children,s=i===void 0?[]:i;return typeof a=="string"?Y3(a):"<".concat(c," ").concat(z6(r),">").concat(s.map(g2).join(""),"</").concat(c,">")}function C3(a,c,e){if(a&&a[c]&&a[c][e])return{prefix:c,iconName:e,icon:a[c][e]}}var L6=function(c,e){return function(r,i,s,n){return c.call(e,r,i,s,n)}},o1=function(c,e,r,i){var s=Object.keys(c),n=s.length,t=i!==void 0?L6(e,i):e,o,m,l;for(r===void 0?(o=1,l=c[s[0]]):(o=0,l=r);o<n;o++)m=s[o],l=t(l,c[m],m,c);return l};function x6(a){for(var c=[],e=0,r=a.length;e<r;){var i=a.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=a.charCodeAt(e++);(s&64512)==56320?c.push(((i&1023)<<10)+(s&1023)+65536):(c.push(i),e--)}else c.push(i)}return c}function u1(a){var c=x6(a);return c.length===1?c[0].toString(16):null}function b6(a,c){var e=a.length,r=a.charCodeAt(c),i;return r>=55296&&r<=56319&&e>c+1&&(i=a.charCodeAt(c+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function g3(a){return Object.keys(a).reduce(function(c,e){var r=a[e],i=!!r.icon;return i?c[r.iconName]=r.icon:c[e]=r,c},{})}function H1(a,c){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=g3(c);typeof S.hooks.addPack=="function"&&!i?S.hooks.addPack(a,g3(c)):S.styles[a]=f(f({},S.styles[a]||{}),s),a==="fas"&&H1("fa",c)}var T2,_2,B2,e2=S.styles,N6=S.shims,y6=(T2={},M(T2,z,Object.values(V2[z])),M(T2,d,Object.values(V2[d])),T2),w1=null,J3={},Z3={},c4={},a4={},e4={},S6=(_2={},M(_2,z,Object.keys(H2[z])),M(_2,d,Object.keys(H2[d])),_2);function w6(a){return~f6.indexOf(a)}function k6(a,c){var e=c.split("-"),r=e[0],i=e.slice(1).join("-");return r===a&&i!==""&&!w6(i)?i:null}var r4=function(){var c=function(s){return o1(e2,function(n,t,o){return n[o]=o1(t,s,{}),n},{})};J3=c(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){i[o.toString(16)]=n})}return i}),Z3=c(function(i,s,n){if(i[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){i[o]=n})}return i}),e4=c(function(i,s,n){var t=s[2];return i[n]=n,t.forEach(function(o){i[o]=n}),i});var e="far"in e2||h.autoFetchSvg,r=o1(N6,function(i,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!e&&(t="fas"),typeof n=="string"&&(i.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:t,iconName:o}),i},{names:{},unicodes:{}});c4=r.names,a4=r.unicodes,w1=W2(h.styleDefault,{family:h.familyDefault})};v6(function(a){w1=W2(a.styleDefault,{family:h.familyDefault})});r4();function k1(a,c){return(J3[a]||{})[c]}function A6(a,c){return(Z3[a]||{})[c]}function j(a,c){return(e4[a]||{})[c]}function i4(a){return c4[a]||{prefix:null,iconName:null}}function D6(a){var c=a4[a],e=k1("fas",a);return c||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function O(){return w1}var A1=function(){return{prefix:null,iconName:null,rest:[]}};function W2(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.family,r=e===void 0?z:e,i=H2[r][a],s=z2[r][a]||z2[r][i],n=a in S.styles?a:null;return s||n||null}var L3=(B2={},M(B2,z,Object.keys(V2[z])),M(B2,d,Object.keys(V2[d])),B2);function q2(a){var c,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(c={},M(c,z,"".concat(h.cssPrefix,"-").concat(z)),M(c,d,"".concat(h.cssPrefix,"-").concat(d)),c),n=null,t=z;(a.includes(s[z])||a.some(function(m){return L3[z].includes(m)}))&&(t=z),(a.includes(s[d])||a.some(function(m){return L3[d].includes(m)}))&&(t=d);var o=a.reduce(function(m,l){var v=k6(h.cssPrefix,l);if(e2[l]?(l=y6[t].includes(l)?i6[t][l]:l,n=l,m.prefix=l):S6[t].indexOf(l)>-1?(n=l,m.prefix=W2(l,{family:t})):v?m.iconName=v:l!==h.replacementClass&&l!==s[z]&&l!==s[d]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var u=n==="fa"?i4(m.iconName):{},H=j(m.prefix,m.iconName);u.prefix&&(n=null),m.iconName=u.iconName||H||m.iconName,m.prefix=u.prefix||m.prefix,m.prefix==="far"&&!e2.far&&e2.fas&&!h.autoFetchSvg&&(m.prefix="fas")}return m},A1());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===d&&(e2.fass||h.autoFetchSvg)&&(o.prefix="fass",o.iconName=j(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=O()||"fas"),o}var P6=function(){function a(){j4(this,a),this.definitions={}}return $4(a,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=f(f({},e.definitions[t]||{}),n[t]),H1(t,n[t]);var o=V2[z][t];o&&H1(o,n[t]),r4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],t=n.prefix,o=n.iconName,m=n.icon,l=m[2];e[t]||(e[t]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(e[t][v]=m)}),e[t][o]=m}),e}}]),a}(),x3=[],r2={},i2={},F6=Object.keys(i2);function T6(a,c){var e=c.mixoutsTo;return x3=a,r2={},Object.keys(i2).forEach(function(r){F6.indexOf(r)===-1&&delete i2[r]}),x3.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),I2(i[n])==="object"&&Object.keys(i[n]).forEach(function(t){e[n]||(e[n]={}),e[n][t]=i[n][t]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){r2[n]||(r2[n]=[]),r2[n].push(s[n])})}r.provides&&r.provides(i2)}),e}function z1(a,c){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=r2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(r))}),c}function X(a){for(var c=arguments.length,e=new Array(c>1?c-1:0),r=1;r<c;r++)e[r-1]=arguments[r];var i=r2[a]||[];i.forEach(function(s){s.apply(null,e)})}function F(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return i2[a]?i2[a].apply(null,c):void 0}function V1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,e=a.prefix||O();if(c)return c=j(e,c)||c,C3(s4.definitions,e,c)||C3(S.styles,e,c)}var s4=new P6,_6=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,X("noAuto")},B6={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(X("beforeI2svg",c),F("pseudoElements2svg",c),F("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,g6(function(){R6({autoReplaceSvgRoot:e}),X("watch",c)})}},E6={icon:function(c){if(c===null)return null;if(I2(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:j(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],r=W2(c[0]);return{prefix:r,iconName:j(r,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(s6))){var i=q2(c.split(" "),{skipLookups:!0});return{prefix:i.prefix||O(),iconName:j(i.prefix,i.iconName)||i.iconName}}if(typeof c=="string"){var s=O();return{prefix:s,iconName:j(s,c)||c}}}},b={noAuto:_6,config:h,dom:B6,parse:E6,library:s4,findIconDefinition:V1,toHtml:g2},R6=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=c.autoReplaceSvgRoot,r=e===void 0?V:e;(Object.keys(S.styles).length>0||h.autoFetchSvg)&&T&&h.autoReplaceSvg&&b.dom.i2svg({node:r})};function j2(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(r){return g2(r)})}}),Object.defineProperty(a,"node",{get:function(){if(T){var r=V.createElement("div");return r.innerHTML=a.html,r.children}}}),a}function I6(a){var c=a.children,e=a.main,r=a.mask,i=a.attributes,s=a.styles,n=a.transform;if(S1(n)&&e.found&&!r.found){var t=e.width,o=e.height,m={x:t/o/2,y:.5};i.style=G2(f(f({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function O6(a){var c=a.prefix,e=a.iconName,r=a.children,i=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(h.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:n}),children:r}]}]}function D1(a){var c=a.icons,e=c.main,r=c.mask,i=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,m=a.maskId,l=a.titleId,v=a.extra,u=a.watchable,H=u===void 0?!1:u,g=r.found?r:e,N=g.width,y=g.height,w=i==="fak",C=[h.replacementClass,s?"".concat(h.cssPrefix,"-").concat(s):""].filter(function(_){return v.classes.indexOf(_)===-1}).filter(function(_){return _!==""||!!_}).concat(v.classes).join(" "),L={children:[],attributes:f(f({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:C,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(y)})},k=w&&!~v.classes.indexOf("fa-fw")?{width:"".concat(N/y*16*.0625,"em")}:{};H&&(L.attributes[$]=""),o&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||p2())},children:[o]}),delete L.attributes.title);var x=f(f({},L),{},{prefix:i,iconName:s,main:e,mask:r,maskId:m,transform:n,symbol:t,styles:f(f({},k),v.styles)}),G=r.found&&e.found?F("generateAbstractMask",x)||{children:[],attributes:{}}:F("generateAbstractIcon",x)||{children:[],attributes:{}},W=G.children,$2=G.attributes;return x.children=W,x.attributes=$2,t?O6(x):I6(x)}function b3(a){var c=a.content,e=a.width,r=a.height,i=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,m=f(f(f({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(m[$]="");var l=f({},n.styles);S1(i)&&(l.transform=d6({transform:i,startCentered:!0,width:e,height:r}),l["-webkit-transform"]=l.transform);var v=G2(l);v.length>0&&(m.style=v);var u=[];return u.push({tag:"span",attributes:m,children:[c]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function U6(a){var c=a.content,e=a.title,r=a.extra,i=f(f(f({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=G2(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[c]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var l1=S.styles;function d1(a){var c=a[0],e=a[1],r=a.slice(4),i=g1(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:e,icon:n}}var G6={found:!1,width:512,height:512};function W6(a,c){!q3&&!h.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function p1(a,c){var e=c;return c==="fa"&&h.styleDefault!==null&&(c=O()),new Promise(function(r,i){var s={found:!1,width:512,height:512,icon:F("missingIconAbstract")||{}};if(e==="fa"){var n=i4(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&l1[c]&&l1[c][a]){var t=l1[c][a];return r(d1(t))}W6(a,c),r(f(f({},G6),{},{icon:h.showMissingIcons&&a?F("missingIconAbstract")||{}:{}}))})}var N3=function(){},M1=h.measurePerformance&&w2&&w2.mark&&w2.measure?w2:{mark:N3,measure:N3},h2='FA "6.4.2"',q6=function(c){return M1.mark("".concat(h2," ").concat(c," begins")),function(){return n4(c)}},n4=function(c){M1.mark("".concat(h2," ").concat(c," ends")),M1.measure("".concat(h2," ").concat(c),"".concat(h2," ").concat(c," begins"),"".concat(h2," ").concat(c," ends"))},P1={begin:q6,end:n4},E2=function(){};function y3(a){var c=a.getAttribute?a.getAttribute($):null;return typeof c=="string"}function j6(a){var c=a.getAttribute?a.getAttribute(x1):null,e=a.getAttribute?a.getAttribute(b1):null;return c&&e}function $6(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(h.replacementClass)}function X6(){if(h.autoReplaceSvg===!0)return R2.replace;var a=R2[h.autoReplaceSvg];return a||R2.replace}function Y6(a){return V.createElementNS("http://www.w3.org/2000/svg",a)}function Q6(a){return V.createElement(a)}function t4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=c.ceFn,r=e===void 0?a.tag==="svg"?Y6:Q6:e;if(typeof a=="string")return V.createTextNode(a);var i=r(a.tag);Object.keys(a.attributes||[]).forEach(function(n){i.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){i.appendChild(t4(n,{ceFn:r}))}),i}function K6(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var R2={replace:function(c){var e=c[0];if(e.parentNode)if(c[1].forEach(function(i){e.parentNode.insertBefore(t4(i),e)}),e.getAttribute($)===null&&h.keepOriginalSource){var r=V.createComment(K6(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(c){var e=c[0],r=c[1];if(~y1(e).indexOf(h.replacementClass))return R2.replace(c);var i=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(t,o){return o===h.replacementClass||o.match(i)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(t){return g2(t)}).join(`
`);e.setAttribute($,""),e.innerHTML=n}};function S3(a){a()}function o4(a,c){var e=typeof c=="function"?c:E2;if(a.length===0)e();else{var r=S3;h.mutateApproach===e6&&(r=I.requestAnimationFrame||S3),r(function(){var i=X6(),s=P1.begin("mutate");a.map(i),s(),e()})}}var F1=!1;function l4(){F1=!0}function C1(){F1=!1}var U2=null;function w3(a){if(V3&&h.observeMutations){var c=a.treeCallback,e=c===void 0?E2:c,r=a.nodeCallback,i=r===void 0?E2:r,s=a.pseudoElementsCallback,n=s===void 0?E2:s,t=a.observeMutationsRoot,o=t===void 0?V:t;U2=new V3(function(m){if(!F1){var l=O();n2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!y3(v.addedNodes[0])&&(h.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&h.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&y3(v.target)&&~l6.indexOf(v.attributeName))if(v.attributeName==="class"&&j6(v.target)){var u=q2(y1(v.target)),H=u.prefix,g=u.iconName;v.target.setAttribute(x1,H||l),g&&v.target.setAttribute(b1,g)}else $6(v.target)&&i(v.target)})}}),T&&U2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J6(){U2&&U2.disconnect()}function Z6(a){var c=a.getAttribute("style"),e=[];return c&&(e=c.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(r[n]=t.join(":").trim()),r},{})),e}function c0(a){var c=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),r=a.innerText!==void 0?a.innerText.trim():"",i=q2(y1(a));return i.prefix||(i.prefix=O()),c&&e&&(i.prefix=c,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=A6(i.prefix,a.innerText)||k1(i.prefix,u1(a.innerText))),!i.iconName&&h.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=a.firstChild.data)),i}function a0(a){var c=n2(a.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=a.getAttribute("title"),r=a.getAttribute("data-fa-title-id");return h.autoA11y&&(e?c["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(r||p2()):(c["aria-hidden"]="true",c.focusable="false")),c}function e0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=c0(a),r=e.iconName,i=e.prefix,s=e.rest,n=a0(a),t=z1("parseNodeAttributes",{},a),o=c.styleParser?Z6(a):[];return f({iconName:r,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:i,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var r0=S.styles;function f4(a){var c=h.autoReplaceSvg==="nest"?k3(a,{styleParser:!1}):k3(a);return~c.extra.classes.indexOf(j3)?F("generateLayersText",a,c):F("generateSvgReplacementMutation",a,c)}var U=new Set;N1.map(function(a){U.add("fa-".concat(a))});Object.keys(H2[z]).map(U.add.bind(U));Object.keys(H2[d]).map(U.add.bind(U));U=M2(U);function A3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var e=V.documentElement.classList,r=function(v){return e.add("".concat(d3,"-").concat(v))},i=function(v){return e.remove("".concat(d3,"-").concat(v))},s=h.autoFetchSvg?U:N1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(r0));s.includes("fa")||s.push("fa");var n=[".".concat(j3,":not([").concat($,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat($,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=n2(a.querySelectorAll(n))}catch{}if(t.length>0)r("pending"),i("complete");else return Promise.resolve();var o=P1.begin("onTree"),m=t.reduce(function(l,v){try{var u=f4(v);u&&l.push(u)}catch(H){q3||H.name==="MissingIcon"&&console.error(H)}return l},[]);return new Promise(function(l,v){Promise.all(m).then(function(u){o4(u,function(){r("active"),r("complete"),i("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(u){o(),v(u)})})}function i0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;f4(a).then(function(e){e&&o4([e],c)})}function s0(a){return function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(c||{}).icon?c:V1(c||{}),i=e.mask;return i&&(i=(i||{}).icon?i:V1(i||{})),a(r,f(f({},e),{},{mask:i}))}}var n0=function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?A:r,s=e.symbol,n=s===void 0?!1:s,t=e.mask,o=t===void 0?null:t,m=e.maskId,l=m===void 0?null:m,v=e.title,u=v===void 0?null:v,H=e.titleId,g=H===void 0?null:H,N=e.classes,y=N===void 0?[]:N,w=e.attributes,C=w===void 0?{}:w,L=e.styles,k=L===void 0?{}:L;if(c){var x=c.prefix,G=c.iconName,W=c.icon;return j2(f({type:"icon"},c),function(){return X("beforeDOMElementCreation",{iconDefinition:c,params:e}),h.autoA11y&&(u?C["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(g||p2()):(C["aria-hidden"]="true",C.focusable="false")),D1({icons:{main:d1(W),mask:o?d1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:G,transform:f(f({},A),i),symbol:n,title:u,maskId:l,titleId:g,extra:{attributes:C,styles:k,classes:y}})})}},t0={mixout:function(){return{icon:s0(n0)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=A3,e.nodeCallback=i0,e}}},provides:function(c){c.i2svg=function(e){var r=e.node,i=r===void 0?V:r,s=e.callback,n=s===void 0?function(){}:s;return A3(i,n)},c.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,t=r.prefix,o=r.transform,m=r.symbol,l=r.mask,v=r.maskId,u=r.extra;return new Promise(function(H,g){Promise.all([p1(i,t),l.iconName?p1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var y=g1(N,2),w=y[0],C=y[1];H([e,D1({icons:{main:w,mask:C},prefix:t,iconName:i,transform:o,symbol:m,maskId:v,title:s,titleId:n,extra:u,watchable:!0})])}).catch(g)})},c.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,t=e.styles,o=G2(t);o.length>0&&(i.style=o);var m;return S1(n)&&(m=F("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(m||s.icon),{children:r,attributes:i}}}},o0={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return j2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(M2(s)).join(" ")},children:n}]})}}}},l0={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,t=n===void 0?[]:n,o=r.attributes,m=o===void 0?{}:o,l=r.styles,v=l===void 0?{}:l;return j2({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),U6({content:e.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(M2(t))}})})}}}},f0={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?A:i,n=r.title,t=n===void 0?null:n,o=r.classes,m=o===void 0?[]:o,l=r.attributes,v=l===void 0?{}:l,u=r.styles,H=u===void 0?{}:u;return j2({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),b3({content:e,transform:f(f({},A),s),title:t,extra:{attributes:v,styles:H,classes:["".concat(h.cssPrefix,"-layers-text")].concat(M2(m))}})})}}},provides:function(c){c.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,t=null,o=null;if(U3){var m=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();t=l.width/m,o=l.height/m}return h.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,b3({content:e.innerHTML,width:t,height:o,transform:s,title:i,extra:n,watchable:!0})])}}},m0=new RegExp('"',"ug"),D3=[1105920,1112319];function h0(a){var c=a.replace(m0,""),e=b6(c,0),r=e>=D3[0]&&e<=D3[1],i=c.length===2?c[0]===c[1]:!1;return{value:u1(i?c[0]:c),isSecondary:r||i}}function P3(a,c){var e="".concat(a6).concat(c.replace(":","-"));return new Promise(function(r,i){if(a.getAttribute(e)!==null)return r();var s=n2(a.children),n=s.filter(function(W){return W.getAttribute(v1)===c})[0],t=I.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(n6),m=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),r();if(o&&l!=="none"&&l!==""){var v=t.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?d:z,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?z2[u][o[2].toLowerCase()]:t6[u][m],g=h0(v),N=g.value,y=g.isSecondary,w=o[0].startsWith("FontAwesome"),C=k1(H,N),L=C;if(w){var k=D6(N);k.iconName&&k.prefix&&(C=k.iconName,H=k.prefix)}if(C&&!y&&(!n||n.getAttribute(x1)!==H||n.getAttribute(b1)!==L)){a.setAttribute(e,L),n&&a.removeChild(n);var x=e0(),G=x.extra;G.attributes[v1]=c,p1(C,H).then(function(W){var $2=D1(f(f({},x),{},{icons:{main:W,mask:A1()},prefix:H,iconName:L,extra:G,watchable:!0})),_=V.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(_,a.firstChild):a.appendChild(_),_.outerHTML=$2.map(function(v4){return g2(v4)}).join(`
`),a.removeAttribute(e),r()}).catch(i)}else r()}else r()})}function v0(a){return Promise.all([P3(a,"::before"),P3(a,"::after")])}function u0(a){return a.parentNode!==document.head&&!~r6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(v1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function F3(a){if(T)return new Promise(function(c,e){var r=n2(a.querySelectorAll("*")).filter(u0).map(v0),i=P1.begin("searchPseudoElements");l4(),Promise.all(r).then(function(){i(),C1(),c()}).catch(function(){i(),C1(),e()})})}var H0={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=F3,e}}},provides:function(c){c.pseudoElements2svg=function(e){var r=e.node,i=r===void 0?V:r;h.searchPseudoElements&&F3(i)}}},T3=!1,z0={mixout:function(){return{dom:{unwatch:function(){l4(),T3=!0}}}},hooks:function(){return{bootstrap:function(){w3(z1("mutationObserverCallbacks",{}))},noAuto:function(){J6()},watch:function(e){var r=e.observeMutationsRoot;T3?C1():w3(z1("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_3=function(c){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return r.flipX=!0,r;if(n&&t==="v")return r.flipY=!0,r;if(t=parseFloat(t),isNaN(t))return r;switch(n){case"grow":r.size=r.size+t;break;case"shrink":r.size=r.size-t;break;case"left":r.x=r.x-t;break;case"right":r.x=r.x+t;break;case"up":r.y=r.y-t;break;case"down":r.y=r.y+t;break;case"rotate":r.rotate=r.rotate+t;break}return r},e)},V0={mixout:function(){return{parse:{transform:function(e){return _3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-transform");return i&&(e.transform=_3(i)),e}}},provides:function(c){c.generateAbstractTransformGrouping=function(e){var r=e.main,i=e.transform,s=e.containerWidth,n=e.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(o," ").concat(m," ").concat(l)},u={transform:"translate(".concat(n/2*-1," -256)")},H={outer:t,inner:v,path:u};return{tag:"g",attributes:f({},H.outer),children:[{tag:"g",attributes:f({},H.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),H.path)}]}]}}}},f1={x:0,y:0,width:"100%",height:"100%"};function B3(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function d0(a){return a.tag==="g"?a.children:[a]}var p0={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-mask"),s=i?q2(i.split(" ").map(function(n){return n.trim()})):A1();return s.prefix||(s.prefix=O()),e.mask=s,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(c){c.generateAbstractMask=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.mask,t=e.maskId,o=e.transform,m=s.width,l=s.icon,v=n.width,u=n.icon,H=V6({transform:o,containerWidth:v,iconWidth:m}),g={tag:"rect",attributes:f(f({},f1),{},{fill:"white"})},N=l.children?{children:l.children.map(B3)}:{},y={tag:"g",attributes:f({},H.inner),children:[B3(f({tag:l.tag,attributes:f(f({},l.attributes),H.path)},N))]},w={tag:"g",attributes:f({},H.outer),children:[y]},C="mask-".concat(t||p2()),L="clip-".concat(t||p2()),k={tag:"mask",attributes:f(f({},f1),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,w]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:d0(u)},k]};return r.push(x,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},f1)}),{children:r,attributes:i}}}},M0={provides:function(c){var e=!1;I.matchMedia&&(e=I.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:f(f({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(t),r.push({tag:"path",attributes:f(f({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:f(f({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},C0={hooks:function(){return{parseNodeAttributes:function(e,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return e.symbol=s,e}}}},g0=[M6,t0,o0,l0,f0,H0,z0,V0,p0,M0,C0];T6(g0,{mixoutsTo:b});var t8=b.noAuto,o8=b.config,l8=b.library,f8=b.dom,m4=b.parse,m8=b.findIconDefinition,h8=b.toHtml,h4=b.icon,v8=b.layer,L0=b.text,x0=b.counter;var b0=["*"],N0=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},y0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},S0=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(e=>c[e]?e:null).filter(e=>e)},w0=a=>a.prefix!==void 0&&a.iconName!==void 0,k0=(a,c)=>w0(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},A0=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=L2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),D0=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...r){for(let i of r){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...r){for(let i of r){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(r,i){return r in this.definitions&&i in this.definitions[r]?this.definitions[r][i]:null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=L2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),P0=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=E({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Z]});let a=c;return a})(),F0=(()=>{let c=class c{constructor(r,i){this.renderer=r,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};c.\u0275fac=function(i){return new(i||c)(p(o2),p(t2))},c.\u0275cmp=Y2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Z,c1],ngContentSelectors:b0,decls:1,vars:0,template:function(i,s){i&1&&(G1(),W1(0))},encapsulation:2});let a=c;return a})(),V8=(()=>{let c=class c{set spin(r){this.animation=r?"spin":void 0}set pulse(r){this.animation=r?"spin-pulse":void 0}constructor(r,i,s,n,t){this.sanitizer=r,this.config=i,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){y0();return}if(r){let i=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(i);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(r){let i=k0(r,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(N0(i),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?m4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...S0(r),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(r,i){let s=h4(r,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};c.\u0275fac=function(i){return new(i||c)(p(j1),p(A0),p(D0),p(P0,8),p(F0,8))},c.\u0275cmp=Y2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(I1("innerHTML",s.renderedIconHTML,E1),K2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Z,c1],decls:0,vars:0,template:function(i,s){},encapsulation:2});let a=c;return a})();var d8=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=J({type:c}),c.\u0275inj=Q({});let a=c;return a})();var M8={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};var C8={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]};var g8={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]};var L8={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]};var x8={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]};var b8={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var N8={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"]};var y8={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};export{a3 as a,e3 as b,a8 as c,G4 as d,r8 as e,D0 as f,V8 as g,d8 as h,M8 as i,C8 as j,g8 as k,L8 as l,x8 as m,b8 as n,N8 as o,y8 as p};
