const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedValueFxn = (str) => {
    const regex = /[\\_\s,\|\|\(:\-\/\:)]/gi;

    return str.replace(regex, "");
};

console.log(formattedValueFxn("A"));
console.log(formattedValueFxn("eye"));
console.log(formattedValueFxn("_eye"));
console.log(formattedValueFxn("race car"));
console.log(formattedValueFxn("not a palindrome"));
console.log(formattedValueFxn("A man, a plan, a canal. Panama"));
console.log(formattedValueFxn("never odd or even"));
console.log(formattedValueFxn("nope"));
console.log(formattedValueFxn("almostomla"));
console.log(formattedValueFxn("My age is 0, 0 si ega ym"));
console.log(formattedValueFxn("1 eye for of 1 eye"));
console.log(formattedValueFxn("0_0 (: /- :) 0-0"));
console.log(formattedValueFxn("five|_/|four"));
console.log(formattedValueFxn("ar44ra"));
console.log(formattedValueFxn("ar4ra"));
console.log(formattedValueFxn("ar4r"));

const checkInputValue = () => {
    const inputValue = textInput.value;

    console.log(inputValue);

    const formattedValue = formattedValueFxn();

    if (!inputValue) {
        alert("Please input avalue.");
    } else {
        const reversedValue = inputValue.reverse();

        console.log(reversedValue);
    }
};

checkBtn.addEventListener("click", checkInputValue);
