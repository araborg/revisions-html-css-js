const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

const removeUnwantedChar = (str) => {
    const regex = /[_\:\-\(\/\)\|,.\s]/gi;

    return str.replace(regex, "");
};

// removeUnwantedChar("A");
// removeUnwantedChar("eye");
// removeUnwantedChar("_eye");
// removeUnwantedChar("A man, a plan, a canal. Panama");
// removeUnwantedChar("never odd or even");
// removeUnwantedChar("My age is 0, 0 si ega ym.");

// removeUnwantedChar("0_0 (: /- :) 0-0");
// console.log();

// removeUnwantedChar("not a palindrome");
// removeUnwantedChar("nope");
// removeUnwantedChar("almostomla");
// removeUnwantedChar("1 eye for of 1 eye.");
// removeUnwantedChar("five|_/|four");

function check() {
    const textInputValue = textInput.value;
    const inputValue = removeUnwantedChar(textInputValue).toLowerCase();

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = inputValue.split("").reverse().join("");

        if (reverseTextInput === inputValue) {
            result.innerHTML = `<span class="bold">${textInputValue}</span> is a palindrome.`;
        } else {
            result.textContent = `<span class="bold">${textInputValue}</span> is not a palindrome.`;
        }
    }

    textInput.value = "";
}

btn.addEventListener("click", check);
