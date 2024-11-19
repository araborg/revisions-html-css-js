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

const decimatToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const reminders = [];

    while (input > 0) {
        const quotient = Math.floor(input / 2);

        const reminder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        reminders.push(reminder);

        input = quotient;
    }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});
