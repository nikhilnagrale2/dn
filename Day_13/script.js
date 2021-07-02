"use strict";

const img = document.querySelector("img");
const options = document.querySelector(".options");
let url;

let optionsArray = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

(function loadOptions() {
  for (let i = 0; i < optionsArray.length; i++) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = optionsArray[i];
    options.appendChild(button);
  }
})();

// fetch("https://api.waifu.pics/sfw/slap")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     //   console.log(typeof url);
//     img.src = data.url;
//   });

async function getUrl(type = "sfw", category = "waifu") {
  let response = await fetch(`https://api.waifu.pics/${type}/${category}`);
  let res = await response.json();
  return res.url;
}

async function loadImage(category) {
  console.log(category);
  url = await getUrl("sfw", category);
  img.src = url;
}

loadImage();

options.addEventListener("click", (event) => {
  console.log(event);
  loadImage(event.target.innerHTML);
});
