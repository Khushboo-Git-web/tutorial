
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");


form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    const userValue = username.value.trim();
    const passValue = password.value.trim();

    // Validation
    if (userValue === "" || passValue === "") {
        alert("Please fill in both username and password.");
        return;
    }
    const correctUsername = "Khushboo Gupta";
    const correctPassword = "@khushboo123";

    if (userValue === correctUsername && passValue === correctPassword) {
        alert("Login successful!");
        
    } else {
        alert("Invalid username or password.");
    }

    username.value = "";
    password.value = "";
});

