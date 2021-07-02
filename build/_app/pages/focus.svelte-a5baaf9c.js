import{S as s,i as t,s as e,ae as a,e as n,j as o,c as i,a as r,m as l,d as c,b as d,f,J as u,o as h,M as p,K as m,v,r as $,w as g,k as b,t as x,l as E,af as T,n as k,g as w,h as j,u as D,T as A,a3 as B,ag as I,ah as N,B as O,D as Y,aa as y}from"../chunks/vendor-9b7a0713.js";import{g as z}from"../chunks/navigation-c804b3db.js";import{b as P}from"../chunks/paths-7dc55c62.js";import{A as S,s as U,f as V,e as q}from"../chunks/state-1b6627c0.js";const{document:F}=I;function J(s){let t,e,a,b,x,E;return a=new N({props:{size:"24"}}),{c(){t=n("div"),e=n("button"),o(a.$$.fragment),this.h()},l(s){t=i(s,"DIV",{class:!0});var n=r(t);e=i(n,"BUTTON",{class:!0});var o=r(e);l(a.$$.fragment,o),o.forEach(c),n.forEach(c),this.h()},h(){d(e,"class","p-4 border shadow-md bg-white rounded-full"),d(t,"class","fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col")},m(n,o){f(n,t,o),u(t,e),h(a,e,null),b=!0,x||(E=p(e,"click",s[3]),x=!0)},p:m,i(s){b||(v(a.$$.fragment,s),b=!0)},o(s){$(a.$$.fragment,s),b=!1},d(s){s&&c(t),g(a),x=!1,E()}}}function K(s){var t;let e,m,B,I,N,Y,y,z,P,S,U,V,q,K,M,R=(s[0]?null==(t=s[0])?void 0:t.title:"You're done!")+"",C=(s[0]?s[0].description||"...":"There's nothing else to do.")+"";B=new a({props:{size:"24"}});let G=s[0]&&J(s);return{c(){e=b(),m=n("button"),o(B.$$.fragment),I=b(),N=n("div"),Y=n("p"),y=x(R),z=b(),P=n("p"),S=x(C),U=b(),G&&G.c(),V=E(),this.h()},l(s){T('[data-svelte="svelte-ihrkqk"]',F.head).forEach(c),e=k(s),m=i(s,"BUTTON",{class:!0});var t=r(m);l(B.$$.fragment,t),t.forEach(c),I=k(s),N=i(s,"DIV",{class:!0});var a=r(N);Y=i(a,"P",{class:!0});var n=r(Y);y=w(n,R),n.forEach(c),z=k(a),P=i(a,"P",{class:!0});var o=r(P);S=w(o,C),o.forEach(c),a.forEach(c),U=k(s),G&&G.l(s),V=E(),this.h()},h(){F.title="Focus",d(m,"class","fixed top-4 left-4"),d(Y,"class","text-bg font-bold text-xl"),d(P,"class","font-light text-sm font-mono text-base whitespace-pre-wrap"),d(N,"class","w-full h-full inline-flex flex-col gap-6 p-4 justify-center items-center")},m(t,a){f(t,e,a),f(t,m,a),h(B,m,null),f(t,I,a),f(t,N,a),u(N,Y),u(Y,y),u(N,z),u(N,P),u(P,S),s[7](P),f(t,U,a),G&&G.m(t,a),f(t,V,a),q=!0,K||(M=[p(m,"click",s[2]),p(P,"click",s[5]),p(P,"blur",s[4])],K=!0)},p(s,[t]){var e;(!q||1&t)&&R!==(R=(s[0]?null==(e=s[0])?void 0:e.title:"You're done!")+"")&&j(y,R),(!q||1&t)&&C!==(C=(s[0]?s[0].description||"...":"There's nothing else to do.")+"")&&j(S,C),s[0]?G?(G.p(s,t),1&t&&v(G,1)):(G=J(s),G.c(),v(G,1),G.m(V.parentNode,V)):G&&(O(),$(G,1,1,(()=>{G=null})),D())},i(s){q||(v(B.$$.fragment,s),v(G),q=!0)},o(s){$(B.$$.fragment,s),$(G),q=!1},d(t){t&&c(e),t&&c(m),g(B),t&&c(I),t&&c(N),s[7](null),t&&c(U),G&&G.d(t),t&&c(V),K=!1,A(M)}}}function M(s,t,e){let a,n,o;B(s,q,(s=>e(6,a=s))),n&&U(n.set("startedAt",Y.utc().toISO()));return s.$$.update=()=>{67&s.$$.dirty&&(e(0,n=a.activities.find((s=>s.state===S.READY))),o&&(null==n?void 0:n.description)&&e(1,o.innerText=n.description,o))},[n,o,()=>{z(`${P}/`)},()=>{V(n)},()=>{const s=o.innerText.trim();e(1,o.contentEditable=!1,o),U(n.set("description",s)),s||e(1,o.innerText="...",o)},()=>{document.activeElement!==o&&(e(1,o.contentEditable=!0,o),o.focus(),(null==n?void 0:n.description)||e(1,o.innerText="",o))},a,function(s){y[s?"unshift":"push"]((()=>{o=s,e(1,o),e(6,a),e(0,n)}))}]}export default class extends s{constructor(s){super(),t(this,s,M,K,e,{})}}