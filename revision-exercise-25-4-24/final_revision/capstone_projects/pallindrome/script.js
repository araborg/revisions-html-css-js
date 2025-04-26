const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const formattedValue = (str) => {
    const regex = /[\\_\s\(:)]/gi;
};

const checkInputValue = () => {
    const inputValue = textInput.value;

    console.log(inputValue);

    // const formattedValue

    if (!inputValue) {
        alert("Please input avalue.");
    } else {
        const reversedValue = inputValue.reverse();

        console.log(reversedValue);
    }
};

checkBtn.addEventListener("click", checkInputValue);
