# rock-paper-scissors

This project simulates the game Rock, Paper, and Scissors which is played in the console window of the Chrome DevTools between the human and the computer. There are five consecutive rounds in which the player and computer choose between playing rock, paper, or scissors and the winner of the round earns points which are added to their total score. The player with the most amount of points at the end of the game is declared the winner.

This project also introduces the basics of programming through JavaScript which is the programming language used to implement interactive features for websites. The project emphasizes programming as an approach to problem solving and a development approach that incorporates writing pseudocode, testing and refactoring, and use of version control. The sections below follow the step-by-step process of developement from pseudocode to source code.

## Writing the Logic to Get the Computer Choice

The simulation of the game between the human and the computer requires the implementation of the game logic for the computer to decide between playing rock, paper, or scissors. The random generation of numbers between 0 and 2 inclusive corresponds to the possible choices for the computer.

The function ```getComputerChoice``` implements the game logic for the computer through randomly returning a string representing the choice of the computer.

- When the randomly generated value is 0, the function returns ```"rock"``` to represent the computer playing **rock** against the player.

- When the randomly generated value is 1, the function returns ```"paper"``` to represent the computer playing **paper** against the player.

- When the randomly generated value is 2, the function returns ```"scissors"``` to represent the compluter playing **scissors** against the player.

### Psuedocode
```
SEQUENCE 
DETERMINE computer choice between "rock", "paper", and "scissors"

Generate random value between 0 and 2 (inclusive)

IF value is zero THEN
    RETURN "rock"
ELSE IF value is one THEN
    RETURN "paper"
ELSE
    RETURN "scissors"
ENDIF
```

### Source Code
```
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0)
        return "rock";

    else if (choice === 1)
        return "paper";

    else 
        return "scissors";
}
```

## Writing the Logic to Get the Human Choice

The simulation of the game between the human and the computer requires the human to interact with the computer. The human chooses between playing rock, paper, or scissors, and the selection of the human is passed to the program as user input. 

The function ```getHumanChoice``` creates the interface for the human to interact with the computer through an external window. The user input is assumed to be valid and there is no requirement to reprompt the user for invalid input.

- The ```prompt``` method of the Window class instructs the browser to display an external window with a display message.

- The external window contains a text box for the human to type in their selection which is stored in the program as a string.

- The return value from the ```prompt``` method is passed to the return expression of the function to be returned.

### Pseudocode

```
SEQUENCE
READ human choice from prompt window

CALL prompt RETURNING human choice
RETURN human choice
```

### Source Code
```
function getHumanChoice() {
    return prompt("rock, paper, or scissors?");
}
```
## Declare Player Score Variables

The scores of the human and the computer are stored as ```playerScore``` and ```computerScore``` which are global variables defined at the top of the program.

-  Global variables are in scope throughout the entire program for the scores of the human and computer to be accessible for all functions.

- The variables are not declared as constants because the scores of the human and computer are incremented when the human or the computer wins a round.

```
let playerScore = computerScore = 0
```

## Writing the Logic to Play a Single Round

The simulation of the game between the human and the computer requires of the implementation of the game logic for a single round. Based on the choice of the human and the computer of the round, the winner of round earns a point.

The function ```playRound``` compares the choice of the human and the computer to determine the winner and increment the score of the winner.

-   The human wins when the human plays **rock** and the computer plays **scissors**.

- The human wins when the human plays **paper** when the computer plays **rock**.

- The human wins when the human plays **scissors** when the computer plays **paper**.

- The scenarios where the human loses against the computer is the **opposite** of the scenarios where the human wins against the computer.

- The use of the string methods ```charAt```, ```toUpperCase```, and ```slice``` to capitalize a string is repeatable pattern which can be implemented as a helper function.

### Pseudocode (Iteration 1)
```
SEQUENCE
GET humanChoice and computerChoice
PRINT message representing round winner
INCREMENT humanScore or computerScore based on round winner

IF human plays rock AND computer plays scissors OR
   human plays paper AND computer plays rock OR
   human plays scissors AND computers plays paper THEN

        Add 1 to humanScore
        Print "You win! {humanChoice} beats {computerChoice}."
ELSE

    Add 1 to computerScore
    Print "You lose! {computerChoice} beats {humanChoice}."
```

### Source Code (Iteration 1)
```
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    }
    else {
         ++computerScore;
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
}
```

The previous implementation of the function ```playRound``` did not account for the scenario in which the human and computer had the same selection because the computer is declared the winner when the choice of the human and the computer match. Instead, there should no winner and neither the score of the human and computer should be incremented.

### Pseudocode (Iteration 2)
```
SEQUENCE
GET humanChoice and computerChoice
PRINT message representing round winner
INCREMENT humanScore or computerScore based on round winner

IF human plays rock AND computer plays scissors OR
   human plays paper AND computer plays rock OR
   human plays scissors AND computers plays paper THEN

        Add 1 to humanScore
        Print "You win! {humanChoice} beats {computerChoice}."

ELSE IF human plays rock AND computer plays paper OR
        human plays paper AND computer plays scissors OR
        human plays scissors AND computer plays rock THEN

        Add 1 to computerScore
        Print "You lose! {computerChoice} beats {humanChoice}."

ELSE

    Print "Tie! Both of us picked {humanChoice}."
```

### Source Code (Iteration 2)
```
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
```

## Writing the Logic to Play a Single Game

The simulation of the game between the human and computer requires the implementation of the game logic for the human to play the number of consecutive rounds specified against the computer. The most common design pattern for games with a consecutive number of rounds is the game loop.

The function ```playGame``` implements the game loop for the player to play against for five consecutive rounds and declares the player with the highest score the winner at the end of the game.

- The number of consecutive rounds in the game is declared as a global constant ```GAME_LENGTH``` because the number of consecutive rounds should not be changed during program and encapsulates the meaning of the number instead of a magic value.

- The scenario in which the human and the computer have the **same** score should be accounted for in addition to the scenarios in which the human has a higher score than the computer and the human has a lower score than the computer.


### Pseudocode
```
SEQUENCE
PRINT message declaring game winner

For i = 0 to 4
    CALL getHumanChoice RETURNING humanSelection
    CALL getComputerChoice RETURNING computerSelection
    CALL playRound with humanSelection and computerSelection

IF humanScore greater than computerScore THEN
    PRINT "Congratulations! You beat me!"

ELSE IF humanScore less than computerScore THEN
    PRINT "Better luck next time! I beat you!"

ELSE
    PRINT "We tied! One more round to see who's the better of us?"
```

### Source Code
```
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
```