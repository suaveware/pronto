import{S as t,i as e,s as n,e as a,k as s,t as l,c as r,a as c,d as o,n as i,g as f,b as $,f as u,H as m,J as d,a0 as h,u as p,w as g,x as v,h as k,j as x,m as w,o as E,v as y,E as b,T as D,M as T,a5 as I,A,an as V,ao as j,ap as L,I as P,r as N,aq as S,ar as q,_ as z,P as C,as as F,at as J}from"../chunks/vendor-c3741222.js";import{T as R,F as Y,e as B,c as M,d as _,s as H,f as O}from"../chunks/FabContainer-8061c6f0.js";import{A as U}from"../chunks/tick-cf308ed2.js";import{T as G}from"../chunks/TopBar-e1b953c3.js";const{document:K}=j;function Q(t,e,n){const a=t.slice();return a[16]=e[n],a[18]=n,a}function W(t){let e,n,s,l,i;return n=new L({props:{size:"24"}}),{c(){e=a("button"),x(n.$$.fragment)},l(t){e=r(t,"BUTTON",{});var a=c(e);w(n.$$.fragment,a),a.forEach(o)},m(a,r){u(a,e,r),E(n,e,null),s=!0,l||(i=d(e,"click",t[3]),l=!0)},p:P,i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){p(n.$$.fragment,t),s=!1},d(t){t&&o(e),y(n),l=!1,i()}}}function X(t){let e,n;return e=new F({props:{size:"24"}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function Z(t){let e,n;return e=new J({props:{size:"24"}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function tt(t,e){let n,x,w,E,y,b,D,T,I,A,V,j=e[16].name+"";const L=[Z,X],P=[];function S(t,e){return t[16].checked?0:1}function q(){return e[12](e[18])}return w=S(e),E=P[w]=L[w](e),{key:t,first:null,c(){n=a("div"),x=a("div"),E.c(),y=s(),b=a("div"),D=l(j),T=s(),this.h()},l(t){n=r(t,"DIV",{class:!0});var e=c(n);x=r(e,"DIV",{});var a=c(x);E.l(a),a.forEach(o),y=i(e),b=r(e,"DIV",{});var s=c(b);D=f(s,j),s.forEach(o),T=i(e),e.forEach(o),this.h()},h(){$(n,"class","inline-flex items-center gap-4 cursor-pointer"),this.first=n},m(t,e){u(t,n,e),m(n,x),P[w].m(x,null),m(n,y),m(n,b),m(b,D),m(n,T),I=!0,A||(V=d(n,"click",h(q)),A=!0)},p(t,n){let a=w;w=S(e=t),w!==a&&(N(),p(P[a],1,1,(()=>{P[a]=null})),g(),E=P[w],E||(E=P[w]=L[w](e),E.c()),v(E,1),E.m(x,null)),(!I||1&n)&&j!==(j=e[16].name+"")&&k(D,j)},i(t){I||(v(E),I=!0)},o(t){p(E),I=!1},d(t){t&&o(n),P[w].d(),A=!1,V()}}}function et(t){let e,n;return e=new Y({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,n){const a={};524288&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function nt(t){let e,n,a,l;return e=new B({props:{small:!0,icon:S}}),e.$on("click",t[5]),a=new B({props:{icon:q}}),a.$on("click",t[4]),{c(){x(e.$$.fragment),n=s(),x(a.$$.fragment)},l(t){w(e.$$.fragment,t),n=i(t),w(a.$$.fragment,t)},m(t,s){E(e,t,s),u(t,n,s),E(a,t,s),l=!0},p:P,i(t){l||(v(e.$$.fragment,t),v(a.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),p(a.$$.fragment,t),l=!1},d(t){y(e,t),t&&o(n),y(a,t)}}}function at(t){var e,n;let I,A,V,j,L,P,S,q,C,F,J,Y,B,M,_,H,O,U,X,Z=((null==(e=t[0])?void 0:e.title)||"Pronto!")+"",nt=[],at=new Map;I=new R({props:{themeColoredNode:t[2]}}),L=new G({props:{$$slots:{default:[W]},$$scope:{ctx:t}}});let st=(null==(n=t[0])?void 0:n.checkList.toArray())||[];const lt=t=>t[16]._id;for(let a=0;a<st.length;a+=1){let e=Q(t,st,a),n=lt(e);at.set(n,nt[a]=tt(n,e))}let rt=t[0]&&et(t);return{c(){x(I.$$.fragment),A=s(),V=s(),j=a("div"),x(L.$$.fragment),P=s(),S=a("div"),q=a("p"),C=l(Z),F=s(),J=a("div"),Y=a("p"),B=l(""),M=s(),_=a("div");for(let t=0;t<nt.length;t+=1)nt[t].c();H=s(),rt&&rt.c(),this.h()},l(t){w(I.$$.fragment,t),A=i(t);b('[data-svelte="svelte-ihrkqk"]',K.head).forEach(o),V=i(t),j=r(t,"DIV",{class:!0});var e=c(j);w(L.$$.fragment,e),P=i(e),S=r(e,"DIV",{class:!0});var n=c(S);q=r(n,"P",{class:!0});var a=c(q);C=f(a,Z),a.forEach(o),F=i(n),J=r(n,"DIV",{class:!0});var s=c(J);Y=r(s,"P",{class:!0});var l=c(Y);B=f(l,""),l.forEach(o),s.forEach(o),M=i(n),_=r(n,"DIV",{class:!0});var $=c(_);for(let r=0;r<nt.length;r+=1)nt[r].l($);$.forEach(o),n.forEach(o),H=i(e),rt&&rt.l(e),e.forEach(o),this.h()},h(){K.title="Focus",$(q,"class","text-bg font-bold text-2xl mb-6 px-8"),$(Y,"class","font-light font-mono whitespace-pre-wrap mb-6"),$(J,"class","px-8"),$(_,"class","inline-flex flex-col gap-2 px-10 pt-4 w-full pb-12"),$(S,"class","text-accent w-full space-y-6 my-auto flex flex-col justify-center items-center"),$(j,"class","bg-base-100 text-accent h-full w-full flex flex-col overflow-y-scroll")},m(e,n){E(I,e,n),u(e,A,n),u(e,V,n),u(e,j,n),E(L,j,null),m(j,P),m(j,S),m(S,q),m(q,C),m(S,F),m(S,J),m(J,Y),m(Y,B),t[11](Y),m(S,M),m(S,_);for(let t=0;t<nt.length;t+=1)nt[t].m(_,null);m(j,H),rt&&rt.m(j,null),t[13](j),O=!0,U||(X=[d(Y,"click",h(t[7])),d(Y,"blur",t[6]),d(j,"click",t[8])],U=!0)},p(t,[e]){var n,a;const s={};4&e&&(s.themeColoredNode=t[2]),I.$set(s);const l={};524288&e&&(l.$$scope={dirty:e,ctx:t}),L.$set(l),(!O||1&e)&&Z!==(Z=((null==(n=t[0])?void 0:n.title)||"Pronto!")+"")&&k(C,Z),513&e&&(st=(null==(a=t[0])?void 0:a.checkList.toArray())||[],N(),nt=D(nt,e,lt,1,t,st,at,_,z,tt,null,Q),g()),t[0]?rt?(rt.p(t,e),1&e&&v(rt,1)):(rt=et(t),rt.c(),v(rt,1),rt.m(j,null)):rt&&(N(),p(rt,1,1,(()=>{rt=null})),g())},i(t){if(!O){v(I.$$.fragment,t),v(L.$$.fragment,t);for(let t=0;t<st.length;t+=1)v(nt[t]);v(rt),O=!0}},o(t){p(I.$$.fragment,t),p(L.$$.fragment,t);for(let e=0;e<nt.length;e+=1)p(nt[e]);p(rt),O=!1},d(e){y(I,e),e&&o(A),e&&o(V),e&&o(j),y(L),t[11](null);for(let t=0;t<nt.length;t+=1)nt[t].d();rt&&rt.d(),t[13](null),U=!1,T(X)}}}function st(t,e,n){let a;I(t,O,(t=>n(10,a=t)));let s,l,r=null,c=null,o=!1;A((async()=>{var t;c=await(null==(t=navigator.wakeLock)?void 0:t.request())})),V((()=>{console.log("wakeLockSentinel",c),null==c||c.release()}));const i=t=>{H(s.setIn(["checkList",t,"checked"],!s.checkList.get(t).checked))};return t.$$.update=()=>{1024&t.$$.dirty&&n(0,s=a.activities.find((t=>t.state===U.READY.key))),3&t.$$.dirty&&l&&document.activeElement!==l&&n(1,l.innerText=s?(null==s?void 0:s.description)||"...":"Nenhuma outra atividade",l)},[s,l,r,()=>{window.history.back()},()=>{M(s)},()=>{const t=a.activities.toJS().filter((({state:t})=>t===U.READY.key)),e=a.activities.toJS().filter((({state:t})=>t!==U.READY.key));if(t.length>1){const[n,a,...s]=t,l=[a,n,...s,...e];_(l)}},()=>{const t=l.innerText.trim();n(1,l.contentEditable=!1,l),H(s.set("description",t)),console.log("newDescription",t),t||n(1,l.innerText="...",l),o=!0},()=>{s&&document.activeElement!==l&&(n(1,l.innerText=s.description,l),n(1,l.contentEditable=!0,l),l.focus())},()=>{o&&(o=!1)},i,a,function(t){C[t?"unshift":"push"]((()=>{l=t,n(1,l),n(0,s),n(10,a)}))},t=>i(t),function(t){C[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}export default class extends t{constructor(t){super(),e(this,t,st,at,n,{})}}
