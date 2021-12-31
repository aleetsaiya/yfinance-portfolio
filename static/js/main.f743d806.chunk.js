(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(t,e,a){},35:function(t,e,a){},55:function(t,e,a){},56:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a(9),s=a.n(n),o=(a(28),a(3)),i=a(5),c=a.n(i),l=a(12),u=a(4),d=a(11),f=a(6),b=a.n(f),h=a(0),j=function(t){var e=t.series,a=t.labels;return Object(h.jsx)(b.a,{options:Object(d.a)({labels:a},{chart:{foreColor:"#fff"},stroke:{colors:["#161d20"]},colors:["#ED5565","#FFCE54","#48CFAD","#4FC1E9","#FC6E51","#5D9CEC"],dataLabels:{enabled:!1}}),series:e,type:"donut",height:"200px"})},p=(a(35),function(t){var e=t.headRow,a=t.dataRows,n=t.targetData,s=Object(r.useState)(0),o=Object(u.a)(s,2),i=o[0],c=o[1],l=function(t){0===i&&-1===t||5*(i+t)>a.length||c(i+t)},d=function(t,e){return Math.round(t*Math.pow(10,e))/Math.pow(10,e)};return Object(h.jsxs)("div",{className:"tableBlock",children:[Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:e.map((function(t){return Object(h.jsx)("th",{children:t},t)}))})}),Object(h.jsx)("tbody",{children:a.slice(5*i,5*i+5).map((function(t,e){return Object(h.jsx)("tr",{children:n.map((function(a){if("averageCost"===a){var r=d(t.totalCost/t.totalQuantity,2);return Object(h.jsxs)("td",{children:[" ",r," "]},r.toString()+"-"+e.toString())}return"holdingPercent"===a?Object(h.jsx)("td",{children:t[a]+"%"},t[a].toString()+"-"+e.toString()):Object(h.jsx)("td",{children:"number"===typeof t[a]?d(t[a],2):t[a]},t[a].toString()+"-"+e.toString())}))},e)}))})]}),Object(h.jsxs)("div",{className:"paging",children:[Object(h.jsx)("button",{className:"page",onClick:function(){return l(-1)},disabled:0===i?"disabled":"",children:"<"}),Object(h.jsx)("button",{className:"page",onClick:function(){return l(1)},disabled:5*(i+1)>a.length?"disabled":"",children:">"})]})]})}),g=function(t){var e=t.title,a=t.data;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"title",style:{fontSize:"15px"},children:e}),Object(h.jsx)("div",{className:"data",style:{fontSize:"35px"},children:a})]})},O=function(t){var e=t.series,a=t.labels,r={chart:{type:"bar",foreColor:"#fff"},yaxis:{labels:{formatter:function(t){return t.toFixed(2)+"%"}}},plotOptions:{bar:{colors:{ranges:[{from:Number.NEGATIVE_INFINITY,to:0,color:"#F15B46"},{from:0,to:Number.MAX_SAFE_INTEGER,color:"#76c68f"}]},columnWidth:"45%"}},dataLabels:{enabled:!1}};return Object(h.jsx)(b.a,{options:Object(d.a)({xaxis:{categories:a}},r),series:[{name:"Profit",data:e}],type:"bar",height:"240px"})},v=function(t){var e=t.data;return Object(h.jsx)(b.a,{options:{chart:{height:350,type:"area",foreColor:"#fff",zoom:{enabled:!1}},stroke:{curve:"straight"},xaxis:{type:"datetime"},yaxis:{labels:{formatter:function(t){return t.toFixed(1)}}},dataLabels:{enabled:!1}},series:[{name:"price",data:e}],type:"area",style:{color:"#000"},height:"300px"})},y=a(13),m=(a(36),a(23)),x=a.n(m),D=(a(55),function(){var t=Object(r.useState)({infoData:{},enterprises:[],tradingHistory:[]}),e=Object(u.a)(t,2),a=e[0],n=e[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),d=i[0],f=i[1],b=Object(r.useState)(!1),m=Object(u.a)(b,2),D=m[0],N=m[1],S=Object(r.useState)(2),k=Object(u.a)(S,2),P=k[0],C=k[1],w=Object(r.useState)([{x:new Date(16402698e5).toLocaleString(),y:100}]),I=Object(u.a)(w,2),F=I[0],E=I[1],M={headRow:["\u4ee3\u865f","\u80a1\u6578","\u55ae\u4f4d\u6210\u672c","\u6700\u65b0\u50f9","\u6301\u80a1\u5360\u6bd4"],targetData:["symbol","totalQuantity","averageCost","currentPrice","holdingPercent"]},T={headRow:["\u4ee3\u865f","\u4ea4\u6613\u6642\u9593","\u80a1\u6578","\u6210\u4ea4\u50f9","\u91d1\u984d"],targetData:["symbol","tradingDate","quantity","purchasePrice","totalCost"]};Object(r.useEffect)((function(){document.title="Portfolio",d&&P>0&&setTimeout((function(){return C((function(t){return t-1}))}),1e3)})),Object(r.useEffect)((function(){0!==a.tradingHistory.length&&G(0,7)}),[a]);var Q=function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,V();case 3:q([["SMH","300","2021/12/6","16:00 EST","-1.1499939","299.57","301.38","290.51","5105964","20211206","299.02","0.96984","","","",""],["MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211126","334.11","0.29929","","","",""],["MSFT","326.19","2021/12/6","16:00 EST","3.1799927","323.95","327.42","319.23","30032556","20211206","324.71","1.75542","","","",""],["VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211126","424.96","0.35298","","","",""],["VOO","421.82","2021/12/6","16:00 EST","4.98001","419.41","423.64","417","7124862","20211206","419.85","2.71527","","","",""],["QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211126","396.07","0.25248","","","",""],["QQQ","386.2","2021/12/6","16:00 EST","3.0700073","383.63","387.6","379.31","64706783","20211206","384.08","2.23912","","","",""]],{symbol:0,purchasePrice:10,quantity:11,tradingDate:9});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(l.a)(c.a.mark((function t(e){var a,r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=[],r={symbol:e[0].indexOf("Symbol"),purchasePrice:e[0].indexOf("Purchase Price"),quantity:e[0].indexOf("Quantity"),tradingDate:e[0].indexOf("Trade Date")},console.log("in loadData"),!Y(e[0])){t.next=9;break}for(n=1;n<e.length;n++)e[n][r.symbol]&&e[n][r.purchasePrice]&&e[n][r.quantity]&&e[n][r.tradingDate]&&a.push(e[n]);return f(!0),t.next=8,V();case 8:q(a,r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(t,e){var a=H(t,e),r=a.infoData,s=a.enterprises,o=A(t,e);n({enterprises:s,tradingHistory:o,infoData:r})},H=function(t,e){var a,r=[],n=0,s=0,i=0,c={},l=JSON.parse(sessionStorage.getItem("symbols")),u=Object(o.a)(l);try{for(u.s();!(a=u.n()).done;){var d=a.value;c[d.symbol]=d.data[d.data.length-1]}}catch(w){u.e(w)}finally{u.f()}var f,b=Object(o.a)(t);try{for(b.s();!(f=b.n()).done;){var h=f.value,j=h[e.symbol],p=c[j],g=parseFloat(h[e.tradingDate]),O=parseFloat(h[e.purchasePrice]),v=parseFloat(h[e.quantity]);n+=O*v,i+=p*v;var y=function(t,e){for(var a=0;a<t.length;a++)if(t[a].symbol===e)return a;return!1}(r,j);!1!==y?(r[y].tradingHistory.push({purchasePrice:O,quantity:v}),r[y].totalCost+=O*v,r[y].totalQuantity+=v):r.push({symbol:j,currentPrice:p,tradingDate:g,totalCost:O*v,totalQuantity:v,tradingHistory:[{purchasePrice:O,quantity:v}]})}}catch(w){b.e(w)}finally{b.f()}for(var m=0,x=r;m<x.length;m++){var D=x[m];D.holdingPercent=Math.round(D.currentPrice*D.totalQuantity/i*1e4)/100;var N,S=0,k=D.currentPrice,P=Object(o.a)(D.tradingHistory);try{for(P.s();!(N=P.n()).done;){var C=N.value;S+=(k-C.purchasePrice)*C.quantity}}catch(w){P.e(w)}finally{P.f()}D.totalProfit=S,s+=S}return r.sort((function(t,e){return e.holdingPercent-t.holdingPercent})),{infoData:{totalCost:(Math.round(100*n)/100).toString(),myAsset:(Math.round(100*(n+s))/100).toString(),ROI:(Math.round(s/n*1e4)/100).toString()+"%",totalProfit:s>0?"+"+(Math.round(100*s)/100).toString():(Math.round(100*s)/100).toString()},enterprises:r}},A=function(t,e){var a,r=[],n=Object(o.a)(t);try{for(n.s();!(a=n.n()).done;){var s=a.value,i=s[e.symbol],c=s[e.tradingDate],l=parseFloat(s[e.purchasePrice]),u=parseFloat(s[e.quantity]);c=c?c.slice(0,4)+"/"+c.slice(4,6)+"/"+c.slice(6,8):"NaN",r.push({symbol:i,tradingDate:c,quantity:u,purchasePrice:l,totalCost:l*u})}}catch(d){n.e(d)}finally{n.f()}return r.sort((function(t,e){if("NaN"===t.tradingDate&&"NaN"!==e.tradingDate)return 1;if("NaN"!==t.tradingDate&&"NaN"===e.tradingDate)return-1;var a=t.tradingDate.split("/"),r=e.tradingDate.split("/");return parseInt(a[0])>parseInt(r[0])?-1:parseInt(a[0])<parseInt(r[0])?1:parseInt(a[1])>parseInt(r[1])?-1:parseInt(a[1])<parseInt(r[1])?1:parseInt(a[2])>parseInt(r[2])?-1:parseInt(a[2])<parseInt(r[2])?1:void 0})),r},B=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(n.symbol)}}catch(s){r.e(s)}finally{r.f()}return e},L=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(n.holdingPercent)}}catch(s){r.e(s)}finally{r.f()}return e},J=function(){var t,e=[],r=Object(o.a)(a.enterprises);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(Math.round(n.totalProfit/n.totalCost*1e4)/100)}}catch(s){r.e(s)}finally{r.f()}return e},V=function(){var t=Object(l.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"GET",url:"https://yfapi.net/v8/finance/spark",headers:{"x-api-key":"auNxCyh1Gf66HIXod3SN5aeAVI6JUB37Kd5iClYh"},params:{symbols:"MSFT,VOO,QQQ,SMH",interval:"1d",range:"1y"}},t.abrupt("return",x.a.request(e).then((function(t){var e=t.data;console.log("response",e);var a=[];for(var r in e)a.push({symbol:r,data:e[r].close,date:e[r].timestamp});sessionStorage.clear(),sessionStorage.setItem("symbols",JSON.stringify(a))})).catch((function(t){console.log(t),y.b.error("\u8acb\u6c42\u8cc7\u6599\u6642\u767c\u751f\u932f\u8aa4.")})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(t,e){var r=t+"-"+e+"-performance",n=sessionStorage.getItem(r);if(n)console.log("get search:",r),E(JSON.parse(n));else{n=[];var s=new Date;s.setMonth(s.getMonth()-t),s.setDate(s.getDate()-e);for(var i=Date.now(),c=function(t,e){var a=t.getFullYear(),r=t.getMonth(),n=t.getDate(),s=e.getFullYear(),o=e.getMonth(),i=e.getDate();return a<s||a===s&&r<o||a===s&&r===o&&n<i?1:a===s&&r===o&&n===i?0:-1},l=JSON.parse(sessionStorage.getItem("symbols")),u=s;u<=i;u.setDate(u.getDate()+1)){var d,f=0,b=[],h=Object(o.a)(l);try{for(h.s();!(d=h.n()).done;)for(var j=d.value,p=0;p<j.date.length;p++){if(p===j.date.length-1){b.push({symbol:j.symbol,price:j.data[p]});break}if(0===c(u,new Date(1e3*j.date[p]))){b.push({symbol:j.symbol,price:j.data[p]});break}if(-1===c(u,new Date(1e3*j.date[p]))&&1===c(u,new Date(1e3*j.date[p+1]))){b.push({symbol:j.symbol,price:j.data[p-1]});break}}}catch(y){h.e(y)}finally{h.f()}var g,O=Object(o.a)(a.tradingHistory);try{var v=function(){var t=g.value;if(-1===c(u,new Date(t.tradingDate))||0===c(u,new Date(t.tradingDate))){var e=b.find((function(e){return e.symbol===t.symbol}));f+=t.quantity*e.price}};for(O.s();!(g=O.n()).done;)v()}catch(y){O.e(y)}finally{O.f()}n.push({x:u.toLocaleDateString(),y:f})}sessionStorage.setItem(r,JSON.stringify(n)),E(n)}},Y=function(t){console.log("in inIsCsv");for(var e=0,a=["Symbol","Purchase Price","Quantity","Trade Date"];e<a.length;e++){var r=a[e];if(-1===t.indexOf(r)){N(!1);var n='csv\u6a94\u7f3a\u5c11 "'+r+'" \u6b04\u4f4d.';return y.b.error(n),!1}}return!0},z=function(t){var e=new FileReader;e.onload=function(){var t,a=e.result.split("\n"),r=[],n=Object(o.a)(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;r.push(s.split(","))}}catch(i){n.e(i)}finally{n.f()}R(r)},e.readAsBinaryString(t)},_=function(t){var e,a=t.target.parentNode.childNodes,r=Object(o.a)(a);try{for(r.s();!(e=r.n()).done;){e.value.classList.remove("focus")}}catch(n){r.e(n)}finally{r.f()}t.target.classList.add("focus")};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("div",{className:!d||d&&P<=0?"hide":"load"}),Object(h.jsxs)("div",{className:d?"hide":"",children:[Object(h.jsx)("div",{className:"drag-file-block",onDragEnter:function(t){t.stopPropagation(),t.preventDefault(),N(!0)},onDragOver:function(t){t.stopPropagation(),t.preventDefault()},onDragLeave:function(t){t.preventDefault(),t.stopPropagation(),N(!1)},onDrop:function(t){t.preventDefault(),t.stopPropagation();var e=t.dataTransfer.items[0].getAsFile();z(e)},style:D?{backgroundColor:"rgba(173, 216, 230, .5)"}:{backgroundColor:"inherit"},children:Object(h.jsx)("div",{className:"dropInfo",children:"\u5c07 csv \u6a94\u62d6\u66f3\u81f3\u6b64"})}),Object(h.jsxs)("label",{className:"input-label",children:[Object(h.jsx)("span",{children:"\ud83d\udcc1 \u4e0a\u50b3\u6a94\u6848"}),Object(h.jsx)("div",{style:{display:"none"},children:Object(h.jsx)("input",{type:"file",accept:".csv",onChange:function(t){var e=t.target.files[0];z(e),t.target.value=""}})})]}),Object(h.jsx)("label",{className:"input-label",onClick:Q,children:Object(h.jsx)("span",{children:"\ud83d\udca1 \u4f7f\u7528\u7bc4\u4f8b"})})]}),Object(h.jsxs)("main",{style:d&&P<=0?{}:{visibility:"hidden"},children:[Object(h.jsxs)("div",{className:"block-row",id:"info",children:[Object(h.jsx)(g,{data:a.infoData.totalCost,title:"\u6295\u5165\u91d1\u984d"}),Object(h.jsx)(g,{data:a.infoData.myAsset,title:"\u80a1\u7968\u5e02\u503c"}),Object(h.jsx)(g,{data:a.infoData.ROI,title:"\u5831\u916c\u7387",highlight:!0}),Object(h.jsx)(g,{data:a.infoData.totalProfit,title:"\u7e3d\u640d\u76ca"})]}),Object(h.jsx)("div",{className:"block-title res-title",children:Object(h.jsx)("h3",{children:"\u6301\u80a1\u72c0\u6cc1"})}),Object(h.jsxs)("div",{className:"block-row",children:[Object(h.jsx)("div",{className:"left chart",children:Object(h.jsx)(j,{series:0===L().length?[8e4,45e3,16e3]:L(),labels:0===B().length?["stock1","stock2","stock3"]:B()})}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)(p,{headRow:M.headRow,dataRows:a.enterprises,targetData:M.targetData})})]}),Object(h.jsxs)("div",{className:"block-row",children:[Object(h.jsxs)("div",{className:"left chart",style:{color:"#000"},children:[Object(h.jsx)("div",{className:"block-title",children:Object(h.jsx)("h3",{children:"\u7e3e\u6548"})}),Object(h.jsx)(O,{series:0===J().length?[5,3,-10,10,7]:J(),labels:0===B().length?["stock1","stock2","stock3","stock4","stock5"]:B()})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("div",{className:"block-title",children:Object(h.jsx)("h3",{children:"\u4ea4\u6613\u7d00\u9304"})}),Object(h.jsx)(p,{headRow:T.headRow,dataRows:a.tradingHistory,targetData:T.targetData})]})]}),Object(h.jsx)("div",{className:"block-title res-title",children:Object(h.jsx)("h3",{children:"\u80a1\u7968\u5e02\u503c\u8d70\u52e2"})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"focus timeButton",onClick:function(t){G(0,7),_(t)},children:"7\u5929"}),Object(h.jsx)("button",{className:"timeButton",onClick:function(t){G(1,0),_(t)},children:"1\u6708"}),Object(h.jsx)("button",{className:"timeButton",onClick:function(t){G(6,0),_(t)},children:"6\u6708"}),Object(h.jsx)("button",{className:"timeButton",onClick:function(t){G(12,0),_(t)},children:"1\u5e74"})]}),Object(h.jsx)(v,{data:F})]}),Object(h.jsx)("div",{className:"footer"})]}),Object(h.jsx)(y.a,{position:"top-right",autoClose:5e3,theme:"dark",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})});s.a.render(Object(h.jsx)(D,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f743d806.chunk.js.map