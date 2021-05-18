(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{131:function(t,e,n){"use strict";n.r(e);var c,r,a,s,o,u,i,b,l=n(0),j=n.n(l),d=n(25),O=n.n(d),h=n(20),g=n(18),f=(n(84),n(64)),p=n(33),v=n(34),x=n(36),m=n(35),C=(n(85),n(11)),k=n(37),S=n(21),y=n(39),E={getIsAuthenticated:function(t){return t.auth.loggedIn},getUsername:function(t){return t.auth.user.name}},R=n(1),q=Object(g.b)((function(t){return{isAuthenticated:E.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(y.a)(t,["component","isAuthenticated","redirectTo"]);return Object(R.jsx)(C.b,Object(S.a)(Object(S.a)({},r),{},{render:function(t){return n?Object(R.jsx)(e,Object(S.a)({},t)):Object(R.jsx)(C.a,{to:c})}}))})),U=Object(g.b)((function(t){return{isAuthenticated:E.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(y.a)(t,["component","isAuthenticated","redirectTo"]);return Object(R.jsx)(C.b,Object(S.a)(Object(S.a)({},r),{},{render:function(t){return n&&r.restricted?Object(R.jsx)(C.a,{to:c}):Object(R.jsx)(e,Object(S.a)({},t))}}))})),w=n(31),_=n(135),A=n(134),N=n(136),I=n(133),T=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(I.a,{variant:"secondary",className:"m-2",children:Object(R.jsx)(h.b,{to:"/register",className:"nav__link",activeClassName:"active__link",children:"Sign out"})}),Object(R.jsx)(I.a,{variant:"secondary",className:"m-2",children:Object(R.jsx)(h.b,{to:"/login",className:"nav__link",activeClassName:"active__link",children:"Log In"})})]})},F=n(32),z=n.p+"static/media/user.c8077d55.png",L=F.a.div(c||(c=Object(w.a)(["\n  .btn-secondary,\n  h4,\n  .avatar {\n    color: #d1abc4;\n    margin-right: 5px;\n  }\n  div {\n    display: flex;\n  }\n"]))),B={onLogout:k.a.logOut},D=Object(g.b)((function(t){return{name:E.getUsername(t)}}),B)((function(t){var e=t.name,n=t.onLogout;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(L,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)("img",{src:z,alt:"",width:"40",className:"avatar"}),Object(R.jsxs)("h4",{children:["Welcome, ",e]}),Object(R.jsx)(I.a,{variant:"secondary",className:"mr-2",type:"button",onClick:n,children:"Logout"})]})})})})),G=F.a.div(r||(r=Object(w.a)(["\n  a,\n  .navbar-brand,\n  navbar-nav .nav-link {\n    color: #d1abc4;\n    &:hover {\n      color: white;\n    }\n  }\n"]))),J=Object(g.b)((function(t){return{isAuthenticated:E.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(G,{children:Object(R.jsx)(_.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(R.jsxs)(A.a,{children:[Object(R.jsx)(_.a.Brand,{children:"Phonebook"}),Object(R.jsx)(_.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(R.jsxs)(_.a.Collapse,{id:"responsive-navbar-nav",children:[Object(R.jsxs)(N.a,{className:"mr-auto",children:[Object(R.jsx)(N.a.Link,{children:Object(R.jsx)(h.b,{exact:!0,to:"/",className:"nav__link",activeClassName:"active__link",children:"Home"})}),Object(R.jsx)(N.a.Link,{children:Object(R.jsx)(h.b,{to:"/contacts",className:"nav__link",activeClassName:"active__link",children:"Contacts"})})]}),Object(R.jsx)(N.a,{children:e?Object(R.jsx)(D,{}):Object(R.jsx)(T,{})})]})]})})})})})),M=n(70),H=n.n(M),P=(n(128),function(t){Object(x.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(R.jsx)(H.a,{type:"ThreeDots",color:"#d1abc4",height:100,width:100,timeout:3e3})}}]),n}(l.Component)),W=Object(l.lazy)((function(){return n.e(6).then(n.bind(null,140))})),K=Object(l.lazy)((function(){return n.e(5).then(n.bind(null,141))})),Q=Object(l.lazy)((function(){return n.e(4).then(n.bind(null,142))})),V=Object(l.lazy)((function(){return n.e(3).then(n.bind(null,143))})),X=function(t){Object(x.a)(n,t);var e=Object(m.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return console.log("First"),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(J,{}),Object(R.jsx)(l.Suspense,{fallback:Object(R.jsx)(P,{}),children:Object(R.jsxs)(C.d,{children:[Object(R.jsx)(U,{exact:!0,path:"/",component:W}),Object(R.jsx)(q,{exact:!0,path:"/contacts",redirectTo:"/login",component:V}),Object(R.jsx)(U,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,component:K}),Object(R.jsx)(U,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,component:Q})]})})]})}}]),n}(l.Component),Y={onGetCurrentUser:k.a.getCurrentUser},Z=Object(g.b)(null,Y)(X),$=n(41),tt=n(3),et=n(71),nt=n.n(et),ct=n(24),rt=n(72),at=n.n(rt),st=n(4),ot=n(13),ut=n(15),it=Object(tt.c)([],(a={},Object(st.a)(a,ut.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(st.a)(a,ut.a.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object($.a)(t),[n])})),Object(st.a)(a,ut.a.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),bt=Object(tt.c)(!1,(s={},Object(st.a)(s,ut.a.fetchContactsRequest,(function(){return!0})),Object(st.a)(s,ut.a.fetchContactsSuccess,(function(){return!1})),Object(st.a)(s,ut.a.fetchContactsError,(function(){return!1})),Object(st.a)(s,ut.a.addContactRequest,(function(){return!0})),Object(st.a)(s,ut.a.addContactSuccess,(function(){return!1})),Object(st.a)(s,ut.a.addContactError,(function(){return!1})),Object(st.a)(s,ut.a.deleteContactRequest,(function(){return!0})),Object(st.a)(s,ut.a.deleteContactSuccess,(function(){return!1})),Object(st.a)(s,ut.a.deleteContactError,(function(){return!1})),s)),lt=Object(tt.c)("",Object(st.a)({},ut.a.changeFilter,(function(t,e){return e.payload}))),jt=Object(tt.c)(null,{}),dt=Object(ot.b)({items:it,filter:lt,loading:bt,error:jt}),Ot=n(6),ht={name:null,email:null},gt=Object(tt.c)(ht,(o={},Object(st.a)(o,Ot.a.registerSuccess,(function(t,e){return e.payload.user})),Object(st.a)(o,Ot.a.loginSuccess,(function(t,e){return e.payload.user})),Object(st.a)(o,Ot.a.logoutSuccess,(function(){return ht})),Object(st.a)(o,Ot.a.getCurrentUserSuccess,(function(t,e){return e.payload})),o)),ft=Object(tt.c)(null,(u={},Object(st.a)(u,Ot.a.registerSuccess,(function(t,e){return e.payload.token})),Object(st.a)(u,Ot.a.loginSuccess,(function(t,e){return e.payload.token})),Object(st.a)(u,Ot.a.logoutSuccess,(function(){return null})),u)),pt=Object(tt.c)(!1,(i={},Object(st.a)(i,Ot.a.registerSuccess,(function(){return!0})),Object(st.a)(i,Ot.a.loginSuccess,(function(){return!0})),Object(st.a)(i,Ot.a.getCurrentUserSuccess,(function(){return!0})),Object(st.a)(i,Ot.a.logoutSuccess,(function(){return!1})),Object(st.a)(i,Ot.a.registerError,!1),Object(st.a)(i,Ot.a.loginError,!1),Object(st.a)(i,Ot.a.getCurrentUserError,!1),i)),vt=function(t,e){return e.payload},xt=Object(tt.c)(null,(b={},Object(st.a)(b,Ot.a.registerError,vt),Object(st.a)(b,Ot.a.loginError,vt),Object(st.a)(b,Ot.a.logoutError,vt),Object(st.a)(b,Ot.a.getCurrentUserError,vt),b)),mt=Object(ot.b)({user:gt,token:ft,loggedIn:pt,error:xt}),Ct=[].concat(Object($.a)(Object(tt.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[nt.a]),kt={key:"auth",storage:at.a,whitelist:["token"]},St=Object(tt.a)({reducer:{contacts:dt,auth:Object(ct.g)(kt,mt)},middleware:Ct}),yt={persistor:Object(ct.h)(St),store:St};O.a.render(Object(R.jsx)(j.a.StrictMode,{children:Object(R.jsx)(g.a,{store:yt.store,children:Object(R.jsx)(f.a,{loading:null,persistor:yt.persistor,children:Object(R.jsx)(h.a,{children:Object(R.jsx)(Z,{})})})})}),document.getElementById("root"))},15:function(t,e,n){"use strict";var c=n(3),r={fetchContactsRequest:Object(c.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(c.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(c.b)("contacts/fetchContactsError"),addContactRequest:Object(c.b)("contacts/addContactRequest"),addContactSuccess:Object(c.b)("contacts/addContactSuccess"),addContactError:Object(c.b)("contacts/addContactError"),deleteContactRequest:Object(c.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(c.b)("contacts/deleteContactSuccess"),deleteContactError:Object(c.b)("contacts/deleteContactError"),changeFilter:Object(c.b)("contacts/changeFilter")};e.a=r},37:function(t,e,n){"use strict";var c=n(23),r=n.n(c),a=n(30),s=n(28),o=n.n(s),u=n(6);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var i={set:function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){o.a.defaults.headers.common.Authorization=""}},b={token:i,register:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.registerRequest()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:c=e.sent,console.log(c),i.set(c.data.token),n(u.a.registerSuccess(c.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),n(u.a.registerError(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.loginRequest()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:c=e.sent,console.log(c),i.set(c.data.token),n(u.a.loginSuccess(c.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(u.a.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:i.unset(),e(u.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i.set(a),e(u.a.getCurrentUserRequest()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:s=t.sent,e(u.a.getCurrentUserSuccess(s.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(u.a.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=b},6:function(t,e,n){"use strict";var c=n(3),r={registerRequest:Object(c.b)("auth/registerRequest"),registerSuccess:Object(c.b)("auth/registerSuccess"),registerError:Object(c.b)("auth/registerError"),loginRequest:Object(c.b)("auth/loginRequest"),loginSuccess:Object(c.b)("auth/loginSuccess"),loginError:Object(c.b)("auth/loginError"),logoutRequest:Object(c.b)("auth/logoutRequest"),logoutSuccess:Object(c.b)("auth/logoutSuccess"),logoutError:Object(c.b)("auth/logoutError"),getCurrentUserRequest:Object(c.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(c.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(c.b)("auth/getCurrentUserError")};e.a=r},84:function(t,e,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.3af863db.chunk.js.map