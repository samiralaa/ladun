import{_ as m}from"./Navbar-5ab4aef0.js";import{L as h}from"./LightFooter-fb4450c2.js";import{u as f,N as y,Y as w,X as x}from"./flowbite-vue-e7f55102.js";import{_,N as b,c as d,d as n,e as u,f as o,t as a,j as i,n as j,m as v,w as l,bl as c,bk as U,F}from"./main-7d3fddf2.js";const N={components:{Navbar:m,LightFooter:h,Input:f,Dropdown:y,ListGroup:w,ListGroupItem:x},data(){return{joinUs:{name:"",email:"",phone:"",gender:"choosen",qualification:"",specialization:"",jop:"",cv:null},error:{},success:""}},methods:{submit(){let r=new FormData;r.append("name",this.joinUs.name),r.append("email",this.joinUs.email),r.append("phone",this.joinUs.phone),r.append("gender",this.joinUs.gender),r.append("qualification",this.joinUs.qualification),r.append("specialization",this.joinUs.specialization),r.append("jop",this.joinUs.jop),r.append("cv",this.joinUs.cv),console.log(r),axios.post("/api/join-us",r,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t.data),this.error={},this.success=this.$t("submitted")}).catch(t=>{this.error=t.response.data.errors})},handleFile(){this.joinUs.cv=this.$refs.file.files[0],console.log(this.joinUs.cv)}}},V={class:"container mx-auto"},z={class:"pt-36 mx-6 mb-5 font-bold"},C={class:"flex justify-between gap-x-14 flex-wrap md:flex-nowrap mx-10 my-5"},L={class:"flex-auto md:w-1/2"},q={class:"bg-black rounded-lg mb-14"},D={class:"text-dark-brown py-10 px-5 text-sm"},I={key:0,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",role:"alert"},M={class:"flex justify-center gap-x-5"},B=["placeholder"],S={key:0,class:"text-red-500"},G=["placeholder"],T={key:1,class:"text-red-500"},X={class:"flex justify-center gap-x-5"},Y=["placeholder"],E={key:0,class:"text-red-500"},J={selected:"",value:"choosen"},R={value:"Male"},A={value:"Female"},H={key:1,class:"text-red-500"},K={class:"flex justify-center gap-x-5"},O=["placeholder"],P={key:0,class:"text-red-500"},Q=["placeholder"],W={key:1,class:"text-red-500"},Z={class:"flex justify-center gap-x-5"},$=["placeholder"],ee={key:0,class:"text-red-500"},re=["placeholder"],oe={key:1,class:"text-red-500"},te={type:"submit",class:"bg-dark-brown h-10 mb-10 mx-2 text-white"},se=o("div",{class:"w-full md:w-1/2 mb-5 bg-about-us-page-image bg-no-repeat bg-cover bg-center"},null,-1);function ae(r,t,de,ne,e,p){const g=b("Navbar"),k=b("LightFooter");return d(),n(F,null,[u(g,{class:"bg-black fixed z-50 w-full"}),o("div",V,[o("h1",z,a(r.$t("joinUs")),1),o("div",C,[o("div",L,[o("div",q,[o("div",D,a(r.$t("pleaseFill")),1),e.success!=""?(d(),n("div",I,a(e.success),1)):i("",!0),o("form",{class:j(["grid gap-y-10 mx-5",r.$i18n.locale=="en"?"animate__animated animate__fadeInLeft":"animate__animated animate__fadeInRight"]),onSubmit:t[8]||(t[8]=v((...s)=>p.submit&&p.submit(...s),["prevent"]))},[o("div",M,[l(o("input",{type:"text",id:"","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[0]||(t[0]=s=>e.joinUs.name=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("fullName")},null,8,B),[[c,e.joinUs.name]]),e.error.name?(d(),n("div",S,a(e.error.name[0]),1)):i("",!0),l(o("input",{type:"email",id:"helper-text","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[1]||(t[1]=s=>e.joinUs.email=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("email")},null,8,G),[[c,e.joinUs.email]]),e.error.email?(d(),n("div",T,a(e.error.email[0]),1)):i("",!0)]),o("div",X,[l(o("input",{type:"text","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[2]||(t[2]=s=>e.joinUs.phone=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("mobile")},null,8,Y),[[c,e.joinUs.phone]]),e.error.phone?(d(),n("div",E,a(e.error.phone[0]),1)):i("",!0),l(o("select",{id:"countries","onUpdate:modelValue":t[3]||(t[3]=s=>e.joinUs.gender=s),class:"bg-dark-brown text-white [&>option]:bg-white [&>option]:text-black border border-dark-brown text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[o("option",J,a(r.$t("gender")),1),o("option",R,a(r.$t("male")),1),o("option",A,a(r.$t("female")),1)],512),[[U,e.joinUs.gender]]),e.error.gender?(d(),n("div",H,a(e.error.gender[0]),1)):i("",!0)]),o("div",K,[l(o("input",{type:"text","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[4]||(t[4]=s=>e.joinUs.qualification=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("academicCertification")},null,8,O),[[c,e.joinUs.qualification]]),e.error.email?(d(),n("div",P,a(e.error.email[0]),1)):i("",!0),l(o("input",{type:"text","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[5]||(t[5]=s=>e.joinUs.specialization=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("specialization")},null,8,Q),[[c,e.joinUs.specialization]]),e.error.specialization?(d(),n("div",W,a(e.error.specialization[0]),1)):i("",!0)]),o("div",Z,[l(o("input",{type:"text","aria-describedby":"helper-text-explanation","onUpdate:modelValue":t[6]||(t[6]=s=>e.joinUs.jop=s),class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("position")},null,8,$),[[c,e.joinUs.jop]]),e.error.jop?(d(),n("div",ee,a(e.error.jop[0]),1)):i("",!0),o("input",{type:"file",id:"file","aria-describedby":"helper-text-explanation",onChange:t[7]||(t[7]=(...s)=>p.handleFile&&p.handleFile(...s)),ref:"file",class:"w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dark-brown focus:border-dark-brown block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-brown dark:focus:border-dark-brown",placeholder:r.$t("uploadCV")},null,40,re),e.error.cv?(d(),n("div",oe,a(e.error.cv[0]),1)):i("",!0)]),o("button",te,a(r.$t("sendNow")),1)],34)])]),se])]),u(k)],64)}const be=_(N,[["render",ae]]);export{be as default};
