(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{5007:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var n=t(5893),i=t(7294),s=t(6991),r=t.n(s),l=t(4105);let o=e=>{if(!(e>1e3))return e.toString();{let a=(e/1e3).toFixed(1);return a+"k"}},c=e=>{let{value:a=0,label:t=0,race:i="",scale:s=1,onDisclaimerChange:r=()=>{}}=e,l=Math.ceil(a),c={height:"".concat(100*l-100*a,"%")};return 0===l&&1!==s?r("N/A"):1==s&&0===l&&r("0.0"),(0,n.jsx)("div",{className:"icon-chart-data",children:l>0&&t>=10||1==s?0===l?(0,n.jsxs)("div",{className:"icon-chart-data-point",children:[(0,n.jsx)("div",{className:"icon-person icon-person-placeholder"}),(0,n.jsx)("span",{className:"icon-chart-data-point-mask",children:(0,n.jsx)("div",{className:"icon-chart-data-label",children:"0.0"})})]}):Array(l).fill(0).map((e,a)=>(0,n.jsxs)("div",{className:"icon-chart-data-point",children:[(0,n.jsx)("svg",{"aria-label":"Person",className:"icon-person re-".concat(i),title:l,children:(0,n.jsx)("use",{href:"/media/sprites.svg#person"})}),(0,n.jsx)("span",{className:"icon-chart-data-point-mask",style:l-1===a?c:{},children:l-1===a&&(0,n.jsx)("div",{className:"icon-chart-data-label",children:o(t)})})]},a)):(0,n.jsxs)("div",{className:"icon-chart-data-point",children:[(0,n.jsx)("div",{className:"icon-person icon-person-placeholder"}),(0,n.jsx)("span",{className:"icon-chart-data-point-mask",children:(0,n.jsx)("div",{className:"icon-chart-data-label",children:"N/A"})})]})})},d={"N/A":"N/A: Our tool displays N/A when when there are 10 or less underlying observations.","0.0":"Anywhere a disparity gap reads 0.0, it means that there were no white adults in the system at that point for a comparison of rates. Please see raw numbers and rates to see how adults of color are impacted by the decision point."},p={100:10,500:50,1e3:100,5e3:500,1e4:1e3,5e4:5e3,1e5:1e4,5e5:5e4,1e6:1e5,5e6:5e5,1e7:1e6},u=e=>{let a=0;e.forEach(e=>{let{items:t}=e;a=Math.max(...Object.values(t),a)});let t=Object.keys(p).map(e=>parseInt(e,10)).concat([a]);return{max:a,scale:p["".concat(t[t.sort((e,a)=>e-a).indexOf(a)+1])]}},h=e=>{let{chartData:a,races:t,base:s,measurement:r}=e,[l,o]=(0,i.useState)(""),p=1,h=["Raw numbers","Rate per population","Rate per prior event point"].includes(r),m=JSON.parse(JSON.stringify({...a,...u(a.data)}));("Raw numbers"===r||"Rate per prior event point"===r)&&(p=m.scale);let v=m.data.map(e=>({label:e.label,items:Object.keys(e.items).reduce((a,t)=>(a[t]={scaled:h?(e.items[t]/p).toFixed(2):(e.items[t]/(e.records[t]||1)/p).toFixed(2),origin:h?e.items[t]:(e.items[t]/(e.records[t]||1)).toFixed(2),scale:p},a),{})}));return(0,n.jsxs)("div",{className:"icon-chart",children:[(0,n.jsxs)("h3",{children:[m.year,(0,n.jsx)("div",{className:"chart-meta",children:(0,n.jsxs)("div",{className:"chart-scale",children:[(0,n.jsx)(c,{value:1,race:s,scale:1})," ",p.toLocaleString()," ",s?"White Adult":p>1?"Adults":"Adult "]})})]}),(0,n.jsx)("div",{className:"icon-chart-races-container",children:Object.keys(t).filter(e=>e.toLowerCase()!==s).map(e=>(0,n.jsxs)("div",{className:"icon-chart-race-container",children:[(0,n.jsx)("h4",{children:t[e]}),(0,n.jsxs)("div",{className:"icon-chart-rows",children:[s&&(0,n.jsx)("div",{className:"icon-chart-row",children:(0,n.jsx)(c,{value:1,race:s,scale:1,label:1})}),v.map((a,t)=>{var i,s;return(0,n.jsxs)("div",{className:"icon-chart-row",children:[(0,n.jsx)("div",{className:"icon-chart-label",children:a.label}),(0,n.jsx)(c,{value:null===(i=null==a?void 0:a.items[e])||void 0===i?void 0:i.scaled,race:e,scale:p,label:null===(s=null==a?void 0:a.items[e])||void 0===s?void 0:s.origin,onDisclaimerChange:o})]},t)})]})]},e))}),d[l]&&(0,n.jsx)("p",{className:"icon-chart-disclaimer",children:d[l]}),r.indexOf("Disparity gap")>-1&&(0,n.jsx)("p",{className:"icon-chart-disclaimer",children:"No disparity gap information is available for arrests because they are the beginning of the process."})]},m.year)},m=e=>{let{data:a,races:t,base:i,measurement:s}=e;return(0,n.jsx)("div",{className:"icon-charts",children:a.map((e,a)=>(0,n.jsx)(h,{chartData:e,races:t,base:i,measurement:s},a))})},v=["county","PC_code","PC_offense","Race","Year","Event Point","Raw numbers","Rate per population","Rate per prior event point","Disparity gap per population","Disparity gap per prior event point"];var x=e=>{let{data:a}=e;return(0,n.jsxs)("table",{className:"ui celled table",children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:v.map(e=>(0,n.jsx)("th",{children:e},e))})}),(0,n.jsx)("tbody",{children:a.map((e,a)=>(0,n.jsx)("tr",{children:v.map(a=>{"county"==a&&console.log(e[a]);let t=e[a];return"Raw numbers"===a&&t<10?t="N/A":["Rate per population","Rate per prior event point","Disparity gap per population","Disparity gap per prior event point"].indexOf(a)>-1&&(t=parseFloat(t).toFixed(2)),(0,n.jsx)("td",{children:t},a)})},a))})]})},j=e=>{let{label:a,value:t=null,options:s=[],multiple:r=!1,disableAll:l=!1,onChange:o=()=>{}}=e,[c,d]=(0,i.useState)(!1),[p,u]=(0,i.useState)(!1),h=(0,i.useRef)(null),m=a.toLowerCase().replace(/\s+/g,"-"),v=e=>{let a;a=r?t.includes(e)?t.filter(a=>a!==e):[...t,e]:t===e?null:e,d(r&&a.sort().join(".")===s.map(e=>e.value).sort().join(".")),o(a)};return(0,i.useEffect)(()=>{function e(e){!h.current||h.current.contains(e.target)||h.current.parentNode.contains(e.target)||u(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[h]),(0,n.jsxs)("div",{className:"select-component select-component-".concat(m),children:[(0,n.jsxs)("label",{onClick:()=>{d(r&&t.sort().join(".")===s.map(e=>e.value).sort().join(".")),u(!p)},className:p?"modal-actived":"",children:[a," ▼"]}),p&&(0,n.jsxs)("div",{ref:h,className:"modal-wrapper",children:[(0,n.jsx)("h3",{children:a}),(0,n.jsxs)("ul",{className:"modal-".concat(m),children:[r&&!l&&(0,n.jsxs)("li",{onClick:()=>{c?o([]):o(s.map(e=>e.value)),d(!c)},children:[(0,n.jsx)("input",{type:"checkbox",checked:c}),"All"]}),s.map(e=>(0,n.jsxs)("li",{onClick:()=>v(e.value),children:[(0,n.jsx)("input",{type:"checkbox",checked:r?t.includes(e.value):t===e.value})," ",e.text]},e.text))]})]})]})},f=t(2729),b=t(508);function N(){let e=(0,f._)(["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n"]);return N=function(){return e},e}function y(){let e=(0,f._)(["\n  display: inline-block;\n  position: relative;\n  width: ",";\n  height: ",";\n\n  div {\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: ",";\n    animation: "," 1.2s linear infinite;\n  }\n\n  div:nth-child(1) {\n    top: 0px;\n    left: -1px;\n    animation-delay: 0s;\n  }\n  div:nth-child(2) {\n    top: 0px;\n    left: 22px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(3) {\n    top: 0px;\n    left: 45px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(4) {\n    top: 22px;\n    left: -1px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(5) {\n    top: 22px;\n    left: 22px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(6) {\n    top: 22px;\n    left: 45px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(7) {\n    top: 44px;\n    left: -1px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(8) {\n    top: 44px;\n    left: 22px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(9) {\n    top: 44px;\n    left: 45px;\n    animation-delay: -1.6s;\n  }\n"]);return y=function(){return e},e}let g=e=>(0,b.F4)(N()),w=b.ZP.div(y(),e=>"".concat(e.size).concat(e.sizeUnit),e=>"".concat(e.size).concat(e.sizeUnit),e=>e.color,e=>g(e)),S=e=>{let{color:a,size:t,sizeUnit:i}=e;return(0,n.jsxs)(w,{color:a,size:t,sizeUnit:i,children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})};S.defaultProps={size:64,color:"#9dbcdb",sizeUnit:"px"};let _={"Raw numbers":"Raw numbers","Rate per population":"Rate per 1,000 adults","Rate per prior event point":"Rate per prior decision point","Disparity gap per population":"Disparity gap per 1,000 adults","Disparity gap per prior event point":"Disparity gap per prior decision point"},R=Object.keys(_),P={White:"White",Black:"Black",Hispanic:"Latino",AAPI:"Asian / Pacific Islander"},k=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,t=e.replace(/[[]]/g,"\\$&"),n=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")),i=n.exec(a);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null};function C(){let[e,a]=(0,i.useState)([]),[t,s]=(0,i.useState)(!0),[o,c]=(0,i.useState)([]),[d,p]=(0,i.useState)(["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra Costa","Del Norte","El Dorado","Fresno","Glenn","Humboldt","Imperial","Inyo","Kern","Kings","Lake","Lassen","Los Angeles","Madera","Marin","Mariposa","Mendocino","Merced","Modoc","Mono","Monterey","Napa","Nevada","Orange","Placer","Plumas","Riverside","Sacramento","San Benito","San Bernardino","San Diego","San Francisco","San Joaquin","San Luis Obispo","San Mateo","Santa Barbara","Santa Clara","Santa Cruz","Shasta","Sierra","Siskiyou","Solano","Sonoma","Stanislaus","Sutter","Tehama","Trinity","Tulare","Tuolumne","Ventura","Yolo","Yuba"]),[u,h]=(0,i.useState)("Santa Clara"),[v,f]=(0,i.useState)([]),[b,N]=(0,i.useState)([]),[y,g]=(0,i.useState)([]),[w,C]=(0,i.useState)([]),[O,E]=(0,i.useState)(Object.keys(P)),[A,D]=(0,i.useState)("Raw numbers"),[Y,M]=(0,i.useState)({ratio:1,base:null}),[L,F]=(0,i.useState)([]),[z,I]=(0,i.useState)({raw:[],chart:[]}),[B,T]=(0,i.useState)(!1),U=function(e){let{decisionPoints:a,races:t,offenses:n,years:i,measurement:s}=e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,l=r.filter(e=>!!((!(t.length>0)||t.includes(e.Race))&&(!(a.length>0)||a.includes(e["Event Point"]))&&(!(n.length>0)||n.includes(e.Offenses))&&i.includes(e.Year))),o=l.reduce((e,a)=>(e[a.Year]||(e[a.Year]={year:a.Year,data:{}}),e[a.Year].data[a["Event Point"]]||(e[a.Year].data[a["Event Point"]]={label:a["Event Point"],items:{},records:{}}),e[a.Year].data[a["Event Point"]].items[a.Offenses]||(e[a.Year].data[a["Event Point"]].items[a.Offenses]={label:a.Offenses,items:{}}),e[a.Year].data[a["Event Point"]].items[a.Offenses].items[a.Race]=a[s]||0,e[a.Year].data[a["Event Point"]].records[a.Race]?e[a.Year].data[a["Event Point"]].records[a.Race]++:e[a.Year].data[a["Event Point"]].records[a.Race]=1,e),{});I({raw:l,chart:Object.values(o).map(e=>(e.data=Object.values(e.data).map(e=>(e.items=Object.values(e.items).reduce((e,a)=>(Object.keys(a.items).forEach(t=>{let n=e[t]+(a.items[t]||0);return n="Raw numbers"===s?Math.ceil(n):Number(Number(n).toFixed(2)),e[t]=n,e}),e),{AAPI:0,Black:0,Hispanic:0,White:0}),e)),e))})},H=async e=>{s(!0);let t=new(r());t.parse("1nJ3k0KXVrhXm8La-lOTpw8U7xL7Cc-GioANxxH5KsXE",e).then(e=>{let t=[],n=[],i=[],r=[],l=e.map(e=>(e.Offenses=e.PC_offense,e.Race=e.race,e.Year=e.year||"All years",e["Event Point"]=e.decision,e["Raw numbers"]=e.number,e["Rate per population"]=isNaN(e.rate_per_100_pop)?0:e.rate_per_100_pop,e["Rate per prior event point"]=isNaN(e.rate_cond_previous)?0:e.rate_cond_previous,e["Disparity gap per population"]=isNaN(e.disparity_gap_pop_w)?0:e.disparity_gap_pop_w,e["Disparity gap per prior event point"]=isNaN(e.disparity_gap_cond_w)?0:e.disparity_gap_cond_w,e));l.forEach(e=>{-1===t.indexOf(e.Year)&&t.push(e.Year),-1===n.indexOf(e["Event Point"])&&n.push(e["Event Point"]),-1===i.indexOf(e.Offenses)&&i.push(e.Offenses),-1===r.indexOf(e.Race)&&r.push(e.Race)}),t=t.reverse().sort((e,a)=>"2010-2021"===e?-1:"2010-2021"===a?1:a-e);let o=t[0];c([o]),a(t),f(n),N(n),C(i),g(i),F(l),E(r),s(!1),U({races:r,decisionPoints:b,offenses:i,years:[o],measurement:A},l)})};(0,i.useEffect)(()=>{let e=k("sheet")||"Santa Clara";H(e).catch(e=>{})},[]);let J=async e=>{h(e),await H(e),U({races:O,decisionPoints:b,years:o,offenses:w,measurement:A})};return(0,n.jsxs)("div",{className:"tool",id:"tool",children:[(0,n.jsx)("p",{className:"generic-page",children:"This site provides summary data representing the raw numbers, rates per population, and disparity gaps by race of adults in the California criminal justice system using data provided by the California Department of Justice."}),(0,n.jsxs)("div",{className:"filters",children:[(0,n.jsx)("div",{children:"Customize: "}),(0,n.jsx)("div",{className:"filter",children:(0,n.jsx)(j,{label:"Years",multiple:!0,disableAll:!0,value:o,onChange:e=>{c(e),U({races:O,decisionPoints:b,years:e,offenses:w,measurement:A})},options:e.map(e=>({text:e,value:e}))})}),(0,n.jsx)("div",{className:"filter",children:(0,n.jsx)(j,{label:"Counties",value:u,multiple:!1,onChange:J,options:d.map(e=>({text:e,value:e}))})}),(0,n.jsx)("div",{className:"filter",children:(0,n.jsx)(j,{label:"Event Point",multiple:!0,value:b,onChange:e=>{N(e),U({races:O,decisionPoints:e,offenses:w,years:o,measurement:A})},options:v.map(e=>({text:e,value:e}))})}),(0,n.jsx)("div",{className:"filter",children:(0,n.jsx)(j,{label:"Offenses",value:w,multiple:!0,onChange:e=>{C(e),U({races:O,decisionPoints:b,offenses:e,years:o,measurement:A})},options:y.map(e=>({text:e,value:e}))})}),(0,n.jsx)("div",{className:"filter",children:(0,n.jsx)(j,{label:"Measurement",value:A,onChange:e=>{D(e),"Disparity gap per population"===e||"Disparity gap per prior event point"===e||"Rate per prior event point"===e?M({base:"white",ratio:.01}):"Raw numbers"===e?M({base:null,ratio:1}):M({base:null,ratio:.1}),U({races:O,decisionPoints:b,offenses:w,years:o,measurement:e})},options:R.map(e=>({text:e,value:e}))})})]}),(0,n.jsxs)("div",{className:"chart-selected",children:[(0,n.jsx)("h2",{children:u}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:[_[A],b.length===v.length?"All Event Points":w.join(", "),w.length===y.length?"All Offenses":w.join(", ")].filter(e=>!!e).map(e=>"<span>".concat(e,"</span>")).join(";")}})]}),(0,n.jsx)("div",{className:"chart-containers",children:t?(0,n.jsx)("div",{className:"loading-animation-centered",children:(0,n.jsx)(S,{})}):(0,n.jsx)(m,{data:z.chart,races:P,base:Y.base,measurement:A})}),(0,n.jsxs)("div",{className:"buttons",children:[(0,n.jsx)("div",{className:"button",onClick:()=>window&&window.print(),children:"Print"}),(0,n.jsx)("div",{className:"button",onClick:()=>T(!B),children:"View Data"}),(0,n.jsx)("div",{className:"button",onClick:()=>{let e=l.P6.json_to_sheet(z.raw),a=l.P6.book_new();l.P6.book_append_sheet(a,e,"Data"),(0,l.Fv)(a,"PaperPrison - Data.xlsx")},children:"Download Data"})]}),B&&z.raw.length>0&&(0,n.jsx)(x,{data:z.raw})]})}},67:function(){},2061:function(){}}]);