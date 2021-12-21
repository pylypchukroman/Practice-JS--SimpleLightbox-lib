import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryElem = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
   </a>
   </div> `;
  })
    .join("");

galleryElem.insertAdjacentHTML("afterbegin", galleryMarkup);

let instance = null;
galleryElem.addEventListener("click", open);
function open(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") return;
    const dataSource = event.target.dataset.source;
    instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`)
    instance.show()

    // console.log(dataSource);
   document.addEventListener("keydown", closeModalEscape);
}

function closeModalEscape(e) {
  if (e.code === "Escape") {
      instance.close()
      document.addEventListener("keydown", closeModalEscape);
  }
}
