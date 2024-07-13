const password = document.querySelector("#password_init");
const password_confirm = document.querySelector("#password_confirm");

// call checkPasswords after every keyboard input on confirm password field
password.addEventListener("input", checkPasswords);
password_confirm.addEventListener("input", checkPasswords);

function checkPasswords() {
    // if values are not equal, mark inputs as :invalid
    // and report to update form
    if (password.value !== password_confirm.value) {
        password.setCustomValidity("Passwords must match");
        password_confirm.setCustomValidity("Passwords must match");
    }
    else {
        // mark as valid and report to update form
        password.setCustomValidity("");
        password_confirm.setCustomValidity("");
    }
}