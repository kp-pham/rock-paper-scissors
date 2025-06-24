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

## Writing the Logic to Play a Single Round

## Writing the Logic to Play a Single Game