// Button click
document.getElementById("myBtn").addEventListener("click", () => {
    document.getElementById("myBtn").innerText = "Clicked!";
  });
  
  // Keypress detection
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyDisplay").textContent = `You pressed: ${e.key}`;
  });
  
  // Double-click
  document.getElementById("secretBox").addEventListener("dblclick", () => {
    alert("✨ Secret Unlocked!");
  });
  

  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("feedback");
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = "Please enter a valid email.";
    } else if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.textContent = "Form submitted successfully!";
    }
  });
  