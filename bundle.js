(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),c=n(667),s=n.n(c),d=new URL(n(602),n.b),u=o()(a()),l=s()(d);u.push([e.id,"body,\nhtml {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    height: 100vh;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: whitesmoke;\n}\n\n#main {\n    background-image: url("+l+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n#submitBtn {\n    display: none;\n}\n\n#errorMessage {\n    padding-top: 1vh;\n    font-weight: bold;\n}\n\n#weatherCodeDiv {\n    font-size: 1.5rem;\n}\n\n#locationDiv {\n    font-size: 2rem;\n    padding-bottom: 2vh;\n}\n\n#weatherDiv {\n    flex-grow: 100;\n    padding: 30vh 15vw;\n    display: flex;\n    flex-direction: column;\n}\n\n#tempDiv {\n    display: flex;\n    column-gap: 2vw;\n}\n\n.maxmin {\n    display: flex;\n}\n\n.maxmin > span {\n    font-size: small;\n}\n\n#degreeDiv {\n    padding-top: 1vh;\n    font-size: 5rem;\n    display: flex;\n}\n\n#detailsDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-left: 1vw;\n    border-left: 1px solid whitesmoke;\n    row-gap: 2vh;\n}\n\nspan {\n    font-size: 1.5rem;\n}\n\n\ninput {\n    border-radius: 10px;\n    min-width: 13vw;\n    padding: .5vh;\n}\n\n#searchBarDiv {\n    padding: 2vh 2vw;\n    display: flex;\n    align-items: flex-end;\n    flex-direction: column;\n}\n\n#unitBtn {\n    margin-top: 2vh;\n    max-width: 10vw;\n    cursor: pointer;\n    border-radius: 10px;\n}",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=r(e,a),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},602:(e,t,n)=>{e.exports=n.p+"19b665ca63c55966647d.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{iS:()=>k,Uc:()=>$,Xe:()=>D,N6:()=>N,tP:()=>B,bf:()=>_,Oy:()=>L,EY:()=>U});const e={0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Foggy",51:"Light drizzle",53:"Moderate drizzle",55:"Dense drizzle",56:"Light freezing drizzle",57:"Dense freezing drizzle",61:"Slight rain",63:"Moderate rain",65:"Havy rain",66:"Light freezing rain",67:"Heavy freezing rain",71:"Slight snowfall",73:"Moderate snowfall",75:"Heavy snowfall",77:"Snow grains",80:"Slight rain showers",81:"Moderate rain showers",82:"Violent rain showers",85:"Slight snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail"},t=class{constructor(e,t,n,r,a,i){this.unit=e,this.weatherConditions=t,this.currentTemp=n,this.max=r,this.min=a,this.wind=i}};let a,i;async function o(n){try{const r=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${n}`),o=await r.json();$.textContent="";let s=o.results[0];if(!isNaN(n.charAt(0)))for(const[e,t]of o.results.entries())if(s=o.results[e],"United States"==t.country)break;const d=s.name,u=s.admin1,l=s.country;let p="";p="United States"==l?`${d}, ${u}`:`${d}, ${l}`;!async function(n,r,o){const s=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${r}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`),d=await s.json(),u=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${r}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FNew_York`);!function(n,r,o){const s=n.current_weather.weathercode,d=e[s],u=Math.round(n.current_weather.temperature),l=Math.round(n.daily.temperature_2m_max[0]),p=Math.round(n.daily.temperature_2m_min[0]),m=Math.round(n.current_weather.windspeed),h=Math.round(r.current_weather.temperature),f=Math.round(r.daily.temperature_2m_max[0]),v=Math.round(r.daily.temperature_2m_min[0]),g=Math.round(r.current_weather.windspeed);a=new t("F",d,u,l,p,m),i=new t("C",d,h,f,v,g),c(a,i,o)}(d,await u.json(),o)}(s.latitude,s.longitude,p)}catch{$.textContent="Cannot find city, please enter a valid city or postal code"}}function c(e,t,n){L.textContent=`${e.weatherConditions}`,D.textContent=n,"F"==_?(k.innerHTML=`${e.currentTemp}`,N.textContent=`Max: ${e.max}`,B.textContent=`Min : ${e.min}`,U.textContent=`Wind: ${e.wind} MPH`):(k.textContent=`${t.currentTemp}`,N.textContent=`Max: ${t.max}`,B.textContent=`Min : ${t.min}`,U.textContent=`Wind: ${t.wind} Km/h`)}var s=n(379),d=n.n(s),u=n(795),l=n.n(u),p=n(569),m=n.n(p),h=n(565),f=n.n(h),v=n(216),g=n.n(v),y=n(589),w=n.n(y),x=n(426),b={};b.styleTagTransform=w(),b.setAttributes=f(),b.insert=m().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),d()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;let _="F";const M=document.getElementById("main"),C=document.createElement("form"),E=document.createElement("div");E.id="searchBarDiv";const T=document.createElement("input");T.type="text",T.id="Location",T.placeholder="Search city or postal code";const S=document.createElement("button");S.id="submitBtn",C.append(T,S),E.append(C),M.append(E);const z=document.createElement("div");M.append(z),z.id="weatherDiv",S.addEventListener("click",(e=>{e.preventDefault(),o(T.value)}));const $=document.createElement("div");$.id="errorMessage",E.append($);const L=document.createElement("div");L.id="weatherCodeDiv";const D=document.createElement("div");D.id="locationDiv";const H=document.createElement("div");H.id="tempDiv";const k=document.createElement("div");k.id="degreeDiv";const F=document.createElement("span");F.innerHTML="&#8457;";const j=document.createElement("div");j.id="detailsDiv";const N=document.createElement("div");N.classList="maxmin";const A=document.createElement("span");A.innerHTML="&#8457";const B=document.createElement("div");B.classList="maxmin";const I=document.createElement("span");I.innerHTML="&#8457";const U=document.createElement("div");N.append(A),B.append(I),k.append(F),j.append(N,B,U),H.append(k,j),o("Raleigh");const O=document.createElement("button");O.type="button",O.id="unitBtn",O.innerHTML="&#8457;",O.addEventListener("click",(()=>{"F"==_?(_="C",O.innerHTML="&#8451;",c(a,i,D.textContent)):(_="F",O.innerHTML="&#8457;",c(a,i,D.textContent))})),z.append(L,D,H,O)})()})();