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

// getHumanChoice function removed as it's not used in the code

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
            // Disable all choice buttons
            document.querySelectorAll('button[data-choice]').forEach(btn => btn.disabled = true);
            return;
        }

        div.innerHTML = `
            <h2>Score: You ${humanScore} - ${computerScore} Computer</h2>
            <p>${result}</p>
        `;
    });
});

            div.innerHTML = `
                <h2>Final Score: You ${humanScore} - ${computerScore} Computer</h2>
                <p>${finalResult}</p>
            `;
            const playAgainBtn = document.createElement('button');
            playAgainBtn.textContent = 'Play Again';
            playAgainBtn.addEventListener('click', function() {
                window.location.reload();
            });
            div.appendChild(playAgainBtn);
            return;
