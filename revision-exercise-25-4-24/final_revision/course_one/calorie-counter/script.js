/*

// form: ds is where
// calorieCounter
//      .addEventListener("submit", calculateCalories);
// is attached. Notice d event is submit.
const calorieCounter = document.getElementById("calorie-counter");

// d proposed budget of calories to be lost/burnt
const budgetNumberInput = document.getElementById("budget");

// dropdown
const entryDropdown = document.getElementById("entry-dropdown");

// btns
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");

// Calculate Remaining Calories btn is yet to be selected
// ds is bcos d btn is trigger by d event listener on
// calorieCounter. d btn is inside d form elemt. It is
// also triggered by d Enter key.

// outpust
const output = document.getElementById("output");

// boolean state
let isError = false;

// wt will happen when
// let isError = true;

// format budgetNumberInput value:

// if d input value contains any of dse: +, - or
// empty space any where replace it with empty
// string
function cleanInputString(str) {
    // in no particular order:
    // const regex = /[+-\s]/g;
    const regex = /[\s-+]/g;

    return str.replace(regex, "");
}

// if d input value contains scientific notation e.g: 10e1:
// It will return smth like ds:
// ['1e3', index: 0, input: '1e3', groups: undefined]

// It will  return null when the input is a valid
// number without any scientific notation.
// console.log(isInvalidInput("10")); // null
// 4 normal Number. d essence of + is in case wt we r lking
// 4 occurs more than oncuechange.
function isInvalidInput(str) {
    const regex = /\d+e\d/i;

    // if both str & regex do match, dn return smth like
    // ds: ['1e3', index: 0, input: '1e3', groups: undefined]
    return str.match(regex);
}

// ds takes place after clicking "Add Entry" btn
function calculateCalories(e) {
    // ds prevent pg reloading
    e.preventDefault();

    // Y r will repeating ds?
    // ds may be for a local scope incase it changes
    // globally. ds mks sure d initial value is false
    // inside ds fxn
    isError = false;

    // dse select only d input with number so we can
    // access d values for calcuatn.
    const breakfastNumberInputs = document.querySelectorAll(
        "#breakfast input[type=number]"
    );

    const lunchNumberInputs = document.querySelectorAll(
        "#lunch input[type=number]"
    );

    const dinnerNumberInputs = document.querySelectorAll(
        "#dinner input[type=number]"
    );

    const snacksNumberInputs = document.querySelectorAll(
        "#snacks input[type=number]"
    );

    const exerciseNumberInputs = document.querySelectorAll(
        "#exercise input[type=number]"
    );

    // get d values (in an arr form) in d inputs above:
    // dse values r meant to be atleast one or more inputs.
    // Passing dm as an arr into getCaloriesFromInputs()
    // will return d sum of each values.

    const breakfastCalories =
        //
        getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);

    // Wt mks ds diff from other i.e. y was it added and nt
    // removed? ds is bcos ds was exprected to be burnt off
    // like d budgetCalories
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    // y did we pass in a arr: [budgetNumberInput]
    // getCaloriesFromInputs() expected an arr argument
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    // getCaloriesFromInputs() will either return null or smth
    // like this: ['1e3', index: 0, input: '1e3', groups: undefined]
    // wc will change it to true inside d getCaloriesFromInputs()
    // or incase isError changes to true return.
    if (isError) {
        return;
    }

    // amt of calories consumed by an individual via foods.
    const consumedCalories =
        breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    // this: but y was exerciseCalories +ed to budgetCalories?
    // budgetCalories: is d calories budgeted to be burnt/loss
    // exerciseCalories is also expected to be burnt.
    const remainingCalories =
        budgetCalories + exerciseCalories - consumedCalories;

    // If surplusOrDeficit is -ve i.e < 0: consumedCalories > calories
    // to be burnt. ds means d consumedCalories is in surplus and vice
    // versa
    const surplusOrDeficit =
        //
        // remainingCalories < 0 ? "Surplus" : "Deficit";
        remainingCalories > 0 ? "Deficit" : "Surplus";

    // Update output UI: add a span and 3 paragraphs
    // innerHTML means embedded d added elemts instead of using
    // output.innerText +=
    output.innerHTML =
        // Math.abs() returns an absolute value. -25/+25 returns 25
        `
            <span class="${surplusOrDeficit.toLowerCase()}">
                ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}
            </span>

            <hr>

            <p>${budgetCalories} Calories Budgeted</p>
            <p>${consumedCalories} Calories Consumed</p>
            <p>${exerciseCalories} Calories Burned</p>
        `;

    output.classList.remove("hide");
}

calorieCounter.addEventListener("submit", calculateCalories);

function getCaloriesFromInputs(list) {
    // d list is similar to an arr but it is nt an arr
    // console.log(list)

    // since all calories we need to be added, set initial to 0
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);

        // ds return null or
        // ['1e3', index: 0, input: '1e3', groups: undefined]
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);

            // for ds to run it means dre's an error
            isError = true;

            // jump out of ds closure
            return null;
        }
        // else {

        // y r we not using else statement
        // for each loop +d current currVal to calories
        calories += Number(currVal);

        // }
    }

    return calories;
}

// update UI
function addEntry() {
    // #entryDropdown.value rep d id of d fieldset wc
    // serves as d container for anoda div with class
    // input-container.

    // With ds, d speciic input container will be selected.
    // It is like saying select an input container of class
    // .input-container inside a container with id of
    // #breakfast/#lunch/#dinner etc.

    // N.B: Hwever, both d id (#breakfast/#lunch/#dinner)
    // and d class (.input-container) used were already
    // provided in d HTML file.
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );

    // ds creates an obj id or index
    const entryNumber =
        targetInputContainer
            // ds, querySelectorAll('input[type="text"]').length,
            // on it own starts at 0. So + 1 mks it starts at 1
            // for proper purpose since we r using length & nt
            // index.

            .querySelectorAll('input[type="text"]').length + 1;
    //      .querySelectorAll('input[type="number"]').length + 1;

    // Either:
    // targetInputContainer.querySelectorAll('input[type="text"]').length + 1
    // Or:
    // targetInputContainer.querySelectorAll('input[type="number"]').length + 1
    // will work.

    // ???
    // But input[type="number"] will also return budget input

    // Note: .querySelectorAll() was used and nt
    // .querySelector(). Y?

    // create a label and an input elements
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">
            Entry ${entryNumber} Name
        </label>
        <input 
            type="text"
            id="${entryDropdown.value}-${entryNumber}-name"
            placeholder="Name"
        />

        <label for="${entryDropdown.value}-${entryNumber}-calories">
            Entry ${entryNumber} Calories
        </label>
        <input 
            type="number"
            id="${entryDropdown.value}-${entryNumber}-calories"
            placeholder="Calories"
        />
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

addEntryButton.addEventListener("click", addEntry);

function clearForm() {
    // ds selects all inputs irrespective of weda it is
    // budget/breakfast/lunch/dinner/snacks/exercise etc
    // provided it's class .input-container.
    // Array.from() helps mks an array from an input.
    const inputContainers = Array.from(
        document.querySelectorAll(".input-container")
    );

    for (let container of inputContainers) {
        container.innerHTML = "";
        // container.innerText = "";
    }

    budgetNumberInput.value = "";
    output.innerText = "";

    // helps remove d output container
    output.classList.add("hide");
}

clearButton.addEventListener("click", clearForm);

// Using Array.from(): means mk an array from d argument
// const arr = "1, 2, 3, 4, 5, 6";
// const newArr = Array.from(arr);

// for (let arr of newArr) {
//     console.log(arr);
// }

*/

