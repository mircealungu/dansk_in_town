(this.webpackJsonpdansk_in_town=this.webpackJsonpdansk_in_town||[]).push([[0],{194:function(e,t,n){},276:function(e,t,n){},538:function(e,t){},600:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(60),s=n.n(c),i=(n(276),n(194),n(277),n(604)),o=n(602),l=n(605),j=n(42),b=n.n(j),u=n(87),d=n(1);function m(){return Object(d.jsx)(i.a,{bg:"light",expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a.Brand,{href:"#home",children:"Dansk in Town"}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(l.a,{className:"me-auto",activeKey:window.location.pathname,children:[!b.a.User.current()&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a.Link,{as:u.b,href:"/signup",children:"Sign Up"}),Object(d.jsx)(l.a.Link,{as:u.b,href:"/login",children:"LogIn"})]}),b.a.User.current()&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a.Link,{as:u.b,to:"/myimages",children:"My Images"}),Object(d.jsx)(l.a.Link,{as:u.b,to:"/upload",children:"Upload"}),Object(d.jsx)(l.a.Link,{as:u.b,to:"/exercises",children:"Exercises"})]})]})})]})})}var x=n(10),h=n(11),O=n(606),f=n(603);function p(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1],l=Object(x.f)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(d.jsx)(O.a.Label,{children:"Username address"}),Object(d.jsx)(O.a.Control,{type:"text",onChange:function(e){return r(e.target.value)},placeholder:"Enter username"})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",onChange:function(e){return o(e.target.value)},placeholder:"Password"})]}),Object(d.jsx)(f.a,{onClick:function(e){e.preventDefault(),console.log("prevented default"),console.log(n),console.log(i);var t=new b.a.User;t.setPassword(i),t.setUsername(n),t.logIn().then((function(e){console.log(e),l("/exercises")}))},variant:"primary",type:"submit",children:"Submit"})]})]})}function g(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(O.a.Label,{children:"Email address"}),Object(d.jsx)(O.a.Control,{type:"email",placeholder:"Enter email"}),Object(d.jsx)(O.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(O.a.Label,{children:"Password"}),Object(d.jsx)(O.a.Control,{type:"password",placeholder:"Password"})]}),Object(d.jsx)(O.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(d.jsx)(O.a.Check,{type:"checkbox",label:"Check me out"})}),Object(d.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit"})]})})}var v=n(88),y=n.n(v),w=n(130);function k(){return C.apply(this,arguments)}function C(){return(C=Object(w.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.Object.extend("Translation"),(n=new b.a.Query(t)).include("image"),e.next=5,n.find();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return F.apply(this,arguments)}function F(){return(F=Object(w.a)(y.a.mark((function e(t,n){var a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.a.Object.extend("Image"),r=new a,c=new b.a.File(t.name,t),r.set("file",c),e.next=6,Promise.all(n.map((function(e){var t=new(b.a.Object.extend("Translation"));t.set("from",e.from),t.set("to",e.to),t.set("user",b.a.User.current()),t.set("image",r);try{return t.save()}catch(n){alert(n)}})));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){k().then((function(e){var t=e[Math.floor(Math.random()*e.length)];r(t)}))}),[]),n?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("h1",{children:[Object(d.jsx)("img",{style:{maxWidth:"100%"},src:n.get("image").get("file").url()}),Object(d.jsx)("b",{children:n.get("from")})," = ?"," "]})}):Object(d.jsx)("p",{children:"Loading..."})}var S,I,U=n(162),B=n(159),N=n(160),P=N.a.div(S||(S=Object(B.a)(["\n  width: 1em;\n"])));function G(e){var t=e.translation,n=e.setFrom,a=e.setTo,r=e.deleteTranslation;return console.log(t.id),console.log(t.from),console.log(t.to),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicUsername",children:[Object(d.jsx)(O.a.Label,{children:"Word"}),Object(d.jsx)(O.a.Control,{autoFocus:!0,value:t.from,type:"text",onChange:function(e){return n(t,e.target.value)}})]}),Object(d.jsx)(P,{}),Object(d.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicTranslation",children:[Object(d.jsx)(O.a.Label,{children:"Translation"}),Object(d.jsx)(O.a.Control,{type:"text",onChange:function(e){return a(t,e.target.value)}})]}),Object(d.jsx)(f.a,{tabIndex:"-1",onClick:function(e){return r(t)},variant:"link",children:"x"})]})})}function E(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function D(){var e=Object(a.useState)([{id:E(),to:"",from:""}]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1],l=Object(x.f)();function j(){return(j=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,L(i,n);case 3:l("/myimages");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){var a=n.map((function(n){return n.id!=e.id?n:{id:e.id,from:t,to:e.to}}));r(a)}function u(e,t){var a=n.map((function(n){return n.id!=e.id?n:{id:e.id,from:e.from,to:t}}));r(a)}function m(e){r(n.filter((function(t){return t.id!=e.id})))}return Object(d.jsxs)(d.Fragment,{children:[i&&Object(d.jsx)("img",{style:{maxWidth:"400px"},src:URL.createObjectURL(i)}),Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(O.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(d.jsx)(O.a.Label,{children:"Select an image from your computer"}),Object(d.jsx)(O.a.Control,{onChange:function(e){o(e.target.files[0])},type:"file"})]}),n.map((function(e){return Object(d.jsx)(G,{translation:e,setFrom:b,setTo:u,deleteTranslation:m},e.id)})),Object(d.jsx)(f.a,{onClick:function(){r([].concat(Object(U.a)(n),[{id:E(),to:"",from:""}]))},variant:"light",children:"Add new translation"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(f.a,{onClick:function(e){return j.apply(this,arguments)},disabled:!i,variant:"primary",type:"submit",children:"Upload"})]})]})}var M=N.a.img(I||(I=Object(B.a)(["\n  max-width: 300px;\n"])));function R(){var e=Object(a.useState)(),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),i=s[0],o=s[1];if(Object(a.useEffect)((function(){var e={},t={};k().then((function(n){n.map((function(n){var a=n.get("image").id,r=n.get("image").get("file").url();e[a]||(e[a]=[],t[a]=r),e[a].push(n)})),r(e),o(t)}))}),[]),!n||!i)return"Loading...";var l=Object.keys(n);return l.reverse(),Object(d.jsxs)(d.Fragment,{children:["My translations oragnized by images are",l.map((function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(M,{src:i[e]}),Object(d.jsx)("ul",{children:n[e].map((function(e){return Object(d.jsxs)("li",{children:[e.get("from")," = ",e.get("to")]})}))})]})}))]})}var W=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u.a,{basename:"/",children:[Object(d.jsx)(m,{}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"signup",element:Object(d.jsx)(g,{})}),Object(d.jsx)(x.a,{path:"login",element:Object(d.jsx)(p,{})}),Object(d.jsx)(x.a,{path:"exercises",element:Object(d.jsx)(T,{})}),Object(d.jsx)(x.a,{path:"upload",element:Object(d.jsx)(D,{})}),Object(d.jsx)(x.a,{path:"myimages",element:Object(d.jsx)(R,{})})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,607)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};b.a.initialize("KLxcuhhjrb2JQwegqs5jto882HLxv7scW89HDACX","hfYT45KTgwRr4JBWGQFaCSokz7URgAPiyoTRlqxT"),b.a.serverURL="https://parseapi.back4app.com/",s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root")),A()}},[[600,1,2]]]);
//# sourceMappingURL=main.bfe9931f.chunk.js.map