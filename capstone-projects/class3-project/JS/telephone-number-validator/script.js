const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const removeSpace = (str) => {
    const regex = /([\s*-*#&a-z"!()])/gi;

    return str.replace(regex, "");
};

checkBtn.addEventListener("click", () => {
    const parseNum = removeSpace(parseInt(userInput.value));
    console.log(parseNum);

    if (!userInput.value || isNaN(parseNum)) {
        alert("Please provide a phone number");
    } else {
        const outcome = removeSpace(userInput.value);
        console.log(outcome);

        result.textContent = userInput.value;
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";

    result.textContent = "";
});
