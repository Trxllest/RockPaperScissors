// getComputer Choice

function getComputerChoice() {

    // Create a varaible that will store the computers choice
    let choice;
    // randomly select 'rock', 'paper', 'scissors' and store that choice
    const options = ['Rock',
    'Paper',
    'Scissors'];

    // generates a number between 1 and 3
    let index = Math.floor(Math.random() * 3);
    choice = options.at(index);
    // console.log(typeof(choice));
    // return computers choice
    return choice;
}

console.log(getComputerChoice());