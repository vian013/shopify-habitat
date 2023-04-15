"use strict";(self.webpackChunkshopify=self.webpackChunkshopify||[]).push([[700],{9573:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var s=t(8687),c=t(1523),r=t(7390),a=t(184);var i=function(e){var n=e.product,t=(0,s.I0)(),i=n.featuredImage,o=n.handle,l=n.title,u=(n.variants,n.vendor),d=n.price,p=n.images[1].url;return(0,a.jsxs)("div",{className:"product-wrapper",children:[(0,a.jsxs)("div",{className:"img-wrapper",children:[(0,a.jsxs)("div",{className:"quick-view-wrapper",onClick:function(){t((0,r.$)(o))},children:[(0,a.jsx)("div",{className:"quick-view",children:(0,a.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",className:"quick-view-icon",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.96205 9.96248L12.9996 13M11.4999 6.24997C11.4999 9.14945 9.14945 11.4999 6.24997 11.4999C3.35049 11.4999 1 9.14945 1 6.24997C1 3.35049 3.35049 1 6.24997 1C9.14945 1 11.4999 3.35049 11.4999 6.24997Z",stroke:"var(--background-color--1)",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,a.jsxs)("div",{className:"quick-view-hover",children:[(0,a.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",className:"quick-view-icon-hover",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.96205 9.96248L12.9996 13M11.4999 6.24997C11.4999 9.14945 9.14945 11.4999 6.24997 11.4999C3.35049 11.4999 1 9.14945 1 6.24997C1 3.35049 3.35049 1 6.24997 1C9.14945 1 11.4999 3.35049 11.4999 6.24997Z",stroke:"var(--background-color--2)",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsx)("span",{children:"quick view"})]})]}),(0,a.jsxs)(c.rU,{to:"/products/".concat(o),children:[(0,a.jsx)("img",{className:"lazyload",src:i,alt:o}),(0,a.jsx)("img",{className:"lazyload second-img",src:p,alt:"".concat(o,"-2")})]})]}),(0,a.jsxs)("div",{className:"content-wrapper",children:[(0,a.jsx)("p",{className:"vendor",children:u}),(0,a.jsx)(c.rU,{className:"title",to:"/products/".concat(o),children:l}),(0,a.jsxs)("p",{className:"price",children:["$",d,".00"]}),(0,a.jsx)("div",{className:"colors"}),(0,a.jsx)("div",{className:"review"})]})]})}},4700:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var s,c=t(4165),r=t(5861),a=t(885),i=t(2791),o=t(5360),l=t(9573),u=t(1413);!function(e){e.SET_MIN_PRICE="SET_MIN_PRICE",e.SET_MAX_PRICE="SET_MAX_PRICE",e.SET_COLOR="SET_COLOR",e.SET_SIZE="SET_SIZE"}(s||(s={}));var d=function(e,n){var t=n.type,c=n.payload;switch(t){case s.SET_MIN_PRICE:return(0,u.Z)((0,u.Z)({},e),{},{minPrice:c});case s.SET_MAX_PRICE:return(0,u.Z)((0,u.Z)({},e),{},{maxPrice:c});case s.SET_COLOR:return(0,u.Z)((0,u.Z)({},e),{},{color:c});case s.SET_SIZE:return(0,u.Z)((0,u.Z)({},e),{},{size:c});default:return e}},p=t(4942),h="Filter_filter-wrapper__2tk5v",v="Filter_filter-option__k1ySX",f="Filter_color-option__q2jkO",m="Filter_size-option__r2tHz",x=t(184);var j=function(e){var n=e.children,t=e.selectedCount,s=e.handleReset,c=e.open,r=e.option,o=e.resetOptionPanel,l=(0,i.useState)(c),u=(0,a.Z)(l,2),d=u[0],p=u[1];return(0,i.useEffect)((function(){c&&p(c);var e=function(e){if(d){var t=e.target;(!t.classList.contains("option-label")&&!t.closest(".option-panel")||t.classList.contains("option-label")&&!t.classList.contains(r))&&(p(!1),o(),n())}},n=function(){document.removeEventListener("click",e)};return d&&document.addEventListener("click",e),function(){n()}}),[d,c]),(0,x.jsxs)("div",{className:"option-panel ".concat(d?"open":""),children:[(0,x.jsx)("div",{className:"option-content",children:n}),(0,x.jsxs)("div",{className:"footer",children:[(0,x.jsxs)("p",{children:[t," selected"]}),(0,x.jsx)("button",{className:"reset-btn",onClick:s,children:"Reset"})]})]})},N={availability:!1,price:!1,colors:!1,sizes:!1};var g=function(e){var n=e.products,t=e.colors,c=e.sizes,r=e.filterState,o=e.filterDispatch,l=(0,i.useState)(N),d=(0,a.Z)(l,2),g=d[0],y=d[1],k=(0,i.useMemo)((function(){var e=[];for(var n in t){var s={value:n,quantity:t[n]};e.push(s)}return e}),[t]),C=(0,i.useMemo)((function(){var e=[];for(var n in c){var t={value:n,quantity:c[n]};e.push(t)}return e}),[c]),_=(0,i.useMemo)((function(){return n.reduce((function(e,n){return n.totalInventory>0&&e++,e}),0)}),[n]),E=(0,i.useMemo)((function(){return n.length-_}),[n,_]),w=function(){y(N)},b=function(e){var n=e.target;o({type:s.SET_COLOR,payload:n.dataset.name})},S=function(e){var n=e.target;o({type:s.SET_SIZE,payload:n.dataset.name})},Z=r.minPrice,P=r.maxPrice,I=r.color,R=r.size,T=!(0===Z&&1e3===P)&&Z<P,O=function(e){y((0,u.Z)((0,u.Z)({},g),{},(0,p.Z)({},e,!g[e])))};return(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("div",{className:"filter-options",children:[(0,x.jsx)("strong",{children:"Filter:"}),(0,x.jsxs)("div",{className:" ".concat(v),onClick:function(){return O("availability")},children:[(0,x.jsxs)("strong",{className:"option-label availability",children:["Availability",(0,x.jsx)("span",{className:"dropdown-btn"})]}),(0,x.jsx)(j,{handleReset:function(){},selectedCount:0,open:g.availability,option:"availability",resetOptionPanel:w,children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"input-wrapper",children:[(0,x.jsx)("input",{type:"checkbox"}),(0,x.jsxs)("p",{children:["In stock ","(".concat(_,")")]})]}),(0,x.jsxs)("div",{className:"input-wrapper",children:[(0,x.jsx)("input",{type:"checkbox"}),(0,x.jsxs)("p",{children:["Out of stock ","(".concat(E,")")]})]})]})})]}),(0,x.jsxs)("div",{className:"".concat(v),onClick:function(){return O("price")},children:[(0,x.jsxs)("strong",{className:"option-label price",children:["Price",(0,x.jsx)("span",{className:"dropdown-btn"})]}),(0,x.jsx)(j,{handleReset:function(){},selectedCount:0,open:g.price,option:"price",resetOptionPanel:w,children:(0,x.jsxs)(x.Fragment,{children:["From ",Z,(0,x.jsx)("input",{type:"range",onChange:function(e){o({type:s.SET_MIN_PRICE,payload:Number(e.target.value)})},value:Z}),"To ",P,(0,x.jsx)("input",{type:"range",onChange:function(e){o({type:s.SET_MAX_PRICE,payload:Number(e.target.value)})},value:P})]})})]}),(0,x.jsxs)("div",{className:"".concat(v),onClick:function(){return O("colors")},children:[(0,x.jsxs)("strong",{className:"option-label colors",children:["Colors",(0,x.jsx)("span",{className:"dropdown-btn"})]}),(0,x.jsx)(j,{handleReset:function(){},selectedCount:0,open:g.colors,option:"colors",resetOptionPanel:w,children:(0,x.jsx)(x.Fragment,{children:k.map((function(e){var n=e.value,t=e.quantity;return(0,x.jsx)("span",{onClick:b,"data-name":n,className:f,children:"".concat(n," (").concat(t,")")},n)}))})})]}),(0,x.jsxs)("div",{className:"".concat(v),onClick:function(){return O("sizes")},children:[(0,x.jsxs)("strong",{className:"option-label sizes",children:["Sizes",(0,x.jsx)("span",{className:"dropdown-btn"})]}),(0,x.jsx)(j,{handleReset:function(){},selectedCount:0,open:g.sizes,option:"sizes",resetOptionPanel:w,children:(0,x.jsx)(x.Fragment,{children:C.map((function(e){var n=e.value,t=e.quantity;return(0,x.jsx)("span",{onClick:S,"data-name":n,className:m,children:"".concat(n," (").concat(t,")")},n)}))})})]})]}),(0,x.jsxs)("div",{className:"selected-tags",children:[T&&(0,x.jsxs)("span",{className:"selected-tag",onClick:function(){o({type:s.SET_MIN_PRICE,payload:0}),o({type:s.SET_MAX_PRICE,payload:1e3})},children:[Z,"-",P," x"]}),I&&(0,x.jsxs)("span",{className:"selected-tag",onClick:function(){return o({type:s.SET_COLOR,payload:""})},children:[I," x"]}),R&&(0,x.jsxs)("span",{className:"selected-tag",onClick:function(){return o({type:s.SET_SIZE,payload:""})},children:[R," x"]})]})]})},y={minPrice:0,maxPrice:1e3,color:"",size:""};var k=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],s=n[1],u=(0,i.useState)({}),p=(0,a.Z)(u,2),h=p[0],v=p[1],f=(0,i.useState)({}),m=(0,a.Z)(f,2),j=m[0],N=m[1],k=(0,i.useReducer)(d,y),C=(0,a.Z)(k,2),_=C[0],E=C[1],w=(0,i.useRef)(0),b=_.minPrice,S=_.maxPrice,Z=_.color,P=_.size;(0,i.useEffect)((function(){T()}),[]);var I=(0,i.useRef)(null);(0,i.useEffect)((function(){w.current<=1?w.current++:(I.current&&clearTimeout(I.current),I.current=setTimeout((function(){"number"===typeof b&&"number"===typeof S&&b<S&&R()}),1e3))}),[b,S]),(0,i.useEffect)((function(){w.current<=1?w.current++:"number"===typeof b&&"number"===typeof S&&b<S&&R()}),[Z,P]);var R=function(){var e=(0,r.Z)((0,c.Z)().mark((function e(){var n,t,r,a,i,l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o._n,"/product-variants?minPrice=").concat(b,"&maxPrice=").concat(S).concat(Z&&"&color=".concat(Z)).concat(P&&"&size=".concat(P)),e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,a=r.products,i=r.colors,l=r.sizes,a&&a.length>0&&s(a),Object.keys(i).length>0&&N(i),Object.keys(l).length>0&&v(l);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,r.Z)((0,c.Z)().mark((function e(){var n,t,r,a,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o._n,"/product-variants/all"));case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r=t.products,a=t.colors,i=t.sizes,r&&r.length>0&&s(r),Object.keys(a).length>0&&N(a),Object.keys(i).length>0&&v(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===t.length?(0,x.jsx)("h1",{children:'"Loading..."'}):(0,x.jsxs)("div",{className:"products-page",children:[(0,x.jsx)(g,{filterState:_,filterDispatch:E,products:t,colors:j,sizes:h}),(0,x.jsx)("div",{className:"products-container",children:t.map((function(e){return(0,x.jsx)(l.Z,{product:e},e.id)}))})]})}}}]);
//# sourceMappingURL=700.d8862880.chunk.js.map