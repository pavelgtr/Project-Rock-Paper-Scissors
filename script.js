// computer selection
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const getRandomChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[getRandomChoice];
  return computerChoice;
}

//enter user selection & play game & return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
  // Convert to string and handle invalid inputs
  playerSelection = String(playerSelection).toLowerCase();
  const choices = ["rock", "paper", "scissors"];
  computerSelection = getComputerChoice();

  if (!choices.includes(playerSelection)) {
    return "Invalid choice";
  }

  // check for ties
  if (playerSelection == computerSelection) {
    playRound(playerSelection);
    return "It's a tie! Let's play again.";
  }

  if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`You Win!`);
    return "You Win";
  } else {
    console.log(`You Lose`);
    return "You Lose";
  }
}

let userScore = 0;
let computerScore = 0;

function game() {
 let userInput = prompt("Enter your choice (rock, paper, or scissors):");
  let result = playRound(userInput);

  if (userScore == 3 || computerScore == 3) {
    console.log('game over');
    return 
  }
  if (result == "You Win") {
    userScore = userScore + 1;
    alert("You Win")
  } else {
    computerScore = computerScore + 1; 
    alert("Lose")
  }
  alert(`userScore: ${userScore}, computerScore: ${computerScore} `);
}

game()
game("rock");
game('rock');
game('rock');
game('rock');

