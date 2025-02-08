const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const removeSpace = (str) => {
    // const regex = /([\s*\-*#&a-z"!()?])/gi;
    const regex = /([\s*-])/gi;

    return str.replace(regex, "");
};

checkBtn.addEventListener("click", () => {
    const parseNum = parseInt(removeSpace(userInput.value));
    // console.log(parseNum);

    // if (!userInput.value || isNaN(parseNum)) {
    if (!userInput.value) {
        alert("Please provide a phone number");
    } else {
        const outcome = removeSpace(userInput.value);
        console.log(outcome.length);

        // console.log(typeof outcome[0]);

        let displayText;

        if (
            outcome.length >= 10 &&
            (outcome[0] === "1" || outcome[0] === "5")
        ) {
            displayText = `Valid US number:  ${userInput.value}`;
        } else {
            displayText = `Invalid US number:  ${userInput.value}`;
        }

        result.textContent = displayText;
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";

    result.textContent = "";
});
