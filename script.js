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
