/*
const listOfAllDice = document.querySelectorAll(".die");

const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");

const rollsElement = document.getElementById("current-round-rolls");
const roundElement = document.getElementById("current-round");

const rulesBtn = document.getElementById("rules-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rollDiceBtn = document.getElementById("roll-dice-btn");

const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;

let diceValuesArr = [];

let rolls = 0;
let round = 1;
let score = 0;

// logic
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
    updateRadioOption(5, 0);
};

const updateStatsIU = () => {
    rollsElement.textContent = rolls;

    roundElement.textContent = round;
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

const resetGame = () => {
    // diceValuesArr=[]
    diceValuesArr = [0, 0, 0, 0, 0];

    score = 0;
    rolls = 0;
    round = 1;

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = "";

    rollsElement.textContent = rolls;
    roundElement.textContent = round;

    resetRadioOptions();
};

const detectFullHouse = (arr) => {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num]++ : 1;
    }

    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    if (hasThreeOfAKind && hasPair) {
        updateRadioOption(2, 25);
    }
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
};

// btns
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

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let inputId;

    for (const radioBtn of scoreInputs) {
        if (radioBtn.checked) {
            selectedValue = radioBtn.value;
            inputId = radioBtn.id;

            break;
        }

        // console.log(radioBtn);
    }

    if (selectedValue) {
        rolls = 0;
        round++;

        updateStatsIU();
        resetRadioOptions();

        updateScore(selectedValue, inputId);

        if (round > 6) {
            setTimeout(() => {
                alert(`Game Over! Your total score is ${score}`);

                resetGame();
            }, 500);
        }
    } else {
        alert("Please select an option or roll the dice");
    }
});

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;

        rollDice();
        updateStatsIU();

        getHighestDuplicates(diceValuesArr);

        detectFullHouse(diceValuesArr);
        checkForStraights(diceValuesArr);
    }
});

// ================================
// Helper fxn: d parameters r provided manually
const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;

    scoreSpans[index].textContent = `, score = ${score}`;
};



















*/

// Revision
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

const dies = document.querySelectorAll(".die");

const rollsElement = document.getElementById("current-round-rolls");
const roundElement = document.getElementById("current-round");

const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");

const keepScoreBtn = document.getElementById("keep-score-btn");
const rollDiceBtn = document.getElementById("roll-dice-btn");

const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

// logic
let diceValuesArr = [];

let rolls = 0;
let round = 1;

let score = 0;

let isModalShowing = false;

const showRules = () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesContainer.style.display = "block";

        rulesBtn.textContent = "Hide rules";
    } else {
        rulesContainer.style.display = "none";

        rulesBtn.textContent = "Show rules";
    }
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

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;

        diceValuesArr.push(randomDice);
    }

    dies.forEach((die, i) => {
        die.textContent = diceValuesArr[i];
    });

    updateRadioOption(5, 0);
};

const updateStatsIU = () => {
    rollsElement.textContent = rolls;

    roundElement.textContent = round;
};

const getHighestDuplicates = (arr) => {
    let counts = {};

    for (let num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    let highestCount = 0;

    for (let val of arr) {
        let count = counts[val];

        if (count >= 3 && count > highestCount) {
            highestCount = count;
        }

        if (count >= 4 && count > highestCount) {
            highestCount = count;
        }
    }

    const sum = arr.reduce((a, b) => a + b, 0);

    if (highestCount >= 3) {
        updateRadioOption(0, sum);
    }

    if (highestCount >= 4) {
        updateRadioOption(1, sum);
    }
};

const updateScore = (arr) => {
    let selectedValue;
    let selectedId;

    arr.forEach((el) => {
        if (el.checked) {
            selectedValue = el.value;
            selectedId = el.id;
        }
    });

    if (selectedValue) {
        score += parseInt(selectedValue);

        totalScoreElement.textContent = score;

        scoreHistory.innerHTML += `<li>${selectedId}: ${selectedValue}`;
    }
};

const resetGame = () => {
    // if (rolls === 3) {
    rolls = 0;
    round = 1;
    score = 0;

    scoreHistory.innerHTML = "";

    updateStatsIU();
    resetRadioOptions();
    // }
};

const detectFullHouse = () => {};

const checkForStraights = () => {};

// Helper fxn
const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;

    scoreSpans[index].textContent = `, score: ${score}`;
};

// Event Listener
rulesBtn.addEventListener("click", showRules);

keepScoreBtn.addEventListener("click", () => {
    updateScore(scoreInputs);

    resetRadioOptions();

    rolls = 0;
    round++;

    console.log(round);

    if (round > 6) {
        setTimeout(() => {
            alert(`Game Over! Your total score is ${score}`);

            resetGame();
        }, 500);
    }
});

rollDiceBtn.addEventListener("click", () => {
    if (rolls >= 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;

        resetRadioOptions();

        rollDice();
        updateStatsIU();

        getHighestDuplicates(diceValuesArr);

        // updateRadioOption();

        // updateScore(diceValuesArr);
    }
});

/*

alert("You have made three rolls this round. Please select a score.");
alert(`Game Over! Your total score is ${score}`);
alert("Please select an option or roll the dice");



*/
