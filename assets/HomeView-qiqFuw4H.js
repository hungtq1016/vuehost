import{_ as n}from"./Blog.list.vue_vue_type_script_setup_true_lang-DL_NbkRp.js";import{f as s,d as r,D as c,N as l,o as t,a as i,g as m,c as u,F as _}from"./index-BC3jgjxj.js";import"./Blog.item.vue_vue_type_script_setup_true_lang-BFjs8ryw.js";const k=s({__name:"HomeView",setup(p){const o=r([]);return c(()=>{l("/api/categories/blogs").then(e=>{e!=null&&e.data&&(o.value=e.data)})}),(e,f)=>(t(!0),i(_,null,m(o.value,a=>(t(),u(n,{key:a.id,data:a,blogs:a.blogs.slice(0,3)},null,8,["data","blogs"]))),128))}});export{k as default};
