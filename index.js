import{a as d,S as m,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="54943904-4c7872f3e0f1bf375155a9c6b";function y(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(i=>i.data)}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:a,comments:f,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b>${t}</p>
            <p><b>Views</b>${a}</p>
            <p><b>Comments</b>${f}</p>
            <p><b>Downloads</b>${u}</p>
          </div>
        </li>`).join("");n.gallery.insertAdjacentHTML("afterbegin",o),h.refresh()}function L(){n.gallery.innerHTML=""}function S(){n.loader.classList.remove("is-hidden")}function w(){n.loader.classList.add("is-hidden")}const c=document.getElementById("js-form");c.addEventListener("submit",P);function P(s){s.preventDefault();const i=new FormData(s.target).get("search-text");if(!i){l.error({message:"Please fill in the search field!",position:"topRight"});return}L(),S(),y(i).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}).catch(r=>{console.log(r),l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),c.reset()})}
//# sourceMappingURL=index.js.map
