import{_ as u}from"./Navbar-c17283ea.js";import{I as g}from"./ImgBanner-dd0d5cd1.js";import{bu as h,bt as x,aJ as l,o as n,c as o,e as c,w as d,a as t,F as r,r as _,f as w,t as e}from"./main-55540de3.js";const y="/build/assets/finncial-banner-035dab5d.png",k="/build/assets/company-3b0b4232.png",v={computed:{i18n(){return x}},components:{Navbar:u,ImgBanner:g},data(){return{financials:[]}},methods:{getAllFincials(){axios.get("/api/financials").then(s=>{this.financials=s.data.financials,console.log(this.financials)})}},mounted(){this.getAllFincials()}},$=t("img",{src:y},null,-1),N={class:"media-center py-28 bg-background-section"},B={class:"container mx-auto"},F={class:"flex flex-wrap justify-between items-center mb-5"},V={class:"bg-subtraction-ltr-png rtl:bg-subtraction-png h-16 w-[80%] flex items-center rtl:pr-8 ltr:pl-8 text-xl"},A={class:"year flex items-center text-[50px] font-bold",dir:"rtl"},C={class:"text-dark-brown"},D={class:"card w-[80%] flex"},I=["href"],j={class:"flex flex-col items-center"},z=t("img",{class:"w-24 h-24 mb-3 rounded-full shadow-lg",src:k,alt:"Bonnie image"},null,-1),E={class:"mb-1 text-center text-xl font-medium text-gray-900 dark:text-white"},J={class:"text-sm text-gray-500 dark:text-gray-400"},L={class:"flex space-x-3 text-dark-brown font-bold"};function S(s,T,q,G,m,H){const f=l("Navbar"),b=l("img-banner");return n(),o(r,null,[c(f,{class:"bg-black fixed z-50 w-full"}),c(b,null,{text:d(()=>[w(e(s.$t("finncial_banner")),1)]),default:d(()=>[$]),_:1}),t("section",N,[t("div",B,[(n(!0),o(r,null,_(m.financials,(p,a)=>(n(),o("div",{key:a,class:"mb-12"},[t("header",F,[t("div",V,e(s.$t("header_finncial")),1),t("div",A,[t("span",C,e(a[2])+e(a[3]),1),t("span",null,e(a[0])+e(a[1]),1)])]),t("div",D,[(n(!0),o(r,null,_(p,i=>(n(),o("a",{href:"storage/"+i.financial_file,class:"mx-4 w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10"},[t("div",j,[z,t("h5",E,e(s.$t("list_money")),1),t("span",J,e(i.title[s.$i18n.locale]),1),t("div",L,e(a),1)])],8,I))),256))])]))),128))])])],64)}const P=h(v,[["render",S]]);export{P as default};
