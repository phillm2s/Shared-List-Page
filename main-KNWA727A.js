import{a as Oe,b as Ae,d as qt,j as Qt,k as Xt,n as oe,o as Zt}from"./chunk-SMMFEMOR.js";import{I as Bt,L as Ut,M as Ht,O as Ke,Q as zt,S as $e,V as Wt,W as Yt,Y as ke,Z as De,_ as re,c as Se,d as Ot,g as At,h as Tt,i as Pt,j as xt,k as Ft,l as Nt,m as Re,o as jt,r as Lt,y as Vt}from"./chunk-5C66KFD7.js";import"./chunk-X5YLR3NI.js";import{f as Gt,g as se,h as xe,m as Kt,n as Fe,p as $t,u as Jt}from"./chunk-XUHNUP5Y.js";import{d as H,j as Dt,l as Ge,r as Je,s as Te,u as z,v as et,w as Pe}from"./chunk-I3BUSZFZ.js";import{$a as ve,Cb as k,Da as qe,E as _,Ea as G,Eb as v,Fb as Ze,G as X,Gb as ye,Hb as Me,Ib as wt,Jb as ee,Kb as te,M as ut,Nb as Ct,Ob as b,Qb as we,R as me,S as R,Sa as E,Sb as It,T as de,Ta as l,Tb as g,U as mt,Ua as ft,Ub as Et,V as Z,Va as Qe,Vb as St,Wa as _t,X as T,Y as pe,Ya as _e,_ as y,_a as vt,_b as Rt,a as ue,aa as P,ac as Ce,ba as M,bb as K,cc as kt,da as h,dc as Ie,ea as he,ec as ne,f as j,fa as dt,fb as Xe,ga as ge,gc as ie,h as He,ib as $,ic as Ee,j as at,k as D,ka as pt,kb as bt,l as lt,lb as J,ma as w,mb as S,na as C,o as O,oa as ht,ob as yt,pb as Mt,qb as be,r as ct,s as ze,sa as V,ta as Ye,u as We,va as B,vb as c,w as A,wa as I,wb as u,x as L,xb as x,y as f,ya as fe,za as gt,zb as U}from"./chunk-IUP4W3N2.js";import{a as N,b as st}from"./chunk-ODN5LVDJ.js";var pn=(()=>{class o extends Fe{constructor(e,t,n){super(e,t,n)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(t){return new(t||o)(P(H),P(se),P(xe))}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac})}}return o})();function hn(){return new Kt}function gn(o,i,e){return new Jt(o,i,e)}var en=[{provide:xe,useFactory:hn},{provide:Fe,useClass:pn},{provide:_e,useFactory:gn,deps:[Se,Fe,I]}],fn=[{provide:se,useFactory:()=>new $t},{provide:G,useValue:"BrowserAnimations"},...en],ri=[{provide:se,useClass:Gt},{provide:G,useValue:"NoopAnimations"},...en];function tn(){return ve("NgEagerAnimations"),[...fn]}var _n="@",vn=(()=>{class o{constructor(e,t,n,r,s){this.doc=e,this.delegate=t,this.zone=n,this.animationType=r,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=M(_t,{optional:!0}),this.loadingSchedulerFn=M(bn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-QXZ4FBXY.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new Z(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let r=new tt(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let a=s.createRenderer(e,t);r.use(a),this.scheduler?.notify(10)}).catch(s=>{r.use(n)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){ft()}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac})}}return o})(),tt=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,n){this.delegate.insertBefore(i,e,t,n)}removeChild(i,e,t){this.delegate.removeChild(i,e,t)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,n){this.delegate.setAttribute(i,e,t,n)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,n){this.delegate.setStyle(i,e,t,n)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(i,e,t)),this.delegate.listen(i,e,t)}shouldReplay(i){return this.replay!==null&&i.startsWith(_n)}},bn=new y("");function nn(o="animations"){return ve("NgAsyncAnimations"),ge([{provide:_e,useFactory:(i,e,t)=>new vn(i,e,t,o),deps:[H,Se,I]},{provide:G,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var le="Service workers are disabled or not supported by this browser";function yn(o){return ze(()=>lt(new Error(o)))}var W=class{constructor(i){if(this.serviceWorker=i,!i)this.worker=this.events=this.registration=yn(le);else{let t=We(i,"controllerchange").pipe(O(()=>i.controller)),n=ze(()=>D(i.controller)),r=ct(n,t);this.worker=r.pipe(f(d=>!!d)),this.registration=this.worker.pipe(R(()=>i.getRegistration()));let p=We(i,"message").pipe(O(d=>d.data)).pipe(f(d=>d&&d.type)).pipe(ut());p.connect(),this.events=p}}postMessage(i,e){return this.worker.pipe(_(1),mt(t=>{t.postMessage(N({action:i},e))})).toPromise().then(()=>{})}postMessageWithOperation(i,e,t){let n=this.waitForOperationCompleted(t),r=this.postMessage(i,e);return Promise.all([r,n]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(i){let e;return typeof i=="string"?e=t=>t.type===i:e=t=>i.includes(t.type),this.events.pipe(f(e))}nextEventOfType(i){return this.eventsOfType(i).pipe(_(1))}waitForOperationCompleted(i){return this.eventsOfType("OPERATION_COMPLETED").pipe(f(e=>e.nonce===i),_(1),O(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},Mn=(()=>{class o{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,this.pushManager=null,this.subscriptionChanges=new j,!e.isEnabled){this.messages=L,this.notificationClicks=L,this.subscription=L;return}this.messages=this.sw.eventsOfType("PUSH").pipe(O(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(O(n=>n.data)),this.pushManager=this.sw.registration.pipe(O(n=>n.pushManager));let t=this.pushManager.pipe(R(n=>n.getSubscription()));this.subscription=A(t,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(le));let t={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),r=new Uint8Array(new ArrayBuffer(n.length));for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return t.applicationServerKey=r,this.pushManager.pipe(R(s=>s.subscribe(t)),_(1)).toPromise().then(s=>(this.subscriptionChanges.next(s),s))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(le));let e=t=>{if(t===null)throw new Error("Not subscribed to push notifications.");return t.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(_(1),R(e)).toPromise()}decodeBase64(e){return atob(e)}static{this.\u0275fac=function(t){return new(t||o)(P(W))}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac})}}return o})(),wn=(()=>{class o{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=L,this.unrecoverable=L;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(le));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(le));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static{this.\u0275fac=function(t){return new(t||o)(P(W))}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac})}}return o})();var on=new y("");function Cn(o,i,e,t){return()=>{if(!(Ge(t)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let n=o.get(I),r=o.get(Ce);n.runOutsideAngular(()=>{let a=navigator.serviceWorker,m=()=>a.controller?.postMessage({action:"INITIALIZE"});a.addEventListener("controllerchange",m),r.onDestroy(()=>{a.removeEventListener("controllerchange",m)})});let s;if(typeof e.registrationStrategy=="function")s=e.registrationStrategy();else{let[a,...m]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(a){case"registerImmediately":s=D(null);break;case"registerWithDelay":s=rn(+m[0]||0);break;case"registerWhenStable":let p=at(o.get(Ce).whenStable());s=m[0]?A(p,rn(+m[0])):p;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}n.runOutsideAngular(()=>s.pipe(_(1)).subscribe(()=>navigator.serviceWorker.register(i,{scope:e.scope}).catch(a=>console.error("Service worker registration failed with:",a))))}}function rn(o){return D(null).pipe(X(o))}function In(o,i){return new W(Ge(i)&&o.enabled!==!1?navigator.serviceWorker:void 0)}var ae=class{};function Ne(o,i={}){return ge([Mn,wn,{provide:on,useValue:o},{provide:ae,useValue:i},{provide:W,useFactory:In,deps:[ae,qe]},{provide:Rt,useFactory:Cn,deps:[V,on,ae,qe],multi:!0}])}var sn={providers:[kt({eventCoalescing:!0}),xt(Object.values(re),Ft({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}),Nt()),tn(),nn(),Ne("ngsw-worker.js",{enabled:!Ie(),registrationStrategy:"registerWhenStable:30000"}),Ne("ngsw-worker.js",{enabled:!Ie(),registrationStrategy:"registerWhenStable:30000"}),Ne("ngsw-worker.js",{enabled:!Ie(),registrationStrategy:"registerWhenStable:30000"})]};function nt(o,i){let e=!i?.manualCleanup;e&&!i?.injector&&pt(nt);let t=e?i?.injector?.get(Ye)??M(Ye):null,n=En(i?.equal),r;i?.requireSync?r=K({kind:0},{equal:n}):r=K({kind:1,value:i?.initialValue},{equal:n});let s=o.subscribe({next:a=>r.set({kind:1,value:a}),error:a=>{if(i?.rejectErrors)throw a;r.set({kind:2,error:a})}});if(i?.requireSync&&r().kind===0)throw new Z(601,!1);return t?.onDestroy(s.unsubscribe.bind(s)),Ee(()=>{let a=r();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new Z(601,!1)}},{equal:i?.equal})}function En(o=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&o(i.value,e.value)}var An=["mat-menu-item",""],Tn=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Pn=["mat-icon, [matMenuItemIcon]","*"];function xn(o,i){o&1&&(ht(),c(0,"svg",2),x(1,"polygon",3),u())}var Fn=["*"];function Nn(o,i){if(o&1){let e=U();c(0,"div",0),k("keydown",function(n){w(e);let r=v();return C(r._handleKeydown(n))})("click",function(){w(e);let n=v();return C(n.closed.emit("click"))})("@transformMenu.start",function(n){w(e);let r=v();return C(r._onAnimationStart(n))})("@transformMenu.done",function(n){w(e);let r=v();return C(r._onAnimationDone(n))}),c(1,"div",1),ye(2),u()()}if(o&2){let e=v();Mt(e._classList),S("id",e.panelId)("@transformMenu",e._panelAnimationState),J("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var it=new y("MAT_MENU_PANEL"),ce=(()=>{class o{constructor(e,t,n,r,s){this._elementRef=e,this._document=t,this._focusMonitor=n,this._parentMenu=r,this._changeDetectorRef=s,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new j,this._focused=new j,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static{this.\u0275fac=function(t){return new(t||o)(l(fe),l(H),l(Ke),l(it,8),l(ne))}}static{this.\u0275cmp=h({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&k("click",function(s){return n._checkDisabled(s)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(J("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),yt("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",ie],disableRipple:[2,"disableRipple","disableRipple",ie]},exportAs:["matMenuItem"],standalone:!0,features:[Xe,g],attrs:An,ngContentSelectors:Pn,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(Ze(Tn),ye(0),c(1,"span",0),ye(2,1),u(),x(3,"div",1),$(4,xn,2,0,":svg:svg",2)),t&2&&(E(3),S("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),E(),be(n._triggersSubmenu?4:-1))},dependencies:[Wt],encapsulation:2,changeDetection:0})}}return o})();var jn=new y("MatMenuContent");var je={transformMenu:Je("transformMenu",[et("void",z({opacity:0,transform:"scale(0.8)"})),Pe("void => enter",Te("120ms cubic-bezier(0, 0, 0.2, 1)",z({opacity:1,transform:"scale(1)"}))),Pe("* => void",Te("100ms 25ms linear",z({opacity:0})))]),fadeInItems:Je("fadeInItems",[et("showing",z({opacity:1})),Pe("void => *",[z({opacity:0}),Te("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},uo=je.fadeInItems,mo=je.transformMenu,Ln=0,Vn=new y("mat-menu-default-options",{providedIn:"root",factory:Bn});function Bn(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var Y=(()=>{class o{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass,n=N({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,n,r){this._elementRef=e,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=null,this._directDescendantItems=new gt,this._classList={},this._panelAnimationState="void",this._animationDone=new j,this.closed=new B,this.close=this.closed,this.panelId=`mat-menu-panel-${Ln++}`,this._injector=M(V),this.overlayPanelClass=n.overlayPanelClass||"",this._xPosition=n.xPosition,this._yPosition=n.yPosition,this.backdropClass=n.backdropClass,this.overlapTrigger=n.overlapTrigger,this.hasBackdrop=n.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Bt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(me(this._directDescendantItems),R(e=>A(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(me(this._directDescendantItems),R(t=>A(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:Vt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=bt(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){if(this._baseElevation===null){let a=(typeof getComputedStyle=="function"?getComputedStyle(this._elementRef.nativeElement):null)?.getPropertyValue("--mat-menu-base-elevation-level")||"8";this._baseElevation=parseInt(a)}let t=Math.min(this._baseElevation+e,24),n=`${this._elevationPrefix}${t}`,r=Object.keys(this._classList).find(s=>s.startsWith(this._elevationPrefix));if(!r||r===this._previousElevation){let s=N({},this._classList);this._previousElevation&&(s[this._previousElevation]=!1),s[n]=!0,this._previousElevation=n,this._classList=s}}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=st(N({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(me(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static{this.\u0275fac=function(t){return new(t||o)(l(fe),l(I),l(Vn),l(ne))}}static{this.\u0275cmp=h({type:o,selectors:[["mat-menu"]],contentQueries:function(t,n,r){if(t&1&&(Me(r,jn,5),Me(r,ce,5),Me(r,ce,4)),t&2){let s;ee(s=te())&&(n.lazyContent=s.first),ee(s=te())&&(n._allItems=s),ee(s=te())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&wt(Qe,5),t&2){let r;ee(r=te())&&(n.templateRef=r.first)}},hostVars:3,hostBindings:function(t,n){t&2&&J("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:ie(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[It([{provide:it,useExisting:o}]),Xe,g],ngContentSelectors:Fn,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(Ze(),$(0,Nn,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[je.transformMenu,je.fadeInItems]},changeDetection:0})}}return o})(),un=new y("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=M(oe);return()=>o.scrollStrategies.reposition()}});function Un(o){return()=>o.scrollStrategies.reposition()}var Hn={provide:un,deps:[oe],useFactory:Un},an=Lt({passive:!0});var mn=(()=>{class o{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,n,r,s,a,m,p,d){this._overlay=e,this._element=t,this._viewContainerRef=n,this._menuItemInstance=a,this._dir=m,this._focusMonitor=p,this._ngZone=d,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=ue.EMPTY,this._hoverSubscription=ue.EMPTY,this._menuCloseSubscription=ue.EMPTY,this._changeDetectorRef=M(ne),this._handleTouchStart=q=>{Ht(q)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new B,this.onMenuOpen=this.menuOpened,this.menuClosed=new B,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=s instanceof Y?s:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,an)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,an),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),n=t.getConfig(),r=n.positionStrategy;this._setPosition(e,r),n.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof Y&&(e._startAnimation(),e._directDescendantItems.changes.pipe(de(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof Y?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(f(n=>n.toState==="void"),_(1),de(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,n=e.parentMenu;for(;n;)t++,n=n.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new Xt({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{let r=n.connectionPair.overlayX==="start"?"after":"before",s=n.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(r,s)):e.setPositionClasses(r,s)})}_setPosition(e,t){let[n,r]=e.xPosition==="before"?["end","start"]:["start","end"],[s,a]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[m,p]=[s,a],[d,q]=[n,r],Q=0;if(this.triggersSubmenu()){if(q=n=e.xPosition==="before"?"start":"end",r=d=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let rt=this._parentMaterialMenu.items.first;this._parentInnerPadding=rt?rt._getHostElement().offsetTop:0}Q=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(m=s==="top"?"bottom":"top",p=a==="top"?"bottom":"top");t.withPositions([{originX:n,originY:m,overlayX:d,overlayY:s,offsetY:Q},{originX:r,originY:m,overlayX:q,overlayY:s,offsetY:Q},{originX:n,originY:p,overlayX:d,overlayY:a,offsetY:-Q},{originX:r,originY:p,overlayX:q,overlayY:a,offsetY:-Q}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:D(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(f(s=>s!==this._menuItemInstance),f(()=>this._menuOpen)):D();return A(e,n,r,t)}_handleMousedown(e){Ut(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(f(e=>e===this._menuItemInstance&&!e.disabled),X(0,He)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof Y&&this.menu._isAnimating?this.menu._animationDone.pipe(_(1),X(0,He),de(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new qt(e.templateRef,this._viewContainerRef)),this._portal}static{this.\u0275fac=function(t){return new(t||o)(l(oe),l(fe),l(vt),l(un),l(it,8),l(ce,10),l(zt,8),l(Ke),l(I))}}static{this.\u0275dir=dt({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&k("click",function(s){return n._handleClick(s)})("mousedown",function(s){return n._handleMousedown(s)})("keydown",function(s){return n._handleKeydown(s)}),t&2&&J("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0})}}return o})(),dn=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=he({type:o})}static{this.\u0275inj=pe({providers:[Hn],imports:[Dt,Yt,$e,Zt,Qt,$e]})}}return o})();var Le=class o{email;logoutOnClickEvent=new B;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["app-header-menu"]],inputs:{email:"email"},outputs:{logoutOnClickEvent:"logoutOnClickEvent"},standalone:!0,features:[g],decls:13,vars:2,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["id","menu-container"],["id","email"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1){let n=U();c(0,"button",1)(1,"mat-icon"),b(2,"account_circle"),u()(),c(3,"mat-menu",null,0)(5,"div",2)(6,"div",3),b(7),u(),c(8,"button",4),k("click",function(){return w(n),C(t.logoutOnClickEvent.emit())}),c(9,"mat-icon"),b(10,"logout"),u(),c(11,"span"),b(12,"Logout"),u()()()()}if(e&2){let n=Ct(4);S("matMenuTriggerFor",n),E(7),we(" ",t.email," ")}},dependencies:[dn,Y,ce,mn,Ae,Oe,De,ke],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}#email[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})};var qn=()=>["/"],Qn=o=>["/",o];function Xn(o,i){if(o&1&&(c(0,"button",3)(1,"mat-icon"),b(2,"login"),u()()),o&2){let e=v();S("routerLink",St(1,Qn,e.LOGIN_ROUTE))}}function Zn(o,i){if(o&1){let e=U();c(0,"app-header-menu",5),k("logoutOnClickEvent",function(){w(e);let n=v();return C(n.logoutOnClick())}),u()}if(o&2){let e=v();S("email",e.currentUserEmail())}}var Ve=class o{constructor(i,e){this.router=i;this.authService=e;this.isLoggedIn=nt(this.authService.isLoggedInObservable(),{initialValue:!1}),this.currentUserEmail=Ee(()=>(this.isLoggedIn(),this.authService.getUserDataFromSession()?.email??null)),console.log(this.authService.getUserDataFromSession())}isLoggedIn;currentUserEmail=K(null);LOGIN_ROUTE=re.login.path;logoutOnClick(){this.authService.logout(),this.router.navigate(["/",re.login.path])}static \u0275fac=function(e){return new(e||o)(l(Tt),l(jt))};static \u0275cmp=h({type:o,selectors:[["app-header"]],standalone:!0,features:[g],decls:6,vars:3,consts:[["id","title-container",3,"routerLink"],["id","title"],["id","login-container"],["mat-icon-button","",3,"routerLink"],[3,"email"],[3,"logoutOnClickEvent","email"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1),b(2,"Shared Lists"),u()(),c(3,"div",2),$(4,Xn,3,3,"button",3)(5,Zn,1,1,"app-header-menu",4),u()),e&2&&(S("routerLink",Et(2,qn)),E(4),be(t.isLoggedIn()?5:4))},dependencies:[Pt,De,ke,Ae,Oe,Le],styles:["[_nghost-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:var(--special-color-1)}#title-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#title-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{margin-left:1rem;font-size:1.5rem;font-weight:200;text-transform:uppercase;letter-spacing:.3rem}"]})};var Be=class o{displayedVersionNumber;constructor(){this.displayedVersionNumber=Re.stage==="localdev"?`${Re.buildInfos.version}-dev`:Re.buildInfos.version}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["app-footer"]],standalone:!0,features:[g],decls:2,vars:1,consts:[["id","app-version"]],template:function(e,t){e&1&&(c(0,"div",0),b(1),u()),e&2&&(E(),we("v",t.displayedVersionNumber,""))},styles:["[_nghost-%COMP%]{display:flex;background-color:var(--special-color-1)}"]})};var Ue=class o{title="SharedLists";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["app-root"]],standalone:!0,features:[g],decls:5,vars:0,consts:[["id","content-and-header-container"],["id","content"],["id","footer"]],template:function(e,t){e&1&&(x(0,"app-header"),c(1,"div",0)(2,"div",1),x(3,"router-outlet"),u(),x(4,"app-footer",2),u())},dependencies:[At,Ve,Be],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100%;max-height:100%;height:100%}#content-and-header-container[_ngcontent-%COMP%]{overflow-y:auto;scroll-behavior:smooth;flex-grow:1;display:flex;flex-direction:column}#content-and-header-container[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%]{flex:1}"]})};Ot(Ue,sn).catch(o=>console.error(o));
