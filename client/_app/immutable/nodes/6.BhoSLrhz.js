import{s as v,n as _}from"../chunks/scheduler.BvLojk_z.js";import{S as H,i as g,e as d,k as w,s as x,H as y,c as f,h as u,l as E,f as m,a as S,p as b,b as h,n as k,o as q}from"../chunks/index.CSVJPJho.js";function C(o){let a,s=o[0].post.title+"",n,l,i,c,r=o[0].post.content+"";return{c(){a=d("h1"),n=w(s),l=x(),i=d("div"),c=new y(!1),this.h()},l(t){a=f(t,"H1",{});var e=u(a);n=E(e,s),e.forEach(m),l=S(t),i=f(t,"DIV",{});var p=u(i);c=b(p,!1),p.forEach(m),this.h()},h(){c.a=null},m(t,e){h(t,a,e),k(a,n),h(t,l,e),h(t,i,e),c.m(r,i)},p(t,[e]){e&1&&s!==(s=t[0].post.title+"")&&q(n,s),e&1&&r!==(r=t[0].post.content+"")&&c.p(r)},i:_,o:_,d(t){t&&(m(a),m(l),m(i))}}}function D(o,a,s){let{data:n}=a;return o.$$set=l=>{"data"in l&&s(0,n=l.data)},[n]}class T extends H{constructor(a){super(),g(this,a,D,C,v,{data:0})}}export{T as component};
