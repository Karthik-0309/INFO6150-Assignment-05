document.getElementById("submitBtn").addEventListener("click", (event) => {
  // Prevent default form submission
  event.preventDefault();
  console.log("Button Clicked");

  // Get input values
  const email = document.getElementById("formEmail").value.trim();
  const password = document.getElementById("formPassword").value.trim();

  // Clear previous error messages
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let isValid = true;

  // Dummy credentials
  const dummyEmail = "test@example.com";
  const dummyPassword = "Password1!"; // Ensure this meets the regex requirements

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
    console.log("Invalid email:", email);
  }

  // Validate password
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/; // Password regex
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long, contain at least one digit and one special character.";
    isValid = false;
    console.log("Invalid password:", password);
  }

  // Check if email and password match the dummy credentials
  if (isValid) {
    if (email === dummyEmail) {
      if (password === dummyPassword) {
        // alert("Login successful!");

        // Reset the form fields
        window.location.href = "dashboard.html";
        document.getElementById("formEmail").value = "";
        document.getElementById("formPassword").value = "";
      } else {
        // Show specific error for incorrect password
        document.getElementById("passwordError").textContent =
          "Incorrect password. Please try again.";
        console.log("Incorrect password for email:", email);
      }
    } else {
      // Show specific error for non-existent email
      document.getElementById("emailError").textContent =
        "Account does not exist. Please check your email.";
        const emailErrorDiv = document.getElementById('emailToast')
        const toastEmail = bootstrap.Toast.getOrCreateInstance(emailErrorDiv)
        toastEmail.show()
      console.log("Login failed for email:", email);
    }
  }
});
