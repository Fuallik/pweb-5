// Dark Mode
const btnDarkMode = document.getElementById("btn-darkmode");
const iconTheme = document.getElementById("icon-theme");

btnDarkMode.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    iconTheme.src = "asset/light.png";
  } else {
    iconTheme.src = "asset/night.png";
  }
});

// Navbar Responsive
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.getElementById("nav-list");

hamburgerMenu.addEventListener("click", function () {
  navList.classList.toggle("aktif");
});
