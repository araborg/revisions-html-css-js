const listOfAllDice = document.querySelectorAll(".die");

const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");

const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");

const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;

let diceValuesArr = [];

let currentScore = 0;
let rolls = 0;
let round = 1;

// logic
rulesBtn.addEventListener("click", () => {
    // ds monitor d state of isModalShowing
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesContainer.style.display = "block";

        rulesBtn.textContent = "Hide rules";
    } else {
        rulesContainer.style.display = "none";

        rulesBtn.textContent = "Show rules";
    }
});

const rollDice = () => {
    // diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;

        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    // default input selection
    updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;

        rollDice();
        updateStats();

        getHighestDuplicates(diceValuesArr);
    }
});

const updateStats = () => {
    rollsElement.textContent = rolls;

    // roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;

    scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (arr) => {
    const counts = {};

    for (const num of arr) {
        // num = key, counts[num] = value

        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    let highestCount = 0;

    for (const num of arr) {
        const count = counts[num];

        if (count >= 3 && count > highestCount) {
            highestCount = count;
        }

        if (count >= 4 && count > highestCount) {
            highestCount = count;
        }
    }

    const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

    console.log(counts);
};
