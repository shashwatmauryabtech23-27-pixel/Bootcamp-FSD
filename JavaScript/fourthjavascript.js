console.log("===============================================");
console.log("Welcome to Roller Coaster Ride...");
console.log("===============================================");

let prompt = require("prompt-sync")();
let height = Number(prompt("Enter the height of the person (in cm): "));
let age = Number(prompt("Enter the age of the person (in years): "));

if (height >= 100) {
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
        console.log("Not Eligible");
    }

} else {
    console.log("Not Eligible");
}