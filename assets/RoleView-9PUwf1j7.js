import{i as s,p as e,h as c}from"./role-Cx_hdW9O.js";import{g as d}from"./request.helper-Dd_ZrsNF.js";import{v as l}from"./v4-CQkTLCs1.js";import{d as m,w as f,f as u,D as _,o as g,a as h,h as v,a8 as w,u as t}from"./index-uPjlTW5-.js";import{_ as k}from"./TableView.vue_vue_type_script_setup_true_lang-DGus58nM.js";import"./enum-CD4clsnU.js";import"./form-DgPV59gJ.js";import"./keyboard-j6qjsN5K.js";import"./menu-CtMGN0OX.js";import"./use-tree-walker-DJqhipSi.js";import"./open-closed-CQLd4LBk.js";import"./CheckIcon-B7uHx4cQ.js";import"./EyeIcon-1Lg2I0N_.js";import"./ChevronRightIcon-CpK7bIX2.js";import"./vi-C2Rev4gY.js";import"./formatDistance-BTOIJc1i.js";import"./ChevronDownIcon-CXEVS-NP.js";import"./EyeIcon-S74RYEFz.js";import"./util.number-CuqvV8jo.js";const n=m([{id:l(),name:"mock-data",note:"mock-data",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:!0}]),p=m({...s}),o=async()=>{await d("/api/roles/page",e.value).then(a=>{if(a!=null&&a.data){const{data:i,...r}=a.data;n.value=i,p.value=r}})};f(e,async()=>{await o()},{deep:!0});const x={class:"flex flex-col gap-10"},H=u({__name:"RoleView",setup(a){return _(async()=>{await o()}),(i,r)=>(g(),h("div",x,[v(k,w({headers:t(c),items:t(n),pagination:t(p),paginationOptions:t(e),fetch:t(o)},{route:"roles",key:"roles"}),null,16)]))}});export{H as default};
