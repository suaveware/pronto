import{S as t,i as e,s as l,e as n,j as s,c as i,a,m as r,d as c,b as o,f as u,o as f,M as h,K as d,v,r as p,w as m,t as g,g as $,J as y,k as E,n as x,N as _,O as b,P as w,B as k,u as T,h as D,Q as L,T as N,U as I,V as O,W as A,X as V,Y as P,Z as S,_ as z,$ as B,L as U,l as j,a0 as R,a1 as Y,a2 as M,a3 as C,z as W,a4 as X,a5 as G,a6 as J,a7 as K,a8 as Z,a9 as H,aa as Q,ab as q,ac as F,ad as tt}from"../chunks/vendor-9b7a0713.js";import{g as et}from"../chunks/navigation-c804b3db.js";import{R as lt,r as nt,s as st,A as it,a as at,c as rt,e as ct}from"../chunks/state-9db1b88b.js";import{b as ot}from"../chunks/paths-7dc55c62.js";function ut(t,e,l){const n=t.slice();return n[14]=e[l],n}function ft(t,e,l){const n=t.slice();return n[11]=e[l],n[13]=l,n}function ht(t,e,l){const n=t.slice();return n[17]=e[l],n}function dt(t){let e,l,g,$,y;return l=new I({props:{size:"24"}}),{c(){e=n("button"),s(l.$$.fragment),this.h()},l(t){e=i(t,"BUTTON",{class:!0});var n=a(e);r(l.$$.fragment,n),n.forEach(c),this.h()},h(){o(e,"class","fixed top-4 right-4")},m(n,s){u(n,e,s),f(l,e,null),g=!0,$||(y=h(e,"click",t[2]),$=!0)},p:d,i(t){g||(v(l.$$.fragment,t),g=!0)},o(t){p(l.$$.fragment,t),g=!1},d(t){t&&c(e),m(l),$=!1,y()}}}function vt(t){let e,l,s=t[17]+"";return{c(){e=n("option"),l=g(s),this.h()},l(t){e=i(t,"OPTION",{});var n=a(e);l=$(n,s),n.forEach(c),this.h()},h(){e.__value=t[17],e.value=e.__value},m(t,n){u(t,e,n),y(e,l)},p:d,d(t){t&&c(e)}}}function pt(t){let e,l=new Array(31).fill(0).map(xt),s=[];for(let n=0;n<l.length;n+=1)s[n]=$t(ut(t,l,n));return{c(){e=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=i(t,"DIV",{class:!0});var l=a(e);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(c),this.h()},h(){o(e,"class","inline-flex flex-wrap gap-2")},m(t,l){u(t,e,l);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(t,n){if(2&n){let i;for(l=new Array(31).fill(0).map(xt),i=0;i<l.length;i+=1){const a=ut(t,l,i);s[i]?s[i].p(a,n):(s[i]=$t(a),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(t){t&&c(e),L(s,t)}}}function mt(t){let e,l=V.weekdays("long",{locale:"en"}),s=[];for(let n=0;n<l.length;n+=1)s[n]=yt(ft(t,l,n));return{c(){e=n("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=i(t,"DIV",{class:!0});var l=a(e);for(let e=0;e<s.length;e+=1)s[e].l(l);l.forEach(c),this.h()},h(){o(e,"class","inline-flex flex-wrap gap-2")},m(t,l){u(t,e,l);for(let n=0;n<s.length;n+=1)s[n].m(e,null)},p(t,n){if(2&n){let i;for(l=V.weekdays("long",{locale:"en"}),i=0;i<l.length;i+=1){const a=ft(t,l,i);s[i]?s[i].p(a,n):(s[i]=yt(a),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(t){t&&c(e),L(s,t)}}}function gt(t){let e,l,s;return{c(){e=n("input"),l=E(),s=n("input"),this.h()},l(t){e=i(t,"INPUT",{class:!0,type:!0}),l=x(t),s=i(t,"INPUT",{class:!0,type:!0}),this.h()},h(){o(e,"class","form-input svelte-kbxu48"),o(e,"type","date"),o(s,"class","form-input svelte-kbxu48"),o(s,"type","time")},m(t,n){u(t,e,n),u(t,l,n),u(t,s,n)},p:d,d(t){t&&c(e),t&&c(l),t&&c(s)}}}function $t(t){let e,l,s,r,f,d,v,p=t[14]+"";return{c(){e=n("label"),l=n("input"),s=E(),r=g(p),f=E(),this.h()},l(t){e=i(t,"LABEL",{});var n=a(e);l=i(n,"INPUT",{type:!0}),s=x(n),r=$(n,p),f=x(n),n.forEach(c),this.h()},h(){o(l,"type","checkbox"),l.__value=t[14],l.value=l.__value,t[9][1].push(l)},m(n,i){u(n,e,i),y(e,l),l.checked=~t[1].recurrence.monthDays.indexOf(l.__value),y(e,s),y(e,r),y(e,f),d||(v=h(l,"change",t[10]),d=!0)},p(t,e){2&e&&(l.checked=~t[1].recurrence.monthDays.indexOf(l.__value))},d(n){n&&c(e),t[9][1].splice(t[9][1].indexOf(l),1),d=!1,v()}}}function yt(t){let e,l,s,r,f,d,v,p=t[11]+"";return{c(){e=n("label"),l=n("input"),s=E(),r=g(p),f=E(),this.h()},l(t){e=i(t,"LABEL",{});var n=a(e);l=i(n,"INPUT",{type:!0}),s=x(n),r=$(n,p),f=x(n),n.forEach(c),this.h()},h(){o(l,"type","checkbox"),l.__value=t[13]+1,l.value=l.__value,t[9][0].push(l)},m(n,i){u(n,e,i),y(e,l),l.checked=~t[1].recurrence.weekdays.indexOf(l.__value),y(e,s),y(e,r),y(e,f),d||(v=h(l,"change",t[8]),d=!0)},p(t,e){2&e&&(l.checked=~t[1].recurrence.weekdays.indexOf(l.__value))},d(n){n&&c(e),t[9][0].splice(t[9][0].indexOf(l),1),d=!1,v()}}}function Et(t){var e;let l,s,r,f,d,m,I,O,A,V,P,S,z,B,U,j,R,Y,M,C=t[0]._id?"Save":"Add",W=(null==(e=t[0])?void 0:e._id)&&dt(t),X=Object.values(lt),G=[];for(let n=0;n<X.length;n+=1)G[n]=vt(ht(t,X,n));function J(t,e){return t[1].recurrence.type===lt.ONCE?gt:t[1].recurrence.type===lt.EVERY_WEEK_DAYS?mt:t[1].recurrence.type===lt.EVERY_MONTH_DAYS?pt:void 0}let K=J(t),Z=K&&K(t);return{c(){l=n("div"),W&&W.c(),s=E(),r=n("input"),f=E(),d=n("textarea"),m=E(),I=n("div"),O=n("select");for(let t=0;t<G.length;t+=1)G[t].c();A=E(),Z&&Z.c(),V=E(),P=n("div"),S=n("button"),z=g("Cancel"),B=E(),U=n("button"),j=g(C),this.h()},l(t){l=i(t,"DIV",{class:!0});var e=a(l);W&&W.l(e),s=x(e),r=i(e,"INPUT",{class:!0,type:!0,placeholder:!0}),f=x(e),d=i(e,"TEXTAREA",{class:!0,placeholder:!0}),a(d).forEach(c),m=x(e),I=i(e,"DIV",{class:!0});var n=a(I);O=i(n,"SELECT",{class:!0});var o=a(O);for(let l=0;l<G.length;l+=1)G[l].l(o);o.forEach(c),A=x(n),Z&&Z.l(n),n.forEach(c),V=x(e),P=i(e,"DIV",{class:!0});var u=a(P);S=i(u,"BUTTON",{class:!0});var h=a(S);z=$(h,"Cancel"),h.forEach(c),B=x(u),U=i(u,"BUTTON",{class:!0});var v=a(U);j=$(v,C),v.forEach(c),u.forEach(c),e.forEach(c),this.h()},h(){o(r,"class","w-full p-1 form-input svelte-kbxu48"),o(r,"type","text"),o(r,"placeholder","Title"),r.autofocus=!0,o(d,"class","w-full h-40 p-1 form-input font-mono svelte-kbxu48"),o(d,"placeholder","Description text"),o(O,"class","form-input svelte-kbxu48"),void 0===t[1].recurrence.type&&_((()=>t[7].call(O))),o(I,"class"," w-full inline-flex gap-2 flex-wrap"),o(S,"class","form-button svelte-kbxu48"),o(U,"class","form-button svelte-kbxu48"),o(P,"class","box-border w-full bottom-2 inline-flex justify-evenly mb-4 mt-4"),o(l,"class","fixed z-50 right-0 left-0 bottom-0 top-0 p-4 inline-flex justify-end flex-col gap-2 bg-white")},m(e,n){u(e,l,n),W&&W.m(l,null),y(l,s),y(l,r),b(r,t[1].title),y(l,f),y(l,d),b(d,t[1].description),y(l,m),y(l,I),y(I,O);for(let t=0;t<G.length;t+=1)G[t].m(O,null);w(O,t[1].recurrence.type),y(I,A),Z&&Z.m(I,null),y(l,V),y(l,P),y(P,S),y(S,z),y(P,B),y(P,U),y(U,j),R=!0,r.focus(),Y||(M=[h(r,"input",t[5]),h(d,"input",t[6]),h(O,"change",t[7]),h(S,"click",t[3]),h(U,"click",t[4])],Y=!0)},p(t,[e]){var n;if((null==(n=t[0])?void 0:n._id)?W?(W.p(t,e),1&e&&v(W,1)):(W=dt(t),W.c(),v(W,1),W.m(l,s)):W&&(k(),p(W,1,1,(()=>{W=null})),T()),2&e&&r.value!==t[1].title&&b(r,t[1].title),2&e&&b(d,t[1].description),0&e){let l;for(X=Object.values(lt),l=0;l<X.length;l+=1){const n=ht(t,X,l);G[l]?G[l].p(n,e):(G[l]=vt(n),G[l].c(),G[l].m(O,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=X.length}2&e&&w(O,t[1].recurrence.type),K===(K=J(t))&&Z?Z.p(t,e):(Z&&Z.d(1),Z=K&&K(t),Z&&(Z.c(),Z.m(I,null))),(!R||1&e)&&C!==(C=t[0]._id?"Save":"Add")&&D(j,C)},i(t){R||(v(W),R=!0)},o(t){p(W),R=!1},d(t){t&&c(l),W&&W.d(),L(G,t),Z&&Z.d(),Y=!1,N(M)}}}const xt=(t,e)=>e+1;function _t(t,e,l){let{activity:n}=e,s=n.toJS();const i=[[],[]];return t.$$set=t=>{"activity"in t&&l(0,n=t.activity)},[n,s,()=>{nt(n),l(0,n=null)},()=>{l(0,n=null)},()=>{st(n.merge(s)),l(0,n=null)},function(){s.title=this.value,l(1,s)},function(){s.description=this.value,l(1,s)},function(){s.recurrence.type=O(this),l(1,s)},function(){s.recurrence.weekdays=A(i[0],this.__value,this.checked),l(1,s)},i,function(){s.recurrence.monthDays=A(i[1],this.__value,this.checked),l(1,s)}]}class bt extends t{constructor(t){super(),e(this,t,_t,Et,l,{activity:0})}}function wt(t){let e,l,s,r,f,v,p,m,_,b=t[0].title+"",w=t[0].state+"";return{c(){e=n("div"),l=n("div"),s=n("div"),r=g(b),f=E(),v=n("div"),p=g(w),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=a(e);l=i(n,"DIV",{class:!0});var o=a(l);s=i(o,"DIV",{});var u=a(s);r=$(u,b),u.forEach(c),f=x(o),v=i(o,"DIV",{});var h=a(v);p=$(h,w),h.forEach(c),o.forEach(c),n.forEach(c),this.h()},h(){o(l,"class","inline-flex justify-between items-center w-full"),o(e,"class","p-2 shadow-md border rounded")},m(n,i){u(n,e,i),y(e,l),y(l,s),y(s,r),y(l,f),y(l,v),y(v,p),m||(_=h(e,"click",t[1]),m=!0)},p(t,[e]){1&e&&b!==(b=t[0].title+"")&&D(r,b),1&e&&w!==(w=t[0].state+"")&&D(p,w)},i:d,o:d,d(t){t&&c(e),m=!1,_()}}}function kt(t,e,l){let{activity:n}=e;return t.$$set=t=>{"activity"in t&&l(0,n=t.activity)},[n,function(e){P.call(this,t,e)}]}class Tt extends t{constructor(t){super(),e(this,t,kt,wt,l,{activity:0})}}function Dt(t,e=400){let l,n;const s=()=>{clearTimeout(l)},i=t=>{const e=t.touches?t.touches[0]:t;let s=e.clientX,i=e.clientY,a=s-n.x,r=i-n.y;a*a+r*r>50&&clearTimeout(l)},a=r=>{const c=r.touches?r.touches[0]:r;n={x:c.clientX,y:c.clientY},l=setTimeout((()=>{t.removeEventListener("mousedown",a),t.removeEventListener("touchStart",a),t.removeEventListener("mouseup",s),t.removeEventListener("touchend",s),t.dispatchEvent(new CustomEvent("longpress",{detail:{startDragPosition:n}}))}),e),t.addEventListener("mouseup",s),t.addEventListener("mousemove",i),t.addEventListener("touchend",s),t.addEventListener("touchmove",i)};return t.addEventListener("mousedown",a),t.addEventListener("touchstart",a),{update(t){e=t},destroy(){t.removeEventListener("mousedown",a),t.removeEventListener("touchStart",a),t.removeEventListener("mouseup",s),t.removeEventListener("touchend",s),t.removeEventListener("mousemove",i)}}}function Lt(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Nt(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function It(t,e,l){const n=t.slice();return n[10]=e[l],n[12]=l,n}function Ot(t,e){let l,o,h,g,$,_,b,w=d;return o=new Tt({props:{activity:e[10]}}),o.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=n("span"),s(o.$$.fragment),h=E(),this.h()},l(t){l=i(t,"SPAN",{});var e=a(l);r(o.$$.fragment,e),h=x(e),e.forEach(c),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(o,l,null),y(l,h),$=!0,_||(b=S(Dt.call(null,l)),_=!0)},p(t,l){e=t;const n={};8&l&&(n.activity=e[10]),o.$set(n)},r(){g=l.getBoundingClientRect()},f(){z(l),w()},a(){w(),w=B(l,g,X,{duration:Ut})},i(t){$||(v(o.$$.fragment,t),$=!0)},o(t){p(o.$$.fragment,t),$=!1},d(t){t&&c(l),m(o),_=!1,b()}}}function At(t,e){let l,n,i;return n=new Tt({props:{activity:e[10]}}),n.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=j(),s(n.$$.fragment),this.h()},l(t){l=j(),r(n.$$.fragment,t),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(n,t,e),i=!0},p(t,l){e=t;const s={};1&l&&(s.activity=e[10]),n.$set(s)},i(t){i||(v(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){t&&c(l),m(n,t)}}}function Vt(t,e){let l,n,i;return n=new Tt({props:{activity:e[10]}}),n.$on("click",(function(){M(e[6](e[10]._id))&&e[6](e[10]._id).apply(this,arguments)})),{key:t,first:null,c(){l=j(),s(n.$$.fragment),this.h()},l(t){l=j(),r(n.$$.fragment,t),this.h()},h(){this.first=l},m(t,e){u(t,l,e),f(n,t,e),i=!0},p(t,l){e=t;const s={};1&l&&(s.activity=e[10]),n.$set(s)},i(t){i||(v(n.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),i=!1},d(t){t&&c(l),m(n,t)}}}function Pt(t){let e,l,d,g,$,_,b;d=new Z({props:{size:t[1].activities.size?"16":"24"}});let w=t[1].activities.size&&zt(t);return{c(){e=n("div"),l=n("button"),s(d.$$.fragment),g=E(),w&&w.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=a(e);l=i(n,"BUTTON",{class:!0});var s=a(l);r(d.$$.fragment,s),s.forEach(c),g=x(n),w&&w.l(n),n.forEach(c),this.h()},h(){o(l,"class","fab svelte-cy62oh"),H(l,"small",!!t[1].activities.size),o(e,"class","fixed bottom-4 right-4 gap-3 items-center inline-flex flex-col")},m(n,s){u(n,e,s),y(e,l),f(d,l,null),y(e,g),w&&w.m(e,null),$=!0,_||(b=h(l,"click",t[5]),_=!0)},p(t,n){const s={};2&n&&(s.size=t[1].activities.size?"16":"24"),d.$set(s),2&n&&H(l,"small",!!t[1].activities.size),t[1].activities.size?w?(w.p(t,n),2&n&&v(w,1)):(w=zt(t),w.c(),v(w,1),w.m(e,null)):w&&(k(),p(w,1,1,(()=>{w=null})),T())},i(t){$||(v(d.$$.fragment,t),v(w),$=!0)},o(t){p(d.$$.fragment,t),p(w),$=!1},d(t){t&&c(e),m(d),w&&w.d(),_=!1,b()}}}function St(t){let e,l,n;function i(e){t[8](e)}let a={};return void 0!==t[2]&&(a.activity=t[2]),e=new bt({props:a}),Q.push((()=>q(e,"activity",i))),{c(){s(e.$$.fragment)},l(t){r(e.$$.fragment,t)},m(t,l){f(e,t,l),n=!0},p(t,n){const s={};!l&&4&n&&(l=!0,s.activity=t[2],F((()=>l=!1))),e.$set(s)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function zt(t){let e,l,g,$,y;return l=new tt({props:{size:"24"}}),{c(){e=n("button"),s(l.$$.fragment),this.h()},l(t){e=i(t,"BUTTON",{class:!0});var n=a(e);r(l.$$.fragment,n),n.forEach(c),this.h()},h(){o(e,"class","p-4 fab svelte-cy62oh")},m(n,s){u(n,e,s),f(l,e,null),g=!0,$||(y=h(e,"click",t[4]),$=!0)},p:d,i(t){g||(v(l.$$.fragment,t),g=!0)},o(t){p(l.$$.fragment,t),g=!1},d(t){t&&c(e),m(l),$=!1,y()}}}function Bt(t){let e,l,s,r,f,d,m,_,b,w,D,L,I,O,A,V,P,z,B,C,W,X=[],K=new Map,Z=[],H=new Map,Q=[],q=new Map,F=t[3];const tt=t=>t[10]._id;for(let n=0;n<F.length;n+=1){let e=It(t,F,n),l=tt(e);K.set(l,X[n]=Ot(l,e))}let et=t[0].get(it.WAITING,U()).toArray();const lt=t=>t[10]._id;for(let n=0;n<et.length;n+=1){let e=Nt(t,et,n),l=lt(e);H.set(l,Z[n]=At(l,e))}let nt=t[0].get(it.DONE,U()).toArray();const st=t=>t[10]._id;for(let n=0;n<nt.length;n+=1){let e=Lt(t,nt,n),l=st(e);q.set(l,Q[n]=Vt(l,e))}const at=[St,Pt],rt=[];function ct(t,e){return t[2]?0:1}return V=ct(t),P=rt[V]=at[V](t),{c(){e=n("div"),l=n("p"),s=g("Next activities"),r=E(),f=n("div");for(let t=0;t<X.length;t+=1)X[t].c();m=E(),_=n("p"),b=g("Waiting activities"),w=E();for(let t=0;t<Z.length;t+=1)Z[t].c();D=E(),L=n("p"),I=g("Done activities"),O=E();for(let t=0;t<Q.length;t+=1)Q[t].c();A=E(),P.c(),z=j(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=a(e);l=i(n,"P",{class:!0});var o=a(l);s=$(o,"Next activities"),o.forEach(c),r=x(n),f=i(n,"DIV",{class:!0});var u=a(f);for(let e=0;e<X.length;e+=1)X[e].l(u);u.forEach(c),m=x(n),_=i(n,"P",{class:!0});var h=a(_);b=$(h,"Waiting activities"),h.forEach(c),w=x(n);for(let e=0;e<Z.length;e+=1)Z[e].l(n);D=x(n),L=i(n,"P",{class:!0});var d=a(L);I=$(d,"Done activities"),d.forEach(c),O=x(n);for(let e=0;e<Q.length;e+=1)Q[e].l(n);n.forEach(c),A=x(t),P.l(t),z=j(),this.h()},h(){o(l,"class","text-xl"),o(f,"class","w-full flex-col inline-flex gap-2"),o(_,"class","text-xl"),o(L,"class","text-xl"),o(e,"class","p-4 flex-col inline-flex gap-2 w-full relative")},m(n,i){u(n,e,i),y(e,l),y(l,s),y(e,r),y(e,f);for(let t=0;t<X.length;t+=1)X[t].m(f,null);y(e,m),y(e,_),y(_,b),y(e,w);for(let t=0;t<Z.length;t+=1)Z[t].m(e,null);y(e,D),y(e,L),y(L,I),y(e,O);for(let t=0;t<Q.length;t+=1)Q[t].m(e,null);u(n,A,i),rt[V].m(n,i),u(n,z,i),B=!0,C||(W=[S(d=R.call(null,f,{items:t[3],flipDurationMs:Ut,customStartEvent:"longpress"})),h(f,"consider",t[7]),h(f,"finalize",t[7])],C=!0)},p(t,[l]){if(72&l){F=t[3],k();for(let t=0;t<X.length;t+=1)X[t].r();X=Y(X,l,tt,1,t,F,K,f,G,Ot,null,It);for(let t=0;t<X.length;t+=1)X[t].a();T()}d&&M(d.update)&&8&l&&d.update.call(null,{items:t[3],flipDurationMs:Ut,customStartEvent:"longpress"}),65&l&&(et=t[0].get(it.WAITING,U()).toArray(),k(),Z=Y(Z,l,lt,1,t,et,H,e,J,At,D,Nt),T()),65&l&&(nt=t[0].get(it.DONE,U()).toArray(),k(),Q=Y(Q,l,st,1,t,nt,q,e,J,Vt,null,Lt),T());let n=V;V=ct(t),V===n?rt[V].p(t,l):(k(),p(rt[n],1,1,(()=>{rt[n]=null})),T(),P=rt[V],P?P.p(t,l):(P=rt[V]=at[V](t),P.c()),v(P,1),P.m(z.parentNode,z))},i(t){if(!B){for(let t=0;t<F.length;t+=1)v(X[t]);for(let t=0;t<et.length;t+=1)v(Z[t]);for(let t=0;t<nt.length;t+=1)v(Q[t]);v(P),B=!0}},o(t){for(let e=0;e<X.length;e+=1)p(X[e]);for(let e=0;e<Z.length;e+=1)p(Z[e]);for(let e=0;e<Q.length;e+=1)p(Q[e]);p(P),B=!1},d(t){t&&c(e);for(let e=0;e<X.length;e+=1)X[e].d();for(let e=0;e<Z.length;e+=1)Z[e].d();for(let e=0;e<Q.length;e+=1)Q[e].d();t&&c(A),rt[V].d(t),t&&c(z),C=!1,N(W)}}}const Ut=100;function jt(t,e,l){let n,s;C(t,ct,(t=>l(1,n=t)));let i,a,r=null;W((()=>{s=document.getElementsByTagName("main")[0]}));return t.$$.update=()=>{3&t.$$.dirty&&(l(0,i=n.activities.groupBy((t=>t.state))),l(3,a=i.get(it.READY,U()).toJS()))},[i,n,r,a,()=>{et(`${ot}/focus`)},()=>{l(2,r=at())},t=>()=>{l(2,r=n.activities.find((e=>e._id===t)))},({detail:t})=>{l(3,a=t.items),t.info.trigger===K.DRAG_STARTED&&(s.classList.add("overflow-hidden"),s.classList.remove("overflow-y-scroll")),t.info.trigger.includes("dropped")&&(s.classList.add("overflow-y-scroll"),s.classList.remove("overflow-hidden")),t.info.trigger===K.DROPPED_INTO_ZONE&&rt(t.items)},function(t){r=t,l(2,r)}]}export default class extends t{constructor(t){super(),e(this,t,jt,Bt,l,{})}}
