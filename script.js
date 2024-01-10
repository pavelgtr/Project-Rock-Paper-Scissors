function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const getRandomChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[getRandomChoice];
  return computerChoice;
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Account for TIES by re-playing the round.

function playRound(playerSelection, computerSelection) {
  playerSelection = String(playerSelection).toLowerCase();
  const choices = ["rock", "paper", "scissors"];
  computerSelection = getComputerChoice();

  if (!choices.includes(playerSelection)) {
    console.error("Please select rock, paper, or scissors.");
    return "Invalid choice";
  }

  if (playerSelection == computerSelection) {
    console.log("It's a tie! Let's play again.");
    playRound(playerSelection);
  } else {
    console.log(
      `Player selection: ${playerSelection} \n Computer selection: ${computerSelection}`
    );
    return `Player selection: ${playerSelection} \n Computer selection: ${computerSelection}`;
  }
}




//   if (typeof playerSelection != "string") {
//     console.log(Error("please enter string value"));
//     return Error();
//   }
