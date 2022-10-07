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
        computerScore++;
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
    }
    if (computerSelection === beats[playerSelection]) {
        playerScore++;
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.substring(1)}`;
    }
}

// Set Scores
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
    let outcome = playRound(e.target.textContent, getComputerChoice());
    const div = document.createElement('div');
    div.textContent = outcome;
    const output = document.querySelector('#output');
    output.appendChild(div);

    const scores = document.querySelector('#scores');
    scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    

    if (playerScore === 5) alert("You Win!");
    if (computerScore === 5) alert("You Lose!");
    

}));

