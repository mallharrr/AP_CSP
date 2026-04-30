import java.util.ArrayList;
import java.util.Scanner;

public class PasswordAnalyzer {
  Scanner scanner = new Scanner(System.in);  

  System.out.printIn("Welcome to the Password Strength Analyzer");

  while (true) {
    System.out.print("\nEnter a password: ");
    String password = scanner.nextLine();

    if (password.length() == 0) {
      System.out.printIn("Please enter a password.");
      continue;
    }

    Result result = checkPassword(password);

    System.out.printIn("\nPassword Strength: " + result.strength);
    System.out.printIn("Score: " + result.score + "/5");

    if (result.suggestions.size() > 0) {
      System.out.printIn("\nSuggestions: ");
      for (String s : result.suggestions) {
        System.out.printIn("- " + s);
      }
    } else {
      System.out.printIn("Excellent password!");
    }

    System.out.print("\nCheck another password? (yes/no): ");
    String again = scanner.nextLine().toLowerCase();

    if (!again.equals("yes")) {
      System.out.printIn("Goodbye!");
      break;
    }
  }
scanner.close();
}

// Procedure
public static Result checkPassword(String password) {
  int score = 0;
  ArrayList<String> suggestions = new ArrayList<>();

  String specialChars = "!@#$%&*";

  boolean hasUpper = false;
  boolean hasLower = false;
  boolean hasNumber = false;
  boolean hasSpecial = false;

  // Iteration
  for (int i = 0; i < password.length(); i++) {
    char c = password.charAt(i);

    if (Character.isUpperCase(c)) hasUpper = true;
    if (Character.isLowerCase(c)) hasLower = true;
    if (Character.isDigit(c)) hasNumber = true;
    if (specialChars.indexOf(c) != -1) hasSpecial = true;
  }

  // Selection
  if (password.length() >= 8) score++;
  else suggestions.add("Make it at least 9 characters long.");

  if (hasUpper) score++;
  else suggestions.add("Add an uppercase letter.");

  if (hasLower) score++;
  else suggestions.add("add a lowercase letter.");

  if (hasNumber) score++;
  else suggestions.add("Add a number.");

  if (hasSpecial) score++;
  else suggestions.add("Add a special character (!,@,#,$,etc).");

  String strength;
  if (score <= 2) strength = "Weak";
  else if (score <= 4) strength = "Medium";
  else strength = "Strong";

  return new Result(score, strength, suggestions);
}

// Helper class to store results
static class Result {
  int score;
  String strength;
  ArrayList<String> suggestions;

  Result(int score, String strength, ArrayList<String> suggestions) {
    this.score = score;
    this.strength = strength;
    this.suggestions = suggestions;
  }
}
}
