(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{137:function(e,a,t){"use strict";var s=t(5),l=t(7),r=t(9),i=t.n(r),o=t(0),c=t.n(o),n=(t(73),t(8)),d=t.n(n),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,n=e.type,d=void 0===n?"valid":n,m=e.tooltip,b=void 0!==m&&m,f=Object(l.a)(e,["as","className","type","tooltip"]);return c.a.createElement(r,Object(s.a)({},f,{ref:a,className:i()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m;var f=b,u=c.a.createContext({controlId:void 0}),v=t(12),p=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.type,b=void 0===m?"checkbox":m,f=e.isValid,p=void 0!==f&&f,j=e.isInvalid,O=void 0!==j&&j,h=e.isStatic,x=e.as,y=void 0===x?"input":x,N=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(u),w=P.controlId,C=P.custom?[n,"custom-control-input"]:[r,"form-check-input"],I=C[0],E=C[1];return r=Object(v.a)(I,E),c.a.createElement(y,Object(s.a)({},N,{ref:a,type:b,id:t||w,className:i()(d,r,p&&"is-valid",O&&"is-invalid",h&&"position-static")}))}));p.displayName="FormCheckInput";var j=p,O=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[r,"custom-control-label"]:[t,"form-check-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),c.a.createElement("label",Object(s.a)({},m,{ref:a,htmlFor:d||f,className:i()(n,t)}))}));O.displayName="FormCheckLabel";var h=O,x=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,b=e.disabled,p=void 0!==b&&b,O=e.isValid,x=void 0!==O&&O,y=e.isInvalid,N=void 0!==y&&y,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,I=e.className,E=e.style,g=e.title,F=void 0===g?"":g,k=e.type,R=void 0===k?"checkbox":k,L=e.label,S=e.children,V=e.custom,T=e.as,z=void 0===T?"input":T,G=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||V,M=A?[n,"custom-control"]:[r,"form-check"],B=M[0],J=M[1];r=Object(v.a)(B,J);var _=Object(o.useContext)(u).controlId,D=Object(o.useMemo)((function(){return{controlId:t||_,custom:A}}),[_,A,t]),q=A||null!=L&&!1!==L&&!S,H=c.a.createElement(j,Object(s.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:N,isStatic:!q,disabled:p,as:z}));return c.a.createElement(u.Provider,{value:D},c.a.createElement("div",{style:E,className:i()(I,r,A&&"custom-"+R,m&&r+"-inline")},S||c.a.createElement(c.a.Fragment,null,H,q&&c.a.createElement(h,{title:F},L),(x||N)&&c.a.createElement(f,{type:x?"valid":"invalid",tooltip:w},C))))}));x.displayName="FormCheck",x.Input=j,x.Label=h;var y=x,N=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.isValid,b=e.isInvalid,f=e.lang,p=e.as,j=void 0===p?"input":p,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(o.useContext)(u),x=h.controlId,y=h.custom?[n,"custom-file-input"]:[r,"form-control-file"],N=y[0],P=y[1];return r=Object(v.a)(N,P),c.a.createElement(j,Object(s.a)({},O,{ref:a,id:t||x,type:"file",lang:f,className:i()(d,r,m&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[r,"custom-file-label"]:[t,"form-file-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),c.a.createElement("label",Object(s.a)({},m,{ref:a,htmlFor:d||f,className:i()(n,t),"data-browse":m["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,I=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,b=e.isValid,p=void 0!==b&&b,j=e.isInvalid,O=void 0!==j&&j,h=e.feedbackTooltip,x=void 0!==h&&h,y=e.feedback,N=e.className,w=e.style,I=e.label,E=e.children,g=e.custom,F=e.lang,k=e["data-browse"],R=e.as,L=void 0===R?"div":R,S=e.inputAs,V=void 0===S?"input":S,T=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=g?[n,"custom"]:[r,"form-file"],G=z[0],A=z[1];r=Object(v.a)(G,A);var M=Object(o.useContext)(u).controlId,B=Object(o.useMemo)((function(){return{controlId:t||M,custom:g}}),[M,g,t]),J=null!=I&&!1!==I&&!E,_=c.a.createElement(P,Object(s.a)({},T,{ref:a,isValid:p,isInvalid:O,disabled:m,as:V,lang:F}));return c.a.createElement(u.Provider,{value:B},c.a.createElement(L,{style:w,className:i()(N,r,g&&"custom-file")},E||c.a.createElement(c.a.Fragment,null,g?c.a.createElement(c.a.Fragment,null,_,J&&c.a.createElement(C,{"data-browse":k},I)):c.a.createElement(c.a.Fragment,null,J&&c.a.createElement(C,null,I),_),(p||O)&&c.a.createElement(f,{type:p?"valid":"invalid",tooltip:x},y))))}));I.displayName="FormFile",I.Input=P,I.Label=C;var E=I,g=(t(74),c.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,b=e.size,f=e.htmlSize,p=e.id,j=e.className,O=e.isValid,h=void 0!==O&&O,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,I=void 0===C?"input":C,E=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),g=Object(o.useContext)(u).controlId,F=w?[d,"custom"]:[n,"form-control"],k=F[0],R=F[1];if(n=Object(v.a)(k,R),N)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===m){var L;(L={})[n+"-file"]=!0,t=L}else if("range"===m){var S;(S={})[n+"-range"]=!0,t=S}else if("select"===I&&w){var V;(V={})[n+"-select"]=!0,V[n+"-select-"+b]=b,t=V}else{var T;(T={})[n]=!0,T[n+"-"+b]=b,t=T}return c.a.createElement(I,Object(s.a)({},E,{type:m,size:f,ref:a,readOnly:P,id:p||g,className:i()(j,t,h&&"is-valid",y&&"is-invalid")}))})));g.displayName="FormControl";var F=Object.assign(g,{Feedback:f}),k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,d=e.controlId,m=e.as,b=void 0===m?"div":m,f=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(u.Provider,{value:p},c.a.createElement(b,Object(s.a)({},f,{ref:a,className:i()(r,t)}),n))}));k.displayName="FormGroup";var R=k,L=["xl","lg","md","sm","xs"],S=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"div":o,d=Object(l.a)(e,["bsPrefix","className","as"]),m=Object(v.a)(t,"col"),b=[],f=[];return L.forEach((function(e){var a,t,s,l=d[e];if(delete d[e],"object"===typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,s=l.order}else a=l;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+m+i:""+m+i+"-"+a),null!=s&&f.push("order"+i+"-"+s),null!=t&&f.push("offset"+i+"-"+t)})),b.length||b.push(m),c.a.createElement(n,Object(s.a)({},d,{ref:a,className:i.a.apply(void 0,[r].concat(b,f))}))}));S.displayName="Col";var V=S,T=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,d=e.column,m=e.srOnly,b=e.className,f=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),j=Object(o.useContext)(u).controlId;n=Object(v.a)(n,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+" "+O+"-"+d);var h=i()(b,n,m&&"sr-only",d&&O);return f=f||j,d?c.a.createElement(V,Object(s.a)({as:"label",className:h,htmlFor:f},p)):c.a.createElement(r,Object(s.a)({ref:a,className:h,htmlFor:f},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var z=T,G=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,m=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),c.a.createElement(n,Object(s.a)({},m,{ref:a,className:i()(r,t,d&&"text-muted")}))}));G.displayName="FormText";var A=G,M=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(s.a)({},e,{ref:a,type:"switch"}))}));M.displayName="Switch",M.Input=y.Input,M.Label=y.Label;var B=M,J=t(52),_=Object(J.a)("form-row"),D=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,n=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),c.a.createElement(m,Object(s.a)({},b,{ref:a,className:i()(o,n&&"was-validated",r&&t+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=_,D.Group=R,D.Control=F,D.Check=y,D.File=E,D.Switch=B,D.Label=z,D.Text=A;a.a=D},142:function(e,a,t){"use strict";t.r(a);var s,l=t(4),r=t(33),i=t(34),o=t(36),c=t(35),n=t(31),d=t(0),m=t(18),b=t(37),f=t(137),u=t(133),v=t(32),p=t(1),j=v.a.div(s||(s=Object(n.a)(["\n  .btn-secondary {\n    color: #d1abc4;\n  }\n"]))),O=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(l.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(p.jsx)("div",{className:"form__register",children:Object(p.jsx)(j,{children:Object(p.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(f.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(f.a.Label,{children:"Email address"}),Object(p.jsx)(f.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:a,onChange:this.handleChange})]}),Object(p.jsxs)(f.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(f.a.Label,{children:"Password"}),Object(p.jsx)(f.a.Control,{type:"password",placeholder:"Password",name:"password",value:t,onChange:this.handleChange})]}),Object(p.jsx)(u.a,{variant:"secondary",type:"submit",children:"Log in"})]})})})}}]),t}(d.Component),h={onLogin:b.a.logIn};a.default=Object(m.b)(null,h)(O)}}]);
//# sourceMappingURL=4.13d51bf1.chunk.js.map