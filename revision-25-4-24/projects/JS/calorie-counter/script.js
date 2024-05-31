const budgetInput = document.querySelector("#budget");
const entryDropdown = document.querySelector("#entry-dropdown");

const calorieCounter = document.querySelector("#calorie-counter");
const addEntry = document.getElementById("add-entry");
const clearBtn = document.querySelector("#clear");
// console.log(calorieCounter, addEntry, clearBtn);

// add appropriate input
function addInput() {
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );
    console.log(targetInputContainer);
}

addInput();
