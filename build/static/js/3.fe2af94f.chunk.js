(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{137:function(e,t,a){"use strict";var n=a(5),r=a(7),c=a(9),o=a.n(c),i=a(0),s=a.n(i),l=(a(73),a(8)),u=a.n(l),d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},m=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,i=e.className,l=e.type,u=void 0===l?"valid":l,d=e.tooltip,m=void 0!==d&&d,f=Object(r.a)(e,["as","className","type","tooltip"]);return s.a.createElement(c,Object(n.a)({},f,{ref:t,className:o()(i,u+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=d;var f=m,b=s.a.createContext({controlId:void 0}),v=a(12),p=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.type,m=void 0===d?"checkbox":d,f=e.isValid,p=void 0!==f&&f,h=e.isInvalid,j=void 0!==h&&h,O=e.isStatic,x=e.as,y=void 0===x?"input":x,C=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),N=Object(i.useContext)(b),g=N.controlId,P=N.custom?[l,"custom-control-input"]:[c,"form-check-input"],w=P[0],I=P[1];return c=Object(v.a)(w,I),s.a.createElement(y,Object(n.a)({},C,{ref:t,type:m,id:a||g,className:o()(u,c,p&&"is-valid",j&&"is-invalid",O&&"position-static")}))}));p.displayName="FormCheckInput";var h=p,j=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[c,"custom-control-label"]:[a,"form-check-label"],h=p[0],j=p[1];return a=Object(v.a)(h,j),s.a.createElement("label",Object(n.a)({},d,{ref:t,htmlFor:u||f,className:o()(l,a)}))}));j.displayName="FormCheckLabel";var O=j,x=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,m=e.disabled,p=void 0!==m&&m,j=e.isValid,x=void 0!==j&&j,y=e.isInvalid,C=void 0!==y&&y,N=e.feedbackTooltip,g=void 0!==N&&N,P=e.feedback,w=e.className,I=e.style,E=e.title,F=void 0===E?"":E,k=e.type,R=void 0===k?"checkbox":k,S=e.label,L=e.children,V=e.custom,_=e.as,A=void 0===_?"input":_,T=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),z="switch"===R||V,D=z?[l,"custom-control"]:[c,"form-check"],q=D[0],G=D[1];c=Object(v.a)(q,G);var M=Object(i.useContext)(b).controlId,Z=Object(i.useMemo)((function(){return{controlId:a||M,custom:z}}),[M,z,a]),U=z||null!=S&&!1!==S&&!L,J=s.a.createElement(h,Object(n.a)({},T,{type:"switch"===R?"checkbox":R,ref:t,isValid:x,isInvalid:C,isStatic:!U,disabled:p,as:A}));return s.a.createElement(b.Provider,{value:Z},s.a.createElement("div",{style:I,className:o()(w,c,z&&"custom-"+R,d&&c+"-inline")},L||s.a.createElement(s.a.Fragment,null,J,U&&s.a.createElement(O,{title:F},S),(x||C)&&s.a.createElement(f,{type:x?"valid":"invalid",tooltip:g},P))))}));x.displayName="FormCheck",x.Input=h,x.Label=O;var y=x,C=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,f=e.lang,p=e.as,h=void 0===p?"input":p,j=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(i.useContext)(b),x=O.controlId,y=O.custom?[l,"custom-file-input"]:[c,"form-control-file"],C=y[0],N=y[1];return c=Object(v.a)(C,N),s.a.createElement(h,Object(n.a)({},j,{ref:t,id:a||x,type:"file",lang:f,className:o()(u,c,d&&"is-valid",m&&"is-invalid")}))}));C.displayName="FormFileInput";var N=C,g=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(i.useContext)(b),f=m.controlId,p=m.custom?[c,"custom-file-label"]:[a,"form-file-label"],h=p[0],j=p[1];return a=Object(v.a)(h,j),s.a.createElement("label",Object(n.a)({},d,{ref:t,htmlFor:u||f,className:o()(l,a),"data-browse":d["data-browse"]}))}));g.displayName="FormFileLabel";var P=g,w=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,m=e.isValid,p=void 0!==m&&m,h=e.isInvalid,j=void 0!==h&&h,O=e.feedbackTooltip,x=void 0!==O&&O,y=e.feedback,C=e.className,g=e.style,w=e.label,I=e.children,E=e.custom,F=e.lang,k=e["data-browse"],R=e.as,S=void 0===R?"div":R,L=e.inputAs,V=void 0===L?"input":L,_=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),A=E?[l,"custom"]:[c,"form-file"],T=A[0],z=A[1];c=Object(v.a)(T,z);var D=Object(i.useContext)(b).controlId,q=Object(i.useMemo)((function(){return{controlId:a||D,custom:E}}),[D,E,a]),G=null!=w&&!1!==w&&!I,M=s.a.createElement(N,Object(n.a)({},_,{ref:t,isValid:p,isInvalid:j,disabled:d,as:V,lang:F}));return s.a.createElement(b.Provider,{value:q},s.a.createElement(S,{style:g,className:o()(C,c,E&&"custom-file")},I||s.a.createElement(s.a.Fragment,null,E?s.a.createElement(s.a.Fragment,null,M,G&&s.a.createElement(P,{"data-browse":k},w)):s.a.createElement(s.a.Fragment,null,G&&s.a.createElement(P,null,w),M),(p||j)&&s.a.createElement(f,{type:p?"valid":"invalid",tooltip:x},y))))}));w.displayName="FormFile",w.Input=N,w.Label=P;var I=w,E=(a(74),s.a.forwardRef((function(e,t){var a,c,l=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,m=e.size,f=e.htmlSize,p=e.id,h=e.className,j=e.isValid,O=void 0!==j&&j,x=e.isInvalid,y=void 0!==x&&x,C=e.plaintext,N=e.readOnly,g=e.custom,P=e.as,w=void 0===P?"input":P,I=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(i.useContext)(b).controlId,F=g?[u,"custom"]:[l,"form-control"],k=F[0],R=F[1];if(l=Object(v.a)(k,R),C)(c={})[l+"-plaintext"]=!0,a=c;else if("file"===d){var S;(S={})[l+"-file"]=!0,a=S}else if("range"===d){var L;(L={})[l+"-range"]=!0,a=L}else if("select"===w&&g){var V;(V={})[l+"-select"]=!0,V[l+"-select-"+m]=m,a=V}else{var _;(_={})[l]=!0,_[l+"-"+m]=m,a=_}return s.a.createElement(w,Object(n.a)({},I,{type:d,size:f,ref:t,readOnly:N,id:p||E,className:o()(h,a,O&&"is-valid",y&&"is-invalid")}))})));E.displayName="FormControl";var F=Object.assign(E,{Feedback:f}),k=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.children,u=e.controlId,d=e.as,m=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(v.a)(a,"form-group");var p=Object(i.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(b.Provider,{value:p},s.a.createElement(m,Object(n.a)({},f,{ref:t,className:o()(c,a)}),l))}));k.displayName="FormGroup";var R=k,S=["xl","lg","md","sm","xs"],L=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,l=void 0===i?"div":i,u=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(v.a)(a,"col"),m=[],f=[];return S.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+d+o:""+d+o+"-"+t),null!=n&&f.push("order"+o+"-"+n),null!=a&&f.push("offset"+o+"-"+a)})),m.length||m.push(d),s.a.createElement(l,Object(n.a)({},u,{ref:t,className:o.a.apply(void 0,[c].concat(m,f))}))}));L.displayName="Col";var V=L,_=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"label":a,l=e.bsPrefix,u=e.column,d=e.srOnly,m=e.className,f=e.htmlFor,p=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(i.useContext)(b).controlId;l=Object(v.a)(l,"form-label");var j="col-form-label";"string"===typeof u&&(j=j+" "+j+"-"+u);var O=o()(m,l,d&&"sr-only",u&&j);return f=f||h,u?s.a.createElement(V,Object(n.a)({as:"label",className:O,htmlFor:f},p)):s.a.createElement(c,Object(n.a)({ref:t,className:O,htmlFor:f},p))}));_.displayName="FormLabel",_.defaultProps={column:!1,srOnly:!1};var A=_,T=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.as,l=void 0===i?"small":i,u=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(v.a)(a,"form-text"),s.a.createElement(l,Object(n.a)({},d,{ref:t,className:o()(c,a,u&&"text-muted")}))}));T.displayName="FormText";var z=T,D=s.a.forwardRef((function(e,t){return s.a.createElement(y,Object(n.a)({},e,{ref:t,type:"switch"}))}));D.displayName="Switch",D.Input=y.Input,D.Label=y.Label;var q=D,G=a(52),M=Object(G.a)("form-row"),Z=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.inline,i=e.className,l=e.validated,u=e.as,d=void 0===u?"form":u,m=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(v.a)(a,"form"),s.a.createElement(d,Object(n.a)({},m,{ref:t,className:o()(i,l&&"was-validated",c&&a+"-inline")}))}));Z.displayName="Form",Z.defaultProps={inline:!1},Z.Row=M,Z.Group=R,Z.Control=F,Z.Check=y,Z.File=I,Z.Switch=q,Z.Label=A,Z.Text=z;t.a=Z},139:function(e,t,a){e.exports={contact_list:"ContactList_contact_list__3i0Zt",contact__container:"ContactList_contact__container__23iZg"}},143:function(e,t,a){"use strict";a.r(t);var n,r=a(4),c=a(33),o=a(34),i=a(36),s=a(35),l=a(31),u=a(0),d=a(18),m=a(28),f=a.n(m),b=new Uint8Array(16);function v(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(b)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(e){return"string"===typeof e&&p.test(e)},j=[],O=0;O<256;++O)j.push((O+256).toString(16).substr(1));var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(j[e[t+0]]+j[e[t+1]]+j[e[t+2]]+j[e[t+3]]+"-"+j[e[t+4]]+j[e[t+5]]+"-"+j[e[t+6]]+j[e[t+7]]+"-"+j[e[t+8]]+j[e[t+9]]+"-"+j[e[t+10]]+j[e[t+11]]+j[e[t+12]]+j[e[t+13]]+j[e[t+14]]+j[e[t+15]]).toLowerCase();if(!h(a))throw TypeError("Stringified UUID is invalid");return a};var y=function(e,t,a){var n=(e=e||{}).random||(e.rng||v)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return x(n)},C=a(15);f.a.defaults.baseURL="https://connections-api.herokuapp.com";var N,g,P=a(38),w=function(e){return e.contacts.filter},I=function(e){return e.contacts.items},E=Object(P.a)([I,w],(function(e,t){console.log("\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u0438\u0434\u0438\u043c\u044b\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432");var a=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(a)}))})),F=a(137),k=a(133),R=a(32),S=a(1),L=R.a.div(N||(N=Object(l.a)(["\n  .btn-secondary {\n    color: #d1abc4;\n  }\n  .form-control {\n    max-width: 400px;\n  }\n"]))),V=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.nameInputId=y(),e.numberInputId=y(),e.handleChange=function(t){var a=t.currentTarget,n=a.name,c=a.value;e.setState(Object(r.a)({},n,c))},e.createContact=function(){var t=e.state,a=t.name,n=t.number,r=e.props,c=r.onSubmit,o=r.items,i=o.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})),s=o.find((function(e){return e.number===n}));i||s?alert("".concat(a," or ").concat(n," is already in contacts")):c(a,n)},e.handleSubmit=function(t){t.preventDefault(),e.createContact(),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(S.jsx)(L,{children:Object(S.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(S.jsxs)(F.a.Group,{children:[Object(S.jsx)(F.a.Label,{children:"Name"}),Object(S.jsx)(F.a.Control,{type:"text",id:this.nameInputId,placeholder:"Enter contact name",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)(F.a.Group,{children:[Object(S.jsx)(F.a.Label,{children:"Number"}),Object(S.jsx)(F.a.Control,{type:"text",id:this.numberInputId,name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"Enter contact number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12  \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)(k.a,{variant:"secondary",type:"submit",className:"mb-5",children:"Add contact"})]})})}}]),a}(u.Component),_=Object(d.b)((function(e){return{items:I(e)}}),(function(e){return{onSubmit:function(t,a){return e(function(e,t){return function(a){var n={id:y(),name:e,number:t};a(C.a.addContactRequest()),f.a.post("/contacts",n).then((function(e){var t=e.data;return a(C.a.addContactSuccess(t))})).catch((function(e){return a(C.a.addContactError(e))}))}}(t,a))}}}))(V),A=R.a.div(g||(g=Object(l.a)(["\n  .form-control {\n    max-width: 400px;\n  }\n"]))),T=function(e){var t=e.value,a=e.onChange;return Object(S.jsxs)(A,{children:[Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(F.a,{children:Object(S.jsxs)(F.a.Group,{children:[Object(S.jsx)(F.a.Label,{children:"Find Contacts By Name"}),Object(S.jsx)(F.a.Control,{type:"text",placeholder:"Enter contact name or number",value:t,onChange:a})]})})]})};T.defaultProps={value:""};var z,D=Object(d.b)((function(e){return{value:w(e)}}),(function(e){return{onChange:function(t){return e(C.a.changeFilter(t.target.value))}}}))(T),q=a(139),G=a.n(q),M=R.a.div(z||(z=Object(l.a)(["\n  .btn-secondary {\n    color: #d1abc4;\n  }\n"]))),Z=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.onDeleteContact;return t.length>0&&Object(S.jsx)("ul",{className:G.a.contact__container,children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(S.jsxs)("li",{className:G.a.contact_list,children:[n,": ",r,Object(S.jsx)(M,{children:Object(S.jsx)(k.a,{variant:"secondary",className:"ml-2",type:"button",onClick:function(){return a(t)},children:"Delete"})})]},t)}))})}}]),a}(u.Component),U=Object(d.b)((function(e){return{items:E(e)}}),(function(e){return{onDeleteContact:function(t){return e(function(e){return function(t){t(C.a.deleteContactRequest()),f.a.delete("/contacts/".concat(e)).then((function(){return t(C.a.deleteContactSuccess(e))})).catch((function(e){return t(C.a.deleteContactError(e))}))}}(t))},fetchContacts:function(){return e((function(e){e(C.a.fetchContactsRequest()),f.a.get("/contacts").then((function(t){var a=t.data;return e(C.a.fetchContactsSuccess(a))})).catch((function(t){return e(C.a.fetchContactsError(t))}))}))}}}))(Z),J=a(134);t.default=function(){return Object(S.jsxs)(J.a,{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(_,{}),Object(S.jsx)(D,{}),Object(S.jsx)(U,{})]})}}}]);
//# sourceMappingURL=3.fe2af94f.chunk.js.map