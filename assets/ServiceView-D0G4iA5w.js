import{i as p,p as i,h as c}from"./service-BDxE547F.js";import{g as d}from"./request.helper-D1MGDj_g.js";import{v as f}from"./v4-CQkTLCs1.js";import{d as s,w as l,f as u,D as g,o as _,a as v,h,aa as k,u as t}from"./index-Cz9B68HP.js";import{_ as w}from"./TableView.vue_vue_type_script_setup_true_lang-8gwJAJmx.js";import"./enum-CD4clsnU.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./menu-DwXda5gx.js";import"./use-tree-walker-CxsaKLL4.js";import"./open-closed-DWRb3dX1.js";import"./CheckIcon-Bx2k_scR.js";import"./ChevronRightIcon-briSBUhs.js";import"./vi-wtEGj-yP.js";import"./formatDistance-Cx_XM85T.js";import"./ChevronDownIcon-1IFWtljn.js";import"./EyeIcon-ByucquJJ.js";import"./util.number-CuqvV8jo.js";const m=s([{id:f(),title:"mock-data",groupId:"mock-data",imageUrl:"",content:"mock-data",slug:"",createdAt:"2022-01-01",updatedAt:"2024-01-01",videoEmbed:"",desc:"",enable:!0}]),n=s({...p}),e=async()=>{await d("/api/services/page",i.value).then(a=>{if(a!=null&&a.data){const{data:o,...r}=a.data;m.value=o,n.value=r}})};l(i,async()=>{await e()},{deep:!0});const x={class:"flex flex-col gap-10"},z=u({__name:"ServiceView",setup(a){return g(async()=>{await e()}),(o,r)=>(_(),v("div",x,[h(w,k({headers:t(c),items:t(m),pagination:t(n),paginationOptions:t(i),fetch:t(e)},{route:"services",key:"services"}),null,16)]))}});export{z as default};
