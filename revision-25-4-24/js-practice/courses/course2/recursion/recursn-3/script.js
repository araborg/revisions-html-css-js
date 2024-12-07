const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output-number");

const animationStack = document.getElementById("animation-stack");

// console.log(numberInput, convertBtn, outputNumber, animationStack);

// get input
const getInput = () => {
    const inputValue = parseInt(numberInput.value);

    const inputs = [];
    const remindders = [];
    const divisors = [];

    console.log(inputValue);
};

// getInput();
// input event listener

// btn event listener
convertBtn.addEventListener("click", getInput);
