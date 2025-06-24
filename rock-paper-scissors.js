const GAME_LENGTH = 5;
let humanScore = computerScore = 0;


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
        ++humanScore;
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
             humanChoice === "paper" && computerChoice === "scissors" ||
             humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    }
    else {
        console.log(`Tie! Both of us picked ${capitalize(humanChoice)}.`);
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}

function playGame() {
    for (let i = 0; i < GAME_LENGTH; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
        console.log("Congratulations! You beat me!");

    else if (humanScore < computerScore)
        console.log("Better luck next time! I beat you!");

    else
        console.log("We tied! One more round to see who's the better of us?");
}

playGame();