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

    if (parseInt(numberInput.value) === 5) {
        showAnimation();

        return;
    }

    result.textContent = decimatToBinary(parseInt(numberInput.value));

    numberInput.value = "";
};

const decimatToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return decimatToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

const showAnimation = () => {};

// event listeners:
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});

/*

1.
const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    // call decimatToBinary() with input value
    decimatToBinary(parseInt(numberInput.value));

    // return d input value to d default value: (an empty string)
    numberInput.value = "";
};


2.
const decimatToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const reminders = [];

    
    // base case:
    if (input === 0) {
        result.innerText = "0";
        
        return;
    }

            
    // recursive case: (assume input = 6)
    while (input > 0) {
        const quotient = Math.floor(input / 2);

        const reminder = input % 2;

        inputs.push(input); // [6, 3, 1]
        quotients.push(quotient); // [3, 1, 0]
        reminders.push(reminder); // [0, 1, 1]

        // rate limiting step: ds changes input value from e.g 6 to 3 to 1
        input = quotient;
    }
        

    result.innerText = reminders.reverse().join("");
};


3.
const decimatToBinary = (input) => {
    let binary = "";


    // base case:
    if (input === 0) {
        binary = "0";
    }


    // recursive case:
    while (input > 0) {
        binary = (input % 2) + binary;

        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};


4. call stack
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

const callStack = [
    `a(): returns "freeCodeCamp " + b()`,
    // "freeCodeCamp is awesome!"

    `b(): returns "is " + c()`,
    // "is awesome!"

    `c(): returns "awesome!"`,
    // "awesome!"
];


5. recursion:
const countdown = (number) => {
    console.log(number);

    // base case:
    if (number === 0) {
        console.log("Reached base case");

        return;
    } else {
        // recursive case:
        countdown(number - 1);

        console.log(number);
    }
};

countdown(3);


6.
const decimatToBinary = (input) => {
    // base cases:
    if (input === 0) {
        return "0";
    } else if (input === 1) {
        return "1";
    } else {
        // recursive case:
        return decimatToBinary(Math.floor(input / 2)) + (input % 2);
    }
};


7.
const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    if (parseInt(numberInput.value) === 5) {
        showAnimation();

        return;
    }

    result.textContent = decimatToBinary(parseInt(numberInput.value));

    numberInput.value = "";
};


7.
const decimatToBinary = (input) => {
    // base case:
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        // recursive case:
        return decimatToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

*/
