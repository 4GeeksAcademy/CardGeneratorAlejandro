/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let cardnumber = [
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
  let uppersuit = document.querySelector(".uppersuit");
  let number = document.querySelector(".number");
  let lowersuit = document.querySelector(".lowersuit");

  const card_selection = (array1, array2) => {
    let card_data = [];
    card_data.push(array1[Math.floor(Math.random() * array1.length)]);
    card_data.push(array2[Math.floor(Math.random() * array2.length)]);
    return card_data;
  };

  function suit_color(array) {
    if (array[0] === "♥" || array[0] === "♦") {
      uppersuit.style.color = "red";
      number.style.color = "red";
      lowersuit.style.color = "red";
    } else {
      uppersuit.style.color = "black";
      number.style.color = "black";
      lowersuit.style.color = "black";
    }
  }

  function suit_selection(array) {
    switch (array[0]) {
      case "♥":
        document.querySelector(".uppersuit").innerHTML = "♥";
        document.querySelector(".lowersuit").innerHTML = "♥";
        break;
      case "♦":
        document.querySelector(".uppersuit").innerHTML = "♦";
        document.querySelector(".lowersuit").innerHTML = "♦";
        break;
      case "♠":
        document.querySelector(".uppersuit").innerHTML = "♠";
        document.querySelector(".lowersuit").innerHTML = "♠";
        break;
      case "♣":
        document.querySelector(".uppersuit").innerHTML = "♣";
        document.querySelector(".lowersuit").innerHTML = "♣";
        break;
      default:
        console.log("Error en el palo");
        break;
    }
  }

  function number_selection(array) {
    document.querySelector(".number").innerHTML = array[1];
  }

  function card_generator() {
    let card = card_selection(suit, cardnumber);
    suit_color(card);
    suit_selection(card);
    number_selection(card);
  }

  card_generator();
  document.querySelector(".button").addEventListener("click", card_generator);
  setInterval(card_generator, 10000);
  console.log("Hello Rigo from the console!");
};
