(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(12),s=n.n(a),o=(n(23),n.p,n(24),n(13)),i=n(14),l=n(15),h=n(18),j=n(17),u=n(16),d=n.n(u),b=function(){return d.a.get("https://randomuser.me/api/?results=50")},p=n(0);var m=function(e){return Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",onClick:e.handleSort,children:"First"}),Object(p.jsx)("th",{scope:"col",children:"Last"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"Photo"})]})}),Object(p.jsx)("tbody",{children:e.randomEmployees.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:t+1}),Object(p.jsx)("td",{children:e.name.first}),Object(p.jsx)("td",{children:e.name.last}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.picture.thumbnail})})]})}))})]})};var O=function(e){return Object(p.jsx)("form",{children:Object(p.jsx)("input",{onChange:e.handleInputChange,name:"search",value:e.search,placeholder:"search for employee"})})},f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],original:[],search:""},e.handleInputChange=function(t){var n=t.target,c=n.name,r=n.value;e.setState(Object(o.a)({},c,r));var a=e.state.original.filter((function(e){return e.name.first.toLowerCase().includes(r.toLowerCase())}));e.setState({employees:a})},e.handleSort=function(){var t=e.state.employees.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.setState({employees:t})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({employees:t.data.results,original:t.data.results})}))}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(p.jsx)(m,{randomEmployees:this.state.employees,handleSort:this.handleSort})]})}}]),n}(c.Component);var x=function(){return Object(p.jsx)(f,{})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.2d6af7d2.chunk.js.map