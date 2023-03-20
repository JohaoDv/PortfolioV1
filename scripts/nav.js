const nav = document.querySelector(".navbar");
let hamburguer = document.querySelector(".fa-solid");
const menu = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
});
hamburguer.addEventListener("click", () => {
  menu.classList.toggle("menu__active");
  // console.log(menu.classList.value);
  if (menu.classList.value == "menu menu__active") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
window.addEventListener("click", (e) => {
  if (
    e.target.classList.value === "home_link" ||
    e.target.classList.value === "about_link" ||
    e.target.classList.value === "portfolio_link" ||
    e.target.classList.value === "contact_link"
  ) {
    menu.classList = "menu";
    document.body.style.overflow = "auto";
  }
});
