import{N as j}from"./Navbar-9000cca6.js";import{I as E}from"./ImgBanner-5e92cc6a.js";import{_ as B,j as I,r as g,o as a,c as n,a as b,w as y,b as e,F as i,m as r,d as $,t,n as p}from"./main-7145ab2f.js";import{L as F}from"./LightFooter-89bb27cd.js";import"./flowbite-vue-a2007bf1.js";const x="/build/assets/financial-logo-770a3116.png",L={computed:{i18n(){return I}},components:{Navbar:j,ImgBanner:E,LightFooter:F},data(){return{financials:[],reports:[],financialAndReports:[],banner:""}},methods:{callbanner(){axios.get("/api/banners-pages").then(s=>{var f;this.banner=(f=s.data.pages[2].media[2])==null?void 0:f.original_url,console.log(this.banner)})},getAllFincials(){axios.get("/api/financials").then(s=>{const f=Object.values(s.data.financials).reverse();var w=Object.keys(s.data.financials).reverse();const v=Object.values(s.data.reports).reverse();var c=Object.keys(s.data.reports).reverse();console.log(s.data.financials);var _=0;f.forEach(h=>{let d={};d[w[_]]=h,this.financials.push(d),_+=1}),console.log(this.financials),_=0,v.forEach(h=>{let d={};d[c[_]]=h,this.reports.push(d),_+=1}),console.log(this.financialAndReports)})}},mounted(){this.getAllFincials(),this.callbanner()}},N=["src"],R={class:"media-center py-28 bg-background-section pt-32"},V={class:"container mx-auto"},A={class:"grid grid-cols-1 lg:grid-cols-2 gap-5 flex-wrap"},O={key:0,class:""},C={class:"h-16 w-[80%] flex items-center px-4 text-xl justify-between"},z={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},D={class:"bg-[#E6E6E6] text-center my-auto truncate"},K={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},S={class:"text-dark-brown"},T={class:""},q={class:"card grid grid-cols-1 lg:grid-cols-3 gap-3 px-10"},G=["href"],H={class:"flex flex-col items-center"},J=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:x,alt:"Bonnie image"})],-1),M={class:"mb-1 text-center text-lg font-medium text-gray-900 dark:text-white"},P={class:"flex space-x-3 text-dark-brown font-bold"},Q=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1),U={key:1,class:""},W={class:"h-16 w-[80%] items-center px-4 text-xl justify-between"},X={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},Y={class:"bg-[#E6E6E6] w-[80%] text-center my-auto truncate"},Z={class:"year flex items-center text-[50px] font-bold my-auto",dir:"rtl"},ee={class:"text-dark-brown"},te={class:""},se={class:"card flex flex-wrap lg:flex-nowrap"},ae=["href"],ne={class:"space-y-4 flex flex-col items-center"},le=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:x,alt:"Bonnie image"})],-1),ie={class:"mb-1 text-center text-lg font-medium text-gray-900 dark:text-white"},re={class:"flex space-x-3 text-dark-brown font-bold"},oe=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1),ce={class:""},de={class:"h-16 w-[80%] text-right mt-2 flex items-start px-4 text-xl justify-between"},_e={class:"w-[100%] flex bg-[#E6E6E6] justify-between p-2"},fe={class:"bg-[#E6E6E6] w-full text-center my-auto truncate"},he={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},ue={class:"text-dark-brown"},me={class:""},ge={class:"card grid grid-cols-1 lg:grid-cols-3 gap-2 px-10"},be=["href"],pe={class:"flex flex-col items-center"},xe=e("div",{class:"w-24 h-24 mb-3 rounded-full p-5 shadow-lg flex justify-center items-center"},[e("img",{class:"w-12 h-12",src:x,alt:"Bonnie image"})],-1),we={class:"mb-1 text-center text-xl font-medium text-gray-900 dark:text-white"},ve={class:"flex space-x-3 text-dark-brown font-bold"},ye=e("div",{class:"justify-items-start card card flex flex-wrap lg:flex-nowrap"},null,-1);function ke(s,f,w,v,c,_){const h=g("Navbar"),d=g("img-banner"),k=g("LightFooter");return a(),n(i,null,[b(h,{class:"bg-black fixed z-50 w-full"}),b(d,null,{text:y(()=>[$(t(s.$t("finncial_banner")),1)]),default:y(()=>[e("img",{class:"w-full",style:{height:"450px"},src:c.banner},null,8,N)]),_:1}),e("section",R,[e("div",V,[e("div",A,[c.reports.length!=0?(a(),n("div",O,[(a(!0),n(i,null,r(c.financials,u=>(a(),n("div",{key:s.index,class:"mb-12"},[(a(!0),n(i,null,r(u,(m,l)=>(a(),n("div",null,[e("header",{class:p(["flex w-full justify-between items-center mb-5",s.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",C,[e("div",z,[e("div",D,t(s.$t("header_finncial")),1)])]),e("div",K,[e("span",S,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",T,[e("div",q,[(a(!0),n(i,null,r(m,o=>(a(),n("a",{href:"storage/"+o.financial_file,class:"animate__animated animate__bounceIn w-full h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1"},[e("div",H,[J,e("h5",M,t(o.title[s.$i18n.locale]),1),e("div",P,t(l),1)])],8,G))),256))]),Q])]))),256))]))),128))])):(a(),n("div",U,[(a(!0),n(i,null,r(c.financials,u=>(a(),n("div",{key:s.index,class:"mb-12"},[(a(!0),n(i,null,r(u,(m,l)=>(a(),n("div",null,[e("header",{class:p(["flex flex-wrap justify-between mb-5",s.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",W,[e("div",X,[e("div",Y,t(s.$t("header_finncial")),1)])]),e("div",Z,[e("span",ee,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",te,[e("div",se,[(a(!0),n(i,null,r(m,o=>(a(),n("a",{href:"storage/"+o.financial_file,class:"animate__animated animate__bounceIn mx-5 w-60 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[e("div",ne,[le,e("h5",ie,t(o.title[s.$i18n.locale]),1),e("div",re,t(l),1)])],8,ae))),256))]),oe])]))),256))]))),128))])),e("div",ce,[(a(!0),n(i,null,r(c.reports,u=>(a(),n("div",{key:s.index,class:"mb-12"},[(a(!0),n(i,null,r(u,(m,l)=>(a(),n("div",null,[e("header",{class:p(["flex justify-between mb-5",s.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",de,[e("div",_e,[e("div",fe,t(s.$t("reports")),1)])]),e("div",he,[e("span",ue,t(l[2])+t(l[3]),1),e("span",null,t(l[0])+t(l[1]),1)])],2),e("div",me,[e("div",ge,[(a(!0),n(i,null,r(m,o=>(a(),n("a",{href:"storage/"+o.year_file,class:"animate__animated animate__bounceIn w-full h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1"},[e("div",pe,[xe,e("h5",we,t(o.title[s.$i18n.locale]),1),e("div",ve,t(l),1)])],8,be))),256))]),ye])]))),256))]))),128))])])])]),b(k)],64)}const Fe=B(L,[["render",ke]]);export{Fe as default};
