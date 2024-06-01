const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");

// Helper fxns
function trimInput(str) {
    const regex = /+-s/g;
    return str.replace(regex, "");
}

console.log(trimInput(" -+2800"));

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
