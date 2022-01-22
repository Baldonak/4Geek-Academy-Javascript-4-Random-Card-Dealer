/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function Card() {
  this.suits = ["♥", "♦", "♠", "♣"];
  this.numbers = [
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
}

Card.prototype = {
  //Devuelve un elemento aleatorio de una matriz
  RandomItem: function(items) {
    return items[Math.floor(Math.random() * items.length)];
  },

  //Inserta un icono en un elemento
  InsertIconIntoElement: function(icon, element) {
    element.innerHTML = icon;
  },
  //Devuelve "rojo" si suit es corazon o pica, y negro si no lo es
  ColorSuitFont: function(random_suit) {
    return random_suit === "♥" || random_suit === "♦" ? "red" : "black";
  },
  //Cambia color
  ChangeColorSuitFont: function(color_suit, element) {
    document.querySelector(element).style.color = color_suit;
  },
  //Renderiza una carta aleatoria
  getRandomCard: function() {
    let random_suit = this.RandomItem(this.suits);
    let random_number = this.RandomItem(this.numbers);
    let color = this.ColorSuitFont(random_suit);

    this.ChangeColorSuitFont(color, "body");

    const top_icon_container = document.querySelector(".icon_container.top");
    const bottom_icon_container = document.querySelector(
      ".icon_container.bottom"
    );
    const number_container = document.querySelector(".number_container h1");

    this.InsertIconIntoElement(random_suit, top_icon_container);
    this.InsertIconIntoElement(random_suit, bottom_icon_container);
    this.InsertIconIntoElement(random_number, number_container);
  }
};

window.onload = () => {
  Card = new Card();
  Card.getRandomCard();
};
