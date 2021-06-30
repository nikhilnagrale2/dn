// for (i = 1; i <= 100; i++) {
//     console.log(`
//     <div class="pixel">
//       <input type="checkbox" class="pixel-box" />
//       <span class="pixel-view"></span>
//     </div>`);
// }

const st = new Set([
    130, 131, 149, 150, 151, 152, 168, 169, 170,
    171, 172, 173, 187, 188, 190, 191, 193, 194,
    207, 208, 209, 210, 211, 212, 213, 214, 229,
    232, 248, 250, 251, 253, 267, 269, 272, 274
]);

const pixel = document.querySelectorAll(".pixel-view");

for (let i = 0; i < pixel.length; i++) {
    if (st.has(i + 1)) {
        pixel[i].style.background = "rgb(255, 255, 255)";
    }
}


const center = document.querySelector('.center');
center.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.style.background == "rgb(255, 255, 255)") {
        event.target.style.background = "#de4738";
    } else {
        event.target.style.background = "#fff";
    }
});