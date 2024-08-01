function sendEmail() {
  var email = document.getElementById("email").value;
  var fullname = document.getElementById("fullname").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var mailtoLink = `mailto:aykhanalizadekh@gmail.com?subject=Contact Form Submission&body=Name: ${fullname}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

  window.location.href = mailtoLink;
}

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
