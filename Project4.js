console.log("Welcome to the Game of Roller Coaster");

let prompt = require("prompt-sync")();

let height = Number(prompt("Enter the height of the person (in cm): "));


if (height >= 100) {
    let age = Number(prompt("Enter the age of the person (in years): "));
    if (age <= 12) {
        console.log("Can ride");
        console.log("Ticket Price will be Rs. 50");
    }
    else if (age > 12 && age < 18) {
        console.log("Can ride");
        console.log("Ticket Price will be Rs. 70");
    }
    else if (age >= 18 && age < 60) {
        console.log("Can ride");
        console.log("Ticket Price will be Rs. 100");
    }
    else {
        console.log("Your age is not suitable for riding. Not Eligible");
    }

} else {
    console.log("Your Height is not sufficient. Not Eligible");
}