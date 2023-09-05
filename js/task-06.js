const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", lengthValidation);

function lengthValidation(event) {
    if (event.currentTarget.value.trim().length === Number(inputField.dataset.length)) {
        inputField.classList.add('valid')
        inputField.classList.remove('invalid')
    } else {
        inputField.classList.add('invalid')
        inputField.classList.remove('valid')

    }
}
