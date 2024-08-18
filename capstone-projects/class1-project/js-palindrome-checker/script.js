const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

function check() {
    if (!textInput.value) {
        alert("Please input a value");
    } else {
        const reverseTextInput = textInput.reverse();
        console.log(reverseTextInput);
    }
}

btn.addEventListener("click", check);
