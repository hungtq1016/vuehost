import{i as m,p as i,h as c}from"./record-D4ZHbo6B.js";import{g as d}from"./request.helper-D1MGDj_g.js";import{v as h}from"./v4-CQkTLCs1.js";import{d as s,w as l,f as u,D as f,o as g,a as _,h as w,aa as v,u as t}from"./index-Cz9B68HP.js";import{_ as y}from"./TableView.vue_vue_type_script_setup_true_lang-8gwJAJmx.js";import"./enum-CD4clsnU.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./menu-DwXda5gx.js";import"./use-tree-walker-CxsaKLL4.js";import"./open-closed-DWRb3dX1.js";import"./CheckIcon-Bx2k_scR.js";import"./ChevronRightIcon-briSBUhs.js";import"./vi-wtEGj-yP.js";import"./formatDistance-Cx_XM85T.js";import"./ChevronDownIcon-1IFWtljn.js";import"./EyeIcon-ByucquJJ.js";import"./util.number-CuqvV8jo.js";const n=s([{id:h(),enable:!0,birthDay:"",gender:"-1",address:"",height:0,weight:0,bloodPressure:0,temperature:37,heartBeat:0,anamnesis:"",diagnosis:"",userId:"-1",createdAt:"2022-01-01",updatedAt:"2024-01-01"}]),p=s({...m}),e=async()=>{await d("/api/healthrecords/page",i.value).then(a=>{if(a!=null&&a.data){const{data:o,...r}=a.data;n.value=o,p.value=r}})};l(i,async()=>{await e()},{deep:!0});const x={class:"flex flex-col gap-10"},z=u({__name:"HealthRecordView",setup(a){return f(async()=>{await e()}),(o,r)=>(g(),_("div",x,[w(y,v({headers:t(c),items:t(n),pagination:t(p),paginationOptions:t(i),fetch:t(e)},{route:"healthrecords",key:"healthrecords"}),null,16)]))}});export{z as default};
