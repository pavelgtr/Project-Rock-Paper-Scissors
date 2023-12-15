function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return playRound(playerSelection, getComputerChoice()); // Replay the round in case of a tie
    }

    const winningCombinations = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (winningCombinations[playerSelection] === computerSelection) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.startsWith("You Win")) {
            playerWins++;
        } else if (result.startsWith("You Lose")) {
            computerWins++;
        }

        console.log(`Score: Player ${playerWins} - Computer ${computerWins}`);
    }

    if (playerWins > computerWins) {
        console.log("You won the game!");
    } else if (playerWins < computerWins) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Uncomment below line to play the game.
// game();
