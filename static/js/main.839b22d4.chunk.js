(this.webpackJsonpdansk_in_town=this.webpackJsonpdansk_in_town||[]).push([[0],{201:function(e,t,n){},284:function(e,t,n){},546:function(e,t){},608:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(63),s=n.n(c),i=(n(284),n(201),n(285),n(614)),o=n(610),j=n(616),l=n(17),u=n.n(l),b=n(10),d=n(45),h=n(1);function x(){var e=Object(b.h)();return Object(h.jsx)(i.a,{bg:"light",expand:"sm",children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(i.a.Brand,{href:"#/about",style:{lineHeight:"1em"},children:["Dansk ",Object(h.jsx)("br",{}),"in Town"]}),Object(h.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(j.a,{className:"me-auto",activeKey:window.location.pathname,children:[!u.a.User.current()&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a.Link,{as:d.b,to:"/signup",children:"Sign Up"}),Object(h.jsx)(j.a.Link,{as:d.b,to:"/login",children:"LogIn"})]}),u.a.User.current()&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a.Link,{as:d.b,to:"/myimages",children:"My Images"}),Object(h.jsx)(j.a.Link,{as:d.b,to:"/exercise",children:"Exercise"}),Object(h.jsx)(j.a.Link,{onClick:function(t){t.preventDefault(),u.a.User.logOut().then((function(){e("/")}))},as:d.b,to:"/",children:"Sign Out"})]})]})})]})})}var O=n(11),m=n(615),p=n(611);function f(e){var t=Object(r.useState)(),n=Object(O.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),i=Object(O.a)(s,2),o=i[0],j=i[1],l=Object(b.h)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(h.jsx)(m.a.Label,{children:"Username"}),Object(h.jsx)(m.a.Control,{type:"text",onChange:function(e){return c(e.target.value)},placeholder:"Username",autoFocus:!0})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(m.a.Label,{children:"Password"}),Object(h.jsx)(m.a.Control,{type:"password",onChange:function(e){return j(e.target.value)},placeholder:"Password"})]}),Object(h.jsx)(p.a,{onClick:function(e){e.preventDefault();var t=new u.a.User;t.setPassword(o),t.setUsername(a),t.logIn().then((function(e){l("/exercise")}))},variant:"primary",type:"submit",children:"Submit"})]})]})}var g=n(36),v=n.n(g),y=n(56);function w(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(O.a)(c,2),i=s[0],o=s[1],j=Object(r.useState)(""),l=Object(O.a)(j,2),d=l[0],x=l[1],f=Object(b.h)();function g(){return(g=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new u.a.User).setUsername(n),t.setPassword(i),t.setEmail(d),e.prev=4,e.next=7,t.signUp();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert("Error: "+e.t0.message);case 12:f("/exercise");case 13:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsrname",children:[Object(h.jsx)(m.a.Label,{children:"Username"}),Object(h.jsx)(m.a.Control,{onChange:function(e){a(e.target.value)},type:"text",placeholder:"Enter username",autoFocus:!0})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(h.jsx)(m.a.Label,{children:"Password"}),Object(h.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){o(e.target.value)}})]}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(h.jsx)(m.a.Label,{children:"Email address"}),Object(h.jsx)(m.a.Control,{onChange:function(e){x(e.target.value)},type:"email",placeholder:"Enter email"})]}),Object(h.jsx)(p.a,{variant:"primary",onClick:function(){return g.apply(this,arguments)},children:"Create Account"})]})}function k(){return(k=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.a.Object.extend("Translation"),(n=new u.a.Query(t)).include("image"),n.notContainedIn("too_easy",[l.User.current()]),e.next=6,n.find();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.a.Object.extend("Translation"),(n=new u.a.Query(t)).include("image"),n.notContainedIn("too_easy",[l.User.current()]),e.next=6,n.find();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.get("too_easy")||[]).push(l.User.current()),t.set("too_easy",n),t.save();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return L.apply(this,arguments)}function L(){return(L=Object(y.a)(v.a.mark((function e(t,n){var r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.a.Object.extend("Image"),a=new r,c=new u.a.File(t.name,t),a.set("file",c),e.next=6,Promise.all(n.map((function(e){var t=new(u.a.Object.extend("Translation"));t.set("from",e.from),t.set("to",e.to),t.set("user",u.a.User.current()),t.set("image",a);try{return t.save()}catch(n){return alert(n),Promise.reject("something went wrong")}})));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S,I,T,P,B=n(101),E=n(102),N=E.a.div(S||(S=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n"]))),D=E.a.img(I||(I=Object(B.a)(["\n  max-width: 100%;\n  max-height: 320px;\n  border: 1px solid gray;\n  margin-bottom: 1em;\n"]))),_=E.a.div(T||(T=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: xx-large;\n  margin-top: 0.2em;\n"]))),G=E.a.div(P||(P=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 2em;\n"])));function R(){var e=Object(r.useState)(),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(O.a)(c,2),i=s[0],o=s[1];function j(){a(),function(){return C.apply(this,arguments)}().then((function(e){var t=e[Math.floor(Math.random()*e.length)];a(t)}))}return Object(r.useEffect)((function(){j()}),[]),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{children:Object(h.jsx)(D,{alt:"",src:n.get("image").get("file").url()})}),Object(h.jsx)(_,{children:Object(h.jsxs)("b",{children:[n.get("from")," "]})}),Object(h.jsx)(_,{children:i?n.get("to"):"?"}),Object(h.jsx)(G,{children:i?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.a,{onClick:function(){o(!1),j()},children:"Next"})}):Object(h.jsxs)("div",{style:{align:"center"},children:[Object(h.jsx)(p.a,{onClick:function(){(function(e){return U.apply(this,arguments)})(n).then((function(){console.log("saved"),j()}))},variant:"secondary",children:"Too Easy"}),"\xa0\xa0\xa0",Object(h.jsx)(p.a,{style:{marginRight:"0"},onClick:function(){return o(!0)},children:"Show Solution"})]})})]}):Object(h.jsx)("p",{})}var W,A=n(167),M=E.a.div(W||(W=Object(B.a)(["\n  width: 1em;\n"])));function H(e){var t=e.translation,n=e.setFrom,r=e.setTo,a=e.deleteTranslation;function c(){return(c=Object(y.a)(v.a.mark((function e(n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,u.a.Cloud.run("google_translate",{word_to_translate:t.from});case 3:a=e.sent,r(t,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(h.jsx)(m.a.Label,{children:"Word"}),Object(h.jsx)(m.a.Control,{autoFocus:!0,value:t.from,type:"text",onChange:function(e){return n(t,e.target.value)}})]}),Object(h.jsx)(M,{}),Object(h.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicTranslation",children:[Object(h.jsx)(m.a.Label,{children:"Translation"}),Object(h.jsx)("a",{href:"/",onClick:function(e){return c.apply(this,arguments)},children:"(auto)"}),Object(h.jsx)(m.a.Control,{type:"text",value:t.to,onChange:function(e){return r(t,e.target.value)}})]}),Object(h.jsx)(p.a,{tabIndex:"-1",onClick:function(e){return a(t)},variant:"link",children:"x"})]})})}function J(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function Q(){var e=Object(r.useState)([{id:J(),to:"",from:""}]),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(O.a)(c,2),i=s[0],o=s[1],j=Object(b.h)();function l(){return(l=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,F(i,n);case 3:j("/myimages");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){var r=n.map((function(n){return n.id!==e.id?n:{id:e.id,from:t,to:e.to}}));a(r)}function d(e,t){var r=n.map((function(n){return n.id!==e.id?n:{id:e.id,from:e.from,to:t}}));a(r)}function x(e){a(n.filter((function(t){return t.id!==e.id})))}return Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsx)("img",{alt:"",style:{maxWidth:"400px"},src:URL.createObjectURL(i)}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(m.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(h.jsx)(m.a.Label,{children:"Select an image from your computer"}),Object(h.jsx)(m.a.Control,{onChange:function(e){o(e.target.files[0])},type:"file"})]}),n.map((function(e){return Object(h.jsx)(H,{translation:e,setFrom:u,setTo:d,deleteTranslation:x},e.id)})),Object(h.jsx)(p.a,{onClick:function(){a([].concat(Object(A.a)(n),[{id:J(),to:"",from:""}]))},variant:"light",children:"Add new translation"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(p.a,{onClick:function(e){return l.apply(this,arguments)},disabled:!i,variant:"primary",type:"submit",children:"Upload"})]})]})}var z=n(613),K=n(275),q=n(617),X=n(612),Y=n(279);function V(e){var t=e.imageId,n=e.url,r=e.words;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{}),Object(h.jsxs)(q.a,{style:{maxWidth:"320px"},children:[Object(h.jsx)(d.b,{to:"/edit/"+t,children:Object(h.jsx)(q.a.Img,{variant:"top",src:n})}),Object(h.jsx)(X.a,{className:"list-group-flush",children:r.map((function(e){return Object(h.jsx)(Y.a,{children:Object(h.jsx)("b",{children:e.get("from")})},e.id)}))})]})]})}function Z(){var e=Object(r.useState)(),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),s=Object(O.a)(c,2),i=s[0],o=s[1];if(Object(r.useEffect)((function(){var e={},t={};(function(){return k.apply(this,arguments)})().then((function(n){n.forEach((function(n){var r=n.get("image").id,a=n.get("image").get("file").url();e[r]||(e[r]=[],t[r]=a),e[r].push(n)})),a(e),o(t)}))}),[]),!n||!i)return"Loading...";var j=Object.keys(n);return j.reverse(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{display:"flex"},children:Object(h.jsx)(d.b,{to:"/upload",children:Object(h.jsx)(p.a,{style:{marginLeft:"auto"},children:"Upload New Image"})})}),Object(h.jsx)(z.a,{xs:1,md:2,children:j.map((function(e){return Object(h.jsx)(K.a,{children:Object(h.jsx)(V,{imageId:e,url:i[e],words:n[e]})},e)}))})]})}var $=n.p+"static/media/simpsons.25ab116e.png";function ee(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("br",{}),"Don't be like Homer Simpson ;)"]}),Object(h.jsx)("img",{alt:"simpsons",src:$,width:"100%"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Do you live in Denmark? Wouldn't it be nice if you would understand at least the danish on the signs you see around town?"}),Object(h.jsx)("p",{children:"Practice Danish vocabulary based on photos taken around town. Either use the public photo set that we created by walking everywhere around town, or upload and practice with your own photos. Tip: When uploading your own you get automatic translations too!"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"#/signup",children:Object(h.jsx)("h4",{children:"Become a Beta-tester"})})]})}function te(){return l.User.current()?Object(h.jsx)(b.b,{}):Object(h.jsx)(b.a,{to:"/login"})}function ne(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.e,{children:[Object(h.jsx)(b.c,{path:"/signup",element:Object(h.jsx)(w,{})}),Object(h.jsx)(b.c,{path:"/login",element:Object(h.jsx)(f,{})}),Object(h.jsx)(b.c,{path:"/about",element:Object(h.jsx)(ee,{})}),Object(h.jsxs)(b.c,{element:Object(h.jsx)(te,{}),children:[Object(h.jsx)(b.c,{path:"/exercise",element:Object(h.jsx)(R,{})}),Object(h.jsx)(b.c,{path:"/upload",element:Object(h.jsx)(Q,{})}),Object(h.jsx)(b.c,{path:"/myimages",element:Object(h.jsx)(Z,{})})]}),Object(h.jsx)(b.c,{path:"/",element:Object(h.jsx)(ee,{})})]})})}var re=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{basename:"/",children:[Object(h.jsx)(x,{}),Object(h.jsx)(ne,{})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,618)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};u.a.initialize("KLxcuhhjrb2JQwegqs5jto882HLxv7scW89HDACX","hfYT45KTgwRr4JBWGQFaCSokz7URgAPiyoTRlqxT"),u.a.serverURL="https://parseapi.back4app.com/",s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(re,{})}),document.getElementById("root")),ae()}},[[608,1,2]]]);
//# sourceMappingURL=main.839b22d4.chunk.js.map