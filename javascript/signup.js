document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm'); 
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const repeatPasswordInput = document.getElementById('retypepassword');
    const agreeCheckbox = document.getElementById('checkbox');

    // Real-time validation for name input
    nameInput.addEventListener('input', () => {
        if (!validateName(nameInput.value)) {
            showError(nameInput, 'User Name must contain only letters.');
        } else {
            clearError(nameInput);
        }
    });

    form.addEventListener('submit', (event) => { // Listen for the 'submit' event
        let valid = true;

        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.errormessage');
        errorMessages.forEach((msg) => msg.innerText = '');

        // Name validate
        if (!nameInput.value.trim()) {
            showError(nameInput, 'User Name is required.');
            valid = false;
        } else if (!validateName(nameInput.value)) {
            showError(nameInput, 'User Name must contain only letters.');
            valid = false;
        }

        // Email validate
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required.');
            valid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Invalid email format.');
            valid = false;
        }

        // Password validate
        if (!passwordInput.value) {
            showError(passwordInput, 'Password is required.');
            valid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters long.');
            valid = false;
        }

        // Repeat password validate
        if (repeatPasswordInput.value.trim() === '') {
            showError(repeatPasswordInput, 'Please repeat your password.');
            valid = false;
        } else if (passwordInput.value !== repeatPasswordInput.value) {
            showError(repeatPasswordInput, 'Passwords do not match.'); // Show error for mismatched passwords
            valid = false;
        }

        // Terms checkbox validate
        if (!agreeCheckbox.checked) {
            showError(agreeCheckbox, 'You must agree to the terms of service.');
            valid = false;
        }
        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }else{
            event.preventDefault();
            window.location.href = "login.html";
        }
    });

    function showError(input, message) {
        const errorMessage = input.parentNode.querySelector('.errormessage'); 
        errorMessage.innerText = message; // Set the error message
    }

    function clearError(input) {
        const errorMessage = input.parentNode.querySelector('.errormessage'); 
        errorMessage.innerText = ''; // Clear the error message
    }

    function validateName(name) {
        const nameRegex = /^[A-Za-z]+$/;
        return nameRegex.test(name);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8; 
    }
});
