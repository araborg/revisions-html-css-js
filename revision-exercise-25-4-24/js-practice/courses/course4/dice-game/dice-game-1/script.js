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

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;

        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

const updateStats = () => {
    rollsElement.textContent = rolls;

    roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;

    scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (arr) => {
    let counts = {};

    for (num of arr) {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    }

    let highestCount = 0;

    for (num of arr) {
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

    updateRadioOption(5, 0);

    /*
        * The below code will also do the same thing as the above code

        const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

        for (num of arr) {
            const count = counts[num];

            if (count >= 3) {
                updateRadioOption(0, sumOfAllDice);
            }

            if (count >= 4) {
                updateRadioOption(1, sumOfAllDice);
            }

            // updateRadioOption(5, 0);
        }

        updateRadioOption(5, 0);

    */
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

const updateScore = (selectedValue, achievedId) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;

    scoreHistory.innerHTML += `
        <li>
            ${achievedId}: ${selectedValue}
        </li>
    `;
};

// event listener
rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;

        resetRadioOptions();

        rollDice();
        updateStats();

        getHighestDuplicates(diceValuesArr);
    }
});

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;

    for (const radioBtn of scoreInputs) {
        selectedValue = radioBtn.value;
    }

    console.log(selectedValue);
});
