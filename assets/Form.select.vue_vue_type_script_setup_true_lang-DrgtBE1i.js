import{o as l,a as r,b as a,f as h,aB as g,a4 as b,aC as p,aA as f,j as v,t as o,h as c,u,p as y,v as x,l as k,F as _,g as w}from"./index-BC3jgjxj.js";import{r as z}from"./ChevronDownIcon-7gZ8P6ow.js";function V(t,s){return l(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[a("path",{"fill-rule":"evenodd",d:"M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z","clip-rule":"evenodd"})])}const B={class:"text-black-900 mb-3 block text-sm font-medium dark:text-gray-50"},M={class:"dark:bg-zinc-950 relative z-20 bg-white"},A={class:"absolute left-4 top-1/2 z-30 -translate-y-1/2"},C=["disabled"],N={value:"-1"},S=["value"],E={class:"absolute right-4 top-1/2 z-10 -translate-y-1/2"},$=h({__name:"Form.select",props:g({hasError:{type:Boolean,default:!1},list:{type:Array,require:!0},placeholder:{type:String,default:b.global.t("form.place_holder.default")}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const s=p(t,"modelValue");return(d,n)=>{var i;return l(),r("div",null,[a("label",B,[f(d.$slots,"default",{},()=>[v(o(d.$t("form.select_default")),1)])]),a("div",M,[a("span",A,[c(u(V),{class:"h-5 w-5"})]),y(a("select",{disabled:((i=t.list)==null?void 0:i.length)===0,"onUpdate:modelValue":n[0]||(n[0]=e=>s.value=e),class:k([{"!border-red-600":t.hasError},"dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 bg-transparent appearance-none px-12 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-100 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"])},[a("option",N,o(t.placeholder),1),(l(!0),r(_,null,w(t.list,(e,m)=>(l(),r("option",{key:m,class:"text-gray-900 dark:text-gray-100",value:e.id},o(e.title||e.label||e.name||e.email||e.userName),9,S))),128))],10,C),[[x,s.value]]),a("span",E,[c(u(z),{class:"h-6 w-6"})])])])}}});export{$ as _};
