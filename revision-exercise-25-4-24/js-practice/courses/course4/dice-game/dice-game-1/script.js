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
    currentScore += parseInt(selectedValue);
    totalScoreElement.textContent = currentScore;

    scoreHistory.innerHTML += `
        <li>
            ${achievedId}: ${selectedValue}
        </li>
    `;
};

const resetGame = () => {
    diceValuesArr = [0, 0, 0, 0, 0];

    currentScore = 0;
    rolls = 0;
    round = 1;

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    totalScoreElement.textContent = currentScore;
    scoreHistory.textContent = "";

    rollsElement.textContent = rolls;
    roundElement.textContent = round;

    resetRadioOptions();
};

const detectFullHouse = (arr) => {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    if (hasThreeOfAKind && hasPair) {
        updateRadioOption(2, 25);
    }

    updateRadioOption(5, 0);
};

const checkForStraights = (arr) => {
    const sortedNumbersArr = arr.sort((a, b) => a - b);

    const uniqueNumbersArr = [...new Set(sortedNumbersArr)];
    const uniqueNumbersStr = uniqueNumbersArr.join("");

    const smallStraightsArr = ["1234", "2345", "3456"];
    const largeStraightsArr = ["12345", "23456"];

    if (
        smallStraightsArr.some((straight) =>
            uniqueNumbersStr.includes(straight)
        )
    ) {
        updateRadioOption(3, 30);
    }

    if (largeStraightsArr.includes(uniqueNumbersStr)) {
        updateRadioOption(4, 40);
    }

    // if (smallStraightsArr.includes(uniqueNumbersStr)) {
    //     updateRadioOption(3, 30);
    // }

    // if (
    //     largeStraightsArr.some((straight) =>
    //         uniqueNumbersStr.includes(straight)
    //     )
    // ) {
    //     updateRadioOption(4, 40);
    // }

    updateRadioOption(5, 0);
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
        detectFullHouse(diceValuesArr);

        checkForStraights(diceValuesArr);
    }
});

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achievedId;

    for (const radioBtn of scoreInputs) {
        if (radioBtn.checked) {
            selectedValue = radioBtn.value;

            achievedId = radioBtn.id;

            break;
        }
    }

    if (selectedValue) {
        rolls = 0;
        round++;

        updateStats();
        resetRadioOptions();

        updateScore(selectedValue, achievedId);

        if (round > 6) {
            setTimeout(() => {
                alert(`Game Over! Your total score is ${currentScore}`);

                resetGame();
            }, 500);
        }
    } else {
        alert("Please select an option or roll the dice");
    }
});
