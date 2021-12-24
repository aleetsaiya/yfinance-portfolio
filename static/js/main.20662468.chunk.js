(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(t,e,a){},21:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a(4),s=a.n(n),i=(a(16),a(2)),o=a(3),c=a(11),l=a.n(c),d=a(7),u=a(5),b=a.n(u),h=a(1),j=function(t){var e=t.series,a=t.labels;return Object(h.jsx)(b.a,{options:Object(d.a)({labels:a},{chart:{foreColor:"#fff"},stroke:{colors:["#161d20"]},colors:["#48b5c4","#1C4E80","#0091D5","#6cb4e4"],dataLabels:{enabled:!1}}),series:e,type:"donut"})},f=(a(21),function(t){var e=t.headRow,a=t.dataRows,n=t.targetData,s=Object(r.useState)(0),i=Object(o.a)(s,2),c=i[0],l=i[1],d=function(t){0===c&&-1===t||5*(c+t)>a.length||l(c+t)},u=function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)};return Object(h.jsxs)("div",{className:"tableBlock",children:[Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:e.map((function(t){return Object(h.jsx)("th",{children:t},t)}))})}),Object(h.jsx)("tbody",{children:a.slice(5*c,5*c+5).map((function(t,e){return Object(h.jsx)("tr",{children:n.map((function(a){if("averageCost"===a){var r=u(t.totalCost/t.totalQuantity,2);return Object(h.jsxs)("td",{children:[" ",r," "]},r.toString()+"-"+e.toString())}return Object(h.jsx)("td",{children:"number"===typeof t[a]?u(t[a],2):t[a]},t[a].toString()+"-"+e.toString())}))},e)}))})]}),Object(h.jsxs)("div",{className:"paging",children:[Object(h.jsx)("button",{className:"page",onClick:function(){return d(-1)},disabled:0===c?"disabled":"",children:"<"}),Object(h.jsx)("button",{className:"page",onClick:function(){return d(1)},disabled:5*(c+1)>a.length?"disabled":"",children:">"})]})]})}),p=function(t){var e=t.title,a=t.data;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"title",style:{fontSize:"15px"},children:e}),Object(h.jsx)("div",{className:"data",style:{fontSize:"35px"},children:a})]})},O=function(t){var e=t.series,a=t.labels,r={chart:{type:"bar",foreColor:"#fff"},yaxis:{labels:{formatter:function(t){return t.toFixed(0)+"%"}}},plotOptions:{bar:{colors:{ranges:[{from:Number.NEGATIVE_INFINITY,to:0,color:"#F15B46"},{from:0,to:Number.MAX_SAFE_INTEGER,color:"#76c68f"}]},columnWidth:"45%"}},dataLabels:{enabled:!1}};return Object(h.jsx)(b.a,{options:Object(d.a)({xaxis:{categories:a}},r),series:[{name:"Profit",data:e}],type:"bar"})},g=(a.p,a(8)),v=(a(22),a(23),function(){var t=Object(r.useState)({infoData:{},enterprises:[],tradingHistory:[]}),e=Object(o.a)(t,2),a=e[0],n=e[1],s=Object(r.useState)(!1),c=Object(o.a)(s,2),d=c[0],u=c[1],b=Object(r.useState)(!1),v=Object(o.a)(b,2),y=v[0],x=v[1],m=Object(r.useState)(1),P=Object(o.a)(m,2),N=P[0],D=P[1],S={headRow:["\u4ee3\u865f","\u80a1\u6578","\u55ae\u4f4d\u6210\u672c","\u6700\u65b0\u50f9","\u6301\u80a1\u5360\u6bd4"],targetData:["symbol","totalQuantity","averageCost","currentPrice","holdingPercent"]},k={headRow:["\u4ee3\u865f","\u4ea4\u6613\u6642\u9593","\u80a1\u6578","\u6210\u4ea4\u50f9","\u91d1\u984d"],targetData:["symbol","tradingDate","quantity","purchasePrice","totalCost"]};Object(r.useEffect)((function(){document.title="Portfolio",d&&N>0&&setTimeout((function(){return D(N-1)}),1e3)}));var C=function(t,e){for(var a=0;a<t.length;a++)if(t[a].symbol===e)return a;return!1},I=function(t){var e=[],a={symbol:t[0].indexOf("Symbol"),purchasePrice:t[0].indexOf("Purchase Price"),quantity:t[0].indexOf("Quantity"),tradingDate:t[0].indexOf("Trade Date"),currentPrice:t[0].indexOf("Current Price")};if(Q(t[0])){for(var r=1;r<t.length;r++)t[r][a.symbol]&&t[r][a.purchasePrice]&&t[r][a.quantity]&&e.push(t[r]);w(e,a)}},w=function(t,e){var a=T(t,e),r=a.infoData,s=a.enterprises,i=E(t,e);n({enterprises:s,tradingHistory:i,infoData:r}),u(!0)},T=function(t,e){var a,r=[],n=0,s=0,o=0,c=Object(i.a)(t);try{for(c.s();!(a=c.n()).done;){var l=a.value,d=l[e.symbol],u=parseFloat(l[e.currentPrice]),b=parseFloat(l[e.tradingDate]),h=parseFloat(l[e.purchasePrice]),j=parseFloat(l[e.quantity]);n+=h*j,o+=u*j;var f=C(r,d);!1!==f?(r[f].tradingHistory.push({purchasePrice:h,quantity:j}),r[f].totalCost+=h*j,r[f].totalQuantity+=j):r.push({symbol:d,currentPrice:u,tradingDate:b,totalCost:h*j,totalQuantity:j,tradingHistory:[{purchasePrice:h,quantity:j}]})}}catch(k){c.e(k)}finally{c.f()}for(var p=0,O=r;p<O.length;p++){var g=O[p];g.holdingPercent=Math.round(g.currentPrice*g.totalQuantity/o*1e4)/100;var v,y=0,x=g.currentPrice,m=Object(i.a)(g.tradingHistory);try{for(m.s();!(v=m.n()).done;){var P=v.value;y+=(x-P.purchasePrice)*P.quantity}}catch(k){m.e(k)}finally{m.f()}g.totalProfit=y,s+=y}r.sort((function(t,e){return e.holdingPercent-t.holdingPercent}));for(var N=0,D=r;N<D.length;N++){var S=D[N];S.holdingPercent=S.holdingPercent.toString()+"%"}return{infoData:{totalCost:(Math.round(100*n)/100).toString(),myAsset:(Math.round(100*(n+s))/100).toString(),ROI:(Math.round(s/n*1e4)/100).toString()+"%",totalProfit:s>0?"+"+(Math.round(100*s)/100).toString():(Math.round(100*s)/100).toString()},enterprises:r}},E=function(t,e){var a,r=[],n=Object(i.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value,o=s[e.symbol],c=s[e.tradingDate],l=parseFloat(s[e.purchasePrice]),d=parseFloat(s[e.quantity]);c=c?c.slice(0,4)+"/"+c.slice(4,6)+"/"+c.slice(6,8):"NaN",r.push({symbol:o,tradingDate:c,quantity:d,purchasePrice:l,totalCost:l*d})}}catch(u){n.e(u)}finally{n.f()}return r.sort((function(t,e){if("NaN"===t.tradingDate&&"NaN"!==e.tradingDate)return 1;if("NaN"!==t.tradingDate&&"NaN"===e.tradingDate)return-1;var a=t.tradingDate.split("/"),r=e.tradingDate.split("/");return parseInt(a[0])>parseInt(r[0])?-1:parseInt(a[0])<parseInt(r[0])?1:parseInt(a[1])>parseInt(r[1])?-1:parseInt(a[1])<parseInt(r[1])?1:parseInt(a[2])>parseInt(r[2])?-1:parseInt(a[2])<parseInt(r[2])?1:void 0})),r},F=function(){var t,e=[],r=Object(i.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(n.symbol)}}catch(s){r.e(s)}finally{r.f()}return e},M=function(){var t,e=[],r=Object(i.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(Math.round(100*n.totalCost)/100)}}catch(s){r.e(s)}finally{r.f()}return e},R=function(){var t,e=[],r=Object(i.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(Math.round(n.totalProfit/n.totalCost*1e4)/100)}}catch(s){r.e(s)}finally{r.f()}return e},Q=function(t){for(var e=0,a=["Symbol","Purchase Price","Quantity","Current Price","Trade Date"];e<a.length;e++){var r=a[e];if(-1===t.indexOf(r))return x(!1),g.b.error("Please check your csv file."),!1}return!0};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("div",{className:!d||d&&N<=0?"hide":"load"}),Object(h.jsxs)("div",{className:d?"hide":"",children:[Object(h.jsx)("div",{className:"drag-file-block",onDragEnter:function(t){t.stopPropagation(),t.preventDefault(),x(!0)},onDragOver:function(t){t.stopPropagation(),t.preventDefault()},onDragLeave:function(t){t.preventDefault(),t.stopPropagation(),x(!1)},onDrop:function(t){if(t.preventDefault(),t.stopPropagation(),"file"===t.dataTransfer.items[0].kind){var e=t.dataTransfer.items[0].getAsFile(),a=new FileReader;a.onload=function(){var t,e=a.result.split("\n"),r=[],n=Object(i.a)(e);try{for(n.s();!(t=n.n()).done;){var s=t.value;r.push(s.split(","))}}catch(o){n.e(o)}finally{n.f()}I(r)},a.readAsBinaryString(e)}else g.b.error("Please check your csv file"),x(!1)},style:y?{backgroundColor:"rgba(173, 216, 230, .5)"}:{backgroundColor:"inherit"},children:Object(h.jsx)("div",{className:"dropInfo",children:"\u5c07 csv \u6a94\u62d6\u66f3\u81f3\u6b64"})}),Object(h.jsxs)("label",{className:"input-label",children:[Object(h.jsx)("span",{children:"\ud83d\udcc1 \u4e0a\u50b3\u6a94\u6848"}),Object(h.jsx)("div",{style:{display:"none"},children:Object(h.jsx)(l.a,{onFileLoaded:function(t){I(t)}})})]}),Object(h.jsx)("label",{className:"input-label",onClick:function(){w([["SMH","300","2021/12/6","16:00 EST","-1.1499939","299.57","301.38","290.51","5105964","20211206","299.02","0.96984","","","",""],["MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211126","334.11","0.29929","","","",""],["MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211206","324.71","1.75542","","","",""],["VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211126","424.96","0.35298","","","",""],["VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211206","419.85","2.71527","","","",""],["QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211126","396.07","0.25248","","","",""],["QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211206","384.08","2.23912","","","",""]],{symbol:0,purchasePrice:10,quantity:11,tradingDate:9,currentPrice:1})},children:Object(h.jsx)("span",{children:"\ud83d\udca1 \u4f7f\u7528\u7bc4\u4f8b"})})]}),Object(h.jsxs)("main",{style:d&&N<=0?{}:{visibility:"hidden"},children:[Object(h.jsxs)("div",{className:"block-row",id:"info",children:[Object(h.jsx)(p,{data:a.infoData.totalCost,title:"\u6295\u5165\u91d1\u984d"}),Object(h.jsx)(p,{data:a.infoData.myAsset,title:"\u80a1\u7968\u5e02\u503c"}),Object(h.jsx)(p,{data:a.infoData.ROI,title:"\u5831\u916c\u7387",highlight:!0}),Object(h.jsx)(p,{data:a.infoData.totalProfit,title:"\u7e3d\u640d\u76ca"})]}),Object(h.jsx)("div",{className:"block-title res-title",children:Object(h.jsx)("h3",{children:"\u6301\u80a1\u72c0\u6cc1"})}),Object(h.jsxs)("div",{className:"block-row",children:[Object(h.jsx)("div",{className:"left chart",children:Object(h.jsx)(j,{series:0===M().length?[8e4,45e3,16e3]:M(),labels:0===F().length?["stock1","stock2","stock3"]:F()})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)(f,{headRow:S.headRow,dataRows:a.enterprises,targetData:S.targetData})})]}),Object(h.jsxs)("div",{className:"block-row",children:[Object(h.jsxs)("div",{className:"left chart",style:{color:"#000"},children:[Object(h.jsx)("div",{className:"block-title",children:Object(h.jsx)("h3",{children:"\u7e3e\u6548"})}),Object(h.jsx)(O,{series:0===R().length?[5,3,-10,10,7]:R(),labels:0===F().length?["stock1","stock2","stock3","stock4","stock5"]:F()})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("div",{className:"block-title",children:Object(h.jsx)("h3",{children:"\u4ea4\u6613\u7d00\u9304"})}),Object(h.jsx)(f,{headRow:k.headRow,dataRows:a.tradingHistory,targetData:k.targetData})]})]}),Object(h.jsx)("div",{className:"footer"})]}),Object(h.jsx)(g.a,{position:"top-right",autoClose:5e3,theme:"dark",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})});s.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.20662468.chunk.js.map