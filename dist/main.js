(()=>{var e={496:e=>{e.exports=()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element "),c=e.querySelectorAll(".element-content ");e.addEventListener("click",(e=>{if(e.preventDefault(),e.target.classList.contains("element title")||e.target.closest(".element")){const l=e.target.closest(".element");t.forEach(((e,s)=>{e===l?(console.log("ggg"),t[s].classList.add("active"),c[s].style.display="block"):(e.classList.remove("active"),c[s].style.display="none")}))}}))}},347:e=>{e.exports=()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),c=document.querySelector(".button-services"),l=document.querySelectorAll(".callback-btn"),s=document.querySelectorAll(".services-section .element "),o=e.querySelector(".modal-close"),a=()=>{e.style.display="none",t.style.display="none"},n=()=>{e.style.display="block",t.style.display="block"};l.forEach((e=>{e.addEventListener("click",n)})),s.forEach((e=>{e.addEventListener("click",(e=>{e.target.closest(".img-wrapper")&&n()}))})),c.addEventListener("click",n),o.addEventListener("click",a),t.addEventListener("click",a)}},117:e=>{e.exports=()=>{const e=document.getElementById("formId"),t=e.querySelector('input[name="fio"]'),c=e.querySelector('input[name="tel"]'),l=document.createElement("span");let s=[];try{if(!e)throw new Error("верните, пожалуйста, форму");e.addEventListener("submit",(o=>{o.preventDefault();const a=e.querySelectorAll('input[type="text"] ');console.log(a),isError=!1,/^[А-Яа-яЁё\s-]+$/gi.test(t.value)&&""!==t.value?t.classList.add("success"):(isError=!0,alert("в поле для имени вводите только кириллицу")),/^[\d()+-]+$/g.test(c.value)&&""!==c.value?c.classList.add("success"):(isError=!0,alert("в поле номер телефона вводите только цифры, дефис")),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")||(t=!1)})),t})(a)?(e=>{let t=e.querySelectorAll("input");const c=new FormData(e),o={};var a;l.textContent="загрузка",e.append(l),c.forEach(((e,t)=>{o[t]=e})),s.forEach((e=>{const t=document.getElementById(e.id);console.log(t),"block"===e.type?o[e.id]=t.textContent:"input"===e.type&&(o[e.id]=t.value)})),(a=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{l.textContent="отправлено",t.forEach((e=>{e.value=""}))})).catch((e=>{l.textContent="ошибка"}))})(e):alert("Ошибка ввода")}))}catch(e){console.log(e.message)}}},467:e=>{e.exports=()=>{const e=document.querySelector(".top-slider"),t=e.querySelectorAll(".item "),c=e.querySelectorAll(".table ");let l,s=document.createElement("ul"),o=0;e.append(s);const a=(e,t)=>{e[t].style.display=""},n=(e,t,c)=>{e[t].classList.add(c)},r=(e,t)=>{e[t].style.display="none"},i=(e,t,c)=>{e[t].classList.remove(c)};s.classList.add("slick-dots"),t.forEach(((e,t)=>{const c=document.createElement("li");c.classList.add("dot"),0===t&&c.classList.add("slick-active"),s.append(c)})),c.forEach(((e,t)=>{0===t&&e.classList.add("active")}));const d=s.querySelectorAll(".dot"),u=()=>{r(t,o),i(d,o,"slick-active"),i(c,o,"active"),o++,o>=t.length&&(o=0),a(t,o),n(d,o,"slick-active"),n(c,o,"active")};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(r(t,o),i(d,o,"slick-active"),i(c,o,"active"),e.target.classList.contains("dot")&&d.forEach(((t,c)=>{e.target===t&&(o=c)})),a(t,o),n(d,o,"slick-active"),n(c,o,"active"))})),((e=3e3)=>{l=setInterval(u,e)})()}}},t={};function c(l){var s=t[l];if(void 0!==s)return s.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,c),o.exports}(()=>{const e=c(347),t=c(467),l=c(117),s=c(496);e(),t(),l(),s()})()})();