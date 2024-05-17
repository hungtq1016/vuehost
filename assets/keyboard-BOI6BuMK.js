import{Y as A,d as k,D as $,a0 as S,ao as P,I as T,F as D}from"./index-Cz9B68HP.js";let H=Symbol("headlessui.useid"),U=0;function C(){return A(H,()=>`${++U}`)()}function m(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function v(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,v),r}function w(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function F(e,t){let n=k(w(e.value.type,e.value.as));return $(()=>{n.value=w(e.value.type,e.value.as)}),S(()=>{var r;n.value||m(t)&&m(t)instanceof HTMLButtonElement&&!((r=m(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var N=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(N||{}),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function I({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var i;let u=O(r,n),s=Object.assign(a,{props:u});if(e||t&2&&u.static)return g(s);if(t&1){let p=(i=u.unmount)==null||i?0:1;return v(p,{0(){return null},1(){return g({...a,props:{...u,hidden:!0,style:{display:"none"}}})}})}return g(s)}function g({props:e,attrs:t,slots:n,slot:r,name:a}){var i,u;let{as:s,...p}=L(e,["unmount","static"]),l=(i=n.default)==null?void 0:i.call(n,r),y={};if(r){let c=!1,h=[];for(let[d,f]of Object.entries(r))typeof f=="boolean"&&(c=!0),f===!0&&h.push(d);c&&(y["data-headlessui-state"]=h.join(" "))}if(s==="template"){if(l=j(l??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!B(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(o=>o.trim()).filter((o,b,E)=>E.indexOf(o)===b).sort((o,b)=>o.localeCompare(b)).map(o=>`  - ${o}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(o=>`  - ${o}`).join(`
`)].join(`
`));let d=O((u=c.props)!=null?u:{},p,y),f=P(c,d,!0);for(let o in d)o.startsWith("on")&&(f.props||(f.props={}),f.props[o]=d[o]);return f}return Array.isArray(l)&&l.length===1?l[0]:l}return T(s,Object.assign({},p,y),{default:()=>l})}function j(e){return e.flatMap(t=>t.type===D?j(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...i){let u=n[r];for(let s of u){if(a instanceof Event&&a.defaultPrevented)return;s(a,...i)}}});return t}function W(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function L(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function B(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});export{I as A,W as E,C as I,N,L as T,M as a,m as o,F as s,v as u};
