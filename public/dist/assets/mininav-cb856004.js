import{r as N,b as f,j as m,F as l,a as e,L as i}from"./index-ab2bd05b.js";function g({product:r,hideMobileNav:o,categories:d}){const{filters:a,resetAll:n,activeCategory:t,setFilters:s}=N.useContext(f),b=()=>a.category=="all"&&!r?e("li",{className:"breadcrumb-item active",children:e(i,{to:"/",className:"text-white",onClick:()=>{n()},children:"Home"})}):r?m(l,{children:[e("li",{className:"breadcrumb-item",children:e(i,{to:"/",className:"text-white",onClick:()=>{n()},children:"Home"})}),e("li",{className:"breadcrumb-item",children:e(i,{to:`/category/${t}`,className:"text-white",onClick:()=>s({category:t}),children:t})}),e("li",{className:"breadcrumb-item active text-white","aria-current":"page",children:r})]}):m(l,{children:[e("li",{className:"breadcrumb-item",children:e(i,{to:"/",className:"text-white",onClick:()=>{n()},children:"Home"})}),e("li",{className:"breadcrumb-item text-white active",children:a.category})]});function u(){if(!d)return e(l,{});let h=d.map((c,p)=>e("li",{className:"nav-item",children:e("a",{href:"#",className:"nav-link ps-1 pe-0 py-2",onClick:()=>s({category:c.name}),children:e("span",{className:`badge rounded-pill bg-pink fs-6 fw-medium ${a.category!=c.name&&"opacity-75"}`,children:c.name})})},p));return h.unshift(e("li",{className:"nav-item",children:e("a",{href:"#",className:"nav-link ps-1 pe-0 py-2",onClick:()=>s({category:"all"}),children:e("span",{className:`badge rounded-pill bg-pink fs-6 fw-medium ${a.category!="all"&&"opacity-75"}`,children:"Todos"})})},"todos")),h}return m(l,{children:[e("nav",{"aria-label":"breadcrumb",className:`row m-0 bg-light_blue ${o?"":"d-sm-block d-none"}`,children:e("ol",{className:"breadcrumb mb-0 px-3 px-sm-5 py-2",children:b()})}),e("nav",{className:`row m-0 bg-white ${o?"d-none":"d-flex d-sm-none"}`,children:e("ul",{className:"nav overflow-x-auto flex-nowrap ps-2",children:u()})})]})}export{g as M};
