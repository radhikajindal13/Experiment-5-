function compareNumbers() {
    // Prompt the user to enter two integers
    var num1 = parseInt(prompt("Enter the first integer:"));
    var num2 = parseInt(prompt("Enter the second integer:"));

    var message;

    // Compare the numbers and set message accordingly
    if (num1 > num2) {
        message = num1 + " is greater than " + num2;
    } else if (num2 > num1) {
        message = num2 + " is greater than " + num1;
    } else {
        message = "The two numbers are equal";
    }

    // Display the message in an alert window
    alert(message);
  }

