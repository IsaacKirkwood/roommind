(function(){var e=Object.defineProperty,t=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},r,i,a,o,s,c,l,u,d,ee=t((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>{let n=e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]);return new s(n,e,a)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})),f,te,ne,re,ie,ae,oe,se,p,ce,le,ue,de,fe,pe,me=t((()=>{ee(),{is:f,defineProperty:te,getOwnPropertyDescriptor:ne,getOwnPropertyNames:re,getOwnPropertySymbols:ie,getPrototypeOf:ae}=Object,oe=globalThis,se=oe.trustedTypes,p=se?se.emptyScript:``,ce=oe.reactiveElementPolyfillSupport,le=(e,t)=>e,ue={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},de=(e,t)=>!f(e,t),fe={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:de},Symbol.metadata??=Symbol(`metadata`),oe.litPropertyMetadata??=new WeakMap,pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(le(`elementProperties`)))return;let e=ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le(`properties`))){let e=this.properties,t=[...re(e),...ie(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ue:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ue:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??de)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},pe.elementStyles=[],pe.shadowRootOptions={mode:`open`},pe[le(`elementProperties`)]=new Map,pe[le(`finalized`)]=new Map,ce?.({ReactiveElement:pe}),(oe.reactiveElementVersions??=[]).push(`2.1.2`)}));function he(e,t){if(!De(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return be===void 0?t:be.createHTML(t)}function ge(e,t,n=e,r){if(t===Re)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ee(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ge(e,i._$AS(e,t.values),i,r)),t}var _e,ve,ye,be,xe,m,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,h,Re,g,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe=t((()=>{_e=globalThis,ve=e=>e,ye=_e.trustedTypes,be=ye?ye.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,xe=`$lit$`,m=`lit$${Math.random().toFixed(9).slice(2)}$`,Se=`?`+m,Ce=`<${Se}>`,we=document,Te=()=>we.createComment(``),Ee=e=>e===null||typeof e!=`object`&&typeof e!=`function`,De=Array.isArray,Oe=e=>De(e)||typeof e?.[Symbol.iterator]==`function`,ke=`[ 	
\f\r]`,Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Me=/>/g,Ne=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Pe=/'/g,Fe=/"/g,Ie=/^(?:script|style|textarea|title)$/i,Le=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),h=Le(1),Le(2),Le(3),Re=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),ze=new WeakMap,Be=we.createTreeWalker(we,129),Ve=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ae;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ae?c[1]===`!--`?o=je:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ne):(Ie.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ne):o=Me:o===Ne?c[0]===`>`?(o=i??Ae,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ne:c[3]===`"`?Fe:Pe):o===Fe||o===Pe?o=Ne:o===je||o===Me?o=Ae:(o=Ne,i=void 0);let d=o===Ne&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ae?n+Ce:l>=0?(r.push(s),n.slice(0,l)+xe+n.slice(l)+m+d):n+m+(l===-2?t:d)}return[he(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},He=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ve(t,n);if(this.el=e.createElement(l,r),Be.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Be.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(xe)){let t=u[o++],n=i.getAttribute(e).split(m),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ke:r[1]===`?`?qe:r[1]===`@`?Je:Ge}),i.removeAttribute(e)}else e.startsWith(m)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ie.test(i.tagName)){let e=i.textContent.split(m),t=e.length-1;if(t>0){i.textContent=ye?ye.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Te()),Be.nextNode(),c.push({type:2,index:++a});i.append(e[t],Te())}}}else if(i.nodeType===8){if(i.data===Se)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(m,e+1))!==-1;)c.push({type:7,index:a}),e+=m.length-1}}a++}}static createElement(e,t){let n=we.createElement(`template`);return n.innerHTML=e,n}},Ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??we).importNode(t,!0);Be.currentNode=r;let i=Be.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new We(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ye(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Be.nextNode(),a++)}return Be.currentNode=we,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},We=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ge(this,e,t),Ee(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Re&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(we.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=He.createElement(he(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ue(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new He(e)),t}k(t){De(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Te()),this.O(Te()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ve(e).nextSibling;ve(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ge(this,e,t,0),a=!Ee(e)||e!==this._$AH&&e!==Re,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ge(this,r[n+o],t,o),s===Re&&(s=this._$AH[o]),a||=!Ee(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ke=class extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},qe=class extends Ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Je=class extends Ge{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ge(this,e,t,0)??g)===Re)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ye=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}},Xe=_e.litHtmlPolyfillSupport,Xe?.(He,We),(_e.litHtmlVersions??=[]).push(`3.3.2`),Ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new We(t.insertBefore(Te(),e),e,void 0,n??{})}return i._$AI(e),i}})),$e,_,et,tt=t((()=>{me(),me(),Qe(),Qe(),$e=globalThis,_=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}},_._$litElement$=!0,_.finalized=!0,$e.litElementHydrateSupport?.({LitElement:_}),et=$e.litElementPolyfillSupport,et?.({LitElement:_}),($e.litElementVersions??=[]).push(`4.2.2`)})),nt=t((()=>{})),v=t((()=>{me(),Qe(),tt(),nt()})),y,rt=t((()=>{y=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}}));function b(e){return(t,n)=>typeof n==`object`?at(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var it,at,ot=t((()=>{me(),it={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:de},at=(e=it,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)}}));function x(e){return b({...e,state:!0,attribute:!1})}var st=t((()=>{ot()})),ct=t((()=>{})),lt,ut=t((()=>{lt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)}));function dt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return lt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return lt(n,r,{get(){return a(this)}})}}var ft=t((()=>{ut()})),pt=t((()=>{})),mt=t((()=>{})),ht=t((()=>{})),gt=t((()=>{})),S=t((()=>{rt(),ot(),st(),ct(),ft(),pt(),mt(),ht(),gt()}));v(),S();var _t={en:{"panel.title":`RoomMind - EKLabs Fork`,"panel.subtitle":`Climate management`,"panel.tab.rooms":`Rooms`,"panel.edit":`Edit room`,"panel.tab.settings":`Settings`,"panel.loading":`Loading...`,"panel.no_areas":`No areas configured in Home Assistant.`,"panel.no_areas_hint":`Add areas in HA settings to get started.`,"badge.beta":`Beta`,"badge.beta_hint":`This feature is in beta and may change or be restructured in future updates.`,"common.learn_more":`Learn more`,"panel.stat.rooms":`Rooms`,"panel.stat.heating":`Heating`,"panel.stat.cooling":`Cooling`,"panel.stat.vacation":`Vacation`,"panel.stat.away":`Away`,"panel.stat.mold":`Mold`,"panel.hide_room":`Hide`,"panel.unhide":`Show`,"panel.hidden_rooms":`Hidden rooms`,"panel.floor_other":`Other`,"panel.reorder":`Reorder rooms`,"panel.reorder_done":`Done`,"room.back":`Back to rooms`,"room.section.climate_mode":`Climate Mode`,"room.section.schedule":`Schedule & Temperatures`,"room.section.control_mode":`Control Mode`,"room.section.devices":`Devices`,"room.section.sensors":`Sensors`,"room.section.windows":`Window Sensors`,"room.control_mode.full_control":`Full Control`,"room.control_mode.managed":`Managed`,"room.control_mode.external_sensor":`External sensor: {sensor}`,"room.control_mode.no_sensor":`No external temperature sensor assigned`,"room.control_mode.mpc_active":`MPC active`,"room.control_mode.mpc_learning":`Learning`,"room.control_mode.device_setpoint":`Device setpoint: {temp}`,"room.control_mode.power":`Power: {power}%`,"room.control_mode.full_control_info":`RoomMind has full control over your climate devices. An external temperature sensor provides the actual room temperature, enabling proportional setpoint calculation. The device setpoint is dynamically adjusted based on MPC power output. The thermal model (EKF) learns your room's behavior for optimal comfort and energy efficiency.`,"room.control_mode.managed_info":`RoomMind sets the target temperature on your device (from schedule, override, or vacation settings), but the device self-regulates using its own internal sensor. No proportional boost, no thermal model learning, and no MPC optimization. For more precise control, assign an external temperature sensor in the Devices section.`,"room.delete":`Delete room`,"room.deleting":`Deleting...`,"room.saving":`Saving...`,"room.saved":`Saved`,"room.error_saving":`Error saving`,"room.confirm_delete":`Remove RoomMind configuration for "{name}"?`,"room.error_save_fallback":`Failed to save configuration`,"room.error_delete_fallback":`Failed to delete configuration`,"room.climate_control_toggle":`Climate control`,"room.climate_control_hint":`When disabled, RoomMind stops controlling devices in this room. They keep their current settings and may continue heating or cooling on their own. RoomMind will not turn them off.`,"room.outdoor_toggle":`Outdoor area`,"room.outdoor_hint":`Disables climate control, mold detection, and model training. Sensor monitoring continues.`,"room.alias.placeholder":`Custom display name`,"room.alias.clear":`Reset to area name`,"override.label":`Temporary Override`,"override.comfort":`Comfort`,"override.eco":`Eco`,"override.custom":`Custom`,"override.target":`Target:`,"override.heat_to":`Heat to:`,"override.cool_above":`Cool above:`,"override.invalid_band":`Cooling target must be at or above the heating target`,"override.activate_for":`Activate for:`,"override.error_set":`Failed to set override`,"override.error_clear":`Failed to clear override`,"hero.target":`Target`,"hero.override":`Override`,"hero.remaining":`{time} remaining`,"hero.humidity":`{value}% humidity`,"hero.device_setpoint":`Device set to {value}{unit}`,"hero.heat_source_primary":`Heating: TRV`,"hero.heat_source_secondary":`Heating: AC`,"hero.heat_source_both":`Heating: TRV + AC`,"hero.permanent":`Permanent`,"hero.waiting":`Waiting for sensor data...`,"hero.not_configured":`Not configured yet`,"hero.mpc_learning_paused":`MPC learning paused`,"hero.mpc_learning_paused.outdoor_unavailable":`RoomMind needs an outdoor temperature to learn this room's thermal model. The configured outdoor sensor is unavailable and no weather entity is set as a fallback. Configure either in Settings.`,"hero.compressor_protection_min_off":`Compressor protection: waiting for min-off`,"hero.compressor_protection_min_run":`Compressor protection: min-run active`,"hero.compressor_protection_info":`This room shares an outdoor compressor with other rooms. To prevent short-cycling, the shared compressor group enforces a minimum run time and a minimum off time before this device is allowed to switch again.`,"hero.coil_dry":`Drying ({minutes} min)`,"hero.coil_dry_drain":`Draining ({minutes} min)`,"hero.coil_dry_info":`The AC is running its evaporator drying cycle and switches off afterwards. Cooling demand cancels it immediately.`,"card.target":`Target`,"card.waiting":`Waiting for data...`,"card.humidity":`{value}% humidity`,"card.thermostat":`Thermostat`,"card.thermostats":`Thermostats`,"card.ac":`AC`,"card.acs":`ACs`,"card.climate_device":`climate device`,"card.climate_devices":`climate devices`,"card.temp_sensor":`temp sensor`,"card.temp_sensors":`temp sensors`,"card.no_climate":`No climate devices`,"card.outdoor":`Outdoor`,"card.tap_configure":`Tap to configure`,"card.mpc_active":`MPC active`,"card.mpc_learning":`MPC learning`,"card.not_controlled":`Not controlled by RoomMind`,"mode.auto":`Auto`,"mode.auto_desc":`Heats & cools automatically based on target temperature`,"mode.heat_only":`Heat Only`,"mode.heat_only_desc":`Only uses thermostats, ACs stay off`,"mode.cool_only":`Cool Only`,"mode.cool_only_desc":`Only uses ACs, thermostats stay off`,"mode.heating":`Heating`,"mode.cooling":`Cooling`,"mode.idle":`Standby`,"schedule.add_schedule":`Add schedule`,"schedule.select_schedule":`Select schedule helper`,"schedule.create_helper_hint":`Create new schedule helper in HA settings`,"schedule.selector_label":`Schedule selector entity`,"schedule.selector_value_boolean":`Current: {value}`,"schedule.selector_value_number":`Current value: {value}`,"schedule.selector_warning":`Multiple schedules but no selector set. Only the first will be used.`,"schedule.off_action_label":`Action when schedule is off`,"schedule.off_action_eco":`Use eco temperature`,"schedule.off_action_off":`Turn off devices`,"schedule.state_active":`Active`,"schedule.state_inactive":`Inactive`,"schedule.state_unreachable":`Unreachable`,"schedule.no_schedules":`No schedules configured`,"schedule.done":`Done`,"schedule.view_comfort":`Comfort: {temp}{unit}`,"schedule.view_eco":`Eco: {temp}{unit}`,"schedule.view_selector":`Active schedule selected by: {name}`,"schedule.view_selector_prefix":`Active schedule selected by:`,"schedule.help_header":`How do schedules work?`,"schedule.help_temps_title":`How is the target temperature determined?`,"schedule.help_temps":`The target temperature follows this priority chain:`,"schedule.help_temps_1":`<strong>Manual override</strong> – A temporary boost/eco/custom override always takes highest priority.`,"schedule.help_temps_2":`<strong>Block temperature</strong> – If the active schedule block has a <code>temperature</code> value in its data, that value is used.`,"schedule.help_temps_3":`<strong>Comfort temperature</strong> – If the schedule is "on" but the block has no temperature, the comfort fallback temperature below is used.`,"schedule.help_temps_4":`<strong>Eco temperature</strong> – When the schedule is "off" (outside all time blocks), the eco temperature is used.`,"schedule.help_block_title":`Setting temperature per time block`,"schedule.help_block":`You can set a specific temperature for each time block by adding a <code>temperature</code> value in the schedule's YAML configuration:`,"schedule.help_block_note":`If a block has no <code>temperature</code> data, the comfort fallback temperature is used instead.`,"schedule.help_split_title":`Separate heating/cooling targets per block`,"schedule.help_split":`For auto-mode rooms, you can set separate heating and cooling targets per time block using <code>heat_temperature</code> and <code>cool_temperature</code>:`,"schedule.help_split_note":`If only one is set, the other falls back to the room's comfort temperature. These keys take priority over <code>temperature</code> when present.`,"schedule.help_multi_title":`Multiple schedules`,"schedule.help_multi":`You can add multiple schedules and switch between them using a <strong>selector entity</strong>. This can be an <code>input_boolean</code> (toggles between schedule 1 and 2) or an <code>input_number</code> (selects by number). Without a selector entity, only the first schedule is used.`,"schedule.column_comfort":`Comfort`,"schedule.column_eco":`Eco`,"schedule.row_heat":`Heat`,"schedule.row_cool":`Cool`,"schedule.view_heat":`Heat: {comfort} / {eco}{unit}`,"schedule.view_cool":`Cool: {comfort} / {eco}{unit}`,"schedule.comfort_hint_auto":`Comfort: target when schedule is on. Eco: target when schedule is off. Rows set the target for heating and cooling.`,"schedule.comfort_label":`Fallback comfort temperature`,"schedule.eco_label":`Eco temperature`,"schedule.comfort_hint":`Used when schedule is "on" but no temperature is set in the block`,"schedule.from_schedule":`{temp}{unit} from schedule`,"schedule.from_schedule_split":`{heat}{unit} / {cool}{unit} from schedule`,"schedule.fallback":`{temp}{unit} (fallback)`,"schedule.block_temp_rejected":`Values outside the valid range {min}–{max}{unit}: {values}. The comfort target is used instead — check the schedule helper for a typo.`,"schedule.eco_detail":`{temp}{unit} (eco)`,"devices.climate_entities":`Climate entities`,"devices.temp_sensors":`Temperature sensors`,"devices.humidity_sensors":`Humidity sensors`,"devices.no_climate":`No climate entities found in this area.`,"devices.no_temp_sensors":`No temperature sensors found in this area.`,"devices.no_humidity_sensors":`No humidity sensors found in this area.`,"devices.occupancy_sensors":`Occupancy Sensors`,"devices.no_occupancy_sensors":`No occupancy sensors found in this area`,"devices.occupancy_sensor_hint":`Improves thermal model accuracy by tracking room occupancy`,"devices.window_sensors":`Window / door sensors`,"devices.no_window_sensors":`No window/door sensors found in this area.`,"devices.window_open_delay":`Delay before pausing`,"devices.window_close_delay":`Delay before resuming`,"devices.add_entity":`Add entity`,"devices.done":`Done`,"devices.other_area":`Other area`,"devices.type_thermostat":`Thermostat`,"devices.type_ac":`Climate Device`,"devices.type_label":`Type`,"devices.select_to_configure":`Select a device to configure`,"devices.heating_system_type":`Heating System Type`,"devices.heating_system_type_info":`After heating stops, radiators and especially underfloor systems continue to release stored heat. RoomMind accounts for this residual heat to avoid overshooting and improve model accuracy. Underfloor rooms also get longer minimum run times.`,"devices.system_type_none":`Standard (no residual heat)`,"devices.system_type_radiator":`Radiator`,"devices.system_type_underfloor":`Underfloor Heating`,"devices.underfloor_delay_hint":`Underfloor heating has long restart times. A window-open delay of at least 5 minutes is recommended to avoid unnecessary shutoffs.`,"devices.heating_system_type_boost_hint":`Tip: If the heating system has changed, you can accelerate re-learning under Settings.`,"devices.idle_action":`When idle`,"devices.idle_action_off":`Turn off`,"devices.idle_action_fan_only":`Fan only`,"devices.idle_action_setback":`Setback`,"devices.idle_action_low":`Low setpoint (keep awake)`,"devices.idle_action_low_hint":`Lowers the setpoint to the device minimum instead of sending off. Prevents TRVs that hibernate in off mode from losing later commands.`,"devices.idle_fan_mode":`Fan speed`,"devices.idle_fan_mode_keep":`Don't change`,"devices.setpoint_mode":`Setpoint mode`,"devices.setpoint_mode_proportional":`Proportional (valve control)`,"devices.setpoint_mode_direct":`Direct (device regulates)`,"devices.setpoint_mode_hint":`Direct sends the actual room target to the device — best for thermostats and space heaters that regulate themselves. Proportional sends a boosted setpoint toward the device max_temp — best for radiator valves (TRVs).`,"devices.coil_dry":`Evaporator drying`,"devices.coil_dry_inherit":`Use global setting`,"devices.coil_dry_on":`Always on`,"devices.coil_dry_off":`Always off`,"devices.coil_dry_minutes":`Drying time (0 = global: {minutes} min)`,"devices.coil_dry_mode":`Drying mode`,"devices.coil_dry_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode":`Fan speed while drying`,"devices.coil_dry_fan_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode_keep":`Keep current speed`,"devices.coil_dry_summary":`Drying`,"devices.coil_dry_global_off_hint":`Evaporator drying is switched off globally, so nothing runs for this device. Turn it on in the settings, or set this device to "Always on".`,"devices.valve_protection_excluded":`Excluded from valve protection`,"devices.valve_protection_exclude_hint":`This entity will not be cycled by valve protection (e.g. virtual boiler entities)`,"devices.info.types_title":`Device types`,"devices.info.types_body":`Thermostat means a radiator thermostat / TRV. Climate Device means an AC, heat pump, or other climate entity used for cooling or forced-air heating. Both are Home Assistant climate entities; the distinction is how RoomMind controls them.`,"devices.info.control_title":`How RoomMind controls them`,"devices.info.control_body":`Setpoint mode only applies to thermostats in Full Control rooms with an external temperature sensor. Use Proportional when RoomMind should drive heating output by sending boosted setpoints. Use Direct when the device should regulate itself around the real target temperature.`,"devices.info.modes_title":`Idle behavior`,"devices.info.modes_body":`When idle only applies to Climate Devices. Turn off powers the device down. Fan only keeps airflow without heating or cooling. Setback keeps the current mode active but moves the target 2°C away from the room target. This setback offset is currently fixed. For Thermostats, Low keeps the TRV active at its minimum setpoint instead of off, useful for battery-powered Zigbee TRVs that sleep when set to off.`,"devices.info.heat_source_title":`Smart source selection`,"devices.info.heat_source_body":`This appears only when a room has both a thermostat/TRV and a Climate Device plus an external temperature sensor. RoomMind can then choose which source should handle heating based on temperature gap and outdoor conditions.`,"hero.window_open":`Window open – paused`,"card.window_open":`Window open`,"room.section.covers":`Covers & Blinds`,"covers.section_title":`Covers & Blinds`,"covers.auto_control":`Automatic blind control`,"covers.auto_control_hint":`RoomMind closes blinds when solar gain is predicted to overheat the room.`,"covers.deploy_threshold":`Deploy threshold`,"covers.deploy_threshold_hint":`Close blinds when predicted temperature exceeds target by this amount.`,"covers.min_position":`Minimum open position`,"covers.min_position_hint":`Blinds will never close further than this (0 = fully closed allowed).`,"covers.override_minutes":`Override pause duration`,"covers.override_minutes_hint":`How long to pause automatic control after manual cover movement. Set to 0 for no pause.`,"covers.no_covers":`No cover entities configured.`,"covers.no_covers_in_area":`No cover entities found in this area.`,"covers.add_cover":`Add cover entity...`,"covers.shading_active":`Shading active`,"covers.auto_paused":`Auto paused (manual override)`,"covers.auto_paused_until":`Auto control paused until`,"covers.resume_auto":`Resume automatic control`,"covers.done":`Done`,"covers.night_close":`Close at night`,"covers.night_close_hint":`Automatically close covers at sunset and open at sunrise.`,"covers.night_close_active":`Night closing active`,"covers.schedule_group_title":`Schedule`,"covers.solar_group_title":`Solar control`,"covers.schedule_section":`Cover schedules`,"covers.schedule_section_hint":`Define time windows for cover control using HA schedule helpers. In Force position mode the schedule's position overrides solar/thermal logic. In Allow solar protection mode RoomMind decides the position within the active window.`,"covers.add_schedule":`Add cover schedule...`,"covers.schedule_mode_force":`Force position`,"covers.schedule_mode_gate":`Allow solar protection`,"covers.schedule_mode_gate_short":`Solar gate`,"covers.schedule_position":`Position`,"covers.schedule_position_hint":`Cover position when this schedule is active (0% = fully closed, 100% = fully open).`,"covers.schedule_selector":`Schedule selector entity`,"covers.schedule_selector_hint":`Choose which schedule is active. input_boolean: off=#1, on=#2. input_number: value selects schedule number.`,"covers.schedule_selector_warning":`Multiple schedules configured but no selector set. Only the first schedule will be used.`,"covers.schedule_state_active":`Active`,"covers.schedule_state_inactive":`Inactive`,"covers.schedule_state_unreachable":`Unreachable`,"covers.schedule_active":`Schedule active`,"covers.schedule_create_link":`Create schedule helper`,"covers.night_position":`Night position`,"covers.night_position_hint":`Cover position when night close is active (0% = fully closed). Covers with an individual min. position will never go below that.`,"covers.night_close_advanced":`Advanced`,"covers.night_close_elevation":`Sun position threshold`,"covers.night_close_elevation_hint":`How far below or above the horizon the sun must be. 0° = exactly at sunset/sunrise. Negative = darker (e.g. -6° = dusk, when it's noticeably dark). Positive = still bright (e.g. 5° = sun still visible above horizon).`,"covers.night_close_offset":`Time offset`,"covers.night_close_offset_hint":`Additional shift relative to the sun position threshold. Positive = close later (e.g. +20 = 20 min after threshold is reached), negative = close earlier.`,"covers.outdoor_min_temp":`Min. outdoor temperature`,"covers.outdoor_min_temp_hint":`Don't close covers for solar protection below this outdoor temperature. Solar heat gain is welcome when it's cold.`,"covers.per_cover_title":`Per-cover settings`,"covers.per_cover_hint":`Set the compass direction each cover faces and optional individual minimum positions.`,"covers.per_cover_min_short":`Min`,"covers.per_cover_min_position":`Min. position`,"covers.per_cover_min_position_hint":`Individual minimum position per cover. Covers will never close further than this. Useful when blinds are physically fully closed at a position > 0%.`,"covers.snap_deploy":`Snap to minimum position`,"covers.snap_deploy_hint":`Close covers directly to the minimum position instead of gradually closing. Recommended for triple-pane windows where intermediate positions can cause thermal stress.`,"covers.info.selection_title":`Cover selection`,"covers.info.selection_body":`Select covers/blinds from this area or add entities from other areas. RoomMind tracks their position and can control them automatically.`,"covers.info.schedule_title":`Schedule control`,"covers.info.schedule_body":`Use HA schedule helpers to define times when covers should close (e.g. privacy in the evening). The schedule's position attribute determines how far they close. Schedules override all other automatic logic.`,"covers.info.solar_title":`Solar/thermal control`,"covers.info.solar_body":`When automatic control is enabled, RoomMind predicts whether solar radiation will overheat the room and closes blinds preventively. It uses learned thermal data when available, otherwise a conservative default. The deploy threshold controls how much predicted overshoot is needed before blinds close.`,"covers.info.night_title":`Night closing`,"covers.info.night_body":`Closes covers at sunset and opens them at sunrise. You can set a custom night position (e.g. 10% = almost closed but not fully).`,"covers.info.override_title":`Manual override`,"covers.info.override_body":`If you manually move a cover, RoomMind detects this and pauses automatic control for the configured duration. This prevents fighting with the user.`,"covers.info.priority_title":`Priority order`,"covers.info.priority_body":`Manual override > Schedule > Night close > Solar/thermal control. Higher priority rules always win. When no rule applies, covers stay open.`,"covers.info.entities_title":`HA entities`,"covers.info.entities_body":`RoomMind creates two entities per room for external use: switch.roommind_{area}_cover_auto (enable/disable automatic cover control — usable in automations or dashboards) and binary_sensor.roommind_{area}_cover_paused (on when manual override is active, e.g. after manually moving a cover).`,"covers.orientation_group_title":`Cover orientation`,"covers.orientation_hint":`Set the compass direction each cover faces. RoomMind uses this to skip solar deployment when the sun is not shining on that side of the building.`,"covers.orientation_none":`Any direction`,"covers.orientation_N":`N`,"covers.orientation_NE":`NE`,"covers.orientation_E":`E`,"covers.orientation_SE":`SE`,"covers.orientation_S":`S`,"covers.orientation_SW":`SW`,"covers.orientation_W":`W`,"covers.orientation_NW":`NW`,"covers.orientation_N_full":`North`,"covers.orientation_NE_full":`Northeast`,"covers.orientation_E_full":`East`,"covers.orientation_SE_full":`Southeast`,"covers.orientation_S_full":`South`,"covers.orientation_SW_full":`Southwest`,"covers.orientation_W_full":`West`,"covers.orientation_NW_full":`Northwest`,"settings.general_title":`General`,"settings.group_by_floor":`Group rooms by floor`,"settings.climate_control_active":`Climate control active`,"settings.climate_control_hint":`When disabled, RoomMind continues to monitor all sensors and train the model, but sends no commands to your heating or cooling devices. Your devices keep their current mode and setpoint and may continue heating or cooling on their own. RoomMind will not turn them off.`,"settings.learning_title":`Model Training`,"settings.learning_hint":`When paused, RoomMind stops collecting new measurement data and training the thermal model. Existing model data is preserved.`,"settings.learning_exceptions":`Exceptions`,"settings.learning_room_paused":`room paused`,"settings.learning_rooms_paused":`rooms paused`,"settings.sensors_title":`Sensors & Data Sources`,"settings.control_title":`Control`,"settings.outdoor_sensor":`Outdoor Temperature`,"settings.outdoor_sensor_label":`Outdoor temperature sensor`,"settings.outdoor_current":`Currently {temp}{unit} outside`,"settings.outdoor_waiting":`Waiting for sensor data...`,"settings.outdoor_humidity_sensor":`Outdoor Humidity`,"settings.outdoor_humidity_label":`Outdoor humidity sensor`,"settings.outdoor_humidity_current":`Currently {value}% outside`,"settings.smart_control":`Smart Climate Control`,"settings.smart_control_hint":`Configure outdoor temperature limits for heating and cooling.`,"settings.outdoor_cooling_min":`Minimum outdoor temp for cooling`,"settings.outdoor_cooling_min_hint":`AC stays off when outdoor temperature is below this value`,"settings.outdoor_heating_max":`Maximum outdoor temp for heating`,"settings.outdoor_heating_max_hint":`Heating stays off when outdoor temperature exceeds this value`,"settings.saving":`Saving...`,"settings.saved":`Saved`,"settings.error":`Error saving`,"devices.using_builtin_sensor":`Using thermostat's built-in sensor`,"settings.climate_intelligence":`Climate Intelligence`,"settings.control_mode":`Control Mode`,"settings.control_mode_simple":`Simple (Bang-Bang)`,"settings.control_mode_mpc":`Intelligent (MPC)`,"settings.control_mode_hint":`MPC learns your room's thermal behavior for optimal control`,"settings.comfort_weight":`Priority`,"settings.comfort_weight_comfort":`Comfort`,"settings.comfort_weight_efficiency":`Efficiency`,"settings.comfort_weight_hint":`Balances temperature precision against energy use. Comfort reacts earlier and stays closer to target. Efficiency allows more drift to reduce heating/cooling runtime.`,"settings.weather_entity":`Weather Forecast`,"settings.weather_entity_hint":`Optional: enables predictive outdoor temperature planning, and acts as a fallback when the outdoor sensor is unavailable`,"settings.outdoor_unavailable_notify":`Notify when outdoor temperature is unavailable`,"settings.outdoor_unavailable_notify_hint":`Show a Home Assistant notification when neither the outdoor sensor nor the weather entity has reported a temperature for 30 minutes. While this is the case, RoomMind pauses thermal model learning to avoid corruption.`,"settings.prediction_enabled":`Temperature prediction`,"settings.prediction_enabled_hint":`Show predicted temperature trend in analytics charts. Disable if you experience slow performance.`,"vacation.title":`Vacation Mode`,"vacation.hint":`Sets all rooms to a setback temperature until the end date.`,"vacation.active_label":`Vacation mode active`,"vacation.end_date":`End date & time`,"vacation.setback_temp":`Setback temperature`,"vacation.no_end_date":`No end date`,"vacation.deactivate":`Deactivate`,"tabs.analytics":`Analytics`,"analytics.select_room":`Select Room`,"analytics.temperature":`Temperature`,"analytics.target":`Target`,"analytics.prediction":`Prediction`,"analytics.outdoor":`Outdoor`,"analytics.model_status":`Model Status`,"analytics.confidence":`Confidence`,"analytics.heating_rate":`Heating Strength`,"analytics.cooling_rate":`Cooling Strength`,"analytics.solar_gain":`Solar Gain`,"analytics.occupancy_gain":`Occupancy Gain`,"analytics.time_constant":`Time Constant`,"analytics.samples":`Samples`,"analytics.prediction_accuracy":`Prediction Accuracy`,"analytics.avg_deviation":`Avg. Deviation`,"analytics.data_sources":`Data Sources`,"analytics.data_points":`Data Points`,"analytics.control_mode":`Control Mode`,"analytics.control_mode_mpc":`MPC active`,"analytics.control_mode_bangbang":`MPC learning`,"analytics.last_model_update":`Last Model Update`,"analytics.accuracy_idle":`Accuracy (Idle)`,"analytics.accuracy_heating":`Accuracy (Heating)`,"analytics.info.accuracy_idle":`How precisely the model predicts temperature when neither heating nor cooling is active. A lower value means the model understands your room's natural heat loss well. This is the first value to improve because idle data is collected continuously.`,"analytics.info.accuracy_heating":`How precisely the model predicts temperature during active heating. This value stays high initially because the model needs real heating cycles to learn from. Once your heating has run a few times, this value will drop and MPC control becomes available.`,"analytics.info.confidence":`Overall model readiness for intelligent MPC control, combining two factors: data quantity (how many idle and active-mode samples have been collected) and prediction accuracy (how precise the temperature forecasts are). Confidence starts at 0% and rises as the model collects data and learns. Around 50% means enough idle data but still waiting for heating/cooling cycles. Above 80% means the model has enough data and accurate predictions — MPC control becomes available. 100% is the theoretical maximum when predictions are as accurate as physically possible.`,"analytics.info.time_constant":`How long it takes your room to naturally cool down halfway toward the outdoor temperature when heating is off. A longer time constant means better insulation — the room holds warmth longer. A short time constant means the room cools quickly. The model learns this by observing temperature drops during idle periods.`,"analytics.info.heating_rate":`How strongly your heating affects the room temperature. A higher value means your heating system warms the room faster relative to its thermal mass. The model learns this by observing how quickly the temperature rises during active heating, and uses it to predict how long heating needs to run.`,"analytics.info.cooling_rate":`How strongly your AC affects the room temperature. A higher value means the AC cools the room faster relative to its thermal mass. The model learns this by observing how quickly the temperature drops during active cooling, and uses it to predict how long the AC needs to run.`,"analytics.info.solar_gain":`The estimated effect of solar radiation through windows on room temperature. The model learns this by observing how the room warms during sunny periods when heating is off. Rooms with large south-facing windows will have higher values. The model uses this to reduce heating when solar gain is expected.`,"analytics.info.occupancy_gain":`The estimated heat contribution from occupancy (people, pets, computers) while the room is occupied. The model learns this by observing temperature changes when the configured occupancy sensors are active. Separating this from solar gain prevents body heat from being misattributed to sunlight. Only shown when at least one occupancy sensor is configured for this room.`,"analytics.info.data_sources":`Number of measurement samples used for model training.`,"analytics.info.data_points":`Total number of observations the model has been trained on. More data points generally lead to better predictions. The model collects a new data point roughly every 3 minutes while RoomMind is running.`,"analytics.no_data":`No data yet — model is learning`,"analytics.loading":`Loading analytics...`,"settings.reset_title":`Reset Thermal Data`,"settings.reset_hint":`Clear learned thermal model data and history. The model will start learning from scratch.`,"settings.reset_all_label":`All rooms`,"settings.reset_all_hint":`Clear thermal data and history for all rooms at once.`,"settings.reset_all_btn":`Reset all`,"settings.reset_all_confirm":`Clear all learned thermal data and history for ALL rooms? All models will start learning from scratch.`,"settings.reset_room_label":`Individual room`,"settings.reset_room_hint":`Select a room to clear its thermal data and history.`,"settings.reset_room_confirm":`Clear all learned thermal data and history for this room? The model will start learning from scratch.`,"settings.reset_room_select":`Select room`,"settings.reset_btn":`Reset`,"settings.reset_no_rooms":`No configured rooms.`,"settings.boost_title":`Accelerate Learning`,"settings.boost_hint":`The thermal model learns your room's heating and cooling behavior over time. After major changes (new radiator, AC, insulation, furniture), the model may be inaccurate. This increases the model's uncertainty so it adapts faster to new conditions.`,"settings.boost_label":`Accelerate learning`,"settings.boost_room_select":`Select room`,"settings.boost_btn":`Accelerate`,"settings.boost_cooldown":`Active – re-learning in progress`,"settings.boost_no_rooms":`No configured rooms.`,"analytics.range_1d":`Today`,"analytics.range_2d":`2 days`,"analytics.range_7d":`Week`,"analytics.range_30d":`Month`,"analytics.export":`Measurements`,"analytics.heating_period":`Heating`,"analytics.cooling_period":`Cooling`,"analytics.blind_position":`Blind position`,"analytics.window_open_period":`Window open`,"analytics.chart_info_title":`How to read this chart`,"analytics.exported":`Exported!`,"analytics.copy_diagnostics":`Diagnostics`,"analytics.export_download":`Download file`,"analytics.export_clipboard":`Copy to clipboard`,"analytics.copied_to_clipboard":`Copied!`,"analytics.range_from":`From`,"analytics.range_to":`To`,"analytics.chart_info_body":`**Lines:** The solid orange line shows the measured room temperature. The green dashed line is the target temperature from your schedule. The blue dotted line is the model's temperature prediction.

**Shaded areas:** Red shading marks heating periods, blue marks cooling, and teal marks times when a window was open.

**Future forecast (right of the 'now' line):** The green dashed line shows the upcoming schedule targets for the next 3 hours. The blue dotted line shows the predicted temperature trend.

**Prediction modes:** When 'MPC active' is shown, the prediction uses the full MPC optimizer with intelligent pre-heating/pre-cooling. While the model is still learning, a simpler simulation is used.

**Limitations:** The prediction assumes current conditions stay constant (outdoor temperature, window state). The simulation accuracy depends on how well the thermal model has learned your room — early on, predictions may be less accurate. Once MPC activates, predictions become significantly more reliable.`,"presence.title":`Presence Detection`,"presence.hint":`Uses eco temperature when nobody is home.`,"presence.hint_detail":`When enabled, all rooms switch to eco temperature as soon as none of the configured persons are home. You can optionally restrict per room which persons are relevant.`,"presence.add_person":`Add person`,"presence.add_entity":`Add presence entity`,"presence.person_label":`Person`,"room.section.presence":`Presence`,"presence.room_help_header":`How does per-room presence work?`,"presence.room_help_body":`Select which persons are relevant for this room. The room switches to eco temperature when none of the selected persons are home. Without selection, the global rule applies: eco when nobody is home.`,"presence.state_home":`Home`,"presence.state_away":`Away`,"presence.room_none_assigned":`Global rule — eco when nobody is home`,"presence.missing_entity_hint":`This entity no longer exists in Home Assistant — uncheck it to remove it from this room.`,"presence.ignore_toggle":`Ignore presence`,"presence.ignore_hint":`Controls how this room reacts to presence. You can assign specific persons below. The room switches to eco when none of the assigned persons are home. Use the toggle above to skip detection entirely and always follow the schedule.`,"presence.help_ignore_title":`What does "Ignore presence" do?`,"presence.help_ignore_body":`When enabled, this room skips presence detection entirely. It always follows its schedule and never switches to eco based on who is home. Useful for rooms that should maintain temperature regardless of presence, such as a server room, a pet room, or a guest room used by someone not tracked by Home Assistant.`,"presence.tile_ignored":`Presence detection is ignored. Room always follows its schedule.`,"presence.away_action_label":`Action when nobody is home`,"presence.away_action_eco":`Use eco temperature`,"presence.away_action_off":`Turn off devices`,"presence.clears_override_label":`Absence stops override`,"presence.clears_override_hint":`When nobody is home, manual overrides are paused and the room follows the away action. When someone returns, the override resumes until it expires.`,"card.presence_away":`Away`,"valve_protection.title":`Valve Protection`,"valve_protection.hint":`Periodically opens idle TRV valves briefly to prevent seizing or calcification.`,"valve_protection.interval_label":`Cycle interval`,"valve_protection.interval_suffix":`days`,"valve_protection.interval_hint":`How long a valve can be idle before being cycled (1–90 days)`,"compressor.title":`Compressor Protection`,"compressor.no_groups":`No compressor groups configured.`,"compressor.add_group":`Add compressor group`,"compressor.group_name":`Group name`,"compressor.members":`Indoor units`,"compressor.members_hint":`Select all climate devices powered by this compressor (indoor splits, TRVs on radiators, fan coils).`,"compressor.min_run":`Minimum run time`,"compressor.min_run_hint":`Compressor must run at least this long once started.`,"compressor.min_run_suffix":`min`,"compressor.min_off":`Minimum off time`,"compressor.min_off_hint":`Compressor must stay off at least this long after stopping.`,"compressor.min_off_suffix":`min`,"compressor.delete":`Delete group`,"compressor.delete_confirm":`Delete compressor group "{name}"?`,"compressor.master_entity":`Master device`,"compressor.master_entity_hint":`The central unit that powers the indoor devices in this group, e.g. a gas boiler, outdoor heat pump unit, or ducted AC master switch. RoomMind will turn it on when any room needs heating or cooling, and off when all rooms are idle. Leave empty to use only the action script or short-cycle protection.`,"compressor.conflict_resolution":`Conflict resolution`,"compressor.conflict_resolution_hint":`Determines what happens when some rooms need heating while others need cooling at the same time. Heating priority: heating always wins (safest for frost protection). Cooling priority: cooling always wins. Majority: the mode with more rooms wins, ties go to heating. Outdoor temperature: uses the outdoor heating max threshold from settings to decide automatically.`,"compressor.conflict_heating_priority":`Heating priority (frost protection)`,"compressor.conflict_cooling_priority":`Cooling priority`,"compressor.conflict_majority":`Majority wins`,"compressor.conflict_outdoor_temp":`Based on outdoor temperature`,"compressor.action_script":`Action script`,"compressor.action_script_hint":`A Home Assistant script that runs whenever the heating/cooling demand changes. Useful for systems that need special commands, e.g. cancelling a Vaillant Quick Veto or toggling a relay. Works with or without a master device. Without a master device, only the script is triggered. Receives variables: action (heat/cool/idle), master_entity, members, active_members.`,"compressor.enforce_uniform_mode":`Enforce uniform mode`,"compressor.enforce_uniform_mode_hint":`All thermostats in this group must operate in the same HVAC mode (all heating or all cooling). Rooms that disagree with the resolved group mode will be set to idle. Use this for heat pumps that start automatically but require all connected units to run the same mode.`,"coil_dry.title":`Evaporator drying`,"coil_dry.hint":`After cooling, keep the indoor fan running for a while before the AC really switches off. Dries the evaporator so no biofilm forms and the next start does not smell musty.`,"coil_dry.duration_label":`Drying time`,"coil_dry.duration_suffix":`min`,"coil_dry.duration_hint":`How long the fan keeps running (1–60 min). At a low fan speed allow roughly twice as long as at a high one.`,"coil_dry.min_cooling_label":`Minimum cooling time`,"coil_dry.min_cooling_suffix":`min`,"coil_dry.min_cooling_hint":`Only dry after the AC has cooled for at least this long. Short cooling bursts are added up (1–240 min).`,"coil_dry.mode_label":`Drying mode`,"coil_dry.mode_fan_only":`fan_only (fan only)`,"coil_dry.mode_dry":`dry (dehumidify)`,"coil_dry.mode_dry_warning":`In dry mode the compressor keeps running and cools the coil down again, which works against drying. Only pick this if your unit's dry mode is fan-driven.`,"coil_dry.fan_mode_label":`Fan speed while drying`,"coil_dry.fan_mode_keep":`Keep current speed`,"coil_dry.fan_mode_hint":`A higher speed dries faster but is louder. Speeds the device does not report are skipped — it then keeps its current one.`,"coil_dry.drain_label":`Drain delay`,"coil_dry.drain_suffix":`min`,"coil_dry.drain_hint":`Leave the AC off first so condensate can drain, then start the fan (0–15 min). Reduces how much moisture is blown back into the room.`,"mold.title":`Mold Risk Protection`,"mold.detection":`Mold Detection`,"mold.detection_desc":`Receive notifications when humidity indicates mold risk`,"mold.threshold":`Humidity threshold (%)`,"mold.threshold_hint":`Alert when room humidity stays above this value`,"mold.sustained":`Sustained duration (minutes)`,"mold.sustained_hint":`Alert only after risk persists for this long`,"mold.prevention":`Mold Prevention`,"mold.prevention_desc":`Automatically raise temperature to reduce mold risk`,"mold.intensity":`Intensity`,"mold.intensity_light":`Light (+{delta}{unit})`,"mold.intensity_medium":`Medium (+{delta}{unit})`,"mold.intensity_strong":`Strong (+{delta}{unit})`,"mold.intensity_hint":`Warmer air reduces surface humidity on cold walls. Light is usually sufficient for moderate risk, Strong can lower surface humidity by up to 8–10% — but uses noticeably more energy.`,"card.mold_warning":`Mold risk`,"card.mold_critical":`Mold danger!`,"card.mold_prevention":`Mold prevention +{delta}{unit}`,"room.mold_surface_rh":`Est. surface humidity: {value}%`,"settings.intro.general":`Basic display and control settings.`,"settings.intro.sensors":`Configure outdoor sensors and weather data for accurate climate control.`,"settings.intro.control":`Choose how RoomMind controls your climate devices and set priority and thresholds.`,"settings.intro.presence":`Automatically reduce temperature when nobody is home.`,"settings.intro.vacation":`Set all rooms to a reduced temperature while you are away.`,"settings.intro.valve":`Periodically move idle TRV valves to prevent seizing or calcification.`,"settings.intro.compressor":`Manage groups of indoor units that share an outdoor compressor or central heating source. Optionally assign a master device (boiler, outdoor unit) to automatically turn on/off based on room demand. Short-cycle protection prevents rapid on/off switching that can damage equipment.`,"settings.intro.mold":`Monitor humidity and automatically reduce mold risk.`,"settings.intro.notifications":`Configure who receives alerts and how.`,"settings.intro.learning":`Manage thermal model training and accelerate re-learning after changes.`,"settings.intro.reset":`Clear learned thermal model data. The model will start learning from scratch.`,"notifications.title":`Notifications`,"notifications.enabled":`Enable notifications`,"notifications.enabled_hint":`When disabled, no notifications are sent — neither to devices nor to the HA sidebar.`,"notifications.desc":`Choose which devices receive alerts. Without targets, alerts appear in the HA sidebar.`,"notifications.add_target_label":`Add notification device`,"notifications.add_target_hint":`Type the entity ID if your device is not listed (e.g. notify.mobile_app_...). You can find it under Settings → Devices → your phone → Notify entity.`,"notifications.target_unnamed":`Unnamed device`,"notifications.target_person":`Person`,"notifications.target_when_always":`Always`,"notifications.target_when_home":`Only when home`,"notifications.cooldown":`Notification cooldown (minutes)`,"notifications.cooldown_hint":`Minimum time between repeated alerts per room`,"notifications.mold_prevention_notify":`Notify when mold prevention activates`,"notifications.mold_prevention_notify_hint":`Also send a notification when prevention activates (temperature raised)`,"room.section.heat_source":`Heat Source Orchestration`,"heat_source.toggle":`Smart source selection`,"heat_source.toggle_hint":`When this room has both radiator thermostats and an AC/heat pump, RoomMind intelligently routes heating demand to the most efficient device based on temperature gap and outdoor conditions.`,"heat_source.primary_delta":`Boiler activation threshold`,"heat_source.primary_delta_hint":`Only activate the primary source when the temperature gap exceeds this value. Below this threshold, only the fast secondary source is used.`,"heat_source.primary_delta_suffix":`°C`,"heat_source.outdoor_threshold":`Outdoor preference switchover`,"heat_source.outdoor_threshold_hint":`Above this outdoor temperature, prefer the AC/heat pump (higher efficiency). Below, prefer the gas boiler/radiator.`,"heat_source.outdoor_threshold_suffix":`°C`,"heat_source.ac_min_outdoor":`Min. outdoor temp for AC heating`,"heat_source.ac_min_outdoor_hint":`Disable AC heating entirely below this temperature to protect the heat pump hardware.`,"heat_source.ac_min_outdoor_suffix":`°C`,"heat_source.summary_disabled":`Smart source selection is off`},de:{"panel.title":`RoomMind - EKLabs Fork`,"panel.subtitle":`Klimasteuerung`,"panel.tab.rooms":`Räume`,"panel.tab.settings":`Einstellungen`,"panel.edit":`Raum bearbeiten`,"panel.loading":`Laden...`,"panel.no_areas":`Keine Bereiche in Home Assistant konfiguriert.`,"panel.no_areas_hint":`Bereiche in den HA-Einstellungen anlegen.`,"badge.beta":`Beta`,"badge.beta_hint":`Dieses Feature ist in der Beta-Phase und kann sich in zukünftigen Updates noch ändern.`,"common.learn_more":`Mehr erfahren`,"panel.stat.rooms":`Räume`,"panel.stat.heating":`Heizen`,"panel.stat.cooling":`Kühlen`,"panel.stat.vacation":`Urlaub`,"panel.stat.away":`Abwesend`,"panel.stat.mold":`Schimmel`,"panel.hide_room":`Ausblenden`,"panel.unhide":`Einblenden`,"panel.hidden_rooms":`Ausgeblendete Räume`,"panel.floor_other":`Sonstige`,"panel.reorder":`Räume sortieren`,"panel.reorder_done":`Fertig`,"room.back":`Zurück zu den Räumen`,"room.section.climate_mode":`Klimamodus`,"room.section.schedule":`Zeitplan & Temperaturen`,"room.section.control_mode":`Steuerungsmodus`,"room.section.devices":`Geräte`,"room.section.sensors":`Sensoren`,"room.section.windows":`Fenstersensoren`,"room.control_mode.full_control":`Full Control`,"room.control_mode.managed":`Managed`,"room.control_mode.external_sensor":`Externer Sensor: {sensor}`,"room.control_mode.no_sensor":`Kein externer Temperatursensor zugewiesen`,"room.control_mode.mpc_active":`MPC aktiv`,"room.control_mode.mpc_learning":`Lernphase`,"room.control_mode.device_setpoint":`Geräte-Setpoint: {temp}`,"room.control_mode.power":`Leistung: {power}%`,"room.control_mode.full_control_info":`RoomMind hat volle Kontrolle über deine Klimageräte. Ein externer Temperatursensor liefert die tatsächliche Raumtemperatur, was eine proportionale Setpoint-Berechnung ermöglicht. Der Geräte-Setpoint wird dynamisch basierend auf der MPC-Leistung angepasst. Das thermische Modell (EKF) lernt das Verhalten deines Raums für optimalen Komfort und Energieeffizienz.`,"room.control_mode.managed_info":`RoomMind setzt die Zieltemperatur auf deinem Gerät (aus Zeitplan, Override oder Urlaubsmodus), aber das Gerät regelt selbstständig mit seinem internen Sensor. Kein proportionaler Boost, kein thermisches Modell-Lernen und keine MPC-Optimierung. Für präzisere Steuerung einen externen Temperatursensor in der Geräte-Sektion zuweisen.`,"room.delete":`Raum löschen`,"room.deleting":`Wird gelöscht...`,"room.saving":`Speichern...`,"room.saved":`Gespeichert`,"room.error_saving":`Fehler beim Speichern`,"room.confirm_delete":`RoomMind-Konfiguration für "{name}" entfernen?`,"room.error_save_fallback":`Konfiguration konnte nicht gespeichert werden`,"room.error_delete_fallback":`Konfiguration konnte nicht gelöscht werden`,"room.climate_control_toggle":`Klimasteuerung`,"room.climate_control_hint":`Wenn deaktiviert, steuert RoomMind die Geräte in diesem Raum nicht mehr. Sie behalten ihre aktuellen Einstellungen und können eigenständig weiter heizen oder kühlen. RoomMind schaltet sie nicht aus.`,"room.outdoor_toggle":`Außenbereich`,"room.outdoor_hint":`Deaktiviert Klimasteuerung, Schimmelerkennung und Modell-Training. Sensorüberwachung läuft weiter.`,"room.alias.placeholder":`Eigener Anzeigename`,"room.alias.clear":`Auf Bereichsname zurücksetzen`,"override.label":`Temporärer Override`,"override.comfort":`Komfort`,"override.eco":`Eco`,"override.custom":`Individuell`,"override.target":`Ziel:`,"override.heat_to":`Heizen bis:`,"override.cool_above":`Kühlen ab:`,"override.invalid_band":`Das Kühlziel muss mindestens so hoch wie das Heizziel sein`,"override.activate_for":`Aktivieren für:`,"override.error_set":`Override konnte nicht gesetzt werden`,"override.error_clear":`Override konnte nicht aufgehoben werden`,"hero.target":`Ziel`,"hero.override":`Override`,"hero.remaining":`noch {time}`,"hero.humidity":`{value}% Luftfeuchtigkeit`,"hero.device_setpoint":`Gerät auf {value}{unit}`,"hero.heat_source_primary":`Heizung: TRV`,"hero.heat_source_secondary":`Heizung: AC`,"hero.heat_source_both":`Heizung: TRV + AC`,"hero.permanent":`Dauerhaft`,"hero.waiting":`Warte auf Sensordaten...`,"hero.not_configured":`Noch nicht konfiguriert`,"hero.mpc_learning_paused":`MPC-Lernen pausiert`,"hero.mpc_learning_paused.outdoor_unavailable":`RoomMind benötigt eine Außentemperatur, um das thermische Modell dieses Raums zu lernen. Der konfigurierte Außensensor ist nicht verfügbar und es ist keine Wetter-Entity als Fallback gesetzt. Konfiguriere eine der beiden in den Einstellungen.`,"hero.compressor_protection_min_off":`Kompressorschutz: wartet auf Mindestpause`,"hero.compressor_protection_min_run":`Kompressorschutz: Mindestlaufzeit aktiv`,"hero.compressor_protection_info":`Dieser Raum teilt sich eine Außeneinheit (Kompressor) mit anderen Räumen. Um Kurzzyklen zu vermeiden, erzwingt die Kompressorgruppe eine Mindestlaufzeit und eine Mindestpause, bevor dieses Gerät wieder umschalten darf.`,"hero.coil_dry":`Trocknet ({minutes} Min)`,"hero.coil_dry_drain":`Kondensat läuft ab ({minutes} Min)`,"hero.coil_dry_info":`Das Klimagerät führt seinen Verdampfer-Trocknungslauf aus und schaltet danach ab. Kühlbedarf bricht ihn sofort ab.`,"card.target":`Ziel`,"card.waiting":`Warte auf Daten...`,"card.humidity":`{value}% Luftfeuchtigkeit`,"card.thermostat":`Thermostat`,"card.thermostats":`Thermostate`,"card.ac":`Klimaanlage`,"card.acs":`Klimaanlagen`,"card.climate_device":`Klimagerät`,"card.climate_devices":`Klimageräte`,"card.temp_sensor":`Temperatursensor`,"card.temp_sensors":`Temperatursensoren`,"card.no_climate":`Keine Klimageräte`,"card.outdoor":`Außen`,"card.tap_configure":`Tippen zum Konfigurieren`,"card.mpc_active":`MPC aktiv`,"card.mpc_learning":`MPC lernt`,"card.not_controlled":`Nicht von RoomMind gesteuert`,"mode.auto":`Automatisch`,"mode.auto_desc":`Heizt und kühlt automatisch basierend auf der Zieltemperatur`,"mode.heat_only":`Nur Heizen`,"mode.heat_only_desc":`Nutzt nur Thermostate, Klimaanlagen bleiben aus`,"mode.cool_only":`Nur Kühlen`,"mode.cool_only_desc":`Nutzt nur Klimaanlagen, Thermostate bleiben aus`,"mode.heating":`Heizen`,"mode.cooling":`Kühlen`,"mode.idle":`Standby`,"schedule.add_schedule":`Zeitplan hinzufügen`,"schedule.select_schedule":`Zeitplan-Helfer auswählen`,"schedule.create_helper_hint":`Neuen Zeitplan-Helfer in HA erstellen`,"schedule.selector_label":`Zeitplan-Auswahl`,"schedule.selector_value_boolean":`Aktuell: {value}`,"schedule.selector_value_number":`Aktueller Wert: {value}`,"schedule.selector_warning":`Mehrere Zeitpläne, aber keine Auswahl-Entity gesetzt. Nur der erste wird verwendet.`,"schedule.off_action_label":`Aktion wenn Zeitplan aus`,"schedule.off_action_eco":`Eco-Temperatur verwenden`,"schedule.off_action_off":`Geräte ausschalten`,"schedule.state_active":`Aktiv`,"schedule.state_inactive":`Inaktiv`,"schedule.state_unreachable":`Nicht erreichbar`,"schedule.no_schedules":`Keine Zeitpläne konfiguriert`,"schedule.done":`Fertig`,"schedule.view_comfort":`Komfort: {temp}{unit}`,"schedule.view_eco":`Eco: {temp}{unit}`,"schedule.view_selector":`Aktiver Zeitplan gewählt durch: {name}`,"schedule.view_selector_prefix":`Aktiver Zeitplan gewählt durch:`,"schedule.help_header":`Wie funktionieren Zeitpläne?`,"schedule.help_temps_title":`Wie wird die Zieltemperatur bestimmt?`,"schedule.help_temps":`Die Zieltemperatur folgt dieser Prioritätskette:`,"schedule.help_temps_1":`<strong>Manueller Override</strong> – Ein temporärer Komfort-/Eco-/Individueller Override hat immer die höchste Priorität.`,"schedule.help_temps_2":`<strong>Block-Temperatur</strong> – Wenn der aktive Zeitblock einen <code>temperature</code>-Wert in seinen Daten hat, wird dieser verwendet.`,"schedule.help_temps_3":`<strong>Komforttemperatur</strong> – Wenn der Zeitplan "an" ist, aber der Block keine Temperatur hat, wird die Komfort-Fallback-Temperatur verwendet.`,"schedule.help_temps_4":`<strong>Eco-Temperatur</strong> – Wenn der Zeitplan "aus" ist (außerhalb aller Zeitblöcke), wird die Eco-Temperatur verwendet.`,"schedule.help_block_title":`Temperatur pro Zeitblock setzen`,"schedule.help_block":`Du kannst für jeden Zeitblock eine eigene Temperatur setzen, indem du einen <code>temperature</code>-Wert in der YAML-Konfiguration des Zeitplans angibst:`,"schedule.help_block_note":`Wenn ein Block keinen <code>temperature</code>-Wert hat, wird stattdessen die Komfort-Fallback-Temperatur verwendet.`,"schedule.help_split_title":`Getrennte Heiz-/Kühlziele pro Block`,"schedule.help_split":`Für Räume im Auto-Modus kannst du pro Zeitblock separate Heiz- und Kühlziele mit <code>heat_temperature</code> und <code>cool_temperature</code> setzen:`,"schedule.help_split_note":`Wenn nur eines gesetzt ist, wird das andere auf die Komforttemperatur des Raumes zurückgesetzt. Diese Schlüssel haben Vorrang vor <code>temperature</code>.`,"schedule.help_multi_title":`Mehrere Zeitpläne`,"schedule.help_multi":`Du kannst mehrere Zeitpläne hinzufügen und mit einer <strong>Auswahl-Entity</strong> zwischen ihnen wechseln. Das kann ein <code>input_boolean</code> (wechselt zwischen Zeitplan 1 und 2) oder ein <code>input_number</code> (wählt nach Nummer) sein. Ohne Auswahl-Entity wird nur der erste Zeitplan verwendet.`,"schedule.column_comfort":`Komfort`,"schedule.column_eco":`Eco`,"schedule.row_heat":`Heizen`,"schedule.row_cool":`Kühlen`,"schedule.view_heat":`Heizen: {comfort} / {eco}{unit}`,"schedule.view_cool":`Kühlen: {comfort} / {eco}{unit}`,"schedule.comfort_hint_auto":`Komfort: Ziel wenn Zeitplan an. Eco: Ziel wenn Zeitplan aus. Zeilen: Ziel für Heizen bzw. Kühlen.`,"schedule.comfort_label":`Komfort-Fallback-Temperatur`,"schedule.eco_label":`Eco-Temperatur`,"schedule.comfort_hint":`Wird verwendet wenn der Zeitplan "an" ist, aber keine Temperatur im Block gesetzt ist`,"schedule.from_schedule":`{temp}{unit} vom Zeitplan`,"schedule.from_schedule_split":`{heat}{unit} / {cool}{unit} vom Zeitplan`,"schedule.fallback":`{temp}{unit} (Fallback)`,"schedule.block_temp_rejected":`Werte außerhalb des gültigen Bereichs {min}–{max}{unit}: {values}. Stattdessen gilt die Komforttemperatur — bitte den Zeitplan-Helfer auf einen Tippfehler prüfen.`,"schedule.eco_detail":`{temp}{unit} (Eco)`,"devices.climate_entities":`Klimageräte`,"devices.temp_sensors":`Temperatursensoren`,"devices.humidity_sensors":`Feuchtigkeitssensoren`,"devices.no_climate":`Keine Klimageräte in diesem Bereich gefunden.`,"devices.no_temp_sensors":`Keine Temperatursensoren in diesem Bereich gefunden.`,"devices.no_humidity_sensors":`Keine Feuchtigkeitssensoren in diesem Bereich gefunden.`,"devices.occupancy_sensors":`Anwesenheitssensoren`,"devices.no_occupancy_sensors":`Keine Anwesenheitssensoren in diesem Bereich gefunden`,"devices.occupancy_sensor_hint":`Verbessert die Genauigkeit des Wärmemodells durch Erkennung der Raumbelegung`,"devices.window_sensors":`Fenster- / Türsensoren`,"devices.no_window_sensors":`Keine Fenster-/Türsensoren in diesem Bereich gefunden.`,"devices.window_open_delay":`Verzögerung vor Pause`,"devices.window_close_delay":`Verzögerung vor Wiederaufnahme`,"devices.add_entity":`Entität hinzufügen`,"devices.done":`Fertig`,"devices.other_area":`Anderer Bereich`,"devices.type_thermostat":`Thermostat`,"devices.type_ac":`Klimagerät`,"devices.type_label":`Typ`,"devices.select_to_configure":`Gerät zum Konfigurieren auswählen`,"devices.heating_system_type":`Heizungstyp`,"devices.heating_system_type_info":`Nach dem Abschalten geben Heizkörper und besonders Fußbodenheizungen gespeicherte Wärme weiter ab. RoomMind berücksichtigt diese Nachlaufwärme, um Überschwingen zu vermeiden und die Modellgenauigkeit zu verbessern. Fußbodenheizungen erhalten außerdem längere Mindestlaufzeiten.`,"devices.system_type_none":`Standard (kein Nachlauf)`,"devices.system_type_radiator":`Heizkörper`,"devices.system_type_underfloor":`Fußbodenheizung`,"devices.underfloor_delay_hint":`Fußbodenheizung hat lange Anlaufzeiten. Eine Fenster-Verzögerung von mindestens 5 Minuten wird empfohlen, um unnötige Abschaltungen zu vermeiden.`,"devices.heating_system_type_boost_hint":`Tipp: Wenn sich die Heizungsart geändert hat, kannst du unter Einstellungen das Lernen beschleunigen.`,"devices.idle_action":`Im Leerlauf`,"devices.idle_action_off":`Ausschalten`,"devices.idle_action_fan_only":`Nur Ventilator`,"devices.idle_action_setback":`Absenkung`,"devices.idle_action_low":`Niedriger Sollwert (wach halten)`,"devices.idle_action_low_hint":`Senkt den Sollwert auf das Geräteminimum ab, statt auszuschalten. Verhindert, dass TRVs, die im Aus-Modus in Tiefschlaf gehen, spätere Befehle verlieren.`,"devices.idle_fan_mode":`Lüftergeschwindigkeit`,"devices.idle_fan_mode_keep":`Nicht ändern`,"devices.setpoint_mode":`Sollwert-Modus`,"devices.setpoint_mode_proportional":`Proportional (Ventilsteuerung)`,"devices.setpoint_mode_direct":`Direkt (Gerät regelt selbst)`,"devices.setpoint_mode_hint":`Direkt sendet die tatsächliche Raum-Zieltemperatur ans Gerät — geeignet für Thermostate und Heizlüfter mit eigener Regelung. Proportional sendet einen erhöhten Sollwert Richtung Geräte-max_temp — geeignet für Heizkörperventile (TRVs).`,"devices.coil_dry":`Verdampfer-Trocknung`,"devices.coil_dry_inherit":`Globale Einstellung nutzen`,"devices.coil_dry_on":`Immer an`,"devices.coil_dry_off":`Immer aus`,"devices.coil_dry_minutes":`Trocknungsdauer (0 = global: {minutes} Min)`,"devices.coil_dry_mode":`Trocknungsmodus`,"devices.coil_dry_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode":`Lüfterstufe beim Trocknen`,"devices.coil_dry_fan_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode_keep":`Aktuelle Stufe beibehalten`,"devices.coil_dry_summary":`Trocknung`,"devices.coil_dry_global_off_hint":`Die Verdampfer-Trocknung ist global ausgeschaltet, für dieses Gerät läuft also keine. In den Einstellungen einschalten oder dieses Gerät auf „Immer an“ stellen.`,"devices.valve_protection_excluded":`Vom Ventilschutz ausgenommen`,"devices.valve_protection_exclude_hint":`Dieses Gerät wird nicht vom Ventilschutz bewegt (z.B. virtuelle Kessel-Entitäten)`,"devices.info.types_title":`Gerätetypen`,"devices.info.types_body":`Thermostat bedeutet Heizkörperthermostat / TRV. Klimagerät bedeutet AC, Wärmepumpe oder eine andere Klima-Entität für Kühlung oder Warmluftheizung. Beides sind Home-Assistant-Klima-Entitäten; der Unterschied liegt darin, wie RoomMind sie ansteuert.`,"devices.info.control_title":`Wie RoomMind sie steuert`,"devices.info.control_body":`Der Sollwert-Modus gilt nur für Thermostate in Räumen mit Full Control und externem Temperatursensor. Verwende Proportional, wenn RoomMind die Heizleistung über angehobene Sollwerte steuern soll. Verwende Direkt, wenn das Gerät selbst um den echten Zielwert regeln soll.`,"devices.info.modes_title":`Verhalten im Leerlauf`,"devices.info.modes_body":`Im Leerlauf gilt nur für Klimageräte. Ausschalten schaltet das Gerät aus. Nur Ventilator hält die Luftzirkulation ohne Heizen oder Kühlen aufrecht. Absenkung lässt den aktuellen Modus aktiv, verschiebt den Sollwert aber um 2°C vom Raumziel weg. Dieser Offset ist derzeit fest. Für Thermostate hält Niedrig den TRV aktiv auf minimalem Sollwert statt ihn auszuschalten, nützlich für batteriebetriebene Zigbee-TRVs, die beim Ausschalten in den Tiefschlaf gehen.`,"devices.info.heat_source_title":`Intelligente Quellenwahl`,"devices.info.heat_source_body":`Diese Funktion erscheint nur, wenn ein Raum sowohl ein Thermostat/TRV als auch ein Klimagerät und zusätzlich einen externen Temperatursensor hat. RoomMind kann dann je nach Temperaturdifferenz und Außenbedingungen auswählen, welche Quelle das Heizen übernimmt.`,"hero.window_open":`Fenster offen – pausiert`,"card.window_open":`Fenster offen`,"room.section.covers":`Rollos & Jalousien`,"covers.section_title":`Rollos & Jalousien`,"covers.auto_control":`Automatische Rollosteuerung`,"covers.auto_control_hint":`RoomMind schließt Rollos, wenn Solarwärme den Raum voraussichtlich überhitzen würde.`,"covers.deploy_threshold":`Auslöseschwelle`,"covers.deploy_threshold_hint":`Rollos schließen, wenn die vorhergesagte Temperatur den Zielwert um diesen Betrag übersteigt.`,"covers.min_position":`Minimale Öffnungsposition`,"covers.min_position_hint":`Rollos werden nie weiter als diese Position geschlossen (0 = vollständig schließen erlaubt).`,"covers.override_minutes":`Override-Pausendauer`,"covers.override_minutes_hint":`Wie lange die automatische Steuerung nach manueller Rolloverstellung pausiert. 0 = keine Pause.`,"covers.no_covers":`Keine Rollo-Entitäten konfiguriert.`,"covers.no_covers_in_area":`Keine Rollo-Entitäten in diesem Bereich gefunden.`,"covers.add_cover":`Rollo-Entität hinzufügen...`,"covers.shading_active":`Beschattung aktiv`,"covers.auto_paused":`Automatik pausiert (manuell übersteuert)`,"covers.auto_paused_until":`Automatik pausiert bis`,"covers.resume_auto":`Automatik jetzt fortsetzen`,"covers.done":`Fertig`,"covers.night_close":`Nachts automatisch schließen`,"covers.night_close_hint":`Rolläden bei Sonnenuntergang schließen und bei Sonnenaufgang öffnen.`,"covers.night_close_active":`Nachtschließung aktiv`,"covers.schedule_group_title":`Zeitplan`,"covers.solar_group_title":`Solar-Steuerung`,"covers.schedule_section":`Rolläden-Zeitpläne`,"covers.schedule_section_hint":`Definiere Zeitfenster für die Rolladensteuerung. Im Modus 'Position erzwingen' überschreibt der Zeitplan die Solar-/Thermik-Logik. Im Modus 'Sonnenschutz erlauben' entscheidet RoomMind innerhalb des aktiven Zeitfensters selbst über die Position.`,"covers.add_schedule":`Zeitplan hinzufügen...`,"covers.schedule_mode_force":`Position erzwingen`,"covers.schedule_mode_gate":`Sonnenschutz erlauben`,"covers.schedule_mode_gate_short":`Solarschutz-Gate`,"covers.schedule_position":`Position`,"covers.schedule_position_hint":`Rolloposition wenn dieser Zeitplan aktiv ist (0% = vollständig geschlossen, 100% = vollständig offen).`,"covers.schedule_selector":`Zeitplan-Selektor`,"covers.schedule_selector_hint":`Bestimmt welcher Zeitplan aktiv ist. input_boolean: aus=#1, an=#2. input_number: Wert wählt Zeitplan-Nummer.`,"covers.schedule_selector_warning":`Mehrere Zeitpläne konfiguriert aber kein Selektor gesetzt. Nur der erste Zeitplan wird verwendet.`,"covers.schedule_state_active":`Aktiv`,"covers.schedule_state_inactive":`Inaktiv`,"covers.schedule_state_unreachable":`Nicht erreichbar`,"covers.schedule_active":`Zeitplan aktiv`,"covers.schedule_create_link":`Zeitplan-Helfer erstellen`,"covers.night_position":`Nachtposition`,"covers.night_position_hint":`Rolloposition wenn Nachtschließung aktiv ist (0% = vollständig geschlossen). Bei Rollos mit individueller Min. Position wird diese nie unterschritten.`,"covers.night_close_advanced":`Erweitert`,"covers.night_close_elevation":`Sonnenstand-Schwellwert`,"covers.night_close_elevation_hint":`Wie weit die Sonne unter oder über dem Horizont stehen muss. 0° = genau bei Sonnenuntergang/-aufgang. Negativ = dunkler (z.B. -6° = Dämmerung, wenn es merklich dunkel wird). Positiv = noch hell (z.B. 5° = Sonne noch sichtbar).`,"covers.night_close_offset":`Zeitversatz`,"covers.night_close_offset_hint":`Zusätzliche Verschiebung relativ zum Sonnenstand-Schwellwert. Positiv = später schließen (z.B. +20 = 20 Min. nach Erreichen des Schwellwerts), negativ = früher.`,"covers.outdoor_min_temp":`Min. Außentemperatur`,"covers.outdoor_min_temp_hint":`Rollos bei dieser Außentemperatur nicht für Sonnenschutz schließen. Bei Kälte ist der Solareintrag erwünscht.`,"covers.per_cover_title":`Pro-Rollo Einstellungen`,"covers.per_cover_hint":`Himmelsrichtung pro Rollo und optionale individuelle Mindestposition.`,"covers.per_cover_min_short":`Min`,"covers.per_cover_min_position":`Min. Position`,"covers.per_cover_min_position_hint":`Individuelle Mindestposition pro Rollo. Rollos werden nicht weiter geschlossen. Nützlich wenn Rollos physisch schon bei > 0% ganz zu sind.`,"covers.snap_deploy":`Direkt auf Minimalposition`,"covers.snap_deploy_hint":`Rolläden direkt auf die Minimalposition schließen statt schrittweise. Empfohlen für Dreifachverglasung, bei der Zwischenpositionen thermische Spannungen verursachen können.`,"covers.info.selection_title":`Rollo-Auswahl`,"covers.info.selection_body":`Wähle Rollos/Jalousien aus diesem Bereich oder füge Entitäten aus anderen Bereichen hinzu. RoomMind verfolgt deren Position und kann sie automatisch steuern.`,"covers.info.schedule_title":`Zeitplan-Steuerung`,"covers.info.schedule_body":`Verwende HA-Zeitplan-Helfer um festzulegen, wann Rollos schließen sollen (z.B. Sichtschutz am Abend). Das Positions-Attribut des Zeitplans bestimmt, wie weit sie schließen. Zeitpläne überschreiben alle andere Automatik-Logik.`,"covers.info.solar_title":`Solar-/Thermik-Steuerung`,"covers.info.solar_body":`Bei aktivierter Automatik sagt RoomMind vorher, ob Sonneneinstrahlung den Raum überhitzen wird und schließt Rollos präventiv. Es nutzt gelernte Thermodaten wenn verfügbar, sonst einen konservativen Standardwert. Die Auslöseschwelle bestimmt, wie viel vorhergesagte Überschreitung nötig ist.`,"covers.info.night_title":`Nachtschließung`,"covers.info.night_body":`Schließt Rollos bei Sonnenuntergang und öffnet sie bei Sonnenaufgang. Du kannst eine eigene Nachtposition setzen (z.B. 10% = fast geschlossen aber nicht komplett).`,"covers.info.override_title":`Manuelles Übersteuern`,"covers.info.override_body":`Wenn du ein Rollo manuell bewegst, erkennt RoomMind dies und pausiert die Automatik für die konfigurierte Dauer. So wird nicht gegen den Nutzer gearbeitet.`,"covers.info.priority_title":`Prioritätsreihenfolge`,"covers.info.priority_body":`Manuelles Override > Zeitplan > Nachtschließung > Solar-/Thermik-Steuerung. Höhere Priorität gewinnt immer. Wenn keine Regel greift, bleiben Rollos offen.`,"covers.info.entities_title":`HA-Entitäten`,"covers.info.entities_body":`RoomMind erstellt zwei Entitäten pro Raum zur externen Nutzung: switch.roommind_{bereich}_cover_auto (automatische Rollosteuerung ein-/ausschalten — nutzbar in Automatisierungen oder Dashboards) und binary_sensor.roommind_{bereich}_cover_paused (an wenn manuelles Override aktiv ist, z.B. nach manuellem Bewegen eines Rollos).`,"covers.orientation_group_title":`Rolloausrichtung`,"covers.orientation_hint":`Himmelsrichtung, in die das Rollo zeigt. RoomMind nutzt dies, um Sonnenschutz zu überspringen, wenn die Sonne nicht auf diese Gebäudeseite scheint.`,"covers.orientation_none":`Beliebige Richtung`,"covers.orientation_N":`N`,"covers.orientation_NE":`NO`,"covers.orientation_E":`O`,"covers.orientation_SE":`SO`,"covers.orientation_S":`S`,"covers.orientation_SW":`SW`,"covers.orientation_W":`W`,"covers.orientation_NW":`NW`,"covers.orientation_N_full":`Nord`,"covers.orientation_NE_full":`Nordost`,"covers.orientation_E_full":`Ost`,"covers.orientation_SE_full":`Südost`,"covers.orientation_S_full":`Süd`,"covers.orientation_SW_full":`Südwest`,"covers.orientation_W_full":`West`,"covers.orientation_NW_full":`Nordwest`,"settings.general_title":`Allgemein`,"settings.group_by_floor":`Räume nach Etagen gruppieren`,"settings.climate_control_active":`Klimasteuerung aktiv`,"settings.climate_control_hint":`Wenn deaktiviert, überwacht RoomMind weiterhin alle Sensoren und trainiert das Modell, sendet aber keine Befehle an deine Heizungen oder Klimaanlagen. Die Geräte behalten ihren aktuellen Modus und Sollwert und können eigenständig weiter heizen oder kühlen. RoomMind schaltet sie nicht aus.`,"settings.learning_title":`Modell-Training`,"settings.learning_hint":`Wenn pausiert, sammelt RoomMind keine neuen Messdaten und trainiert das thermische Modell nicht weiter. Bestehende Modelldaten bleiben erhalten.`,"settings.learning_exceptions":`Ausnahmen`,"settings.learning_room_paused":`Raum pausiert`,"settings.learning_rooms_paused":`Räume pausiert`,"settings.sensors_title":`Sensoren & Datenquellen`,"settings.control_title":`Steuerung`,"settings.outdoor_sensor":`Außentemperatur`,"settings.outdoor_sensor_label":`Außentemperatursensor`,"settings.outdoor_current":`Aktuell {temp}{unit} draußen`,"settings.outdoor_waiting":`Warte auf Sensordaten...`,"settings.outdoor_humidity_sensor":`Außenluftfeuchtigkeit`,"settings.outdoor_humidity_label":`Außenluftfeuchtigkeitssensor`,"settings.outdoor_humidity_current":`Aktuell {value}% draußen`,"settings.smart_control":`Intelligente Klimasteuerung`,"settings.smart_control_hint":`Außentemperaturgrenzen für Heiz- und Kühlentscheidungen konfigurieren.`,"settings.outdoor_cooling_min":`Mindest-Außentemperatur für Kühlung`,"settings.outdoor_cooling_min_hint":`Klimaanlage bleibt aus wenn Außentemperatur unter diesem Wert`,"settings.outdoor_heating_max":`Maximal-Außentemperatur für Heizung`,"settings.outdoor_heating_max_hint":`Heizung bleibt aus wenn Außentemperatur über diesem Wert`,"settings.saving":`Speichern...`,"settings.saved":`Gespeichert`,"settings.error":`Fehler beim Speichern`,"devices.using_builtin_sensor":`Nutzt den eingebauten Thermostat-Sensor`,"settings.climate_intelligence":`Klimaintelligenz`,"settings.control_mode":`Steuerungsmodus`,"settings.control_mode_simple":`Einfach (Ein/Aus)`,"settings.control_mode_mpc":`Intelligent (MPC)`,"settings.control_mode_hint":`MPC lernt das thermische Verhalten deiner Räume für optimale Steuerung`,"settings.comfort_weight":`Priorität`,"settings.comfort_weight_comfort":`Komfort`,"settings.comfort_weight_efficiency":`Effizienz`,"settings.comfort_weight_hint":`Gewichtet Temperaturgenauigkeit gegen Energieverbrauch. Komfort reagiert früher und bleibt näher am Zielwert. Effizienz erlaubt mehr Abweichung, um Heiz- und Kühllaufzeiten zu reduzieren.`,"settings.weather_entity":`Wettervorhersage`,"settings.weather_entity_hint":`Optional: ermöglicht vorausschauende Außentemperaturplanung und dient als Fallback wenn der Außensensor nicht verfügbar ist`,"settings.outdoor_unavailable_notify":`Hinweis bei fehlender Außentemperatur`,"settings.outdoor_unavailable_notify_hint":`Zeigt eine Home-Assistant-Benachrichtigung, wenn weder Außensensor noch Wetter-Entity 30 Minuten lang eine Temperatur geliefert haben. In dieser Zeit pausiert RoomMind das Lernen des thermischen Modells, um Korruption zu vermeiden.`,"settings.prediction_enabled":`Temperaturvorhersage`,"settings.prediction_enabled_hint":`Zeigt den vorhergesagten Temperaturverlauf im Analyse-Diagramm. Bei langsamer Performance deaktivieren.`,"vacation.title":`Urlaubsmodus`,"vacation.hint":`Setzt alle Räume auf eine Absenktemperatur bis zum Enddatum.`,"vacation.active_label":`Urlaubsmodus aktiv`,"vacation.end_date":`Enddatum & Uhrzeit`,"vacation.setback_temp":`Absenktemperatur`,"vacation.no_end_date":`Kein Enddatum`,"vacation.deactivate":`Deaktivieren`,"tabs.analytics":`Analyse`,"analytics.select_room":`Raum auswählen`,"analytics.temperature":`Temperatur`,"analytics.target":`Ziel`,"analytics.prediction":`Vorhersage`,"analytics.outdoor":`Außen`,"analytics.model_status":`Modellstatus`,"analytics.confidence":`Konfidenz`,"analytics.heating_rate":`Heizstärke`,"analytics.cooling_rate":`Kühlstärke`,"analytics.solar_gain":`Solargewinn`,"analytics.occupancy_gain":`Anwesenheitsgewinn`,"analytics.time_constant":`Zeitkonstante`,"analytics.samples":`Datenpunkte`,"analytics.prediction_accuracy":`Vorhersagegenauigkeit`,"analytics.avg_deviation":`Durchschn. Abweichung`,"analytics.data_sources":`Datenquellen`,"analytics.data_points":`Datenpunkte`,"analytics.control_mode":`Steuerungsmodus`,"analytics.control_mode_mpc":`MPC aktiv`,"analytics.control_mode_bangbang":`MPC wird trainiert`,"analytics.last_model_update":`Letztes Modell-Update`,"analytics.accuracy_idle":`Genauigkeit (Leerlauf)`,"analytics.accuracy_heating":`Genauigkeit (Heizen)`,"analytics.info.accuracy_idle":`Wie genau das Modell die Temperatur vorhersagt, wenn weder geheizt noch gekühlt wird. Ein niedrigerer Wert bedeutet, dass das Modell den natürlichen Wärmeverlust deines Raums gut versteht. Dieser Wert verbessert sich als erstes, da Leerlauf-Daten kontinuierlich gesammelt werden.`,"analytics.info.accuracy_heating":`Wie genau das Modell die Temperatur während des aktiven Heizens vorhersagt. Dieser Wert bleibt anfangs hoch, da das Modell echte Heizzyklen zum Lernen braucht. Sobald deine Heizung ein paar Mal gelaufen ist, sinkt dieser Wert und die intelligente MPC-Steuerung wird verfügbar.`,"analytics.info.confidence":`Gesamte Modellreife für die intelligente MPC-Steuerung, basierend auf zwei Faktoren: Datenmenge (wie viele Leerlauf- und Aktiv-Messwerte gesammelt wurden) und Vorhersagegenauigkeit (wie präzise die Temperaturprognosen sind). Die Konfidenz startet bei 0% und steigt mit zunehmenden Daten. Etwa 50% bedeutet: genug Leerlaufdaten, aber noch zu wenig Heiz-/Kühlzyklen. Über 80% bedeutet: genug Daten und genaue Vorhersagen — MPC-Steuerung wird verfügbar. 100% ist das theoretische Maximum, wenn die Vorhersagen so genau wie physikalisch möglich sind.`,"analytics.info.time_constant":`Wie lange es dauert, bis sich die Raumtemperatur bei ausgeschalteter Heizung halbwegs der Außentemperatur annähert. Eine längere Zeitkonstante bedeutet bessere Dämmung — der Raum hält die Wärme länger. Eine kurze Zeitkonstante bedeutet schnelles Auskühlen. Das Modell lernt diesen Wert, indem es Temperaturabfälle im Leerlauf beobachtet.`,"analytics.info.heating_rate":`Wie stark deine Heizung die Raumtemperatur beeinflusst. Ein höherer Wert bedeutet, dass dein Heizsystem den Raum schneller erwärmt relativ zur thermischen Masse. Das Modell lernt dies durch Beobachtung der Temperaturanstiege beim Heizen und nutzt es um vorherzusagen, wie lange geheizt werden muss.`,"analytics.info.cooling_rate":`Wie stark deine Klimaanlage die Raumtemperatur beeinflusst. Ein höherer Wert bedeutet schnellere Kühlung relativ zur thermischen Masse. Das Modell lernt dies durch Beobachtung der Temperaturabfälle bei aktiver Kühlung und nutzt es um vorherzusagen, wie lange gekühlt werden muss.`,"analytics.info.solar_gain":`Der geschätzte Effekt der Sonneneinstrahlung durch Fenster auf die Raumtemperatur. Wird gelernt, indem beobachtet wird, wie sich der Raum bei Sonnenschein erwärmt, wenn nicht geheizt wird. Räume mit großen Südfenstern haben höhere Werte. Das Modell nutzt dies um die Heizung zu reduzieren, wenn Solargewinn erwartet wird.`,"analytics.info.occupancy_gain":`Der geschätzte Wärmebeitrag durch Anwesenheit (Personen, Haustiere, Computer), solange der Raum belegt ist. Wird gelernt, indem Temperaturänderungen beobachtet werden, während die konfigurierten Anwesenheitssensoren aktiv sind. Durch die Trennung vom Solargewinn wird Körperwärme nicht mehr fälschlich der Sonneneinstrahlung zugeschrieben. Wird nur angezeigt, wenn für diesen Raum mindestens ein Anwesenheitssensor konfiguriert ist.`,"analytics.info.data_sources":`Anzahl der Messwerte, die für das Modelltraining verwendet werden.`,"analytics.info.data_points":`Gesamtzahl der Beobachtungen, mit denen das Modell trainiert wurde. Mehr Datenpunkte führen in der Regel zu besseren Vorhersagen. Das Modell sammelt etwa alle 3 Minuten einen neuen Datenpunkt während RoomMind läuft.`,"analytics.no_data":`Noch keine Daten — Modell lernt`,"analytics.loading":`Analyse wird geladen...`,"settings.reset_title":`Thermische Daten zurücksetzen`,"settings.reset_hint":`Gelernte thermische Modelldaten und Verlauf löschen. Das Modell beginnt von vorne zu lernen.`,"settings.reset_all_label":`Alle Räume`,"settings.reset_all_hint":`Thermische Daten und Verlauf für alle Räume auf einmal löschen.`,"settings.reset_all_btn":`Alle zurücksetzen`,"settings.reset_all_confirm":`Alle gelernten thermischen Daten und Verlauf für ALLE Räume löschen? Alle Modelle beginnen von vorne zu lernen.`,"settings.reset_room_label":`Einzelner Raum`,"settings.reset_room_hint":`Wähle einen Raum, um dessen thermische Daten und Verlauf zu löschen.`,"settings.reset_room_confirm":`Alle gelernten thermischen Daten und Verlauf für diesen Raum löschen? Das Modell beginnt von vorne zu lernen.`,"settings.reset_room_select":`Raum auswählen`,"settings.reset_btn":`Zurücksetzen`,"settings.reset_no_rooms":`Keine konfigurierten Räume.`,"settings.boost_title":`Lernen beschleunigen`,"settings.boost_hint":`Das thermische Modell lernt das Heiz- und Kühlverhalten deines Raumes über die Zeit. Nach grösseren Änderungen (neuer Heizkörper, Klimaanlage, Dämmung, Möbel) kann das Modell ungenau sein. Dies erhöht die Unsicherheit des Modells, damit es sich schneller an die neuen Bedingungen anpasst.`,"settings.boost_label":`Lernen beschleunigen`,"settings.boost_room_select":`Raum auswählen`,"settings.boost_btn":`Beschleunigen`,"settings.boost_cooldown":`Aktiv – Neues Lernen läuft`,"settings.boost_no_rooms":`Keine konfigurierten Räume.`,"analytics.range_1d":`Heute`,"analytics.range_2d":`2 Tage`,"analytics.range_7d":`Woche`,"analytics.range_30d":`Monat`,"analytics.export":`Messdaten`,"analytics.heating_period":`Heizen`,"analytics.cooling_period":`Kühlung`,"analytics.window_open_period":`Fenster offen`,"analytics.blind_position":`Rolloposition`,"analytics.chart_info_title":`So liest du dieses Diagramm`,"analytics.exported":`Exportiert!`,"analytics.copy_diagnostics":`Diagnose`,"analytics.export_download":`Datei herunterladen`,"analytics.export_clipboard":`In Zwischenablage kopieren`,"analytics.copied_to_clipboard":`Kopiert!`,"analytics.range_from":`Von`,"analytics.range_to":`Bis`,"analytics.chart_info_body":`**Linien:** Die durchgezogene orangene Linie zeigt die gemessene Raumtemperatur. Die grüne gestrichelte Linie ist die Zieltemperatur aus deinem Zeitplan. Die blaue gepunktete Linie ist die Temperaturvorhersage des Modells.

**Schattierte Bereiche:** Rote Schattierung markiert Heizperioden, blaue Kühlung und türkise Bereiche zeigen an, wenn ein Fenster offen war.

**Zukunftsprognose (rechts der 'Jetzt'-Linie):** Die grüne gestrichelte Linie zeigt die kommenden Zieltemperaturen für die nächsten 3 Stunden. Die blaue gepunktete Linie zeigt den vorhergesagten Temperaturverlauf.

**Vorhersage-Modus:** Wenn 'MPC aktiv' angezeigt wird, nutzt die Vorhersage den vollständigen MPC-Optimizer mit intelligentem Vorheizen/-kühlen. Solange das Modell noch lernt, wird eine einfachere Simulation verwendet.

**Einschränkungen:** Die Vorhersage nimmt an, dass aktuelle Bedingungen konstant bleiben (Außentemperatur, Fensterstatus). Die Genauigkeit hängt davon ab, wie gut das Modell deinen Raum bereits gelernt hat — anfangs können die Vorhersagen ungenau sein. Sobald MPC aktiviert wird, werden die Vorhersagen deutlich zuverlässiger.`,"presence.title":`Anwesenheitserkennung`,"presence.hint":`Eco-Temperatur wenn niemand zu Hause ist.`,"presence.hint_detail":`Wenn aktiviert, werden alle Räume auf Eco-Temperatur gesetzt, sobald keine der konfigurierten Personen zu Hause ist. Pro Raum kann optional eingeschränkt werden, welche Personen relevant sind.`,"presence.add_person":`Person hinzufügen`,"presence.add_entity":`Präsenz-Entity hinzufügen`,"presence.person_label":`Person`,"room.section.presence":`Anwesenheit`,"presence.room_help_header":`Wie funktioniert die Raum-Anwesenheit?`,"presence.room_help_body":`Wähle aus, welche Personen für diesen Raum relevant sind. Der Raum schaltet auf Eco-Temperatur, wenn keine der ausgewählten Personen zu Hause ist. Ohne Auswahl greift die globale Regel: Eco wenn niemand zu Hause ist.`,"presence.state_home":`Zu Hause`,"presence.state_away":`Abwesend`,"presence.room_none_assigned":`Globale Regel — Eco wenn niemand zu Hause ist`,"presence.missing_entity_hint":`Diese Entity existiert nicht mehr in Home Assistant — abwählen, um sie aus diesem Raum zu entfernen.`,"presence.ignore_toggle":`Anwesenheit ignorieren`,"presence.ignore_hint":`Hier wird festgelegt, wie dieser Raum auf Anwesenheit reagiert. Unten kannst du einzelne Personen zuweisen. Der Raum wechselt auf Eco, wenn keine der zugewiesenen Personen zu Hause ist. Mit dem Toggle oben wird die Erkennung komplett übersprungen und der Raum heizt immer nach Zeitplan.`,"presence.help_ignore_title":`Was bewirkt "Ignore presence"?`,"presence.help_ignore_body":`Wenn aktiviert, ignoriert dieser Raum die Anwesenheitserkennung komplett. Er folgt immer seinem Zeitplan und wechselt nie aufgrund von Anwesenheit auf Eco. Nützlich für Räume, die unabhängig von Anwesenheit ihre Temperatur halten sollen, etwa Serverräume, Tierzimmer oder Gästezimmer mit Personen, die nicht in Home Assistant getrackt werden.`,"presence.tile_ignored":`Anwesenheitserkennung ist deaktiviert. Raum folgt immer dem Zeitplan.`,"presence.away_action_label":`Aktion wenn niemand zuhause`,"presence.away_action_eco":`Eco-Temperatur verwenden`,"presence.away_action_off":`Geräte ausschalten`,"presence.clears_override_label":`Abwesenheit beendet Override`,"presence.clears_override_hint":`Sobald niemand zuhause ist, wird ein manueller Override pausiert und der Raum folgt der Abwesenheits-Aktion. Kommt jemand zurück, läuft der Override weiter, bis er abläuft.`,"card.presence_away":`Abwesend`,"valve_protection.title":`Ventilschutz`,"valve_protection.hint":`Bewegt inaktive TRV-Ventile regelmäßig kurz, um Festsitzen oder Verkalkung zu verhindern.`,"valve_protection.interval_label":`Zyklusintervall`,"valve_protection.interval_suffix":`Tage`,"valve_protection.interval_hint":`Wie lange ein Ventil inaktiv sein darf, bevor es bewegt wird (1–90 Tage)`,"compressor.title":`Kompressorschutz`,"compressor.no_groups":`Keine Kompressorgruppen konfiguriert.`,"compressor.add_group":`Kompressorgruppe hinzufügen`,"compressor.group_name":`Gruppenname`,"compressor.members":`Innengeräte`,"compressor.members_hint":`Alle Klimageräte auswählen, die von diesem Kompressor versorgt werden (Splits, TRVs an Radiatoren, Fan Coils).`,"compressor.min_run":`Mindestlaufzeit`,"compressor.min_run_hint":`Kompressor muss nach dem Start mindestens so lange laufen.`,"compressor.min_run_suffix":`Min.`,"compressor.min_off":`Mindestauszeit`,"compressor.min_off_hint":`Kompressor muss nach dem Stopp mindestens so lange aus bleiben.`,"compressor.min_off_suffix":`Min.`,"compressor.delete":`Gruppe löschen`,"compressor.delete_confirm":`Kompressorgruppe "{name}" löschen?`,"compressor.master_entity":`Hauptgerät`,"compressor.master_entity_hint":`Das zentrale Gerät das die Innengeräte dieser Gruppe versorgt, z.B. ein Gaskessel, eine Wärmepumpen-Außeneinheit oder ein Kanalklima-Hauptschalter. RoomMind schaltet es ein wenn ein Raum Heiz- oder Kühlbedarf hat und aus wenn alle Räume im Leerlauf sind. Leer lassen um nur das Aktionsskript oder den Kurzzyklusschutz zu verwenden.`,"compressor.conflict_resolution":`Konfliktlösung`,"compressor.conflict_resolution_hint":`Bestimmt was passiert wenn einige Räume heizen und andere gleichzeitig kühlen wollen. Heizpriorität: Heizen gewinnt immer (sicherste Option für Frostschutz). Kühlpriorität: Kühlen gewinnt immer. Mehrheit: Der Modus mit mehr Räumen gewinnt, bei Gleichstand wird geheizt. Außentemperatur: Entscheidet automatisch anhand des Heiz-Schwellwerts aus den Einstellungen.`,"compressor.conflict_heating_priority":`Heizpriorität (Frostschutz)`,"compressor.conflict_cooling_priority":`Kühlpriorität`,"compressor.conflict_majority":`Mehrheit gewinnt`,"compressor.conflict_outdoor_temp":`Nach Außentemperatur`,"compressor.action_script":`Aktionsskript`,"compressor.action_script_hint":`Ein Home Assistant Skript das bei jedem Wechsel des Heiz-/Kühlbedarfs ausgeführt wird. Nützlich für Systeme die spezielle Befehle benötigen, z.B. zum Aufheben eines Vaillant Quick Veto oder Schalten eines Relais. Funktioniert mit oder ohne Hauptgerät. Ohne Hauptgerät wird nur das Skript ausgelöst. Erhält Variablen: action (heat/cool/idle), master_entity, members, active_members.`,"compressor.enforce_uniform_mode":`Einheitlichen Modus erzwingen`,"compressor.enforce_uniform_mode_hint":`Alle Thermostate in dieser Gruppe müssen im gleichen HVAC-Modus arbeiten (alle heizen oder alle kühlen). Räume, die dem aufgelösten Gruppenmodus widersprechen, werden auf Leerlauf gesetzt. Für Wärmepumpen die automatisch starten, aber alle angeschlossenen Geräte im gleichen Modus benötigen.`,"coil_dry.title":`Verdampfer-Trocknung`,"coil_dry.hint":`Lässt das Innengebläse nach dem Kühlen noch eine Weile laufen, bevor das Klimagerät wirklich abschaltet. Trocknet den Verdampfer, damit sich kein Biofilm bildet und es beim nächsten Start nicht muffig riecht.`,"coil_dry.duration_label":`Trocknungsdauer`,"coil_dry.duration_suffix":`Min`,"coil_dry.duration_hint":`Wie lange das Gebläse nachläuft (1–60 Min). Bei niedriger Lüfterstufe etwa doppelt so lange ansetzen wie bei hoher.`,"coil_dry.min_cooling_label":`Mindest-Kühllaufzeit`,"coil_dry.min_cooling_suffix":`Min`,"coil_dry.min_cooling_hint":`Erst trocknen, wenn das Gerät mindestens so lange gekühlt hat. Kurze Kühltakte werden zusammengezählt (1–240 Min).`,"coil_dry.mode_label":`Trocknungsmodus`,"coil_dry.mode_fan_only":`fan_only (nur Gebläse)`,"coil_dry.mode_dry":`dry (Entfeuchten)`,"coil_dry.mode_dry_warning":`Im dry-Modus läuft der Kompressor weiter und kühlt die Lamellen wieder ab — das arbeitet gegen das Trocknen. Nur wählen, wenn der dry-Modus deines Geräts gebläsedominiert ist.`,"coil_dry.fan_mode_label":`Lüfterstufe beim Trocknen`,"coil_dry.fan_mode_keep":`Aktuelle Stufe beibehalten`,"coil_dry.fan_mode_hint":`Eine höhere Stufe trocknet schneller, ist aber lauter. Stufen, die das Gerät nicht meldet, werden übersprungen — es behält dann seine aktuelle.`,"coil_dry.drain_label":`Ablaufverzögerung`,"coil_dry.drain_suffix":`Min`,"coil_dry.drain_hint":`Gerät zuerst aus lassen, damit Kondensat ablaufen kann, dann das Gebläse starten (0–15 Min). Verringert, wie viel Feuchte in den Raum zurückgeblasen wird.`,"mold.title":`Schimmelschutz`,"mold.detection":`Schimmelerkennung`,"mold.detection_desc":`Benachrichtigung bei Schimmelgefahr durch hohe Luftfeuchtigkeit`,"mold.threshold":`Feuchtigkeitsschwelle (%)`,"mold.threshold_hint":`Warnung wenn die Raumluftfeuchte diesen Wert dauerhaft überschreitet`,"mold.sustained":`Mindestdauer (Minuten)`,"mold.sustained_hint":`Warnung erst nach anhaltender Überschreitung`,"mold.prevention":`Schimmelprävention`,"mold.prevention_desc":`Temperatur automatisch erhöhen um Schimmelrisiko zu senken`,"mold.intensity":`Intensität`,"mold.intensity_light":`Leicht (+{delta}{unit})`,"mold.intensity_medium":`Mittel (+{delta}{unit})`,"mold.intensity_strong":`Stark (+{delta}{unit})`,"mold.intensity_hint":`Wärmere Raumluft senkt die Oberflächenfeuchte an kalten Wänden. Leicht reicht meist bei moderatem Risiko, Stark kann die Oberflächenfeuchte um bis zu 8–10 % senken — verbraucht aber deutlich mehr Energie.`,"card.mold_warning":`Schimmelrisiko`,"card.mold_critical":`Schimmelgefahr!`,"card.mold_prevention":`Schimmelschutz +{delta}{unit}`,"room.mold_surface_rh":`Geschätzte Oberflächenfeuchte: {value}%`,"settings.intro.general":`Grundlegende Anzeige- und Steuerungseinstellungen.`,"settings.intro.sensors":`Außensensoren und Wetterdaten für eine präzise Klimasteuerung konfigurieren.`,"settings.intro.control":`Wähle, wie RoomMind deine Klimageräte steuert und setze Priorität und Schwellenwerte.`,"settings.intro.presence":`Temperatur automatisch absenken wenn niemand zu Hause ist.`,"settings.intro.vacation":`Alle Räume auf eine reduzierte Temperatur setzen während du abwesend bist.`,"settings.intro.valve":`Inaktive TRV-Ventile regelmäßig bewegen um Festsitzen oder Verkalkung zu verhindern.`,"settings.intro.compressor":`Gruppen von Innengeräten verwalten die sich einen Außenkompressor oder eine zentrale Heizquelle teilen. Optional ein Hauptgerät (Kessel, Außeneinheit) zuweisen das automatisch je nach Raumbedarf ein- und ausgeschaltet wird. Kurzzyklusschutz verhindert schnelles Ein-/Ausschalten das Geräte beschädigen kann.`,"settings.intro.mold":`Luftfeuchtigkeit überwachen und Schimmelrisiko automatisch reduzieren.`,"settings.intro.notifications":`Konfiguriere wer Benachrichtigungen erhält und wie.`,"settings.intro.learning":`Thermisches Modelltraining verwalten und Lernen nach Änderungen beschleunigen.`,"settings.intro.reset":`Gelernte thermische Modelldaten löschen. Das Modell beginnt von vorne zu lernen.`,"notifications.title":`Benachrichtigungen`,"notifications.enabled":`Benachrichtigungen aktivieren`,"notifications.enabled_hint":`Wenn deaktiviert, werden keine Benachrichtigungen gesendet — weder an Geräte noch an die HA-Seitenleiste.`,"notifications.desc":`Wähle die Geräte, die Benachrichtigungen erhalten. Ohne Ziele erscheint eine Meldung in der HA-Seitenleiste.`,"notifications.add_target_label":`Benachrichtigungsgerät hinzufügen`,"notifications.add_target_hint":`Tippe die Entity-ID ein, falls dein Gerät nicht angezeigt wird (z.B. notify.mobile_app_...). Du findest sie unter Einstellungen → Geräte → dein Telefon → Notify-Entität.`,"notifications.target_unnamed":`Unbenanntes Gerät`,"notifications.target_person":`Person`,"notifications.target_when_always":`Immer`,"notifications.target_when_home":`Nur wenn zuhause`,"notifications.cooldown":`Benachrichtigungspause (Minuten)`,"notifications.cooldown_hint":`Mindestabstand zwischen wiederholten Warnungen pro Raum`,"notifications.mold_prevention_notify":`Bei Aktivierung der Prävention benachrichtigen`,"notifications.mold_prevention_notify_hint":`Auch benachrichtigen wenn die Prävention aktiviert wird (Temperaturerhöhung)`,"room.section.heat_source":`Heizquellen-Orchestrierung`,"heat_source.toggle":`Intelligente Quellenauswahl`,"heat_source.toggle_hint":`Wenn dieser Raum sowohl Heizkörper-Thermostate als auch eine AC/Wärmepumpe hat, leitet RoomMind die Heizanforderung intelligent an das effizienteste Gerät weiter, basierend auf Temperaturlücke und Außenbedingungen.`,"heat_source.primary_delta":`Boiler-Aktivierungsschwelle`,"heat_source.primary_delta_hint":`Primärquelle erst aktivieren, wenn die Temperaturlücke diesen Wert überschreitet. Darunter wird nur die schnelle Sekundärquelle genutzt.`,"heat_source.primary_delta_suffix":`°C`,"heat_source.outdoor_threshold":`Außentemperatur-Umschaltpunkt`,"heat_source.outdoor_threshold_hint":`Über dieser Außentemperatur die AC/Wärmepumpe bevorzugen (höhere Effizienz). Darunter den Gas-Boiler/Heizkörper.`,"heat_source.outdoor_threshold_suffix":`°C`,"heat_source.ac_min_outdoor":`Min. Außentemp. für AC-Heizen`,"heat_source.ac_min_outdoor_hint":`AC-Heizen unter dieser Temperatur komplett deaktivieren, um die Wärmepumpen-Hardware zu schützen.`,"heat_source.ac_min_outdoor_suffix":`°C`,"heat_source.summary_disabled":`Intelligente Quellenwahl ist aus`},fr:{"panel.title":`RoomMind - EKLabs Fork`,"panel.subtitle":`Gestion du climat`,"panel.tab.rooms":`Pièces`,"panel.edit":`Éditer la pièce`,"panel.tab.settings":`Réglages`,"panel.loading":`Chargement...`,"panel.no_areas":`Aucune pièce configurée dans Home Assistant.`,"panel.no_areas_hint":`Ajoutez des pièces dans les réglages HA pour commencer.`,"badge.beta":`Bêta`,"badge.beta_hint":`Cette fonctionnalité est en version bêta et est susceptible d'être modifiée ou restructurée lors de futures mises à jour.`,"common.learn_more":`En savoir plus`,"panel.stat.rooms":`Pièces`,"panel.stat.heating":`Chauffage`,"panel.stat.cooling":`Refroidissement`,"panel.stat.vacation":`Vacances`,"panel.stat.away":`Absent`,"panel.stat.mold":`Moisissure`,"panel.hide_room":`Masquer`,"panel.unhide":`Afficher`,"panel.hidden_rooms":`Pièces masquées`,"panel.floor_other":`Autre`,"panel.reorder":`Réorganiser les pièces`,"panel.reorder_done":`Terminé`,"room.back":`Retour aux pièces`,"room.section.climate_mode":`Mode climatique`,"room.section.schedule":`Planification et températures`,"room.section.control_mode":`Mode de contrôle`,"room.section.devices":`Appareils`,"room.section.sensors":`Capteurs`,"room.section.windows":`Capteurs de fenêtres`,"room.control_mode.full_control":`Contrôle total`,"room.control_mode.managed":`Mode géré`,"room.control_mode.external_sensor":`Capteur externe: {sensor}`,"room.control_mode.no_sensor":`Aucun capteur de température externe configuré`,"room.control_mode.mpc_active":`MPC actif`,"room.control_mode.mpc_learning":`Apprentissage`,"room.control_mode.device_setpoint":`Consigne de l'appareil: {temp}`,"room.control_mode.power":`Puissance: {power}%`,"room.control_mode.full_control_info":`RoomMind assure un contrôle total de vos appareils de climatisation. Un capteur de température externe mesure la température réelle de la pièce, ce qui permet de calculer la consigne de manière proportionnelle. La consigne de l'appareil est ajustée de manière dynamique en fonction de la puissance de sortie du MPC. Le modèle thermique (EKF) apprend le comportement de votre pièce afin d'optimiser le confort et l'efficacité énergétique.`,"room.control_mode.managed_info":`RoomMind définit la température cible sur votre appareil (à partir de la planification, des dérogations ou du mode vacances), mais l'appareil s'autorégule à l'aide de son propre capteur interne. Pas d'amplification proportionnelle, pas d'apprentissage de modèle thermique et pas d'optimisation MPC. Pour un contrôle plus précis, configurez un capteur de température externe dans la section Appareils.`,"room.delete":`Supprimer une pièce`,"room.deleting":`Suppression...`,"room.saving":`Enregistrement...`,"room.saved":`Enregistré`,"room.error_saving":`Erreur pendant l'enregistrement`,"room.confirm_delete":`Effacer la configuration RoomMind de "{name}"?`,"room.error_save_fallback":`Échec de l'enregistrement de la configuration`,"room.error_delete_fallback":`Échec de la suppression de la configuration`,"room.climate_control_toggle":`Contrôle climatique`,"room.climate_control_hint":`Si désactivé, RoomMind ne contrôle plus les appareils de cette pièce. Ils conservent leurs réglages actuels et peuvent continuer à chauffer ou refroidir d'eux-mêmes. RoomMind ne les éteint pas.`,"room.outdoor_toggle":`Zone extérieure`,"room.outdoor_hint":`Désactive le contrôle climatique, la détection de moisissures et l'entraînement du modèle. La surveillance des capteurs se poursuit.`,"room.alias.placeholder":`Nom d'affichage personnalisé`,"room.alias.clear":`Revenir au nom de la pièce`,"override.label":`Dérogation temporaire`,"override.comfort":`Confort`,"override.eco":`Éco`,"override.custom":`Personnalisé`,"override.target":`Cible:`,"override.heat_to":`Chauffer jusqu'à:`,"override.cool_above":`Refroidir au-dessus de:`,"override.invalid_band":`La cible de refroidissement doit être supérieure ou égale à la cible de chauffage`,"override.activate_for":`Activer pendant:`,"override.error_set":`Échec lors de la configuration de la dérogation`,"override.error_clear":`Échec lors de la suppression de la dérogation`,"hero.target":`Cible`,"hero.override":`Dérogation`,"hero.remaining":`{time} restant`,"hero.humidity":`{value}% humidité`,"hero.device_setpoint":`Appareil réglé sur {value}{unit}`,"hero.heat_source_primary":`Chauffage: vannes thermostatiques`,"hero.heat_source_secondary":`Chauffage: Climatisation`,"hero.heat_source_both":`Chauffage: Vannes thermostatiques + Climatisation`,"hero.permanent":`Permanent`,"hero.waiting":`En attente des données du capteur...`,"hero.not_configured":`Pas encore configuré`,"hero.mpc_learning_paused":`Apprentissage du MPC en pause`,"hero.mpc_learning_paused.outdoor_unavailable":`RoomMind a besoin d'une température extérieure pour apprendre le modèle thermique de cette pièce. Le capteur extérieur configuré n'est pas disponible et aucune entité météo n'est définie comme solution de secours. Configurez l'un ou l'autre dans les Paramètres.`,"hero.compressor_protection_min_off":`Protection du compresseur : attente du délai minimal d'arrêt`,"hero.compressor_protection_min_run":`Protection du compresseur : durée minimale de fonctionnement active`,"hero.compressor_protection_info":`Cette pièce partage une unité extérieure (compresseur) avec d'autres pièces. Pour éviter les cycles courts, le groupe de compresseurs impose une durée minimale de fonctionnement et un délai minimal d'arrêt avant que cet appareil ne puisse à nouveau changer d'état.`,"hero.coil_dry":`Séchage ({minutes} min)`,"hero.coil_dry_drain":`Écoulement ({minutes} min)`,"hero.coil_dry_info":`Le climatiseur effectue son cycle de séchage de l'évaporateur puis s'arrête. Une demande de refroidissement l'interrompt immédiatement.`,"card.target":`Cible`,"card.waiting":`En attente de données...`,"card.humidity":`{value}% humidité`,"card.thermostat":`Thermostat`,"card.thermostats":`Thermostats`,"card.ac":`Climatisation`,"card.acs":`Climatisations`,"card.climate_device":`appareil de climatisation`,"card.climate_devices":`appareils de climatisation`,"card.temp_sensor":`capteur temp.`,"card.temp_sensors":`capteurs temp.`,"card.no_climate":`Aucun appareil de climatisation`,"card.outdoor":`Extérieur`,"card.tap_configure":`Appuyez pour configurer`,"card.mpc_active":`MPC actif`,"card.mpc_learning":`MPC en apprentissage`,"card.not_controlled":`Pas contrôlé par RoomMind`,"mode.auto":`Auto`,"mode.auto_desc":`Chauffe et refroidit automatiquement en fonction de la température cible`,"mode.heat_only":`Chauffer seulement`,"mode.heat_only_desc":`Utilise seulement les thermostats, la climatisation reste éteinte`,"mode.cool_only":`Refroidir seulement`,"mode.cool_only_desc":`Utilise seulement la climatisation, les thermostats restent éteints`,"mode.heating":`Chauffage`,"mode.cooling":`Refroidissement`,"mode.idle":`En veille`,"schedule.add_schedule":`Ajouter une planification`,"schedule.select_schedule":`Sélectionnez la planification`,"schedule.create_helper_hint":`Créer une nouvelle planification dans les réglages HA`,"schedule.selector_label":`Entité sélecteur de planification`,"schedule.selector_value_boolean":`Actuel: {value}`,"schedule.selector_value_number":`Valeur actuelle: {value}`,"schedule.selector_warning":`Plusieurs planifications définies mais aucun sélecteur défini. Seule la première planification sera utilisée.`,"schedule.off_action_label":`Action quand la planification est désactivée`,"schedule.off_action_eco":`Utiliser la température Éco`,"schedule.off_action_off":`Éteindre les appareils`,"schedule.state_active":`Actif`,"schedule.state_inactive":`Inactif`,"schedule.state_unreachable":`Inaccessible`,"schedule.no_schedules":`Aucune planification configurée`,"schedule.done":`Terminé`,"schedule.view_comfort":`Confort: {temp}{unit}`,"schedule.view_eco":`Éco: {temp}{unit}`,"schedule.view_selector":`Planification active sélectionnée par: {name}`,"schedule.view_selector_prefix":`Planification active sélectionnée par:`,"schedule.help_header":`Comment fonctionnent les planifications ?`,"schedule.help_temps_title":`Comment la température cible est-elle déterminée ?`,"schedule.help_temps":`La température cible suit cette chaîne de priorité:`,"schedule.help_temps_1":`<strong>Dérogation manuelle</strong> – Une dérogation confort/éco/personnalisée a toujours la priorité la plus élevée.`,"schedule.help_temps_2":`<strong>Température du bloc</strong> – Si le bloc de planification actif possède une valeur <code>temperature</code> dans ses données, cette valeur est utilisée.`,"schedule.help_temps_3":`<strong>Température de confort</strong> – Si la planification est "activée" mais que le bloc n'a pas de température, la température de secours de confort ci-dessous est utilisée.`,"schedule.help_temps_4":`<strong>Température éco</strong> – Lorsque la planification est "désactivée" (en dehors de tous les blocs temporels), la température éco est utilisée.`,"schedule.help_block_title":`Définir la température par bloc horaire`,"schedule.help_block":`Vous pouvez définir une température spécifique pour chaque bloc horaire en ajoutant une valeur <code>temperature</code> dans la configuration YAML de la planification:`,"schedule.help_block_note":`Si un bloc n'a pas de donnée <code>temperature</code>, la température de secours de confort est utilisée à la place.`,"schedule.help_split_title":`Cibles de chauffage/refroidissement différentes par bloc`,"schedule.help_split":`Pour les pièces en mode auto, vous pouvez définir des cibles de chauffage et de refroidissement différentes par bloc horaire en utilisant <code>heat_temperature</code> et <code>cool_temperature</code> :`,"schedule.help_split_note":`Si une seule est définie, l'autre revient à la température de confort de la pièce. Ces clés ont la priorité sur <code>temperature</code> quand elles sont présentes.`,"schedule.help_multi_title":`Planifications multiples`,"schedule.help_multi":`Vous pouvez ajouter plusieurs planifications et basculer entre elles à l'aide d'une <strong>entité sélecteur</strong>. Cela peut être un <code>input_boolean</code> (bascule entre les planifications 1 et 2) ou un <code>input_number</code> (sélection par numéro). Sans entité sélecteur, seule la première planification est utilisée.`,"schedule.column_comfort":`Confort`,"schedule.column_eco":`Éco`,"schedule.row_heat":`Chauffage`,"schedule.row_cool":`Refroidissement`,"schedule.view_heat":`Chauffage : {comfort} / {eco}{unit}`,"schedule.view_cool":`Refroidissement : {comfort} / {eco}{unit}`,"schedule.comfort_hint_auto":`Confort : cible lorsque la planification est activée. Éco : cible lorsque la planification est désactivée. Les lignes définissent la cible pour le chauffage et le refroidissement.`,"schedule.comfort_label":`Température de confort de secours`,"schedule.eco_label":`Température éco`,"schedule.comfort_hint":`Utilisée lorsque la planification est "activée" mais aucune température n'est définie dans le bloc`,"schedule.from_schedule":`{temp}{unit} provenant de la planification`,"schedule.from_schedule_split":`{heat}{unit} / {cool}{unit} provenant de la planification`,"schedule.fallback":`{temp}{unit} (secours)`,"schedule.block_temp_rejected":`Valeurs hors de la plage valide {min}–{max}{unit} : {values}. La température de confort est utilisée à la place — vérifiez l'assistant de planification.`,"schedule.eco_detail":`{temp}{unit} (éco)`,"devices.climate_entities":`Entités climatiques`,"devices.temp_sensors":`Capteurs de température`,"devices.humidity_sensors":`Capteurs d'humidité`,"devices.no_climate":`Aucune entité climatique trouvée dans cette pièce.`,"devices.no_temp_sensors":`Aucun capteur de température trouvé dans cette pièce.`,"devices.no_humidity_sensors":`Aucun capteur d'humidité trouvé dans cette pièce.`,"devices.occupancy_sensors":`Capteurs de présence`,"devices.no_occupancy_sensors":`Aucun capteur de présence trouvé dans cette pièce`,"devices.occupancy_sensor_hint":`Améliore la précision du modèle thermique en suivant l'occupation de la pièce`,"devices.window_sensors":`Capteurs de fenêtre/porte`,"devices.no_window_sensors":`Aucun capteur de fenêtre/porte trouvé dans cette pièce.`,"devices.window_open_delay":`Délai avant la pause`,"devices.window_close_delay":`Délai avant la reprise`,"devices.add_entity":`Ajouter une entité`,"devices.done":`Terminé`,"devices.other_area":`Autre pièce`,"devices.type_thermostat":`Thermostat`,"devices.type_ac":`Appareil climatique`,"devices.type_label":`Type`,"devices.select_to_configure":`Sélectionnez un appareil à configurer`,"devices.heating_system_type":`Type de système de chauffage`,"devices.heating_system_type_info":`Après l'arrêt du chauffage, les radiateurs et surtout les systèmes de chauffage au sol continuent de libérer la chaleur stockée. RoomMind tient compte de cette chaleur résiduelle pour éviter le dépassement et améliorer la précision du modèle. Les pièces avec chauffage au sol bénéficient également de temps de marche minimum plus longs.`,"devices.system_type_none":`Standard (pas de chaleur résiduelle)`,"devices.system_type_radiator":`Radiateur`,"devices.system_type_underfloor":`Chauffage au sol`,"devices.underfloor_delay_hint":`Le chauffage au sol a des temps de redémarrage longs. Un délai d'ouverture de fenêtre d'au moins 5 minutes est recommandé pour éviter des arrêts inutiles.`,"devices.heating_system_type_boost_hint":`Astuce : Si le système de chauffage a changé, vous pouvez accélérer le réapprentissage dans les Paramètres.`,"devices.idle_action":`Lorsque inactif`,"devices.idle_action_off":`Éteindre`,"devices.idle_action_fan_only":`Ventilateur uniquement`,"devices.idle_action_setback":`Décalage`,"devices.idle_action_low":`Consigne basse (maintenir actif)`,"devices.idle_action_low_hint":`Abaisse la consigne au minimum de l'appareil au lieu de l'éteindre. Empêche les TRV qui hibernent en mode off de perdre les commandes ultérieures.`,"devices.idle_fan_mode":`Vitesse du ventilateur`,"devices.idle_fan_mode_keep":`Ne pas changer`,"devices.setpoint_mode":`Mode de consigne`,"devices.setpoint_mode_proportional":`Proportionnel (contrôle de vanne)`,"devices.setpoint_mode_direct":`Direct (l'appareil régule)`,"devices.setpoint_mode_hint":`Direct envoie la cible réelle de la pièce à l'appareil — idéal pour les thermostats et les chauffages d'appoint qui se régulent eux-mêmes. Proportionnel envoie une consigne renforcée vers la température maximale de l'appareil — idéal pour les vannes de radiateur (TRV).`,"devices.coil_dry":`Séchage de l'évaporateur`,"devices.coil_dry_inherit":`Utiliser le réglage global`,"devices.coil_dry_on":`Toujours activé`,"devices.coil_dry_off":`Toujours désactivé`,"devices.coil_dry_minutes":`Durée de séchage (0 = global : {minutes} min)`,"devices.coil_dry_mode":`Mode de séchage`,"devices.coil_dry_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode":`Vitesse du ventilateur pendant le séchage`,"devices.coil_dry_fan_mode_inherit":`Global ({value})`,"devices.coil_dry_fan_mode_keep":`Conserver la vitesse actuelle`,"devices.coil_dry_summary":`Séchage`,"devices.coil_dry_global_off_hint":`Le séchage de l'évaporateur est désactivé globalement, rien ne se déclenche donc pour cet appareil. Activez-le dans les réglages ou passez cet appareil sur « Toujours actif ».`,"devices.valve_protection_excluded":`Exclu de la protection des vannes`,"devices.valve_protection_exclude_hint":`Cette entité ne sera pas cyclée par la protection des vannes (ex. entités chaudière virtuelles)`,"devices.info.types_title":`Types d'appareil`,"devices.info.types_body":`Thermostat désigne un thermostat de radiateur / TRV. Appareil climatique désigne un climatiseur, une pompe à chaleur ou autre entité climatique utilisée pour le refroidissement ou le chauffage à air pulsé. Les deux sont des entités climatiques dans Home Assistant; la différence réside dans la façon dont RoomMind les contrôle.`,"devices.info.control_title":`Comment RoomMind les contrôle`,"devices.info.control_body":`Le mode de consigne ne s'applique qu'aux thermostats dans les pièces en Contrôle total disposant d'un capteur de température externe. Utilisez Proportionnel lorsque RoomMind doit piloter le chauffage en envoyant des consignes renforcées. Utilisez Direct lorsque l'appareil doit se réguler autour de la vraie température cible.`,"devices.info.modes_title":`Comportement en inactivité`,"devices.info.modes_body":`Lorsque inactif ne s'applique qu'aux appareils climatiques. Éteindre met l'appareil hors tension. Ventilateur uniquement maintient le débit d'air sans chauffage ni refroidissement. Décalage garde le mode actuel actif mais décale la cible de 2°C par rapport à la cible de la pièce. Ce décalage de réduction est actuellement fixe. Pour les thermostats, Consigne basse garde le TRV actif à sa consigne minimale au lieu de l'éteindre, utile pour les TRV Zigbee à batterie qui se mettent en veille lorsqu'ils sont à off.`,"devices.info.heat_source_title":`Sélection intelligente de source`,"devices.info.heat_source_body":`Cela apparaît uniquement lorsqu'une pièce possède à la fois un thermostat/TRV et un appareil climatique ainsi qu'un capteur de température externe. RoomMind peut alors choisir la source qui gérera le chauffage en fonction de l'écart de température et des conditions extérieures.`,"hero.window_open":`Fenêtre ouverte - en pause`,"card.window_open":`Fenêtre ouverte`,"room.section.covers":`Rideaux & stores`,"covers.section_title":`Rideaux & stores`,"covers.auto_control":`Contrôle automatique des stores`,"covers.auto_control_hint":`RoomMind ferme les stores lorsque le gain solaire risque de surchauffer la pièce.`,"covers.deploy_threshold":`Seuil de déploiement`,"covers.deploy_threshold_hint":`Ferme les stores lorsque la température prévue dépasse la cible de cette quantité.`,"covers.min_position":`Position d'ouverture minimale`,"covers.min_position_hint":`Les stores ne se fermeront jamais plus que cela (0 = fermeture totale autorisée).`,"covers.override_minutes":`Durée de pause de la dérogation`,"covers.override_minutes_hint":`Durée pendant laquelle le contrôle automatique est mis en pause après un mouvement manuel du store. Mettre 0 pour aucune pause.`,"covers.no_covers":`Aucune entité de store configurée.`,"covers.no_covers_in_area":`Aucune entité de store trouvée dans cette pièce.`,"covers.add_cover":`Ajouter une entité de store...`,"covers.shading_active":`Ombrage activé`,"covers.auto_paused":`Pause auto (dérogation manuelle)`,"covers.auto_paused_until":`Contrôle automatique en pause jusqu'à`,"covers.resume_auto":`Reprendre le contrôle automatique`,"covers.done":`Terminé`,"covers.night_close":`Fermer la nuit`,"covers.night_close_hint":`Ferme automatiquement les stores au coucher du soleil et les ouvre au lever du soleil.`,"covers.night_close_active":`Fermeture nocturne active`,"covers.schedule_group_title":`Planification`,"covers.solar_group_title":`Contrôle solaire`,"covers.schedule_section":`Planification des stores`,"covers.schedule_section_hint":`Définissez des créneaux horaires pour le contrôle des stores à l'aide des assistants de planification HA. En mode Forcer la position, la position de la planification l'emporte sur la logique solaire/thermique. En mode Autoriser la protection solaire, RoomMind décide de la position dans la fenêtre active.`,"covers.add_schedule":`Ajouter un horaire de store...`,"covers.schedule_mode_force":`Forcer la position`,"covers.schedule_mode_gate":`Autoriser la protection solaire`,"covers.schedule_mode_gate_short":`Portail solaire`,"covers.schedule_position":`Position`,"covers.schedule_position_hint":`Position du store lorsque cette planification est active (0% = entièrement fermé, 100% = entièrement ouvert).`,"covers.schedule_selector":`Entité sélecteur de planification`,"covers.schedule_selector_hint":`Choisissez quelle planification est active. input_boolean: off=#1, on=#2. input_number: la valeur sélectionne le numéro de planification.`,"covers.schedule_selector_warning":`Plusieurs planifications configurées mais aucun sélecteur défini. Seule la première planification sera utilisée.`,"covers.schedule_state_active":`Actif`,"covers.schedule_state_inactive":`Inactif`,"covers.schedule_state_unreachable":`Inaccessible`,"covers.schedule_active":`Horaire actif`,"covers.schedule_create_link":`Créer un assistant de planification`,"covers.night_position":`Position nocturne`,"covers.night_position_hint":`Position du store lorsque la fermeture nocturne est active (0% = entièrement fermé). Les stores avec une position minimale individuelle ne descendront jamais en dessous.`,"covers.night_close_advanced":`Avancé`,"covers.night_close_elevation":`Seuil de position du soleil`,"covers.night_close_elevation_hint":`À quelle distance sous ou au-dessus de l'horizon le soleil doit être. 0° = exactement au coucher/lever du soleil. Négatif = plus sombre (ex. -6° = crépuscule, lorsqu'il fait clairement sombre). Positif = encore lumineux (ex. 5° = le soleil encore visible au-dessus de l'horizon).`,"covers.night_close_offset":`Décalage horaire`,"covers.night_close_offset_hint":`Décalage supplémentaire par rapport au seuil de position du soleil. Positif = fermeture plus tard (ex. +20 = 20 min après le seuil), négatif = fermeture plus tôt.`,"covers.outdoor_min_temp":`Température extérieure min.`,"covers.outdoor_min_temp_hint":`Ne pas fermer les stores pour protéger du soleil en dessous de cette température extérieure. Le gain de chaleur solaire est bienvenu quand il fait froid.`,"covers.per_cover_title":`Paramètres par store`,"covers.per_cover_hint":`Définissez la direction cardinale de chaque store et les positions minimales individuelles éventuelles.`,"covers.per_cover_min_short":`Min`,"covers.per_cover_min_position":`Position min.`,"covers.per_cover_min_position_hint":`Position minimale individuelle par store. Les stores ne se fermeront jamais plus que cela. Utile lorsque les stores sont physiquement complètement fermés à une position > 0%.`,"covers.snap_deploy":`Forcer à la position minimale`,"covers.snap_deploy_hint":`Fermer les stores directement à la position minimale au lieu de les fermer progressivement. Recommandé pour les fenêtres à triple vitrage où les positions intermédiaires peuvent causer du stress thermique.`,"covers.info.selection_title":`Sélection de stores`,"covers.info.selection_body":`Sélectionnez les rideaux/stores de cette zone ou ajoutez des entités d'autres zones. RoomMind suit leur position et peut les contrôler automatiquement.`,"covers.info.schedule_title":`Contrôle via planification`,"covers.info.schedule_body":`Utilisez les assistants de planification HA pour définir les moments où les stores doivent se fermer (ex. intimité le soir). L'attribut de position de l'horaire détermine le degré de fermeture. Les planifications remplacent toute autre logique automatique.`,"covers.info.solar_title":`Contrôle solaire/thermique`,"covers.info.solar_body":`Lorsque le contrôle automatique est activé, RoomMind prédit si le rayonnement solaire surchaufferait la pièce et ferme les stores de manière préventive. Il utilise les données thermiques apprises lorsqu'elles sont disponibles, sinon une valeur par défaut prudente. Le seuil de déploiement détermine le dépassement prédit nécessaire avant de fermer les stores.`,"covers.info.night_title":`Fermeture nocturne`,"covers.info.night_body":`Ferme les stores au coucher du soleil et les ouvre au lever du soleil. Vous pouvez définir une position nocturne personnalisée (ex. 10% = presque fermé mais pas totalement).`,"covers.info.override_title":`Dérogation manuelle`,"covers.info.override_body":`Si vous déplacez manuellement un store, RoomMind le détecte et met le contrôle automatique en pause pendant la durée configurée. Cela évite les conflits avec l'utilisateur.`,"covers.info.priority_title":`Ordre de priorité`,"covers.info.priority_body":`Dérogation manuelle > Planification > Fermeture nocturne > Contrôle solaire/thermique. Les règles de priorité supérieure l'emportent toujours. Lorsqu'aucune règle ne s'applique, les stores restent ouverts.`,"covers.info.entities_title":`Entités HA`,"covers.info.entities_body":`RoomMind crée deux entités par pièce pour une utilisation externe: switch.roommind_{area}_cover_auto (activer/désactiver le contrôle automatique des stores — utilisable dans les automatisations ou tableaux de bord) et binary_sensor.roommind_{area}_cover_paused (activé lorsque la dérogation manuelle est en cours, ex. après un déplacement manuel d'un store).`,"covers.orientation_group_title":`Orientation du store`,"covers.orientation_hint":`Définissez la direction cardinale vers laquelle chaque store fait face. RoomMind utilise cela pour ignorer le déploiement solaire lorsque le soleil n'éclaire pas ce côté du bâtiment.`,"covers.orientation_none":`Pas de direction`,"covers.orientation_N":`N`,"covers.orientation_NE":`NE`,"covers.orientation_E":`E`,"covers.orientation_SE":`SE`,"covers.orientation_S":`S`,"covers.orientation_SW":`SO`,"covers.orientation_W":`O`,"covers.orientation_NW":`NO`,"covers.orientation_N_full":`Nord`,"covers.orientation_NE_full":`Nord-Est`,"covers.orientation_E_full":`Est`,"covers.orientation_SE_full":`Sud-Est`,"covers.orientation_S_full":`Sud`,"covers.orientation_SW_full":`Sud-Ouest`,"covers.orientation_W_full":`Ouest`,"covers.orientation_NW_full":`Nord-Ouest`,"settings.general_title":`Général`,"settings.group_by_floor":`Regrouper les pièces par étage`,"settings.climate_control_active":`Contrôle climatique actif`,"settings.climate_control_hint":`Lorsqu'il est désactivé, RoomMind continue de surveiller tous les capteurs et d'entraîner le modèle, mais n'envoie aucune commande à vos appareils de chauffage ou de refroidissement. Vos appareils conservent leur mode et leur consigne actuels et peuvent continuer à chauffer ou refroidir d'eux-mêmes. RoomMind ne les éteint pas.`,"settings.learning_title":`Entraînement du modèle`,"settings.learning_hint":`Lorsqu'il est en pause, RoomMind cesse de collecter de nouvelles mesures et d'entraîner le modèle thermique. Les données du modèle existant sont conservées.`,"settings.learning_exceptions":`Exceptions`,"settings.learning_room_paused":`pièce en pause`,"settings.learning_rooms_paused":`pièces en pause`,"settings.sensors_title":`Capteurs & sources de données`,"settings.control_title":`Contrôle`,"settings.outdoor_sensor":`Température extérieure`,"settings.outdoor_sensor_label":`Capteur de température extérieure`,"settings.outdoor_current":`Actuellement {temp}{unit} dehors`,"settings.outdoor_waiting":`En attente des données du capteur...`,"settings.outdoor_humidity_sensor":`Humidité extérieure`,"settings.outdoor_humidity_label":`Capteur d'humidité extérieure`,"settings.outdoor_humidity_current":`Actuellement {value}% dehors`,"settings.smart_control":`Contrôle climatique intelligent`,"settings.smart_control_hint":`Configurez les limites de température extérieure pour le chauffage et le refroidissement.`,"settings.outdoor_cooling_min":`Température extérieure minimale pour le refroidissement`,"settings.outdoor_cooling_min_hint":`Le climatiseur reste éteint lorsque la température extérieure est inférieure à cette valeur`,"settings.outdoor_heating_max":`Température extérieure maximale pour le chauffage`,"settings.outdoor_heating_max_hint":`Le chauffage reste éteint lorsque la température extérieure dépasse cette valeur`,"settings.saving":`Enregistrement...`,"settings.saved":`Enregistré`,"settings.error":`Erreur lors de l'enregistrement`,"devices.using_builtin_sensor":`Utilisation du capteur intégré du thermostat`,"settings.climate_intelligence":`Intelligence climatique`,"settings.control_mode":`Mode de contrôle`,"settings.control_mode_simple":`Simple (Bang-Bang)`,"settings.control_mode_mpc":`Intelligent (MPC)`,"settings.control_mode_hint":`Le MPC apprend le comportement thermique de votre pièce pour un contrôle optimal`,"settings.comfort_weight":`Priorité`,"settings.comfort_weight_comfort":`Confort`,"settings.comfort_weight_efficiency":`Efficacité`,"settings.comfort_weight_hint":`Équilibre la précision de la température avec la consommation d'énergie. Le confort réagit plus tôt et reste plus proche de la cible. L'efficacité permet plus de dérive pour réduire la durée de chauffage/refroidissement.`,"settings.weather_entity":`Prévision météo`,"settings.weather_entity_hint":`Optionnel : active la planification prédictive de la température extérieure et sert de secours lorsque le capteur extérieur est indisponible`,"settings.outdoor_unavailable_notify":`Notifier lorsque la température extérieure est indisponible`,"settings.outdoor_unavailable_notify_hint":`Afficher une notification Home Assistant lorsqu'aucun des capteurs extérieurs ni l'entité météo n'a signalé de température pendant 30 minutes. Pendant ce temps, RoomMind met en pause l'apprentissage du modèle thermique pour éviter la corruption.`,"settings.prediction_enabled":`Prédiction de température`,"settings.prediction_enabled_hint":`Afficher la tendance de température prédite dans les graphiques d'analyse. A désactiver si vous constatez de mauvaises performances.`,"vacation.title":`Mode vacances`,"vacation.hint":`Règle toutes les pièces sur une température réduite jusqu'à la date de fin.`,"vacation.active_label":`Mode vacances actif`,"vacation.end_date":`Date et heure de fin`,"vacation.setback_temp":`Température de réduction`,"vacation.no_end_date":`Pas de date de fin`,"vacation.deactivate":`Désactiver`,"tabs.analytics":`Analyses`,"analytics.select_room":`Sélectionner une pièce`,"analytics.temperature":`Température`,"analytics.target":`Cible`,"analytics.prediction":`Prédiction`,"analytics.outdoor":`Extérieur`,"analytics.model_status":`Statut du modèle`,"analytics.confidence":`Confiance`,"analytics.heating_rate":`Puissance de chauffage`,"analytics.cooling_rate":`Puissance de refroidissement`,"analytics.solar_gain":`Gain solaire`,"analytics.occupancy_gain":`Gain d'occupation`,"analytics.time_constant":`Constante de temps`,"analytics.samples":`Échantillons`,"analytics.prediction_accuracy":`Précision de la prédiction`,"analytics.avg_deviation":`Écart moyen`,"analytics.data_sources":`Sources de données`,"analytics.data_points":`Points de données`,"analytics.control_mode":`Mode de contrôle`,"analytics.control_mode_mpc":`MPC actif`,"analytics.control_mode_bangbang":`MPC en apprentissage`,"analytics.last_model_update":`Dernière mise à jour du modèle`,"analytics.accuracy_idle":`Précision (Inactif)`,"analytics.accuracy_heating":`Précision (Chauffage)`,"analytics.info.accuracy_idle":`À quel point le modèle prédit précisément la température lorsqu'aucun chauffage ni refroidissement n'est actif. Une valeur plus basse signifie que le modèle comprend bien la perte de chaleur naturelle de votre pièce. C'est la première valeur qui s'améliore car les données au repos sont collectées en continu.`,"analytics.info.accuracy_heating":`À quel point le modèle prédit précisément la température pendant que le chauffage est actif. Cette valeur reste élevée au début car le modèle a besoin de véritables cycles de chauffage pour apprendre. Une fois que votre chauffage a fonctionné plusieurs fois, cette valeur diminuera et le contrôle MPC deviendra disponible.`,"analytics.info.confidence":`Niveau global de préparation du modèle pour le contrôle MPC intelligent, combinant deux facteurs : la quantité de données (nombre d'échantillons en mode repos et actif) et la précision des prédictions (précision des prévisions de température). La confiance démarre à 0% et augmente à mesure que le modèle collecte des données et apprend. Environ 50% signifie qu'il y a suffisamment de données au repos mais qu'on attend encore des cycles de chauffage/refroidissement. Au-delà de 80% le modèle dispose de suffisamment de données et de prédictions précises — le contrôle MPC devient disponible. 100% est le maximum théorique lorsque les prédictions sont aussi précises que physiquement possible.`,"analytics.info.time_constant":`Durée nécessaire à votre pièce pour se refroidir naturellement jusqu'à la moitié de la différence avec la température extérieure lorsque le chauffage est éteint. Un temps constant plus long indique une meilleure isolation — la pièce conserve la chaleur plus longtemps. Un temps constant court signifie que la pièce se refroidit rapidement. Le modèle apprend cela en observant les baisses de température pendant les périodes d'inactivité.`,"analytics.info.heating_rate":`Intensité de l'effet de votre chauffage sur la température de la pièce. Une valeur plus élevée signifie que votre système de chauffage réchauffe la pièce plus rapidement par rapport à sa masse thermique. Le modèle apprend cela en observant la vitesse à laquelle la température augmente pendant que le chauffage est actif, et l'utilise pour prévoir la durée nécessaire du chauffage.`,"analytics.info.cooling_rate":`Intensité de l'effet de votre climatiseur sur la température de la pièce. Une valeur plus élevée signifie que le climatiseur refroidit la pièce plus rapidement par rapport à sa masse thermique. Le modèle apprend cela en observant la vitesse à laquelle la température baisse pendant le refroidissement actif, et l'utilise pour prévoir la durée nécessaire du fonctionnement du climatiseur.`,"analytics.info.solar_gain":`Effet estimé du rayonnement solaire à travers les fenêtres sur la température de la pièce. Le modèle apprend cela en observant comment la pièce se réchauffe pendant les périodes ensoleillées lorsque le chauffage est éteint. Les pièces avec de grandes fenêtres orientées sud auront des valeurs plus élevées. Le modèle utilise cela pour réduire le chauffage lorsqu'un gain solaire est attendu.`,"analytics.info.occupancy_gain":`Contribution thermique estimée due à l'occupation (personnes, animaux, ordinateurs) lorsque la pièce est occupée. Le modèle apprend cela en observant les variations de température lorsque les capteurs d'occupation configurés sont actifs. Séparer cela du gain solaire évite que la chaleur corporelle ne soit attribuée à tort à la lumière du soleil. Affiché uniquement lorsqu'au moins un capteur d'occupation est configuré pour cette pièce.`,"analytics.info.data_sources":`Nombre d'échantillons de mesure utilisés pour l'entraînement du modèle.`,"analytics.info.data_points":`Nombre total d'observations sur lesquelles le modèle a été entraîné. Plus de points de données conduisent généralement à de meilleures prédictions. Le modèle collecte un nouveau point de donnée environ toutes les 3 minutes tant que RoomMind fonctionne.`,"analytics.no_data":`Aucune donnée pour le moment — le modèle apprend`,"analytics.loading":`Chargement des analyses...`,"settings.reset_title":`Réinitialiser les données thermiques`,"settings.reset_hint":`Effacer les données thermiques du modèle et l'historique. Le modèle recommencera à apprendre à partir de zéro.`,"settings.reset_all_label":`Toutes les pièces`,"settings.reset_all_hint":`Effacer les données thermiques et l'historique de toutes les pièces en une fois.`,"settings.reset_all_btn":`Tout réinitialiser`,"settings.reset_all_confirm":`Effacer toutes les données thermiques et l'historique pour TOUTES les pièces ? Tous les modèles recommenceront à apprendre à partir de zéro.`,"settings.reset_room_label":`Pièce individuelle`,"settings.reset_room_hint":`Sélectionnez une pièce pour effacer ses données thermiques et son historique.`,"settings.reset_room_confirm":`Effacer toutes les données thermiques apprises et l'historique pour cette pièce ? Le modèle recommencera à apprendre à partir de zéro.`,"settings.reset_room_select":`Sélectionner une pièce`,"settings.reset_btn":`Réinitialiser`,"settings.reset_no_rooms":`Aucune pièce configurée.`,"settings.boost_title":`Accélérer l'apprentissage`,"settings.boost_hint":`Le modèle thermique apprend le comportement de chauffage et de refroidissement de votre pièce au fil du temps. Après des changements majeurs (nouveau radiateur, climatiseur, isolation, mobilier), le modèle peut être imprécis. Cela augmente l'incertitude du modèle afin qu'il s'adapte plus rapidement aux nouvelles conditions.`,"settings.boost_label":`Accélérer l'apprentissage`,"settings.boost_room_select":`Sélectionner une pièce`,"settings.boost_btn":`Accélérer`,"settings.boost_cooldown":`Actif - réapprentissage en cours`,"settings.boost_no_rooms":`Aucune pièce configurée.`,"analytics.range_1d":`Aujourd'hui`,"analytics.range_2d":`2 jours`,"analytics.range_7d":`Semaine`,"analytics.range_30d":`Mois`,"analytics.export":`Mesures`,"analytics.heating_period":`Chauffage`,"analytics.cooling_period":`Refroidissement`,"analytics.blind_position":`Position du store`,"analytics.window_open_period":`Fenêtre ouverte`,"analytics.chart_info_title":`Comment lire ce graphique`,"analytics.exported":`Exporté !`,"analytics.copy_diagnostics":`Diagnostics`,"analytics.export_download":`Télécharger le fichier`,"analytics.export_clipboard":`Copier dans le presse-papiers`,"analytics.copied_to_clipboard":`Copié !`,"analytics.range_from":`De`,"analytics.range_to":`À`,"analytics.chart_info_body":`**Lignes:** La ligne orange solide montre la température mesurée de la pièce. La ligne verte en pointillé représente la température cible de votre planning. La ligne bleue pointillée est la prédiction de température du modèle.

**Zones colorées:** Le rouge indique les périodes de chauffage, le bleu les périodes de refroidissement, et le turquoise les moments où une fenêtre était ouverte.

**Prévision future (à droite de la ligne « now »)** : La ligne verte en pointillé montre les objectifs de planning à venir pour les 3 prochaines heures. La ligne bleue pointillée montre la tendance de température prévue.

**Modes de prédiction :** Lorsque « MPC actif » est affiché, la prédiction utilise l'optimiseur complet MPC avec pré-chauffage/pré-refroidissement intelligent. Tant que le modèle apprend encore, une simulation plus simple est utilisée.

**Limites :** La prédiction suppose que les conditions actuelles restent constantes (température extérieure, état des fenêtres). La précision de la simulation dépend de la qualité d'apprentissage du modèle thermique de votre pièce — au début, les prédictions peuvent être moins précises. Une fois le MPC activé, les prédictions deviennent nettement plus fiables.`,"presence.title":`Détection de présence`,"presence.hint":`Utilise la température éco lorsque personne n'est présent.`,"presence.hint_detail":`Lorsque activé, toutes les pièces passent à la température éco dès qu'aucune des personnes configurées n'est à la maison. Vous pouvez éventuellement restreindre, par pièce, quelles personnes sont prises en compte.`,"presence.add_person":`Ajouter une personne`,"presence.add_entity":`Ajouter une entité de présence`,"presence.person_label":`Personne`,"room.section.presence":`Présence`,"presence.room_help_header":`Comment fonctionne la présence par pièce ?`,"presence.room_help_body":`Sélectionnez les personnes pertinentes pour cette pièce. La pièce passe à la température éco lorsqu'aucune des personnes sélectionnées n'est à la maison. Sans sélection, la règle globale s'applique : éco lorsqu'aucun occupant n'est présent.`,"presence.state_home":`À la maison`,"presence.state_away":`Absent`,"presence.room_none_assigned":`Règle globale — éco lorsqu'aucun occupant n'est présent`,"presence.missing_entity_hint":`Cette entité n'existe plus dans Home Assistant — décochez-la pour la retirer de cette pièce.`,"presence.ignore_toggle":`Ignorer la présence`,"presence.ignore_hint":`Contrôle la façon dont cette pièce réagit à la présence. Vous pouvez attribuer des personnes spécifiques ci-dessous. La pièce passe à l'éco lorsqu'aucune des personnes assignées n'est à la maison. Utilisez le commutateur ci-dessus pour ignorer totalement la détection et suivre toujours le planning.`,"presence.help_ignore_title":`Que fait « Ignorer la présence » ?`,"presence.help_ignore_body":`Lorsqu'elle est activée, cette pièce ignore complètement la détection de présence. Elle suit toujours son planning et ne passe jamais en mode éco en fonction de la présence. Utile pour les pièces qui doivent maintenir la température quel que soit l'occupant, comme une salle serveur, un espace pour animaux ou une chambre d'ami non suivie par Home Assistant.`,"presence.tile_ignored":`Détection de présence ignorée. La pièce suit toujours son planning.`,"presence.away_action_label":`Action lorsque personne n'est à la maison`,"presence.away_action_eco":`Utiliser la température éco`,"presence.away_action_off":`Éteindre les appareils`,"presence.clears_override_label":`L'absence annule la dérogation`,"presence.clears_override_hint":`Lorsque personne n'est à la maison, les dérogations manuelles sont suspendues et la pièce suit l'action d'absence. Quand quelqu'un revient, la dérogation reprend jusqu'à son expiration.`,"card.presence_away":`Absent`,"valve_protection.title":`Protection des vannes`,"valve_protection.hint":`Ouvre périodiquement et brièvement les vannes TRV inactives pour éviter le blocage ou la calcification.`,"valve_protection.interval_label":`Intervalle du cycle`,"valve_protection.interval_suffix":`jours`,"valve_protection.interval_hint":`Durée pendant laquelle une valve peut rester inactive avant d'être cyclée (1-90 jours)`,"compressor.title":`Protection du compresseur`,"compressor.no_groups":`Aucun groupe de compresseurs configuré.`,"compressor.add_group":`Ajouter un groupe de compresseur`,"compressor.group_name":`Nom du groupe`,"compressor.members":`Unités intérieures`,"compressor.members_hint":`Sélectionnez tous les appareils climatiques alimentés par ce compresseur (unités intérieures, TRV sur radiateurs, ventilo-convecteurs).`,"compressor.min_run":`Durée minimale de fonctionnement`,"compressor.min_run_hint":`Le compresseur doit fonctionner au moins aussi longtemps une fois démarré.`,"compressor.min_run_suffix":`min`,"compressor.min_off":`Durée minimale d'arrêt`,"compressor.min_off_hint":`Le compresseur doit rester arrêté au moins aussi longtemps après l'arrêt.`,"compressor.min_off_suffix":`min`,"compressor.delete":`Supprimer le groupe`,"compressor.delete_confirm":`Supprimer le groupe de compresseur "{name}" ?`,"compressor.master_entity":`Appareil maître`,"compressor.master_entity_hint":`L'unité centrale qui alimente les appareils intérieurs de ce groupe, par ex. une chaudière à gaz, une unité extérieure de pompe à chaleur ou l'interrupteur maître d'un système de climatisation gainé. RoomMind l'allumera dès qu'une pièce a besoin de chauffage ou de refroidissement, et l'éteindra lorsque toutes les pièces sont au repos. Laisser vide pour n'utiliser que le script d'action ou la protection contre les courts cycles.`,"compressor.conflict_resolution":`Résolution des conflits`,"compressor.conflict_resolution_hint":`Détermine ce qui se passe lorsque certaines pièces ont besoin de chauffage tandis que d'autres ont besoin de refroidissement simultanément. Priorité chauffage : le chauffage l'emporte toujours (le plus sûr pour la protection contre le gel). Priorité refroidissement : le refroidissement l'emporte toujours. Majorité : le mode avec le plus de pièces l'emporte, les égalités vont au chauffage. Température extérieure : utilise le seuil maximal de chauffage extérieur des paramètres pour décider automatiquement.`,"compressor.conflict_heating_priority":`Priorité chauffage (protection contre le gel)`,"compressor.conflict_cooling_priority":`Priorité refroidissement`,"compressor.conflict_majority":`Majorité l'emporte`,"compressor.conflict_outdoor_temp":`Selon la température extérieure`,"compressor.action_script":`Script d'action`,"compressor.action_script_hint":`Un script Home Assistant qui s'exécute chaque fois que la demande de chauffage/refroidissement change. Utile pour les systèmes nécessitant des commandes spécifiques, par ex. annuler un Vaillant Quick Veto ou basculer un relais. Fonctionne avec ou sans appareil maître. Sans appareil maître, seul le script est déclenché. Reçoit les variables : action (heat/cool/idle), master_entity, members, active_members.`,"compressor.enforce_uniform_mode":`Imposer un mode uniforme`,"compressor.enforce_uniform_mode_hint":`Tous les thermostats de ce groupe doivent fonctionner dans le même mode HVAC (tout chauffage ou tout refroidissement). Les pièces qui ne sont pas d'accord avec le mode de groupe résolu seront mises en mode repos. Utilisez cela pour les pompes à chaleur qui démarrent automatiquement mais exigent que toutes les unités connectées fonctionnent dans le même mode.`,"coil_dry.title":`Séchage de l'évaporateur`,"coil_dry.hint":`Après le refroidissement, laissez tourner le ventilateur intérieur un moment avant l'arrêt réel du climatiseur. Cela sèche l'évaporateur pour éviter la formation d'un biofilm et l'odeur de moisi au démarrage suivant.`,"coil_dry.duration_label":`Durée de séchage`,"coil_dry.duration_suffix":`min`,"coil_dry.duration_hint":`Durée pendant laquelle le ventilateur continue (1–60 min). À vitesse basse, comptez environ le double d'une vitesse élevée.`,"coil_dry.min_cooling_label":`Durée de refroidissement minimale`,"coil_dry.min_cooling_suffix":`min`,"coil_dry.min_cooling_hint":`Ne sécher que si l'appareil a refroidi au moins aussi longtemps. Les courts cycles de refroidissement sont cumulés (1–240 min).`,"coil_dry.mode_label":`Mode de séchage`,"coil_dry.mode_fan_only":`fan_only (ventilateur seul)`,"coil_dry.mode_dry":`dry (déshumidification)`,"coil_dry.mode_dry_warning":`En mode dry, le compresseur continue de tourner et refroidit à nouveau les ailettes, ce qui va à l'encontre du séchage. À choisir uniquement si le mode dry de votre appareil privilégie le ventilateur.`,"coil_dry.fan_mode_label":`Vitesse du ventilateur pendant le séchage`,"coil_dry.fan_mode_keep":`Conserver la vitesse actuelle`,"coil_dry.fan_mode_hint":`Une vitesse plus élevée sèche plus vite mais fait plus de bruit. Les vitesses non signalées par l'appareil sont ignorées : il conserve alors la sienne.`,"coil_dry.drain_label":`Délai d'écoulement`,"coil_dry.drain_suffix":`min`,"coil_dry.drain_hint":`Laisser d'abord l'appareil éteint pour que les condensats s'écoulent, puis démarrer le ventilateur (0–15 min). Réduit l'humidité renvoyée dans la pièce.`,"mold.title":`Protection contre le risque de moisissure`,"mold.detection":`Détection de moisissure`,"mold.detection_desc":`Recevoir des notifications lorsque l'humidité indique un risque de moisissure`,"mold.threshold":`Seuil d'humidité (%)`,"mold.threshold_hint":`Alerter lorsque l'humidité de la pièce reste au-dessus de cette valeur`,"mold.sustained":`Durée écoulée (minutes)`,"mold.sustained_hint":`Alerter uniquement quand le risque persiste aussi longtemps`,"mold.prevention":`Prévention de la moisissure`,"mold.prevention_desc":`Augmenter automatiquement la température pour réduire le risque de moisissure`,"mold.intensity":`Intensité`,"mold.intensity_light":`Léger (+{delta}{unit})`,"mold.intensity_medium":`Moyen (+{delta}{unit})`,"mold.intensity_strong":`Fort (+{delta}{unit})`,"mold.intensity_hint":`L'air plus chaud réduit l'humidité de surface sur les murs froids. Léger suffit généralement pour un risque modéré, Fort peut abaisser l'humidité de surface jusqu'à 8-10% — mais consomme nettement plus d'énergie.`,"card.mold_warning":`Risque de moisissure`,"card.mold_critical":`Danger de moisissure !`,"card.mold_prevention":`Prévention de la moisissure +{delta}{unit}`,"room.mold_surface_rh":`Humidité de surface estimée : {value}%`,"settings.intro.general":`Paramètres d'affichage et de contrôle de base.`,"settings.intro.sensors":`Configurez les capteurs extérieurs et les données météo pour un contrôle climatique précis.`,"settings.intro.control":`Choisissez comment RoomMind contrôle vos appareils climatiques et définissez les priorités et seuils.`,"settings.intro.presence":`Réduisez automatiquement la température lorsqu'aucun occupant n'est présent.`,"settings.intro.vacation":`Réglez toutes les pièces à une température réduite pendant votre absence.`,"settings.intro.valve":`Déplacez périodiquement les vannes TRV inactives pour éviter le blocage ou la calcification.`,"settings.intro.compressor":`Gérez les groupes d'unités intérieures qui partagent un compresseur extérieur ou une source de chauffage centrale. Vous pouvez assigner un dispositif maître (chaudière, unité extérieure) pour l'allumer/éteindre automatiquement selon la demande des pièces. La protection contre les courts cycles évite les commutations rapides qui peuvent endommager l'équipement.`,"settings.intro.mold":`Surveillez l'humidité et réduisez automatiquement le risque de moisissure.`,"settings.intro.notifications":`Configurez qui reçoit les alertes et comment.`,"settings.intro.learning":`Gérez l'entraînement du modèle thermique et accélérez le réapprentissage après des changements.`,"settings.intro.reset":`Effacez les données du modèle thermique appris. Le modèle recommencera à apprendre à partir de zéro.`,"notifications.title":`Notifications`,"notifications.enabled":`Activer les notifications`,"notifications.enabled_hint":`Lorsqu'elles sont désactivées, aucune notification n'est envoyée — ni aux appareils, ni à la barre latérale HA.`,"notifications.desc":`Choisissez quels appareils reçoivent les alertes. Sans cibles, les alertes apparaissent dans la barre latérale HA.`,"notifications.add_target_label":`Ajouter un appareil de notification`,"notifications.add_target_hint":`Saisissez l'ID d'entité si votre appareil n'est pas répertorié (ex. notify.mobile_app_...). Vous pouvez le trouver sous Paramètres → Appareils → votre téléphone → entité de notification.`,"notifications.target_unnamed":`Appareil sans nom`,"notifications.target_person":`Personne`,"notifications.target_when_always":`Toujours`,"notifications.target_when_home":`Seulement lorsqu'à la maison`,"notifications.cooldown":`Temps de pause entre les notifications (minutes)`,"notifications.cooldown_hint":`Temps minimum entre des alertes répétées par pièce`,"notifications.mold_prevention_notify":`Notifier lorsque la prévention de moisissure s'active`,"notifications.mold_prevention_notify_hint":`Envoyer également une notification lorsque la prévention s'active (température augmentée)`,"room.section.heat_source":`Orchestration de la source de chaleur`,"heat_source.toggle":`Sélection intelligente de la source`,"heat_source.toggle_hint":`Lorsque cette pièce possède à la fois des thermostats de radiateur et une climatisation/pompe à chaleur, RoomMind oriente intelligemment la demande de chauffage vers l'appareil le plus efficace en fonction de l'écart de température et des conditions extérieures.`,"heat_source.primary_delta":`Seuil d'activation de la chaudière`,"heat_source.primary_delta_hint":`Activez la source principale uniquement lorsque l'écart de température dépasse cette valeur. En dessous de ce seuil, seule la source secondaire rapide est utilisée.`,"heat_source.primary_delta_suffix":`°C`,"heat_source.outdoor_threshold":`Seuil de préférence extérieur`,"heat_source.outdoor_threshold_hint":`Au-dessus de cette température extérieure, privilégier la climatisation/pompe à chaleur (efficacité supérieure). En dessous, privilégier la chaudière à gaz/radiateur.`,"heat_source.outdoor_threshold_suffix":`°C`,"heat_source.ac_min_outdoor":`Température extérieure min. pour la climatisation`,"heat_source.ac_min_outdoor_hint":`Désactiver complètement la climatisation en dessous de cette température pour protéger le matériel de la pompe à chaleur.`,"heat_source.ac_min_outdoor_suffix":`°C`,"heat_source.summary_disabled":`La sélection intelligente de la source est désactivée`}};function C(e,t,n){let r=(_t[t]??_t[t.split(`-`)[0]]??_t.en)[e]??_t.en[e]??e;if(n)for(let[e,t]of Object.entries(n))r=r.replaceAll(`{${e}}`,String(t));return r}function vt(e,t){if(e.area_id)return e.area_id;if(e.device_id&&t){let n=t[e.device_id];if(n?.area_id)return n.area_id}return null}function yt(e,t,n){return t?Object.values(t).filter(t=>vt(t,n)===e):[]}function bt(e){switch(e){case`heating`:return`mode-heating`;case`cooling`:return`mode-cooling`;case`idle`:return`mode-idle`;default:return`mode-other`}}var xt={heating:`mode.heating`,cooling:`mode.cooling`,idle:`mode.idle`};function St(e,t){return C(xt[e],t)}var Ct=l`
  .mode-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 14px;
    border-radius: 16px;
  }

  .mode-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .mode-heating {
    color: var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.12);
  }
  .mode-heating .mode-dot {
    background: var(--warning-color, #ff9800);
  }

  .mode-cooling {
    color: #2196f3;
    background: rgba(33, 150, 243, 0.12);
  }
  .mode-cooling .mode-dot {
    background: #2196f3;
  }

  .mode-idle {
    color: var(--secondary-text-color, #757575);
    background: rgba(0, 0, 0, 0.05);
  }
  .mode-idle .mode-dot {
    background: var(--disabled-text-color, #bdbdbd);
  }

  .mode-other {
    color: var(--secondary-text-color);
    background: rgba(0, 0, 0, 0.05);
  }
  .mode-other .mode-dot {
    background: var(--secondary-text-color);
  }
`,wt=`M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z`;function Tt(e){return e.config?.unit_system?.temperature===`°F`}function w(e){return Tt(e)?`°F`:`°C`}function T(e,t){return Tt(t)?e*9/5+32:e}function E(e,t){return Tt(t)?(e-32)*5/9:e}function D(e,t){return Tt(t)?e*9/5:e}function O(e,t,n=1){return T(e,t).toFixed(n)}function k(e){return Tt(e)?`1`:`0.5`}function A(e,t,n){return{min:String(Math.round(T(e,n))),max:String(Math.round(T(t,n)))}}function Et(e,t){let n=Number(e);if(!Number.isFinite(n))return!1;let r=E(n,t);return r>=5&&r<=35}function j(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var M=t((()=>{}));v(),M();var N=class extends _{constructor(...e){super(...e),this.config=null,this.climateEntityCount=0,this.tempSensorCount=0,this.controlMode=`bangbang`,this.climateControlActive=!0,this.reordering=!1,this.canMoveUp=!1,this.canMoveDown=!1}static{this.styles=[Ct,l`
      :host {
        display: block;
      }

      ha-card {
        cursor: pointer;
        transition:
          box-shadow 0.2s ease,
          transform 0.15s ease;
        overflow: hidden;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }

      ha-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
      }

      .hide-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        opacity: 0;
        transition: opacity 0.2s ease;
        position: absolute;
        top: 8px;
        right: 8px;
      }

      ha-card:hover .hide-btn {
        opacity: 0.4;
      }

      .hide-btn:hover {
        opacity: 1 !important;
      }

      /* Colored left accent based on mode */
      .accent {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
      }

      .accent-heating {
        background: var(--warning-color, #ff9800);
      }

      .accent-cooling {
        background: #2196f3;
      }

      .accent-idle {
        background: var(--disabled-text-color, #bdbdbd);
      }

      .accent-unconfigured {
        background: transparent;
      }

      .card-inner {
        padding: 20px 20px 16px;
      }

      /* Header row: name + badge */
      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .area-name {
        font-size: 15px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin: 0;
        letter-spacing: 0.01em;
      }

      /* Card-specific mode-pill overrides (smaller than default) */
      .mode-pill {
        gap: 5px;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 12px;
      }

      .mode-dot {
        width: 7px;
        height: 7px;
      }

      /* Temperature display */
      .temp-section {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin: 12px 0 0 0;
      }

      .current-temp {
        font-size: 36px;
        font-weight: 300;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .temp-unit {
        font-size: 18px;
        font-weight: 300;
        color: var(--secondary-text-color);
      }

      .target-info {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-left: auto;
      }

      .target-value {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .override-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--warning-color, #ff9800);
      }

      .window-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--warning-color, #ff9800);
      }

      .away-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--info-color, #2196f3);
      }

      /* Footer row: humidity + MPC status */
      .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
        min-height: 20px;
      }

      .humidity-info {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .mpc-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
      }

      .mpc-badge.active {
        color: var(--success-color, #4caf50);
        background: rgba(76, 175, 80, 0.12);
      }

      .mpc-badge.learning {
        color: var(--secondary-text-color);
        background: rgba(158, 158, 158, 0.1);
      }

      .mold-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
      }

      .mold-badge.warning {
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.12);
      }

      .mold-badge.critical {
        color: var(--error-color, #db4437);
        background: rgba(219, 68, 55, 0.12);
      }

      .mold-badge.prevention {
        color: var(--info-color, #2196f3);
        background: rgba(33, 150, 243, 0.12);
      }

      .outdoor-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
        color: var(--success-color, #4caf50);
        background: rgba(76, 175, 80, 0.12);
      }

      .badge-row {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .no-temp {
        font-size: 24px;
        font-weight: 300;
        color: var(--secondary-text-color);
        line-height: 1;
      }

      .uncontrolled-hint {
        font-size: 11px;
        color: var(--disabled-text-color, #9e9e9e);
        margin-top: 6px;
      }

      .reorder-overlay {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        pointer-events: none;
        border-radius: inherit;
        overflow: hidden;
      }

      .reorder-half {
        pointer-events: auto;
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s ease;
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
      }

      .reorder-half.left {
        border-radius: inherit;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08);
      }

      .reorder-half.right {
        border-radius: inherit;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08);
        margin-left: auto;
      }

      .reorder-half:hover {
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.1);
      }

      .reorder-half ha-icon-button {
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .reorder-half:hover ha-icon-button {
        color: var(--primary-text-color);
      }

      .reorder-half.disabled {
        opacity: 0.25;
        cursor: default;
      }

      .reorder-half.disabled:hover {
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
      }

      /* Device summary for unconfigured cards */
      .device-summary {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .device-summary.empty {
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
      }

      /* Configure prompt for unconfigured areas */
      .configure-prompt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .configure-text {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .configure-arrow {
        font-size: 18px;
        color: var(--primary-color);
      }

      /* Waiting state */
      .waiting {
        font-size: 13px;
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
        margin-top: 8px;
      }
    `]}render(){let e=this.climateEntityCount>0,t=(this.config?.devices?.length??0)>0||(this.config?.thermostats?.length??0)>0||(this.config?.acs?.length??0)>0,n=this.config?.is_outdoor??!1,r=this.config!==null&&t&&!n,i=this.config?.live,a=i?.mode,o=(!r||n)&&i&&(i.current_temp!==null||i.current_humidity!==null),s=r?a===`heating`?`accent-heating`:a===`cooling`?`accent-cooling`:`accent-idle`:o?`accent-idle`:`accent-unconfigured`;return h`
      <ha-card @click=${this._onCardClick}>
        <div class="accent ${s}"></div>
        ${this.reordering?g:h`<ha-icon-button
                class="hide-btn"
                .path=${wt}
                @click=${this._onHideClick}
              ></ha-icon-button>`}
        ${this.reordering?h`<div class="reorder-overlay">
                <div
                  class="reorder-half left ${this.canMoveUp?``:`disabled`}"
                  @click=${this._onMoveUp}
                >
                  <ha-icon-button
                    .path=${`M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z`}
                  ></ha-icon-button>
                </div>
                <div
                  class="reorder-half right ${this.canMoveDown?``:`disabled`}"
                  @click=${this._onMoveDown}
                >
                  <ha-icon-button
                    .path=${`M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z`}
                  ></ha-icon-button>
                </div>
              </div>`:g}
        <div class="card-inner">
          <div class="card-header">
            <h3 class="area-name">${this.config?.display_name||this.area.name}</h3>
            ${r&&i?h`
                    <span class="mode-pill ${bt(i.mode)}">
                      <span class="mode-dot"></span>
                      ${St(i.mode,this.hass.language)}${i.heating_power>0&&i.heating_power<100?h` ${i.heating_power}%`:g}
                    </span>
                  `:g}
          </div>

          ${r?this._renderConfigured():this.config?.live&&(this.config.live.current_temp!==null||this.config.live.current_humidity!==null)?this._renderSensorOnly():this._renderUnconfigured(e)}
        </div>
      </ha-card>
    `}_renderConfigured(){let e=this.config?.live;if(!e)return h`<div class="waiting">${C(`card.waiting`,this.hass.language)}</div>`;let t=this.controlMode===`mpc`;return h`
      <div class="temp-section">
        ${e.current_temp===null?h`<span class="no-temp">--</span>`:h`
                <span class="current-temp">${O(e.current_temp,this.hass)}</span>
                <span class="temp-unit">${w(this.hass)}</span>
              `}
        ${this._renderTargetInfo(e)}
      </div>
      <div class="card-footer">
        <span class="humidity-info">
          ${e.current_humidity===null?g:C(`card.humidity`,this.hass.language,{value:e.current_humidity.toFixed(0)})}
        </span>
        <span class="badge-row">
          ${e.mold_risk_level&&e.mold_risk_level!==`ok`?h`<span class="mold-badge ${e.mold_risk_level}">
                  <ha-icon icon="mdi:water-alert"></ha-icon>
                  ${e.mold_risk_level===`critical`?C(`card.mold_critical`,this.hass.language):C(`card.mold_warning`,this.hass.language)}
                </span>`:g}
          ${e.mold_prevention_active?h`<span class="mold-badge prevention">
                  <ha-icon icon="mdi:shield-check"></ha-icon>
                  ${C(`card.mold_prevention`,this.hass.language,{delta:D(e.mold_prevention_delta,this.hass).toFixed(0),unit:w(this.hass)})}
                </span>`:g}
          ${t?h`<span class="mpc-badge ${e.mpc_active?`active`:`learning`}">
                  <ha-icon .icon=${e.mpc_active?`mdi:brain`:`mdi:school-outline`}></ha-icon>
                  ${e.mpc_active?C(`card.mpc_active`,this.hass.language):C(`card.mpc_learning`,this.hass.language)}
                </span>`:g}
        </span>
      </div>
      ${!this.climateControlActive||this.config?.climate_control_enabled===!1?h`<div class="uncontrolled-hint">
              ${C(`card.not_controlled`,this.hass.language)}
            </div>`:g}
    `}_renderTargetInfo(e){if(e.target_temp===null&&e.heat_target===null)return g;let t=(this.config?.climate_mode??`auto`)===`auto`&&e.heat_target!=null&&e.cool_target!=null&&e.heat_target!==e.cool_target?h`<span class="target-value"
          >${O(e.heat_target,this.hass)} –
          ${O(e.cool_target,this.hass)}${w(this.hass)}</span
        >`:h`<span class="target-value"
          >${O(e.target_temp??e.heat_target,this.hass)}${w(this.hass)}</span
        >`;return h`
      <span class="target-info">
        ${C(`card.target`,this.hass.language)} ${t}
        ${e.override_active?h`<ha-icon class="override-icon" icon="mdi:timer-outline"></ha-icon>`:g}
        ${e.window_open?h`<ha-icon class="window-icon" icon="mdi:window-open-variant"></ha-icon>`:g}
        ${e.presence_away?h`<ha-icon class="away-icon" icon="mdi:home-off-outline"></ha-icon>`:g}
      </span>
    `}_renderSensorOnly(){let e=this.config.live,t=this.config?.is_outdoor??!1;return h`
      <div class="temp-section">
        ${e.current_temp===null?h`<span class="no-temp">--</span>`:h`
                <span class="current-temp">${O(e.current_temp,this.hass)}</span>
                <span class="temp-unit">${w(this.hass)}</span>
              `}
      </div>
      <div class="card-footer">
        <span class="humidity-info">
          ${e.current_humidity===null?g:C(`card.humidity`,this.hass.language,{value:e.current_humidity.toFixed(0)})}
        </span>
        <span class="badge-row">
          ${t?h`<span class="outdoor-badge">
                  <ha-icon icon="mdi:tree"></ha-icon>
                  ${C(`card.outdoor`,this.hass.language)}
                </span>`:g}
          ${e.mold_risk_level&&e.mold_risk_level!==`ok`?h`<span class="mold-badge ${e.mold_risk_level}">
                  <ha-icon icon="mdi:water-alert"></ha-icon>
                  ${e.mold_risk_level===`critical`?C(`card.mold_critical`,this.hass.language):C(`card.mold_warning`,this.hass.language)}
                </span>`:g}
        </span>
      </div>
    `}_renderUnconfigured(e){let t=this.hass.language;if(!e)return h`<div class="device-summary empty">${C(`card.no_climate`,t)}</div>`;let n=this.climateEntityCount,r=this.tempSensorCount;return h`
      <div class="device-summary">
        ${n}
        ${C(n===1?`card.climate_device`:`card.climate_devices`,t)}${r>0?` \u00B7 ${r} ${C(r===1?`card.temp_sensor`:`card.temp_sensors`,t)}`:``}
      </div>
      <div class="configure-prompt">
        <span class="configure-text">${C(`card.tap_configure`,t)}</span>
        <span class="configure-arrow">›</span>
      </div>
    `}_onCardClick(){this.dispatchEvent(new CustomEvent(`area-selected`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onMoveUp(e){e.stopPropagation(),this.canMoveUp&&this.dispatchEvent(new CustomEvent(`move-room-up`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onMoveDown(e){e.stopPropagation(),this.canMoveDown&&this.dispatchEvent(new CustomEvent(`move-room-down`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onHideClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`hide-room`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],N.prototype,`area`,void 0),j([b({attribute:!1})],N.prototype,`config`,void 0),j([b({type:Number})],N.prototype,`climateEntityCount`,void 0),j([b({type:Number})],N.prototype,`tempSensorCount`,void 0),j([b({attribute:!1})],N.prototype,`hass`,void 0),j([b({type:String})],N.prototype,`controlMode`,void 0),j([b({type:Boolean})],N.prototype,`climateControlActive`,void 0),j([b({type:Boolean})],N.prototype,`reordering`,void 0),j([b({type:Boolean})],N.prototype,`canMoveUp`,void 0),j([b({type:Boolean})],N.prototype,`canMoveDown`,void 0),N=j([y(`rme-area-card`)],N);var Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=e=>(...t)=>({_$litDirective$:e,values:t}),kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};Qe();var At=class extends kt{constructor(e){if(super(e),this.it=g,e.type!==Dt.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===Re)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};At.directiveName=`unsafeHTML`,At.resultType=1;var P=Ot(At);v(),S(),M();var jt=class extends _{constructor(...e){super(...e),this.text=``,this.icon=`mdi:information-outline`,this._open=!1,this._style=`visibility: hidden;`,this._onDocPointer=e=>{e.composedPath().includes(this)||this._close()},this._onKey=e=>{e.key===`Escape`&&(e.stopPropagation(),this._close())},this._onScroll=()=>this._close()}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}static{this.styles=l`
    :host {
      display: inline-flex;
      position: relative;
      vertical-align: middle;
      line-height: 0;
    }

    button {
      background: none;
      border: none;
      padding: 2px;
      margin: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      opacity: 0.65;
      transition:
        opacity 0.15s,
        color 0.15s,
        background 0.15s;
      border-radius: 50%;
      line-height: 0;
    }

    button:hover,
    button:focus-visible {
      opacity: 1;
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.1);
      outline: none;
    }

    button.open {
      opacity: 1;
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.12);
    }

    ha-icon {
      --mdc-icon-size: 16px;
    }

    .tooltip {
      position: fixed;
      z-index: 1100;
      max-width: 280px;
      min-width: 180px;
      width: max-content;
      padding: 10px 12px;
      background: var(--card-background-color, #1f1f1f);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 8px;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: normal;
      text-transform: none;
      color: var(--primary-text-color);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      white-space: normal;
      pointer-events: auto;
      animation: tooltip-fade 0.15s ease-out;
    }

    @keyframes tooltip-fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}render(){return h`
      <button
        type="button"
        class=${this._open?`open`:``}
        @click=${this._toggle}
        aria-label="Info"
        aria-expanded=${this._open?`true`:`false`}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
      ${this._open?h`<div
              class="tooltip"
              role="tooltip"
              style=${this._style}
              @click=${e=>e.stopPropagation()}
            >
              ${this.text?this.text:g}<slot></slot>
            </div>`:g}
    `}_toggle(e){e.stopPropagation(),this._open?this._close():this._openTooltip()}_openTooltip(){this._open=!0,this._style=`visibility: hidden;`,requestAnimationFrame(()=>{this._positionTooltip()}),setTimeout(()=>{document.addEventListener(`pointerdown`,this._onDocPointer,!0),document.addEventListener(`keydown`,this._onKey,!0),document.addEventListener(`scroll`,this._onScroll,!0),window.addEventListener(`resize`,this._onScroll,!0)},0)}_positionTooltip(){let e=this.renderRoot.querySelector(`.tooltip`),t=this.renderRoot.querySelector(`button`);if(!e||!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=window.innerWidth,a=window.innerHeight,o=a-n.bottom,s=n.top,c;c=o>=r.height+8?n.bottom+6:s>=r.height+8?n.top-r.height-6:Math.max(8,(a-r.height)/2);let l=n.left+n.width/2-r.width/2;l=Math.max(8,Math.min(l,i-r.width-8)),this._style=`top: ${c}px; left: ${l}px;`}_close(){this._open&&(this._open=!1,this._style=`visibility: hidden;`,this._removeListeners())}_removeListeners(){document.removeEventListener(`pointerdown`,this._onDocPointer,!0),document.removeEventListener(`keydown`,this._onKey,!0),document.removeEventListener(`scroll`,this._onScroll,!0),window.removeEventListener(`resize`,this._onScroll,!0)}};j([b({type:String})],jt.prototype,`text`,void 0),j([b({type:String})],jt.prototype,`icon`,void 0),j([x()],jt.prototype,`_open`,void 0),j([x()],jt.prototype,`_style`,void 0),jt=j([y(`rme-info-icon`)],jt),v(),S(),M();var Mt=`M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z`,Nt=`M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`,F=class extends _{constructor(...e){super(...e),this.config=null,this.climateControlActive=!0,this.isOutdoor=!1,this.overrideInfo=null,this._countdown=``,this._editingName=!1,this._nameInput=``,this._controlModeInfoExpanded=!1}static{this.styles=[Ct,l`
      :host {
        display: block;
      }

      ha-card {
        padding: 28px 24px;
        position: relative;
        overflow: hidden;
      }

      .hero-accent {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
      }

      .hero-accent-heating {
        background: linear-gradient(90deg, var(--warning-color, #ff9800), #ffb74d);
      }

      .hero-accent-cooling {
        background: linear-gradient(90deg, #2196f3, #64b5f6);
      }

      .hero-accent-idle {
        background: linear-gradient(90deg, var(--disabled-text-color, #bdbdbd), #e0e0e0);
      }

      .hero-accent-none {
        background: var(--divider-color, #e0e0e0);
      }

      .hero-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }

      .area-name {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
        margin: 0;
      }

      .hero-temps {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .hero-current {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .hero-unit {
        font-size: 24px;
        font-weight: 300;
        color: var(--secondary-text-color);
      }

      .hero-target {
        margin-left: auto;
        text-align: right;
      }

      .hero-target-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .hero-target-value {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
      }

      /* Override-aware target styling */
      .hero-target-label.override-boost {
        color: var(--warning-color, #ff9800);
      }

      .hero-target-label.override-eco {
        color: #4caf50;
      }

      .hero-target-label.override-custom {
        color: #2196f3;
      }

      .hero-target-label ha-icon {
        --mdc-icon-size: 12px;
        vertical-align: middle;
      }

      .hero-target-countdown {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .hero-metric {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 6px;
      }

      .hero-metric ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      .hero-metric.warning {
        color: var(--warning-color, #ff9800);
      }

      .hero-metric.critical {
        color: var(--error-color, #db4437);
      }

      .hero-metric.info {
        color: var(--info-color, #2196f3);
      }

      .hero-no-data {
        font-size: 14px;
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
        padding: 8px 0;
      }

      .hero-window-open {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        margin-bottom: 12px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
      }

      .hero-window-open ha-icon {
        --mdc-icon-size: 18px;
      }

      .name-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .name-edit-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        opacity: 0;
        transition: opacity 0.15s;
      }

      .name-row:hover .name-edit-btn {
        opacity: 1;
      }

      @media (hover: none) {
        .name-edit-btn {
          opacity: 0.5;
        }
      }

      .name-edit-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .name-input {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
        background: transparent;
        border: none;
        border-bottom: 2px solid var(--primary-color);
        outline: none;
        padding: 0 0 2px;
        width: 100%;
        font-family: inherit;
      }

      .name-done-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--primary-color);
      }

      .name-clear-btn {
        background: none;
        border: none;
        color: var(--secondary-text-color);
        font-size: 12px;
        cursor: pointer;
        padding: 2px 0;
        text-decoration: underline;
      }

      .hero-status-pills {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        flex-shrink: 0;
      }
      .control-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .control-mode-info-icon {
        --mdc-icon-size: 14px;
        opacity: 0.4;
      }
      .control-mode-badge:hover .control-mode-info-icon,
      .control-mode-info-icon.active {
        opacity: 0.8;
      }
      .control-mode-info-panel {
        padding: 8px 12px;
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color);
        background: var(--secondary-background-color);
        border-radius: 8px;
      }

      .learning-paused rme-info-icon {
        margin-left: 2px;
      }

      .uncontrolled-hint {
        font-size: 12px;
        color: var(--disabled-text-color, #9e9e9e);
        margin-top: 8px;
      }
    `]}disconnectedCallback(){super.disconnectedCallback(),this._clearCountdownTimer()}updated(e){(e.has(`overrideInfo`)||e.has(`config`))&&this._updateCountdown()}_clearCountdownTimer(){this._countdownTimer&&=(clearInterval(this._countdownTimer),void 0)}_getOverrideUntil(){return this.overrideInfo?.active?this.overrideInfo.until:null}_updateCountdown(){if(this._clearCountdownTimer(),!this._getOverrideUntil()){let e=this._getEffectiveOverride();this._countdown=e?C(`hero.permanent`,this.hass?.language??`en`):``;return}let e=()=>{let e=this._getOverrideUntil();if(!e){this._countdown=``,this._clearCountdownTimer();return}let t=e-Date.now()/1e3;if(t<=0){this._countdown=``,this._clearCountdownTimer();return}let n=Math.floor(t/3600),r=Math.floor(t%3600/60);this._countdown=n>0?`${n}h ${r}m`:`${r}m`};e(),this._countdownTimer=setInterval(e,3e4)}_getEffectiveOverride(){return this.overrideInfo?.active?this.overrideInfo:null}_coilDryMinutesLeft(e){return e==null?1:Math.max(1,Math.ceil((e*1e3-Date.now())/6e4))}_renderTargetSection(e){let t=e.target_temp,n=this.hass?.language??`en`,r=this._getEffectiveOverride();if(r){let e=r.type===`boost`?`mdi:fire`:r.type===`eco`?`mdi:leaf`:`mdi:thermometer`,i=r.type===`boost`?C(`override.comfort`,n):r.type===`eco`?C(`override.eco`,n):C(`override.custom`,n),a=`override-${r.type}`,o=r.heat,s=r.cool,c=o!=null&&s!=null&&o!==s,l=o??s??t;return h`
        <div class="hero-target">
          <div class="hero-target-label ${a}">
            <ha-icon icon=${e}></ha-icon>
            ${i} ${C(`hero.override`,n)}
          </div>
          <div class="hero-target-value">
            ${c?h`${O(o,this.hass)} –
                  ${O(s,this.hass)}${w(this.hass)}`:l===null?`--`:h`${O(l,this.hass)}${w(this.hass)}`}
          </div>
          ${this._countdown?h`<div class="hero-target-countdown">
                  ${C(`hero.remaining`,n,{time:this._countdown})}
                </div>`:g}
        </div>
      `}if(t!==null||e.heat_target!=null&&e.cool_target!=null){let r=(this.config?.climate_mode??`auto`)===`auto`&&e.heat_target!=null&&e.cool_target!=null&&e.heat_target!==e.cool_target?h`${O(e.heat_target,this.hass)} –
          ${O(e.cool_target,this.hass)}${w(this.hass)}`:h`${O(t??e.heat_target,this.hass)}${w(this.hass)}`;return h`
        <div class="hero-target">
          <div class="hero-target-label">${C(`hero.target`,n)}</div>
          <div class="hero-target-value">${r}</div>
        </div>
      `}return g}_toggleControlModeInfo(){this._controlModeInfoExpanded=!this._controlModeInfoExpanded}_onEditName(){this._nameInput=this.config?.display_name||``,this._editingName=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`.name-input`);e?.focus(),e?.select()})}_onNameInput(e){this._nameInput=e.target.value}_onNameKeydown(e){e.key===`Enter`?this._onNameDone():e.key===`Escape`&&(this._editingName=!1)}_onNameDone(){let e=this._nameInput.trim();this.dispatchEvent(new CustomEvent(`display-name-changed`,{detail:{value:e},bubbles:!0,composed:!0})),this._editingName=!1}_onNameClear(){this.dispatchEvent(new CustomEvent(`display-name-changed`,{detail:{value:``},bubbles:!0,composed:!0})),this._editingName=!1,this._nameInput=``}render(){let e=this.config?.live,t=e?.mode;return h`
      <ha-card>
        <div class="hero-accent ${e?t===`heating`?`hero-accent-heating`:t===`cooling`?`hero-accent-cooling`:`hero-accent-idle`:`hero-accent-none`}"></div>
        <div class="hero-header">
          ${this._editingName?h`
                  <div class="name-edit-row">
                    <input
                      class="name-input"
                      type="text"
                      .value=${this._nameInput}
                      placeholder=${C(`room.alias.placeholder`,this.hass?.language??`en`)}
                      @input=${this._onNameInput}
                      @keydown=${this._onNameKeydown}
                    />
                    <ha-icon-button
                      class="name-done-btn"
                      .path=${Nt}
                      @click=${this._onNameDone}
                    ></ha-icon-button>
                  </div>
                  ${this.config?.display_name?h`<button class="name-clear-btn" @click=${this._onNameClear}>
                          ${C(`room.alias.clear`,this.hass?.language??`en`)}
                        </button>`:g}
                `:h`
                  <div class="name-row">
                    <h2 class="area-name">${this.config?.display_name||this.area.name}</h2>
                    <ha-icon-button
                      class="name-edit-btn"
                      .path=${Mt}
                      @click=${this._onEditName}
                    ></ha-icon-button>
                  </div>
                `}
          ${this.isOutdoor?g:h`
                  <div class="hero-status-pills">
                    ${e?h`
                            <span class="mode-pill ${bt(e.mode)}">
                              <span class="mode-dot"></span>
                              ${St(e.mode,this.hass?.language??`en`)}${e.heating_power>0&&e.heating_power<100?h` ${e.heating_power}%`:g}
                            </span>
                          `:g}
                    ${this.config?h`
                            <span class="control-mode-badge" @click=${this._toggleControlModeInfo}>
                              ${this.config.temperature_sensor?C(`room.control_mode.full_control`,this.hass?.language??`en`):C(`room.control_mode.managed`,this.hass?.language??`en`)}
                              <ha-icon
                                class="control-mode-info-icon ${this._controlModeInfoExpanded?`active`:``}"
                                icon="mdi:information-outline"
                              ></ha-icon>
                            </span>
                          `:g}
                  </div>
                `}
        </div>
        ${this._controlModeInfoExpanded&&this.config&&!this.isOutdoor?h`
                <div class="control-mode-info-panel">
                  ${this.config.temperature_sensor?C(`room.control_mode.full_control_info`,this.hass?.language??`en`):C(`room.control_mode.managed_info`,this.hass?.language??`en`)}
                </div>
              `:g}
        ${e?h`
                ${e.window_open&&!this.isOutdoor?h`<div class="hero-window-open">
                        <ha-icon icon="mdi:window-open-variant"></ha-icon>
                        ${C(`hero.window_open`,this.hass?.language??`en`)}
                      </div>`:g}
                <div class="hero-temps">
                  ${e.current_temp===null?h`<span class="hero-current" style="opacity: 0.3">--</span>`:h`
                          <span class="hero-current"
                            >${O(e.current_temp,this.hass)}</span
                          >
                          <span class="hero-unit">${w(this.hass)}</span>
                        `}
                  ${this.isOutdoor?g:this._renderTargetSection(e)}
                </div>
                ${e.current_humidity===null?g:h`<div class="hero-metric">
                        <ha-icon icon="mdi:water-percent"></ha-icon>
                        ${C(`hero.humidity`,this.hass?.language??`en`,{value:e.current_humidity.toFixed(0)})}
                      </div>`}
                ${e.device_setpoint!=null&&!this.isOutdoor?h`<div class="hero-metric">
                        <ha-icon
                          icon=${e.mode===`cooling`?`mdi:snowflake`:`mdi:radiator`}
                        ></ha-icon>
                        ${C(`hero.device_setpoint`,this.hass?.language??`en`,{value:O(e.device_setpoint,this.hass),unit:w(this.hass)})}
                      </div>`:g}
                ${e.active_heat_sources&&e.active_heat_sources!==`none`&&!this.isOutdoor?h`<div class="hero-metric">
                        <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                        ${e.active_heat_sources===`primary`?C(`hero.heat_source_primary`,this.hass?.language??`en`):e.active_heat_sources===`secondary`?C(`hero.heat_source_secondary`,this.hass?.language??`en`):C(`hero.heat_source_both`,this.hass?.language??`en`)}
                      </div>`:g}
                ${e.compressor_protection_active&&!this.isOutdoor?h`<div class="hero-metric info">
                        <ha-icon icon="mdi:timer-sand"></ha-icon>
                        ${e.compressor_protection_reason===`min_run`?C(`hero.compressor_protection_min_run`,this.hass?.language??`en`):C(`hero.compressor_protection_min_off`,this.hass?.language??`en`)}
                        <rme-info-icon
                          icon="mdi:information-outline"
                          .text=${C(`hero.compressor_protection_info`,this.hass?.language??`en`)}
                        ></rme-info-icon>
                      </div>`:g}
                ${e.coil_dry_active&&!this.isOutdoor?h`<div class="hero-metric info">
                        <ha-icon icon="mdi:air-filter"></ha-icon>
                        ${C(e.coil_dry_phase===`drain`?`hero.coil_dry_drain`:`hero.coil_dry`,this.hass?.language??`en`,{minutes:this._coilDryMinutesLeft(e.coil_dry_until)})}
                        <rme-info-icon
                          icon="mdi:information-outline"
                          .text=${C(`hero.coil_dry_info`,this.hass?.language??`en`)}
                        ></rme-info-icon>
                      </div>`:g}
                ${e.mold_surface_rh!=null&&!this.isOutdoor?h`<div
                        class="hero-metric ${e.mold_risk_level===`critical`?`critical`:e.mold_risk_level===`warning`?`warning`:``}"
                      >
                        <ha-icon icon="mdi:water-alert"></ha-icon>
                        ${C(`room.mold_surface_rh`,this.hass?.language??`en`,{value:String(e.mold_surface_rh.toFixed(0))})}
                      </div>`:g}
                ${e.mold_prevention_active&&!this.isOutdoor?h`<div class="hero-metric info">
                        <ha-icon icon="mdi:shield-check"></ha-icon>
                        ${C(`card.mold_prevention`,this.hass?.language??`en`,{delta:D(e.mold_prevention_delta,this.hass).toFixed(0),unit:w(this.hass)})}
                      </div>`:g}
                ${e.learning_paused_reason===`outdoor_unavailable`&&!this.isOutdoor?h`<div class="hero-metric warning learning-paused">
                        <ha-icon icon="mdi:school-outline"></ha-icon>
                        ${C(`hero.mpc_learning_paused`,this.hass?.language??`en`)}
                        <rme-info-icon
                          icon="mdi:information-outline"
                          .text=${C(`hero.mpc_learning_paused.outdoor_unavailable`,this.hass?.language??`en`)}
                        ></rme-info-icon>
                      </div>`:g}
                ${!this.climateControlActive&&!this.isOutdoor?h`<div class="uncontrolled-hint">
                        ${C(`card.not_controlled`,this.hass?.language??`en`)}
                      </div>`:g}
              `:this.config?h`<div class="hero-no-data">
                  ${C(`hero.waiting`,this.hass?.language??`en`)}
                </div>`:h`<div class="hero-no-data">
                  ${C(`hero.not_configured`,this.hass?.language??`en`)}
                </div>`}
      </ha-card>
    `}};j([b({attribute:!1})],F.prototype,`hass`,void 0),j([b({attribute:!1})],F.prototype,`area`,void 0),j([b({attribute:!1})],F.prototype,`config`,void 0),j([b({type:Boolean})],F.prototype,`climateControlActive`,void 0),j([b({type:Boolean})],F.prototype,`isOutdoor`,void 0),j([b({attribute:!1})],F.prototype,`overrideInfo`,void 0),j([x()],F.prototype,`_countdown`,void 0),j([x()],F.prototype,`_editingName`,void 0),j([x()],F.prototype,`_nameInput`,void 0),j([x()],F.prototype,`_controlModeInfoExpanded`,void 0),F=j([y(`rme-hero-status`)],F),v(),S(),M();var Pt=class extends _{constructor(...e){super(...e),this.climateMode=`auto`,this.language=`en`}static{this.styles=l`
    :host {
      display: block;
    }

    .mode-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .mode-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 14px 8px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      cursor: pointer;
      transition:
        border-color 0.2s,
        background 0.2s,
        box-shadow 0.2s;
      background: transparent;
      font-family: inherit;
      color: var(--primary-text-color);
      text-align: center;
    }

    .mode-card:hover {
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 2px 8px rgba(3, 169, 244, 0.1);
    }

    .mode-card[active] {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.06);
      box-shadow: 0 2px 8px rgba(3, 169, 244, 0.12);
    }

    .mode-card-icon {
      --mdc-icon-size: 24px;
    }

    .mode-card[active] .mode-card-icon {
      color: var(--primary-color, #03a9f4);
    }

    .mode-card-label {
      font-weight: 500;
      font-size: 13px;
    }

    .mode-card[active] .mode-card-label {
      color: var(--primary-color, #03a9f4);
    }
  `}render(){let e=this.language;return h`
      <div class="mode-grid">
        ${[{value:`auto`,labelKey:`mode.auto`,icon:`mdi:autorenew`},{value:`heat_only`,labelKey:`mode.heat_only`,icon:`mdi:fire`},{value:`cool_only`,labelKey:`mode.cool_only`,icon:`mdi:snowflake`}].map(t=>h`
            <button
              class="mode-card"
              ?active=${this.climateMode===t.value}
              @click=${()=>this._onModeClick(t.value)}
            >
              <ha-icon class="mode-card-icon" icon=${t.icon}></ha-icon>
              <div class="mode-card-label">${C(t.labelKey,e)}</div>
            </button>
          `)}
      </div>
    `}_onModeClick(e){this.dispatchEvent(new CustomEvent(`mode-changed`,{detail:{mode:e},bubbles:!0,composed:!0}))}};j([b({type:String})],Pt.prototype,`climateMode`,void 0),j([b({type:String})],Pt.prototype,`language`,void 0),Pt=j([y(`rme-climate-mode-selector`)],Pt);function I(e){return e.detail?.value??e.target.value??``}function L(e,t){e.dispatchEvent(new CustomEvent(`save-status`,{detail:{status:t},bubbles:!0,composed:!0}))}function Ft(e,t){e.dispatchEvent(new CustomEvent(`hass-more-info`,{bubbles:!0,composed:!0,detail:{entityId:t}}))}v(),S(),M();var It=class e extends _{constructor(...e){super(...e),this.activeIndex=-1,this.selectorEntity=``,this.editing=!1}static{this.sharedStyles=l`
    :host {
      display: block;
    }

    .schedule-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .schedule-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 8px;
      transition:
        background 0.3s,
        opacity 0.3s;
    }

    .schedule-row.active {
      background: rgba(76, 175, 80, 0.1);
    }
    .schedule-row.inactive {
      background: rgba(0, 0, 0, 0.04);
    }
    .schedule-row.unreachable {
      background: rgba(0, 0, 0, 0.02);
      opacity: 0.4;
    }

    .schedule-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--divider-color, #e0e0e0);
      color: var(--primary-text-color);
      flex-shrink: 0;
    }
    .schedule-row.active .schedule-number {
      background: #4caf50;
      color: #fff;
    }

    .schedule-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .schedule-row.active .schedule-status-dot {
      background: #4caf50;
      box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }
    .schedule-row.inactive .schedule-status-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }
    .schedule-row.unreachable .schedule-status-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }

    .schedule-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .schedule-link {
      cursor: pointer;
    }
    .schedule-link:hover {
      text-decoration: underline;
    }
    .schedule-row.active .schedule-name {
      color: var(--primary-text-color);
    }
    .schedule-row.inactive .schedule-name {
      color: var(--secondary-text-color);
    }
    .schedule-row.unreachable .schedule-name {
      color: var(--secondary-text-color);
    }

    .schedule-status {
      font-size: 12px;
      white-space: nowrap;
    }
    .schedule-row.active .schedule-status {
      color: #2e7d32;
    }
    .schedule-row.inactive .schedule-status {
      color: var(--secondary-text-color);
    }
    .schedule-row.unreachable .schedule-status {
      color: var(--secondary-text-color);
    }

    .schedule-controls {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
    .schedule-controls ha-icon-button {
      --mdc-icon-button-size: 28px;
      --mdc-icon-size: 16px;
    }

    .add-schedule-row {
      margin-top: 4px;
    }
    .add-schedule-row ha-select {
      width: 100%;
    }

    .helper-link {
      display: inline-block;
      margin-top: 4px;
      font-size: 12px;
      color: var(--primary-color);
      text-decoration: none;
    }
    .helper-link:hover {
      text-decoration: underline;
    }

    .no-schedules {
      font-size: 13px;
      color: var(--secondary-text-color);
      padding: 12px 0;
      text-align: center;
    }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .selector-section {
      margin-top: 16px;
    }

    .selector-value {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 4px;
      padding-left: 4px;
    }

    /* .inline-warning is the same pill outside the selector context (#395). */
    .selector-warning,
    .inline-warning {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      padding: 10px 14px;
      border-radius: 8px;
      background: rgba(255, 152, 0, 0.08);
      color: var(--warning-color, #ff9800);
      font-size: 13px;
    }
    .selector-warning ha-icon,
    .inline-warning ha-icon {
      --mdc-icon-size: 18px;
      flex-shrink: 0;
    }

    .section-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin-bottom: 12px;
    }
  `}static{this.ICON_CLOSE=`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}static{this.ICON_UP=`M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z`}static{this.ICON_DOWN=`M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z`}_getScheduleState(e,t){if(t===0)return`inactive`;if(e===this.activeIndex)return`active`;if(!this.selectorEntity)return e===0?`active`:`unreachable`;let n=this.hass?.states?.[this.selectorEntity];if(!n)return`inactive`;if(this.selectorEntity.startsWith(`input_boolean.`))return e<=1?`inactive`:`unreachable`;if(this.selectorEntity.startsWith(`input_number.`)){let r=Number(n.attributes?.min??1),i=Number(n.attributes?.max??t);return e+1>=r&&e+1<=i?`inactive`:`unreachable`}return`inactive`}_getAvailableEntities(e){return this.hass?.states?Object.keys(this.hass.states).filter(t=>t.startsWith(`schedule.`)&&!e.has(t)):[]}_getFriendlyName(e){return this.hass?.states?.[e]?.attributes?.friendly_name||e}_renderAddRow(e,t,n,r){return h`
      <div class="add-schedule-row">
        <ha-select
          .value=${``}
          .label=${e}
          .options=${t.map(e=>({value:e,label:this._getFriendlyName(e)}))}
          @selected=${e=>{let t=I(e);t&&(n(t),requestAnimationFrame(()=>{e.target.value=``}))}}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
        >
          ${t.map(e=>h`
              <ha-list-item value=${e}>${this._getFriendlyName(e)}</ha-list-item>
            `)}
        </ha-select>
        <a href="/config/helpers" target="_top" class="helper-link"> ${r} </a>
      </div>
    `}_renderSelectorSection(e,t,n,r,i){if(e<2)return g;let a=this.selectorEntity?this.hass?.states?.[this.selectorEntity]:null;return h`
      <div class="selector-section">
        <label class="form-label">${t}</label>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.selectorEntity}
          .includeDomains=${[`input_boolean`,`input_number`]}
          allow-custom-entity
          @value-changed=${e=>{e.stopPropagation(),i(e.detail?.value??``)}}
        ></ha-entity-picker>
        ${this.selectorEntity&&a?h`
                <div class="selector-value">
                  ${this.selectorEntity.startsWith(`input_boolean.`)?C(`schedule.selector_value_boolean`,this.hass.language,{value:a.state===`on`?`On`:`Off`}):C(`schedule.selector_value_number`,this.hass.language,{value:a.state})}
                </div>
              `:g}
        <div class="section-hint" style="margin-top:4px">${n}</div>
        ${e>1&&!this.selectorEntity?h`
                <div class="selector-warning">
                  <ha-icon icon="mdi:alert-outline"></ha-icon>
                  ${r}
                </div>
              `:g}
      </div>
    `}_renderScheduleControls(t,n,r,i){let a=n>=2;return h`
      <span class="schedule-controls">
        ${a&&t>0?h`
                <ha-icon-button
                  .path=${e.ICON_UP}
                  @click=${()=>r(t,-1)}
                ></ha-icon-button>
              `:g}
        ${a&&t<n-1?h`
                <ha-icon-button
                  .path=${e.ICON_DOWN}
                  @click=${()=>r(t,1)}
                ></ha-icon-button>
              `:g}
        <ha-icon-button
          .path=${e.ICON_CLOSE}
          @click=${()=>i(t)}
        ></ha-icon-button>
      </span>
    `}_openEntityInfo(e){Ft(this,e)}};j([b({attribute:!1})],It.prototype,`hass`,void 0),j([b({type:Number})],It.prototype,`activeIndex`,void 0),j([b({type:String})],It.prototype,`selectorEntity`,void 0),j([b({type:Boolean})],It.prototype,`editing`,void 0),v();var R=l`
  ha-textfield,
  ha-select,
  ha-entity-picker,
  ha-combo-box {
    --mdc-shape-small: 8px;
    --mdc-shape-medium: 8px;
    --md-filled-text-field-container-shape: 8px;
    --md-outlined-text-field-container-shape: 8px;
    display: block;
    border-radius: 8px;
    overflow: hidden;
    isolation: isolate;
    /* clip-path is more reliable than overflow:hidden for shape clipping
       on the bottom corners of MDC filled inputs. */
    clip-path: inset(0 round 8px);
  }

  /* ha-entity-picker wraps an inner ha-combo-box that doesn't always
     reach the host's bottom edge. Use a tighter clip so the visible
     input's bottom matches the inner's top radius. */
  ha-entity-picker {
    clip-path: inset(0 round 8px 8px 4px 4px);
  }
`;v(),S(),M();var Lt=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],z=class extends It{constructor(...e){super(...e),this.schedules=[],this.comfortHeat=21,this.comfortCool=24,this.ecoHeat=17,this.ecoCool=27,this.climateMode=`auto`,this.scheduleTempWarnings=[]}set scheduleSelectorEntity(e){this.selectorEntity=e}get scheduleSelectorEntity(){return this.selectorEntity}set activeScheduleIndex(e){this.activeIndex=e}get activeScheduleIndex(){return this.activeIndex}static{this.styles=[It.sharedStyles,R,l`
      .fallback-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
        font-style: italic;
      }

      .temp-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
      }

      .temp-input-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      ha-textfield {
        flex: 1;
      }

      .view-temps {
        display: flex;
        gap: 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .view-temps span {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .view-selector-info {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .temp-grid-auto {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        gap: 8px 12px;
        align-items: center;
        margin-top: 16px;
      }
      .temp-grid-header {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.3px;
        text-align: center;
      }
      .temp-grid-row-label {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      @media (max-width: 600px) {
        .temp-grid-auto {
          grid-template-columns: 1fr 1fr;
        }
        .temp-grid-row-label {
          grid-column: 1 / -1;
          margin-top: 8px;
        }
        .temp-grid-header {
          display: none;
        }
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){let e=this.hass.language,t=this.schedules.length>=2;return h`
      ${this.schedules.length>0?h`
              <div class="schedule-list">
                ${this.schedules.map((e,n)=>{let r=this._getScheduleState(n,this.schedules.length);return h`
                    <div class="schedule-row ${r}">
                      ${t?h`<span class="schedule-number">${n+1}</span>`:g}
                      <span class="schedule-status-dot"></span>
                      <span
                        class="schedule-name schedule-link"
                        @click=${()=>this._openEntityInfo(e.entity_id)}
                        >${this._getFriendlyName(e.entity_id)}</span
                      >
                      <span class="schedule-status">${this._getStatusText(n,r)}</span>
                    </div>
                    ${this._renderRejectedTempWarning(r)}
                  `})}
              </div>
            `:h`<div class="no-schedules">${C(`schedule.no_schedules`,e)}</div>`}
      ${this.climateMode===`auto`?h`
              <div class="view-temps">
                ${C(`schedule.view_heat`,e,{comfort:O(this.comfortHeat,this.hass),eco:O(this.ecoHeat,this.hass),unit:w(this.hass)})}
                 · 
                ${C(`schedule.view_cool`,e,{comfort:O(this.comfortCool,this.hass),eco:O(this.ecoCool,this.hass),unit:w(this.hass)})}
              </div>
            `:h`
              <div class="view-temps">
                ${C(`schedule.view_comfort`,e,{temp:O(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass),unit:w(this.hass)})}
                 · 
                ${C(`schedule.view_eco`,e,{temp:O(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass),unit:w(this.hass)})}
              </div>
            `}
      ${this.scheduleSelectorEntity?h`<div class="view-selector-info">
              ${C(`schedule.view_selector_prefix`,e)}
              <span
                class="schedule-link"
                @click=${()=>this._openEntityInfo(this.scheduleSelectorEntity)}
                >${this._getFriendlyName(this.scheduleSelectorEntity)}</span
              >
            </div>`:g}
    `}_renderEditMode(){let e=this.hass.language,t=this.schedules.length,n=new Set(this.schedules.map(e=>e.entity_id));return h`
      ${this._renderScheduleList()}
      ${this._renderAddRow(C(`schedule.select_schedule`,e),this._getAvailableEntities(n),e=>this._addSchedule(e),C(`schedule.create_helper_hint`,e))}
      ${this._renderSelectorSection(t,C(`schedule.selector_label`,e),this.scheduleSelectorEntity?this._getSelectorValueText(e):``,C(`schedule.selector_warning`,e),e=>this._onSelectorEntityChange(e))}
      ${this._renderTemperatureInputs(e)}
    `}_renderScheduleList(){let e=this.hass.language,t=this.schedules.length;return t===0?h`<div class="no-schedules">${C(`schedule.no_schedules`,e)}</div>`:h`
      <div class="schedule-list">
        ${this.schedules.map((e,n)=>{let r=this._getScheduleState(n,t);return h`
            <div class="schedule-row ${r}">
              ${t>=2?h`<span class="schedule-number">${n+1}</span>`:g}
              <span class="schedule-status-dot"></span>
              <span class="schedule-name">${this._getFriendlyName(e.entity_id)}</span>
              <span class="schedule-status">${this._getStatusText(n,r)}</span>
              ${this._renderScheduleControls(n,t,(e,t)=>this._moveSchedule(e,t),e=>this._removeSchedule(e))}
            </div>
            ${this._renderRejectedTempWarning(r)}
          `})}
      </div>
    `}_renderRejectedTempWarning(e){if(e!==`active`)return g;let t=this.scheduleTempWarnings??[];if(t.length===0)return g;let n=A(5,35,this.hass);return h`
      <div class="inline-warning">
        <ha-icon icon="mdi:alert-outline"></ha-icon>
        ${C(`schedule.block_temp_rejected`,this.hass.language,{values:t.map(e=>this._formatWarning(e)).join(`, `),min:n.min,max:n.max,unit:w(this.hass)})}
      </div>
    `}_formatWarning(e){let t=Lt.indexOf(e.day),n=e.from.slice(0,5);if(t>=0){let e=new Date(Date.UTC(2024,0,1+t));n=`${new Intl.DateTimeFormat(this.hass.language,{weekday:`short`,timeZone:`UTC`}).format(e)} ${n}`}return`${e.value} (${n})`}_renderTemperatureInputs(e){return this.climateMode===`auto`?h`
        <div class="temp-grid-auto">
          <div class="temp-grid-header"></div>
          <div class="temp-grid-header">${C(`schedule.column_comfort`,e)}</div>
          <div class="temp-grid-header">${C(`schedule.column_eco`,e)}</div>
          <div class="temp-grid-row-label">
            <ha-icon icon="mdi:fire" style="--mdc-icon-size:16px"></ha-icon>
            ${C(`schedule.row_heat`,e)}
          </div>
          <ha-textfield
            type="number"
            .value=${String(T(this.comfortHeat,this.hass))}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onComfortHeatChange}
          ></ha-textfield>
          <ha-textfield
            type="number"
            .value=${String(T(this.ecoHeat,this.hass))}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onEcoHeatChange}
          ></ha-textfield>
          <div class="temp-grid-row-label">
            <ha-icon icon="mdi:snowflake" style="--mdc-icon-size:16px"></ha-icon>
            ${C(`schedule.row_cool`,e)}
          </div>
          <ha-textfield
            type="number"
            .value=${String(T(this.comfortCool,this.hass))}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onComfortCoolChange}
          ></ha-textfield>
          <ha-textfield
            type="number"
            .value=${String(T(this.ecoCool,this.hass))}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onEcoCoolChange}
          ></ha-textfield>
        </div>
      `:h`
      <div class="temp-inputs">
        <div class="temp-input-group">
          <ha-textfield
            type="number"
            label=${C(`schedule.comfort_label`,e)}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            .value=${String(T(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass))}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this.climateMode===`cool_only`?this._onComfortCoolChange:this._onComfortHeatChange}
          ></ha-textfield>
        </div>
        <div class="temp-input-group">
          <ha-textfield
            type="number"
            label=${C(`schedule.eco_label`,e)}
            suffix=${w(this.hass)}
            step=${k(this.hass)}
            .value=${String(T(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass))}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this.climateMode===`cool_only`?this._onEcoCoolChange:this._onEcoHeatChange}
          ></ha-textfield>
        </div>
      </div>
      <div class="fallback-hint">${C(`schedule.comfort_hint`,e)}</div>
    `}_getSelectorValueText(e){let t=this.hass?.states?.[this.scheduleSelectorEntity];return t?this.scheduleSelectorEntity.startsWith(`input_boolean.`)?C(`schedule.selector_value_boolean`,e,{value:t.state===`on`?`On`:`Off`}):C(`schedule.selector_value_number`,e,{value:t.state}):``}_readBlockTemps(e){let t=this.hass?.states?.[this.schedules[e].entity_id]?.attributes??{},n=e=>e!=null&&Et(e,this.hass)?e:void 0;return{blockTemp:n(t.temperature),heatTemp:n(t.heat_temperature),coolTemp:n(t.cool_temperature)}}_getStatusText(e,t){let n=this.hass.language;if(t===`unreachable`)return C(`schedule.state_unreachable`,n);if(t===`inactive`)return C(`schedule.state_inactive`,n);let r=this.schedules[e],i=this.hass?.states?.[r.entity_id];if(!i)return C(`schedule.state_active`,n);if(i.state===`on`){let{blockTemp:t,heatTemp:r,coolTemp:i}=this._readBlockTemps(e);return t==null?r!=null||i!=null?C(`schedule.from_schedule_split`,n,{heat:r==null?O(this.comfortHeat,this.hass):String(r),cool:i==null?O(this.comfortCool,this.hass):String(i),unit:w(this.hass)}):C(`schedule.fallback`,n,{temp:O(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass),unit:w(this.hass)}):C(`schedule.from_schedule`,n,{temp:String(t),unit:w(this.hass)})}return C(`schedule.eco_detail`,n,{temp:O(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass),unit:w(this.hass)})}_addSchedule(e){this._emitSchedules([...this.schedules,{entity_id:e}])}_removeSchedule(e){this._emitSchedules(this.schedules.filter((t,n)=>n!==e))}_moveSchedule(e,t){let n=e+t;if(n<0||n>=this.schedules.length)return;let r=[...this.schedules];[r[e],r[n]]=[r[n],r[e]],this._emitSchedules(r)}_emitSchedules(e){this.dispatchEvent(new CustomEvent(`schedules-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_onSelectorEntityChange(e){this.dispatchEvent(new CustomEvent(`schedule-selector-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_onComfortHeatChange(e){let t=e.target,n=E(parseFloat(t.value)||T(21,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`comfort-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.comfortCool<n&&this.dispatchEvent(new CustomEvent(`comfort-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onComfortCoolChange(e){let t=e.target,n=E(parseFloat(t.value)||T(24,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`comfort-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.comfortHeat>n&&this.dispatchEvent(new CustomEvent(`comfort-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onEcoHeatChange(e){let t=e.target,n=E(parseFloat(t.value)||T(17,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`eco-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.ecoCool<n&&this.dispatchEvent(new CustomEvent(`eco-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onEcoCoolChange(e){let t=e.target,n=E(parseFloat(t.value)||T(27,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`eco-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.ecoHeat>n&&this.dispatchEvent(new CustomEvent(`eco-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],z.prototype,`schedules`,void 0),j([b({type:String})],z.prototype,`scheduleSelectorEntity`,null),j([b({type:Number})],z.prototype,`activeScheduleIndex`,null),j([b({type:Number})],z.prototype,`comfortHeat`,void 0),j([b({type:Number})],z.prototype,`comfortCool`,void 0),j([b({type:Number})],z.prototype,`ecoHeat`,void 0),j([b({type:Number})],z.prototype,`ecoCool`,void 0),j([b({type:String})],z.prototype,`climateMode`,void 0),j([b({attribute:!1})],z.prototype,`scheduleTempWarnings`,void 0),z=j([y(`rme-schedule-settings`)],z);var Rt={underfloor:2,radiator:1,"":0};function zt(e){let t=``;for(let n of e){if(n.type!==`trv`)continue;let e=n.heating_system_type??``;(Rt[e]??0)>(Rt[t]??0)&&(t=e)}return t}v();var Bt=l`
  .master {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
  }

  .master-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .master-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background 0.15s,
      border-color 0.15s;
    border: 1px solid transparent;
    min-width: 0;
  }

  .master-row:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .master-row.focused {
    background: rgba(3, 169, 244, 0.08);
    border-color: rgba(3, 169, 244, 0.5);
  }

  .master-row ha-checkbox {
    flex-shrink: 0;
    margin-left: -8px;
  }

  .master-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .master-name-row {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .master-name {
    font-size: 14px;
    font-weight: 450;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .master-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .type-pill,
  .meta-pill {
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    padding: 1px 8px;
    border-radius: 8px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    background: rgba(255, 255, 255, 0.05);
  }

  .type-pill {
    color: var(--primary-color);
    background: rgba(3, 169, 244, 0.12);
  }

  .external-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    font-weight: 500;
    color: var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.1);
    padding: 2px 8px;
    border-radius: 10px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .detail-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
    border-radius: 12px;
    min-width: 0;
    min-height: 200px;
  }

  .empty-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex: 1;
    min-height: 180px;
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    opacity: 0.7;
    text-align: center;
  }

  .empty-detail ha-icon {
    --mdc-icon-size: 28px;
    opacity: 0.6;
  }

  .detail-head {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.06));
  }

  .detail-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .detail-entity-id {
    font-family: var(--code-font-family, monospace);
    font-size: 11px;
    color: var(--secondary-text-color);
    opacity: 0.7;
  }

  .detail-field {
    display: flex;
    flex-direction: column;
  }

  .detail-field ha-select,
  .detail-field ha-textfield {
    width: 100%;
  }

  .detail-field.with-info {
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  .detail-field.with-info ha-select,
  .detail-field.with-info ha-textfield {
    flex: 1;
    min-width: 0;
  }

  .detail-field.with-info rme-info-icon {
    flex-shrink: 0;
  }

  .detail-hint {
    font-size: 12px;
    color: var(--secondary-text-color);
    line-height: 1.5;
  }

  .detail-toggle-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
  }

  .detail-toggle-row ha-checkbox {
    margin-top: -8px;
    margin-left: -8px;
  }

  .detail-toggle-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .detail-toggle-label ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
  }

  .inline-hint {
    margin-top: 2px;
  }

  .block {
    margin-top: 4px;
  }

  .block-divider {
    height: 1px;
    background: var(--divider-color, rgba(255, 255, 255, 0.08));
    margin: 16px 0 8px;
  }

  .block-title {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-bottom: 8px;
  }

  .empty-list {
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    padding: 12px 14px;
  }

  ha-entity-picker {
    width: 100%;
  }

  .picker-wrap {
    margin-top: 8px;
  }
`;v(),S(),M();var Vt=class extends _{constructor(...e){super(...e),this.masterWidth=`260px`,this.breakpoint=720}static{this.styles=l`
    :host {
      display: block;
      container-type: inline-size;
    }

    .wrap {
      display: grid;
      grid-template-columns: var(--rme-master-width, 260px) minmax(0, 1fr);
      gap: 20px;
      align-items: start;
    }

    @container (max-width: 720px) {
      .wrap {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    /* Fallback for browsers without container queries */
    @media (max-width: 720px) {
      .wrap {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    ::slotted([slot="master"]) {
      min-width: 0;
    }

    ::slotted([slot="detail"]) {
      min-width: 0;
    }
  `}render(){return h`
      <div class="wrap" style="--rme-master-width: ${this.masterWidth};">
        <div class="master"><slot name="master"></slot></div>
        <div class="detail"><slot name="detail"></slot></div>
      </div>
    `}};j([b({type:String})],Vt.prototype,`masterWidth`,void 0),j([b({type:Number})],Vt.prototype,`breakpoint`,void 0),Vt=j([y(`rme-master-detail`)],Vt),v(),S(),M();var Ht=`__inherit__`,Ut=e=>e===Ht?``:e??``,B=class extends _{constructor(...e){super(...e),this.devices=[],this.selectedTempSensor=``,this.valveProtectionExclude=new Set,this.valveProtectionEnabled=!1,this.coilDryEnabledGlobal=!1,this.coilDryMinutesGlobal=20,this.coilDryModeGlobal=`fan_only`,this.coilDryFanModeGlobal=`low`,this.editing=!1,this._systemTypeInfoExpanded=!1,this._showBoostHint=!1,this._selectedThermostats=new Set,this._selectedCoolingDevices=new Set,this._heatingSystemType=``,this._selectedForEdit=``,this._entityFilter=e=>{let t=e.entity_id;return t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`)||this.devices.some(e=>e.entity_id===t)?!1:t.startsWith(`climate.`)}}willUpdate(e){if(e.has(`devices`)){this._selectedThermostats=new Set(this.devices.filter(e=>e.type===`trv`).map(e=>e.entity_id)),this._selectedCoolingDevices=new Set(this.devices.filter(e=>e.type===`ac`).map(e=>e.entity_id)),this._heatingSystemType=zt(this.devices);let e=new Set(this.devices.map(e=>e.entity_id));this._selectedForEdit&&!e.has(this._selectedForEdit)&&(this._selectedForEdit=``),!this._selectedForEdit&&this.devices.length>0&&(this._selectedForEdit=this.devices[0].entity_id)}}static{this.styles=[Bt,R,l`
      :host {
        display: block;
      }

      .section-subtitle {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin: 12px 0 8px 0;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .section-subtitle:first-child {
        margin-top: 0;
      }

      .device-group {
        padding: 4px 0;
      }

      .device-group + .device-group {
        margin-top: 8px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .device-list-scroll {
        max-height: 168px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
      }

      /* Device rows */
      .device-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 14px;
        font-size: 14px;
        color: var(--primary-text-color);
        border-radius: 10px;
        margin-bottom: 2px;
        transition: background 0.15s;
      }

      .device-row:last-child {
        margin-bottom: 0;
      }

      .device-row:hover {
        background: rgba(0, 0, 0, 0.02);
      }

      .device-row.selected {
        background: rgba(3, 169, 244, 0.035);
      }

      .device-row ha-checkbox,
      .device-row ha-radio {
        flex-shrink: 0;
      }

      .device-info {
        flex: 1;
        min-width: 0;
      }

      .device-name-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .device-name {
        font-size: 14px;
        font-weight: 450;
        color: var(--primary-text-color);
      }

      .device-value {
        margin-left: auto;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        flex-shrink: 0;
      }

      .device-entity {
        font-family: var(--code-font-family, monospace);
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        opacity: 0.7;
      }

      .external-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
        padding: 2px 8px;
        border-radius: 10px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .device-type-select {
        flex-shrink: 0;
        --ha-select-min-width: 90px;
      }

      .no-devices {
        color: var(--secondary-text-color);
        font-size: 13px;
        font-style: italic;
        padding: 12px 14px;
      }

      .entity-picker-wrap {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .subtitle-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .info-icon {
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        cursor: pointer;
        opacity: 0.6;
      }
      .info-icon:hover,
      .info-icon.info-active {
        opacity: 1;
        color: var(--primary-color);
      }

      .system-type-info {
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color);
        padding: 8px 14px 4px;
      }

      .boost-hint {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 8px;
        font-size: 13px;
        color: var(--primary-text-color);
        line-height: 1.4;
        --mdc-icon-size: 18px;
      }
      .boost-hint ha-icon {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .idle-action-row {
        display: flex;
        gap: 12px;
        padding: 4px 14px 4px 42px;
      }

      .idle-action-row ha-select {
        flex: 1;
        min-width: 0;
      }

      .setpoint-mode-row {
        display: flex;
        gap: 12px;
        padding: 4px 14px 4px 42px;
      }

      .setpoint-mode-row ha-select {
        flex: 1;
        min-width: 0;
      }

      .setpoint-mode-hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        padding: 2px 14px 4px 42px;
      }

      .valve-exclude-row {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 2px 14px 2px 42px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .valve-exclude-row ha-icon {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
      }

      .valve-exclude-row ha-checkbox {
        --mdc-checkbox-unchecked-color: var(--secondary-text-color);
        margin: -8px -4px -8px -8px;
      }

      .valve-exclude-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 10px;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--secondary-background-color);
        padding: 2px 6px;
        border-radius: 8px;
        --mdc-icon-size: 12px;
      }

      /* View mode styles */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 14px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .entity-link {
        cursor: pointer;
      }

      .entity-link:hover {
        text-decoration: underline;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){let e=this._selectedThermostats.size>0||this._selectedCoolingDevices.size>0;return h`
      ${e?h`
              <div class="device-group">
                <div class="section-subtitle">
                  ${C(`devices.climate_entities`,this.hass.language)}
                </div>
                ${[...this._selectedThermostats].map(e=>this._renderViewRow(e,`climate`))}
                ${[...this._selectedCoolingDevices].map(e=>this._renderViewRow(e,`climate`))}
              </div>
            `:g}
      ${this._heatingSystemType?h`
              <div class="device-group">
                <div class="section-subtitle">
                  ${C(`devices.heating_system_type`,this.hass.language)}
                </div>
                <div class="view-row">
                  <span class="view-name"
                    >${this._heatingSystemType===`radiator`?C(`devices.system_type_radiator`,this.hass.language):this._heatingSystemType===`underfloor`?C(`devices.system_type_underfloor`,this.hass.language):this._heatingSystemType}</span
                  >
                </div>
              </div>
            `:g}
    `}_renderViewRow(e,t){let n=this.hass.states[e],r=n?.attributes?.friendly_name||e,i=n?.state,a=n?.attributes??{},o=``;if(t===`climate`){let e=a.current_temperature;e!=null&&(o=`${e.toFixed(1)}${w(this.hass)}`)}else if(t===`temp`){let t=e.startsWith(`climate.`)?a.current_temperature:i;t!=null&&t!==``&&t!==`unknown`&&t!==`unavailable`&&(o=`${Number(t).toFixed(1)}${w(this.hass)}`)}else i&&i!==`unknown`&&i!==`unavailable`&&(o=`${Math.round(Number(i))}%`);let s=t===`climate`&&this.valveProtectionEnabled&&this.valveProtectionExclude.has(e),c=t===`climate`?this.devices.find(t=>t.entity_id===e):void 0,l=c?.idle_action===`fan_only`||c?.idle_action===`setback`||c?.idle_action===`low`,u=c?.setpoint_mode===`direct`&&!!this.selectedTempSensor;return h`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Ft(this,e)}
          >${r}</span
        >
        ${l?h`<span class="valve-exclude-badge">
                ${c.idle_action===`fan_only`?h`${C(`devices.idle_action_fan_only`,this.hass.language)}${c.idle_fan_mode?` (${c.idle_fan_mode})`:g}`:c.idle_action===`low`?C(`devices.idle_action_low`,this.hass.language):C(`devices.idle_action_setback`,this.hass.language)}
              </span>`:g}
        ${u?h`<span class="valve-exclude-badge">
                ${C(`devices.setpoint_mode_direct`,this.hass.language)}
              </span>`:g}
        ${s?h`<span class="valve-exclude-badge">
                <ha-icon icon="mdi:shield-off-outline"></ha-icon>
                ${C(`devices.valve_protection_excluded`,this.hass.language)}
              </span>`:g}
        ${o?h`<span class="view-value">${o}</span>`:g}
      </div>
    `}_renderEditMode(){let e=yt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)).filter(e=>e.entity_id.startsWith(`climate.`)),t=new Set(e.map(e=>e.entity_id)),n=new Set(this.devices.map(e=>e.entity_id)),r=[...n].filter(e=>!t.has(e)),i=e=>n.has(e),a=this._selectedForEdit;return h`
      <rme-master-detail>
        <div slot="master" class="master">
          <div class="section-subtitle">
            ${C(`devices.climate_entities`,this.hass.language)}
          </div>
          <div class="master-list">
            ${e.length>0?e.map(e=>this._renderMasterRow(e.entity_id,!1)):h`<div class="no-devices">
                    ${C(`devices.no_climate`,this.hass.language)}
                  </div>`}
            ${r.map(e=>this._renderMasterRow(e,!0))}
          </div>
          <div class="entity-picker-wrap">
            <ha-entity-picker
              .hass=${this.hass}
              .includeDomains=${[`climate`]}
              .entityFilter=${this._entityFilter}
              .value=${``}
              label=${C(`devices.add_entity`,this.hass.language)}
              @value-changed=${this._onEntityPicked}
            ></ha-entity-picker>
          </div>
        </div>

        <div slot="detail" class="detail-panel">
          ${a&&i(a)?this._renderDeviceDetail(a):h`<div class="empty-detail">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  <span>${C(`devices.select_to_configure`,this.hass.language)}</span>
                </div>`}
        </div>
      </rme-master-detail>

      ${this._selectedThermostats.size>0?h`
              <div class="block-divider"></div>
              <div class="block">
                <div class="subtitle-row">
                  <div class="section-subtitle">
                    ${C(`devices.heating_system_type`,this.hass.language)}
                  </div>
                  <ha-icon
                    class="info-icon ${this._systemTypeInfoExpanded?`info-active`:``}"
                    icon="mdi:information-outline"
                    @click=${()=>{this._systemTypeInfoExpanded=!this._systemTypeInfoExpanded}}
                  ></ha-icon>
                </div>
                ${this._systemTypeInfoExpanded?h`
                        <div class="system-type-info">
                          ${C(`devices.heating_system_type_info`,this.hass.language)}
                        </div>
                      `:g}
                <ha-select
                  .value=${this._heatingSystemType||`standard`}
                  .options=${[{value:`standard`,label:C(`devices.system_type_none`,this.hass.language)},{value:`radiator`,label:C(`devices.system_type_radiator`,this.hass.language)},{value:`underfloor`,label:C(`devices.system_type_underfloor`,this.hass.language)}]}
                  @selected=${this._onHeatingSystemTypeChange}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                  style="width: 100%;"
                >
                  <ha-list-item value="standard"
                    >${C(`devices.system_type_none`,this.hass.language)}</ha-list-item
                  >
                  <ha-list-item value="radiator"
                    >${C(`devices.system_type_radiator`,this.hass.language)}</ha-list-item
                  >
                  <ha-list-item value="underfloor"
                    >${C(`devices.system_type_underfloor`,this.hass.language)}</ha-list-item
                  >
                </ha-select>
                ${this._showBoostHint?h`
                        <div class="boost-hint">
                          <ha-icon icon="mdi:information-outline"></ha-icon>
                          <span
                            >${C(`devices.heating_system_type_boost_hint`,this.hass.language)}</span
                          >
                        </div>
                      `:g}
              </div>
            `:g}
    `}_renderMasterRow(e,t){let n=this._selectedThermostats.has(e),r=this._selectedCoolingDevices.has(e),i=n||r,a=this._selectedForEdit===e,o=this.hass.states[e]?.attributes?.friendly_name||e,s=this.devices.find(t=>t.entity_id===e),c=n?C(`devices.type_thermostat`,this.hass.language):r?C(`devices.type_ac`,this.hass.language):``;return h`
      <div
        class="master-row ${a?`focused`:``} ${i?`in-room`:``}"
        @click=${()=>this._onSelectForEdit(e)}
      >
        <ha-checkbox
          .checked=${i}
          @click=${e=>e.stopPropagation()}
          @change=${t=>{let n=t.target;this._onClimateToggle(e,n.checked),n.checked&&(this._selectedForEdit=e)}}
        ></ha-checkbox>
        <div class="master-info">
          <div class="master-name-row">
            <span class="master-name">${o}</span>
            ${t?h`<span class="external-badge"
                    >${C(`devices.other_area`,this.hass.language)}</span
                  >`:g}
          </div>
          <div class="master-meta">
            ${c?h`<span class="type-pill">${c}</span>`:g}
            ${s?.idle_action&&s.idle_action!==`off`?h`<span class="meta-pill"
                    >${C(`devices.idle_action_${s.idle_action}`,this.hass.language)}</span
                  >`:g}
            ${r&&(s?.coil_dry===`on`||s?.coil_dry!==`off`&&this.coilDryEnabledGlobal)?h`<span class="meta-pill"
                    >${C(`devices.coil_dry_summary`,this.hass.language)}</span
                  >`:g}
            ${s?.setpoint_mode===`direct`&&this.selectedTempSensor?h`<span class="meta-pill"
                    >${C(`devices.setpoint_mode_direct`,this.hass.language)}</span
                  >`:g}
          </div>
        </div>
      </div>
    `}_onSelectForEdit(e){this._selectedForEdit=e}_renderDeviceDetail(e){let t=this.devices.find(t=>t.entity_id===e);if(!t)return g;let n=t.type===`trv`,r=t.type===`ac`,i=this.hass.states[e],a=i?.attributes?.friendly_name||e,o=(i?.attributes?.hvac_modes??[]).includes(`fan_only`),s=this.valveProtectionExclude.has(e),c=this.hass.language;return h`
      <div class="detail-head">
        <div class="detail-title">${a}</div>
        <div class="detail-entity-id">${e}</div>
      </div>

      <div class="detail-field">
        <ha-select
          .label=${C(`devices.type_label`,c)||`Type`}
          .value=${this._getDeviceDisplayType(e)}
          .options=${[{value:`thermostat`,label:C(`devices.type_thermostat`,c)},{value:`ac`,label:C(`devices.type_ac`,c)}]}
          @selected=${t=>this._onDeviceTypeChange(e,I(t))}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
        >
          <ha-list-item value="thermostat"
            >${C(`devices.type_thermostat`,c)}</ha-list-item
          >
          <ha-list-item value="ac">${C(`devices.type_ac`,c)}</ha-list-item>
        </ha-select>
      </div>

      ${r?h`
              <div class="detail-field">
                <ha-select
                  .label=${C(`devices.idle_action`,c)}
                  .value=${t.idle_action??`off`}
                  .options=${[{value:`off`,label:C(`devices.idle_action_off`,c)},...o?[{value:`fan_only`,label:C(`devices.idle_action_fan_only`,c)}]:[],{value:`setback`,label:C(`devices.idle_action_setback`,c)}]}
                  @selected=${t=>this._onIdleActionChange(e,I(t))}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                >
                  <ha-list-item value="off"
                    >${C(`devices.idle_action_off`,c)}</ha-list-item
                  >
                  ${o?h`<ha-list-item value="fan_only"
                          >${C(`devices.idle_action_fan_only`,c)}</ha-list-item
                        >`:g}
                  <ha-list-item value="setback"
                    >${C(`devices.idle_action_setback`,c)}</ha-list-item
                  >
                </ha-select>
              </div>
              ${t.idle_action===`fan_only`?h`<div class="detail-field">
                      <ha-select
                        .label=${C(`devices.idle_fan_mode`,c)}
                        .value=${t.idle_fan_mode===``?`__keep__`:t.idle_fan_mode??`low`}
                        .options=${[{value:`__keep__`,label:C(`devices.idle_fan_mode_keep`,c)},...(i?.attributes?.fan_modes??[]).map(e=>({value:e,label:e}))]}
                        @selected=${t=>{let n=I(t);this._onIdleFanModeChange(e,n===`__keep__`?``:n)}}
                        @closed=${e=>e.stopPropagation()}
                        fixedMenuPosition
                      >
                        <ha-list-item value="__keep__"
                          >${C(`devices.idle_fan_mode_keep`,c)}</ha-list-item
                        >
                        ${(i?.attributes?.fan_modes??[]).map(e=>h`<ha-list-item value="${e}">${e}</ha-list-item>`)}
                      </ha-select>
                    </div>`:g}

              <div class="detail-field">
                <ha-select
                  .label=${C(`devices.coil_dry`,c)}
                  .value=${t.coil_dry??`inherit`}
                  .options=${[{value:`inherit`,label:C(`devices.coil_dry_inherit`,c)},{value:`on`,label:C(`devices.coil_dry_on`,c)},{value:`off`,label:C(`devices.coil_dry_off`,c)}]}
                  @selected=${t=>this._onCoilDryChange(e,I(t))}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                >
                  <ha-list-item value="inherit"
                    >${C(`devices.coil_dry_inherit`,c)}</ha-list-item
                  >
                  <ha-list-item value="on">${C(`devices.coil_dry_on`,c)}</ha-list-item>
                  <ha-list-item value="off">${C(`devices.coil_dry_off`,c)}</ha-list-item>
                </ha-select>
              </div>

              ${(t.coil_dry??`inherit`)===`inherit`&&!this.coilDryEnabledGlobal?h`
                      <div class="boost-hint">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        <span>${C(`devices.coil_dry_global_off_hint`,c)}</span>
                      </div>
                    `:g}
              ${(t.coil_dry??`inherit`)===`off`?g:h`
                      <div class="detail-field">
                        <ha-textfield
                          .value=${String(t.coil_dry_minutes??0)}
                          .label=${C(`devices.coil_dry_minutes`,c,{minutes:this.coilDryMinutesGlobal})}
                          type="number"
                          step="1"
                          min="0"
                          max="60"
                          @change=${t=>{let n=parseInt(t.target.value,10);!isNaN(n)&&n>=0&&n<=60&&this._onCoilDryMinutesChange(e,n)}}
                        ></ha-textfield>
                      </div>

                      <div class="detail-field with-info">
                        <ha-select
                          .label=${C(`devices.coil_dry_mode`,c)}
                          .value=${t.coil_dry_mode||Ht}
                          .options=${[{value:Ht,label:C(`devices.coil_dry_mode_inherit`,c,{value:this.coilDryModeGlobal})},{value:`fan_only`,label:`fan_only`},{value:`dry`,label:`dry`}]}
                          @selected=${t=>this._onCoilDryModeChange(e,Ut(I(t)))}
                          @closed=${e=>e.stopPropagation()}
                          fixedMenuPosition
                        >
                          <ha-list-item value="${Ht}"
                            >${C(`devices.coil_dry_mode_inherit`,c,{value:this.coilDryModeGlobal})}</ha-list-item
                          >
                          <ha-list-item value="fan_only">fan_only</ha-list-item>
                          <ha-list-item value="dry">dry</ha-list-item>
                        </ha-select>
                        ${t.coil_dry_mode===`dry`?h`<rme-info-icon
                                icon="mdi:alert-outline"
                                .text=${C(`coil_dry.mode_dry_warning`,c)}
                              ></rme-info-icon>`:g}
                      </div>

                      <div class="detail-field">
                        <ha-select
                          .label=${C(`devices.coil_dry_fan_mode`,c)}
                          .value=${t.coil_dry_fan_mode||Ht}
                          .options=${[{value:Ht,label:C(`devices.coil_dry_fan_mode_inherit`,c,{value:this._globalFanModeLabel(c)})},{value:`__keep__`,label:C(`devices.coil_dry_fan_mode_keep`,c)},...(i?.attributes?.fan_modes??[]).map(e=>({value:e,label:e}))]}
                          @selected=${t=>this._onCoilDryFanModeChange(e,Ut(I(t)))}
                          @closed=${e=>e.stopPropagation()}
                          fixedMenuPosition
                        >
                          <ha-list-item value="${Ht}"
                            >${C(`devices.coil_dry_fan_mode_inherit`,c,{value:this._globalFanModeLabel(c)})}</ha-list-item
                          >
                          <ha-list-item value="__keep__"
                            >${C(`devices.coil_dry_fan_mode_keep`,c)}</ha-list-item
                          >
                          ${(i?.attributes?.fan_modes??[]).map(e=>h`<ha-list-item value="${e}">${e}</ha-list-item>`)}
                        </ha-select>
                      </div>
                    `}
            `:g}
      ${n?h`
              <div class="detail-field with-info">
                <ha-select
                  .label=${C(`devices.idle_action`,c)}
                  .value=${t.idle_action??`off`}
                  .options=${[{value:`off`,label:C(`devices.idle_action_off`,c)},{value:`low`,label:C(`devices.idle_action_low`,c)}]}
                  @selected=${t=>this._onIdleActionChange(e,I(t))}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                >
                  <ha-list-item value="off"
                    >${C(`devices.idle_action_off`,c)}</ha-list-item
                  >
                  <ha-list-item value="low"
                    >${C(`devices.idle_action_low`,c)}</ha-list-item
                  >
                </ha-select>
                ${t.idle_action===`low`?h`<rme-info-icon
                        .text=${C(`devices.idle_action_low_hint`,c)}
                      ></rme-info-icon>`:g}
              </div>
            `:g}
      ${this.selectedTempSensor?h`
              <div class="detail-field with-info">
                <ha-select
                  .label=${C(`devices.setpoint_mode`,c)}
                  .value=${t.setpoint_mode??`proportional`}
                  .options=${[{value:`proportional`,label:C(`devices.setpoint_mode_proportional`,c)},{value:`direct`,label:C(`devices.setpoint_mode_direct`,c)}]}
                  @selected=${t=>this._onSetpointModeChange(e,I(t))}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                >
                  <ha-list-item value="proportional"
                    >${C(`devices.setpoint_mode_proportional`,c)}</ha-list-item
                  >
                  <ha-list-item value="direct"
                    >${C(`devices.setpoint_mode_direct`,c)}</ha-list-item
                  >
                </ha-select>
                <rme-info-icon
                  .text=${C(`devices.setpoint_mode_hint`,c)}
                ></rme-info-icon>
              </div>
            `:g}
      ${n&&this.valveProtectionEnabled?h`
              <div class="detail-toggle-row">
                <ha-checkbox
                  .checked=${s}
                  @change=${t=>{let n=t.target;this._onValveProtectionExcludeToggle(e,n.checked)}}
                ></ha-checkbox>
                <div class="detail-toggle-label">
                  <ha-icon icon="mdi:shield-off-outline"></ha-icon>
                  ${C(`devices.valve_protection_excluded`,c)}
                  <rme-info-icon
                    .text=${C(`devices.valve_protection_exclude_hint`,c)}
                  ></rme-info-icon>
                </div>
              </div>
            `:g}
    `}_detectClimateType(e){return(this.hass.states[e]?.attributes?.hvac_modes??[]).some(e=>[`cool`,`heat_cool`].includes(e))?`ac`:`thermostat`}_getDeviceDisplayType(e){let t=this.devices.find(t=>t.entity_id===e);return t&&t.type===`ac`?`ac`:`thermostat`}_onClimateToggle(e,t){let n;if(t){let t=this._detectClimateType(e)===`thermostat`?`trv`:`ac`;n=[...this.devices,{entity_id:e,type:t,role:`auto`}]}else n=this.devices.filter(t=>t.entity_id!==e);this._fireDeviceChanged(n)}_onDeviceTypeChange(e,t){let n=t===`thermostat`?`trv`:`ac`,r=this.devices.map(t=>{if(t.entity_id!==e)return t;let r={...t,type:n};return n===`ac`&&r.idle_action===`low`&&(r.idle_action=`off`),n===`trv`&&r.coil_dry===`on`&&(r.coil_dry=`inherit`),r});this._fireDeviceChanged(r)}_onValveProtectionExcludeToggle(e,t){this.dispatchEvent(new CustomEvent(`valve-protection-exclude-toggle`,{detail:{entityId:e,excluded:t},bubbles:!0,composed:!0}))}_onIdleActionChange(e,t){let n=this.devices.map(n=>{if(n.entity_id!==e)return n;let r={...n,idle_action:t};return t===`fan_only`&&!n.idle_fan_mode&&(r.idle_fan_mode=`low`),r});this._fireDeviceChanged(n)}_onIdleFanModeChange(e,t){let n=this.devices.map(n=>n.entity_id===e?{...n,idle_fan_mode:t}:n);this._fireDeviceChanged(n)}_onSetpointModeChange(e,t){let n=this.devices.map(n=>n.entity_id===e?{...n,setpoint_mode:t}:n);this._fireDeviceChanged(n)}_globalFanModeLabel(e){return this.coilDryFanModeGlobal===``?C(`devices.coil_dry_fan_mode_keep`,e):this.coilDryFanModeGlobal}_onCoilDryChange(e,t){this._fireDeviceChanged(this.devices.map(n=>n.entity_id===e?{...n,coil_dry:t}:n))}_onCoilDryMinutesChange(e,t){this._fireDeviceChanged(this.devices.map(n=>n.entity_id===e?{...n,coil_dry_minutes:t}:n))}_onCoilDryModeChange(e,t){this._fireDeviceChanged(this.devices.map(n=>n.entity_id===e?{...n,coil_dry_mode:t}:n))}_onCoilDryFanModeChange(e,t){this._fireDeviceChanged(this.devices.map(n=>n.entity_id===e?{...n,coil_dry_fan_mode:t}:n))}_onHeatingSystemTypeChange(e){let t=I(e)??``,n=t===`standard`?``:t;this._showBoostHint=!0;let r=this.devices.map(e=>e.type===`trv`?{...e,heating_system_type:n}:e);this._fireDeviceChanged(r)}_fireDeviceChanged(e){this.dispatchEvent(new CustomEvent(`device-changed`,{detail:{devices:e},bubbles:!0,composed:!0}))}_onEntityPicked(e){let t=e.detail?.value,n=e.target;if(n.value=``,!t||!t.startsWith(`climate.`)||this.devices.some(e=>e.entity_id===t))return;let r=this._detectClimateType(t)===`thermostat`?`trv`:`ac`,i=[...this.devices,{entity_id:t,type:r,role:`auto`}];this._fireDeviceChanged(i)}};j([b({attribute:!1})],B.prototype,`hass`,void 0),j([b({attribute:!1})],B.prototype,`area`,void 0),j([b({attribute:!1})],B.prototype,`devices`,void 0),j([b({type:String})],B.prototype,`selectedTempSensor`,void 0),j([b({attribute:!1})],B.prototype,`valveProtectionExclude`,void 0),j([b({type:Boolean})],B.prototype,`valveProtectionEnabled`,void 0),j([b({type:Boolean})],B.prototype,`coilDryEnabledGlobal`,void 0),j([b({type:Number})],B.prototype,`coilDryMinutesGlobal`,void 0),j([b({type:String})],B.prototype,`coilDryModeGlobal`,void 0),j([b({type:String})],B.prototype,`coilDryFanModeGlobal`,void 0),j([b({type:Boolean})],B.prototype,`editing`,void 0),j([x()],B.prototype,`_systemTypeInfoExpanded`,void 0),j([x()],B.prototype,`_showBoostHint`,void 0),j([x()],B.prototype,`_selectedThermostats`,void 0),j([x()],B.prototype,`_selectedCoolingDevices`,void 0),j([x()],B.prototype,`_heatingSystemType`,void 0),j([x()],B.prototype,`_selectedForEdit`,void 0),B=j([y(`rme-device-section`)],B),v(),S(),M();var V=class extends _{constructor(...e){super(...e),this.temperatureSensor=``,this.humiditySensor=``,this.occupancySensors=new Set,this.windowSensors=new Set,this.windowOpenDelay=0,this.windowCloseDelay=0,this.heatingSystemType=``,this.editing=!1,this.language=`en`,this._pickerOpen=!1,this._collapsed={},this._globalEntityFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`)||this.temperatureSensor===t||this.humiditySensor===t||this.occupancySensors.has(t)||this.windowSensors.has(t))return!1;if(t.startsWith(`sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;return e===`temperature`||e===`humidity`}if(t.startsWith(`binary_sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;return e===`occupancy`||e===`motion`||e===`presence`||e===`window`||e===`door`||e===`opening`}return t.startsWith(`climate.`)?this.hass.states[t]?.attributes?.current_temperature!=null:t.startsWith(`input_number.`)||t.startsWith(`input_boolean.`)},this._onGlobalPickerValueChanged=e=>{let t=e.detail?.value,n=e.target;if(n.value=``,t){if(t.startsWith(`binary_sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;e===`window`||e===`door`||e===`opening`?this.windowSensors.has(t)||this._onWindowToggle(t,!0):this.occupancySensors.has(t)||this._onOccupancyToggle(t,!0)}else if(t.startsWith(`input_boolean.`))this.occupancySensors.has(t)||this._onOccupancyToggle(t,!0);else if(t.startsWith(`input_number.`)){let e=this.hass.states[t]?.attributes?.unit_of_measurement;this._onSensorSelected(t,e===`%`?`humidity`:`temp`)}else if(t.startsWith(`climate.`))this._onSensorSelected(t,`temp`);else{let e=this.hass.states[t]?.attributes?.device_class;this._onSensorSelected(t,e===`humidity`?`humidity`:`temp`)}this._pickerOpen=!1}},this._onWindowOpenDelayChange=e=>{let t=Math.max(0,parseInt(e.target.value)||0);this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_open_delay`,value:t},bubbles:!0,composed:!0}))},this._onWindowCloseDelayChange=e=>{let t=Math.max(0,parseInt(e.target.value)||0);this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_close_delay`,value:t},bubbles:!0,composed:!0}))}}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .sensor-block {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 12px 14px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
        border-radius: 12px;
      }

      .sensor-block + .sensor-block {
        margin-top: 12px;
      }

      .block-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 6px;
        cursor: pointer;
        user-select: none;
      }

      .block-header:hover .block-title {
        color: var(--primary-color);
      }

      .block-header ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .chevron {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        transition: transform 0.2s ease;
      }

      .chevron.collapsed {
        transform: rotate(-90deg);
      }

      .block-body {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .sensor-block.collapsed .block-header {
        padding-bottom: 0;
      }

      .block-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color);
        letter-spacing: 0.2px;
        flex: 1;
      }

      .count-chip {
        font-size: 11px;
        font-weight: 500;
        padding: 1px 7px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.06);
        color: var(--secondary-text-color);
      }

      .count-chip.has-selection {
        background: rgba(3, 169, 244, 0.15);
        color: var(--primary-color);
      }

      .row-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-height: 168px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: 8px;
        cursor: pointer;
        border-left: 2px solid transparent;
        transition:
          background 0.15s,
          border-color 0.15s;
        min-width: 0;
      }

      .row:hover {
        background: rgba(255, 255, 255, 0.03);
      }

      .row.selected {
        background: rgba(3, 169, 244, 0.08);
        border-left-color: var(--primary-color);
      }

      .row ha-checkbox,
      .row ha-radio {
        flex-shrink: 0;
        margin: -4px 0;
      }

      .row-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .row-name-line {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .row-name {
        font-size: 13px;
        font-weight: 450;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .row-eid {
        font-family: var(--code-font-family, monospace);
        font-size: 10.5px;
        color: var(--secondary-text-color);
        opacity: 0.65;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .external-badge {
        display: inline-flex;
        align-items: center;
        font-size: 9.5px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
        padding: 1px 6px;
        border-radius: 8px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .value-chip {
        flex-shrink: 0;
        font-size: 12px;
        font-weight: 500;
        padding: 3px 9px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--primary-text-color);
        font-variant-numeric: tabular-nums;
      }

      .row.selected .value-chip {
        background: rgba(3, 169, 244, 0.15);
        color: var(--primary-color);
      }

      .occupancy-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
        transition: background 0.2s;
      }

      .occupancy-dot.on {
        background: var(--success-color, #4caf50);
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.18);
      }

      .occupancy-dot.off {
        background: rgba(255, 255, 255, 0.2);
      }

      .window-dot.on {
        background: var(--warning-color, #ff9800);
        box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.18);
      }

      .window-dot.off {
        background: rgba(255, 255, 255, 0.2);
      }

      .delay-fields {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }

      .delay-fields ha-textfield {
        flex: 1;
      }

      .delay-hint {
        display: flex;
        align-items: flex-start;
        gap: 6px;
        font-size: 11.5px;
        line-height: 1.5;
        color: var(--warning-color, #ff9800);
        margin-top: 6px;
      }

      .delay-hint ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
        margin-top: 1px;
      }

      .delay-view {
        font-size: 12px;
        color: var(--secondary-text-color);
        padding-top: 4px;
      }

      .empty-row {
        color: var(--secondary-text-color);
        font-size: 12.5px;
        font-style: italic;
        padding: 6px 4px;
        opacity: 0.7;
      }

      .add-row,
      .global-add {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .global-add {
        margin-top: 12px;
      }

      .add-row ha-entity-picker,
      .global-add ha-entity-picker {
        flex: 1;
      }

      .add-button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        margin: 12px 0 0 0;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        border-radius: 6px;
        transition:
          color 0.15s,
          background 0.15s;
      }

      .add-button:hover,
      .add-button:focus-visible {
        color: var(--primary-color);
        background: rgba(3, 169, 244, 0.08);
        outline: none;
      }

      .add-button ha-icon {
        --mdc-icon-size: 16px;
      }

      .picker-close {
        --mdc-icon-button-size: 32px;
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      /* View mode rows */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .entity-link {
        cursor: pointer;
      }

      .entity-link:hover {
        text-decoration: underline;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
      }

      .section-subtitle {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin: 12px 0 4px 0;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .section-subtitle:first-child {
        margin-top: 0;
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){let e=!!this.temperatureSensor,t=!!this.humiditySensor,n=this.occupancySensors.size>0,r=this.windowSensors.size>0;if(!e&&!t&&!n&&!r)return g;let i=this.hass.language;return h`
      ${e?h`
              <div class="section-subtitle">${C(`devices.temp_sensors`,i)}</div>
              ${this._renderSensorViewRow(this.temperatureSensor,`temp`)}
            `:g}
      ${t?h`
              <div class="section-subtitle">${C(`devices.humidity_sensors`,i)}</div>
              ${this._renderSensorViewRow(this.humiditySensor,`humidity`)}
            `:g}
      ${n?h`
              <div class="section-subtitle">${C(`devices.occupancy_sensors`,i)}</div>
              ${[...this.occupancySensors].map(e=>this._renderOccupancyViewRow(e))}
            `:g}
      ${r?h`
              <div class="section-subtitle">${C(`devices.window_sensors`,i)}</div>
              ${[...this.windowSensors].map(e=>this._renderWindowViewRow(e))}
              ${this.windowOpenDelay||this.windowCloseDelay?h`<div class="delay-view">
                      ${this.windowOpenDelay?h`${C(`devices.window_open_delay`,i)}:
                            ${this.windowOpenDelay}s`:g}
                      ${this.windowOpenDelay&&this.windowCloseDelay?` · `:g}
                      ${this.windowCloseDelay?h`${C(`devices.window_close_delay`,i)}:
                            ${this.windowCloseDelay}s`:g}
                    </div>`:g}
            `:g}
    `}_renderWindowViewRow(e){let t=this.hass.states[e],n=t?.attributes?.friendly_name||e,r=t?.state===`on`;return h`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Ft(this,e)}
          >${n}</span
        >
        <span class="occupancy-dot window-dot ${r?`on`:`off`}"></span>
      </div>
    `}_renderSensorViewRow(e,t){let n=this.hass.states[e],r=n?.attributes?.friendly_name||e,i=n?.state,a=n?.attributes??{},o=``;if(t===`temp`){let t=e.startsWith(`climate.`)?a.current_temperature:i;t!=null&&t!==``&&t!==`unknown`&&t!==`unavailable`&&(o=`${Number(t).toFixed(1)}${w(this.hass)}`)}else i&&i!==`unknown`&&i!==`unavailable`&&(o=`${Math.round(Number(i))}%`);return h`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Ft(this,e)}
          >${r}</span
        >
        ${o?h`<span class="view-value">${o}</span>`:g}
      </div>
    `}_renderOccupancyViewRow(e){let t=this.hass.states[e],n=t?.attributes?.friendly_name||e,r=t?.state===`on`;return h`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Ft(this,e)}
          >${n}</span
        >
        <span class="occupancy-dot ${r?`on`:`off`}"></span>
      </div>
    `}_renderEditMode(){let e=yt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)),t=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`temperature`||e.entity_id.startsWith(`climate.`)&&this.hass.states[e.entity_id]?.attributes?.current_temperature!=null):[],n=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`humidity`):[],r=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`binary_sensor.`)&&[`occupancy`,`motion`,`presence`].includes(this.hass.states[e.entity_id]?.attributes?.device_class)||e.entity_id.startsWith(`input_boolean.`)):[],i=new Set(t.map(e=>e.entity_id)),a=this.temperatureSensor&&!i.has(this.temperatureSensor)?this.temperatureSensor:null,o=new Set(n.map(e=>e.entity_id)),s=this.humiditySensor&&!o.has(this.humiditySensor)?this.humiditySensor:null,c=new Set(r.map(e=>e.entity_id)),l=[...this.occupancySensors].filter(e=>!c.has(e)),u=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`binary_sensor.`)&&[`window`,`door`,`opening`].includes(this.hass.states[e.entity_id]?.attributes?.device_class)):[],d=new Set(u.map(e=>e.entity_id)),ee=[...this.windowSensors].filter(e=>!d.has(e)),f=this.hass.language;return h`
      ${this._renderBlock({kind:`temp`,icon:`mdi:thermometer`,title:C(`devices.temp_sensors`,f),emptyText:C(`devices.no_temp_sensors`,f),areaSensors:t,externalSensors:a?[a]:[],selectedCount:+!!this.temperatureSensor})}
      ${this._renderBlock({kind:`humidity`,icon:`mdi:water-percent`,title:C(`devices.humidity_sensors`,f),emptyText:C(`devices.no_humidity_sensors`,f),areaSensors:n,externalSensors:s?[s]:[],selectedCount:+!!this.humiditySensor})}
      ${this._renderBlock({kind:`occupancy`,icon:`mdi:account-eye`,title:C(`devices.occupancy_sensors`,f),emptyText:C(`devices.no_occupancy_sensors`,f),areaSensors:r,externalSensors:l,selectedCount:this.occupancySensors.size})}
      ${this._renderBlock({kind:`window`,icon:`mdi:window-open-variant`,title:C(`devices.window_sensors`,f),emptyText:C(`devices.no_window_sensors`,f),areaSensors:u,externalSensors:ee,selectedCount:this.windowSensors.size,extras:this._renderWindowExtras(f)})}
      ${this._renderGlobalAdd(f)}
    `}_renderWindowExtras(e){return this.windowSensors.size===0?g:h`
      <div class="delay-fields">
        <ha-textfield
          type="number"
          min="0"
          suffix="s"
          .label=${C(`devices.window_open_delay`,e)}
          .value=${String(this.windowOpenDelay)}
          @change=${this._onWindowOpenDelayChange}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          suffix="s"
          .label=${C(`devices.window_close_delay`,e)}
          .value=${String(this.windowCloseDelay)}
          @change=${this._onWindowCloseDelayChange}
        ></ha-textfield>
      </div>
      ${this.heatingSystemType===`underfloor`&&this.windowOpenDelay<300?h`
              <div class="delay-hint">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${C(`devices.underfloor_delay_hint`,e)}
              </div>
            `:g}
    `}_renderGlobalAdd(e){return this._pickerOpen?h`
        <div class="global-add">
          <ha-entity-picker
            .hass=${this.hass}
            .includeDomains=${[`sensor`,`binary_sensor`,`climate`,`input_number`,`input_boolean`]}
            .entityFilter=${this._globalEntityFilter}
            .value=${``}
            .autofocus=${!0}
            label=${C(`devices.add_entity`,e)}
            @value-changed=${this._onGlobalPickerValueChanged}
          ></ha-entity-picker>
          <ha-icon-button
            class="picker-close"
            .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
            @click=${()=>this._pickerOpen=!1}
          ></ha-icon-button>
        </div>
      `:h`
      <button type="button" class="add-button global" @click=${()=>this._pickerOpen=!0}>
        <ha-icon icon="mdi:plus"></ha-icon>
        ${C(`devices.add_entity`,e)}
      </button>
    `}_renderBlock(e){let t=e.areaSensors.length+e.externalSensors.length,n=this._collapsed[e.kind]??!0;return h`
      <div class="sensor-block ${n?`collapsed`:``}">
        <div class="block-header" @click=${()=>this._toggleBlock(e.kind)}>
          <ha-icon icon=${e.icon}></ha-icon>
          <div class="block-title">${e.title}</div>
          ${e.selectedCount>0?h`<span class="count-chip has-selection">${e.selectedCount}</span>`:t>0?h`<span class="count-chip">${t}</span>`:g}
          <ha-icon
            class="chevron ${n?`collapsed`:``}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        ${n?g:h`
                <div class="block-body">
                  <div class="row-list">
                    ${e.areaSensors.length>0||e.externalSensors.length>0?h`
                            ${e.areaSensors.map(t=>this._renderEditRow(t.entity_id,e.kind,!1))}
                            ${e.externalSensors.map(t=>this._renderEditRow(t,e.kind,!0))}
                          `:h`<div class="empty-row">${e.emptyText}</div>`}
                  </div>
                  ${e.extras??g}
                </div>
              `}
      </div>
    `}_toggleBlock(e){let t=this._collapsed[e]??!0;this._collapsed={...this._collapsed,[e]:!t}}_renderEditRow(e,t,n){let r=this.hass.states[e],i=r?.attributes?.friendly_name||e,a=this.hass.language;if(t===`occupancy`||t===`window`){let o=(t===`occupancy`?this.occupancySensors:this.windowSensors).has(e),s=r?.state===`on`,c=t===`window`?`occupancy-dot window-dot`:`occupancy-dot`,l=n=>t===`occupancy`?this._onOccupancyToggle(e,n):this._onWindowToggle(e,n);return h`
        <div
          class="row ${o?`selected`:``}"
          @click=${e=>{e.target.tagName!==`HA-CHECKBOX`&&l(!o)}}
        >
          <ha-checkbox
            .checked=${o}
            @change=${e=>{let t=e.target;l(t.checked)}}
          ></ha-checkbox>
          <div class="row-info">
            <div class="row-name-line">
              <span class="row-name">${i}</span>
              ${n?h`<span class="external-badge"
                      >${C(`devices.other_area`,a)}</span
                    >`:g}
            </div>
            <div class="row-eid">${e}</div>
          </div>
          <span class="${c} ${s?`on`:`off`}"></span>
        </div>
      `}let o=(t===`temp`?this.temperatureSensor:this.humiditySensor)===e,s=t===`temp`?w(this.hass):`%`,c=e.startsWith(`climate.`)?r?.attributes?.current_temperature:r?.state,l=c&&c!==`unknown`&&c!==`unavailable`?`${t===`humidity`?Math.round(Number(c)):Number(c).toFixed(1)}${s}`:``;return h`
      <div
        class="row ${o?`selected`:``}"
        @click=${()=>this._onSensorSelected(o?``:e,t)}
      >
        <ha-radio .checked=${o} name="${t}-sensor"></ha-radio>
        <div class="row-info">
          <div class="row-name-line">
            <span class="row-name">${i}</span>
            ${n?h`<span class="external-badge">${C(`devices.other_area`,a)}</span>`:g}
          </div>
          <div class="row-eid">${e}</div>
        </div>
        ${l?h`<span class="value-chip">${l}</span>`:g}
      </div>
    `}_onSensorSelected(e,t){let n=t===`temp`?`temperature_sensor`:`humidity_sensor`;this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:n,value:e},bubbles:!0,composed:!0}))}_onOccupancyToggle(e,t){let n=new Set(this.occupancySensors);t?n.add(e):n.delete(e),this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`occupancy_sensors`,value:[...n]},bubbles:!0,composed:!0}))}_onWindowToggle(e,t){let n=new Set(this.windowSensors);t?n.add(e):n.delete(e),this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_sensors`,value:[...n]},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],V.prototype,`hass`,void 0),j([b({attribute:!1})],V.prototype,`area`,void 0),j([b({type:String})],V.prototype,`temperatureSensor`,void 0),j([b({type:String})],V.prototype,`humiditySensor`,void 0),j([b({attribute:!1})],V.prototype,`occupancySensors`,void 0),j([b({attribute:!1})],V.prototype,`windowSensors`,void 0),j([b({type:Number})],V.prototype,`windowOpenDelay`,void 0),j([b({type:Number})],V.prototype,`windowCloseDelay`,void 0),j([b({type:String})],V.prototype,`heatingSystemType`,void 0),j([b({type:Boolean})],V.prototype,`editing`,void 0),j([b()],V.prototype,`language`,void 0),j([x()],V.prototype,`_pickerOpen`,void 0),j([x()],V.prototype,`_collapsed`,void 0),V=j([y(`rme-sensor-section`)],V),v(),S(),M();var Wt=class extends _{constructor(...e){super(...e),this.label=``,this.hint=``}static{this.styles=l`
    :host {
      display: inline-block;
    }

    .badge {
      font-size: 10px;
      font-weight: 600;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      padding: 2px 6px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: default;
    }
  `}render(){return h`<span class="badge" title=${this.hint}>${this.label}</span>`}};j([b({type:String})],Wt.prototype,`label`,void 0),j([b({type:String})],Wt.prototype,`hint`,void 0),Wt=j([y(`rme-badge`)],Wt),v(),S(),M();var Gt=`M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z`,Kt=class extends _{constructor(...e){super(...e),this.icon=``,this.heading=``,this.badge=``,this.badgeHint=``,this.editable=!1}static{this.styles=l`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
      min-width: 0;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 20px 12px;
    }

    .section-icon {
      --mdc-icon-size: 18px;
      opacity: 0.7;
    }

    .section-title {
      font-size: 15px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin: 0;
      flex: 1;
    }

    .edit-btn {
      --mdc-icon-button-size: 32px;
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      margin: -4px -8px -4px 0;
      transition: opacity 0.15s ease;
    }

    @media (hover: hover) {
      .edit-btn {
        opacity: 0;
      }

      ha-card:hover .edit-btn,
      ha-card:focus-within .edit-btn {
        opacity: 1;
      }
    }

    .section-body {
      padding: 0 20px 20px;
    }
  `}render(){return h`
      <ha-card>
        <div class="section-header">
          <ha-icon class="section-icon" icon=${this.icon}></ha-icon>
          <h3 class="section-title">${this.heading}</h3>
          ${this.badge?h`<rme-badge .label=${this.badge} .hint=${this.badgeHint}></rme-badge>`:g}
          <slot name="header-extras"></slot>
          ${this.editable?h`
                  <ha-icon-button
                    class="edit-btn"
                    .path=${Gt}
                    @click=${this._onEditClick}
                  ></ha-icon-button>
                `:g}
        </div>
        <div class="section-body">
          <slot></slot>
        </div>
      </ha-card>
    `}_onEditClick(){this.dispatchEvent(new CustomEvent(`edit-click`,{bubbles:!0,composed:!0}))}};j([b({type:String})],Kt.prototype,`icon`,void 0),j([b({type:String})],Kt.prototype,`heading`,void 0),j([b({type:String})],Kt.prototype,`badge`,void 0),j([b({type:String})],Kt.prototype,`badgeHint`,void 0),j([b({type:Boolean})],Kt.prototype,`editable`,void 0),Kt=j([y(`rme-section-card`)],Kt),v(),S(),M();var H=class extends _{constructor(...e){super(...e),this.climateMode=`auto`,this.comfortHeat=21,this.comfortCool=24,this.ecoHeat=17,this.ecoCool=27,this.language=`en`,this._overridePending=null,this._overrideCustomHeat=21,this._overrideCustomCool=24,this._overrideError=``,this._optimisticOverride=null,this._optimisticClear=!1}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .override-divider {
        border: none;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        margin: 16px 0 12px;
      }

      .override-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 10px;
      }

      .override-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .override-preset {
        cursor: pointer;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        padding: 6px 12px;
        font-size: 13px;
        background: transparent;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 6px;
        transition:
          background 0.15s,
          border-color 0.15s;
      }

      .override-preset:hover {
        background: rgba(0, 0, 0, 0.04);
      }

      .override-preset.pending {
        border-color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
      }

      .override-preset.active.boost {
        border-color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
      }

      .override-preset.active.eco {
        border-color: #4caf50;
        background: rgba(76, 175, 80, 0.15);
        color: #4caf50;
      }

      .override-preset.active.custom {
        border-color: #2196f3;
        background: rgba(33, 150, 243, 0.15);
        color: #2196f3;
      }

      .override-preset:disabled {
        opacity: 0.35;
        cursor: default;
      }

      .override-preset:disabled:hover {
        background: transparent;
      }

      .override-preset ha-icon {
        --mdc-icon-size: 16px;
      }

      .override-target {
        display: block;
        width: 160px;
        margin-top: 12px;
      }

      .override-duration {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
        align-items: center;
      }

      .override-duration-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .override-dur-chips {
        display: flex;
        gap: 6px;
      }

      .override-dur-chip {
        cursor: pointer;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 500;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        transition:
          border-color 0.15s ease,
          background 0.15s ease;
      }

      .override-dur-chip:hover {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(3, 169, 244, 0.4);
      }

      .override-dur-chip:disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .override-error {
        color: var(--error-color, #d32f2f);
        font-size: 12px;
        margin-top: 6px;
      }
    `]}updated(e){if(e.has(`config`)&&this.config?.live){let e=this.config.live;this._optimisticOverride&&e.override_active&&(this._optimisticOverride=null),this._optimisticClear&&!e.override_active&&(this._optimisticClear=!1)}}getEffectiveOverride(){if(this._optimisticClear)return{active:!1,type:null,heat:null,cool:null,until:null};if(this._optimisticOverride)return{active:!0,type:this._optimisticOverride.type,heat:this._optimisticOverride.heat,cool:this._optimisticOverride.cool,until:this._optimisticOverride.until};let e=this.config?.live;return e?.override_active&&e.override_type?{active:!0,type:e.override_type,heat:e.override_heat,cool:e.override_cool,until:e.override_until}:{active:!1,type:null,heat:null,cool:null,until:null}}render(){let e=this.getEffectiveOverride();return h`
      <hr class="override-divider" />
      <div class="override-label">${C(`override.label`,this.language)}</div>
      ${this._renderOverrideButtons(e)}
      ${this._overrideError?h`<div class="override-error">${this._overrideError}</div>`:g}
    `}_renderOverrideButtons(e){let t=e.active?e.type:null,n=!t&&this._overridePending;return h`
      <div class="override-presets">
        ${[`boost`,`eco`,`custom`].map(e=>{let n=t===e,r=t!==null&&!n,i=!t&&this._overridePending===e;return h`
            <button
              class="override-preset ${e} ${n?`active`:``} ${i?`pending`:``}"
              ?disabled=${r}
              @click=${()=>n?this._onClearOverride():this._onOverridePreset(e)}
            >
              <ha-icon
                icon=${e===`boost`?`mdi:fire`:e===`eco`?`mdi:leaf`:`mdi:thermometer`}
              ></ha-icon>
              ${C(e===`boost`?`override.comfort`:e===`eco`?`override.eco`:`override.custom`,this.language)}
            </button>
          `})}
      </div>
      ${n?h`
              ${this._overridePending===`custom`?this._renderCustomInputs():g}
              <div class="override-duration">
                <span class="override-duration-label"
                  >${C(`override.activate_for`,this.language)}</span
                >
                <div class="override-dur-chips">
                  ${[{label:`1h`,hours:1},{label:`2h`,hours:2},{label:`4h`,hours:4}].map(e=>h`
                      <button
                        class="override-dur-chip"
                        @click=${()=>this._onOverrideActivate(e.hours)}
                      >
                        ${e.label}
                      </button>
                    `)}
                </div>
              </div>
            `:g}
    `}_renderCustomInputs(){let e=A(5,35,this.hass),t=h`
      <ha-textfield
        class="override-target"
        type="number"
        .label=${C(this.climateMode===`auto`?`override.heat_to`:`override.target`,this.language)}
        .suffix=${w(this.hass)}
        min=${e.min}
        max=${e.max}
        step=${k(this.hass)}
        .value=${String(T(this._overrideCustomHeat,this.hass))}
        @input=${this._onCustomHeatInput}
      ></ha-textfield>
    `,n=h`
      <ha-textfield
        class="override-target"
        type="number"
        .label=${C(this.climateMode===`auto`?`override.cool_above`:`override.target`,this.language)}
        .suffix=${w(this.hass)}
        min=${e.min}
        max=${e.max}
        step=${k(this.hass)}
        .value=${String(T(this._overrideCustomCool,this.hass))}
        @input=${this._onCustomCoolInput}
      ></ha-textfield>
    `;return this.climateMode===`heat_only`?t:this.climateMode===`cool_only`?n:h`${t} ${n}`}_onOverridePreset(e){this._overridePending===e?this._overridePending=null:(this._overridePending=e,e===`custom`&&(this._overrideCustomHeat=this.comfortHeat,this._overrideCustomCool=this.comfortCool)),this._overrideError=``}_onCustomHeatInput(e){this._overrideCustomHeat=E(Number(e.target.value)||T(21,this.hass),this.hass)}_onCustomCoolInput(e){this._overrideCustomCool=E(Number(e.target.value)||T(24,this.hass),this.hass)}async _onOverrideActivate(e){if(!this._overridePending||!this.config)return;let t=this._overridePending,n,r;if(t===`boost`?(n=this.comfortHeat,r=this.comfortCool):t===`eco`?(n=this.ecoHeat,r=this.ecoCool):(n=this._overrideCustomHeat,r=this._overrideCustomCool),this.climateMode===`heat_only`&&(r=null),this.climateMode===`cool_only`&&(n=null),n!=null&&r!=null&&r<n){this._overrideError=C(`override.invalid_band`,this.language);return}this._optimisticOverride={type:t,heat:n,cool:r,until:Date.now()/1e3+e*3600},this._optimisticClear=!1,this._overridePending=null,this._overrideError=``;let i={type:`roommind_eklabs/override/set`,area_id:this.config.area_id,override_type:t,duration:e};t===`custom`&&(this.climateMode!==`cool_only`&&(i.heat=this._overrideCustomHeat),this.climateMode!==`heat_only`&&(i.cool=this._overrideCustomCool));try{await this.hass.callWS(i),this._fireRoomUpdated()}catch(e){this._optimisticOverride=null,this._overrideError=e instanceof Error?e.message:C(`override.error_set`,this.language),console.error(`Override set failed:`,e)}}async _onClearOverride(){if(this.config){this._optimisticClear=!0,this._optimisticOverride=null,this._overrideError=``;try{await this.hass.callWS({type:`roommind_eklabs/override/clear`,area_id:this.config.area_id}),this._fireRoomUpdated()}catch(e){this._optimisticClear=!1,this._overrideError=e instanceof Error?e.message:C(`override.error_clear`,this.language),console.error(`Override clear failed:`,e)}}}_fireRoomUpdated(){this.dispatchEvent(new CustomEvent(`room-updated`,{bubbles:!0,composed:!0}))}};j([b({attribute:!1})],H.prototype,`hass`,void 0),j([b({attribute:!1})],H.prototype,`config`,void 0),j([b()],H.prototype,`climateMode`,void 0),j([b({type:Number})],H.prototype,`comfortHeat`,void 0),j([b({type:Number})],H.prototype,`comfortCool`,void 0),j([b({type:Number})],H.prototype,`ecoHeat`,void 0),j([b({type:Number})],H.prototype,`ecoCool`,void 0),j([b()],H.prototype,`language`,void 0),j([x()],H.prototype,`_overridePending`,void 0),j([x()],H.prototype,`_overrideCustomHeat`,void 0),j([x()],H.prototype,`_overrideCustomCool`,void 0),j([x()],H.prototype,`_overrideError`,void 0),j([x()],H.prototype,`_optimisticOverride`,void 0),j([x()],H.prototype,`_optimisticClear`,void 0),H=j([y(`rme-override-section`)],H),v(),S(),M();var qt=class extends _{constructor(...e){super(...e),this.label=``,this.hint=``,this.checked=!1,this.disabled=!1}static{this.styles=l`
    :host {
      display: block;
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .toggle-text {
      display: flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .toggle-label {
      font-weight: 500;
    }

    ha-switch {
      flex-shrink: 0;
    }
  `}render(){return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${this.label}</span>
          ${this.hint?h`<rme-info-icon .text=${this.hint}></rme-info-icon>`:g}
        </div>
        <ha-switch
          .checked=${this.checked}
          .disabled=${this.disabled}
          @change=${this._onToggle}
        ></ha-switch>
      </div>
    `}_onToggle(e){this.dispatchEvent(new CustomEvent(`toggle-changed`,{detail:e.target.checked,bubbles:!0,composed:!0}))}};j([b({type:String})],qt.prototype,`label`,void 0),j([b({type:String})],qt.prototype,`hint`,void 0),j([b({type:Boolean})],qt.prototype,`checked`,void 0),j([b({type:Boolean})],qt.prototype,`disabled`,void 0),qt=j([y(`rme-toggle-row`)],qt),v(),S(),M();var U=class extends _{constructor(...e){super(...e),this.presenceEnabled=!1,this.presencePersons=[],this.selectedPresencePersons=[],this.ignorePresence=!1,this.editing=!1,this.language=`en`}static{this.styles=l`
    :host {
      display: block;
    }

    .presence-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
      margin-top: 12px;
    }

    .presence-card {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px 8px 6px;
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      background: var(--card-background-color);
      cursor: pointer;
      transition:
        border-color 0.15s ease,
        background 0.15s ease;
      user-select: none;
    }

    .presence-card:hover {
      background: rgba(255, 255, 255, 0.03);
    }

    .presence-card.active {
      border-color: rgba(3, 169, 244, 0.4);
      background: rgba(3, 169, 244, 0.08);
    }

    .presence-card ha-checkbox {
      flex-shrink: 0;
    }

    .person-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .presence-card.active .person-icon {
      color: var(--primary-color);
    }

    .person-name {
      flex: 1;
      font-size: 14px;
      font-weight: 450;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .presence-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .presence-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .presence-row.home {
      background: rgba(76, 175, 80, 0.1);
    }

    .presence-row.away {
      background: rgba(0, 0, 0, 0.04);
    }

    .presence-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .presence-row.home .presence-dot {
      background: #4caf50;
      box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }

    .presence-row.away .presence-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }

    .presence-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .presence-row.home .presence-name {
      color: var(--primary-text-color);
    }

    .presence-row.away .presence-name {
      color: var(--secondary-text-color);
    }

    .presence-state {
      font-size: 12px;
      white-space: nowrap;
    }

    .presence-row.home .presence-state {
      color: #2e7d32;
    }

    .presence-row.away .presence-state {
      color: var(--secondary-text-color);
    }

    .section-divider {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      margin: 8px 0;
    }

    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .presence-card.missing {
      border-color: var(--warning-color, #ff9800);
    }

    .missing-icon {
      --mdc-icon-size: 16px;
      color: var(--warning-color, #ff9800);
      flex-shrink: 0;
    }

    .missing-hint {
      margin-top: 8px;
      color: var(--secondary-text-color);
      font-size: 12px;
    }
  `}get _allPersons(){let e=this.selectedPresencePersons.filter(e=>!this.presencePersons.includes(e));return[...this.presencePersons,...e]}_isMissing(e){return!this.hass.states[e]}render(){return!this.presenceEnabled||!this.editing&&this._allPersons.length===0?g:this.editing?h`
      <rme-toggle-row
        .label=${C(`presence.ignore_toggle`,this.language)}
        .checked=${this.ignorePresence}
        @toggle-changed=${this._onIgnoreToggle}
      ></rme-toggle-row>
      ${this.ignorePresence?g:h`<div class="section-divider"></div>
              ${this._renderEditMode()}`}
    `:this.ignorePresence?h`<span class="field-hint"
          >${C(`presence.tile_ignored`,this.language)}</span
        >`:this._renderViewMode()}_renderEditMode(){let e=this._allPersons,t=e.some(e=>this._isMissing(e));return h`
      <div class="presence-grid">
        ${e.map(e=>{let t=this.selectedPresencePersons.includes(e),n=this._isMissing(e),r=this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`);return h`
            <div
              class="presence-card ${t?`active`:``} ${n?`missing`:``}"
              role="checkbox"
              tabindex="0"
              aria-checked=${t}
              @click=${()=>this._onTogglePerson(e,t)}
              @keydown=${n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),this._onTogglePerson(e,t))}}
            >
              <ha-checkbox
                .checked=${t}
                tabindex="-1"
                @click=${e=>e.stopPropagation()}
                @change=${()=>this._onTogglePerson(e,t)}
              ></ha-checkbox>
              <ha-icon class="person-icon" icon="mdi:account"></ha-icon>
              <span class="person-name">${r}</span>
              ${n?this._renderMissingIcon():g}
            </div>
          `})}
      </div>
      ${t?h`<div class="missing-hint">
              ${C(`presence.missing_entity_hint`,this.language)}
            </div>`:g}
    `}_renderMissingIcon(){return h`<ha-icon
      class="missing-icon"
      icon="mdi:alert-circle-outline"
      title=${C(`presence.missing_entity_hint`,this.language)}
    ></ha-icon>`}_renderViewMode(){return this.selectedPresencePersons.length===0?h`<span class="field-hint"
        >${C(`presence.room_none_assigned`,this.language)}</span
      >`:h`
      <div class="presence-list">
        ${this.selectedPresencePersons.map(e=>{let t=this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`),n=this.hass.states[e]?.state,r=e.startsWith(`person.`)||e.startsWith(`device_tracker.`)?n===`home`:n===`on`;return h`
            <div class="presence-row ${r?`home`:`away`}">
              <span class="presence-dot"></span>
              <span class="presence-name">${t}</span>
              ${this._isMissing(e)?this._renderMissingIcon():g}
              <span class="presence-state"
                >${C(r?`presence.state_home`:`presence.state_away`,this.language)}</span
              >
            </div>
          `})}
      </div>
    `}_onIgnoreToggle(e){this.dispatchEvent(new CustomEvent(`ignore-presence-changed`,{detail:e.detail,bubbles:!0,composed:!0}))}_onTogglePerson(e,t){let n;n=t?this.selectedPresencePersons.filter(t=>t!==e):[...this.selectedPresencePersons,e],this.dispatchEvent(new CustomEvent(`presence-persons-changed`,{detail:n,bubbles:!0,composed:!0}))}};j([b({attribute:!1})],U.prototype,`hass`,void 0),j([b({type:Boolean})],U.prototype,`presenceEnabled`,void 0),j([b({attribute:!1})],U.prototype,`presencePersons`,void 0),j([b({attribute:!1})],U.prototype,`selectedPresencePersons`,void 0),j([b({type:Boolean})],U.prototype,`ignorePresence`,void 0),j([b({type:Boolean})],U.prototype,`editing`,void 0),j([b()],U.prototype,`language`,void 0),U=j([y(`rme-presence-section`)],U),v(),S(),M();var Jt=class extends _{constructor(...e){super(...e),this.label=``,this.suffix=``,this.hint=``}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      ha-textfield {
        display: block;
        flex: 1;
        min-width: 0;
      }

      rme-info-icon {
        flex-shrink: 0;
      }
    `]}render(){return h`
      <div class="row">
        <ha-textfield
          .label=${this.label}
          .suffix=${this.suffix}
          .value=${this.value==null?``:String(this.value)}
          .min=${this.min==null?``:String(this.min)}
          .max=${this.max==null?``:String(this.max)}
          .step=${this.step==null?``:String(this.step)}
          type="number"
          @input=${this._onInput}
        ></ha-textfield>
        ${this.hint?h`<rme-info-icon .text=${this.hint}></rme-info-icon>`:g}
      </div>
    `}_onInput(e){let t=parseFloat(e.target.value);isNaN(t)||this.dispatchEvent(new CustomEvent(`value-changed`,{detail:t,bubbles:!0,composed:!0}))}};j([b({type:String})],Jt.prototype,`label`,void 0),j([b({type:String})],Jt.prototype,`suffix`,void 0),j([b({type:Number})],Jt.prototype,`value`,void 0),j([b({type:Number})],Jt.prototype,`min`,void 0),j([b({type:Number})],Jt.prototype,`max`,void 0),j([b({type:Number})],Jt.prototype,`step`,void 0),j([b({type:String})],Jt.prototype,`hint`,void 0),Jt=j([y(`rme-threshold-field`)],Jt),v(),S(),M();var Yt=class extends It{constructor(...e){super(...e),this.schedules=[]}static{this.styles=[It.sharedStyles,R,l`
      .pos-badge {
        font-size: 0.8em;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--primary-color);
        color: var(--text-primary-color);
        flex-shrink: 0;
      }
      .gate-badge {
        font-size: 0.8em;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--accent-color, var(--primary-color));
        color: var(--text-primary-color);
        opacity: 0.8;
        flex-shrink: 0;
      }
      .mode-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 4px 0 0;
      }
      @media (max-width: 480px) {
        .mode-row {
          grid-template-columns: 1fr;
        }
      }
      .mode-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        font-size: 13px;
        cursor: pointer;
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        transition:
          border-color 0.15s ease,
          background 0.15s ease;
      }
      .mode-option.active {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.08);
      }
    `]}render(){return this.editing?this._renderEdit():this._renderView()}_renderView(){let e=this.hass.language;if(this.schedules.length===0)return g;let t=this.schedules.length>=2;return h`
      <div class="schedule-list">
        ${this.schedules.map((n,r)=>{let i=this._getScheduleState(r,this.schedules.length),a=n.mode===`gate`,o=a?null:this._getBlockPosition(n.entity_id);return h`
            <div class="schedule-row ${i}">
              ${t?h`<span class="schedule-number">${r+1}</span>`:g}
              <span class="schedule-status-dot"></span>
              <span
                class="schedule-name schedule-link"
                @click=${()=>this._openEntityInfo(n.entity_id)}
                >${this._getFriendlyName(n.entity_id)}</span
              >
              ${a?h`<span class="gate-badge"
                      >${C(`covers.schedule_mode_gate_short`,e)}</span
                    >`:o===null?g:h`<span class="pos-badge">${o}%</span>`}
              <span class="schedule-status">${this._statusText(i,e)}</span>
            </div>
          `})}
      </div>
    `}_renderEdit(){let e=this.hass.language,t=this.schedules.length,n=new Set(this.schedules.map(e=>e.entity_id));return h`
      ${t>0?h`
              <div class="schedule-list">
                ${this.schedules.map((n,r)=>{let i=this._getScheduleState(r,t);return h`
                    <div class="schedule-row ${i}">
                      ${t>=2?h`<span class="schedule-number">${r+1}</span>`:g}
                      <span class="schedule-status-dot"></span>
                      <span class="schedule-name">${this._getFriendlyName(n.entity_id)}</span>
                      <span class="schedule-status">${this._statusText(i,e)}</span>
                      ${this._renderScheduleControls(r,t,(e,t)=>this._moveSchedule(e,t),e=>this._removeSchedule(e))}
                    </div>
                    <div class="mode-row">
                      <div
                        class="mode-option ${(n.mode??`force`)===`force`?`active`:``}"
                        role="radio"
                        tabindex="0"
                        aria-checked=${(n.mode??`force`)===`force`}
                        @click=${()=>this._updateMode(r,`force`)}
                        @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._updateMode(r,`force`))}}
                      >
                        <ha-radio
                          .checked=${(n.mode??`force`)===`force`}
                          tabindex="-1"
                        ></ha-radio>
                        ${C(`covers.schedule_mode_force`,e)}
                      </div>
                      <div
                        class="mode-option ${n.mode===`gate`?`active`:``}"
                        role="radio"
                        tabindex="0"
                        aria-checked=${n.mode===`gate`}
                        @click=${()=>this._updateMode(r,`gate`)}
                        @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._updateMode(r,`gate`))}}
                      >
                        <ha-radio .checked=${n.mode===`gate`} tabindex="-1"></ha-radio>
                        ${C(`covers.schedule_mode_gate`,e)}
                      </div>
                    </div>
                  `})}
              </div>
            `:g}
      ${this._renderAddRow(C(`covers.add_schedule`,e),this._getAvailableEntities(n),e=>this._addSchedule(e),C(`covers.schedule_create_link`,e))}
      ${this._renderSelectorSection(t,C(`covers.schedule_selector`,e),C(`covers.schedule_selector_hint`,e),C(`covers.schedule_selector_warning`,e),e=>this._emitSelectorChanged(e))}
    `}_getBlockPosition(e){let t=this.hass?.states?.[e];if(!t||t.state!==`on`)return null;let n=t.attributes?.position;return n==null?null:Number(n)}_statusText(e,t){return C(e===`active`?`covers.schedule_state_active`:e===`unreachable`?`covers.schedule_state_unreachable`:`covers.schedule_state_inactive`,t)}_addSchedule(e){this._emitSchedules([...this.schedules,{entity_id:e,mode:`force`}])}_removeSchedule(e){this._emitSchedules(this.schedules.filter((t,n)=>n!==e))}_moveSchedule(e,t){let n=e+t;if(n<0||n>=this.schedules.length)return;let r=[...this.schedules];[r[e],r[n]]=[r[n],r[e]],this._emitSchedules(r)}_updateMode(e,t){let n=this.schedules.map((n,r)=>r===e?{...n,mode:t}:n);this._emitSchedules(n)}_emitSchedules(e){this.dispatchEvent(new CustomEvent(`cover-schedules-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_emitSelectorChanged(e){this.dispatchEvent(new CustomEvent(`cover-schedule-selector-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],Yt.prototype,`schedules`,void 0),Yt=j([y(`rme-cover-schedule`)],Yt),v(),S(),M();var Xt,W=class extends _{static{Xt=this}constructor(...e){super(...e),this.selectedCovers=new Set,this.editing=!1,this.autoEnabled=!1,this.deployThreshold=1.5,this.minPosition=0,this.overrideMinutes=60,this.autoPaused=!1,this.overrideUntil=null,this.coverSchedules=[],this.coverScheduleSelectorEntity=``,this.activeCoverScheduleIndex=-1,this.nightClose=!1,this.nightPosition=0,this.snapDeploy=!1,this.forcedReason=``,this.coverOrientations={},this.nightCloseElevation=0,this.nightCloseOffsetMinutes=0,this.outdoorMinTemp=10,this.coverMinPositions={},this._selectedForEdit=``,this._scheduleCollapsed=!0,this._solarCollapsed=!0,this._entityFilter=e=>{let t=e.entity_id;return!t.startsWith(`cover.roommind_`)&&t.startsWith(`cover.`)&&!this.selectedCovers.has(t)}}willUpdate(e){e.has(`selectedCovers`)&&(this._selectedForEdit&&!this.selectedCovers.has(this._selectedForEdit)&&(this._selectedForEdit=``),!this._selectedForEdit&&this.selectedCovers.size>0&&(this._selectedForEdit=[...this.selectedCovers][0]))}static{this.styles=[Bt,R,l`
      :host {
        display: block;
      }

      /* Tile view rows (match rme-sensor-section visual rhythm) */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .view-pill {
        font-size: 10px;
        font-weight: 500;
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--secondary-text-color);
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
        color: var(--primary-text-color);
      }

      /* Device-row style (matches rme-device-section) */
      .device-list-scroll {
        max-height: 210px;
        overflow-y: auto;
      }
      .device-row {
        display: flex;
        align-items: center;
        padding: 4px 0;
        margin-bottom: 2px;
        border-radius: 8px;
        transition: background 0.15s;
      }
      .device-row:hover {
        background: rgba(0, 0, 0, 0.02);
      }
      .device-row.selected {
        background: rgba(3, 169, 244, 0.035);
      }
      .device-row ha-checkbox {
        flex-shrink: 0;
      }
      .device-info {
        flex: 1;
        min-width: 0;
      }
      .device-name-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .device-name {
        font-size: 14px;
        font-weight: 450;
      }
      .device-value {
        margin-left: auto;
        font-size: 13px;
        font-weight: 500;
        padding-right: 4px;
        white-space: nowrap;
      }
      .device-entity {
        font-family: var(--code-font-family, monospace);
        font-size: 11px;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }
      .external-badge {
        display: inline-flex;
        align-items: center;
        font-size: 10px;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--divider-color, rgba(0, 0, 0, 0.06));
        padding: 1px 6px;
        border-radius: 4px;
        white-space: nowrap;
      }
      .no-devices {
        color: var(--secondary-text-color);
        font-size: 13px;
        padding: 8px 0;
      }

      .entity-picker-wrap {
        margin-top: 8px;
      }
      ha-entity-picker {
        width: 100%;
      }
      .settings-group {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sub-section {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sub-section:first-child {
        margin-top: 8px;
      }
      .sub-section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.3px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }
      .sub-section-header ha-icon {
        --mdc-icon-size: 18px;
      }
      .field-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      @media (max-width: 450px) {
        .field-row {
          grid-template-columns: 1fr;
        }
      }
      .no-items {
        color: var(--secondary-text-color);
        font-size: 0.9em;
        margin: 0;
      }
      .status-hint {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        color: var(--secondary-text-color);
        font-size: 0.85em;
      }
      .status-hint.paused {
        color: var(--warning-color, #ff9800);
      }
      .pill {
        font-size: 10px;
        font-weight: 500;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--divider-color, rgba(0, 0, 0, 0.08));
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      /* Editing layout — feature card + grouped sections */
      .feature-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        transition:
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .feature-card.enabled {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.06);
      }

      .feature-text {
        flex: 1;
        min-width: 0;
      }

      .feature-title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 4px;
      }

      .feature-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        margin: 0;
      }

      .feature-card ha-switch {
        flex-shrink: 0;
      }

      .group-card {
        margin-top: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .group-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--secondary-text-color);
        cursor: pointer;
        user-select: none;
      }

      .group-header > span:first-of-type {
        flex: 1;
        min-width: 0;
      }

      .group-header ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .group-header .chevron {
        transition: transform 0.2s ease;
        margin-left: auto;
      }

      .group-header .chevron.collapsed {
        transform: rotate(-90deg);
      }

      .group-card.collapsed {
        gap: 0;
        padding-bottom: 14px;
      }

      .group-divider {
        height: 1px;
        background: var(--divider-color);
        margin: 4px -16px;
      }
    `]}render(){let e=this.hass.language;return this.editing?this._renderEdit(e):this._renderView(e)}_renderView(e){let t=[...this.selectedCovers];return t.length===0?h`<p class="no-items">${C(`covers.no_covers`,e)}</p>`:h`
      ${t.map(t=>{let n=this.hass.states[t],r=n?.attributes?.friendly_name??t,i=n?.attributes?.current_position,a=this.coverOrientations[t],o=a===void 0?void 0:Xt._DIRECTIONS.find(e=>e.deg===a),s=o?C(o.shortLabel,e):void 0,c=this.coverMinPositions[t];return h`
          <div class="view-row">
            <span class="view-name">${r}</span>
            ${s?h`<span class="view-pill">${s}</span>`:g}
            ${c!==void 0&&c>0?h`<span class="view-pill"
                    >${C(`covers.per_cover_min_short`,e)} ${c}%</span
                  >`:g}
            ${i===void 0?g:h`<span class="view-value">${i}%</span>`}
          </div>
        `})}
      ${this.autoPaused?h`
              <div class="status-hint paused">
                <ha-icon icon="mdi:hand-back-right"></ha-icon>
                <span>
                  ${this.overrideUntil?`${C(`covers.auto_paused_until`,e)} ${new Date(this.overrideUntil*1e3).toLocaleTimeString(e,{hour:`2-digit`,minute:`2-digit`})}`:C(`covers.auto_paused`,e)}
                </span>
                <ha-button @click=${this._onResumeAuto}
                  >${C(`covers.resume_auto`,e)}</ha-button
                >
              </div>
            `:this.autoEnabled?h`
                <div class="status-hint">
                  <ha-icon icon="mdi:sun-angle-outline"></ha-icon>
                  <span>${C(`covers.shading_active`,e)}</span>
                </div>
              `:g}
      ${this.forcedReason===`schedule_active`?h`
              <div class="status-hint">
                <ha-icon icon="mdi:calendar-clock"></ha-icon>
                <span>${C(`covers.schedule_active`,e)}</span>
              </div>
            `:this.forcedReason===`night_close`?h`
                <div class="status-hint">
                  <ha-icon icon="mdi:weather-night"></ha-icon>
                  <span>${C(`covers.night_close_active`,e)}</span>
                </div>
              `:g}
    `}_renderMasterRow(e,t){let n=this.selectedCovers.has(e),r=this._selectedForEdit===e,i=this.hass.states[e],a=i?.attributes?.friendly_name||e,o=i?.attributes?.current_position,s=this.hass.language,c=this.coverOrientations[e],l=c===void 0?void 0:Xt._DIRECTIONS.find(e=>e.deg===c),u=l?C(l.shortLabel,s):``,d=this.coverMinPositions[e];return h`
      <div
        class="master-row ${r?`focused`:``}"
        @click=${()=>this._selectedForEdit=e}
      >
        <ha-checkbox
          .checked=${n}
          @click=${e=>e.stopPropagation()}
          @change=${t=>{let n=t.target;this._onToggle(e,n.checked),n.checked&&(this._selectedForEdit=e)}}
        ></ha-checkbox>
        <div class="master-info">
          <div class="master-name-row">
            <span class="master-name">${a}</span>
            ${t?h`<span class="external-badge">${C(`devices.other_area`,s)}</span>`:g}
          </div>
          <div class="master-meta">
            ${u?h`<span class="meta-pill">${u}</span>`:g}
            ${d!==void 0&&d>0?h`<span class="meta-pill">min ${d}%</span>`:g}
            ${o===void 0?g:h`<span class="meta-pill" style="color: var(--primary-color);">${o}%</span>`}
          </div>
        </div>
      </div>
    `}_renderCoverDetail(e){let t=this.hass.language,n=this.hass.states[e]?.attributes?.friendly_name||e,r=this.coverOrientations[e],i=this.coverMinPositions[e];return h`
      <div class="detail-head">
        <div class="detail-title">${n}</div>
        <div class="detail-entity-id">${e}</div>
      </div>
      <div class="detail-field">
        <ha-select
          .label=${C(`covers.orientation_group_title`,t)}
          .value=${r===void 0?``:String(r)}
          .options=${[{value:``,label:C(`covers.orientation_none`,t)},...Xt._DIRECTIONS.map(e=>({value:String(e.deg),label:C(e.longLabel,t)}))]}
          fixedMenuPosition
          @selected=${t=>{let n=I(t);this._setOrientation(e,n===``?void 0:Number(n))}}
          @closed=${e=>e.stopPropagation()}
        >
          <ha-list-item value="">${C(`covers.orientation_none`,t)}</ha-list-item>
          ${Xt._DIRECTIONS.map(e=>h`
              <ha-list-item value=${String(e.deg)}>${C(e.longLabel,t)}</ha-list-item>
            `)}
        </ha-select>
      </div>
      <div class="detail-field">
        <rme-threshold-field
          .label=${C(`covers.per_cover_min_position`,t)}
          .value=${i??0}
          .min=${0}
          .max=${99}
          .step=${1}
          suffix="%"
          @value-changed=${t=>this._setMinPosition(e,t.detail)}
        ></rme-threshold-field>
      </div>
    `}_renderEdit(e){let t=yt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)).filter(e=>e.entity_id.startsWith(`cover.`)),n=new Set(t.map(e=>e.entity_id)),r=[...this.selectedCovers].filter(e=>!n.has(e)),i=this.selectedCovers.size>0,a=this._selectedForEdit,o=a&&this.selectedCovers.has(a);return h`
      <rme-master-detail>
        <div slot="master" class="master">
          <div class="block-title">${C(`covers.add_cover`,e)}</div>
          <div class="master-list">
            ${t.length>0?t.map(e=>this._renderMasterRow(e.entity_id,!1)):h`<div class="empty-list">${C(`covers.no_covers_in_area`,e)}</div>`}
            ${r.map(e=>this._renderMasterRow(e,!0))}
          </div>
          <div class="picker-wrap">
            <ha-entity-picker
              .hass=${this.hass}
              .includeDomains=${[`cover`]}
              .entityFilter=${this._entityFilter}
              .value=${``}
              .label=${C(`covers.add_cover`,e)}
              @value-changed=${this._onEntityPicked}
            ></ha-entity-picker>
          </div>
        </div>
        <div slot="detail">
          ${o?h`<div class="detail-panel">${this._renderCoverDetail(a)}</div>`:h`<div class="detail-panel">
                  <div class="empty-detail">
                    <ha-icon icon="mdi:gesture-tap"></ha-icon>
                    <span>${C(`devices.select_to_configure`,e)}</span>
                  </div>
                </div>`}
        </div>
      </rme-master-detail>

      ${i?h`
              <div class="block-divider"></div>
              <div class="feature-card ${this.autoEnabled?`enabled`:``}">
                <div class="feature-text">
                  <div class="feature-title">${C(`covers.auto_control`,e)}</div>
                  <div class="feature-description">${C(`covers.auto_control_hint`,e)}</div>
                </div>
                <ha-switch
                  .checked=${this.autoEnabled}
                  @change=${e=>this._emit(`covers_auto_enabled`,e.target.checked)}
                ></ha-switch>
              </div>

              ${this.autoEnabled?h`
                      <div class="group-card ${this._scheduleCollapsed?`collapsed`:``}">
                        <div
                          class="group-header"
                          @click=${()=>this._scheduleCollapsed=!this._scheduleCollapsed}
                        >
                          <ha-icon icon="mdi:calendar-clock"></ha-icon>
                          <span>${C(`covers.schedule_group_title`,e)}</span>
                          <rme-info-icon
                            .text=${C(`covers.schedule_section_hint`,e)}
                          ></rme-info-icon>
                          <ha-icon
                            class="chevron ${this._scheduleCollapsed?`collapsed`:``}"
                            icon="mdi:chevron-down"
                          ></ha-icon>
                        </div>
                        ${this._scheduleCollapsed?g:h`<rme-cover-schedule
                                  .hass=${this.hass}
                                  .schedules=${this.coverSchedules}
                                  .selectorEntity=${this.coverScheduleSelectorEntity}
                                  .activeIndex=${this.activeCoverScheduleIndex}
                                  .editing=${!0}
                                  @cover-schedules-changed=${e=>this._emit(`cover_schedules`,e.detail.value)}
                                  @cover-schedule-selector-changed=${e=>this._emit(`cover_schedule_selector_entity`,e.detail.value)}
                                ></rme-cover-schedule>
                                <div class="group-divider"></div>
                                <rme-toggle-row
                                  .label=${C(`covers.night_close`,e)}
                                  .hint=${C(`covers.night_close_hint`,e)}
                                  .checked=${this.nightClose}
                                  @toggle-changed=${e=>this._emit(`covers_night_close`,e.detail)}
                                ></rme-toggle-row>
                                ${this.nightClose?h`
                                        <rme-threshold-field
                                          .label=${C(`covers.night_position`,e)}
                                          .hint=${C(`covers.night_position_hint`,e)}
                                          .value=${this.nightPosition}
                                          .min=${0}
                                          .max=${100}
                                          .step=${5}
                                          suffix="%"
                                          @value-changed=${e=>this._emit(`covers_night_position`,e.detail)}
                                        ></rme-threshold-field>
                                        <ha-expansion-panel
                                          .header=${C(`covers.night_close_advanced`,e)}
                                          outlined
                                        >
                                          <div class="field-row" style="padding:8px 0;">
                                            <rme-threshold-field
                                              .label=${C(`covers.night_close_elevation`,e)}
                                              .hint=${C(`covers.night_close_elevation_hint`,e)}
                                              .value=${this.nightCloseElevation}
                                              .min=${-18}
                                              .max=${10}
                                              .step=${1}
                                              suffix="°"
                                              @value-changed=${e=>this._emit(`covers_night_close_elevation`,e.detail)}
                                            ></rme-threshold-field>
                                            <rme-threshold-field
                                              .label=${C(`covers.night_close_offset`,e)}
                                              .hint=${C(`covers.night_close_offset_hint`,e)}
                                              .value=${this.nightCloseOffsetMinutes}
                                              .min=${-120}
                                              .max=${120}
                                              .step=${5}
                                              suffix="min"
                                              @value-changed=${e=>this._emit(`covers_night_close_offset_minutes`,e.detail)}
                                            ></rme-threshold-field>
                                          </div>
                                        </ha-expansion-panel>
                                      `:g}`}
                      </div>

                      <div class="group-card ${this._solarCollapsed?`collapsed`:``}">
                        <div
                          class="group-header"
                          @click=${()=>this._solarCollapsed=!this._solarCollapsed}
                        >
                          <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                          <span>${C(`covers.solar_group_title`,e)}</span>
                          <ha-icon
                            class="chevron ${this._solarCollapsed?`collapsed`:``}"
                            icon="mdi:chevron-down"
                          ></ha-icon>
                        </div>
                        ${this._solarCollapsed?g:h`<div class="field-row">
                                  <rme-threshold-field
                                    .label=${C(`covers.deploy_threshold`,e)}
                                    .hint=${C(`covers.deploy_threshold_hint`,e)}
                                    .value=${this.deployThreshold}
                                    .min=${.5}
                                    .max=${5}
                                    .step=${.5}
                                    suffix="°C"
                                    @value-changed=${e=>this._emit(`covers_deploy_threshold`,e.detail)}
                                  ></rme-threshold-field>
                                  <rme-threshold-field
                                    .label=${C(`covers.min_position`,e)}
                                    .hint=${C(`covers.min_position_hint`,e)}
                                    .value=${this.minPosition}
                                    .min=${0}
                                    .max=${80}
                                    .step=${5}
                                    suffix="%"
                                    @value-changed=${e=>this._emit(`covers_min_position`,e.detail)}
                                  ></rme-threshold-field>
                                </div>
                                <div class="field-row">
                                  <rme-threshold-field
                                    .label=${C(`covers.override_minutes`,e)}
                                    .hint=${C(`covers.override_minutes_hint`,e)}
                                    .value=${this.overrideMinutes}
                                    .min=${0}
                                    .max=${480}
                                    .step=${15}
                                    suffix="min"
                                    @value-changed=${e=>this._emit(`covers_override_minutes`,e.detail)}
                                  ></rme-threshold-field>
                                  <rme-threshold-field
                                    .label=${C(`covers.outdoor_min_temp`,e)}
                                    .hint=${C(`covers.outdoor_min_temp_hint`,e)}
                                    .value=${this.outdoorMinTemp??10}
                                    .min=${0}
                                    .max=${35}
                                    .step=${1}
                                    suffix="°C"
                                    @value-changed=${e=>this._emit(`covers_outdoor_min_temp`,e.detail)}
                                  ></rme-threshold-field>
                                </div>
                                <div class="group-divider"></div>
                                <rme-toggle-row
                                  .label=${C(`covers.snap_deploy`,e)}
                                  .hint=${C(`covers.snap_deploy_hint`,e)}
                                  .checked=${this.snapDeploy}
                                  @toggle-changed=${e=>this._emit(`covers_snap_deploy`,e.detail)}
                                ></rme-toggle-row>`}
                      </div>
                    `:g}
            `:g}
    `}static{this._DIRECTIONS=[{shortLabel:`covers.orientation_N`,longLabel:`covers.orientation_N_full`,deg:0},{shortLabel:`covers.orientation_NE`,longLabel:`covers.orientation_NE_full`,deg:45},{shortLabel:`covers.orientation_E`,longLabel:`covers.orientation_E_full`,deg:90},{shortLabel:`covers.orientation_SE`,longLabel:`covers.orientation_SE_full`,deg:135},{shortLabel:`covers.orientation_S`,longLabel:`covers.orientation_S_full`,deg:180},{shortLabel:`covers.orientation_SW`,longLabel:`covers.orientation_SW_full`,deg:225},{shortLabel:`covers.orientation_W`,longLabel:`covers.orientation_W_full`,deg:270},{shortLabel:`covers.orientation_NW`,longLabel:`covers.orientation_NW_full`,deg:315}]}_setMinPosition(e,t){let n={...this.coverMinPositions};n[e]=t,this._emit(`cover_min_positions`,n)}_setOrientation(e,t){let n={...this.coverOrientations};t===void 0?delete n[e]:n[e]=t,this._emit(`cover_orientations`,n)}_onEntityPicked(e){e.stopPropagation();let t=e.detail.value;if(!t)return;this._onToggle(t,!0);let n=e.target;n.value=``}_onToggle(e,t){this.dispatchEvent(new CustomEvent(`covers-toggle`,{detail:{entityId:e,checked:t},bubbles:!0,composed:!0}))}_onResumeAuto(){this.dispatchEvent(new CustomEvent(`cover-resume-auto`,{bubbles:!0,composed:!0}))}_emit(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],W.prototype,`hass`,void 0),j([b({attribute:!1})],W.prototype,`area`,void 0),j([b({attribute:!1})],W.prototype,`selectedCovers`,void 0),j([b({type:Boolean})],W.prototype,`editing`,void 0),j([b({type:Boolean})],W.prototype,`autoEnabled`,void 0),j([b({type:Number})],W.prototype,`deployThreshold`,void 0),j([b({type:Number})],W.prototype,`minPosition`,void 0),j([b({type:Number})],W.prototype,`overrideMinutes`,void 0),j([b({type:Boolean})],W.prototype,`autoPaused`,void 0),j([b({type:Number})],W.prototype,`overrideUntil`,void 0),j([b({attribute:!1})],W.prototype,`coverSchedules`,void 0),j([b({type:String})],W.prototype,`coverScheduleSelectorEntity`,void 0),j([b({type:Number})],W.prototype,`activeCoverScheduleIndex`,void 0),j([b({type:Boolean})],W.prototype,`nightClose`,void 0),j([b({type:Number})],W.prototype,`nightPosition`,void 0),j([b({type:Boolean})],W.prototype,`snapDeploy`,void 0),j([b({type:String})],W.prototype,`forcedReason`,void 0),j([b({attribute:!1})],W.prototype,`coverOrientations`,void 0),j([b({type:Number})],W.prototype,`nightCloseElevation`,void 0),j([b({type:Number})],W.prototype,`nightCloseOffsetMinutes`,void 0),j([b({type:Number})],W.prototype,`outdoorMinTemp`,void 0),j([b({attribute:!1})],W.prototype,`coverMinPositions`,void 0),j([x()],W.prototype,`_selectedForEdit`,void 0),j([x()],W.prototype,`_scheduleCollapsed`,void 0),j([x()],W.prototype,`_solarCollapsed`,void 0),W=Xt=j([y(`rme-covers-section`)],W),v(),S(),M();var Zt=class extends _{constructor(...e){super(...e),this.enabled=!1,this.primaryDelta=1.5,this.outdoorThreshold=5,this.acMinOutdoor=-15,this.editing=!1}static{this.styles=[R,l`
      :host {
        display: block;
      }

      /* Read-only summary (tile) */
      .summary {
        padding: 0 16px 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.6;
      }

      .summary.disabled {
        font-style: italic;
        opacity: 0.75;
      }

      /* Editing layout */
      .feature-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        transition:
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .feature-card.enabled {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.06);
      }

      .feature-text {
        flex: 1;
        min-width: 0;
      }

      .feature-title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 4px;
      }

      .feature-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        margin: 0;
      }

      ha-switch {
        flex-shrink: 0;
      }

      .thresholds {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }

      @media (max-width: 600px) {
        .thresholds {
          grid-template-columns: 1fr;
        }
      }

      .threshold-cell {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--divider-color);
        border-radius: 10px;
        background: var(--card-background-color);
      }

      .threshold-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        gap: 4px;
        line-height: 1.3;
      }

      .threshold-label > span {
        flex: 1;
        min-width: 0;
      }

      .threshold-cell ha-textfield {
        width: 100%;
      }
    `]}render(){let e=this.hass.language;return this.editing?h`
      <div class="feature-card ${this.enabled?`enabled`:``}">
        <div class="feature-text">
          <div class="feature-title">${C(`heat_source.toggle`,e)}</div>
          <div class="feature-description">${C(`heat_source.toggle_hint`,e)}</div>
        </div>
        <ha-switch .checked=${this.enabled} @change=${this._onSwitchChange}></ha-switch>
      </div>

      ${this.enabled?h`
              <div class="thresholds">
                ${this._renderThresholdCell({label:C(`heat_source.primary_delta`,e),hint:C(`heat_source.primary_delta_hint`,e),suffix:C(`heat_source.primary_delta_suffix`,e),value:this.primaryDelta,min:.5,max:5,step:.1,key:`heat_source_primary_delta`})}
                ${this._renderThresholdCell({label:C(`heat_source.outdoor_threshold`,e),hint:C(`heat_source.outdoor_threshold_hint`,e),suffix:C(`heat_source.outdoor_threshold_suffix`,e),value:this.outdoorThreshold,min:-20,max:25,step:1,key:`heat_source_outdoor_threshold`})}
                ${this._renderThresholdCell({label:C(`heat_source.ac_min_outdoor`,e),hint:C(`heat_source.ac_min_outdoor_hint`,e),suffix:C(`heat_source.ac_min_outdoor_suffix`,e),value:this.acMinOutdoor,min:-30,max:5,step:1,key:`heat_source_ac_min_outdoor`})}
              </div>
            `:g}
    `:this.enabled?h`<div class="summary">
        ${C(`heat_source.primary_delta`,e)}:
        <strong>${this.primaryDelta}${C(`heat_source.primary_delta_suffix`,e)}</strong>
        · ${C(`heat_source.outdoor_threshold`,e)}:
        <strong
          >${this.outdoorThreshold}${C(`heat_source.outdoor_threshold_suffix`,e)}</strong
        >
        · ${C(`heat_source.ac_min_outdoor`,e)}:
        <strong>${this.acMinOutdoor}${C(`heat_source.ac_min_outdoor_suffix`,e)}</strong>
      </div>`:h`<div class="summary disabled">
          ${C(`heat_source.summary_disabled`,e)}
        </div>`}_renderThresholdCell(e){return h`
      <div class="threshold-cell">
        <div class="threshold-label">
          <span>${e.label}</span>
          <rme-info-icon .text=${e.hint}></rme-info-icon>
        </div>
        <ha-textfield
          .value=${String(e.value)}
          .min=${String(e.min)}
          .max=${String(e.max)}
          .step=${String(e.step)}
          .suffix=${e.suffix}
          type="number"
          @input=${t=>this._onNumberInput(e.key,t)}
        ></ha-textfield>
      </div>
    `}_onSwitchChange(e){this._emit(`heat_source_orchestration`,e.target.checked)}_onNumberInput(e,t){let n=parseFloat(t.target.value);isNaN(n)||this._emit(e,n)}_emit(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],Zt.prototype,`hass`,void 0),j([b({type:Boolean})],Zt.prototype,`enabled`,void 0),j([b({type:Number})],Zt.prototype,`primaryDelta`,void 0),j([b({type:Number})],Zt.prototype,`outdoorThreshold`,void 0),j([b({type:Number})],Zt.prototype,`acMinOutdoor`,void 0),j([b({type:Boolean})],Zt.prototype,`editing`,void 0),Zt=j([y(`rme-heat-source-section`)],Zt),v(),S(),M();var Qt=class extends _{constructor(...e){super(...e),this.icon=``,this.label=``,this.hint=``,this.checked=!1,this.disabled=!1}static{this.styles=l`
    :host {
      display: block;
    }

    ha-card {
      padding: 16px 20px;
      min-width: 0;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      opacity: 0.7;
      flex-shrink: 0;
    }

    rme-toggle-row {
      flex: 1;
      min-width: 0;
    }
  `}render(){return h`
      <ha-card>
        <div class="row">
          ${this.icon?h`<ha-icon class="icon" icon=${this.icon}></ha-icon>`:g}
          <rme-toggle-row
            .label=${this.label}
            .hint=${this.hint}
            .checked=${this.checked}
            .disabled=${this.disabled}
            @toggle-changed=${this._onToggle}
          ></rme-toggle-row>
        </div>
      </ha-card>
    `}_onToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`toggle-changed`,{detail:e.detail,bubbles:!0,composed:!0}))}};j([b({type:String})],Qt.prototype,`icon`,void 0),j([b({type:String})],Qt.prototype,`label`,void 0),j([b({type:String})],Qt.prototype,`hint`,void 0),j([b({type:Boolean})],Qt.prototype,`checked`,void 0),j([b({type:Boolean})],Qt.prototype,`disabled`,void 0),Qt=j([y(`rme-toggle-card`)],Qt),v(),S(),M();var $t=`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`,en=`M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z`,tn=class extends _{constructor(...e){super(...e),this.open=!1,this.heading=``,this.icon=``,this.hasInfo=!1,this._infoExpanded=!1,this._onKeyDown=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this._close())}}connectedCallback(){super.connectedCallback(),window.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this._onKeyDown)}static{this.styles=l`
    :host {
      display: contents;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 32px 16px;
      box-sizing: border-box;
      overflow-y: auto;
      animation: fade-in 0.18s ease-out;
    }

    @media (max-width: 600px) {
      .backdrop {
        padding: 0;
        align-items: stretch;
      }
    }

    .dialog {
      background: var(--card-background-color, #1c1c1c);
      color: var(--primary-text-color);
      border-radius: 14px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
      width: 100%;
      max-width: 760px;
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 64px);
      animation: pop-in 0.18s ease-out;
    }

    @media (min-width: 1400px) {
      .dialog {
        max-width: 880px;
      }
    }

    @media (max-width: 600px) {
      .dialog {
        max-width: 100%;
        max-height: 100vh;
        border-radius: 0;
      }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 18px 24px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
    }

    .dialog-icon {
      --mdc-icon-size: 20px;
      opacity: 0.7;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .dialog-title {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .info-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      transition:
        color 0.15s,
        background 0.15s;
      border-radius: 50%;
    }

    .info-btn.active {
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.12);
    }

    .close-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      margin: -6px -10px -6px 0;
    }

    .dialog-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 24px 24px;
    }

    .dialog-body ::slotted(*) {
      display: block;
    }

    .info-panel {
      margin-bottom: 16px;
      padding: 12px 14px;
      background: rgba(3, 169, 244, 0.06);
      border: 1px solid rgba(3, 169, 244, 0.18);
      border-radius: 10px;
      font-size: 13px;
      line-height: 1.6;
      color: var(--primary-text-color);
      animation: info-fade 0.18s ease-out;
    }

    .info-panel ::slotted(*) {
      display: block;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes pop-in {
      from {
        opacity: 0;
        transform: scale(0.97);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes info-fade {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}render(){return this.open?h`
      <div class="backdrop" @click=${this._onBackdropClick} role="dialog" aria-modal="true">
        <div class="dialog" @click=${e=>e.stopPropagation()}>
          <div class="dialog-header">
            ${this.icon?h`<ha-icon class="dialog-icon" icon=${this.icon}></ha-icon>`:g}
            <h3 class="dialog-title">${this.heading}</h3>
            ${this.hasInfo?h`<ha-icon-button
                    class="info-btn ${this._infoExpanded?`active`:``}"
                    .path=${en}
                    @click=${this._toggleInfo}
                  ></ha-icon-button>`:g}
            <ha-icon-button
              class="close-btn"
              .path=${$t}
              @click=${this._close}
            ></ha-icon-button>
          </div>
          <div class="dialog-body">
            ${this.hasInfo&&this._infoExpanded?h`<div class="info-panel"><slot name="info"></slot></div>`:g}
            <slot></slot>
          </div>
        </div>
      </div>
    `:g}_onBackdropClick(e){e.target===e.currentTarget&&this._close()}_toggleInfo(){this._infoExpanded=!this._infoExpanded}_close(){this._infoExpanded=!1,this.dispatchEvent(new CustomEvent(`rme-dialog-closed`,{bubbles:!0,composed:!0}))}};j([b({type:Boolean,reflect:!0})],tn.prototype,`open`,void 0),j([b({type:String})],tn.prototype,`heading`,void 0),j([b({type:String})],tn.prototype,`icon`,void 0),j([b({type:Boolean})],tn.prototype,`hasInfo`,void 0),j([x()],tn.prototype,`_infoExpanded`,void 0),tn=j([y(`rme-edit-dialog`)],tn),v(),S(),M();var nn=`https://github.com/snazzybean/roommind/blob/main/docs/control-and-devices.md`,G=class extends _{constructor(...e){super(...e),this.config=null,this.presenceEnabled=!1,this.presencePersons=[],this.climateControlActive=!0,this.valveProtectionEnabled=!1,this.coilDryEnabled=!1,this.coilDryMinutes=20,this.coilDryMode=`fan_only`,this.coilDryFanMode=`low`,this._devices=[],this._selectedTempSensor=``,this._selectedHumiditySensor=``,this._selectedOccupancySensors=new Set,this._selectedWindowSensors=new Set,this._windowOpenDelay=0,this._windowCloseDelay=0,this._climateMode=`auto`,this._schedules=[],this._scheduleSelectorEntity=``,this._comfortHeat=21,this._comfortCool=24,this._ecoHeat=17,this._ecoCool=27,this._error=``,this._dirty=!1,this._editing=null,this._selectedPresencePersons=[],this._displayName=``,this._selectedCovers=new Set,this._coversAutoEnabled=!1,this._coversDeployThreshold=1.5,this._coversMinPosition=0,this._coversOverrideMinutes=60,this._coverSchedules=[],this._coverScheduleSelectorEntity=``,this._coversNightClose=!1,this._coversNightPosition=0,this._coversSnapDeploy=!1,this._coverOrientations={},this._coversNightCloseElevation=0,this._coversNightCloseOffsetMinutes=0,this._coversOutdoorMinTemp=10,this._coverMinPositions={},this._ignorePresence=!1,this._isOutdoor=!1,this._valveProtectionExclude=new Set,this._climateControlEnabled=!0,this._heatSourceOrchestration=!1,this._heatSourcePrimaryDelta=1.5,this._heatSourceOutdoorThreshold=5,this._heatSourceAcMinOutdoor=-15,this._optimisticCoverResume=!1,this._prevAreaId=null,this._openEdit=e=>()=>{this._editing=e},this._closeEdit=()=>{this._editing=null}}static{this.styles=l`
    :host {
      display: block;
      max-width: 2400px;
      margin: 0 auto;
    }

    .detail-layout {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .detail-grid {
      column-count: 3;
      column-width: 360px;
      column-gap: 16px;
      column-fill: balance;
    }

    .detail-grid > * {
      display: block;
      width: 100%;
      break-inside: avoid;
      page-break-inside: avoid;
      margin-bottom: 16px;
    }

    @media (min-width: 1900px) {
      .detail-grid {
        column-count: 4;
      }
    }

    /* Section cards handled by rme-section-card */

    /* YAML code block for info panels (slotted into edit dialogs) */
    .yaml-block {
      background: var(--code-editor-background-color, rgba(0, 0, 0, 0.35));
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 6px;
      padding: 10px 14px;
      margin: 8px 0;
      font-family: var(--code-font-family, monospace);
      font-size: 12px;
      line-height: 1.6;
      white-space: pre;
      overflow-x: auto;
      color: var(--primary-text-color);
    }
    .yaml-key {
      color: #82aaff;
    }
    .yaml-value {
      color: #e2a76a;
    }

    /* Actions */
    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 8px;
      margin-bottom: 24px;
    }

    .error {
      color: var(--error-color, #d32f2f);
      font-size: 13px;
      margin-top: 8px;
    }

    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .exceptions-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      padding: 8px 0 0;
      margin: 0;
      cursor: pointer;
      font-size: 13px;
      color: var(--primary-color);
      font-family: inherit;
    }

    .exceptions-link:hover {
      text-decoration: underline;
    }

    .helper-link {
      display: inline-block;
      margin-top: 12px;
      color: var(--primary-color);
      font-size: 12px;
      text-decoration: none;
    }

    .helper-link:hover {
      text-decoration: underline;
    }
  `}connectedCallback(){super.connectedCallback(),this._initFromConfig()}disconnectedCallback(){super.disconnectedCallback(),this._saveDebounce&&clearTimeout(this._saveDebounce)}updated(e){let t=this.config?.area_id??this.area?.area_id??null;t===this._prevAreaId?e.has(`config`)&&!this._dirty&&(e.get(`config`)??this._initFromConfig()):(this._initFromConfig(),this._prevAreaId=t),e.has(`config`)&&this._optimisticCoverResume&&!this.config?.live?.cover_auto_paused&&(this._optimisticCoverResume=!1)}_initFromConfig(){this.config?(this._devices=this.config.devices?.length?[...this.config.devices]:[...(this.config.thermostats??[]).map(e=>({entity_id:e,type:`trv`,role:`auto`,heating_system_type:this.config.heating_system_type??``})),...(this.config.acs??[]).map(e=>({entity_id:e,type:`ac`,role:`auto`}))],this._selectedTempSensor=this.config.temperature_sensor,this._selectedHumiditySensor=this.config.humidity_sensor??``,this._selectedOccupancySensors=new Set(this.config.occupancy_sensors??[]),this._selectedWindowSensors=new Set(this.config.window_sensors??[]),this._windowOpenDelay=this.config.window_open_delay??0,this._windowCloseDelay=this.config.window_close_delay??0,this._climateMode=this.config.climate_mode,this._schedules=this.config.schedules??[],this._scheduleSelectorEntity=this.config.schedule_selector_entity??``,this._comfortHeat=this.config.comfort_heat??this.config.comfort_temp??21,this._comfortCool=this.config.comfort_cool??24,this._ecoHeat=this.config.eco_heat??this.config.eco_temp??17,this._ecoCool=this.config.eco_cool??27,this._selectedPresencePersons=this.config.presence_persons??[],this._displayName=this.config.display_name??``,this._selectedCovers=new Set(this.config.covers??[]),this._coversAutoEnabled=this.config.covers_auto_enabled??!1,this._coversDeployThreshold=this.config.covers_deploy_threshold??1.5,this._coversMinPosition=this.config.covers_min_position??0,this._coversOverrideMinutes=this.config.covers_override_minutes??60,this._coverSchedules=this.config.cover_schedules??[],this._coverScheduleSelectorEntity=this.config.cover_schedule_selector_entity??``,this._coversNightClose=this.config.covers_night_close??!1,this._coversNightPosition=this.config.covers_night_position??0,this._coversSnapDeploy=this.config.covers_snap_deploy??!1,this._coverOrientations=this.config.cover_orientations??{},this._coversNightCloseElevation=this.config.covers_night_close_elevation??0,this._coversNightCloseOffsetMinutes=this.config.covers_night_close_offset_minutes??0,this._coversOutdoorMinTemp=this.config.covers_outdoor_min_temp??10,this._coverMinPositions=this.config.cover_min_positions??{},this._ignorePresence=this.config.ignore_presence??!1,this._isOutdoor=this.config.is_outdoor??!1,this._valveProtectionExclude=new Set(this.config.valve_protection_exclude??[]),this._climateControlEnabled=this.config.climate_control_enabled??!0,this._heatSourceOrchestration=this.config.heat_source_orchestration??!1,this._heatSourcePrimaryDelta=this.config.heat_source_primary_delta??1.5,this._heatSourceOutdoorThreshold=this.config.heat_source_outdoor_threshold??5,this._heatSourceAcMinOutdoor=this.config.heat_source_ac_min_outdoor??-15):(this._devices=[],this._selectedTempSensor=``,this._selectedHumiditySensor=``,this._selectedOccupancySensors=new Set,this._selectedWindowSensors=new Set,this._windowOpenDelay=0,this._windowCloseDelay=0,this._climateMode=`auto`,this._schedules=[],this._scheduleSelectorEntity=``,this._comfortHeat=21,this._comfortCool=24,this._ecoHeat=17,this._ecoCool=27,this._selectedPresencePersons=[],this._displayName=``,this._selectedCovers=new Set,this._coversAutoEnabled=!1,this._coversDeployThreshold=1.5,this._coversMinPosition=0,this._coversOverrideMinutes=60,this._coverSchedules=[],this._coverScheduleSelectorEntity=``,this._coversNightClose=!1,this._coversNightPosition=0,this._coversSnapDeploy=!1,this._coverOrientations={},this._coversNightCloseElevation=0,this._coversNightCloseOffsetMinutes=0,this._coversOutdoorMinTemp=10,this._coverMinPositions={},this._ignorePresence=!1,this._isOutdoor=!1,this._valveProtectionExclude=new Set,this._climateControlEnabled=!0,this._heatSourceOrchestration=!1,this._heatSourcePrimaryDelta=1.5,this._heatSourceOutdoorThreshold=5,this._heatSourceAcMinOutdoor=-15),this._dirty=!1,this._devices.length===0&&this._editing===null&&(this._editing=`devices`)}_getEffectiveOverride(){let e=this.shadowRoot?.querySelector(`rme-override-section`);if(e)return e.getEffectiveOverride();let t=this.config?.live;return t?.override_active&&t.override_type?{active:!0,type:t.override_type,heat:t.override_heat,cool:t.override_cool,until:t.override_until}:{active:!1,type:null,heat:null,cool:null,until:null}}render(){return this.area?h`
      <div class="detail-layout">
        <rme-hero-status
          .hass=${this.hass}
          .area=${this.area}
          .config=${this.config}
          .isOutdoor=${this._isOutdoor}
          .overrideInfo=${this._getEffectiveOverride()}
          .climateControlActive=${this.climateControlActive&&this._climateControlEnabled}
          @display-name-changed=${this._onDisplayNameChanged}
        ></rme-hero-status>

        <div class="detail-grid">
          ${this._isOutdoor?g:h`
                  <rme-toggle-card
                    icon="mdi:power"
                    .label=${C(`room.climate_control_toggle`,this.hass.language)}
                    .hint=${C(`room.climate_control_hint`,this.hass.language)}
                    .checked=${this._climateControlEnabled}
                    @toggle-changed=${this._onClimateControlToggle}
                  ></rme-toggle-card>

                  <rme-section-card
                    icon="mdi:cog"
                    .heading=${C(`room.section.climate_mode`,this.hass.language)}
                  >
                    <rme-info-icon slot="header-extras">
                      <b>${C(`mode.auto`,this.hass.language)}</b> —
                      ${C(`mode.auto_desc`,this.hass.language)}<br />
                      <b>${C(`mode.heat_only`,this.hass.language)}</b> —
                      ${C(`mode.heat_only_desc`,this.hass.language)}<br />
                      <b>${C(`mode.cool_only`,this.hass.language)}</b> —
                      ${C(`mode.cool_only_desc`,this.hass.language)}
                    </rme-info-icon>
                    <rme-climate-mode-selector
                      .climateMode=${this._climateMode}
                      .language=${this.hass.language}
                      @mode-changed=${this._onModeChanged}
                    ></rme-climate-mode-selector>
                  </rme-section-card>

                  <rme-section-card
                    icon="mdi:calendar"
                    .heading=${C(`room.section.schedule`,this.hass.language)}
                    editable
                    @edit-click=${this._openEdit(`schedule`)}
                  >
                    <rme-schedule-settings
                      .hass=${this.hass}
                      .schedules=${this._schedules}
                      .scheduleSelectorEntity=${this._scheduleSelectorEntity}
                      .activeScheduleIndex=${this.config?.live?.active_schedule_index??-1}
                      .comfortHeat=${this._comfortHeat}
                      .comfortCool=${this._comfortCool}
                      .ecoHeat=${this._ecoHeat}
                      .ecoCool=${this._ecoCool}
                      .climateMode=${this._climateMode}
                      .scheduleTempWarnings=${this.config?.live?.schedule_temp_warnings??[]}
                      .editing=${!1}
                      @schedules-changed=${this._onSchedulesChanged}
                      @schedule-selector-changed=${this._onScheduleSelectorChanged}
                      @comfort-heat-changed=${this._onComfortHeatChanged}
                      @comfort-cool-changed=${this._onComfortCoolChanged}
                      @eco-heat-changed=${this._onEcoHeatChanged}
                      @eco-cool-changed=${this._onEcoCoolChanged}
                    ></rme-schedule-settings>
                    ${this.config?h`
                            <rme-override-section
                              .hass=${this.hass}
                              .config=${this.config}
                              .climateMode=${this._climateMode}
                              .comfortHeat=${this._comfortHeat}
                              .comfortCool=${this._comfortCool}
                              .ecoHeat=${this._ecoHeat}
                              .ecoCool=${this._ecoCool}
                              .language=${this.hass.language}
                            ></rme-override-section>
                          `:g}
                  </rme-section-card>
                `}
          ${this._isOutdoor?g:h`
                  <rme-section-card
                    icon="mdi:power-plug"
                    .heading=${C(`room.section.devices`,this.hass.language)}
                    editable
                    @edit-click=${this._openEdit(`devices`)}
                  >
                    <rme-device-section
                      .hass=${this.hass}
                      .area=${this.area}
                      .editing=${!1}
                      .devices=${this._devices}
                      .selectedTempSensor=${this._selectedTempSensor}
                      .valveProtectionExclude=${this._valveProtectionExclude}
                      .valveProtectionEnabled=${this.valveProtectionEnabled}
                      .coilDryEnabledGlobal=${this.coilDryEnabled}
                      .coilDryMinutesGlobal=${this.coilDryMinutes}
                      .coilDryModeGlobal=${this.coilDryMode}
                      .coilDryFanModeGlobal=${this.coilDryFanMode}
                      @device-changed=${this._onDeviceChanged}
                      @valve-protection-exclude-toggle=${this._onValveProtectionExcludeToggle}
                    ></rme-device-section>
                  </rme-section-card>

                  <rme-section-card
                    icon="mdi:thermometer"
                    .heading=${C(`room.section.sensors`,this.hass.language)}
                    editable
                    @edit-click=${this._openEdit(`sensors`)}
                  >
                    <rme-sensor-section
                      .hass=${this.hass}
                      .area=${this.area}
                      .editing=${!1}
                      .temperatureSensor=${this._selectedTempSensor}
                      .humiditySensor=${this._selectedHumiditySensor}
                      .occupancySensors=${this._selectedOccupancySensors}
                      .windowSensors=${this._selectedWindowSensors}
                      .windowOpenDelay=${this._windowOpenDelay}
                      .windowCloseDelay=${this._windowCloseDelay}
                      .heatingSystemType=${zt(this._devices)}
                      .language=${this.hass.language}
                      @sensor-changed=${this._onSensorChanged}
                    ></rme-sensor-section>
                  </rme-section-card>

                  ${this.presenceEnabled&&(this.presencePersons.length>0||this._selectedPresencePersons.length>0)?h`<rme-section-card
                          icon="mdi:home-account"
                          .heading=${C(`room.section.presence`,this.hass.language)}
                          editable
                          @edit-click=${this._openEdit(`presence`)}
                        >
                          <rme-info-icon
                            slot="header-extras"
                            .text=${C(`presence.ignore_hint`,this.hass.language)}
                          ></rme-info-icon>
                          <rme-presence-section
                            .hass=${this.hass}
                            .presenceEnabled=${this.presenceEnabled}
                            .presencePersons=${this.presencePersons}
                            .selectedPresencePersons=${this._selectedPresencePersons}
                            .ignorePresence=${this._ignorePresence}
                            .editing=${!1}
                            .language=${this.hass.language}
                            @presence-persons-changed=${this._onPresencePersonsChanged}
                            @ignore-presence-changed=${this._onIgnorePresenceChanged}
                          ></rme-presence-section>
                        </rme-section-card>`:g}
                `}
          ${this._isOutdoor?g:h`<rme-section-card
                  icon="mdi:blinds-horizontal"
                  .heading=${C(`room.section.covers`,this.hass.language)}
                  .badge=${C(`badge.beta`,this.hass.language)}
                  .badgeHint=${C(`badge.beta_hint`,this.hass.language)}
                  editable
                  @edit-click=${this._openEdit(`covers`)}
                >
                  <rme-covers-section
                    .hass=${this.hass}
                    .area=${this.area}
                    .editing=${!1}
                    .selectedCovers=${this._selectedCovers}
                    .autoEnabled=${this._coversAutoEnabled}
                    .deployThreshold=${this._coversDeployThreshold}
                    .minPosition=${this._coversMinPosition}
                    .overrideMinutes=${this._coversOverrideMinutes}
                    .coverSchedules=${this._coverSchedules}
                    .coverScheduleSelectorEntity=${this._coverScheduleSelectorEntity}
                    .activeCoverScheduleIndex=${this.config?.live?.active_cover_schedule_index??-1}
                    .nightClose=${this._coversNightClose}
                    .nightPosition=${this._coversNightPosition}
                    .snapDeploy=${this._coversSnapDeploy}
                    .forcedReason=${this.config?.live?.cover_forced_reason??``}
                    .autoPaused=${this._optimisticCoverResume?!1:this.config?.live?.cover_auto_paused??!1}
                    .overrideUntil=${this.config?.live?.cover_override_until??null}
                    .coverOrientations=${this._coverOrientations}
                    .nightCloseElevation=${this._coversNightCloseElevation}
                    .nightCloseOffsetMinutes=${this._coversNightCloseOffsetMinutes}
                    .outdoorMinTemp=${this._coversOutdoorMinTemp}
                    .coverMinPositions=${this._coverMinPositions}
                    @covers-toggle=${this._onCoversToggle}
                    @setting-changed=${this._onCoverSettingChanged}
                    @cover-resume-auto=${this._onCoverResumeAuto}
                  ></rme-covers-section>
                </rme-section-card>`}
          ${!this._isOutdoor&&this._selectedTempSensor&&this._devices.some(e=>e.type===`trv`)&&this._devices.some(e=>e.type===`ac`)?h`<rme-section-card
                  icon="mdi:swap-horizontal"
                  .heading=${C(`room.section.heat_source`,this.hass.language)}
                  editable
                  @edit-click=${this._openEdit(`heatSource`)}
                >
                  <rme-heat-source-section
                    .hass=${this.hass}
                    .editing=${!1}
                    .enabled=${this._heatSourceOrchestration}
                    .primaryDelta=${this._heatSourcePrimaryDelta}
                    .outdoorThreshold=${this._heatSourceOutdoorThreshold}
                    .acMinOutdoor=${this._heatSourceAcMinOutdoor}
                    @setting-changed=${this._onHeatSourceSettingChanged}
                  ></rme-heat-source-section>
                </rme-section-card>`:g}

          <rme-toggle-card
            icon="mdi:tree"
            .label=${C(`room.outdoor_toggle`,this.hass.language)}
            .hint=${C(`room.outdoor_hint`,this.hass.language)}
            .checked=${this._isOutdoor}
            @toggle-changed=${this._onOutdoorToggle}
          ></rme-toggle-card>
        </div>
        ${this._error?h`<div class="error">${this._error}</div>`:g}
        ${this._renderEditDialog()}
      </div>
    `:g}_renderEditDialog(){if(this._editing===null)return g;let e=this.hass.language;switch(this._editing){case`schedule`:return h`<rme-edit-dialog
          open
          icon="mdi:calendar"
          .heading=${C(`room.section.schedule`,e)}
          hasInfo
          @rme-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <p><strong>${C(`schedule.help_temps_title`,e)}</strong></p>
            <p>${C(`schedule.help_temps`,e)}</p>
            <ol style="margin: 4px 0 0 0; padding-left: 20px; line-height: 1.8">
              <li>${P(C(`schedule.help_temps_1`,e))}</li>
              <li>${P(C(`schedule.help_temps_2`,e))}</li>
              <li>${P(C(`schedule.help_temps_3`,e))}</li>
              <li>${P(C(`schedule.help_temps_4`,e))}</li>
            </ol>
            <p style="margin-top: 12px">
              <strong>${C(`schedule.help_block_title`,e)}</strong>
            </p>
            <p>${P(C(`schedule.help_block`,e))}</p>
            <div class="yaml-block">
              ${P(`<span class="yaml-key">schedule</span>:
  <span class="yaml-key">living_room_heating</span>:
    <span class="yaml-key">name</span>: <span class="yaml-value">Living Room Heating</span>
    <span class="yaml-key">monday</span>:
      - <span class="yaml-key">from</span>: <span class="yaml-value">"06:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"08:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">temperature</span>: <span class="yaml-value">23</span>
      - <span class="yaml-key">from</span>: <span class="yaml-value">"17:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"22:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">temperature</span>: <span class="yaml-value">21.5</span>`)}
            </div>
            <p style="margin-top: 8px">${P(C(`schedule.help_block_note`,e))}</p>
            <p style="margin-top: 12px">
              <strong>${C(`schedule.help_split_title`,e)}</strong>
            </p>
            <p>${P(C(`schedule.help_split`,e))}</p>
            <div class="yaml-block">
              ${P(`- <span class="yaml-key">from</span>: <span class="yaml-value">"06:00:00"</span>
  <span class="yaml-key">to</span>: <span class="yaml-value">"08:00:00"</span>
  <span class="yaml-key">data</span>:
    <span class="yaml-key">heat_temperature</span>: <span class="yaml-value">21</span>
    <span class="yaml-key">cool_temperature</span>: <span class="yaml-value">24</span>`)}
            </div>
            <p style="margin-top: 8px">${P(C(`schedule.help_split_note`,e))}</p>
            <p style="margin-top: 12px">
              <strong>${C(`schedule.help_multi_title`,e)}</strong>
            </p>
            <p>${P(C(`schedule.help_multi`,e))}</p>
          </div>
          <rme-schedule-settings
            .hass=${this.hass}
            .schedules=${this._schedules}
            .scheduleSelectorEntity=${this._scheduleSelectorEntity}
            .activeScheduleIndex=${this.config?.live?.active_schedule_index??-1}
            .comfortHeat=${this._comfortHeat}
            .comfortCool=${this._comfortCool}
            .ecoHeat=${this._ecoHeat}
            .ecoCool=${this._ecoCool}
            .climateMode=${this._climateMode}
            .scheduleTempWarnings=${this.config?.live?.schedule_temp_warnings??[]}
            .editing=${!0}
            @schedules-changed=${this._onSchedulesChanged}
            @schedule-selector-changed=${this._onScheduleSelectorChanged}
            @comfort-heat-changed=${this._onComfortHeatChanged}
            @comfort-cool-changed=${this._onComfortCoolChanged}
            @eco-heat-changed=${this._onEcoHeatChanged}
            @eco-cool-changed=${this._onEcoCoolChanged}
          ></rme-schedule-settings>
        </rme-edit-dialog>`;case`devices`:return h`<rme-edit-dialog
          open
          icon="mdi:power-plug"
          .heading=${C(`room.section.devices`,e)}
          hasInfo
          @rme-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${C(`devices.info.types_title`,e)}</b><br />
            ${C(`devices.info.types_body`,e)}
            <br /><br />
            <b>${C(`devices.info.control_title`,e)}</b><br />
            ${C(`devices.info.control_body`,e)}
            <br /><br />
            <b>${C(`devices.info.modes_title`,e)}</b><br />
            ${C(`devices.info.modes_body`,e)}
            <br /><br />
            <b>${C(`devices.info.heat_source_title`,e)}</b><br />
            ${C(`devices.info.heat_source_body`,e)}
            <br />
            <a class="helper-link" href=${nn} target="_blank" rel="noreferrer">
              ${C(`common.learn_more`,e)}
            </a>
          </div>
          <rme-device-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .devices=${this._devices}
            .selectedTempSensor=${this._selectedTempSensor}
            .valveProtectionExclude=${this._valveProtectionExclude}
            .valveProtectionEnabled=${this.valveProtectionEnabled}
            .coilDryEnabledGlobal=${this.coilDryEnabled}
            .coilDryMinutesGlobal=${this.coilDryMinutes}
            .coilDryModeGlobal=${this.coilDryMode}
            .coilDryFanModeGlobal=${this.coilDryFanMode}
            @device-changed=${this._onDeviceChanged}
            @valve-protection-exclude-toggle=${this._onValveProtectionExcludeToggle}
          ></rme-device-section>
        </rme-edit-dialog>`;case`sensors`:return h`<rme-edit-dialog
          open
          icon="mdi:thermometer"
          .heading=${C(`room.section.sensors`,e)}
          @rme-dialog-closed=${this._closeEdit}
        >
          <rme-sensor-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .temperatureSensor=${this._selectedTempSensor}
            .humiditySensor=${this._selectedHumiditySensor}
            .occupancySensors=${this._selectedOccupancySensors}
            .windowSensors=${this._selectedWindowSensors}
            .windowOpenDelay=${this._windowOpenDelay}
            .windowCloseDelay=${this._windowCloseDelay}
            .heatingSystemType=${zt(this._devices)}
            .language=${this.hass.language}
            @sensor-changed=${this._onSensorChanged}
          ></rme-sensor-section>
        </rme-edit-dialog>`;case`presence`:return h`<rme-edit-dialog
          open
          icon="mdi:home-account"
          .heading=${C(`room.section.presence`,e)}
          hasInfo
          @rme-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${C(`presence.room_help_header`,e)}</b><br />
            ${C(`presence.room_help_body`,e)}
            <br /><br />
            <b>${C(`presence.help_ignore_title`,e)}</b><br />
            ${C(`presence.help_ignore_body`,e)}
          </div>
          <rme-presence-section
            .hass=${this.hass}
            .presenceEnabled=${this.presenceEnabled}
            .presencePersons=${this.presencePersons}
            .selectedPresencePersons=${this._selectedPresencePersons}
            .ignorePresence=${this._ignorePresence}
            .editing=${!0}
            .language=${this.hass.language}
            @presence-persons-changed=${this._onPresencePersonsChanged}
            @ignore-presence-changed=${this._onIgnorePresenceChanged}
          ></rme-presence-section>
        </rme-edit-dialog>`;case`covers`:return h`<rme-edit-dialog
          open
          icon="mdi:blinds-horizontal"
          .heading=${C(`room.section.covers`,e)}
          hasInfo
          @rme-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${C(`covers.info.selection_title`,e)}</b><br />
            ${C(`covers.info.selection_body`,e)}
            <br /><br />
            <b>${C(`covers.info.schedule_title`,e)}</b><br />
            ${C(`covers.info.schedule_body`,e)}
            <div class="yaml-block">
              ${P(`<span class="yaml-key">schedule</span>:
  <span class="yaml-key">cover_evening</span>:
    <span class="yaml-key">name</span>: <span class="yaml-value">Cover Evening</span>
    <span class="yaml-key">monday</span>:
      - <span class="yaml-key">from</span>: <span class="yaml-value">"20:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"06:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">position</span>: <span class="yaml-value">10</span>`)}
            </div>
            <b>${C(`covers.info.solar_title`,e)}</b><br />
            ${C(`covers.info.solar_body`,e)}
            <br /><br />
            <b>${C(`covers.info.night_title`,e)}</b><br />
            ${C(`covers.info.night_body`,e)}
            <br /><br />
            <b>${C(`covers.info.override_title`,e)}</b><br />
            ${C(`covers.info.override_body`,e)}
            <br /><br />
            <b>${C(`covers.info.priority_title`,e)}</b><br />
            ${C(`covers.info.priority_body`,e)}
            <br /><br />
            <b>${C(`covers.info.entities_title`,e)}</b><br />
            ${C(`covers.info.entities_body`,e)}
          </div>
          <rme-covers-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .selectedCovers=${this._selectedCovers}
            .autoEnabled=${this._coversAutoEnabled}
            .deployThreshold=${this._coversDeployThreshold}
            .minPosition=${this._coversMinPosition}
            .overrideMinutes=${this._coversOverrideMinutes}
            .coverSchedules=${this._coverSchedules}
            .coverScheduleSelectorEntity=${this._coverScheduleSelectorEntity}
            .activeCoverScheduleIndex=${this.config?.live?.active_cover_schedule_index??-1}
            .nightClose=${this._coversNightClose}
            .nightPosition=${this._coversNightPosition}
            .snapDeploy=${this._coversSnapDeploy}
            .forcedReason=${this.config?.live?.cover_forced_reason??``}
            .autoPaused=${this._optimisticCoverResume?!1:this.config?.live?.cover_auto_paused??!1}
            .overrideUntil=${this.config?.live?.cover_override_until??null}
            .coverOrientations=${this._coverOrientations}
            .nightCloseElevation=${this._coversNightCloseElevation}
            .nightCloseOffsetMinutes=${this._coversNightCloseOffsetMinutes}
            .outdoorMinTemp=${this._coversOutdoorMinTemp}
            .coverMinPositions=${this._coverMinPositions}
            @covers-toggle=${this._onCoversToggle}
            @setting-changed=${this._onCoverSettingChanged}
            @cover-resume-auto=${this._onCoverResumeAuto}
          ></rme-covers-section>
        </rme-edit-dialog>`;case`heatSource`:return h`<rme-edit-dialog
          open
          icon="mdi:swap-horizontal"
          .heading=${C(`room.section.heat_source`,e)}
          @rme-dialog-closed=${this._closeEdit}
        >
          <rme-heat-source-section
            .hass=${this.hass}
            .editing=${!0}
            .enabled=${this._heatSourceOrchestration}
            .primaryDelta=${this._heatSourcePrimaryDelta}
            .outdoorThreshold=${this._heatSourceOutdoorThreshold}
            .acMinOutdoor=${this._heatSourceAcMinOutdoor}
            @setting-changed=${this._onHeatSourceSettingChanged}
          ></rme-heat-source-section>
        </rme-edit-dialog>`}}_onModeChanged(e){this._climateMode=e.detail.mode,this._autoSave()}_onSchedulesChanged(e){this._schedules=e.detail.value,this._autoSave()}_onScheduleSelectorChanged(e){this._scheduleSelectorEntity=e.detail.value,this._autoSave()}_onComfortHeatChanged(e){this._comfortHeat=e.detail.value,this._comfortCool<this._comfortHeat&&(this._comfortCool=this._comfortHeat),this._autoSave()}_onComfortCoolChanged(e){this._comfortCool=e.detail.value,this._comfortHeat>this._comfortCool&&(this._comfortHeat=this._comfortCool),this._autoSave()}_onEcoHeatChanged(e){this._ecoHeat=e.detail.value,this._ecoCool<this._ecoHeat&&(this._ecoCool=this._ecoHeat),this._autoSave()}_onEcoCoolChanged(e){this._ecoCool=e.detail.value,this._ecoHeat>this._ecoCool&&(this._ecoHeat=this._ecoCool),this._autoSave()}_onDeviceChanged(e){let t=new Set(this._devices.map(e=>e.entity_id));this._devices=e.detail.devices;let n=new Set(this._devices.map(e=>e.entity_id));for(let e of t)if(!n.has(e)&&this._valveProtectionExclude.has(e)){let t=new Set(this._valveProtectionExclude);t.delete(e),this._valveProtectionExclude=t}for(let e of this._devices)if(e.type!==`trv`&&this._valveProtectionExclude.has(e.entity_id)){let t=new Set(this._valveProtectionExclude);t.delete(e.entity_id),this._valveProtectionExclude=t}this._autoSave()}_onSensorChanged(e){let{key:t,value:n}=e.detail;t===`temperature_sensor`?this._selectedTempSensor=n:t===`humidity_sensor`?this._selectedHumiditySensor=n:t===`occupancy_sensors`?this._selectedOccupancySensors=new Set(n):t===`window_sensors`?this._selectedWindowSensors=new Set(n):t===`window_open_delay`?this._windowOpenDelay=n:t===`window_close_delay`&&(this._windowCloseDelay=n),this._autoSave()}_onValveProtectionExcludeToggle(e){let{entityId:t,excluded:n}=e.detail,r=new Set(this._valveProtectionExclude);n?r.add(t):r.delete(t),this._valveProtectionExclude=r,this._autoSave()}_onPresencePersonsChanged(e){this._selectedPresencePersons=e.detail,this._autoSave()}_onIgnorePresenceChanged(e){this._ignorePresence=e.detail,this._autoSave()}_onCoversToggle(e){let{entityId:t,checked:n}=e.detail,r=new Set(this._selectedCovers);if(n)r.add(t);else{if(r.delete(t),t in this._coverOrientations){let e={...this._coverOrientations};delete e[t],this._coverOrientations=e}if(t in this._coverMinPositions){let e={...this._coverMinPositions};delete e[t],this._coverMinPositions=e}}this._selectedCovers=r,this._autoSave()}_onCoverSettingChanged(e){let{key:t,value:n}=e.detail;e.stopPropagation(),t===`covers_auto_enabled`?this._coversAutoEnabled=n:t===`covers_deploy_threshold`?this._coversDeployThreshold=n:t===`covers_min_position`?this._coversMinPosition=n:t===`covers_override_minutes`?this._coversOverrideMinutes=n:t===`cover_schedules`?this._coverSchedules=n:t===`cover_schedule_selector_entity`?this._coverScheduleSelectorEntity=n:t===`covers_night_close`?this._coversNightClose=n:t===`covers_night_position`?this._coversNightPosition=n:t===`covers_snap_deploy`?this._coversSnapDeploy=n:t===`cover_orientations`?this._coverOrientations=n:t===`covers_night_close_elevation`?this._coversNightCloseElevation=n:t===`covers_night_close_offset_minutes`?this._coversNightCloseOffsetMinutes=n:t===`covers_outdoor_min_temp`?this._coversOutdoorMinTemp=n:t===`cover_min_positions`&&(this._coverMinPositions=n),this._autoSave()}async _onCoverResumeAuto(){this._optimisticCoverResume=!0;try{await this.hass.callWS({type:`roommind_eklabs/covers/clear_override`,area_id:this.area.area_id})}catch{this._optimisticCoverResume=!1}}_onHeatSourceSettingChanged(e){let{key:t,value:n}=e.detail;e.stopPropagation(),t===`heat_source_orchestration`?this._heatSourceOrchestration=n:t===`heat_source_primary_delta`?this._heatSourcePrimaryDelta=n:t===`heat_source_outdoor_threshold`?this._heatSourceOutdoorThreshold=n:t===`heat_source_ac_min_outdoor`&&(this._heatSourceAcMinOutdoor=n),this._autoSave()}_onClimateControlToggle(e){this._climateControlEnabled=e.detail,this._autoSave()}_onOutdoorToggle(e){this._isOutdoor=e.detail,this._autoSave()}_onDisplayNameChanged(e){this._displayName=e.detail.value,this._autoSave()}_autoSave(){this._dirty=!0,this._saveDebounce&&clearTimeout(this._saveDebounce),this._saveDebounce=setTimeout(()=>this._doSave(),500)}async _doSave(){L(this,`saving`),this._error=``;try{await this.hass.callWS({type:`roommind_eklabs/rooms/save`,area_id:this.area.area_id,devices:this._devices,temperature_sensor:this._selectedTempSensor,humidity_sensor:this._selectedHumiditySensor,occupancy_sensors:[...this._selectedOccupancySensors],window_sensors:[...this._selectedWindowSensors],window_open_delay:this._windowOpenDelay,window_close_delay:this._windowCloseDelay,climate_mode:this._climateMode,schedules:this._schedules,schedule_selector_entity:this._scheduleSelectorEntity,comfort_heat:this._comfortHeat,comfort_cool:this._comfortCool,eco_heat:this._ecoHeat,eco_cool:this._ecoCool,presence_persons:this._selectedPresencePersons.filter(e=>e),display_name:this._displayName,covers:[...this._selectedCovers],climate_control_enabled:this._climateControlEnabled,covers_auto_enabled:this._coversAutoEnabled,covers_deploy_threshold:this._coversDeployThreshold,covers_min_position:this._coversMinPosition,covers_override_minutes:this._coversOverrideMinutes,cover_schedules:this._coverSchedules,cover_schedule_selector_entity:this._coverScheduleSelectorEntity,covers_night_close:this._coversNightClose,covers_night_position:this._coversNightPosition,covers_snap_deploy:this._coversSnapDeploy,cover_orientations:this._coverOrientations,covers_night_close_elevation:this._coversNightCloseElevation,covers_night_close_offset_minutes:this._coversNightCloseOffsetMinutes,covers_outdoor_min_temp:this._coversOutdoorMinTemp,cover_min_positions:this._coverMinPositions,ignore_presence:this._ignorePresence,is_outdoor:this._isOutdoor,valve_protection_exclude:[...this._valveProtectionExclude],heat_source_orchestration:this._heatSourceOrchestration,heat_source_primary_delta:this._heatSourcePrimaryDelta,heat_source_outdoor_threshold:this._heatSourceOutdoorThreshold,heat_source_ac_min_outdoor:this._heatSourceAcMinOutdoor}),this._dirty=!1,L(this,`saved`),this.dispatchEvent(new CustomEvent(`room-updated`,{bubbles:!0,composed:!0}))}catch(e){let t=e instanceof Error?e.message:C(`room.error_save_fallback`,this.hass.language);this._error=t,L(this,`error`)}}};j([b({attribute:!1})],G.prototype,`area`,void 0),j([b({attribute:!1})],G.prototype,`config`,void 0),j([b({attribute:!1})],G.prototype,`hass`,void 0),j([b({type:Boolean})],G.prototype,`presenceEnabled`,void 0),j([b({attribute:!1})],G.prototype,`presencePersons`,void 0),j([b({type:Boolean})],G.prototype,`climateControlActive`,void 0),j([b({type:Boolean})],G.prototype,`valveProtectionEnabled`,void 0),j([b({type:Boolean})],G.prototype,`coilDryEnabled`,void 0),j([b({type:Number})],G.prototype,`coilDryMinutes`,void 0),j([b({type:String})],G.prototype,`coilDryMode`,void 0),j([b({type:String})],G.prototype,`coilDryFanMode`,void 0),j([x()],G.prototype,`_devices`,void 0),j([x()],G.prototype,`_selectedTempSensor`,void 0),j([x()],G.prototype,`_selectedHumiditySensor`,void 0),j([x()],G.prototype,`_selectedOccupancySensors`,void 0),j([x()],G.prototype,`_selectedWindowSensors`,void 0),j([x()],G.prototype,`_windowOpenDelay`,void 0),j([x()],G.prototype,`_windowCloseDelay`,void 0),j([x()],G.prototype,`_climateMode`,void 0),j([x()],G.prototype,`_schedules`,void 0),j([x()],G.prototype,`_scheduleSelectorEntity`,void 0),j([x()],G.prototype,`_comfortHeat`,void 0),j([x()],G.prototype,`_comfortCool`,void 0),j([x()],G.prototype,`_ecoHeat`,void 0),j([x()],G.prototype,`_ecoCool`,void 0),j([x()],G.prototype,`_error`,void 0),j([x()],G.prototype,`_dirty`,void 0),j([x()],G.prototype,`_editing`,void 0),j([x()],G.prototype,`_selectedPresencePersons`,void 0),j([x()],G.prototype,`_displayName`,void 0),j([x()],G.prototype,`_selectedCovers`,void 0),j([x()],G.prototype,`_coversAutoEnabled`,void 0),j([x()],G.prototype,`_coversDeployThreshold`,void 0),j([x()],G.prototype,`_coversMinPosition`,void 0),j([x()],G.prototype,`_coversOverrideMinutes`,void 0),j([x()],G.prototype,`_coverSchedules`,void 0),j([x()],G.prototype,`_coverScheduleSelectorEntity`,void 0),j([x()],G.prototype,`_coversNightClose`,void 0),j([x()],G.prototype,`_coversNightPosition`,void 0),j([x()],G.prototype,`_coversSnapDeploy`,void 0),j([x()],G.prototype,`_coverOrientations`,void 0),j([x()],G.prototype,`_coversNightCloseElevation`,void 0),j([x()],G.prototype,`_coversNightCloseOffsetMinutes`,void 0),j([x()],G.prototype,`_coversOutdoorMinTemp`,void 0),j([x()],G.prototype,`_coverMinPositions`,void 0),j([x()],G.prototype,`_ignorePresence`,void 0),j([x()],G.prototype,`_isOutdoor`,void 0),j([x()],G.prototype,`_valveProtectionExclude`,void 0),j([x()],G.prototype,`_climateControlEnabled`,void 0),j([x()],G.prototype,`_heatSourceOrchestration`,void 0),j([x()],G.prototype,`_heatSourcePrimaryDelta`,void 0),j([x()],G.prototype,`_heatSourceOutdoorThreshold`,void 0),j([x()],G.prototype,`_heatSourceAcMinOutdoor`,void 0),j([x()],G.prototype,`_optimisticCoverResume`,void 0),G=j([y(`rme-room-detail`)],G);var rn=n({HaRadioPolyfill:()=>an}),an,on=t((()=>{v(),S(),M(),an=class extends _{constructor(...e){super(...e),this.checked=!1,this.disabled=!1,this.name=``,this.value=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=l`
    :host {
      display: inline-flex;
      align-items: center;
    }
    input {
      width: 18px;
      height: 18px;
      margin: 0;
      accent-color: var(--primary-color, #03a9f4);
      cursor: pointer;
    }
    input:disabled {
      cursor: default;
      opacity: 0.5;
    }
  `}render(){return h`
      <input
        type="radio"
        .checked=${this.checked}
        .value=${this.value}
        name=${this.name||void 0}
        ?disabled=${this.disabled}
        @change=${this._onChange}
      />
    `}_onChange(e){this.checked=e.target.checked,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}},j([b({type:Boolean,reflect:!0})],an.prototype,`checked`,void 0),j([b({type:Boolean,reflect:!0})],an.prototype,`disabled`,void 0),j([b({type:String})],an.prototype,`name`,void 0),j([b({type:String})],an.prototype,`value`,void 0)})),sn=n({HaTextfieldPolyfill:()=>K}),K,cn=t((()=>{v(),S(),M(),K=class extends _{constructor(...e){super(...e),this.value=``,this.type=`text`,this.label=``,this.placeholder=``,this.suffix=``,this.prefix=``,this.helper=``,this.disabled=!1,this.required=!1,this.readOnly=!1,this.min=``,this.max=``,this.step=null,this.name=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=l`
    :host {
      display: inline-flex;
      flex-direction: column;
      outline: none;
      width: 100%;
    }
    ha-input {
      --ha-input-padding-bottom: 0;
      width: 100%;
    }
    .prefix,
    .suffix {
      color: var(--secondary-text-color);
    }
  `}render(){return h`
      <ha-input
        .type=${this.type}
        .value=${this.value||``}
        .label=${this.label}
        .placeholder=${this.placeholder}
        .disabled=${this.disabled}
        .required=${this.required}
        .readonly=${this.readOnly}
        .min=${this.min===``?void 0:this.min}
        .max=${this.max===``?void 0:this.max}
        .step=${this.step??void 0}
        .name=${this.name||void 0}
        .hint=${this.helper}
        .withoutSpinButtons=${this.type===`number`}
        @input=${this._sync}
        @change=${this._sync}
      >
        ${this.prefix?h`<span class="prefix" slot="start">${this.prefix}</span>`:g}
        ${this.suffix?h`<span class="suffix" slot="end">${this.suffix}</span>`:g}
      </ha-input>
    `}_sync(){this.value=this._haInput?.value??``}},j([b({type:String})],K.prototype,`value`,void 0),j([b({type:String})],K.prototype,`type`,void 0),j([b({type:String})],K.prototype,`label`,void 0),j([b({type:String})],K.prototype,`placeholder`,void 0),j([b({type:String})],K.prototype,`suffix`,void 0),j([b({type:String})],K.prototype,`prefix`,void 0),j([b({type:String})],K.prototype,`helper`,void 0),j([b({type:Boolean})],K.prototype,`disabled`,void 0),j([b({type:Boolean})],K.prototype,`required`,void 0),j([b({type:Boolean,reflect:!0,attribute:`readonly`})],K.prototype,`readOnly`,void 0),j([b()],K.prototype,`min`,void 0),j([b()],K.prototype,`max`,void 0),j([b()],K.prototype,`step`,void 0),j([b({type:String})],K.prototype,`name`,void 0),j([dt(`ha-input`)],K.prototype,`_haInput`,void 0)})),ln=async()=>{if(!customElements.get(`ha-radio`))try{let{HaRadioPolyfill:e}=await Promise.resolve().then(()=>(on(),rn));customElements.get(`ha-radio`)||customElements.define(`ha-radio`,e)}catch(e){console.warn(`RoomMind: ha-radio polyfill failed to load`,e)}if(!customElements.get(`ha-textfield`))try{let{HaTextfieldPolyfill:e}=await Promise.resolve().then(()=>(cn(),sn));customElements.get(`ha-textfield`)||customElements.define(`ha-textfield`,e)}catch(e){console.warn(`RoomMind: ha-textfield polyfill failed to load`,e)}if(!customElements.get(`ha-entity-picker`)){if(!customElements.get(`ha-selector`)){await customElements.whenDefined(`partial-panel-resolver`);let e=document.createElement(`partial-panel-resolver`);e.hass={panels:[{url_path:`tmp`,component_name:`config`}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined(`ha-panel-config`),await document.createElement(`ha-panel-config`).routerOptions.routes.automation.load()}if(!customElements.get(`ha-entity-picker`))try{await(await(await window.loadCardHelpers()).createCardElement({type:`entities`,entities:[]})).constructor.getConfigElement()}catch{}if(!customElements.get(`ha-entity-picker`))try{await Promise.race([customElements.whenDefined(`ha-selector`),new Promise((e,t)=>setTimeout(()=>t(Error(`timeout`)),1e4))]);let e=document.querySelector(`home-assistant`)?.hass,t=document.createElement(`div`);t.style.cssText=`position:fixed;left:-9999px;opacity:0;pointer-events:none`,document.body.appendChild(t);try{let n=document.createElement(`ha-selector`);n.hass=e,n.selector={entity:{}},t.appendChild(n),await Promise.race([customElements.whenDefined(`ha-entity-picker`),new Promise(e=>setTimeout(e,5e3))])}finally{t.remove()}}catch{}if(await customElements.whenDefined(`ha-card`),!customElements.get(`ha-date-range-picker`))try{await(await window.loadCardHelpers()).createCardElement({type:`energy-date-selection`,entities:[]}),await Promise.race([customElements.whenDefined(`ha-date-range-picker`),new Promise((e,t)=>setTimeout(t,5e3))])}catch{}if(!customElements.get(`ha-chart-base`))try{await(await window.loadCardHelpers()).createCardElement({type:`statistics-graph`,entities:[]}),await Promise.race([customElements.whenDefined(`ha-chart-base`),new Promise((e,t)=>setTimeout(t,5e3))])}catch{}}},un=3250368e4;v(),S(),M();var dn=class extends _{constructor(...e){super(...e),this.icon=``,this.heading=``,this.intro=``,this.badge=``,this.badgeHint=``}render(){return h`
      <ha-expansion-panel outlined>
        <div slot="header" class="panel-header">
          <ha-icon .icon=${this.icon}></ha-icon>
          <span>${this.heading}</span>
          ${this.badge?h`<rme-badge .label=${this.badge} .hint=${this.badgeHint}></rme-badge>`:g}
        </div>
        <div class="panel-content">
          ${this.intro?h`<p class="section-intro">${this.intro}</p>`:g}
          <slot></slot>
        </div>
      </ha-expansion-panel>
    `}static{this.styles=l`
    :host {
      display: block;
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 10px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .panel-header span {
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .panel-content {
      padding: 16px 16px 16px;
    }

    .section-intro {
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.5;
      margin: 0 0 16px;
      padding: 2px 0 2px 12px;
      border-left: 3px solid var(--divider-color);
    }
  `}};j([b({type:String})],dn.prototype,`icon`,void 0),j([b({type:String})],dn.prototype,`heading`,void 0),j([b({type:String})],dn.prototype,`intro`,void 0),j([b({type:String})],dn.prototype,`badge`,void 0),j([b({type:String})],dn.prototype,`badgeHint`,void 0),dn=j([y(`rme-settings-panel`)],dn),v();var q=class extends _{_fire(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}static{this.settingsBaseStyles=l`
    :host {
      display: block;
    }

    /* Round HA's MDC-based inputs to match the rest of the design */
    ha-textfield,
    ha-select,
    ha-entity-picker,
    ha-combo-box {
      --mdc-shape-small: 8px;
      --mdc-shape-medium: 8px;
      --md-filled-text-field-container-shape: 8px;
      --md-outlined-text-field-container-shape: 8px;
      display: block;
      border-radius: 8px;
      overflow: hidden;
      isolation: isolate;
      clip-path: inset(0 round 8px);
    }

    ha-entity-picker {
      clip-path: inset(0 round 8px 8px 4px 4px);
    }

    .settings-section {
      padding: 16px 0;
      border-top: 1px solid var(--divider-color);
    }
    .settings-section:first-child,
    .settings-section.first {
      border-top: none;
      padding-top: 0;
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
    }
    .toggle-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }
    .toggle-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .toggle-hint {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .threshold-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .threshold-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .threshold-field ha-textfield {
      width: 100%;
    }
    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    @media (max-width: 600px) {
      .threshold-grid {
        grid-template-columns: 1fr;
      }
    }
  `}};v(),S(),M();var fn=class extends q{constructor(...e){super(...e),this.groupByFloor=!1,this.climateControlActive=!0}render(){let e=this.hass.language;return h`
      ${this.hass.floors&&Object.keys(this.hass.floors).length>0?h`<div class="settings-section first">
              <div class="toggle-row">
                <div class="toggle-text">
                  <span class="toggle-label">${C(`settings.group_by_floor`,e)}</span>
                </div>
                <ha-switch
                  .checked=${this.groupByFloor}
                  @change=${e=>this._fire(`groupByFloor`,e.target.checked)}
                ></ha-switch>
              </div>
            </div>`:g}

      <div
        class="settings-section ${this.hass.floors&&Object.keys(this.hass.floors).length>0?``:`first`}"
      >
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${C(`settings.climate_control_active`,e)}</span>
            <span class="toggle-hint">${C(`settings.climate_control_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.climateControlActive}
            @change=${e=>this._fire(`climateControlActive`,e.target.checked)}
          ></ha-switch>
        </div>
      </div>
    `}static{this.styles=[q.settingsBaseStyles]}};j([b({attribute:!1})],fn.prototype,`hass`,void 0),j([b({type:Boolean})],fn.prototype,`groupByFloor`,void 0),j([b({type:Boolean})],fn.prototype,`climateControlActive`,void 0),fn=j([y(`rme-settings-general`)],fn),v(),S(),M();var pn=class extends q{constructor(...e){super(...e),this.outdoorTempSensor=``,this.outdoorHumiditySensor=``,this.weatherEntity=``,this.outdoorUnavailableNotify=!0,this._filterTemperature=e=>e.attributes?.device_class===`temperature`,this._filterHumidity=e=>e.attributes?.device_class===`humidity`}_getSensorValue(e){let t=this.hass.states[e];if(!t||t.state===`unavailable`||t.state===`unknown`)return null;let n=parseFloat(t.state);return isNaN(n)?null:Math.round(n*10)/10}render(){let e=this.hass.language,t=this.outdoorTempSensor?this._getSensorValue(this.outdoorTempSensor):null,n=this.outdoorHumiditySensor?this._getSensorValue(this.outdoorHumiditySensor):null;return h`
      <div class="settings-section first">
        <div class="sensor-grid">
          <div class="sensor-field">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this.outdoorTempSensor}
              .includeDomains=${[`sensor`]}
              .entityFilter=${this._filterTemperature}
              .label=${C(`settings.outdoor_sensor_label`,e)}
              allow-custom-entity
              @value-changed=${e=>{let t=e.detail?.value??``;t!==this.outdoorTempSensor&&this._fire(`outdoorTempSensor`,t)}}
            ></ha-entity-picker>
            ${t===null?this.outdoorTempSensor?h`<div class="current-value muted">
                      ${C(`settings.outdoor_waiting`,e)}
                    </div>`:g:h`<div class="current-value">
                    ${C(`settings.outdoor_current`,e,{temp:t.toFixed(1),unit:w(this.hass)})}
                  </div>`}
          </div>
          <div class="sensor-field">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this.outdoorHumiditySensor}
              .includeDomains=${[`sensor`]}
              .entityFilter=${this._filterHumidity}
              .label=${C(`settings.outdoor_humidity_label`,e)}
              allow-custom-entity
              @value-changed=${e=>{let t=e.detail?.value??``;t!==this.outdoorHumiditySensor&&this._fire(`outdoorHumiditySensor`,t)}}
            ></ha-entity-picker>
            ${n===null?this.outdoorHumiditySensor?h`<div class="current-value muted">
                      ${C(`settings.outdoor_waiting`,e)}
                    </div>`:g:h`<div class="current-value">
                    ${C(`settings.outdoor_humidity_current`,e,{value:String(n)})}
                  </div>`}
          </div>
        </div>
      </div>

      <div class="settings-section">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.weatherEntity}
          .includeDomains=${[`weather`]}
          .label=${C(`settings.weather_entity`,e)}
          allow-custom-entity
          @value-changed=${e=>{let t=e.detail?.value??``;t!==this.weatherEntity&&this._fire(`weatherEntity`,t)}}
        ></ha-entity-picker>
        <span class="field-hint">${C(`settings.weather_entity_hint`,e)}</span>
      </div>

      <div class="settings-section">
        <rme-toggle-row
          .label=${C(`settings.outdoor_unavailable_notify`,e)}
          .hint=${C(`settings.outdoor_unavailable_notify_hint`,e)}
          .checked=${this.outdoorUnavailableNotify}
          @toggle-changed=${e=>this._fire(`outdoorUnavailableNotify`,e.detail)}
        ></rme-toggle-row>
      </div>
    `}static{this.styles=[q.settingsBaseStyles,l`
      .sensor-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .current-value {
        margin-top: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .current-value.muted {
        color: var(--secondary-text-color);
      }

      @media (max-width: 600px) {
        .sensor-grid {
          grid-template-columns: 1fr;
        }
      }
    `]}};j([b({attribute:!1})],pn.prototype,`hass`,void 0),j([b({type:String})],pn.prototype,`outdoorTempSensor`,void 0),j([b({type:String})],pn.prototype,`outdoorHumiditySensor`,void 0),j([b({type:String})],pn.prototype,`weatherEntity`,void 0),j([b({type:Boolean})],pn.prototype,`outdoorUnavailableNotify`,void 0),pn=j([y(`rme-settings-sensors`)],pn),v(),S(),M();var mn=`https://github.com/snazzybean/roommind/blob/main/docs/control-and-devices.md`,hn=class extends q{constructor(...e){super(...e),this.controlMode=`mpc`,this.comfortWeight=70,this.outdoorCoolingMin=16,this.outdoorHeatingMax=22,this.predictionEnabled=!0,this.scheduleOffAction=`eco`}render(){let e=this.hass.language;return h`
      <div class="settings-section first">
        <p class="hint">${C(`settings.control_mode_hint`,e)}</p>
        <div class="radio-group">
          <label class="radio-option" @click=${()=>this._setControlMode(`mpc`)}>
            <ha-radio name="control_mode" .checked=${this.controlMode===`mpc`}></ha-radio>
            <span>${C(`settings.control_mode_mpc`,e)}</span>
          </label>
          <label class="radio-option" @click=${()=>this._setControlMode(`bangbang`)}>
            <ha-radio name="control_mode" .checked=${this.controlMode===`bangbang`}></ha-radio>
            <span>${C(`settings.control_mode_simple`,e)}</span>
          </label>
        </div>
      </div>

      <div class="settings-section">
        <label class="section-label">${C(`settings.comfort_weight`,e)}</label>
        <div class="slider-row">
          <span class="slider-label">${C(`settings.comfort_weight_efficiency`,e)}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            .value=${String(this.comfortWeight)}
            @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t!==this.comfortWeight&&this._fire(`comfortWeight`,t)}}
          />
          <span class="slider-label">${C(`settings.comfort_weight_comfort`,e)}</span>
        </div>
        <p class="hint helper-text">${C(`settings.comfort_weight_hint`,e)}</p>
        <a class="helper-link" href=${mn} target="_blank" rel="noreferrer">
          ${C(`common.learn_more`,e)}
        </a>
      </div>

      <div class="settings-section">
        <p class="hint">${C(`settings.smart_control_hint`,e)}</p>
        <div class="threshold-grid">
          <div class="threshold-field">
            <ha-textfield
              .value=${String(T(this.outdoorCoolingMin,this.hass))}
              .label=${C(`settings.outdoor_cooling_min`,e)}
              .suffix=${w(this.hass)}
              type="number"
              step=${k(this.hass)}
              min=${A(-10,40,this.hass).min}
              max=${A(-10,40,this.hass).max}
              @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`outdoorCoolingMin`,E(t,this.hass))}}
            ></ha-textfield>
            <span class="field-hint">${C(`settings.outdoor_cooling_min_hint`,e)}</span>
          </div>
          <div class="threshold-field">
            <ha-textfield
              .value=${String(T(this.outdoorHeatingMax,this.hass))}
              .label=${C(`settings.outdoor_heating_max`,e)}
              .suffix=${w(this.hass)}
              type="number"
              step=${k(this.hass)}
              min=${A(0,40,this.hass).min}
              max=${A(0,40,this.hass).max}
              @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`outdoorHeatingMax`,E(t,this.hass))}}
            ></ha-textfield>
            <span class="field-hint">${C(`settings.outdoor_heating_max_hint`,e)}</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${C(`settings.prediction_enabled`,e)}</span>
            <span class="toggle-hint">${C(`settings.prediction_enabled_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.predictionEnabled}
            @change=${e=>this._fire(`predictionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
      </div>

      <div class="settings-section">
        <ha-select
          .label=${C(`schedule.off_action_label`,e)}
          .value=${this.scheduleOffAction}
          .options=${[{value:`eco`,label:C(`schedule.off_action_eco`,e)},{value:`off`,label:C(`schedule.off_action_off`,e)}]}
          fixedMenuPosition
          @selected=${e=>{let t=I(e);t&&t!==this.scheduleOffAction&&this._fire(`scheduleOffAction`,t)}}
          @closed=${e=>e.stopPropagation()}
        >
          <ha-list-item value="eco">${C(`schedule.off_action_eco`,e)}</ha-list-item>
          <ha-list-item value="off">${C(`schedule.off_action_off`,e)}</ha-list-item>
        </ha-select>
      </div>
    `}_setControlMode(e){this.controlMode!==e&&this._fire(`controlMode`,e)}static{this.styles=[q.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 0 0 12px;
      }
      .helper-text {
        margin: 10px 0 0;
      }
      .section-label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .radio-option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }

      .slider-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .slider-row input[type="range"] {
        flex: 1;
        accent-color: var(--primary-color);
      }
      .slider-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .helper-link {
        display: inline-block;
        margin-top: 6px;
        font-size: 12px;
        color: var(--primary-color);
        text-decoration: none;
      }
      .helper-link:hover {
        text-decoration: underline;
      }
    `]}};j([b({attribute:!1})],hn.prototype,`hass`,void 0),j([b({type:String})],hn.prototype,`controlMode`,void 0),j([b({type:Number})],hn.prototype,`comfortWeight`,void 0),j([b({type:Number})],hn.prototype,`outdoorCoolingMin`,void 0),j([b({type:Number})],hn.prototype,`outdoorHeatingMax`,void 0),j([b({type:Boolean})],hn.prototype,`predictionEnabled`,void 0),j([b({type:String})],hn.prototype,`scheduleOffAction`,void 0),hn=j([y(`rme-settings-control`)],hn),v(),S(),M();var gn=class extends q{constructor(...e){super(...e),this.presenceEnabled=!1,this.presencePersons=[],this.presenceAwayAction=`eco`,this.presenceClearsOverride=!1}render(){let e=this.hass.language;return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${C(`presence.title`,e)}</span>
          <span class="toggle-hint">${C(`presence.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.presenceEnabled}
          @change=${e=>this._fire(`presenceEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.presenceEnabled?h`
              <div class="detail-section">
                <span class="field-hint">${C(`presence.hint_detail`,e)}</span>
                ${this.presencePersons.length>0?h`
                        <div class="person-list">
                          ${this.presencePersons.map(e=>{let t=this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`);return h`
                              <div class="person-row">
                                <ha-icon
                                  icon="mdi:account"
                                  style="--mdc-icon-size: 18px; color: var(--secondary-text-color)"
                                ></ha-icon>
                                <span class="person-name">${t}</span>
                                <ha-icon-button
                                  .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                                  @click=${()=>this._fire(`presencePersons`,this.presencePersons.filter(t=>t!==e))}
                                ></ha-icon-button>
                              </div>
                            `})}
                        </div>
                      `:g}
                <ha-entity-picker
                  .hass=${this.hass}
                  .includeDomains=${[`person`,`device_tracker`,`binary_sensor`,`input_boolean`]}
                  .entityFilter=${e=>!this.presencePersons.includes(e.entity_id)}
                  .label=${C(`presence.add_entity`,e)}
                  @value-changed=${e=>{let t=e.detail?.value;t&&!this.presencePersons.includes(t)&&this._fire(`presencePersons`,[...this.presencePersons,t]);let n=e.target;n.value=``}}
                ></ha-entity-picker>
                <ha-select
                  .label=${C(`presence.away_action_label`,e)}
                  .value=${this.presenceAwayAction}
                  .options=${[{value:`eco`,label:C(`presence.away_action_eco`,e)},{value:`off`,label:C(`presence.away_action_off`,e)}]}
                  fixedMenuPosition
                  @selected=${e=>{let t=I(e);t&&t!==this.presenceAwayAction&&this._fire(`presenceAwayAction`,t)}}
                  @closed=${e=>e.stopPropagation()}
                  style="margin-top: 8px"
                >
                  <ha-list-item value="eco"
                    >${C(`presence.away_action_eco`,e)}</ha-list-item
                  >
                  <ha-list-item value="off"
                    >${C(`presence.away_action_off`,e)}</ha-list-item
                  >
                </ha-select>
                <div class="toggle-row">
                  <div class="toggle-text">
                    <span class="toggle-label"
                      >${C(`presence.clears_override_label`,e)}</span
                    >
                    <span class="toggle-hint">${C(`presence.clears_override_hint`,e)}</span>
                  </div>
                  <ha-switch
                    .checked=${this.presenceClearsOverride}
                    @change=${e=>this._fire(`presenceClearsOverride`,e.target.checked)}
                  ></ha-switch>
                </div>
              </div>
            `:g}
    `}static{this.styles=[q.settingsBaseStyles,l`
      .detail-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 12px;
      }

      .person-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .person-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 4px 8px 4px 12px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.04);
      }
      .person-name {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
    `]}};j([b({attribute:!1})],gn.prototype,`hass`,void 0),j([b({type:Boolean})],gn.prototype,`presenceEnabled`,void 0),j([b({type:Array})],gn.prototype,`presencePersons`,void 0),j([b({type:String})],gn.prototype,`presenceAwayAction`,void 0),j([b({type:Boolean})],gn.prototype,`presenceClearsOverride`,void 0),gn=j([y(`rme-settings-presence`)],gn),v(),S(),M();var _n=class extends q{constructor(...e){super(...e),this.vacationActive=!1,this.vacationTemp=15,this.vacationUntil=``}render(){let e=this.hass.language;return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${C(`vacation.title`,e)}</span>
          <span class="toggle-hint">${C(`vacation.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.vacationActive}
          @change=${e=>{let t=e.target.checked;this._fire(`vacationActive`,t),t||this._fire(`vacationUntil`,``)}}
        ></ha-switch>
      </div>

      ${this.vacationActive?h`
              <div class="threshold-grid" style="margin-top: 12px">
                <div class="threshold-field">
                  <ha-textfield
                    .value=${this.vacationUntil}
                    .label=${C(`vacation.end_date`,e)}
                    type="datetime-local"
                    @change=${e=>this._fire(`vacationUntil`,e.target.value)}
                  ></ha-textfield>
                </div>
                <div class="threshold-field">
                  <ha-textfield
                    .value=${String(T(this.vacationTemp,this.hass))}
                    .label=${C(`vacation.setback_temp`,e)}
                    .suffix=${w(this.hass)}
                    type="number"
                    step=${k(this.hass)}
                    min=${A(5,25,this.hass).min}
                    max=${A(5,25,this.hass).max}
                    @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`vacationTemp`,E(t,this.hass))}}
                  ></ha-textfield>
                </div>
              </div>
            `:g}
    `}static{this.styles=[q.settingsBaseStyles]}};j([b({attribute:!1})],_n.prototype,`hass`,void 0),j([b({type:Boolean})],_n.prototype,`vacationActive`,void 0),j([b({type:Number})],_n.prototype,`vacationTemp`,void 0),j([b({type:String})],_n.prototype,`vacationUntil`,void 0),_n=j([y(`rme-settings-vacation`)],_n),v(),S(),M();var vn=class extends q{constructor(...e){super(...e),this.valveProtectionEnabled=!1,this.valveProtectionInterval=7}render(){let e=this.hass.language;return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${C(`valve_protection.title`,e)}</span>
          <span class="toggle-hint">${C(`valve_protection.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.valveProtectionEnabled}
          @change=${e=>this._fire(`valveProtectionEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.valveProtectionEnabled?h`
              <div class="threshold-grid" style="margin-top: 12px">
                <div class="threshold-field">
                  <ha-textfield
                    .value=${String(this.valveProtectionInterval)}
                    .label=${C(`valve_protection.interval_label`,e)}
                    .suffix=${C(`valve_protection.interval_suffix`,e)}
                    type="number"
                    step="1"
                    min="1"
                    max="90"
                    @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=1&&t<=90&&this._fire(`valveProtectionInterval`,t)}}
                  ></ha-textfield>
                  <span class="field-hint">${C(`valve_protection.interval_hint`,e)}</span>
                </div>
              </div>
            `:g}
    `}static{this.styles=[q.settingsBaseStyles]}};j([b({attribute:!1})],vn.prototype,`hass`,void 0),j([b({type:Boolean})],vn.prototype,`valveProtectionEnabled`,void 0),j([b({type:Number})],vn.prototype,`valveProtectionInterval`,void 0),vn=j([y(`rme-settings-valve`)],vn),v(),S(),M();var yn=class extends _{constructor(...e){super(...e),this.label=``,this.confirmMessage=``,this.disabled=!1,this.destructive=!1}static{this.styles=l`
    :host {
      display: block;
    }

    .confirm-btn {
      background: transparent;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      color: var(--primary-text-color);
      transition: all 0.2s;
    }

    .confirm-btn.destructive {
      border-color: var(--error-color);
      color: var(--error-color);
    }

    .confirm-btn.destructive:hover:not([disabled]) {
      background: var(--error-color);
      color: #fff;
    }

    .confirm-btn[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}render(){return h`
      <button
        class="confirm-btn ${this.destructive?`destructive`:``}"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        ${this.label}
      </button>
    `}_onClick(){this.disabled||this.confirmMessage&&!confirm(this.confirmMessage)||this.dispatchEvent(new CustomEvent(`confirmed`,{bubbles:!0,composed:!0}))}};j([b({type:String})],yn.prototype,`label`,void 0),j([b({type:String})],yn.prototype,`confirmMessage`,void 0),j([b({type:Boolean})],yn.prototype,`disabled`,void 0),j([b({type:Boolean})],yn.prototype,`destructive`,void 0),yn=j([y(`rme-confirm-button`)],yn),v(),S(),M();var bn=class extends _{constructor(...e){super(...e),this.compressorGroups=[],this._memberFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`))return!1;for(let e of this.compressorGroups)if(e.members.includes(t)||e.master_entity===t)return!1;return!0},this._masterFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`))return!1;for(let e of this.compressorGroups)if(e.members.includes(t)||e.master_entity===t)return!1;return!0}}static{this.styles=[R,l`
      :host {
        display: block;
      }
      .group-card {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }
      .member-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 8px 0;
      }
      .member-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        background: var(--card-background-color);
        border-radius: 4px;
      }
      .member-name {
        font-size: 14px;
        flex: 1;
      }
      .member-area {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-left: 4px;
      }
      .member-missing {
        color: var(--error-color);
      }
      .field-row {
        margin-top: 12px;
      }
      .field-hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .section-label {
        font-size: 14px;
        font-weight: 500;
        margin-top: 12px;
        margin-bottom: 4px;
      }
      .add-button {
        margin-top: 12px;
      }
      .delete-row {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
      }
      .no-groups {
        color: var(--secondary-text-color);
        font-size: 14px;
        padding: 8px 0;
      }
      ha-textfield {
        width: 100%;
      }
      ha-entity-picker {
        width: 100%;
      }
      .number-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }
      @media (max-width: 500px) {
        .number-fields {
          grid-template-columns: 1fr;
        }
      }
    `]}render(){let e=this.hass.language;return h`
      ${this.compressorGroups.length===0?h`<div class="no-groups">${C(`compressor.no_groups`,e)}</div>`:this.compressorGroups.map((e,t)=>this._renderGroup(e,t))}
      <ha-button class="add-button" @click=${this._addGroup}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${C(`compressor.add_group`,e)}
      </ha-button>
    `}_renderGroup(e,t){let n=this.hass.language;return h`
      <div class="group-card">
        <ha-textfield
          .value=${e.name}
          .label=${C(`compressor.group_name`,n)}
          @change=${e=>{let n=e.target.value;this._updateGroup(t,`name`,n)}}
        ></ha-textfield>

        <div class="section-label">${C(`compressor.members`,n)}</div>
        ${e.members.length>0?h`
                <div class="member-list">
                  ${e.members.map(e=>this._renderMember(e,t))}
                </div>
              `:g}
        <ha-entity-picker
          .hass=${this.hass}
          .value=${``}
          .includeDomains=${[`climate`]}
          .entityFilter=${this._memberFilter}
          @value-changed=${e=>{let n=e.detail?.value??``;if(!n)return;let r=[...this.compressorGroups];r[t]={...r[t],members:[...r[t].members,n]},this._fire(r);let i=e.target;i&&(i.value=``)}}
        ></ha-entity-picker>
        <div class="field-hint">${C(`compressor.members_hint`,n)}</div>

        <div class="number-fields">
          <div>
            <ha-textfield
              type="number"
              .value=${String(e.min_run_minutes)}
              .label=${C(`compressor.min_run`,n)}
              .suffix=${C(`compressor.min_run_suffix`,n)}
              min="1"
              max="60"
              step="1"
              @change=${e=>{let n=parseInt(e.target.value,10);!isNaN(n)&&n>=1&&n<=60&&this._updateGroup(t,`min_run_minutes`,n)}}
            ></ha-textfield>
            <div class="field-hint">${C(`compressor.min_run_hint`,n)}</div>
          </div>
          <div>
            <ha-textfield
              type="number"
              .value=${String(e.min_off_minutes)}
              .label=${C(`compressor.min_off`,n)}
              .suffix=${C(`compressor.min_off_suffix`,n)}
              min="1"
              max="30"
              step="1"
              @change=${e=>{let n=parseInt(e.target.value,10);!isNaN(n)&&n>=1&&n<=30&&this._updateGroup(t,`min_off_minutes`,n)}}
            ></ha-textfield>
            <div class="field-hint">${C(`compressor.min_off_hint`,n)}</div>
          </div>
        </div>

        <div class="section-label">${C(`compressor.master_entity`,n)}</div>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${e.master_entity||``}
          .includeDomains=${[`climate`]}
          .entityFilter=${this._masterFilter}
          @value-changed=${e=>{this._updateGroup(t,`master_entity`,e.detail?.value??``)}}
        ></ha-entity-picker>
        <div class="field-hint">${C(`compressor.master_entity_hint`,n)}</div>

        <div class="field-row">
          <ha-formfield .label=${C(`compressor.enforce_uniform_mode`,n)}>
            <ha-switch
              .checked=${e.enforce_uniform_mode||!1}
              @change=${e=>{this._updateGroup(t,`enforce_uniform_mode`,e.target.checked)}}
            ></ha-switch>
          </ha-formfield>
          <div class="field-hint">${C(`compressor.enforce_uniform_mode_hint`,n)}</div>
        </div>

        ${e.master_entity||e.enforce_uniform_mode?h`
                <div class="field-row">
                  <ha-select
                    .label=${C(`compressor.conflict_resolution`,n)}
                    .value=${e.conflict_resolution||`heating_priority`}
                    .options=${[{value:`heating_priority`,label:C(`compressor.conflict_heating_priority`,n)},{value:`cooling_priority`,label:C(`compressor.conflict_cooling_priority`,n)},{value:`majority`,label:C(`compressor.conflict_majority`,n)},{value:`outdoor_temp`,label:C(`compressor.conflict_outdoor_temp`,n)}]}
                    @selected=${e=>{let n=I(e);n&&this._updateGroup(t,`conflict_resolution`,n)}}
                    @closed=${e=>e.stopPropagation()}
                    fixedMenuPosition
                    style="width: 100%;"
                  >
                  </ha-select>
                  <div class="field-hint">
                    ${C(`compressor.conflict_resolution_hint`,n)}
                  </div>
                </div>
              `:g}

        <div class="field-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${e.action_script||``}
            .includeDomains=${[`script`]}
            .label=${C(`compressor.action_script`,n)}
            @value-changed=${e=>{this._updateGroup(t,`action_script`,e.detail?.value??``)}}
          ></ha-entity-picker>
          <div class="field-hint">${C(`compressor.action_script_hint`,n)}</div>
        </div>

        <div class="delete-row">
          <rme-confirm-button
            .label=${C(`compressor.delete`,n)}
            .confirmMessage=${C(`compressor.delete_confirm`,n).replace(`{name}`,e.name||`#${t+1}`)}
            destructive
            @confirmed=${()=>{this._fire(this.compressorGroups.filter((e,n)=>n!==t))}}
          ></rme-confirm-button>
        </div>
      </div>
    `}_renderMember(e,t){let n=this.hass.states[e],r=!n,i=n?.attributes?.friendly_name||e,a=this.hass.entities[e]?.area_id,o=a?this.hass.areas[a]?.name:void 0;return h`
      <div class="member-row">
        <span class="member-name ${r?`member-missing`:``}"
          >${i}${o?h`<span class="member-area">(${o})</span>`:g}</span
        >
        <ha-icon-button
          .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
          @click=${()=>{let n=[...this.compressorGroups];n[t]={...n[t],members:n[t].members.filter(t=>t!==e)},this._fire(n)}}
        ></ha-icon-button>
      </div>
    `}_updateGroup(e,t,n){let r=[...this.compressorGroups];r[e]={...r[e],[t]:n},this._fire(r)}_addGroup(){this._fire([...this.compressorGroups,{id:self.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,name:``,members:[],min_run_minutes:15,min_off_minutes:5,master_entity:``,conflict_resolution:`heating_priority`,action_script:``,enforce_uniform_mode:!1}])}_fire(e){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:`compressorGroups`,value:e},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],bn.prototype,`hass`,void 0),j([b({type:Array})],bn.prototype,`compressorGroups`,void 0),bn=j([y(`rme-settings-compressor`)],bn),v(),S(),M();var xn=class extends _{constructor(...e){super(...e),this.rooms={},this.sharedHeatSources=[]}static{this.styles=[R,l`
      .source {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }
      .rooms {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 8px;
        margin-top: 8px;
      }
      .hint {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin-top: 4px;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 12px;
      }
      ha-textfield,
      ha-entity-picker {
        width: 100%;
      }
      @media (max-width: 600px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    `]}render(){return h`
      ${this.sharedHeatSources.map((e,t)=>this._renderSource(e,t))}
      <ha-button @click=${this._add}
        ><ha-icon icon="mdi:plus" slot="icon"></ha-icon>Add whole-house heater</ha-button
      >
    `}_renderSource(e,t){return h`<div class="source">
      <ha-textfield
        label="Name"
        .value=${e.name}
        @change=${e=>this._set(t,`name`,e.target.value)}
      ></ha-textfield>
      <div class="grid">
        <div>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${e.entity_id}
            .includeDomains=${[`climate`,`switch`]}
            label="Heating device"
            @value-changed=${e=>this._set(t,`entity_id`,e.detail?.value??``)}
          ></ha-entity-picker>
          <div class="hint">Choose the Shelly switch or its climate wrapper.</div>
        </div>
        <ha-textfield
          type="number"
          min="1"
          step="1"
          label="Rooms needed to start"
          .value=${String(e.min_requesting_rooms)}
          @change=${e=>this._number(t,`min_requesting_rooms`,e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="0.1"
          label="Combined demand to start"
          .value=${String(e.aggregate_power_threshold)}
          @change=${e=>this._number(t,`aggregate_power_threshold`,e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="1"
          label="Gas-first grace"
          suffix="min"
          .value=${String(e.local_grace_minutes)}
          @change=${e=>this._number(t,`local_grace_minutes`,e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="0.1"
          label="Local trim starts below target"
          suffix="°C"
          .value=${String(e.local_trim_delta)}
          @change=${e=>this._number(t,`local_trim_delta`,e)}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          step="1"
          label="Minimum gas run"
          suffix="min"
          .value=${String(e.min_run_minutes)}
          @change=${e=>this._number(t,`min_run_minutes`,e)}
        ></ha-textfield>
      </div>
      <div class="hint">Rooms heated by this device</div>
      <div class="rooms">
        ${Object.entries(this.rooms).map(([n,r])=>h` <ha-formfield .label=${r.name||n}>
              <ha-checkbox
                .checked=${e.rooms.includes(n)}
                @change=${e=>this._room(t,n,e.target.checked)}
              ></ha-checkbox>
            </ha-formfield>`)}
      </div>
      <div class="actions">
        <ha-button @click=${()=>this._fire(this.sharedHeatSources.filter((e,n)=>n!==t))}
          >Remove</ha-button
        >
      </div>
    </div>`}_set(e,t,n){let r=[...this.sharedHeatSources];r[e]={...r[e],[t]:n},this._fire(r)}_number(e,t,n){let r=Number(n.target.value);Number.isFinite(r)&&this._set(e,t,r)}_room(e,t,n){let r=n?[...new Set([...this.sharedHeatSources[e].rooms,t])]:this.sharedHeatSources[e].rooms.filter(e=>e!==t);this._set(e,`rooms`,r)}_add(){this._fire([...this.sharedHeatSources,{id:self.crypto?.randomUUID?.()??String(Date.now()),name:`Whole house gas heating`,entity_id:``,rooms:[],enabled:!0,min_requesting_rooms:2,aggregate_power_threshold:1.2,start_delta:.5,stop_delta:.2,local_trim_delta:1,local_grace_minutes:15,min_run_minutes:15,min_off_minutes:10}])}_fire(e){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:`sharedHeatSources`,value:e},bubbles:!0,composed:!0}))}};j([b({attribute:!1})],xn.prototype,`hass`,void 0),j([b({attribute:!1})],xn.prototype,`rooms`,void 0),j([b({type:Array})],xn.prototype,`sharedHeatSources`,void 0),xn=j([y(`rme-settings-shared-heat`)],xn),v(),S(),M();var Sn=`__keep__`,J=class extends q{constructor(...e){super(...e),this.coilDryEnabled=!1,this.coilDryMinutes=20,this.coilDryMode=`fan_only`,this.coilDryFanMode=`low`,this.coilDryMinCoolingMinutes=10,this.coilDryDrainMinutes=0,this.availableFanModes=[]}_numberField(e,t,n,r,i,a,o){let s=this.hass.language;return h`
      <div class="threshold-field">
        <ha-textfield
          .value=${String(t)}
          .label=${C(n,s)}
          .suffix=${C(r,s)}
          type="number"
          step="1"
          min="${a}"
          max="${o}"
          @change=${t=>{let n=parseInt(t.target.value,10);!isNaN(n)&&n>=a&&n<=o&&this._fire(e,n)}}
        ></ha-textfield>
        <span class="field-hint">${C(i,s)}</span>
      </div>
    `}render(){let e=this.hass.language,t=this.availableFanModes.length?this.availableFanModes:[`low`,`medium`,`high`];return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${C(`coil_dry.title`,e)}</span>
          <span class="toggle-hint">${C(`coil_dry.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.coilDryEnabled}
          @change=${e=>this._fire(`coilDryEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.coilDryEnabled?h`
              <div class="threshold-grid" style="margin-top: 12px">
                ${this._numberField(`coilDryMinutes`,this.coilDryMinutes,`coil_dry.duration_label`,`coil_dry.duration_suffix`,`coil_dry.duration_hint`,1,60)}
                ${this._numberField(`coilDryMinCoolingMinutes`,this.coilDryMinCoolingMinutes,`coil_dry.min_cooling_label`,`coil_dry.min_cooling_suffix`,`coil_dry.min_cooling_hint`,1,240)}
                ${this._numberField(`coilDryDrainMinutes`,this.coilDryDrainMinutes,`coil_dry.drain_label`,`coil_dry.drain_suffix`,`coil_dry.drain_hint`,0,15)}
              </div>

              <div class="threshold-grid" style="margin-top: 12px">
                <div class="threshold-field">
                  <ha-select
                    .label=${C(`coil_dry.fan_mode_label`,e)}
                    .value=${this.coilDryFanMode===``?Sn:this.coilDryFanMode}
                    .options=${[{value:Sn,label:C(`coil_dry.fan_mode_keep`,e)},...t.map(e=>({value:e,label:e}))]}
                    @selected=${e=>{let t=I(e),n=this.coilDryFanMode===``?Sn:this.coilDryFanMode;t&&t!==n&&this._fire(`coilDryFanMode`,t===Sn?``:t)}}
                    @closed=${e=>e.stopPropagation()}
                    fixedMenuPosition
                  >
                    <ha-list-item value="${Sn}"
                      >${C(`coil_dry.fan_mode_keep`,e)}</ha-list-item
                    >
                    ${t.map(e=>h`<ha-list-item value="${e}">${e}</ha-list-item>`)}
                  </ha-select>
                  <span class="field-hint">${C(`coil_dry.fan_mode_hint`,e)}</span>
                </div>

                <div class="threshold-field">
                  <ha-select
                    .label=${C(`coil_dry.mode_label`,e)}
                    .value=${this.coilDryMode}
                    .options=${[{value:`fan_only`,label:C(`coil_dry.mode_fan_only`,e)},{value:`dry`,label:C(`coil_dry.mode_dry`,e)}]}
                    @selected=${e=>{let t=I(e);t&&t!==this.coilDryMode&&this._fire(`coilDryMode`,t)}}
                    @closed=${e=>e.stopPropagation()}
                    fixedMenuPosition
                  >
                    <ha-list-item value="fan_only"
                      >${C(`coil_dry.mode_fan_only`,e)}</ha-list-item
                    >
                    <ha-list-item value="dry">${C(`coil_dry.mode_dry`,e)}</ha-list-item>
                  </ha-select>
                  ${this.coilDryMode===`dry`?h`<span class="field-hint warning"
                          >${C(`coil_dry.mode_dry_warning`,e)}</span
                        >`:g}
                </div>
              </div>
            `:g}
    `}static{this.styles=[q.settingsBaseStyles,l`
      .field-hint.warning {
        color: var(--warning-color);
      }
    `]}};j([b({attribute:!1})],J.prototype,`hass`,void 0),j([b({type:Boolean})],J.prototype,`coilDryEnabled`,void 0),j([b({type:Number})],J.prototype,`coilDryMinutes`,void 0),j([b({type:String})],J.prototype,`coilDryMode`,void 0),j([b({type:String})],J.prototype,`coilDryFanMode`,void 0),j([b({type:Number})],J.prototype,`coilDryMinCoolingMinutes`,void 0),j([b({type:Number})],J.prototype,`coilDryDrainMinutes`,void 0),j([b({attribute:!1})],J.prototype,`availableFanModes`,void 0),J=j([y(`rme-settings-coil-dry`)],J),v(),S(),M();var Cn=class extends q{constructor(...e){super(...e),this.moldDetectionEnabled=!1,this.moldHumidityThreshold=70,this.moldSustainedMinutes=30,this.moldPreventionEnabled=!1,this.moldPreventionIntensity=`medium`}render(){let e=this.hass.language;return h`
      <!-- Detection section -->
      <div class="settings-section first">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">
              <ha-icon
                icon="mdi:bell-alert"
                style="--mdc-icon-size: 18px; vertical-align: middle; margin-right: 4px"
              ></ha-icon>
              ${C(`mold.detection`,e)}
            </span>
            <span class="toggle-hint">${C(`mold.detection_desc`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.moldDetectionEnabled}
            @change=${e=>this._fire(`moldDetectionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
        ${this.moldDetectionEnabled?h`
                <div class="threshold-grid" style="margin-top: 12px">
                  <div class="threshold-field">
                    <ha-textfield
                      .value=${String(this.moldHumidityThreshold)}
                      .label=${C(`mold.threshold`,e)}
                      .suffix=${`%`}
                      type="number"
                      step="1"
                      min="50"
                      max="90"
                      @change=${e=>{let t=parseFloat(e.target.value);!isNaN(t)&&t>=50&&t<=90&&this._fire(`moldHumidityThreshold`,t)}}
                    ></ha-textfield>
                    <span class="field-hint">${C(`mold.threshold_hint`,e)}</span>
                  </div>
                  <div class="threshold-field">
                    <ha-textfield
                      .value=${String(this.moldSustainedMinutes)}
                      .label=${C(`mold.sustained`,e)}
                      .suffix=${`min`}
                      type="number"
                      step="5"
                      min="5"
                      max="120"
                      @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=5&&t<=120&&this._fire(`moldSustainedMinutes`,t)}}
                    ></ha-textfield>
                    <span class="field-hint">${C(`mold.sustained_hint`,e)}</span>
                  </div>
                </div>
              `:g}
      </div>

      <!-- Prevention section -->
      <div class="settings-section">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">
              <ha-icon
                icon="mdi:shield-check"
                style="--mdc-icon-size: 18px; vertical-align: middle; margin-right: 4px"
              ></ha-icon>
              ${C(`mold.prevention`,e)}
            </span>
            <span class="toggle-hint">${C(`mold.prevention_desc`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.moldPreventionEnabled}
            @change=${e=>this._fire(`moldPreventionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
        ${this.moldPreventionEnabled?h`
                <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 4px;">
                  <ha-select
                    style="width: 100%;"
                    .value=${this.moldPreventionIntensity}
                    .label=${C(`mold.intensity`,e)}
                    .options=${[{value:`light`,label:C(`mold.intensity_light`,e,{delta:String(D(1,this.hass)),unit:w(this.hass)})},{value:`medium`,label:C(`mold.intensity_medium`,e,{delta:String(D(2,this.hass)),unit:w(this.hass)})},{value:`strong`,label:C(`mold.intensity_strong`,e,{delta:String(D(3,this.hass)),unit:w(this.hass)})}]}
                    fixedMenuPosition
                    @selected=${e=>{let t=I(e);t&&t!==this.moldPreventionIntensity&&this._fire(`moldPreventionIntensity`,t)}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    <ha-list-item value="light"
                      >${C(`mold.intensity_light`,e,{delta:String(D(1,this.hass)),unit:w(this.hass)})}</ha-list-item
                    >
                    <ha-list-item value="medium"
                      >${C(`mold.intensity_medium`,e,{delta:String(D(2,this.hass)),unit:w(this.hass)})}</ha-list-item
                    >
                    <ha-list-item value="strong"
                      >${C(`mold.intensity_strong`,e,{delta:String(D(3,this.hass)),unit:w(this.hass)})}</ha-list-item
                    >
                  </ha-select>
                  <span class="field-hint">${C(`mold.intensity_hint`,e)}</span>
                </div>
              `:g}
      </div>
    `}static{this.styles=[q.settingsBaseStyles]}};j([b({attribute:!1})],Cn.prototype,`hass`,void 0),j([b({type:Boolean})],Cn.prototype,`moldDetectionEnabled`,void 0),j([b({type:Number})],Cn.prototype,`moldHumidityThreshold`,void 0),j([b({type:Number})],Cn.prototype,`moldSustainedMinutes`,void 0),j([b({type:Boolean})],Cn.prototype,`moldPreventionEnabled`,void 0),j([b({type:String})],Cn.prototype,`moldPreventionIntensity`,void 0),Cn=j([y(`rme-settings-mold`)],Cn),v(),S(),M();var wn=class extends q{constructor(...e){super(...e),this.notificationsEnabled=!0,this.notificationTargets=[],this.notificationCooldown=60,this.moldPreventionEnabled=!1,this.moldPreventionNotify=!1}render(){let e=this.hass.language;return h`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${C(`notifications.enabled`,e)}</span>
          <span class="toggle-hint">${C(`notifications.enabled_hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.notificationsEnabled}
          @change=${e=>this._fire(`moldNotificationsEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.notificationsEnabled?h`
              <div class="detail-section">
                <p class="hint">${C(`notifications.desc`,e)}</p>

                <div class="target-list">
                  ${this.notificationTargets.map((t,n)=>{let r=t.entity_id?this.hass.states[t.entity_id]?.attributes?.friendly_name??t.entity_id.replace(`notify.`,``):C(`notifications.target_unnamed`,e);return h`
                      <div class="target-card">
                        <div class="target-header">
                          <ha-icon
                            icon="mdi:bell"
                            style="--mdc-icon-size: 18px; color: var(--secondary-text-color)"
                          ></ha-icon>
                          <span>${r}</span>
                          <ha-icon-button
                            .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                            @click=${()=>{this._fire(`moldNotificationTargets`,this.notificationTargets.filter((e,t)=>t!==n))}}
                          ></ha-icon-button>
                        </div>
                        <div class="target-detail">
                          <ha-entity-picker
                            .hass=${this.hass}
                            .value=${t.person_entity}
                            .includeDomains=${[`person`]}
                            .label=${C(`notifications.target_person`,e)}
                            allow-custom-entity
                            @value-changed=${e=>{let t=[...this.notificationTargets];t[n]={...t[n],person_entity:e.detail?.value??``},this._fire(`moldNotificationTargets`,t)}}
                          ></ha-entity-picker>
                          <ha-select
                            .value=${t.notify_when}
                            .options=${[{value:`always`,label:C(`notifications.target_when_always`,e)},{value:`home_only`,label:C(`notifications.target_when_home`,e)}]}
                            fixedMenuPosition
                            @selected=${e=>{let t=I(e);if(!t)return;let r=[...this.notificationTargets];r[n]={...r[n],notify_when:t},this._fire(`moldNotificationTargets`,r)}}
                            @closed=${e=>e.stopPropagation()}
                          >
                            <ha-list-item value="always"
                              >${C(`notifications.target_when_always`,e)}</ha-list-item
                            >
                            <ha-list-item value="home_only"
                              >${C(`notifications.target_when_home`,e)}</ha-list-item
                            >
                          </ha-select>
                        </div>
                      </div>
                    `})}
                </div>

                <div style="margin-top: 8px">
                  <ha-entity-picker
                    .hass=${this.hass}
                    .value=${``}
                    .includeDomains=${[`notify`]}
                    .label=${C(`notifications.add_target_label`,e)}
                    allow-custom-entity
                    @value-changed=${e=>{let t=e.detail?.value??``;if(!t)return;this._fire(`moldNotificationTargets`,[...this.notificationTargets,{entity_id:t,person_entity:``,notify_when:`always`}]);let n=e.target;n&&(n.value=``)}}
                  ></ha-entity-picker>
                  <span class="field-hint">${C(`notifications.add_target_hint`,e)}</span>
                </div>

                <div class="threshold-grid" style="margin-top: 12px">
                  <div class="threshold-field">
                    <ha-textfield
                      .value=${String(this.notificationCooldown)}
                      .label=${C(`notifications.cooldown`,e)}
                      .suffix=${`min`}
                      type="number"
                      step="5"
                      min="10"
                      max="1440"
                      @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=10&&t<=1440&&this._fire(`moldNotificationCooldown`,t)}}
                    ></ha-textfield>
                    <span class="field-hint">${C(`notifications.cooldown_hint`,e)}</span>
                  </div>
                </div>

                ${this.moldPreventionEnabled?h`
                        <div class="toggle-row" style="margin-top: 12px">
                          <div class="toggle-text">
                            <span class="toggle-label"
                              >${C(`notifications.mold_prevention_notify`,e)}</span
                            >
                            <span class="toggle-hint"
                              >${C(`notifications.mold_prevention_notify_hint`,e)}</span
                            >
                          </div>
                          <ha-switch
                            .checked=${this.moldPreventionNotify}
                            @change=${e=>this._fire(`moldPreventionNotify`,e.target.checked)}
                          ></ha-switch>
                        </div>
                      `:g}
              </div>
            `:g}
    `}static{this.styles=[q.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 12px 0;
        line-height: 1.4;
      }
      .detail-section {
        margin-top: 4px;
      }
      .field-hint {
        color: var(--secondary-text-color);
        font-size: 12px;
      }

      .target-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .target-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 8px 8px 12px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.04);
      }
      .target-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .target-header span {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
      .target-detail {
        display: flex;
        gap: 8px;
        align-items: center;
        padding-left: 26px;
      }
      .target-detail ha-entity-picker {
        flex: 1;
      }
      .target-detail ha-select {
        min-width: 120px;
      }

      @media (max-width: 600px) {
        .target-detail {
          flex-direction: column;
          padding-left: 0;
        }
      }
    `]}};j([b({attribute:!1})],wn.prototype,`hass`,void 0),j([b({type:Boolean})],wn.prototype,`notificationsEnabled`,void 0),j([b({type:Array})],wn.prototype,`notificationTargets`,void 0),j([b({type:Number})],wn.prototype,`notificationCooldown`,void 0),j([b({type:Boolean})],wn.prototype,`moldPreventionEnabled`,void 0),j([b({type:Boolean})],wn.prototype,`moldPreventionNotify`,void 0),wn=j([y(`rme-settings-notifications`)],wn),v(),S(),M();var Tn=250,En=class extends q{constructor(...e){super(...e),this.rooms={},this.learningDisabledRooms=[],this.boostAppliedAt={},this.roomsLive={},this._showLearningExceptions=!1,this._boostSelectedRoom=``}render(){let e=this.hass.language,t=Object.entries(this.rooms).map(([e])=>({areaId:e,name:this.hass.areas?.[e]?.name??e})).sort((e,t)=>e.name.localeCompare(t.name)),n=Object.keys(this.rooms),r=n.length===0||this.learningDisabledRooms.length<n.length,i=this.learningDisabledRooms.filter(e=>n.includes(e)).length;return h`
      <!-- Learning toggle -->
      <div class="settings-section first">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${C(`settings.learning_title`,e)}</span>
            <span class="toggle-hint">${C(`settings.learning_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${r}
            @change=${e=>{let t=e.target.checked;this._fire(`learningDisabledRooms`,t?[]:Object.keys(this.rooms)),t||(this._showLearningExceptions=!1)}}
          ></ha-switch>
        </div>
        ${r&&t.length>0?h`
                <button
                  class="exceptions-link"
                  @click=${()=>{this._showLearningExceptions=!this._showLearningExceptions}}
                >
                  <span
                    >${i>0?`${i} ${C(i===1?`settings.learning_room_paused`:`settings.learning_rooms_paused`,e)}`:C(`settings.learning_exceptions`,e)}</span
                  >
                  <ha-icon
                    icon=${this._showLearningExceptions?`mdi:chevron-up`:`mdi:chevron-down`}
                    style="--mdc-icon-size: 16px"
                  ></ha-icon>
                </button>
                ${this._showLearningExceptions?h`
                        <div class="room-toggles">
                          ${t.map(e=>h`
                              <div class="room-toggle-row">
                                <span class="room-toggle-name">${e.name}</span>
                                <ha-switch
                                  .checked=${!this.learningDisabledRooms.includes(e.areaId)}
                                  @change=${t=>{let n=!t.target.checked,r=new Set(this.learningDisabledRooms);n?r.add(e.areaId):r.delete(e.areaId),this._fire(`learningDisabledRooms`,[...r])}}
                                ></ha-switch>
                              </div>
                            `)}
                        </div>
                      `:g}
              `:g}
      </div>

      <!-- Boost learning -->
      <div class="settings-section">
        <span class="toggle-label">${C(`settings.boost_title`,e)}</span>
        <p class="hint">${C(`settings.boost_hint`,e)}</p>

        ${t.length>0?h`
                <div class="room-select-row">
                  <ha-select
                    .value=${this._boostSelectedRoom}
                    .label=${C(`settings.boost_room_select`,e)}
                    .options=${t.map(e=>({value:e.areaId,label:e.name}))}
                    fixedMenuPosition
                    @selected=${e=>{this._boostSelectedRoom=I(e)}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    ${t.map(e=>h`<ha-list-item value=${e.areaId}>${e.name}</ha-list-item>`)}
                  </ha-select>
                  ${this._boostSelectedRoom?h`<ha-icon-button
                          .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                          @click=${()=>{this._boostSelectedRoom=``}}
                        ></ha-icon-button>`:g}
                  ${this._boostSelectedRoom&&this._isCooldown(this._boostSelectedRoom)?h`<span class="boost-status">
                          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                          ${C(`settings.boost_cooldown`,e)}
                        </span>`:h`<button
                          class="boost-btn"
                          ?disabled=${!this._boostSelectedRoom||this._isCooldown(this._boostSelectedRoom)}
                          @click=${()=>this._boostSelectedRoom&&this._boostLearning(this._boostSelectedRoom)}
                        >
                          <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                          ${C(`settings.boost_btn`,e)}
                        </button>`}
                </div>
              `:h`<p class="hint">${C(`settings.boost_no_rooms`,e)}</p>`}
      </div>
    `}_isCooldown(e){let t=this.roomsLive?.[e]?.n_observations??0,n=this.boostAppliedAt[e];return n!==void 0&&t-n<Tn}async _boostLearning(e){try{L(this,`saving`);let t=await this.hass.callWS({type:`roommind_eklabs/model/boost_learning`,area_id:e});L(this,`saved`),this.dispatchEvent(new CustomEvent(`boost-applied`,{detail:{area_id:e,n_observations:t.n_observations},bubbles:!0,composed:!0}))}catch{L(this,`error`)}}static{this.styles=[q.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 4px 0 12px;
        line-height: 1.4;
      }

      .exceptions-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        padding: 8px 0 0;
        margin: 0;
        cursor: pointer;
        font-size: 13px;
        color: var(--primary-color);
        font-family: inherit;
      }
      .exceptions-link:hover {
        text-decoration: underline;
      }

      .room-toggles {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 12px;
      }
      .room-toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
      }
      .room-toggle-name {
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .room-select-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .room-select-row ha-select {
        flex: 1;
      }

      .boost-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border: 1px solid var(--primary-color);
        border-radius: 8px;
        background: transparent;
        color: var(--primary-color);
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.15s;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
      .boost-btn:hover {
        background: rgba(var(--rgb-primary-color), 0.08);
      }
      .boost-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .boost-btn:disabled:hover {
        background: transparent;
      }

      .boost-status {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--success-color, #4caf50);
        font-size: 13px;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
    `]}};j([b({attribute:!1})],En.prototype,`hass`,void 0),j([b({attribute:!1})],En.prototype,`rooms`,void 0),j([b({type:Array})],En.prototype,`learningDisabledRooms`,void 0),j([b({attribute:!1})],En.prototype,`boostAppliedAt`,void 0),j([b({attribute:!1})],En.prototype,`roomsLive`,void 0),j([x()],En.prototype,`_showLearningExceptions`,void 0),j([x()],En.prototype,`_boostSelectedRoom`,void 0),En=j([y(`rme-settings-learning`)],En),v(),S(),M();var Dn=class extends q{constructor(...e){super(...e),this.rooms={},this._resetSelectedRoom=``}render(){let e=this.hass.language,t=Object.entries(this.rooms).map(([e])=>({areaId:e,name:this.hass.areas?.[e]?.name??e})).sort((e,t)=>e.name.localeCompare(t.name));return h`
      <div class="settings-section first">
        <div class="reset-row">
          <div class="reset-text">
            <span class="toggle-label">${C(`settings.reset_all_label`,e)}</span>
            <span class="toggle-hint">${C(`settings.reset_all_hint`,e)}</span>
          </div>
          <button class="reset-btn" @click=${this._resetAllModels}>
            <ha-icon icon="mdi:restart-alert"></ha-icon>
            ${C(`settings.reset_all_btn`,e)}
          </button>
        </div>
      </div>

      <div class="settings-section">
        <div class="reset-text" style="margin-bottom: 12px">
          <span class="toggle-label">${C(`settings.reset_room_label`,e)}</span>
          <span class="toggle-hint">${C(`settings.reset_room_hint`,e)}</span>
        </div>
        ${t.length>0?h`
                <div class="reset-room-row">
                  <ha-select
                    .value=${this._resetSelectedRoom}
                    .label=${C(`settings.reset_room_select`,e)}
                    .options=${t.map(e=>({value:e.areaId,label:e.name}))}
                    fixedMenuPosition
                    @selected=${e=>{this._resetSelectedRoom=I(e)}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    ${t.map(e=>h`<ha-list-item value=${e.areaId}>${e.name}</ha-list-item>`)}
                  </ha-select>
                  ${this._resetSelectedRoom?h`<ha-icon-button
                          .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                          @click=${()=>{this._resetSelectedRoom=``}}
                        ></ha-icon-button>`:g}
                  <button
                    class="reset-btn"
                    ?disabled=${!this._resetSelectedRoom}
                    @click=${()=>this._resetSelectedRoom&&this._resetRoomModel(this._resetSelectedRoom)}
                  >
                    <ha-icon icon="mdi:restart"></ha-icon>
                    ${C(`settings.reset_btn`,e)}
                  </button>
                </div>
              `:h`<p class="hint">${C(`settings.reset_no_rooms`,e)}</p>`}
      </div>
    `}async _resetRoomModel(e){let t=this.hass.language;if(confirm(C(`settings.reset_room_confirm`,t)))try{L(this,`saving`),await this.hass.callWS({type:`roommind_eklabs/thermal/reset`,area_id:e}),L(this,`saved`)}catch{L(this,`error`)}}async _resetAllModels(){let e=this.hass.language;if(confirm(C(`settings.reset_all_confirm`,e)))try{L(this,`saving`),await this.hass.callWS({type:`roommind_eklabs/thermal/reset_all`}),L(this,`saved`)}catch{L(this,`error`)}}static{this.styles=[q.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 0;
      }

      .reset-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
      .reset-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }

      .reset-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border: 1px solid var(--error-color, #d32f2f);
        border-radius: 8px;
        background: transparent;
        color: var(--error-color, #d32f2f);
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.15s;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
      .reset-btn:hover {
        background: rgba(211, 47, 47, 0.08);
      }
      .reset-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .reset-btn:disabled:hover {
        background: transparent;
      }

      .reset-room-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .reset-room-row ha-select {
        flex: 1;
      }

      @media (max-width: 600px) {
        .reset-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
      }
    `]}};j([b({attribute:!1})],Dn.prototype,`hass`,void 0),j([b({attribute:!1})],Dn.prototype,`rooms`,void 0),j([x()],Dn.prototype,`_resetSelectedRoom`,void 0),Dn=j([y(`rme-settings-reset`)],Dn),v(),S(),M();var Y=class extends _{constructor(...e){super(...e),this.rooms={},this._groupByFloor=!1,this._climateControlActive=!0,this._learningDisabledRooms=[],this._outdoorTempSensor=``,this._outdoorHumiditySensor=``,this._outdoorCoolingMin=16,this._outdoorHeatingMax=22,this._controlMode=`mpc`,this._comfortWeight=70,this._weatherEntity=``,this._outdoorUnavailableNotify=!0,this._predictionEnabled=!0,this._vacationActive=!1,this._vacationTemp=15,this._vacationUntil=``,this._presenceEnabled=!1,this._presencePersons=[],this._presenceAwayAction=`eco`,this._presenceClearsOverride=!1,this._scheduleOffAction=`eco`,this._valveProtectionEnabled=!1,this._valveProtectionInterval=7,this._moldDetectionEnabled=!1,this._moldHumidityThreshold=70,this._moldSustainedMinutes=30,this._moldNotificationCooldown=60,this._moldNotificationsEnabled=!0,this._moldNotificationTargets=[],this._moldPreventionEnabled=!1,this._moldPreventionIntensity=`medium`,this._moldPreventionNotify=!1,this._compressorGroups=[],this._sharedHeatSources=[],this._coilDryEnabled=!1,this._coilDryMinutes=20,this._coilDryMode=`fan_only`,this._coilDryFanMode=`low`,this._coilDryMinCoolingMinutes=10,this._coilDryDrainMinutes=0,this._boostAppliedAt={},this._loaded=!1}connectedCallback(){super.connectedCallback(),this._loadSettings()}disconnectedCallback(){super.disconnectedCallback(),this._saveDebounce&&clearTimeout(this._saveDebounce)}async _loadSettings(){try{let e=(await this.hass.callWS({type:`roommind_eklabs/settings/get`})).settings;this._groupByFloor=e.group_by_floor??!1,this._climateControlActive=e.climate_control_active??!0,this._learningDisabledRooms=e.learning_disabled_rooms??[],this._outdoorTempSensor=e.outdoor_temp_sensor??``,this._outdoorHumiditySensor=e.outdoor_humidity_sensor??``,this._outdoorCoolingMin=e.outdoor_cooling_min??16,this._outdoorHeatingMax=e.outdoor_heating_max??22,this._controlMode=e.control_mode??`mpc`,this._comfortWeight=e.comfort_weight??70,this._weatherEntity=e.weather_entity??``,this._outdoorUnavailableNotify=e.outdoor_unavailable_notify??!0,this._predictionEnabled=e.prediction_enabled??!0;let t=e.vacation_until;this._vacationActive=!!(t&&t>Date.now()/1e3),this._vacationTemp=e.vacation_temp??15,this._vacationUntil=t&&t>Date.now()/1e3&&t<3250368e4?this._tsToDatetimeLocal(t):``,this._presenceEnabled=e.presence_enabled??!1,this._presencePersons=e.presence_persons??[],this._presenceAwayAction=e.presence_away_action??`eco`,this._presenceClearsOverride=e.presence_clears_override??!1,this._scheduleOffAction=e.schedule_off_action??`eco`,this._valveProtectionEnabled=e.valve_protection_enabled??!1,this._valveProtectionInterval=e.valve_protection_interval_days??7,this._moldDetectionEnabled=e.mold_detection_enabled??!1,this._moldHumidityThreshold=e.mold_humidity_threshold??70,this._moldSustainedMinutes=e.mold_sustained_minutes??30,this._moldNotificationCooldown=e.mold_notification_cooldown??60,this._moldNotificationsEnabled=e.mold_notifications_enabled??!0,this._moldNotificationTargets=e.mold_notification_targets??[],this._moldPreventionEnabled=e.mold_prevention_enabled??!1,this._moldPreventionIntensity=e.mold_prevention_intensity??`medium`,this._moldPreventionNotify=e.mold_prevention_notify_enabled??!1,this._compressorGroups=e.compressor_groups??[],this._sharedHeatSources=e.shared_heat_sources??[],this._coilDryEnabled=e.coil_dry_enabled??!1,this._coilDryMinutes=e.coil_dry_minutes??20,this._coilDryMode=e.coil_dry_mode??`fan_only`,this._coilDryFanMode=e.coil_dry_fan_mode??`low`,this._coilDryMinCoolingMinutes=e.coil_dry_min_cooling_minutes??10,this._coilDryDrainMinutes=e.coil_dry_drain_minutes??0,this._boostAppliedAt=e.boost_applied_at??{}}catch(e){console.debug(`[RoomMind] loadSettings:`,e)}finally{this._loaded=!0}}render(){if(!this._loaded)return h`<div class="loading">${C(`panel.loading`,this.hass.language)}</div>`;let e=this.hass.language;return h`
      <rme-settings-panel
        icon="mdi:power"
        .heading=${C(`settings.general_title`,e)}
        .intro=${C(`settings.intro.general`,e)}
      >
        <rme-settings-general
          .hass=${this.hass}
          .groupByFloor=${this._groupByFloor}
          .climateControlActive=${this._climateControlActive}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-general>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:thermometer"
        .heading=${C(`settings.sensors_title`,e)}
        .intro=${C(`settings.intro.sensors`,e)}
      >
        <rme-settings-sensors
          .hass=${this.hass}
          .outdoorTempSensor=${this._outdoorTempSensor}
          .outdoorHumiditySensor=${this._outdoorHumiditySensor}
          .weatherEntity=${this._weatherEntity}
          .outdoorUnavailableNotify=${this._outdoorUnavailableNotify}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-sensors>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:tune-variant"
        .heading=${C(`settings.control_title`,e)}
        .intro=${C(`settings.intro.control`,e)}
      >
        <rme-settings-control
          .hass=${this.hass}
          .controlMode=${this._controlMode}
          .comfortWeight=${this._comfortWeight}
          .outdoorCoolingMin=${this._outdoorCoolingMin}
          .outdoorHeatingMax=${this._outdoorHeatingMax}
          .predictionEnabled=${this._predictionEnabled}
          .scheduleOffAction=${this._scheduleOffAction}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-control>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:home-account"
        .heading=${C(`presence.title`,e)}
        .intro=${C(`settings.intro.presence`,e)}
      >
        <rme-settings-presence
          .hass=${this.hass}
          .presenceEnabled=${this._presenceEnabled}
          .presencePersons=${this._presencePersons}
          .presenceAwayAction=${this._presenceAwayAction}
          .presenceClearsOverride=${this._presenceClearsOverride}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-presence>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:airplane"
        .heading=${C(`vacation.title`,e)}
        .intro=${C(`settings.intro.vacation`,e)}
      >
        <rme-settings-vacation
          .hass=${this.hass}
          .vacationActive=${this._vacationActive}
          .vacationTemp=${this._vacationTemp}
          .vacationUntil=${this._vacationUntil}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-vacation>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:shield-refresh"
        .heading=${C(`valve_protection.title`,e)}
        .intro=${C(`settings.intro.valve`,e)}
      >
        <rme-settings-valve
          .hass=${this.hass}
          .valveProtectionEnabled=${this._valveProtectionEnabled}
          .valveProtectionInterval=${this._valveProtectionInterval}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-valve>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:heat-pump-outline"
        .heading=${C(`compressor.title`,e)}
        .intro=${C(`settings.intro.compressor`,e)}
      >
        <rme-settings-compressor
          .hass=${this.hass}
          .compressorGroups=${this._compressorGroups}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-compressor>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:radiator"
        heading="Whole-house heating"
        intro="Use central gas heat for broad demand, then let room heaters trim rooms that remain cold."
      >
        <rme-settings-shared-heat
          .hass=${this.hass}
          .rooms=${this.rooms}
          .sharedHeatSources=${this._sharedHeatSources}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-shared-heat>
      </rme-settings-panel>

      <rme-settings-panel .heading=${C(`coil_dry.title`,e)} icon="mdi:air-filter">
        <rme-settings-coil-dry
          .hass=${this.hass}
          .coilDryEnabled=${this._coilDryEnabled}
          .coilDryMinutes=${this._coilDryMinutes}
          .coilDryMode=${this._coilDryMode}
          .coilDryFanMode=${this._coilDryFanMode}
          .coilDryMinCoolingMinutes=${this._coilDryMinCoolingMinutes}
          .coilDryDrainMinutes=${this._coilDryDrainMinutes}
          .availableFanModes=${this._availableAcFanModes()}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-coil-dry>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:water-alert"
        .heading=${C(`mold.title`,e)}
        .intro=${C(`settings.intro.mold`,e)}
      >
        <rme-settings-mold
          .hass=${this.hass}
          .moldDetectionEnabled=${this._moldDetectionEnabled}
          .moldHumidityThreshold=${this._moldHumidityThreshold}
          .moldSustainedMinutes=${this._moldSustainedMinutes}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionIntensity=${this._moldPreventionIntensity}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-mold>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:bell-outline"
        .heading=${C(`notifications.title`,e)}
        .intro=${C(`settings.intro.notifications`,e)}
        .badge=${C(`badge.beta`,e)}
        .badgeHint=${C(`badge.beta_hint`,e)}
      >
        <rme-settings-notifications
          .hass=${this.hass}
          .notificationsEnabled=${this._moldNotificationsEnabled}
          .notificationTargets=${this._moldNotificationTargets}
          .notificationCooldown=${this._moldNotificationCooldown}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionNotify=${this._moldPreventionNotify}
          @setting-changed=${this._onSettingChanged}
        ></rme-settings-notifications>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:brain"
        .heading=${C(`settings.learning_title`,e)}
        .intro=${C(`settings.intro.learning`,e)}
      >
        <rme-settings-learning
          .hass=${this.hass}
          .rooms=${this.rooms}
          .learningDisabledRooms=${this._learningDisabledRooms}
          .boostAppliedAt=${this._boostAppliedAt}
          .roomsLive=${Object.fromEntries(Object.entries(this.rooms).map(([e,t])=>[e,t.live??{}]))}
          @setting-changed=${this._onSettingChanged}
          @boost-applied=${this._onBoostApplied}
        ></rme-settings-learning>
      </rme-settings-panel>

      <rme-settings-panel
        icon="mdi:restart"
        .heading=${C(`settings.reset_title`,e)}
        .intro=${C(`settings.intro.reset`,e)}
      >
        <rme-settings-reset .hass=${this.hass} .rooms=${this.rooms}></rme-settings-reset>
      </rme-settings-panel>
    `}_onBoostApplied(e){let{area_id:t,n_observations:n}=e.detail;this._boostAppliedAt={...this._boostAppliedAt,[t]:n}}_onSettingChanged(e){let{key:t,value:n}=e.detail;this[`_${t}`]=n,this._autoSave()}_availableAcFanModes(){let e=new Set;for(let t of Object.values(this.rooms??{}))for(let n of t.devices??[]){if(n.type!==`ac`)continue;let t=this.hass?.states?.[n.entity_id];for(let n of t?.attributes?.fan_modes??[])e.add(n)}return[...e].sort()}_tsToDatetimeLocal(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}_autoSave(){this._saveDebounce&&clearTimeout(this._saveDebounce),this._saveDebounce=setTimeout(()=>this._doSave(),500)}async _doSave(){L(this,`saving`);try{await this.hass.callWS({type:`roommind_eklabs/settings/save`,group_by_floor:this._groupByFloor,climate_control_active:this._climateControlActive,learning_disabled_rooms:this._learningDisabledRooms,outdoor_temp_sensor:this._outdoorTempSensor,outdoor_humidity_sensor:this._outdoorHumiditySensor,outdoor_cooling_min:this._outdoorCoolingMin,outdoor_heating_max:this._outdoorHeatingMax,control_mode:this._controlMode,comfort_weight:this._comfortWeight,weather_entity:this._weatherEntity,outdoor_unavailable_notify:this._outdoorUnavailableNotify,prediction_enabled:this._predictionEnabled,vacation_temp:this._vacationTemp,vacation_until:this._vacationActive?this._vacationUntil?new Date(this._vacationUntil).getTime()/1e3:un:null,presence_enabled:this._presenceEnabled,presence_persons:this._presencePersons.filter(e=>e),presence_away_action:this._presenceAwayAction,presence_clears_override:this._presenceClearsOverride,schedule_off_action:this._scheduleOffAction,valve_protection_enabled:this._valveProtectionEnabled,valve_protection_interval_days:this._valveProtectionInterval,compressor_groups:this._compressorGroups.filter(e=>e.members.length>0),shared_heat_sources:this._sharedHeatSources.filter(e=>e.entity_id&&e.rooms.length>0),coil_dry_enabled:this._coilDryEnabled,coil_dry_minutes:this._coilDryMinutes,coil_dry_mode:this._coilDryMode,coil_dry_fan_mode:this._coilDryFanMode,coil_dry_min_cooling_minutes:this._coilDryMinCoolingMinutes,coil_dry_drain_minutes:this._coilDryDrainMinutes,mold_detection_enabled:this._moldDetectionEnabled,mold_humidity_threshold:this._moldHumidityThreshold,mold_sustained_minutes:this._moldSustainedMinutes,mold_notification_cooldown:this._moldNotificationCooldown,mold_notifications_enabled:this._moldNotificationsEnabled,mold_notification_targets:this._moldNotificationTargets.filter(e=>e.entity_id),mold_prevention_enabled:this._moldPreventionEnabled,mold_prevention_intensity:this._moldPreventionIntensity,mold_prevention_notify_enabled:this._moldPreventionNotify,mold_prevention_notify_targets:this._moldPreventionNotify?this._moldNotificationTargets.filter(e=>e.entity_id):[]}),L(this,`saved`)}catch{L(this,`error`)}}static{this.styles=l`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 16px;
    }

    .loading {
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `}};j([b({attribute:!1})],Y.prototype,`hass`,void 0),j([b({attribute:!1})],Y.prototype,`rooms`,void 0),j([x()],Y.prototype,`_groupByFloor`,void 0),j([x()],Y.prototype,`_climateControlActive`,void 0),j([x()],Y.prototype,`_learningDisabledRooms`,void 0),j([x()],Y.prototype,`_outdoorTempSensor`,void 0),j([x()],Y.prototype,`_outdoorHumiditySensor`,void 0),j([x()],Y.prototype,`_outdoorCoolingMin`,void 0),j([x()],Y.prototype,`_outdoorHeatingMax`,void 0),j([x()],Y.prototype,`_controlMode`,void 0),j([x()],Y.prototype,`_comfortWeight`,void 0),j([x()],Y.prototype,`_weatherEntity`,void 0),j([x()],Y.prototype,`_outdoorUnavailableNotify`,void 0),j([x()],Y.prototype,`_predictionEnabled`,void 0),j([x()],Y.prototype,`_vacationActive`,void 0),j([x()],Y.prototype,`_vacationTemp`,void 0),j([x()],Y.prototype,`_vacationUntil`,void 0),j([x()],Y.prototype,`_presenceEnabled`,void 0),j([x()],Y.prototype,`_presencePersons`,void 0),j([x()],Y.prototype,`_presenceAwayAction`,void 0),j([x()],Y.prototype,`_presenceClearsOverride`,void 0),j([x()],Y.prototype,`_scheduleOffAction`,void 0),j([x()],Y.prototype,`_valveProtectionEnabled`,void 0),j([x()],Y.prototype,`_valveProtectionInterval`,void 0),j([x()],Y.prototype,`_moldDetectionEnabled`,void 0),j([x()],Y.prototype,`_moldHumidityThreshold`,void 0),j([x()],Y.prototype,`_moldSustainedMinutes`,void 0),j([x()],Y.prototype,`_moldNotificationCooldown`,void 0),j([x()],Y.prototype,`_moldNotificationsEnabled`,void 0),j([x()],Y.prototype,`_moldNotificationTargets`,void 0),j([x()],Y.prototype,`_moldPreventionEnabled`,void 0),j([x()],Y.prototype,`_moldPreventionIntensity`,void 0),j([x()],Y.prototype,`_moldPreventionNotify`,void 0),j([x()],Y.prototype,`_compressorGroups`,void 0),j([x()],Y.prototype,`_sharedHeatSources`,void 0),j([x()],Y.prototype,`_coilDryEnabled`,void 0),j([x()],Y.prototype,`_coilDryMinutes`,void 0),j([x()],Y.prototype,`_coilDryMode`,void 0),j([x()],Y.prototype,`_coilDryFanMode`,void 0),j([x()],Y.prototype,`_coilDryMinCoolingMinutes`,void 0),j([x()],Y.prototype,`_coilDryDrainMinutes`,void 0),j([x()],Y.prototype,`_boostAppliedAt`,void 0),j([x()],Y.prototype,`_loaded`,void 0),Y=j([y(`rme-settings`)],Y);function On(e){let t=[...e.history,...e.detail];return t.length===0?null:[`timestamp,datetime,room_temp,outdoor_temp,target_temp,mode,predicted_temp,window_open,heating_power,solar_irradiance,blind_position,cover_reason,device_setpoint`,...t.map(e=>{let t=new Date(e.ts*1e3).toISOString(),n=e.room_temp??``,r=e.outdoor_temp??``,i=e.target_temp??``,a=e.predicted_temp??``,o=e.heating_power??``,s=e.solar_irradiance??``,c=e.blind_position??``,l=e.cover_reason??``,u=e.device_setpoint??``;return`${e.ts},${t},${n},${r},${i},${e.mode},${a},${e.window_open},${o},${s},${c},${l},${u}`})].join(`
`)}function kn(e,t,n){let r=new Blob([e],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.click(),URL.revokeObjectURL(i)}function An(e,t,n,r,i,a,o){let s=e?.areas?.[n],c=(t[n]?.display_name||s?.name||n).replace(/\s+/g,`_`).toLowerCase();return a?`roommind_${a}_${c}.${o}`:`roommind_${c}_${new Date(r).toISOString().slice(0,10)}_${new Date(i).toISOString().slice(0,10)}.${o}`}function jn(e){return navigator.clipboard?.writeText?(navigator.clipboard.writeText(e).catch(()=>{Mn(e)}),!0):Mn(e)}function Mn(e){let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch(e){console.debug(`[RoomMind] clipboard fallback:`,e)}return document.body.removeChild(t),n}v(),S(),M();var X=class extends _{constructor(...e){super(...e),this.rooms={},this.selectedRoom=``,this.rangeStart=0,this.rangeEnd=0,this.activeQuick=`24h`,this.data=null,this.language=`en`,this._openDropdown=null,this._diagLoading=!1,this._boundCloseDropdowns=this._closeDropdowns.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._boundCloseDropdowns)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundCloseDropdowns)}updated(e){(e.has(`rooms`)||e.has(`selectedRoom`))&&this.selectedRoom&&this.updateComplete.then(()=>{let e=this.renderRoot?.querySelector(`ha-select`);e&&e.value!==this.selectedRoom&&(e.value=this.selectedRoom)})}render(){let e=this.language,t=this._getConfiguredRooms();return h`
      ${this._renderRoomSelector(t,e)}
      ${this.selectedRoom?this._renderRangeButtons(e):g}
    `}_getConfiguredRooms(){return Object.entries(this.rooms).map(([e,t])=>{let n=this.hass?.areas?.[e];return{area_id:e,name:t.display_name||n?.name||e}})}_renderRoomSelector(e,t){return h`
      <div class="selector-row">
        <ha-select
          .value=${this.selectedRoom}
          .label=${C(`analytics.select_room`,t)}
          .options=${e.map(e=>({value:e.area_id,label:e.name}))}
          naturalMenuWidth
          fixedMenuPosition
          @selected=${this._onRoomSelected}
          @closed=${e=>e.stopPropagation()}
        >
          ${e.map(e=>h` <ha-list-item value=${e.area_id}>${e.name}</ha-list-item> `)}
        </ha-select>
      </div>
    `}_renderRangeButtons(e){let t=[{key:`24h`,label:C(`analytics.range_1d`,e),days:1},{key:`2d`,label:C(`analytics.range_2d`,e),days:2},{key:`7d`,label:C(`analytics.range_7d`,e),days:7},{key:`30d`,label:C(`analytics.range_30d`,e),days:30}],n=this.data&&(this.data.history.length>0||this.data.detail.length>0),r=e=>new Date(e).toLocaleString(this.hass.language,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`});return h`
      <div class="range-row">
        <div class="range-controls">
          <div class="range-bar">
            ${t.map(e=>h`
                <button
                  class="range-chip"
                  ?active=${this.activeQuick===e.key}
                  @click=${()=>this._onQuickRange(e.key,e.days)}
                >
                  ${e.label}
                </button>
              `)}
            <div class="range-chip picker-chip ${this.activeQuick===null?`picker-active`:``}">
              <ha-date-range-picker
                .hass=${this.hass}
                .startDate=${new Date(this.rangeStart)}
                .endDate=${new Date(this.rangeEnd)}
                .ranges=${!1}
                time-picker
                auto-apply
                minimal
                @value-changed=${this._onDateRangeChanged}
              ></ha-date-range-picker>
            </div>
          </div>
          <span class="date-label ${this.activeQuick===null?`custom-active`:``}"
            >${r(this.rangeStart)} – ${r(this.rangeEnd)}</span
          >
        </div>
        <div class="action-buttons">
          <div class="export-split">
            <button
              class="export-btn"
              ?disabled=${!n}
              @click=${e=>{e.stopPropagation(),this._toggleDropdown(`csv`)}}
            >
              <ha-icon icon="mdi:download"></ha-icon>
              ${C(`analytics.export`,e)}
              <ha-icon class="arrow-icon" icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._openDropdown===`csv`?h`<div class="export-dropdown" @click=${e=>e.stopPropagation()}>
                    <button @click=${this._exportCsv}>
                      <ha-icon icon="mdi:download"></ha-icon>
                      ${C(`analytics.export_download`,e)}
                    </button>
                    <button @click=${this._copyCsvToClipboard}>
                      <ha-icon icon="mdi:content-copy"></ha-icon>
                      ${C(`analytics.export_clipboard`,e)}
                    </button>
                  </div>`:g}
          </div>
          <div class="export-split">
            <button
              class="export-btn"
              ?disabled=${this._diagLoading}
              @click=${e=>{e.stopPropagation(),this._toggleDropdown(`diag`)}}
            >
              <ha-icon icon=${this._diagLoading?`mdi:loading`:`mdi:bug-outline`}></ha-icon>
              ${C(`analytics.copy_diagnostics`,e)}
              <ha-icon class="arrow-icon" icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._openDropdown===`diag`?h`<div class="export-dropdown" @click=${e=>e.stopPropagation()}>
                    <button @click=${this._exportDiagnostics}>
                      <ha-icon icon="mdi:download"></ha-icon>
                      ${C(`analytics.export_download`,e)}
                    </button>
                    <button @click=${this._copyDiagnosticsToClipboard}>
                      <ha-icon icon="mdi:content-copy"></ha-icon>
                      ${C(`analytics.export_clipboard`,e)}
                    </button>
                  </div>`:g}
          </div>
        </div>
      </div>
    `}_onRoomSelected(e){let t=I(e);t&&t!==this.selectedRoom&&this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:t},bubbles:!0,composed:!0}))}_onQuickRange(e,t){let n=new Date,r=new Date(n);r.setDate(r.getDate()-(t-1)),r.setHours(0,0,0,0),this.dispatchEvent(new CustomEvent(`range-changed`,{detail:{activeQuick:e,rangeStart:r.getTime(),rangeEnd:n.getTime(),chartAnchor:n.getTime()},bubbles:!0,composed:!0}))}_onDateRangeChanged(e){let{startDate:t,endDate:n}=e.detail.value;!t||!n||this.dispatchEvent(new CustomEvent(`range-changed`,{detail:{activeQuick:null,rangeStart:t.getTime(),rangeEnd:n.getTime(),chartAnchor:n.getTime()},bubbles:!0,composed:!0}))}_exportCsv(){if(!this.data)return;let e=On(this.data);e&&(kn(e,An(this.hass,this.rooms,this.selectedRoom,this.rangeStart,this.rangeEnd,``,`csv`),`text/csv`),this._openDropdown=null)}async _exportDiagnostics(){if(!this._diagLoading){this._diagLoading=!0,this._openDropdown=null;try{let e=await this.hass.callWS({type:`roommind_eklabs/diagnostics/get`});kn(JSON.stringify(e,null,2),`roommind_diagnostics.json`,`application/json`)}catch(e){console.warn(`[RoomMind] diagnostics export failed:`,e)}finally{this._diagLoading=!1}}}_copyCsvToClipboard(){if(!this.data)return;let e=On(this.data);e&&(jn(e),this._openDropdown=null)}async _copyDiagnosticsToClipboard(){if(!this._diagLoading){this._diagLoading=!0,this._openDropdown=null;try{let e=await this.hass.callWS({type:`roommind_eklabs/diagnostics/get`});jn(JSON.stringify(e,null,2))}catch(e){console.warn(`[RoomMind] diagnostics clipboard failed:`,e)}finally{this._diagLoading=!1}}}_toggleDropdown(e){this._openDropdown=this._openDropdown===e?null:e}_closeDropdowns(){this._openDropdown&&=null}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .selector-row {
        margin-bottom: 16px;
      }

      .selector-row ha-select {
        width: 100%;
      }

      .range-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 12px;
      }

      .range-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
      }

      .range-bar {
        display: inline-flex;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }

      .range-bar > :first-child {
        border-radius: 12px 0 0 12px;
      }

      .range-bar > :last-child {
        border-radius: 0 12px 12px 0;
      }

      .range-chip {
        padding: 7px 14px;
        border: none;
        border-right: 1px solid var(--divider-color);
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition:
          background 0.15s ease,
          color 0.15s ease;
        font-family: inherit;
        white-space: nowrap;
      }

      .range-chip:last-child {
        border-right: none;
      }

      .range-chip:hover:not([active]) {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        color: var(--primary-text-color);
      }

      .range-chip[active] {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .picker-chip {
        display: flex;
        align-items: center;
        padding: 0;
        cursor: pointer;
      }

      .picker-chip ha-date-range-picker {
        --mdc-icon-size: 18px;
        --mdc-icon-button-size: 32px;
      }

      .picker-chip.picker-active {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .date-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .date-label.custom-active {
        color: var(--primary-color);
      }

      .action-buttons {
        display: flex;
        gap: 8px;
      }

      .export-split {
        position: relative;
        display: inline-flex;
      }

      .export-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 7px 14px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        font-family: inherit;
        white-space: nowrap;
        --mdc-icon-size: 14px;
      }

      .export-btn:hover {
        color: var(--primary-text-color);
        border-color: var(--primary-color);
      }

      .export-btn[disabled] {
        opacity: 0.4;
        cursor: default;
      }

      .arrow-icon {
        --mdc-icon-size: 14px;
        margin-left: 2px;
        margin-right: -4px;
      }

      .export-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 4px;
        min-width: 100%;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10;
        overflow: hidden;
      }

      .export-dropdown button {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 10px 14px;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 12px;
        font-family: inherit;
        cursor: pointer;
        white-space: nowrap;
        --mdc-icon-size: 14px;
      }

      .export-dropdown button:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .export-dropdown button + button {
        border-top: 1px solid var(--divider-color);
      }

      @media (max-width: 600px) {
        .range-row {
          flex-wrap: wrap;
        }
        .range-controls {
          flex-wrap: wrap;
        }
        .range-chip {
          padding: 6px 10px;
          font-size: 11px;
        }
      }
    `]}};j([b({attribute:!1})],X.prototype,`hass`,void 0),j([b({attribute:!1})],X.prototype,`rooms`,void 0),j([b({type:String})],X.prototype,`selectedRoom`,void 0),j([b({type:Number})],X.prototype,`rangeStart`,void 0),j([b({type:Number})],X.prototype,`rangeEnd`,void 0),j([b({type:String})],X.prototype,`activeQuick`,void 0),j([b({attribute:!1})],X.prototype,`data`,void 0),j([b({type:String})],X.prototype,`language`,void 0),j([x()],X.prototype,`_openDropdown`,void 0),j([x()],X.prototype,`_diagLoading`,void 0),X=j([y(`rme-analytics-toolbar`)],X),v();var Nn=l`
  .info-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
    opacity: 0.3;
    cursor: pointer;
    flex-shrink: 0;
    transition:
      opacity 0.15s,
      color 0.15s;
  }

  .info-icon:hover {
    opacity: 0.7;
  }

  .info-icon.info-active {
    opacity: 1;
    color: var(--primary-color);
  }

  .info-panel {
    padding: 12px;
    border-radius: 8px;
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.06));
    font-size: 13px;
    line-height: 1.6;
    color: var(--secondary-text-color);
  }

  .info-panel strong {
    display: block;
    margin-bottom: 4px;
    color: var(--primary-text-color);
    font-size: 13px;
  }

  .info-panel .yaml-block {
    background: var(--primary-background-color, #f5f5f5);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    padding: 10px 14px;
    margin: 8px 0;
    font-family: var(--code-font-family, monospace);
    font-size: 12px;
    line-height: 1.6;
    white-space: pre;
    overflow-x: auto;
    color: var(--primary-text-color);
  }
  .info-panel .yaml-key {
    color: #0550ae;
  }
  .info-panel .yaml-value {
    color: #0a3069;
  }
`,Pn=108e5;function Fn(e,t){let{hass:n,language:r,chartAnchor:i,forecast:a,isOutdoor:o}=t,s=e=>T(e,n),c=[],l=[],u=[],d=[],ee=[];for(let t of e){let e=t.ts*1e3;t.room_temp!==null&&c.push([e,s(t.room_temp)]),!o&&t.target_temp!==null&&l.push([e,s(t.target_temp)]),!o&&t.predicted_temp!==null&&u.push([e,s(t.predicted_temp)]),t.outdoor_temp!==null&&d.push([e,s(t.outdoor_temp)]),!o&&t.device_setpoint!=null&&ee.push([e,s(t.device_setpoint)])}for(let e of a??[]){let t=e.ts*1e3;!o&&e.target_temp!==null&&l.push([t,s(e.target_temp)]),!o&&e.predicted_temp!==null&&u.push([t,s(e.predicted_temp)])}let f=[{id:`room_temp`,type:`line`,name:C(`analytics.temperature`,r),color:`rgb(255, 152, 0)`,data:c,showSymbol:!1,smooth:!0,lineStyle:{width:2},yAxisIndex:0}];o||f.push({id:`target_temp`,type:`line`,name:C(`analytics.target`,r),color:`rgb(76, 175, 80)`,data:l,showSymbol:!1,smooth:!1,lineStyle:{width:2,type:`dashed`},yAxisIndex:0}),u.length>0&&f.push({id:`predicted_temp`,type:`line`,name:C(`analytics.prediction`,r),color:`rgb(33, 150, 243)`,data:u,showSymbol:!1,smooth:!0,lineStyle:{width:2,type:`dotted`},yAxisIndex:0}),ee.length>0&&f.push({id:`device_target`,type:`line`,name:`TRV / AC`,color:`rgb(156, 39, 176)`,data:ee,showSymbol:!1,smooth:!1,step:`end`,lineStyle:{width:1,type:`dashed`},yAxisIndex:0}),d.length>0&&f.push({id:`outdoor_temp`,type:`line`,name:C(`analytics.outdoor`,r),color:`rgb(158, 158, 158)`,data:d,showSymbol:!1,smooth:!0,lineStyle:{width:1},yAxisIndex:0});let te=[],ne=[],re=[],ie=!1,ae=!1,oe=!1;for(let t of e){let e=t.ts*1e3;t.mode===`heating`?(te.push([e,999]),ie=!0):te.push([e,null]),t.mode===`cooling`?(ne.push([e,999]),ae=!0):ne.push([e,null]),t.window_open?(re.push([e,999]),oe=!0):re.push([e,null])}return ie&&f.push({id:`heating_events`,type:`line`,name:C(`analytics.heating_period`,r),color:`rgb(244, 67, 54)`,data:te,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(244, 67, 54, 0.08)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),ae&&f.push({id:`cooling_events`,type:`line`,name:C(`analytics.cooling_period`,r),color:`rgb(63, 81, 181)`,data:ne,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(63, 81, 181, 0.08)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),oe&&f.push({id:`window_events`,type:`line`,name:C(`analytics.window_open_period`,r),color:`rgb(0, 150, 136)`,data:re,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(0, 150, 136, 0.1)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),f.push({id:`now_marker`,type:`line`,name:``,color:`rgba(255,255,255,0.3)`,data:[[i,-999],[i,999]],showSymbol:!1,lineStyle:{width:1,type:`dashed`},yAxisIndex:0,tooltip:{show:!1},z:-2}),f}function In(e,t,n){let{hass:r,language:i,chartAnchor:a,rangeStart:o,rangeEnd:s}=n,c=w(r),l={type:`value`,name:c};if(e.length>0){let t=1/0,n=-1/0;for(let r of e)r<t&&(t=r),r>n&&(n=r);let r=n-t,i=Math.max(r*.1,.5);l.min=Math.floor((t-i)*2)/2,l.max=Math.ceil((n+i)*2)/2}return{xAxis:{type:`time`,min:o,max:Math.abs(s-Date.now())<36e5?a+Pn:s},yAxis:l,dataZoom:[{type:`inside`,xAxisIndex:0,filterMode:`none`}],tooltip:{trigger:`axis`,axisPointer:{snap:!1},valueFormatter:e=>e.toFixed(1)+`\xA0`+c,formatter:e=>{if(!Array.isArray(e)||e.length===0)return``;let n=`<div style="font-weight:500;margin-bottom:4px">${new Date(e[0].value[0]).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}</div>`,a=null,o=null;for(let t of e){if(t.seriesId?.endsWith(`_events`))continue;let e=t.value?.[1];e!=null&&(n+=`<div>${t.color?`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t.color};margin-right:6px"></span>`:``}${t.seriesName}: ${e.toFixed(1)}\u00A0${c}</div>`,t.seriesId===`room_temp`&&(a=e),t.seriesId===`predicted_temp`&&(o=e))}if(a!==null&&o!==null){let e=a-o;n+=`<div style="border-top:1px solid rgba(128,128,128,0.3);margin-top:4px;padding-top:4px">Delta: ${e>=0?`+`:``}${e.toFixed(2)}\u00A0${c}</div>`}if(t.length>0){let a=e[0].value[0]/1e3,o=null,s=1/0;for(let e of t){let t=Math.abs(e.ts-a);t<s&&(s=t,o=e)}if(o){let e=[];if(o.mode===`heating`){let t=o.heating_power;t!=null&&t>0&&t<100?e.push(`${C(`analytics.heating_period`,i)} ${t}%`):e.push(C(`analytics.heating_period`,i)),o.device_setpoint!=null&&e.push(`TRV ${O(o.device_setpoint,r)}\u00A0${c}`)}else o.mode===`cooling`&&(e.push(C(`analytics.cooling_period`,i)),o.device_setpoint!=null&&e.push(`AC ${O(o.device_setpoint,r)}\u00A0${c}`));o.window_open&&e.push(C(`analytics.window_open_period`,i)),e.length>0&&(n+=`<div style="border-top:1px solid rgba(128,128,128,0.3);margin-top:4px;padding-top:4px;color:rgba(255,255,255,0.7)">${e.join(` · `)}</div>`),o.blind_position!=null&&(n+=`<div style="color:rgba(255,255,255,0.7)">${C(`analytics.blind_position`,i)} ${100-o.blind_position}%</div>`)}}let s=document.createElement(`div`);return s.innerHTML=n,s}},grid:{top:15,left:10,right:10,bottom:5,containLabel:!0}}}v(),S(),M();var Z=class extends _{constructor(...e){super(...e),this.data=null,this.rangeStart=0,this.rangeEnd=0,this.chartAnchor=0,this.language=`en`,this.isOutdoor=!1,this._hiddenSeries=new Set([`outdoor_temp`,`device_target`]),this._chartInfoExpanded=!1}render(){let e=this.language,t=this.data?[...this.data.history,...this.data.detail]:[],n=[...t,...this.data?.forecast??[]],r={hass:this.hass,language:e,chartAnchor:this.chartAnchor,rangeStart:this.rangeStart,rangeEnd:this.rangeEnd,forecast:this.data?.forecast,isOutdoor:this.isOutdoor},i=t.length>0?Fn(t,r):[],a=[],o=i.map(e=>{let t=e.id,n=e.lineStyle||{},r=t.endsWith(`_events`);if(this._hiddenSeries.has(t)){let t={...e,lineStyle:{...n,width:0,opacity:0}};return e.areaStyle&&(t.areaStyle={...e.areaStyle,opacity:0}),t}if(!r&&t!==`now_marker`)for(let t of e.data)t&&t[1]!=null&&a.push(t[1]);let i={...e,lineStyle:{...n,opacity:1}};return e.areaStyle&&(i.areaStyle={...e.areaStyle,opacity:1}),i}),s=In(a,n,r);return h`
      <ha-card>
        <div class="card-header">
          <span>${C(`analytics.temperature`,e)}</span>
          <ha-icon
            class="info-icon chart-info-toggle ${this._chartInfoExpanded?`info-active`:``}"
            icon="mdi:information-outline"
            @click=${()=>{this._chartInfoExpanded=!this._chartInfoExpanded}}
          ></ha-icon>
        </div>
        ${this._chartInfoExpanded?h`<div class="chart-info-panel">
                ${this._renderMarkdown(C(`analytics.chart_info_body`,e))}
              </div>`:g}
        ${t.length>0?h`
                <ha-chart-base
                  .hass=${this.hass}
                  .data=${o}
                  .options=${s}
                  .height=${`300px`}
                  style="height: 300px"
                ></ha-chart-base>
                ${this._renderSeriesLegend(i)}
              `:h`<div class="chart-empty">
                <ha-icon icon="mdi:chart-line"></ha-icon>
                <span>${C(`analytics.no_data`,e)}</span>
              </div>`}
      </ha-card>
    `}_renderSeriesLegend(e){let t=e.filter(e=>e.id!==`now_marker`);return h`
      <div class="series-legend">
        ${t.map(e=>{let t=e.id,n=this._hiddenSeries.has(t);return h`
            <button
              class="legend-item ${n?`legend-hidden`:``}"
              @click=${()=>this._toggleSeries(t)}
            >
              <span class="legend-dot" style="background: ${e.color}"></span>
              ${e.name}
            </button>
          `})}
      </div>
    `}_renderMarkdown(e){return e.split(`

`).map(e=>h`<p>
          ${e.split(/(\*\*.*?\*\*)/).map(e=>e.startsWith(`**`)&&e.endsWith(`**`)?h`<strong>${e.slice(2,-2)}</strong>`:e)}
        </p>`)}_toggleSeries(e){let t=new Set(this._hiddenSeries);t.has(e)?t.delete(e):t.add(e),this._hiddenSeries=t}static{this.styles=[Nn,l`
      :host {
        display: block;
      }

      ha-card {
        margin-bottom: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 500;
      }

      .chart-info-toggle {
        --mdc-icon-size: 20px;
      }

      .chart-info-panel {
        margin: 8px 16px 4px;
        padding: 12px 14px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.06));
        font-size: 13px;
        line-height: 1.6;
        color: var(--secondary-text-color);
      }

      .chart-info-panel p {
        margin: 0 0 8px;
      }

      .chart-info-panel p:last-child {
        margin-bottom: 0;
      }

      .chart-info-panel strong {
        color: var(--primary-text-color);
      }

      .series-legend {
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 8px 16px 12px;
        flex-wrap: wrap;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border: none;
        border-radius: 12px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 12px;
        font-family: inherit;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .legend-item:hover {
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.1));
      }

      .legend-item.legend-hidden {
        opacity: 0.35;
      }

      .legend-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .chart-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        gap: 8px;
        color: var(--secondary-text-color);
        opacity: 0.5;
        --mdc-icon-size: 40px;
        font-size: 13px;
      }
    `]}};j([b({attribute:!1})],Z.prototype,`hass`,void 0),j([b({attribute:!1})],Z.prototype,`data`,void 0),j([b({type:Number})],Z.prototype,`rangeStart`,void 0),j([b({type:Number})],Z.prototype,`rangeEnd`,void 0),j([b({type:Number})],Z.prototype,`chartAnchor`,void 0),j([b({type:String})],Z.prototype,`language`,void 0),j([b({type:Boolean})],Z.prototype,`isOutdoor`,void 0),j([x()],Z.prototype,`_hiddenSeries`,void 0),j([x()],Z.prototype,`_chartInfoExpanded`,void 0),Z=j([y(`rme-analytics-chart`)],Z),v(),S(),M();var Ln=class extends _{constructor(...e){super(...e),this.data=null,this.language=`en`,this._expandedStat=null}render(){let e=this.language,t=!!this.data?.model?.model,n=this.data?.model,r=n?.model,i=n?.confidence??0,a=n?.n_samples??0,o=n?.n_heating??0,s=n?.n_cooling??0,c=n?.applicable_modes??[],l=n?.prediction_std_idle,u=n?.prediction_std_heating,d=n?.mpc_active??!1,ee=Math.round(i*100),f=new Set(c),te=f.has(`heating`),ne=f.has(`cooling`),re=o>=10,ie=s>=10,ae=a-o-s>=10,oe=n?.n_observations??a,se=[],p=(t,n,r,i,a)=>{se.push({id:t,labelKey:r,infoKey:a});let o=this._expandedStat===t;return h`
        <div class="model-stat ${o?`active`:``}" @click=${()=>this._toggleStat(t)}>
          <div class="stat-content">
            <span class="model-value ${n===`—`?`pending`:``}">${n}</span>
            <span class="model-label">${C(r,e)}${i?` (${i})`:``}</span>
          </div>
          <ha-icon
            class="info-icon ${o?`info-active`:``}"
            icon="mdi:information-outline"
          ></ha-icon>
        </div>
      `};return h`
      <ha-card>
        <div class="card-header">
          <span>${C(`analytics.model_status`,e)}</span>
        </div>
        <div class="card-content">
          <div class="confidence-hero">
            <div class="confidence-top">
              <div class="confidence-main">
                <span class="confidence-value">${t?ee+`%`:`0%`}</span>
                <span class="confidence-label">
                  ${C(`analytics.confidence`,e)}
                  <ha-icon
                    class="info-icon ${this._expandedStat===`confidence`?`info-active`:``}"
                    icon="mdi:information-outline"
                    @click=${()=>this._toggleStat(`confidence`)}
                  ></ha-icon>
                </span>
              </div>
              <div class="confidence-meta">
                <span class="meta-value">${t?oe:0}</span>
                <span class="meta-label">
                  ${C(`analytics.data_points`,e)}
                  <ha-icon
                    class="info-icon ${this._expandedStat===`data_points`?`info-active`:``}"
                    icon="mdi:information-outline"
                    @click=${()=>this._toggleStat(`data_points`)}
                  ></ha-icon>
                </span>
              </div>
            </div>
            <div class="confidence-bar">
              <div class="confidence-fill" style="width: ${t?ee:0}%"></div>
            </div>
            <div class="control-mode-badge ${d?`mpc`:`bangbang`}">
              <ha-icon icon=${d?`mdi:brain`:`mdi:school-outline`}></ha-icon>
              ${C(d?`analytics.control_mode_mpc`:`analytics.control_mode_bangbang`,e)}
            </div>
            ${this._expandedStat===`confidence`?h`<div class="info-panel stat-info-panel">
                    <strong>${C(`analytics.confidence`,e)}</strong>
                    ${C(`analytics.info.confidence`,e)}
                  </div>`:g}
            ${this._expandedStat===`data_points`?h`<div class="info-panel stat-info-panel">
                    <strong>${C(`analytics.data_points`,e)}</strong>
                    ${C(`analytics.info.data_points`,e)}
                  </div>`:g}
          </div>

          <div class="model-grid">
            ${p(`time_constant`,ae&&r&&r.U>0?(1/r.U).toFixed(1)+`h`:`—`,`analytics.time_constant`,``,`analytics.info.time_constant`)}
            ${te?p(`heating_rate`,re&&r?D(r.Q_heat,this.hass).toFixed(1)+w(this.hass)+`/h`:`—`,`analytics.heating_rate`,``,`analytics.info.heating_rate`):g}
            ${ne?p(`cooling_rate`,ie&&r?D(r.Q_cool,this.hass).toFixed(1)+w(this.hass)+`/h`:`—`,`analytics.cooling_rate`,``,`analytics.info.cooling_rate`):g}
            ${r&&r.Q_solar>.1?p(`solar_gain`,D(r.Q_solar,this.hass).toFixed(1)+w(this.hass)+`/h`,`analytics.solar_gain`,``,`analytics.info.solar_gain`):g}
            ${r&&n?.has_occupancy_sensors?p(`occupancy_gain`,D(r.Q_occupancy,this.hass).toFixed(1)+w(this.hass)+`/h`,`analytics.occupancy_gain`,``,`analytics.info.occupancy_gain`):g}
            ${p(`accuracy_idle`,ae&&l!=null?`±`+D(l,this.hass).toFixed(2)+w(this.hass):`—`,`analytics.accuracy_idle`,``,`analytics.info.accuracy_idle`)}
            ${te?p(`accuracy_heating`,re&&u!=null?`±`+D(u,this.hass).toFixed(2)+w(this.hass):`—`,`analytics.accuracy_heating`,``,`analytics.info.accuracy_heating`):g}
          </div>
          ${this._expandedStat&&se.find(e=>e.id===this._expandedStat)?h`<div class="info-panel stat-info-panel">
                  <strong
                    >${C(se.find(e=>e.id===this._expandedStat).labelKey,e)}</strong
                  >
                  ${C(se.find(e=>e.id===this._expandedStat).infoKey,e)}
                </div>`:g}
        </div>
      </ha-card>
    `}_toggleStat(e){this._expandedStat=this._expandedStat===e?null:e}static{this.styles=[Nn,l`
      :host {
        display: block;
      }

      ha-card {
        margin-bottom: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 500;
      }

      .card-content {
        padding: 16px;
      }

      .confidence-hero {
        margin-bottom: 16px;
      }

      .confidence-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 8px;
      }

      .confidence-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .confidence-value {
        font-size: 28px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .confidence-label {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .confidence-meta {
        display: flex;
        align-items: baseline;
        gap: 6px;
      }

      .meta-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .meta-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .control-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        --mdc-icon-size: 14px;
      }

      .control-mode-badge.mpc {
        background: rgba(76, 175, 80, 0.12);
        color: var(--success-color, #4caf50);
      }

      .control-mode-badge.bangbang {
        background: rgba(158, 158, 158, 0.12);
        color: var(--secondary-text-color);
      }

      .confidence-bar {
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        overflow: hidden;
      }

      .confidence-fill {
        height: 100%;
        border-radius: 2px;
        background: var(--primary-color);
        transition: width 0.6s ease;
      }

      .model-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
      }

      .model-stat {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        cursor: pointer;
        transition: border-color 0.2s;
      }

      .model-stat.active {
        border-color: var(--primary-color);
      }

      .stat-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .model-value {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .model-value.pending {
        opacity: 0.2;
      }

      .model-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .info-panel.stat-info-panel {
        margin-top: 12px;
      }

      @media (max-width: 600px) {
        .model-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
      }
    `]}};j([b({attribute:!1})],Ln.prototype,`hass`,void 0),j([b({attribute:!1})],Ln.prototype,`data`,void 0),j([b({type:String})],Ln.prototype,`language`,void 0),j([x()],Ln.prototype,`_expandedStat`,void 0),Ln=j([y(`rme-analytics-model`)],Ln),v(),S(),M();var Q=class extends _{constructor(...e){super(...e),this.rooms={},this.initialRoom=``,this.controlMode=`bangbang`,this._selectedRoom=``,this._rangeStart=new Date(new Date().setHours(0,0,0,0)).getTime(),this._rangeEnd=Date.now(),this._data=null,this._chartAnchor=Date.now(),this._loading=!1,this._activeQuick=`24h`}connectedCallback(){super.connectedCallback(),this._refreshInterval=setInterval(()=>this._silentRefresh(),6e4)}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&=(clearInterval(this._refreshInterval),void 0)}willUpdate(e){e.has(`initialRoom`)&&this.initialRoom&&(this._selectedRoom=this.initialRoom);let t=!1;if(e.has(`rooms`)&&!this._selectedRoom){let e=Object.keys(this.rooms);e.length>0&&(this._selectedRoom=e[0],t=!0,this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:e[0]},bubbles:!0,composed:!0})))}(t||e.has(`_selectedRoom`)||e.has(`_rangeStart`)||e.has(`_rangeEnd`))&&this._selectedRoom&&this._fetchData()}render(){let e=this.hass.language;return h`
      <rme-analytics-toolbar
        .hass=${this.hass}
        .rooms=${this.rooms}
        .selectedRoom=${this._selectedRoom}
        .rangeStart=${this._rangeStart}
        .rangeEnd=${this._rangeEnd}
        .activeQuick=${this._activeQuick}
        .data=${this._data}
        .language=${e}
        @room-selected=${this._onRoomSelected}
        @range-changed=${this._onRangeChanged}
      ></rme-analytics-toolbar>
      ${this._selectedRoom?this._loading?h`<div class="loading">${C(`panel.loading`,e)}</div>`:h`
                <rme-analytics-chart
                  .hass=${this.hass}
                  .data=${this._data}
                  .rangeStart=${this._rangeStart}
                  .rangeEnd=${this._rangeEnd}
                  .chartAnchor=${this._chartAnchor}
                  .language=${e}
                  .isOutdoor=${this.rooms[this._selectedRoom]?.is_outdoor??!1}
                ></rme-analytics-chart>
                ${this.rooms[this._selectedRoom]?.is_outdoor?g:h` <rme-analytics-model
                        .hass=${this.hass}
                        .data=${this._data}
                        .language=${e}
                      ></rme-analytics-model>`}
              `:h`
              <div class="no-data">
                <ha-icon
                  icon="mdi:chart-line"
                  style="--mdc-icon-size: 48px; opacity: 0.4"
                ></ha-icon>
                <p>${C(`analytics.select_room`,e)}</p>
              </div>
            `}
    `}_onRoomSelected(e){let t=e.detail.areaId;t&&t!==this._selectedRoom&&(this._selectedRoom=t,this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:t},bubbles:!0,composed:!0})))}_onRangeChanged(e){let{activeQuick:t,rangeStart:n,rangeEnd:r,chartAnchor:i}=e.detail;this._activeQuick=t,this._rangeStart=n,this._rangeEnd=r,this._chartAnchor=i}_buildWsParams(){return{type:`roommind_eklabs/analytics/get`,area_id:this._selectedRoom,start_ts:this._rangeStart/1e3,end_ts:this._rangeEnd/1e3}}async _fetchData(){if(this._selectedRoom){this._loading=!0,this._data=null,this._chartAnchor=this._rangeEnd;try{let e=await this.hass.callWS(this._buildWsParams());this._data=e}catch(e){console.debug(`[RoomMind] fetchData:`,e),this._data=null}finally{this._loading=!1}}}async _silentRefresh(){if(!(!this._selectedRoom||this._loading))try{let e=await this.hass.callWS(this._buildWsParams());this._data=e,this._chartAnchor=Date.now()}catch(e){console.debug(`[RoomMind] silentRefresh:`,e)}}static{this.styles=l`
    :host {
      display: block;
    }

    .no-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .no-data p {
      font-size: 15px;
      max-width: 400px;
      line-height: 1.5;
      margin-top: 16px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }
  `}};j([b({attribute:!1})],Q.prototype,`hass`,void 0),j([b({type:Object})],Q.prototype,`rooms`,void 0),j([b()],Q.prototype,`initialRoom`,void 0),j([b()],Q.prototype,`controlMode`,void 0),j([x()],Q.prototype,`_selectedRoom`,void 0),j([x()],Q.prototype,`_rangeStart`,void 0),j([x()],Q.prototype,`_rangeEnd`,void 0),j([x()],Q.prototype,`_data`,void 0),j([x()],Q.prototype,`_chartAnchor`,void 0),j([x()],Q.prototype,`_loading`,void 0),j([x()],Q.prototype,`_activeQuick`,void 0),Q=j([y(`rme-analytics`)],Q),v(),S(),M();var Rn=`M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z`,zn=`M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z`,Bn=`M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z`,Vn=`M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z`,$=class extends _{constructor(...e){super(...e),this.narrow=!1,this.route={path:``},this.panel={},this._activeTab=`areas`,this._rooms={},this._roomsLoaded=!1,this._selectedAreaId=null,this._analyticsRoom=``,this._vacationActive=!1,this._vacationTemp=null,this._vacationUntil=null,this._hiddenRooms=[],this._showHiddenRooms=!1,this._controlMode=`bangbang`,this._climateControlActive=!0,this._presenceEnabled=!1,this._valveProtectionEnabled=!1,this._coilDryEnabled=!1,this._coilDryMinutes=20,this._coilDryMode=`fan_only`,this._coilDryFanMode=`low`,this._anyoneHome=!0,this._presencePersons=[],this._presenceAwayAction=`eco`,this._saveStatus=`idle`,this._roomOrder=[],this._groupByFloor=!1,this._reorderMode=!1,this._elementsLoaded=!1,this._routeApplied=!1,this._areaInfosCache=[],this._onSaveStatus=e=>{e.stopPropagation(),this._saveStatusTimeout&&clearTimeout(this._saveStatusTimeout),this._saveStatus=e.detail.status,e.detail.status===`saved`&&(this._saveStatusTimeout=setTimeout(()=>{this._saveStatus=`idle`},2e3))}}static{this.styles=l`
    :host {
      display: block;
      font-family: var(--primary-font-family, Roboto, sans-serif);
      color: var(--primary-text-color);
      background: var(--primary-background-color);
      min-height: 100vh;

      /* Round the corners of all MDC-based inputs (ha-textfield, ha-select,
         ha-entity-picker, ha-combo-box) to match the rest of the design.
         The bottom corners are rounded via inputStyles in each component. */
      --mdc-shape-small: 8px;
      --mdc-shape-medium: 8px;
      --md-filled-text-field-container-shape: 8px;
      --md-outlined-text-field-container-shape: 8px;
    }

    .toolbar {
      display: flex;
      align-items: center;
      height: 56px;
      padding: 0 12px;
      font-size: 20px;
      background-color: var(--app-header-background-color, var(--primary-background-color));
      color: var(--app-header-text-color, var(--primary-text-color));
      border-bottom: 1px solid var(--divider-color);
      box-sizing: border-box;
      position: sticky;
      top: 0;
      z-index: 4;
    }

    .toolbar .title {
      margin-left: 4px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .toolbar ha-icon-button {
      color: var(--app-header-text-color, var(--primary-text-color));
    }

    .save-indicator {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 400;
      margin-right: 8px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .save-indicator.fade-out {
      opacity: 0;
    }

    .save-indicator ha-icon {
      --mdc-icon-size: 18px;
    }

    .save-indicator.saving {
      color: var(--primary-color, #03a9f4);
    }

    .save-indicator.saved {
      color: var(--success-color, #4caf50);
    }

    .save-indicator.error {
      color: var(--error-color, #d32f2f);
    }

    .tabs {
      display: flex;
      gap: 0;
      border-bottom: 1px solid var(--divider-color);
      padding: 0 16px;
      background: var(--primary-background-color);
      position: sticky;
      top: 56px;
      z-index: 3;
    }

    .tab {
      padding: 12px 24px;
      cursor: pointer;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 14px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .tab:hover {
      color: var(--primary-text-color);
    }

    .tab[active] {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
    }

    .content {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    @media (max-width: 600px) {
      .content {
        padding: 16px;
      }
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .placeholder ha-icon {
      margin-bottom: 16px;
    }

    .placeholder p {
      font-size: 15px;
      max-width: 400px;
      line-height: 1.5;
    }

    .area-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr));
      gap: 16px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .stats-separator {
      width: 1px;
      height: 28px;
      background: var(--divider-color, #444);
      margin: 0 4px;
      flex-shrink: 0;
    }

    .stats-bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px 24px;
      margin-bottom: 20px;
      padding: 12px 16px;
    }

    .stats-actions {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 0;
    }

    .hidden-rooms-toggle {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .hidden-rooms-panel {
      margin-bottom: 20px;
      padding: 12px 16px;
    }

    .hidden-rooms-header {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    .hidden-room-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
    }

    .hidden-room-name {
      font-size: 14px;
      color: var(--primary-text-color);
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .stat-value {
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-text-color);
      --mdc-icon-size: 22px;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 24px;
    }

    .stat-label {
      font-size: 12px;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .floor-heading {
      font-size: 14px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 20px 0 8px 0;
    }

    .floor-heading:first-of-type {
      margin-top: 0;
    }

    .reorder-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .reorder-done {
      font-size: 14px;
      margin-left: auto;
    }
  `}connectedCallback(){super.connectedCallback(),ln().then(()=>{this._elementsLoaded=!0}),this._loadRooms(),this._refreshInterval=setInterval(()=>this._loadRooms(),5e3),this.addEventListener(`save-status`,this._onSaveStatus),this._routeApplied||=(this._applyRoute(),!0),this._boundVisibilityHandler||(this._boundVisibilityHandler=()=>{if(!document.hidden){if(!this.isConnected){window.location.reload();return}this._loadRooms(),this.requestUpdate()}},document.addEventListener(`visibilitychange`,this._boundVisibilityHandler))}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&=(clearInterval(this._refreshInterval),void 0),this._saveStatusTimeout&&clearTimeout(this._saveStatusTimeout),this.removeEventListener(`save-status`,this._onSaveStatus),this._boundConnectionReady&&=(this.hass?.connection?.removeEventListener(`ready`,this._boundConnectionReady),void 0)}render(){if(!this._elementsLoaded||!this.hass)return h``;let e=this.hass.language,t=!!this._selectedAreaId,n=t?this.hass?.areas?.[this._selectedAreaId]:null,r={areas:C(`panel.tab.rooms`,e),analytics:C(`tabs.analytics`,e),settings:C(`panel.tab.settings`,e)};return h`
      <div class="toolbar">
        ${t?h`<ha-icon-button
                .path=${Rn}
                @click=${this._onBackFromDetail}
              ></ha-icon-button>`:h`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`}
        <div class="title">
          ${t?this._rooms[this._selectedAreaId]?.display_name||n?.name||``:C(`panel.title`,e)}
        </div>
        ${this._renderSaveIndicator()}
        ${t&&this._rooms[this._selectedAreaId]?h`<ha-icon-button
                  .path=${Bn}
                  @click=${this._onGoToAnalytics}
                ></ha-icon-button
                ><ha-icon-button
                  .path=${zn}
                  @click=${this._onDeleteRoom}
                ></ha-icon-button>`:g}
        ${!t&&this._activeTab===`analytics`&&this._analyticsRoom?h`<ha-icon-button
                .path=${Vn}
                @click=${this._onGoToRoomFromAnalytics}
              ></ha-icon-button>`:g}
      </div>

      ${t?g:h`
              <div class="tabs">
                ${Object.keys(r).map(e=>h`
                    <button
                      class="tab"
                      ?active=${this._activeTab===e}
                      @click=${()=>this._onTabClicked(e)}
                    >
                      ${r[e]}
                    </button>
                  `)}
              </div>
            `}

      <div class="content">${this._renderTab()}</div>
    `}_renderTab(){switch(this._activeTab){case`areas`:return this._renderAreas();case`analytics`:return h`<rme-analytics
          .hass=${this.hass}
          .rooms=${this._rooms}
          .initialRoom=${this._analyticsRoom}
          .controlMode=${this._controlMode}
          @room-selected=${this._onAnalyticsRoomSelected}
        ></rme-analytics>`;case`settings`:return this._renderSettings();default:return g}}_renderAreas(){if(!this._roomsLoaded)return h`<div class="loading">${C(`panel.loading`,this.hass.language)}</div>`;if(this._selectedAreaId){let e=this.hass?.areas?.[this._selectedAreaId];if(e){let t=this._rooms[this._selectedAreaId]??null;return h`
          <rme-room-detail
            .area=${e}
            .config=${t}
            .hass=${this.hass}
            .presenceEnabled=${this._presenceEnabled}
            .presencePersons=${this._presencePersons}
            .climateControlActive=${this._climateControlActive}
            .valveProtectionEnabled=${this._valveProtectionEnabled}
            .coilDryEnabled=${this._coilDryEnabled}
            .coilDryMinutes=${this._coilDryMinutes}
            .coilDryMode=${this._coilDryMode}
            .coilDryFanMode=${this._coilDryFanMode}
            @back-clicked=${this._onBackFromDetail}
            @room-updated=${this._onRoomUpdated}
          ></rme-room-detail>
        `}this._selectedAreaId=null}let e=this._areaInfosCache,t=e.filter(e=>!this._hiddenRooms.includes(e.area.area_id)),n=e.filter(e=>this._hiddenRooms.includes(e.area.area_id));if(e.length===0)return h`
        <div class="placeholder">
          <ha-icon icon="mdi:home" style="--mdc-icon-size: 56px; opacity: 0.4"></ha-icon>
          <p>
            ${C(`panel.no_areas`,this.hass.language)}<br />${C(`panel.no_areas_hint`,this.hass.language)}
          </p>
        </div>
      `;let r=t.filter(e=>e.config).length,i=t.filter(e=>e.config?.live?.mode===`heating`).length,a=t.filter(e=>e.config?.live?.mode===`cooling`).length,o=t.filter(e=>e.config?.live?.mold_risk_level===`warning`||e.config?.live?.mold_risk_level===`critical`).length,s=this._vacationActive||this._presenceEnabled&&!this._anyoneHome||o>0,c=this.hass.language;return h`
      ${r>0||n.length>0?h`
              <ha-card class="stats-bar">
                ${r>0?h`
                        <div class="stat">
                          <span class="stat-value">${r}</span>
                          <span class="stat-label">${C(`panel.stat.rooms`,c)}</span>
                        </div>
                        <div class="stat">
                          <span class="stat-value" style="color: var(--warning-color, #ff9800)"
                            >${i}</span
                          >
                          <span class="stat-label">${C(`panel.stat.heating`,c)}</span>
                        </div>
                        <div class="stat">
                          <span class="stat-value" style="color: var(--info-color, #2196f3)"
                            >${a}</span
                          >
                          <span class="stat-label">${C(`panel.stat.cooling`,c)}</span>
                        </div>
                      `:g}
                ${s?h`<div class="stats-separator"></div>`:g}
                ${this._vacationActive?h`
                        <div class="stat">
                          <span class="stat-value" style="color: var(--success-color, #4caf50)">
                            <ha-icon icon="mdi:airplane"></ha-icon>
                          </span>
                          <span class="stat-label">${C(`panel.stat.vacation`,c)}</span>
                        </div>
                      `:g}
                ${this._presenceEnabled&&!this._anyoneHome?h`
                        <div class="stat">
                          <span class="stat-value" style="color: var(--secondary-text-color)">
                            <ha-icon icon="mdi:power"></ha-icon>
                          </span>
                          <span class="stat-label">${C(`panel.stat.away`,c)}</span>
                        </div>
                      `:g}
                ${o>0?h`
                        <div class="stat">
                          <span class="stat-value" style="color: var(--error-color, #f44336)"
                            >${o}</span
                          >
                          <span class="stat-label">${C(`panel.stat.mold`,c)}</span>
                        </div>
                      `:g}
                <span class="stats-actions">
                  ${n.length>0?h`<ha-icon-button
                          class="hidden-rooms-toggle"
                          .path=${wt}
                          @click=${()=>{this._showHiddenRooms=!this._showHiddenRooms}}
                        ></ha-icon-button>`:g}
                  ${this._reorderMode?h`<ha-button class="reorder-done" @click=${this._onReorderDone}>
                          ${C(`panel.reorder_done`,c)}
                        </ha-button>`:h`<ha-icon-button
                          class="reorder-btn"
                          .path=${`M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z`}
                          @click=${()=>{this._reorderMode=!0}}
                          title=${C(`panel.reorder`,c)}
                        ></ha-icon-button>`}
                </span>
              </ha-card>
            `:g}
      ${this._showHiddenRooms&&n.length>0?h`
              <ha-card class="hidden-rooms-panel">
                <div class="hidden-rooms-header">
                  <span>${C(`panel.hidden_rooms`,c)} (${n.length})</span>
                </div>
                ${n.map(e=>h`
                    <div class="hidden-room-row">
                      <span class="hidden-room-name">${e.area.name}</span>
                      <ha-button @click=${()=>this._unhideRoom(e.area.area_id)}>
                        ${C(`panel.unhide`,c)}
                      </ha-button>
                    </div>
                  `)}
              </ha-card>
            `:g}
      ${this._getFloorGroups(t).map(e=>h`
          ${e.name?h`<h4 class="floor-heading">${e.name}</h4>`:g}
          <div class="area-grid">
            ${e.items.map((t,n)=>h`
                <rme-area-card
                  .area=${t.area}
                  .config=${t.config}
                  .climateEntityCount=${t.climateEntityCount}
                  .tempSensorCount=${t.tempSensorCount}
                  .hass=${this.hass}
                  .controlMode=${this._controlMode}
                  .climateControlActive=${this._climateControlActive}
                  .reordering=${this._reorderMode}
                  .canMoveUp=${n>0}
                  .canMoveDown=${n<e.items.length-1}
                  @area-selected=${this._onAreaSelected}
                  @hide-room=${this._onHideRoom}
                  @move-room-up=${this._onMoveRoomUp}
                  @move-room-down=${this._onMoveRoomDown}
                ></rme-area-card>
              `)}
          </div>
        `)}
    `}_renderSettings(){return h`<rme-settings .hass=${this.hass} .rooms=${this._rooms}></rme-settings>`}_computeAreaInfos(){if(!this.hass?.areas)return[];let e=Object.values(this.hass.areas).map(e=>{let t=yt(e.area_id,this.hass.entities,this.hass.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)),n=t.filter(e=>e.entity_id.startsWith(`climate.`)).length,r=t.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`temperature`).length;return{area:e,config:this._rooms[e.area_id]??null,climateEntityCount:n,tempSensorCount:r}}),t=new Map(this._roomOrder.map((e,t)=>[e,t]));return e.sort((e,n)=>{let r=t.get(e.area.area_id),i=t.get(n.area.area_id);if(r!==void 0&&i!==void 0)return r-i;if(r!==void 0)return-1;if(i!==void 0)return 1;let a=e.config?2:+(e.climateEntityCount>0),o=n.config?2:+(n.climateEntityCount>0);return a===o?e.area.name.localeCompare(n.area.name):o-a}),e}_getFloorGroups(e){if(!this._groupByFloor||!this.hass.floors)return[{name:``,items:e}];let t=this.hass.floors,n=this.hass.language,r=new Map,i=[];for(let t of e){let e=t.area.floor_id??null;r.has(e)||(r.set(e,[]),i.push(e)),r.get(e).push(t)}return i.sort((e,n)=>{if(e===null)return 1;if(n===null)return-1;let r=t[e],i=t[n];return r?.level!=null&&i?.level!=null?i.level-r.level:r?.level==null?i?.level==null?(r?.name??``).localeCompare(i?.name??``):1:-1}),i.map(e=>({name:e===null?C(`panel.floor_other`,n):t[e]?.name??C(`panel.floor_other`,n),items:r.get(e)}))}async _loadRooms(){if(this.hass)try{let e=await this.hass.callWS({type:`roommind_eklabs/rooms/list`});this._rooms=e.rooms,this._vacationActive=e.vacation_active??!1,this._vacationTemp=e.vacation_temp??null,this._vacationUntil=e.vacation_until??null,this._hiddenRooms=e.hidden_rooms??[],this._roomOrder=e.room_order??[],this._groupByFloor=e.group_by_floor??!1,this._controlMode=e.control_mode??`bangbang`,this._climateControlActive=e.climate_control_active??!0,this._presenceEnabled=e.presence_enabled??!1,this._valveProtectionEnabled=e.valve_protection_enabled??!1,this._coilDryEnabled=e.coil_dry_enabled??!1,this._coilDryMinutes=e.coil_dry_minutes??20,this._coilDryMode=e.coil_dry_mode??`fan_only`,this._coilDryFanMode=e.coil_dry_fan_mode??`low`,this._anyoneHome=e.anyone_home??!0,this._presencePersons=e.presence_persons??[],this._presenceAwayAction=e.presence_away_action??`eco`}catch(e){console.debug(`[RoomMind] loadRooms:`,e)}finally{this._roomsLoaded=!0}}_onBackFromDetail(){this._selectedAreaId=null,this._navigate(``)}async _onDeleteRoom(){if(!this._selectedAreaId)return;let e=this.hass?.areas?.[this._selectedAreaId];if(e&&confirm(C(`room.confirm_delete`,this.hass.language,{name:e.name})))try{await this.hass.callWS({type:`roommind_eklabs/rooms/delete`,area_id:this._selectedAreaId}),this._selectedAreaId=null,this._navigate(``),this._loadRooms()}catch(e){console.debug(`[RoomMind] deleteRoom:`,e)}}_onTabClicked(e){this._activeTab=e,this._selectedAreaId=null,e===`areas`?this._navigate(``):this._navigate(`/${e}`)}_onAreaSelected(e){this._selectedAreaId=e.detail.areaId,this._navigate(`/room/${e.detail.areaId}`)}async _onHideRoom(e){let t=[...new Set([...this._hiddenRooms,e.detail.areaId])];this._hiddenRooms=t;try{await this.hass.callWS({type:`roommind_eklabs/settings/save`,hidden_rooms:t})}catch(e){console.debug(`[RoomMind] hideRoom:`,e)}}async _unhideRoom(e){let t=this._hiddenRooms.filter(t=>t!==e);this._hiddenRooms=t,t.length===0&&(this._showHiddenRooms=!1);try{await this.hass.callWS({type:`roommind_eklabs/settings/save`,hidden_rooms:t})}catch(e){console.debug(`[RoomMind] unhideRoom:`,e)}}_onGoToAnalytics(){this._selectedAreaId&&(this._analyticsRoom=this._selectedAreaId,this._selectedAreaId=null,this._activeTab=`analytics`,this._navigate(`/analytics/${this._analyticsRoom}`))}_onGoToRoomFromAnalytics(){this._analyticsRoom&&(this._selectedAreaId=this._analyticsRoom,this._activeTab=`areas`,this._navigate(`/room/${this._analyticsRoom}`))}_onAnalyticsRoomSelected(e){this._analyticsRoom=e.detail.areaId,this._navigate(`/analytics/${e.detail.areaId}`)}async _onMoveRoomUp(e){this._moveRoom(e.detail.areaId,-1)}async _onMoveRoomDown(e){this._moveRoom(e.detail.areaId,1)}async _moveRoom(e,t){let n=this._areaInfosCache.filter(e=>!this._hiddenRooms.includes(e.area.area_id));if(this._groupByFloor&&this.hass.floors){let r=this._getFloorGroups(n);for(let n of r){let i=n.items.map(e=>e.area.area_id),a=i.indexOf(e);if(a===-1)continue;let o=a+t;if(o<0||o>=i.length)return;[i[a],i[o]]=[i[o],i[a]];let s=r.flatMap(e=>e===n?i:e.items.map(e=>e.area.area_id));await this._saveRoomOrder(s);return}}else{let r=n.map(e=>e.area.area_id),i=r.indexOf(e);if(i===-1)return;let a=i+t;if(a<0||a>=r.length)return;[r[i],r[a]]=[r[a],r[i]],await this._saveRoomOrder(r)}}async _saveRoomOrder(e){this._roomOrder=e,this._areaInfosCache=this._computeAreaInfos();try{await this.hass.callWS({type:`roommind_eklabs/settings/save`,room_order:e})}catch(e){console.debug(`[RoomMind] saveRoomOrder:`,e)}}_onReorderDone(){this._reorderMode=!1}_onRoomUpdated(){this._loadRooms()}_renderSaveIndicator(){if(this._saveStatus===`idle`)return g;let e=this.hass.language,t=this._saveStatus===`saving`?`mdi:content-save-outline`:this._saveStatus===`saved`?`mdi:check`:`mdi:alert-circle-outline`,n=this._saveStatus===`saving`?C(`settings.saving`,e):this._saveStatus===`saved`?C(`settings.saved`,e):C(`settings.error`,e);return h`
      <span class="save-indicator ${this._saveStatus}">
        <ha-icon .icon=${t}></ha-icon>
        ${n}
      </span>
    `}willUpdate(e){e.has(`route`)&&this._routeApplied&&this._applyRoute(),(e.has(`_rooms`)||e.has(`hass`))&&(this._areaInfosCache=this._computeAreaInfos())}updated(e){e.has(`hass`)&&this.hass&&!this._roomsLoaded&&this._loadRooms(),e.has(`hass`)&&this.hass?.connection&&!this._boundConnectionReady&&(this._boundConnectionReady=()=>{this._loadRooms(),this.requestUpdate()},this.hass.connection.addEventListener(`ready`,this._boundConnectionReady))}_navigate(e){history.replaceState(null,``,`/roommind-eklabs${e}`),window.dispatchEvent(new Event(`location-changed`))}_applyRoute(){let e=this.route?.path??``;e.startsWith(`/room/`)?(this._activeTab=`areas`,this._selectedAreaId=decodeURIComponent(e.slice(6))):e.startsWith(`/analytics/`)?(this._activeTab=`analytics`,this._selectedAreaId=null,this._analyticsRoom=decodeURIComponent(e.slice(11))):e===`/analytics`?(this._activeTab=`analytics`,this._selectedAreaId=null,this._analyticsRoom=``):e===`/settings`?(this._activeTab=`settings`,this._selectedAreaId=null):(this._activeTab=`areas`,this._selectedAreaId=null)}};j([b({attribute:!1})],$.prototype,`hass`,void 0),j([b({type:Boolean,reflect:!0})],$.prototype,`narrow`,void 0),j([b({type:Object})],$.prototype,`route`,void 0),j([b({type:Object})],$.prototype,`panel`,void 0),j([x()],$.prototype,`_activeTab`,void 0),j([x()],$.prototype,`_rooms`,void 0),j([x()],$.prototype,`_roomsLoaded`,void 0),j([x()],$.prototype,`_selectedAreaId`,void 0),j([x()],$.prototype,`_analyticsRoom`,void 0),j([x()],$.prototype,`_vacationActive`,void 0),j([x()],$.prototype,`_vacationTemp`,void 0),j([x()],$.prototype,`_vacationUntil`,void 0),j([x()],$.prototype,`_hiddenRooms`,void 0),j([x()],$.prototype,`_showHiddenRooms`,void 0),j([x()],$.prototype,`_controlMode`,void 0),j([x()],$.prototype,`_climateControlActive`,void 0),j([x()],$.prototype,`_presenceEnabled`,void 0),j([x()],$.prototype,`_valveProtectionEnabled`,void 0),j([x()],$.prototype,`_coilDryEnabled`,void 0),j([x()],$.prototype,`_coilDryMinutes`,void 0),j([x()],$.prototype,`_coilDryMode`,void 0),j([x()],$.prototype,`_coilDryFanMode`,void 0),j([x()],$.prototype,`_anyoneHome`,void 0),j([x()],$.prototype,`_presencePersons`,void 0),j([x()],$.prototype,`_presenceAwayAction`,void 0),j([x()],$.prototype,`_saveStatus`,void 0),j([x()],$.prototype,`_roomOrder`,void 0),j([x()],$.prototype,`_groupByFloor`,void 0),j([x()],$.prototype,`_reorderMode`,void 0),j([x()],$.prototype,`_elementsLoaded`,void 0),$=j([y(`roommind-eklabs-panel`)],$)})();