var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(e,r,o)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;import{D as i,S as c,i as l,s as p,E as u,e as f,c as d,a as w,d as b,b as m,f as h,F as v,v as y,r as O,G as $}from"../chunks/vendor-9b7a0713.js";import{i as j,d as k,A as E,R as T,s as I,a as R,b as g}from"../chunks/state-6898c16f.js";let A=()=>{};if(j()){const t=500;window.prontoTick=()=>{};const e=setInterval((()=>window.prontoTick({timer:e,timeout:t})),t);window.prontoTickTimer=e,A=t=>{const e=window.prontoTick;window.prontoTick=(...r)=>{e(...r),t(...r)},window.prontoTick()}}A((()=>{k.activities.filter((({state:t,recurrence:e})=>t===E.WAITING&&(null==e?void 0:e.type)&&e.type!==T.NO_RECURRENCE&&!!e.nextDate&&i.fromISO(e.nextDate).startOf("day").diffNow().toMillis()<=0)).toArray().then((t=>{t.forEach((t=>{var i,c;console.log("Reactivating activity: ",t),I(R((i=((t,e)=>{for(var r in e||(e={}))s.call(e,r)&&n(t,r,e[r]);if(o)for(var r of o(e))a.call(e,r)&&n(t,r,e[r]);return t})({},t),c={recurrence:g(t.recurrence),state:E.READY},e(i,r(c)))))}))}))}));function D(t){let e,r;const o=t[1].default,s=u(o,t,t[0],null);return{c(){e=f("main"),s&&s.c(),this.h()},l(t){e=d(t,"MAIN",{class:!0});var r=w(e);s&&s.l(r),r.forEach(b),this.h()},h(){m(e,"class","w-full h-full")},m(t,o){h(t,e,o),s&&s.m(e,null),r=!0},p(t,[e]){s&&s.p&&(!r||1&e)&&v(s,o,t,t[0],r?e:-1,null,null)},i(t){r||(y(s,t),r=!0)},o(t){O(s,t),r=!1},d(t){t&&b(e),s&&s.d(t)}}}function N(t,e,r){let{$$slots:o={},$$scope:s}=e;return $("_id"),t.$$set=t=>{"$$scope"in t&&r(0,s=t.$$scope)},[s,o]}export default class extends c{constructor(t){super(),l(this,t,N,D,p,{})}}
