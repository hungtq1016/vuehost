import{i as p,p as o,h as c}from"./assignment-JrWNECzl.js";import{g as d}from"./request.helper-DN6JUNty.js";import{v as f}from"./v4-CQkTLCs1.js";import{d as m,w as u,f as l,D as g,o as _,a as h,h as v,a8 as w,u as t}from"./index-DTg46rQC.js";import{_ as k}from"./TableView.vue_vue_type_script_setup_true_lang-zb6G2cQo.js";import"./enum-CD4clsnU.js";import"./form-DLmZ15FH.js";import"./keyboard-BpG9qIHi.js";import"./menu-BKSCpVMb.js";import"./use-tree-walker-Cy9hQhp5.js";import"./open-closed-a7O1JoHo.js";import"./CheckIcon-BlEZ0uuh.js";import"./EyeIcon-C1B8c7IW.js";import"./ChevronRightIcon-C97yppLA.js";import"./vi-EY4sXWwn.js";import"./formatDistance-CRvYeSm7.js";import"./ChevronDownIcon-BlJOeIs2.js";import"./EyeIcon-B-aCzrou.js";import"./util.number-CuqvV8jo.js";const r=m([{id:f(),type:"mock-data",value:"mock-data",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:!0}]),s=m({...p}),i=async()=>{await d("/api/assignments/page",o.value).then(a=>{if(a!=null&&a.data){const{data:e,...n}=a.data;r.value=e,s.value=n}})};u(o,async()=>{await i()},{deep:!0});const x={class:"flex flex-col gap-10"},I=l({__name:"AssignmentView",setup(a){return g(async()=>{await i()}),(e,n)=>(_(),h("div",x,[v(k,w({headers:t(c),items:t(r),pagination:t(s),paginationOptions:t(o),fetch:t(i)},{route:"assignments"}),null,16)]))}});export{I as default};
