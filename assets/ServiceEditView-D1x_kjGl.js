import{u as j}from"./useAsyncValidator-CvlvEwpL.js";import{d as A,a3 as F,f as M,x as R,D as T,r as q,o as z,c as G,i as r,h as t,u as e,j as n,t as m}from"./index-Cz9B68HP.js";import{_ as y,a as E,b as H,c as J}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as K}from"./ImageView.vue_vue_type_script_setup_true_lang-H5VI4OCR.js";import{_ as k}from"./Form.input.vue_vue_type_script_setup_true_lang-Cxj-k_Rq.js";import{_ as L}from"./Form.select.vue_vue_type_script_setup_true_lang-DulRE8UV.js";import{_ as C}from"./Form.textarea.vue_vue_type_script_setup_true_lang-0thaYdDA.js";import{_ as O}from"./Form.input.slot.vue_vue_type_script_setup_true_lang-DtddyGCv.js";import{a as P,g as Q}from"./request.helper-D1MGDj_g.js";import{g as I,e as W,a as X}from"./service.add-DDBY5IeL.js";import{r as Y}from"./service-BDxE547F.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./ChevronDownIcon-1IFWtljn.js";import"./UploadFile-DOsrtRCs.js";import"./util.object-9m6X7yey.js";import"./enum-CD4clsnU.js";const o=A({}),Z=async()=>{const p=await P("/api/services/"+o.value.id,o.value);p!=null&&p.data&&F(p.message)},_e=M({__name:"ServiceEditView",setup(p){const{pass:N,errorFields:s}=j(o,Y),S=R();return T(async()=>{await fetch(String(S.params.id)),await Q("/api/groupservices").then(a=>{I.value=(a==null?void 0:a.data)||[]})}),(a,l)=>{const D=q("ckeditor");return z(),G(J,{submit:e(Z)},{default:r(()=>[t(y,null,{default:r(()=>{var f,g,h,c,i,V,_,$;return[t(E,{"has-error":[!!((g=(f=e(s))==null?void 0:f.title)!=null&&g.length),!!((c=(h=e(s))==null?void 0:h.categoryId)!=null&&c.length),!!((V=(i=e(s))==null?void 0:i.content)!=null&&V.length)]},{heading:r(()=>[n(m(a.$t("form.heading")),1)]),content:r(()=>{var d,v,b,B,U,w;return[t(k,{modelValue:e(o).title,"onUpdate:modelValue":l[0]||(l[0]=u=>e(o).title=u),"has-error":!!((v=(d=e(s))==null?void 0:d.title)!=null&&v.length),placeholder:a.$t("form.place_holder.title")},{default:r(()=>[n(m(a.$t("form.title")),1)]),_:1},8,["modelValue","has-error","placeholder"]),t(k,{modelValue:e(o).slug,"onUpdate:modelValue":l[1]||(l[1]=u=>e(o).slug=u),disabled:!0,placeholder:a.$t("form.place_holder.slug")},{default:r(()=>[n(m(a.$t("form.slug")),1)]),_:1},8,["modelValue","placeholder"]),t(L,{modelValue:e(o).groupId,"onUpdate:modelValue":l[2]||(l[2]=u=>e(o).groupId=u),list:e(I),"has-error":!!((B=(b=e(s))==null?void 0:b.groupId)!=null&&B.length),placeholder:a.$t("form.place_holder.group_service")},{default:r(()=>[n(m(a.$t("form.group_service")),1)]),_:1},8,["modelValue","list","has-error","placeholder"]),t(C,{modelValue:e(o).desc,"onUpdate:modelValue":l[3]||(l[3]=u=>e(o).desc=u),"has-error":!!((w=(U=e(s))==null?void 0:U.desc)!=null&&w.length),placeholder:a.$t("form.place_holder.desc")},{default:r(()=>[n(m(a.$t("form.desc")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"]),t(K,{modelValue:e(o).imageUrl,"onUpdate:modelValue":l[4]||(l[4]=d=>e(o).imageUrl=d),"has-error":[!!(($=(_=e(s))==null?void 0:_.imageUrl)!=null&&$.length)]},null,8,["modelValue","has-error"])]}),_:1}),t(y,null,{default:r(()=>{var f,g,h,c;return[t(H,{modelValue:e(o).enable,"onUpdate:modelValue":l[5]||(l[5]=i=>e(o).enable=i),pass:e(N)},null,8,["modelValue","pass"]),t(E,{"has-error":[!!((g=(f=e(s))==null?void 0:f.videoEmbed)!=null&&g.length),!!((c=(h=e(s))==null?void 0:h.content)!=null&&c.length)]},{heading:r(()=>[n(m(a.$t("form.content")),1)]),content:r(()=>{var i,V,_,$;return[t(C,{modelValue:e(o).videoEmbed,"onUpdate:modelValue":l[6]||(l[6]=d=>e(o).videoEmbed=d),"has-error":!!((V=(i=e(s))==null?void 0:i.videoEmbed)!=null&&V.length),placeholder:a.$t("form.place_holder.video_embed")},{default:r(()=>[n(m(a.$t("form.video_embed")),1)]),_:1},8,["modelValue","has-error","placeholder"]),t(O,{"has-error":!!(($=(_=e(s))==null?void 0:_.content)!=null&&$.length)},{label:r(()=>[n(m(a.$t("form.content")),1)]),content:r(()=>[t(D,{editor:e(W),modelValue:e(o).content,"onUpdate:modelValue":l[7]||(l[7]=d=>e(o).content=d),config:e(X)},null,8,["editor","modelValue","config"])]),_:1},8,["has-error"])]}),_:1},8,["has-error"])]}),_:1})]),_:1},8,["submit"])}}});export{_e as default};
