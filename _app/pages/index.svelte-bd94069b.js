var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,l,s)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&r(e,l,t[l]);if(s)for(var l of s(t))a.call(t,l)&&r(e,l,t[l]);return e};import{S as i,i as c,s as u,e as f,t as h,c as d,a as p,g as m,d as v,b as $,f as g,J as b,h as y,k as x,n as w,M as E,N as k,O as D,K as L,P as I,B as T,Q as A,T as O,E as V,F as j,x as G,u as _,U as z,j as N,m as S,o as P,V as R,W as B,X as M,v as W,Y,r as C,w as q,Z as J,_ as F,$ as U,l as H,a0 as X,a1 as K,a2 as Z,D as Q,a3 as ee,a4 as te,a5 as le,a6 as se,a7 as ne,L as ae,a8 as re,a9 as oe,aa as ie,ab as ce,ac as ue,ad as fe,ae as he,af as de,ag as pe,ah as me,ai as ve,aj as $e}from"../chunks/vendor-7f99f88b.js";import{g as ge}from"../chunks/navigation-c804b3db.js";import{C as be,R as ye,r as xe,s as we,a as Ee,A as ke,b as De,c as Le}from"../chunks/state-514b4061.js";import{b as Ie}from"../chunks/paths-7dc55c62.js";function Te(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(s){t=d(s,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","grid-username")},m(e,s){g(e,t,s),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Ae(e){let t,l,s,n,a,r,o=e[1]&&Te(e);return{c(){t=f("div"),o&&o.c(),l=x(),s=f("input"),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);o&&o.l(n),l=w(n),s=d(n,"INPUT",{id:!0,placeholder:!0,class:!0}),n.forEach(v),this.h()},h(){$(s,"id","grid-username"),$(s,"placeholder",e[2]),s.autofocus=e[3],$(s,"class","svelte-lgtjj4"),E(s,"regular",!(e[4]||e[5])),E(s,"small",e[4]),E(s,"large",e[5]),$(t,"class",n="w-full "+e[7].class+" svelte-lgtjj4")},m(n,i){g(n,t,i),o&&o.m(t,null),b(t,l),b(t,s),k(s,e[0]),a||(r=[D(s,"focus",e[6]),D(s,"change",e[10]),D(s,"focus",e[11]),D(s,"blur",e[12]),D(s,"keyup",e[13]),D(s,"input",e[14])],a=!0)},p(e,[a]){e[1]?o?o.p(e,a):(o=Te(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),4&a&&$(s,"placeholder",e[2]),8&a&&(s.autofocus=e[3]),1&a&&s.value!==e[0]&&k(s,e[0]),48&a&&E(s,"regular",!(e[4]||e[5])),16&a&&E(s,"small",e[4]),32&a&&E(s,"large",e[5]),128&a&&n!==(n="w-full "+e[7].class+" svelte-lgtjj4")&&$(t,"class",n)},i:L,o:L,d(e){e&&v(t),o&&o.d(),a=!1,I(r)}}}function Oe(e,t,l){let{type:s="text"}=t,{label:n=""}=t,{placeholder:a=""}=t,{autofocus:r=!1}=t,{value:o=""}=t,{scrollOnFocus:i=!1}=t,{small:c=!1}=t,{large:u=!1}=t;return e.$$set=e=>{l(7,t=T(T({},t),A(e))),"type"in e&&l(8,s=e.type),"label"in e&&l(1,n=e.label),"placeholder"in e&&l(2,a=e.placeholder),"autofocus"in e&&l(3,r=e.autofocus),"value"in e&&l(0,o=e.value),"scrollOnFocus"in e&&l(9,i=e.scrollOnFocus),"small"in e&&l(4,c=e.small),"large"in e&&l(5,u=e.large)},t=A(t),[o,n,a,r,c,u,e=>{e.target.type=s,i&&e.target.scrollIntoView()},t,s,i,function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(t){O.call(this,e,t)},function(){o=this.value,l(0,o)}]}class Ve extends i{constructor(e){super(),c(this,e,Oe,Ae,u,{type:8,label:1,placeholder:2,autofocus:3,value:0,scrollOnFocus:9,small:4,large:5})}}function je(e){let t,l;return{c(){t=f("h6"),l=h(e[0]),this.h()},l(s){t=d(s,"H6",{class:!0});var n=p(t);l=m(n,e[0]),n.forEach(v),this.h()},h(){$(t,"class","text-blueGray-600 text-sm mt-2 mb-6 font-bold uppercase")},m(e,s){g(e,t,s),b(t,l)},p(e,t){1&t&&y(l,e[0])},d(e){e&&v(t)}}}function Ge(e){let t,l,s,n,a,r=e[0]&&je(e);const o=e[3].default,i=V(o,e,e[2],null);return{c(){t=f("div"),r&&r.c(),l=x(),s=f("div"),i&&i.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);r&&r.l(n),l=w(n),s=d(n,"DIV",{class:!0});var a=p(s);i&&i.l(a),a.forEach(v),n.forEach(v),this.h()},h(){$(s,"class","px-4 inline-flex w-full flex-col flex-wrap gap-4"),$(t,"class",n=e[1].class)},m(e,n){g(e,t,n),r&&r.m(t,null),b(t,l),b(t,s),i&&i.m(s,null),a=!0},p(e,[s]){e[0]?r?r.p(e,s):(r=je(e),r.c(),r.m(t,l)):r&&(r.d(1),r=null),i&&i.p&&(!a||4&s)&&j(i,o,e,e[2],a?s:-1,null,null),(!a||2&s&&n!==(n=e[1].class))&&$(t,"class",n)},i(e){a||(G(i,e),a=!0)},o(e){_(i,e),a=!1},d(e){e&&v(t),r&&r.d(),i&&i.d(e)}}}function _e(e,t,l){let{$$slots:s={},$$scope:n}=t,{title:a}=t;return e.$$set=e=>{l(1,t=T(T({},t),A(e))),"title"in e&&l(0,a=e.title),"$$scope"in e&&l(2,n=e.$$scope)},t=A(t),[a,t,n,s]}class ze extends i{constructor(e){super(),c(this,e,_e,Ge,u,{title:0})}}function Ne(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(s){t=d(s,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","grid-about-me")},m(e,s){g(e,t,s),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Se(e){let t,l,s,n,a,r,o=e[1]&&Ne(e);return{c(){t=f("div"),o&&o.c(),l=x(),s=f("textarea"),this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);o&&o.l(n),l=w(n),s=d(n,"TEXTAREA",{id:!0,class:!0,rows:!0,placeholder:!0}),p(s).forEach(v),n.forEach(v),this.h()},h(){$(s,"id","grid-about-me"),$(s,"class","resize-none border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"),$(s,"rows",e[2]),$(s,"placeholder",e[3]),$(t,"class",n="relative w-full "+e[4].class)},m(n,i){g(n,t,i),o&&o.m(t,null),b(t,l),b(t,s),k(s,e[0]),a||(r=D(s,"input",e[5]),a=!0)},p(e,[a]){e[1]?o?o.p(e,a):(o=Ne(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),4&a&&$(s,"rows",e[2]),8&a&&$(s,"placeholder",e[3]),1&a&&k(s,e[0]),16&a&&n!==(n="relative w-full "+e[4].class)&&$(t,"class",n)},i:L,o:L,d(e){e&&v(t),o&&o.d(),a=!1,r()}}}function Pe(e,t,l){let{label:s=""}=t,{rows:n}=t,{value:a=""}=t,{placeholder:r=""}=t;return e.$$set=e=>{l(4,t=T(T({},t),A(e))),"label"in e&&l(1,s=e.label),"rows"in e&&l(2,n=e.rows),"value"in e&&l(0,a=e.value),"placeholder"in e&&l(3,r=e.placeholder)},t=A(t),[a,s,n,r,t,function(){a=this.value,l(0,a)}]}class Re extends i{constructor(e){super(),c(this,e,Pe,Se,u,{label:1,rows:2,value:0,placeholder:3})}}function Be(e){let t,l,s,n,a;const r=e[8].default,o=V(r,e,e[7],null);return{c(){t=f("button"),o&&o.c(),this.h()},l(e){t=d(e,"BUTTON",{class:!0,type:!0});var l=p(t);o&&o.l(l),l.forEach(v),this.h()},h(){$(t,"class",l="base "+e[6].class+" svelte-1jtuvbi"),$(t,"type","button"),E(t,"filled",!e[2]),E(t,"outlined",e[2]),E(t,"pressed",e[1]&&e[0]),E(t,"regular",!(e[3]||e[5])),E(t,"small",e[3]),E(t,"extrasmall",e[4]),E(t,"large",e[5])},m(l,r){g(l,t,r),o&&o.m(t,null),s=!0,n||(a=[D(t,"click",e[10]),D(t,"click",e[9])],n=!0)},p(e,[n]){o&&o.p&&(!s||128&n)&&j(o,r,e,e[7],s?n:-1,null,null),(!s||64&n&&l!==(l="base "+e[6].class+" svelte-1jtuvbi"))&&$(t,"class",l),68&n&&E(t,"filled",!e[2]),68&n&&E(t,"outlined",e[2]),67&n&&E(t,"pressed",e[1]&&e[0]),104&n&&E(t,"regular",!(e[3]||e[5])),72&n&&E(t,"small",e[3]),80&n&&E(t,"extrasmall",e[4]),96&n&&E(t,"large",e[5])},i(e){s||(G(o,e),s=!0)},o(e){_(o,e),s=!1},d(e){e&&v(t),o&&o.d(e),n=!1,I(a)}}}function Me(e,t,l){let{$$slots:s={},$$scope:n}=t,{toggle:a=!1}=t,{pressed:r=!1}=t,{outlined:o=!1}=t,{small:i=!1}=t,{extrasmall:c=!1}=t,{large:u=!1}=t;return e.$$set=e=>{l(6,t=T(T({},t),A(e))),"toggle"in e&&l(1,a=e.toggle),"pressed"in e&&l(0,r=e.pressed),"outlined"in e&&l(2,o=e.outlined),"small"in e&&l(3,i=e.small),"extrasmall"in e&&l(4,c=e.extrasmall),"large"in e&&l(5,u=e.large),"$$scope"in e&&l(7,n=e.$$scope)},t=A(t),[r,a,o,i,c,u,t,n,s,function(t){O.call(this,e,t)},()=>{l(0,r=a&&!r)}]}class We extends i{constructor(e){super(),c(this,e,Me,Be,u,{toggle:1,pressed:0,outlined:2,small:3,extrasmall:4,large:5})}}const Ye=e=>{const t=t=>{!e||e.contains(t.target)||t.defaultPrevented||e.dispatchEvent(new CustomEvent("clickedOutside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}};function Ce(e,t,l){const s=e.slice();return s[9]=t[l],s}function qe(e){let t,l;return{c(){t=f("label"),l=h(e[2]),this.h()},l(s){t=d(s,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[2]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","form-select")},m(e,s){g(e,t,s),b(t,l)},p(e,t){4&t&&y(l,e[2])},d(e){e&&v(t)}}}function Je(e,t){let l,s,n,a,r,o,i=t[9].label+"";function c(){return t[6](t[9])}return{key:e,first:null,c(){l=f("div"),s=h(i),n=x(),this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);s=m(t,i),n=w(t),t.forEach(v),this.h()},h(){$(l,"class",a="p-2 box-border hover:text-white pointer-events-auto hover:bg-teal-500 "+(t[0]===t[9].value?"bg-teal-500 text-white":"bg-white")),this.first=l},m(e,t){g(e,l,t),b(l,s),b(l,n),r||(o=D(l,"click",c),r=!0)},p(e,n){t=e,8&n&&i!==(i=t[9].label+"")&&y(s,i),9&n&&a!==(a="p-2 box-border hover:text-white pointer-events-auto hover:bg-teal-500 "+(t[0]===t[9].value?"bg-teal-500 text-white":"bg-white"))&&$(l,"class",a)},d(e){e&&v(l),r=!1,o()}}}function Fe(e){var t;let l,s,n,a,r,o,i,c,u,E,k,L,T,A,O=((null==(t=e[3].find(e[5]))?void 0:t.label)||"")+"",V=[],j=new Map,Y=e[2]&&qe(e);i=new z({props:{size:"24",class:"text-blueGray-600"}});let C=e[3];const q=e=>e[9].value;for(let f=0;f<C.length;f+=1){let t=Ce(e,C,f),l=q(t);j.set(l,V[f]=Je(l,t))}return{c(){l=f("div"),Y&&Y.c(),s=x(),n=f("div"),a=f("div"),r=h(O),o=x(),N(i.$$.fragment),c=x(),u=f("div");for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){l=d(e,"DIV",{class:!0});var t=p(l);Y&&Y.l(t),s=w(t),n=d(t,"DIV",{id:!0,class:!0});var f=p(n);a=d(f,"DIV",{});var h=p(a);r=m(h,O),h.forEach(v),o=w(f),S(i.$$.fragment,f),c=w(f),u=d(f,"DIV",{class:!0});var $=p(u);for(let l=0;l<V.length;l+=1)V[l].l($);$.forEach(v),f.forEach(v),t.forEach(v),this.h()},h(){$(u,"class",E="absolute box-border bg-white top-full rounded translate-y-2 left-0 w-full shadow z-30 transition-all duration-75 "+(e[1]?"opacity-100":"hidden opacity-0")),$(n,"id","form-select"),$(n,"class","relative rounded bg-white inline-flex gap-4 items-center justify-between shadow px-3 py-2 border text-blueGray-600 cursor-pointer box-border"),$(l,"class",k="inline-flex flex-col w-full "+e[4].class)},m(t,f){g(t,l,f),Y&&Y.m(l,null),b(l,s),b(l,n),b(n,a),b(a,r),b(n,o),P(i,n,null),b(n,c),b(n,u);for(let e=0;e<V.length;e+=1)V[e].m(u,null);L=!0,T||(A=[R(Ye.call(null,n)),D(n,"clickedOutside",e[7]),D(n,"click",e[8])],T=!0)},p(e,[t]){var n;e[2]?Y?Y.p(e,t):(Y=qe(e),Y.c(),Y.m(l,s)):Y&&(Y.d(1),Y=null),(!L||9&t)&&O!==(O=((null==(n=e[3].find(e[5]))?void 0:n.label)||"")+"")&&y(r,O),9&t&&(C=e[3],V=B(V,t,q,1,e,C,j,u,M,Je,null,Ce)),(!L||2&t&&E!==(E="absolute box-border bg-white top-full rounded translate-y-2 left-0 w-full shadow z-30 transition-all duration-75 "+(e[1]?"opacity-100":"hidden opacity-0")))&&$(u,"class",E),(!L||16&t&&k!==(k="inline-flex flex-col w-full "+e[4].class))&&$(l,"class",k)},i(e){L||(G(i.$$.fragment,e),L=!0)},o(e){_(i.$$.fragment,e),L=!1},d(e){e&&v(l),Y&&Y.d(),W(i);for(let t=0;t<V.length;t+=1)V[t].d();T=!1,I(A)}}}function Ue(e,t,l){let{value:s=""}=t,{open:n=!1}=t,{label:a}=t,{options:r=[]}=t;return e.$$set=e=>{l(4,t=T(T({},t),A(e))),"value"in e&&l(0,s=e.value),"open"in e&&l(1,n=e.open),"label"in e&&l(2,a=e.label),"options"in e&&l(3,r=e.options)},t=A(t),[s,n,a,r,t,e=>e.value===s,e=>{l(0,s=e.value)},()=>{l(1,n=!1)},()=>{l(1,n=!n)}]}class He extends i{constructor(e){super(),c(this,e,Ue,Fe,u,{value:0,open:1,label:2,options:3})}}function Xe(e,t,l){const s=e.slice();return s[8]=t[l],s[9]=t,s[10]=l,s}function Ke(e){let t,l;return{c(){t=f("label"),l=h(e[1]),this.h()},l(s){t=d(s,"LABEL",{class:!0,for:!0});var n=p(t);l=m(n,e[1]),n.forEach(v),this.h()},h(){$(t,"class","block uppercase text-blueGray-600 text-xs font-bold mb-2"),$(t,"for","form-toggle-button")},m(e,s){g(e,t,s),b(t,l)},p(e,t){2&t&&y(l,e[1])},d(e){e&&v(t)}}}function Ze(e){let t,l,s=e[8].label+"";return{c(){t=h(s),l=x()},l(e){t=m(e,s),l=w(e)},m(e,s){g(e,t,s),g(e,l,s)},p(e,l){4&l&&s!==(s=e[8].label+"")&&y(t,s)},d(e){e&&v(t),e&&v(l)}}}function Qe(e){let t,l,s;function n(t){e[5](t,e[8])}let a={toggle:!0,extrasmall:!0,outlined:!0,$$slots:{default:[Ze]},$$scope:{ctx:e}};return void 0!==e[4][e[8].value]&&(a.pressed=e[4][e[8].value]),t=new We({props:a}),F.push((()=>U(t,"pressed",n))),t.$on("click",(function(){return e[6](e[8])})),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),s=!0},p(s,n){e=s;const a={};2052&n&&(a.$$scope={dirty:n,ctx:e}),!l&&20&n&&(l=!0,a.pressed=e[4][e[8].value],Y((()=>l=!1))),t.$set(a)},i(e){s||(G(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){W(t,e)}}}function et(e){let t,l,s,n,a=e[1]&&Ke(e),r=e[2],o=[];for(let c=0;c<r.length;c+=1)o[c]=Qe(Xe(e,r,c));const i=e=>_(o[e],1,1,(()=>{o[e]=null}));return{c(){t=f("div"),a&&a.c(),l=x(),s=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0});var n=p(t);a&&a.l(n),l=w(n),s=d(n,"DIV",{id:!0,class:!0});var r=p(s);for(let t=0;t<o.length;t+=1)o[t].l(r);r.forEach(v),n.forEach(v),this.h()},h(){$(s,"id","form-toggle-button"),$(s,"class","box-border shadow bg-white rounded p-2 w-full gap-1 grid grid-cols-7 auto-cols-min"),$(t,"class","inline-flex flex-col w-full")},m(e,r){g(e,t,r),a&&a.m(t,null),b(t,l),b(t,s);for(let t=0;t<o.length;t+=1)o[t].m(s,null);n=!0},p(e,[n]){if(e[1]?a?a.p(e,n):(a=Ke(e),a.c(),a.m(t,l)):a&&(a.d(1),a=null),29&n){let t;for(r=e[2],t=0;t<r.length;t+=1){const l=Xe(e,r,t);o[t]?(o[t].p(l,n),G(o[t],1)):(o[t]=Qe(l),o[t].c(),G(o[t],1),o[t].m(s,null))}for(C(),t=r.length;t<o.length;t+=1)i(t);q()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)G(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)_(o[t]);n=!1},d(e){e&&v(t),a&&a.d(),J(o,e)}}}function tt(e,t,l){let{label:s=""}=t,{options:n=[]}=t,{multi:a}=t,{value:r=(a?[]:"")}=t;const o=Array.isArray(r)?r:[r];let i=Object.fromEntries(o.map((e=>[e,!0])));return e.$$set=e=>{"label"in e&&l(1,s=e.label),"options"in e&&l(2,n=e.options),"multi"in e&&l(3,a=e.multi),"value"in e&&l(0,r=e.value)},[r,s,n,a,i,function(t,s){e.$$.not_equal(i[s.value],t)&&(i[s.value]=t,l(4,i))},e=>{l(0,r=a?Object.entries(i).filter((([,e])=>e)).map((([e])=>e)):e.value),a||l(4,i={[e.value]:!0})}]}class lt extends i{constructor(e){super(),c(this,e,tt,et,u,{label:1,options:2,multi:3,value:0})}}function st(e,t,l){const s=e.slice();return s[17]=t[l],s[18]=t,s[19]=l,s}function nt(e){let t,l,s,n,a;return l=new K({props:{size:"24"}}),{c(){t=f("button"),N(l.$$.fragment),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var s=p(t);S(l.$$.fragment,s),s.forEach(v),this.h()},h(){$(t,"class","absolute text-blueGray-600 top-5 right-3")},m(r,o){g(r,t,o),P(l,t,null),s=!0,n||(a=D(t,"click",e[3]),n=!0)},p:L,i(e){s||(G(l.$$.fragment,e),s=!0)},o(e){_(l.$$.fragment,e),s=!1},d(e){e&&v(t),W(l),n=!1,a()}}}function at(e,t){let l,s,n,a;function r(e){t[11](e,t[19])}let o={small:!0,label:t[19]?"":"Lista de tarefas",scrollOnFocus:!0,placeholder:t[19]<t[2].checkList.length-1?"Deixe vazio para remover":"Nova tarefa"};return void 0!==t[2].checkList[t[19]].name&&(o.value=t[2].checkList[t[19]].name),s=new Ve({props:o}),F.push((()=>U(s,"value",r))),s.$on("blur",t[6]),s.$on("focus",(function(){return t[12](t[17])})),s.$on("keyup",t[8]),{key:e,first:null,c(){l=H(),N(s.$$.fragment),this.h()},l(e){l=H(),S(s.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(s,e,t),a=!0},p(e,l){t=e;const a={};4&l&&(a.label=t[19]?"":"Lista de tarefas"),4&l&&(a.placeholder=t[19]<t[2].checkList.length-1?"Deixe vazio para remover":"Nova tarefa"),!n&&4&l&&(n=!0,a.value=t[2].checkList[t[19]].name,Y((()=>n=!1))),s.$set(a)},i(e){a||(G(s.$$.fragment,e),a=!0)},o(e){_(s.$$.fragment,e),a=!1},d(e){e&&v(l),W(s,e)}}}function rt(e){let t,l,s;function n(t){e[15](t)}let a={label:"Dias do mês",multi:!0,options:new Array(31).fill(0).map(pt)};return void 0!==e[2].recurrence.monthDays&&(a.value=e[2].recurrence.monthDays),t=new lt({props:a}),F.push((()=>U(t,"value",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),s=!0},p(e,s){const n={};!l&&4&s&&(l=!0,n.value=e[2].recurrence.monthDays,Y((()=>l=!1))),t.$set(n)},i(e){s||(G(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){W(t,e)}}}function ot(e){let t,l,s;function n(t){e[14](t)}let a={label:"Dias da semana",multi:!0,options:Z.weekdays("narrow").map(dt)};return void 0!==e[2].recurrence.weekdays&&(a.value=e[2].recurrence.weekdays),t=new lt({props:a}),F.push((()=>U(t,"value",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),s=!0},p(e,s){const n={};!l&&4&s&&(l=!0,n.value=e[2].recurrence.weekdays,Y((()=>l=!1))),t.$set(n)},i(e){s||(G(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){W(t,e)}}}function it(e){var t;let l,s,n,a,r,o,i,c,u,h,m,b,y,E,k,D,L=[],I=new Map,T=(null==(t=e[0])?void 0:t._id)&&nt(e);function A(t){e[9](t)}let O={label:"Título",type:"text",autofocus:!0};function V(t){e[10](t)}void 0!==e[2].title&&(O.value=e[2].title),s=new Ve({props:O}),F.push((()=>U(s,"value",A)));let j={label:"Descrição",rows:5};void 0!==e[2].description&&(j.value=e[2].description),r=new Re({props:j}),F.push((()=>U(r,"value",V)));let z=e[2].checkList;const R=e=>e[17]._id;for(let f=0;f<z.length;f+=1){let t=st(e,z,f),l=R(t);I.set(l,L[f]=at(l,t))}function M(t){e[13](t)}let J={label:"Recorrência",options:Object.values(ye).map(ht)};void 0!==e[2].recurrence.type&&(J.value=e[2].recurrence.type),h=new He({props:J}),F.push((()=>U(h,"value",M)));const K=[ot,rt],Z=[];function Q(e,t){return e[2].recurrence.type===ye.EVERY_WEEK_DAYS.key?0:e[2].recurrence.type===ye.EVERY_MONTH_DAYS.key?1:-1}return~(y=Q(e))&&(E=Z[y]=K[y](e)),{c(){T&&T.c(),l=x(),N(s.$$.fragment),a=x(),N(r.$$.fragment),i=x(),c=f("div");for(let e=0;e<L.length;e+=1)L[e].c();u=x(),N(h.$$.fragment),b=x(),E&&E.c(),k=H(),this.h()},l(e){T&&T.l(e),l=w(e),S(s.$$.fragment,e),a=w(e),S(r.$$.fragment,e),i=w(e),c=d(e,"DIV",{class:!0});var t=p(c);for(let l=0;l<L.length;l+=1)L[l].l(t);t.forEach(v),u=w(e),S(h.$$.fragment,e),b=w(e),E&&E.l(e),k=H(),this.h()},h(){$(c,"class","inline-flex flex-col gap-2")},m(e,t){T&&T.m(e,t),g(e,l,t),P(s,e,t),g(e,a,t),P(r,e,t),g(e,i,t),g(e,c,t);for(let l=0;l<L.length;l+=1)L[l].m(c,null);g(e,u,t),P(h,e,t),g(e,b,t),~y&&Z[y].m(e,t),g(e,k,t),D=!0},p(e,t){var a;(null==(a=e[0])?void 0:a._id)?T?(T.p(e,t),1&t&&G(T,1)):(T=nt(e),T.c(),G(T,1),T.m(l.parentNode,l)):T&&(C(),_(T,1,1,(()=>{T=null})),q());const i={};!n&&4&t&&(n=!0,i.value=e[2].title,Y((()=>n=!1))),s.$set(i);const u={};!o&&4&t&&(o=!0,u.value=e[2].description,Y((()=>o=!1))),r.$set(u),452&t&&(z=e[2].checkList,C(),L=B(L,t,R,1,e,z,I,c,X,at,null,st),q());const f={};!m&&4&t&&(m=!0,f.value=e[2].recurrence.type,Y((()=>m=!1))),h.$set(f);let d=y;y=Q(e),y===d?~y&&Z[y].p(e,t):(E&&(C(),_(Z[d],1,1,(()=>{Z[d]=null})),q()),~y?(E=Z[y],E?E.p(e,t):(E=Z[y]=K[y](e),E.c()),G(E,1),E.m(k.parentNode,k)):E=null)},i(e){if(!D){G(T),G(s.$$.fragment,e),G(r.$$.fragment,e);for(let e=0;e<z.length;e+=1)G(L[e]);G(h.$$.fragment,e),G(E),D=!0}},o(e){_(T),_(s.$$.fragment,e),_(r.$$.fragment,e);for(let t=0;t<L.length;t+=1)_(L[t]);_(h.$$.fragment,e),_(E),D=!1},d(e){T&&T.d(e),e&&v(l),W(s,e),e&&v(a),W(r,e),e&&v(i),e&&v(c);for(let t=0;t<L.length;t+=1)L[t].d();e&&v(u),W(h,e),e&&v(b),~y&&Z[y].d(e),e&&v(k)}}}function ct(e){let t;return{c(){t=h("Cancelar")},l(e){t=m(e,"Cancelar")},m(e,l){g(e,t,l)},d(e){e&&v(t)}}}function ut(e){let t,l=e[0]._id?"Salvar":"Adicionar";return{c(){t=h(l)},l(e){t=m(e,l)},m(e,l){g(e,t,l)},p(e,s){1&s&&l!==(l=e[0]._id?"Salvar":"Adicionar")&&y(t,l)},d(e){e&&v(t)}}}function ft(e){let t,l,s,n,a,r,o,i;return l=new ze({props:{title:"Atividade",class:"bg-blueGray-100 p-4 relative rounded shadow mb-4",$$slots:{default:[it]},$$scope:{ctx:e}}}),a=new We({props:{class:"!bg-blueGray-100 !text-blueGray-600",$$slots:{default:[ct]},$$scope:{ctx:e}}}),a.$on("click",e[4]),o=new We({props:{class:"!bg-teal-500",$$slots:{default:[ut]},$$scope:{ctx:e}}}),o.$on("click",e[5]),{c(){t=f("div"),N(l.$$.fragment),s=x(),n=f("div"),N(a.$$.fragment),r=x(),N(o.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var i=p(t);S(l.$$.fragment,i),s=w(i),n=d(i,"DIV",{class:!0});var c=p(n);S(a.$$.fragment,c),r=w(c),S(o.$$.fragment,c),c.forEach(v),i.forEach(v),this.h()},h(){$(n,"class","box-border mt-auto w-full bottom-2 inline-flex justify-evenly mb-4 mt-auto"),$(t,"class","fixed z-20 right-0 left-0 bottom-0 top-0 p-4 overflow-y-scroll inline-flex justify-start flex-col bg-blueGray-600 h-full")},m(c,u){g(c,t,u),P(l,t,null),b(t,s),b(t,n),P(a,n,null),b(n,r),P(o,n,null),e[16](t),i=!0},p(e,[t]){const s={};1048581&t&&(s.$$scope={dirty:t,ctx:e}),l.$set(s);const n={};1048576&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n);const r={};1048577&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){i||(G(l.$$.fragment,e),G(a.$$.fragment,e),G(o.$$.fragment,e),i=!0)},o(e){_(l.$$.fragment,e),_(a.$$.fragment,e),_(o.$$.fragment,e),i=!1},d(s){s&&v(t),W(l),W(a),W(o),e[16](null)}}}const ht=({key:e,label:t})=>({value:e,label:t}),dt=(e,t)=>({label:e,value:t+1}),pt=(e,t)=>({label:t+1,value:t+1});function mt(e,s,n){let a,{activity:r}=s,i=r.toJS();i.checkList=[...i.checkList,be().toJS()];const c=e=>{e.name||n(2,i.checkList=[...i.checkList,be().toJS()],i)};return e.$$set=e=>{"activity"in e&&n(0,r=e.activity)},[r,a,i,()=>{xe(r),n(0,r=null)},()=>{n(0,r=null)},()=>{var e,s;we(Ee((e=o(o({},r.toJS()),i),s={checkList:i.checkList.filter((({name:e})=>e)),_id:r._id},t(e,l(s))))),n(0,r=null)},()=>{const e=i.checkList.pop(),t=e.name?be().toJS():e;n(2,i.checkList=[...i.checkList.filter((({name:e})=>e)),t],i)},c,e=>{var t,l;if("Enter"===e.key){const s=null==(l=null==(t=e.target.parentElement)?void 0:t.nextElementSibling)?void 0:l.firstElementChild;if(s&&"input"===s.localName)return void s.focus();console.error("Not an input element. You'll to fix this ugly workaround code.")}},function(t){e.$$.not_equal(i.title,t)&&(i.title=t,n(2,i))},function(t){e.$$.not_equal(i.description,t)&&(i.description=t,n(2,i))},function(t,l){e.$$.not_equal(i.checkList[l].name,t)&&(i.checkList[l].name=t,n(2,i))},e=>c(e),function(t){e.$$.not_equal(i.recurrence.type,t)&&(i.recurrence.type=t,n(2,i))},function(t){e.$$.not_equal(i.recurrence.weekdays,t)&&(i.recurrence.weekdays=t,n(2,i))},function(t){e.$$.not_equal(i.recurrence.monthDays,t)&&(i.recurrence.monthDays=t,n(2,i))},function(e){F[e?"unshift":"push"]((()=>{a=e,n(1,a)}))}]}class vt extends i{constructor(e){super(),c(this,e,mt,ft,u,{activity:0})}}function $t(e){let t,l,s,n,a,r=Q.fromISO(e[0].recurrence.nextDate).toLocal().toLocaleString(Q.DATETIME_SHORT)+"";return{c(){t=f("p"),l=h("Próxima data: "),s=h(" "),n=x(),a=h(r),this.h()},l(e){t=d(e,"P",{class:!0});var o=p(t);l=m(o,"Próxima data: "),s=m(o," "),n=w(o),a=m(o,r),o.forEach(v),this.h()},h(){$(t,"class","text-xs font-light")},m(e,r){g(e,t,r),b(t,l),b(t,s),b(t,n),b(t,a)},p(e,t){1&t&&r!==(r=Q.fromISO(e[0].recurrence.nextDate).toLocal().toLocaleString(Q.DATETIME_SHORT)+"")&&y(a,r)},d(e){e&&v(t)}}}function gt(e){let t,l,s,n,a,r,o,i=e[0].title+"",c=e[0].state===ke.WAITING.key&&$t(e);return{c(){t=f("div"),l=f("div"),s=f("div"),n=h(i),a=x(),c&&c.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var r=p(t);l=d(r,"DIV",{class:!0});var o=p(l);s=d(o,"DIV",{});var u=p(s);n=m(u,i),u.forEach(v),o.forEach(v),a=w(r),c&&c.l(r),r.forEach(v),this.h()},h(){$(l,"class","inline-flex justify-between gap-1 items-center w-full"),$(t,"class","w-full p-2 inline-flex bg-white text-blueGray-800 border-l-4 border-blueGray-500 flex-col gap-2 shadow-md border rounded")},m(i,u){g(i,t,u),b(t,l),b(l,s),b(s,n),b(t,a),c&&c.m(t,null),r||(o=D(t,"click",e[1]),r=!0)},p(e,[l]){1&l&&i!==(i=e[0].title+"")&&y(n,i),e[0].state===ke.WAITING.key?c?c.p(e,l):(c=$t(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i:L,o:L,d(e){e&&v(t),c&&c.d(),r=!1,o()}}}function bt(e,t,l){let{activity:s}=t;return e.$$set=e=>{"activity"in e&&l(0,s=e.activity)},[s,function(t){O.call(this,e,t)}]}class yt extends i{constructor(e){super(),c(this,e,bt,gt,u,{activity:0})}}function xt(e,t=400){let l,s;const n=()=>{clearTimeout(l)},a=e=>{const t=e.touches?e.touches[0]:e;let n=t.clientX,a=t.clientY,r=n-s.x,o=a-s.y;r*r+o*o>50&&clearTimeout(l)},r=o=>{const i=o.touches?o.touches[0]:o;s={x:i.clientX,y:i.clientY},l=setTimeout((()=>{e.removeEventListener("mousedown",r),e.removeEventListener("touchStart",r),e.removeEventListener("mouseup",n),e.removeEventListener("touchend",n),e.dispatchEvent(new CustomEvent("longpress",{detail:{startDragPosition:s}}))}),t),e.addEventListener("mouseup",n),e.addEventListener("mousemove",a),e.addEventListener("touchend",n),e.addEventListener("touchmove",a)};return e.addEventListener("mousedown",r),e.addEventListener("touchstart",r),{update(e){t=e},destroy(){e.removeEventListener("mousedown",r),e.removeEventListener("touchStart",r),e.removeEventListener("mouseup",n),e.removeEventListener("touchend",n),e.removeEventListener("mousemove",a)}}}function wt(e){let t,l,s,n,a;return{c(){t=f("div"),l=h(e[0]),s=x(),n=f("hr"),this.h()},l(a){t=d(a,"DIV",{class:!0});var r=p(t);l=m(r,e[0]),s=w(r),n=d(r,"HR",{class:!0}),r.forEach(v),this.h()},h(){$(n,"class","flex-1 w-full"),$(t,"class",a="inline-flex text-blueGray-800 font-light uppercase items-center gap-2 w-full "+e[1].class)},m(e,a){g(e,t,a),b(t,l),b(t,s),b(t,n)},p(e,[s]){1&s&&y(l,e[0]),2&s&&a!==(a="inline-flex text-blueGray-800 font-light uppercase items-center gap-2 w-full "+e[1].class)&&$(t,"class",a)},i:L,o:L,d(e){e&&v(t)}}}function Et(e,t,l){let{title:s=""}=t;return e.$$set=e=>{l(1,t=T(T({},t),A(e))),"title"in e&&l(0,s=e.title)},t=A(t),[s,t]}class kt extends i{constructor(e){super(),c(this,e,Et,wt,u,{title:0})}}function Dt(e,t,l){const s=e.slice();return s[13]=t[l],s[15]=l,s}function Lt(e,t,l){const s=e.slice();return s[13]=t[l],s[15]=l,s}function It(e,t,l){const s=e.slice();return s[13]=t[l],s[15]=l,s}function Tt(e){let t,l;return t=new de({props:{size:"24"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){P(t,e,s),l=!0},i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function At(e){let t,l;return t=new pe({props:{size:"24"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){P(t,e,s),l=!0},i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function Ot(e){let t,l,s,n,a,r,o,i,c,u,y,E,k,D,L,I,T,A,O,V,j,z,R,B,M,Y,C,q,J,F,U,H,X,K,Z,Q,se,ne,ae,re,oe,ce,ue=!1;return z=new kt({props:{title:"Contato",class:"text-white mt-4"}}),se=new kt({props:{title:"Versão",class:"text-white mt-4"}}),{c(){t=f("div"),l=x(),s=f("div"),n=f("p"),a=h("by Suaveware"),r=x(),o=f("p"),i=h("Este aplicativo é de código livre sob a licença GPL-3 e seu código\n\t\t\t\t\t\tfonte\n\t\t\t\t\t\testá disponível neste\n\t\t\t\t\t\t"),c=f("a"),u=h("repositório no Github"),y=h("\n\t\t\t\t\t\t."),E=x(),k=f("p"),D=h("Distribuído como "),L=f("i"),I=h("progressive web app"),T=h(" (PWA) através do\n\t\t\t\t\t\tendereço:"),A=x(),O=f("a"),V=h("https://pronto.suaveware.dev"),j=x(),N(z.$$.fragment),R=x(),B=f("div"),M=f("p"),Y=h("Email: luizcarlos1405@suaveware.dev"),C=x(),q=f("p"),J=h("Twitter: @semmilho"),F=x(),U=f("p"),H=h("YouTube: RSensato"),X=x(),K=f("p"),Z=h("TikTok: @RSensato"),Q=x(),N(se.$$.fragment),ne=x(),ae=f("div"),re=h("1.0.4"),this.h()},l(e){t=d(e,"DIV",{class:!0,style:!0});var f=p(t);l=w(f),s=d(f,"DIV",{class:!0});var h=p(s);n=d(h,"P",{});var $=p(n);a=m($,"by Suaveware"),$.forEach(v),r=w(h),o=d(h,"P",{class:!0});var g=p(o);i=m(g,"Este aplicativo é de código livre sob a licença GPL-3 e seu código\n\t\t\t\t\t\tfonte\n\t\t\t\t\t\testá disponível neste\n\t\t\t\t\t\t"),c=d(g,"A",{class:!0,href:!0});var b=p(c);u=m(b,"repositório no Github"),b.forEach(v),y=m(g,"\n\t\t\t\t\t\t."),g.forEach(v),E=w(h),k=d(h,"P",{class:!0});var x=p(k);D=m(x,"Distribuído como "),L=d(x,"I",{});var G=p(L);I=m(G,"progressive web app"),G.forEach(v),T=m(x," (PWA) através do\n\t\t\t\t\t\tendereço:"),x.forEach(v),A=w(h),O=d(h,"A",{class:!0,href:!0});var _=p(O);V=m(_,"https://pronto.suaveware.dev"),_.forEach(v),j=w(h),S(z.$$.fragment,h),R=w(h),B=d(h,"DIV",{class:!0});var N=p(B);M=d(N,"P",{});var P=p(M);Y=m(P,"Email: luizcarlos1405@suaveware.dev"),P.forEach(v),C=w(N),q=d(N,"P",{});var W=p(q);J=m(W,"Twitter: @semmilho"),W.forEach(v),F=w(N),U=d(N,"P",{});var ee=p(U);H=m(ee,"YouTube: RSensato"),ee.forEach(v),X=w(N),K=d(N,"P",{});var te=p(K);Z=m(te,"TikTok: @RSensato"),te.forEach(v),N.forEach(v),Q=w(h),S(se.$$.fragment,h),ne=w(h),ae=d(h,"DIV",{class:!0});var le=p(ae);re=m(le,"1.0.4"),le.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){$(c,"class","underline"),$(c,"href","https://github.com/luizcarlos1405/pronto"),$(o,"class","text-base text-justify"),$(k,"class","text-base text-justify"),$(O,"class","underline text-base w-full"),$(O,"href","https://pronto.suaveware.dev"),$(B,"class","inline-flex text-base w-full flex-col gap-2"),$(ae,"class","text-sm"),$(s,"class","inline-flex flex-col items-center pt-4 gap-2 w-full"),$(t,"class","text-white px-4 py-8 overflow-y-scroll inline-flex gap-2 text-xl flex-col items-stretch w-full"),ee(t,"height","76vh")},m(e,f){g(e,t,f),b(t,l),b(t,s),b(s,n),b(n,a),b(s,r),b(s,o),b(o,i),b(o,c),b(c,u),b(o,y),b(s,E),b(s,k),b(k,D),b(k,L),b(L,I),b(k,T),b(s,A),b(s,O),b(O,V),b(s,j),P(z,s,null),b(s,R),b(s,B),b(B,M),b(M,Y),b(B,C),b(B,q),b(q,J),b(B,F),b(B,U),b(U,H),b(B,X),b(B,K),b(K,Z),b(s,Q),P(se,s,null),b(s,ne),b(s,ae),b(ae,re),ce=!0},p(e,t){},i(e){ce||(G(ue),G(z.$$.fragment,e),G(se.$$.fragment,e),te((()=>{oe||(oe=le(t,ie,{duration:Yt},!0)),oe.run(1)})),ce=!0)},o(e){_(ue),_(z.$$.fragment,e),_(se.$$.fragment,e),oe||(oe=le(t,ie,{duration:Yt},!1)),oe.run(0),ce=!1},d(e){e&&v(t),W(z),W(se),e&&oe&&oe.end()}}}function Vt(e){let t,l;return{c(){t=f("span"),l=h('No activities, click the "+" icon to add more.'),this.h()},l(e){t=d(e,"SPAN",{class:!0});var s=p(t);l=m(s,'No activities, click the "+" icon to add more.'),s.forEach(v),this.h()},h(){$(t,"class","text-blueGray-800")},m(e,s){g(e,t,s),b(t,l)},d(e){e&&v(t)}}}function jt(e){let t,l,s,n,a,r=[],o=new Map,i=e[5];const c=e=>e[13]._id;for(let u=0;u<i.length;u+=1){let t=It(e,i,u),l=c(t);o.set(l,r[u]=Gt(l,t))}return{c(){t=f("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0});var l=p(t);for(let t=0;t<r.length;t+=1)r[t].l(l);l.forEach(v),this.h()},h(){$(t,"class","w-full mb-10 flex-col inline-flex gap-2")},m(o,i){g(o,t,i);for(let e=0;e<r.length;e+=1)r[e].m(t,null);s=!0,n||(a=[R(l=se.call(null,t,{items:e[5],dragDisabled:e[3],flipDurationMs:Wt,customStartEvent:"longpress"})),D(t,"consider",e[9]),D(t,"finalize",e[9])],n=!0)},p(e,s){if(288&s){i=e[5],C();for(let e=0;e<r.length;e+=1)r[e].r();r=B(r,s,c,1,e,i,o,t,fe,Gt,null,It);for(let e=0;e<r.length;e+=1)r[e].a();q()}l&&ne(l.update)&&40&s&&l.update.call(null,{items:e[5],dragDisabled:e[3],flipDurationMs:Wt,customStartEvent:"longpress"})},i(e){if(!s){for(let e=0;e<i.length;e+=1)G(r[e]);s=!0}},o(e){for(let t=0;t<r.length;t+=1)_(r[t]);s=!1},d(e){e&&v(t);for(let t=0;t<r.length;t+=1)r[t].d();n=!1,I(a)}}}function Gt(e,t){let l,s,n,a,r,o,i,c=L;return s=new yt({props:{activity:t[13]}}),s.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=f("span"),N(s.$$.fragment),n=x(),this.h()},l(e){l=d(e,"SPAN",{});var t=p(l);S(s.$$.fragment,t),n=w(t),t.forEach(v),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(s,l,null),b(l,n),r=!0,o||(i=R(xt.call(null,l)),o=!0)},p(e,l){t=e;const n={};32&l&&(n.activity=t[13]),s.$set(n)},r(){a=l.getBoundingClientRect()},f(){ce(l),c()},a(){c(),c=ue(l,a,me,{duration:Wt})},i(e){r||(G(s.$$.fragment,e),r=!0)},o(e){_(s.$$.fragment,e),r=!1},d(e){e&&v(l),W(s),o=!1,i()}}}function _t(e){let t,l;return t=new kt({props:{title:ke.WAITING.label,class:"mt-4"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){P(t,e,s),l=!0},p:L,i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function zt(e,t){let l,s,n;return s=new yt({props:{activity:t[13]}}),s.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=H(),N(s.$$.fragment),this.h()},l(e){l=H(),S(s.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(s,e,t),n=!0},p(e,l){t=e;const n={};1&l&&(n.activity=t[13]),s.$set(n)},i(e){n||(G(s.$$.fragment,e),n=!0)},o(e){_(s.$$.fragment,e),n=!1},d(e){e&&v(l),W(s,e)}}}function Nt(e){let t,l;return t=new kt({props:{title:ke.DONE.label,class:"mt-4"}}),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){P(t,e,s),l=!0},p:L,i(e){l||(G(t.$$.fragment,e),l=!0)},o(e){_(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function St(e,t){let l,s,n;return s=new yt({props:{activity:t[13]}}),s.$on("click",(function(){ne(t[8](t[13]._id))&&t[8](t[13]._id).apply(this,arguments)})),{key:e,first:null,c(){l=H(),N(s.$$.fragment),this.h()},l(e){l=H(),S(s.$$.fragment,e),this.h()},h(){this.first=l},m(e,t){g(e,l,t),P(s,e,t),n=!0},p(e,l){t=e;const n={};1&l&&(n.activity=t[13]),s.$set(n)},i(e){n||(G(s.$$.fragment,e),n=!0)},o(e){_(s.$$.fragment,e),n=!1},d(e){e&&v(l),W(s,e)}}}function Pt(e){let t,l,s,n,a,r,o;s=new ve({props:{size:e[1].activities.size?"20":"28"}});let i=e[1].activities.size&&Bt(e);return{c(){t=f("div"),l=f("button"),N(s.$$.fragment),n=x(),i&&i.c(),this.h()},l(e){t=d(e,"DIV",{class:!0});var a=p(t);l=d(a,"BUTTON",{class:!0});var r=p(l);S(s.$$.fragment,r),r.forEach(v),n=w(a),i&&i.l(a),a.forEach(v),this.h()},h(){$(l,"class","fab svelte-7tyjzi"),E(l,"small",!!e[1].activities.size),$(t,"class","fixed bottom-4 text-blueGray-600 right-4 gap-3 items-center inline-flex flex-col")},m(c,u){g(c,t,u),b(t,l),P(s,l,null),b(t,n),i&&i.m(t,null),a=!0,r||(o=D(l,"click",e[7]),r=!0)},p(e,n){const a={};2&n&&(a.size=e[1].activities.size?"20":"28"),s.$set(a),2&n&&E(l,"small",!!e[1].activities.size),e[1].activities.size?i?(i.p(e,n),2&n&&G(i,1)):(i=Bt(e),i.c(),G(i,1),i.m(t,null)):i&&(C(),_(i,1,1,(()=>{i=null})),q())},i(e){a||(G(s.$$.fragment,e),G(i),a=!0)},o(e){_(s.$$.fragment,e),_(i),a=!1},d(e){e&&v(t),W(s),i&&i.d(),r=!1,o()}}}function Rt(e){let t,l,s;function n(t){e[12](t)}let a={};return void 0!==e[4]&&(a.activity=e[4]),t=new vt({props:a}),F.push((()=>U(t,"activity",n))),{c(){N(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){P(t,e,l),s=!0},p(e,s){const n={};!l&&16&s&&(l=!0,n.activity=e[4],Y((()=>l=!1))),t.$set(n)},i(e){s||(G(t.$$.fragment,e),s=!0)},o(e){_(t.$$.fragment,e),s=!1},d(e){W(t,e)}}}function Bt(e){let t,l,s,n,a;return l=new $e({props:{size:"28"}}),{c(){t=f("button"),N(l.$$.fragment),this.h()},l(e){t=d(e,"BUTTON",{class:!0});var s=p(t);S(l.$$.fragment,s),s.forEach(v),this.h()},h(){$(t,"class","fab svelte-7tyjzi")},m(r,o){g(r,t,o),P(l,t,null),s=!0,n||(a=D(t,"click",e[6]),n=!0)},p:L,i(e){s||(G(l.$$.fragment,e),s=!0)},o(e){_(l.$$.fragment,e),s=!1},d(e){e&&v(t),W(l),n=!1,a()}}}function Mt(e){var t,l;let s,n,a,r,o,i,c,u,y,k,L,I,T,A,O,V,j,z,N,S,P,R,M,W,Y,J=null==(t=e[0].get(ke.WAITING.key))?void 0:t.size,F=[],U=new Map,K=null==(l=e[0].get(ke.DONE.key))?void 0:l.size,Z=[],Q=new Map;const ee=[At,Tt],te=[];function le(e,t){return e[3]?0:1}u=le(e),y=te[u]=ee[u](e);let se=e[3]&&Ot(),ne=!e[1].activities.size&&Vt(),oe=e[5].length&&jt(e),ie=J&&_t(),ce=e[0].get(ke.WAITING.key,ae()).toArray();const ue=e=>e[13]._id;for(let f=0;f<ce.length;f+=1){let t=Lt(e,ce,f),l=ue(t);U.set(l,F[f]=zt(l,t))}let fe=K&&Nt(),he=e[0].get(ke.DONE.key,ae()).toArray();const de=e=>e[13]._id;for(let f=0;f<he.length;f+=1){let t=Dt(e,he,f),l=de(t);Q.set(l,Z[f]=St(l,t))}const pe=[Rt,Pt],me=[];function ve(e,t){return e[4]?0:e[3]?-1:1}return~(S=ve(e))&&(P=me[S]=pe[S](e)),{c(){s=x(),n=f("div"),a=f("div"),r=f("div"),o=h("Pronto"),i=x(),c=f("div"),y.c(),k=x(),L=f("div"),se&&se.c(),I=x(),T=f("div"),ne&&ne.c(),A=x(),oe&&oe.c(),O=x(),ie&&ie.c(),V=x();for(let e=0;e<F.length;e+=1)F[e].c();j=x(),fe&&fe.c(),z=x();for(let e=0;e<Z.length;e+=1)Z[e].c();N=x(),P&&P.c(),R=H(),this.h()},l(e){re('[data-svelte="svelte-13bco32"]',document.head).forEach(v),s=w(e),n=d(e,"DIV",{class:!0});var t=p(n);a=d(t,"DIV",{class:!0});var l=p(a);r=d(l,"DIV",{class:!0});var u=p(r);o=m(u,"Pronto"),u.forEach(v),i=w(l),c=d(l,"DIV",{class:!0});var f=p(c);y.l(f),f.forEach(v),l.forEach(v),k=w(t),L=d(t,"DIV",{class:!0});var h=p(L);se&&se.l(h),h.forEach(v),I=w(t),T=d(t,"DIV",{class:!0});var $=p(T);ne&&ne.l($),A=w($),oe&&oe.l($),O=w($),ie&&ie.l($),V=w($);for(let s=0;s<F.length;s+=1)F[s].l($);j=w($),fe&&fe.l($),z=w($);for(let s=0;s<Z.length;s+=1)Z[s].l($);$.forEach(v),t.forEach(v),N=w(e),P&&P.l(e),R=H(),this.h()},h(){document.title="Pronto",$(r,"class","text-2xl"),$(c,"class","cursor-pointer"),$(a,"class","flex justify-between items-center pb-8 px-4 pt-4 text-white rounded-b w-full"),$(L,"class","transition-all ease-in-out duration-500 max-h-screen opacity-100 svelte-7tyjzi"),E(L,"hide",!e[3]),$(T,"class","p-4 pt-6 flex-grow transition-all duration-300 overflow-y-scroll flex-col bg-white shadow border-bluGray-400 inline-flex rounded-t-2xl gap-2 svelte-7tyjzi"),E(T,"overflowhidden",e[3]),$(n,"class","flex flex-col items-stretch bg-blueGray-600 h-full overflow-hidden")},m(t,l){g(t,s,l),g(t,n,l),b(n,a),b(a,r),b(r,o),b(a,i),b(a,c),te[u].m(c,null),b(n,k),b(n,L),se&&se.m(L,null),b(n,I),b(n,T),ne&&ne.m(T,null),b(T,A),oe&&oe.m(T,null),b(T,O),ie&&ie.m(T,null),b(T,V);for(let e=0;e<F.length;e+=1)F[e].m(T,null);b(T,j),fe&&fe.m(T,null),b(T,z);for(let e=0;e<Z.length;e+=1)Z[e].m(T,null);e[11](T),g(t,N,l),~S&&me[S].m(t,l),g(t,R,l),M=!0,W||(Y=D(c,"click",e[10]),W=!0)},p(e,[t]){var l,s;let n=u;u=le(e),u!==n&&(C(),_(te[n],1,1,(()=>{te[n]=null})),q(),y=te[u],y||(y=te[u]=ee[u](e),y.c()),G(y,1),y.m(c,null)),e[3]?se?(se.p(e,t),8&t&&G(se,1)):(se=Ot(),se.c(),G(se,1),se.m(L,null)):se&&(C(),_(se,1,1,(()=>{se=null})),q()),8&t&&E(L,"hide",!e[3]),e[1].activities.size?ne&&(ne.d(1),ne=null):ne||(ne=Vt(),ne.c(),ne.m(T,A)),e[5].length?oe?(oe.p(e,t),32&t&&G(oe,1)):(oe=jt(e),oe.c(),G(oe,1),oe.m(T,O)):oe&&(C(),_(oe,1,1,(()=>{oe=null})),q()),1&t&&(J=null==(l=e[0].get(ke.WAITING.key))?void 0:l.size),J?ie?(ie.p(e,t),1&t&&G(ie,1)):(ie=_t(),ie.c(),G(ie,1),ie.m(T,V)):ie&&(C(),_(ie,1,1,(()=>{ie=null})),q()),257&t&&(ce=e[0].get(ke.WAITING.key,ae()).toArray(),C(),F=B(F,t,ue,1,e,ce,U,T,X,zt,j,Lt),q()),1&t&&(K=null==(s=e[0].get(ke.DONE.key))?void 0:s.size),K?fe?(fe.p(e,t),1&t&&G(fe,1)):(fe=Nt(),fe.c(),G(fe,1),fe.m(T,z)):fe&&(C(),_(fe,1,1,(()=>{fe=null})),q()),257&t&&(he=e[0].get(ke.DONE.key,ae()).toArray(),C(),Z=B(Z,t,de,1,e,he,Q,T,X,St,null,Dt),q()),8&t&&E(T,"overflowhidden",e[3]);let a=S;S=ve(e),S===a?~S&&me[S].p(e,t):(P&&(C(),_(me[a],1,1,(()=>{me[a]=null})),q()),~S?(P=me[S],P?P.p(e,t):(P=me[S]=pe[S](e),P.c()),G(P,1),P.m(R.parentNode,R)):P=null)},i(e){if(!M){G(y),G(se),G(oe),G(ie);for(let e=0;e<ce.length;e+=1)G(F[e]);G(fe);for(let e=0;e<he.length;e+=1)G(Z[e]);G(P),M=!0}},o(e){_(y),_(se),_(oe),_(ie);for(let t=0;t<F.length;t+=1)_(F[t]);_(fe);for(let t=0;t<Z.length;t+=1)_(Z[t]);_(P),M=!1},d(t){t&&v(s),t&&v(n),te[u].d(),se&&se.d(),ne&&ne.d(),oe&&oe.d(),ie&&ie.d();for(let e=0;e<F.length;e+=1)F[e].d();fe&&fe.d();for(let e=0;e<Z.length;e+=1)Z[e].d();e[11](null),t&&v(N),~S&&me[S].d(t),t&&v(R),W=!1,Y()}}}const Wt=100,Yt=500;function Ct(e,t,l){let s,n;oe(e,Le,(e=>l(1,s=e)));let a,r,o=!1,i=null;return e.$$.update=()=>{3&e.$$.dirty&&(l(0,a=s.activities.groupBy((e=>e.state))),l(5,r=a.get(ke.READY.key,ae()).toJS()))},[a,s,n,o,i,r,()=>{ge(`${Ie}/focus`)},()=>{l(4,i=Ee())},e=>()=>{l(4,i=s.activities.find((t=>t._id===e)))},({detail:e})=>{l(5,r=e.items),e.info.trigger===he.DRAG_STARTED&&(n.classList.add("overflow-hidden"),n.classList.remove("overflow-y-scroll")),e.info.trigger.includes("dropped")&&(n.classList.add("overflow-y-scroll"),n.classList.remove("overflow-hidden")),e.info.trigger===he.DROPPED_INTO_ZONE&&De(e.items)},()=>{l(3,o=!o)},function(e){F[e?"unshift":"push"]((()=>{n=e,l(2,n)}))},function(e){i=e,l(4,i)}]}export default class extends i{constructor(e){super(),c(this,e,Ct,Mt,u,{})}}
