import{f as p,Y as L,W as c,d as P,D as q,w as A,I as C,F as O,o as d,a as k,b as l,ah as b,j as E,t as _,l as h,af as R,ag as G,c as v,i as y,h as H,u as g,y as U}from"./index-Cz9B68HP.js";import{d as W,f as Y,u as J,p as Q}from"./form-aYMBd3ty.js";import{I as X,s as Z,o as ee,E as te,A as ae,T as re,a as B}from"./keyboard-BOI6BuMK.js";import{a as se,r as le}from"./EyeIcon-ByucquJJ.js";let oe=Symbol("GroupContext"),ne=p({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(t,{emit:a,attrs:r,slots:s,expose:m}){var $;let j=($=t.id)!=null?$:`headlessui-switch-${X()}`,n=L(oe,null),[i,x]=W(c(()=>t.modelValue),e=>a("update:modelValue",e),c(()=>t.defaultChecked));function w(){x(!i.value)}let D=P(null),u=n===null?D:n.switchRef,F=Z(c(()=>({as:t.as,type:r.type})),u);m({el:u,$el:u});function z(e){e.preventDefault(),w()}function I(e){e.key===B.Space?(e.preventDefault(),w()):e.key===B.Enter&&Q(e.currentTarget)}function M(e){e.preventDefault()}let f=c(()=>{var e,o;return(o=(e=ee(u))==null?void 0:e.closest)==null?void 0:o.call(e,"form")});return q(()=>{A([f],()=>{if(!f.value||t.defaultChecked===void 0)return;function e(){x(t.defaultChecked)}return f.value.addEventListener("reset",e),()=>{var o;(o=f.value)==null||o.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{name:e,value:o,form:T,tabIndex:V,...S}=t,N={checked:i.value},K={id:j,ref:u,role:"switch",type:F.value,tabIndex:V===-1?0:V,"aria-checked":i.value,"aria-labelledby":n==null?void 0:n.labelledby.value,"aria-describedby":n==null?void 0:n.describedby.value,onClick:z,onKeyup:I,onKeypress:M};return C(O,[e!=null&&i.value!=null?C(Y,te({features:J.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,form:T,disabled:S.disabled,name:e,value:o})):null,ae({ourProps:K,theirProps:{...r,...re(S,["modelValue","defaultChecked"])},slot:N,attrs:r,slots:s,name:"Switch"})])}}});const de={class:"px-6.5 py-4 border-b border-gray-100 dark:border-zinc-950 dark:!bg-zinc-950"},ie={class:"text-black-1000 font-medium dark:text-white"},ue={class:"gap-5.5 p-6.5 flex flex-col"},ce=p({__name:"Form.group",props:{hasError:{}},setup(t){const a=t,r=c(()=>a.hasError.every(s=>s===!1));return(s,m)=>(d(),k("div",{class:h(["dark:border-zinc-950 dark:bg-zinc-950/90 rounded-sm border border-gray-100 bg-white shadow",{"!border-green-600":r.value}])},[l("div",de,[l("h3",ie,[b(s.$slots,"heading",{},()=>[E(_(s.$t("form.default_title")),1)])])]),l("div",ue,[b(s.$slots,"content")])],2))}}),pe={class:"flex items-center justify-between"},me=l("span",{class:"sr-only"},"Enble",-1),fe=["disabled"],_e=p({__name:"PublishView",props:R({pass:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=G(t,"modelValue");return(r,s)=>(d(),v(ce,{"has-error":[!r.pass]},{heading:y(()=>[E(_(r.$t("form.content")),1)]),content:y(()=>[l("div",pe,[l("div",null,[H(g(ne),{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=m=>a.value=m),class:h([a.value?"bg-green-200":"bg-red-200","h-9.5 w-18.5 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"])},{default:y(()=>[me,l("span",{"aria-hidden":"true",class:h([a.value?"translate-x-9":"translate-x-0","h-8.5 w-8.5 pointer-events-none inline-flex transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])},[a.value?(d(),v(g(se),{key:0,class:"h-4 w-4 text-green-600"})):(d(),v(g(le),{key:1,class:"h-4 w-4 text-red-600"}))],2)]),_:1},8,["modelValue","class"])]),l("div",null,[l("button",{disabled:!r.pass,class:"bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600",type:"submit"},_(r.$t("button.publish")),9,fe)])])]),_:1},8,["has-error"]))}}),ke=p({__name:"Form.item",props:{reverse:{type:Boolean,default:!1,required:!1}},setup(t){return(a,r)=>(d(),k("div",{class:h(["flex flex-col gap-9",{"flex-col-reverse":t.reverse}])},[b(a.$slots,"default")],2))}}),be={class:"grid grid-cols-1 gap-9 sm:grid-cols-2"},$e=p({__name:"Form.layout",props:{submit:{type:Function}},setup(t){return(a,r)=>(d(),k("form",{onSubmit:r[0]||(r[0]=U((...s)=>a.submit&&a.submit(...s),["prevent"]))},[l("div",be,[b(a.$slots,"default")])],32))}});export{ke as _,ce as a,_e as b,$e as c};
