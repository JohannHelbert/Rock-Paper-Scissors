const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() *3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

    checkWinner(computerChoice, playerChoice); 
}

function checkWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
      return "draw";
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "rock")
    ) {
      return "computer";
    } else {
      return "player";
    }
  }

  function updateScores(result) {
    if (result === "player") {
      playerScore.innerText = parseInt(playerScore.innerText) + 1;
      messages.innerText = "You won!";
    } else if (result === "computer") {
      computerScore.innerText = parseInt(computerScore.innerText) + 1;
      messages.innerText = "Computer won!";
    } else {
      messages.innerText = "It's a draw!";
    }
  }