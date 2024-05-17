import{u as j}from"./useAsyncValidator-CvlvEwpL.js";import{_ as C,a as $,b as F,c as M}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as O}from"./ImageView.vue_vue_type_script_setup_true_lang-H5VI4OCR.js";import{_ as E}from"./Form.input.vue_vue_type_script_setup_true_lang-Cxj-k_Rq.js";import{_ as R}from"./Form.select.vue_vue_type_script_setup_true_lang-DulRE8UV.js";import{_ as I}from"./Form.textarea.vue_vue_type_script_setup_true_lang-0thaYdDA.js";import{_ as S}from"./Form.input.slot.vue_vue_type_script_setup_true_lang-DtddyGCv.js";import{c as w,t as A,s as a,e as q,a as z,_ as G,b,d as H}from"./blog.add-DLSqRQQn.js";import{g as D}from"./request.helper-D1MGDj_g.js";import{r as J}from"./blog-4PQd6cGd.js";import{f as K,D as L,r as P,o as Q,c as W,i as r,h as t,u as e,j as m,t as s,O as X}from"./index-Cz9B68HP.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./ChevronDownIcon-1IFWtljn.js";import"./util.object-9m6X7yey.js";import"./UploadFile-DOsrtRCs.js";import"./v4-CQkTLCs1.js";import"./enum-CD4clsnU.js";const ce=K({__name:"BlogAddView",setup(Y){const{pass:N,errorFields:d}=j(a,J);return L(()=>{D("/api/categories/admin").then(o=>{w.value=(o==null?void 0:o.data)||[]}),D("/api/tags").then(o=>{A.value=(o==null?void 0:o.data)||[]})}),(o,l)=>{const T=P("ckeditor");return Q(),W(M,{submit:e(H)},{default:r(()=>[t(C,null,{default:r(()=>{var f,p,g,h,n,V,_,c;return[t($,{"has-error":[!!((p=(f=e(d))==null?void 0:f.title)!=null&&p.length),!!((h=(g=e(d))==null?void 0:g.categoryId)!=null&&h.length),!!((V=(n=e(d))==null?void 0:n.content)!=null&&V.length)]},{heading:r(()=>[m(s(o.$t("form.heading")),1)]),content:r(()=>{var i,B,U,v,y,k;return[t(E,{modelValue:e(a).title,"onUpdate:modelValue":l[0]||(l[0]=u=>e(a).title=u),"has-error":!!((B=(i=e(d))==null?void 0:i.title)!=null&&B.length),placeholder:o.$t("form.place_holder.title")},{default:r(()=>[m(s(o.$t("form.title")),1)]),_:1},8,["modelValue","has-error","placeholder"]),t(E,{modelValue:e(a).slug,"onUpdate:modelValue":l[1]||(l[1]=u=>e(a).slug=u),disabled:!0,placeholder:o.$t("form.place_holder.slug")},{default:r(()=>[m(s(o.$t("form.slug")),1)]),_:1},8,["modelValue","placeholder"]),t(R,{modelValue:e(a).categoryId,"onUpdate:modelValue":l[2]||(l[2]=u=>e(a).categoryId=u),list:e(w),"has-error":!!((v=(U=e(d))==null?void 0:U.categoryId)!=null&&v.length),placeholder:o.$t("form.place_holder.category")},{default:r(()=>[m(s(o.$t("form.select_category")),1)]),_:1},8,["modelValue","list","has-error","placeholder"]),t(S,{"has-error":!!((k=(y=e(d))==null?void 0:y.content)!=null&&k.length)},{label:r(()=>[m(s(o.$t("form.content")),1)]),content:r(()=>[t(T,{editor:e(q),modelValue:e(a).content,"onUpdate:modelValue":l[3]||(l[3]=u=>e(a).content=u),config:e(z)},null,8,["editor","modelValue","config"])]),_:1},8,["has-error"])]}),_:1},8,["has-error"]),t(O,{modelValue:e(a).imageUrl,"onUpdate:modelValue":l[4]||(l[4]=i=>e(a).imageUrl=i),"has-error":[!!((c=(_=e(d))==null?void 0:_.imageUrl)!=null&&c.length)]},null,8,["modelValue","has-error"])]}),_:1}),t(C,null,{default:r(()=>{var f,p,g,h;return[t(F,{modelValue:e(a).enable,"onUpdate:modelValue":l[5]||(l[5]=n=>e(a).enable=n),pass:e(N)},null,8,["modelValue","pass"]),t($,{"has-error":[!!((p=(f=e(d))==null?void 0:f.desc)!=null&&p.length),!!((h=(g=e(d))==null?void 0:g.videoEmbed)!=null&&h.length)]},{heading:r(()=>[m(s(o.$t("form.content")),1)]),content:r(()=>{var n,V,_,c;return[t(I,{modelValue:e(a).videoEmbed,"onUpdate:modelValue":l[6]||(l[6]=i=>e(a).videoEmbed=i),"has-error":!!((V=(n=e(d))==null?void 0:n.videoEmbed)!=null&&V.length),placeholder:o.$t("form.place_holder.video_embed")},{default:r(()=>[m(s(o.$t("form.video_embed")),1)]),_:1},8,["modelValue","has-error","placeholder"]),t(I,{modelValue:e(a).desc,"onUpdate:modelValue":l[7]||(l[7]=i=>e(a).desc=i),"has-error":!!((c=(_=e(d))==null?void 0:_.desc)!=null&&c.length),placeholder:o.$t("form.place_holder.desc")},{default:r(()=>[m(s(o.$t("form.desc")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"]),t($,{"has-error":[!1]},{heading:r(()=>[m(s(o.$t("form.content")),1)]),content:r(()=>[t(G,{modelValue:e(b),"onUpdate:modelValue":l[8]||(l[8]=n=>X(b)?b.value=n:null),list:e(A),"has-error":!1,placeholder:o.$t("form.place_holder.multiple_select_tag")},{default:r(()=>[m(s(o.$t("form.multiple_select_tag")),1)]),_:1},8,["modelValue","list","placeholder"])]),_:1})]}),_:1})]),_:1},8,["submit"])}}});export{ce as default};
