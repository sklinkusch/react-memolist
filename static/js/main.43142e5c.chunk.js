(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),c=(n(15),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),h=n(8),d=n.n(h),p=function(){return i.a.createElement("div",null,i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}))},f=function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"My React ToDoList"))},v=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",null,this.props.items.map(function(e){return i.a.createElement("li",{key:e.id},e.text)}))}}]),t}(a.Component)),b=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({text:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t={id:Date.now(),text:n.state.text};n.setState(function(e){return{items:e.items.concat(t),text:""}})},n.state={},n.state.text="",n.state.items=JSON.parse(localStorage.getItem("items"))||[],n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"save",value:function(){var e=JSON.stringify(this.state.items);localStorage.setItem("items",e)}},{key:"render",value:function(){return this.save(),i.a.createElement("div",null,i.a.createElement(v,{items:this.state.items}),i.a.createElement("p",null,"What do you want to add?"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"item",id:"add-item",onChange:this.handleChange,value:this.state.text}),i.a.createElement("button",null,"Add #",this.state.items.length+1)))}}]),t}(a.Component)),E=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(p,null),i.a.createElement(f,null),i.a.createElement(b,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.43142e5c.chunk.js.map