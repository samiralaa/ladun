import{_ as U,r as S,o as f,c as y,a,w as n,b as e,t as s,d as i,e as N,f as B,F as z,g as u,h as D,i as R,j as O,k as J,n as A,l as Y,u as k,m as H,p as Q,q as Z,s as ee,v as te}from"./main-0a3b417a.js";import{_ as se,a as oe,b as ae}from"./rrr-123b0cde.js";import{N as le}from"./Navbar-a9f2d5b2.js";import{L as ne}from"./LightFooter-b154ff53.js";import{K as ie,N as re,X as de,Y as ce,u as ue,C as _e,M as me,L as fe,a as he}from"./flowbite-vue-237f9077.js";import{C as pe,N as ge,S as we}from"./carousel.es-e5945979.js";const be="/build/assets/28mb_home_page_video-bf923b36.mp4",ve="/build/assets/experience_years-5395469c.svg",xe="/build/assets/projects_units-6bcb97c6.svg",ye="/build/assets/affiliate-37c9af95.svg",ke="/build/assets/romte-da32a763.png",$e="/build/assets/projects_areas-820dff43.svg",Se="/build/assets/projects_revenue-8cc57d0f.svg",Le="/build/assets/about_ladun_image-ed15c0a1.png",je={data(){return{isShowModal:!1,data:""}},props:["formShow"],components:{Modal:ie,Dropdown:re,ListGroupItem:de,ListGroup:ce,Input:ue},methods:{closeModal(){this.isShowModal=!1},showModal(o){this.isShowModal=!0,console.log(this.data),this.data=o}},mounted(){console.log(this.formShow)},watch:{formShow:{immediate:!0,handler(o,r){this.isShowModal=o}}}},Me={class:"w-full inline-flex justify-between px-4 text-white"},Ce=e("svg",{class:"my-auto w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),Ie={class:"mx-11 font-bold"},Re={class:"mx-11 font-bold"},ze={class:"flex items-center space-x-4 text-lg"},Pe={class:"space-y-4",action:"https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",method:"POST"},Ne=e("input",{type:"hidden",name:"oid",value:"00D3G0000008knU"},null,-1),Be=e("input",{type:"hidden",name:"retURL",value:"http://google.com"},null,-1),Te=["value"],Fe=e("input",{type:"hidden",name:"00N3G00000FV0J9",value:""},null,-1),Ve=["value"],Ee=e("div",{class:"flex justify-between"},null,-1);function Ge(o,r,T,F,C,_){const m=S("list-group-item"),h=S("list-group"),c=S("dropdown"),w=S("Input"),L=S("Modal",!0);return f(),y(z,null,[a(c,{class:"hover:cursor-pointer [&>div]:w-full w-1/2 h-10 bottom-0 origin-top rtl:-translate-x-1/2 ltr:translate-x-1/2 -translate-y-10 rounded-full hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:n(()=>[e("span",Me,[e("span",null,s(o.$t("choose")),1),Ce])]),default:n(()=>[a(h,{class:"w-full"},{default:n(()=>[e("div",Ie,s(o.$t("ownership")),1),a(m,{class:"mx-24",onClick:r[0]||(r[0]=g=>_.showModal("Buy-Eastern Region"))},{default:n(()=>[i(s(o.$t("easternRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[1]||(r[1]=g=>_.showModal("Buy-Middle Region"))},{default:n(()=>[i(s(o.$t("middleRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[2]||(r[2]=g=>_.showModal("Buy-Western Region"))},{default:n(()=>[i(s(o.$t("westernRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[3]||(r[3]=g=>_.showModal("Buy-Northern Region"))},{default:n(()=>[i(s(o.$t("northernRegion")),1)]),_:1}),e("div",Re,s(o.$t("rent")),1),a(m,{class:"mx-24",onClick:r[4]||(r[4]=g=>_.showModal("Buy-Eastern Region"))},{default:n(()=>[i(s(o.$t("easternRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[5]||(r[5]=g=>_.showModal("Rent-Middle Region"))},{default:n(()=>[i(s(o.$t("middleRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[6]||(r[6]=g=>_.showModal("Rent-Western Region"))},{default:n(()=>[i(s(o.$t("westernRegion")),1)]),_:1}),a(m,{class:"mx-24",onClick:r[7]||(r[7]=g=>_.showModal("Rent-Northern Region"))},{default:n(()=>[i(s(o.$t("northernRegion")),1)]),_:1})]),_:1})]),_:1}),C.isShowModal?(f(),N(L,{key:0,size:o.size,onClose:_.closeModal},{header:n(()=>[e("div",ze,s(o.$t("shareYourInterests")),1)]),body:n(()=>[e("form",Pe,[Ne,Be,e("input",{type:"hidden",name:"00N3G00000IEQrA",value:C.data},null,8,Te),Fe,a(w,{size:"md",maxlength:"40",name:"first_name",placeholder:o.$t("FirstName"),label:o.$t("FirstName")},null,8,["placeholder","label"]),a(w,{size:"md",maxlength:"80",name:"last_name",placeholder:o.$t("LastName"),label:o.$t("LastName")},null,8,["placeholder","label"]),a(w,{size:"md",maxlength:"40",name:"mobile",placeholder:o.$t("PhoneNumber"),label:o.$t("PhoneNumber")},null,8,["placeholder","label"]),a(w,{size:"md",maxlength:"80",name:"email",placeholder:o.$t("Email"),label:o.$t("Email")},null,8,["placeholder","label"]),e("input",{type:"submit",class:"text-white bg-[#AF9744] hover:bg-[#764522] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",value:o.$t("submit")},null,8,Ve)])]),footer:n(()=>[Ee]),_:1},8,["size","onClose"])):B("",!0)],64)}const De=U(je,[["render",Ge]]);const d=o=>(ee("data-v-27dd95b0"),o=o(),te(),o),Oe={class:"relative flex h-screen overflow-hidden"},Ae=d(()=>e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1)),Ye=d(()=>e("video",{autoplay:"",loop:"",muted:"",class:"absolute z-10 w-auto min-w-full min-h-full max-w-none"},[e("source",{src:be,type:"video/mp4"}),i(" Your browser does not support the video tag. ")],-1)),He={class:"animate__animated animate__fadeInUp animate__slow z-20 absolute top-1/2 ltr:right-0 rtl:left-0 translate-y-1/2"},Ue={class:"bg-dark-brown text-white rounded-2xl w-72 h-10 ltr:rotate-90 rtl:-rotate-90 origin-top ltr:translate-x-1/2 rtl:-translate-x-1/2"},We={class:"flex justify-center"},Xe={class:"bg-dark-brown text-center text-white rounded-full z-20 py-1 -mt-[2rem] w-72 h-14 animate__animated animate__fadeInUp animate__slow",href:"#"},Ke={id:"project-latest  bg-[white]"},qe={class:"grid grid-cols-4 gap-4 my-10"},Je={id:"latest_project_header",class:"flex text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 before:my-auto"},Qe={class:"[&>div>div>ul]:justify-center [&>div>div]:border-0 [&>div>div>ul>li>.text-blue-600]:text-dark-brown [&>div>div>ul>li>.text-blue-600]:hover:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-dark-brown"},Ze={class:"w-full lg:w-[80%] h-full rounded-xl bg-[#FFFDF6] latest_project mx-5"},et=["src"],tt={class:"flex text-right p-2"},st={class:"flex w-full flex-row-reverse"},ot={class:"px-2 text-2xl font-bold text-[#636463]"},at={class:"text-dark-brown flex"},lt={class:"text-right my-auto"},nt=d(()=>e("svg",{class:"my-auto",version:"1.0",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"24px",height:"24px",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64","xml:space":"preserve",fill:"#000000"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",null,[e("path",{fill:"#AF9751",d:"M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"}),i(),e("path",{fill:"#AF9751",d:"M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"}),i(),e("path",{fill:"#AF9751",d:"M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"})])])],-1)),it={class:""},rt=["innerHTML"],dt={class:"flex justify-between ltr:text-start rtl:text-end w-full"},ct={class:"flex my-auto"},ut={class:"flex"},_t={class:"my-auto text-gray-500"},mt={class:"whitespace-nowrap my-auto text-gray-800 px-2"},ft=d(()=>e("img",{class:"h-9 w-9",src:se},null,-1)),ht={class:"flex my-auto"},pt={class:"whitespace-nowrap text-gray-500 px-2"},gt=d(()=>e("img",{class:"w-7 h-7",src:oe},null,-1)),wt={class:"flex my-auto"},bt={class:"text-gray-900 px-2"},vt=d(()=>e("img",{class:"w-6 h-6",src:ae},null,-1)),xt={class:"ltr:text-end rtl:text-start w-full my-4"},yt=["onClick"],kt={class:""},$t=d(()=>e("svg",{fill:"#AF9744",height:"34px",width:"34px",version:"1.1",id:"XMLID_287_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24","xml:space":"preserve",stroke:"#AF9744"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",{id:"next"},[e("g",null,[e("polygon",{points:"6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "})])])])],-1)),St=d(()=>e("svg",{fill:"#AF9744",height:"34px",width:"34px",version:"1.1",id:"XMLID_54_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24","xml:space":"preserve",stroke:"#AF9744"},[e("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),e("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),e("g",{id:"SVGRepo_iconCarrier"},[e("g",{id:"previous"},[e("g",null,[e("polygon",{points:"17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "})])])])],-1)),Lt={class:"bg-[white] relative about-section mt-12",id:"aboutSection"},jt={class:"flex py-5"},Mt={class:"grid grid-cols-1 gap-5 md:gap-10 lg:grid-cols-2 mx-auto lg:w-[95%] px-5"},Ct={class:"right"},It=["innerHTML"],Rt={class:"grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto container"},zt={class:"grid grid-cols-3 justify-center"},Pt=d(()=>e("img",{src:ve,alt:"experience_years",class:"my-auto mx-auto"},null,-1)),Nt={class:"my-auto col-span-2 text-center"},Bt={class:"text-3xl text-dark-brown"},Tt={class:"block",style:{"font-size":"14px"}},Ft={class:"grid grid-cols-3 justify-center"},Vt=d(()=>e("img",{src:xe,alt:"projects_units",class:"my-auto mx-auto"},null,-1)),Et={class:"my-auto col-span-2 text-center"},Gt={class:"text-3xl text-dark-brown"},Dt={class:"block text-sm",style:{"font-size":"12px"}},Ot={class:"block text-sm",style:{"font-size":"12px"}},At={class:"grid grid-cols-3 justify-center"},Yt=d(()=>e("img",{src:ye,alt:"affiliate",class:"my-auto mx-auto"},null,-1)),Ht={class:"my-auto col-span-2 text-center"},Ut={class:"text-3xl text-dark-brown"},Wt={class:"block text-sm",style:{"font-size":"12px"}},Xt={class:"grid grid-cols-3 justify-center"},Kt=d(()=>e("img",{src:ke,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),qt={class:"my-auto col-span-2 text-center"},Jt={class:"text-3xl truncate text-dark-brown"},Qt={class:"block",style:{"font-size":"12px"}},Zt={class:"grid grid-cols-3 justify-center"},es=d(()=>e("img",{src:$e,alt:"projects_areas",class:"my-auto mx-auto"},null,-1)),ts={class:"my-auto col-span-2 text-center"},ss={class:"text-3xl truncate text-dark-brown"},os={class:"block text-sm",style:{"font-size":"12px"}},as={class:"grid grid-cols-3 justify-center"},ls=d(()=>e("img",{src:Se,alt:"projects_investment",class:"my-auto mx-auto"},null,-1)),ns={class:"my-auto col-span-2 text-center"},is={class:"text-3xl text-dark-brown"},rs={class:"block text-sm",style:{"font-size":"12px"}},ds=d(()=>e("img",{class:"w-[91%] left",src:Le,alt:"About Ladun"},null,-1)),cs={class:"rounded-2xl border-2 border-yellow-300 mt-20 bg-gray-100 w-3/4 h-14 mx-auto text-center font-light py-2 my-5",id:"form"},us={__name:"Home",setup(o){const r=u(!1),T=u(null),F=u(null),C=u(null),_=u(null),m=u(null),h=u(null),c=u({topOfPage:!0,latestProjectsSection:!0,aboutLadunSection:!0}),w=u(""),L=u([]),g={itemsToShow:1,snapAlign:"center"},W={700:{itemsToShow:2,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"center"}},X=u([]);var V=1;const P=u([]);D(()=>{window.addEventListener("scroll",q)});function K(){R.get("/api/projects/latest").then(t=>{console.log(t),X.value=t.data.data}).catch(t=>console.log(t)),R.get("/api/about").then(t=>{P.value=t.data[0]}).catch(t=>console.log(t))}K();const q=()=>{let t=document.getElementById("aboutSection"),$=document.getElementById("footerSection");scrollY>$.offsetTop-t.offsetTop+300&&V&&(V=0),window.pageYOffset>0?(c.value.topOfPage&&(c.value.topOfPage=!1),c.value.latestProjectsSection&&(c.value.latestProjectsSection=!1)):(c.value.topOfPage||(c.value.topOfPage=!0),c.value.latestProjectsSection||(c.value.latestProjectsSection=!0))};return D(async()=>{const t=await R.get("/api/settings");h.value=t.data.settings[0],console.log(h.value),window.addEventListener("scroll",function(){let p=document.getElementsByClassName("latest_project"),I=document.getElementById("latest_project_header"),j=this.document.getElementById("aboutLadunHeader"),b=document.getElementsByClassName("right"),v=document.getElementsByClassName("left");for(let l=0;l<b.length;l++)console.log(b[l].offsetTop),window.scrollY>=b[l].offsetTop-700&&(this.locale=="en"?b[l].classList.add("animate__animated","animate__fadeInLeft","animate__slow","animate__delay-2s"):b[l].classList.add("animate__animated","animate__fadeInRight","animate__slow","animate__delay-2s"));for(let l=0;l<v.length;l++)console.log(v[l].offsetTop),window.scrollY>=v[l].offsetTop-700&&(this.locale=="en",v[l].classList.add("animate__animated","animate__zoomIn","animate__slow","animate__delay-2s"));for(let l=0;l<p.length;l++)window.scrollY>=I.offsetTop-700&&(O.global.locale.value=="en"?p[l].classList.add("animate__animated","animate__fadeInLeft"):p[l].classList.add("animate__animated","animate__fadeInRight"));scrollY>footerSection.offsetTop-aboutSection.offsetTop+300&&(O.global.locale.value=="en"?j.classList.add("animate__animated","animate__fadeInLeft"):j.classList.add("animate__animated","animate__fadeInRight"))});const $=await R.get("/api/departments/latest/projects");L.value=$.data.data,w.value=L.value[0].title.en}),(t,$)=>{var j,b,v,l,E,G;const p=S("number"),I=J("scroll-to");return f(),y(z,null,[a(le,{class:A(["fixed z-30 w-full animate__animated animate__backInDown animate__slow",{"bg-black":!c.value.topOfPage}])},null,8,["class"]),e("header",Oe,[Ae,Ye,e("div",He,[Y((f(),y("button",Ue,[i(s(t.$t("shareYourInterests")),1)])),[[I,{el:"#form",offset:-128}]])])]),e("div",We,[Y((f(),y("a",Xe,[i(s(t.$t("scrollDown"))+" ",1),a(k(_e),{class:"h-6 w-6 text-white mx-auto my-1/2"})])),[[I,{el:"#project-latest",offset:-128}]])]),e("section",Ke,[e("div",qe,[e("h2",Je,s(t.$t("latestProjects")),1)]),e("div",Qe,[a(k(he),{variant:"underline",modelValue:w.value,"onUpdate:modelValue":$[0]||($[0]=M=>w.value=M)},{default:n(()=>[(f(!0),y(z,null,H(L.value,M=>(f(),N(k(fe),{name:M.title.en,title:M.title[t.$i18n.locale],class:"my-2"},{default:n(()=>[a(k(pe),Q(g,{autoplay:!1,"wrap-around":!0,breakpoints:W}),{addons:n(()=>[a(k(ge),null,{next:n(()=>[$t]),prev:n(()=>[St]),_:1})]),default:n(()=>[(f(!0),y(z,null,H(M.latest,x=>(f(),N(k(we),{key:x.id,class:""},{default:n(()=>[e("div",Ze,[x.attachment?(f(),y("img",{key:0,style:{border:"1px solid #d9d5d5",height:"80%px"},class:"w-full rounded-xl",src:x.attachment,alt:"Project Photo"},null,8,et)):B("",!0),e("div",tt,[e("div",st,[e("h3",ot,s(x.title[t.$i18n.locale]),1),e("div",at,[e("small",lt,s(),1),nt])])]),e("div",it,[e("p",{style:{"font-size":"14px"},class:"p-2 h-28 text-[#6e6e6e] ltr:text-start rtl:text-end",innerHTML:x.text[t.$i18n.locale].slice(0,200)},null,8,rt),e("div",dt,[e("div",ct,[e("div",ut,[e("p",_t,s(t.$t("unit")),1),e("small",mt,s(x.units_number),1)]),ft]),e("div",ht,[e("small",pt,s(x.Land_area)+" "+s(t.$t("areaUnit")),1),gt]),e("div",wt,[e("small",bt,s(t.$t("residentialLandPlots")),1),vt])]),e("div",xt,[e("button",{class:"bg-dark-brown text-white mx-4 rounded-2xl w-36 h-8",onClick:Z(_s=>t.$router.push({name:"Project",params:{id:x.id}}),["prevent"])},[e("small",kt,[a(k(me),{class:"inline-block h-6 w-6"}),i(" "+s(t.$t("exploreProject")),1)])],8,yt)])])])]),_:2},1024))),128))]),_:2},1040)]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])])]),e("section",Lt,[e("div",jt,[e("h2",{class:A([{"animate__animated animate__fadeInLeft animate__slow":!c.value.aboutLadunSection},"flex-initial w-64 text-black before:content-[''] before:m-0.5 before:w-16 before:h-1 before:inline-block before:left-0 before:bg-dark-brown before:rounded before:mx-3 font-bold text-3xl"]),id:"aboutLadunHeader"},s(t.$t("aboutLadun")),3)]),e("div",Mt,[e("div",Ct,[P.value.content?(f(),y("p",{key:0,class:"px-2 my-auto text-grey text-justify text-xl mb-7",innerHTML:P.value.content[t.$i18n.locale]},null,8,It)):B("",!0),e("div",Rt,[e("div",zt,[Pt,e("div",Nt,[e("strong",Bt,[i("+ "),a(p,{ref_key:"number1",ref:T,from:0,to:(j=h.value)==null?void 0:j.experience,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Tt,s(t.$t("experienceYears")),1)])]),e("div",Ft,[Vt,e("div",Et,[e("strong",Gt,[i("+ "),a(p,{ref_key:"number4",ref:_,from:0,to:(b=h.value)==null?void 0:b.developed_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Dt,s(t.$t("projectsUnits")),1),e("p",Ot,s(t.$t("waiting")),1)])]),e("div",At,[Yt,e("div",Ht,[e("strong",Ut,[i("+ "),a(p,{ref_key:"number3",ref:C,from:0,to:(v=h.value)==null?void 0:v.companies,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Wt,s(t.$t("affiliate")),1)])]),e("div",Xt,[Kt,e("div",qt,[e("strong",Jt,[i("+ "),a(p,{ref_key:"number5",ref:m,from:0,to:(l=h.value)==null?void 0:l.developed_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",Qt,s(t.$t("Investment_project")),1)])]),e("div",Zt,[es,e("div",ts,[e("strong",ss,[i("+ "),a(p,{ref_key:"number5",ref:m,from:0,to:(E=h.value)==null?void 0:E.developing_buildings,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",os,s(t.$t("unitsUnderProcess")),1)])]),e("div",as,[ls,e("div",ns,[e("strong",is,[i("+ "),a(p,{ref_key:"number2",ref:F,from:0,to:(G=h.value)==null?void 0:G.project,delay:3,duration:3,easing:"Power1.easeOut"},null,8,["to"])]),e("p",rs,s(t.$t("projectsInvestment")),1)])])])]),ds]),e("div",cs,s(t.$t("shareYourInterestWithUs")),1)]),a(De,{formShow:r.value},null,8,["formShow"]),a(ne,{id:"footerSection"})],64)}}},bs=U(us,[["__scopeId","data-v-27dd95b0"]]);export{bs as default};
