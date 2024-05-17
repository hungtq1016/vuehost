import{u as E}from"./useAsyncValidator-CvlvEwpL.js";import{_ as y,a as x,b as N,c as j}from"./Form.layout.vue_vue_type_script_setup_true_lang-CPRpQ6ZQ.js";import{_ as F}from"./Form.select.vue_vue_type_script_setup_true_lang-DulRE8UV.js";import{d as A,p as D,g as k}from"./request.helper-D1MGDj_g.js";import{ad as O,d as h,a3 as I,a5 as R,w as B,f as S,D as U,o as b,c as G,i as d,h as u,u as r,j as _,t as m,b as i,a as $,F as L,g as M}from"./index-Cz9B68HP.js";import{r as T}from"./util.object-9m6X7yey.js";import{v as q}from"./v4-CQkTLCs1.js";import{r as H}from"./user-Bpvktygh.js";import"./index--rcVdR2e.js";import"./form-aYMBd3ty.js";import"./keyboard-BOI6BuMK.js";import"./EyeIcon-ByucquJJ.js";import"./ChevronDownIcon-1IFWtljn.js";import"./enum-CD4clsnU.js";const z={userId:"-1",roleId:"-1",enable:!0},l=O({...z}),V=h([]),w=h([]),f=h([]),c=h([]);function J(e){return!!f.value.find(a=>a.id===e.id)}function K(e){const a=c.value.map(t=>t.id).indexOf(e.id);a!==-1?c.value.splice(a,1):c.value.push(e)}const P=async()=>{f.value.forEach(async e=>{e.groups.forEach(async a=>{const t=await A("/api/groups/"+a.id,e);t!==void 0?I(t.message):R("500: Server Error")})}),c.value.forEach(async e=>{const a={id:q(),userId:l.userId,roleId:e.id,enable:!0},t=await D("/api/groups",a);t!=null&&t.data&&(I(t.message),T(l,z))})};B(()=>l.userId,e=>{e!=="-1"?(c.value=[],k("/api/roles/byuserid/"+e).then(a=>{f.value=(a==null?void 0:a.data)||[]})):(f.value=[],c.value=[])});B(f,e=>{c.value=[...e]},{deep:!0});const Q={class:"flex flex-col gap-2"},W=["for"],X={class:"border border-gray-100 relative dark:border-zinc-900 rounded-md"},Y=["checked","onClick","disabled","value","id"],Z={class:"flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950"},ee={class:"flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50"},ae={class:"border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900"},ge=S({__name:"GroupAddView",setup(e){const{pass:a,errorFields:t}=E(l,H);return U(()=>{k("/api/roles").then(s=>{w.value=(s==null?void 0:s.data)||[]}),k("/api/users").then(s=>{V.value=(s==null?void 0:s.data)||[]})}),(s,p)=>(b(),G(j,{submit:r(P)},{default:d(()=>[u(y,null,{default:d(()=>{var o,n;return[u(x,{"has-error":[!!((n=(o=r(t))==null?void 0:o.userId)!=null&&n.length)]},{heading:d(()=>[_(m(s.$t("form.user")),1)]),content:d(()=>{var g,v;return[u(F,{modelValue:r(l).userId,"onUpdate:modelValue":p[0]||(p[0]=C=>r(l).userId=C),list:r(V),"has-error":!!((v=(g=r(t))==null?void 0:g.userId)!=null&&v.length),placeholder:s.$t("form.place_holder.select_email")},{default:d(()=>[_(m(s.$t("form.user")),1)]),_:1},8,["modelValue","list","has-error","placeholder"])]}),_:1},8,["has-error"])]}),_:1}),u(y,null,{default:d(()=>[u(N,{modelValue:r(l).enable,"onUpdate:modelValue":p[1]||(p[1]=o=>r(l).enable=o),pass:r(a)},null,8,["modelValue","pass"]),u(x,{"has-error":[!1]},{heading:d(()=>[_(m(s.$t("form.role")),1)]),content:d(()=>[i("ul",Q,[(b(!0),$(L,null,M(r(w),(o,n)=>(b(),$("li",{key:n},[i("label",{for:`checkbox-${n}`},[i("div",X,[i("input",{checked:r(J)(o),onClick:g=>r(K)(o),disabled:r(l).userId==="-1",class:"absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600",type:"checkbox",value:o,id:`checkbox-${n}`},null,8,Y),i("div",Z,[i("div",ee,m(o.name),1)]),i("div",ae,m(o.note),1)])],8,W)]))),128))])]),_:1})]),_:1})]),_:1},8,["submit"]))}});export{ge as default};
