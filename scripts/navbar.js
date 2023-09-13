document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");

  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarPlaceholder.innerHTML = data;

      const navItems = document.querySelector(".navbar-right ul");
      const hamburger = document.querySelector(".hamburger");

      hamburger.addEventListener("click", () => {
        navItems.style.display =
          navItems.style.display === "block" ? "none" : "block";
      });
    });
});
