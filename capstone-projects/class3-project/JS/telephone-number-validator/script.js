/*
[] denotes A CHARACTER class

() denotes a capturing GROUP
*/

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkInput = (input) => {
    // || isNaN(parseInt(input))

    if (userInput.value === "") {
        alert("Please provide a phone number");

        return;
    }

    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const areaCodeSpace = "[\\s\\-]?";
    const exchangeCode = "[0-9]{3}";
    const exchangeCodeSpace = "[\\s\\-]?";
    const subscriberNumber = "[0-9]{4}$";

    const regex = new RegExp(
        `${countryCode}${areaCode}${areaCodeSpace}${exchangeCode}${exchangeCodeSpace}${subscriberNumber}`
    );

    const createParagraph = document.createElement("p");
    createParagraph.className = "results-text";

    const test = regex.test(input)
        ? (createParagraph.style.color = "#00471b")
        : (createParagraph.style.color = "#4d3800");

    const textNode = document.createTextNode(
        `${regex.test(input) ? "Valid" : "Invalid"}  US number: ${input}`
    );

    createParagraph.appendChild(textNode);

    result.appendChild(createParagraph);
};

checkBtn.addEventListener("click", () => {
    checkInput(userInput.value);

    userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput(userInput.value);

        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
});
