import{s as H,c as N,u as U,g as V,a as w}from"../chunks/scheduler.BvLojk_z.js";import{S as x,i as z,e as p,s as y,c as b,h as k,d as g,f as A,g as B,m as L,b as M,n as m,t as F,a as G,j as J,k as K,l as O,o as P}from"../chunks/index.DvBeTkz1.js";import{e as j}from"../chunks/each.D6YF6ztN.js";function q(f,t,l){const n=f.slice();return n[3]=t[l].slug,n[4]=t[l].title,n}function D(f){let t,l,n=f[4]+"",o,r,u;return{c(){t=p("li"),l=p("a"),o=K(n),u=y(),this.h()},l(c){t=b(c,"LI",{});var i=k(t);l=b(i,"A",{href:!0});var d=k(l);o=O(d,n),d.forEach(g),u=A(i),i.forEach(g),this.h()},h(){L(l,"href",r="/blog/"+f[3])},m(c,i){M(c,t,i),m(t,l),m(l,o),m(t,u)},p(c,i){i&1&&n!==(n=c[4]+"")&&P(o,n),i&1&&r!==(r="/blog/"+c[3])&&L(l,"href",r)},d(c){c&&g(t)}}}function Q(f){let t,l,n,o,r,u="More items",c,i,d;const C=f[2].default,_=N(C,f,f[1],null);let E=j(f[0].summaries),s=[];for(let e=0;e<E.length;e+=1)s[e]=D(q(f,E,e));return{c(){t=p("div"),l=p("main"),_&&_.c(),n=y(),o=p("aside"),r=p("h2"),r.textContent=u,c=y(),i=p("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=b(e,"DIV",{class:!0});var h=k(t);l=b(h,"MAIN",{});var a=k(l);_&&_.l(a),a.forEach(g),n=A(h),o=b(h,"ASIDE",{});var v=k(o);r=b(v,"H2",{"data-svelte-h":!0}),B(r)!=="svelte-1225gjr"&&(r.textContent=u),c=A(v),i=b(v,"UL",{});var S=k(i);for(let I=0;I<s.length;I+=1)s[I].l(S);S.forEach(g),v.forEach(g),h.forEach(g),this.h()},h(){L(t,"class","layout svelte-1ubx6uq")},m(e,h){M(e,t,h),m(t,l),_&&_.m(l,null),m(t,n),m(t,o),m(o,r),m(o,c),m(o,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,null);d=!0},p(e,[h]){if(_&&_.p&&(!d||h&2)&&U(_,C,e,e[1],d?w(C,e[1],h,null):V(e[1]),null),h&1){E=j(e[0].summaries);let a;for(a=0;a<E.length;a+=1){const v=q(e,E,a);s[a]?s[a].p(v,h):(s[a]=D(v),s[a].c(),s[a].m(i,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=E.length}},i(e){d||(F(_,e),d=!0)},o(e){G(_,e),d=!1},d(e){e&&g(t),_&&_.d(e),J(s,e)}}}function R(f,t,l){let{$$slots:n={},$$scope:o}=t,{data:r}=t;return f.$$set=u=>{"data"in u&&l(0,r=u.data),"$$scope"in u&&l(1,o=u.$$scope)},[r,o,n]}class Y extends x{constructor(t){super(),z(this,t,R,Q,H,{data:0})}}export{Y as component};