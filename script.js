//Offer Dropdown - adapted from https://www.w3schools.com/howto/howto_js_dropdown.asp
const toggleDropdown = () => {
  document.getElementById("dropdown-content").classList.toggle("show");
};

//Clickaway close function
window.onclick = function (event) {
  if (!event.target.matches("#dropdown-btn")) {
    let dropdowns = document.getElementsByClassName("dropdown");
    for (let dropdown of dropdowns) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  }
};

//Searchbar
const toggleSearchbar = () => {
  document.getElementById("search-bar").classList.toggle("show");
};
const toggleHamburgerSearchbar = () => {
  document.getElementById("search-bar-ham").classList.toggle("show");
};
//Hamburger Menu
const toggleHamburger = () => {
  document.getElementById("links").classList.toggle("expand");
};

//Slider
currentSlideId = 1;
slider = document.getElementById("slider");
totalSlides = slider.childElementCount;
console.log(totalSlides);
console.log(currentSlideId);
console.log(slider);

const showSlide = () => {
  const slides = document.getElementById("slider").getElementsByTagName("li");
  for (let i = 0; i < totalSlides; i++) {
    const element = slides[i];
    if (currentSlideId === i + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
};

const nextSlide = () => {
  if (totalSlides > currentSlideId) {
    currentSlideId++;
    showSlide();
  }
};

const prev = () => {
  if (currentSlideId >= 2) {
    currentSlideId--;
    showSlide();
  }
};

//Modal

let modal = document.getElementById("modal");
let modalClose = document.getElementById("modal-close");

const closeModal = () => {
  modal.classList.toggle("open");
};

const toggleModal = () => {
  modal.classList.toggle("open");
};

modalClose.addEventListener("click", closeModal);

//Gallery expand button
const galleryBtn = document.getElementById("expand-btn");
const toggleGallery = () => {
  const initialText = "Rozwiń";
  document.getElementById("masonry").classList.toggle("gallery-expand");
  if (
    galleryBtn.textContent.toLowerCase().includes(initialText.toLowerCase())
  ) {
    galleryBtn.textContent = "Zwiń";
  } else {
    galleryBtn.textContent = initialText;
  }
};

//Gallery Popup adapted from https://codepen.io/lave0172/pen/xqQryG

let thumbnails = document.getElementsByClassName("thumbnail");
let overlay = document.getElementById("gallery-overlay");
let overlayClose = document.getElementById("overlay-close");
let overlayImage = document.getElementById("overlay-img");

const closeOverlay = () => {
  overlay.classList.toggle("open");
};

const openOverlay = (event) => {
  overlay.classList.toggle("open");
  overlayImage.src = event.target.src;
};

for (let thumbnail of thumbnails) {
  thumbnail.addEventListener("click", openOverlay);
}

overlayClose.addEventListener("click", closeOverlay);

//Masonry initialisation
const elem = document.querySelector(".grid");
const masonry = new Masonry(elem, {
  itemSelector: ".grid-item",

  gutter: 43,
  fitWidth: true,
});
