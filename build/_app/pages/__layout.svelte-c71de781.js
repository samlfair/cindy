import{S as t,i as e,s,e as n,D as a,c as o,d as i,b as c,E as r,F as l,G as p,j as f,k as u,t as d,m as h,n as $,a as m,g as v,o as E,f as g,h as b,H as k,I as x,J as y,x as A,u as j,v as H}from"../chunks/vendor-1bffe752.js";import{u as M}from"../chunks/stores-0c6e920e.js";function q(t){let e,s,p;return document.title=e=t[0],{c(){s=n("meta"),p=n("meta"),this.h()},l(t){const e=a('[data-svelte="svelte-1b1k9qn"]',document.head);s=o(e,"META",{property:!0,content:!0}),p=o(e,"META",{property:!0,content:!0}),e.forEach(i),this.h()},h(){c(s,"property","og:title"),c(s,"content",t[0]),c(p,"property","og:description"),c(p,"content",t[1])},m(t,e){r(document.head,s),r(document.head,p)},p(t,[n]){1&n&&e!==(e=t[0])&&(document.title=e),1&n&&c(s,"content",t[0]),2&n&&c(p,"content",t[1])},i:l,o:l,d(t){i(s),i(p)}}}function I(t,e,s){let{title:n}=e,{description:a}=e,{favicon:o}=e;return t.$$set=t=>{"title"in t&&s(0,n=t.title),"description"in t&&s(1,a=t.description),"favicon"in t&&s(2,o=t.favicon)},[n,a,o]}class N extends t{constructor(t){super(),e(this,t,I,q,s,{title:0,description:1,favicon:2})}}function T(t){let e,s,a,l,M,q,I,T,W,w,D,F=t[0].title+"";e=new N({props:{title:t[0].title,description:t[0].description,favicon:t[0].favicon}});const G=t[2].default,J=p(G,t,t[1],null);return{c(){f(e.$$.fragment),s=u(),a=n("nav"),l=n("h1"),M=d(F),q=u(),I=n("h2"),T=d("Writer"),W=u(),w=n("main"),J&&J.c(),this.h()},l(t){h(e.$$.fragment,t),s=$(t),a=o(t,"NAV",{class:!0});var n=m(a);l=o(n,"H1",{});var c=m(l);M=v(c,F),c.forEach(i),q=$(n),I=o(n,"H2",{});var r=m(I);T=v(r,"Writer"),r.forEach(i),n.forEach(i),W=$(t),w=o(t,"MAIN",{});var p=m(w);J&&J.l(p),p.forEach(i),this.h()},h(){c(a,"class","svelte-88a8oq")},m(t,n){E(e,t,n),g(t,s,n),g(t,a,n),r(a,l),r(l,M),r(a,q),r(a,I),r(I,T),g(t,W,n),g(t,w,n),J&&J.m(w,null),D=!0},p(t,[s]){const n={};1&s&&(n.title=t[0].title),1&s&&(n.description=t[0].description),1&s&&(n.favicon=t[0].favicon),e.$set(n),(!D||1&s)&&F!==(F=t[0].title+"")&&b(M,F),J&&J.p&&(!D||2&s)&&k(J,G,t,t[1],D?y(G,t[1],s,null):x(t[1]),null)},i(t){D||(A(e.$$.fragment,t),A(J,t),D=!0)},o(t){j(e.$$.fragment,t),j(J,t),D=!1},d(t){H(e,t),t&&i(s),t&&i(a),t&&i(W),t&&i(w),J&&J.d(t)}}}function W(t,e,s){let n,{$$slots:a={},$$scope:o}=e;return M.subscribe((t=>{s(0,n=t)})),t.$$set=t=>{"$$scope"in t&&s(1,o=t.$$scope)},[n,o,a]}class w extends t{constructor(t){super(),e(this,t,W,T,s,{})}}export{w as default};