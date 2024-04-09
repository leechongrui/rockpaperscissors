const game = {
  win: 0,
  loss: 0,
};

function getComputerChoice() {
    var randomNum = Math.random();
    if (randomNum < 0.333) {
      return'Rock';
    } else if (randomNum > 0.666) {
      return'Paper';
    } else {
      return'Scissors';
    }
}

function getPlayerChoice() {
let playerChoice = prompt("Choose either Rock, Paper or Scissors!", "Rock")
if (playerChoice.toLowerCase() == "rock" ) {
  return "Rock";
}
else if (playerChoice.toLowerCase() == "paper" ) {
  return "Paper";
}
else if (playerChoice.toLowerCase() == "scissors" ) {
  return "Scissors";
}
else {return playerChoice}
}

function playRound(playerSelection, computerSelection) {
  console.log("Player chose " + playerSelection)
  console.log("Computer chose " + computerSelection)
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock");
    game.loss++;
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You Win! Rock beats Scissors");
    game.win++;
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You Win! Paper beats Rock");
    game.win++;
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("You Lose! Scissors beats Paper");
    game.loss++;
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissors");
    game.loss++;
}
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You Win! Scissors beats Paper");
    game.win++;
  }
  else{
    console.log("Draw! Luck if not on your side!")
  }
}

function playGame() {
  for (i=0; i<5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)}
  }

function getscore() {
  if (game.win > game.loss){
    console.log("Yay!! You beat the computer in a game of 5!")
  }
  if (game.win < game.loss){
    console.log("Noo!! The computer beat you in a game of 5!")
  }
  else {console.log("You tied with the computer! Better luck next time...")}
}

playGame()
getscore()