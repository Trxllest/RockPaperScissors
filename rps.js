//Global Constant 
let options = ['Rock',
'Paper',
'Scissors'];

// getComputer Choice
function getComputerChoice() {

    // Create a varaible that will store the computers choice
    let choice;

    // randomly select 'rock', 'paper', 'scissors' and store that choice
    let index = Math.floor(Math.random() * 3); // generates a number between 1 and 3
    choice = options[index];
    
    // return computers choice
    return choice;
}

// console.log(getComputerChoice());

function playRound(e) {
    // convert both player and cpu selection to lowercase
    let lowerCasePlayerChoice = e.target.textContent.toLowerCase();
    let lowerCaseComputerChoice = getComputerChoice().toLowerCase();
    const results = document.getElementById('results');
    
    // Compare selections
    
    // player selects Rock
    if (lowerCasePlayerChoice === options[0].toLowerCase()) {
        if (lowerCaseComputerChoice === options[1].toLowerCase()) {
            // console.log('You Lose! Paper beats Rock');
            results.textContent = 'You Lose! Paper beats Rock';
            return 1;
        } else if (lowerCaseComputerChoice === options[2].toLowerCase()) {
            // console.log('You Win! Rock beats Scissors');
            results.textContent = 'You Win! Rock beats Scissors'
            return 2;
        } else {
            // console.log('It\'s a Draw! We both chose Rock');
            results.textContent = 'It\'s a Draw! We both chose Rock'
            return 0;
        }
    }

    // player selects Paper
    if (lowerCasePlayerChoice === options[1].toLowerCase()) {
        if (lowerCaseComputerChoice === options[2].toLowerCase()) {
            results.textContent = 'You Lose! Scissors beats Paper';
            return 1;
        } else if (lowerCaseComputerChoice === options[0].toLowerCase()) {
            results.textContent = 'You Win! Paper beats Rock';
            return 2;
        } else {
            results.textContent = 'It\'s a Draw! We both chose Paper';
            return 0;
        }
    }

    // Player selects scissors
    if (lowerCasePlayerChoice === options[2].toLowerCase()) {
        if (lowerCaseComputerChoice === options[0].toLowerCase()) {
            results.textContent = 'You Lose! Rock beats Scissors';
            return 1;
        } else if (lowerCaseComputerChoice === options[1].toLowerCase()) {
            results.textContent = 'You Win! Scissors beats Paper';
            return 2;
        } else {
            results.textContent = 'It\'s a Draw! We both chose Scissors';
            return 0;
        }
    }

} 

// Test playRound
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// -----------------------------------------------------------

// game function
function playGame() {
    // varaible for player and computer score
    let playerScore = 0;
    let computerScore = 0;

    // variable for max rounds and current round
    const maxRounds = 5;
    let currentRound = 1;

    // loop until curr round > max rounds and update scores
    while(currentRound <= maxRounds) {

        // player choice
        let playerChoice = prompt('Rock, Paper or Scissors?');
        console.log('choice at line 94 ' + playerChoice);
        playerChoice = playerChoice.toLowerCase();
        console.log('choice at line 96 ' + playerChoice);

        // handle invalid choice
        while (playerChoice !== 'rock' && playerChoice !== 'paper' && 
            playerChoice !== 'scissors') {
            console.log('choice at line 100 ' + playerChoice);
            playerChoice = prompt('Try again').toLowerCase();
            console.log('choice at line 102 ' + playerChoice);
        }

        // cpu choice
        let computerChoice = getComputerChoice();

        // Play the round
        let roundResult = playRound(playerChoice, computerChoice);

        // Update Scores
        if (roundResult === 1) {
            computerScore += 1;
            console.log(`Player wins round ${currentRound}!`);
        } else if (roundResult === 2) {
            playerScore += 1;
            console.log(`Computer wins round ${currentRound}!`);
        } else {
            playerScore += 1;
            computerScore += 1;
            console.log(`Nobody wins round ${currentRound} it was a draw!`);
        }

        // Update Round
        currentRound += 1;
    }

    // return winner
    if (playerScore > computerScore) {
        console.log('Player Wins!');
    } else if (playerScore < computerScore) {
        console.log('Computer Wins!');
    } else {
        console.log('Sorry it was a draw!');
    }
    
}

const rock = document.getElementById('rockButton');
const paper = document.getElementById('paperButton');
const scissors = document.getElementById('scissorsButton');

rock.addEventListener('click', function(e) {playRound(e)});
paper.addEventListener('click', function(e) {playRound(e)});
scissors.addEventListener('click', function(e) {playRound(e)});

