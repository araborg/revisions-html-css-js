const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const outputEl = document.getElementById("output");

const convertToRoman = () => {
    let input = parseInt(numberInput.value);

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
        console.log(input);
        // console.log(data[1]);

        while (input >= data[1]) {
            output.push(data[0]);

            input = input - data[1];
        }
    });

    outputEl.textContent = output.join();

    // console.log(romans);
};

convertBtn.addEventListener("click", convertToRoman);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertToRoman();
    }
});
