import{_ as c}from"./Navbar-505c7c56.js";import{L as d}from"./LightFooter-9146336d.js";import{r as u,bx as m,o as _,a as f,c as n,d as s,e as i,f as a,n as l,j as o,t as p,F as g}from"./main-f2dcfc18.js";import"./flowbite-vue-b208daaf.js";const v={class:"company-info py-24 bg-background-section pt-40"},h={class:"container mx-auto"},x={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},b=["src"],y={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},k=["innerHTML"],R={__name:"InvestorRelation",setup(L){const e=u({}),r=m();return _(async()=>{const t=await f.get(`/api/investors/${r.params.id}`);e.value=t.data.investor,console.log(e.value)}),(t,$)=>(n(),s(g,null,[i(c,{class:"bg-black fixed z-50 w-full"}),a("section",v,[a("div",h,[a("div",x,[a("div",{class:l(["img-company-info flex justify-center",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e.value.media?(n(),s("img",{key:0,src:e.value.media[0].original_url,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,b)):o("",!0)],2),a("div",{class:l(["d-info h-full flex flex-col justify-center",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e.value.title?(n(),s("h1",y,p(e.value.title[t.$i18n.locale]),1)):o("",!0),e.value.content?(n(),s("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:e.value.content[t.$i18n.locale]},null,8,k)):o("",!0)],2)])])]),i(d)],64))}};export{R as default};
