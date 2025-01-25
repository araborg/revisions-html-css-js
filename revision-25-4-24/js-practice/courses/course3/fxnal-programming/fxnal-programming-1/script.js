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

            input.onchange = update;

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

const update = (event) => {
    const element = event.target;

    const value = element.value.replace(/\s/g, "");

    if (!value.includes(element.id) && value[0] === "=") {
    }
};

const evalFormula = (x, cells) => {
    // cells is an array
    const idToText = (id) => {
        /* cell.id === id returns an input elemt 
            while.value returns value
        */
        return cells.find((cell) => cell.id === id).value;
    };

    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;

    const rangeFromString = (num1, num2) =>
        range(parseInt(num1), parseInt(num2));
};
