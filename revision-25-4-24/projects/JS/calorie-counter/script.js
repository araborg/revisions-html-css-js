const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");

// Helper fxns
// remove space, plus, minus from d input value
function trimInput(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function invalidInput(str) {
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
        <input type="text" id="${entryDropdown.value}-${targetNumber}-name"/>

        <label for="${entryDropdown.value}-${targetNumber}-calories">Entry ${targetNumber} Calories</label>
        <input type="number" id="${entryDropdown.value}-${targetNumber}-calories"/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);
}

addEntry.addEventListener("click", addInput);
