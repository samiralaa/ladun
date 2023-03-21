import{_ as h}from"./Navbar-5ab4aef0.js";import{L as k}from"./LightFooter-fb4450c2.js";import{u as x}from"./flowbite-vue-e7f55102.js";import{_ as w,N as p,c as n,d,e as _,f as e,t as r,n as b,m as y,w as l,bl as i,j as c,g as u,F as v,ac as j}from"./main-7d3fddf2.js";const N="/build/assets/location-c3b0b474.png",V="/build/assets/phone-d8906e81.png",L="/build/assets/email-21860ff5.png",I="/build/assets/map-b128fce8.png",U="/build/assets/facebook-be4c08e6.svg",F="/build/assets/instagram-3ca67b19.svg",C="/build/assets/twitter-a9319b75.svg",S={components:{Navbar:h,LightFooter:k,Input:x},data(){return{contact:{name:"",email:"",phone:"",subject:"",content:""},error:{name:"",email:"",phone:"",subject:"",content:""}}},methods:{submit(){axios.post("/api/contact",this.contact).then(t=>{}).catch(t=>{this.error=t.response.data.errors})}}},B={class:"container mx-auto"},R={class:"pt-36 px-5 mx-5 mb-5 font-bold"},T={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},z={class:"flex-auto md:w-1/2"},D={class:"bg-black rounded-lg mb-14"},M={class:"text-dark-brown py-10 px-5 text-sm"},A={class:"flex justify-center gap-x-5"},E=["placeholder"],K={key:0,class:"text-red-500"},q=["placeholder"],G={key:1,class:"text-red-500"},H={class:"flex justify-center gap-x-5"},J=["placeholder"],O={key:0,class:"text-red-500"},P=["placeholder"],Q={key:1,class:"text-red-500"},W=["placeholder"],X={key:0,class:"text-red-500"},Y={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},Z={class:"flex flex-row justify-start gap-x-5"},$=e("img",{class:"h-16",src:N},null,-1),ee={class:"my-auto"},te={class:"flex flex-row justify-start gap-x-5"},oe=e("img",{class:"h-16",src:V},null,-1),re={class:"flex flex-col"},se={class:"flex flex-col md:flex md:flex-row my-auto gap-x-2"},ae={class:"font-bold inline"},ne=e("span",null,": 920011560 ",-1),de={class:"font-bold inline"},le=e("span",null," : 1555",-1),ie={class:"my-auto"},ce={class:"font-bold inline"},be=e("span",null," : 4888567 - 011",-1),me={class:"flex flex-row justify-start gap-x-5"},pe=e("img",{class:"h-16",src:L},null,-1),_e={class:"my-auto flex flex-row"},ue={class:"font-bold"},ge=e("span",null," : investor@ladun.com",-1),fe={class:"w-full md:w-1/2 mx-2 mb-5"},he={class:"mt-10 text-center"},ke=j('<div class="flex justify-between px-10 mt-10"><a href="https://www.facebook.com/Ladun.KSA" target="_blank"><img class="h-10" src="'+U+'" alt="facebook icon"></a><a href="https://www.instagram.com/ladun_sa/" target="_blank"><img class="h-10" src="'+F+'" alt="instagram icon"></a><a href="https://twitter.com/Ladun_sa" target="_blank"><img class="h-10" src="'+C+'" alt="twitter icon"></a></div>',1);function xe(t,s,we,ye,o,m){const g=p("Navbar"),f=p("LightFooter");return n(),d(v,null,[_(g,{class:"bg-black fixed z-50 w-full"}),e("div",B,[e("h1",R,r(t.$t("contactUs")),1),e("div",T,[e("div",z,[e("div",D,[e("div",M,r(t.$t("beInTouch")),1),e("form",{class:b(["grid gap-y-10 mx-5",t.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"]),onSubmit:s[5]||(s[5]=y((...a)=>m.submit&&m.submit(...a),["prevent"]))},[e("div",A,[l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>o.contact.name=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("fullName")},null,8,E),[[i,o.contact.name]]),o.error.name?(n(),d("div",K,r(o.error.name[0]),1)):c("",!0),l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.contact.email=a),type:"email",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("email")},null,8,q),[[i,o.contact.email]]),o.error.email?(n(),d("div",G,r(o.error.email[0]),1)):c("",!0)]),e("div",H,[l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>o.contact.phone=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("mobile")},null,8,J),[[i,o.contact.phone]]),o.error.phone?(n(),d("div",O,r(o.error.phone[0]),1)):c("",!0),l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>o.contact.subject=a),type:"text",id:"helper-text","aria-describedby":"helper-text-explanation",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("subject")},null,8,P),[[i,o.contact.subject]]),o.error.subject?(n(),d("div",Q,r(o.error.subject[0]),1)):c("",!0)]),l(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=a=>o.contact.content=a),id:"message",rows:"4",class:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-dark-brown focus:border-dark-brown dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:t.$t("content")},null,8,W),[[i,o.contact.content]]),o.error.content?(n(),d("div",X,r(o.error.content[0]),1)):c("",!0),e("button",Y,r(t.$t("sendNow")),1)],34)]),e("div",{class:b(["flex flex-col gap-y-5 py-2",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},[e("div",Z,[$,e("p",ee,r(t.$t("location")),1)]),e("div",te,[oe,e("div",re,[e("div",se,[e("p",ae,r(t.$t("phone")),1),u(),ne,e("p",de,r(t.$t("ext")),1),le]),e("div",ie,[e("p",ce,r(t.$t("fax")),1),be])])]),e("div",me,[pe,e("div",_e,[e("p",ue,r(t.$t("email")),1),ge])])],2)]),e("div",fe,[e("img",{src:I,class:b(["drop-shadow-[-2rem_2rem_rgba(0,0,0,0.05)]",t.$i18n.locale=="en"?"animate__animated animate__fadeInRight":"animate__animated animate__fadeInLeft"])},null,2),e("div",he,[u(r(t.$t("followUs"))+" ",1),ke])])])]),_(f)],64)}const Le=w(S,[["render",xe]]);export{Le as default};
