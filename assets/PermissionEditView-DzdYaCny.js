import{d as B,a3 as w,f as N,x as U,D as k,o as C,c as D,i as t,h as r,u as a,j as d,t as p}from"./index-Cz9B68HP.js";import{u as S}from"./useAsyncValidator-CvlvEwpL.js";import{_ as $,a as j,b as A,c as E}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as v}from"./Form.input.vue_vue_type_script_setup_true_lang-Cxj-k_Rq.js";import{g as F,a as M}from"./request.helper-D1MGDj_g.js";import{r as P}from"./permission-BJQIxKZH.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./enum-CD4clsnU.js";const e=B({}),R=async o=>{F("/api/permissions/"+o).then(l=>{l!=null&&l.data&&(e.value=l.data)})},T=async()=>{const o=await M("/api/permissions/"+e.value.id,e.value);o!=null&&o.data&&w(o.message)},W=N({__name:"PermissionEditView",setup(o){const{pass:l,errorFields:n}=S(e,P),b=U();return k(async()=>{await R(String(b.params.id))}),(i,s)=>(C(),D(E,{submit:a(T)},{default:t(()=>[r($,null,{default:t(()=>{var m,f,c,h;return[r(j,{"has-error":[!!((f=(m=a(n))==null?void 0:m.type)!=null&&f.length),!!((h=(c=a(n))==null?void 0:c.value)!=null&&h.length)]},{heading:t(()=>[d(p(i.$t("form.heading")),1)]),content:t(()=>{var _,V,g,y;return[r(v,{modelValue:a(e).type,"onUpdate:modelValue":s[0]||(s[0]=u=>a(e).type=u),"has-error":!!((V=(_=a(n))==null?void 0:_.type)!=null&&V.length),placeholder:i.$t("form.place_holder.type")},{default:t(()=>[d(p(i.$t("form.type")),1)]),_:1},8,["modelValue","has-error","placeholder"]),r(v,{modelValue:a(e).value,"onUpdate:modelValue":s[1]||(s[1]=u=>a(e).value=u),"has-error":!!((y=(g=a(n))==null?void 0:g.value)!=null&&y.length),placeholder:i.$t("form.place_holder.value")},{default:t(()=>[d(p(i.$t("form.value")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1}),r($,null,{default:t(()=>[r(A,{modelValue:a(e).enable,"onUpdate:modelValue":s[2]||(s[2]=m=>a(e).enable=m),pass:a(l)},null,8,["modelValue","pass"])]),_:1})]),_:1},8,["submit"]))}});export{W as default};
