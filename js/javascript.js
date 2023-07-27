function getComputerChoice() {
    let computerPlay = Math.random();
    if (computerPlay > 0 && computerPlay < 0.33) {
        return "rock";
    } else if (computerPlay > 0.33 && computerPlay < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie, you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You won! Rock beats Scissors`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You won! Scissors beats Paper`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You won! Paper beats Rock`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! Paper beats Rock`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! Rock beats Scissors`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! Scissors beats Paper`;
    } else {
        return "Please input either 'rock', 'paper', or 'Scissors'";
    }
}

const playerSelection = prompt("To start the game enter either Rock, Paper, or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result === "You won! Rock beats Scissors" || 
            result === "You won! Scissors beats Paper" ||
            result === "You won! Paper beats Rock") {
                playerScore++;
                console.log(result);
        } else if (result === `It's a tie, you both picked ${playerSelection}`) {
            tieScore++;
            console.log(result);
        } else {
            computerScore++;
            console.log(result);
        }
    }
    if (playerScore > computerScore) {
        return "You won, congratulations!";
    } else if (playerScore === computerScore) {
        return "This game ended in a tie!";
    } else {
        return "You lost, better luck next time.";
    }
}
console.log(game());
    

