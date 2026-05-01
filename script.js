function checkPassword() {

let password =
document.getElementById("passwordInput").value;

let resultDiv =
document.getElementById("result");

let fill =
document.getElementById("strengthFill");

let score = 0;

let suggestions = [];

let specialChars = "!@#$%&*";

let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let hasSpecial = false;

for (let i = 0; i < password.length; i++) {

let c = password[i];

if (c >= 'A' && c <= 'Z') {
hasUpper = true;
}

else if (c >= 'a' && c <= 'z') {
hasLower = true;
}

else if (c >= '0' && c <= '9') {
hasNumber = true;
}

else if (specialChars.includes(c)) {
hasSpecial = true;
}
}

if (password.length >= 8) {
score++;
} else {
suggestions.push("At least 8 characters");
}

if (hasUpper) {
score++;
} else {
suggestions.push("Add uppercase letter");
}

if (hasLower) {
score++;
} else {
suggestions.push("Add lowercase letter");
}

if (hasNumber) {
score++;
} else {
suggestions.push("Add a number");
}

if (hasSpecial) {
score++;
} else {
suggestions.push("Add special character");
}

let strength = "Weak";

if (score >= 3) {
strength = "Medium";
}

if (score === 5) {
strength = "Strong";
}

let color = "red";

if (strength === "Medium") {
color = "orange";
}

if (strength === "Strong") {
color = "green";
}

fill.style.width = (score * 20) + "%";

fill.style.background = color;

let output =
"<h2 style='color:" + color + "'>"
+ strength
+ " (" + score + "/5)"
+ "</h2>";

if (suggestions.length > 0) {

output += "<ul>";

for (let i = 0; i < suggestions.length; i++) {

output += "<li>"
+ suggestions[i]
+ "</li>";
}

output += "</ul>";
}

else {

output += "<p>Excellent password!</p>";
}

resultDiv.innerHTML = output;
}
