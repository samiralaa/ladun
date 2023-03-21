import{_ as v}from"./Navbar-505c7c56.js";import{L as y}from"./LightFooter-9146336d.js";import{U as w}from"./flowbite-vue-b208daaf.js";import{P as k}from"./index-14a78e38.js";import{r as u,o as L,a as g,c as o,d as r,e as d,f as t,n as f,u as p,j as m,t as n,F as h,k as $}from"./main-f2dcfc18.js";const j="/build/assets/play-button-682e1928.png",I={class:"company-info py-24 bg-background-section pt-40"},B={class:"container mx-auto"},M={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},T={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},E=["innerHTML"],H={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},N={class:"flex items-center special-button text-2xl button bg-dark-brown hover:bg-green-500 cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},C={class:"flex text-dark-brown items-center hover:hover:text-red-500 cursor-pointer"},F=t("img",{src:j,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),P={class:"font-bold text-3xl"},R={class:"company-manager py-24 bg-background-section"},V={class:"text-center font-bold mb-12 text-3xl"},z={class:"container mx-auto flex justify-center"},D={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20",id:"header-strucre"},O={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2 strucre"},U={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7 h-full"},q={class:"flex justify-center px-4 pt-4"},A={class:"flex flex-col items-center pb-10"},G=["src","alt"],S={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},Y={class:"text-sm text-gray-500 dark:text-gray-400"},J=["innerHTML"],et={__name:"AboutPage",setup(K){const l=u([]),a=u({}),_=u({}),b=e=>e?Object.values(e).map(i=>({src:i.original_url,alt:i.name})):[];return L(async()=>{window.addEventListener("scroll",function(){let s=document.getElementsByClassName("strucre"),x=document.getElementById("header-strucre");console.log(s.length);for(let c=0;c<s.length;c++)window.scrollY>=x.offsetTop-700?s[c].classList.add("animate__animated","animate__fadeInLeft"):s[c].classList.remove("animate__animated","animate__fadeInLeft")});const e=await g.get("/api/about");a.value=e.data[0],l.value=b(a.value.media),e.data[0].media.length||l.value.push({src:"/storage/image_placeholder.jpg",alt:"brief"}),console.log(l.value);const i=await g.get("/api/structure");_.value=i.data.structure}),(e,i)=>(o(),r(h,null,[d(v,{class:"bg-black fixed z-50 w-full"}),t("section",I,[t("div",B,[t("div",M,[l.value?(o(),r("div",{key:0,class:f(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[d(p(w),{pictures:l.value,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):m("",!0),t("div",{class:f(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[a.value.title?(o(),r("h1",T,n(a.value.title[e.$i18n.locale]),1)):m("",!0),a.value.content?(o(),r("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:a.value.content[e.$i18n.locale]},null,8,E)):m("",!0),t("div",H,[t("a",N,[d(p(k),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,n(e.$t("call_us")),1)]),t("a",C,[F,t("span",P,n(e.$t("video")),1)])])],2)])])]),t("section",R,[t("h1",V,n(e.$t("boradOfDirectors")),1),t("div",z,[t("div",D,[(o(!0),r(h,null,$(_.value,s=>(o(),r("div",O,[t("div",U,[t("div",q,[t("div",A,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${s.image}`,alt:`/storage/${s.image}`},null,8,G),t("h5",S,n(s.name[e.$i18n.locale]),1),t("span",Y,n(s.position[e.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:s.qualification[e.$i18n.locale]},null,8,J)])])])]))),256))])])]),d(y)],64))}};export{et as default};
