const form = document.querySelector('#right-side form');
const passInput = document.querySelector('#password');
const confirmPassInput = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('#pass-form p');

// Event for submiting the form
form.addEventListener('submit', (e) => {
    if (passInput.value == confirmPassInput.value) {
        alert("Signed In.");
    } else {
        alert("Sign In FAILED. Please check the invalid inputs");
    }
    e.preventDefault();
});

// Event when user input passoword in 'Password' input field
passInput.addEventListener('input', () => {
    if (passInput.value == '') {
        errorMessage.innerText = '* Input password';
        errorMessage.style.visibility = 'visible';
        passInput.style.border = '1.5px solid red';
        confirmPassInput.style.border = '1.5px solid red';
    }
    else if (passInput.value == confirmPassInput.value) {
        errorMessage.style.visibility = 'hidden';
        passInput.style.border = '1.5px solid rgb(0, 158, 0)';
        confirmPassInput.style.border = '1.5px solid rgb(0, 158, 0)';
    } else {
        errorMessage.innerText = '* Passwords do not match';
        errorMessage.style.visibility = 'visible';
        passInput.style.border = '1.5px solid red';
        confirmPassInput.style.border = '1.5px solid red';
    }
});

// Event when user input passoword in 'Confirm Password' input field
confirmPassInput.addEventListener('input', () => {
    if (passInput.value == '') {
        errorMessage.innerText = '* Input password';
        errorMessage.style.visibility = 'visible';
        passInput.style.border = '1.5px solid red';
        confirmPassInput.style.border = '1.5px solid red';
    } else if (passInput.value == confirmPassInput.value) {
        errorMessage.style.visibility = 'hidden';
        passInput.style.border = '1.5px solid rgb(0, 158, 0)';
        confirmPassInput.style.border = '1.5px solid rgb(0, 158, 0)';
    } else {
        errorMessage.innerText = '* Passwords do not match';
        errorMessage.style.visibility = 'visible';
        passInput.style.border = '1.5px solid red';
        confirmPassInput.style.border = '1.5px solid red';
    }
});