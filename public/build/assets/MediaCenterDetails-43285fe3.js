import{U as h,_ as b}from"./Navbar-e7b092f4.js";import{_ as g}from"./DarkFooter-fd80ac09.js";import{o as a,c as o,d as n,u as v,F as p,a as t,_ as x,h as k,r as c,m as r,t as w}from"./main-554386f2.js";const C=t("div",{class:"pt-[123px]"},null,-1),D={__name:"CarsoulWithPadding",setup(s){const i=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,l=new URL("/build/assets/real-state-management-banner-c1fa3f23.png",self.location).href,d=new URL("/build/assets/banner-mediaCenter-22a6b26f.png",self.location).href,e=new URL("/build/assets/real-managent-utility-section-6c40516b.png",self.location).href,u=[{src:i,alt:"Picture 1"},{src:e,alt:"Picture 4"},{src:l,alt:"Picture 2"},{src:d,alt:"Picture 3"}];return(_,m)=>(a(),o(p,null,[C,n(v(h),{pictures:u,class:"h-[calc(100vh-128px)] [&>div:first-child]:h-[calc(100vh-128px)] [&>div>div>img]:h-[calc(100vh-128px)] [&>div>button]:mx-2 [&>div>button]:w-10 [&>button>span]:group-focus:ring-black [&>button>span]:group-focus:ring-1"})],64))}},y={components:{Navbar:b,DarkFooter:g,Carsoul:D},data(){return{media:{},computedData:{}}},methods:{getData(){k.post(`/api/media-center/${this.$route.params.id}`).then(s=>{this.media=s.data.mediaCenter,console.log(this.media)})}},created(){this.getData()},computed:{comp(){return this.media[0]}}},L={class:"py-28"},N={class:"container mx-auto"},U={class:"flex flex-wrap"},$={class:"w-[20%]"},F=["src"],P={class:"w-[80%] ltr:pl-12 rtl:pr-12"},j={key:0},R=["innerHTML"];function B(s,i,l,d,e,u){const _=c("Navbar"),m=c("Carsoul"),f=c("DarkFooter");return a(),o(p,null,[n(_,{class:"bg-black fixed z-50 w-full"}),n(m),t("section",L,[t("div",N,[t("div",U,[t("div",$,[e.media[0].media?(a(),o("img",{key:0,class:"rounded-xl w-full",src:e.media[0].media[0].original_url,alt:""},null,8,F)):r("",!0)]),t("div",P,[e.media[0].title?(a(),o("h1",j,w(e.media[0].title[s.$i18n.locale]),1)):r("",!0),e.media[0].title?(a(),o("p",{key:1,innerHTML:e.media[0].content[s.$i18n.locale]},null,8,R)):r("",!0)])])])]),n(f)],64)}const T=x(y,[["render",B]]);export{T as default};
