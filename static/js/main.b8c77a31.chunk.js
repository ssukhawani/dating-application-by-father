(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a.n(s),i=a(4),l=a.n(i),r=(a(14),a(3)),o=a(5),u=a(6),d=a(8),j=a(7),m=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).clickhandler=function(){return n.setState({Customerlist:[].concat(Object(r.a)(n.state.Customerlist),[n.state.customerName]),totalTips:[].concat(Object(r.a)(n.state.totalTips),[n.state.tipAmt])})},n.clickhandler2=function(){if(0!==n.state.totalTips.length)var t=n.state.totalTips.reduce((function(t,e){return t+e}));else if(0===n.state.totalTips.length)return 0;return n.setState({totalCustomer:n.state.Customerlist.length,totalTipAmount:t})},n.state={Customerlist:[],billAmt:0,tipAmt:0,customerName:"",tipPercent:20,totalTips:[],totalCustomer:0,totalTipAmount:0},n}return Object(u.a)(a,[{key:"calculation",value:function(){var t=Number(document.getElementById("rangepercent").value);this.setState({tipPercent:t,tipAmt:this.state.billAmt*t/100}),document.getElementById("tipid").innerHTML=t+"%";document.getElementById("tipvalue").innerHTML={5:"bad",10:"Moderate",15:"Good",20:"Excellent"}[t]}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)("h1",{children:"Tip Calculator"}),Object(n.jsxs)("div",{className:"section1",children:[Object(n.jsxs)("div",{className:"bill",children:[Object(n.jsx)("label",{children:"Enter Bill Amount "}),Object(n.jsx)("input",{type:"number",placeholder:"Enter Bill Amount",required:!0,onChange:function(e){t.setState({tipAmt:e.target.value*t.state.tipPercent/100,billAmt:e.target.value})}})]}),Object(n.jsxs)("div",{className:"range",children:[Object(n.jsx)("label",{children:"How Was the Service?"}),Object(n.jsx)("input",{type:"range",min:"5",max:"20",step:"5",defaultValue:this.state.tipPercent,id:"rangepercent",onChange:function(){t.calculation()}})]}),Object(n.jsxs)("div",{className:"space-between",children:[Object(n.jsx)("label",{id:"tipvalue",children:"Excellent"}),Object(n.jsx)("span",{id:"tipid",children:"20%"})]}),Object(n.jsxs)("div",{className:"addCustomer",children:[Object(n.jsx)("input",{type:"text",placeholder:"Customer Name",required:!0,onChange:function(e){t.setState({customerName:e.target.value})}}),Object(n.jsx)("button",{onClick:function(){return t.clickhandler()},children:"Add Customer"})]})]}),Object(n.jsx)("div",{className:"section2",children:Object(n.jsx)("ul",{children:this.state.Customerlist.map((function(e,a){return Object(n.jsx)("li",{children:e+" Offering a tip of "+t.state.totalTips[a]+" Rupee"},a)}))})}),Object(n.jsxs)("div",{className:"section3",children:[Object(n.jsx)("div",{className:"lastButton",children:Object(n.jsx)("button",{onClick:function(){return t.clickhandler2()},children:"Calculate Total Tip & Customers"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"space-between",id:"totalname",children:[Object(n.jsx)("label",{children:"Total Customers "}),Object(n.jsx)("label",{children:" Total Tip"})]}),Object(n.jsxs)("div",{className:"space-between",id:"values",children:[Object(n.jsxs)("span",{id:"totalCustomer",children:[this.state.totalCustomer," "]}),Object(n.jsxs)("span",{id:"totaltip",children:[" ",this.state.totalTipAmount]})]})]})]})}}]),a}(c.a.Component);a(15);var b=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{})})};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b8c77a31.chunk.js.map