(this.webpackJsonpdados_app=this.webpackJsonpdados_app||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),r=c.n(n),d=c(2),o=(c(9),c(0)),i=function(){return Object(o.jsx)("footer",{className:"page-footer  bg-dark text-white",children:Object(o.jsxs)("div",{className:"footer-copyright font-small py-3  text-center",children:["\xa9 2021 Copyright:",Object(o.jsxs)("a",{href:"https://github.com/Jmestrelozano",target:"_blank",children:[" ","Jorge mestre lozano"]})]})})},j=function(e){var t=e.ResultValue;return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsxs)("div",{className:"card-header my-5",children:[Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"SUMA DE LOS DADOS"})}),Object(o.jsx)("button",{className:"btn btn-dark white-text",children:Object(o.jsx)("h2",{id:"SumaDados",children:t})})]})})})},l=function(e){var t=e.setGuardarNumeroDados;return Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{type:"button",id:"dropdownMenuButton1",className:"btn-group btn ml-2 btn-outline-danger bropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:"NUMERO DE DADOS"}),Object(o.jsxs)("ul",{onClick:function(e){var c=e.target;t(c.text)},className:"dropdown-menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"1"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"2"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:"3"})})]})]})},b=function(e){var t=e.setGuardarRuta;return Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{type:"button",id:"dropdownMenuButton1",className:"btn-group btn ml-2 btn-outline-success bropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:"NUMERO DE CARAS"}),Object(o.jsxs)("ul",{onClick:function(e){return c=e.target.id,void t(c);var c},className:"dropdown-menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{id:"6caras",className:"dropdown-item",href:"#",children:"6 caras"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{id:"4caras",className:"dropdown-item",href:"#",children:"4 caras"})})]})]})},u=function(e){var t=e.ramdon,c=e.prop,a=e.setCount,n=e.ruta,r=Object(s.useState)(),i=Object(d.a)(r,2),j=i[0],l=i[1];return Object(s.useEffect)((function(){l(t),a(t)}),[c]),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"".concat("","/assets/images/").concat(n,"/").concat(j,".png"),className:"dado"})})};var h=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),r=Object(d.a)(n,2),h=r[0],O=r[1],m=Object(s.useState)(1),x=Object(d.a)(m,2),p=x[0],f=x[1],N=Object(s.useState)("6caras"),g=Object(d.a)(N,2),v=g[0],w=g[1],y=function(){return Math.floor(6*Math.random()+1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("nav",{className:"navbar bg-dark text-white",children:Object(o.jsxs)("div",{className:"d-flex gap-2",style:{paddingLeft:".7rem"},children:[Object(o.jsx)(l,{setGuardarNumeroDados:f}),Object(o.jsx)(b,{setGuardarRuta:w})]})}),Object(o.jsxs)("div",{style:{height:"82.4vh"},className:"container",children:[Object(o.jsx)("div",{className:"row justify-content-center text-center",children:Object(o.jsx)("div",{className:"col-12 ",children:Object(o.jsx)("h3",{children:"LANZAMIENTO DE DADOS"})})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Array.from({length:Number(p)}).map((function(e,t){return Object(o.jsx)(u,{prop:c,ruta:v,setCount:O,ramdon:y()},t)}))}),1===Number(p)&&Object(o.jsx)(j,{ResultValue:h}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row justify-content-center text-center my-4",children:Object(o.jsx)("button",{onClick:function(){a(y()),function(){var e=new Audio;e.src="../assets/audio/dados.mp3",e.play()}()},className:"btn btn-success ",children:"LANZAR DADOS"})})})]}),Object(o.jsx)(i,{})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.eaa97ee3.chunk.js.map