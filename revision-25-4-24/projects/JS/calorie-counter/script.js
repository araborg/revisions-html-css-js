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
        <label for="${entryDropdown.value}-${targetNumber}-name">Entry ${targetNumber} Name</label>
        <input type="text" id="${entryDropdown.value}-${targetNumber}-name" required/>

        <label for="${entryDropdown.value}-${targetNumber}-calories">Entry ${targetNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}-${targetNumber}-calories" required/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);
}

addEntry.addEventListener("click", addInput);

function calCalories(num) {
    const inputValue = trimInput(num.value);
    const brushedValue = isInvalidInput(inputValue);

    if (brushedValue) {
    }
}
