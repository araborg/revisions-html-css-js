const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

/*
input values:
A
eye
_eye
race car
A man, a plan, a canal. Panama
never odd or even
My age is 0, 0 si ega ym.
0_0 (: /-\ :) 0-0




*/

const removeUnwantedChar = (str) => {
    const regex = /[_\:\-\(\/\)\|,.\s]/gi;

    // console.log(str.replace(regex, ""));

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
        // console.log(inputValue);
        const reverseTextInput = inputValue.split("").reverse().join("");
        // console.log(reverseTextInput === inputValue);

        if (reverseTextInput === inputValue) {
            result.textContent = `${textInputValue} is a palindrome.`;
        } else {
            result.textContent = `${textInputValue} is not a palindrome.`;
        }
    }

    textInput.value = "";
}

btn.addEventListener("click", check);
