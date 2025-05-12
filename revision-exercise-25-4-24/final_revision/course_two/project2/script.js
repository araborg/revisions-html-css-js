const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const outputEl = document.getElementById("output");

const getInputValue = () => {
    let input = parseInt(numberInput.value);

    if (!numberInput.value) {
        outputEl.textContent = "Please enter a valid number";
    } else if (input < 0) {
        output.textContent = "Please enter a number greater than or equal to 1"; // //
    } else if (input >= 4000) {
        outputEl.textContent =
            "Please enter a number less than or equal to 3999";
    } else {
        outputEl.textContent = convertToRoman(input);
    }
};

const convertToRoman = (input) => {
    const romans = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let output = [];

    romans.forEach((data) => {
        while (input >= data[1]) {
            output.push(data[0]);

            input = input - data[1];
        }
    });

    return output.join("");
};

convertBtn.addEventListener("click", getInputValue);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getInputValue();
    }
});
