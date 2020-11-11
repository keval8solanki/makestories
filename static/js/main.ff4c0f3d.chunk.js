(this.webpackJsonpmakestories=this.webpackJsonpmakestories||[]).push([[0],{159:function(e,t,n){},185:function(e,t){},187:function(e,t){},197:function(e,t){},199:function(e,t){},226:function(e,t){},227:function(e,t){},232:function(e,t){},234:function(e,t){},258:function(e,t){},299:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n(24),s=n.n(a),i=(n(159),n(5)),u=n(11),o=n.n(u),j=n(20),l=n(6),d=n(9),b=n(27),p=n(3),O=n(21),x=n.n(O),h=n(15),f="SET_CURRENT_USER",m="SET_AUTHENTICATION",g=function(e){return{type:f,payload:e}},v=function(e){return{type:m,payload:e}},y={URL:"https://makestories-api.herokuapp.com"},w="#4CAF50",C="#F44336",S="#2196F3",F={default:{BACKGROUND_COLOR:"white",TEXT:"black"},disabled:{BACKGROUND_COLOR:"#cccccc",TEXT:"#666666"},BOX_SHADOW:"#00000036",BOX_SHADOW_HOVER:"#00000075"},_={default:{BORDER:"#0000001a"},BORDER:"#2196F3"};function k(){var e=Object(i.a)(["\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    @media (max-width: 600px) {\n        padding:0px 20px;\n    }\n"]);return k=function(){return e},e}function N(){var e=Object(i.a)(["\n    ",";\n    color: #333;\n    font-size: 1.2em;\n    text-align: left;\n    max-width: 300px;\n\n"]);return N=function(){return e},e}function R(){var e=Object(i.a)(["\n    ",";\n    text-align: left;\n    font-size: 0.8em;\n    font-weight: 500;\n    color: #0000008f;\n"]);return R=function(){return e},e}function U(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n"]);return U=function(){return e},e}function E(){var e=Object(i.a)(["\n    max-width: 400px;\n    padding: 60px;\n     @media (max-width: 768px) {\n    display: none;\n  }\n"]);return E=function(){return e},e}function L(){var e=Object(i.a)(["\n    height: 24px;\n    width: 24px;\n    cursor: pointer;\n"]);return L=function(){return e},e}function P(){var e=Object(i.a)(["\n    width: fit-content;\n    margin: 0;\n    padding: 0;\n    text-align: left;\n    font-size: 0.7em;\n    color: red;\n"]);return P=function(){return e},e}function A(){var e=Object(i.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 8px 20px;\n    margin: ",";\n    border-style: none;\n    border-radius: 5px;\n    box-shadow: 1px 2px 5px 0px ",";\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n    \n    &:disabled{\n        opacity: 0.5;\n        background-color:",";\n        color: ",";\n        box-shadow: none;\n        cursor: not-allowed;\n    }\n\n    &:hover{\n        box-shadow: 1px 2px 5px 0px ",";\n    }\n"]);return A=function(){return e},e}function T(){var e=Object(i.a)(["\n    padding: 5px 10px;\n    min-width: 250px;\n    border-radius: 5px;\n    transition: all 0.3s;\n    outline: none;\n    margin-bottom: 10px;\n    border: 2px solid ",";\n"]);return T=function(){return e},e}function D(){var e=Object(i.a)(["\n    width: fit-content;\n    color: #333;\n    font-weight: 500;\n    text-align: left;\n    font-size: 0.8em;\n    padding-bottom: 5px;\n"]);return D=function(){return e},e}function B(){var e=Object(i.a)(["\n    text-align: left;\n    ",";\n    padding-bottom: 40px;\n"]);return B=function(){return e},e}function z(){var e=Object(i.a)(["\n    width: 300px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 1px 1px 6px 0px #0000002b;\n"]);return z=function(){return e},e}function V(){var e=Object(i.a)(["\n    margin: 0;\n    padding: 0;\n"]);return V=function(){return e},e}function X(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return X=function(){return e},e}function q(){var e=Object(i.a)(["\n    border-radius: 5px;\n    box-shadow: 1px 1px 6px 0px #0000002e;\n    padding: 20px;\n    @media (max-width: 600px){\n        margin: 20px;\n    }\n"]);return q=function(){return e},e}var H=Object(l.a)(q()),Z=(Object(l.a)(X()),Object(l.a)(V())),G=l.b.form(z()),K=l.b.h2(B(),Z),I=l.b.label(D()),W=_,J=l.b.input(T(),(function(e){return function(e){if(e){if(e.error)return C;if(e.success)return w}return W.default.BORDER}(e)})),M=F,Q=l.b.button(A(),(function(e){return e?e.backgroundColor:M.default.BACKGROUND_COLOR}),(function(e){return e?e.color:M.default.TEXT}),(function(e){return e?e.margin:"0"}),M.BOX_SHADOW,M.disabled.BACKGROUND_COLOR,M.disabled.TEXT,M.BOX_SHADOW_HOVER),$=(l.b.p(P()),l.b.img(L())),Y=l.b.img(E()),ee=l.b.div(U()),te=l.b.p(R(),Z),ne=l.b.p(N(),Z),re=l.b.div(k()),ce=n(56),ae=n.n(ce),se=function(e){return ae.a.AES.encrypt(e,"52kRppS9JDJBKDthfjKg2uSGCK4NSS9kfAqQumFMK6XFGnK84jkmxGp3c65srqQ9uMNKvTSkRHJQCwrEV6SGEUqC8ZsYcEVV6TA2Z9RTLHj7nhtetXNV9htRcenqXyabR7zDh7rNnvVn8TCmSnqPeFX4gdVLHhmRgLHtSmnbLEPNZxd3E5ndefyBCZpWsXPem545ga8UrpN6sRaqH8aszqaV9aUR9VEEUAcffEakW9cVCdG22hXjZ9Ajb6c3LBZR4Lu2eGfnXRKFZBVuQJywy5egmrdMWSFKbm3cpKkGtHQSYq663f8rpy98Baexythg8Wh8RDATTkV8f3n3Yu3LGBm33cShkyzLubMZspCMM5pdCXcDw2CWNckmuwU6J8F5UyQXykFumCxKwAJSP4SFjh5UM6VAMQVwTvL3VHLDWyh7v75SHSwVDT4jjkQZ4udbm3qUpdgaza3FZLCZ7SUgsW7yMAxTqXzr7Nha7aQ2W5sxL4rQ435bDEvAd926Umdv").toString()},ie=function(e){return/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)},ue=function(e){return/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(e)},oe=function(e){return e>0&&e<=150},je=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(e)},le=function(e){if(e)return""!==e.trim()},de=function(e){return/([0-9]{6}|[0-9]{3}\s[0-9]{3})/.test(e)},be=n(48),pe=(n(297),n(303)),Oe=be.a,xe=be.a;Oe.configure({position:be.a.POSITION.BOTTOM_RIGHT,autoClose:3e3,pauseOnFocusLoss:!1,toastId:Object(pe.a)(),draggablePercent:60}),xe.configure({position:be.a.POSITION.TOP_RIGHT,autoClose:!1,pauseOnFocusLoss:!1,closeOnClick:!1,toastId:Object(pe.a)(),draggable:!1,limit:1});var he=n.p+"static/media/login.7691ce84.svg";function fe(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;  \n"]);return fe=function(){return e},e}function me(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),u=i[0],l=i[1],O=Object(h.b)(),f=Object(d.g)(),m=Object(c.useState)("Login"),C=Object(p.a)(m,2),S=C[0],F=C[1],_=Object(c.useState)(!1),k=Object(p.a)(_,2),N=k[0],R=k[1],U=function(){var e=Object(j.a)(o.a.mark((function e(t){var r,c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),F("Verifying..."),R(!0),r={email:n,password:u},c=se(JSON.stringify(r)),e.prev=5,e.next=8,x.a.post("".concat(y.URL,"/login"),{data:c},{withCredentials:!0});case 8:a=e.sent,s=a.data,F("Login"),R(!1),s&&(O(g(s.userData)),O(v(!0)),f.push("/user/".concat(s.userData._id))),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(5),F("Login"),R(!1),Oe.error("Invalid Credentials");case 20:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),E=ie(n)&&je(u);return Object(r.jsxs)(ge,{children:[Object(r.jsxs)(G,{onSubmit:U,children:[Object(r.jsx)(K,{children:"Login"}),Object(r.jsx)(I,{htmlFor:"email",children:"Email *"}),Object(r.jsx)(J,{name:"email",value:n,onChange:function(e){return a(e.target.value)},type:"text",required:!0,error:n&&!ie(n),success:ie(n)}),Object(r.jsx)(I,{htmlFor:"password",children:"Password *"}),Object(r.jsx)(J,{name:"password",value:u,onChange:function(e){return l(e.target.value)},type:"password",required:!0,error:u&&!je(u),success:je(u)}),Object(r.jsx)(Q,{margin:"10px 0px",color:"white",backgroundColor:w,disabled:!E||N,type:"submit",children:S}),Object(r.jsx)(b.b,{style:{marginTop:"20px"},to:"/signup",children:"Need an account?"})]}),Object(r.jsx)(Y,{src:he,alt:"Login"})]})}var ge=l.b.div(fe()),ve=n.p+"static/media/signup.02ada2b3.svg";function ye(){var e=Object(i.a)(["\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return ye=function(){return e},e}function we(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;  \n"]);return we=function(){return e},e}function Ce(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(p.a)(s,2),u=i[0],l=i[1],O=Object(c.useState)(),f=Object(p.a)(O,2),m=f[0],w=f[1],C=Object(c.useState)(""),F=Object(p.a)(C,2),_=F[0],k=F[1],N=Object(c.useState)(""),R=Object(p.a)(N,2),U=R[0],E=R[1],L=Object(c.useState)(""),P=Object(p.a)(L,2),A=P[0],T=P[1],D=Object(c.useState)(""),B=Object(p.a)(D,2),z=B[0],V=B[1],X=Object(c.useState)(""),q=Object(p.a)(X,2),H=q[0],Z=q[1],W=Object(c.useState)(""),M=Object(p.a)(W,2),$=M[0],ee=M[1],te=Object(c.useState)(""),ne=Object(p.a)(te,2),re=ne[0],ce=ne[1],ae=Object(c.useState)(""),be=Object(p.a)(ae,2),pe=be[0],he=be[1],fe=Object(c.useState)(""),me=Object(p.a)(fe,2),ge=me[0],ye=me[1],we=Object(c.useState)(),Ce=Object(p.a)(we,2),_e=Ce[0],ke=Ce[1],Ne=Object(c.useState)(0),Re=Object(p.a)(Ne,2),Ue=Re[0],Ee=Re[1],Le=Object(c.useState)(!1),Pe=Object(p.a)(Le,2),Ae=Pe[0],Te=Pe[1],De=Object(c.useState)("Sign Up"),Be=Object(p.a)(De,2),ze=Be[0],Ve=Be[1],Xe=Object(c.useState)(!1),qe=Object(p.a)(Xe,2),He=qe[0],Ze=qe[1],Ge=Object(h.b)(),Ke=Object(d.g)(),Ie=pe===ge,We=le(n)&&le(u)&&oe(m)&&ue(_)&&ie(re)&&je(pe)&&Ie&&le(U)&&le(A)&&le(H)&&le($)&&de(z),Je=pe&&!je(pe);Je&&Ae!==Je&&Te(Je),Object(c.useEffect)((function(){Ae&&xe.dark(Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Password must contain 8 letters"}),Object(r.jsx)("li",{children:"Password must contain 1 UPPERCASE character"}),Object(r.jsx)("li",{children:"Password must contain 1 lowercase character"}),Object(r.jsx)("li",{children:"Password must contain 1 special character (!@#$)"}),Object(r.jsx)("li",{children:"Password must contain 1 numeric character (1234)"})]})}))}),[Ae]);var Me=function(){var e=Object(j.a)(o.a.mark((function e(t){var r,c,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Ve("Signing up..."),Ze(!0),r={firstName:n,lastName:u,age:m,phoneNumber:_,address:{street:U,city:A,zipcode:z,state:H,country:$},email:re,password:pe},c=se(JSON.stringify(r)),(a=new FormData).append("profile_pic",_e),a.append("data",c),e.prev=8,e.next=11,x.a.post("".concat(y.URL,"/user"),a,{withCredentials:!0});case 11:s=e.sent,i=s.data,Ve("Sign Up"),Ze(!1),Ge(g(i.savedUserData)),Ge(v(!0)),Ke.push("/user/".concat(i.savedUserData._id)),Oe.success("Sign up Success"),e.next=26;break;case 21:e.prev=21,e.t0=e.catch(8),Ve("Sign Up"),Ze(!1),Oe.success("Cannot Sign up");case 26:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(Se,{children:[Object(r.jsx)(Y,{src:ve,alt:"Sign up"}),Object(r.jsxs)(G,{onSubmit:Me,children:[Object(r.jsx)(K,{children:"Signup"}),function(){switch(Ue){case 0:return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{htmlFor:"email",children:"Email *"}),Object(r.jsx)(J,{name:"email",value:re,onChange:function(e){return ce(e.target.value)},type:"text",error:re&&!ie(re),success:ie(re)}),Object(r.jsx)(I,{htmlFor:"password",children:"Password *"}),Object(r.jsx)(J,{name:"password",value:pe,onChange:function(e){return he(e.target.value)},type:"password",error:pe&&!je(pe),success:je(pe)}),Object(r.jsx)(I,{htmlFor:"confirm_password",children:"Confirm Password *"}),Object(r.jsx)(J,{name:"confirm_password",value:ge,onChange:function(e){return ye(e.target.value)},type:"password",error:ge&&!Ie&&!je(ge),success:ge&&Ie&&je(ge)}),Object(r.jsx)(I,{htmlFor:"profile_picture",children:"Profile Picture *"}),Object(r.jsx)(J,{name:"profile_picture",type:"file",onChange:function(e){return ke(e.target.files[0])},error:_e&&!_e,success:_e})]});case 1:return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{htmlFor:"first_name",children:"First Name *"}),Object(r.jsx)(J,{name:"first_name",value:n,onChange:function(e){return a(e.target.value)},type:"text",success:le(n)}),Object(r.jsx)(I,{htmlFor:"last_name",children:"Last Name *"}),Object(r.jsx)(J,{name:"last_name",value:u,onChange:function(e){return l(e.target.value)},type:"text",success:le(u)}),Object(r.jsx)(I,{htmlFor:"age",children:"Age *"}),Object(r.jsx)(J,{value:m,name:"age",onChange:function(e){return w(e.target.value)},type:"number",error:m&&!oe(m),success:oe(m)}),Object(r.jsx)(I,{htmlFor:"phone_number",children:"Phone Number *"}),Object(r.jsx)(J,{name:"phone_number",value:_,onChange:function(e){return k(e.target.value)},type:"text",error:_&&!ue(_),success:ue(_)})]});case 2:return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{htmlFor:"street",children:"Street *"}),Object(r.jsx)(J,{name:"street",value:U,onChange:function(e){return E(e.target.value)},type:"text",success:le(U)}),Object(r.jsx)(I,{htmlFor:"city",children:"City *"}),Object(r.jsx)(J,{name:"city",value:A,onChange:function(e){return T(e.target.value)},type:"text",success:le(A)}),Object(r.jsx)(I,{htmlFor:"zipcode",children:"Zip Code *"}),Object(r.jsx)(J,{name:"zipcode",value:z,onChange:function(e){return V(e.target.value)},type:"text",error:z&&!de(z),success:de(z)}),Object(r.jsx)(I,{htmlFor:"state",children:"State *"}),Object(r.jsx)(J,{name:"state",value:H,onChange:function(e){return Z(e.target.value)},type:"text",success:le(H)}),Object(r.jsx)(I,{htmlFor:"country",children:"Country *"}),Object(r.jsx)(J,{name:"country",value:$,onChange:function(e){return ee(e.target.value)},type:"text",success:le($)})]})}}(),Object(r.jsxs)(Fe,{children:[Ue>0?Object(r.jsx)(Q,{margin:"10px 0px",onClick:function(){Ue>0&&Ee((function(e){return e-1}))},children:"Back"}):null,2===Ue?Object(r.jsx)(Q,{color:"white",margin:"10px 0px",backgroundColor:S,disabled:!We||He,type:"submit",children:ze}):Object(r.jsx)(Q,{color:"white",margin:"10px 0px",backgroundColor:S,onClick:function(){Ue<2&&Ee((function(e){return e+1}))},children:"Next"})]}),Object(r.jsx)(b.b,{style:{marginTop:"20px"},to:"/login",children:"Already have an account?"})]})]})}var Se=l.b.div(we()),Fe=l.b.div(ye()),_e=n.p+"static/media/edit.836f7dde.svg",ke=n.p+"static/media/logout.ac15fe02.svg";function Ne(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return Ne=function(){return e},e}function Re(){var e=Object(i.a)(["\n    padding: 20px;\n"]);return Re=function(){return e},e}function Ue(){var e=Object(i.a)(["\n    height: 200px;\n    width: 200px;\n    border-radius: 200px;\n    border: 3px solid #4CAF50;\n    padding: 5px;\n    margin-right: 20px;\n    \n    @media (max-width:600px){\n        align-self: center;\n        margin: 0;\n        margin-bottom: 20px;\n    }\n"]);return Ue=function(){return e},e}function Ee(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 0px 20px;\n    \n    @media (max-width:650px){ \n        margin: 20px 0px;\n    }\n"]);return Ee=function(){return e},e}function Le(){var e=Object(i.a)(["\n    ",";\n    display: flex;\n    justify-content: center;\n    width: fit-content;\n    padding: 40px;\n\n    @media (max-width:600px){\n        flex-direction: column;\n        margin:20px auto;\n        padding: 20px;\n    }\n"]);return Le=function(){return e},e}function Pe(){var e=Object(h.c)((function(e){return e.user_reducer})),t=Object(d.g)(),n=Object(h.b)(),c=(e||{}).currentUser||{},a=c.firstName,s=c.lastName,i=c.age,u=c.address,l=c.phoneNumber,b=c.email,p=c._id,O=u||{},f=O.street,m=O.city,g=O.state,w=O.zipcode,C=O.country,S=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(y.URL,"/logout"),{},{withCredentials:!0});case 3:n(v(!1)),t.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Oe.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Be,{children:Object(r.jsxs)(ze,{children:[Object(r.jsx)($,{onClick:S,src:ke,alt:"Logout"}),Object(r.jsx)($,{onClick:function(){return t.push("/edit/".concat(p))},src:_e,alt:"Edit"})]})}),Object(r.jsxs)(Ae,{children:[Object(r.jsx)(De,{src:"".concat(y.URL,"/user/").concat(p,"/pic"),alt:"ProfilePic"}),Object(r.jsxs)(Te,{children:[Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"First Name"}),Object(r.jsx)(ne,{children:a})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Last Name"}),Object(r.jsx)(ne,{children:s})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Email"}),Object(r.jsx)(ne,{children:b})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Phone Number"}),Object(r.jsx)(ne,{children:l})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Age"}),Object(r.jsx)(ne,{children:i})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Street"}),Object(r.jsx)(ne,{children:f})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"City"}),Object(r.jsx)(ne,{children:m})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Zip code"}),Object(r.jsx)(ne,{children:w})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"State"}),Object(r.jsx)(ne,{children:g})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(te,{children:"Country"}),Object(r.jsx)(ne,{children:C})]})]})]})]})}var Ae=l.b.div(Le(),H),Te=l.b.div(Ee()),De=l.b.img(Ue()),Be=l.b.div(Re()),ze=l.b.div(Ne());function Ve(){var e=Object(i.a)(["\n    margin: 30px 0;\n    ",";\n    display: flex;\n    flex-direction: column;\n"]);return Ve=function(){return e},e}function Xe(){var e=Object(i.a)(["\n    //Future Styles\n"]);return Xe=function(){return e},e}function qe(){var e=Object(i.a)(["\n    padding: 20px 0px;\n\n"]);return qe=function(){return e},e}function He(){var e=Object(h.c)((function(e){return e.user_reducer})),t=Object(h.b)(),n=Object(d.g)(),a=(e||{}).currentUser,s=a||{},i=s._id,u=s.firstName,l=s.lastName,b=s.age,O=s.phoneNumber,f=s.address,m=s.email,v=s.profilePicture,C=f||{},S=C.street,F=C.city,_=C.zipcode,k=C.state,N=C.country,R=Object(c.useState)(u),U=Object(p.a)(R,2),E=U[0],L=U[1],P=Object(c.useState)(l),A=Object(p.a)(P,2),T=A[0],D=A[1],B=Object(c.useState)(b),z=Object(p.a)(B,2),V=z[0],X=z[1],q=Object(c.useState)(O),H=Object(p.a)(q,2),Z=H[0],G=H[1],W=Object(c.useState)(S),M=Object(p.a)(W,2),$=M[0],Y=M[1],ee=Object(c.useState)(F),te=Object(p.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(_),be=Object(p.a)(ae,2),pe=be[0],xe=be[1],he=Object(c.useState)(k),fe=Object(p.a)(he,2),me=fe[0],ge=fe[1],ve=Object(c.useState)(N),ye=Object(p.a)(ve,2),we=ye[0],Ce=ye[1],Se=Object(c.useState)(m),Fe=Object(p.a)(Se,2),_e=Fe[0],ke=Fe[1],Ne=Object(c.useState)(v),Re=Object(p.a)(Ne,2),Ue=Re[0],Ee=Re[1],Le=Object(c.useState)(""),Pe=Object(p.a)(Le,2),Ae=Pe[0],Te=Pe[1],De=Object(c.useState)(""),Be=Object(p.a)(De,2),ze=Be[0],Ve=Be[1],Xe=Object(c.useState)(""),qe=Object(p.a)(Xe,2),He=qe[0],Ie=qe[1],We=Object(c.useState)("Update"),Je=Object(p.a)(We,2),Me=Je[0],Qe=Je[1],$e=Object(c.useState)(!1),Ye=Object(p.a)($e,2),et=Ye[0],tt=Ye[1];Object(c.useEffect)((function(){L(u),D(l),X(b),G(O),Y(S),ce(F),xe(_),ge(k),Ce(N),ke(m),Ee(v)}),[a,u,l,b,O,S,F,_,k,N,m,v]);var nt=function(){var e=Object(j.a)(o.a.mark((function e(r){var c,a,s,u,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),Qe("Updating..."),tt(!0),c={firstName:E,lastName:T,age:V,address:{street:$,city:ne,zipcode:pe,state:me,country:we},email:_e,phoneNumber:Z,oldPassword:Ae,password:ze},a=se(JSON.stringify(c)),(s=new FormData).append("profile_pic",Ue),s.append("data",a),e.prev=8,e.next=11,x.a.patch("".concat(y.URL,"/user/").concat(i),s,{withCredentials:!0});case 11:u=e.sent,j=u.data,Qe("Update"),tt(!1),t(g(j.updatedUser)),n.goBack(),Oe.success("User Edited"),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(8),Qe("Update"),tt(!1),Oe.error("Cannot update profile");case 25:case"end":return e.stop()}}),e,null,[[8,20]])})));return function(t){return e.apply(this,arguments)}}(),rt=le(E)&&le(T)&&oe(V)&&ue(Z)&&ie(_e)&&le($)&&le(ne)&&le(me)&&le(me)&&le(we)&&de(pe),ct=ze===He,at=!(le(Ae)||le(ze)||le(He))||je(Ae)&&je(ze)&&je(He);return Object(r.jsx)(Ze,{children:Object(r.jsxs)(Ge,{onSubmit:nt,children:[Object(r.jsxs)(Ke,{children:[Object(r.jsx)(K,{children:"Personal Details"}),Object(r.jsx)(I,{htmlFor:"first_name",children:"First Name *"}),Object(r.jsx)(J,{name:"first_name",value:E,onChange:function(e){return L(e.target.value)},type:"text",required:!0,success:le(E)}),Object(r.jsx)(I,{htmlFor:"last_name",children:"Last Name *"}),Object(r.jsx)(J,{name:"last_name",value:T,onChange:function(e){return D(e.target.value)},type:"text",required:!0,success:le(T)}),Object(r.jsx)(I,{htmlFor:"age",children:"Age *"}),Object(r.jsx)(J,{value:V,name:"age",onChange:function(e){return X(e.target.value)},type:"number",required:!0,error:V&&!oe(V),success:oe(V)}),Object(r.jsx)(I,{htmlFor:"profile_picture",children:"Profile Picture *"}),Object(r.jsx)(J,{name:"profile_picture",onChange:function(e){return Ee(e.target.files[0])},accept:"image/png,image/jpeg",type:"file",error:Ue&&!Ue,success:Ue})]}),Object(r.jsxs)(Ke,{children:[Object(r.jsx)(K,{children:"Contact Details"}),Object(r.jsx)(I,{htmlFor:"phone_number",children:"Phone Number *"}),Object(r.jsx)(J,{name:"phone_number",value:Z,onChange:function(e){return G(e.target.value)},type:"text",required:!0,error:Z&&!ue(Z),success:ue(Z)}),Object(r.jsx)(I,{htmlFor:"email",children:"Email *"}),Object(r.jsx)(J,{name:"email",value:_e,onChange:function(e){return ke(e.target.value)},type:"text",required:!0,error:_e&&!ie(_e),success:ie(_e)})]}),Object(r.jsxs)(Ke,{children:[Object(r.jsx)(K,{children:"Address"}),Object(r.jsx)(I,{htmlFor:"street",children:"Street *"}),Object(r.jsx)(J,{name:"street",value:$,onChange:function(e){return Y(e.target.value)},type:"text",success:le($)}),Object(r.jsx)(I,{htmlFor:"city",children:"City *"}),Object(r.jsx)(J,{name:"city",value:ne,onChange:function(e){return ce(e.target.value)},type:"text",success:le(ne)}),Object(r.jsx)(I,{htmlFor:"zipcode",children:"Zip Code *"}),Object(r.jsx)(J,{name:"zipcode",value:pe,onChange:function(e){return xe(e.target.value)},type:"text",error:pe&&!de(pe),success:de(pe)}),Object(r.jsx)(I,{htmlFor:"state",children:"State *"}),Object(r.jsx)(J,{name:"state",value:me,onChange:function(e){return ge(e.target.value)},type:"text",success:le(me)}),Object(r.jsx)(I,{htmlFor:"country",children:"Country *"}),Object(r.jsx)(J,{name:"country",value:we,onChange:function(e){return Ce(e.target.value)},type:"text",success:le(we)})]}),Object(r.jsxs)(Ke,{children:[Object(r.jsx)(K,{children:"Change Password"}),Object(r.jsx)(I,{htmlFor:"old_password",children:"Old Password"}),Object(r.jsx)(J,{autoComplete:"new-password",name:"old_password",value:Ae,onChange:function(e){return Te(e.target.value)},type:"password",error:Ae&&!je(Ae),success:je(Ae)}),Object(r.jsx)(I,{htmlFor:"password",children:"New Password"}),Object(r.jsx)(J,{name:"password",value:ze,onChange:function(e){return Ve(e.target.value)},type:"password",error:ze&&!je(ze),success:je(ze)}),Object(r.jsx)(I,{htmlFor:"confirm_password",children:"Confirm New Password"}),Object(r.jsx)(J,{name:"confirm_password",value:He,onChange:function(e){return Ie(e.target.value)},type:"password",error:He&&!ct&&!je(ze),success:He&&ct&&je(He)})]}),Object(r.jsxs)(re,{children:[Object(r.jsx)(Q,{onClick:function(){n.goBack()},type:"button",children:"Cancel"}),Object(r.jsxs)(re,{style:{paddingRight:0},children:[Object(r.jsx)(Q,{margin:"0px 20px",onClick:function(){L(u),D(l),X(b),G(O),Y(S),ce(F),xe(_),ge(k),Ce(N),ke(m),Ee(v)},color:"white",backgroundColor:"red",type:"button",children:"Reset"}),Object(r.jsx)(Q,{color:"white",backgroundColor:w,disabled:!(rt&&at)||et,type:"submit",children:Me})]})]})]})})}var Ze=l.b.div(qe()),Ge=l.b.form(Xe()),Ke=l.b.div(Ve(),H);function Ie(){var e=Object(i.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n"]);return Ie=function(){return e},e}function We(){var e=Object(i.a)(["\n  text-align: center;\n"]);return We=function(){return e},e}var Je=function(){var e=Object(h.c)((function(e){return e.user_reducer})),t=e.currentUser,n=e.isAuthenticated,a=Object(h.b)(),s=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(y.URL,"/verify"),{},{withCredentials:!0});case 3:t=e.sent,(n=t.data)&&(a(g(n.userData)),a(v(!0))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),a(v(!1)),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){s()}),[n]);var i=function(e){return n?Object(r.jsx)(d.a,{to:"user/".concat(t._id)}):e};return Object(r.jsx)(Me,{children:Object(r.jsx)(Qe,{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/",exact:!0,render:function(){return i(Object(r.jsx)(d.a,{to:"/login"}))}}),Object(r.jsx)(d.b,{path:"/login",render:function(){return i(Object(r.jsx)(me,{}))}}),Object(r.jsx)(d.b,{path:"/signup",render:function(){return i(Object(r.jsx)(Ce,{}))}}),Object(r.jsx)(d.b,{path:"/edit/:id",component:He}),Object(r.jsx)(d.b,{path:"/user/:id",component:Pe})]})})})})},Me=l.b.div(We()),Qe=l.b.div(Ie()),$e=n(42),Ye=n(49),et={currentUser:null,isAuthenticated:!1},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(Ye.a)(Object(Ye.a)({},e),{},{currentUser:r});case m:return Object(Ye.a)(Object(Ye.a)({},e),{},{isAuthenticated:r});default:return e}},nt=Object($e.b)({user_reducer:tt}),rt=Object($e.c)(nt);s.a.render(Object(r.jsx)(c.StrictMode,{children:Object(r.jsx)(h.a,{store:rt,children:Object(r.jsx)(Je,{})})}),document.getElementById("root"))}},[[299,1,2]]]);