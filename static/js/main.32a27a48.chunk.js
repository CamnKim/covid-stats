(this["webpackJsonpreact-covid-stats"]=this["webpackJsonpreact-covid-stats"]||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a(18),r=a.n(s),i=a(70),o=a(6),l=a(187),d=a(188);var j=function(){return Object(n.jsxs)(l.a,{sticky:"top",collapseOnSelect:!0,expand:"md",variant:"dark",children:[Object(n.jsx)(l.a.Brand,{href:"/#/",children:"COVID STATS"}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(d.a,{className:"mr-auto ml-2",children:[Object(n.jsx)(d.a.Link,{href:"/covid-stats/#/US",className:"ml-3",children:"US"}),Object(n.jsx)(d.a.Link,{href:"/covid-stats/#/About",className:"ml-3",children:"About"})]})})]})},b=a(184),h=a(185),u=a(186);var O=function(){return Object(c.useEffect)((function(){return document.body.className="home-body",function(){document.body.className=""}}),[]),Object(n.jsx)("div",{className:"home",children:Object(n.jsx)(b.a,{children:Object(n.jsx)(h.a,{children:Object(n.jsxs)(u.a,{sm:!0,md:"4",className:"homeInfo",children:[Object(n.jsx)("h1",{children:"ALL COVID-19 DATA IN AN EASY TO READ WAY"}),Object(n.jsx)("p",{children:"Covid Stats compiles all your important COVID-19 related data into a visual and easy to read manner so you can stay safe"})]})})})})},v=a(43),x=a.n(v),m=a(66),p=a(16),f=a(72),g=a(67);var C=function(e){var t=e.dataSet,a=e.dataTitle;return Object(n.jsx)(g.a,{height:"100%",chartType:"GeoChart",data:[["State",a]].concat(Object(f.a)(t)),options:{region:"US",resolution:"provinces",backgroundColor:"#b3b3b3",colorAxis:{colors:["#ffffff","#670000"]},datalessRegionColor:"#b3b3b3",defaultColor:"#b3b3b3"},mapsApiKey:"AIzacSyBYadQAJXODEQRhsejrRKqq33u4ueKgDXU"})};var N=function(e){var t=e.leftData,a=t.positive,c=t.dead,s=t.ventilator,r=t.ICU,i=t.posInc,o=t.deadInc;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Positive"}),Object(n.jsx)("h1",{className:"stat",children:a.toLocaleString("en")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Dead"}),Object(n.jsx)("h1",{className:"stat",children:c.toLocaleString("en")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"People on a Ventilator"}),Object(n.jsx)("h1",{className:"stat",children:s.toLocaleString("en")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"People in ICU"}),Object(n.jsx)("h1",{className:"stat",children:r.toLocaleString("en")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"New Cases Today"}),Object(n.jsx)("h1",{className:"stat",children:i.toLocaleString("en")})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"New Deaths Today"}),Object(n.jsx)("h1",{className:"stat",children:o.toLocaleString("en")})]})]})},S=a(69);var k=function(e){var t=e.lineData,a=e.date;console.log(t.positive);var c={labels:a,datasets:[t]};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(S.Line,{data:c,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},height:300})})};var I=function(e){var t=e.mapData,a=e.leftData,s=e.lineData,r=Object(c.useState)("positive"),i=Object(p.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)("positive"),j=Object(p.a)(d,2),O=j[0],v=j[1],x=function(e){l(e.target.name)},m=function(e){v(e.target.name)},f=function(){var e=t.positive,a=t.dead,n=t.ventilator,c=t.icu;return"positive"===o?[e,"Cases"]:"dead"===o?[a,"Deaths"]:"ventilator"===o?[n,"On Ventilator"]:"icu"===o?[c,"Currently in ICU"]:void 0};return Object(n.jsx)(b.a,{fluid:!0,className:"parent",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(u.a,{md:4,children:Object(n.jsx)(b.a,{fluid:!0,children:Object(n.jsxs)("div",{className:"leftContent",children:[Object(n.jsx)("div",{className:"leftSectionHeader",children:Object(n.jsx)("p",{children:"US National Statistics"})}),Object(n.jsx)("div",{className:"leftParent",children:Object(n.jsx)(N,{leftData:a})})]})})}),Object(n.jsx)(u.a,{md:8,children:Object(n.jsxs)(b.a,{fluid:!0,children:[Object(n.jsx)(h.a,{children:Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"rightContent",children:[Object(n.jsxs)("div",{className:"sectionHeader",children:[Object(n.jsx)("p",{children:"US Statistics Over Time"}),Object(n.jsx)("button",{className:"data-btn",onClick:m,name:"positive",children:"Positive"}),Object(n.jsx)("button",{className:"data-btn",onClick:m,name:"dead",children:"Dead"}),Object(n.jsx)("button",{className:"data-btn",onClick:m,name:"ventilator",children:"Ventilator"}),Object(n.jsx)("button",{className:"data-btn",onClick:m,name:"icu",children:"ICU"})]}),Object(n.jsx)("div",{className:"lineParent",children:Object(n.jsx)(k,{lineData:function(){var e=s.positive,t=s.dead,a=s.ventilator,n=s.icu;return"positive"===O?{label:"Positive",data:e,fill:!1,backgroundColor:"rgb(239, 39, 27)",borderColor:"rgba(239, 39, 27, 0.2)"}:"dead"===O?{label:"Dead",data:t,fill:!1,backgroundColor:"rgb(64, 64, 64)",borderColor:"rgba(64, 64, 64, 0.2)"}:"ventilator"===O?{label:"Ventilator",data:a,fill:!1,backgroundColor:"rgb(51, 51, 255)",borderColor:"rgba(51, 51, 255, 0.2)"}:"icu"===O?{label:"ICU",data:n,fill:!1,backgroundColor:"rgb(255, 255, 0)",borderColor:"rgba(255, 255, 0, 0.2)"}:void 0}(),date:s.date})})]})})}),Object(n.jsx)(h.a,{children:Object(n.jsx)(u.a,{children:Object(n.jsxs)("div",{className:"rightContent",children:[Object(n.jsxs)("div",{className:"sectionHeader",children:[Object(n.jsx)("p",{children:"US State Statistics"}),Object(n.jsx)("button",{className:"data-btn",onClick:x,name:"positive",children:"Positive"}),Object(n.jsx)("button",{className:"data-btn",onClick:x,name:"dead",children:"Dead"}),Object(n.jsx)("button",{className:"data-btn",onClick:x,name:"ventilator",children:"Ventilator"}),Object(n.jsx)("button",{className:"data-btn",onClick:x,name:"icu",children:"ICU"})]}),Object(n.jsx)("div",{className:"mapParent",children:Object(n.jsx)(C,{dataSet:f()[0],dataTitle:f()[1]})})]})})})]})})]})})};var y=function(){Object(c.useEffect)((function(){g()}),[]);var e=Object(c.useState)(!0),t=Object(p.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),i=Object(p.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)({}),j=Object(p.a)(d,2),b=j[0],h=j[1],u=Object(c.useState)({}),O=Object(p.a)(u,2),v=O[0],f=O[1],g=function(){var e=Object(m.a)(x.a.mark((function e(){var t,a,n,c,r,i,o,d,j,b,u,O,v,m,p,g;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),t="https://cors-anywhere.herokuapp.com/","https://covidtracking.com/api/states",a="https://api.covidtracking.com/v1/us/current.json",n="https://api.covidtracking.com/v1/us/daily.json",e.next=7,fetch(t+"https://covidtracking.com/api/states");case 7:return c=e.sent,e.next=10,c.json();case 10:return r=e.sent,l({positive:r.map((function(e){return[e.state,e.positive]})),dead:r.map((function(e){return[e.state,e.death]})),ventilator:r.map((function(e){return[e.state,e.onVentilatorCurrently]})),icu:r.map((function(e){return[e.state,e.inIcuCurrently]}))}),e.next=14,fetch(t+a);case 14:return i=e.sent,e.next=17,i.json();case 17:return o=e.sent,d=o.pop(),j=d.positive,b=d.inIcuCurrently,u=d.death,O=d.onVentilatorCurrently,v=d.positiveIncrease,m=d.deathIncrease,h({positive:j,dead:u,ventilator:O,ICU:b,posInc:v,deadInc:m}),e.next=24,fetch(t+n);case 24:return p=e.sent,e.next=27,p.json();case 27:g=e.sent,f({date:g.map((function(e){var t=e.date.toString();return"".concat(t.substring(4,6),"/").concat(t.substring(6),"/").concat(t.substring(0,4))})).reverse(),positive:g.map((function(e){return e.positive})).reverse(),dead:g.map((function(e){return e.death})).reverse(),ventilator:g.map((function(e){return e.onVentilatorCurrently})).reverse(),icu:g.map((function(e){return e.inIcuCurrently})).reverse()}),s(!1);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(n.jsx)("h1",{className:"loading",children:"Loading..."}):Object(n.jsx)(I,{mapData:o,leftData:b,lineData:v})};var D=function(){return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h1",{children:"The Data"}),Object(n.jsxs)("p",{children:["The data is gathered from ",Object(n.jsx)("a",{href:"https://covidtracking.com/",children:"The COVID Tracking Project"}),"'s API"]}),Object(n.jsx)("p",{children:"Note: for data regarding ICU and ventilators, the data is not availible for all states so total numbers for the US will be off"}),Object(n.jsx)("h1",{children:Object(n.jsx)("a",{href:"https://github.com/CamnKim/covid-stats-dashboard",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})})})]})};var A=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(n.jsx)(o.a,{path:"/US",component:y}),Object(n.jsx)(o.a,{path:"/About",component:D})]})]})};a(181);r.a.render(Object(n.jsx)(A,{}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.32a27a48.chunk.js.map