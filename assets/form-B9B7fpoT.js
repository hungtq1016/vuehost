import{d as f,W as u,f as s}from"./index-BC3jgjxj.js";import{A as p}from"./keyboard-BRUDIerL.js";function y(e,t,n){let o=f(n==null?void 0:n.value),r=u(()=>e.value!==void 0);return[u(()=>r.value?e.value:o.value),function(l){return r.value||(o.value=l),t==null?void 0:t(l)}]}var m=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(m||{});let b=s({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var o;let{features:r,...l}=e,d={"aria-hidden":(r&2)===2?!0:(o=l["aria-hidden"])!=null?o:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return p({ourProps:d,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function c(e={},t=null,n=[]){for(let[o,r]of Object.entries(e))i(n,a(t,o),r);return n}function a(e,t){return e?e+"["+t+"]":t}function i(e,t,n){if(Array.isArray(n))for(let[o,r]of n.entries())i(e,a(t,o.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):c(n,t,e)}function g(e){var t,n;let o=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(o){for(let r of o.elements)if(r!==e&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(n=o.requestSubmit)==null||n.call(o)}}export{y as d,c as e,b as f,g as p,m as u};
