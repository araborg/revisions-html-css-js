const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    decimatToBinary(parseInt(numberInput.value));

    numberInput.value = "";
};

/*
1.
const decimatToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const reminders = [];

    if (input === 0) {
        result.innerText = "0";

        return;
    }

    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const reminder = input % 2;

        inputs.push(input); // [6, 3, 1]
        quotients.push(quotient); // [3, 1, 0]
        reminders.push(reminder); // [0, 1, 1]

        // rate limiting step
        input = quotient;
    }

    result.innerText = reminders.reverse().join("");
};


2.
const decimatToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary;

        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};


*/

const decimatToBinary = (input) => {
    let binary = "";

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        binary = (input % 2) + binary;

        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});

// call stack
const a = () => {
    return "freeCodeCamp " + b();
};

const b = () => {
    return "is " + c();
};

const c = () => {
    return "awesome!";
};

console.log(a()); // freeCodeCamp is awesome!

const callStack = [`a(): returns "freeCodeCamp " + b()`];
