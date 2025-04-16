// html elemts
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// btns
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// initial values
let playerScore = 0;
let computerScore = 0;

// fxns:
// get an option of: Rock/Paper/Scissors
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];

    // ds will return value btw: 0 - 2 & not 3
    const randomIndex = Math.floor(Math.random() * options.length);

    // return an option
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    // conditions for player to win. d computer option must
    // be 2 step ahead of d player's option.
    const result =
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper");
}

function getRoundResults(userOption) {}

function showResults(userOption) {}

function resetGame() {}

// Event Listeners: with anonymous fxns
rockBtn.addEventListener("click", function () {});
paperBtn.addEventListener("click", function () {});
scissorsBtn.addEventListener("click", function () {});
