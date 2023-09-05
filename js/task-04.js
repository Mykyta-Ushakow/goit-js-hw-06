const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", handleDecrement);
function handleDecrement(event) {
    counterValue--
    valueSpan.textContent = counterValue;
}

incrementBtn.addEventListener("click", handleIncrement);
function handleIncrement(event) {
    counterValue++
    valueSpan.textContent = counterValue;
}
