import{_ as k}from"./CpNavBar-c504a05c.js";import{d as x,r as t,u as S,b as B,v as L,o as U,e as u,f as M,g as Q,h as n,w as i,j as A,x as f,y as b,i as d,t as N,l as P,n as D}from"./index-4c72e0fc.js";import{b as R,c as T,s as j}from"./user-47156167.js";import{m as q}from"./rules-1f659873.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./request-254b162d.js";const $={class:"login-page"},z={class:"cp-cell"},F=x({__name:"LoginCallback",setup(G){const s=t("13230000001"),l=t(""),o=t(0),p=t(""),g=t(!0),_=S(),w=B(),m=e=>{w.saveUser(e.data),_.replace("/"),D("登录成功")},y=async()=>{const e=await T({mobile:s.value,code:l.value,openId:p.value});m(e)};let c;const C=async()=>{const e=await j(s.value,"bindMobile");l.value=e.data.code,o.value=60,c=setInterval(()=>{o.value--,o.value===0&&clearInterval(c)},100)};return L(()=>{window.QC.Login.check()&&window.QC.Login.getMe(e=>{p.value=e,R(e).then(a=>{_.push("/"),m(a)}).catch(()=>{g.value=!1})})}),U(()=>{clearInterval(c)}),(e,a)=>{const h=k,v=u("van-field"),I=u("van-button"),V=u("van-form");return M(),Q("div",$,[n(h,{title:"绑定手机号"}),n(V,{autocomplete:"off",onSubmit:y},{default:i(()=>[n(v,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=r=>s.value=r),placeholder:"请输入手机号",type:"tel",rules:A(q)},null,8,["modelValue","rules"]),n(v,{rules:[{required:!0,message:"请输入验证码"},{pattern:/^\d{6}$/,message:"验证码6个数字"}],modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=r=>l.value=r),placeholder:"请输入验证码"},{button:i(()=>[f(d("span",{class:"send-code",onClick:C},"发送验证码",512),[[b,o.value===0]]),f(d("span",null,N(o.value)+"秒后获取",513),[[b,o.value>0]])]),_:1},8,["modelValue"]),d("div",z,[n(I,{block:"",round:"",type:"primary","native-type":"submit"},{default:i(()=>[P(" 立即绑定 ")]),_:1})])]),_:1})])}}});const Y=E(F,[["__scopeId","data-v-953f060a"]]);export{Y as default};