(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(t,e,a){},21:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(4),s=a.n(n),o=(a(16),a(2)),i=a(3),c=a(11),l=a.n(c),d=a(7),u=a(5),b=a.n(u),j=a(1),h=function(t){var e=t.series,a=t.labels;return Object(j.jsx)(b.a,{options:Object(d.a)({labels:a},{chart:{foreColor:"#fff"},stroke:{colors:["#161d20"]},colors:["#48b5c4","#1C4E80","#0091D5","#6cb4e4"],dataLabels:{enabled:!1}}),series:e,type:"donut"})},f=(a(21),function(t){var e=t.headRow,a=t.dataRows,n=t.targetData,s=Object(r.useState)(0),o=Object(i.a)(s,2),c=o[0],l=o[1],d=function(t){0===c&&-1===t||5*(c+t)>a.length||l(c+t)},u=function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)};return Object(j.jsxs)("div",{className:"tableBlock",children:[Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:e.map((function(t){return Object(j.jsx)("th",{children:t},t)}))})}),Object(j.jsx)("tbody",{children:a.slice(5*c,5*c+5).map((function(t,e){return Object(j.jsx)("tr",{children:n.map((function(a){if("averageCost"===a){var r=u(t.totalCost/t.totalQuantity,2);return Object(j.jsxs)("td",{children:[" ",r," "]},r.toString()+"-"+e.toString())}return Object(j.jsx)("td",{children:"number"===typeof t[a]?u(t[a],2):t[a]},t[a].toString()+"-"+e.toString())}))},e)}))})]}),Object(j.jsxs)("div",{className:"paging",children:[Object(j.jsx)("button",{className:"page",onClick:function(){return d(-1)},disabled:0===c?"disabled":"",children:"<"}),Object(j.jsx)("button",{className:"page",onClick:function(){return d(1)},disabled:5*(c+1)>a.length?"disabled":"",children:">"})]})]})}),O=function(t){var e=t.title,a=t.data;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"title",style:{fontSize:"15px"},children:e}),Object(j.jsx)("div",{className:"data",style:{fontSize:"35px"},children:a})]})},p=function(t){var e=t.series,a=t.labels,r={chart:{type:"bar",foreColor:"#fff"},yaxis:{labels:{formatter:function(t){return t.toFixed(0)+"%"}}},plotOptions:{bar:{colors:{ranges:[{from:Number.NEGATIVE_INFINITY,to:0,color:"#F15B46"},{from:0,to:Number.MAX_SAFE_INTEGER,color:"#76c68f"}]},columnWidth:"45%"}},dataLabels:{enabled:!1}};return Object(j.jsx)(b.a,{options:Object(d.a)({xaxis:{categories:a}},r),series:[{name:"Profit",data:e}],type:"bar"})},v=a.p+"static/media/file-regular.1caaa464.svg",g=a(8),y=(a(22),a(23),function(){var t=Object(r.useState)({infoData:{},enterprises:[],tradingHistory:[]}),e=Object(i.a)(t,2),a=e[0],n=e[1],s=Object(r.useState)(!1),c=Object(i.a)(s,2),d=c[0],u=c[1],b=Object(r.useState)(!1),y=Object(i.a)(b,2),x=y[0],m=y[1],P=Object(r.useState)(1),D=Object(i.a)(P,2),N=D[0],k=D[1],C={headRow:["\u4ee3\u865f","\u80a1\u6578","\u55ae\u4f4d\u6210\u672c","\u6700\u65b0\u50f9","\u6301\u80a1\u5360\u6bd4"],targetData:["symbol","totalQuantity","averageCost","currentPrice","holdingPercent"]},S={headRow:["\u4ee3\u865f","\u4ea4\u6613\u6642\u9593","\u80a1\u6578","\u6210\u4ea4\u50f9","\u91d1\u984d"],targetData:["symbol","tradingDate","quantity","purchasePrice","totalCost"]};Object(r.useEffect)((function(){d&&N>0&&setTimeout((function(){return k(N-1)}),1e3)}));var w=function(t,e){for(var a=0;a<t.length;a++)if(t[a].symbol===e)return a;return!1},F=function(t){var e=[],a={symbol:t[0].indexOf("Symbol"),purchasePrice:t[0].indexOf("Purchase Price"),quantity:t[0].indexOf("Quantity"),tradingDate:t[0].indexOf("Trade Date"),currentPrice:t[0].indexOf("Current Price")};if(A(t[0])){for(var r=1;r<t.length;r++)t[r][a.symbol]&&t[r][a.purchasePrice]&&t[r][a.quantity]&&e.push(t[r]);R(e,a)}},R=function(t,e){var a=M(t,e),r=a.infoData,s=a.enterprises,o=I(t,e);n({enterprises:s,tradingHistory:o,infoData:r}),u(!0)},M=function(t,e){var a,r=[],n=0,s=0,i=Object(o.a)(t);try{for(i.s();!(a=i.n()).done;){var c=a.value,l=c[e.symbol],d=parseFloat(c[e.currentPrice]),u=parseFloat(c[e.tradingDate]),b=parseFloat(c[e.purchasePrice]),j=parseFloat(c[e.quantity]);n+=b*j;var h=w(r,l);!1!==h?(r[h].tradingHistory.push({purchasePrice:b,quantity:j}),r[h].totalCost+=b*j,r[h].totalQuantity+=j):r.push({symbol:l,currentPrice:d,tradingDate:u,totalCost:b*j,totalQuantity:j,tradingHistory:[{purchasePrice:b,quantity:j}]})}}catch(P){i.e(P)}finally{i.f()}for(var f=0,O=r;f<O.length;f++){var p=O[f];p.holdingPercent=(Math.round(p.totalCost/n*1e4)/100).toString()+"%";var v,g=0,y=p.currentPrice,x=Object(o.a)(p.tradingHistory);try{for(x.s();!(v=x.n()).done;){var m=v.value;g+=(y-m.purchasePrice)*m.quantity}}catch(P){x.e(P)}finally{x.f()}p.totalProfit=g,s+=g}return{infoData:{totalCost:(Math.round(100*n)/100).toString(),myAsset:(Math.round(100*(n+s))/100).toString(),ROI:(Math.round(s/n*1e4)/100).toString()+"%",totalProfit:s>0?"+"+(Math.round(100*s)/100).toString():(Math.round(100*s)/100).toString()},enterprises:r}},I=function(t,e){var a,r=[],n=Object(o.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value,i=s[e.symbol],c=s[e.tradingDate],l=parseFloat(s[e.purchasePrice]),d=parseFloat(s[e.quantity]);c=c?c.slice(0,4)+"/"+c.slice(4,6)+"/"+c.slice(6,8):"NaN",r.push({symbol:i,tradingDate:c,quantity:d,purchasePrice:l,totalCost:l*d})}}catch(u){n.e(u)}finally{n.f()}return r},q=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(n.symbol)}}catch(s){r.e(s)}finally{r.f()}return e},E=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(Math.round(100*n.totalCost)/100)}}catch(s){r.e(s)}finally{r.f()}return e},T=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(Math.round(n.totalProfit/n.totalCost*1e4)/100)}}catch(s){r.e(s)}finally{r.f()}return e},A=function(t){for(var e=0,a=["Symbol","Purchase Price","Quantity","Current Price","Trade Date"];e<a.length;e++){var r=a[e];if(-1===t.indexOf(r))return m(!1),g.b.error("Please check your csv file."),!1}return!0};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("div",{className:!d||d&&N<=0?"hide":"load",children:console.log(0===N)}),Object(j.jsxs)("div",{className:d?"hide":"",children:[Object(j.jsx)("div",{className:"drag-file-block",onDragEnter:function(t){t.stopPropagation(),t.preventDefault(),m(!0),console.log("enter")},onDragOver:function(t){t.stopPropagation(),t.preventDefault()},onDragLeave:function(t){t.preventDefault(),t.stopPropagation(),m(!1),console.log("leave")},onDrop:function(t){if(t.preventDefault(),t.stopPropagation(),"file"===t.dataTransfer.items[0].kind){var e=t.dataTransfer.items[0].getAsFile(),a=new FileReader;a.onload=function(){var t,e=a.result.split("\n"),r=[],n=Object(o.a)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;r.push(s.split(","))}}catch(i){n.e(i)}finally{n.f()}F(r)},a.readAsBinaryString(e)}else g.b.error("Please check your csv file"),m(!1)},style:x?{backgroundColor:"rgba(173, 216, 230, .5)"}:{backgroundColor:"inherit"},children:Object(j.jsx)("div",{children:"\u62d6\u62c9 csv \u6a94\u81f3\u6b64"})}),Object(j.jsxs)("label",{className:"input-label",children:[Object(j.jsx)("img",{src:v,className:"csvIcon",alt:"csvIcon"}),Object(j.jsx)("span",{children:"\u4e0a\u50b3\u6a94\u6848"}),Object(j.jsx)("div",{style:{display:"none"},children:Object(j.jsx)(l.a,{onFileLoaded:function(t){F(t)}})})]})]}),Object(j.jsxs)("main",{style:d&&N<=0?{}:{visibility:"hidden"},children:[Object(j.jsxs)("div",{className:"block-row",id:"info",children:[Object(j.jsx)(O,{data:a.infoData.totalCost,title:"\u6295\u5165\u91d1\u984d"}),Object(j.jsx)(O,{data:a.infoData.myAsset,title:"\u80a1\u7968\u5e02\u503c"}),Object(j.jsx)(O,{data:a.infoData.ROI,title:"\u5831\u916c\u7387",highlight:!0}),Object(j.jsx)(O,{data:a.infoData.totalProfit,title:"\u7e3d\u640d\u76ca"})]}),Object(j.jsx)("div",{className:"block-title res-title",children:Object(j.jsx)("h3",{children:"\u6301\u80a1\u72c0\u6cc1"})}),Object(j.jsxs)("div",{className:"block-row",children:[Object(j.jsx)("div",{className:"left chart",children:Object(j.jsx)(h,{series:0===E().length?[8e4,45e3,16e3]:E(),labels:0===q().length?["stock1","stock2","stock3"]:q()})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(f,{headRow:C.headRow,dataRows:a.enterprises,targetData:C.targetData})})]}),Object(j.jsxs)("div",{className:"block-row",children:[Object(j.jsxs)("div",{className:"left chart",style:{color:"#000"},children:[Object(j.jsx)("div",{className:"block-title",children:Object(j.jsx)("h3",{children:"\u7e3e\u6548"})}),Object(j.jsx)(p,{series:0===T().length?[5,3,-10,10,7]:T(),labels:0===q().length?["stock1","stock2","stock3","stock4","stock5"]:q()})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"block-title",children:Object(j.jsx)("h3",{children:"\u4ea4\u6613\u7d00\u9304"})}),Object(j.jsx)(f,{headRow:S.headRow,dataRows:a.tradingHistory,targetData:S.targetData})]})]}),Object(j.jsx)("div",{className:"footer"})]}),Object(j.jsx)(g.a,{position:"top-right",autoClose:5e3,theme:"dark",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})});s.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9d2f878b.chunk.js.map