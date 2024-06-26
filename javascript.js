const resultSection = document.querySelector(".results-section");
const TOTAL_ROUNDS = 5;
let rounds = 0;
let humanScore = 0;
let computerScore = 0;
let roundsDrawn = 0;


function playRound(selectedMove) {

    // store human and computer choice
    let humanChoice = selectedMove;
    let computerChoice = getComputerChoice();

    // declare an int variable where 
    // 0: no winner
    // 1: player win
    // 2: computer win
    let winner = getWinner(humanChoice, computerChoice);

    // update score if there is winner
    if (winner) {
        updateScore(winner);
    // record rounds with no winners 
    } else {
        roundsDrawn +=1;
        resultSection.textContent = "Same hands, it's a draw!";
    }
    rounds++;

    // announce the winner when game ends
    if (rounds == TOTAL_ROUNDS) {
        announceWinner();
    }
}

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
    // ensure humanChoice is case-insensitive
    return humanChoice.toLowerCase();
}

function getWinner(h_choice, c_choice) {

    // declare playerWin as an int variable
    let winner;

    // battle: if player win = 1; computer win = 2; no winner = 0
    switch (h_choice) {
        case "rock": 
            c_choice == "rock" ? winner = 0 :
            c_choice == "paper" ? winner = 2 :
            winner = 1;
            break;
        case "paper":
            c_choice == "rock" ? winner = 1 :
            c_choice == "paper" ? winner = 0 :
            winner = 2;
            break;
        case "scissors":
            c_choice == "rock" ? winner = 2 :
            c_choice == "paper" ? winner = 1 :
            winner = 0;
    }

    // return winner as an integer
    return winner
}

function updateScore(winner) {
    // if human won, increment score and inform player 
    if (winner === 1) {
        humanScore += 1;
        resultSection.textContent = "Congrats, you won!";
    // if computer won, increment score and inform player 
    } else {
        computerScore +=1;
        resultSection.textContent = "Better luck next round!";
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        resultSection.textContent = "End of game: Congratulations, you won!";
    } else if (humanScore === computerScore) {
        resultSection.textContent = "End of game: It'a tie!";
    } else {
        resultSection.textContent = `End of game: You lost by ${computerScore - humanScore} rounds, better luck next time!`;
    } 
}

const ropasciBtns = document.querySelectorAll("button");
ropasciBtns.forEach((btn) => {
    btn.addEventListener('click', () => playRound(btn.id))
}); 