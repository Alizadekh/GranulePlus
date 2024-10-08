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

// Swiper

var swiper = new Swiper(".scrollswiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

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
