(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],{44:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,d,l,p,h,b,f=t(0),u=t.n(f),g=t(16),m=t.n(g),x=(t(44),t(11)),j=t(2),O=t(10),y=t(9),v=t(4),E=t(5),C=E.a.div(a||(a=Object(v.a)(["\n  flex: 0 1 24%;\n\n  .img-content {\n      width: 400px;\n      height: 400px;\n      overflow: hidden;\n      background: #000;\n\n      @media screen and (max-width: 440px) {\n          width: 100%;\n      }\n\n      img {\n          width: 400px;\n          cursor: pointer;\n\n          @media screen and (max-width: 440px) {\n              width: 600px;\n          }\n      }\n  }\n\n  .card-body{\n      padding: 10px 0 20px 0;\n\n      .card-name {\n          color: #FFF;\n          font-family: 'Roboto', sans-serif;\n          text-transform: uppercase;\n          font-weight: bold;\n      }\n  }\n}\n"]))),w=t(1),D=Object(y.b)((function(n){return{list:n.character.list}}))((function(n){console.log("props",n);var e=Object(f.useState)((function(){var n=localStorage.getItem("charData"),e=JSON.parse(n);return console.log("initialValue",e),e||null})),t=Object(O.a)(e,2),a=t[0],r=t[1];console.log("name",a);return Object(w.jsxs)(C,{onClick:function(){return function(e){localStorage.setItem("charData",JSON.stringify(e));var t=localStorage.getItem("charData"),a=JSON.parse(t);console.log("storageValue",a),r(a),window.location.href="#/character",localStorage.getItem("charData").id===n.card.id?console.log("sim! props.card.id",n.card.id):console.log("n\xe3o",n.card.id)}(n.card)},children:[Object(w.jsx)("div",{className:"img-content",children:Object(w.jsx)("img",{src:"".concat(n.card.thumbnail.path,"/portrait_fantastic.jpg"),className:"card-img-top",alt:"character"})}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("h5",{className:"card-name",children:n.characterData?n.characterData.name:n.card.name})})]})})),N=t(36),R=t.n(N),A=t(8),S=t(37),_=t.n(S),k={BASE_URL:"https://gateway.marvel.com/v1/public/characters?",AUTH:"ts=heroapp&apikey=beaf888c070d611e7fffa15d0f7483de&hash=aeb8fd264e40eddfc13bae3cd65a0a4c"},T=function(){return{type:"CHARACTER_EDIT"}},H=function(n){return{type:"DESCRIPTION_CHANGED",payload:n.target.value}},P=function(n){return{type:"NAME_CHANGED",payload:n.target.value}},I=function(n){return{type:"SEARCH_CHANGED",payload:n.target.value}},L=function(){return[{type:"SEARCH_CLEAR"},z()]},G=function(n){return{type:"CHARACTER_SELECTED",payload:n}},F=function(n){return[{type:"CHARACTERS_PAGECHANGE",payload:n}]},z=function(){return function(n,e){var t=e().character.pageNumber,a=e().character.term,r=t>1?"offset=".concat(20*(t-1)):"",c=a?"nameStartsWith=".concat(a,"&"):"";_.a.get(k.BASE_URL+r+c+k.AUTH).then((function(e){n({type:"CHARACTERS_SEARCHED",payload:e.data.data})}))}},B=E.a.div(r||(r=Object(v.a)(['\n  .pagination {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n\n    li {\n      display: inline-block;\n      width: 30px;\n      height: 20px;\n      border: 1px solid #e2e2e2;\n      display: flex;\n      justify-content: center;\n      font-size: 25px;\n      border: none;\n      background-color: #000;\n      padding: 10px;\n      margin: 0 2px;\n      cursor: pointer;\n\n      &:active {\n        background-color: #4f5a6b;\n\n        a {\n          color: white;\n          font-family: "Roboto", sans-serif;\n          &:hover,\n          &:active {\n            color: #fff;\n          }\n        }\n      }\n\n      a {\n        text-decoration: none;\n        font-family: "Roboto", sans-serif;\n        color: #ccc;\n        font-size: 16px;\n        font-weight: bold;\n      }\n    }\n  }\n\n  .footer {\n    margin: 0;\n    padding-bottom: 40px;\n  }\n']))),J=E.a.div(c||(c=Object(v.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 600px;\n  margin: 30px auto;\n\n  @media screen and (max-width: 970px) {\n    width: 80%;\n}\n\n  .searchTerm {\n    width: 100%;\n    border: 3px solid #4f5a6b;\n    border-right: none;\n    padding: 5px;\n    height: 20px;\n    border-radius: 5px 0 0 5px;\n    outline: none;\n    color: #fff;\n\n    background: #000;\n  }\n\n  .searchTerm:focus {\n    color: #fff;\n  }\n\n  .searchButton {\n    border: 1px solid #4f5a6b;\n    background: #4f5a6b;\n    text-align: center;\n    color: #fff;\n    border-radius: 0 5px 5px 0;\n    cursor: pointer;\n    font-size: 14px;\n    padding: 9px 20px;\n    font-family: "Roboto", sans-serif;\n  }\n']))),U=E.a.div(i||(i=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  background: #222831;\n  padding: 30px;\n"]))),M=Object(y.b)((function(n){return{term:n.character.term,list:n.character.list,pageNumber:n.character.pageNumber}}),(function(n){return Object(A.b)({request:z,clear:L,changesSearch:I,pageChange:F},n)}))((function(n){var e=n.request,t=n.list,a=n.pageChange,r=n.term,c=n.changesSearch,i=n.pageNumber;Object(f.useEffect)((function(){e()}),[]);return Object(w.jsxs)(B,{children:[Object(w.jsxs)(J,{children:[Object(w.jsx)("input",{className:"searchTerm",type:"text",placeholder:"Find character by name",value:r,onChange:c}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{className:"searchButton",type:"button",onClick:function(){return e()},children:"Search"})})]}),Object(w.jsx)(U,{children:function(){var n=t.results;return null===n||void 0===n?void 0:n.map((function(n){return Object(w.jsx)(D,{card:n},n.id)}))}()}),Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)(R.a,{activePage:i,itemsCountPerPage:20,totalItemsCount:t.total,pageRangeDisplayed:5,onChange:function(n){a(n),e()}.bind(undefined)})})]})})),V=E.a.div(o||(o=Object(v.a)(["\n  display: flex;\n  justify-content: flex-start;\n  margin: 0 auto;\n  background: #222831;\n  padding: 30px;\n  height: 100vh;\n\n  @media screen and (max-width: 970px) {\n    flex-direction: column;\n  }\n\n  .img-content {\n    width: 600px;\n    height: 700px;\n    overflow: hidden;\n\n    @media screen and (max-width: 970px) {\n      width: 100%;\n      overflow: initial;\n      height: 600px;\n    }\n\n    img {\n      width: 600px;\n      height: auto;\n\n      @media screen and (max-width: 970px) {\n        width: 100%;\n        overflow: visible;\n        height: auto;\n      }\n    }\n  }\n"]))),X=E.a.button(s||(s=Object(v.a)(["\n  border: 4px solid #ccc;\n  padding: 16px 24px;\n  position: relative;\n  background-color: transparent;\n  display: block;\n  color: #ccc;\n\n  &:active {\n    &:after {\n      width: 100%;\n      text-decoration: none;\n    }\n  }\n"]))),q=E.a.input(d||(d=Object(v.a)(['\n  background-color: transparent;\n  padding: 15px 10px;\n  margin: 15px 0;\n  border: none;\n  color: #fff;\n  font-family: "Roboto", sans-serif;\n  display: block;\n  font-size: 20px;\n  width: 80%;\n\n  &:focus {\n    background-color: #4f5a6b;\n    height: 20px;\n  }\n']))),W=E.a.textarea(l||(l=Object(v.a)(['\n  background-color: transparent;\n  padding: 10px 10px;\n  margin: 15px 0;\n  border: 1px solid #4f5a6b;\n  color: #fff;\n  font-family: "Roboto", sans-serif;\n  display: block;\n  font-size: 14px;\n  line-height: 22px;\n  width: 80%;\n  height: 100px;\n\n  &:focus {\n    background-color: #4f5a6b;\n  }\n']))),K=E.a.div(p||(p=Object(v.a)(["\n    padding-left: 30px;\n\n    @media screen and (max-width: 970px) {\n        padding-top: 30px\n    }\n\n    .back-button {\n        margin: 50px 0 80px 0;\n    }\n}"]))),Q=E.a.div(h||(h=Object(v.a)(['\n  h1 {\n    font-family: "Roboto", sans-serif;\n    color: #fff;\n    font-size: 36px;\n    line-height: 50px;\n    margin: 0;\n  }\n\n  p {\n    font-family: "Roboto", sans-serif;\n    color: #fff;\n    font-size: 14px;\n    line-height: 22px;\n  }\n\n  h2 {\n    font-family: "Roboto", sans-serif;\n    color: #fff;\n    font-size: 18px;\n    text-transform: uppercase;\n    line-height: 26px;\n    margin-top: 40px;\n  }\n\n  ul {\n    display: block;\n    margin-left: -10px;\n  }\n\n  ul li {\n    font-family: "Roboto", sans-serif;\n    display: block;\n    position: relative;\n    color: #fff;\n  }\n\n  ul li:not(:last-child) {\n    margin-bottom: 16px;\n  }\n\n  ul li:before {\n    content: "";\n    position: absolute;\n    top: 1.2em;\n    left: -30px;\n    margin-top: -0.9em;\n    background: #343a44;\n    height: 12px;\n    width: 12px;\n    border-radius: 50%;\n  }\n']))),Y=Object(y.b)((function(n){return{characterData:{name:n.character.characterData.name,id:n.character.characterData.id,description:n.character.characterData.description,imgPath:n.character.characterData.imgPath,series:n.character.characterData.series},editable:n.character.editable}}),(function(n){return Object(A.b)({edit:T,changeName:P,changeDescription:H,selectCharacter:G},n)}))((function(n){var e=n.selectCharacter,t=n.characterData,a=n.edit,r=n.editable,c=n.changeName,i=n.changeDescription;Object(f.useEffect)((function(){e(JSON.parse(localStorage.getItem("charData")))}),[]);return t&&Object(w.jsxs)(V,{children:[Object(w.jsx)("div",{className:"img-content",children:Object(w.jsx)("img",{src:"".concat(t.imgPath,"/portrait_fantastic.jpg"),alt:"character"})}),Object(w.jsxs)(K,{children:[Object(w.jsx)(X,{type:"button",onClick:function(){return a()},children:r?"Edit":"Save Info"}),Object(w.jsx)(q,{type:"text",className:"input-name",disabled:r,value:t.name,onChange:c}),Object(w.jsx)(W,{className:"detailsDescription",disabled:r,value:t.description,onChange:i}),Object(w.jsxs)(Q,{children:[Object(w.jsx)("h2",{children:"Series"}),Object(w.jsx)("ul",{children:t.series.map((function(n){return Object(w.jsx)("li",{className:"seriesList list-group-item",children:n.name},n.id)}))})]}),Object(w.jsx)(x.b,{to:"/marvel-app/",children:Object(w.jsx)(X,{type:"button",className:"back-button",children:"Back"})})]})]})})),Z=function(n){return Object(w.jsx)(x.a,{children:Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{path:"/",element:Object(w.jsx)(j.a,{replace:!0,to:"/marvel-app"})}),Object(w.jsx)(j.b,{path:"/marvel-app/",element:Object(w.jsx)(M,{})}),Object(w.jsx)(j.b,{path:"/character/",element:Object(w.jsx)(Y,{})})]})})},$=t.p+"static/media/marvel.1c2327b4.svg",nn=E.a.nav(b||(b=Object(v.a)(["\n  position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding: .5rem 1rem;\n    background: #000;\n    padding: 30px 45px;\n\n\n    .logo {\n      width: 180px;\n      height: auto;\n      cursor: pointer;\n    }\n"]))),en=Object(y.b)((function(n){return{}}),(function(n){return Object(A.b)({clear:L},n)}))((function(n){n.clear;return Object(w.jsx)(nn,{children:Object(w.jsx)("button",{onClick:function(){window.location.href="/"},children:Object(w.jsx)("img",{src:$,width:"30",height:"30",className:"logo",alt:"Logo Marvel"})})})}));var tn=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(en,{}),Object(w.jsx)(Z,{})]})},an=t(39),rn=t(38),cn=t.n(rn),on=t(3),sn={term:"",list:[],characterData:{name:"",description:"",imgPath:"",series:[]},pageNumber:1,editable:!0},dn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEARCH_CHANGED":return Object(on.a)(Object(on.a)({},n),{},{term:e.payload});case"CHARACTERS_SEARCHED":return Object(on.a)(Object(on.a)({},n),{},{list:e.payload});case"SEARCH_CLEAR":return Object(on.a)(Object(on.a)({},n),{},{term:"",pageNumber:1});case"CHARACTER_SELECTED":return Object(on.a)(Object(on.a)({},n),{},{characterData:{name:e.payload.name,description:e.payload.description,imgPath:e.payload.thumbnail.path,series:e.payload.series.items}});case"CHARACTERS_PAGECHANGE":return Object(on.a)(Object(on.a)({},n),{},{pageNumber:e.payload});case"CHARACTER_EDIT":return Object(on.a)(Object(on.a)({},n),{},{editable:!n.editable});case"NAME_CHANGED":return Object(on.a)(Object(on.a)({},n),{},{characterData:{name:e.payload,description:n.characterData.description,imgPath:n.characterData.imgPath,series:n.characterData.series}});case"DESCRIPTION_CHANGED":return Object(on.a)(Object(on.a)({},n),{},{characterData:{name:n.characterData.name,description:e.payload,imgPath:n.characterData.imgPath,series:n.characterData.series}});default:return n}},ln=Object(A.c)({character:dn}),pn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))},hn=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),bn=Object(A.a)(an.a,cn.a)(A.d)(ln,hn);m.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(y.a,{store:bn,children:Object(w.jsx)(tn,{})})}),document.getElementById("root")),pn()}},[[72,1,2]]]);
//# sourceMappingURL=main.52945d72.chunk.js.map