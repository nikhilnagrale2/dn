function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

const box = document.querySelector(".box");

// box.addEventListener("click", () => {
//   console.log(box.classList);
// });

box.addEventListener("click", () => {
  console.log(box.classList);
  console.log(box.classList.contains("margin"));
});

box.addEventListener("click", () => {
  if (box.classList.contains("boxClicked")) {
    box.classList.remove("boxClicked");
  } else {
    box.classList.add("boxClicked");
  }
});

box.addEventListener("dblclick", () => {
  if (box.classList.contains("boxDClick")) {
    box.classList.remove("boxDClick");
  } else {
    box.classList.add("boxDClick");
  }
});

const inputBox = document.querySelector(".inputbox");

inputBox.addEventListener("keypress", () => {
  alert("You pressed a key inside the input field");
});
