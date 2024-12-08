const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = () => {
    let inputValue = parseInt(numberInput.value);

    const inputs = [];
    const reminders = [];
    const divisors = [];

    let input;

    if (input >= 0) {
        const reminder = inputValue % 2;
        const divisor = Math.floor(inputValue / 2);

        input = divisor;

        console.log(reminder, divisor, input);
    }
};

// getInput();
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);
