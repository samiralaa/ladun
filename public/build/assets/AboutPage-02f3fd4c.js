import{N as v}from"./Navbar-8b9057c5.js";import{L as x}from"./LightFooter-5a4007a2.js";import{U as y}from"./flowbite-vue-e3830f00.js";import{P as w}from"./index-465698b9.js";import{g as u,h as L,j as f,o as r,c as i,a as c,b as t,n as p,u as _,f as m,t as d,F as k}from"./main-2a95e2ad.js";const j="/build/assets/play-button-682e1928.png",I={class:"company-info py-24 bg-background-section pt-40"},B={class:"container mx-auto"},N={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},E=["innerHTML"],C={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},F={class:"flex items-center special-button text-2xl button bg-dark-brown hover:bg-green-500 cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},M={class:"flex text-dark-brown items-center hover:hover:text-red-500 cursor-pointer"},P=t("img",{src:j,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),R={class:"font-bold text-3xl"},D={__name:"AboutPage",setup(T){const s=u([]),a=u({}),g=u({}),h=e=>e?Object.values(e).map(n=>({src:n.original_url,alt:n.name})):[];return L(async()=>{window.addEventListener("scroll",function(){let l=document.getElementsByClassName("strucre"),b=document.getElementById("header-strucre");console.log(l.length);for(let o=0;o<l.length;o++)window.scrollY>=b.offsetTop-700?l[o].classList.add("animate__animated","animate__fadeInLeft"):l[o].classList.remove("animate__animated","animate__fadeInLeft")});const e=await f.get("/api/about");a.value=e.data[0],s.value=h(a.value.media),e.data[0].media.length||s.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(s.value);const n=await f.get("/api/structure");g.value=n.data.structure}),(e,n)=>(r(),i(k,null,[c(v,{class:"bg-black fixed z-50 w-full"}),t("section",I,[t("div",B,[t("div",N,[s.value?(r(),i("div",{key:0,class:p(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(_(y),{pictures:s.value,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):m("",!0),t("div",{class:p(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(r(),i("h1",$,d(a.value.title[e.$i18n.locale]),1)):m("",!0),a.value.content?(r(),i("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,E)):m("",!0),t("div",C,[t("a",F,[c(_(w),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,d(e.$t("call_us")),1)]),t("a",M,[P,t("span",R,d(e.$t("video")),1)])])],2)])])]),c(x)],64))}};export{D as default};
