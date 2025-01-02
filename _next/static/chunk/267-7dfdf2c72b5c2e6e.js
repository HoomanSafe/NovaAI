"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{7788:function(e,t,r){r.d(t,{M:function(){return y}});var n=r(5862),o=r(7058),i=r(9022),l=r(7944),c=r(9884);class s extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e,i=(0,o.useId)(),l=(0,o.useRef)(null),u=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:a}=(0,o.useContext)(c._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:o}=u.current;if(r||!l.current||!e||!t)return;l.current.dataset.motionPopId=i;let c=document.createElement("style");return a&&(c.nonce=a),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[r]),(0,n.jsx)(s,{isPresent:r,childRef:l,sizeRef:u,children:o.cloneElement(t,{ref:l})})}let a=e=>{let{children:t,initial:r,isPresent:c,onExitComplete:s,custom:a,presenceAffectsLayout:p,mode:d}=e,h=(0,l.h)(f),m=(0,o.useId)(),v=(0,o.useMemo)(()=>({id:m,initial:r,isPresent:c,custom:a,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;s&&s()},register:e=>(h.set(e,!1),()=>h.delete(e))}),p?[Math.random()]:[c]);return(0,o.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[c]),o.useEffect(()=>{c||h.size||!s||s()},[c]),"popLayout"===d&&(t=(0,n.jsx)(u,{isPresent:c,children:t})),(0,n.jsx)(i.O.Provider,{value:v,children:t})};function f(){return new Map}var p=r(3049),d=r(9054);let h=e=>e.key||"";function m(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var v=r(986);let y=e=>{let{children:t,exitBeforeEnter:r,custom:i,initial:c=!0,onExitComplete:s,presenceAffectsLayout:u=!0,mode:f="sync"}=e;(0,d.k)(!r,"Replace exitBeforeEnter with mode='wait'");let y=(0,o.useMemo)(()=>m(t),[t]),b=y.map(h),g=(0,o.useRef)(!0),O=(0,o.useRef)(y),w=(0,l.h)(()=>new Map),[j,E]=(0,o.useState)(y),[P,x]=(0,o.useState)(y);(0,v.L)(()=>{g.current=!1,O.current=y;for(let e=0;e<P.length;e++){let t=h(P[e]);b.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[P,b.length,b.join("-")]);let C=[];if(y!==j){let e=[...y];for(let t=0;t<P.length;t++){let r=P[t],n=h(r);b.includes(n)||(e.splice(t,0,r),C.push(r))}"wait"===f&&C.length&&(e=C),x(m(e)),E(y);return}let{forceRender:S}=(0,o.useContext)(p.p);return(0,n.jsx)(n.Fragment,{children:P.map(e=>{let t=h(e),r=y===P||b.includes(t);return(0,n.jsx)(a,{isPresent:r,initial:(!g.current||!!c)&&void 0,custom:r?void 0:i,presenceAffectsLayout:u,mode:f,onExitComplete:r?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==S||S(),x(O.current),s&&s())},children:e},t)})})}},7816:function(e,t,r){r.d(t,{I:function(){return o}});var n=r(9054);function o(e,t,r){var o;if("string"==typeof e){let i=document;t&&((0,n.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),r?(null!==(o=r[e])&&void 0!==o||(r[e]=i.querySelectorAll(e)),e=r[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},8875:function(e,t,r){r.d(t,{w_:function(){return a}});var n=r(7058),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e){return t=>n.createElement(f,c({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:s}=e,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);