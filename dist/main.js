(()=>{"use strict";const t=({timing:t,draw:e,duration:o})=>{const a=performance.now();requestAnimationFrame((function l(n){let s=(n-a)/o;s>1&&(s=1);const c=t(s);e(c),s<1&&requestAnimationFrame(l)}))};(()=>{const e=document.querySelector("body"),o=document.querySelector(".modal-overlay"),a=document.getElementById("callback");e.addEventListener("click",(e=>{e.target.closest(".button-services")||e.target.closest(".callback-btn")?t({duration:1e3,timing:t=>t,draw(t){o.style.opacity=t,a.style.opacity=t,o.style.display="block",a.style.display="block"}}):(e.target.closest(".modal-overlay")||e.target.closest(".modal-close"))&&t({duration:1e3,timing:t=>t,draw(t){o.style.display="none",a.style.display="none"}})}))})()})();