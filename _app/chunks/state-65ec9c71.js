var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))o.call(t,r)&&s(e,r,t[r]);return e},c=(e,i)=>t(e,r(i));import{D as d,H as l,R as y,L as v,C as p,I as u,J as w}from"./vendor-9c86b2cb.js";const _={READY:{key:"ready",label:"Próximo"},DONE:{key:"done",label:"Finalizado"},WAITING:{key:"waiting",label:"Aguardando"}},m={NO_RECURRENCE:{key:"no_recurrence",label:"Sem recorrência"},EVERY_WEEK_DAYS:{key:"every_week_days",label:"Por dias da semana"},EVERY_MONTH_DAYS:{key:"every_month_days",label:"Por dias do mês"}},E=()=>"undefined"!=typeof window,k=({type:e,weekdays:t,monthDays:r},i=d.now())=>{switch(e){case m.NO_RECURRENCE.key:return"";case m.EVERY_WEEK_DAYS.key:{if(!t.size)return"";const e=i.startOf("day"),r=e.weekday,a=[...t.map((e=>+e)),...t.map((e=>+e+7))].sort(((e,t)=>e-t)).find((e=>e>r));return e.plus({days:a-r}).toUTC().toISO()}case m.EVERY_MONTH_DAYS.key:{if(!r.size)return"";const e=i.startOf("day"),t=e.day,a=[...r.map((e=>+e)),...r.map((t=>+t+e.daysInMonth))].sort().find((e=>e>t));return e.plus({days:a-t}).toUTC().toISO()}default:return console.error(`Returning empty next date. No match for recurrence type "${e}".`),""}};let O;E()&&(O=new l("pronto"),O.version(3).stores({activities:"_id,order"}),window.dexieDb=O);const h=(e={})=>y({type:"no_recurrence",weekdays:v(),monthDays:v(),nextDate:""},"Recurrence")(c(n({},e),{weekdays:v(e.weekdays),monthDays:v(e.monthDays)})),b=(e={})=>y({_id:"",name:"",checked:!1})(c(n({},e),{_id:w()})),f=(e={})=>{var t,r;return y({_id:"",title:"",description:"",order:0,state:_.READY.key,recurrence:h(),checkList:v(),createdAt:"",completedAt:"",workIntervals:v()},"Activity")(c(n({},e),{recurrence:h(e.recurrence),checkList:v((null==(r=null==(t=e.checkList)?void 0:t.map)?void 0:r.call(t,b))||[]),workIntervals:v(e.workIntervals||[])}))},D=y({activities:v()},"State"),I=p(D()),A=e=>(...t)=>I.update((r=>e(r,...t))),R=A(((e,t)=>{const r=e.activities.findIndex((e=>e._id===t._id)),i=t._id?t:t.merge({_id:w(),createdAt:d.utc().toISO(),order:e.activities.size}),a=r<0?e.activities.push(i):e.activities.set(r,i),o=e.set("activities",a);return t._id?(O.activities.update(i._id,i.toJS()).catch((r=>{console.error("Error on updating activity: ",{activity:t,error:r}),I.set(e)})),o):(O.activities.add(i.toJS()).catch((r=>{r&&(console.error("Error on adding activity: ",{activity:t,error:r}),I.set(e))})),o)})),g=A(((e,t)=>{const r=e.activities.findIndex((e=>e._id===t._id)),{_id:i}=e.activities.get(r),a=e.update("activities",(e=>e.delete(r)));return O.activities.where({_id:i}).delete().catch((r=>{console.error("Error on deleting activity: ",{activity:t,error:r}),I.set(e)})),a})),S=A(((e,t)=>{const r=t.reduce(((e,{_id:t},r)=>c(n({},e),{[t]:r})),{}),i=e.activities.map((e=>{var t;return e.set("order",null!=(t=r[e._id])?t:e.order)})).sort(((e,t)=>e.order-t.order)),a=e.set("activities",i);return O.transaction("rw",O.activities,(async()=>i.map((e=>O.activities.update(e._id,{order:e.order}))))).catch((t=>{console.error("Error on reordering activities: ",{activities:e.activities,newActivities:i,error:t}),I.set(e)})),a})),N=e=>{const t=k(e.recurrence);console.info(`Completing activity with next date: ${t}`,e),R(e.set("state",t?_.WAITING.key:_.DONE.key).set("completedAt",d.utc().toISO()).setIn(["recurrence","nextDate"],t).setIn(["workIntervals"],v()).updateIn(["checkList"],(e=>e.map((e=>e.set("checked",!1))))))};E()&&(window.appState=I,window.dexieDb=O,window.DateTime=d,window.Interval=u,window.List=v,window.Record=y,"wakeLock"in navigator?console.log("WAKE LOCK SUPPORTED"):console.log("WAKE LOCK UNSUPPORTED"),O.activities.orderBy("order").toArray().then((e=>{I.set(D({activities:v(e.map(f))}))})));export{f as A,b as C,m as R,_ as a,h as b,k as c,O as d,S as e,I as f,N as g,E as i,g as r,R as s};
