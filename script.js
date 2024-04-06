"use strict";

const rangeValue = document.getElementById("rangeValue");
const rangeBar = document.getElementById("rangeBar");
const imageBox = document.querySelector(".imageBox");
const sceneImg = document.getElementById("sceneImg");
rangeValue.textContent = `${rangeBar.value}`;

rangeBar.addEventListener("input", () => {
  rangeValue.textContent = `${rangeBar.value}`;
  sceneImg.src = `assets/scenes/scene000${rangeBar.value}.webp`;
});
