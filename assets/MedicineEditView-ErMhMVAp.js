import{u as y}from"./useAsyncValidator-CvlvEwpL.js";import{d as U,a3 as w,f as v,x as N,D as k,o as C,c as D,i as o,h as t,u as e,j as m,t as i}from"./index-Cz9B68HP.js";import{_ as $,a as b,b as M,c as S}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as g}from"./Form.input.vue_vue_type_script_setup_true_lang-Cxj-k_Rq.js";import{_ as j}from"./Form.textarea.vue_vue_type_script_setup_true_lang-0thaYdDA.js";import{g as A,a as E}from"./request.helper-D1MGDj_g.js";import{r as F}from"./medicine-Di6fRzzK.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./enum-CD4clsnU.js";const a=U({}),R=async s=>{A("/api/medicines/"+s).then(n=>{n!=null&&n.data&&(a.value=n.data)})},T=async()=>{const s=await E("/api/medicines/"+a.value.id,a.value);s!=null&&s.data&&w(s.message)},X=v({__name:"MedicineEditView",setup(s){const{pass:n,errorFields:u}=y(a,F),B=N();return k(async()=>{await R(String(B.params.id))}),(l,r)=>(C(),D(S,{submit:e(T)},{default:o(()=>[t($,null,{default:o(()=>{var f,p;return[t(b,{"has-error":[!!((p=(f=e(u))==null?void 0:f.title)!=null&&p.length)]},{heading:o(()=>[m(i(l.$t("form.heading")),1)]),content:o(()=>{var d,c,V,_;return[t(g,{modelValue:e(a).title,"onUpdate:modelValue":r[0]||(r[0]=h=>e(a).title=h),"has-error":!!((c=(d=e(u))==null?void 0:d.title)!=null&&c.length),placeholder:l.$t("form.place_holder.title")},{default:o(()=>[m(i(l.$t("form.title")),1)]),_:1},8,["modelValue","has-error","placeholder"]),t(g,{modelValue:e(a).slug,"onUpdate:modelValue":r[1]||(r[1]=h=>e(a).slug=h),disabled:!0,placeholder:l.$t("form.place_holder.slug")},{default:o(()=>[m(i(l.$t("form.slug")),1)]),_:1},8,["modelValue","placeholder"]),t(g,{modelValue:e(a).brand,"onUpdate:modelValue":r[2]||(r[2]=h=>e(a).brand=h),"has-error":!!((_=(V=e(u))==null?void 0:V.brand)!=null&&_.length),placeholder:l.$t("form.place_holder.brand")},{default:o(()=>[m(i(l.$t("form.brand")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1}),t($,null,{default:o(()=>{var f,p;return[t(M,{modelValue:e(a).enable,"onUpdate:modelValue":r[3]||(r[3]=d=>e(a).enable=d),pass:e(n)},null,8,["modelValue","pass"]),t(b,{"has-error":[!!((p=(f=e(u))==null?void 0:f.desc)!=null&&p.length)]},{heading:o(()=>[m(i(l.$t("form.content")),1)]),content:o(()=>{var d,c;return[t(j,{modelValue:e(a).desc,"onUpdate:modelValue":r[4]||(r[4]=V=>e(a).desc=V),"has-error":!!((c=(d=e(u))==null?void 0:d.desc)!=null&&c.length),placeholder:l.$t("form.place_holder.desc")},{default:o(()=>[m(i(l.$t("form.desc")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1})]),_:1},8,["submit"]))}});export{X as default};
