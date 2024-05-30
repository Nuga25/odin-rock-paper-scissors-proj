
//function to get the computer choice
function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return options[computerChoice];
}


//function to get the human choice
function getHumanChoice(){
    userInput = prompt("Select Rock, Paper or Scissors");
    return userInput;
}

//function to play multiple rounds
function playGame(){
    //variables to keep track of  score
    let humanScore = 0;
    let computerScore = 0;
    
    //function to check for winner and play a single round
    function playRound(humanChoice, computerChoice){
        if(humanChoice.toLowerCase() === "rock"){
            if(computerChoice === "rock"){
                console.log("That's a tie!");
            }else if(computerChoice === "paper"){
                computerScore++;
                console.log("You lose! Paper covers rock!");
            }else{
                humanScore++;
                console.log("You win! Rock crushes scissors!");
            }
        }else if(humanChoice.toLowerCase() === "paper"){
            if(computerChoice === "rock"){
                humanScore++;
                console.log("You win! Paper covers rock!");
            }else if(computerChoice === "paper"){
                console.log("That's a tie!");
            }else{
                computerScore++;
                console.log("You lose! Scissors cuts paper!");
            }
        }else if(humanChoice.toLowerCase() === "scissors"){
            if(computerChoice === "rock"){
                computerScore++;
                console.log("You lose! Rock crushes scissors!");
            }else if(computerChoice === "paper"){
                humanScore++;
                console.log("You win! Scissors cuts paper!");
            }else{
                console.log("That's a tie!");
            }
        }else{
            console.log("Invalid input!");
        }
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log("human score: " + humanScore + ":" + "computer score: " + computerScore);

}

playGame();
