import{b as C,a as V,_ as $}from"./rrr-2b801080.js";import{N as L}from"./Navbar-a84a8477.js";import{L as M}from"./LightFooter-643819ae.js";import{a as g,L as b,U as B}from"./flowbite-vue-192fc7ee.js";import{g as h,E as F,h as N,i as T,r as U,o as i,c as v,a as s,b as e,w as n,u as _,F as f,m as x,e as w,n as G,t as o,d as k}from"./main-7ff2d6dc.js";const P={class:"[&>div>div>ul]:justify-center pt-24 [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown"},R={class:"grid grid-cols-1 gap-10 md:grid-cols-3 pt-2 container mx-auto [&>div]:lg:h-[574px] [&>div]:md:h-[635px] [&>div]:h-[560px]"},S={class:"w-full relative z-10"},z={class:"flex"},A={class:"flex-initial my-auto text-[#636463] p-2 font-bold"},D=e("svg",{class:"my-auto",width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("path",{d:"M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),k(),e("path",{d:"M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z",stroke:"#AF9744","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),E={class:"flex-initial my-auto text-[#636463] p-2 font-bold text-dark-brown"},H={class:"mb-4"},I=["innerHTML"],Z={class:"flex justify-between py-4 ltr:text-start rtl:text-end w-full"},j={class:"flex my-auto"},O=e("img",{class:"w-6 h-6",src:C},null,-1),q={class:"text-gray-900 px-2"},J={class:"flex my-auto"},K=e("img",{class:"w-7 h-7",src:V},null,-1),Q={class:"whitespace-nowrap text-gray-500 px-2"},W={class:"flex my-auto"},X=e("img",{class:"h-6 w-6",src:$},null,-1),Y={class:"whitespace-nowrap my-auto text-gray-500 px-2"},ee={class:"flex flex-row-reverse"},ne={__name:"Projects",setup(te){const y=t=>(console.log(t),Object.values(t).map(l=>({src:l.original_url,alt:l.name}))),r=h(""),d=h(""),u=h([]);return F(r,(t,l)=>{console.log(t),d.value=u.value[1].regions[0].title.en}),N(async()=>{const t=await T.get("/api/departments");console.log(t),u.value=t.data.data,r.value=u.value[0].title.en,d.value=u.value[0].regions[0].title.en,console.log(r.value,"----",d.value)}),(t,l)=>{const p=U("router-link");return i(),v(f,null,[s(L,{class:"bg-black fixed z-50 w-full"}),e("div",P,[s(_(g),{variant:"underline",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=c=>r.value=c)},{default:n(()=>[(i(!0),v(f,null,x(u.value,c=>(i(),w(_(b),{name:c.title.en,title:c.title[t.$i18n.locale],class:"[&>div>div>div>ul]:justify-center [&>div>div>div]:border-0 [&>div>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>div>ul>li>.border-blue-600]:border-dark-brown"},{default:n(()=>[s(_(g),{variant:"underline",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=m=>d.value=m),class:"justify-center py-10"},{default:n(()=>[(i(!0),v(f,null,x(c.regions,m=>(i(),w(_(b),{name:m.title.en,title:m.title[t.$i18n.locale]},{default:n(()=>[e("div",R,[(i(!0),v(f,null,x(m.projects,a=>(i(),v("div",{class:G(["rounded-xl bg-[#fff8f8] mx-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"])},[e("div",S,[s(p,{to:{name:"Project",params:{id:a.id}}},{default:n(()=>[s(_(B),{autoplay:!1,pictures:y(a.gallery),class:"[&>div>div>img]:h-full [&>div:first-child]:lg:h-[243px] [&>button>span]:hidden [&>div>button]:hidden [&>div>button]:mx-2 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])]),_:2},1032,["to"])]),e("div",z,[s(p,{to:{name:"Project",params:{id:a.id}}},{default:n(()=>[e("h3",A,o(a.title[t.$i18n.locale]),1)]),_:2},1032,["to"]),D,e("h6",E,o(a.address[t.$i18n.locale]),1)]),e("div",H,[e("p",{class:"px-2 h-24 text-grey text-sm col-start-1 col-end-4",innerHTML:a.text[t.$i18n.locale].slice(0,190)},null,8,I)]),e("div",Z,[e("div",j,[O,e("small",q,o(a==null?void 0:a.type[t.$i18n.locale]),1)]),e("div",J,[K,e("small",Q,o(a.land_area)+" "+o(t.$t("areaUnit")),1)]),e("div",W,[X,e("small",Y,o(a.units_number)+" "+o(t.$t("unit")),1)])]),e("div",ee,[s(p,{class:"w-[100px] bg-dark-brown text-white rounded-2xl h-8 max-w-20 text-center flex flex-col justify-center mx-2",to:{name:"Project",params:{id:a.id}}},{default:n(()=>[k(o(t.$t("readMore")),1)]),_:2},1032,["to"])])],2))),256))])]),_:2},1032,["name","title"]))),256))]),_:2},1032,["modelValue"])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),s(M)],64)}}};export{ne as default};
