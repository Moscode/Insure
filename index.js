const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const body = document.body;


function resetingHambugerMenuStyle(menuType) {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function handleScreenResize(e) {
    if (e.matches) {
      menuType.style.display = "none";
    }
  }
  mediaQuery.addEventListener("resize", handleScreenResize);
  handleScreenResize(mediaQuery);
}

function open() {
  menu.style.left = "0%";
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
  body.style.position = "fixed";
  resetingHambugerMenuStyle(closeMenu);
}

function close() {
  menu.style.left = "-100%";
  closeMenu.style.display = "none";
  openMenu.style.display = "inline-block";
  body.style.position = "relative";
  resetingHambugerMenuStyle(openMenu);
}

closeMenu.addEventListener("click", close);
openMenu.addEventListener("click", open);
