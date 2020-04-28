(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/logo.68a30b83.png"},30:function(e,a,t){e.exports=t(43)},35:function(e,a,t){},36:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),i=(t(35),t(28)),s=t(21),u=t(22),o=t(8),m=t(27),d=t(29),h=(t(36),function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()}))}),p=function(e){return r.a.createElement("div",{className:"character"},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Species: ",e.species))},f=t(6),v=function(e){console.log(e.inputValue);var a=e.dataList,t=a.length?"":r.a.createElement("div",{className:"input-error"},"There are no characters with that name. Try again.");return r.a.createElement("div",null,t,r.a.createElement("ul",{className:"character-list"},a.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(f.b,{to:"/character/".concat(e.id)},r.a.createElement(p,{img:e.image,name:e.name,species:e.species})))}))))},b=function(e){return r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:e.value,onChange:function(a){e.handleInputValue(a.currentTarget.value),a.preventDefault()}}))},E=t(16),g=t(12),j=t.n(g),O=t(17);function y(){var e=Object(E.a)(["\n      background: black;\n      color: white;\n    "]);return y=function(){return e},e}function N(){var e=Object(E.a)(["\n    background: black;\n    border-radius: 3px;\n    border: 2px solid black;\n    color: white;\n    margin: 0.5em 1em;\n    padding: 0.25em 1em;\n\n    ","\n  "]);return N=function(){return e},e}var k=function(e){console.log(e);var a=O.b.button(N(),(function(e){return e.primary&&Object(O.a)(y())}));return r.a.createElement("div",{className:"character-details"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:j.a,alt:"logo"}),r.a.createElement(f.b,{to:"/"},r.a.createElement(a,null,"Back"))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"character-image",src:e.characterObj.image,alt:e.characterObj.name})),r.a.createElement("div",{className:"card-details"},r.a.createElement("p",null,"Name: ",e.characterObj.name),r.a.createElement("p",null,"Species: ",e.characterObj.species),r.a.createElement("p",null,"Origin: ",e.characterObj.origin.name),r.a.createElement("p",null,"Number of episodes: ",e.characterObj.episode.length),r.a.createElement("p",null,"Current Status: ",e.characterObj.status,r.a.createElement("i",{className:"".concat("Alive"===e.characterObj.status?"fas fa-smile":"Dead"===e.characterObj.status?"fas fa-skull-crossbones":"fas fa-question")})))))},I=t(5),S=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleInputValue=n.handleInputValue.bind(Object(o.a)(n)),n.renderCharacterDetail=n.renderCharacterDetail.bind(Object(o.a)(n)),n.applyFilters=n.applyFilters.bind(Object(o.a)(n)),n.state={data:[],value:""},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;h().then((function(a){e.setState({data:a.results})}));var a=JSON.parse(localStorage.getItem("inputValue"));null!==a&&this.setState({value:a}),console.log(this.state)}},{key:"componentDidUpdate",value:function(){localStorage.setItem("inputValue",JSON.stringify(this.state.value)),console.log(this.state)}},{key:"handleInputValue",value:function(e){this.setState({value:e}),console.log(this.state.value)}},{key:"applyFilters",value:function(){var e=this.state,a=e.data,t=e.value;return a.filter((function(e){return""===t||e.name.toLowerCase().includes(t.toLowerCase())}))}},{key:"renderCharacterDetail",value:function(e){console.log(e);var a,t=e.match.params.id,n=this.state.data,c=Object(i.a)(n);try{for(c.s();!(a=c.n()).done;){var l=a.value;if(l.id===parseInt(t))return r.a.createElement(k,{characterObj:l,alive:l.status})}}catch(s){c.e(s)}finally{c.f()}}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.value,n=e.found;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/"},r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:j.a}),r.a.createElement(b,{handleInputValue:this.handleInputValue,value:t,found:n,handleFound:this.handleFound})),r.a.createElement("main",{className:"main"},r.a.createElement(v,{characters:a,inputValue:t,dataList:this.applyFilters()}))),r.a.createElement(I.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(f.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0a87d3e9.chunk.js.map