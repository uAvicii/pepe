import{T as n,U as a,V as r,W as c,h as u,X as i,Y as f}from"./index-48960f67.js";let l;const m={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let p=n({},m);function d(){({instance:l}=r({setup(){const{state:t,toggle:o}=c();return()=>u(f,i(t,{"onUpdate:show":o}),null)}}))}function w(e){return a?new Promise((t,o)=>{l||d(),l.open(n({},p,e,{callback:s=>{(s==="confirm"?t:o)(s)}}))}):Promise.resolve()}const C=e=>w(n({showCancelButton:!0},e));export{w as a,C as s};
