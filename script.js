var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    if (randomIndex === 0){
        return choices[0]
    }
    else if (randomIndex === 1){
        return choices[1]
    }
    else {
        return choices[2]
    }
}

function getHumanChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const input = prompt("Enter your choice (rock, paper, scissors):");
    const choice = input ? input.trim().toLowerCase() : "";
    if (choices.includes(choice)){
        return choice;
    } else {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}

function playGame(){
    function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "The battle is a draw!"
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            return 'You win! ' + humanChoice + ' beats ' + computerChoice + '.'
        }
    else {
        computerScore++;
        return 'You lose! ' + computerChoice + ' beats ' + humanChoice + '.'
    }
}

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

playGame();

console.log("Final Score: You " + humanScore + " - " + computerScore + " Computer");
if (humanScore > computerScore){
    console.log("Congratulations! You win the game!");
}
else if (humanScore < computerScore){
    console.log("Sorry, you lose the game. Better luck next time!");
} else {
    console.log("It's a tie! Well played!");
}