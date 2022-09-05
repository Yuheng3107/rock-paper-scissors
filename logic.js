function getComputerChoice() {
    let num = Math.floor(Math.random() * 9);
    if (num <= 3) {
        return "Rock";
    }
    if (num >= 6) {
        return "Paper";
    }
    else {
        return "Scissors";
    };
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    beats = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    if (playerSelection === beats[computerSelection]) {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
    }
    if (computerSelection === beats[playerSelection]) {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.substring(1)}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Your move: ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}