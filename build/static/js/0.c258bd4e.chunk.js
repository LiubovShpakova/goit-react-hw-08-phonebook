(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{137:function(e,t,n){},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return G}));var a=n(0),o=n.n(a);function r(e){var t,n,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var s=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a},i=n(25);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){return"number"===typeof e&&!isNaN(e)}function u(e){return"boolean"===typeof e}function d(e){return"string"===typeof e}function f(e){return"function"===typeof e}function m(e){return d(e)||f(e)?e:null}function b(e){return 0===e||e}var p=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(e){return Object(a.isValidElement)(e)||d(e)||f(e)||c(e)}var g={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},y={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,s=void 0!==r&&r,i=e.collapse,l=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,m=e.isIn,b=s?t+"--"+i:t,p=s?n+"--"+i:n,v=Object(a.useRef)(),g=Object(a.useRef)(0);function y(){var e=f.current;e.removeEventListener("animationend",y),0===g.current&&(e.className=v.current)}function O(){var e=f.current;e.removeEventListener("animationend",O),l?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,d,u):d()}return Object(a.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+b,e.addEventListener("animationend",y)}()}),[]),Object(a.useEffect)((function(){m||(c?O():function(){g.current=1;var e=f.current;e.className+=" "+p,e.addEventListener("animationend",O)}())}),[m]),o.a.createElement(o.a.Fragment,null,r)}}var h={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];this.list.has(e)&&this.list.get(e).forEach((function(n){var o=setTimeout((function(){n.apply(void 0,a)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}};function E(e,t){void 0===t&&(t=!1);var n=Object(a.useRef)(e);return Object(a.useEffect)((function(){t&&(n.current=e)})),n.current}function j(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return b(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}function T(e){var t=Object(a.useReducer)((function(e){return e+1}),0)[1],n=Object(a.useReducer)(j,[]),o=n[0],r=n[1],s=Object(a.useRef)(null),i=E(0),l=E([]),p=E({}),g=E({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:y,getToast:function(e){return p[e]||null}});function y(e){return-1!==o.indexOf(e)}function O(e){var t=e.containerId;!g.props.limit||t&&g.containerId!==t||(i-=l.length,l=[])}function T(e){r({type:1,toastId:e})}function N(){var e=l.shift();C(e.toastContent,e.toastProps,e.staleId)}function I(e,n){var o=n.delay,r=n.staleId,y=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["delay","staleId"]);if(v(e)&&!function(e){var t=e.containerId,n=e.toastId,a=e.updateId;return!!(!s.current||g.props.enableMultiContainer&&t!==g.props.containerId||p[n]&&null==a)}(y)){var O=y.toastId,h=y.updateId,E=g.props,j=function(){return T(O)},I=null==y.updateId;I&&i++;var x,P,w={toastId:O,updateId:h,isIn:!1,key:y.key||g.toastKey++,type:y.type,closeToast:j,closeButton:y.closeButton,rtl:E.rtl,position:y.position||E.position,transition:y.transition||E.transition,className:m(y.className||E.toastClassName),bodyClassName:m(y.bodyClassName||E.bodyClassName),style:y.style||E.toastStyle,bodyStyle:y.bodyStyle||E.bodyStyle,onClick:y.onClick||E.onClick,pauseOnHover:u(y.pauseOnHover)?y.pauseOnHover:E.pauseOnHover,pauseOnFocusLoss:u(y.pauseOnFocusLoss)?y.pauseOnFocusLoss:E.pauseOnFocusLoss,draggable:u(y.draggable)?y.draggable:E.draggable,draggablePercent:c(y.draggablePercent)?y.draggablePercent:E.draggablePercent,draggableDirection:y.draggableDirection||E.draggableDirection,closeOnClick:u(y.closeOnClick)?y.closeOnClick:E.closeOnClick,progressClassName:m(y.progressClassName||E.progressClassName),progressStyle:y.progressStyle||E.progressStyle,autoClose:(x=y.autoClose,P=E.autoClose,!1===x||c(x)&&x>0?x:P),hideProgressBar:u(y.hideProgressBar)?y.hideProgressBar:E.hideProgressBar,progress:y.progress,role:d(y.role)?y.role:E.role,deleteToast:function(){!function(e){delete p[e];var n=l.length;(i=b(e)?i-1:i-g.displayedToast)<0&&(i=0);if(n>0){var a=b(e)?1:g.props.limit;if(1===n||1===a)g.displayedToast++,N();else{var o=a>n?n:a;g.displayedToast=o;for(var r=0;r<o;r++)N()}}else t()}(O)}};f(y.onOpen)&&(w.onOpen=y.onOpen),f(y.onClose)&&(w.onClose=y.onClose),"y"===w.draggableDirection&&80===w.draggablePercent&&(w.draggablePercent*=1.5);var k=E.closeButton;!1===y.closeButton||v(y.closeButton)?k=y.closeButton:!0===y.closeButton&&(k=!v(E.closeButton)||E.closeButton),w.closeButton=k;var R=e;Object(a.isValidElement)(e)&&!d(e.type)?R=Object(a.cloneElement)(e,{closeToast:j,toastProps:w}):f(e)&&(R=e({closeToast:j,toastProps:w})),E.limit&&E.limit>0&&i>E.limit&&I?l.push({toastContent:R,toastProps:w,staleId:r}):c(o)&&o>0?setTimeout((function(){C(R,w,r)}),o):C(R,w,r)}}function C(e,t,n){var a=t.toastId;n&&delete p[n],p[a]={content:e,props:t},r({type:0,toastId:a,staleId:n})}return Object(a.useEffect)((function(){return g.containerId=e.containerId,h.cancelEmit(3).on(0,I).on(1,(function(e){return s.current&&T(e)})).on(5,O).emit(2,g),function(){return h.emit(3,g)}}),[]),Object(a.useEffect)((function(){g.isToastActive=y,g.displayedToast=o.length,h.emit(4,o.length,e.containerId)}),[o]),Object(a.useEffect)((function(){g.props=e})),{getToastToRender:function(t){for(var n={},a=e.newestOnTop?Object.keys(p).reverse():Object.keys(p),o=0;o<a.length;o++){var r=p[a[o]],s=r.props.position;n[s]||(n[s]=[]),n[s].push(r)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:p,containerRef:s,isToastActive:y}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function C(e){var t=Object(a.useState)(!0),n=t[0],o=t[1],r=Object(a.useState)(!1),s=r[0],i=r[1],l=Object(a.useRef)(null),c=E({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=E(e,!0),d=e.autoClose,m=e.pauseOnHover,b=e.closeToast,p=e.onClick,v=e.closeOnClick;function g(t){if(e.draggable){var n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.x=N(t.nativeEvent),c.y=I(t.nativeEvent),"x"===e.draggableDirection?(c.start=c.x,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=c.y,c.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function y(){if(c.boundingRect){var t=c.boundingRect,n=t.top,a=t.bottom,o=t.left,r=t.right;e.pauseOnHover&&c.x>=o&&c.x<=r&&c.y>=n&&c.y<=a?h():O()}}function O(){o(!0)}function h(){o(!1)}function j(t){if(c.canDrag){t.preventDefault();var a=l.current;n&&h(),c.x=N(t),c.y=I(t),"x"===e.draggableDirection?c.delta=c.x-c.start:c.delta=c.y-c.start,c.start!==c.x&&(c.canCloseOnClick=!1),a.style.transform="translate"+e.draggableDirection+"("+c.delta+"px)",a.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance))}}function T(){var t=l.current;if(c.canDrag){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(a.useEffect)((function(){return f(e.onOpen)&&e.onOpen(Object(a.isValidElement)(e.children)&&e.children.props),function(){f(u.onClose)&&u.onClose(Object(a.isValidElement)(u.children)&&u.children.props)}}),[]),Object(a.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",j),document.addEventListener("mouseup",T),document.addEventListener("touchmove",j),document.addEventListener("touchend",T)),function(){e.draggable&&(document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",j),document.removeEventListener("touchend",T))}}),[e.draggable]),Object(a.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||h();window.addEventListener("focus",O),window.addEventListener("blur",h)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",h))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return d&&m&&(C.onMouseEnter=h,C.onMouseLeave=O),v&&(C.onClick=function(e){p&&p(e),c.canCloseOnClick&&b()}),{playToast:O,pauseToast:h,isRunning:n,preventExitTransition:s,toastRef:l,eventHandlers:C}}function x(e){var t=e.closeToast,n=e.type,o=e.ariaLabel,r=void 0===o?"close":o;return Object(a.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},Object(a.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(a.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t,n,o=e.delay,r=e.isRunning,i=e.closeToast,c=e.type,u=e.hide,d=e.className,m=e.style,b=e.controlledProgress,p=e.progress,v=e.rtl,g=e.isIn,y=l({},m,{animationDuration:o+"ms",animationPlayState:r?"running":"paused",opacity:u?0:1});b&&(y.transform="scaleX("+p+")");var O=s("Toastify__progress-bar",b?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+c,((t={})["Toastify__progress-bar--rtl"]=v,t)),h=f(d)?d({rtl:v,type:c,defaultClassName:O}):s(O,d),E=((n={})[b&&p>=1?"onTransitionEnd":"onAnimationEnd"]=b&&p<1?null:function(){g&&i()},n);return Object(a.createElement)("div",Object.assign({role:"progressbar","aria-hidden":u?"true":"false","aria-label":"notification timer",className:h,style:y},E))}P.defaultProps={type:y.DEFAULT,hide:!1};var w=function(e){var t,n=C(e),o=n.isRunning,r=n.preventExitTransition,i=n.toastRef,l=n.eventHandlers,c=e.closeButton,u=e.children,d=e.autoClose,m=e.onClick,b=e.type,p=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,O=e.className,h=e.style,E=e.bodyClassName,j=e.bodyStyle,T=e.progressClassName,N=e.progressStyle,I=e.updateId,x=e.role,w=e.progress,k=e.rtl,R=e.toastId,F=e.deleteToast,L=e.isIn,_=s("Toastify__toast","Toastify__toast--"+b,((t={})["Toastify__toast--rtl"]=k,t)),D=f(O)?O({rtl:k,position:y,type:b,defaultClassName:_}):s(_,O),S=!!w;return Object(a.createElement)(g,{isIn:L,done:F,position:y,preventExitTransition:r,nodeRef:i},Object(a.createElement)("div",Object.assign({id:R,onClick:m,className:D},l,{style:h,ref:i}),Object(a.createElement)("div",Object.assign({},L&&{role:x},{className:f(E)?E({type:b}):s("Toastify__toast-body",E),style:j}),u),function(e){if(e){var t={closeToast:v,type:b};return f(e)?e(t):Object(a.isValidElement)(e)?Object(a.cloneElement)(e,t):void 0}}(c),(d||S)&&Object(a.createElement)(P,Object.assign({},I&&!S?{key:"pb-"+I}:{},{rtl:k,delay:d,isRunning:o,isIn:L,closeToast:v,hide:p,type:b,style:N,className:T,controlledProgress:S,progress:w}))))},k=O({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),R=function(e){var t=T(e),n=t.getToastToRender,o=t.containerRef,r=t.isToastActive,i=e.className,c=e.style,u=e.rtl,d=e.containerId;function b(e){var t,n=s("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=u,t));return f(i)?i({position:e,rtl:u,defaultClassName:n}):s(n,m(i))}return Object(a.createElement)("div",{ref:o,className:"Toastify",id:d},n((function(e,t){var n=0===t.length?l({},c,{pointerEvents:"none"}):l({},c);return Object(a.createElement)("div",{className:b(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(a.createElement)(w,Object.assign({},n,{isIn:r(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?x:n.closeButton}),t)})))})))};R.defaultProps={position:g.TOP_RIGHT,transition:k,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:x,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var F,L,_,D=new Map,S=[],B=!1;function A(){return Math.random().toString(36).substr(2,9)}function M(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:A()}function V(e,t){return D.size>0?h.emit(0,e,t):(S.push({content:e,options:t}),B&&p&&(B=!1,L=document.createElement("div"),document.body.appendChild(L),Object(i.render)(Object(a.createElement)(R,Object.assign({},_)),L))),t.toastId}function H(e,t){return l({},t,{type:t&&t.type||e,toastId:M(t)})}var z=function(e){return function(t,n){return V(t,H(e,n))}},G=function(e,t){return V(e,H(y.DEFAULT,t))};G.success=z(y.SUCCESS),G.info=z(y.INFO),G.error=z(y.ERROR),G.warning=z(y.WARNING),G.dark=z(y.DARK),G.warn=G.warning,G.dismiss=function(e){return h.emit(1,e)},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),h.emit(5,e)},G.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=D.get(n||F);return a?a.getToast(e):null}(e,t);if(n){var a=n.props,o=n.content,r=l({},a,t,{toastId:t.toastId||e,updateId:A()});r.toastId!==e&&(r.staleId=e);var s=r.render||o;delete r.render,V(s,r)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return f(e)&&h.on(4,e),function(){f(e)&&h.off(4,e)}},G.configure=function(e){void 0===e&&(e={}),B=!0,_=e},G.POSITION=g,G.TYPE=y,h.on(2,(function(e){F=e.containerId||e,D.set(F,e),S.forEach((function(e){h.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&h.off(0).off(1).off(5),p&&L&&document.body.removeChild(L)}))},144:function(e,t,n){"use strict";var a=n(5),o=n(7),r=n(9),s=n.n(r),i=n(0),l=n.n(i),c=(n(73),n(8)),u=n.n(c),d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=l.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,i=e.className,c=e.type,u=void 0===c?"valid":c,d=e.tooltip,f=void 0!==d&&d,m=Object(o.a)(e,["as","className","type","tooltip"]);return l.a.createElement(r,Object(a.a)({},m,{ref:t,className:s()(i,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var m=f,b=l.a.createContext({controlId:void 0}),p=n(12),v=l.a.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.type,f=void 0===d?"checkbox":d,m=e.isValid,v=void 0!==m&&m,g=e.isInvalid,y=void 0!==g&&g,O=e.isStatic,h=e.as,E=void 0===h?"input":h,j=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),T=Object(i.useContext)(b),N=T.controlId,I=T.custom?[c,"custom-control-input"]:[r,"form-check-input"],C=I[0],x=I[1];return r=Object(p.a)(C,x),l.a.createElement(E,Object(a.a)({},j,{ref:t,type:f,id:n||N,className:s()(u,r,v&&"is-valid",y&&"is-invalid",O&&"position-static")}))}));v.displayName="FormCheckInput";var g=v,y=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(i.useContext)(b),m=f.controlId,v=f.custom?[r,"custom-control-label"]:[n,"form-check-label"],g=v[0],y=v[1];return n=Object(p.a)(g,y),l.a.createElement("label",Object(a.a)({},d,{ref:t,htmlFor:u||m,className:s()(c,n)}))}));y.displayName="FormCheckLabel";var O=y,h=l.a.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,f=e.disabled,v=void 0!==f&&f,y=e.isValid,h=void 0!==y&&y,E=e.isInvalid,j=void 0!==E&&E,T=e.feedbackTooltip,N=void 0!==T&&T,I=e.feedback,C=e.className,x=e.style,P=e.title,w=void 0===P?"":P,k=e.type,R=void 0===k?"checkbox":k,F=e.label,L=e.children,_=e.custom,D=e.as,S=void 0===D?"input":D,B=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||_,M=A?[c,"custom-control"]:[r,"form-check"],V=M[0],H=M[1];r=Object(p.a)(V,H);var z=Object(i.useContext)(b).controlId,G=Object(i.useMemo)((function(){return{controlId:n||z,custom:A}}),[z,A,n]),Q=A||null!=F&&!1!==F&&!L,U=l.a.createElement(g,Object(a.a)({},B,{type:"switch"===R?"checkbox":R,ref:t,isValid:h,isInvalid:j,isStatic:!Q,disabled:v,as:S}));return l.a.createElement(b.Provider,{value:G},l.a.createElement("div",{style:x,className:s()(C,r,A&&"custom-"+R,d&&r+"-inline")},L||l.a.createElement(l.a.Fragment,null,U,Q&&l.a.createElement(O,{title:w},F),(h||j)&&l.a.createElement(m,{type:h?"valid":"invalid",tooltip:N},I))))}));h.displayName="FormCheck",h.Input=g,h.Label=O;var E=h,j=l.a.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,u=e.className,d=e.isValid,f=e.isInvalid,m=e.lang,v=e.as,g=void 0===v?"input":v,y=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(i.useContext)(b),h=O.controlId,E=O.custom?[c,"custom-file-input"]:[r,"form-control-file"],j=E[0],T=E[1];return r=Object(p.a)(j,T),l.a.createElement(g,Object(a.a)({},y,{ref:t,id:n||h,type:"file",lang:m,className:s()(u,r,d&&"is-valid",f&&"is-invalid")}))}));j.displayName="FormFileInput";var T=j,N=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.bsCustomPrefix,c=e.className,u=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(i.useContext)(b),m=f.controlId,v=f.custom?[r,"custom-file-label"]:[n,"form-file-label"],g=v[0],y=v[1];return n=Object(p.a)(g,y),l.a.createElement("label",Object(a.a)({},d,{ref:t,htmlFor:u||m,className:s()(c,n),"data-browse":d["data-browse"]}))}));N.displayName="FormFileLabel";var I=N,C=l.a.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,c=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,f=e.isValid,v=void 0!==f&&f,g=e.isInvalid,y=void 0!==g&&g,O=e.feedbackTooltip,h=void 0!==O&&O,E=e.feedback,j=e.className,N=e.style,C=e.label,x=e.children,P=e.custom,w=e.lang,k=e["data-browse"],R=e.as,F=void 0===R?"div":R,L=e.inputAs,_=void 0===L?"input":L,D=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=P?[c,"custom"]:[r,"form-file"],B=S[0],A=S[1];r=Object(p.a)(B,A);var M=Object(i.useContext)(b).controlId,V=Object(i.useMemo)((function(){return{controlId:n||M,custom:P}}),[M,P,n]),H=null!=C&&!1!==C&&!x,z=l.a.createElement(T,Object(a.a)({},D,{ref:t,isValid:v,isInvalid:y,disabled:d,as:_,lang:w}));return l.a.createElement(b.Provider,{value:V},l.a.createElement(F,{style:N,className:s()(j,r,P&&"custom-file")},x||l.a.createElement(l.a.Fragment,null,P?l.a.createElement(l.a.Fragment,null,z,H&&l.a.createElement(I,{"data-browse":k},C)):l.a.createElement(l.a.Fragment,null,H&&l.a.createElement(I,null,C),z),(v||y)&&l.a.createElement(m,{type:v?"valid":"invalid",tooltip:h},E))))}));C.displayName="FormFile",C.Input=T,C.Label=I;var x=C,P=(n(74),l.a.forwardRef((function(e,t){var n,r,c=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,f=e.size,m=e.htmlSize,v=e.id,g=e.className,y=e.isValid,O=void 0!==y&&y,h=e.isInvalid,E=void 0!==h&&h,j=e.plaintext,T=e.readOnly,N=e.custom,I=e.as,C=void 0===I?"input":I,x=Object(o.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),P=Object(i.useContext)(b).controlId,w=N?[u,"custom"]:[c,"form-control"],k=w[0],R=w[1];if(c=Object(p.a)(k,R),j)(r={})[c+"-plaintext"]=!0,n=r;else if("file"===d){var F;(F={})[c+"-file"]=!0,n=F}else if("range"===d){var L;(L={})[c+"-range"]=!0,n=L}else if("select"===C&&N){var _;(_={})[c+"-select"]=!0,_[c+"-select-"+f]=f,n=_}else{var D;(D={})[c]=!0,D[c+"-"+f]=f,n=D}return l.a.createElement(C,Object(a.a)({},x,{type:d,size:m,ref:t,readOnly:T,id:v||P,className:s()(g,n,O&&"is-valid",E&&"is-invalid")}))})));P.displayName="FormControl";var w=Object.assign(P,{Feedback:m}),k=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.children,u=e.controlId,d=e.as,f=void 0===d?"div":d,m=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);n=Object(p.a)(n,"form-group");var v=Object(i.useMemo)((function(){return{controlId:u}}),[u]);return l.a.createElement(b.Provider,{value:v},l.a.createElement(f,Object(a.a)({},m,{ref:t,className:s()(r,n)}),c))}));k.displayName="FormGroup";var R=k,F=["xl","lg","md","sm","xs"],L=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,c=void 0===i?"div":i,u=Object(o.a)(e,["bsPrefix","className","as"]),d=Object(p.a)(n,"col"),f=[],m=[];return F.forEach((function(e){var t,n,a,o=u[e];if(delete u[e],"object"===typeof o&&null!=o){var r=o.span;t=void 0===r||r,n=o.offset,a=o.order}else t=o;var s="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+d+s:""+d+s+"-"+t),null!=a&&m.push("order"+s+"-"+a),null!=n&&m.push("offset"+s+"-"+n)})),f.length||f.push(d),l.a.createElement(c,Object(a.a)({},u,{ref:t,className:s.a.apply(void 0,[r].concat(f,m))}))}));L.displayName="Col";var _=L,D=l.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"label":n,c=e.bsPrefix,u=e.column,d=e.srOnly,f=e.className,m=e.htmlFor,v=Object(o.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),g=Object(i.useContext)(b).controlId;c=Object(p.a)(c,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var O=s()(f,c,d&&"sr-only",u&&y);return m=m||g,u?l.a.createElement(_,Object(a.a)({as:"label",className:O,htmlFor:m},v)):l.a.createElement(r,Object(a.a)({ref:t,className:O,htmlFor:m},v))}));D.displayName="FormLabel",D.defaultProps={column:!1,srOnly:!1};var S=D,B=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,c=void 0===i?"small":i,u=e.muted,d=Object(o.a)(e,["bsPrefix","className","as","muted"]);return n=Object(p.a)(n,"form-text"),l.a.createElement(c,Object(a.a)({},d,{ref:t,className:s()(r,n,u&&"text-muted")}))}));B.displayName="FormText";var A=B,M=l.a.forwardRef((function(e,t){return l.a.createElement(E,Object(a.a)({},e,{ref:t,type:"switch"}))}));M.displayName="Switch",M.Input=E.Input,M.Label=E.Label;var V=M,H=n(62),z=Object(H.a)("form-row"),G=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.inline,i=e.className,c=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return n=Object(p.a)(n,"form"),l.a.createElement(d,Object(a.a)({},f,{ref:t,className:s()(i,c&&"was-validated",r&&n+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=z,G.Group=R,G.Control=w,G.Check=E,G.File=x,G.Switch=V,G.Label=S,G.Text=A;t.a=G}}]);
//# sourceMappingURL=0.c258bd4e.chunk.js.map