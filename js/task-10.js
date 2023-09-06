function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => createBoxes(number.value));

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {

  let markup = [];

  for (let count = 0; count < amount; count++) {
    const box = document.createElement("div");
    box.style.width = `${30 + (10 * count)}px`;
    box.style.height = `${30 + (10 * count)}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    markup.push(box);
  }

  boxes.append(...markup);
}

function destroyBoxes(event) {
  boxes.innerHTML = '';
}
