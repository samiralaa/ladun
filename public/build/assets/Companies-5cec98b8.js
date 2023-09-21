import{I as _}from"./ImgBanner-3b37b260.js";import{N as u}from"./Navbar-aed73186.js";import{L as p}from"./LightFooter-25aeadf9.js";import{_ as b,a as f}from"./ladun-logo-banner-b39f7bc9.js";import{_ as g,r as i,o,c as a,a as n,b as t,F as r,m as h,af as v,n as x,t as l,f as w}from"./main-9be2257e.js";import"./flowbite-vue-e9dba699.js";const k={data(){return{companies:[]}},components:{ImgBanner:_,Navbar:u,LightFooter:p},methods:{getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies()}},y=v('<div class="pt-[4rem]"><div class="relative img-banner-slot"><div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div><img class="w-full" src="'+b+'"><div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3" src="'+f+'"></div></div></div>',1),L={class:"company py-28 bg-background-section"},N={class:"px-[5%] mx-auto"},$={class:"grid lg:grid-cols-4 gap-3 w-full"},C={class:"w-full md:w-[50%] m-auto"},F=["src"],z={class:"text-center w-full p-2"},B={class:"justify-center font-bold text-[16x]"},I=["innerHTML"],V={key:0,class:"absolute bottom-4 left-[50%] -translate-x-[50%] w-full"},j=["href"];function S(e,A,H,M,c,T){const d=i("Navbar"),m=i("LightFooter");return o(),a(r,null,[n(d,{class:"bg-black fixed z-50 w-full"}),y,t("section",L,[t("div",N,[t("div",$,[(o(!0),a(r,null,h(c.companies,s=>(o(),a("div",{key:s.id,class:x([e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight","relative rounded-2xl border border-light-brown overflow-hidden border-gray-border-light content-center p-2 pt-5 items-center bg-[#fbfbfb] mb-12 w-[100%] mx-auto"])},[t("div",C,[t("img",{class:"img-companies rounded-full border-2 mb-4 m-auto",src:s.media[0].original_url,alt:"Sunset in the mountains"},null,8,F)]),t("div",z,[t("h3",B,l(s.title[e.$i18n.locale]),1),t("p",{class:"text-[#6e6b6b] text-justify justify-start py-6 text-xs",innerHTML:s.content[e.$i18n.locale]},null,8,I),s.url!=""?(o(),a("div",V,[t("a",{href:s.url,target:"_blank",class:"special-button button bg-dark-brown rounded-3xl text-white px-4 py-2 ml-4"},l(e.$t("visit")),9,j)])):w("",!0)])],2))),128))])])]),n(m)],64)}const K=g(k,[["render",S]]);export{K as default};
