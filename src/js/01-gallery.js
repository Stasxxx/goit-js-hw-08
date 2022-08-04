// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = createPictureGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);


function createPictureGallery(pictures) {
    return pictures.map((picture) => 
            `<div class="gallery__item">
                <a class="gallery__item" href="${picture.original}">
                    <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
                </a>
            </div>`
        )
        .join('');
    
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: "alt",

});