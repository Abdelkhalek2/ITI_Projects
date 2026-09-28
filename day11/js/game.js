//task 1
var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "Paper";
if (PlayerOneChoice === PlayerTwoChoice) {
    console.log("It's a tie!");
} else if ((PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") ||
        (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors")){
    console.log("Player One wins");
} else {
    console.log("Player Two wins");
}