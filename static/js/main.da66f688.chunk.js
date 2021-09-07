(this["webpackJsonpdeposit-calculator"]=this["webpackJsonpdeposit-calculator"]||[]).push([[0],{30:function(t,n,e){"use strict";e.r(n);var c,i=e(0),a=e.n(i),r=e(12),o=e.n(r),s={usd:2.5005,uer:2.9145,rub:3.3845},l=e(2),u=e(3),b=u.b.div(c||(c=Object(l.a)(["\n  display: flex;\n  padding: 20px;\n  align-items: center;\n  column-gap: 20px;\n  background-color: #5992FF;\n  color: #FFFFFF;\n  \n"]))),j=e(1);var d,O,p,x,h,f,m,v=function(){var t=s.usd,n=s.eur,e=s.rub;return Object(j.jsxs)(b,{children:[Object(j.jsxs)("div",{children:["USD ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("div",{children:["EUR ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{children:["RUB",Object(j.jsx)("sup",{children:"100"})," ",Object(j.jsx)("span",{children:e})]})]})},g=Object(u.a)(d||(d=Object(l.a)(["\n    * {\n      box-sizing: border-box;\n      padding: 0;\n      margin: 0;\n    }\n    body {\n      font-family: 'Montserrat', sans-serif;\n    }\n    h1, h2, h3, h4, h5, h6 {\n      font-family: 'Kumar One', cursive;\n    }\n"]))),y=e(6),C=e(7),F=u.b.div(O||(O=Object(l.a)(["\n  background-color: #5992FF;\n  width: 100%;\n  max-width: 505px;\n  margin: 30px auto 0 auto;\n  padding: 20px;\n"]))),T=u.b.div(p||(p=Object(l.a)(["\n  margin: 20px auto 0 auto;\n  width: 100%;\n  max-width: 370px;\n  row-gap: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),A=u.b.div(x||(x=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),S=u.b.h1(h||(h=Object(l.a)(["\n  font-size: 36px;\n  color: #FFEC43;\n  line-height: 44px;\n"]))),w=u.b.span(f||(f=Object(l.a)(["\n  color: red;\n  font-weight: 500;\n  font-size: 16px;\n"]))),N=e(4),R=e(8),U=u.b.input(m||(m=Object(l.a)(["\n  border-radius: 5px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  padding: 15px 20px;\n  border: none;\n  color: #000;\n"])));var k,D=function(t){var n=t.placeholder,e=Object(R.a)(t,["placeholder"]);return Object(j.jsx)(U,Object(N.a)(Object(N.a)({},e),{},{pattern:"[0-9]*",type:"text",placeholder:n}))},z=u.b.div(k||(k=Object(l.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  align-self: ",";\n  user-select: none;\n  \n  \n  label {\n    margin-left: 10px;\n  }\n  input, label {\n    cursor: pointer;\n  }\n"])),(function(t){return t.leftAlign?"flex-start":""}));var L,B=function(t){var n=t.id,e=t.labelText,c=Object(R.a)(t,["id","labelText"]);return Object(j.jsxs)(z,{leftAlign:!0,children:[Object(j.jsx)("input",Object(N.a)(Object(N.a)({},c),{},{id:n,type:"checkbox"})),Object(j.jsx)("label",{htmlFor:n,children:e})]})},E=u.b.button(L||(L=Object(l.a)(["\n  font-size: 16px;\n  font-family: 'Montserrat', sans-serif;\n  background-color: #e5d116;\n  width: 186px;\n  height: 50px;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  margin-top: 22px;\n  cursor: pointer;\n"])));var W,H=function(t){var n=t.text,e=Object(R.a)(t,["text"]);return Object(j.jsx)(E,Object(N.a)(Object(N.a)({},e),{},{children:n}))},I=u.b.select(W||(W=Object(l.a)(["\n  border-radius: 5px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  padding: 15px 17px;\n  border: none;\n  cursor: pointer;\n"])));var M=function(t){var n=t.placeholder,e=Object(R.a)(t,["placeholder"]);return Object(j.jsxs)(I,Object(N.a)(Object(N.a)({},e),{},{defaultValue:"DEFAULT",name:"currency",id:"",children:[Object(j.jsx)("option",{value:"DEFAULT",disabled:!0,children:n}),Object(j.jsx)("option",{value:"BYN",children:"BYN"}),Object(j.jsx)("option",{value:"USD",children:"USD"}),Object(j.jsx)("option",{value:"EUR",children:"EUR"}),Object(j.jsx)("option",{value:"RUB",children:"RUB"})]}))},_={START_CALCULATIONS:"START_CALCULATIONS"};var Y,J,K,V,$,q,G=Object(C.b)(null,(function(t){return{startCalculations:function(n){return t(function(t){return{type:_.START_CALCULATIONS,payload:Object(N.a)({},t)}}(n))}}}))((function(t){var n=t.startCalculations,e=Object(i.useState)(!1),c=Object(y.a)(e,2),a=c[0],r=c[1],o=Object(i.useState)(!1),s=Object(y.a)(o,2),l=s[0],u=s[1],b=Object(i.useState)(""),d=Object(y.a)(b,2),O=d[0],p=d[1],x=Object(i.useState)(""),h=Object(y.a)(x,2),f=h[0],m=h[1],v=Object(i.useState)(""),g=Object(y.a)(v,2),C=g[0],N=g[1],R=Object(i.useState)(""),U=Object(y.a)(R,2),k=U[0],z=U[1],L=Object(i.useState)(!1),E=Object(y.a)(L,2),W=E[0],I=E[1],_=function(){return f?(r(!1),!0):(r(!0),!1)},Y=function(){return O&&C&&k?(u(!1),!0):(u(!0),!1)},J=function(t){return(t=t.replace(/[^0-9\\.]/g,"")).split(".").length>2&&(t=t.replace(/\.+$/,"")),t.split(".")[1]&&t.split(".")[1].length>2&&(t=t.slice(0,-1)),t};return Object(j.jsxs)(F,{children:[Object(j.jsxs)(A,{children:[Object(j.jsx)(S,{children:"Yanuschik"}),Object(j.jsx)(S,{children:"Bank"})]}),Object(j.jsxs)(T,{children:[Object(j.jsx)(D,{onChange:function(t){p(J(t.target.value))},type:"number",value:O,placeholder:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430"}),Object(j.jsx)(M,{onChange:function(t){m(t.target.value)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}),Object(j.jsx)(D,{onChange:function(t){return N(J(t.target.value))},type:"number",value:C,placeholder:"\u041a\u043e\u043b-\u0432\u043e \u043c\u0435\u0441\u044f\u0446\u0435\u0432"}),Object(j.jsx)(D,{onChange:function(t){return z(J(t.target.value))},type:"number",value:k,placeholder:"\u0413\u043e\u0434\u043e\u0432\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430, %"}),Object(j.jsx)(B,{onChange:function(t){return I(!W)},checked:W,id:"form-button",labelText:"\u0421 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439"}),a?Object(j.jsx)(w,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}):null,l?Object(j.jsx)(w,{children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}):null,Object(j.jsx)(H,{onClick:function(){var t=Y(),e=_();t&&e&&n({depositAmount:O,currency:f,monthCount:C,interestRate:k,withCapitalization:W})},text:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})]})})),P=u.b.div(Y||(Y=Object(l.a)(["\n  margin: 26px auto 26px auto;\n  width: 100%;\n  max-width: 832px;\n  background-color: #F0F0F0;\n  color: #6D6D6D;\n  padding: 18px 22px;\n  line-height: 29px;\n  display: ",";\n"])),(function(t){return t.isCalculationsFinish?"block":"none"})),Q=u.b.div(J||(J=Object(l.a)(["\n"]))),X=u.b.p(K||(K=Object(l.a)(["\n  font-size: 16px;\n"]))),Z=u.b.span(V||(V=Object(l.a)(["\n  font-weight: 500;\n"]))),tt=u.b.a($||($=Object(l.a)(["\n  color: #e5d116;\n  text-decoration: underline;\n  cursor: pointer;\n"]))),nt=u.b.div(q||(q=Object(l.a)(["\n    display: ",";\n"])),(function(t){return t.hidden?"none":"block"})),et=e(5),ct=function(t){return t.deposit},it=Object(et.a)([ct],(function(t){return t.calculations})),at=Object(et.a)([ct],(function(t){return t.depositData})),rt=Object(et.a)([ct],(function(t){return t.isCalculationsFinish})),ot=Object(et.a)([it],(function(t){return t.depositHistory})),st=Object(et.a)([at],(function(t){return t.interestRate}));var lt=Object(et.b)({depositHistory:ot,interestRate:st}),ut=Object(C.b)(lt)((function(t){var n=t.hidden,e=t.interestRate,c=t.depositHistory;return Object(j.jsx)(nt,{hidden:n,children:c&&c.map((function(t,n,c){return c[n+1]?Object(j.jsxs)("p",{children:[n+1,"-\u044f \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f: ",c[n]," + (",c[n]," * ",e," * 31) / (365 * 100) = ",c[n+1]]},n):null}))})}));var bt=Object(et.b)({calculations:it,depositData:at,isCalculationsFinish:rt}),jt=Object(C.b)(bt)((function(t){var n=t.isCalculationsFinish,e=t.calculations,c=t.depositData,a=Object(i.useState)(!0),r=Object(y.a)(a,2),o=r[0],s=r[1],l=e.amountWithTax,u=e.amountTotal,b=e.amountWithoutTax,d=e.amountOfTax,O=c.depositAmount,p=c.currency,x=c.withCapitalization;return Object(j.jsxs)(P,{isCalculationsFinish:n,children:[Object(j.jsxs)(Q,{children:[Object(j.jsxs)(X,{children:["\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430: ",Object(j.jsxs)(Z,{children:[O," ",p]})]}),Object(j.jsxs)(X,{children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430: ",Object(j.jsxs)(Z,{children:[u," ",p]})]}),Object(j.jsxs)(X,{children:["\u0421\u0443\u043c\u043c\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432 \u0431\u0435\u0437 \u0432\u044b\u0447\u0435\u0442\u0430 \u043d\u0430\u043b\u043e\u0433\u0430: ",Object(j.jsxs)(Z,{children:[l," ",p]})]}),Object(j.jsxs)(X,{children:["\u0421\u0443\u043c\u043c\u0430 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432 \u0441 \u0432\u044b\u0447\u0435\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u043d\u0430\u043b\u043e\u0433\u0430: ",Object(j.jsxs)(Z,{children:[b," ",p]})]}),Object(j.jsxs)(X,{children:["\u0421\u0443\u043c\u043c\u0430 \u0432\u044b\u0447\u0442\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u043d\u0430\u043b\u043e\u0433\u0430: ",Object(j.jsxs)(Z,{children:[d," ",p]})]})]}),x?Object(j.jsx)(tt,{onClick:function(){s(!o)},children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0435\u0442"}):null,Object(j.jsx)(ut,{hidden:o})]})}));var dt=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{}),Object(j.jsx)(G,{}),Object(j.jsx)(jt,{isCalculationsComplete:!1})]})},Ot=e(11),pt=e(18),xt=e.n(pt),ht=function(t){var n=t.depositAmount,e=t.monthCount,c=t.interestRate,i=t.withCapitalization,a=ft(n,e,c,i),r=a.amountWithTax,o=a.depositHistory,s=Number(n)+Number(r),l=mt(r);return{amountWithTax:r,amountTotal:s,amountWithoutTax:l,amountOfTax:Number((r-l).toFixed(2)),depositHistory:o}},ft=function(t,n,e,c){if(!c)return{amountWithTax:Number(t*e*(31*n/365)/100).toFixed(2)};for(var i=t,a=[t],r=0;r<n;r++){var o=Number(t*e*31/36500);t=(Number(o)+Number(t)).toFixed(2),a.push(t)}return{amountWithTax:Number(t-i).toFixed(2),depositHistory:a}},mt=function(t){return Number(t-.13*t).toFixed(2)},vt={isCalculationsFinish:!1,depositData:{},calculations:{}},gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _.START_CALCULATIONS:return Object(N.a)(Object(N.a)({},t),{},{depositData:n.payload,calculations:ht(n.payload),isCalculationsFinish:!0});default:return t}},yt=Object(Ot.b)({deposit:gt}),Ct=Object(Ot.c)(yt,Object(Ot.a)(xt.a));o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C.a,{store:Ct,children:Object(j.jsx)(dt,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.da66f688.chunk.js.map