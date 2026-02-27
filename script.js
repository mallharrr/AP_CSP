let assignments = []

function calculateRisk(daysLeft, hoursNeeded, difficulty) {
  let risk = (hoursNeeded * difficulty) / daysLeft;
  let riskScore = risk * 10;
  return riskScore;
}

function addAssignment() {
  let name = document.getElementById("name").value;
  let days = parseInt9document.getElementById("days").value);
  let hours = parseInt(document.getElementById("hours").value);
  let difficulty = parseInt(document.getElementById("difficulty").value);

let riskSocre = calculateRisk(days, hours, difficulty);

let assignment = {
  name: name,
  days: days,
  hours: hours,
  difficulty: difficulty,
  riskScore: riskScore
};

assignments.psuh(assignemnt);

displayResult(riskScore);
findMostUrgent();
}

function displayResult(riskScore) {
  let message = "";
  if (riskScore < 20) {
    message = "On Track";
  } else if (riskScore < 50) {
    message - "Moderate Risk";
  } else if (riskScore < 80) {
    message = "High Risk";
  } else {
    message = "Critical - Start Immediately!";
  }

document.getElementById("result").innerText =
  "Risk Score: " + riskScore.toFixed(1) + " - " + message;
}

function findMostUrgent() {
  let highestRisk = 0;
  let mostUrgent = "";
  for (let i = 0; i < assignments.length; i++) {
    highestRisk = assignments[i].riskScore;
    mostUrgent = assingments[i].name;
  }
}

document.getElementById("mostUrgent").innerText =
  "Most Urgent Assignment: " + mostUrgent;
}
