import{u as F}from"./useAsyncValidator-D-1iyTRV.js";import{_ as y,a as x,b as N,c as O}from"./Form.layout.vue_vue_type_script_setup_true_lang-BB3z9VPA.js";import{d as U,p as j,g as v}from"./request.helper-BUxsD2As.js";import{ad as D,d as f,a3 as I,a5 as R,w as B,f as A,D as S,o as _,c as G,i as n,h as p,u as s,j as $,t as b,a8 as L,O as M,b as c,a as w,F as P,g as T}from"./index-BC3jgjxj.js";import{r as W}from"./util.object-9m6X7yey.js";import{p as z,r as q}from"./group-CV35DPY3.js";import{v as H}from"./v4-CQkTLCs1.js";import{f as J}from"./index-BMenrDxa.js";import{_ as K}from"./Form.radio.vue_vue_type_script_setup_true_lang-6MeEER9F.js";import"./form-B9B7fpoT.js";import"./keyboard-BRUDIerL.js";import"./EyeIcon-DFMnCOVI.js";import"./enum-CD4clsnU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={userId:"-1",roleId:"-1",enable:!0},i=D({...C}),k=f([]),V=f([]),g=f([]),l=f([]),m=f(""),E=f({});function Q(e){return!!g.value.find(a=>a.id===e.id)}function X(e){const a=l.value.map(t=>t.id).indexOf(e.id);a!==-1?l.value.splice(a,1):l.value.push(e)}const Y=async()=>{g.value.forEach(async e=>{e.groups.forEach(async a=>{const t=await U("/api/groups/"+a.id,e);t!==void 0?I(t.message):R("500: Server Error")})}),l.value.forEach(async e=>{const a={id:H(),userId:i.userId,roleId:e.id,enable:!0},t=await j("/api/groups",a);t!=null&&t.data&&(I(t.message),W(i,C))})},Z=async e=>{m.value="";const a={...z.value,value:m.value};v("/api/users/page",a).then(t=>{if(t!=null&&t.data){const{data:r,...d}=t.data;k.value=r,E.value=d}})},ee=J(async()=>{await Z()},600,{maxWait:5e3});B(()=>i.userId,e=>{e!=="-1"?(l.value=[],v("/api/roles/byuserid/"+e).then(a=>{g.value=(a==null?void 0:a.data)||[]})):(g.value=[],l.value=[])});B(g,e=>{l.value=[...e]},{deep:!0});const ae={class:"flex flex-col gap-2"},te=["for"],se={class:"border border-gray-100 relative dark:border-zinc-900 rounded-md"},re=["checked","onClick","disabled","value","id"],oe={class:"flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950"},ie={class:"flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50"},de={class:"border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900"},xe=A({__name:"GroupAddView",setup(e){const{pass:a,errorFields:t}=F(i,q);return S(()=>{v("/api/roles").then(r=>{V.value=(r==null?void 0:r.data)||[]}),v("/api/users").then(r=>{k.value=(r==null?void 0:r.data)||[]})}),(r,d)=>(_(),G(O,{submit:s(Y)},{default:n(()=>[p(y,null,{default:n(()=>{var o,u;return[p(x,{"has-error":[!!((u=(o=s(t))==null?void 0:o.userId)!=null&&u.length)]},{heading:n(()=>[$(b(r.$t("form.user")),1)]),content:n(()=>[p(K,L({"onUpdate:search":[s(ee),d[1]||(d[1]=h=>M(m)?m.value=h:null)],id:s(i).userId,"onUpdate:id":d[0]||(d[0]=h=>s(i).userId=h),search:s(m),list:s(k)},{pagination:s(E),paginationOptions:s(z)}),null,16,["onUpdate:search","id","search","list"])]),_:1},8,["has-error"])]}),_:1}),p(y,null,{default:n(()=>[p(N,{modelValue:s(i).enable,"onUpdate:modelValue":d[2]||(d[2]=o=>s(i).enable=o),pass:s(a)},null,8,["modelValue","pass"]),p(x,{"has-error":[!1]},{heading:n(()=>[$(b(r.$t("form.role")),1)]),content:n(()=>[c("ul",ae,[(_(!0),w(P,null,T(s(V),(o,u)=>(_(),w("li",{key:u},[c("label",{for:`checkbox-${u}`},[c("div",se,[c("input",{checked:s(Q)(o),onClick:h=>s(X)(o),disabled:s(i).userId==="-1",class:"absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600",type:"checkbox",value:o,id:`checkbox-${u}`},null,8,re),c("div",oe,[c("div",ie,b(o.name),1)]),c("div",de,b(o.note),1)])],8,te)]))),128))])]),_:1})]),_:1})]),_:1},8,["submit"]))}});export{xe as default};
