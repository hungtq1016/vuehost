import{i as n,p as i,h as c}from"./group-DQMTmJ_q.js";import{g as u}from"./request.helper-Dd_ZrsNF.js";import{v as d}from"./v4-CQkTLCs1.js";import{d as p,w as f,f as l,D as g,o as _,a as h,h as v,a8 as w,u as t}from"./index-uPjlTW5-.js";import{_ as k}from"./TableView.vue_vue_type_script_setup_true_lang-DGus58nM.js";import"./enum-CD4clsnU.js";import"./form-DgPV59gJ.js";import"./keyboard-j6qjsN5K.js";import"./menu-CtMGN0OX.js";import"./use-tree-walker-DJqhipSi.js";import"./open-closed-CQLd4LBk.js";import"./CheckIcon-B7uHx4cQ.js";import"./EyeIcon-1Lg2I0N_.js";import"./ChevronRightIcon-CpK7bIX2.js";import"./vi-C2Rev4gY.js";import"./formatDistance-BTOIJc1i.js";import"./ChevronDownIcon-CXEVS-NP.js";import"./EyeIcon-S74RYEFz.js";import"./util.number-CuqvV8jo.js";const s=p([{id:d(),label:"mock-data",slug:"",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:!0}]),m=p({...n}),o=async()=>{await u("/api/groupservices/page",i.value).then(a=>{if(a!=null&&a.data){const{data:e,...r}=a.data;s.value=e,m.value=r}})};f(i,async()=>{await o()},{deep:!0});const x={class:"flex flex-col gap-10"},I=l({__name:"GroupView",setup(a){return g(async()=>{await o()}),(e,r)=>(_(),h("div",x,[v(k,w({headers:t(c),items:t(s),pagination:t(m),paginationOptions:t(i),fetch:t(o)},{route:"groupservices",key:"groupservices"}),null,16)]))}});export{I as default};
