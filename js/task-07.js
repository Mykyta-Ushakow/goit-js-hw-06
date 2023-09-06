const fontSizeControl = document.querySelector("#font-size-control");
fontSizeControl.value = 0;
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", handleBar);

function handleBar(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}