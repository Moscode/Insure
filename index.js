const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const body = document.body;

function open() {
  menu.style.left = "0%";
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
  body.style.position = "fixed";
}

function close() {
  menu.style.left = "-100%";
  closeMenu.style.display = "none";
  openMenu.style.display = "inline-block";
  body.style.position = "relative";
}

closeMenu.addEventListener("click", close);
openMenu.addEventListener("click", open);
