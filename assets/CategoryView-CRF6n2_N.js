import{i as s,p as i,h as c}from"./category-CYIrdhZz.js";import{g as d}from"./request.helper-DN6JUNty.js";import{v as f}from"./v4-CQkTLCs1.js";import{d as p,w as g,f as l,D as u,o as _,a as h,h as v,a8 as w,u as a}from"./index-DTg46rQC.js";import{_ as k}from"./TableView.vue_vue_type_script_setup_true_lang-zb6G2cQo.js";import"./enum-CD4clsnU.js";import"./form-DLmZ15FH.js";import"./keyboard-BpG9qIHi.js";import"./menu-BKSCpVMb.js";import"./use-tree-walker-Cy9hQhp5.js";import"./open-closed-a7O1JoHo.js";import"./CheckIcon-BlEZ0uuh.js";import"./EyeIcon-C1B8c7IW.js";import"./ChevronRightIcon-C97yppLA.js";import"./vi-EY4sXWwn.js";import"./formatDistance-CRvYeSm7.js";import"./ChevronDownIcon-BlJOeIs2.js";import"./EyeIcon-B-aCzrou.js";import"./util.number-CuqvV8jo.js";const m=p([{id:f(),title:"mock-data",slug:"mock-data",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:!0}]),n=p({...s}),o=async()=>{await d("/api/categories/page",i.value).then(t=>{if(t!=null&&t.data){const{data:e,...r}=t.data;m.value=e,n.value=r}})};g(i,async()=>{await o()},{deep:!0});const y={class:"flex flex-col gap-10"},I=l({__name:"CategoryView",setup(t){return u(async()=>{await o()}),(e,r)=>(_(),h("div",y,[v(k,w({headers:a(c),items:a(m),pagination:a(n),paginationOptions:a(i),fetch:a(o)},{route:"categories",key:"categories"}),null,16)]))}});export{I as default};
