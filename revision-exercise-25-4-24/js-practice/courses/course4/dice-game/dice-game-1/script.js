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

let isModalShowing;

console.log(rulesBtn, rulesContainer, keepScoreBtn, rollDiceBtn);
