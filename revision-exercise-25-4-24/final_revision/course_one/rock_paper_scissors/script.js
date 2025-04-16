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
    // be 2 steps ahead of d player's option.
    const result =
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper");

    return result;
}

function getRoundResults(userOption) {
    // playing agst computer
    const computerResult = getRandomComputerResult();

    // if hasPlayerWonTheRound(userOption, computerResult)
    // returns true, player won.
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;

        return `Player wins! ${userOption} beats ${computerResult}`;

        // if both result r equal, it is a tie.
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;

        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

function showResults(userOption) {
    // returns a str
    roundResultsMsg.innerText = getRoundResults();

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;
    }

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
}

function resetGame() {}

// Event Listeners: with anonymous fxns
rockBtn.addEventListener("click", function () {});
paperBtn.addEventListener("click", function () {});
scissorsBtn.addEventListener("click", function () {});
