/*
Fxns:
1. window.onload = () => {}
    const createLabel = (name) =>{}

   
2. const range = (start, end) => Array().fill().map();
    const charRange = (start, end) => range(start, end);


3.


4.




*/

window.onload = () => {
    const container = document.getElementById("container");

    // cr8 labels
    const createLabel = (name) => {
        const label = document.createElement("div");

        label.className = "label";
        label.textContent = name;

        container.appendChild(label);
    };

    // letters
    const letters = charRange("A", "J");
    letters.forEach(createLabel);

    // numbers
    const numbers = range(1, 99);
    numbers.forEach((number) => {
        createLabel(number);

        letters.forEach((letter) => {
            const input = document.createElement("input");

            input.type = "text";
            input.id = letter + number;
            input.ariaLabel = letter + number;

            container.appendChild(input);
        });
    });
};

const range = (start, end) =>
    Array(end - start + 1)
        .fill(start)
        .map((el, i) => el + i);

const charRange = (start, end) =>
    range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
        String.fromCharCode(code)
    );

const sum = (nums) => nums.reduce((accu, el) => accu + el, 0);

const average = (nums) => sum(nums) / nums.length;

const isEven = (num) => {
    num % 2 === 0 ? true : false;
};

const median = (nums) => {
    const sorted = nums.slice().sort((a, b) => {
        a - b;
    });

    const length = sorted.length;
    const middle = length / 2 - 1;

    return isEven(length)
        ? average(sorted[middle], sorted[middle + 1])
        : sorted[Math.ceil(middle)];
};

const spreadsheetFunctions = {
    sum,
    average,
    median,
};

console.log(spreadsheetFunctions);

const update = (event) => {};
