"use strict";

const rangeBar = document.getElementById("rangeBar");
const imageBox = document.querySelector(".imageBox");
const sceneImg = document.getElementById("sceneImg");

rangeBar.addEventListener("input", () => {
  sceneImg.src = `assets/scenes/scene000${rangeBar.value}.webp`;
});
