const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const math = document.getElementById('math');
const mathResult = document.getElementById('mathResult');
const accept = document.getElementById('accept');
const submitButton = document.getElementById('submitButton');

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
math.textContent = `${num1} + ${num2} = ?`;

function validatePassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    const hasNumber = /[0-9]/.test(passwordValue);
    const hasValidLength = passwordValue.length >= 6 && passwordValue.length <= 15;
    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasValidLength && passwordValue === confirmPasswordValue;

    return isValid;
}

function validateMath() {
    return parseInt(mathResult.value) === num1 + num2;
}

function validateForm() {
    const isPasswordValid = validatePassword();
    const isMathValid = validateMath();
    const isAccepted = accept.checked;

    submitButton.disabled = !(isPasswordValid && isMathValid && isAccepted);
}

password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);
mathResult.addEventListener('input', validateForm);
accept.addEventListener('change', validateForm);