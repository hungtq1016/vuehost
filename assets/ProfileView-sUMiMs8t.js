import{f as l,r as c,o as t,a as o,h as n,i as p,c as _,k as g,b as e,t as m,F as u,g as h}from"./index-Cz9B68HP.js";import{r as f}from"./UserIcon-DF1-cY2z.js";import{r as b}from"./ClockIcon--9CkoCUU.js";const y={class:"ms-3"},x=l({__name:"Aside.item",props:{data:{}},setup(i){return(r,d)=>{const s=c("router-link");return t(),o("li",null,[n(s,{to:r.data.slug,class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cerulean-100 hover:text-cerulean-600 dark:hover:bg-gray-700 group"},{default:p(()=>{var a;return[(t(),_(g(r.data.icon),{class:"w-5 h-5"})),e("span",y,m(r.$t(String((a=r.data)==null?void 0:a.label))),1)]}),_:1},8,["to"])])}}}),v={id:"profile-sidebar",class:"w-64 h-auto transition-transform -translate-x-full sm:translate-x-0 border-r-[.5px]","aria-label":"Sidebar"},w={class:"h-full px-3 py-4 overflow-y-auto bg-cerulean-50 dark:bg-gray-800"},k={class:"space-y-2 font-medium"},$=l({__name:"Aside.list",setup(i){const r=[{id:"1",label:"route.profile",slug:"/profile",icon:f},{id:"1",label:"route.schedule",slug:"/profile/schedule",icon:b}];return(d,s)=>(t(),o("aside",v,[e("div",w,[e("ul",k,[(t(),o(u,null,h(r,a=>n(x,{data:a,key:a.id},null,8,["data"])),64))])])]))}}),A=e("button",{"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",class:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"},[e("span",{class:"sr-only"},"Open sidebar"),e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})])],-1),B={class:"flex items-stretch"},C={class:"p-4 flex-auto h-screen bg-gray-50"},D=l({__name:"ProfileView",setup(i){return(r,d)=>{const s=c("RouterView");return t(),o(u,null,[A,e("div",B,[n($),e("div",C,[n(s)])])],64)}}});export{D as default};
