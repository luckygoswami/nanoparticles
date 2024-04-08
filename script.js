"use strict";

const rangeBar = document.getElementById("rangeBar");
const imageBox = document.querySelector(".imageBox");
const sceneImg = document.getElementById("sceneImg");

function isDecimal(number) {
  return number.toString().includes(".");
}

rangeBar.addEventListener("input", () => {
  console.log(rangeBar.value);
  if (!isDecimal(rangeBar.value)) {
    sceneImg.src = `assets/scenes/scene000${rangeBar.value}.webp`;
  }
});
