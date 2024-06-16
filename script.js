let displayComputerChoice = document.querySelector("#computer-choice");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let winnerHuman = document.querySelector("#winner-human");
let winnerComputer = document.querySelector("#winner-computer");

//function to get the computer choice
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    displayComputerChoice.textContent = `Computer choice:  ${options[computerChoice]}`;
    return options[computerChoice];
}


//function to get the human choice
function getHumanChoice(e){
    let userInput = e.target.getAttribute("data-value");
}

//function to check for winner
function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            result.textContent = "That's a tie!";
        }else if(computerChoice === "paper"){
            computerScore++;
            result.textContent = "You lose! Paper covers rock!";
        }else{
            humanScore++;
            result.textContent = "You win! Rock crushes scissors!";
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
            result.textContent = "You win! Paper covers rock!";
        }else if(computerChoice === "paper"){
            result.textContent = "That's a tie!";
        }else{
            computerScore++;
            result.textContent = "You lose! Scissors cuts paper!";
        }
    }else{
        if(computerChoice === "rock"){
            computerScore++;
            result.textContent = "You lose! Rock crushes scissors!";
        }else if(computerChoice === "paper"){
            humanScore++;
            result.textContent = "You win! Scissors cuts paper!";
        }else{
            result.textContent = "That's a tie!";
        }
    }
}

//variables to keep track of  score
let humanScore = 0;
let computerScore = 0;
let maxWin = 6;

//function to play rounds
function playGame(e){
    playRound(getHumanChoice(e), getComputerChoice());

    score.textContent = `human score:  ${humanScore} | computer score:  ${computerScore}`;
    if(humanScore === maxWin - 1){
        humanScore = 0;
        computerScore = 0;
        buttons.forEach(button => {
            button.removeEventListener("click", playGame);
        });
        winnerHuman.textContent = "Game Over. You Win!!!"
    }
    if(computerScore === maxWin - 1){
        humanScore = 0;
        computerScore = 0;
        buttons.forEach(button => {
            button.removeEventListener("click", playGame);
        });
        winnerComputer.textContent = "Game Over. Computer Wins!"
    }
}

//play again after a player wins five rounds
const playAgainButton = document.querySelector(".play-again");
playAgainButton.addEventListener("click", () => {
    result.textContent = "Choose Your weapon";
    score.textContent = "";
    displayComputerChoice.textContent = "";
    winnerComputer.textContent = "";
    winnerHuman.textContent = "";
    buttons.forEach(button => {
        button.addEventListener("click", playGame);
    });
});

//play a round on button click
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", playGame);
});