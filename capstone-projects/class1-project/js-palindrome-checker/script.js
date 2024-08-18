const textInput = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

function check() {
    if (!textInput.value) {
        alert("Please input a value");
    }
    console.log(textInput.value);
}

btn.addEventListener("click", check);
