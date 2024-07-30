document.addEventListener("DOMContentLoaded", function () {
  const langLinks = document.querySelectorAll(".dropdown-content a");
  const currentPath = window.location.pathname;

  langLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const newLang = link.getAttribute("data-value");
      const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}\//, "/");

      let newUrl;
      if (newLang === "en") {
        newUrl = pathWithoutLang.startsWith("/")
          ? pathWithoutLang
          : `/${pathWithoutLang}`;
      } else {
        newUrl = `/${newLang}${pathWithoutLang}`;
      }

      window.location.href = newUrl;
    });
  });
});
