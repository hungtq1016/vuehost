import{i as p,p as r,h as c}from"./schedule-DCqmlXCI.js";import{g as d}from"./request.helper-D1MGDj_g.js";import{v as l}from"./v4-CQkTLCs1.js";import{d as m,f as u,D as f,o as h,a as _,h as g,aa as v,u as t}from"./index-Cz9B68HP.js";import{_ as w}from"./TableView.vue_vue_type_script_setup_true_lang-8gwJAJmx.js";import"./enum-CD4clsnU.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./menu-DwXda5gx.js";import"./use-tree-walker-CxsaKLL4.js";import"./open-closed-DWRb3dX1.js";import"./CheckIcon-Bx2k_scR.js";import"./ChevronRightIcon-briSBUhs.js";import"./vi-wtEGj-yP.js";import"./formatDistance-Cx_XM85T.js";import"./ChevronDownIcon-1IFWtljn.js";import"./EyeIcon-ByucquJJ.js";import"./util.number-CuqvV8jo.js";const n=m([{id:l(),date:new Date,branchId:"-1",desc:"",fullName:"",phoneNumber:"",serviceId:"-1",time:'{"hello":"world"}',email:"-1",createdAt:"2022-01-01",updatedAt:"2024-01-01",enable:!0}]),s=m({...p}),o=async()=>{await d("/api/schedules/page",r.value).then(a=>{if(a!=null&&a.data){const{data:e,...i}=a.data;n.value=e,s.value=i}})},x={class:"flex flex-col gap-10"},z=u({__name:"ScheduleView",setup(a){return f(async()=>{await o()}),(e,i)=>(h(),_("div",x,[g(w,v({headers:t(c),items:t(n),pagination:t(s),paginationOptions:t(r),fetch:t(o)},{route:"schedules",key:"schedules"}),null,16)]))}});export{z as default};
