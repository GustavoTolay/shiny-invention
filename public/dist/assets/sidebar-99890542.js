import{u as b,r as u,b as h,j as a,a as e,F as s,L as n}from"./index-ab2bd05b.js";var r=0;function w({categories:o}){const{product:i}=b(),{setFilters:c,filters:l}=u.useContext(h),d=()=>window.localStorage.getItem("UserSession")?a(s,{children:[e("h5",{className:"py-2 m-0 text-white",children:"Acciones"}),a("div",{className:"list-group ",children:[e(n,{to:"/AddItem",children:e("button",{className:"btn btn-danger mb-2",children:"Añadir producto"})}),e(n,{to:"/AddCategory",children:e("button",{className:"btn btn-danger mb-2",children:"Añadir categoria"})}),e(n,{to:"/Login",children:e("button",{className:"btn btn-danger mb-2",children:"Iniciar Sesión"})}),e("div",{children:e("button",{className:"btn btn-danger mb-2",onClick:()=>window.localStorage.removeItem("UserSession"),children:"Cerrar Sesión"})})]})]}):e(s,{});return a("div",{className:"col-3 col-lg-2 px-3 bg-main_blue d-none d-sm-block",children:[e("h5",{className:"py-3 m-0 text-white",children:"Categorias"}),e("div",{className:"list-group",children:(()=>o.map((t,x)=>(r=r+1,t.name==l.category&&!i?e("button",{className:"btn btn-outline-secondary_blue border-2 text-white fw-normal mb-1",children:t.name},r):e(n,{to:`/category/${t.name}`,children:e("button",{className:"btn btn-secondary_blue border-2 text-white fw-normal mb-1 w-100",onClick:()=>{c({category:t.name})},children:t.name})},r))))()}),d()]})}export{w as S};
