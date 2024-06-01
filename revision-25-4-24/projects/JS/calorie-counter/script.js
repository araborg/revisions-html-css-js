const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

// btns
const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");

// state
const hasError = false;

// Helper fxns
// remove space, plus, minus from d input value
function trimInput(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// add appropriate input
function addInput() {
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );

    const targetNumber =
        targetInputContainer.querySelectorAll("input[type=text]").length + 1;

    const inputHTML = `
        <label for="${entryDropdown.value}">Entry ${targetNumber} Name</label>
        <input type="text" id="${entryDropdown.value}" required/>

        <label for="${entryDropdown.value}">Entry ${targetNumber} Calories</label>
        <input id="${entryDropdown.value}" required/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);
}

addEntry.addEventListener("click", addInput);

// cal d calories
function getCalorieSum(calo) {
    // decalare an initiatl value for calorie
    let calorie = 0;
    console.log(isInvalidInput(calo));
}

getCalorieSum("10e3");

// detect if it is surplus or deficit
function isCaloriesDeficitOrSurplus() {}
