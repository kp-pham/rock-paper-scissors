const WINNING_SCORE = 5;
let humanScore = computerScore = 0;

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const announcementsDisplay = document.querySelector("#announcements");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0)
        return "rock";

    else if (choice === 1)
        return "paper";

    else 
        return "scissors";
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScoreDisplay.textContent = `Your Score: ${++humanScore}`;
        announcementsDisplay.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
             humanChoice === "paper" && computerChoice === "scissors" ||
             humanChoice === "scissors" && computerChoice === "rock") {
        computerScoreDisplay.textContent = `Computer's Score: ${++computerScore}`;
        announcementsDisplay.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
    }
    else {
        announcementsDisplay.textContent = `Tie! Both of us picked ${capitalize(humanChoice)}.`;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

function checkWinner() {
    return humanScore == WINNING_SCORE || computerScore == WINNING_SCORE;
}

const endGame = new CustomEvent("endGame");
const buttons = document.querySelector(".human-choices");


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    if (checkWinner()) buttons.dispatchEvent(endGame);
});

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    if (checkWinner()) buttons.dispatchEvent(endGame);
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    if (checkWinner()) buttons.dispatchEvent(endGame);
});

buttons.addEventListener("endGame", () => {
    buttons.removeChild(rockButton);
    buttons.removeChild(paperButton);
    buttons.removeChild(scissorsButton);
    buttons.parentNode.removeChild(buttons);

    const winnerDeclaration = document.createElement("h1");
    if (humanScore == WINNER_SCORE)
        winnerDeclaration.textContent = "Congratulations! You beat me!";
    else 
        winnerDeclaration.textContent = "Better luck next time! I beat you!";
});