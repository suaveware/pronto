var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))o.call(t,r)&&s(e,r,t[r]);return e},n=(e,i)=>t(e,r(i));import{D as d,H as y,R as l,L as v,C as p,I as u}from"./vendor-7f99f88b.js";const f={READY:{key:"ready",label:"Próximo"},DONE:{key:"done",label:"Finalizado"},WAITING:{key:"waiting",label:"Aguardando"}},m={NO_RECURRENCE:{key:"no_recurrence",label:"Sem recorrência"},EVERY_WEEK_DAYS:{key:"every_week_days",label:"Por dias da semana"},EVERY_MONTH_DAYS:{key:"every_month_days",label:"Por dias do mês"}},_=()=>"undefined"!=typeof window;let w;_()&&(w=new y("pronto"),w.version(3).stores({activities:"_id,order"}),window.dexieDb=w);const O=(e={})=>l(c({type:"no_recurrence",weekdays:v(),monthDays:v(),nextDate:""},e),"Recurrence")(n(c({},e),{weekdays:v(e.weekdays),monthDays:v(e.monthDays)})),h=(e={})=>l({_id:"",name:"",checked:!1})(n(c({},e),{_id:u()})),E=(e={})=>{var t,r;return l({_id:"",title:"",description:"",order:0,state:f.READY.key,recurrence:O(),checkList:v(),createdAt:"",completedAt:""},"Activity")(n(c({},e),{recurrence:O(e.recurrence),checkList:v((null==(r=null==(t=e.checkList)?void 0:t.map)?void 0:r.call(t,h))||[])}))},k=l({activities:v()},"State"),b=p(k()),D=e=>(...t)=>b.update((r=>e(r,...t))),S=D(((e,t)=>{console.info("Save activity called with ",{currentState:e,activity:t});const r=e.activities.findIndex((e=>e._id===t._id)),i=t._id?t:t.merge({_id:u(),createdAt:d.utc().toISO(),order:e.activities.size}),a=r<0?e.activities.push(i):e.activities.set(r,i),o=e.set("activities",a);return t._id?(w.activities.update(i._id,i.toJS()).catch((r=>{console.error("Error on updating activity: ",{activity:t,error:r}),b.set(e)})),o):(w.activities.add(i.toJS()).catch((r=>{r&&(console.error("Error on adding activity: ",{activity:t,error:r}),b.set(e))})),o)})),A=D(((e,t)=>{const r=e.activities.findIndex((e=>e._id===t._id)),{_id:i}=e.activities.get(r),a=e.update("activities",(e=>e.delete(r)));return w.activities.where({_id:i}).delete().catch((r=>{console.error("Error on deleting activity: ",{activity:t,error:r}),b.set(e)})),a})),I=D(((e,t)=>{const r=t.reduce(((e,{_id:t},r)=>n(c({},e),{[t]:r})),{}),i=e.activities.map((e=>{var t;return e.set("order",null!=(t=r[e._id])?t:e.order)})).sort(((e,t)=>e.order-t.order)),a=e.set("activities",i);return w.transaction("rw",w.activities,(async()=>i.map((e=>w.activities.update(e._id,{order:e.order}))))).catch((t=>{console.error("Error on reordering activities: ",{activities:e.activities,newActivities:i,error:t}),b.set(e)})),a})),g=e=>{const t=(({type:e,weekdays:t,monthDays:r,nextDate:i})=>{const a=d.now();switch(e){case m.EVERY_WEEK_DAYS.key:{const e=i&&d.fromISO(i).toLocal().startOf("day"),r=e?e.startOf("day"):a.startOf("day");if(e&&e.diff(a).toMillis()>0)return i;const o=r.weekday,s=[...t.map((e=>+e)),...t.map((e=>+e+7))].sort(((e,t)=>e-t)).find((e=>e>o));return r.plus({days:s-o}).toUTC().toISO()}case m.EVERY_MONTH_DAYS.key:{const e=i&&d.fromISO(i).toLocal().startOf("day"),t=e?e.startOf("day"):a.startOf("day");if(e&&e.diff(a).toMillis()>0)return i;const o=t.day,s=[...r.map((e=>+e)),...r.map((e=>+e+o.daysInMonth))].sort().find((e=>e>o));return t.plus({days:s-o}).toUTC().toISO()}default:return console.error(`Returning empty next date. No match for recurrence type "${e}".`),""}})(e.recurrence);console.info(`Completing activity with next date: ${t}`,e),S(e.set("state",t?f.WAITING.key:f.DONE.key).set("completedAt",d.utc().toISO()).setIn(["recurrence","nextDate"],t).updateIn(["checkList"],(e=>e.map((e=>e.set("checked",!1))))))};_()&&(window.appState=b,window.dexieDb=w,window.DateTime=d,w.activities.orderBy("order").toArray().then((e=>{b.set(k({activities:v(e.map(E))}))})));export{f as A,h as C,m as R,E as a,I as b,b as c,w as d,g as e,_ as i,A as r,S as s};
