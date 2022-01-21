/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♥", "♦", "♠", "♣"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const top_icon_container = document.querySelector(".icon_container.top");
const bottom_icon_container = document.querySelector(".icon_container.bottom");

const random_item = items => {
  return items[Math.floor(Math.random() * items.length)];
};

window.onload = () => {
  //write your code here
  let random_icon = random_item(suits);
  top_icon_container.innerHTML = random_icon;
  bottom_icon_container.innerHTML = random_icon;
};
