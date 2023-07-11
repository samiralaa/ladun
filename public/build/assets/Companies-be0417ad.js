import{I as _}from"./ImgBanner-2e295289.js";import{N as p}from"./Navbar-b8be9f3d.js";import{L as u}from"./LightFooter-e89a30db.js";import{_ as h,a as g}from"./ladun-logo-banner-b39f7bc9.js";import{_ as f,r as n,o,c as a,a as i,b as t,F as r,m as b,ae as v,n as x,t as l}from"./main-bc705cca.js";import"./flowbite-vue-4bca0c14.js";const w={data(){return{companies:[]}},components:{ImgBanner:_,Navbar:p,LightFooter:u},methods:{getAllCompanies(){axios.get("/api/companies").then(e=>{this.companies=e.data.companies,console.log(this.companies)})}},mounted(){this.getAllCompanies()}},y=v('<div class="pt-[4rem]"><div class="relative img-banner-slot"><div class="overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"></div><img class="w-full" src="'+h+'"><div class="z-40 text-white text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"><img class="w-[30%] md:w-[45%] lg:w-[53%] mx-auto md:mb-3" src="'+g+'"></div></div></div>',1),k={class:"company py-28 bg-background-section"},L={class:"container mx-auto"},N={class:"grid lg:grid-cols-1"},$={class:"w-full md:w-[20%] m-auto"},C=["src"],F={class:"text-center w-full md:w-[80%]"},z={class:"justify-center font-bold text-[16x] px-2 py-2 md:px-5 my-5"},B=["innerHTML"],I={class:"flex content-start flex-row justify-center w-full"},j=["href"];function S(e,V,A,H,c,M){const d=n("Navbar"),m=n("LightFooter");return o(),a(r,null,[i(d,{class:"bg-black fixed z-50 w-full"}),y,t("section",k,[t("div",L,[t("div",N,[(o(!0),a(r,null,b(c.companies,s=>(o(),a("div",{key:s.id,class:x([e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight","hover:border-dark-brown rounded-2xl overflow-hidden border-solid border-2 border-gray-border-light md:flex content-center pt-5 items-center bg-white mb-12 w-[90%] md:w-[85%] mx-auto"])},[t("div",$,[t("img",{class:"img-companies rounded-full mb-4 m-auto",src:s.media[0].original_url,alt:"Sunset in the mountains"},null,8,C)]),t("div",F,[t("h3",z,l(s.title[e.$i18n.locale]),1),t("p",{class:"px-2 md:px-5 pb-6 pt-6 text-justify",innerHTML:s.content[e.$i18n.locale]},null,8,B),t("div",I,[t("a",{href:s.url,target:"_blank",class:"special-button button bg-dark-brown text-white px-4 py-2 my-5 ml-4 rtl:mr-4"},l(e.$t("visit")),9,j)])])],2))),128))])])]),i(m)],64)}const J=f(w,[["render",S]]);export{J as default};
