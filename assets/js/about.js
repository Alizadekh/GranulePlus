const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector("#searchInput");

let isOpen = false;

function toggleSearch() {
  if (searchInput.value.length > 0) {
    searchInput.classList.add("open");
    searchInput.classList.remove("closed");
  } else if (isOpen) {
    searchInput.classList.add("closed");
    searchInput.classList.remove("open");
  } else {
    searchInput.classList.add("open");
    searchInput.classList.remove("closed");
  }
  isOpen = !isOpen;
}
searchBtn.addEventListener("click", toggleSearch);

// Navbar Open Mobile
const navBtn = document.querySelector("#navOpenClose");
const navigation = document.querySelector("#navigation");
let navOpen = false;

navBtn.addEventListener("click", function () {
  if (navOpen) {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
  navOpen = !navOpen;
});
