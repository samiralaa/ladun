import{N as b}from"./Navbar-8a645655.js";import{L as x}from"./LightFooter-fae01ec6.js";import{U as y}from"./flowbite-vue-5bce7417.js";import{P as w}from"./index-93ac28da.js";import{g as d,h as k,i as f,o as l,c as o,a as c,b as t,n as p,u as _,f as u,t as m,F as L}from"./main-ec626887.js";const I="/build/assets/play-button-682e1928.png",j={class:"company-info py-24 bg-background-section pt-40"},B={class:"container mx-auto"},N={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},E=["innerHTML"],C={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},F={class:"flex items-center special-button text-2xl button rounded-3xl bg-dark-brown hover:bg-[#5d5a2e] cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-[200px]"},M=["href"],P=t("img",{src:I,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),R={class:"font-bold text-3xl"},D={__name:"AboutPage",setup(T){const s=d([]),a=d({}),g=d({}),h=e=>e?Object.values(e).map(n=>({src:n.original_url,alt:n.name})):[];return k(async()=>{window.addEventListener("scroll",function(){let r=document.getElementsByClassName("strucre"),v=document.getElementById("header-strucre");console.log(r.length);for(let i=0;i<r.length;i++)window.scrollY>=v.offsetTop-700?r[i].classList.add("animate__animated","animate__fadeInLeft"):r[i].classList.remove("animate__animated","animate__fadeInLeft")});const e=await f.get("/api/about");a.value=e.data[0],s.value=h(a.value.media),e.data[0].media.length||s.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(s.value);const n=await f.get("/api/structure");g.value=n.data.structure}),(e,n)=>(l(),o(L,null,[c(b,{class:"bg-black fixed z-50 w-full"}),t("section",j,[t("div",B,[t("div",N,[s.value?(l(),o("div",{key:0,class:p(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(_(y),{pictures:s.value,class:"about-us-carousel rounded-3xl h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):u("",!0),t("div",{class:p(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(l(),o("h1",$,m(a.value.title[e.$i18n.locale]),1)):u("",!0),a.value.content?(l(),o("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,E)):u("",!0),t("div",C,[t("a",F,[c(_(w),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,m(e.$t("call_us")),1)]),a.value.video?(l(),o("a",{key:0,href:a.value.video,target:"_blank",class:"flex text-dark-brown items-center hover:text-[#5d5a2e] cursor-pointer"},[P,t("span",R,m(e.$t("video")),1)],8,M)):u("",!0)])],2)])])]),c(x)],64))}};export{D as default};
