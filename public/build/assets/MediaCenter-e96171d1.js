import{C as g}from"./CardLink-dd090cdb.js";import{_ as h,U as b}from"./Navbar-4aa3eb20.js";import{_ as v}from"./DarkFooter-32d318b7.js";import{bx as x,f as C,g as k,h as w,o as a,c as r,d as n,u as L,a as e,F as i,b as M,O as U,w as c,l as j,t as y}from"./main-331af845.js";const B=e("div",{class:"pt-[123px]"},null,-1),R={class:"media-center py-28 bg-background-section"},$={class:"container mx-auto"},P=e("h1",{class:"text-3xl text-center mb-7"},"المركز الاعلامي",-1),N={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},T=["innerHTML"],V=["src"],q={__name:"MediaCenter",setup(D){const l=x(),o=C({}),d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,u=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,_=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,p=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,m=[{src:d,alt:"Picture 1"},{src:p,alt:"Picture 4"},{src:u,alt:"Picture 2"},{src:_,alt:"Picture 3"}],f=t=>{l.push({name:"Media Center Details",params:{id:t}})};return k(()=>{w.get("/api/media-center").then(t=>{o.value=t.data.mediaCenter})}),(t,F)=>(a(),r(i,null,[n(h,{class:"bg-black fixed z-50 w-full"}),B,n(L(b),{pictures:m,class:"h-[calc(100vh-128px)] [&>div:first-child]:h-[calc(100vh-128px)] [&>div>div>img]:h-[calc(100vh-128px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"}),e("section",R,[e("div",$,[P,e("div",N,[(a(!0),r(i,null,M(o.value,s=>(a(),U(g,{onClick:H=>f(s.id)},{head:c(()=>[j(y(s.title[t.$i18n.locale]),1)]),text:c(()=>[e("div",{innerHTML:s.content[t.$i18n.locale].slice(0,100)+"..."},null,8,T)]),default:c(()=>[e("img",{class:"h-full object-cover img-media-center rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",src:s.media[0].original_url,alt:""},null,8,V)]),_:2},1032,["onClick"]))),256))])])]),n(v)],64))}};export{q as default};
