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
    // letters.forEach((letter) => createLabel(letter));

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

const isEven = (num) => (num % 2 === 0 ? true : false);

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

const input = "=2+3";
const numbers = [1, 2, 3, 4, 5];
console.log(median(numbers));

const spreadsheetFunctions = {
    "": (arg) => arg,

    sum,
    average,
    median,

    even: (nums) => nums.filter(isEven),

    firsttwo: (nums) => nums.slice(0, 2),
    lasttwo: (nums) => nums.slice(-2),

    has2: (nums) => nums.includes(2),
    increment: (nums) => nums.map((num) => num + 1),

    someeven: (nums) => nums.some(isEven),
    everyeven: (nums) => nums.every(isEven),

    random: ([x, y]) => Math.floor(Math.random() * y + x),

    range: (nums) => range(...nums),

    nodupes: (nums) => [...new Set(nums).values()],
};

const update = (event) => {
    const element = event.target;

    const value = element.value.replace(/\s/g, "");

    if (!value.includes(element.id) && value[0] === "=") {
        element.value = evalFormula(
            value.slice(1),
            Array.from(document.getElementById("container").children)
        );
    }
};

const evalFormula = (x, cells) => {
    /*
        cells is an array

        cell.id === id returns an input elemt
            while.value returns value
    */

    // ******** Helper fxns ********
    const idToText = (id) =>
        //
        cells.find((cell) => cell.id === id).value;

    const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;

    const rangeFromString = (num1, num2) =>
        range(parseInt(num1), parseInt(num2));

    const elemValue = (num) => (character) => idToText(character + num);

    const addCharacters =
        (character1) =>
        //
        (character2) =>
        //
        (num) =>
            charRange(character1, character2).map(elemValue(num));

    const rangeExpanded = x.replace(
        rangeRegex,
        (_match, char1, num1, char2, num2) =>
            //
            rangeFromString(num1, num2)
                //
                .map(addCharacters(char1)(char2))
    );

    const cellRegex = /[A-J][1-9][0-9]?/gi;

    const cellExpanded =
        //
        rangeExpanded.replace(cellRegex, (match) =>
            idToText(match.toUpperCase())
        );

    const functionExpanded = applyFunction(cellExpanded);

    return functionExpanded === x
        ? functionExpanded
        : evalFormula(functionExpanded, cells);
};

const infixToFunction = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
};

const infixEval = (str, regex) =>
    //
    str.replace(
        regex,
        //
        (_match, arg1, operator, arg2) =>
            //
            infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
    );

const highPrecedence = (str) => {
    const regex = /([\d.]+)([*\/])([\d.]+)/;

    const str2 = infixEval(str, regex);

    return str === str2 ? str : highPrecedence(str2);
};

console.log(highPrecedence("5*3"))

const applyFunction = (str) => {
    const noHigh = highPrecedence(str);

    const infix = /([\d.]+)([+-])([\d.]+)/;

    const str2 = infixEval(noHigh, infix);

    const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;

    const toNumberList = (args) => args.split(",").map(parseFloat);

    const apply = (fn, args) =>
        //
        spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));

    return str2.replace(
        functionCall,
        (match, fn, args) =>
            spreadsheetFunctions.hasOwnProperty(fn.toLowerCase())
                ? apply(fn, args)
                : match
        // {}
    );
};
