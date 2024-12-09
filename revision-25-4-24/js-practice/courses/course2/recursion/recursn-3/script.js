const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

const userInput = () => {
    const userVal = parseInt(numberInput.value);

    console.log(userVal);
};

// get input
const getInput = (input) => {
    const inputs = [];
    const divisors = [];
    const reminders = [];

    while (input > 0) {
        let divisor = Math.floor(input / 2);
        const reminder = input % 2;

        reminders.push(reminder);
        input = divisor;
    }

    const returnVal = reminders.reverse().join("");

    outputNumber.textContent = returnVal;
    // console.log(returnVal);
};

getInput(6);
// input event listener

// btn event listener
convertBtn.addEventListener("click", userInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
    }
});
