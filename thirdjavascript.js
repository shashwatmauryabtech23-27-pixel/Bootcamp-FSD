console.log("Welcome to the Tip Calculator...");
let promptse = require("prompt-sync")();
let totalBill =Number(promptse("What was the total bill? Rs."));
let tipPercentage = Number(promptse("What percentage tip would you like to give? 10 20 25 50 100 ? "));
let numberOfPeople = Number(promptse("How many people to split the bill? "));
console.log("Amount of tip that we wil give: Rs. " + (totalBill * tipPercentage / 100));
console.log("How many people to split the bill?: " + numberOfPeople);
console.log("Bill that Should be pay: Rs. " + (totalBill + (totalBill * tipPercentage / 100)));
console.log("Each person Should pay: Rs. " + ((totalBill + (totalBill * tipPercentage / 100)) / numberOfPeople));