const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = () => {
    const inputValue = parseInt(numberInput.value);

    const inputs = [];
    const reminders = [];
    const divisors = [];

    const reminder = inputValue % 2;
    const input = Math.floor(inputValue / 2);
    const divisor = input;

    console.log(reminder, input, divisor);
};

// getInput();
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);
