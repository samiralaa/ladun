import{_ as r}from"./investors-page-e0a05228.js";import{N as d}from"./Navbar-857fe2c6.js";import{I as c}from"./ImgBanner-fb57b80e.js";import{L as _}from"./LightFooter-9cdb6a1d.js";import{g as m,h as f,i as h,o as u,c as g,a as o,w as n,b as e,n as l,u as p,t as a,d as i,F as v}from"./main-f146f2c0.js";import"./flowbite-vue-85f936bd.js";const x="/build/assets/ladun_logo_dark-1cfdce79.png",b=e("div",{class:"pt-[5rem]"},null,-1),w=e("div",null,[e("img",{src:r})],-1),k={class:"container mx-auto py-10"},y={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$={class:"flex justify-center md:justify-end"},I=["src"],L={class:"font-bold text-3xl mb-4 text-center md:text-start text-dark-brown"},B={class:"flex flex-col"},N={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},j={class:"font-bold inline"},F={class:"underline",target:"_blank",href:"https://wa.me/920011560"},R={class:"font-bold inline"},V=["href"],z={class:"my-auto"},C={class:"font-bold inline"},D=["href"],E={class:"my-auto"},K={class:"font-bold inline"},M=["href"],J={__name:"contactWithInvestorsRelations",setup(S){const s=m("");return f(async()=>{const t=await h.get("/api/settings");s.value=t.data.settings,console.log(s.value)}),(t,T)=>(u(),g(v,null,[o(d,{class:"bg-black fixed z-50 w-full"}),b,o(c,null,{text:n(()=>[i(a(t.$t("investor_banner")),1)]),default:n(()=>[w]),_:1}),e("div",k,[e("div",y,[e("div",$,[e("div",{class:l(["img-company-info border-[1px] border-dark-brown rounded-xl w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] flex flex-col justify-center",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("img",{src:p(x),alt:"Logo_darK",class:"w-[8rem] md:w-[16rem] mx-auto"},null,8,I)],2)]),e("div",{class:l(["d-info h-full flex flex-col justify-center",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("h1",L,a(t.$t("contactUs")),1),e("div",B,[e("div",N,[e("p",j,a(t.$t("phone")),1),i(),e("a",F,": "+a(s.value[0].phone),1),e("p",R,a(t.$t("ext")),1),e("a",{class:"underline",href:s.value[0].convert,target:"_blank"}," : "+a(s.value[0].convert),9,V)]),e("div",z,[e("p",C,a(t.$t("fax")),1),e("a",{class:"underline",href:s.value[0].fax,target:"_blank"}," : "+a(s.value[0].fax),9,D)]),e("div",E,[e("p",K,a(t.$t("email")),1),e("a",{class:"underline",target:"_blank",href:s.value[0].email}," : "+a(s.value[0].email),9,M)])])],2)])]),o(_)],64))}};export{J as default};
