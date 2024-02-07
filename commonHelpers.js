import{S as a}from"./assets/vendor-874053e3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=document.querySelector("form");document.querySelector("button");const l=document.querySelector(".gallery");c.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value;u(t).then(n=>p(n)).catch(n=>console.log(n))});function u(s){return fetch(`https://pixabay.com/api/?key=42236651-09dd8ef8cae726de85d6e38a7&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(s){const t=s.hits.map(r=>` <a href="${r.largeImageURL}" class="image-card">
    <img src="${r.webformatURL}" alt="${r.tags}"/>
    <div class="caption">
    <ul class="caption-list"><li class="caption-text">Views <span>${r.views}</span></li>
    <li class="caption-text">Likes <span>${r.likes}</span></li>
    <li class="caption-text">Comments <span>${r.comments}</span></li>
    <li class="caption-text">Downloads <span>${r.downloads}</span></li>
    </ul>
    </div>
  </a>`).join("");l.insertAdjacentHTML("beforeend",t),new a(".gallery a",d).on("show.simplelightbox")}const d={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
