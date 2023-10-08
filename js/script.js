// Get references to form elements by their IDs
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("form1Example1");
const passwordInput = document.getElementById("form1Example2");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

// Add an event listener to the form for submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting (for demonstration)

    // Retrieve the values entered by the user
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // Perform any desired actions with the email and password values
    // For this example, we'll just log them to the console
    console.log("Email: " + emailValue);
    console.log("Password: " + passwordValue);
});

// Add an event listener to the "Forgot password?" link
forgotPasswordLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from navigating (for demonstration)

    // Perform any desired actions when the user clicks the link
    // For this example, we'll just log a message to the console
    console.log("Forgot password link clicked!");
});