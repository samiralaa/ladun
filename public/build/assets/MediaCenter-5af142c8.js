import{C as y}from"./CardLink-a9c00773.js";import"./flowbite-vue-e723e51a.js";import{N as w}from"./Navbar-3770e82e.js";import{L as v}from"./LightFooter-47bae309.js";import{L as C,g as _,h as M,i as $,r as L,o as n,c as s,a as g,b as e,d as b,t as o,w as d,F as c,m as k,f as N,e as D}from"./main-e4ec5d7e.js";const B={class:"media-center dark py-28 bg-background-section dark:bg-black dark:text-[white]",style:{color:"rgb(255, 255, 255)",height:"300px","background-image":"url('http://[::1]:5173/resources/js/new.jpg')","background-size":"cover","background-position":"center","text-align":"center"}},F={style:{color:"rgb(255, 255, 255)","padding-top":"20px","font-size":"16px"}},H={href:"",class:"dark:text-[white]"},T=e("div",{class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},[e("template",null,[e("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-t-lg md:rounded-t-none rtl:pl-2 ltr:pr-2",src:"",alt:""})])],-1),j={class:"media-center py-28 bg-background-section dark:bg-black"},z={class:"container mx-auto"},V={class:"text-4xl text-center mb-10 dark:text-[white]"},A={class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},J=["src"],R={class:"p-5"},S={class:"mb-2 font-normal text-gray-700 dark:text-gray-400"},E=["innerHTML"],O=["onClick"],U={class:"text-xl"},Y=["src"],q=["innerHTML"],G={style:{opacity:"80% !important"},class:"rtl:text-end ltr:text-end"},I=["onClick"],ee={__name:"MediaCenter",setup(K){const x=C(),l=_({});new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,_("");const u=t=>{const p=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(t),r=a.getFullYear(),i=p[a.getMonth()],f=("0"+a.getDate()).slice(-2);return`${i} ${f}, ${r}`},m=t=>{x.push({name:"Media Center Details",params:{id:t}})},h=t=>t.media[0].collection_name=="attachments"?t.media[0].original_url:t.media[1].original_url;return M(()=>{$.get("/api/media-center").then(t=>{l.value=t.data.mediaCenter})}),(t,p)=>{const a=L("router-link");return n(),s(c,null,[g(w,{class:"bg-black fixed z-50 w-full"}),e("section",B,[b(o(t.$t("mediaCenter"))+" ",1),e("div",F,[g(a,{to:{name:"Home"}},{default:d(()=>[e("a",H,o(t.$t("companyAds")),1),b(" / "+o(t.$t("main")),1)]),_:1})]),T]),e("section",j,[e("div",z,[e("h1",V,o(t.$t("mediaCenter")),1),e("div",A,[l.value.length?(n(),s(c,{key:0},[(n(!0),s(c,null,k(l.value,r=>(n(),s("div",{key:r.id,class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},[e("img",{class:"rounded-t-lg",style:{width:"100%",height:"150px"},src:h(r),alt:""},null,8,J),e("div",R,[e("p",S,o(u(r.created_at)),1),e("p",{innerHTML:r.content[t.$i18n.locale].slice(0,155)+"...",style:{height:"105px","font-size":"18px"},class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},null,8,E)]),e("div",null,[e("p",{onClick:i=>m(r.id),class:"mx-4 cursor-pointer py-2 my-2 w-[90%] text-sm font-medium text-center text-white bg-dark-brown rounded-lg hover:bg-dark-brownfocus:ring-4 focus:outline-none focus:bg-dark-brown dark:bg-dark-brown dark:hover:bg-dark-brown dark:focus:bg-dark-brown"},o(t.$t("readMore")),9,O)])]))),128)),(n(!0),s(c,null,k(l.value,r=>(n(),D(y,{key:r.id,class:"dark:[&>div]:bg-background-section [&>div]:rounded-lg"},{date:d(()=>[e("p",U,[e("img",{class:"md:h-full object-cover img-media-center lg:rtl:rounded-l-lg lg:ltr:rounded-r-lg w-full md:w-48 rounded-t-lg md:rounded-t-none rtl:pl-2 ltr:pr-2",src:h(r),alt:"",style:{width:"100%"}},null,8,Y)])]),text:d(()=>[e("div",{innerHTML:r.content[t.$i18n.locale].slice(0,155)+"..."},null,8,q),e("div",G,[e("button",{onClick:i=>m(r.id),class:"p-2 my-2 text-xs rounded-lg text-white bg-dark-brown text-cecter"},o(t.$t("readMore")),9,I)])]),head:d(()=>[e("p",null,o(u(r.created_at)),1)]),_:2},1024))),128))],64)):N("",!0)])])]),g(v)],64)}}};export{ee as default};
