import*as t from"../../../../../script.js";import*as e from"../../../../../scripts/extensions.js";export const id=885;export const ids=[885];export const modules={1952:(o,n,s)=>{s.d(n,{A:()=>j});const i=(t=>{var e={};return s.d(e,t),e})({getEntitiesList:()=>t.getEntitiesList});var r=s(3021),c=s(6540),l=s(5338),a=s(1849),m=s(7265),d=s(4848);const p=function(){function t(){alert(`Hello, ${SillyTavern.getContext().name1}!`)}return(0,d.jsxs)(m.A,{children:[(0,d.jsx)(a.A,{className:"menu_button",onClick:()=>t(),children:"Click me"}),(0,d.jsx)(a.A,{className:"menu_button",onClick:()=>t(),children:"Click me"})]})};s(4172),s(5483),s(6718),s(3024);const g=()=>{const t=document.getElementById("extensions_settings"),e=document.createElement("div");t.appendChild(e);l.createRoot(e).render((0,d.jsx)(c.StrictMode,{children:(0,d.jsx)(p,{})}))},x=new Map;async function u(t){if(x.has(t))return x.get(t);t=`/${t}`;const e=await import(t);return x.set(t,e),e}const f=(t=>{var e={};return s.d(e,t),e})({getApiUrl:()=>e.getApiUrl});async function j(){console.log("init");const t=await u("script.js");console.log(t);const{getContext:e}=await u("scripts/extensions.js");console.log(e()),console.log("Hello from SillyTavern-Extension-ZerxzLib!"),console.log("Importing from SillyTavern-Extension-ZerxzLib/src/index.ts"),console.log((0,i.getEntitiesList)()),console.log(new r.Ay),console.log((0,f.getApiUrl)()),g()}j()}};import o from"./react.js";import*as n from"./vendor.js";o.C(n);import*as s from"./zerxzLib.js";o.C(s);var i,r=(i=1952,o(o.s=i)).A;export{r as default};
//# sourceMappingURL=zerxzLib.js.map