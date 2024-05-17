import{u as A}from"./useAsyncValidator-D-1iyTRV.js";import{d as r,a3 as T,f as z,x as G,D as H,o as J,a as K,h as n,i as s,u as a,j as v,t as d,a8 as O,O as V,b as f}from"./index-BC3jgjxj.js";import{_ as E,a as y,b as L,c as N}from"./Form.layout.vue_vue_type_script_setup_true_lang-BB3z9VPA.js";import{_ as Q}from"./Form.input.vue_vue_type_script_setup_true_lang-UlMVIg7b.js";import{_ as X}from"./Form.textarea.vue_vue_type_script_setup_true_lang-Bu5oyXIC.js";import{_ as Y}from"./TableView.vue_vue_type_script_setup_true_lang-B5Vx3H2t.js";import{_ as k}from"./Form.radio.vue_vue_type_script_setup_true_lang-6MeEER9F.js";import{p as U,r as Z,a as aa,h as ta,b as ea}from"./prescription.table-B_RTjazF.js";import{i as ia,p as F}from"./prescription-B89Lk9LU.js";import{g as $,a as na,d as oa,p as sa}from"./request.helper-BUxsD2As.js";import{f as M}from"./index-BMenrDxa.js";import"./form-B9B7fpoT.js";import"./keyboard-BRUDIerL.js";import"./EyeIcon-DFMnCOVI.js";import"./menu-czhoOWEQ.js";import"./use-tree-walker-4cElRtIG.js";import"./open-closed-DukHBB9u.js";import"./CheckIcon-ejTq0Okq.js";import"./EyeIcon-DYtsuB1-.js";import"./ChevronRightIcon-D73-YqWH.js";import"./vi-BCs7vrn8.js";import"./formatDistance-DIVh-Rvm.js";import"./ChevronDownIcon-7gZ8P6ow.js";import"./util.number-CuqvV8jo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./enum-CD4clsnU.js";const j={prescriptionId:"-1",usage:"",medicineId:"-1",quantity:1},u=r({...j}),g=r({}),S=r([]),C=r([]),b=r([]),_=r([]),P=r([]),h=r(""),I=r(""),ra=r({}),la=r({}),x=r({...ia}),da=async e=>{await $("/api/prescriptions/"+e).then(t=>{t!=null&&t.data&&(g.value=t.data)})},R=async()=>{const e={...F.value,value:h.value};$("/api/medicines/page",e).then(t=>{if(t!=null&&t.data){const{data:i,...p}=t.data;S.value=i,ra.value=p}})},W=async e=>{h.value=e;const t={...F.value,value:h.value};$("/api/users/role/customer/search",t).then(i=>{if(i!=null&&i.data){const{data:p,...w}=i.data;C.value=p,la.value=w}})},ua=()=>{var t;const e=(t=S.value)==null?void 0:t.find(i=>i.id===u.value.medicineId);u.value.medicine=e,b.value=b.value.concat(P.value),_.value=_.value.filter(i=>!P.value.some(p=>p.id===i.id)),u.value=j},pa=async e=>{$("/api/prescriptiondetails/prescription/"+e).then(t=>{t!=null&&t.data&&(_.value=t.data,b.value=_.value)})},ca=async()=>{await na("/api/prescriptions/"+g.value.id,g).then(e=>{e!=null&&e.data&&T(e.message)}),b.value.forEach(async e=>{await oa("/api/prescriptiondetails/"+e.id)}),P.value.forEach(async e=>{e.prescriptionId=g.value.id,await sa("/api/prescriptiondetails",e)})},ma=M(async()=>{await R()},600,{maxWait:5e3}),fa=M(async()=>{await W(h.value)},600,{maxWait:5e3}),ga={class:"flex flex-col gap-10"},ha={class:"flex flex-wrap items-center justify-end gap-3.5"},va={type:"button",class:"inline-flex items-center gap-2.5 rounded bg-transparent px-4 py-2 font-medium text-green-600 border border-green-600 hover:bg-opacity-90"},ba={class:"inline-flex items-center gap-2.5 rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-opacity-90"},ya=["disabled"],Ha=z({__name:"PrescriptionEditView",setup(e){const t=G(),{pass:i,errorFields:p}=A(g,ea),w=async()=>{await ca()};return H(async()=>{await da(String(t.params.id)),await pa(String(t.params.id)),await R(),await W(String(t.query.email))}),(l,o)=>(J(),K("div",ga,[n(N,{submit:a(ua)},{default:s(()=>[n(E,null,{default:s(()=>{var c,q,B,D;return[n(y,{"has-error":[!!((q=(c=a(p))==null?void 0:c.medicineId)!=null&&q.length)]},{heading:s(()=>[v(d(l.$t("form.medicine")),1)]),content:s(()=>[n(k,O({"onUpdate:search":[a(ma),o[1]||(o[1]=m=>V(I)?I.value=m:null)],id:a(u).medicineId,"onUpdate:id":o[0]||(o[0]=m=>a(u).medicineId=m),search:a(I),list:a(S)},{pagination:a(x),paginationOptions:a(U)}),null,16,["onUpdate:search","id","search","list"])]),_:1},8,["has-error"]),n(y,{"has-error":[!!((D=(B=a(p))==null?void 0:B.patientId)!=null&&D.length)]},{heading:s(()=>[v(d(l.$t("form.customer")),1)]),content:s(()=>[n(k,O({"onUpdate:search":[a(fa),o[3]||(o[3]=m=>V(h)?h.value=m:null)],id:a(g).patientId,"onUpdate:id":o[2]||(o[2]=m=>a(g).patientId=m),search:a(h),list:a(C)},{pagination:a(x),paginationOptions:a(U)}),null,16,["onUpdate:search","id","search","list"])]),_:1},8,["has-error"])]}),_:1}),n(E,null,{default:s(()=>[n(L,{modelValue:a(i),"onUpdate:modelValue":o[4]||(o[4]=c=>V(i)?i.value=c:null),pass:!0},null,8,["modelValue"]),n(y,{"has-error":[!1]},{heading:s(()=>[v(d(l.$t("form.content")),1)]),content:s(()=>[n(Q,{modelValue:a(u).quantity,"onUpdate:modelValue":o[5]||(o[5]=c=>a(u).quantity=c),type:"number",placeholder:l.$t("form.place_holder.quantity")},{default:s(()=>[v(d(l.$t("form.quantity")),1)]),_:1},8,["modelValue","placeholder"]),n(X,{modelValue:a(u).usage,"onUpdate:modelValue":o[6]||(o[6]=c=>a(u).usage=c),"has-error":!1,placeholder:l.$t("form.place_holder.usage")},{default:s(()=>[v(d(l.$t("form.usage")),1)]),_:1},8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["submit"]),n(N,{submit:w},{default:s(()=>[n(y,{"has-error":[a(i)],class:"col-span-2"},{heading:s(()=>[v(d(l.$t("content.prescription")),1)]),content:s(()=>[f("div",ha,[f("button",va,[n(a(Z),{class:"w-5 h-5"}),f("span",null,d(l.$t("button.save_as",{name:"PDF"})),1)]),f("button",ba,[n(a(aa),{class:"w-5 h-5"}),f("span",null,d(l.$t("button.print")),1)]),f("button",{type:"submit",disabled:!a(i),class:"inline-flex items-center gap-2.5 rounded bg-cerulean-600 px-4 py-2 font-medium text-white hover:bg-opacity-90 disabled:bg-cerulean-300"},[f("span",null,d(l.$t("button.submit")),1)],8,ya)]),n(Y,{headers:a(ta),items:a(b),pagination:a(x),"pagination-options":a(U),fetch:async()=>{},route:"pre",key:"pre"},null,8,["headers","items","pagination","pagination-options"])]),_:1},8,["has-error"])]),_:1})]))}});export{Ha as default};
