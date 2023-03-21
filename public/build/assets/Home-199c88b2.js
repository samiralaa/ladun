import{_ as B,r as _,o as j,a as v,i as L,b as M,c as r,d as u,e as n,n as x,f as t,t as s,w as C,g as f,u as c,h as w,j as y,F as k,k as $,l as D,m as O,p as H,q as N}from"./main-7d3fddf2.js";import{_ as T}from"./Navbar-5ab4aef0.js";import{L as V}from"./LightFooter-fb4450c2.js";import{C as z,M as U,B as Y,a as I,L as E,b as F,N as A}from"./flowbite-vue-e7f55102.js";import{M as R}from"./index-55879bb4.js";const q="/build/assets/28mb_home_page_video-bf923b36.mp4",G="/build/assets/experience_years-5395469c.svg",W="/build/assets/projects_units-6bcb97c6.svg",J="/build/assets/affiliate-37c9af95.svg",K="/build/assets/projects_investment-927fc4bc.svg",Q="/build/assets/projects_areas-820dff43.svg",X="/build/assets/about_ladun_image-ed15c0a1.png";const a=m=>(H("data-v-118c4e78"),m=m(),N(),m),Z={class:"relative flex h-screen overflow-hidden"},tt=a(()=>t("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),et=a(()=>t("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[t("source",{src:q,type:"video/mp4"}),f(" Your browser does not support the video tag. ")],-1)),st={class:"animate__animated animate__fadeInUp z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},ot={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},at={class:"flex justify-center"},lt={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp",href:"#"},nt={id:"project-latest"},it={class:"grid grid-cols-4 gap-4 my-10"},rt={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},ct={class:"grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 lg:grid-cols-4 mx-auto container px-5"},dt={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project"},ut=["src"],_t={class:"flex items-center"},mt={class:"flex-initial p-2"},ft={class:"flex-initial mx-2 text-light-brown"},ht={key:0,class:"font-bold"},gt=["innerHTML"],bt={class:"flex justify-end my-4 mx-2"},pt=["onClick"],vt={class:"flex flex-wrap m-2"},xt={class:"whitespace-nowrap text-gray-500"},wt={class:"whitespace-nowrap text-gray-500"},yt={class:"whitespace-nowrap text-gray-500"},kt={class:"relative about-section"},jt={class:"flex py-5"},Lt={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-3 mx-auto container px-5"},$t=["innerHTML"],It={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},Pt={class:"grid grid-cols-2 justify-center"},St=a(()=>t("img",{src:G,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),Bt={class:"my-auto text-center"},Mt=a(()=>t("strong",{class:"text-xl counter text-dark-brown"},"+",-1)),Ct={class:"block text-xs"},Dt={class:"grid grid-cols-2 justify-center"},Ot=a(()=>t("img",{src:W,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),Ht={class:"my-auto text-center"},Nt=a(()=>t("strong",{class:"text-xl counter text-dark-brown"},"+",-1)),Tt={class:"block text-xs"},Vt={class:"grid grid-cols-2 justify-center"},zt=a(()=>t("img",{src:J,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),Ut={class:"my-auto text-center"},Yt=a(()=>t("strong",{class:"text-xl counter text-dark-brown"},"+",-1)),Et={class:"block text-xs"},Ft={class:"grid grid-cols-2 justify-center"},At=a(()=>t("img",{src:K,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),Rt={class:"my-auto text-center"},qt=a(()=>t("strong",{class:"text-xl counter text-dark-brown"},"+",-1)),Gt={class:"block text-xs"},Wt={class:"grid grid-cols-2 justify-center"},Jt=a(()=>t("img",{src:Q,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),Kt={class:"my-auto text-center"},Qt=a(()=>t("strong",{class:"text-xl counter text-dark-brown"},"+",-1)),Xt={class:"block text-xs"},Zt=a(()=>t("img",{class:"w-full",src:X,alt:"About Ladun"},null,-1)),te={class:"rounded-2xl border-2 border-yellow-300 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5"},ee={class:"w-full inline-flex justify-between px-4 text-white"},se=a(()=>t("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1)),oe={__name:"Home",setup(m){const o=_({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),h=_(""),g=_([]),P=_([]),b=_([]);j(()=>{window.addEventListener("scroll",S),v.get("/api/projects/latest").then(e=>{P.value=e.data.data}).catch(e=>console.log(e)),v.get("/api/about").then(e=>{b.value=e.data[0]}).catch(e=>console.log(e))});const S=()=>{window.pageYOffset>0?(o.value.topOfPage&&(o.value.topOfPage=!1),o.value.latestProjectsSection&&(o.value.latestProjectsSection=!1),o.value.aboutLadunSection&&(o.value.aboutLadunSection=!1)):(o.value.topOfPage||(o.value.topOfPage=!0),o.value.latestProjectsSection||(o.value.latestProjectsSection=!0),o.value.aboutLadunSection||(o.value.aboutLadunSection=!0))};return j(async()=>{window.addEventListener("scroll",function(){let d=document.getElementsByClassName("latest_project"),p=document.getElementById("latest_project_header");for(let l=0;l<d.length;l++)window.scrollY>=p.offsetTop-700?L.global.locale.value=="en"?d[l].classList.add("animate__animated","animate__fadeInLeft"):d[l].classList.add("animate__animated","animate__fadeInRight"):L.global.locale.value=="en"?d[l].classList.remove("animate__animated","animate__fadeInLeft"):d[l].classList.remove("animate__animated","animate__fadeInRight")});const e=await v.get("/api/departments/latest/projects");g.value=e.data.data,h.value=g.value[0].title.en}),(e,d)=>{const p=M("scroll-to");return r(),u(k,null,[n(T,{class:x(["fixed z-30 w-full animate__animated animate__backInDown",{"bg-black":!o.value.topOfPage}])},null,8,["class"]),t("header",Z,[tt,et,t("div",st,[t("button",ot,s(e.$t("shareYourInterests")),1)])]),t("div",at,[C((r(),u("a",lt,[f(s(e.$t("scrollDown"))+" ",1),n(c(z),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[p,{el:"#project-latest",offset:-128}]])]),t("section",nt,[t("div",it,[t("h2",{id:"latest_project_header",class:x([{"animate__animated animate__fadeInLeft":!o.value.latestProjectsSection},"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"])},s(e.$t("latestProjects")),3)]),t("div",rt,[n(c(F),{variant:"underline",modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=l=>h.value=l)},{default:w(()=>[(r(!0),u(k,null,$(g.value,l=>(r(),D(c(E),{name:l.title.en,title:l.title[e.$i18n.locale]},{default:w(()=>[t("div",ct,[(r(!0),u(k,null,$(l.latest,i=>(r(),u("div",dt,[i.attachment?(r(),u("img",{key:0,class:"w-full rounded-lg",src:i.attachment,alt:"Project Photo"},null,8,ut)):y("",!0),t("div",_t,[t("h3",mt,s(i.title[e.$i18n.locale]),1),t("span",ft,[n(c(R),{class:"inline-block h-4 w-4"}),i.location?(r(),u("small",ht,s(i.location.city[e.$i18n.locale]),1)):y("",!0)])]),t("p",{class:"px-2 text-grey text-xs",innerHTML:i.text[e.$i18n.locale].slice(0,200)+" ..."},null,8,gt),t("div",bt,[t("button",{class:"bg-dark-brown text-white rounded-2xl w-36 h-8",onClick:O(ae=>e.$router.push({name:"Project",params:{id:i.id}}),["prevent"])},[t("small",null,[n(c(U),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 justify-end"}),f(" "+s(e.$t("exploreProject")),1)])],8,pt)]),t("div",vt,[t("div",null,[n(c(Y),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",xt,s(e.$t("residentialLandPlots")),1)]),t("div",null,[n(c(I),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",wt,s(i.Land_area)+" "+s(e.$t("areaUnit")),1)]),t("div",null,[n(c(I),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",yt,s(i.units_number)+" "+s(e.$t("unit")),1)])])]))),256))])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),t("section",kt,[t("div",jt,[t("h2",{class:x([{"animate__animated animate__fadeInLeft":!o.value.latestProjectsSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3"])},s(e.$t("aboutLadun")),3)]),t("div",Lt,[b.value.content?(r(),u("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xs",innerHTML:b.value.content[e.$i18n.locale]},null,8,$t)):y("",!0),t("div",It,[t("div",Pt,[St,t("div",Bt,[Mt,t("p",Ct,s(e.$t("experienceYears")),1)])]),t("div",Dt,[Ot,t("div",Ht,[Nt,t("p",Tt,s(e.$t("projectsUnits")),1)])]),t("div",Vt,[zt,t("div",Ut,[Yt,t("p",Et,s(e.$t("affiliate")),1)])]),t("div",Ft,[At,t("div",Rt,[qt,t("p",Gt,s(e.$t("projectsInvestment")),1)])]),t("div",Wt,[Jt,t("div",Kt,[Qt,t("p",Xt,s(e.$t("projectsAreas")),1)])])]),Zt]),t("div",te,s(e.$t("shareYourInterestWithUs")),1),n(c(A),{text:"Bottom",class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:w(()=>[t("span",ee,[t("span",null,s(e.$t("choose")),1),f(),se])]),_:1})]),n(V)],64)}}},de=B(oe,[["__scopeId","data-v-118c4e78"]]);export{de as default};
