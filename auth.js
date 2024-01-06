function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            // Redirect or perform additional actions after successful login
            // For example: window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
