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
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    navigation.style.display = "block";
    navBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
  navOpen = !navOpen;
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
