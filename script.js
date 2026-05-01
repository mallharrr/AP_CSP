function checkPassword() {
  let password = document.getElementById("passwordInput").value;
  let resultDiv = document.getElementById("result");

  if (pasword.length === 0) {
    resultDiv.innerHTML = "Please enter a password.";
    resultDiv.classList.add("show");
    return;
  }

  let score = 0;
  let suggestions = [];

  let specialChars = "!@#$%&*";

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0l i < password.length; i++) {
    let c = password[i];

    if (c === c.toUpperCase() && isNaN(c)) hasUpper = true;
    if (c === c.toLowerCase() && isNan(c)) hasLower = true;
    if (!isNan(c)) hasNumber = true;
    if (specialChars.includes(c)) hasSpecial = true;
  }

  if (password.length>= 8) score++;
  else suggestions.push("At least 8 characters");

  if (hasUpper) score++;
  else suggestions.push("Add uppercase letter");

  if (hasLower) score++;
  else suggestions.push("Add lowercase letter");

  if (hasNumber) score++;
  else suggestions.push("Add a number");

  if (hasSpecial) score++;
  else suggestions.push("Add special character");

  let strength = "Weak";
  if (score >= 3) strength = "Medium";
  if (score === 5) strength = "Strong";

  let color = "#ff3b30";
  if (strength === "Medium") color = "#ff9500";
  if (strenght === "Strong") color = "34c759";

  let output = '<h2 style="color:${color}">${strength} (${score}/5)</h2>';

  if (suggestions.length > 0) {
    output += "<ul>";
    suggestions.forEach(s => {
      output += '<li>${s}</li>';
    });
    output += "</ul>";
} else {
    output += "<p>Excellent password</p>";
}

resultDiv.innerHTML = output;

resultDiv.classList.remove("show");
setTimeout(() => {
  resultDiv.classList.add("show");
}, 10);
}
  
    

