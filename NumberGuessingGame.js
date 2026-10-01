const prompt= require('prompt-sync')();
let totalScore=0;
let roundsWon = 0;
let playAgain = "Y";
let userName = prompt("Enter your name: ");

console.log("\n======================================================");
console.log(` Welcome ${userName} to the Number Guessing Game!`);
console.log(" Number Guessing Game ")
console.log("======================================================");

while(playAgain === "Y" || playAgain === "y"){
    let randomNumber = Math.floor(Math.random()*100) +1;
    let maxAttempts = 10;
    let attempts = 0;
    let guessedCorrectly = false;
    console.log("\nHello " + userName + "!");
    console.log("I have selected a random number between 1 and 100.");
    console.log("You have " + maxAttempts + " attempts to guess it.");

    while(attempts< maxAttempts){
        let guess = Number(prompt("\nEnter your guess (1-100): "))
        if(guess < 1 || guess > 100){
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }
        attempts++;

        if(guess === randomNumber){
            console.log("\nCongratulations! "+ userName+ "! You guessed the correct number.");
            guessedCorrectly = true;

            let score = (maxAttempts - attempts + 1) * 10;
            totalScore += score;
            roundsWon++;
            console.log("Attempts Used: " + attempts);
            console.log("Score This Round: " + score);
            break;
        }
        else if(guess < randomNumber){
            console.log("Too Low! Greater Number.")
        }
        else{
            console.log("Too High! Smaller Number.")
        }

        console.log("Attempts Left: " + (maxAttempts - attempts));
    }
    if(!guessedCorrectly){
            console.log("\nGame Over!")
            console.log("Sorry "+userName+ "!");
            console.log("The Correct Number was: " + randomNumber);
        }
        console.log("\n=======================================================");
        console.log("Player Name : "+userName)
        console.log("Rounds Won : "+roundsWon);
        console.log("Total Score : "+totalScore);
        console.log("=======================================================");
        playAgain = prompt("\nDo you want to play again? (Y/N): ");
}
    
console.log("\n========================================================");
console.log("Thank you for playing the Number Guessing Game, " + userName + "!");
console.log("Total Rounds Won: " + roundsWon);
console.log("Total Score: " + totalScore);
console.log("Goodbye!");
console.log("=========================================================");
