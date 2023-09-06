const form = document.querySelector("form");
// const emailField = document.querySelector('input[type="email"]');
// const passwordField = document.querySelector('input[type="password"]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert("Будь-ласка заповніть всі поля");
        return
    }

    const userData = {
        email,
        password,
    }

    console.log(userData);
    form.reset();
}