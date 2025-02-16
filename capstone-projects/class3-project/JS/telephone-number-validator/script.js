/*
#00471b
#4d3800

The format is: 
(country code): 1

(area code): (555)  

(exchange code): 555

(subscriber number): 1234 

For example,1 (555) 555-1234. 



*/
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const getUserInput = (input) => {
    if (input === "") {
        alert("Please provide a phone number");

        return;
    }

    /*
        1 555-555-5555
        1 (555) 555-5555
        1(555)555-5555
        1 555 555 5555
        5555555555
        555-555-5555
        (555)555-5555

    */

    const countryCode = "^1?\\s?";
    const areaCode = "(\\(0-9\\){3})|[0-9]{3}";
    const spaceBtw = "\\s-?";
    const exchangeCode = "[0-9]{3}";
    const spaceBtw2 = "\\s-?";
    const subscriberNumber = "[0-9]{4}";

    const regexTest = `${countryCode}${areaCode}${spaceBtw}${exchangeCode}${spaceBtw2}${subscriberNumber}`;

    const testInput = regexTest.test(input);
    console.log(testInput);
};

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getUserInput(userInput.value);
    }
});

checkBtn.addEventListener("click", () => {
    getUserInput(userInput.value);
});

clearBtn.addEventListener("click", () => {
    console.log("clear btn");
});
