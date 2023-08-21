//Offer Dropdown - adapted from https://www.w3schools.com/howto/howto_js_dropdown.asp
const toggleDropdown = () => {
  document.getElementById("dropdown-content").classList.toggle("show");
};
//Clickaway close function
window.onclick = function (event) {
  if (!event.target.matches("#dropdown-btn")) {
    let dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    // dropdown.map(
    //     (item) => item.classList.contains("show") && item.classList.remove("show")
    //   );
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

//Gallery Popup adapted from https://codepen.io/lave0172/pen/xqQryG

let thumbnails = document.getElementsByClassName("thumbnail");
let overlay = document.getElementById("gallery-overlay");
let overlayClose = document.getElementById("overlay-close");
let overlayImage = document.getElementById("overlay-img");

for (let i = 0; i < thumbnails.length; i++) {
  //    console.log(thumbnails[i].src)
  thumbnails[i].addEventListener("click", openOverlay);
}

overlayClose.addEventListener("click", closeOverlay);

overlay.addEventListener("keydown", overlay);
overlayClose.addEventListener("click", closeOverlay);

function closeOverlay(event) {
  if (event.keyCode !== 27) {
    return;
  }
  overlay.classList.toggle("open");
}

function closeOverlay(event) {
  overlay.classList.toggle("open");
}

function openOverlay(event) {
  overlay.classList.toggle("open");
  overlayImage.src = event.target.src;
}

//Masonry initialisation
const elem = document.querySelector(".grid");
const masonry = new Masonry(elem, {
  itemSelector: ".grid-item",

  gutter: 43,
  fitWidth: true,
});
