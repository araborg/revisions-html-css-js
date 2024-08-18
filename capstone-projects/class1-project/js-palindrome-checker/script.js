const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

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


==================
not a palindrome
nope
almostomla
1 eye for of 1 eye.
five|\_/|four

*/

const removeUnwantedChar = (str) => {
    const regex = /[_,.\s]/gi;
    console.log(str.replace(regex, ""));
};

removeUnwantedChar("A man, a plan, a canal. Panama");
// console.log();

/*
function check() {
    const textInputValue = textInput.value;
    console.log(textInputValue);

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = textInputValue.split("").reverse().join(" ");
        console.log(reverseTextInput);
    }
}

btn.addEventListener("click", check);
*/
