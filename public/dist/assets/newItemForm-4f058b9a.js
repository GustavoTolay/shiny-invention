import{r as y,a as t,F as z,j as e,R as S}from"./index-164b90a9.js";import{u as $,a as x}from"./index.esm-e05484ed.js";function A({modelIndex:n,control:s,register:m,hideButtons:a}){const{append:h,remove:d,fields:u}=x({control:s,name:`inventory.${n}.sizes`});function p(){return u.map((b,l)=>t(S.Fragment,{children:[t("div",{className:"row align-items-center text-center mt-1",children:[e("div",{className:"col-4",children:t("label",{className:"col-form-label m-0",children:["Talle ",(l+1).toString()]})}),e("div",{className:"col-8",children:e("input",{type:"text",className:"form-control",...m(`inventory.${n}.sizes.${l}.size`)})})]}),t("div",{className:"row align-items-center text-center mt-1",children:[e("div",{className:"col-4",children:t("label",{className:"col-form-label m-0",children:["Stock ",(l+1).toString()]})}),e("div",{className:"col-8",children:e("input",{type:"number",className:"form-control",...m(`inventory.${n}.sizes.${l}.stock`,{valueAsNumber:!0})})})]}),t("div",{className:"row align-items-center text-center mt-1",children:[e("div",{className:"col-4",children:t("label",{className:"col-form-label m-0",children:["Peso ",(l+1).toString()]})}),e("div",{className:"col-8",children:e("input",{type:"number",className:"form-control",...m(`inventory.${n}.sizes.${l}.weight`,{valueAsNumber:!0})})})]}),e("div",{className:"text-center mt-2",children:e("button",{className:"btn btn-sm btn-danger",onClick:()=>d(l),hidden:a,children:"Eliminar Talle"})})]},b.id))}return t("div",{children:[p(),e("div",{className:"text-center mt-2",children:e("button",{type:"button",className:"btn btn-sm btn-primary",onClick:()=>h({size:"",stock:0,weight:0}),hidden:a,children:"Agregar Talle"})})]})}function q({product:n}){const s=!n;function m(){if(n){const{_id:r,...c}=n;return c}}const{register:a,handleSubmit:h,control:d}=$({defaultValues:m()}),{fields:u,append:p,remove:v}=x({control:d,name:"inventory"}),[b,l]=y.useState(),k=r=>{console.log(r),g("loading");const c=window.localStorage.getItem("UserSession");function o(){if(n){const{inventory:C,...f}=r;return f._id=n._id,console.log(f),{method:"PUT",body:JSON.stringify(f),headers:{Authorization:`Bearer ${c}`,"Content-Type":"application/json"}}}const i=new FormData;return i.append("image",b),i.append("product",JSON.stringify(r)),{method:"POST",body:i,headers:{Authorization:`Bearer ${c}`}}}fetch("https://dinokids.site/products",o()).then(i=>i.json()).then(i=>{console.log(i),g("loaded")})},[N,g]=y.useState("standby");function w(){return u.map((c,o)=>t(S.Fragment,{children:[t("label",{className:"form-label m-0",children:["Modelo ",(o+1).toString()]}),e("input",{type:"text",className:"form-control",...a(`inventory.${o}.model`)}),e(A,{modelIndex:o,control:d,register:a,hideButtons:!s}),e("div",{className:"text-center mt-2",children:e("button",{type:"button",className:"btn btn-dark btn-sm",onClick:()=>v(o),hidden:!s,children:"Eliminar Modelo"})})]},c.id))}return t(z,{children:[e("form",{onSubmit:h(k),children:t("div",{className:"row",children:[t("div",{className:"col-4 text-start px-5",children:[t("div",{children:[e("label",{className:"form-label m-0 mt-2",children:"Nombre"}),e("input",{type:"text",className:"form-control",...a("name",{required:!0})})]}),t("div",{children:[e("label",{className:"form-label m-0 mt-2",children:"Descripción"}),e("input",{type:"text",className:"form-control",...a("description",{required:!0})})]}),t("div",{children:[e("label",{className:"form-label m-0 mt-2",children:"Categoria"}),e("input",{type:"text",className:"form-control",...a("category",{required:!0})})]}),t("div",{children:[e("label",{className:"form-label m-0 mt-2",children:"Precio"}),e("input",{type:"number",className:"form-control",...a("price",{required:!0,valueAsNumber:!0})})]}),t("div",{children:[e("label",{className:"form-label m-0 mt-2",children:"Marca"}),e("input",{type:"text",className:"form-control",...a("brand",{required:!0})})]}),t("div",{className:"align-items-center mt-2",children:[e("label",{className:"form-label",children:"Disponible?"}),e("input",{type:"checkbox",className:"form-check-input ms-2",...a("available")})]}),e("div",{className:"text-center mt-2",children:e("input",{type:"submit",className:"btn btn-danger"})})]}),t("div",{className:"col-4 text-start px-5",children:[e("fieldset",{disabled:!s,children:w()}),e("div",{className:"text-center mt-2",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>p({model:"",sizes:[]}),hidden:!s,children:"Agregar Modelo."})})]}),t("div",{className:"col-4 px-5",children:[t("div",{className:"row",hidden:!s,children:[e("h5",{children:"Agregar Imagen"}),e("p",{children:"De preferencia en proporción 1:1 (cuadrada pues)."}),e("div",{className:"mb-3",children:e("input",{className:"form-control",type:"file",name:"image",onChange:r=>{r.target.files&&l(r.target.files[0])}})}),e("hr",{})]}),t("div",{className:"row",children:[e("h5",{children:"Feedback"}),e("div",{className:"spinner-border text-primary mx-auto mt-2",role:"status",hidden:N!="loading",children:e("span",{className:"visually-hidden",children:"Loading..."})}),e("h4",{className:"text-primary mt-2",hidden:N!="loaded",children:"Hecho!, espero"}),e("h4",{className:"text-primary mt-2",hidden:N!="standby",children:"Esperando..."})]})]})]})}),e("div",{className:"col-6"})]})}export{q as N};