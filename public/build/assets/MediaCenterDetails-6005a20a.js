import{_ as h}from"./Navbar-1923c0d1.js";import{_ as b}from"./DarkFooter-bd282f72.js";import{U as g}from"./flowbite-vue-0fc12d6b.js";import{o as a,c as o,d as n,u as x,F as _,a as t,_ as v,h as w,r,l as c,t as k}from"./main-3db66770.js";const C=t("div",{class:"pt-[123px]"},null,-1),D={__name:"CarsoulWithPadding",setup(s){const i=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,l=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,e=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,m=[{src:i,alt:"Picture 1"},{src:e,alt:"Picture 4"},{src:l,alt:"Picture 2"},{src:d,alt:"Picture 3"}];return(u,p)=>(a(),o(_,null,[C,n(x(g),{pictures:m,class:"h-[calc(100vh-128px)] [&>div:first-child]:h-[calc(100vh-128px)] [&>div>div>img]:h-[calc(100vh-128px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"})],64))}},y={components:{Navbar:h,DarkFooter:b,Carsoul:D},data(){return{media:{},computedData:{}}},methods:{getData(){w.post(`/api/media-center/${this.$route.params.id}`).then(s=>{this.media=s.data.mediaCenter,console.log(this.media)})}},created(){this.getData()},computed:{comp(){return this.media[0]}}},L={class:"py-28"},N={class:"container mx-auto"},U={class:"flex flex-wrap flex-col lg:flex-row"},$={class:"lg:w-[30%] w-[100%] mb-10 lg:mb-0"},j=["src"],F={class:"lg:w-[70%] w-[100%] ltr:pl-12 rtl:pr-12"},P={key:0,class:"font-bold text-dark-brown mb-5"},R=["innerHTML"];function B(s,i,l,d,e,m){const u=r("Navbar"),p=r("Carsoul"),f=r("DarkFooter");return a(),o(_,null,[n(u,{class:"bg-black fixed z-50 w-full"}),n(p),t("section",L,[t("div",N,[t("div",U,[t("div",$,[e.media[0].media?(a(),o("img",{key:0,class:"rounded-xl w-full",src:e.media[0].media[0].original_url,alt:""},null,8,j)):c("",!0)]),t("div",F,[e.media[0].title?(a(),o("h1",P,k(e.media[0].title[s.$i18n.locale]),1)):c("",!0),e.media[0].title?(a(),o("p",{key:1,innerHTML:e.media[0].content[s.$i18n.locale],class:"text-justify text-lg"},null,8,R)):c("",!0)])])])]),n(f)],64)}const z=v(y,[["render",B]]);export{z as default};
