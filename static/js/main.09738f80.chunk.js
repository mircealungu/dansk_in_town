(this.webpackJsonpdansk_in_town=this.webpackJsonpdansk_in_town||[]).push([[0],{199:function(e,t,n){},284:function(e,t,n){},546:function(e,t){},608:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(62),s=n.n(c),i=(n(284),n(199),n(285),n(614)),o=n(610),j=n(616),l=n(26),b=n.n(l),u=n(10),d=n(44),O=n(1);function x(){var e=Object(u.f)();return Object(O.jsx)(i.a,{bg:"light",expand:"sm",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(i.a.Brand,{href:"#home",children:"Dansk in Town"}),Object(O.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(j.a,{className:"me-auto",activeKey:window.location.pathname,children:[!b.a.User.current()&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a.Link,{as:d.b,to:"/signup",children:"Sign Up"}),Object(O.jsx)(j.a.Link,{as:d.b,to:"/login",children:"LogIn"})]}),b.a.User.current()&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a.Link,{as:d.b,to:"/myimages",children:"My Images"}),Object(O.jsx)(j.a.Link,{as:d.b,to:"/upload",children:"Upload"}),Object(O.jsx)(j.a.Link,{as:d.b,to:"/exercises",children:"Exercises"}),Object(O.jsx)(j.a.Link,{onClick:function(t){t.preventDefault(),b.a.User.logOut().then((function(){e("/")}))},as:d.b,to:"/",children:"Sign Out"})]})]})})]})})}var h=n(11),m=n(615),f=n(611);function p(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1],j=Object(u.f)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(O.jsx)(m.a.Label,{children:"Username"}),Object(O.jsx)(m.a.Control,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Username"})]}),Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(m.a.Label,{children:"Password"}),Object(O.jsx)(m.a.Control,{type:"password",onChange:function(e){return o(e.target.value)},placeholder:"Password"})]}),Object(O.jsx)(f.a,{onClick:function(e){e.preventDefault(),console.log("prevented default"),console.log(n),console.log(i);var t=new b.a.User;t.setPassword(i),t.setUsername(n),t.logIn().then((function(e){console.log(e),j("/exercises")}))},variant:"primary",type:"submit",children:"Submit"})]})]})}var g=n(55),v=n.n(g),w=n(99);function y(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(h.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(""),l=Object(h.a)(j,2),d=l[0],x=l[1],p=Object(u.f)();function g(){return(g=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new b.a.User).setUsername(n),t.setPassword(i),t.setEmail(d),e.prev=4,e.next=7,t.signUp();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert("Error: "+e.t0.message);case 12:p("/exercises");case 13:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsrname",children:[Object(O.jsx)(m.a.Label,{children:"Username"}),Object(O.jsx)(m.a.Control,{onChange:function(e){r(e.target.value)},type:"text",placeholder:"Enter username"})]}),Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(m.a.Label,{children:"Password"}),Object(O.jsx)(m.a.Control,{type:"password",placeholder:"Password",onChange:function(e){o(e.target.value)}})]}),Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(m.a.Label,{children:"Email address"}),Object(O.jsx)(m.a.Control,{onChange:function(e){x(e.target.value)},type:"email",placeholder:"Enter email"})]}),Object(O.jsx)(f.a,{variabt:"primary",onClick:function(){return g.apply(this,arguments)},children:"Create Account"})]})}function C(){return k.apply(this,arguments)}function k(){return(k=Object(w.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.Object.extend("Translation"),(n=new b.a.Query(t)).include("image"),e.next=5,n.find();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return L.apply(this,arguments)}function L(){return(L=Object(w.a)(v.a.mark((function e(t,n){var a,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.Object.extend("Image"),r=new a,c=new b.a.File(t.name,t),r.set("file",c),e.next=6,Promise.all(n.map((function(e){var t=new(b.a.Object.extend("Translation"));t.set("from",e.from),t.set("to",e.to),t.set("user",b.a.User.current()),t.set("image",r);try{return t.save()}catch(n){return alert(n),Promise.reject("something went wrong")}})));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){C().then((function(e){var t=e[Math.floor(Math.random()*e.length)];r(t)}))}),[]),n?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("img",{alt:"",style:{maxWidth:"100%"},src:n.get("image").get("file").url()}),Object(O.jsx)("b",{children:n.get("from")})," = ?"," "]})}):Object(O.jsx)("p",{children:"Loading..."})}var I,F=n(165),T=n(274),P=n(275).a.div(I||(I=Object(T.a)(["\n  width: 1em;\n"])));function E(e){var t=e.translation,n=e.setFrom,a=e.setTo,r=e.deleteTranslation;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(O.jsx)(m.a.Label,{children:"Word"}),Object(O.jsx)(m.a.Control,{autoFocus:!0,value:t.from,type:"text",onChange:function(e){return n(t,e.target.value)}})]}),Object(O.jsx)(P,{}),Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicTranslation",children:[Object(O.jsx)(m.a.Label,{children:"Translation"}),Object(O.jsx)("a",{href:"/",onClick:function(e){e.preventDefault();var n="https://translation.googleapis.com/language/translate/v2?key=".concat("AIzaSyAEmvxcnjYwOzkdK399nBGN4PEG1hm91ys");n+="&format=text&source=da&target=en&q=".concat(encodeURIComponent(t.from)),fetch(n).then((function(e){e.json().then((function(e){var n=e.data.translations[0].translatedText;a(t,n)}))}))},children:"(auto)"}),Object(O.jsx)(m.a.Control,{type:"text",value:t.to,onChange:function(e){return a(t,e.target.value)}})]}),Object(O.jsx)(f.a,{tabIndex:"-1",onClick:function(e){return r(t)},variant:"link",children:"x"})]})})}function N(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function B(){var e=Object(a.useState)([{id:N(),to:"",from:""}]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1],j=Object(u.f)();function l(){return(l=Object(w.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,U(i,n);case 3:j("/myimages");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){var a=n.map((function(n){return n.id!==e.id?n:{id:e.id,from:t,to:e.to}}));r(a)}function d(e,t){var a=n.map((function(n){return n.id!==e.id?n:{id:e.id,from:e.from,to:t}}));r(a)}function x(e){r(n.filter((function(t){return t.id!==e.id})))}return Object(O.jsxs)(O.Fragment,{children:[i&&Object(O.jsx)("img",{alt:"",style:{maxWidth:"400px"},src:URL.createObjectURL(i)}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(m.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(O.jsx)(m.a.Label,{children:"Select an image from your computer"}),Object(O.jsx)(m.a.Control,{onChange:function(e){o(e.target.files[0])},type:"file"})]}),n.map((function(e){return Object(O.jsx)(E,{translation:e,setFrom:b,setTo:d,deleteTranslation:x},e.id)})),Object(O.jsx)(f.a,{onClick:function(){r([].concat(Object(F.a)(n),[{id:N(),to:"",from:""}]))},variant:"light",children:"Add new translation"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(f.a,{onClick:function(e){return l.apply(this,arguments)},disabled:!i,variant:"primary",type:"submit",children:"Upload"})]})]})}var G=n(613),D=n(273),A=n(617),R=n(612),W=n(279);function M(e){var t=e.imageId,n=e.url,a=e.words;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)(A.a,{style:{maxWidth:"320px"},children:[Object(O.jsx)(d.b,{to:"/edit/"+t,children:Object(O.jsx)(A.a.Img,{variant:"top",src:n})}),Object(O.jsx)(R.a,{className:"list-group-flush",children:a.map((function(e){return Object(O.jsx)(W.a,{children:Object(O.jsx)("b",{children:e.get("from")})},e.id)}))})]})]})}function z(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1],j=Object(u.f)();if(Object(a.useEffect)((function(){var e={},t={};C().then((function(n){n.forEach((function(n){var a=n.get("image").id,r=n.get("image").get("file").url();e[a]||(e[a]=[],t[a]=r),e[a].push(n)})),r(e),o(t)}))}),[]),l.Parse.User.current()||j("/login"),!n||!i)return"Loading...";var b=Object.keys(n);return b.reverse(),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{display:"flex"},children:Object(O.jsx)(f.a,{style:{marginLeft:"auto"},href:"/upload",children:"Upload New Image"})}),Object(O.jsx)(G.a,{xs:1,md:2,children:b.map((function(e){return Object(O.jsx)(D.a,{children:Object(O.jsx)(M,{imageId:e,url:i[e],words:n[e]})},e)}))})]})}var J=n.p+"static/media/simpsons.25ab116e.png";function K(){var e=Object(u.f)();return b.a.User.current()&&e("/exercises"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),"Don't be like Homer Simpson ;)"]}),Object(O.jsx)("img",{alt:"simpsons",src:J,width:"100%"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Understand the danish on the signs you see around you in town!"}),Object(O.jsx)("p",{children:"Upload pictures, get translations, and practice till you learn new words!"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})}var _=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(d.a,{basename:"/",children:[Object(O.jsx)(x,{}),Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"signup",element:Object(O.jsx)(y,{})}),Object(O.jsx)(u.a,{path:"login",element:Object(O.jsx)(p,{})}),Object(O.jsx)(u.a,{path:"exercises",element:Object(O.jsx)(S,{})}),Object(O.jsx)(u.a,{path:"upload",element:Object(O.jsx)(B,{})}),Object(O.jsx)(u.a,{path:"myimages",element:Object(O.jsx)(z,{})}),Object(O.jsx)(u.a,{path:"/",element:Object(O.jsx)(K,{})})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,618)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};b.a.initialize("KLxcuhhjrb2JQwegqs5jto882HLxv7scW89HDACX","hfYT45KTgwRr4JBWGQFaCSokz7URgAPiyoTRlqxT"),b.a.serverURL="https://parseapi.back4app.com/",s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(_,{})}),document.getElementById("root")),q()}},[[608,1,2]]]);
//# sourceMappingURL=main.09738f80.chunk.js.map