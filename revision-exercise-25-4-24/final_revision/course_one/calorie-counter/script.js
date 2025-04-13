// form
const calorieCounter = document.getElementById("calorie-counter");

// d proposed budget of calories to be lost/burnt
const budgetNumberInput = document.getElementById("budget");

// dropdown
const entryDropdown = document.getElementById("entry-dropdown");

// btns
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");

// Calculate Remaining Calories btn is yet to be selected

// outpust
const output = document.getElementById("output");

// boolean state
let isError = false;

// format budgetNumberInput value:

// if d input value contains any of dse: +, - or
// empty space any where replace it with empty string
function cleanInputString(str) {
    const regex = /[+-\s]/g;

    return str.replace(regex, "");
}

// if d input value contains scientific notation:
// It will  return null when the input is a valid
// number without any scientific notation else it
// returns smth else

function isInvalidInput(str) {
    const regex = /\d+e\d/i;

    return str.match(regex);
}

// console.log(isInvalidInput("1e3"));
// ['1e3', index: 0, input: '1e3', groups: undefined]

// console.log(isInvalidInput("10")); // null

function calculateCalories(e) {
    e.preventDefault();

    // Y r will repeating ds?
    // ds may be for a local reference incase it
    // changes globally. ds mks sure d initial
    // value is false inside ds fxn
    isError = false;

    // dse r presently plaholders for future reference
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

    // get d values in d inputs above: dse r meant to be
    // atleast one or more inputs

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);

    // wt mks ds diff from other i.e. y was it added and nt removed?
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    // y did we pass in a arr: [budgetNumberInput]
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    // after d getCaloriesFromInputs() dre is tendency
    // for isError to change to true
    if (isError) {
        return;
    }

    const consumedCalories =
        breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;

    // ds is same as
    // const remainingCalories =
    //     budgetCalories - consumedCalories + exerciseCalories;

    // this: but y was exerciseCalories +ed to budgetCalories?
    // budgetCalories: is d calories budgeted to be burnt/loss
    const remainingCalories =
        budgetCalories + exerciseCalories - consumedCalories;

    // If surplusOrDeficit is -ve i.e < 0: consumedCalories > calories
    // to burnt. ds means d consumedCalories is in surplus and vice versa
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

    // Math.abs() returns an absolute value. -25/+25 returns 25
    output.innerHTML = `
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
    // since all calories we need to be added, set initial to 0
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);

            // for ds run it means dre an error
            isError = true;

            // jump out of ds closure
            return null;
        }
    }
}
