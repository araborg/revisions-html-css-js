const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

const removeUnwantedChar = (str) => {
    const regex = /[\_\:\-\(\/\\)\|,.\s]/gi;

    return str.replace(regex, "");
};

function check() {
    const textInputValue = textInput.value;
    const inputValue = removeUnwantedChar(textInputValue).toLowerCase();

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = inputValue.split("").reverse().join("");

        if (reverseTextInput === inputValue) {
            const span = `<span class="bold">${textInputValue}</span> is a palindrome.`;

            result.innerHTML += span;
        } else {
            const span = `<span class="bold">${textInputValue}</span> is not a palindrome.`;

            result.innerHTML += span;
        }
    }

    textInput.value = "";
}

btn.addEventListener("click", check);
