import{R as w}from"./index-164b90a9.js";var ge=e=>e.type==="checkbox",ue=e=>e instanceof Date,U=e=>e==null;const ur=e=>typeof e=="object";var T=e=>!U(e)&&!Array.isArray(e)&&ur(e)&&!ue(e),pr=e=>T(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,mr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,br=(e,i)=>e.has(mr(i)),wr=e=>{const i=e.constructor&&e.constructor.prototype;return T(i)&&i.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function q(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(r||T(e)))if(i=r?[]:{},!r&&!wr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=q(e[t]));else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,i,r)=>{if(!i||!T(e))return r;const t=le(i.split(/[,[\].]+?/)).reduce((u,l)=>U(u)?u:u[l],e);return k(t)||t===e?k(e[i])?r:e[i]:t};const Ze={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},H={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},kr=w.createContext(null),Sr=()=>w.useContext(kr);var Dr=(e,i,r,t=!0)=>{const u={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const f=l;return i._proxyFormState[f]!==H.all&&(i._proxyFormState[f]=!t||H.all),r&&(r[f]=!0),e[f]}});return u},P=e=>T(e)&&!Object.keys(e).length,Er=(e,i,r,t)=>{r(e);const{name:u,...l}=e;return P(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(f=>i[f]===(!t||H.all))},W=e=>Array.isArray(e)?e:[e];function nr(e){const i=w.useRef(e);i.current=e,w.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var Q=e=>typeof e=="string",Cr=(e,i,r,t,u)=>Q(e)?(t&&i.watch.add(e),d(r,e,u)):Array.isArray(e)?e.map(l=>(t&&i.watch.add(l),d(r,l))):(t&&(i.watchAll=!0),r),qe=e=>/^\w*$/.test(e),lr=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function b(e,i,r){let t=-1;const u=qe(i)?[i]:lr(i),l=u.length,f=l-1;for(;++t<l;){const F=u[t];let A=r;if(t!==f){const M=e[F];A=T(M)||Array.isArray(M)?M:isNaN(+u[t+1])?{}:[]}e[F]=A,e=e[F]}return e}var Or=(e,i,r,t,u)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[t]:u||!0}}:{};const _e=(e,i,r)=>{for(const t of r||Object.keys(e)){const u=d(e,t);if(u){const{_f:l,...f}=u;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else T(f)&&_e(f,i)}}};var Z=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(Math.random()*16+e)%16|0;return(i=="x"?r:r&3|8).toString(16)})},we=(e,i,r={})=>r.shouldFocus||k(r.shouldFocus)?r.focusName||`${e}.${k(r.focusIndex)?i:r.focusIndex}.`:"",Ne=e=>({isOnSubmit:!e||e===H.onSubmit,isOnBlur:e===H.onBlur,isOnChange:e===H.onChange,isOnAll:e===H.all,isOnTouch:e===H.onTouched}),Be=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),or=(e,i,r)=>{const t=le(d(e,r));return b(t,"root",i[r]),b(e,r,t),e},ne=e=>typeof e=="boolean",$e=e=>e.type==="file",ee=e=>typeof e=="function",ve=e=>{if(!Pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},he=e=>Q(e),He=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const er={value:!1,isValid:!1},rr={value:!0,isValid:!0};var cr=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?rr:{value:e[0].value,isValid:!0}:rr:er}return er};const tr={isValid:!1,value:null};var fr=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,tr):tr;function sr(e,i,r="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||ne(e)&&!e)return{type:r,message:he(e)?e:"",ref:i}}var ae=e=>T(e)&&!Ae(e)?e:{value:e,message:""},Ie=async(e,i,r,t,u)=>{const{ref:l,refs:f,required:F,maxLength:A,minLength:M,min:K,max:S,pattern:_,validate:z,name:N,valueAsNumber:oe,mount:se,disabled:ce}=e._f,V=d(i,N);if(!se||ce)return{};const I=f?f[0]:l,j=m=>{t&&I.reportValidity&&(I.setCustomValidity(ne(m)?"":m||""),I.reportValidity())},y={},v=He(l),x=ge(l),O=v||x,R=(oe||$e(l))&&k(l.value)&&k(V)||ve(l)&&l.value===""||V===""||Array.isArray(V)&&!V.length,G=Or.bind(null,N,r,y),X=(m,p,E,B=Y.maxLength,$=Y.minLength)=>{const J=m?p:E;y[N]={type:m?B:$,message:J,ref:l,...G(m?B:$,J)}};if(u?!Array.isArray(V)||!V.length:F&&(!O&&(R||U(V))||ne(V)&&!V||x&&!cr(f).isValid||v&&!fr(f).isValid)){const{value:m,message:p}=he(F)?{value:!!F,message:F}:ae(F);if(m&&(y[N]={type:Y.required,message:p,ref:I,...G(Y.required,p)},!r))return j(p),y}if(!R&&(!U(K)||!U(S))){let m,p;const E=ae(S),B=ae(K);if(!U(V)&&!isNaN(V)){const $=l.valueAsNumber||V&&+V;U(E.value)||(m=$>E.value),U(B.value)||(p=$<B.value)}else{const $=l.valueAsDate||new Date(V),J=de=>new Date(new Date().toDateString()+" "+de),te=l.type=="time",fe=l.type=="week";Q(E.value)&&V&&(m=te?J(V)>J(E.value):fe?V>E.value:$>new Date(E.value)),Q(B.value)&&V&&(p=te?J(V)<J(B.value):fe?V<B.value:$<new Date(B.value))}if((m||p)&&(X(!!m,E.message,B.message,Y.max,Y.min),!r))return j(y[N].message),y}if((A||M)&&!R&&(Q(V)||u&&Array.isArray(V))){const m=ae(A),p=ae(M),E=!U(m.value)&&V.length>+m.value,B=!U(p.value)&&V.length<+p.value;if((E||B)&&(X(E,m.message,p.message),!r))return j(y[N].message),y}if(_&&!R&&Q(V)){const{value:m,message:p}=ae(_);if(Ae(m)&&!V.match(m)&&(y[N]={type:Y.pattern,message:p,ref:l,...G(Y.pattern,p)},!r))return j(p),y}if(z){if(ee(z)){const m=await z(V,i),p=sr(m,I);if(p&&(y[N]={...p,...G(Y.validate,p.message)},!r))return j(p.message),y}else if(T(z)){let m={};for(const p in z){if(!P(m)&&!r)break;const E=sr(await z[p](V,i),I,p);E&&(m={...E,...G(p,E.message)},j(E.message),r&&(y[N]=m))}if(!P(m)&&(y[N]={ref:I,...m},!r))return y}}return j(!0),y};function ke(e,i){return[...e,...W(i)]}var Se=e=>Array.isArray(e)?e.map(()=>{}):void 0;function De(e,i,r){return[...e.slice(0,i),...W(r),...e.slice(i)]}var Ee=(e,i,r)=>Array.isArray(e)?(k(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(i,1)[0]),e):[];function Ce(e,i){return[...W(i),...W(e)]}function Tr(e,i){let r=0;const t=[...e];for(const u of i)t.splice(u-r,1),r++;return le(t).length?t:[]}var Oe=(e,i)=>k(i)?[]:Tr(e,W(i).sort((r,t)=>r-t)),Te=(e,i,r)=>{e[i]=[e[r],e[r]=e[i]][0]};function Lr(e,i){const r=i.slice(0,-1).length;let t=0;for(;t<r;)e=k(e)?t++:e[i[t++]];return e}function Rr(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:qe(i)?[i]:lr(i),t=r.length===1?e:Lr(e,r),u=r.length-1,l=r[u];return t&&delete t[l],u!==0&&(T(t)&&P(t)||Array.isArray(t)&&Rr(t))&&L(e,r.slice(0,-1)),e}var ir=(e,i,r)=>(e[i]=r,e);function Kr(e){const i=Sr(),{control:r=i.control,name:t,keyName:u="id",shouldUnregister:l}=e,[f,F]=w.useState(r._getFieldArray(t)),A=w.useRef(r._getFieldArray(t).map(Z)),M=w.useRef(f),K=w.useRef(t),S=w.useRef(!1);K.current=t,M.current=f,r._names.array.add(t),e.rules&&r.register(t,e.rules),nr({next:({values:y,name:v})=>{if(v===K.current||!v){const x=d(y,K.current);Array.isArray(x)&&(F(x),A.current=x.map(Z))}},subject:r._subjects.array});const _=w.useCallback(y=>{S.current=!0,r._updateFieldArray(t,y)},[r,t]),z=(y,v)=>{const x=W(q(y)),O=ke(r._getFieldArray(t),x);r._names.focus=we(t,O.length-1,v),A.current=ke(A.current,x.map(Z)),_(O),F(O),r._updateFieldArray(t,O,ke,{argA:Se(y)})},N=(y,v)=>{const x=W(q(y)),O=Ce(r._getFieldArray(t),x);r._names.focus=we(t,0,v),A.current=Ce(A.current,x.map(Z)),_(O),F(O),r._updateFieldArray(t,O,Ce,{argA:Se(y)})},oe=y=>{const v=Oe(r._getFieldArray(t),y);A.current=Oe(A.current,y),_(v),F(v),r._updateFieldArray(t,v,Oe,{argA:y})},se=(y,v,x)=>{const O=W(q(v)),R=De(r._getFieldArray(t),y,O);r._names.focus=we(t,y,x),A.current=De(A.current,y,O.map(Z)),_(R),F(R),r._updateFieldArray(t,R,De,{argA:y,argB:Se(v)})},ce=(y,v)=>{const x=r._getFieldArray(t);Te(x,y,v),Te(A.current,y,v),_(x),F(x),r._updateFieldArray(t,x,Te,{argA:y,argB:v},!1)},V=(y,v)=>{const x=r._getFieldArray(t);Ee(x,y,v),Ee(A.current,y,v),_(x),F(x),r._updateFieldArray(t,x,Ee,{argA:y,argB:v},!1)},I=(y,v)=>{const x=q(v),O=ir(r._getFieldArray(t),y,x);A.current=[...O].map((R,G)=>!R||G===y?Z():A.current[G]),_(O),F([...O]),r._updateFieldArray(t,O,ir,{argA:y,argB:x},!0,!1)},j=y=>{const v=W(q(y));A.current=v.map(Z),_([...v]),F([...v]),r._updateFieldArray(t,[...v],x=>x,{},!0,!1)};return w.useEffect(()=>{if(r._state.action=!1,Be(t,r._names)&&r._subjects.state.next({...r._formState}),S.current&&(!Ne(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([t]).then(y=>{const v=d(y.errors,t),x=d(r._formState.errors,t);(x?!v&&x.type||v&&(x.type!==v.type||x.message!==v.message):v&&v.type)&&(v?b(r._formState.errors,t,v):L(r._formState.errors,t),r._subjects.state.next({errors:r._formState.errors}))});else{const y=d(r._fields,t);y&&y._f&&Ie(y,r._formValues,r._options.criteriaMode===H.all,r._options.shouldUseNativeValidation,!0).then(v=>!P(v)&&r._subjects.state.next({errors:or(r._formState.errors,v,t)}))}r._subjects.values.next({name:t,values:{...r._formValues}}),r._names.focus&&_e(r._fields,y=>!!y&&y.startsWith(r._names.focus||"")),r._names.focus="",r._updateValid()},[f,t,r]),w.useEffect(()=>(!d(r._formValues,t)&&r._updateFieldArray(t),()=>{(r._options.shouldUnregister||l)&&r.unregister(t)}),[t,r,u,l]),{swap:w.useCallback(ce,[_,t,r]),move:w.useCallback(V,[_,t,r]),prepend:w.useCallback(N,[_,t,r]),append:w.useCallback(z,[_,t,r]),remove:w.useCallback(oe,[_,t,r]),insert:w.useCallback(se,[_,t,r]),update:w.useCallback(I,[_,t,r]),replace:w.useCallback(j,[_,t,r]),fields:w.useMemo(()=>f.map((y,v)=>({...y,[u]:A.current[v]||Z()})),[f,u])}}function Le(){let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}}var Ve=e=>U(e)||!ur(e);function re(e,i){if(Ve(e)||Ve(i))return e===i;if(ue(e)&&ue(i))return e.getTime()===i.getTime();const r=Object.keys(e),t=Object.keys(i);if(r.length!==t.length)return!1;for(const u of r){const l=e[u];if(!t.includes(u))return!1;if(u!=="ref"){const f=i[u];if(ue(l)&&ue(f)||T(l)&&T(f)||Array.isArray(l)&&Array.isArray(f)?!re(l,f):l!==f)return!1}}return!0}var dr=e=>e.type==="select-multiple",Ur=e=>He(e)||ge(e),Re=e=>ve(e)&&e.isConnected,yr=e=>{for(const i in e)if(ee(e[i]))return!0;return!1};function xe(e,i={}){const r=Array.isArray(e);if(T(e)||r)for(const t in e)Array.isArray(e[t])||T(e[t])&&!yr(e[t])?(i[t]=Array.isArray(e[t])?[]:{},xe(e[t],i[t])):U(e[t])||(i[t]=!0);return i}function gr(e,i,r){const t=Array.isArray(e);if(T(e)||t)for(const u in e)Array.isArray(e[u])||T(e[u])&&!yr(e[u])?k(i)||Ve(r[u])?r[u]=Array.isArray(e[u])?xe(e[u],[]):{...xe(e[u])}:gr(e[u],U(i)?{}:i[u],r[u]):r[u]=!re(e[u],i[u]);return r}var Ue=(e,i)=>gr(e,i,xe(i)),hr=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:t})=>k(e)?e:i?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):t?t(e):e;function Me(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return $e(i)?i.files:He(i)?fr(e.refs).value:dr(i)?[...i.selectedOptions].map(({value:r})=>r):ge(i)?cr(e.refs).value:hr(k(i.value)?e.ref.value:i.value,e)}var Mr=(e,i,r,t)=>{const u={};for(const l of e){const f=d(i,l);f&&b(u,l,f._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:t}},ye=e=>k(e)?e:Ae(e)?e.source:T(e)?Ae(e.value)?e.value.source:e.value:e,Nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ar(e,i,r){const t=d(e,r);if(t||qe(r))return{error:t,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),f=d(i,l),F=d(e,l);if(f&&!Array.isArray(f)&&r!==l)return{name:r};if(F&&F.type)return{name:l,error:F};u.pop()}return{name:r}}var Br=(e,i,r,t,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(i||e):(r?t.isOnBlur:u.isOnBlur)?!e:(r?t.isOnChange:u.isOnChange)?e:!0,Ir=(e,i)=>!le(d(e,i)).length&&L(e,i);const Pr={mode:H.onSubmit,reValidateMode:H.onChange,shouldFocusError:!0};function qr(e={},i){let r={...Pr,...e},t={submitCount:0,isDirty:!1,isLoading:ee(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},l=T(r.defaultValues)||T(r.values)?q(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:q(l),F={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},M,K=0;const S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Le(),array:Le(),state:Le()},z=e.resetOptions&&e.resetOptions.keepDirtyValues,N=Ne(r.mode),oe=Ne(r.reValidateMode),se=r.criteriaMode===H.all,ce=s=>a=>{clearTimeout(K),K=setTimeout(s,a)},V=async s=>{if(S.isValid||s){const a=r.resolver?P((await R()).errors):await X(u,!0);a!==t.isValid&&_.state.next({isValid:a})}},I=s=>S.isValidating&&_.state.next({isValidating:s}),j=(s,a=[],n,g,c=!0,o=!0)=>{if(g&&n){if(F.action=!0,o&&Array.isArray(d(u,s))){const h=n(d(u,s),g.argA,g.argB);c&&b(u,s,h)}if(o&&Array.isArray(d(t.errors,s))){const h=n(d(t.errors,s),g.argA,g.argB);c&&b(t.errors,s,h),Ir(t.errors,s)}if(S.touchedFields&&o&&Array.isArray(d(t.touchedFields,s))){const h=n(d(t.touchedFields,s),g.argA,g.argB);c&&b(t.touchedFields,s,h)}S.dirtyFields&&(t.dirtyFields=Ue(l,f)),_.state.next({name:s,isDirty:p(s,a),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else b(f,s,a)},y=(s,a)=>{b(t.errors,s,a),_.state.next({errors:t.errors})},v=(s,a,n,g)=>{const c=d(u,s);if(c){const o=d(f,s,k(n)?d(l,s):n);k(o)||g&&g.defaultChecked||a?b(f,s,a?o:Me(c._f)):$(s,o),F.mount&&V()}},x=(s,a,n,g,c)=>{let o=!1,h=!1;const D={name:s};if(!n||g){S.isDirty&&(h=t.isDirty,t.isDirty=D.isDirty=p(),o=h!==D.isDirty);const C=re(d(l,s),a);h=d(t.dirtyFields,s),C?L(t.dirtyFields,s):b(t.dirtyFields,s,!0),D.dirtyFields=t.dirtyFields,o=o||S.dirtyFields&&h!==!C}if(n){const C=d(t.touchedFields,s);C||(b(t.touchedFields,s,n),D.touchedFields=t.touchedFields,o=o||S.touchedFields&&C!==n)}return o&&c&&_.state.next(D),o?D:{}},O=(s,a,n,g)=>{const c=d(t.errors,s),o=S.isValid&&ne(a)&&t.isValid!==a;if(e.delayError&&n?(M=ce(()=>y(s,n)),M(e.delayError)):(clearTimeout(K),M=null,n?b(t.errors,s,n):L(t.errors,s)),(n?!re(c,n):c)||!P(g)||o){const h={...g,...o&&ne(a)?{isValid:a}:{},errors:t.errors,name:s};t={...t,...h},_.state.next(h)}I(!1)},R=async s=>r.resolver(f,r.context,Mr(s||A.mount,u,r.criteriaMode,r.shouldUseNativeValidation)),G=async s=>{const{errors:a}=await R();if(s)for(const n of s){const g=d(a,n);g?b(t.errors,n,g):L(t.errors,n)}else t.errors=a;return a},X=async(s,a,n={valid:!0})=>{for(const g in s){const c=s[g];if(c){const{_f:o,...h}=c;if(o){const D=A.array.has(o.name),C=await Ie(c,f,se,r.shouldUseNativeValidation&&!a,D);if(C[o.name]&&(n.valid=!1,a))break;!a&&(d(C,o.name)?D?or(t.errors,C,o.name):b(t.errors,o.name,C[o.name]):L(t.errors,o.name))}h&&await X(h,a,n)}}return n.valid},m=()=>{for(const s of A.unMount){const a=d(u,s);a&&(a._f.refs?a._f.refs.every(n=>!Re(n)):!Re(a._f.ref))&&Fe(s)}A.unMount=new Set},p=(s,a)=>(s&&a&&b(f,s,a),!re(We(),l)),E=(s,a,n)=>Cr(s,A,{...F.mount?f:k(a)?l:Q(s)?{[s]:a}:a},n,a),B=s=>le(d(F.mount?f:l,s,e.shouldUnregister?d(l,s,[]):[])),$=(s,a,n={})=>{const g=d(u,s);let c=a;if(g){const o=g._f;o&&(!o.disabled&&b(f,s,hr(a,o)),c=ve(o.ref)&&U(a)?"":a,dr(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(D=>D===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):$e(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||_.values.next({name:s,values:{...f}})))}(n.shouldDirty||n.shouldTouch)&&x(s,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&de(s)},J=(s,a,n)=>{for(const g in a){const c=a[g],o=`${s}.${g}`,h=d(u,o);(A.array.has(s)||!Ve(c)||h&&!h._f)&&!ue(c)?J(o,c,n):$(o,c,n)}},te=(s,a,n={})=>{const g=d(u,s),c=A.array.has(s),o=q(a);b(f,s,o),c?(_.array.next({name:s,values:{...f}}),(S.isDirty||S.dirtyFields)&&n.shouldDirty&&_.state.next({name:s,dirtyFields:Ue(l,f),isDirty:p(s,o)})):g&&!g._f&&!U(o)?J(s,o,n):$(s,o,n),Be(s,A)&&_.state.next({...t}),_.values.next({name:s,values:{...f}}),!F.mount&&i()},fe=async s=>{const a=s.target;let n=a.name,g=!0;const c=d(u,n),o=()=>a.type?Me(c._f):pr(s);if(c){let h,D;const C=o(),ie=s.type===Ze.BLUR||s.type===Ze.FOCUS_OUT,Vr=!Nr(c._f)&&!r.resolver&&!d(t.errors,n)&&!c._f.deps||Br(ie,d(t.touchedFields,n),t.isSubmitted,oe,N),me=Be(n,A,ie);b(f,n,C),ie?(c._f.onBlur&&c._f.onBlur(s),M&&M(0)):c._f.onChange&&c._f.onChange(s);const be=x(n,C,ie,!1),xr=!P(be)||me;if(!ie&&_.values.next({name:n,type:s.type,values:{...f}}),Vr)return S.isValid&&V(),xr&&_.state.next({name:n,...me?{}:be});if(!ie&&me&&_.state.next({...t}),I(!0),r.resolver){const{errors:Xe}=await R([n]),Fr=ar(t.errors,u,n),Ye=ar(Xe,u,Fr.name||n);h=Ye.error,n=Ye.name,D=P(Xe)}else h=(await Ie(c,f,se,r.shouldUseNativeValidation))[n],g=isNaN(C)||C===d(f,n,C),g&&(h?D=!1:S.isValid&&(D=await X(u,!0)));g&&(c._f.deps&&de(c._f.deps),O(n,D,h,be))}},de=async(s,a={})=>{let n,g;const c=W(s);if(I(!0),r.resolver){const o=await G(k(s)?s:c);n=P(o),g=s?!c.some(h=>d(o,h)):n}else s?(g=(await Promise.all(c.map(async o=>{const h=d(u,o);return await X(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!g&&!t.isValid)&&V()):g=n=await X(u);return _.state.next({...!Q(s)||S.isValid&&n!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:n}:{},errors:t.errors,isValidating:!1}),a.shouldFocus&&!g&&_e(u,o=>o&&d(t.errors,o),s?c:A.mount),g},We=s=>{const a={...l,...F.mount?f:{}};return k(s)?a:Q(s)?d(a,s):s.map(n=>d(a,n))},je=(s,a)=>({invalid:!!d((a||t).errors,s),isDirty:!!d((a||t).dirtyFields,s),isTouched:!!d((a||t).touchedFields,s),error:d((a||t).errors,s)}),_r=s=>{s&&W(s).forEach(a=>L(t.errors,a)),_.state.next({errors:s?t.errors:{}})},Ke=(s,a,n)=>{const g=(d(u,s,{_f:{}})._f||{}).ref;b(t.errors,s,{...a,ref:g}),_.state.next({name:s,errors:t.errors,isValid:!1}),n&&n.shouldFocus&&g&&g.focus&&g.focus()},vr=(s,a)=>ee(s)?_.values.subscribe({next:n=>s(E(void 0,a),n)}):E(s,a,!0),Fe=(s,a={})=>{for(const n of s?W(s):A.mount)A.mount.delete(n),A.array.delete(n),a.keepValue||(L(u,n),L(f,n)),!a.keepError&&L(t.errors,n),!a.keepDirty&&L(t.dirtyFields,n),!a.keepTouched&&L(t.touchedFields,n),!r.shouldUnregister&&!a.keepDefaultValue&&L(l,n);_.values.next({values:{...f}}),_.state.next({...t,...a.keepDirty?{isDirty:p()}:{}}),!a.keepIsValid&&V()},pe=(s,a={})=>{let n=d(u,s);const g=ne(a.disabled);return b(u,s,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:s}},name:s,mount:!0,...a}}),A.mount.add(s),n?g&&b(f,s,a.disabled?void 0:d(f,s,Me(n._f))):v(s,!0,a.value),{...g?{disabled:a.disabled}:{},...r.progressive?{required:!!a.required,min:ye(a.min),max:ye(a.max),minLength:ye(a.minLength),maxLength:ye(a.maxLength),pattern:ye(a.pattern)}:{},name:s,onChange:fe,onBlur:fe,ref:c=>{if(c){pe(s,a),n=d(u,s);const o=k(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Ur(o),D=n._f.refs||[];if(h?D.find(C=>C===o):o===n._f.ref)return;b(u,s,{_f:{...n._f,...h?{refs:[...D.filter(Re),o,...Array.isArray(d(l,s))?[{}]:[]],ref:{type:o.type,name:s}}:{ref:o}}}),v(s,!1,void 0,o)}else n=d(u,s,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(br(A.array,s)&&F.action)&&A.unMount.add(s)}}},ze=()=>r.shouldFocusError&&_e(u,s=>s&&d(t.errors,s),A.mount),Ge=(s,a)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let g=q(f);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:c,values:o}=await R();t.errors=c,g=o}else await X(u);L(t.errors,"root"),P(t.errors)?(_.state.next({errors:{}}),await s(g,n)):(a&&await a({...t.errors},n),ze(),setTimeout(ze)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(t.errors),submitCount:t.submitCount+1,errors:t.errors})},Ar=(s,a={})=>{d(u,s)&&(k(a.defaultValue)?te(s,d(l,s)):(te(s,a.defaultValue),b(l,s,a.defaultValue)),a.keepTouched||L(t.touchedFields,s),a.keepDirty||(L(t.dirtyFields,s),t.isDirty=a.defaultValue?p(s,d(l,s)):p()),a.keepError||(L(t.errors,s),S.isValid&&V()),_.state.next({...t}))},Je=(s,a={})=>{const n=s||l,g=q(n),c=s&&!P(s)?g:l;if(a.keepDefaultValues||(l=n),!a.keepValues){if(a.keepDirtyValues||z)for(const o of A.mount)d(t.dirtyFields,o)?b(c,o,d(f,o)):te(o,d(c,o));else{if(Pe&&k(s))for(const o of A.mount){const h=d(u,o);if(h&&h._f){const D=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ve(D)){const C=D.closest("form");if(C){C.reset();break}}}}u={}}f=e.shouldUnregister?a.keepDefaultValues?q(l):{}:q(c),_.array.next({values:{...c}}),_.values.next({values:{...c}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!F.mount&&i(),F.mount=!S.isValid||!!a.keepIsValid,F.watch=!!e.shouldUnregister,_.state.next({submitCount:a.keepSubmitCount?t.submitCount:0,isDirty:a.keepDirty?t.isDirty:!!(a.keepDefaultValues&&!re(s,l)),isSubmitted:a.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:a.keepDirtyValues?t.dirtyFields:a.keepDefaultValues&&s?Ue(l,s):{},touchedFields:a.keepTouched?t.touchedFields:{},errors:a.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Qe=(s,a)=>Je(ee(s)?s(f):s,a);return{control:{register:pe,unregister:Fe,getFieldState:je,handleSubmit:Ge,setError:Ke,_executeSchema:R,_getWatch:E,_getDirty:p,_updateValid:V,_removeUnmounted:m,_updateFieldArray:j,_getFieldArray:B,_reset:Je,_resetDefaultValues:()=>ee(r.defaultValues)&&r.defaultValues().then(s=>{Qe(s,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_subjects:_,_proxyFormState:S,get _fields(){return u},get _formValues(){return f},get _state(){return F},set _state(s){F=s},get _defaultValues(){return l},get _names(){return A},set _names(s){A=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:de,register:pe,handleSubmit:Ge,watch:vr,setValue:te,getValues:We,reset:Qe,resetField:Ar,clearErrors:_r,unregister:Fe,setError:Ke,setFocus:(s,a={})=>{const n=d(u,s),g=n&&n._f;if(g){const c=g.refs?g.refs[0]:g.ref;c.focus&&(c.focus(),a.shouldSelect&&c.select())}},getFieldState:je}}function zr(e={}){const i=w.useRef(),[r,t]=w.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...qr(e,()=>t(l=>({...l}))),formState:r});const u=i.current.control;return u._options=e,nr({subject:u._subjects.state,next:l=>{Er(l,u._proxyFormState,u._updateFormState,!0)&&t({...u._formState})}}),w.useEffect(()=>{e.values&&(!re(e.values,u._defaultValues)||!re(e.values,u._formValues))?u._reset(e.values,u._options.resetOptions):u._resetDefaultValues()},[e.values,u]),w.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),i.current.formState=Dr(r,u),i.current}export{Kr as a,zr as u};