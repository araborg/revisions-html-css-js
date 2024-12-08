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

    const input = Math.floor(inputValue / 2);
    const reminder = input % 2;
    const divisor = input;

    console.log(input);

    // console.log(inputValue);
};

// getInput();
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);
