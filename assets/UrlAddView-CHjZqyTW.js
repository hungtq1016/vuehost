import{u as S}from"./useAsyncValidator-CvlvEwpL.js";import{_ as N,a as j,b as T,c as q}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as z}from"./ImageView.vue_vue_type_script_setup_true_lang-H5VI4OCR.js";import{_ as v}from"./Form.input.vue_vue_type_script_setup_true_lang-Cxj-k_Rq.js";import{_ as V}from"./Form.select.vue_vue_type_script_setup_true_lang-DulRE8UV.js";import{g as E}from"./request.helper-D1MGDj_g.js";import{g as F,s as o,a as G}from"./url.add-AYdL_Klp.js";import{t as H,a as J,r as K}from"./url-0uwEiFSY.js";import{f as L,D as O,o as P,c as Q,i as r,h as s,u as e,j as d,t as n}from"./index-Cz9B68HP.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./ChevronDownIcon-1IFWtljn.js";import"./util.object-9m6X7yey.js";import"./enum-CD4clsnU.js";const ue=L({__name:"UrlAddView",setup(R){const{pass:M,errorFields:t}=S(o,K);return O(()=>{E("/api/groupurls").then(l=>{F.value=(l==null?void 0:l.data)||[]})}),(l,a)=>(P(),Q(q,{submit:e(G)},{default:r(()=>[s(N,null,{default:r(()=>{var p,i,u,$,_,B,b,U,y,I;return[s(j,{"has-error":[!!((i=(p=e(t))==null?void 0:p.label)!=null&&i.length),!!(($=(u=e(t))==null?void 0:u.slug)!=null&&$.length),!!((B=(_=e(t))==null?void 0:_.type)!=null&&B.length),!!((U=(b=e(t))==null?void 0:b.tag)!=null&&U.length)]},{heading:r(()=>[d(n(l.$t("form.heading")),1)]),content:r(()=>{var g,f,h,k,w,A,C,D;return[s(v,{modelValue:e(o).label,"onUpdate:modelValue":a[0]||(a[0]=m=>e(o).label=m),"has-error":!!((f=(g=e(t))==null?void 0:g.label)!=null&&f.length),placeholder:l.$t("form.place_holder.label")},{default:r(()=>[d(n(l.$t("form.label")),1)]),_:1},8,["modelValue","has-error","placeholder"]),s(v,{modelValue:e(o).slug,"onUpdate:modelValue":a[1]||(a[1]=m=>e(o).slug=m),"has-error":!!((k=(h=e(t))==null?void 0:h.slug)!=null&&k.length),placeholder:l.$t("form.place_holder.slug")},{default:r(()=>[d(n(l.$t("form.slug")),1)]),_:1},8,["modelValue","has-error","placeholder"]),s(V,{modelValue:e(o).type,"onUpdate:modelValue":a[2]||(a[2]=m=>e(o).type=m),"has-error":!!((A=(w=e(t))==null?void 0:w.type)!=null&&A.length),list:e(H),placeholder:l.$t("form.place_holder.type")},{default:r(()=>[d(n(l.$t("form.type")),1)]),_:1},8,["modelValue","has-error","list","placeholder"]),s(V,{modelValue:e(o).tag,"onUpdate:modelValue":a[3]||(a[3]=m=>e(o).tag=m),"has-error":!!((D=(C=e(t))==null?void 0:C.tag)!=null&&D.length),list:e(J),placeholder:l.$t("form.place_holder.tag_element")},{default:r(()=>[d(n(l.$t("form.tag_element")),1)]),_:1},8,["modelValue","has-error","list","placeholder"])]}),_:1},8,["has-error"]),s(j,{"has-error":[!!((I=(y=e(t))==null?void 0:y.groupId)!=null&&I.length)]},{heading:r(()=>[d(n(l.$t("form.content")),1)]),content:r(()=>{var g,f;return[s(V,{modelValue:e(o).groupId,"onUpdate:modelValue":a[4]||(a[4]=h=>e(o).groupId=h),"has-error":!!((f=(g=e(t))==null?void 0:g.groupId)!=null&&f.length),list:e(F),placeholder:l.$t("form.place_holder.groupId")},{default:r(()=>[d(n(l.$t("form.groupId")),1)]),_:1},8,["modelValue","has-error","list","placeholder"])]}),_:1},8,["has-error"])]}),_:1}),s(N,null,{default:r(()=>{var p,i;return[s(T,{modelValue:e(o).enable,"onUpdate:modelValue":a[5]||(a[5]=u=>e(o).enable=u),pass:e(M)},null,8,["modelValue","pass"]),s(z,{modelValue:e(o).imageUrl,"onUpdate:modelValue":a[6]||(a[6]=u=>e(o).imageUrl=u),"has-error":[!!((i=(p=e(t))==null?void 0:p.imageUrl)!=null&&i.length)]},null,8,["modelValue","has-error"])]}),_:1})]),_:1},8,["submit"]))}});export{ue as default};
