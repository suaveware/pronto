import{G as e}from"./vendor-1875a1a5.js";const a={READY:{key:"ready",label:"Próximo"},DONE:{key:"done",label:"Finalizado"},WAITING:{key:"waiting",label:"Aguardando"}},r={NO_RECURRENCE:{key:"no_recurrence",label:"Sem recorrência"},EVERY_WEEK_DAYS:{key:"every_week_days",label:"Por dias da semana"},EVERY_MONTH_DAYS:{key:"every_month_days",label:"Por dias do mês"}},o=()=>"undefined"!=typeof window,n=(e,a,r)=>{const o=[...e],n=o[a];return o.splice(a,1),o.splice(r,0,n),o},t=({type:a,weekdays:o,monthDays:n},t=e.now())=>{switch(a){case r.NO_RECURRENCE.key:return"";case r.EVERY_WEEK_DAYS.key:{if(!o.size)return"";const e=t.startOf("day"),a=e.weekday,r=[...o.map((e=>+e)),...o.map((e=>+e+7))].sort(((e,a)=>e-a)).find((e=>e>a));return e.plus({days:r-a}).toUTC().toISO()}case r.EVERY_MONTH_DAYS.key:{if(!n.size)return"";const e=t.startOf("day"),a=e.day,r=[...n.map((e=>+e)),...n.map((a=>+a+e.daysInMonth))].sort().find((e=>e>a));return e.plus({days:r-a}).toUTC().toISO()}default:return console.error(`Returning empty next date. No match for recurrence type "${a}".`),""}},s=[];if(s.push.bind(s),o()){window.prontoTick=()=>{s.forEach((e=>e()))};const e=setInterval((()=>window.prontoTick({timer:e,TIMEOUT:500})),500);window.prontoTickTimer=e}export{a as A,r as R,t as c,o as i,n as m};
