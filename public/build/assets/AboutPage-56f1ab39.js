import{_ as b}from"./Navbar-1923c0d1.js";import{_ as x}from"./DarkFooter-bd282f72.js";import{U as v,P as y}from"./flowbite-vue-0fc12d6b.js";import{f as d,g as w,h as _,o as a,c as n,d as c,a as t,n as g,u as p,l as u,t as o,F as f,b as k}from"./main-3db66770.js";const $="/build/assets/play-button-682e1928.png",j={class:"company-info py-28 bg-background-section pt-52"},L={class:"container mx-auto"},I={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},M={key:0,class:"font-bold text-3xl mb-4 text-center md:text-start"},B=["innerHTML"],H={class:"company-button flex items-center flex-wrap w-full justify-center md:justify-start"},T={class:"flex items-center special-button text-2xl button bg-dark-brown hover:bg-green-500 cursor-pointer text-white px-11 py-2 my-5 rtl:ml-6 ltr:mr-6 rtl:md:ml-28 ltr:md:mr-28 ml-4 rtl:mr-4 w-48"},N={class:"flex text-dark-brown items-center hover:hover:text-red-500 cursor-pointer"},P=t("img",{src:$,class:"rtl:ml-2 ltr:mr-2 h-[60px] w-[60px]"},null,-1),R={class:"font-bold text-3xl"},U={class:"company-manager py-24 bg-background-section"},V={class:"text-center font-bold mb-12 text-3xl"},z={class:"container mx-auto flex justify-center"},C={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20"},D={class:"max-w-sm border-2 border-gray-border-light rounded-xl p-2 animate__animated animate__fadeInUp"},F={class:"bg-white border border-light-brown rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 pb-12 pt-7 h-full"},O={class:"flex justify-center px-4 pt-4"},q={class:"flex flex-col items-center pb-10"},A=["src","alt"],E={class:"mb-1 text-xl text-gray-900 dark:text-white font-bold"},G={class:"text-sm text-gray-500 dark:text-gray-400"},S=["innerHTML"],Y={__name:"AboutPage",setup(J){const l=d([]),s=d({}),m=d({}),h=e=>e?Object.values(e).map(r=>({src:r.original_url,alt:r.name})):[];return w(async()=>{const e=await _.get("/api/about");s.value=e.data[0],l.value=h(s.value.media),e.data[0].media.length||l.value.push({src:"/storage/brief.png",alt:"brief"}),console.log(l.value);const r=await _.get("/api/structure");m.value=r.data.structure}),(e,r)=>(a(),n(f,null,[c(b,{class:"bg-black fixed z-50 w-full"}),t("section",j,[t("div",L,[t("div",I,[l.value?(a(),n("div",{key:0,class:g(["img-company-info flex justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[c(p(v),{pictures:l.value,class:"about-us-carousel h-[450px] w-[90%] [&>div:first-child]:h-[450px] [&>div>div>img]:h-[450px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])],2)):u("",!0),t("div",{class:g(["d-info h-full flex flex-col justify-center",e.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[s.value.title?(a(),n("h1",M,o(s.value.title[e.$i18n.locale]),1)):u("",!0),s.value.content?(a(),n("p",{key:1,class:"mb-4 text-xl text-justify lg:rtl:pl-16 lg:ltr:pr-16 leading-7",innerHTML:s.value.content[e.$i18n.locale]},null,8,B)):u("",!0),t("div",H,[t("a",T,[c(p(y),{class:"h-6 w-6 rtl:ml-2 ltr:mr-2 text-white"}),t("span",null,o(e.$t("call_us")),1)]),t("a",N,[P,t("span",R,o(e.$t("video")),1)])])],2)])])]),t("section",U,[t("h1",V,o(e.$t("boradOfDirectors")),1),t("div",z,[t("div",C,[(a(!0),n(f,null,k(m.value,i=>(a(),n("div",D,[t("div",F,[t("div",O,[t("div",q,[t("img",{class:"w-[120px] h-[120px] mb-3 rounded-full border-2 border-light-brown p-1 shadow-lg",src:`/storage/${i.image}`,alt:`/storage/${i.image}`},null,8,A),t("h5",E,o(i.name[e.$i18n.locale]),1),t("span",G,o(i.position[e.$i18n.locale]),1),t("div",{class:"flex text-justify mt-2",innerHTML:i.qualification[e.$i18n.locale]+"..."},null,8,S)])])])]))),256))])])]),c(x)],64))}};export{Y as default};
