const box = Array.from(document.querySelectorAll(".box"));
const total = document.querySelector(".totalseat");
const occupied = document.querySelector(".occupied seats");

var totalSeats = 36;
var occupiedSeats = 0;

function updateStatus(totalseat, occupiedseat) {
  this.totalSeats += totalseat;
  this.occupiedSeats += occupiedseat;
  document.getElementById("totalID").innerHTML =
    "Total Seats : " + this.totalSeats;
  document.getElementById("occupiedID").innerHTML =
    "Occupied Seats : " + this.occupiedSeats;
}

for (const eachbox of box) {
  eachbox.addEventListener("click", () => {
    if (eachbox.classList.contains("boxClick")) {
      eachbox.classList.remove("boxClick");
      updateStatus(1, -1);
    } else {
      eachbox.classList.add("boxClick");
      updateStatus(-1, 1);
    }
  });
}