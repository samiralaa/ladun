import{C as m}from"./CardLink-0f014571.js";import{U as g}from"./flowbite-vue-42578fc5.js";import{_ as p}from"./Navbar-1d4e555e.js";import{L as _}from"./LightFooter-10a0dab5.js";import{bw as h,g as f,h as v,j as b,o,c,a as n,u as x,b as e,F as l,m as k,f as C,e as w,w as r,d as L,t as B}from"./main-35de2b4f.js";const M=e("div",{class:"pt-[73px]"},null,-1),j={class:"media-center py-28 bg-background-section"},y={class:"container mx-auto"},N=e("h1",{class:"text-3xl text-center mb-7"},"المركز الاعلامي",-1),V={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},$=["innerHTML"],F=["src"],q={__name:"MediaCenter",setup(T){const i=h(),a=f({}),d=[{src:new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,alt:"Picture 2"}],u=t=>{i.push({name:"Media Center Details",params:{id:t}})};return v(()=>{b.get("/api/media-center").then(t=>{a.value=t.data.mediaCenter,console.log(a.value)})}),(t,D)=>(o(),c(l,null,[n(p,{class:"bg-black fixed z-50 w-full"}),M,n(x(g),{pictures:d,class:"h-[calc(60vh-73px)] [&>div:first-child]:h-[calc(60vh-73px)] [&>div>div>img]:h-[calc(60vh-73px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"}),e("section",j,[e("div",y,[N,e("div",V,[a.value.length?(o(!0),c(l,{key:0},k(a.value,s=>(o(),w(m,{key:s.id,onClick:H=>u(s.id)},{head:r(()=>[L(B(s.title[t.$i18n.locale].slice(0,20)+"..."),1)]),text:r(()=>[e("div",{innerHTML:s.content[t.$i18n.locale].slice(0,100)+"..."},null,8,$)]),default:r(()=>[e("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-b-lg md:rounded-b-none",src:s.media[0].original_url,alt:""},null,8,F)]),_:2},1032,["onClick"]))),128)):C("",!0)])])]),n(_)],64))}};export{q as default};
