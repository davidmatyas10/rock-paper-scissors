var humanScore = 0;
var computerScore = 0;
var maxPoints = 5;

// Function to get a random choice for the computer
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

// getting human choice from prompt and making it case-insensitive
// if the input is not valid, it will prompt the user again until a valid choice is made
function getHumanChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const input = document.querySelector('data-choice').value;
    if (!input) {
        alert("Please enter a choice.");
        return getHumanChoice();
    }
    const humanChoice = choices.find(choice => choice === input);
    if (!humanChoice) {
        alert("Invalid choice. Please try again.");
        return getHumanChoice();
    }
    return humanChoice;
}

// Function to play a round of the game
function playRound(humanChoice, computerChoice){
    
    // Check if the battle is a draw, win, or loss
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

const div = document.createElement("div")
div.className = "result"


document.querySelectorAll('button[data-choice]').forEach(button => {
    button.addEventListener('click', function() {
        const humanChoice = this.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (humanScore >= maxPoints || computerScore >= maxPoints) {
            const finalResult = humanScore > computerScore ? "You win the game!" : "Computer wins the game!";
            div.innerHTML = `
                <h2>Final Score: You ${humanScore} - ${computerScore} Computer</h2>
                <p>${finalResult}</p>
                <button onclick="window.location.reload();">Play Again</button>
            `;
            return;
        }

        div.innerHTML = `
            <h2>Score: You ${humanScore} - ${computerScore} Computer</h2>
            <p>${result}</p>
        `;
    });
});

document.body.appendChild(div);