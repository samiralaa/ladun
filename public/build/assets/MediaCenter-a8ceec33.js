import{C as _}from"./CardLink-bb8dd6c2.js";import"./flowbite-vue-495243d3.js";import{N as p}from"./Navbar-c4d37ec2.js";import{L as h}from"./LightFooter-d5c12e8a.js";import{L as f,g as l,h as b,i as x,o as n,c as i,a as c,b as t,t as o,F as d,m as k,f as v,e as C,w as r}from"./main-b350cee5.js";const w=t("div",{class:"pt-[73px]"},null,-1),L={class:"media-center py-28 bg-background-section"},M={class:"container mx-auto"},y={class:"text-4xl text-center mb-10"},B={class:"grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8"},N={class:"text-xl"},$=["innerHTML"],F={class:"rtl:text-end ltr:text-end"},V=["onClick"],D=["src"],q={__name:"MediaCenter",setup(H){const u=f(),s=l({});new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,l("");const m=e=>{u.push({name:"Media Center Details",params:{id:e}})},g=e=>e.media[0].collection_name=="attachments"?e.media[0].original_url:e.media[1].original_url;return b(()=>{x.get("/api/media-center").then(e=>{s.value=e.data.mediaCenter})}),(e,R)=>(n(),i(d,null,[c(p,{class:"bg-black fixed z-50 w-full"}),w,t("section",L,[t("div",M,[t("h1",y,o(e.$t("mediaCenter")),1),t("div",B,[s.value.length?(n(!0),i(d,{key:0},k(s.value,a=>(n(),C(_,{key:a.id},{head:r(()=>[t("p",N,o(a.title[e.$i18n.locale].slice(0,50)+"..."),1)]),text:r(()=>[t("div",{innerHTML:a.content[e.$i18n.locale].slice(0,150)+"..."},null,8,$),t("div",F,[t("button",{onClick:T=>m(a.id),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown text-right"},o(e.$t("readMore")),9,V)])]),default:r(()=>[t("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-b-lg md:rounded-b-none rtl:pl-2 ltr:pr-2",src:g(a),alt:""},null,8,D)]),_:2},1024))),128)):v("",!0)])])]),c(h)],64))}};export{q as default};
