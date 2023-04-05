let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let invalidPasswordWarning = document.getElementById("invalid-password-warning");

password.addEventListener("click", confirm)
confirmPassword.addEventListener("click", confirm)

function confirm() {
    //console.log(password.value + " " + confirmPassword.value);

    if (password.value == confirmPassword.value) {
        // They match
        invalidPasswordWarning.innerHTML = "";
        return true;
    } else {
        // Anything else, they don't match
        invalidPasswordWarning.innerHTML = "Passwords do not match";
        return false;
    }
}