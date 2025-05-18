const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options");
const scoreSpans = document.querySelectorAll(".score span");

const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");

const totalScore = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rule-btn");
const rulesContainer = document.querySelector(".rules-container");

let isModalShowing;
let diceValuesArr;

let currentScore;
let score;
let rolls;
let round;

console.log(scoreInputs);
