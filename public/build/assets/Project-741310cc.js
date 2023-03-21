import{A as pe,x as v,r as f,v as x,G as H,B as De,I as $e,D as Ee,z as ue,C as de,s as Le,E as N,c as u,l as me,h as R,e as A,u as K,d as p,k as Y,f as e,F as V,_ as Be,bx as Oe,N as D,b as ze,n as Pe,j as I,t as l,w as P,g as $}from"./main-f2dcfc18.js";import{u as Ve,N as Re,U as Ue,b as Fe,L as Ye}from"./flowbite-vue-b208daaf.js";import{M as He,A as Xe}from"./index-14a78e38.js";import{_ as We}from"./Navbar-505c7c56.js";import{L as Ge}from"./LightFooter-9146336d.js";/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const w={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Te={itemsToShow:{default:w.itemsToShow,type:Number},itemsToScroll:{default:w.itemsToScroll,type:Number},wrapAround:{default:w.wrapAround,type:Boolean},throttle:{default:w.throttle,type:Number},snapAlign:{default:w.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:w.transition,type:Number},breakpoints:{default:w.breakpoints,type:Object},autoplay:{default:w.autoplay,type:Number},pauseAutoplayOnHover:{default:w.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:w.mouseDrag,type:Boolean},touchDrag:{default:w.touchDrag,type:Boolean},dir:{default:w.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function qe({config:t,slidesCount:s}){const{snapAlign:a,wrapAround:r,itemsToShow:o=1}=t;if(r)return Math.max(s-1,0);let i;switch(a){case"start":i=s-o;break;case"end":i=s-1;break;case"center":case"center-odd":i=s-Math.ceil((o-.5)/2);break;case"center-even":i=s-Math.ceil(o/2);break;default:i=0;break}return Math.max(i,0)}function Je({config:t,slidesCount:s}){const{wrapAround:a,snapAlign:r,itemsToShow:o=1}=t;let i=0;if(a||o>s)return i;switch(r){case"start":i=0;break;case"end":i=o-1;break;case"center":case"center-odd":i=Math.floor((o-1)/2);break;case"center-even":i=Math.floor((o-2)/2);break;default:i=0;break}return i}function fe({val:t,max:s,min:a}){return s<a?t:Math.min(Math.max(t,a),s)}function Ke({config:t,currentSlide:s,slidesCount:a}){const{snapAlign:r,wrapAround:o,itemsToShow:i=1}=t;let m=s;switch(r){case"center":case"center-odd":m-=(i-1)/2;break;case"center-even":m-=(i-2)/2;break;case"end":m-=i-1;break}return o?m:fe({val:m,max:a-i,min:0})}function Qe(t){var s,a,r,o;return t?((s=t[0])===null||s===void 0?void 0:s.children)==="v-if"||((r=(a=t[0])===null||a===void 0?void 0:a.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?t.filter(i=>{var m;return((m=i.type)===null||m===void 0?void 0:m.name)==="CarouselSlide"}):((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Q({val:t,max:s,min:a=0}){return t>s?Q({val:t-(s+1),max:s,min:a}):t<a?Q({val:t+(s+1),max:s,min:a}):t}function Ze(t,s){let a;return s?function(...r){const o=this;a||(t.apply(o,r),a=!0,setTimeout(()=>a=!1,s))}:t}function et(t,s){let a;return function(...r){a&&clearTimeout(a),a=setTimeout(()=>{t(...r),a=null},s)}}var tt=pe({name:"ARIA",setup(){const t=v("currentSlide",f(0)),s=v("slidesCount",f(0));return()=>x("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${t.value+1} of ${s.value}`)}}),ot=pe({name:"Carousel",props:Te,setup(t,{slots:s,emit:a,expose:r}){var o;const i=f(null),m=f([]),y=f(0),g=f(0);let j=f({}),L=Object.assign({},w);const c=H(Object.assign({},L)),d=f((o=t.modelValue)!==null&&o!==void 0?o:0),C=f(0),O=f(0),k=f(0),_=f(0);let T,Z;N("config",c),N("slidesCount",g),N("currentSlide",d),N("maxSlide",k),N("minSlide",_),N("slideWidth",y);function ee(){const n=Object.assign(Object.assign({},t),t.settings);j=f(Object.assign({},n.breakpoints)),L=Object.assign(Object.assign({},n),{settings:void 0,breakpoints:void 0}),ge(L)}function X(){const n=Object.keys(j.value).map(b=>Number(b)).sort((b,M)=>+M-+b);let h=Object.assign({},L);n.some(b=>window.matchMedia(`(min-width: ${b}px)`).matches?(h=Object.assign(Object.assign({},h),j.value[b]),!0):!1),ge(h)}function ge(n){Object.entries(n).forEach(([h,b])=>c[h]=b)}const he=et(()=>{Object.keys(j.value).length&&(X(),U()),W()},16);function W(){if(!i.value)return;const n=i.value.getBoundingClientRect();y.value=n.width/c.itemsToShow}function U(){g.value<=0||(O.value=Math.ceil((g.value-1)/2),k.value=qe({config:c,slidesCount:g.value}),_.value=Je({config:c,slidesCount:g.value}),c.wrapAround||(d.value=fe({val:d.value,max:k.value,min:_.value})))}De(()=>{Object.keys(j.value).length&&X(),$e(()=>{U(),W(),Me(),a("init")}),xe(),window.addEventListener("resize",he,{passive:!0})}),Ee(()=>{Z&&clearTimeout(Z),T&&clearInterval(T),window.removeEventListener("resize",he,{passive:!0})});let S=!1;const G={x:0,y:0},q={x:0,y:0},E=H({x:0,y:0}),te=f(!1),Ae=()=>{te.value=!0},Ce=()=>{te.value=!1};function be(n){["INPUT","TEXTAREA"].includes(n.target.tagName)||(S=n.type==="touchstart",!(!S&&n.button!==0||z.value)&&(S||n.preventDefault(),G.x=S?n.touches[0].clientX:n.clientX,G.y=S?n.touches[0].clientY:n.clientY,document.addEventListener(S?"touchmove":"mousemove",oe,!0),document.addEventListener(S?"touchend":"mouseup",ve,!0)))}let oe=()=>{};function Me(){var n;oe=Ze(h=>{q.x=S?h.touches[0].clientX:h.clientX,q.y=S?h.touches[0].clientY:h.clientY;const b=q.x-G.x,M=q.y-G.y;E.y=M,E.x=b},(n=c.throttle)!==null&&n!==void 0?n:16)}function ve(){const n=c.dir==="rtl"?-1:1,h=Math.sign(E.x)*.4,b=Math.round(E.x/y.value+h)*n;if(b&&!S){const M=le=>{le.stopPropagation(),window.removeEventListener("click",M,!0)};window.addEventListener("click",M,!0)}B(d.value-b),E.x=0,E.y=0,document.removeEventListener(S?"touchmove":"mousemove",oe,!0),document.removeEventListener(S?"touchend":"mouseup",ve,!0)}function xe(){!c.autoplay||c.autoplay<=0||(T=setInterval(()=>{c.pauseAutoplayOnHover&&te.value||J()},c.autoplay))}function we(){T&&(clearInterval(T),T=null),xe()}const z=f(!1);function B(n){const h=c.wrapAround?n:fe({val:n,max:k.value,min:_.value});d.value===h||z.value||(a("slide-start",{slidingToIndex:n,currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:g.value}),z.value=!0,C.value=d.value,d.value=h,Z=setTimeout(()=>{if(c.wrapAround){const b=Q({val:h,max:k.value,min:0});b!==d.value&&(d.value=b,a("loop",{currentSlideIndex:d.value,slidingToIndex:n}))}a("update:modelValue",d.value),a("slide-end",{currentSlideIndex:d.value,prevSlideIndex:C.value,slidesCount:g.value}),z.value=!1,we()},c.transition))}function J(){B(d.value+c.itemsToScroll)}function se(){B(d.value-c.itemsToScroll)}const ye={slideTo:B,next:J,prev:se};N("nav",ye),N("isSliding",z);const ke=ue(()=>Ke({config:c,currentSlide:d.value,slidesCount:g.value}));N("slidesToScroll",ke);const Ne=ue(()=>{const n=c.dir==="rtl"?-1:1,h=ke.value*y.value*n;return{transform:`translateX(${E.x-h}px)`,transition:`${z.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${g.value*y.value}px`:"",width:"100%"}});function je(){ee(),X(),U(),W(),we()}Object.keys(Te).forEach(n=>{["modelValue"].includes(n)||de(()=>t[n],je)}),de(()=>t.modelValue,n=>{n!==d.value&&B(Number(n))}),de(g,U),ee();const Se={config:c,slidesCount:g,slideWidth:y,next:J,prev:se,slideTo:B,currentSlide:d,maxSlide:k,minSlide:_,middleSlide:O};r({updateBreakpointsConfigs:X,updateSlidesData:U,updateSlideWidth:W,initDefaultConfigs:ee,restartCarousel:je,slideTo:B,next:J,prev:se,nav:ye,data:Se});const ae=s.default||s.slides,ne=s.addons,Ie=H(Se);return()=>{const n=Qe(ae==null?void 0:ae(Ie)),h=(ne==null?void 0:ne(Ie))||[];n.forEach((ie,re)=>ie.props.index=re);let b=n;if(c.wrapAround){const ie=n.map((ce,F)=>Le(ce,{index:-n.length+F,isClone:!0,key:`clone-before-${F}`})),re=n.map((ce,F)=>Le(ce,{index:n.length+F,isClone:!0,key:`clone-after-${F}`}));b=[...ie,...n,...re]}m.value=n,g.value=Math.max(n.length,1);const M=x("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:c.mouseDrag?be:null,onTouchstartPassiveCapture:c.touchDrag?be:null},b),le=x("div",{class:"carousel__viewport"},M);return x("section",{ref:i,class:{carousel:!0,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Ae,onMouseleave:Ce},[le,h,x(tt)])}}});const st={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},_e=t=>{const s=t.name;if(!s||typeof s!="string")return;const a=st[s],r=x("path",{d:a}),o=t.title||s,i=x("title",o);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[i,r])};_e.props={name:String,title:String};const at=(t,{slots:s,attrs:a})=>{const{next:r,prev:o}=s||{},i=v("config",H(Object.assign({},w))),m=v("maxSlide",f(1)),y=v("minSlide",f(1)),g=v("currentSlide",f(1)),j=v("nav",{}),{dir:L,wrapAround:c}=i,d=L==="rtl",C=x("button",{type:"button",class:["carousel__prev",!c&&g.value<=y.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:j.prev},(o==null?void 0:o())||x(_e,{name:d?"arrowRight":"arrowLeft"})),O=x("button",{type:"button",class:["carousel__next",!c&&g.value>=m.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:j.next},(r==null?void 0:r())||x(_e,{name:d?"arrowLeft":"arrowRight"}));return[C,O]},nt=()=>{const t=v("maxSlide",f(1)),s=v("minSlide",f(1)),a=v("currentSlide",f(1)),r=v("nav",{}),o=m=>Q({val:a.value,max:t.value,min:0})===m,i=[];for(let m=s.value;m<t.value+1;m++){const y=x("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(m)},"aria-label":`Navigate to slide ${m+1}`,onClick:()=>r.slideTo(m)}),g=x("li",{class:"carousel__pagination-item",key:m},y);i.push(g)}return x("ol",{class:"carousel__pagination"},i)};var lt=pe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:s}){const a=v("config",H(Object.assign({},w))),r=v("currentSlide",f(0)),o=v("slidesToScroll",f(0)),i=v("slideWidth",f(0)),m=v("isSliding",f(!1)),y=ue(()=>({width:i.value?`${i.value}px`:"100%"})),g=()=>t.index===r.value,j=()=>t.index===r.value-1,L=()=>t.index===r.value+1,c=()=>{const d=Math.floor(o.value),C=Math.ceil(o.value+a.itemsToShow-1);return t.index>=d&&t.index<=C};return()=>{var d;return x("li",{style:y.value,class:{carousel__slide:!0,"carousel_slide--clone":t.isClone,"carousel__slide--visible":c(),"carousel__slide--active":g(),"carousel__slide--prev":j(),"carousel__slide--next":L(),"carousel__slide--sliding":m.value},"aria-hidden":!c()},(d=s.default)===null||d===void 0?void 0:d.call(s))}}});const it=["src","alt"],rt={__name:"VueCarousel",props:{items:{type:Object},msg:{type:String}},setup(t){return(s,a)=>(u(),me(K(ot),{"items-to-show":2},{addons:R(()=>[A(K(at)),A(K(nt))]),default:R(()=>[(u(!0),p(V,null,Y(t.items,(r,o)=>(u(),me(K(lt),{key:o},{default:R(()=>[e("img",{src:r.src,alt:r.alt,class:"h-[350px] w-[500px]"},null,8,it)]),_:2},1024))),128))]),_:1}))}},ct="/build/assets/real-state-management-banner-c1fa3f23.png",dt="/build/assets/icon-area-60f42131.png",ut="/build/assets/area-svgrepo-com-c4149577.png",mt="/build/assets/buildings-icon-b96f01bd.png",ft="/build/assets/pyramid-icon-957c5eb9.png",_t="/build/assets/video-real-state-management-2fee55ce.png",pt={components:{Input:Ve,Dropdown:Re,LightFooter:Ge,MapPinIcon:He,Navbar:We,VueCarousel:rt,Carousel:Ue,ArrowDownTrayIcon:Xe,Tabs:Fe,Tab:Ye,useRoute:Oe},data(){return{activeTab:"",URL:"",route:"",project:{},top:1}},methods:{getGallery(t){return t?Object.values(t).map(s=>({src:s.original_url,alt:s.name})):[]}},computed:{locale(){return this.$i18n.locale}},beforeMount(){axios.get(`/api/projects/${this.$route.params.id}`).then(t=>{this.project=t.data.data,this.activeTab=this.project.project_models[0].title.en,console.log(t.data.data)}).catch(t=>console.log(t))},mounted(){window.addEventListener("scroll",function(){let t=document.getElementsByClassName("utility-group");if(document.getElementById("logo-project"),window.scrollY==0){this.top=1,document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.remove("animate__animated","animate__backInDown");document.getElementById("logo-project").classList.add("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.add("animate__animated","animate__backInDown")}else{this.top=0,document.getElementById("logo-project").classList.remove("animate__animated","animate__backInDown");for(let o=0;o<t.length;o++)t[o].classList.remove("animate__animated","animate__backInDown")}let s=document.getElementById("carsoul-project");window.scrollY>=s.offsetTop-1e3?s.classList.add("animate__animated","animate__backInUp"):s.classList.remove("animate__animated","animate__backInUp");let a=document.getElementsByClassName("right"),r=document.getElementsByClassName("left");for(let o=0;o<a.length;o++)window.scrollY>=a[o].offsetTop-550?this.locale=="en"?(a[o].classList.add("animate__animated","animate__fadeInLeft"),r[o].classList.add("animate__animated","animate__fadeInRight")):(a[o].classList.add("animate__animated","animate__fadeInRight"),r[o].classList.add("animate__animated","animate__fadeInLeft")):this.locale=="en"?(a[o].classList.remove("animate__animated","animate__fadeInLeft"),r[o].classList.remove("animate__animated","animate__fadeInRight")):(a[o].classList.remove("animate__animated","animate__fadeInRight"),r[o].classList.remove("animate__animated","animate__fadeInLeft"))}.bind(this))}},gt={class:"relative img-banner-slot h-[50vh] md:h-auto"},ht=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),bt=e("img",{class:"h-[50vh] md:h-auto",src:ct},null,-1),vt={class:"z-40 text-white absolute top-40 md:top-60 -translate-y-1/2 text-justify"},xt={class:"flex md:mx-20 mx-5"},wt=["src"],yt={key:1,class:"my-auto mx-3 animate__animated animate__backInDown"},kt={class:"genaral-info bg-background-overlay"},jt={class:"container mx-auto"},St={class:"grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-16 text-white p-10"},It={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Lt=e("img",{class:"w-auto mx-auto",src:dt},null,-1),Tt={class:"my-auto mx-auto"},At={class:"font-bold"},Ct={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Mt=e("img",{class:"w-auto mx-auto",src:ut},null,-1),Nt={class:"my-auto mx-auto"},Dt={class:"font-bold"},$t={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Et=e("img",{class:"w-auto mx-auto",src:mt},null,-1),Bt={class:"my-auto mx-auto"},Ot={class:"font-bold"},zt={class:"grid grid-cols-1 gap-2 md:gap-1 w-56 mx-auto utility-group animate__animated animate__backInDown"},Pt=e("img",{class:"w-auto mx-auto",src:ft},null,-1),Vt={class:"my-auto mx-auto"},Rt={class:"font-bold"},Ut={class:"bg-white drop-shadow-md"},Ft={class:"container mx-auto"},Yt={class:"py-10 w-full lg:w-[60%]"},Ht={class:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto items-center"},Xt={class:"mx-auto font-bold mb-3 md:mb-0"},Wt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},Gt={class:"mx-auto font-bold mb-3 md:mb-0"},qt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},Jt={class:"mx-auto font-bold mb-3 md:mb-0"},Kt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},Qt={class:"mx-auto font-bold mb-3 md:mb-0"},Zt={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},eo={class:"mx-auto font-bold mb-3 md:mb-0"},to={class:"relative inline-block after:content-[''] after:absolute after:w-full after:h-[4px] after:rounded-lg after:bg-black after:-bottom-1 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition after:ease-linear after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100",href:"#"},oo={class:"mx-auto font-bold button bg-light-brown text-white w-full text-center py-2",href:"#"},so={class:"company-info py-28 bg-background-section",id:"project"},ao={class:"container mx-auto"},no={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"},lo={class:"d-info h-full flex flex-col justify-center right"},io={key:0,class:"text-2xl mb-6 font-extrabold"},ro=["innerHTML"],co={class:"img-company-info left",id:"project_img"},uo=["src"],mo={class:"py-12 pb-16"},fo={class:"container mx-auto"},_o={class:"flex lg:flex-row flex-col"},po={class:"lg:w-[20%] flex items-center mb-5 lg:mb-0 text-center lg:text-start w-[100%] justify-center lg:justify-start"},go={class:"text-dark-brown text-4xl"},ho={class:"flex flex-row-reverse w-[80%]",id:"carsoul-project"},bo={class:"w-[90%]"},vo={id:"utilities",class:"relative bg-real-state-managemnt-utility-section bg-cover pt-40 pb-16 text-white flex items-center"},xo=e("div",{class:"overlay absolute top-0 right-0 w-full h-full bg-background-overlay z-20"},null,-1),wo={class:"z-40 container mx-auto"},yo={class:"mb-5 text-light-brown text-3xl"},ko={class:"mb-10 text-lg"},jo={class:"flex flex-wrap"},So={class:"p-7 rounded-full bg-white z-20 mb-2"},Io=["src"],Lo={class:"text-sm"},To={class:"company-info py-20 bg-background-section",id:"downloads"},Ao={class:"container mx-auto"},Co={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Mo={class:"d-info h-full flex flex-col justify-center right"},No={class:"text-3xl text-light-brown mb-6"},Do={class:"mb-20 text-lg text-justify"},$o={class:"company-button"},Eo={key:0,class:"flex flex-wrap justify-between"},Bo={class:"w-1/2 mb-5"},Oo=["href"],zo=e("div",{class:"left"},[e("img",{src:_t})],-1),Po={class:"company-info py-28 pt-16 bg-background-section",id:"project_models"},Vo={class:"container mx-auto"},Ro={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},Uo={class:"d-info h-full flex flex-col justify-center right"},Fo={class:"font-bold text-2xl mb-4 text-center md:text-start"},Yo={class:"text mb-5"},Ho={class:"mb-3"},Xo={class:"mb-3"},Wo={class:"mb-3"},Go={class:"flex flex-wrap"},qo={class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[96px]"},Jo={class:"p-7 rounded-full border-2 bg-white z-20 mb-2"},Ko=["src"],Qo={class:"text-sm whitespace-nowrap"},Zo={class:"img-company-info left"},es={class:"company-info py-28 bg-background-section",id:"location"},ts={class:"container mx-auto"},os={class:"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10"},ss={class:"d-info h-full flex flex-col justify-center right"},as={class:"font-bold text-xl mb-4 text-center md:text-start"},ns={key:0,class:"mb-12 text-lg text-dark-brown"},ls={key:1,class:"flex"},is=e("div",{class:"img-company-info left"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8622.087051923865!2d46.67816517503699!3d24.68767766179772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f034b4ad55d0b%3A0x9724c2fb9fb4fce6!2sLadun%20Investment!5e0!3m2!1sen!2seg!4v1679391697436!5m2!1sen!2seg",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),rs={class:"text-center py-28",id:"ask_us"},cs={class:"container mx-auto"},ds={class:"mb-5"},us={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5 w-"},ms={class:"flex-auto md:w-1/2"},fs={class:"bg-black rounded-lg mb-14"},_s={class:"text-dark-brown py-10 px-5 text-sm"},ps={class:"grid gap-y-10 mx-5"},gs={class:"flex justify-center gap-x-5"},hs={class:"flex justify-between px-4 text-white w-full"},bs=e("svg",{class:"my-auto w-4 h-4 ltr:ml-14 rtl:mr-14","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1),vs=["placeholder"],xs={class:"flex justify-center gap-x-5"},ws=["placeholder"],ys=["placeholder"],ks={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},js={dir:""},Ss={href:"#",class:"text-dark-brown"};function Is(t,s,a,r,o,i){const m=D("Navbar"),y=D("vue-carousel"),g=D("ArrowDownTrayIcon"),j=D("tab"),L=D("tabs"),c=D("Carousel"),d=D("MapPinIcon"),C=D("dropdown"),O=D("LightFooter"),k=ze("scroll-to");return u(),p(V,null,[A(m,{class:Pe(["fixed z-50 w-full",{"bg-black":!o.top}])},null,8,["class"]),e("div",gt,[ht,bt,e("div",vt,[e("div",xt,[o.project.logo?(u(),p("img",{key:0,class:"w-[30%] animate__animated animate__backInDown",id:"logo-project",src:o.project.logo.original_url},null,8,wt)):I("",!0),o.project.title?(u(),p("h2",yt,l(o.project.title[t.$i18n.locale]),1)):I("",!0)])])]),e("section",kt,[e("div",jt,[e("div",St,[e("div",It,[Lt,e("div",Tt,[e("p",null,l(t.$t("areaOfLand")),1),e("p",At,l(o.project.land_area)+" m2",1)])]),e("div",Ct,[Mt,e("div",Nt,[e("p",null,l(t.$t("Building_Area")),1),e("p",Dt,l(o.project.building_area)+" m2",1)])]),e("div",$t,[Et,e("div",Bt,[e("p",null,l(t.$t("Floors_Number")),1),e("p",Ot,l(o.project.units_number),1)])]),e("div",zt,[Pt,e("div",Vt,[e("p",null,l(t.$t("Units_Number")),1),e("p",Rt,l(o.project.models_number),1)])])])])]),e("section",Ut,[e("div",Ft,[e("div",Yt,[e("div",Ht,[e("div",Xt,[P((u(),p("a",Wt,[$(l(t.$t("project")),1)])),[[k,{el:"#project",offset:-128}]])]),e("div",Gt,[P((u(),p("a",qt,[$(l(t.$t("utilities")),1)])),[[k,{el:"#utilities",offset:-128}]])]),e("div",Jt,[P((u(),p("a",Kt,[$(l(t.$t("downloads")),1)])),[[k,{el:"#downloads",offset:-128}]])]),e("div",Qt,[P((u(),p("a",Zt,[$(l(t.$t("projectModels")),1)])),[[k,{el:"#project_models",offset:-128}]])]),e("div",eo,[P((u(),p("a",to,[$(l(t.$t("location")),1)])),[[k,{el:"#location",offset:-128}]])]),P((u(),p("a",oo,[$(l(t.$t("askUs")),1)])),[[k,{el:"#ask_us",offset:-128}]])])])])]),e("section",so,[e("div",ao,[e("div",no,[e("div",lo,[o.project.title?(u(),p("h1",io,l(o.project.title[t.$i18n.locale]),1)):I("",!0),o.project.text?(u(),p("p",{key:1,class:"mb-12 text-lg text-justify",innerHTML:o.project.text[t.$i18n.locale]},null,8,ro)):I("",!0)]),e("div",co,[e("img",{class:"w-full max-h-[430px]",src:o.project.attachment,alt:""},null,8,uo)])])])]),e("section",mo,[e("div",fo,[e("div",_o,[e("div",po,[e("p",go,l(t.$t("gallary_project")),1)]),e("div",ho,[e("div",bo,[A(y,{items:i.getGallery(o.project.gallery)},null,8,["items"])])])])])]),e("section",vo,[xo,e("div",wo,[e("h2",yo,l(t.$t("high_level_utility")),1),e("p",ko,l(t.$t("high_level_utility_p")),1),e("div",jo,[o.project.utilities?(u(!0),p(V,{key:0},Y(o.project.utilities,_=>(u(),p("div",{key:_.id,class:"ltr:mr-14 rtl:ml-14 flex flex-wrap flex-col items-center justify-center w-[90px]"},[e("div",So,[_.image?(u(),p("img",{key:0,src:_.image.original_url,class:"w-[35px] h-[35px] z-40",alt:""},null,8,Io)):I("",!0)]),e("p",Lo,l(_.title[t.$i18n.locale]),1)]))),128)):I("",!0)])])]),e("section",To,[e("div",Ao,[e("div",Co,[e("div",Mo,[e("h1",No,l(t.$t("Download_Project_Files")),1),e("p",Do,l(t.$t("Download_Project_Files_p")),1),e("div",$o,[o.project.downloads?(u(),p("div",Eo,[(u(!0),p(V,null,Y(o.project.downloads,_=>(u(),p("div",Bo,[e("a",{href:`/storage/${_.project_attachment}`,target:"_blank",class:"hover:bg-green-400 hover:cursor-pointer special-button text-xl button bg-dark-brown rounded-lg flex items-center text-white px-2 py-2 my-5 mb-14 ml-4 rtl:mr-4"},[A(g,{class:"text-white w-6 h-6 rtl:ml-6 ltr:mr-6"}),$(" "+l(_.name[t.$i18n.locale]),1)],8,Oo)]))),256))])):I("",!0)])]),zo])])]),e("section",Po,[e("div",Vo,[e("div",Ro,[e("div",Uo,[e("h1",Fo,l(t.$t("Project_Models")),1),A(L,{variant:"underline",modelValue:o.activeTab,"onUpdate:modelValue":s[0]||(s[0]=_=>o.activeTab=_),class:"p-5 text-lg"},{default:R(()=>[(u(!0),p(V,null,Y(o.project.project_models,_=>(u(),me(j,{name:_.title.en,title:_.title[t.$i18n.locale],class:"text-lg"},{default:R(()=>[e("div",Yo,[e("p",Ho,l(t.$t("Land_Area"))+": "+l(_.Land_area),1),e("p",Xo,l(t.$t("Building_Area"))+": "+l(_.building_area),1),e("p",Wo,l(t.$t("Floors_Number"))+": "+l(_.floors_number),1),e("p",null,l(t.$t("Units_Number"))+": "+l(_.units_number),1)]),e("div",Go,[_.utilities?(u(!0),p(V,{key:0},Y(_.utilities,T=>(u(),p("div",qo,[e("div",Jo,[T.media[0]?(u(),p("img",{key:0,src:T.media[0].original_url,class:"w-[35px] h-[35px] z-40"},null,8,Ko)):I("",!0)]),e("p",Qo,l(T.title[t.$i18n.locale]),1)]))),256)):I("",!0)])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]),e("div",Zo,[A(c,{pictures:i.getGallery(o.project.gallery),class:"about-us-carousel h-[400px] [&>div:first-child]:h-[400px] [&>div>div>img]:h-[400px] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"},null,8,["pictures"])])])])]),e("section",es,[e("div",ts,[e("div",os,[e("div",ss,[e("h1",as,l(t.$t("Location")),1),o.project.location?(u(),p("p",ns,l(o.project.location.city[t.$i18n.locale]),1)):I("",!0),o.project.location.address?(u(),p("p",ls,[A(d,{class:"w-6 h-6 text-black"}),$(" "+l(o.project.location.address[t.$i18n.locale]),1)])):I("",!0)]),is])])]),e("section",rs,[e("div",cs,[e("h2",ds,l(t.$t("inquiriesNotes")),1),e("p",null,l(t.$t("forAllInquiries")),1),e("p",null,l(t.$t("outsideSaudia")),1),e("div",us,[e("div",ms,[e("div",fs,[e("div",_s,l(t.$t("pleaseFill")),1),e("form",ps,[e("div",gs,[A(C,{text:"Bottom",class:"hover:cursor-pointer rounded-lg [&>div]:w-full w-1/2 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-50 dark:bg-brown-600 dark:hover:bg-brown-700 dark:focus:ring-dark-brown-800 bg-dark-brown"},{trigger:R(()=>[e("div",hs,[e("div",null,l(t.$t("chooseYourInquiry")),1),bs])]),_:1}),e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,vs)]),e("div",xs,[e("input",{type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,ws),e("input",{type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,ys)]),e("button",ks,l(t.$t("sendNow")),1)])])])]),e("p",js,[$(l(t.$t("ifYouFaceAProplem")),1),e("a",Ss,l(t.$t("sendUsNow")),1)])])]),A(O)],64)}const Ns=Be(pt,[["render",Is]]);export{Ns as default};
