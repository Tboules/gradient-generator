const C1 = document.querySelector(".color-sel-1");
const C2 = document.querySelector(".color-sel-2");
const bothColorPickers = document.querySelectorAll(".col-sel");
const cssStyleText = document.querySelector(".css-style");
const randomButt = document.querySelector(".randomizer");
// let background = ;

window.onload = function () {
  gradientColorChange(C1.value, C2.value);
};

bothColorPickers.forEach((inp) => {
  inp.addEventListener("change", (e) => {
    if (inp.name === "C1") gradientColorChange(e.target.value, C2.value);
    else gradientColorChange(C1.value, e.target.value);
  });
});

randomButt.addEventListener("click", () => {
  let randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  gradientColorChange(randomColor1, randomColor2);
});

function gradientColorChange(c1, c2) {
  let gradient = `linear-gradient(to bottom right, ${c1}, ${c2})`;
  document.body.style.backgroundImage = gradient;
  cssStyleText.innerHTML = gradient;
  C1.value = c1;
  C2.value = c2;
}
