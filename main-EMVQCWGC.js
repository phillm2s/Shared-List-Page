import{a as At,d as q,e as xt}from"./chunk-E2VXD774.js";import{a as ge,b as _e,d as kt,m as Et}from"./chunk-TVP7ZSJB.js";import{I as Ct,L as It,M as wt,O as Le,Q as Rt,S as Be,V as St,W as Dt,Y as he,Z as fe,_ as Q,c as de,d as dt,g as pt,h as ht,i as ft,j as gt,k as _t,l as vt,m as pe,o as yt,r as bt,y as Mt}from"./chunk-RSLJEYK6.js";import"./chunk-X5YLR3NI.js";import{f as Ot,g as W,h as be,m as Pt,n as Me,p as Tt,u as Ft}from"./chunk-MGGPJ23G.js";import{d as S,j as ut,r as He,s as ve,u as D,v as Ve,w as ye}from"./chunk-CGMG4ZAC.js";import{$ as f,$a as L,$b as z,Ab as b,Ca as j,Cb as p,D as Ee,Db as je,Eb as le,F as Ae,Fb as ce,Gb as rt,Hb as V,Ib as U,Lb as st,Mb as h,Ob as me,P as J,Pb as at,Q as xe,Qa as v,Qb as d,R as ee,Ra as a,Rb as lt,Sa as Je,Sb as ct,T as N,Ta as Fe,Ua as et,V as te,W as Oe,Wa as re,Y as M,Ya as tt,Za as se,_ as ie,_b as mt,a as Z,ba as u,bc as Y,ca as Pe,da as Xe,db as Ne,dc as ue,ea as Ge,f as K,gb as B,h as De,ia as Ze,ib as it,jb as H,k as ke,ka as g,kb as y,la as _,ma as Ke,mb as nt,nb as ot,ob as ae,qa as ne,ra as Te,ta as w,tb as l,ua as C,ub as m,vb as I,w as $,wa as oe,x as F,xa as $e,xb as R}from"./chunk-NBWXBSXW.js";import{a as G,b as We}from"./chunk-ODN5LVDJ.js";var Qt=(()=>{class o extends Me{constructor(e,t,i){super(e,t,i)}ngOnDestroy(){this.flush()}static{this.\u0275fac=function(t){return new(t||o)(ie(S),ie(W),ie(be))}}static{this.\u0275prov=te({token:o,factory:o.\u0275fac})}}return o})();function Wt(){return new Pt}function Xt(o,n,e){return new Ft(o,n,e)}var Nt=[{provide:be,useFactory:Wt},{provide:Me,useClass:Qt},{provide:re,useFactory:Xt,deps:[de,Me,C]}],Gt=[{provide:W,useFactory:()=>new Tt},{provide:j,useValue:"BrowserAnimations"},...Nt],Pi=[{provide:W,useClass:Ot},{provide:j,useValue:"NoopAnimations"},...Nt];function jt(){return se("NgEagerAnimations"),[...Gt]}var Zt="@",Kt=(()=>{class o{constructor(e,t,i,r,s){this.doc=e,this.delegate=t,this.zone=i,this.animationType=r,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=f(et,{optional:!0}),this.loadingSchedulerFn=f($t,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-OEESHJKR.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new N(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc);let s=new r(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let r=new Ue(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(e,t);r.use(c),this.scheduler?.notify(10)}).catch(s=>{r.use(i)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){Je()}}static{this.\u0275prov=te({token:o,factory:o.\u0275fac})}}return o})(),Ue=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,i){this.delegate.insertBefore(n,e,t,i)}removeChild(n,e,t){this.delegate.removeChild(n,e,t)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,i){this.delegate.setAttribute(n,e,t,i)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,i){this.delegate.setStyle(n,e,t,i)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(n,e,t)),this.delegate.listen(n,e,t)}shouldReplay(n){return this.replay!==null&&n.startsWith(Zt)}},$t=new M("");function Lt(o="animations"){return se("NgAsyncAnimations"),Ge([{provide:re,useFactory:(n,e,t)=>new Kt(n,e,t,o),deps:[S,de,C]},{provide:j,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Bt={providers:[mt({eventCoalescing:!0}),gt(Object.values(Q),_t({scrollPositionRestoration:"enabled",anchorScrolling:"enabled"}),vt()),jt(),Lt()]};function ze(o,n){let e=!n?.manualCleanup;e&&!n?.injector&&Ze(ze);let t=e?n?.injector?.get(Te)??f(Te):null,i=Jt(n?.equal),r;n?.requireSync?r=L({kind:0},{equal:i}):r=L({kind:1,value:n?.initialValue},{equal:i});let s=o.subscribe({next:c=>r.set({kind:1,value:c}),error:c=>{if(n?.rejectErrors)throw c;r.set({kind:2,error:c})}});if(n?.requireSync&&r().kind===0)throw new N(601,!1);return t?.onDestroy(s.unsubscribe.bind(s)),ue(()=>{let c=r();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new N(601,!1)}},{equal:n?.equal})}function Jt(o=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&o(n.value,e.value)}var ri=["mat-menu-item",""],si=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ai=["mat-icon, [matMenuItemIcon]","*"];function li(o,n){o&1&&(Ke(),l(0,"svg",2),I(1,"polygon",3),m())}var ci=["*"];function mi(o,n){if(o&1){let e=R();l(0,"div",0),b("keydown",function(i){g(e);let r=p();return _(r._handleKeydown(i))})("click",function(){g(e);let i=p();return _(i.closed.emit("click"))})("@transformMenu.start",function(i){g(e);let r=p();return _(r._onAnimationStart(i))})("@transformMenu.done",function(i){g(e);let r=p();return _(r._onAnimationDone(i))}),l(1,"div",1),le(2),m()()}if(o&2){let e=p();ot(e._classList),y("id",e.panelId)("@transformMenu",e._panelAnimationState),H("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ye=new M("MAT_MENU_PANEL"),X=(()=>{class o{constructor(e,t,i,r,s){this._elementRef=e,this._document=t,this._focusMonitor=i,this._parentMenu=r,this._changeDetectorRef=s,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new K,this._focused=new K,this._highlighted=!1,this._triggersSubmenu=!1,r?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static{this.\u0275fac=function(t){return new(t||o)(a(oe),a(S),a(Le),a(Ye,8),a(z))}}static{this.\u0275cmp=u({type:o,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&b("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(H("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),nt("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Y],disableRipple:[2,"disableRipple","disableRipple",Y]},exportAs:["matMenuItem"],standalone:!0,features:[Ne,d],attrs:ri,ngContentSelectors:ai,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(je(si),le(0),l(1,"span",0),le(2,1),m(),I(3,"div",1),B(4,li,2,0,":svg:svg",2)),t&2&&(v(3),y("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),v(),ae(i._triggersSubmenu?4:-1))},dependencies:[St],encapsulation:2,changeDetection:0})}}return o})();var ui=new M("MatMenuContent");var Ce={transformMenu:He("transformMenu",[Ve("void",D({opacity:0,transform:"scale(0.8)"})),ye("void => enter",ve("120ms cubic-bezier(0, 0, 0.2, 1)",D({opacity:1,transform:"scale(1)"}))),ye("* => void",ve("100ms 25ms linear",D({opacity:0})))]),fadeInItems:He("fadeInItems",[Ve("showing",D({opacity:1})),ye("void => *",[D({opacity:0}),ve("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},xn=Ce.fadeInItems,On=Ce.transformMenu,di=0,pi=new M("mat-menu-default-options",{providedIn:"root",factory:hi});function hi(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}var E=(()=>{class o{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){let t=this._previousPanelClass,i=G({},this._classList);t&&t.length&&t.split(" ").forEach(r=>{i[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(r=>{i[r]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,t,i,r){this._elementRef=e,this._changeDetectorRef=r,this._elevationPrefix="mat-elevation-z",this._baseElevation=null,this._directDescendantItems=new $e,this._classList={},this._panelAnimationState="void",this._animationDone=new K,this.closed=new w,this.close=this.closed,this.panelId=`mat-menu-panel-${di++}`,this._injector=f(ne),this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ct(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(J(this._directDescendantItems),xe(e=>$(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),r=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[r]&&!i[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy()}_hovered(){return this._directDescendantItems.changes.pipe(J(this._directDescendantItems),xe(t=>$(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Mt(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=it(()=>{let t=null;if(this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){if(this._baseElevation===null){let c=(typeof getComputedStyle=="function"?getComputedStyle(this._elementRef.nativeElement):null)?.getPropertyValue("--mat-menu-base-elevation-level")||"8";this._baseElevation=parseInt(c)}let t=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${t}`,r=Object.keys(this._classList).find(s=>s.startsWith(this._elevationPrefix));if(!r||r===this._previousElevation){let s=G({},this._classList);this._previousElevation&&(s[this._previousElevation]=!1),s[i]=!0,this._previousElevation=i,this._classList=s}}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=We(G({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,e.toState==="enter"&&this._keyManager.activeItemIndex===0&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe(J(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static{this.\u0275fac=function(t){return new(t||o)(a(oe),a(C),a(pi),a(z))}}static{this.\u0275cmp=u({type:o,selectors:[["mat-menu"]],contentQueries:function(t,i,r){if(t&1&&(ce(r,ui,5),ce(r,X,5),ce(r,X,4)),t&2){let s;V(s=U())&&(i.lazyContent=s.first),V(s=U())&&(i._allItems=s),V(s=U())&&(i.items=s)}},viewQuery:function(t,i){if(t&1&&rt(Fe,5),t&2){let r;V(r=U())&&(i.templateRef=r.first)}},hostVars:3,hostBindings:function(t,i){t&2&&H("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Y],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:Y(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[at([{provide:Ye,useExisting:o}]),Ne,d],ngContentSelectors:ci,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(je(),B(0,mi,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[Ce.transformMenu,Ce.fadeInItems]},changeDetection:0})}}return o})(),zt=new M("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let o=f(q);return()=>o.scrollStrategies.reposition()}});function fi(o){return()=>o.scrollStrategies.reposition()}var gi={provide:zt,deps:[q],useFactory:fi},Ht=bt({passive:!0});var Yt=(()=>{class o{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,t,i,r,s,c,A,x,O){this._overlay=e,this._element=t,this._viewContainerRef=i,this._menuItemInstance=c,this._dir=A,this._focusMonitor=x,this._ngZone=O,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=Z.EMPTY,this._hoverSubscription=Z.EMPTY,this._menuCloseSubscription=Z.EMPTY,this._changeDetectorRef=f(z),this._handleTouchStart=P=>{wt(P)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new w,this.onMenuOpen=this.menuOpened,this.menuClosed=new w,this.onMenuClose=this.menuClosed,this._scrollStrategy=r,this._parentMaterialMenu=s instanceof E?s:void 0,t.nativeElement.addEventListener("touchstart",this._handleTouchStart,Ht)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Ht),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){let e=this.menu;if(this._menuOpen||!e)return;let t=this._createOverlay(e),i=t.getConfig(),r=i.positionStrategy;this._setPosition(e,r),i.hasBackdrop=e.hasBackdrop==null?!this.triggersSubmenu():e.hasBackdrop,t.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof E&&(e._startAnimation(),e._directDescendantItems.changes.pipe(ee(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;let t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,t instanceof E?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(F(i=>i.toState==="void"),Ee(1),ee(t.lazyContent._attached)).subscribe({next:()=>t.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let t=0,i=e.parentMenu;for(;i;)t++,i=i.parentMenu;e.setElevation(t)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=this._overlay.create(t),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new At({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{let r=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(r,s)):e.setPositionClasses(r,s)})}_setPosition(e,t){let[i,r]=e.xPosition==="before"?["end","start"]:["start","end"],[s,c]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[A,x]=[s,c],[O,P]=[i,r],T=0;if(this.triggersSubmenu()){if(P=i=e.xPosition==="before"?"start":"end",r=O=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Qe=this._parentMaterialMenu.items.first;this._parentInnerPadding=Qe?Qe._getHostElement().offsetTop:0}T=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(A=s==="top"?"bottom":"top",x=c==="top"?"bottom":"top");t.withPositions([{originX:i,originY:A,overlayX:O,overlayY:s,offsetY:T},{originX:r,originY:A,overlayX:P,overlayY:s,offsetY:T},{originX:i,originY:x,overlayX:O,overlayY:c,offsetY:-T},{originX:r,originY:x,overlayX:P,overlayY:c,offsetY:-T}])}_menuClosingActions(){let e=this._overlayRef.backdropClick(),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:ke(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(F(s=>s!==this._menuItemInstance),F(()=>this._menuOpen)):ke();return $(e,i,r,t)}_handleMousedown(e){It(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe(F(e=>e===this._menuItemInstance&&!e.disabled),Ae(0,De)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof E&&this.menu._isAnimating?this.menu._animationDone.pipe(Ee(1),Ae(0,De),ee(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new kt(e.templateRef,this._viewContainerRef)),this._portal}static{this.\u0275fac=function(t){return new(t||o)(a(q),a(oe),a(tt),a(zt),a(Ye,8),a(X,10),a(Rt,8),a(Le),a(C))}}static{this.\u0275dir=Xe({type:o,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&b("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),t&2&&H("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0})}}return o})(),qt=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Pe({type:o})}static{this.\u0275inj=Oe({providers:[gi],imports:[ut,Dt,Be,xt,Et,Be]})}}return o})();var Ie=class o{email;logoutOnClickEvent=new w;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-header-menu"]],inputs:{email:"email"},outputs:{logoutOnClickEvent:"logoutOnClickEvent"},standalone:!0,features:[d],decls:13,vars:2,consts:[["menu","matMenu"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["id","menu-container"],["id","email"],["mat-menu-item","",3,"click"]],template:function(e,t){if(e&1){let i=R();l(0,"button",1)(1,"mat-icon"),h(2,"account_circle"),m()(),l(3,"mat-menu",null,0)(5,"div",2)(6,"div",3),h(7),m(),l(8,"button",4),b("click",function(){return g(i),_(t.logoutOnClickEvent.emit())}),l(9,"mat-icon"),h(10,"logout"),m(),l(11,"span"),h(12,"Logout"),m()()()()}if(e&2){let i=st(4);y("matMenuTriggerFor",i),v(7),me(" ",t.email," ")}},dependencies:[qt,E,X,Yt,_e,ge,fe,he],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}#email[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})};var bi=()=>["/"],Mi=o=>["/",o];function Ci(o,n){if(o&1&&(l(0,"button",3)(1,"mat-icon"),h(2,"login"),m()()),o&2){let e=p();y("routerLink",ct(1,Mi,e.LOGIN_ROUTE))}}function Ii(o,n){if(o&1){let e=R();l(0,"app-header-menu",5),b("logoutOnClickEvent",function(){g(e);let i=p();return _(i.logoutOnClick())}),m()}if(o&2){let e=p();y("email",e.currentUserEmail())}}var we=class o{constructor(n,e){this.router=n;this.authService=e;this.isLoggedIn=ze(this.authService.isLoggedInObservable(),{initialValue:!1}),this.currentUserEmail=ue(()=>(this.isLoggedIn(),this.authService.getUserDataFromSession()?.email??null)),console.log(this.authService.getUserDataFromSession())}isLoggedIn;currentUserEmail=L(null);LOGIN_ROUTE=Q.login.path;logoutOnClick(){this.authService.logout(),this.router.navigate(["/",Q.login.path])}static \u0275fac=function(e){return new(e||o)(a(ht),a(yt))};static \u0275cmp=u({type:o,selectors:[["app-header"]],standalone:!0,features:[d],decls:6,vars:3,consts:[["id","title-container",3,"routerLink"],["id","title"],["id","login-container"],["mat-icon-button","",3,"routerLink"],[3,"email"],[3,"logoutOnClickEvent","email"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1),h(2,"Shared Lists"),m()(),l(3,"div",2),B(4,Ci,3,3,"button",3)(5,Ii,1,1,"app-header-menu",4),m()),e&2&&(y("routerLink",lt(2,bi)),v(4),ae(t.isLoggedIn()?5:4))},dependencies:[ft,fe,he,_e,ge,Ie],styles:["[_nghost-%COMP%]{display:flex;width:100%;flex-direction:row;justify-content:space-between;background-color:var(--special-color-1)}#title-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#title-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{margin-left:1rem;font-size:1.5rem;font-weight:200;text-transform:uppercase;letter-spacing:.3rem}"]})};var Re=class o{displayedVersionNumber;constructor(){this.displayedVersionNumber=pe.stage==="localdev"?`${pe.buildInfos.version}-dev`:pe.buildInfos.version}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-footer"]],standalone:!0,features:[d],decls:2,vars:1,consts:[["id","app-version"]],template:function(e,t){e&1&&(l(0,"div",0),h(1),m()),e&2&&(v(),me("v",t.displayedVersionNumber,""))},styles:["[_nghost-%COMP%]{display:flex;background-color:var(--special-color-1)}"]})};var Se=class o{title="SharedLists";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-root"]],standalone:!0,features:[d],decls:5,vars:0,consts:[["id","content-and-header-container"],["id","content"],["id","footer"]],template:function(e,t){e&1&&(I(0,"app-header"),l(1,"div",0)(2,"div",1),I(3,"router-outlet"),m(),I(4,"app-footer",2),m())},dependencies:[pt,we,Re],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}#content-and-header-container[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}#content-and-header-container[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%]{flex:1}"]})};dt(Se,Bt).catch(o=>console.error(o));
