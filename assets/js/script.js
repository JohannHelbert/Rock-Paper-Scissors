/* This code was taken from Portfolio 2: Project Submission / Portfolio Project Scope Video https://shorturl.at/puM46*/

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/* This code was taken from Portfolio 2: Project Submission / Portfolio Project Scope Video https://shorturl.at/puM46*/

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/* This code was taken from Portfolio 2: Project Submission / Portfolio Project Scope Video https://shorturl.at/puM46*/

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

/* The Javascript code for the function "Score", "The winner" how to do this was used from the example from this link https://www.w3schools.com/graphics/game_score.asp */

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