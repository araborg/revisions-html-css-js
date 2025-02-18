/*
[] denotes A CHARACTER class

() denotes a capturing GROUP


#00471b
#4d3800

The format is: 
(country code): 1

(area code): (555)  

(exchange code): 555

(subscriber number): 1234 

For example,1 (555) 555-1234. 


    1 555-555-5555
    1 (555) 555-5555
    1(555)555-5555
    1 555 555 5555
    5555555555
    555-555-5555
    (555)555-5555

*/

const getUserInput = (input) => {
    if (input === "") {
        alert("Please provide a phone number");

        return;
    }

    const paraElement = document.createElement("p");

    const testRegex = regex.test(input)
        ? (paraElement.style.color = "#00471b")
        : (paraElement.style.color = "#4d3800");

    const createText = document.createTextNode(
        `${regex.test(input) ? "Valid" : "Invalid"} US number: ${input}`
    );

    paraElement.appendChild(createText);

    result.textContent = paraElement;
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
