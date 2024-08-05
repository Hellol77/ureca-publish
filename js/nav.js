import { $ } from "../utils/querySelector.js";

const menu1 = $(".menu_1");
const menu2 = $(".menu_2");
const menu3 = $(".menu_3");
const menu4 = $(".menu_4");

const subMenu1 = $(".sub_menu_1");
const subMenu2 = $(".sub_menu_2");
const subMenu3 = $(".sub_menu_3");
const subMenu4 = $(".sub_menu_4");

menu1.addEventListener("mouseover", () => {
  subMenu1.style.display = "flex";
});

menu1.addEventListener("mouseout", () => {
  subMenu1.style.display = "none";
});

menu2.addEventListener("mouseover", () => {
  subMenu2.style.display = "flex";
});

menu2.addEventListener("mouseout", () => {
  subMenu2.style.display = "none";
});

menu3.addEventListener("mouseover", () => {
  subMenu3.style.display = "flex";
});

menu3.addEventListener("mouseout", () => {
  subMenu3.style.display = "none";
});

menu4.addEventListener("mouseover", () => {
  subMenu4.style.display = "flex";
});

menu4.addEventListener("mouseout", () => {
  subMenu4.style.display = "none";
});
