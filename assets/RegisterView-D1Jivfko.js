import{u as k}from"./useAsyncValidator-D-1iyTRV.js";import{_ as q}from"./Auth.form.vue_vue_type_script_setup_true_lang-SrMmWmA1.js";import{_ as u}from"./Auth.input.vue_vue_type_script_setup_true_lang-rf1pOKTW.js";import{p as x}from"./request.helper-BUxsD2As.js";import{ad as A,a5 as j,ae as K,f as R,R as C,r as F,o as S,a as T,h as d,i as m,b as t,u as e,j as p,t as i,A as D,a3 as E,a4 as I}from"./index-BC3jgjxj.js";import{r as L}from"./util.object-9m6X7yey.js";import{f as O,e as z}from"./util.number-CuqvV8jo.js";import"./index-BMenrDxa.js";import"./v4-CQkTLCs1.js";const B={email:"",password:"",fullName:"",rePassword:"",phoneNumber:""},o=A({...B}),G={password:{type:"string",min:5,required:!0},rePassword:{type:"string",min:5,required:!0},fullName:{type:"string",min:5,required:!0},email:{type:"email",min:5,required:!0},phoneNumber:{type:"string",min:5,required:!0}},H=async()=>{const{updateAuthAsync:f}=K();try{const l=await x("/api/authenticate/register",o);if(l!=null&&l.data){const n=l.data,c=await f(n);return L(o,B),!!c}return!1}catch(l){return j(String(l)),!1}},J={class:"max-w-xs w-full"},M={class:"sm:col-span-6"},Q={class:"sm:col-span-6"},W={class:"sm:col-span-6"},X={class:"sm:col-span-6"},Y={class:"sm:col-span-6"},Z={class:"relative shrink-0 pt-4 space-y-3"},ee={class:"space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0"},se={class:"text-center sm:text-left"},ue=R({__name:"RegisterView",setup(f){const{pass:l,errorFields:n}=k(o,G),c=C(),U=async()=>{const{fetchUser:s}=D();await H()&&(E(I.global.t("message.register_success")),await s(),c.push("/"))};return(s,r)=>{const P=F("router-link");return S(),T("div",J,[d(q,{pass:e(l),submit:U},{default:m(()=>{var h,_,w,y,g,V,b,v,N,$;return[t("div",M,[d(u,{modelValue:e(o).email,"onUpdate:modelValue":r[0]||(r[0]=a=>e(o).email=a),type:"email",placeholder:s.$t("form.place_holder.email"),"has-error":!!((_=(h=e(n))==null?void 0:h.email)!=null&&_.length)},{default:m(()=>[p(i(s.$t("form.email")),1)]),_:1},8,["modelValue","placeholder","has-error"])]),t("div",Q,[d(u,{modelValue:e(o).password,"onUpdate:modelValue":r[1]||(r[1]=a=>e(o).password=a),type:"password",placeholder:s.$t("form.place_holder.password"),"has-error":!!((y=(w=e(n))==null?void 0:w.password)!=null&&y.length)},{default:m(()=>[p(i(s.$t("form.password")),1)]),_:1},8,["modelValue","placeholder","has-error"])]),t("div",W,[d(u,{modelValue:e(o).rePassword,"onUpdate:modelValue":r[2]||(r[2]=a=>e(o).rePassword=a),type:"password",placeholder:s.$t("form.place_holder.re_password"),"has-error":!!((V=(g=e(n))==null?void 0:g.rePassword)!=null&&V.length)},{default:m(()=>[p(i(s.$t("form.re_password")),1)]),_:1},8,["modelValue","placeholder","has-error"])]),t("div",X,[d(u,{modelValue:e(o).fullName,"onUpdate:modelValue":r[3]||(r[3]=a=>e(o).fullName=a),placeholder:s.$t("form.place_holder.fullname"),"has-error":!!((v=(b=e(n))==null?void 0:b.fullName)!=null&&v.length)},{default:m(()=>[p(i(s.$t("form.fullname")),1)]),_:1},8,["modelValue","placeholder","has-error"])]),t("div",Y,[d(u,{modelValue:e(o).phoneNumber,"onUpdate:modelValue":r[4]||(r[4]=a=>e(o).phoneNumber=a),placeholder:s.$t("form.place_holder.phone_number"),"has-error":!!(($=(N=e(n))==null?void 0:N.phoneNumber)!=null&&$.length),onKeyup:e(O),onKeydown:e(z)},{default:m(()=>[p(i(s.$t("form.phone_number")),1)]),_:1},8,["modelValue","placeholder","has-error","onKeyup","onKeydown"])])]}),_:1},8,["pass"]),t("div",Z,[t("div",ee,[t("p",se,i(s.$t("content.has_account")),1),d(P,{class:"flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-500 ring-0 border border-slate-500 hover:border-slate-700 hover:text-gray-100 hover:bg-slate-700 duration-300 ease-out",to:"/oauth2"},{default:m(()=>[t("span",null,i(s.$t("route.login")),1)]),_:1})])])])}}});export{ue as default};
