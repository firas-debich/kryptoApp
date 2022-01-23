import{r as b,j as t,a as e,A as j,T as C,L as f,B as te,M as ne,b as O,H as ce,F as B,c as _,d as se,e as P,R as T,C as i,f as le,g as W,h as Z,u as ie,_ as u,D as K,N as oe,i as de,k as he,l as ue,S as pe,E as R,m as M,n as me,o as S,p as J,q as ge,I as ve,s as fe,t as Ne,v as Ce,w as L,x as ye,y as be,z as xe,G as Te,P as ke}from"./vendor.697b7dbf.js";const Ae=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerpolicy&&(h.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?h.credentials="include":s.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(s){if(s.ep)return;s.ep=!0;const h=c(s);fetch(s.href,h)}};Ae();var $e="/kryptoApp/assets/cryptocurrency.d164cef1.png";const Oe=()=>{const[n,l]=b.exports.useState(!0),[c,d]=b.exports.useState(void 0);return b.exports.useEffect(()=>{const s=()=>d(window.innerWidth);return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),b.exports.useEffect(()=>{c<=800?l(!1):l(!0)},[c]),t("div",{className:"nav-container",children:[t("div",{className:"logo-container",children:[e(j,{src:$e,size:"large"}),e(C.Title,{level:2,className:"logo",children:e(f,{to:"/",children:"Crypto Track"})}),e(te,{className:"menu-control-container",onClick:()=>l(!n),children:e(ne,{})})]}),n&&t(O,{theme:"dark",children:[e(O.Item,{icon:e(ce,{}),children:e(f,{to:"/kryptoApp/",children:"Home "})}),e(O.Item,{icon:e(B,{}),children:e(f,{to:"/kryptoApp/cryptocurrencies",children:"Cryptocurrencies "})}),e(O.Item,{icon:e(_,{}),children:e(f,{to:"/kryptoApp/exchanges",children:"Exchanges"})}),e(O.Item,{icon:e(se,{}),children:e(f,{to:"/kryptoApp/news",children:"News "})})]})]})},{Title:q}=C,Se=({coinHistory:n,currentPrice:l,coinName:c})=>{var y,a,m,g,p,v,x;const d=[],s=[];for(let N=0;N<((a=(y=n==null?void 0:n.data)==null?void 0:y.history)==null?void 0:a.length);N+=1)d.push((g=(m=n==null?void 0:n.data)==null?void 0:m.history[N])==null?void 0:g.price),s.push(new Date((v=(p=n==null?void 0:n.data)==null?void 0:p.history[N])==null?void 0:v.timestamp).toLocaleDateString());const h={labels:s,datasets:[{label:"Price In USD",data:d,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]},r={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};return t(P,{children:[t(T,{className:"chart-header",children:[t(q,{level:2,className:"chart-title",children:[c," Price Chart "]}),t(i,{className:"price-container",children:[t(q,{level:5,className:"price-change",children:["Change: ",(x=n==null?void 0:n.data)==null?void 0:x.change,"%"]}),t(q,{level:5,className:"current-price",children:["Current ",c," Price: $ ",l]})]})]}),e(le,{data:h,options:r})]})},Le={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"8cc720814fmsh81c64e35e2c3f05p1afb3cjsn3d51dc1b4e7b"},X="https://coinranking1.p.rapidapi.com";console.log({baseUrl:X});const w=n=>({url:n,headers:Le}),F=W({reducerPath:"cryptoApi",baseQuery:Z({baseUrl:X}),endpoints:n=>({getCryptos:n.query({query:l=>w(`/coins?limit=${l}`)}),getCryptoDetails:n.query({query:l=>w(`/coin/${l}`)}),getCryptoHistory:n.query({query:({coinId:l,timePeriod:c})=>w(`coin/${l}/history?timeperiod=${c}`)})})}),{useGetCryptosQuery:U,useGetCryptoDetailsQuery:Pe,useGetCryptoHistoryQuery:Me}=F,{Title:k,Text:A}=C,{Option:Ee}=M,Ie=()=>{var g,p,v,x,N,$,Q,V,G;const{coinId:n}=ie(),[l,c]=b.exports.useState("7d"),{data:d,isFetching:s}=Pe(n),{data:h}=Me({coinId:n,timePeriod:l}),r=(g=d==null?void 0:d.data)==null?void 0:g.coin,y=["3h","24h","7d","30d","1y","3m","3y","5y"];console.log({cryptoDetails:r});const a=[{title:"Price to USD",value:`$ ${(r==null?void 0:r.price)&&u(r==null?void 0:r.price)}`,icon:e(K,{})},{title:"Rank",value:r==null?void 0:r.rank,icon:e(oe,{})},{title:"24h Volume",value:`$ ${(r==null?void 0:r.volume)&&u(r==null?void 0:r.volume)}`,icon:e(de,{})},{title:"Market Cap",value:`$ ${(r==null?void 0:r.marketCap)&&u(r==null?void 0:r.marketCap)}`,icon:e(K,{})},{title:"All-time-high(daily avg.)",value:`$ ${((p=r==null?void 0:r.allTimeHigh)==null?void 0:p.price)&&u((v=r==null?void 0:r.allTimeHigh)==null?void 0:v.price)}`,icon:e(he,{})}];if(s)return"Loading...";const m=[{title:"Number Of Markets",value:r==null?void 0:r.numberOfMarkets,icon:e(B,{})},{title:"Number Of Exchanges",value:r==null?void 0:r.numberOfExchanges,icon:e(_,{})},{title:"Aprroved Supply",value:((x=r==null?void 0:r.supply)==null?void 0:x.confirmed)?e(ue,{}):e(pe,{}),icon:e(R,{})},{title:"Total Supply",value:`$ ${((N=r==null?void 0:r.supply)==null?void 0:N.total)&&u(($=r==null?void 0:r.supply)==null?void 0:$.total)}`,icon:e(R,{})},{title:"Circulating Supply",value:`$ ${((Q=r==null?void 0:r.supply)==null?void 0:Q.circulating)&&u((V=r==null?void 0:r.supply)==null?void 0:V.circulating)}`,icon:e(R,{})}];return e(P,{children:t(i,{className:"coin-detail-container",children:[t(i,{className:"coin-heading-container",children:[t(k,{level:2,className:"coin-name",children:[r==null?void 0:r.name," (",r==null?void 0:r.symbol,") price"]}),t("p",{children:[r==null?void 0:r.name," live price in US dollars. View value statistics, Market cap and supply."]})]}),e(M,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:o=>c(o),children:y.map(o=>e(Ee,{children:o},o))}),e(Se,{coinHistory:h,currentPrice:u(r==null?void 0:r.price),coinName:r==null?void 0:r.name}),t(i,{className:"stats-container",children:[t(i,{className:"coin-value-statistics",children:[t(i,{className:"coin-value-statistics-heading",children:[t(k,{level:3,className:"coin-details-heading",children:[r==null?void 0:r.name," Value Statistics"]}),t("p",{children:["An overview showing the statistics of ",r==null?void 0:r.name,", such as the base and quote currency, the rank, and trading volume."]})]}),a.map(({icon:o,title:E,value:I})=>t(i,{className:"coin-stats",children:[t(i,{className:"coin-stats-name",children:[e(A,{children:o}),e(A,{children:E})]}),e(A,{className:"stats",children:I})]}))]}),t(i,{className:"other-stats-info",children:[t(i,{className:"coin-value-statistics-heading",children:[e(k,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),e("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),m.map(({icon:o,title:E,value:I})=>t(i,{className:"coin-stats",children:[t(i,{className:"coin-stats-name",children:[e(A,{children:o}),e(A,{children:E})]}),e(A,{className:"stats",children:I})]}))]})]}),t(i,{className:"coin-desc-link",children:[t(T,{className:"coin-desc",children:[t(k,{level:3,className:"coin-details-heading",children:["What is ",r==null?void 0:r.name,"?"]}),me(r==null?void 0:r.description)]}),t(i,{className:"coin-links",children:[t(k,{level:3,className:"coin-details-heading",children:[r==null?void 0:r.name," Links"]}),(G=r.links)==null?void 0:G.map(o=>t(T,{className:"coin-link",children:[e(k,{level:5,className:"link-name",children:o==null?void 0:o.type}),e("a",{href:o==null?void 0:o.url,target:"_blank",rel:"noreferrer",children:o==null?void 0:o.name})]},o==null?void 0:o.name))]})]})]})})},Re=()=>{var d;const{data:n,isFetching:l}=U(10);console.log(n);const c=(d=n==null?void 0:n.data)==null?void 0:d.stats;return console.log({globalStats:c}),l?"Loading...":t(P,{children:[e(C.Title,{level:2,className:"heading",children:"Global Crypto Stats"}),t(T,{children:[e(i,{span:12,children:e(S,{title:"Total Cryptocurrencies",value:c==null?void 0:c.total})}),e(i,{span:12,children:e(S,{title:"Total Exchanges",value:u(c==null?void 0:c.totalExchanges)})}),e(i,{span:12,children:e(S,{title:"Total Market Cap ",value:`$${u(c==null?void 0:c.totalMarketCap)}`})}),e(i,{span:12,children:e(S,{title:"Total 24 Volume",value:`$${u(c==null?void 0:c.total24hVolume)}`})}),e(i,{span:12,children:e(S,{title:"Total Markets",value:u(c==null?void 0:c.totalMarkets)})})]}),t("div",{className:"home-heading-container",children:[e(C.Title,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies In the World"}),e(C.Title,{level:3,className:"show-more",children:e(f,{to:"/kryptoApp/cryptocurrencies",children:"Show More"})})]}),e(ae,{simplified:!0}),t("div",{className:"home-heading-container",children:[e(C.Title,{level:2,className:"home-title",children:"Latest Crypto News"}),e(C.Title,{level:3,className:"show-more",children:e(f,{to:"/kryptoApp/news",children:"Show More"})})]}),e(re,{simplified:!0})]})},qe={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"8cc720814fmsh81c64e35e2c3f05p1afb3cjsn3d51dc1b4e7b"},Y="https://bing-news-search1.p.rapidapi.com";console.log({baseURL:Y});const we=n=>({url:n,headers:qe}),z=W({reduccerPath:"cryptoNewsApi",baseQuery:Z({baseUrl:Y}),endpoints:n=>({getCryptoNews:n.query({query:({newsCategory:l,count:c})=>we(`/news/search?q=${l}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${c}`)})})}),{useGetCryptoNewsQuery:Fe}=z,{Text:H,Title:Ue}=C,{Option:D}=M,ee="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",re=({simplified:n})=>{var h,r,y;const[l,c]=b.exports.useState("Cryptocurrency"),{data:d}=U(100),{data:s}=Fe({newsCategory:l,count:n?6:12});return console.log({cryptoNews:s}),(s==null?void 0:s.value)?t(T,{gutter:[24,24],children:[!n&&e(i,{span:24,children:t(M,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:a=>c(a),filterOption:(a,m)=>m.children.toLowerCase().indexOf(a.toLowerCase())>=0,children:[e(D,{value:"Cryptocurency",children:"Cryptocurrency"}),(r=(h=d==null?void 0:d.data)==null?void 0:h.coins)==null?void 0:r.map(a=>e(D,{value:a==null?void 0:a.name,children:a==null?void 0:a.name}))]})}),(y=s==null?void 0:s.value)==null?void 0:y.map((a,m)=>{var g,p,v,x,N,$;return e(i,{xs:24,sm:12,lg:8,children:e(J,{hoverable:!0,className:"news-card",children:t("a",{href:a==null?void 0:a.url,target:"_blank",rel:"noreferrer",children:[t("div",{className:"news-image-container",children:[e(Ue,{className:"news-title",level:4,children:a==null?void 0:a.name}),e("img",{src:((p=(g=a==null?void 0:a.image)==null?void 0:g.thumbnail)==null?void 0:p.contentUrl)||ee,alt:""})]}),e("p",{children:a.description.length>100?`${a==null?void 0:a.description.substring(0,100)}...`:a==null?void 0:a.description}),t("div",{className:"provider-container",children:[t("div",{children:[e(j,{src:((N=(x=(v=a==null?void 0:a.provider[0])==null?void 0:v.image)==null?void 0:x.thumbnail)==null?void 0:N.contentUrl)||ee,alt:""}),e(H,{className:"provider-name",children:($=a==null?void 0:a.provider[0])==null?void 0:$.name})]}),e(H,{children:ge(a==null?void 0:a.datePublished).startOf("ss").fromNow()})]})]})})},m)})]}):"Loading..."},ze=()=>e("div",{children:"hello"}),ae=({simplified:n})=>{const l=n?10:100,{data:c,isFetching:d}=U(l),[s,h]=b.exports.useState([]),[r,y]=b.exports.useState("");return b.exports.useEffect(()=>{var m,g;const a=(g=(m=c==null?void 0:c.data)==null?void 0:m.coins)==null?void 0:g.filter(p=>{var v;return(v=p==null?void 0:p.name)==null?void 0:v.toLowerCase().includes(r)});h(a)},[c,r]),d?"Loading...":t(P,{children:[!n&&e("div",{className:"search-crypto",children:e(ve,{placeholder:"Search Cryptocurrency",onChange:a=>y(a.target.value.toLowerCase())})}),e(T,{gutter:[32,32],className:"crypto-card-container",children:s==null?void 0:s.map(a=>e(i,{xs:24,sm:12,lg:6,className:"crypto-card",children:e(f,{to:`/kryptoApp/crypto/${a.uuid}`,children:t(J,{title:`${a.rank}. ${a.name}`,extra:e("img",{className:"crypto-image",src:a.iconUrl}),hoverable:!0,children:[t("p",{children:["Price: ",u(a.price)]}),t("p",{children:["Daily Change: ",a.change,"%"]}),t("p",{children:["Market Cap: ",u(a.marketCap)]})]})},a.uuid)},a.uuid))})]})};const Qe=()=>e(fe,{children:t("div",{className:"app",children:[e("div",{className:"navbar",children:e(Oe,{})}),t("div",{className:"main",children:[e(Ne,{children:e("div",{className:"routes",children:t(Ce,{children:[e(L,{path:"/kryptoApp/",element:e(Re,{})}),e(L,{path:"/kryptoApp/exchanges",element:e(ze,{})}),e(L,{path:"/kryptoApp/cryptocurrencies",element:e(ae,{})}),e(L,{path:"/kryptoApp/crypto/:coinId",element:e(Ie,{})}),e(L,{path:"/kryptoApp/news",element:e(re,{})})]})})}),t("div",{className:"footer",children:[t(C.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Crypto ",e("br",{}),"All rights reserved"]}),t(ye,{children:[e(f,{to:"/kryptoApp/",children:"Home"}),e(f,{to:"/kryptoApp/exchanges",children:"Exchanges"}),e(f,{to:"/kryptoApp/news",children:"News"})]})]})]})]})});var Ve=be({reducer:{[F.reducerPath]:F.reducer,[z.reducerPath]:z.reducer}});xe.render(e(Te.StrictMode,{children:e(ke,{store:Ve,children:e(Qe,{})})}),document.getElementById("root"));
