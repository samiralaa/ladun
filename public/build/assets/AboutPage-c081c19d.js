import{_ as f,U as h,P as x}from"./Navbar-dd4f0c9b.js";import{_ as v}from"./DarkFooter-960b939b.js";import{f as d,g as y,h as m,o,c as a,d as c,a as t,u as _,k as u,t as l,F as p,b as w}from"./main-5bb2582b.js";const k="/build/assets/play-button-682e1928.png",$={class:"company-info py-28 bg-background-section pt-36"},j={class:"container mx-auto"},L={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},M={key:0,class:"img-company-info"},B={class:"d-info h-full flex flex-col justify-center"},H={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},T=["innerHTML"],N={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},P={class:"flex items-center special-button text-2xl button bg-dark-brown text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},V={class:"flex text-dark-brown items-center"},D=t("img",{src:k,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),F={class:"font-bold text-3xl"},O={class:"company-manager py-24 bg-background-section"},U={class:"text-center font-bold mb-12 text-3xl"},q={class:"container mx-auto flex justify-center"},z={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20"},A={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2"},C={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7 h-full"},E={class:"flex justify-center px-4 pt-4"},G={class:"flex flex-col items-center pb-10"},I=["src","alt"],R={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},S={class:"text-sm text-gray-500 dark:text-gray-400"},J=["innerHTML"],Y={__name:"AboutPage",setup(K){const r=d([]),e=d({}),g=d({}),b=s=>s?Object.values(s).map(n=>({src:n.original_url,alt:n.name})):[];return y(async()=>{const s=await m.get("/api/about");e.value=s.data[0],r.value=b(e.value.media),s.data[0].media.length||r.value.push({src:"/storage/brief.png",alt:"brief"}),console.log(r.value);const n=await m.get("/api/structure");g.value=n.data.structure}),(s,n)=>(o(),a(p,null,[c(f,{class:"bg-black fixed z-50 w-full"}),t("section",$,[t("div",j,[t("div",L,[r.value?(o(),a("div",M,[c(_(h),{pictures:r.value,class:"about-us-carousel h-[690px] [&>div:first-child]:h-[690px] [&>div>div>img]:h-[690px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])):u("",!0),t("div",B,[e.value.title?(o(),a("h1",H,l(e.value.title[s.$i18n.locale]),1)):u("",!0),e.value.content?(o(),a("p",{key:1,class:"mb-24 text-2xl text-justify",innerHTML:e.value.content[s.$i18n.locale]},null,8,T)):u("",!0),t("div",N,[t("a",P,[c(_(x),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,l(s.$t("call_us")),1)]),t("a",V,[D,t("span",F,l(s.$t("video")),1)])])])])])]),t("section",O,[t("h1",U,l(s.$t("boradOfDirectors")),1),t("div",q,[t("div",z,[(o(!0),a(p,null,w(g.value,i=>(o(),a("div",A,[t("div",C,[t("div",E,[t("div",G,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${i.image}`,alt:`/storage/${i.image}`},null,8,I),t("h5",R,l(i.name[s.$i18n.locale]),1),t("span",S,l(i.position[s.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:i.qualification[s.$i18n.locale].slice(0,250)+"..."},null,8,J)])])])]))),256))])])]),c(v)],64))}};export{Y as default};
