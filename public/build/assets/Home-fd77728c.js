import{_ as H,r as x,o as u,c as g,a as o,w as n,b as e,t as s,d as r,e as N,f as L,F as S,g as f,h as z,i as O,j as T,k as G,n as Y,l as E,u as c,m as D,p as K,q as W,s as X,v as q}from"./main-c155cfed.js";import{N as J}from"./Navbar-ace0da57.js";import{L as Q}from"./LightFooter-84460548.js";import{K as Z,N as ee,X as te,Y as oe,u as se,C as ae,M as le,B as ne,a as R,L as ie,b as re}from"./flowbite-vue-6d9ddb50.js";import{M as de}from"./index-eab46a5e.js";import{C as ce,N as ue,P as me,S as _e}from"./carousel.es-28ed2c30.js";const fe="/build/assets/28mb_home_page_video-bf923b36.mp4",he="/build/assets/experience_years-5395469c.svg",ge="/build/assets/projects_revenue-8cc57d0f.svg",be="/build/assets/affiliate-37c9af95.svg",pe="/build/assets/projects_units-6bcb97c6.svg",we="/build/assets/projects_areas-820dff43.svg",ve="/build/assets/about_ladun_image-ed15c0a1.png",xe={data(){return{isShowModal:!1}},props:["formShow"],components:{Modal:Z,Dropdown:ee,ListGroupItem:te,ListGroup:oe,Input:se},methods:{closeModal(){this.isShowModal=!1},showModal(){this.isShowModal=!0}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(a,j){this.isShowModal=a}}}},ye={class:"w-full inline-flex justify-between px-4 text-white"},ke=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),$e={class:"mx-11 font-bold"},Le={class:"mx-11 font-bold"},Se={class:"flex items-center text-lg"},je={class:"",action:"https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"},Ie=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),Me=e("input",{type:"hidden",name:"retURL",value:"http://google.com"},null,-1),Pe=e("input",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",name:"submit"},null,-1),Ce=e("div",{class:"flex justify-between"},null,-1);function Te(a,j,I,M,$,m){const h=x("list-group-item"),d=x("list-group"),y=x("dropdown"),b=x("Input"),P=x("Modal",!0);return u(),g(S,null,[o(y,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:n(()=>[e("span",ye,[e("span",null,s(a.$t("choose")),1),ke])]),default:n(()=>[o(d,{class:"w-full"},{default:n(()=>[e("div",$e,s(a.$t("ownership")),1),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("easternRegion")),1)]),_:1},8,["onClick"]),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("middleRegion")),1)]),_:1},8,["onClick"]),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("westernRegion")),1)]),_:1},8,["onClick"]),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("northernRegion")),1)]),_:1},8,["onClick"]),e("div",Le,s(a.$t("rent")),1),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("middleRegion")),1)]),_:1},8,["onClick"]),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("westernRegion")),1)]),_:1},8,["onClick"]),o(h,{class:"mx-24",onClick:m.showModal},{default:n(()=>[r(s(a.$t("northernRegion")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),$.isShowModal?(u(),N(P,{key:0,size:a.size,onClose:m.closeModal},{header:n(()=>[e("div",Se,s(a.$t("shareYourInterests")),1)]),body:n(()=>[e("form",je,[Ie,Me,o(b,{size:"md",maxlength:"40",name:"first_name",placeholder:a.$t("FirstName"),label:a.$t("FirstName")},null,8,["placeholder","label"]),o(b,{size:"md",maxlength:"80",name:"last_name",placeholder:a.$t("LastName"),label:a.$t("LastName")},null,8,["placeholder","label"]),o(b,{size:"md",maxlength:"40",name:"mobile",placeholder:a.$t("PhoneNumber"),label:a.$t("PhoneNumber")},null,8,["placeholder","label"]),o(b,{size:"md",maxlength:"80",name:"email",placeholder:a.$t("Email"),label:a.$t("Email")},null,8,["placeholder","label"]),Pe])]),footer:n(()=>[Ce]),_:1},8,["size","onClose"])):L("",!0)],64)}const Ne=H(xe,[["render",Te]]);const w=a=>(X("data-v-f2f1f163"),a=a(),q(),a),Be={class:"relative flex h-screen overflow-hidden"},ze=w(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),Oe=w(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:fe,type:"video/mp4"}),r(" Your browser does not support the video tag. ")],-1)),Ye={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},Ee={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},De={class:"flex justify-center"},Re={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},He={id:"project-latest"},Ue={class:"grid grid-cols-4 gap-4 my-10"},Ve={id:"latest_project_header",class:"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"},Fe={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black [&>div>div>ul>li>div]:font-bold"},Ae={class:"rounded-lg border-2 border-gray-border-light bg-white latest_project mx-5"},Ge=["src"],Ke={class:"flex flex-col p-2"},We={class:"flex-initial"},Xe={class:"text-dark-brown flex"},qe={key:0},Je=["innerHTML"],Qe={class:"flex justify-center my-4 mx-2"},Ze=["onClick"],et={class:"text-center"},tt={class:"flex flex-wrap m-2"},ot={class:"whitespace-nowrap text-gray-500"},st={class:"whitespace-nowrap text-gray-500"},at={class:"whitespace-nowrap text-gray-500"},lt={class:"relative about-section mt-10",id:"aboutSection"},nt={class:"flex py-5"},it={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 mx-auto container px-5"},rt={class:"right"},dt=["innerHTML"],ct={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},ut={class:"grid grid-cols-2 justify-center"},mt=w(()=>e("img",{src:he,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),_t={class:"my-auto text-center"},ft={class:"text-xl text-dark-brown"},ht={class:"block text-xl"},gt={class:"grid grid-cols-2 justify-center"},bt=w(()=>e("img",{src:ge,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),pt={class:"my-auto text-center"},wt={class:"text-xl text-dark-brown"},vt={class:"block text-xl"},xt={class:"grid grid-cols-2 justify-center"},yt=w(()=>e("img",{src:be,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),kt={class:"my-auto text-center"},$t={class:"text-xl text-dark-brown"},Lt={class:"block text-xl"},St={class:"grid grid-cols-2 justify-center"},jt=w(()=>e("img",{src:pe,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),It={class:"my-auto text-center"},Mt={class:"text-xl text-dark-brown"},Pt={class:"block text-xl"},Ct={class:"grid grid-cols-2 justify-center"},Tt=w(()=>e("img",{src:we,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),Nt={class:"my-auto text-center"},Bt={class:"text-xl text-dark-brown"},zt={class:"block text-xl"},Ot=w(()=>e("img",{class:"w-[91%] left",src:ve,alt:"About Ladun"},null,-1)),Yt={class:"rounded-2xl border-2 border-yellow-300 mt-10 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5",id:"form"},Et={__name:"Home",setup(a){const j=f(!1),I=f(null),M=f(null),$=f(null),m=f(null),h=f(null),d=f({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),y=f(""),b=f([]),P={itemsToShow:1,snapAlign:"center"},U={700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:4,snapAlign:"center"}},V=f([]);var B=1;const C=f([]);z(()=>{window.addEventListener("scroll",A)});function F(){T.get("/api/projects/latest").then(t=>{V.value=t.data.data}).catch(t=>console.log(t)),T.get("/api/about").then(t=>{C.value=t.data[0]}).catch(t=>console.log(t))}F();const A=()=>{let t=document.getElementById("aboutSection"),p=document.getElementById("footerSection");scrollY>p.offsetTop-t.offsetTop+300&&B&&(B=0,I.value.restart(),M.value.restart(),$.value.restart(),m.value.restart(),h.value.restart()),window.pageYOffset>0?(d.value.topOfPage&&(d.value.topOfPage=!1),d.value.latestProjectsSection&&(d.value.latestProjectsSection=!1)):(d.value.topOfPage||(d.value.topOfPage=!0),d.value.latestProjectsSection||(d.value.latestProjectsSection=!0))};return z(async()=>{window.addEventListener("scroll",function(){let p=document.getElementsByClassName("latest_project"),v=document.getElementById("latest_project_header"),k=this.document.getElementById("aboutLadunHeader"),_=document.getElementsByClassName("right"),i=document.getElementsByClassName("left");for(let l=0;l<_.length;l++)console.log(_[l].offsetTop),window.scrollY>=_[l].offsetTop-400&&(this.locale=="en"?_[l].classList.add("animate__animated","animate__fadeInLeft","animate__slow"):_[l].classList.add("animate__animated","animate__fadeInRight","animate__slow"));for(let l=0;l<i.length;l++)console.log(i[l].offsetTop),window.scrollY>=i[l].offsetTop-400&&(this.locale=="en",i[l].classList.add("animate__animated","animate__zoomIn","animate__slow"));for(let l=0;l<p.length;l++)window.scrollY>=v.offsetTop-700&&(O.global.locale.value=="en"?p[l].classList.add("animate__animated","animate__fadeInLeft"):p[l].classList.add("animate__animated","animate__fadeInRight"));scrollY>footerSection.offsetTop-aboutSection.offsetTop+300&&(O.global.locale.value=="en"?k.classList.add("animate__animated","animate__fadeInLeft"):k.classList.add("animate__animated","animate__fadeInRight"))});const t=await T.get("/api/departments/latest/projects");b.value=t.data.data,y.value=b.value[0].title.en}),(t,p)=>{const v=x("number"),k=G("scroll-to");return u(),g(S,null,[o(J,{class:Y(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!d.value.topOfPage}])},null,8,["class"]),e("header",Be,[ze,Oe,e("div",Ye,[E((u(),g("button",Ee,[r(s(t.$t("shareYourInterests")),1)])),[[k,{el:"#form",offset:-128}]])])]),e("div",De,[E((u(),g("a",Re,[r(s(t.$t("scrollDown"))+" ",1),o(c(ae),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[k,{el:"#project-latest",offset:-128}]])]),e("section",He,[e("div",Ue,[e("h2",Ve,s(t.$t("latestProjects")),1)]),e("div",Fe,[o(c(re),{variant:"underline",modelValue:y.value,"onUpdate:modelValue":p[0]||(p[0]=_=>y.value=_)},{default:n(()=>[(u(!0),g(S,null,D(b.value,_=>(u(),N(c(ie),{name:_.title.en,title:_.title[t.$i18n.locale],class:""},{default:n(()=>[o(c(ce),K(P,{autoplay:2e3,"wrap-around":!0,breakpoints:U}),{addons:n(()=>[o(c(ue)),o(c(me))]),default:n(()=>[(u(!0),g(S,null,D(_.latest,i=>(u(),N(c(_e),{key:i.id},{default:n(()=>[e("div",Ae,[i.attachment?(u(),g("img",{key:0,class:"w-full rounded-lg",src:i.attachment,alt:"Project Photo"},null,8,Ge)):L("",!0),e("div",Ke,[e("h3",We,s(i.title[t.$i18n.locale]),1),e("div",Xe,[o(c(de),{class:"h-4 w-4"}),i.location?(u(),g("small",qe,s(i.location.address[t.$i18n.locale]),1)):L("",!0)])]),e("p",{class:"px-2 text-grey text-sm",innerHTML:i.text[t.$i18n.locale].slice(0,200)+" ..."},null,8,Je),e("div",Qe,[e("button",{class:"bg-dark-brown text-white text-center rounded-2xl w-36 h-8",onClick:W(l=>t.$router.push({name:"Project",params:{id:i.id}}),["prevent"])},[e("small",et,[o(c(le),{class:"inline-block h-4 w-4 justify-end"}),r(" "+s(t.$t("exploreProject")),1)])],8,Ze)]),e("div",tt,[e("div",null,[o(c(ne),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",ot,s(t.$t("residentialLandPlots")),1)]),e("div",null,[o(c(R),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",st,s(i.Land_area)+" "+s(t.$t("areaUnit")),1)]),e("div",null,[o(c(R),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),e("small",at,s(i.units_number)+" "+s(t.$t("unit")),1)])])])]),_:2},1024))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",lt,[e("div",nt,[e("h2",{class:Y([{"animate__animated animate__fadeInLeft animate__slow":!d.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3"]),id:"aboutLadunHeader"},s(t.$t("aboutLadun")),3)]),e("div",it,[e("div",rt,[C.value.content?(u(),g("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xl mb-7",innerHTML:C.value.content[t.$i18n.locale]},null,8,dt)):L("",!0),e("div",ct,[e("div",ut,[mt,e("div",_t,[e("strong",ft,[r("+ "),o(v,{ref_key:"number1",ref:I,from:0,to:50,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",ht,s(t.$t("experienceYears")),1)])]),e("div",gt,[bt,e("div",pt,[e("strong",wt,[r("+ "),o(v,{ref_key:"number2",ref:M,from:0,to:15,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",vt,s(t.$t("projectsInvestment")),1)])]),e("div",xt,[yt,e("div",kt,[e("strong",$t,[r("+ "),o(v,{ref_key:"number3",ref:$,from:0,to:11,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",Lt,s(t.$t("affiliate")),1)])]),e("div",St,[jt,e("div",It,[e("strong",Mt,[r("+ "),o(v,{ref_key:"number4",ref:m,from:0,to:250,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",Pt,s(t.$t("projectsUnits")),1)])]),e("div",Ct,[Tt,e("div",Nt,[e("strong",Bt,[r("+ "),o(v,{ref_key:"number5",ref:h,from:0,to:19673,delay:3,duration:3,easing:"Power1.easeOut"},null,512)]),e("p",zt,s(t.$t("unitsUnderProcess")),1)])])])]),Ot]),e("div",Yt,s(t.$t("shareYourInterestWithUs")),1)]),o(Ne,{formShow:j.value},null,8,["formShow"]),o(Q,{id:"footerSection"})],64)}}},At=H(Et,[["__scopeId","data-v-f2f1f163"]]);export{At as default};
