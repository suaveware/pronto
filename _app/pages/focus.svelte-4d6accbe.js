import{S as t,i as e,s as a,al as s,e as n,j as r,c as l,a as o,m as i,d as c,b as f,f as u,o as h,x as d,a6 as m,u as v,a7 as $,v as p,k as g,t as x,n as w,g as k,K as I,N as b,am as E,w as y,h as D,M as T,l as V,aa as z,Z as O,Q as S,ab as G,I as M,D as N,A as j,an as A,ao as L,ap as P,ac as q,r as B,aq as F,a3 as U,V as K,ar as Q,as as R,at as Y}from"../chunks/vendor-9c86b2cb.js";import{a as Z,s as _,g as C,f as H}from"../chunks/state-65ec9c71.js";const{document:J}=L;function W(t,e,a){const s=t.slice();return s[17]=e[a],s[19]=a,s}function X(t){let e,a,s,g;return a=new P({props:{size:"48"}}),{c(){e=n("div"),r(a.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=o(e);i(a.$$.fragment,s),s.forEach(c),this.h()},h(){f(e,"class","fixed top-8 text-blueGray-400 transform -translate-x-1/2 left-1/2")},m(t,s){u(t,e,s),h(a,e,null),g=!0},i(t){g||(d(a.$$.fragment,t),m((()=>{s||(s=$(e,q,{duration:100},!0)),s.run(1)})),g=!0)},o(t){v(a.$$.fragment,t),s||(s=$(e,q,{duration:100},!1)),s.run(0),g=!1},d(t){t&&c(e),p(a),t&&s&&s.end()}}}function tt(t){let e,a;return e=new Q({props:{size:"24"}}),{c(){r(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){h(e,t,s),a=!0},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function et(t){let e,a;return e=new R({props:{size:"24"}}),{c(){r(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,s){h(e,t,s),a=!0},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){p(e,t)}}}function at(t,e){let a,s,r,i,h,m,$,p,T,V,z,O=e[17].name+"";const S=[et,tt],G=[];function M(t,e){return t[17].checked?0:1}function N(){return e[13](e[19])}return r=M(e),i=G[r]=S[r](e),{key:t,first:null,c(){a=n("div"),s=n("div"),i.c(),h=g(),m=n("div"),$=x(O),p=g(),this.h()},l(t){a=l(t,"DIV",{class:!0});var e=o(a);s=l(e,"DIV",{});var n=o(s);i.l(n),n.forEach(c),h=w(e),m=l(e,"DIV",{});var r=o(m);$=k(r,O),r.forEach(c),p=w(e),e.forEach(c),this.h()},h(){f(a,"class","inline-flex gap-4 cursor-pointer"),this.first=a},m(t,e){u(t,a,e),I(a,s),G[r].m(s,null),I(a,h),I(a,m),I(m,$),I(a,p),T=!0,V||(z=b(a,"click",E(N)),V=!0)},p(t,a){let n=r;r=M(e=t),r!==n&&(B(),v(G[n],1,1,(()=>{G[n]=null})),y(),i=G[r],i||(i=G[r]=S[r](e),i.c()),d(i,1),i.m(s,null)),(!T||1&a)&&O!==(O=e[17].name+"")&&D($,O)},i(t){T||(d(i),T=!0)},o(t){v(i),T=!1},d(t){t&&c(a),G[r].d(),V=!1,z()}}}function st(t){let e,a,s,m,$,g;return s=new F({props:{size:"28"}}),{c(){e=n("div"),a=n("button"),r(s.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=o(e);a=l(n,"BUTTON",{class:!0});var r=o(a);i(s.$$.fragment,r),r.forEach(c),n.forEach(c),this.h()},h(){f(a,"class","p-5 bg-blueGray-400 text-white shadow bg-white rounded-full"),f(e,"class","fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col")},m(n,r){u(n,e,r),I(e,a),h(s,a,null),m=!0,$||(g=b(a,"click",t[5]),$=!0)},p:T,i(t){m||(d(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&c(e),p(s),$=!1,g()}}}function nt(t){var e,a;let m,$,T,G,M,N,j,A,L,P,q,F,K,Q,R,Y,Z,_,C,H,tt,et,nt=(t[0]?t[2]:"")+"",rt=((null==(e=t[0])?void 0:e.title)||"Pronto!")+"",lt=[],ot=new Map;G=new s({props:{class:"text-blueGray-600",size:"24"}});let it=t[3]&&t[0]&&X(),ct=(null==(a=t[0])?void 0:a.checkList.toArray())||[];const ft=t=>t[17]._id;for(let s=0;s<ct.length;s+=1){let e=W(t,ct,s),a=ft(e);ot.set(a,lt[s]=at(a,e))}let ut=t[0]&&st(t);return{c(){m=g(),$=n("div"),T=n("button"),r(G.$$.fragment),M=g(),N=n("div"),j=x(nt),A=g(),it&&it.c(),L=g(),P=n("div"),q=n("p"),F=x(rt),K=g(),Q=n("p"),R=x(""),Y=g(),Z=n("div");for(let t=0;t<lt.length;t+=1)lt[t].c();_=g(),ut&&ut.c(),C=V(),this.h()},l(t){z('[data-svelte="svelte-ihrkqk"]',J.head).forEach(c),m=w(t),$=l(t,"DIV",{class:!0});var e=o($);T=l(e,"BUTTON",{});var a=o(T);i(G.$$.fragment,a),a.forEach(c),M=w(e),N=l(e,"DIV",{class:!0});var s=o(N);j=k(s,nt),A=w(s),it&&it.l(s),s.forEach(c),e.forEach(c),L=w(t),P=l(t,"DIV",{class:!0});var n=o(P);q=l(n,"P",{class:!0});var r=o(q);F=k(r,rt),r.forEach(c),K=w(n),Q=l(n,"P",{class:!0});var f=o(Q);R=k(f,""),f.forEach(c),Y=w(n),Z=l(n,"DIV",{class:!0});var u=o(Z);for(let l=0;l<lt.length;l+=1)lt[l].l(u);u.forEach(c),n.forEach(c),_=w(t),ut&&ut.l(t),C=V(),this.h()},h(){J.title="Focus",f(N,"class","fixed left-1/2 transform -translate-x-1/2"),f($,"class","inline-flex items-center absolute top-0 left-0 right-0 p-4 text-blueGray-600"),f(q,"class","text-bg font-bold text-xl"),f(Q,"class","font-light text-sm font-mono text-base whitespace-pre-wrap"),f(Z,"class","inline-flex flex-col gap-2 px-4 pt-4 w-full"),f(P,"class","w-full h-full inline-flex flex-col text-blueGray-600 gap-6 p-4 justify-center items-center")},m(e,a){u(e,m,a),u(e,$,a),I($,T),h(G,T,null),I($,M),I($,N),I(N,j),I(N,A),it&&it.m(N,null),u(e,L,a),u(e,P,a),I(P,q),I(q,F),I(P,K),I(P,Q),I(Q,R),t[12](Q),I(P,Y),I(P,Z);for(let t=0;t<lt.length;t+=1)lt[t].m(Z,null);u(e,_,a),ut&&ut.m(e,a),u(e,C,a),H=!0,tt||(et=[b(T,"click",t[4]),b(Q,"click",E(t[7])),b(Q,"blur",t[6]),b(P,"click",t[8])],tt=!0)},p(t,[e]){var a,s;(!H||5&e)&&nt!==(nt=(t[0]?t[2]:"")+"")&&D(j,nt),t[3]&&t[0]?it?9&e&&d(it,1):(it=X(),it.c(),d(it,1),it.m(N,null)):it&&(B(),v(it,1,1,(()=>{it=null})),y()),(!H||1&e)&&rt!==(rt=((null==(a=t[0])?void 0:a.title)||"Pronto!")+"")&&D(F,rt),513&e&&(ct=(null==(s=t[0])?void 0:s.checkList.toArray())||[],B(),lt=O(lt,e,ft,1,t,ct,ot,Z,U,at,null,W),y()),t[0]?ut?(ut.p(t,e),1&e&&d(ut,1)):(ut=st(t),ut.c(),d(ut,1),ut.m(C.parentNode,C)):ut&&(B(),v(ut,1,1,(()=>{ut=null})),y())},i(t){if(!H){d(G.$$.fragment,t),d(it);for(let t=0;t<ct.length;t+=1)d(lt[t]);d(ut),H=!0}},o(t){v(G.$$.fragment,t),v(it);for(let e=0;e<lt.length;e+=1)v(lt[e]);v(ut),H=!1},d(e){e&&c(m),e&&c($),p(G),it&&it.d(),e&&c(L),e&&c(P),t[12](null);for(let t=0;t<lt.length;t+=1)lt[t].d();e&&c(_),ut&&ut.d(e),e&&c(C),tt=!1,S(et)}}}function rt(t,e,a){let s;G(t,H,(t=>a(11,s=t)));let n,r,l,o=!1,i=M.after(N.now(),0),c="00:00:00",f=!1;const u=()=>{if(f)return;const t=M.fromDateTimes(i.start,N.now()),e=null==n?void 0:n.setIn(["workIntervals",n.workIntervals.size-1],t.toISO()),s=(null==e?void 0:e.workIntervals.reduce(((t,e)=>M.fromISO(e).toDuration().plus(t)),Y.fromMillis(0)).toFormat("hh:mm:ss"))||c;c!==s&&(a(2,c=s),a(10,i=t),a(0,n=e))};j((()=>{window.updateTimer=u,l=setInterval(u,100)})),A((()=>{if(n){const t=n.setIn(["workIntervals",n.workIntervals.size-1],i.toISO());_(t)}clearInterval(l)}));const h=t=>{a(0,n=n.setIn(["checkList",t,"checked"],!n.checkList.get(t).checked))};return t.$$.update=()=>{if(2048&t.$$.dirty&&a(0,n=s.activities.find((t=>t.state===Z.READY.key))),1027&t.$$.dirty&&(r&&document.activeElement!==r&&a(1,r.innerText=n?(null==n?void 0:n.description)||"...":"Nenhuma outra atividade",r),n)){const t=M.fromISO(n.workIntervals.last());n.workIntervals.size&&i.start.toMillis()===t.start.toMillis()||a(0,n=n.set("workIntervals",n.workIntervals.push(i.toISO())))}1&t.$$.dirty&&n&&_(n)},[n,r,c,f,()=>{window.history.back()},()=>{C(n),a(10,i=M.after(N.now(),0))},()=>{const t=r.innerText.trim();a(1,r.contentEditable=!1,r),a(0,n=n.set("description",t)),t||a(1,r.innerText="...",r),o=!0},()=>{n&&document.activeElement!==r&&(a(1,r.innerText=n.description,r),a(1,r.contentEditable=!0,r),r.focus())},()=>{o?o=!1:a(3,f=!f)},h,i,s,function(t){K[t?"unshift":"push"]((()=>{r=t,a(1,r),a(0,n),a(10,i),a(11,s)}))},t=>h(t)]}export default class extends t{constructor(t){super(),e(this,t,rt,nt,a,{})}}
