var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,c=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&o(e,r,t[r]);return e},n=(e,i)=>t(e,r(i));import{D as d,H as y,R as l,L as v,C as p,I as u,J as w}from"./vendor-9c86b2cb.js";const _={READY:{key:"ready",label:"Próximo"},DONE:{key:"done",label:"Finalizado"},WAITING:{key:"waiting",label:"Aguardando"}},m={NO_RECURRENCE:{key:"no_recurrence",label:"Sem recorrência"},EVERY_WEEK_DAYS:{key:"every_week_days",label:"Por dias da semana"},EVERY_MONTH_DAYS:{key:"every_month_days",label:"Por dias do mês"}},k=()=>"undefined"!=typeof window,E=({type:e,weekdays:t,monthDays:r},i=d.now())=>{switch(e){case m.NO_RECURRENCE.key:return"";case m.EVERY_WEEK_DAYS.key:{if(!t.size)return"";const e=i.startOf("day"),r=e.weekday,a=[...t.map((e=>+e)),...t.map((e=>+e+7))].sort(((e,t)=>e-t)).find((e=>e>r));return e.plus({days:a-r}).toUTC().toISO()}case m.EVERY_MONTH_DAYS.key:{if(!r.size)return"";const e=i.startOf("day"),t=e.day,a=[...r.map((e=>+e)),...r.map((t=>+t+e.daysInMonth))].sort().find((e=>e>t));return e.plus({days:a-t}).toUTC().toISO()}default:return console.error(`Returning empty next date. No match for recurrence type "${e}".`),""}};let b;k()&&(b=new y("pronto"),b.version(3).stores({activities:"_id,order"}),window.dexieDb=b);const h=(e={})=>l({type:"no_recurrence",weekdays:v(),monthDays:v(),nextDate:""},"Recurrence")(n(c({},e),{weekdays:v(e.weekdays),monthDays:v(e.monthDays)})),f=(e={})=>l({_id:"",name:"",checked:!1})(n(c({},e),{_id:w()})),I=(e={})=>{var t,r;return l({_id:"",title:"",description:"",order:0,state:_.READY.key,recurrence:h(),checkList:v(),createdAt:"",completedAt:"",workIntervals:v()},"Activity")(n(c({},e),{recurrence:h(e.recurrence),checkList:v((null==(r=null==(t=e.checkList)?void 0:t.map)?void 0:r.call(t,f))||[]),workIntervals:v(e.workIntervals||[])}))},O=l({activities:v(),navigator:null},"State"),D=p(O()),A=e=>(...t)=>D.update((r=>e(r,...t))),R=A(((e,t)=>{const r=e.activities.findIndex((e=>e._id===t._id)),i=t._id?t:t.merge({_id:w(),createdAt:d.utc().toISO(),order:e.activities.size}),a=r<0?e.activities.push(i):e.activities.set(r,i),s=e.set("activities",a);return t._id?(b.activities.update(i._id,i.toJS()).catch((r=>{console.error("Error on updating activity: ",{activity:t,error:r}),D.set(e)})),s):(b.activities.add(i.toJS()).catch((r=>{r&&(console.error("Error on adding activity: ",{activity:t,error:r}),D.set(e))})),s)})),g=A(((e,t)=>{const r=e.activities.findIndex((e=>e._id===t._id)),{_id:i}=e.activities.get(r),a=e.update("activities",(e=>e.delete(r)));return b.activities.where({_id:i}).delete().catch((r=>{console.error("Error on deleting activity: ",{activity:t,error:r}),D.set(e)})),a})),S=A(((e,t)=>{const r=t.reduce(((e,{_id:t},r)=>n(c({},e),{[t]:r})),{}),i=e.activities.map((e=>{var t;return e.set("order",null!=(t=r[e._id])?t:e.order)})).sort(((e,t)=>e.order-t.order)),a=e.set("activities",i);return b.transaction("rw",b.activities,(async()=>i.map((e=>b.activities.update(e._id,{order:e.order}))))).catch((t=>{console.error("Error on reordering activities: ",{activities:e.activities,newActivities:i,error:t}),D.set(e)})),a})),N=e=>{const t=E(e.recurrence);console.info(`Completing activity with next date: ${t}`,e),R(e.set("state",t?_.WAITING.key:_.DONE.key).set("completedAt",d.utc().toISO()).setIn(["recurrence","nextDate"],t).setIn(["workIntervals"],v()).updateIn(["checkList"],(e=>e.map((e=>e.set("checked",!1))))))};k()&&(window.appState=D,window.dexieDb=b,window.DateTime=d,window.Interval=u,window.List=v,window.Record=l,D.set(O({activities:v(dbActivities.map(I))})),b.activities.orderBy("order").toArray().then((e=>{D.set(O({activities:v(e.map(I))}))})));export{I as A,f as C,m as R,_ as a,h as b,E as c,b as d,S as e,D as f,N as g,k as i,g as r,R as s};
