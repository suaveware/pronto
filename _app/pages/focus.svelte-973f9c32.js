import{S as t,i as e,s as a,al as s,e as n,j as l,c as r,a as o,m as i,d as c,b as f,f as u,o as h,x as d,a6 as m,u as v,a7 as $,v as p,k as g,t as k,n as w,g as x,K as I,N as b,am as E,w as y,h as D,M as T,l as V,aa as z,Z as O,Q as S,ab as G,I as L,D as M,A as N,an as j,ao as A,ap as P,ac as q,r as B,aq as F,a3 as U,V as K,ar as Q,as as R,at as Y}from"../chunks/vendor-9c86b2cb.js";import{a as Z,s as _,g as C,f as H}from"../chunks/state-f0ce355f.js";const{document:J}=A;function W(t,e,a){const s=t.slice();return s[19]=e[a],s[21]=a,s}function X(t){let e,a,s,g;return a=new P({props:{size:"48"}}),{c(){e=n("div"),l(a.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var s=o(e);i(a.$$.fragment,s),s.forEach(c),this.h()},h(){f(e,"class","fixed top-8 text-blueGray-400 transform -translate-x-1/2 left-1/2")},m(t,s){u(t,e,s),h(a,e,null),g=!0},i(t){g||(d(a.$$.fragment,t),m((()=>{s||(s=$(e,q,{duration:100},!0)),s.run(1)})),g=!0)},o(t){v(a.$$.fragment,t),s||(s=$(e,q,{duration:100},!1)),s.run(0),g=!1},d(t){t&&c(e),p(a),t&&s&&s.end()}}}function tt(t){let e,a;return e=new Q({props:{size:"24"}}),{c(){l(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){h(e,t,s),a=!0},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function et(t){let e,a;return e=new R({props:{size:"24"}}),{c(){l(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){h(e,t,s),a=!0},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function at(t,e){let a,s,l,i,h,m,$,p,T,V,z,O=e[19].name+"";const S=[et,tt],G=[];function L(t,e){return t[19].checked?0:1}function M(){return e[13](e[21])}return l=L(e),i=G[l]=S[l](e),{key:t,first:null,c(){a=n("div"),s=n("div"),i.c(),h=g(),m=n("div"),$=k(O),p=g(),this.h()},l(t){a=r(t,"DIV",{class:!0});var e=o(a);s=r(e,"DIV",{});var n=o(s);i.l(n),n.forEach(c),h=w(e),m=r(e,"DIV",{});var l=o(m);$=x(l,O),l.forEach(c),p=w(e),e.forEach(c),this.h()},h(){f(a,"class","inline-flex gap-4 cursor-pointer"),this.first=a},m(t,e){u(t,a,e),I(a,s),G[l].m(s,null),I(a,h),I(a,m),I(m,$),I(a,p),T=!0,V||(z=b(a,"click",E(M)),V=!0)},p(t,a){let n=l;l=L(e=t),l!==n&&(B(),v(G[n],1,1,(()=>{G[n]=null})),y(),i=G[l],i||(i=G[l]=S[l](e),i.c()),d(i,1),i.m(s,null)),(!T||1&a)&&O!==(O=e[19].name+"")&&D($,O)},i(t){T||(d(i),T=!0)},o(t){v(i),T=!1},d(t){t&&c(a),G[l].d(),V=!1,z()}}}function st(t){let e,a,s,m,$,g;return s=new F({props:{size:"28"}}),{c(){e=n("div"),a=n("button"),l(s.$$.fragment),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=o(e);a=r(n,"BUTTON",{class:!0});var l=o(a);i(s.$$.fragment,l),l.forEach(c),n.forEach(c),this.h()},h(){f(a,"class","p-5 bg-blueGray-400 text-white shadow bg-white rounded-full"),f(e,"class","fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col")},m(n,l){u(n,e,l),I(e,a),h(s,a,null),m=!0,$||(g=b(a,"click",t[5]),$=!0)},p:T,i(t){m||(d(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&c(e),p(s),$=!1,g()}}}function nt(t){var e,a;let m,$,T,G,L,M,N,j,A,P,q,F,K,Q,R,Y,Z,_,C,H,tt,et,nt=(t[0]?t[2]:"")+"",lt=((null==(e=t[0])?void 0:e.title)||"Pronto!")+"",rt=[],ot=new Map;G=new s({props:{class:"text-blueGray-600",size:"24"}});let it=t[3]&&t[0]&&X(),ct=(null==(a=t[0])?void 0:a.checkList.toArray())||[];const ft=t=>t[19]._id;for(let s=0;s<ct.length;s+=1){let e=W(t,ct,s),a=ft(e);ot.set(a,rt[s]=at(a,e))}let ut=t[0]&&st(t);return{c(){m=g(),$=n("div"),T=n("button"),l(G.$$.fragment),L=g(),M=n("div"),N=k(nt),j=g(),it&&it.c(),A=g(),P=n("div"),q=n("p"),F=k(lt),K=g(),Q=n("p"),R=k(""),Y=g(),Z=n("div");for(let t=0;t<rt.length;t+=1)rt[t].c();_=g(),ut&&ut.c(),C=V(),this.h()},l(t){z('[data-svelte="svelte-ihrkqk"]',J.head).forEach(c),m=w(t),$=r(t,"DIV",{class:!0});var e=o($);T=r(e,"BUTTON",{});var a=o(T);i(G.$$.fragment,a),a.forEach(c),L=w(e),M=r(e,"DIV",{class:!0});var s=o(M);N=x(s,nt),j=w(s),it&&it.l(s),s.forEach(c),e.forEach(c),A=w(t),P=r(t,"DIV",{class:!0});var n=o(P);q=r(n,"P",{class:!0});var l=o(q);F=x(l,lt),l.forEach(c),K=w(n),Q=r(n,"P",{class:!0});var f=o(Q);R=x(f,""),f.forEach(c),Y=w(n),Z=r(n,"DIV",{class:!0});var u=o(Z);for(let r=0;r<rt.length;r+=1)rt[r].l(u);u.forEach(c),n.forEach(c),_=w(t),ut&&ut.l(t),C=V(),this.h()},h(){J.title="Focus",f(M,"class","fixed left-1/2 transform -translate-x-1/2"),f($,"class","inline-flex items-center absolute top-0 left-0 right-0 p-4 text-blueGray-600"),f(q,"class","text-bg font-bold text-xl"),f(Q,"class","font-light text-sm font-mono text-base whitespace-pre-wrap"),f(Z,"class","inline-flex flex-col gap-2 px-4 pt-4 w-full"),f(P,"class","w-full h-full inline-flex flex-col text-blueGray-600 gap-6 p-4 justify-center items-center")},m(e,a){u(e,m,a),u(e,$,a),I($,T),h(G,T,null),I($,L),I($,M),I(M,N),I(M,j),it&&it.m(M,null),u(e,A,a),u(e,P,a),I(P,q),I(q,F),I(P,K),I(P,Q),I(Q,R),t[12](Q),I(P,Y),I(P,Z);for(let t=0;t<rt.length;t+=1)rt[t].m(Z,null);u(e,_,a),ut&&ut.m(e,a),u(e,C,a),H=!0,tt||(et=[b(T,"click",t[4]),b(Q,"click",E(t[7])),b(Q,"blur",t[6]),b(P,"click",t[8])],tt=!0)},p(t,[e]){var a,s;(!H||5&e)&&nt!==(nt=(t[0]?t[2]:"")+"")&&D(N,nt),t[3]&&t[0]?it?9&e&&d(it,1):(it=X(),it.c(),d(it,1),it.m(M,null)):it&&(B(),v(it,1,1,(()=>{it=null})),y()),(!H||1&e)&&lt!==(lt=((null==(a=t[0])?void 0:a.title)||"Pronto!")+"")&&D(F,lt),513&e&&(ct=(null==(s=t[0])?void 0:s.checkList.toArray())||[],B(),rt=O(rt,e,ft,1,t,ct,ot,Z,U,at,null,W),y()),t[0]?ut?(ut.p(t,e),1&e&&d(ut,1)):(ut=st(t),ut.c(),d(ut,1),ut.m(C.parentNode,C)):ut&&(B(),v(ut,1,1,(()=>{ut=null})),y())},i(t){if(!H){d(G.$$.fragment,t),d(it);for(let t=0;t<ct.length;t+=1)d(rt[t]);d(ut),H=!0}},o(t){v(G.$$.fragment,t),v(it);for(let e=0;e<rt.length;e+=1)v(rt[e]);v(ut),H=!1},d(e){e&&c(m),e&&c($),p(G),it&&it.d(),e&&c(A),e&&c(P),t[12](null);for(let t=0;t<rt.length;t+=1)rt[t].d();e&&c(_),ut&&ut.d(e),e&&c(C),tt=!1,S(et)}}}function lt(t,e,a){let s;G(t,H,(t=>a(11,s=t)));let n,l,r,o=null,i=null,c=!1,f=L.after(M.now(),0),u="00:00:00",h=!1;const d=()=>{if(h)return;const t=L.fromDateTimes(f.start,M.now()),e=null==n?void 0:n.setIn(["workIntervals",n.workIntervals.size-1],t.toISO()),s=(null==e?void 0:e.workIntervals.reduce(((t,e)=>L.fromISO(e).toDuration().plus(t)),Y.fromMillis(0)).toFormat("hh:mm:ss"))||u;u!==s&&(a(2,u=s),a(10,f=t),a(0,n=e))};N((()=>{window.updateTimer=d,r=setInterval(d,100),o=navigator.wakeLock,o&&(i=o.request())})),j((()=>{if(n){const t=n.setIn(["workIntervals",n.workIntervals.size-1],f.toISO());_(t)}clearInterval(r),o&&i.release()}));const m=t=>{a(0,n=n.setIn(["checkList",t,"checked"],!n.checkList.get(t).checked))};return t.$$.update=()=>{if(2048&t.$$.dirty&&a(0,n=s.activities.find((t=>t.state===Z.READY.key))),1027&t.$$.dirty&&(l&&document.activeElement!==l&&a(1,l.innerText=n?(null==n?void 0:n.description)||"...":"Nenhuma outra atividade",l),n)){const t=L.fromISO(n.workIntervals.last());n.workIntervals.size&&f.start.toMillis()===t.start.toMillis()||a(0,n=n.set("workIntervals",n.workIntervals.push(f.toISO())))}1&t.$$.dirty&&n&&_(n)},[n,l,u,h,()=>{window.history.back()},()=>{C(n),a(10,f=L.after(M.now(),0))},()=>{const t=l.innerText.trim();a(1,l.contentEditable=!1,l),a(0,n=n.set("description",t)),t||a(1,l.innerText="...",l),c=!0},()=>{n&&document.activeElement!==l&&(a(1,l.innerText=n.description,l),a(1,l.contentEditable=!0,l),l.focus())},()=>{c?c=!1:a(3,h=!h)},m,f,s,function(t){K[t?"unshift":"push"]((()=>{l=t,a(1,l),a(0,n),a(10,f),a(11,s)}))},t=>m(t)]}export default class extends t{constructor(t){super(),e(this,t,lt,nt,a,{})}}
