import{f as u,o as l,a as s,b as e,F as r,g as d,t as m,K as p,d as x,r as f,h as c,u as _}from"./index-BC3jgjxj.js";import{v as h}from"./vi-BCs7vrn8.js";const v={class:"flex w-full flex-auto"},b=e("div",{class:"w-14 flex-none bg-white ring-1 ring-gray-100"},null,-1),M={class:"grid flex-auto grid-cols-1 grid-rows-1"},w={class:"col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100",style:{"grid-template-rows":"repeat(48, minmax(3.5rem, 1fr))"}},y={ref:"containerOffset",class:"row-end-1 h-7"},k={class:"sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400"},A=e("div",null,null,-1),P={class:"col-start-1 col-end-2 row-start-1 grid grid-cols-1",style:{"grid-template-rows":"1.75rem repeat(288, minmax(0, 1fr)) auto"}},C=e("a",{href:"#",class:"group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100"},[e("p",{class:"order-1 font-semibold text-blue-700"},"Breakfast"),e("p",{class:"text-blue-500 group-hover:text-blue-700"},[e("time",{datetime:"2022-01-22T06:00"},"6:00 AM")])],-1),V=[C],B=u({__name:"Calendar.time",setup(g){const o=["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"],i=[{id:1,title:"Breakfast",location:"",time:"6:00 AM",datetime:"2022-01-22T06:00",style:"grid-row: 74 / span 12",class:"bg-blue-50 hover:bg-blue-100",titleClass:"text-blue-700",locationClass:"text-blue-500 group-hover:text-blue-700",timeClass:"text-blue-500 group-hover:text-blue-700"},{id:2,title:"Flight to Paris",location:"John F. Kennedy International Airport",time:"7:30 AM",datetime:"2022-01-22T07:30",style:"grid-row: 92 / span 30",class:"bg-pink-50 hover:bg-pink-100",titleClass:"text-pink-700",locationClass:"text-pink-500 group-hover:text-pink-700",timeClass:"text-pink-500 group-hover:text-pink-700"},{id:3,title:"Sightseeing",location:"Eiffel Tower",time:"11:00 AM",datetime:"2022-01-22T11:00",style:"grid-row: 134 / span 18",class:"bg-cerulean-50 hover:bg-cerulean-100",titleClass:"text-cerulean-700",locationClass:"text-cerulean-500 group-hover:text-cerulean-700",timeClass:"text-cerulean-500 group-hover:text-cerulean-700"}];return(a,n)=>(l(),s("div",v,[b,e("div",M,[e("div",w,[e("div",y,null,512),(l(),s(r,null,d(o,t=>(l(),s(r,{key:t},[e("div",null,[e("div",k,m(t),1)]),A],64))),64))]),e("ol",P,[(l(),s(r,null,d(i,t=>e("li",{key:t.id,class:"relative mt-px flex",style:p(t.style)},V,4)),64))])])]))}}),D={class:"flex h-full flex-col"},T={class:"isolate flex flex-auto overflow-hidden bg-white"},F={class:"flex flex-auto flex-col overflow-auto basis-2/3"},S=u({__name:"CalendarView",setup(g){const o=x(new Date);return(i,a)=>{const n=f("VueDatePicker");return l(),s("div",D,[e("div",T,[e("div",F,[c(B)]),c(n,{"min-date":new Date,inline:"","multi-calendars":"","auto-apply":"","format-locale":_(h),format:"E",class:"basis-1/3 bg-white dark:border-[1px] dark:border-gray-900 dark:bg-gray-800 rounded-lg shadow-lg",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value=t)},null,8,["min-date","format-locale","modelValue"])])])}}});export{S as default};
