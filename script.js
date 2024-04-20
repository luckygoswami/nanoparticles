"use strict";

const rangeBar = document.getElementById("rangeBar");
const imageBox = document.querySelector(".imageBox");
const sceneImg = document.getElementById("sceneImg");
const head = document.querySelector("head");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

// fetch("components/head.html")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.text();
//   })
//   .then((htmlContent) => {
//     head.innerHTML += htmlContent;
//   })
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });

fetch("components/nav.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((htmlContent) => {
    nav.innerHTML = htmlContent;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("components/footer.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((htmlContent) => {
    footer.innerHTML = htmlContent;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function isDecimal(number) {
  return number.toString().includes(".");
}

rangeBar.addEventListener("input", () => {
  console.log(rangeBar.value);
  if (!isDecimal(rangeBar.value)) {
    sceneImg.src = `assets/scenes/scene000${rangeBar.value}.webp`;
  }
});
