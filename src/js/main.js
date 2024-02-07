import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');
const searchBtn = document.querySelector('button');
const imagesList = document.querySelector(".gallery")

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const keyWord = event.target.elements.search.value;
    
    fetchImages(keyWord)
        .then((images) => renderImages(images))
    .catch((error)=>console.log(error))
    
})



function fetchImages(keyWord) {
    return fetch(`https://pixabay.com/api/?key=42236651-09dd8ef8cae726de85d6e38a7&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
            
            throw new Error(response.status);
        }
        return response.json();
    });
}

function renderImages(images){
    const markup = images.hits
        .map((image) => {
            return ` <a href="${image.largeImageURL}" class="image-card">
    <img src="${image.webformatURL}" alt="${image.tags}"/>
    <div class="caption">
    <ul class="caption-list"><li class="caption-text">Views <span>${image.views}</span></li>
    <li class="caption-text">Likes <span>${image.likes}</span></li>
    <li class="caption-text">Comments <span>${image.comments}</span></li>
    <li class="caption-text">Downloads <span>${image.downloads}</span></li>
    </ul>
    </div>
  </a>`;
        })
        .join("");
    imagesList.insertAdjacentHTML("beforeend", markup);
    let gallery = new SimpleLightbox('.gallery a', options);
gallery.on('show.simplelightbox');
}
const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
