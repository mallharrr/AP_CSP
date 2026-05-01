function checkPassword() {

let password =
document.getElementById("passwordInput").value;

let resultDiv =
document.getElementById("result");

let fill =
document.getElementById("strengthFill");

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
