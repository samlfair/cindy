import{S as t,i as s,s as e,G as a,e as n,c as i,a as o,d as r,f as c,H as l,I as f,J as p,x as $,u,B as d,j as m,m as h,o as v,p as g,q as x,v as C,K as y,t as E,k as L,g as H,n as j,E as k}from"../chunks/vendor-1bffe752.js";import{u as w}from"../chunks/stores-0c6e920e.js";function I(t){let s,e;const d=t[4].default,m=a(d,t,t[3],null);return{c(){s=n("article"),m&&m.c()},l(t){s=i(t,"ARTICLE",{});var e=o(s);m&&m.l(e),e.forEach(r)},m(t,a){c(t,s,a),m&&m.m(s,null),e=!0},p(t,[s]){m&&m.p&&(!e||8&s)&&l(m,d,t,t[3],e?p(d,t[3],s,null):f(t[3]),null)},i(t){e||($(m,t),e=!0)},o(t){u(m,t),e=!1},d(t){t&&r(s),m&&m.d(t)}}}function b(t,s,e){let{$$slots:a={},$$scope:n}=s,{title:i}=s,{description:o}=s,{favicon:r}=s;return w.set({title:i,description:o,favicon:r}),t.$$set=t=>{"title"in t&&e(0,i=t.title),"description"in t&&e(1,o=t.description),"favicon"in t&&e(2,r=t.favicon),"$$scope"in t&&e(3,n=t.$$scope)},[i,o,r,n,a]}class q extends t{constructor(t){super(),s(this,t,b,I,e,{title:0,description:1,favicon:2})}}function A(t){let s,e,a,l,f;return{c(){s=n("h2"),e=E("Homepage"),a=L(),l=n("p"),f=E("Cindy Littlefair’s homepage.")},l(t){s=i(t,"H2",{});var n=o(s);e=H(n,"Homepage"),n.forEach(r),a=j(t),l=i(t,"P",{});var c=o(l);f=H(c,"Cindy Littlefair’s homepage."),c.forEach(r)},m(t,n){c(t,s,n),k(s,e),c(t,a,n),c(t,l,n),k(l,f)},d(t){t&&r(s),t&&r(a),t&&r(l)}}}function B(t){let s,e;const a=[t[0],G];let n={$$slots:{default:[A]},$$scope:{ctx:t}};for(let i=0;i<a.length;i+=1)n=d(n,a[i]);return s=new q({props:n}),{c(){m(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,a){v(s,t,a),e=!0},p(t,[e]){const n=1&e?g(a,[1&e&&x(t[0]),0&e&&x(G)]):{};2&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||($(s.$$.fragment,t),e=!0)},o(t){u(s.$$.fragment,t),e=!1},d(t){C(s,t)}}}const G={title:"Cindy Littlefair",description:"Cindy Littlefair is a Canadian writer.",favicon:"📖"};function J(t,s,e){return t.$$set=t=>{e(0,s=d(d({},s),y(t)))},[s=y(s)]}class K extends t{constructor(t){super(),s(this,t,J,B,e,{})}}export{K as default,G as metadata};