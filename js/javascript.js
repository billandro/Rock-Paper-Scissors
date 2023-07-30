function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerPlay = Math.floor(Math.random() * choices.length);
    return choices[computerPlay];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won this round";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won this round";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won this round";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose this round";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose this round";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose this round";
    }
}

const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You won this round") {
        playerScore++;
        playerDiv.innerHTML = playerScore;
        roundOutput.innerHTML = result;
    } else if (result === "You lose this round") {
        computerScore++;
        cpuDiv.innerHTML = computerScore;
        roundOutput.innerHTML = result;
    } else {
        tieScore++;
        tieScore;
        roundOutput.innerHTML = result;
    }
    
    if (playerScore > computerScore && playerScore === 5) {
        roundOutput.innerHTML = `You won this game by ${playerScore} : ${computerScore}. CONGRATULATIONS!`;
    } else if (playerScore < computerScore && computerScore === 5) {
        roundOutput.innerHTML = "You lost this game. Better luck next time;)";
    };
    restartGame();
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const cpuScore = document.querySelector(".cpu-score");
const playersScore = document.querySelector(".player-score")

function main() {
    rock.addEventListener("click", function(){
        game("rock");
    })

    paper.addEventListener("click", function() {
        game("paper");
    })

    scissors.addEventListener("click", function() {
        game("scissors");
    })
}
main();

const cpuDiv = document.querySelector(".cpu");
const playerDiv = document.querySelector(".player");

cpuDiv.innerHTML = computerScore;
playerDiv.innerHTML = playerScore;

const roundOutput = document.querySelector(".round-output");
roundOutput.setAttribute("style", "font-size: 25px;");
function restartGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        cpuDiv.innerHTML = computerScore;
        playerDiv.innerHTML = playerScore;
    }
}

function newGame() {
    roundOutput.innerHTML = "You may now start a new game. I wish you all the best!";
}

