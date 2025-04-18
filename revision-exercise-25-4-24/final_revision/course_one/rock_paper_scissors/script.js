/*
// html elemts
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

// update UI
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

const optionsContainer = document.querySelector(".options-container");

// btns
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetGameBtn = document.getElementById("reset-game-btn");

// initial scores
let playerScore = 0;
let computerScore = 0;

// fxns:
// get an option of: Rock/Paper/Scissors
function getRandomComputerOption() {
    const options = ["Rock", "Paper", "Scissors"];

    // ds will return value btw: 0 - 2 & not 3
    const randomIndex = Math.floor(Math.random() * options.length);

    // return an option
    return options[randomIndex];
}

// Has d player won instead of the computer?
function hasPlayerWonTheRound(player, computer) {
    // conditions for player to win. d computer option must
    // be 2 steps ahead of d player's option.
    const playerWon =
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper");

    return playerWon;
}

// ds calls both: getRandomComputerOption()
// & hasPlayerWonTheRound(player, computer). Its duty is to return
// a STRING wc shows weda a player/computer won or it is a tie.
function getRoundResults(userOption) {
    // playing agst computer: a random selectn of: Rock, Paper, Scissors
    const computerOption = getRandomComputerOption();

    // if hasPlayerWonTheRound(userOption, computerOption)
    // returns true, player won.
    if (hasPlayerWonTheRound(userOption, computerOption)) {
        playerScore++;

        return `Player wins! ${userOption} beats ${computerOption}`;

        // if both result r equal, it is a tie.
    } else if (userOption === computerOption) {
        return `It's a tie! Both chose ${userOption}`;

        // if hasPlayerWonTheRound() does nt return true
    } else {
        computerScore++;

        return `Computer wins! ${computerOption} beats ${userOption}`;
    }
}

// Update UI:
// ds calls getRoundResults(userOption) & is itself called inside
// d addEventListener()
function showResults(userOption) {
    // show player and computer scores
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    // returns a str of who wins or weda it is tie
    roundResultsMsg.innerText = getRoundResults(userOption);

    // whoever reaches a score of 3 wins
    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        // update UI only wn dre is a winner
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}

// Event Listeners: with anonymous fxns
rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});

// reset to initial state
function resetGame() {
    // return d scores to d initial value
    playerScore = 0;
    computerScore = 0;

    // show d of: playerScore, computerScore
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;

    // hide resetGameBtn & show optionsContainer
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";

    // mk d round msg and winner msg an empty string
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);






*/

// revision:
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");

// btns
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resetGameBtn = document.getElementById("reset-game-btn");
const optionsContainer = document.querySelector(".options-container");

// initial scores
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    const playerWon =
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper");

    return playerWon;
}

function getRoundResults(player) {
    const computer = getRandomComputerResult();

    if (hasPlayerWonTheRound(player, computer)) {
        playerScore++;

        return `Player wins! ${player} beats ${computer}`;
    } else if (player === computer) {
        return `It's a tie! Both chose ${player}`;
    } else {
        computerScore++;

        return `Computer wins! ${computer} beats ${player}`;
    }
}

function showResults(userOption) {
    const user = getRoundResults(userOption);

    let showOutput;

    if (playerScore === 3 || computerScore === 3) {
        showOutput = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    winnerMsgElement.innerText = user;
    roundResultsMsg.innerText = showOutput;

    // return showOutput;

    // console.log(userOption);
}

rockBtn.addEventListener("click", function () {
    const rock = rockBtn.value;

    showResults(rock);
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});

function resetGame() {
    console.log("Reset");
}

resetGameBtn.addEventListener("click", resetGame);

// It's a tie! Both chose Rock
// Player wins! Rock beats Scissors
// Computer wins! Scissors beats Paper

// Player has won the game!
// Computer has won the game!
