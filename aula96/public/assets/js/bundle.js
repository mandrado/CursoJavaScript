!function(r){var n={};function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,n){if(1&n&&(r=e(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)e.d(t,o,function(n){return r[n]}.bind(null,o));return t},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},e.p="",e(e.s=0)}([function(r,n,e){"use strict";e.r(n);var t=function(r,n){return Math.floor(Math.random()*(n-r)+r)},o=[33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126],i=function(){return String.fromCharCode(o[t(0,o.length)])};var a=document.querySelector(".senha-gerada"),c=document.querySelector(".qtd-caracteres"),u=document.querySelector(".chk-numeros"),s=document.querySelector(".chk-maiuscula"),l=document.querySelector(".chk-minuscula"),f=document.querySelector(".chk-simbolos"),p=document.querySelector(".btn-gerar-senha");e(1);p.addEventListener("click",(function(){a.innerHTML=function(r,n,e,o,a){var c=[];r=Number(r);for(var u=0;u<r;u++)n&&c.push(String.fromCharCode(t(65,91))),e&&c.push(String.fromCharCode(t(97,123))),o&&c.push(String.fromCharCode(t(48,58))),a&&c.push(i());return c.join("").slice(0,r)}(c.value,s.checked,l.checked,u.checked,f.checked)||"Nada selecionado"}))},function(r,n,e){var t=e(2);"string"==typeof t&&(t=[[r.i,t,""]]);var o={insert:"head",singleton:!1};e(4)(t,o);t.locals&&(r.exports=t.locals)},function(r,n,e){(n=r.exports=e(3)(!1)).push([r.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);",""]),n.push([r.i,':root {\r\n    --primary-color: rgb(49, 170, 154);\r\n    --primary-color-darker: rgb(30, 107, 97);\r\n    --primary-color-light: rgb(88, 155, 243);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: \'Open sans\', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: whitesmoke;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform label, form input, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 40px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\nform button:active {\r\n    background: var(--primary-color-light);\r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    margin: 40px 0;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\ninput[type="number"] {\r\n    width: 50px;\r\n    height: 25px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 40px 0;\r\n    font-size: 1em;\r\n}',""])},function(r,n,e){"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=function(r,n){var e=r[1]||"",t=r[3];if(!t)return e;if(n&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=t.sources.map((function(r){return"/*# sourceURL=".concat(t.sourceRoot).concat(r," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(n,r);return n[2]?"@media ".concat(n[2],"{").concat(e,"}"):e})).join("")},n.i=function(r,e){"string"==typeof r&&(r=[[null,r,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(var a=0;a<r.length;a++){var c=r[a];null!=c[0]&&t[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),n.push(c))}},n}},function(r,n,e){"use strict";var t,o={},i=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}();function c(r,n){for(var e=[],t={},o=0;o<r.length;o++){var i=r[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(c):e.push(t[a]={id:a,parts:[c]})}return e}function u(r,n){for(var e=0;e<r.length;e++){var t=r[e],i=o[t.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](t.parts[a]);for(;a<t.parts.length;a++)i.parts.push(g(t.parts[a],n))}else{for(var c=[];a<t.parts.length;a++)c.push(g(t.parts[a],n));o[t.id]={id:t.id,refs:1,parts:c}}}}function s(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var t=e.nc;t&&(r.attributes.nonce=t)}if(Object.keys(r.attributes).forEach((function(e){n.setAttribute(e,r.attributes[e])})),"function"==typeof r.insert)r.insert(n);else{var o=a(r.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,f=(l=[],function(r,n){return l[r]=n,l.filter(Boolean).join("\n")});function p(r,n,e,t){var o=e?"":t.css;if(r.styleSheet)r.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function d(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o&&r.setAttribute("media",o),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var h=null,m=0;function g(r,n){var e,t,o;if(n.singleton){var i=m++;e=h||(h=s(n)),t=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),t=d.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=c(r,n);return u(e,n),function(r){for(var t=[],i=0;i<e.length;i++){var a=e[i],s=o[a.id];s&&(s.refs--,t.push(s))}r&&u(c(r,n),n);for(var l=0;l<t.length;l++){var f=t[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}}]);
//# sourceMappingURL=bundle.js.map