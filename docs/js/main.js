!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){},function(e,t){window.addEventListener("load",(function(e){var t=document.querySelectorAll(".accordion-item__question"),n=document.querySelectorAll(".accordion-item__answer");t.forEach((function(e){e.addEventListener("click",(function(){var o=document.querySelector("#"+e.dataset.tabTarget);n.forEach((function(e){e.classList.remove("is-active")})),t.forEach((function(e){e.classList.remove("is-active")})),e.classList.add("is-active"),o.classList.add("is-active")}))}))}))},function(e,t){var n=document.querySelector(".s-program__item"),o=document.querySelectorAll(".s-program__item"),r=document.querySelector(".s-program__button"),c=document.querySelector(".s-program__more");if(n){r.addEventListener("click",(function(e){e.preventDefault(),Array.from(o).filter((function(e){return"none"===e.style.display})).forEach((function(e){return e.style.display="block"})),c.style.display="none"}))}},function(e,t){document.querySelector(".s-contacts__map")&&(window.onload=function(){var e=document.createElement("div"),t=document.querySelector("#wrapMap");e.className="mapTitle",e.textContent="Для активации карты нажмите по ней",t.appendChild(e),t.onclick=function(){this.children[0].removeAttribute("style"),e.parentElement.removeChild(e)},t.onmousemove=function(t){e.style.display="block",t.offsetY>10&&(e.style.top=t.offsetY+20+"px"),t.offsetX>10&&(e.style.left=t.offsetX+20+"px")},t.onmouseleave=function(){e.style.display="none"}})},function(e,t){},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4)}]);