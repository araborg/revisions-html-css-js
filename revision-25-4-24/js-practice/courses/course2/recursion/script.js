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


    result.innerText = reminders.reverse().join(""); // 110
};


3.
const decimatToBinary = (input) => {
    let binary = "";


    // base case:
    if (input === 0) {
        binary = "0";
    }


    // recursive case: (assume input = 6) see d illustratn below:
    while (input > 0) {
        binary = (input % 2) + binary;

        // limiting rate step
        input = Math.floor(input / 2);
    }

    result.innerText = binary;
};

    1st time: input = 6 and binary = ""
    while (input > 0) {

              //  6 % 2 = 0  +  ""    i.e binary = "0" i.e 0 + ""
        binary = (input % 2) + binary;

        // input = 3    i.e     6 / 2
        input = Math.floor(input / 2);
    }

    2nd time: input = 3
    while (input > 0) {
              //  3 % 2 = 1  + "0"  i.e binary = "10"  i.e 1 + "0"
        binary = (input % 2) + binary;

        // input = 1
        input = Math.floor(input / 2);
    }

    3rd time: input = 1
    while (input > 0) {
              //  1 % 2 = 1  + "10" i.e binary = "110" i.e 1 + "10"
        binary = (input % 2) + binary;

        // input = 0
        input = Math.floor(input / 2);
    }

    4th time: input = 0
    while (input > 0) { 0 is not greater than 0
        // d condition is false
    }


4. call stack
// bottom:
const a = () => {
    return "freeCodeCamp " + b();
};

// middle:
const b = () => {
    return "is " + c();
};

// top:
const c = () => {
    return "awesome!";
};

// d bottom fxn is called: 
ds mks d top and middle fxns to be called and removed from d stack
b4 d bottom fxn:

console.log(a()); // freeCodeCamp is awesome!

const callStack = [
    `a(): returns "freeCodeCamp " + b()`,   // 3rd
    // "freeCodeCamp is awesome!"

    `b(): returns "is " + c()`,             // 2nd
    // "is awesome!"

    `c(): returns "awesome!"`,              // 1st
    // "awesome!"
];


5. recursion:
const countdown = (number) => {
    console.log(number);            // 2nd(3), 4th(2), 6th(1), 8th(0)

    // base case:
    if (number === 0) {
        console.log("Reached base case"); // 9th(0)

        return;
    } else {
        // recursive case:
        countdown(number - 1);      // 3rd(2), 5th(1), 7th(0)

        console.log(number); // 10th(1), 11th(2), 12th(3)
    }
};

countdown(3);                       // 1st


6.
const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");

        return;
    }

    result.textContent = decimatToBinary(parseInt(numberInput.value));

    numberInput.value = "";
};


7.
assuming input = 6
const decimatToBinary = (input) => {
    // base cases:
    if (input === 0) {
        return "0";

    } else if (input === 1) {
        return "1";

    } else {
        // recursive case:
        return 
            decimatToBinary(Math.floor(input / 2)) 
            + 
            (input % 2);
    }
};


1st time:
else {
    // recursive case:
    return 
                                    6 / 2 = 3
        decimatToBinary(Math.floor(input / 2)) 
        + 
        (input % 2); // 6 % 2 = 0
}


2nd time:
else {
    // recursive case:
    return 
        decimatToBinary(Math.floor(input / 2)) 
        + 
        (input % 2);
}

3rd time:
else {
    // recursive case:
    return 
        decimatToBinary(Math.floor(input / 2)) 
        + 
        (input % 2);
}

4th time:
else {
    // recursive case:
    return 
        decimatToBinary(Math.floor(input / 2)) 
        + 
        (input % 2);
}


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
