import"./flowbite-vue-20ea8958.js";import{N as v}from"./Navbar-33443de5.js";import{I as C}from"./ImgBanner-62df3683.js";import{L as M}from"./LightFooter-9d8a160a.js";import{L as $,g as l,h as L,i as u,o as i,c as d,a as g,b as r,w as h,t as s,F as m,m as N,f as B,d as D}from"./main-6e7f536b.js";const F=["src"],S={class:"pt-26 dark:text-white dark:bg-black"},T=["src"],V={class:"media-center py-28 bg-background-section dark:bg-black"},J={class:"container mx-auto"},z={class:"text-4xl text-center mb-10 dark:text-[white]"},A={class:"grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8"},E=["src"],H={class:"p-1 px-3"},I={class:"mb-2 font-normal text-gray-700 dark:text-gray-400"},R=["innerHTML"],W=["onClick"],K={__name:"MediaCenter",setup(j){const b=$(),o=l({}),n=l("");new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,l("");const _=e=>String(e).split(/\s+/).slice(0,15).join(" "),p=e=>{const a=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date(e),c=t.getFullYear(),w=a[t.getMonth()],y=("0"+t.getDate()).slice(-2);return`${w} ${y}, ${c}`},f=e=>{b.push({name:"Media Center Details",params:{id:e}})},k=e=>{var a,t;return e.media[0].collection_name=="attachments"?(a=e.media[0])==null?void 0:a.original_url:(t=e.media[1])==null?void 0:t.original_url},x=()=>{u.get("/api/banners-pages").then(e=>{n.value=e.data.pages[3].media[0].original_url,console.log(n.value)}).then(e=>{n.value=e}).catch(e=>{console.error("Error fetching banner:",e)})};return L(()=>{u.get("/api/media-center").then(e=>{o.value=e.data.mediaCenter}),x()}),(e,a)=>(i(),d(m,null,[g(v,{class:"bg-black fixed z-50 w-full"}),r("img",{src:n.value},null,8,F),r("div",S,[g(C,null,{text:h(()=>[D(s(e.$t("mediaCenter")),1)]),default:h(()=>[r("img",{class:"w-full",style:{height:"300px"},src:n.value},null,8,T)]),_:1})]),r("section",V,[r("div",J,[r("h1",z,s(e.$t("mediaCenter")),1),r("div",A,[o.value.length?(i(!0),d(m,{key:0},N(o.value,t=>(i(),d("div",{key:t.id,class:"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},[r("img",{class:"rounded-t-lg",style:{width:"100%",height:"200px"},src:k(t),alt:""},null,8,E),r("div",H,[r("p",I,s(p(t.created_at)),1),r("p",{innerHTML:_(t==null?void 0:t.title[e.$i18n.locale]),style:{"min-height":"90px","font-size":"15px"},class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},null,8,R)]),r("div",null,[r("p",{onClick:c=>f(t.id),class:"mx-4 cursor-pointer py-2 my-2 w-[90%] text-sm font-medium text-center text-white bg-dark-brown rounded-lg hover:bg-dark-brownfocus:ring-4 focus:outline-none focus:bg-dark-brown dark:bg-dark-brown dark:hover:bg-dark-brown dark:focus:bg-dark-brown"},s(e.$t("readMore")),9,W)])]))),128)):B("",!0)])])]),g(M)],64))}};export{K as default};
