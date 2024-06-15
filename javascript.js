
// Get computer's choice 
function getComputerChoice () {

    // Init computerChoice as random between range 1-3
    let computerChoice = Math.floor(Math.random() * 6 + 1);

    // convert int to computer's choice of move
    return getMove(computerChoice);
}

// convert integer to ropasci and returns computer move
function getMove (choice) {
    
    let move;
    // map int onto move
    if (choice <= 2) {
        move = "rock";
    } else if (choice > 2 && choice <= 4) {
        move = "paper";
    } else {
        move = "scissors";
    }

    return move;
} 

function getHumanChoice () {

    let humanChoice = prompt("Enter one of these values: 'rock', 'paper', 'scissors'", "rock");
    
    return humanChoice;
}

console.log(getComputerChoice());

console.log(getHumanChoice());
