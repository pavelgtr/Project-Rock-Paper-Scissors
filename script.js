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
    return "You Win";
  } else {
    return "You Lose";
  }
}

let userScore = 0;
let computerScore = 0;

function game() {
  let userInput = prompt("paper, rock, or scissors:");
  let result = playRound(userInput);

  if (result === "Invalid choice") {
    alert("invalid input");
    return;
  } else if (result === "You Win") {
    userScore += 1;
    if (userScore === 3) {
      alert("You Win the Game!");
      return;
    } else {
      alert(
        `You won this round \nyou: ${userScore} \ncomputer: ${computerScore} \nlet's play again!`
      );
    }
  } else if (result === "You Lose") {
    computerScore += 1;
    if (computerScore === 3) {
      alert("You've lost the game!");
      return;
    } else {
      alert(
        `You lost this round \nyou: ${userScore} \ncomputer: ${computerScore} \nlet's play again!`
      );
    }
  } else {
    alert("It's a tie! Let's try again!");
  }
}

while (userScore + computerScore < 5) {
  game();
}
