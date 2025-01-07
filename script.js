const openMenu = document.querySelector(".open_menu");
const closeMenu = document.querySelector(".close_menu");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
  menu.classList.add("showmenu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("showmenu");
});
