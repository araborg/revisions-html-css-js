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

let score = 0;
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
    // ds helps reset d diceValuesArr after each rollDice
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;

        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    // default input selection
    // updateRadioOption(5, 0);
};

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;

        rollDice();
        updateStatsIU();

        resetRadioOptions();

        getHighestDuplicates(diceValuesArr);
    }
});

const updateStatsIU = () => {
    rollsElement.textContent = rolls;

    roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;

    scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (arr) => {
    // using an obj to monitor d state
    const counts = {};

    for (const num of arr) {
        // num = key, counts[num] = value
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    // ds mks d count available outside of its for loop scope
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

    if (highestCount >= 3) {
        updateRadioOption(0, sumOfAllDice);
    }

    if (highestCount >= 4) {
        updateRadioOption(1, sumOfAllDice);
    }

    // default input selection
    updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
    scoreInputs.forEach((input) => {
        input.disabled = true;

        input.checked = false;
    });

    scoreSpans.forEach((span) => {
        span.textContent = "";
    });
};

const updateScore = (selectedValue, inputId) => {
    score += parseInt(selectedValue);

    totalScoreElement.textContent = score;

    scoreHistory.innerHTML += `
        <li> ${inputId} : ${selectedValue} </li>
    `;
};

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let inputId;

    for (const radioBtn of scoreInputs) {
        if (radioBtn.checked) {
            selectedValue = radioBtn.value;
            inputId = radioBtn.id;

            break;
        }
    }

    if (selectedValue) {
        rolls = 0;
        round++;

        updateStatsIU();
        resetRadioOptions();

        updateScore(selectedValue, inputId);
    } else {
        alert("Please select an option or roll the dice");
    }
});
