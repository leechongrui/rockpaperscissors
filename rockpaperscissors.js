const game = {
  win: 0,
  loss: 0,
};

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.333) {
      return'Rock';
    } else if (randomNum > 0.666) {
      return'Paper';
    } else {
      return'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = document.querySelector("playerchoice")
  playerchoice.textContent("Player chose " + playerSelection)
  const computerchoice = document.querySelector("computerchoice")
  computerchoice.textContent("Computer chose " + computerSelection)
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    const current = document.querySelector("current");
    current.textContent = "You Lose! Paper beats Rock";
    game.loss++;
    const computer = document.querySelector("computerscore");
    computer.textContent = "Computer: " + game.loss;
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    const current = document.querySelector("current");
    current.textContent = "You Win! Rock beats Scissors";
    game.win++;
    const player = document.querySelector("player");
    player.textContent = "Player: " + game.win;
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    const current = document.querySelector("current");
    current.textContent = "You Win! Paper beats Rock";
    game.win++;
    const player = document.querySelector("player");
    player.textContent = "Player: " + game.win;
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    const current = document.querySelector("current");
    current.textContent = "You Lose! Scissors beats Paper";
    game.loss++;
    const computer = document.querySelector("computerscore");
    computer.textContent = "Computer: " + game.loss;
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    const current = document.querySelector("current");
    current.textContent = "You Lose! Rock beats Scissors";
    game.loss++;
    const computer = document.querySelector("computerscore")
    computer.textContent = "Computer: " + game.loss;
}
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    const current = document.querySelector("current");
    current.textContent = "You Win! Scissors beats Paper";
    game.win++;
    const player = document.querySelector("player");
    player.textContent = "Player: " + game.win;
  }
  else{
    const current = document.querySelector("current");
    current.textContent = "Draw! Luck if not on your side!";
  }
}

const computerSelection = getComputerChoice();

function getPlayerChoice(selection){
  const playerSelection = selection;
}

function playGame() {
  while (game.win < 5 && game.loss < 5){
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);}
  }

function getScore() {
  if (game.win === 5){
    const current = document.querySelector("current");
    current.textContent("Yay!! You beat the computer in a game of 5!");
  }
  else{
    const current = document.querySelector("current");
    current.textContent("Noo!! The computer beat you in a game of 5!");
  }
}

const rock = document.querySelector('Rock')
rock.addEventListener("click", () => { getPlayerChoice('Rock')});
const paper = document.querySelector('Paper')
paper.addEventListener("click", () => { getPlayerChoice('Paper')});
const scissors = document.querySelector('Scissors')
scissors.addEventListener("click", () => { getPlayerChoice('Scissors')});

playGame();
getScore();