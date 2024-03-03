import{I as u}from"./ImgBanner-9c58d088.js";import{N as p}from"./Navbar-fa7ef4b4.js";import{L as b}from"./LightFooter-af5243e3.js";import{_ as h}from"./ladun-logo-banner-c65359a1.js";import{_ as g,r as i,o,c as a,a as r,b as t,F as c,m as f,n as x,t as d,f as v}from"./main-366038d5.js";import"./flowbite-vue-d9d0f8fc.js";const w={data(){return{companies:[],banner:""}},components:{ImgBanner:u,Navbar:p,LightFooter:b},methods:{callbanner(){axios.get("/api/banners-pages").then(e=>{this.banner=e.data.pages[0].media[0].original_url,console.log(this.banner)})},getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies(),this.callbanner()}},k={class:"pt-[4rem]"},y={class:"relative img-banner-slot"},L=t("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),N=["src"],C=t("div",{class:"z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"},[t("img",{class:"w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3",src:h})],-1),$={class:"company py-28 bg-background-section dark:bg-black"},F={class:"px-[5%] mx-auto"},z={class:"grid lg:grid-cols-4 gap-3 w-full"},B={class:"w-full md:w-[70%] m-auto"},I=["src"],j={class:"text-center w-full p-2"},A={class:"justify-center font-bold text-[16x]"},V=["innerHTML"],E={key:0,class:"absolute bottom-4 left-[50%] -translate-x-[50%] w-full"},H=["href"];function M(e,S,T,D,n,R){const m=i("Navbar"),_=i("LightFooter");return o(),a(c,null,[r(m,{class:"bg-black fixed z-50 w-full"}),t("div",k,[t("div",y,[L,t("img",{class:"w-full",style:{height:"450px"},src:n.banner},null,8,N),C])]),t("section",$,[t("div",F,[t("div",z,[(o(!0),a(c,null,f(n.companies,s=>{var l;return o(),a("div",{key:s.id,style:{border:"1px solid #AE9643"},class:x([e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight","relative rounded-2xl border border-light-brown overflow-hidden content-center p-2 pb-8 pt-5 items-center bg-[#fbfbfb] mb-12 w-[100%] mx-auto"])},[t("div",B,[t("img",{style:{transform:"scale(1.05)"},class:"img-companies h-full rounded-full border-2 mb-4 m-auto",src:(l=s.media[0])==null?void 0:l.original_url,alt:"Sunset in the mountains"},null,8,I)]),t("div",j,[t("h3",A,d(s.title[e.$i18n.locale]),1),t("p",{class:"text-[#6e6b6b] text-justify justify-start py-6 text-xs",innerHTML:s.content[e.$i18n.locale]},null,8,V),s.url!=null?(o(),a("div",E,[t("a",{href:s.url,target:"_blank",class:"special-button button bg-dark-brown rounded-3xl text-white px-4 py-2 ml-4"},d(e.$t("visit")),9,H)])):v("",!0)])],2)}),128))])])]),r(_)],64)}const Q=g(w,[["render",M]]);export{Q as default};
