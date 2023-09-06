const body = document.querySelector("body");
const colorDisplay = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color")

colorBtn.addEventListener("click", handleColor);
function handleColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorDisplay.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}