import{S as t,i as e,s as l,e as n,j as s,c as a,a as i,m as r,d as c,b as o,f as u,o as f,M as h,K as d,v,r as p,w as m,t as g,g as $,J as y,k as E,n as x,N as _,O as w,P as b,B as k,u as T,h as D,Q as I,T as L,U as N,V as O,W as A,X as S,D as P,Y as V,Z as z,_ as B,$ as R,L as U,l as j,a0 as W,a1 as Y,a2 as M,a3 as C,z as G,a4 as X,a5 as H,a6 as J,a7 as K,a8 as Z,a9 as Q,aa as q,ab as F,ac as tt,ad as et}from"../chunks/vendor-9b7a0713.js";import{g as lt}from"../chunks/navigation-c804b3db.js";import{R as nt,r as st,s as at,A as it,a as rt,c as ct,e as ot}from"../chunks/state-b352d79d.js";import{b as ut}from"../chunks/paths-7dc55c62.js";function ft(t,e,l){const n=t.slice();return n[14]=e[l],n}function ht(t,e,l){const n=t.slice();return n[11]=e[l],n[13]=l,n}function dt(t,e,l){const n=t.slice();return n[17]=e[l],n}function vt(t){let e,l,g,$,y;return l=new N({props:{size:"24"}}),{c(){e=n("button"),s(l.$$.fragment),this.h()},l(t){e=a(t,"BUTTON",{class:!0});var n=i(e);r(l.$$.fragment,n),n.forEach(c),this.h()},h(){o(e,"class","fixed top-4 right-4")},m(n,s){u(n,e,s),f(l,e,null),g=!0,$||(y=h(e,"click",t[2]),$=!0)},p:d,i(t){g||(v(l.$$.fragment,t),g=!0)},o(t){p(l.$$.fragment,t),g=!1},d(t){t&&c(e),m(l),$=!1,y()}}}function pt(t){let e,l,s=t[17]+"";return{c(){e=n("option"),l=g(s),this.h()},l(t){e=a(t,"OPTION",{});var n=i(e);l=$(n,s),n.forEach(c),this.h()},h(){e.__value=t[17],e.value=e.__value},m(t,n){u(t,e,n),y(e,l)},p:d,d(t){t&&c(e)}}}function mt(t){let e,l=new Array(31).fill(0).map(_t),s=[];for(let n=0;n<l.length;n+=1)s[n]=yt(ft(t,l,n));return{c(){e=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var l=i(e);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(c),this.h()},h(){o(e,"class","inline-flex flex-wrap gap-2")},m(t,l){u(t,e,l);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(t,n){if(2&n){let a;for(l=new Array(31).fill(0).map(_t),a=0;a<l.length;a+=1){const i=ft(t,l,a);s[a]?s[a].p(i,n):(s[a]=yt(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=l.length}},d(t){t&&c(e),I(s,t)}}}function gt(t){let e,l=S.weekdays("long",{locale:"en"}),s=[];for(let n=0;n<l.length;n+=1)s[n]=Et(ht(t,l,n));return{c(){e=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=a(t,"DIV",{class:!0});var l=i(e);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(c),this.h()},h(){o(e,"class","inline-flex flex-wrap gap-2")},m(t,l){u(t,e,l);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(t,n){if(2&n){let a;for(l=S.weekdays("long",{locale:"en"}),a=0;a<l.length;a+=1){const i=ht(t,l,a);s[a]?s[a].p(i,n):(s[a]=Et(i),s[a].c(),s[a].m(e,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=l.length}},d(t){t&&c(e),I(s,t)}}}function $t(t){let e,l,s;return{c(){e=n("input"),l=E(),s=n("input"),this.h()},l(t){e=a(t,"INPUT",{class:!0,type:!0}),l=x(t),s=a(t,"INPUT",{class:!0,type:!0}),this.h()},h(){o(e,"class","form-input svelte-kbxu48"),o(e,"type","date"),o(s,"class","form-input svelte-kbxu48"),o(s,"type","time")},m(t,n){u(t,e,n),u(t,l,n),u(t,s,n)},p:d,d(t){t&&c(e),t&&c(l),t&&c(s)}}}function yt(t){let e,l,s,r,f,d,v,p=t[14]+"";return{c(){e=n("label"),l=n("input"),s=E(),r=g(p),f=E(),this.h()},l(t){e=a(t,"LABEL",{});var n=i(e);l=a(n,"INPUT",{type:!0}),s=x(n),r=$(n,p),f=x(n),n.forEach(c),this.h()},h(){o(l,"type","checkbox"),l.__value=t[14],l.value=l.__value,t[9][1].push(l)},m(n,a){u(n,e,a),y(e,l),l.checked=~t[1].recurrence.monthDays.indexOf(l.__value),y(e,s),y(e,r),y(e,f),d||(v=h(l,"change",t[10]),d=!0)},p(t,e){2&e&&(l.checked=~t[1].recurrence.monthDays.indexOf(l.__value))},d(n){n&&c(e),t[9][1].splice(t[9][1].indexOf(l),1),d=!1,v()}}}function Et(t){let e,l,s,r,f,d,v,p=t[11]+"";return{c(){e=n("label"),l=n("input"),s=E(),r=g(p),f=E(),this.h()},l(t){e=a(t,"LABEL",{});var n=i(e);l=a(n,"INPUT",{type:!0}),s=x(n),r=$(n,p),f=x(n),n.forEach(c),this.h()},h(){o(l,"type","checkbox"),l.__value=t[13]+1,l.value=l.__value,t[9][0].push(l)},m(n,a){u(n,e,a),y(e,l),l.checked=~t[1].recurrence.weekdays.indexOf(l.__value),y(e,s),y(e,r),y(e,f),d||(v=h(l,"change",t[8]),d=!0)},p(t,e){2&e&&(l.checked=~t[1].recurrence.weekdays.indexOf(l.__value))},d(n){n&&c(e),t[9][0].splice(t[9][0].indexOf(l),1),d=!1,v()}}}function xt(t){var e;let l,s,r,f,d,m,N,O,A,S,P,V,z,B,R,U,j,W,Y,M=t[0]._id?"Save":"Add",C=(null==(e=t[0])?void 0:e._id)&&vt(t),G=Object.values(nt),X=[];for(let n=0;n<G.length;n+=1)X[n]=pt(dt(t,G,n));function H(t,e){return t[1].recurrence.type===nt.ONCE?$t:t[1].recurrence.type===nt.EVERY_WEEK_DAYS?gt:t[1].recurrence.type===nt.EVERY_MONTH_DAYS?mt:void 0}let J=H(t),K=J&&J(t);return{c(){l=n("div"),C&&C.c(),s=E(),r=n("input"),f=E(),d=n("textarea"),m=E(),N=n("div"),O=n("select");for(let t=0;t<X.length;t+=1)X[t].c();A=E(),K&&K.c(),S=E(),P=n("div"),V=n("button"),z=g("Cancel"),B=E(),R=n("button"),U=g(M),this.h()},l(t){l=a(t,"DIV",{class:!0});var e=i(l);C&&C.l(e),s=x(e),r=a(e,"INPUT",{class:!0,type:!0,placeholder:!0}),f=x(e),d=a(e,"TEXTAREA",{class:!0,placeholder:!0}),i(d).forEach(c),m=x(e),N=a(e,"DIV",{class:!0});var n=i(N);O=a(n,"SELECT",{class:!0});var o=i(O);for(let l=0;l<X.length;l+=1)X[l].l(o);o.forEach(c),A=x(n),K&&K.l(n),n.forEach(c),S=x(e),P=a(e,"DIV",{class:!0});var u=i(P);V=a(u,"BUTTON",{class:!0});var h=i(V);z=$(h,"Cancel"),h.forEach(c),B=x(u),R=a(u,"BUTTON",{class:!0});var v=i(R);U=$(v,M),v.forEach(c),u.forEach(c),e.forEach(c),this.h()},h(){o(r,"class","w-full p-1 form-input svelte-kbxu48"),o(r,"type","text"),o(r,"placeholder","Title"),r.autofocus=!0,o(d,"class","w-full h-40 p-1 form-input font-mono svelte-kbxu48"),o(d,"placeholder","Description text"),o(O,"class","form-input svelte-kbxu48"),void 0===t[1].recurrence.type&&_((()=>t[7].call(O))),o(N,"class"," w-full inline-flex gap-2 flex-wrap"),o(V,"class","form-button svelte-kbxu48"),o(R,"class","form-button svelte-kbxu48"),o(P,"class","box-border w-full bottom-2 inline-flex justify-evenly mb-4 mt-4"),o(l,"class","fixed z-50 right-0 left-0 bottom-0 top-0 p-4 inline-flex justify-end flex-col gap-2 bg-white")},m(e,n){u(e,l,n),C&&C.m(l,null),y(l,s),y(l,r),w(r,t[1].title),y(l,f),y(l,d),w(d,t[1].description),y(l,m),y(l,N),y(N,O);for(let t=0;t<X.length;t+=1)X[t].m(O,null);b(O,t[1].recurrence.type),y(N,A),K&&K.m(N,null),y(l,S),y(l,P),y(P,V),y(V,z),y(P,B),y(P,R),y(R,U),j=!0,r.focus(),W||(Y=[h(r,"input",t[5]),h(d,"input",t[6]),h(O,"change",t[7]),h(V,"click",t[3]),h(R,"click",t[4])],W=!0)},p(t,[e]){var n;if((null==(n=t[0])?void 0:n._id)?C?(C.p(t,e),1&e&&v(C,1)):(C=vt(t),C.c(),v(C,1),C.m(l,s)):C&&(k(),p(C,1,1,(()=>{C=null})),T()),2&e&&r.value!==t[1].title&&w(r,t[1].title),2&e&&w(d,t[1].description),0&e){let l;for(G=Object.values(nt),l=0;l<G.length;l+=1){const n=dt(t,G,l);X[l]?X[l].p(n,e):(X[l]=pt(n),X[l].c(),X[l].m(O,null))}for(;l<X.length;l+=1)X[l].d(1);X.length=G.length}2&e&&b(O,t[1].recurrence.type),J===(J=H(t))&&K?K.p(t,e):(K&&K.d(1),K=J&&J(t),K&&(K.c(),K.m(N,null))),(!j||1&e)&&M!==(M=t[0]._id?"Save":"Add")&&D(U,M)},i(t){j||(v(C),j=!0)},o(t){p(C),j=!1},d(t){t&&c(l),C&&C.d(),I(X,t),K&&K.d(),W=!1,L(Y)}}}const _t=(t,e)=>e+1;function wt(t,e,l){let{activity:n}=e,s=n.toJS();const a=[[],[]];return t.$$set=t=>{"activity"in t&&l(0,n=t.activity)},[n,s,()=>{st(n),l(0,n=null)},()=>{l(0,n=null)},()=>{at(n.merge(s)),l(0,n=null)},function(){s.title=this.value,l(1,s)},function(){s.description=this.value,l(1,s)},function(){s.recurrence.type=O(this),l(1,s)},function(){s.recurrence.weekdays=A(a[0],this.__value,this.checked),l(1,s)},a,function(){s.recurrence.monthDays=A(a[1],this.__value,this.checked),l(1,s)}]}class bt extends t{constructor(t){super(),e(this,t,wt,xt,l,{activity:0})}}function kt(t){let e,l,s,r,f,h=P.fromISO(t[0].recurrence.nextDate).toLocal().toLocaleString(P.DATE_SHORT)+"";return{c(){e=n("p"),l=g("Next date: "),s=g(" "),r=E(),f=g(h),this.h()},l(t){e=a(t,"P",{class:!0});var n=i(e);l=$(n,"Next date: "),s=$(n," "),r=x(n),f=$(n,h),n.forEach(c),this.h()},h(){o(e,"class","text-xs font-light")},m(t,n){u(t,e,n),y(e,l),y(e,s),y(e,r),y(e,f)},p(t,e){1&e&&h!==(h=P.fromISO(t[0].recurrence.nextDate).toLocal().toLocaleString(P.DATE_SHORT)+"")&&D(f,h)},d(t){t&&c(e)}}}function Tt(t){let e,l,s,r,f,v,p,m,_,w,b=t[0].title+"",k=t[0].state+"",T=t[0].state===it.WAITING&&kt(t);return{c(){e=n("div"),l=n("div"),s=n("div"),r=g(b),f=E(),v=n("div"),p=g(k),m=E(),T&&T.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=i(e);l=a(n,"DIV",{class:!0});var o=i(l);s=a(o,"DIV",{});var u=i(s);r=$(u,b),u.forEach(c),f=x(o),v=a(o,"DIV",{});var h=i(v);p=$(h,k),h.forEach(c),o.forEach(c),m=x(n),T&&T.l(n),n.forEach(c),this.h()},h(){o(l,"class","inline-flex justify-between items-center w-full"),o(e,"class","w-full p-2 inline-flex flex-col gap-2 shadow-md border rounded")},m(n,a){u(n,e,a),y(e,l),y(l,s),y(s,r),y(l,f),y(l,v),y(v,p),y(e,m),T&&T.m(e,null),_||(w=h(e,"click",t[1]),_=!0)},p(t,[l]){1&l&&b!==(b=t[0].title+"")&&D(r,b),1&l&&k!==(k=t[0].state+"")&&D(p,k),t[0].state===it.WAITING?T?T.p(t,l):(T=kt(t),T.c(),T.m(e,null)):T&&(T.d(1),T=null)},i:d,o:d,d(t){t&&c(e),T&&T.d(),_=!1,w()}}}function Dt(t,e,l){let{activity:n}=e;return t.$$set=t=>{"activity"in t&&l(0,n=t.activity)},[n,function(e){V.call(this,t,e)}]}class It extends t{constructor(t){super(),e(this,t,Dt,Tt,l,{activity:0})}}function Lt(t,e=400){let l,n;const s=()=>{clearTimeout(l)},a=t=>{const e=t.touches?t.touches[0]:t;let s=e.clientX,a=e.clientY,i=s-n.x,r=a-n.y;i*i+r*r>50&&clearTimeout(l)},i=r=>{const c=r.touches?r.touches[0]:r;n={x:c.clientX,y:c.clientY},l=setTimeout((()=>{t.removeEventListener("mousedown",i),t.removeEventListener("touchStart",i),t.removeEventListener("mouseup",s),t.removeEventListener("touchend",s),t.dispatchEvent(new CustomEvent("longpress",{detail:{startDragPosition:n}}))}),e),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a),t.addEventListener("touchend",s),t.addEventListener("touchmove",a)};return t.addEventListener("mousedown",i),t.addEventListener("touchstart",i),{update(t){e=t},destroy(){t.removeEventListener("mousedown",i),t.removeEventListener("touchStart",i),t.removeEventListener("mouseup",s),t.removeEventListener("touchend",s),t.removeEventListener("mousemove",a)}}}function Nt(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Ot(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function At(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function St(t,e){let l,o,h,g,$,_,w,b=d;return o=new It({props:{activity:e[10]}}),o.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=n("span"),s(o.$$.fragment),h=E(),this.h()},l(t){l=a(t,"SPAN",{});var e=i(l);r(o.$$.fragment,e),h=x(e),e.forEach(c),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(o,l,null),y(l,h),$=!0,_||(w=z(Lt.call(null,l)),_=!0)},p(t,l){e=t;const n={};8&l&&(n.activity=e[10]),o.$set(n)},r(){g=l.getBoundingClientRect()},f(){B(l),b()},a(){b(),b=R(l,g,X,{duration:jt})},i(t){$||(v(o.$$.fragment,t),$=!0)},o(t){p(o.$$.fragment,t),$=!1},d(t){t&&c(l),m(o),_=!1,w()}}}function Pt(t,e){let l,n,a;return n=new It({props:{activity:e[10]}}),n.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=j(),s(n.$$.fragment),this.h()},l(t){l=j(),r(n.$$.fragment,t),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(n,t,e),a=!0},p(t,l){e=t;const s={};1&l&&(s.activity=e[10]),n.$set(s)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){p(n.$$.fragment,t),a=!1},d(t){t&&c(l),m(n,t)}}}function Vt(t,e){let l,n,a;return n=new It({props:{activity:e[10]}}),n.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=j(),s(n.$$.fragment),this.h()},l(t){l=j(),r(n.$$.fragment,t),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(n,t,e),a=!0},p(t,l){e=t;const s={};1&l&&(s.activity=e[10]),n.$set(s)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){p(n.$$.fragment,t),a=!1},d(t){t&&c(l),m(n,t)}}}function zt(t){let e,l,d,g,$,_,w;d=new Z({props:{size:t[1].activities.size?"16":"24"}});let b=t[1].activities.size&&Rt(t);return{c(){e=n("div"),l=n("button"),s(d.$$.fragment),g=E(),b&&b.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=i(e);l=a(n,"BUTTON",{class:!0});var s=i(l);r(d.$$.fragment,s),s.forEach(c),g=x(n),b&&b.l(n),n.forEach(c),this.h()},h(){o(l,"class","fab svelte-cy62oh"),Q(l,"small",!!t[1].activities.size),o(e,"class","fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col")},m(n,s){u(n,e,s),y(e,l),f(d,l,null),y(e,g),b&&b.m(e,null),$=!0,_||(w=h(l,"click",t[5]),_=!0)},p(t,n){const s={};2&n&&(s.size=t[1].activities.size?"16":"24"),d.$set(s),2&n&&Q(l,"small",!!t[1].activities.size),t[1].activities.size?b?(b.p(t,n),2&n&&v(b,1)):(b=Rt(t),b.c(),v(b,1),b.m(e,null)):b&&(k(),p(b,1,1,(()=>{b=null})),T())},i(t){$||(v(d.$$.fragment,t),v(b),$=!0)},o(t){p(d.$$.fragment,t),p(b),$=!1},d(t){t&&c(e),m(d),b&&b.d(),_=!1,w()}}}function Bt(t){let e,l,n;function a(e){t[8](e)}let i={};return void 0!==t[2]&&(i.activity=t[2]),e=new bt({props:i}),q.push((()=>F(e,"activity",a))),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,l){f(e,t,l),n=!0},p(t,n){const s={};!l&&4&n&&(l=!0,s.activity=t[2],tt((()=>l=!1))),e.$set(s)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function Rt(t){let e,l,g,$,y;return l=new et({props:{size:"24"}}),{c(){e=n("button"),s(l.$$.fragment),this.h()},l(t){e=a(t,"BUTTON",{class:!0});var n=i(e);r(l.$$.fragment,n),n.forEach(c),this.h()},h(){o(e,"class","p-4 fab svelte-cy62oh")},m(n,s){u(n,e,s),f(l,e,null),g=!0,$||(y=h(e,"click",t[4]),$=!0)},p:d,i(t){g||(v(l.$$.fragment,t),g=!0)},o(t){p(l.$$.fragment,t),g=!1},d(t){t&&c(e),m(l),$=!1,y()}}}function Ut(t){let e,l,s,r,f,d,m,_,w,b,D,I,N,O,A,S,P,V,B,R,C,G=[],X=new Map,K=[],Z=new Map,Q=[],q=new Map,F=t[3];const tt=t=>t[10]._id;for(let n=0;n<F.length;n+=1){let e=At(t,F,n),l=tt(e);X.set(l,G[n]=St(l,e))}let et=t[0].get(it.WAITING,U()).toArray();const lt=t=>t[10]._id;for(let n=0;n<et.length;n+=1){let e=Ot(t,et,n),l=lt(e);Z.set(l,K[n]=Pt(l,e))}let nt=t[0].get(it.DONE,U()).toArray();const st=t=>t[10]._id;for(let n=0;n<nt.length;n+=1){let e=Nt(t,nt,n),l=st(e);q.set(l,Q[n]=Vt(l,e))}const at=[Bt,zt],rt=[];function ct(t,e){return t[2]?0:1}return S=ct(t),P=rt[S]=at[S](t),{c(){e=n("div"),l=n("p"),s=g("Next activities"),r=E(),f=n("div");for(let t=0;t<G.length;t+=1)G[t].c();m=E(),_=n("p"),w=g("Waiting activities"),b=E();for(let t=0;t<K.length;t+=1)K[t].c();D=E(),I=n("p"),N=g("Done activities"),O=E();for(let t=0;t<Q.length;t+=1)Q[t].c();A=E(),P.c(),V=j(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=i(e);l=a(n,"P",{class:!0});var o=i(l);s=$(o,"Next activities"),o.forEach(c),r=x(n),f=a(n,"DIV",{class:!0});var u=i(f);for(let e=0;e<G.length;e+=1)G[e].l(u);u.forEach(c),m=x(n),_=a(n,"P",{class:!0});var h=i(_);w=$(h,"Waiting activities"),h.forEach(c),b=x(n);for(let e=0;e<K.length;e+=1)K[e].l(n);D=x(n),I=a(n,"P",{class:!0});var d=i(I);N=$(d,"Done activities"),d.forEach(c),O=x(n);for(let e=0;e<Q.length;e+=1)Q[e].l(n);n.forEach(c),A=x(t),P.l(t),V=j(),this.h()},h(){o(l,"class","text-xl"),o(f,"class","w-full flex-col inline-flex gap-2"),o(_,"class","text-xl"),o(I,"class","text-xl"),o(e,"class","p-4 flex-col inline-flex gap-2 w-full relative")},m(n,a){u(n,e,a),y(e,l),y(l,s),y(e,r),y(e,f);for(let t=0;t<G.length;t+=1)G[t].m(f,null);y(e,m),y(e,_),y(_,w),y(e,b);for(let t=0;t<K.length;t+=1)K[t].m(e,null);y(e,D),y(e,I),y(I,N),y(e,O);for(let t=0;t<Q.length;t+=1)Q[t].m(e,null);u(n,A,a),rt[S].m(n,a),u(n,V,a),B=!0,R||(C=[z(d=W.call(null,f,{items:t[3],flipDurationMs:jt,customStartEvent:"longpress"})),h(f,"consider",t[7]),h(f,"finalize",t[7])],R=!0)},p(t,[l]){if(72&l){F=t[3],k();for(let t=0;t<G.length;t+=1)G[t].r();G=Y(G,l,tt,1,t,F,X,f,H,St,null,At);for(let t=0;t<G.length;t+=1)G[t].a();T()}d&&M(d.update)&&8&l&&d.update.call(null,{items:t[3],flipDurationMs:jt,customStartEvent:"longpress"}),65&l&&(et=t[0].get(it.WAITING,U()).toArray(),k(),K=Y(K,l,lt,1,t,et,Z,e,J,Pt,D,Ot),T()),65&l&&(nt=t[0].get(it.DONE,U()).toArray(),k(),Q=Y(Q,l,st,1,t,nt,q,e,J,Vt,null,Nt),T());let n=S;S=ct(t),S===n?rt[S].p(t,l):(k(),p(rt[n],1,1,(()=>{rt[n]=null})),T(),P=rt[S],P?P.p(t,l):(P=rt[S]=at[S](t),P.c()),v(P,1),P.m(V.parentNode,V))},i(t){if(!B){for(let t=0;t<F.length;t+=1)v(G[t]);for(let t=0;t<et.length;t+=1)v(K[t]);for(let t=0;t<nt.length;t+=1)v(Q[t]);v(P),B=!0}},o(t){for(let e=0;e<G.length;e+=1)p(G[e]);for(let e=0;e<K.length;e+=1)p(K[e]);for(let e=0;e<Q.length;e+=1)p(Q[e]);p(P),B=!1},d(t){t&&c(e);for(let e=0;e<G.length;e+=1)G[e].d();for(let e=0;e<K.length;e+=1)K[e].d();for(let e=0;e<Q.length;e+=1)Q[e].d();t&&c(A),rt[S].d(t),t&&c(V),R=!1,L(C)}}}const jt=100;function Wt(t,e,l){let n,s;C(t,ot,(t=>l(1,n=t)));let a,i,r=null;G((()=>{s=document.getElementsByTagName("main")[0]}));return t.$$.update=()=>{3&t.$$.dirty&&(l(0,a=n.activities.groupBy((t=>t.state))),l(3,i=a.get(it.READY,U()).toJS()))},[a,n,r,i,()=>{lt(`${ut}/focus`)},()=>{l(2,r=rt())},t=>()=>{l(2,r=n.activities.find((e=>e._id===t)))},({detail:t})=>{l(3,i=t.items),t.info.trigger===K.DRAG_STARTED&&(s.classList.add("overflow-hidden"),s.classList.remove("overflow-y-scroll")),t.info.trigger.includes("dropped")&&(s.classList.add("overflow-y-scroll"),s.classList.remove("overflow-hidden")),t.info.trigger===K.DROPPED_INTO_ZONE&&ct(t.items)},function(t){r=t,l(2,r)}]}export default class extends t{constructor(t){super(),e(this,t,Wt,Ut,l,{})}}
