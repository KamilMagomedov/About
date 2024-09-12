"use strict";(self.webpackChunkportfolio_mk=self.webpackChunkportfolio_mk||[]).push([[569],{569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(848),s=n(540),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},a.apply(this,arguments)};const l=function(e){var t=e.img,n=e.title,s=e.text,l=e.isDarkTheme;return(0,r.jsxs)("div",a({className:"service last:mb-0 sm:mb-[60px] sm:w-full sm:px-[15px] sm:last:pb-5 xl:w-1/2 xl:last:pb-0"},{children:[(0,r.jsxs)("div",a({className:"service_title_container sm:mb-[5px] sm:flex sm:flex-row sm:items-center sm:justify-start"},{children:[(0,r.jsx)("div",a({className:"service_icon sm:mr-5 sm:flex sm:h-[46px] sm:min-w-[46px] sm:items-center sm:justify-center lg:translate-y-[14px] 2xl:translate-y-[0px] 3xl:translate-y-[14px]"},{children:(0,r.jsx)("img",{src:t,alt:"icon",className:"max-sm:w-full"})})),(0,r.jsx)("h2",a({className:"service_title ".concat(l?"text-[#EAEAEA]":"text-darkMain"," sm:text-xl sm:font-bold sm:leading-6")},{children:n}))]})),(0,r.jsx)("p",a({className:"".concat(l?"text-[#C2C2C2]":"text-[#7a798c]"," service_text lg:pl-[65px]")},{children:s}))]}))};var i=n(318),c=n(908),o=n(779),x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},x.apply(this,arguments)};const u=function(){var e=(0,s.useContext)(o.y),t=e.isDarkTheme,n=e.services,a=e.setServices,u=(0,s.useState)(null),m=u[0],f=u[1];return(0,s.useEffect)((function(){var e,t,n,r;e=void 0,t=void 0,r=function(){var e;return function(e,t){var n,r,s,a,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(l=0)),l;)try{if(n=1,r&&(s=2&i[0]?r.return:i[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,i[1])).done)return s;switch(r=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((s=(s=l.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){l.label=i[1];break}if(6===i[0]&&l.label<s[1]){l.label=s[1],s=i;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(i);break}s[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{n=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),f(null),[4,(0,i.J)({path:"services"})];case 1:return e=t.sent(),a(e.data),[3,3];case 2:return t.sent(),f("Error fetching Services information"),[3,3];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(s,a){function l(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))}),[]),m?(0,r.jsx)("div",x({className:"error-message flex h-full items-center justify-center text-center text-5xl text-red-500"},{children:m})):n?(0,r.jsx)("div",x({className:"services flex h-auto items-start justify-start ".concat(t?"bg-[#2A2A2A]":"bg-[#f5f0f0]"," sm:flex-col 2xl:flex-row 2xl:overflow-auto")},{children:(0,r.jsxs)("div",x({className:"main_content"},{children:[(0,r.jsxs)("div",x({className:"main_title_container"},{children:[(0,r.jsx)("p",x({className:"main_subtitle mb-3 font-medium leading-8 ".concat(t?"text-[#C2C2C2]":"text-[#7a798c]"," sm:text-xl sm:leading-7 xl:text-[30px]")},{children:n.top_title})),(0,r.jsx)("h1",x({className:"main_title text-[90px] font-extrabold leading-[5rem] ".concat(t?"text-[#EAEAEA]":"text-darkMain"," sm:text-[38px] sm:leading-10 xl:text-7xl")},{children:n.title}))]})),(0,r.jsx)("div",x({className:"pb-[20px] pr-[60px] sm:mb-0 sm:pr-[10px] xl:flex xl:h-auto xl:flex-wrap"},{children:n.items.map((function(e){return(0,r.jsx)(l,{img:e.image,title:e.title,text:e.description,isDarkTheme:t},e.id)}))}))]}))})):(0,r.jsx)(c.A,{})}}}]);