import{u as A}from"./useAsyncValidator-D-1iyTRV.js";import{_ as U,a as w,b as C,c as D}from"./Form.layout.vue_vue_type_script_setup_true_lang-BB3z9VPA.js";import{_ as F}from"./Form.select.vue_vue_type_script_setup_true_lang-DrgtBE1i.js";import{_ as y}from"./Form.input.vue_vue_type_script_setup_true_lang-UlMVIg7b.js";import{_ as N}from"./Form.textarea.vue_vue_type_script_setup_true_lang-Bu5oyXIC.js";import{b as c,s as a,a as T}from"./branch.add-D7m98XN4.js";import{g as j}from"./request.helper-BUxsD2As.js";import{r as v}from"./branch-BP9LOHoV.js";import{f as I,e as E}from"./util.number-CuqvV8jo.js";import{f as M,D as P,o as S,c as q,i as l,h as d,u as e,j as s,t}from"./index-BC3jgjxj.js";import"./index-BMenrDxa.js";import"./form-B9B7fpoT.js";import"./keyboard-BRUDIerL.js";import"./EyeIcon-DFMnCOVI.js";import"./ChevronDownIcon-7gZ8P6ow.js";import"./util.object-9m6X7yey.js";import"./enum-CD4clsnU.js";const de=M({__name:"BranchAddView",setup(z){const{pass:k,errorFields:m}=A(a,v);return P(()=>{j("/api/branchtypes").then(o=>{c.value=(o==null?void 0:o.data)||[]})}),(o,r)=>(S(),q(D,{submit:e(T)},{default:l(()=>[d(U,null,{default:l(()=>{var h,f,p,i,V,$;return[d(w,{"has-error":[!!((f=(h=e(m))==null?void 0:h.name)!=null&&f.length),!!((i=(p=e(m))==null?void 0:p.address1)!=null&&i.length),!!(($=(V=e(m))==null?void 0:V.phone1)!=null&&$.length)]},{heading:l(()=>[s(t(o.$t("form.heading")),1)]),content:l(()=>{var u,b,g,_,B,K;return[d(y,{modelValue:e(a).name,"onUpdate:modelValue":r[0]||(r[0]=n=>e(a).name=n),"has-error":!!((b=(u=e(m))==null?void 0:u.name)!=null&&b.length),placeholder:o.$t("form.place_holder.name")},{default:l(()=>[s(t(o.$t("form.name")),1)]),_:1},8,["modelValue","has-error","placeholder"]),d(y,{modelValue:e(a).address1,"onUpdate:modelValue":r[1]||(r[1]=n=>e(a).address1=n),"has-error":!!((_=(g=e(m))==null?void 0:g.address1)!=null&&_.length),placeholder:o.$t("form.place_holder.address1")},{default:l(()=>[s(t(o.$t("form.address1")),1)]),_:1},8,["modelValue","has-error","placeholder"]),d(y,{modelValue:e(a).address2,"onUpdate:modelValue":r[2]||(r[2]=n=>e(a).address2=n),placeholder:o.$t("form.place_holder.address2")},{default:l(()=>[s(t(o.$t("form.address2")),1)]),_:1},8,["modelValue","placeholder"]),d(y,{modelValue:e(a).phone1,"onUpdate:modelValue":r[3]||(r[3]=n=>e(a).phone1=n),"has-error":!!((K=(B=e(m))==null?void 0:B.phone1)!=null&&K.length),placeholder:o.$t("form.place_holder.phone1"),onKeyup:e(I),onKeydown:e(E)},{default:l(()=>[s(t(o.$t("form.phone1")),1)]),_:1},8,["modelValue","has-error","placeholder","onKeyup","onKeydown"]),d(y,{modelValue:e(a).phone2,"onUpdate:modelValue":r[4]||(r[4]=n=>e(a).phone2=n),placeholder:o.$t("form.place_holder.phone2"),onKeyup:e(I),onKeydown:e(E)},{default:l(()=>[s(t(o.$t("form.phone2")),1)]),_:1},8,["modelValue","placeholder","onKeyup","onKeydown"])]}),_:1},8,["has-error"])]}),_:1}),d(U,null,{default:l(()=>{var h,f;return[d(C,{modelValue:e(a).enable,"onUpdate:modelValue":r[5]||(r[5]=p=>e(a).enable=p),pass:e(k)},null,8,["modelValue","pass"]),d(w,{"has-error":[!!((f=(h=e(m))==null?void 0:h.typeId)!=null&&f.length)]},{heading:l(()=>[s(t(o.$t("form.branchtype")),1)]),content:l(()=>{var p,i,V,$;return[d(F,{modelValue:e(a).typeId,"onUpdate:modelValue":r[6]||(r[6]=u=>e(a).typeId=u),list:e(c),"has-error":!!((i=(p=e(m))==null?void 0:p.typeId)!=null&&i.length),placeholder:o.$t("form.place_holder.branchtype")},{default:l(()=>[s(t(o.$t("form.select_branchtype")),1)]),_:1},8,["modelValue","list","has-error","placeholder"]),d(N,{modelValue:e(a).addressEmbed,"onUpdate:modelValue":r[7]||(r[7]=u=>e(a).addressEmbed=u),"has-error":!!(($=(V=e(m))==null?void 0:V.addressEmbed)!=null&&$.length),placeholder:o.$t("form.place_holder.address_embed")},{default:l(()=>[s(t(o.$t("form.embed")),1)]),_:1},8,["modelValue","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1})]),_:1},8,["submit"]))}});export{de as default};
