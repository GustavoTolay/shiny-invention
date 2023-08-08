import{r as Q,b as ot,j as b,a as C,F as H,c as I,C as lt,L as z}from"./index-164b90a9.js";const ct=({hideButtons:m})=>{const{cartList:A,reduceCartList:s}=Q.useContext(ot);window.localStorage.setItem("cartList",JSON.stringify(A));const u=({item:e})=>b("div",{className:"col-auto",children:C("div",{className:"input-group",children:[b("button",{className:"btn border fs-5 fw-bold botones py-0 pb-1",onClick:()=>{e.quantity<e.stock&&s({number:e.quantity+1,product:e,type:"change"})},children:"+"}),b("span",{className:"input-group-text border fs-5 py-0",children:e.quantity}),b("button",{className:"btn border fs-5 fw-bold botones py-0 pb-1",onClick:()=>{e.quantity>1&&s({number:e.quantity-1,product:e,type:"change"})},children:"-"})]})}),p=e=>m?b(H,{children:C("h6",{className:"text-center",children:["Cantidad:"," ",b("span",{className:"fw-normal",children:e.quantity})]})}):C(H,{children:[b(u,{item:e}),b("div",{className:"col-auto my-auto pe-0",children:b("button",{className:"btn btn-danger btn-sm",onClick:()=>{s({type:"delete",product:e,number:0})},children:"Quitar"})})]});return b(()=>{const e=A.map((r,y)=>b("div",{className:"card px-auto py-0 mb-1",children:C("div",{className:"row",children:[b("div",{className:"col-3 p-0 my-auto",children:b("img",{src:`https://dinokids.site/${r.image}`,className:"img-fluid cart-img"})}),b("div",{className:"col-9 p-0",children:C("div",{className:"card-body py-1",children:[b("h6",{className:"card-title",children:r.name}),C("h6",{className:"card-text fw-normal",children:[b("span",{className:"fw-semibold",children:"Precio: "}),"$",r.price,b("span",{className:"badge bg-primary ms-2",children:r.model}),b("span",{className:"badge bg-primary ms-1",children:r.size})]}),b("div",{className:"row ms-auto",children:p(r)})]})})]})},y));return b(H,{children:e})},{})};var G={},ut={get exports(){return G},set exports(m){G=m}},U={},dt={get exports(){return U},set exports(m){U=m}},Y={},ft={get exports(){return Y},set exports(m){Y=m}};/*!
  * Bootstrap data.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function gt(){return X||(X=1,function(m,A){(function(s,u){m.exports=u()})(I,function(){const s=new Map;return{set(p,n,e){s.has(p)||s.set(p,new Map);const r=s.get(p);if(!r.has(n)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(n,e)},get(p,n){return s.has(p)&&s.get(p).get(n)||null},remove(p,n){if(!s.has(p))return;const e=s.get(p);e.delete(n),e.size===0&&s.delete(p)}}})}(ft)),Y}var j={},ht={get exports(){return j},set exports(m){j=m}},K={},pt={get exports(){return K},set exports(m){K=m}};/*!
  * Bootstrap index.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function V(){return Z||(Z=1,function(m,A){(function(s,u){u(A)})(I,function(s){const n="transitionend",e=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,o)=>`#${CSS.escape(o)}`)),t),r=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),y=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},f=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:o}=window.getComputedStyle(t);const i=Number.parseFloat(a),g=Number.parseFloat(o);return!i&&!g?0:(a=a.split(",")[0],o=o.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(o))*1e3)},v=t=>{t.dispatchEvent(new Event(n))},S=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),P=t=>S(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(e(t)):null,F=t=>{if(!S(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",o=t.closest("details:not([open])");if(!o)return a;if(o!==t){const i=t.closest("summary");if(i&&i.parentNode!==o||i===null)return!1}return a},k=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",x=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?x(t.parentNode):null},D=()=>{},L=t=>{t.offsetHeight},R=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],M=t=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of O)a()}),O.push(t)):t()},$=()=>document.documentElement.dir==="rtl",c=t=>{M(()=>{const a=R();if(a){const o=t.NAME,i=a.fn[o];a.fn[o]=t.jQueryInterface,a.fn[o].Constructor=t,a.fn[o].noConflict=()=>(a.fn[o]=i,t.jQueryInterface)}})},l=(t,a=[],o=t)=>typeof t=="function"?t(...a):o,d=(t,a,o=!0)=>{if(!o){l(t);return}const i=5,g=f(a)+i;let h=!1;const _=({target:N})=>{N===a&&(h=!0,a.removeEventListener(n,_),l(t))};a.addEventListener(n,_),setTimeout(()=>{h||v(a)},g)},E=(t,a,o,i)=>{const g=t.length;let h=t.indexOf(a);return h===-1?!o&&i?t[g-1]:t[0]:(h+=o?1:-1,i&&(h=(h+g)%g),t[Math.max(0,Math.min(h,g-1))])};s.defineJQueryPlugin=c,s.execute=l,s.executeAfterTransition=d,s.findShadowRoot=x,s.getElement=P,s.getNextActiveElement=E,s.getTransitionDurationFromElement=f,s.getUID=y,s.getjQuery=R,s.isDisabled=k,s.isElement=S,s.isRTL=$,s.isVisible=F,s.noop=D,s.onDOMContentLoaded=M,s.parseSelector=e,s.reflow=L,s.toType=r,s.triggerTransitionEnd=v,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(pt,K)),K}/*!
  * Bootstrap event-handler.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function at(){return tt||(tt=1,function(m,A){(function(s,u){m.exports=u(V())})(I,function(s){const u=/[^.]*(?=\..*)\.|.*/,p=/\..*/,n=/::\d+$/,e={};let r=1;const y={mouseenter:"mouseover",mouseleave:"mouseout"},f=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function v(c,l){return l&&`${l}::${r++}`||c.uidEvent||r++}function S(c){const l=v(c);return c.uidEvent=l,e[l]=e[l]||{},e[l]}function P(c,l){return function d(E){return $(E,{delegateTarget:c}),d.oneOff&&M.off(c,E.type,l),l.apply(c,[E])}}function F(c,l,d){return function E(t){const a=c.querySelectorAll(l);for(let{target:o}=t;o&&o!==this;o=o.parentNode)for(const i of a)if(i===o)return $(t,{delegateTarget:o}),E.oneOff&&M.off(c,t.type,l,d),d.apply(o,[t])}}function k(c,l,d=null){return Object.values(c).find(E=>E.callable===l&&E.delegationSelector===d)}function x(c,l,d){const E=typeof l=="string",t=E?d:l||d;let a=O(c);return f.has(a)||(a=c),[E,t,a]}function D(c,l,d,E,t){if(typeof l!="string"||!c)return;let[a,o,i]=x(l,d,E);l in y&&(o=(it=>function(q){if(!q.relatedTarget||q.relatedTarget!==q.delegateTarget&&!q.delegateTarget.contains(q.relatedTarget))return it.call(this,q)})(o));const g=S(c),h=g[i]||(g[i]={}),_=k(h,o,a?d:null);if(_){_.oneOff=_.oneOff&&t;return}const N=v(o,l.replace(u,"")),w=a?F(c,d,o):P(c,o);w.delegationSelector=a?d:null,w.callable=o,w.oneOff=t,w.uidEvent=N,h[N]=w,c.addEventListener(i,w,a)}function L(c,l,d,E,t){const a=k(l[d],E,t);a&&(c.removeEventListener(d,a,!!t),delete l[d][a.uidEvent])}function R(c,l,d,E){const t=l[d]||{};for(const[a,o]of Object.entries(t))a.includes(E)&&L(c,l,d,o.callable,o.delegationSelector)}function O(c){return c=c.replace(p,""),y[c]||c}const M={on(c,l,d,E){D(c,l,d,E,!1)},one(c,l,d,E){D(c,l,d,E,!0)},off(c,l,d,E){if(typeof l!="string"||!c)return;const[t,a,o]=x(l,d,E),i=o!==l,g=S(c),h=g[o]||{},_=l.startsWith(".");if(typeof a<"u"){if(!Object.keys(h).length)return;L(c,g,o,a,t?d:null);return}if(_)for(const N of Object.keys(g))R(c,g,N,l.slice(1));for(const[N,w]of Object.entries(h)){const T=N.replace(n,"");(!i||l.includes(T))&&L(c,g,o,w.callable,w.delegationSelector)}},trigger(c,l,d){if(typeof l!="string"||!c)return null;const E=s.getjQuery(),t=O(l),a=l!==t;let o=null,i=!0,g=!0,h=!1;a&&E&&(o=E.Event(l,d),E(c).trigger(o),i=!o.isPropagationStopped(),g=!o.isImmediatePropagationStopped(),h=o.isDefaultPrevented());const _=$(new Event(l,{bubbles:i,cancelable:!0}),d);return h&&_.preventDefault(),g&&c.dispatchEvent(_),_.defaultPrevented&&o&&o.preventDefault(),_}};function $(c,l={}){for(const[d,E]of Object.entries(l))try{c[d]=E}catch{Object.defineProperty(c,d,{configurable:!0,get(){return E}})}return c}return M})}(ht)),j}var B={},mt={get exports(){return B},set exports(m){B=m}},W={},bt={get exports(){return W},set exports(m){W=m}};/*!
  * Bootstrap manipulator.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function Et(){return et||(et=1,function(m,A){(function(s,u){m.exports=u()})(I,function(){function s(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function u(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}return{setDataAttribute(n,e,r){n.setAttribute(`data-bs-${u(e)}`,r)},removeDataAttribute(n,e){n.removeAttribute(`data-bs-${u(e)}`)},getDataAttributes(n){if(!n)return{};const e={},r=Object.keys(n.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of r){let f=y.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1,f.length),e[f]=s(n.dataset[y])}return e},getDataAttribute(n,e){return s(n.getAttribute(`data-bs-${u(e)}`))}}})}(bt)),W}/*!
  * Bootstrap config.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function yt(){return nt||(nt=1,function(m,A){(function(s,u){m.exports=u(Et(),V())})(I,function(s,u){class p{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,r){const y=u.isElement(r)?s.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...u.isElement(r)?s.getDataAttributes(r):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,r=this.constructor.DefaultType){for(const[y,f]of Object.entries(r)){const v=e[y],S=u.isElement(v)?"element":u.toType(v);if(!new RegExp(f).test(S))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${S}" but expected type "${f}".`)}}}return p})}(mt)),B}/*!
  * Bootstrap base-component.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function _t(){return rt||(rt=1,function(m,A){(function(s,u){m.exports=u(gt(),at(),yt(),V())})(I,function(s,u,p,n){const e="5.3.0";class r extends p{constructor(f,v){super(),f=n.getElement(f),f&&(this._element=f,this._config=this._getConfig(v),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),u.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,v,S=!0){n.executeAfterTransition(f,v,S)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return s.get(n.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,v={}){return this.getInstance(f)||new this(f,typeof v=="object"?v:null)}static get VERSION(){return e}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return r})}(dt)),U}var J={},vt={get exports(){return J},set exports(m){J=m}};/*!
  * Bootstrap selector-engine.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function Nt(){return st||(st=1,function(m,A){(function(s,u){m.exports=u(V())})(I,function(s){const u=n=>{let e=n.getAttribute("data-bs-target");if(!e||e==="#"){let r=n.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),e=r&&r!=="#"?r.trim():null}return s.parseSelector(e)},p={find(n,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,n))},findOne(n,e=document.documentElement){return Element.prototype.querySelector.call(e,n)},children(n,e){return[].concat(...n.children).filter(r=>r.matches(e))},parents(n,e){const r=[];let y=n.parentNode.closest(e);for(;y;)r.push(y),y=y.parentNode.closest(e);return r},prev(n,e){let r=n.previousElementSibling;for(;r;){if(r.matches(e))return[r];r=r.previousElementSibling}return[]},next(n,e){let r=n.nextElementSibling;for(;r;){if(r.matches(e))return[r];r=r.nextElementSibling}return[]},focusableChildren(n){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(e,n).filter(r=>!s.isDisabled(r)&&s.isVisible(r))},getSelectorFromElement(n){const e=u(n);return e&&p.findOne(e)?e:null},getElementFromSelector(n){const e=u(n);return e?p.findOne(e):null},getMultipleElementsFromSelector(n){const e=u(n);return e?p.find(e):[]}};return p})}(vt)),J}/*!
  * Bootstrap collapse.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(m,A){(function(s,u){m.exports=u(_t(),at(),Nt(),V())})(I,function(s,u,p,n){const e="collapse",y=".bs.collapse",f=".data-api",v=`show${y}`,S=`shown${y}`,P=`hide${y}`,F=`hidden${y}`,k=`click${y}${f}`,x="show",D="collapse",L="collapsing",R="collapsed",O=`:scope .${D} .${D}`,M="collapse-horizontal",$="width",c="height",l=".collapse.show, .collapse.collapsing",d='[data-bs-toggle="collapse"]',E={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class a extends s{constructor(i,g){super(i,g),this._isTransitioning=!1,this._triggerArray=[];const h=p.find(d);for(const _ of h){const N=p.getSelectorFromElement(_),w=p.find(N).filter(T=>T===this._element);N!==null&&w.length&&this._triggerArray.push(_)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return E}static get DefaultType(){return t}static get NAME(){return e}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let i=[];if(this._config.parent&&(i=this._getFirstLevelChildren(l).filter(T=>T!==this._element).map(T=>a.getOrCreateInstance(T,{toggle:!1}))),i.length&&i[0]._isTransitioning||u.trigger(this._element,v).defaultPrevented)return;for(const T of i)T.hide();const h=this._getDimension();this._element.classList.remove(D),this._element.classList.add(L),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const _=()=>{this._isTransitioning=!1,this._element.classList.remove(L),this._element.classList.add(D,x),this._element.style[h]="",u.trigger(this._element,S)},w=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(_,this._element,!0),this._element.style[h]=`${this._element[w]}px`}hide(){if(this._isTransitioning||!this._isShown()||u.trigger(this._element,P).defaultPrevented)return;const g=this._getDimension();this._element.style[g]=`${this._element.getBoundingClientRect()[g]}px`,n.reflow(this._element),this._element.classList.add(L),this._element.classList.remove(D,x);for(const _ of this._triggerArray){const N=p.getElementFromSelector(_);N&&!this._isShown(N)&&this._addAriaAndCollapsedClass([_],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(L),this._element.classList.add(D),u.trigger(this._element,F)};this._element.style[g]="",this._queueCallback(h,this._element,!0)}_isShown(i=this._element){return i.classList.contains(x)}_configAfterMerge(i){return i.toggle=!!i.toggle,i.parent=n.getElement(i.parent),i}_getDimension(){return this._element.classList.contains(M)?$:c}_initializeChildren(){if(!this._config.parent)return;const i=this._getFirstLevelChildren(d);for(const g of i){const h=p.getElementFromSelector(g);h&&this._addAriaAndCollapsedClass([g],this._isShown(h))}}_getFirstLevelChildren(i){const g=p.find(O,this._config.parent);return p.find(i,this._config.parent).filter(h=>!g.includes(h))}_addAriaAndCollapsedClass(i,g){if(i.length)for(const h of i)h.classList.toggle(R,!g),h.setAttribute("aria-expanded",g)}static jQueryInterface(i){const g={};return typeof i=="string"&&/show|hide/.test(i)&&(g.toggle=!1),this.each(function(){const h=a.getOrCreateInstance(this,g);if(typeof i=="string"){if(typeof h[i]>"u")throw new TypeError(`No method named "${i}"`);h[i]()}})}}return u.on(document,k,d,function(o){(o.target.tagName==="A"||o.delegateTarget&&o.delegateTarget.tagName==="A")&&o.preventDefault();for(const i of p.getMultipleElementsFromSelector(this))a.getOrCreateInstance(i,{toggle:!1}).toggle()}),n.defineJQueryPlugin(a),a})})(ut);function At({hideCart:m}){m=!0;const{cartList:A}=Q.useContext(ot),{resetAll:s}=Q.useContext(lt),[u,p]=Q.useState(!0);return C(H,{children:[b("nav",{className:"navbar navbar-expand-sm py-0 bg-main_blue","data-bs-theme":"dark",children:C("div",{className:"container-fluid",children:[C(z,{className:"navbar-brand pt-1",to:"/",children:[b("img",{src:"/dino2.png",alt:"Logo",width:"45",height:"45",className:"d-inline-block align-text-bottom"}),C("span",{className:"main_logo",children:["  ","DinoKids"]})]}),b("button",{className:"navbar-toggler bg-secondary_blue",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",onClick:()=>{const n=u;n?p(!n):setTimeout(()=>p(!n),350)},children:b("span",{className:"navbar-toggler-icon"})}),b("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:C("div",{className:"navbar-nav",children:[b(z,{className:"nav-link active fw-bold","aria-current":"page",to:"/",onClick:()=>s(),children:"Home"}),b("a",{className:"fw-bold nav-link active","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvas","aria-controls":"offcanvas",hidden:m,children:"Carrito"}),b(z,{to:"/contact",className:"nav-link active fw-bold",children:"Dirección y Contacto"})]})}),C("button",{className:"btn btn-secondary_blue position-relative",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvas","aria-controls":"offcanvas",hidden:!u||m,children:[b("img",{src:"/cart.png",height:"30",width:"30"}),b("span",{className:"px-1 position-absolute start-100 mt-1 top-0 translate-middle badge rounded-pill bg-danger",children:A.length.toString().padStart(2,"0")})]})]})}),C("div",{className:"offcanvas offcanvas-start bg-pink text-white","data-bs-scroll":"true",tabIndex:-1,id:"offcanvas","aria-labelledby":"offcanvasLabel",children:[C("div",{className:"offcanvas-header",children:[b("h5",{className:"offcanvas-title fs-4 fw-normal",id:"offcanvasLabel",children:"Carrito"}),b("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),C("div",{className:"offcanvas-body px-1",children:[b(ct,{}),b(z,{to:"/checkout",children:A.length>0?b("button",{className:"btn btn-primary",children:"Comprar"}):b(H,{})})]})]})]})}export{ct as C,At as N};