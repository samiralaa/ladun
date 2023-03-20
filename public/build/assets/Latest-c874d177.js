import{f as m,g as v,o as a,c as n,d as o,w as h,u as i,F as _,b as g,q as w,a as t,m as b,t as s,s as x,l as p}from"./main-ddae853a.js";import{M as k,B as y,a as f,L as M,b as $}from"./flowbite-vue-dc83dcec.js";import{M as B}from"./index-2bc9f462.js";const L={class:"[&>div>div>ul]:justify-center [&>div>div>ul>li]:text-dark-brown [&>div>div>ul>li>.border-blue-600]:border-black [&>div>div>ul>li>.text-blue-600]:text-black"},V={class:"grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3 lg:grid-cols-4 mx-auto container px-5"},P={class:"rounded-lg border-2 border-gray-border-light bg-white"},C=["src"],I={class:"flex items-center"},N={class:"flex-initial p-2"},T={class:"flex-initial mx-2 text-light-brown"},D={key:0,class:"font-bold"},F=["innerHTML"],H={class:"flex justify-end my-4 mx-2"},U=["onClick"],q={class:"flex flex-wrap m-2"},E={class:"whitespace-nowrap text-gray-500"},G={class:"whitespace-nowrap text-gray-500"},O={class:"whitespace-nowrap text-gray-500"},Q={__name:"Latest",setup(S){const d=m(""),c=m([]);return v(async()=>{const e=await axios.get("/api/departments/latest/projects");c.value=e.data.data,d.value=c.value[0].title.en}),(e,u)=>(a(),n("div",L,[o(i($),{variant:"underline",modelValue:d.value,"onUpdate:modelValue":u[0]||(u[0]=r=>d.value=r)},{default:h(()=>[(a(!0),n(_,null,g(c.value,r=>(a(),w(i(M),{name:r.title.en,title:r.title[e.$i18n.locale]},{default:h(()=>[t("div",V,[(a(!0),n(_,null,g(r.latest,l=>(a(),n("div",P,[l.attachment?(a(),n("img",{key:0,class:"w-full rounded-lg",src:l.attachment,alt:"Project Photo"},null,8,C)):b("",!0),t("div",I,[t("h3",N,s(l.title[e.$i18n.locale]),1),t("span",T,[o(i(B),{class:"inline-block h-4 w-4"}),l.location?(a(),n("small",D,s(l.location.city),1)):b("",!0)])]),t("p",{class:"px-2 text-grey text-xs",innerHTML:l.text[e.$i18n.locale].slice(0,200)+" ..."},null,8,F),t("div",H,[t("button",{class:"bg-dark-brown text-white rounded-2xl w-36 h-8",onClick:x(z=>e.$router.push({name:"Project",params:{id:l.id}}),["prevent"])},[t("small",null,[o(i(k),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 justify-end"}),p(s(e.$t("exploreProject")),1)])],8,U)]),t("div",q,[t("div",null,[o(i(y),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",E,s(e.$t("residentialLandPlots")),1)]),t("div",null,[o(i(f),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",G,s(l.Land_area)+" "+s(e.$t("areaUnit")),1)]),t("div",null,[o(i(f),{class:"inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 text-light-brown"}),t("small",O,s(l.units_number)+" "+s(e.$t("unit")),1)])])]))),256))])]),_:2},1032,["name","title"]))),256))]),_:1},8,["modelValue"])]))}};export{Q as default};
