import{_ as x}from"./CpNavBar-a86a2f9c.js";import{d as y,D as V,r as _,c as h,v as B,e as n,f as a,g as l,h as c,i as d,w as i,F as u,B as p,k as m,l as w,t as I,j as N}from"./index-0098951a.js";import{b as S}from"./consult-437f6c70.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-21aa91d0.js";const F={class:"consult-dep-page"},j={class:"wrapper"},E={class:"sub-dep"},L=y({__name:"ConsultDep",setup(M){const v=V(),o=_([]),f=async()=>{const t=await S();o.value=t.data.data},s=_(0),k=h(()=>{var t;return(t=o.value[s.value])==null?void 0:t.child});return B(f),(t,r)=>{const D=x,C=n("van-sidebar-item"),b=n("van-sidebar"),g=n("router-link");return a(),l("div",F,[c(D,{title:"选择科室"}),d("div",j,[c(b,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=e=>s.value=e)},{default:i(()=>[(a(!0),l(u,null,p(o.value,e=>(a(),m(C,{title:e.name,key:e.id},null,8,["title"]))),128))]),_:1},8,["modelValue"]),d("div",E,[(a(!0),l(u,null,p(k.value,e=>(a(),m(g,{to:"/consult/illness",key:e.id,onClick:P=>N(v).setDep(e.id)},{default:i(()=>[w(I(e.name),1)]),_:2},1032,["onClick"]))),128))])])])}}});const G=A(L,[["__scopeId","data-v-871a14ab"]]);export{G as default};