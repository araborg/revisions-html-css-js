// html elemts
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

console.log(
    playerScoreSpanElement,
    computerScoreSpanElement,
    roundResultsMsg,
    winnerMsgElement,
    optionsContainer,
    resetGameBtn
);

// fxns:
function getRandomComputerResult() {}

function hasPlayerWonTheRound(player, computer) {}

function getRoundResults(userOption) {}

function showResults(userOption) {}

function resetGame() {}

rockBtn.addEventListener("click", function () {});

paperBtn.addEventListener("click", function () {});

scissorsBtn.addEventListener("click", function () {});
