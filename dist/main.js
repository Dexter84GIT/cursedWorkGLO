(()=>{"use strict";const e=e=>{const t=document.querySelector('input[name="fio"]'),o=document.querySelector('input[name="tel"]'),l=/[^а-яА-Я]/gi,r=/[^\d\+]/gi;return t.addEventListener("input",(e=>{let o=e.target.value;l.test(o)&&""!==o?(o=o.replace(l,""),e.target.value=o,t.style.borderColor="red"):t.style.borderColor="green"})),o.addEventListener("input",(e=>{let t=e.target.value;r.test(t)&&""!==t?(t=t.replace(r,""),e.target.value=t,o.style.borderColor="red"):o.style.borderColor="green"})),e};(()=>{const e=document.querySelector("body"),t=document.querySelector(".modal-overlay"),o=document.getElementById("callback");e.addEventListener("click",(e=>{e.target.closest(".fancyboxModal")||e.target.closest(".callback-btn")?(({timing:e,draw:t,duration:o})=>{const l=performance.now();requestAnimationFrame((function r(c){let n=(c-l)/o;n>1&&(n=1);const s=e(n);t(s),n<1&&requestAnimationFrame(r)}))})({duration:1e3,timing:e=>e,draw(e){t.style.opacity=e,o.style.opacity=e,t.style.display="block",o.style.display="block"}}):(e.target.closest(".modal-overlay")||e.target.closest(".modal-close"))&&(t.style.display="none",o.style.display="none")}))})(),(()=>{const e=document.querySelector(".accordeon"),t=document.querySelectorAll(".accordeon .title");e.addEventListener("click",(e=>{if(e.target.closest(".element")){const o=e.target.closest(".title");t.forEach((e=>{e===o?e.classList.add("active"):e.classList.remove("active")}))}}))})(),(()=>{const t=document.querySelector('form[name="form-callback"]');let o=document.createElement("div");t.addEventListener("submit",(l=>{l.preventDefault(),(()=>{const l=t.querySelectorAll("input"),r=new FormData(t),c={};var n;o.textContent="Идёт отправка...",o.classList.add("status-text"),t.append(o),r.forEach(((e,t)=>{c[t]=e})),e(l)?(n=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{o.textContent="Ваша заявка отправлена!",l.forEach((e=>{"text"===e.type&&(e.value="")}))})).catch((e=>{o.textContent="Произошла ошибка :("})):(console.log(!1),o.textContent="Введите верные данные")})()})),e()})(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))})),(()=>{document.querySelector("body");let e=document.querySelector(".up"),t=document.querySelector(".top-slider").offsetHeight;window.onscroll=function(){scrollY>t?e.style.opacity=1:e.style.opacity=0},e.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}})(),(()=>{const e=document.querySelector(".services-section"),t=e.querySelectorAll(".col-sm-6");let o=0,l=0;const r=()=>{t[o].classList.remove("service-slide-active"),o++,o>=t.length&&(o=0),t[o].classList.add("service-slide-active")},c=(e=1500)=>{l=setInterval(r,e)};e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&c(3e3)}),!0),c(3e3)})(),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".top-slider .item"),o=document.querySelectorAll(".top-slider .table");let l=0,r=0;const c=()=>{l++,l>=t.length&&(l=0);let r=e.clientHeight;t.forEach(((e,t)=>{t===l?(e.classList.add("active"),e.style.marginTop=`-${r*t}px`):t!==l&&(e.classList.remove("active"),e.style.marginTop="0px")})),o.forEach(((e,t)=>{t===l?e.classList.add("active"):t!==l&&e.classList.remove("active")}))};((e=3e3)=>{r=setInterval(c,e)})()})()})();