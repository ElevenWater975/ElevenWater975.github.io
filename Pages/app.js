function enableDark() {
    var dark = document.body;
    dark.classList.toggle('darkmode');
}

var emailEl = document.querySelector("#email-check");

var usernameEl = document.querySelector("#username");

var passwordEl = document.querySelector("#password");

var passwordConfirmation = document.querySelector("#confirm-password");

document.addEventListener("validate", function (e) {
e.preventDefault();
const isRequired = value === '' ? false : true;
})

const isPasswordSecure = (new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")).test

const errorShow = (input, message) => {
    const formField = input.parentElement; 
}

function notice() {
    var x = document.getElementById("submit");
    if (x.innerHTML === "Create new account!") {
        x.innerHTML === "Not ready yet";
    }
}