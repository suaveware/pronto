import{S as t,i as e,s as a,e as s,t as n,c as l,a as r,g as o,d as i,b as c,f as u,K as f,h as m,M as d,L as $,J as h,D as p,A as g,ao as v,B as x,T as k,ap as w,aq as b,j as E,m as I,o as y,x as D,a8 as P,u as V,a9 as T,v as F,$ as S,k as A,n as L,N as O,a5 as U,w as G,ad as j,Z as z,Q as q,ae as J,ar as M,as as N,ag as R,V as Y,a1 as B,r as C,at as K,au as Q,a3 as Z,a6 as _,av as H}from"../chunks/vendor-dbf4a16c.js";import{a as W,e as X,f as tt,s as et,h as at}from"../chunks/state-b7012d7d.js";import{F as st,a as nt}from"../chunks/FabContainer-d006dd1b.js";function lt(t){let e,a,$;return{c(){e=s("div"),a=n(t[0]),this.h()},l(s){e=l(s,"DIV",{class:!0});var n=r(e);a=o(n,t[0]),n.forEach(i),this.h()},h(){c(e,"class",$=t[1].class)},m(t,s){u(t,e,s),f(e,a)},p(t,[s]){1&s&&m(a,t[0]),2&s&&$!==($=t[1].class)&&c(e,"class",$)},i:d,o:d,d(t){t&&i(e)}}}function rt(t,e,a){let s,n=0,{timeFormat:l="hh:mm:ss"}=e,{intervals:r=$()}=e,{isPaused:o=!1}=e,{onUpdate:i=(()=>{})}=e;r=r.push(h.after(p.now(),0).toISO());return g((()=>{const t=()=>{if(o)return;const t=h.fromDateTimes(h.fromISO(r.last()).start,p.now()).toISO(),e=r.set(-1,t).reduce(((t,e)=>h.fromISO(e).toDuration().plus(t)),w.fromMillis(0)).toFormat(l);n!==e&&(a(0,n=e),a(2,r=r.set(-1,t)),i(r))};t(),window.updateTimer=t,s=setInterval(t,500)})),v((()=>{clearInterval(s)})),t.$$set=t=>{a(1,e=x(x({},e),k(t))),"timeFormat"in t&&a(4,l=t.timeFormat),"intervals"in t&&a(2,r=t.intervals),"isPaused"in t&&a(3,o=t.isPaused),"onUpdate"in t&&a(5,i=t.onUpdate)},e=k(e),[n,e,r,o,l,i,()=>{a(3,o=!o),o||a(2,r=r.push(h.after(p.now(),0).toISO()))}]}class ot extends t{constructor(t){super(),e(this,t,rt,lt,a,{timeFormat:4,intervals:2,isPaused:3,onUpdate:5,togglePause:6})}get togglePause(){return this.$$.ctx[6]}}const{document:it}=M;function ct(t,e,a){const s=t.slice();return s[19]=e[a],s[21]=a,s}function ut(t){let e,a,n,o;return a=new N({props:{size:"24"}}),{c(){e=s("div"),E(a.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=r(e);I(a.$$.fragment,s),s.forEach(i),this.h()},h(){c(e,"class","top-8")},m(t,s){u(t,e,s),y(a,e,null),o=!0},i(t){o||(D(a.$$.fragment,t),P((()=>{n||(n=T(e,R,{duration:100},!0)),n.run(1)})),o=!0)},o(t){V(a.$$.fragment,t),n||(n=T(e,R,{duration:100},!1)),n.run(0),o=!1},d(t){t&&i(e),F(a),t&&n&&n.end()}}}function ft(t){let e,a,s,n;function l(e){t[13](e)}function r(e){t[14](e)}let o={intervals:t[0].workIntervals,onUpdate:t[11]};return void 0!==t[2]&&(o.togglePause=t[2]),void 0!==t[3]&&(o.isPaused=t[3]),e=new ot({props:o}),Y.push((()=>B(e,"togglePause",l))),Y.push((()=>B(e,"isPaused",r))),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){y(e,t,a),n=!0},p(t,n){const l={};1&n&&(l.intervals=t[0].workIntervals),!a&&4&n&&(a=!0,l.togglePause=t[2],S((()=>a=!1))),!s&&8&n&&(s=!0,l.isPaused=t[3],S((()=>s=!1))),e.$set(l)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function mt(t){let e,a;return e=new _({props:{size:"24"}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),a=!0},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function dt(t){let e,a;return e=new H({props:{size:"24"}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),a=!0},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function $t(t,e){let a,d,$,h,p,g,v,x,k,w,b,E=e[19].name+"";const I=[dt,mt],y=[];function P(t,e){return t[19].checked?0:1}function T(){return e[16](e[21])}return $=P(e),h=y[$]=I[$](e),{key:t,first:null,c(){a=s("div"),d=s("div"),h.c(),p=A(),g=s("div"),v=n(E),x=A(),this.h()},l(t){a=l(t,"DIV",{class:!0});var e=r(a);d=l(e,"DIV",{});var s=r(d);h.l(s),s.forEach(i),p=L(e),g=l(e,"DIV",{});var n=r(g);v=o(n,E),n.forEach(i),x=L(e),e.forEach(i),this.h()},h(){c(a,"class","inline-flex gap-4 cursor-pointer"),this.first=a},m(t,e){u(t,a,e),f(a,d),y[$].m(d,null),f(a,p),f(a,g),f(g,v),f(a,x),k=!0,w||(b=O(a,"click",U(T)),w=!0)},p(t,a){let s=$;$=P(e=t),$!==s&&(C(),V(y[s],1,1,(()=>{y[s]=null})),G(),h=y[$],h||(h=y[$]=I[$](e),h.c()),D(h,1),h.m(d,null)),(!k||1&a)&&E!==(E=e[19].name+"")&&m(v,E)},i(t){k||(D(h),k=!0)},o(t){V(h),k=!1},d(t){t&&i(a),y[$].d(),w=!1,b()}}}function ht(t){let e,a;return e=new st({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,s){y(e,t,s),a=!0},p(t,a){const s={};4194304&a&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){F(e,t)}}}function pt(t){let e,a,s,n;return e=new nt({props:{color:"bg-blueGray-400",small:!0,icon:K}}),e.$on("click",t[6]),s=new nt({props:{color:"bg-blueGray-400",icon:Q}}),s.$on("click",t[5]),{c(){E(e.$$.fragment),a=A(),E(s.$$.fragment)},l(t){I(e.$$.fragment,t),a=L(t),I(s.$$.fragment,t)},m(t,l){y(e,t,l),u(t,a,l),y(s,t,l),n=!0},p:d,i(t){n||(D(e.$$.fragment,t),D(s.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),V(s.$$.fragment,t),n=!1},d(t){F(e,t),t&&i(a),F(s,t)}}}function gt(t){var e,a;let d,$,h,p,g,v,x,k,w,P,T,S,J,M,N,R,Y,B,K,Q,_,H=((null==(e=t[0])?void 0:e.title)||"Pronto!")+"",W=[],X=new Map;g=new b({props:{class:"text-blueGray-600",size:"24"}});let tt=t[3]&&t[0]&&ut(),et=t[0]&&ft(t),at=(null==(a=t[0])?void 0:a.checkList.toArray())||[];const st=t=>t[19]._id;for(let s=0;s<at.length;s+=1){let e=ct(t,at,s),a=st(e);X.set(a,W[s]=$t(a,e))}let nt=t[0]&&ht(t);return{c(){d=A(),$=s("div"),h=s("div"),p=s("button"),E(g.$$.fragment),v=A(),x=s("div"),tt&&tt.c(),k=A(),et&&et.c(),w=A(),P=s("div"),T=s("p"),S=n(H),J=A(),M=s("p"),N=n(""),R=A(),Y=s("div");for(let t=0;t<W.length;t+=1)W[t].c();B=A(),nt&&nt.c(),this.h()},l(t){j('[data-svelte="svelte-ihrkqk"]',it.head).forEach(i),d=L(t),$=l(t,"DIV",{class:!0});var e=r($);h=l(e,"DIV",{class:!0});var a=r(h);p=l(a,"BUTTON",{});var s=r(p);I(g.$$.fragment,s),s.forEach(i),v=L(a),x=l(a,"DIV",{class:!0});var n=r(x);tt&&tt.l(n),k=L(n),et&&et.l(n),n.forEach(i),a.forEach(i),w=L(e),P=l(e,"DIV",{class:!0});var c=r(P);T=l(c,"P",{class:!0});var u=r(T);S=o(u,H),u.forEach(i),J=L(c),M=l(c,"P",{class:!0});var f=r(M);N=o(f,""),f.forEach(i),R=L(c),Y=l(c,"DIV",{class:!0});var m=r(Y);for(let l=0;l<W.length;l+=1)W[l].l(m);m.forEach(i),c.forEach(i),B=L(e),nt&&nt.l(e),e.forEach(i),this.h()},h(){it.title="Focus",c(x,"class","ml-auto inline-flex gap-2 items-center opacity-60 pr-2"),c(h,"class","inline-flex relative items-center w-ful p-4 text-blueGray-600"),c(T,"class","text-bg font-bold text-xl"),c(M,"class","font-light text-sm font-mono text-base whitespace-pre-wrap"),c(Y,"class","inline-flex flex-col gap-2 px-4 pt-4 w-full"),c(P,"class","w-full inline-flex my-auto box-border flex-col overflow-y-scroll text-blueGray-600 gap-6 p-4 items-center"),c($,"class","inline-flex flex-col h-full w-full")},m(e,a){u(e,d,a),u(e,$,a),f($,h),f(h,p),y(g,p,null),f(h,v),f(h,x),tt&&tt.m(x,null),f(x,k),et&&et.m(x,null),f($,w),f($,P),f(P,T),f(T,S),f(P,J),f(P,M),f(M,N),t[15](M),f(P,R),f(P,Y);for(let t=0;t<W.length;t+=1)W[t].m(Y,null);f($,B),nt&&nt.m($,null),K=!0,Q||(_=[O(p,"click",t[4]),O(M,"click",U(t[8])),O(M,"blur",t[7]),O($,"click",t[9])],Q=!0)},p(t,[e]){var a,s;t[3]&&t[0]?tt?9&e&&D(tt,1):(tt=ut(),tt.c(),D(tt,1),tt.m(x,k)):tt&&(C(),V(tt,1,1,(()=>{tt=null})),G()),t[0]?et?(et.p(t,e),1&e&&D(et,1)):(et=ft(t),et.c(),D(et,1),et.m(x,null)):et&&(C(),V(et,1,1,(()=>{et=null})),G()),(!K||1&e)&&H!==(H=((null==(a=t[0])?void 0:a.title)||"Pronto!")+"")&&m(S,H),1025&e&&(at=(null==(s=t[0])?void 0:s.checkList.toArray())||[],C(),W=z(W,e,st,1,t,at,X,Y,Z,$t,null,ct),G()),t[0]?nt?(nt.p(t,e),1&e&&D(nt,1)):(nt=ht(t),nt.c(),D(nt,1),nt.m($,null)):nt&&(C(),V(nt,1,1,(()=>{nt=null})),G())},i(t){if(!K){D(g.$$.fragment,t),D(tt),D(et);for(let t=0;t<at.length;t+=1)D(W[t]);D(nt),K=!0}},o(t){V(g.$$.fragment,t),V(tt),V(et);for(let e=0;e<W.length;e+=1)V(W[e]);V(nt),K=!1},d(e){e&&i(d),e&&i($),F(g),tt&&tt.d(),et&&et.d(),t[15](null);for(let t=0;t<W.length;t+=1)W[t].d();nt&&nt.d(),Q=!1,q(_)}}}function vt(t,e,a){let s;J(t,at,(t=>a(12,s=t)));let n,l,r,o,i=null,c=!1;g((()=>{var t;i=null==(t=navigator.wakeLock)?void 0:t.request()})),v((()=>{null==i||i.release()}));const u=t=>{et(n.setIn(["checkList",t,"checked"],!n.checkList.get(t).checked))};return t.$$.update=()=>{4096&t.$$.dirty&&a(0,n=s.activities.find((t=>t.state===W.READY.key))),3&t.$$.dirty&&l&&document.activeElement!==l&&a(1,l.innerText=n?(null==n?void 0:n.description)||"...":"Nenhuma outra atividade",l)},[n,l,r,o,()=>{window.history.back()},()=>{X(n)},()=>{const t=s.activities.toJS().filter((({state:t})=>t===W.READY.key)),e=s.activities.toJS().filter((({state:t})=>t!==W.READY.key));if(t.length>1){const[a,s,...n]=t,l=[s,a,...n,...e];tt(l)}},()=>{const t=l.innerText.trim();a(1,l.contentEditable=!1,l),a(0,n=n.set("description",t)),t||a(1,l.innerText="...",l),c=!0},()=>{n&&document.activeElement!==l&&(a(1,l.innerText=n.description,l),a(1,l.contentEditable=!0,l),l.focus())},()=>{c?c=!1:null==r||r()},u,t=>{et(n.set("workIntervals",t))},s,function(t){r=t,a(2,r)},function(t){o=t,a(3,o)},function(t){Y[t?"unshift":"push"]((()=>{l=t,a(1,l),a(0,n),a(12,s)}))},t=>u(t)]}export default class extends t{constructor(t){super(),e(this,t,vt,gt,a,{})}}
