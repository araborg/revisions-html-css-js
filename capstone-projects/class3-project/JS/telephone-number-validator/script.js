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

/*
[] denotes A CHARACTER class

() denotes a capturing GROUP

*/

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
  );

    */

    const countryCode = "^(1\\s?)?";

    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";

    const spaceBtw = "[\\s\\-]?";
    const exchangeCode = "[0-9]{3}";
    const spaceBtw2 = "[\\s\\-]?";
    const subscriberNumber = "[0-9]{4}$";

    const regex = new RegExp(
        `${countryCode}${areaCode}${spaceBtw}${exchangeCode}${spaceBtw2}${subscriberNumber}`
    );

    const testRegex = regex.test(input)
        ? (result.style.color = "#00471b")
        : (result.style.color = "#4d3800");
    console.log(testRegex);
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
    userInput.value = "";

    result.textContent = "";
});

/*

        const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`


    */
