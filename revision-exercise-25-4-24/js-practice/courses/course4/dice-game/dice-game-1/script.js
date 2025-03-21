const listOfAllDice = document.querySelectorAll(".die");

const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");

const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

const keepScoreBtn = document.querySelector("#keep-score-btn");
const rollDiceBtn = document.querySelector("#roll-dice-btn");

let isModalShowing = false;

let diceValuesArr = [];

let rolls = 0;
let currentScore = 0;
let round = 1;

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesContainer.style.display = "block";

        rulesBtn.textContent = "Hide rules";
    } else {
        rulesContainer.style.display = "none";

        rulesBtn.textContent = "Show rules";
    }
});
