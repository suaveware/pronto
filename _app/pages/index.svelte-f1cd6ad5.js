var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&r(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&r(e,l,t[l]);return e};import{S as i,i as c,s as u,e as f,t as h,c as d,a as p,g as m,d as v,b as $,f as g,J as b,h as y,k as x,n as w,M as E,N as k,O as D,K as L,P as I,B as T,Q as A,T as O,E as V,F as j,x as G,u as _,U as z,j as N,m as S,o as P,V as R,W as B,X as M,v as W,Y,r as q,w as C,Z as J,_ as F,$ as U,l as H,a0 as X,a1 as K,a2 as Z,D as Q,a3 as ee,a4 as te,a5 as le,a6 as ae,a7 as ne,L as se,a8 as re,a9 as oe,aa as ie,ab as ce,ac as ue,ad as fe,ae as he,af as de,ag as pe,ah as me,ai as ve,aj as $e}from"../chunks/vendor-7f99f88b.js";import{g as ge}from"../chunks/navigation-c804b3db.js";import{C as be,R as ye,r as xe,s as we,A as Ee,a as ke,b as De,c as Le}from"../chunks/state-4b2a9b4b.js";import{b as Ie}from"../chunks/paths-7dc55c62.js";function Te(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(a){t=d(a,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","grid-username")},m(e,a){g(e,t,a),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Ae(e){let t,l,a,n,s,r,o=e[1]&&Te(e);return{c(){t=f("div"),o&&o.c(),l=x(),a=f("input"),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);o&&o.l(n),l=w(n),a=d(n,"INPUT",{id:!0,placeholder:!0,class:!0}),n.forEach(v),this.h()},h(){$(a,"id","grid-username"),$(a,"placeholder",e[2]),a.autofocus=e[3],$(a,"class","svelte-lgtjj4"),E(a,"regular",!(e[4]||e[5])),E(a,"small",e[4]),E(a,"large",e[5]),$(t,"class",n="w-full "+e[7].class+" svelte-lgtjj4")},m(n,i){g(n,t,i),o&&o.m(t,null),b(t,l),b(t,a),k(a,e[0]),s||(r=[D(a,"focus",e[6]),D(a,"change",e[10]),D(a,"focus",e[11]),D(a,"blur",e[12]),D(a,"keyup",e[13]),D(a,"input",e[14])],s=!0)},p(e,[s]){e[1]?o?o.p(e,s):(o=Te(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),4&s&&$(a,"placeholder",e[2]),8&s&&(a.autofocus=e[3]),1&s&&a.value!==e[0]&&k(a,e[0]),48&s&&E(a,"regular",!(e[4]||e[5])),16&s&&E(a,"small",e[4]),32&s&&E(a,"large",e[5]),128&s&&n!==(n="w-full "+e[7].class+" svelte-lgtjj4")&&$(t,"class",n)},i:L,o:L,d(e){e&&v(t),o&&o.d(),s=!1,I(r)}}}function Oe(e,t,l){let{type:a="text"}=t,{label:n=""}=t,{placeholder:s=""}=t,{autofocus:r=!1}=t,{value:o=""}=t,{scrollOnFocus:i=!1}=t,{small:c=!1}=t,{large:u=!1}=t;return e.$$set=e=>{l(7,t=T(T({},t),A(e))),"type"in e&&l(8,a=e.type),"label"in e&&l(1,n=e.label),"placeholder"in e&&l(2,s=e.placeholder),"autofocus"in e&&l(3,r=e.autofocus),"value"in e&&l(0,o=e.value),"scrollOnFocus"in e&&l(9,i=e.scrollOnFocus),"small"in e&&l(4,c=e.small),"large"in e&&l(5,u=e.large)},t=A(t),[o,n,s,r,c,u,e=>{e.target.type=a,i&&e.target.scrollIntoView()},t,a,i,function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(){o=this.value,l(0,o)}]}class Ve extends i{constructor(e){super(),c(this,e,Oe,Ae,u,{type:8,label:1,placeholder:2,autofocus:3,value:0,scrollOnFocus:9,small:4,large:5})}}function je(e){let t,l;return{c(){t=f("h6"),l=h(e[0]),this.h()},l(a){t=d(a,"H6",{class:!0});var n=p(t);l=m(n,e[0]),n.forEach(v),this.h()},h(){$(t,"class","text-blueGray-600 text-sm mt-2 mb-6 font-bold uppercase")},m(e,a){g(e,t,a),b(t,l)},p(e,t){1&t&&y(l,e[0])},d(e){e&&v(t)}}}function Ge(e){let t,l,a,n,s,r=e[0]&&je(e);const o=e[3].default,i=V(o,e,e[2],null);return{c(){t=f("div"),r&&r.c(),l=x(),a=f("div"),i&&i.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);r&&r.l(n),l=w(n),a=d(n,"DIV",{class:!0});var s=p(a);i&&i.l(s),s.forEach(v),n.forEach(v),this.h()},h(){$(a,"class","px-4 inline-flex w-full flex-col flex-wrap gap-4"),$(t,"class",n=e[1].class)},m(e,n){g(e,t,n),r&&r.m(t,null),b(t,l),b(t,a),i&&i.m(a,null),s=!0},p(e,[a]){e[0]?r?r.p(e,a):(r=je(e),r.c(),r.m(t,l)):r&&(r.d(1),r=null),i&&i.p&&(!s||4&a)&&j(i,o,e,e[2],s?a:-1,null,null),(!s||2&a&&n!==(n=e[1].class))&&$(t,"class",n)},i(e){s||(G(i,e),s=!0)},o(e){_(i,e),s=!1},d(e){e&&v(t),r&&r.d(),i&&i.d(e)}}}function _e(e,t,l){let{$$slots:a={},$$scope:n}=t,{title:s}=t;return e.$$set=e=>{l(1,t=T(T({},t),A(e))),"title"in e&&l(0,s=e.title),"$$scope"in e&&l(2,n=e.$$scope)},t=A(t),[s,t,n,a]}class ze extends i{constructor(e){super(),c(this,e,_e,Ge,u,{title:0})}}function Ne(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(a){t=d(a,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","grid-about-me")},m(e,a){g(e,t,a),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Se(e){let t,l,a,n,s,r,o=e[1]&&Ne(e);return{c(){t=f("div"),o&&o.c(),l=x(),a=f("textarea"),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);o&&o.l(n),l=w(n),a=d(n,"TEXTAREA",{id:!0,class:!0,rows:!0,placeholder:!0}),p(a).forEach(v),n.forEach(v),this.h()},h(){$(a,"id","grid-about-me"),$(a,"class","resize-none border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"),$(a,"rows",e[2]),$(a,"placeholder",e[3]),$(t,"class",n="relative w-full "+e[4].class)},m(n,i){g(n,t,i),o&&o.m(t,null),b(t,l),b(t,a),k(a,e[0]),s||(r=D(a,"input",e[5]),s=!0)},p(e,[s]){e[1]?o?o.p(e,s):(o=Ne(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),4&s&&$(a,"rows",e[2]),8&s&&$(a,"placeholder",e[3]),1&s&&k(a,e[0]),16&s&&n!==(n="relative w-full "+e[4].class)&&$(t,"class",n)},i:L,o:L,d(e){e&&v(t),o&&o.d(),s=!1,r()}}}function Pe(e,t,l){let{label:a=""}=t,{rows:n}=t,{value:s=""}=t,{placeholder:r=""}=t;return e.$$set=e=>{l(4,t=T(T({},t),A(e))),"label"in e&&l(1,a=e.label),"rows"in e&&l(2,n=e.rows),"value"in e&&l(0,s=e.value),"placeholder"in e&&l(3,r=e.placeholder)},t=A(t),[s,a,n,r,t,function(){s=this.value,l(0,s)}]}class Re extends i{constructor(e){super(),c(this,e,Pe,Se,u,{label:1,rows:2,value:0,placeholder:3})}}function Be(e){let t,l,a,n,s;const r=e[8].default,o=V(r,e,e[7],null);return{c(){t=f("button"),o&&o.c(),this.h()},l(e){t=d(e,"BUTTON",{class:!0,type:!0});var l=p(t);o&&o.l(l),l.forEach(v),this.h()},h(){$(t,"class",l="base "+e[6].class+" svelte-1jtuvbi"),$(t,"type","button"),E(t,"filled",!e[2]),E(t,"outlined",e[2]),E(t,"pressed",e[1]&&e[0]),E(t,"regular",!(e[3]||e[5])),E(t,"small",e[3]),E(t,"extrasmall",e[4]),E(t,"large",e[5])},m(l,r){g(l,t,r),o&&o.m(t,null),a=!0,n||(s=[D(t,"click",e[10]),D(t,"click",e[9])],n=!0)},p(e,[n]){o&&o.p&&(!a||128&n)&&j(o,r,e,e[7],a?n:-1,null,null),(!a||64&n&&l!==(l="base "+e[6].class+" svelte-1jtuvbi"))&&$(t,"class",l),68&n&&E(t,"filled",!e[2]),68&n&&E(t,"outlined",e[2]),67&n&&E(t,"pressed",e[1]&&e[0]),104&n&&E(t,"regular",!(e[3]||e[5])),72&n&&E(t,"small",e[3]),80&n&&E(t,"extrasmall",e[4]),96&n&&E(t,"large",e[5])},i(e){a||(G(o,e),a=!0)},o(e){_(o,e),a=!1},d(e){e&&v(t),o&&o.d(e),n=!1,I(s)}}}function Me(e,t,l){let{$$slots:a={},$$scope:n}=t,{toggle:s=!1}=t,{pressed:r=!1}=t,{outlined:o=!1}=t,{small:i=!1}=t,{extrasmall:c=!1}=t,{large:u=!1}=t;return e.$$set=e=>{l(6,t=T(T({},t),A(e))),"toggle"in e&&l(1,s=e.toggle),"pressed"in e&&l(0,r=e.pressed),"outlined"in e&&l(2,o=e.outlined),"small"in e&&l(3,i=e.small),"extrasmall"in e&&l(4,c=e.extrasmall),"large"in e&&l(5,u=e.large),"$$scope"in e&&l(7,n=e.$$scope)},t=A(t),[r,s,o,i,c,u,t,n,a,function(t){O.call(this,e,t)},()=>{l(0,r=s&&!r)}]}class We extends i{constructor(e){super(),c(this,e,Me,Be,u,{toggle:1,pressed:0,outlined:2,small:3,extrasmall:4,large:5})}}const Ye=e=>{const t=t=>{!e||e.contains(t.target)||t.defaultPrevented||e.dispatchEvent(new CustomEvent("clickedOutside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}};function qe(e,t,l){const a=e.slice();return a[9]=t[l],a}function Ce(e){let t,l;return{c(){t=f("label"),l=h(e[2]),this.h()},l(a){t=d(a,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[2]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","form-select")},m(e,a){g(e,t,a),b(t,l)},p(e,t){4&t&&y(l,e[2])},d(e){e&&v(t)}}}function Je(e,t){let l,a,n,s,r,o,i=t[9].label+"";function c(){return t[6](t[9])}return{key:e,first:null,c(){l=f("div"),a=h(i),n=x(),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);a=m(t,i),n=w(t),t.forEach(v),this.h()},h(){$(l,"class",s="p-2 box-border hover:text-white pointer-events-auto hover:bg-teal-500 "+(t[0]===t[9].value?"bg-teal-500 text-white":"bg-white")),this.first=l},m(e,t){g(e,l,t),b(l,a),b(l,n),r||(o=D(l,"click",c),r=!0)},p(e,n){t=e,8&n&&i!==(i=t[9].label+"")&&y(a,i),9&n&&s!==(s="p-2 box-border hover:text-white pointer-events-auto hover:bg-teal-500 "+(t[0]===t[9].value?"bg-teal-500 text-white":"bg-white"))&&$(l,"class",s)},d(e){e&&v(l),r=!1,o()}}}function Fe(e){var t;let l,a,n,s,r,o,i,c,u,E,k,L,T,A,O=((null==(t=e[3].find(e[5]))?void 0:t.label)||"")+"",V=[],j=new Map,Y=e[2]&&Ce(e);i=new z({props:{size:"24",class:"text-blueGray-600"}});let q=e[3];const C=e=>e[9].value;for(let f=0;f<q.length;f+=1){let t=qe(e,q,f),l=C(t);j.set(l,V[f]=Je(l,t))}return{c(){l=f("div"),Y&&Y.c(),a=x(),n=f("div"),s=f("div"),r=h(O),o=x(),N(i.$$.fragment),c=x(),u=f("div");for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);Y&&Y.l(t),a=w(t),n=d(t,"DIV",{id:!0,class:!0});var f=p(n);s=d(f,"DIV",{});var h=p(s);r=m(h,O),h.forEach(v),o=w(f),S(i.$$.fragment,f),c=w(f),u=d(f,"DIV",{class:!0});var $=p(u);for(let l=0;l<V.length;l+=1)V[l].l($);$.forEach(v),f.forEach(v),t.forEach(v),this.h()},h(){$(u,"class",E="absolute box-border bg-white top-full rounded translate-y-2 left-0 w-full shadow z-30 transition-all duration-75 "+(e[1]?"opacity-100":"hidden opacity-0")),$(n,"id","form-select"),$(n,"class","relative rounded bg-white inline-flex gap-4 items-center justify-between shadow px-3 py-2 border text-blueGray-600 cursor-pointer box-border"),$(l,"class",k="inline-flex flex-col w-full "+e[4].class)},m(t,f){g(t,l,f),Y&&Y.m(l,null),b(l,a),b(l,n),b(n,s),b(s,r),b(n,o),P(i,n,null),b(n,c),b(n,u);for(let e=0;e<V.length;e+=1)V[e].m(u,null);L=!0,T||(A=[R(Ye.call(null,n)),D(n,"clickedOutside",e[7]),D(n,"click",e[8])],T=!0)},p(e,[t]){var n;e[2]?Y?Y.p(e,t):(Y=Ce(e),Y.c(),Y.m(l,a)):Y&&(Y.d(1),Y=null),(!L||9&t)&&O!==(O=((null==(n=e[3].find(e[5]))?void 0:n.label)||"")+"")&&y(r,O),9&t&&(q=e[3],V=B(V,t,C,1,e,q,j,u,M,Je,null,qe)),(!L||2&t&&E!==(E="absolute box-border bg-white top-full rounded translate-y-2 left-0 w-full shadow z-30 transition-all duration-75 "+(e[1]?"opacity-100":"hidden opacity-0")))&&$(u,"class",E),(!L||16&t&&k!==(k="inline-flex flex-col w-full "+e[4].class))&&$(l,"class",k)},i(e){L||(G(i.$$.fragment,e),L=!0)},o(e){_(i.$$.fragment,e),L=!1},d(e){e&&v(l),Y&&Y.d(),W(i);for(let t=0;t<V.length;t+=1)V[t].d();T=!1,I(A)}}}function Ue(e,t,l){let{value:a=""}=t,{open:n=!1}=t,{label:s}=t,{options:r=[]}=t;return e.$$set=e=>{l(4,t=T(T({},t),A(e))),"value"in e&&l(0,a=e.value),"open"in e&&l(1,n=e.open),"label"in e&&l(2,s=e.label),"options"in e&&l(3,r=e.options)},t=A(t),[a,n,s,r,t,e=>e.value===a,e=>{l(0,a=e.value)},()=>{l(1,n=!1)},()=>{l(1,n=!n)}]}class He extends i{constructor(e){super(),c(this,e,Ue,Fe,u,{value:0,open:1,label:2,options:3})}}function Xe(e,t,l){const a=e.slice();return a[8]=t[l],a[9]=t,a[10]=l,a}function Ke(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(a){t=d(a,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","form-toggle-button")},m(e,a){g(e,t,a),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Ze(e){let t,l,a=e[8].label+"";return{c(){t=h(a),l=x()},l(e){t=m(e,a),l=w(e)},m(e,a){g(e,t,a),g(e,l,a)},p(e,l){4&l&&a!==(a=e[8].label+"")&&y(t,a)},d(e){e&&v(t),e&&v(l)}}}function Qe(e){let t,l,a;function n(t){e[5](t,e[8])}let s={toggle:!0,extrasmall:!0,outlined:!0,$$slots:{default:[Ze]},$$scope:{ctx:e}};return void 0!==e[4][e[8].value]&&(s.pressed=e[4][e[8].value]),t=new We({props:s}),F.push((()=>U(t,"pressed",n))),t.$on("click",(function(){return e[6](e[8])})),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),a=!0},p(a,n){e=a;const s={};2052&n&&(s.$$scope={dirty:n,ctx:e}),!l&&20&n&&(l=!0,s.pressed=e[4][e[8].value],Y((()=>l=!1))),t.$set(s)},i(e){a||(G(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function et(e){let t,l,a,n,s=e[1]&&Ke(e),r=e[2],o=[];for(let c=0;c<r.length;c+=1)o[c]=Qe(Xe(e,r,c));const i=e=>_(o[e],1,1,(()=>{o[e]=null}));return{c(){t=f("div"),s&&s.c(),l=x(),a=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);s&&s.l(n),l=w(n),a=d(n,"DIV",{id:!0,class:!0});var r=p(a);for(let t=0;t<o.length;t+=1)o[t].l(r);r.forEach(v),n.forEach(v),this.h()},h(){$(a,"id","form-toggle-button"),$(a,"class","box-border shadow bg-white rounded p-2 w-full gap-1 grid grid-cols-7 auto-cols-min"),$(t,"class","inline-flex flex-col w-full")},m(e,r){g(e,t,r),s&&s.m(t,null),b(t,l),b(t,a);for(let t=0;t<o.length;t+=1)o[t].m(a,null);n=!0},p(e,[n]){if(e[1]?s?s.p(e,n):(s=Ke(e),s.c(),s.m(t,l)):s&&(s.d(1),s=null),29&n){let t;for(r=e[2],t=0;t<r.length;t+=1){const l=Xe(e,r,t);o[t]?(o[t].p(l,n),G(o[t],1)):(o[t]=Qe(l),o[t].c(),G(o[t],1),o[t].m(a,null))}for(q(),t=r.length;t<o.length;t+=1)i(t);C()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)G(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)_(o[t]);n=!1},d(e){e&&v(t),s&&s.d(),J(o,e)}}}function tt(e,t,l){let{label:a=""}=t,{options:n=[]}=t,{multi:s}=t,{value:r=(s?[]:"")}=t;const o=Array.isArray(r)?r:[r];let i=Object.fromEntries(o.map((e=>[e,!0])));return e.$$set=e=>{"label"in e&&l(1,a=e.label),"options"in e&&l(2,n=e.options),"multi"in e&&l(3,s=e.multi),"value"in e&&l(0,r=e.value)},[r,a,n,s,i,function(t,a){e.$$.not_equal(i[a.value],t)&&(i[a.value]=t,l(4,i))},e=>{l(0,r=s?Object.entries(i).filter((([,e])=>e)).map((([e])=>e)):e.value),s||l(4,i={[e.value]:!0})}]}class lt extends i{constructor(e){super(),c(this,e,tt,et,u,{label:1,options:2,multi:3,value:0})}}function at(e,t,l){const a=e.slice();return a[17]=t[l],a[18]=t,a[19]=l,a}function nt(e){let t,l,a,n,s;return l=new K({props:{size:"24"}}),{c(){t=f("button"),N(l.$$.fragment),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var a=p(t);S(l.$$.fragment,a),a.forEach(v),this.h()},h(){$(t,"class","absolute text-blueGray-600 top-5 right-3")},m(r,o){g(r,t,o),P(l,t,null),a=!0,n||(s=D(t,"click",e[3]),n=!0)},p:L,i(e){a||(G(l.$$.fragment,e),a=!0)},o(e){_(l.$$.fragment,e),a=!1},d(e){e&&v(t),W(l),n=!1,s()}}}function st(e,t){let l,a,n,s;function r(e){t[11](e,t[19])}let o={small:!0,label:t[19]?"":"Lista de tarefas",scrollOnFocus:!0,placeholder:t[19]<t[2].checkList.length-1?"Deixe vazio para remover":"Nova tarefa"};return void 0!==t[2].checkList[t[19]].name&&(o.value=t[2].checkList[t[19]].name),a=new Ve({props:o}),F.push((()=>U(a,"value",r))),a.$on("blur",t[6]),a.$on("focus",(function(){return t[12](t[17])})),a.$on("keyup",t[8]),{key:e,first:null,c(){l=H(),N(a.$$.fragment),this.h()},l(e){l=H(),S(a.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(a,e,t),s=!0},p(e,l){t=e;const s={};4&l&&(s.label=t[19]?"":"Lista de tarefas"),4&l&&(s.placeholder=t[19]<t[2].checkList.length-1?"Deixe vazio para remover":"Nova tarefa"),!n&&4&l&&(n=!0,s.value=t[2].checkList[t[19]].name,Y((()=>n=!1))),a.$set(s)},i(e){s||(G(a.$$.fragment,e),s=!0)},o(e){_(a.$$.fragment,e),s=!1},d(e){e&&v(l),W(a,e)}}}function rt(e){let t,l,a;function n(t){e[15](t)}let s={label:"Dias do mês",multi:!0,options:new Array(31).fill(0).map(pt)};return void 0!==e[2].recurrence.monthDays&&(s.value=e[2].recurrence.monthDays),t=new lt({props:s}),F.push((()=>U(t,"value",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),a=!0},p(e,a){const n={};!l&&4&a&&(l=!0,n.value=e[2].recurrence.monthDays,Y((()=>l=!1))),t.$set(n)},i(e){a||(G(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function ot(e){let t,l,a;function n(t){e[14](t)}let s={label:"Dias da semana",multi:!0,options:Z.weekdays("narrow").map(dt)};return void 0!==e[2].recurrence.weekdays&&(s.value=e[2].recurrence.weekdays),t=new lt({props:s}),F.push((()=>U(t,"value",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),a=!0},p(e,a){const n={};!l&&4&a&&(l=!0,n.value=e[2].recurrence.weekdays,Y((()=>l=!1))),t.$set(n)},i(e){a||(G(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function it(e){var t;let l,a,n,s,r,o,i,c,u,h,m,b,y,E,k,D,L=[],I=new Map,T=(null==(t=e[0])?void 0:t._id)&&nt(e);function A(t){e[9](t)}let O={label:"Título",type:"text",autofocus:!0};function V(t){e[10](t)}void 0!==e[2].title&&(O.value=e[2].title),a=new Ve({props:O}),F.push((()=>U(a,"value",A)));let j={label:"Descrição",rows:5};void 0!==e[2].description&&(j.value=e[2].description),r=new Re({props:j}),F.push((()=>U(r,"value",V)));let z=e[2].checkList;const R=e=>e[17]._id;for(let f=0;f<z.length;f+=1){let t=at(e,z,f),l=R(t);I.set(l,L[f]=st(l,t))}function M(t){e[13](t)}let J={label:"Recorrência",options:Object.values(ye).map(ht)};void 0!==e[2].recurrence.type&&(J.value=e[2].recurrence.type),h=new He({props:J}),F.push((()=>U(h,"value",M)));const K=[ot,rt],Z=[];function Q(e,t){return e[2].recurrence.type===ye.EVERY_WEEK_DAYS.key?0:e[2].recurrence.type===ye.EVERY_MONTH_DAYS.key?1:-1}return~(y=Q(e))&&(E=Z[y]=K[y](e)),{c(){T&&T.c(),l=x(),N(a.$$.fragment),s=x(),N(r.$$.fragment),i=x(),c=f("div");for(let e=0;e<L.length;e+=1)L[e].c();u=x(),N(h.$$.fragment),b=x(),E&&E.c(),k=H(),this.h()},l(e){T&&T.l(e),l=w(e),S(a.$$.fragment,e),s=w(e),S(r.$$.fragment,e),i=w(e),c=d(e,"DIV",{class:!0});var t=p(c);for(let l=0;l<L.length;l+=1)L[l].l(t);t.forEach(v),u=w(e),S(h.$$.fragment,e),b=w(e),E&&E.l(e),k=H(),this.h()},h(){$(c,"class","inline-flex flex-col gap-2")},m(e,t){T&&T.m(e,t),g(e,l,t),P(a,e,t),g(e,s,t),P(r,e,t),g(e,i,t),g(e,c,t);for(let l=0;l<L.length;l+=1)L[l].m(c,null);g(e,u,t),P(h,e,t),g(e,b,t),~y&&Z[y].m(e,t),g(e,k,t),D=!0},p(e,t){var s;(null==(s=e[0])?void 0:s._id)?T?(T.p(e,t),1&t&&G(T,1)):(T=nt(e),T.c(),G(T,1),T.m(l.parentNode,l)):T&&(q(),_(T,1,1,(()=>{T=null})),C());const i={};!n&&4&t&&(n=!0,i.value=e[2].title,Y((()=>n=!1))),a.$set(i);const u={};!o&&4&t&&(o=!0,u.value=e[2].description,Y((()=>o=!1))),r.$set(u),452&t&&(z=e[2].checkList,q(),L=B(L,t,R,1,e,z,I,c,X,st,null,at),C());const f={};!m&&4&t&&(m=!0,f.value=e[2].recurrence.type,Y((()=>m=!1))),h.$set(f);let d=y;y=Q(e),y===d?~y&&Z[y].p(e,t):(E&&(q(),_(Z[d],1,1,(()=>{Z[d]=null})),C()),~y?(E=Z[y],E?E.p(e,t):(E=Z[y]=K[y](e),E.c()),G(E,1),E.m(k.parentNode,k)):E=null)},i(e){if(!D){G(T),G(a.$$.fragment,e),G(r.$$.fragment,e);for(let e=0;e<z.length;e+=1)G(L[e]);G(h.$$.fragment,e),G(E),D=!0}},o(e){_(T),_(a.$$.fragment,e),_(r.$$.fragment,e);for(let t=0;t<L.length;t+=1)_(L[t]);_(h.$$.fragment,e),_(E),D=!1},d(e){T&&T.d(e),e&&v(l),W(a,e),e&&v(s),W(r,e),e&&v(i),e&&v(c);for(let t=0;t<L.length;t+=1)L[t].d();e&&v(u),W(h,e),e&&v(b),~y&&Z[y].d(e),e&&v(k)}}}function ct(e){let t;return{c(){t=h("Cancelar")},l(e){t=m(e,"Cancelar")},m(e,l){g(e,t,l)},d(e){e&&v(t)}}}function ut(e){let t,l=e[0]._id?"Salvar":"Adicionar";return{c(){t=h(l)},l(e){t=m(e,l)},m(e,l){g(e,t,l)},p(e,a){1&a&&l!==(l=e[0]._id?"Salvar":"Adicionar")&&y(t,l)},d(e){e&&v(t)}}}function ft(e){let t,l,a,n,s,r,o,i;return l=new ze({props:{title:"Atividade",class:"bg-blueGray-100 p-4 relative rounded shadow mb-4",$$slots:{default:[it]},$$scope:{ctx:e}}}),s=new We({props:{class:"!bg-blueGray-100 !text-blueGray-600",$$slots:{default:[ct]},$$scope:{ctx:e}}}),s.$on("click",e[4]),o=new We({props:{class:"!bg-teal-500",$$slots:{default:[ut]},$$scope:{ctx:e}}}),o.$on("click",e[5]),{c(){t=f("div"),N(l.$$.fragment),a=x(),n=f("div"),N(s.$$.fragment),r=x(),N(o.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var i=p(t);S(l.$$.fragment,i),a=w(i),n=d(i,"DIV",{class:!0});var c=p(n);S(s.$$.fragment,c),r=w(c),S(o.$$.fragment,c),c.forEach(v),i.forEach(v),this.h()},h(){$(n,"class","box-border mt-auto w-full bottom-2 inline-flex justify-evenly mb-4 mt-auto"),$(t,"class","fixed z-20 right-0 left-0 bottom-0 top-0 p-4 overflow-y-scroll inline-flex justify-start flex-col bg-blueGray-600 h-full")},m(c,u){g(c,t,u),P(l,t,null),b(t,a),b(t,n),P(s,n,null),b(n,r),P(o,n,null),e[16](t),i=!0},p(e,[t]){const a={};1048581&t&&(a.$$scope={dirty:t,ctx:e}),l.$set(a);const n={};1048576&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const r={};1048577&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){i||(G(l.$$.fragment,e),G(s.$$.fragment,e),G(o.$$.fragment,e),i=!0)},o(e){_(l.$$.fragment,e),_(s.$$.fragment,e),_(o.$$.fragment,e),i=!1},d(a){a&&v(t),W(l),W(s),W(o),e[16](null)}}}const ht=({key:e,label:t})=>({value:e,label:t}),dt=(e,t)=>({label:e,value:t+1}),pt=(e,t)=>({label:t+1,value:t+1});function mt(e,a,n){let s,{activity:r}=a,i=r.toJS();i.checkList=[...i.checkList,be().toJS()];const c=e=>{e.name||n(2,i.checkList=[...i.checkList,be().toJS()],i)};return e.$$set=e=>{"activity"in e&&n(0,r=e.activity)},[r,s,i,()=>{xe(r),n(0,r=null)},()=>{n(0,r=null)},()=>{var e,a;we(Ee((e=o(o({},r.toJS()),i),a={checkList:i.checkList.filter((({name:e})=>e)),_id:r._id},t(e,l(a))))),n(0,r=null)},()=>{const e=i.checkList.pop(),t=e.name?be().toJS():e;n(2,i.checkList=[...i.checkList.filter((({name:e})=>e)),t],i)},c,e=>{var t,l;if("Enter"===e.key){const a=null==(l=null==(t=e.target.parentElement)?void 0:t.nextElementSibling)?void 0:l.firstElementChild;if(a&&"input"===a.localName)return void a.focus();console.error("Not an input element. You'll to fix this ugly workaround code.")}},function(t){e.$$.not_equal(i.title,t)&&(i.title=t,n(2,i))},function(t){e.$$.not_equal(i.description,t)&&(i.description=t,n(2,i))},function(t,l){e.$$.not_equal(i.checkList[l].name,t)&&(i.checkList[l].name=t,n(2,i))},e=>c(e),function(t){e.$$.not_equal(i.recurrence.type,t)&&(i.recurrence.type=t,n(2,i))},function(t){e.$$.not_equal(i.recurrence.weekdays,t)&&(i.recurrence.weekdays=t,n(2,i))},function(t){e.$$.not_equal(i.recurrence.monthDays,t)&&(i.recurrence.monthDays=t,n(2,i))},function(e){F[e?"unshift":"push"]((()=>{s=e,n(1,s)}))}]}class vt extends i{constructor(e){super(),c(this,e,mt,ft,u,{activity:0})}}function $t(e){let t,l,a,n,s,r=Q.fromISO(e[0].recurrence.nextDate).toLocal().toLocaleString(Q.DATETIME_SHORT)+"";return{c(){t=f("p"),l=h("Próxima data: "),a=h(" "),n=x(),s=h(r),this.h()},l(e){t=d(e,"P",{class:!0});var o=p(t);l=m(o,"Próxima data: "),a=m(o," "),n=w(o),s=m(o,r),o.forEach(v),this.h()},h(){$(t,"class","text-xs font-light")},m(e,r){g(e,t,r),b(t,l),b(t,a),b(t,n),b(t,s)},p(e,t){1&t&&r!==(r=Q.fromISO(e[0].recurrence.nextDate).toLocal().toLocaleString(Q.DATETIME_SHORT)+"")&&y(s,r)},d(e){e&&v(t)}}}function gt(e){let t,l,a,n,s,r,o,i=e[0].title+"",c=e[0].state===ke.WAITING.key&&$t(e);return{c(){t=f("div"),l=f("div"),a=f("div"),n=h(i),s=x(),c&&c.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var r=p(t);l=d(r,"DIV",{class:!0});var o=p(l);a=d(o,"DIV",{});var u=p(a);n=m(u,i),u.forEach(v),o.forEach(v),s=w(r),c&&c.l(r),r.forEach(v),this.h()},h(){$(l,"class","inline-flex justify-between gap-1 items-center w-full"),$(t,"class","w-full p-2 inline-flex bg-white text-blueGray-800 border-l-4 border-blueGray-500 flex-col gap-2 shadow-md border rounded")},m(i,u){g(i,t,u),b(t,l),b(l,a),b(a,n),b(t,s),c&&c.m(t,null),r||(o=D(t,"click",e[1]),r=!0)},p(e,[l]){1&l&&i!==(i=e[0].title+"")&&y(n,i),e[0].state===ke.WAITING.key?c?c.p(e,l):(c=$t(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i:L,o:L,d(e){e&&v(t),c&&c.d(),r=!1,o()}}}function bt(e,t,l){let{activity:a}=t;return e.$$set=e=>{"activity"in e&&l(0,a=e.activity)},[a,function(t){O.call(this,e,t)}]}class yt extends i{constructor(e){super(),c(this,e,bt,gt,u,{activity:0})}}function xt(e,t=400){let l,a;const n=()=>{clearTimeout(l)},s=e=>{const t=e.touches?e.touches[0]:e;let n=t.clientX,s=t.clientY,r=n-a.x,o=s-a.y;r*r+o*o>50&&clearTimeout(l)},r=o=>{const i=o.touches?o.touches[0]:o;a={x:i.clientX,y:i.clientY},l=setTimeout((()=>{e.removeEventListener("mousedown",r),e.removeEventListener("touchStart",r),e.removeEventListener("mouseup",n),e.removeEventListener("touchend",n),e.dispatchEvent(new CustomEvent("longpress",{detail:{startDragPosition:a}}))}),t),e.addEventListener("mouseup",n),e.addEventListener("mousemove",s),e.addEventListener("touchend",n),e.addEventListener("touchmove",s)};return e.addEventListener("mousedown",r),e.addEventListener("touchstart",r),{update(e){t=e},destroy(){e.removeEventListener("mousedown",r),e.removeEventListener("touchStart",r),e.removeEventListener("mouseup",n),e.removeEventListener("touchend",n),e.removeEventListener("mousemove",s)}}}function wt(e){let t,l,a,n,s;return{c(){t=f("div"),l=h(e[0]),a=x(),n=f("hr"),this.h()},l(s){t=d(s,"DIV",{class:!0});var r=p(t);l=m(r,e[0]),a=w(r),n=d(r,"HR",{class:!0}),r.forEach(v),this.h()},h(){$(n,"class","flex-1 w-full"),$(t,"class",s="inline-flex text-blueGray-800 font-light uppercase items-center gap-2 w-full "+e[1].class)},m(e,s){g(e,t,s),b(t,l),b(t,a),b(t,n)},p(e,[a]){1&a&&y(l,e[0]),2&a&&s!==(s="inline-flex text-blueGray-800 font-light uppercase items-center gap-2 w-full "+e[1].class)&&$(t,"class",s)},i:L,o:L,d(e){e&&v(t)}}}function Et(e,t,l){let{title:a=""}=t;return e.$$set=e=>{l(1,t=T(T({},t),A(e))),"title"in e&&l(0,a=e.title)},t=A(t),[a,t]}class kt extends i{constructor(e){super(),c(this,e,Et,wt,u,{title:0})}}function Dt(e,t,l){const a=e.slice();return a[13]=t[l],a[15]=l,a}function Lt(e,t,l){const a=e.slice();return a[13]=t[l],a[15]=l,a}function It(e,t,l){const a=e.slice();return a[13]=t[l],a[15]=l,a}function Tt(e){let t,l;return t=new de({props:{size:"24"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){P(t,e,a),l=!0},i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function At(e){let t,l;return t=new pe({props:{size:"24"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){P(t,e,a),l=!0},i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function Ot(e){let t,l,a,n,s,r,o,i,c,u,y,E,k,D,L,I,T,A,O,V,j,z,R,B,M,Y,q,C,J,F,U,H,X,K,Z,Q,ae,ne,se,re,oe,ce,ue=!1;return z=new kt({props:{title:"Contato",class:"text-white mt-4"}}),ae=new kt({props:{title:"Versão",class:"text-white mt-4"}}),{c(){t=f("div"),l=x(),a=f("div"),n=f("p"),s=h("by Suaveware"),r=x(),o=f("p"),i=h("Este aplicativo é de código livre sob a licença GPL-3 e seu código\n\t\t\t\t\t\tfonte\n\t\t\t\t\t\testá disponível neste\n\t\t\t\t\t\t"),c=f("a"),u=h("repositório no Github"),y=h("\n\t\t\t\t\t\t."),E=x(),k=f("p"),D=h("Distribuído como "),L=f("i"),I=h("progressive web app"),T=h(" (PWA) através do\n\t\t\t\t\t\tendereço:"),A=x(),O=f("a"),V=h("https://pronto.suaveware.dev"),j=x(),N(z.$$.fragment),R=x(),B=f("div"),M=f("p"),Y=h("Email: luizcarlos1405@suaveware.dev"),q=x(),C=f("p"),J=h("Twitter: @semmilho"),F=x(),U=f("p"),H=h("YouTube: RSensato"),X=x(),K=f("p"),Z=h("TikTok: @RSensato"),Q=x(),N(ae.$$.fragment),ne=x(),se=f("div"),re=h("1.0.7"),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var f=p(t);l=w(f),a=d(f,"DIV",{class:!0});var h=p(a);n=d(h,"P",{});var $=p(n);s=m($,"by Suaveware"),$.forEach(v),r=w(h),o=d(h,"P",{class:!0});var g=p(o);i=m(g,"Este aplicativo é de código livre sob a licença GPL-3 e seu código\n\t\t\t\t\t\tfonte\n\t\t\t\t\t\testá disponível neste\n\t\t\t\t\t\t"),c=d(g,"A",{class:!0,href:!0});var b=p(c);u=m(b,"repositório no Github"),b.forEach(v),y=m(g,"\n\t\t\t\t\t\t."),g.forEach(v),E=w(h),k=d(h,"P",{class:!0});var x=p(k);D=m(x,"Distribuído como "),L=d(x,"I",{});var G=p(L);I=m(G,"progressive web app"),G.forEach(v),T=m(x," (PWA) através do\n\t\t\t\t\t\tendereço:"),x.forEach(v),A=w(h),O=d(h,"A",{class:!0,href:!0});var _=p(O);V=m(_,"https://pronto.suaveware.dev"),_.forEach(v),j=w(h),S(z.$$.fragment,h),R=w(h),B=d(h,"DIV",{class:!0});var N=p(B);M=d(N,"P",{});var P=p(M);Y=m(P,"Email: luizcarlos1405@suaveware.dev"),P.forEach(v),q=w(N),C=d(N,"P",{});var W=p(C);J=m(W,"Twitter: @semmilho"),W.forEach(v),F=w(N),U=d(N,"P",{});var ee=p(U);H=m(ee,"YouTube: RSensato"),ee.forEach(v),X=w(N),K=d(N,"P",{});var te=p(K);Z=m(te,"TikTok: @RSensato"),te.forEach(v),N.forEach(v),Q=w(h),S(ae.$$.fragment,h),ne=w(h),se=d(h,"DIV",{class:!0});var le=p(se);re=m(le,"1.0.7"),le.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){$(c,"class","underline"),$(c,"href","https://github.com/luizcarlos1405/pronto"),$(o,"class","text-base text-justify"),$(k,"class","text-base text-justify"),$(O,"class","underline text-base w-full"),$(O,"href","https://pronto.suaveware.dev"),$(B,"class","inline-flex text-base w-full flex-col gap-2"),$(se,"class","text-sm"),$(a,"class","inline-flex flex-col items-center pt-4 gap-2 w-full"),$(t,"class","text-white px-4 py-8 overflow-y-scroll inline-flex gap-2 text-xl flex-col items-stretch w-full"),ee(t,"height","76vh")},m(e,f){g(e,t,f),b(t,l),b(t,a),b(a,n),b(n,s),b(a,r),b(a,o),b(o,i),b(o,c),b(c,u),b(o,y),b(a,E),b(a,k),b(k,D),b(k,L),b(L,I),b(k,T),b(a,A),b(a,O),b(O,V),b(a,j),P(z,a,null),b(a,R),b(a,B),b(B,M),b(M,Y),b(B,q),b(B,C),b(C,J),b(B,F),b(B,U),b(U,H),b(B,X),b(B,K),b(K,Z),b(a,Q),P(ae,a,null),b(a,ne),b(a,se),b(se,re),ce=!0},p(e,t){},i(e){ce||(G(ue),G(z.$$.fragment,e),G(ae.$$.fragment,e),te((()=>{oe||(oe=le(t,ie,{duration:Yt},!0)),oe.run(1)})),ce=!0)},o(e){_(ue),_(z.$$.fragment,e),_(ae.$$.fragment,e),oe||(oe=le(t,ie,{duration:Yt},!1)),oe.run(0),ce=!1},d(e){e&&v(t),W(z),W(ae),e&&oe&&oe.end()}}}function Vt(e){let t,l;return{c(){t=f("span"),l=h("Nenhuma atividade, clique no botão de + para adicionar."),this.h()},l(e){t=d(e,"SPAN",{class:!0});var a=p(t);l=m(a,"Nenhuma atividade, clique no botão de + para adicionar."),a.forEach(v),this.h()},h(){$(t,"class","text-blueGray-800")},m(e,a){g(e,t,a),b(t,l)},d(e){e&&v(t)}}}function jt(e){let t,l,a,n,s,r=[],o=new Map,i=e[5];const c=e=>e[13]._id;for(let u=0;u<i.length;u+=1){let t=It(e,i,u),l=c(t);o.set(l,r[u]=Gt(l,t))}return{c(){t=f("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0});var l=p(t);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(v),this.h()},h(){$(t,"class","w-full mb-10 flex-col inline-flex gap-2")},m(o,i){g(o,t,i);for(let e=0;e<r.length;e+=1)r[e].m(t,null);a=!0,n||(s=[R(l=ae.call(null,t,{items:e[5],dragDisabled:e[3],flipDurationMs:Wt,customStartEvent:"longpress"})),D(t,"consider",e[9]),D(t,"finalize",e[9])],n=!0)},p(e,a){if(288&a){i=e[5],q();for(let e=0;e<r.length;e+=1)r[e].r();r=B(r,a,c,1,e,i,o,t,fe,Gt,null,It);for(let e=0;e<r.length;e+=1)r[e].a();C()}l&&ne(l.update)&&40&a&&l.update.call(null,{items:e[5],dragDisabled:e[3],flipDurationMs:Wt,customStartEvent:"longpress"})},i(e){if(!a){for(let e=0;e<i.length;e+=1)G(r[e]);a=!0}},o(e){for(let t=0;t<r.length;t+=1)_(r[t]);a=!1},d(e){e&&v(t);for(let t=0;t<r.length;t+=1)r[t].d();n=!1,I(s)}}}function Gt(e,t){let l,a,n,s,r,o,i,c=L;return a=new yt({props:{activity:t[13]}}),a.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=f("span"),N(a.$$.fragment),n=x(),this.h()},l(e){l=d(e,"SPAN",{});var t=p(l);S(a.$$.fragment,t),n=w(t),t.forEach(v),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(a,l,null),b(l,n),r=!0,o||(i=R(xt.call(null,l)),o=!0)},p(e,l){t=e;const n={};32&l&&(n.activity=t[13]),a.$set(n)},r(){s=l.getBoundingClientRect()},f(){ce(l),c()},a(){c(),c=ue(l,s,me,{duration:Wt})},i(e){r||(G(a.$$.fragment,e),r=!0)},o(e){_(a.$$.fragment,e),r=!1},d(e){e&&v(l),W(a),o=!1,i()}}}function _t(e){let t,l;return t=new kt({props:{title:ke.WAITING.label,class:"mt-4"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){P(t,e,a),l=!0},p:L,i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function zt(e,t){let l,a,n;return a=new yt({props:{activity:t[13]}}),a.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=H(),N(a.$$.fragment),this.h()},l(e){l=H(),S(a.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(a,e,t),n=!0},p(e,l){t=e;const n={};1&l&&(n.activity=t[13]),a.$set(n)},i(e){n||(G(a.$$.fragment,e),n=!0)},o(e){_(a.$$.fragment,e),n=!1},d(e){e&&v(l),W(a,e)}}}function Nt(e){let t,l;return t=new kt({props:{title:ke.DONE.label,class:"mt-4"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){P(t,e,a),l=!0},p:L,i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function St(e,t){let l,a,n;return a=new yt({props:{activity:t[13]}}),a.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=H(),N(a.$$.fragment),this.h()},l(e){l=H(),S(a.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(a,e,t),n=!0},p(e,l){t=e;const n={};1&l&&(n.activity=t[13]),a.$set(n)},i(e){n||(G(a.$$.fragment,e),n=!0)},o(e){_(a.$$.fragment,e),n=!1},d(e){e&&v(l),W(a,e)}}}function Pt(e){let t,l,a,n,s,r,o;a=new ve({props:{size:e[1].activities.size?"20":"28"}});let i=e[1].activities.size&&Bt(e);return{c(){t=f("div"),l=f("button"),N(a.$$.fragment),n=x(),i&&i.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var s=p(t);l=d(s,"BUTTON",{class:!0});var r=p(l);S(a.$$.fragment,r),r.forEach(v),n=w(s),i&&i.l(s),s.forEach(v),this.h()},h(){$(l,"class","fab svelte-7tyjzi"),E(l,"small",!!e[1].activities.size),$(t,"class","fixed bottom-4 text-blueGray-600 right-4 gap-3 items-center inline-flex flex-col")},m(c,u){g(c,t,u),b(t,l),P(a,l,null),b(t,n),i&&i.m(t,null),s=!0,r||(o=D(l,"click",e[7]),r=!0)},p(e,n){const s={};2&n&&(s.size=e[1].activities.size?"20":"28"),a.$set(s),2&n&&E(l,"small",!!e[1].activities.size),e[1].activities.size?i?(i.p(e,n),2&n&&G(i,1)):(i=Bt(e),i.c(),G(i,1),i.m(t,null)):i&&(q(),_(i,1,1,(()=>{i=null})),C())},i(e){s||(G(a.$$.fragment,e),G(i),s=!0)},o(e){_(a.$$.fragment,e),_(i),s=!1},d(e){e&&v(t),W(a),i&&i.d(),r=!1,o()}}}function Rt(e){let t,l,a;function n(t){e[12](t)}let s={};return void 0!==e[4]&&(s.activity=e[4]),t=new vt({props:s}),F.push((()=>U(t,"activity",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),a=!0},p(e,a){const n={};!l&&16&a&&(l=!0,n.activity=e[4],Y((()=>l=!1))),t.$set(n)},i(e){a||(G(t.$$.fragment,e),a=!0)},o(e){_(t.$$.fragment,e),a=!1},d(e){W(t,e)}}}function Bt(e){let t,l,a,n,s;return l=new $e({props:{size:"28"}}),{c(){t=f("button"),N(l.$$.fragment),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var a=p(t);S(l.$$.fragment,a),a.forEach(v),this.h()},h(){$(t,"class","fab svelte-7tyjzi")},m(r,o){g(r,t,o),P(l,t,null),a=!0,n||(s=D(t,"click",e[6]),n=!0)},p:L,i(e){a||(G(l.$$.fragment,e),a=!0)},o(e){_(l.$$.fragment,e),a=!1},d(e){e&&v(t),W(l),n=!1,s()}}}function Mt(e){var t,l;let a,n,s,r,o,i,c,u,y,k,L,I,T,A,O,V,j,z,N,S,P,R,M,W,Y,J=null==(t=e[0].get(ke.WAITING.key))?void 0:t.size,F=[],U=new Map,K=null==(l=e[0].get(ke.DONE.key))?void 0:l.size,Z=[],Q=new Map;const ee=[At,Tt],te=[];function le(e,t){return e[3]?0:1}u=le(e),y=te[u]=ee[u](e);let ae=e[3]&&Ot(),ne=!e[1].activities.size&&Vt(),oe=e[5].length&&jt(e),ie=J&&_t(),ce=e[0].get(ke.WAITING.key,se()).toArray();const ue=e=>e[13]._id;for(let f=0;f<ce.length;f+=1){let t=Lt(e,ce,f),l=ue(t);U.set(l,F[f]=zt(l,t))}let fe=K&&Nt(),he=e[0].get(ke.DONE.key,se()).toArray();const de=e=>e[13]._id;for(let f=0;f<he.length;f+=1){let t=Dt(e,he,f),l=de(t);Q.set(l,Z[f]=St(l,t))}const pe=[Rt,Pt],me=[];function ve(e,t){return e[4]?0:e[3]?-1:1}return~(S=ve(e))&&(P=me[S]=pe[S](e)),{c(){a=x(),n=f("div"),s=f("div"),r=f("div"),o=h("Pronto"),i=x(),c=f("div"),y.c(),k=x(),L=f("div"),ae&&ae.c(),I=x(),T=f("div"),ne&&ne.c(),A=x(),oe&&oe.c(),O=x(),ie&&ie.c(),V=x();for(let e=0;e<F.length;e+=1)F[e].c();j=x(),fe&&fe.c(),z=x();for(let e=0;e<Z.length;e+=1)Z[e].c();N=x(),P&&P.c(),R=H(),this.h()},l(e){re('[data-svelte="svelte-13bco32"]',document.head).forEach(v),a=w(e),n=d(e,"DIV",{class:!0});var t=p(n);s=d(t,"DIV",{class:!0});var l=p(s);r=d(l,"DIV",{class:!0});var u=p(r);o=m(u,"Pronto"),u.forEach(v),i=w(l),c=d(l,"DIV",{class:!0});var f=p(c);y.l(f),f.forEach(v),l.forEach(v),k=w(t),L=d(t,"DIV",{class:!0});var h=p(L);ae&&ae.l(h),h.forEach(v),I=w(t),T=d(t,"DIV",{class:!0});var $=p(T);ne&&ne.l($),A=w($),oe&&oe.l($),O=w($),ie&&ie.l($),V=w($);for(let a=0;a<F.length;a+=1)F[a].l($);j=w($),fe&&fe.l($),z=w($);for(let a=0;a<Z.length;a+=1)Z[a].l($);$.forEach(v),t.forEach(v),N=w(e),P&&P.l(e),R=H(),this.h()},h(){document.title="Pronto",$(r,"class","text-2xl"),$(c,"class","cursor-pointer"),$(s,"class","flex justify-between items-center pb-8 px-4 pt-4 text-white rounded-b w-full"),$(L,"class","transition-all ease-in-out duration-500 max-h-screen opacity-100 svelte-7tyjzi"),E(L,"hide",!e[3]),$(T,"class","p-4 pt-6 flex-grow transition-all duration-300 overflow-y-scroll flex-col bg-white shadow border-bluGray-400 inline-flex rounded-t-2xl gap-2 svelte-7tyjzi"),E(T,"overflowhidden",e[3]),$(n,"class","flex flex-col items-stretch bg-blueGray-600 h-full overflow-hidden")},m(t,l){g(t,a,l),g(t,n,l),b(n,s),b(s,r),b(r,o),b(s,i),b(s,c),te[u].m(c,null),b(n,k),b(n,L),ae&&ae.m(L,null),b(n,I),b(n,T),ne&&ne.m(T,null),b(T,A),oe&&oe.m(T,null),b(T,O),ie&&ie.m(T,null),b(T,V);for(let e=0;e<F.length;e+=1)F[e].m(T,null);b(T,j),fe&&fe.m(T,null),b(T,z);for(let e=0;e<Z.length;e+=1)Z[e].m(T,null);e[11](T),g(t,N,l),~S&&me[S].m(t,l),g(t,R,l),M=!0,W||(Y=D(c,"click",e[10]),W=!0)},p(e,[t]){var l,a;let n=u;u=le(e),u!==n&&(q(),_(te[n],1,1,(()=>{te[n]=null})),C(),y=te[u],y||(y=te[u]=ee[u](e),y.c()),G(y,1),y.m(c,null)),e[3]?ae?(ae.p(e,t),8&t&&G(ae,1)):(ae=Ot(),ae.c(),G(ae,1),ae.m(L,null)):ae&&(q(),_(ae,1,1,(()=>{ae=null})),C()),8&t&&E(L,"hide",!e[3]),e[1].activities.size?ne&&(ne.d(1),ne=null):ne||(ne=Vt(),ne.c(),ne.m(T,A)),e[5].length?oe?(oe.p(e,t),32&t&&G(oe,1)):(oe=jt(e),oe.c(),G(oe,1),oe.m(T,O)):oe&&(q(),_(oe,1,1,(()=>{oe=null})),C()),1&t&&(J=null==(l=e[0].get(ke.WAITING.key))?void 0:l.size),J?ie?(ie.p(e,t),1&t&&G(ie,1)):(ie=_t(),ie.c(),G(ie,1),ie.m(T,V)):ie&&(q(),_(ie,1,1,(()=>{ie=null})),C()),257&t&&(ce=e[0].get(ke.WAITING.key,se()).toArray(),q(),F=B(F,t,ue,1,e,ce,U,T,X,zt,j,Lt),C()),1&t&&(K=null==(a=e[0].get(ke.DONE.key))?void 0:a.size),K?fe?(fe.p(e,t),1&t&&G(fe,1)):(fe=Nt(),fe.c(),G(fe,1),fe.m(T,z)):fe&&(q(),_(fe,1,1,(()=>{fe=null})),C()),257&t&&(he=e[0].get(ke.DONE.key,se()).toArray(),q(),Z=B(Z,t,de,1,e,he,Q,T,X,St,null,Dt),C()),8&t&&E(T,"overflowhidden",e[3]);let s=S;S=ve(e),S===s?~S&&me[S].p(e,t):(P&&(q(),_(me[s],1,1,(()=>{me[s]=null})),C()),~S?(P=me[S],P?P.p(e,t):(P=me[S]=pe[S](e),P.c()),G(P,1),P.m(R.parentNode,R)):P=null)},i(e){if(!M){G(y),G(ae),G(oe),G(ie);for(let e=0;e<ce.length;e+=1)G(F[e]);G(fe);for(let e=0;e<he.length;e+=1)G(Z[e]);G(P),M=!0}},o(e){_(y),_(ae),_(oe),_(ie);for(let t=0;t<F.length;t+=1)_(F[t]);_(fe);for(let t=0;t<Z.length;t+=1)_(Z[t]);_(P),M=!1},d(t){t&&v(a),t&&v(n),te[u].d(),ae&&ae.d(),ne&&ne.d(),oe&&oe.d(),ie&&ie.d();for(let e=0;e<F.length;e+=1)F[e].d();fe&&fe.d();for(let e=0;e<Z.length;e+=1)Z[e].d();e[11](null),t&&v(N),~S&&me[S].d(t),t&&v(R),W=!1,Y()}}}const Wt=100,Yt=500;function qt(e,t,l){let a,n;oe(e,Le,(e=>l(1,a=e)));let s,r,o=!1,i=null;return e.$$.update=()=>{3&e.$$.dirty&&(l(0,s=a.activities.groupBy((e=>e.state))),l(5,r=s.get(ke.READY.key,se()).toJS()))},[s,a,n,o,i,r,()=>{ge(`${Ie}/focus`)},()=>{l(4,i=Ee())},e=>()=>{l(4,i=a.activities.find((t=>t._id===e)))},({detail:e})=>{l(5,r=e.items),e.info.trigger===he.DRAG_STARTED&&(n.classList.add("overflow-hidden"),n.classList.remove("overflow-y-scroll")),e.info.trigger.includes("dropped")&&(n.classList.add("overflow-y-scroll"),n.classList.remove("overflow-hidden")),e.info.trigger===he.DROPPED_INTO_ZONE&&De(e.items)},()=>{l(3,o=!o)},function(e){F[e?"unshift":"push"]((()=>{n=e,l(2,n)}))},function(e){i=e,l(4,i)}]}export default class extends i{constructor(e){super(),c(this,e,qt,Mt,u,{})}}
