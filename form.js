// Select elements
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Form submit event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Trim values
    const userValue = username.value.trim();
    const passValue = password.value.trim();

    // Validation
    if (userValue === "" || passValue === "") {
        alert("Please fill in both username and password.");
        return;
    }

    // Example credentials (for demo only)
    const correctUsername = "Khushboo Gupta";
    const correctPassword = "@khushboo123";

    if (userValue === correctUsername && passValue === correctPassword) {
        alert("Login successful!");
        // Redirect example
        // window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }

    // Clear fields after submission
    username.value = "";
    password.value = "";
});
