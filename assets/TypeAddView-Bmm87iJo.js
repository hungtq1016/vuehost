import{u as V}from"./useAsyncValidator-D-1iyTRV.js";import{_ as d,a as $,b as g,c as y}from"./Form.layout.vue_vue_type_script_setup_true_lang-BB3z9VPA.js";import{_ as B}from"./Form.input.vue_vue_type_script_setup_true_lang-UlMVIg7b.js";import{p as w}from"./request.helper-BUxsD2As.js";import{ad as N,a3 as j,f as k,o as A,c as C,i as o,h as t,u as e,j as f,t as c}from"./index-BC3jgjxj.js";import{r as T}from"./util.object-9m6X7yey.js";import{r as U}from"./btype-30OIFmeG.js";import"./index-BMenrDxa.js";import"./form-B9B7fpoT.js";import"./keyboard-BRUDIerL.js";import"./EyeIcon-DFMnCOVI.js";import"./enum-CD4clsnU.js";const _={label:"",enable:!0},a=N({..._}),v=async()=>{const s=await w("/api/branchtypes",a);s!=null&&s.data&&(T(a,_),j(s.message))},K=k({__name:"TypeAddView",setup(s){const{pass:b,errorFields:i}=V(a,U);return(n,r)=>(A(),C(y,{submit:e(v)},{default:o(()=>[t(d,null,{default:o(()=>{var l,m;return[t($,{"has-error":[!!((m=(l=e(i))==null?void 0:l.label)!=null&&m.length)]},{heading:o(()=>[f(c(n.$t("form.heading")),1)]),content:o(()=>{var p,u;return[t(B,{modelValue:e(a).label,"onUpdate:modelValue":r[0]||(r[0]=h=>e(a).label=h),"has-error":!!((u=(p=e(i))==null?void 0:p.label)!=null&&u.length),placeholder:n.$t("form.place_holder.label")},{default:o(()=>[f(c(n.$t("form.label")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1}),t(d,null,{default:o(()=>[t(g,{modelValue:e(a).enable,"onUpdate:modelValue":r[1]||(r[1]=l=>e(a).enable=l),pass:e(b)},null,8,["modelValue","pass"])]),_:1})]),_:1},8,["submit"]))}});export{K as default};
