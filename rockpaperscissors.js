function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch(randomNum) {
      case 1:
          return "Rock";
          break;
      case 2:
          return "Paper";
          break;
      case 3:
          return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
      results.innerText = "It's a tie! You both chose " + playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length);
      return 0.5;
  } else if (playerSelection === "rock" && computerSelection === "scissors"
  || playerSelection === "paper" && computerSelection === "rock"
  || playerSelection === "scissors" && computerSelection === "paper") {
      results.innerText = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)}`;
      return 1;
  } else {
      results.innerText = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)}`; 
      return 0;
  }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
let playerPoint = 0;
let comPoint = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
      if (playerPoint === 5 || comPoint === 5) {
          playerPoint = 0;
          comPoint = 0;
      }

      let point = playRound(button.value, getComputerChoice());
      if (point === 1) playerPoint++;
      if (point === 0) comPoint++;
      results.innerText += `\nPlayer: ${playerPoint} | Computer: ${comPoint}`;

      if (playerPoint === 5 || comPoint === 5) results.innerText += `\n${playerPoint === 5 ? "Player" : "Computer"} wins!`;

  })
});