// Revision

const calorieCounter = document.getElementById("calorie-counter");
const budget = document.getElementById("budget");

const entryDropdown = document.getElementById("entry-dropdown");

const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");

let isError = false;

function cleanInputString(str) {
    const regex = /[-+\s]/g;

    return str.replace(regex, "");
}

function isInvalidInput(str) {
    const regex = /[d+ed+]/i;

    return str.match(regex);
}

function calculateCalories(e) {
    e.preventDefault();

    const breakfastNumberInputs = document.querySelectorAll(
        `#${entryDropdown.value} .input-container`
    );

    const lunchNumberInputs = document.querySelectorAll(
        `#${entryDropdown.value} .input-container`
    );
    const dinnerNumberInputs = document.querySelectorAll(
        `#${entryDropdown.value} .input-container`
    );
    const snacksNumberInputs = document.querySelectorAll(
        `#${entryDropdown.value} .input-container`
    );
    const exerciseNumberInputs = document.querySelectorAll(
        `#${entryDropdown.value} .input-container`
    );

    console.log(breakfastNumberInputs);
}

// add addEventListener to d form and nt d btn i.e
// Calculate Remaining Calories btn
calorieCounter.addEventListener("submit", calculateCalories);

function getCaloriesFromInputs(list) {}

function addEntry() {
    const arr = [];

    // get d div container where new labels and inputs will be added
    const targetInputContainer = document.querySelector(
        `#${entryDropdown.value} .input-container`
    );

    // get an id to be used
    const targetId =
        targetInputContainer.querySelectorAll("input[type=number]").length + 1;

    const HTMLString = `
        <label for="${entryDropdown.value}-${targetId}-name">
            Entry ${targetId} Name
        </label>
        <input
            type="text"
            id="${entryDropdown.value}-${targetId}-name"
            placeholder="Name"
            required
        />

        <label for="${entryDropdown.value}-${targetId}-calories">
            Entry ${targetId} Calories
        </label>
        <input
            type="number"
            id="${entryDropdown.value}-${targetId}-calories"
            placeholder="Calories"
            min="0"
            required
        />
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

addEntryButton.addEventListener("click", addEntry);

function clearForm() {}
addEntryButton.addEventListener("click", clearForm);
