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

    const targetNumber =
        targetInputContainer.querySelectorAll("input[type=text]").length + 1;

    const inputHTML = `
        <label>Entry {targetNumber} Name</label>
        <input type="text" />

        <label>Entry {targetNumber} Calories</label>
        <input type="number" />
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", inputHTML);

    // console.log(targetInputContainer);
}

addEntry.addEventListener("click", addInput);
