function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const a=document.createElement("LI");a.appendChild(n),e.appendChild(a)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const a=document.createElement("DIV");a.appendChild(n),a.classList.add("overlay");const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),a.onclick=()=>{c.classList.remove("fijar-body"),a.remove()},o.onclick=()=>{c.classList.remove("fijar-body"),a.remove()},a.appendChild(o);const c=document.querySelector("body");c.appendChild(a),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",()=>{crearGaleria()});
//# sourceMappingURL=bundle.js.map