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
    const sample = ["Taye", "Kehinde", "Idowu", "Alaba", "Idogbe"];
    sample.forEach(createLabel);

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
