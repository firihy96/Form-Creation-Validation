document.addEventListener("DOMContentLoaded", function(){
  // Selecting elements
  let form = document.getElementById("registration-form"),
    username = document.getElementById("username"),
    userEmail = document.getElementById("email"),
    password = document.getElementById("password"),
    btn = document.querySelector("button"),
    feedbackDiv = document.getElementById("form-feedback");
  // Form Submission Event Listener
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Input Retrieval and Trimming
    username = username.value.trim();
    userEmail = userEmail.value.trim();
    password = password.value.trim();
    let isValid = true,
      messages = [];
    // validate user name
    if (username.length < 3) {
      isValid = false;
      messages.push("name is too short");
    }
    if (!userEmail.includes("@") && !userEmail.includes(".")) {
      isValid = false;
      messages.push("invalid email domain");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("weak password, try to increase its length");
    }
    // Displaying feedback
    feedbackDiv.style.display = "block";
    switch (isValid) {
      case true:
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
        break;
      case false:
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
        break;
    }
  });
});
