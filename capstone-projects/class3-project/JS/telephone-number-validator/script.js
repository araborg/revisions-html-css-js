const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidNumber = (input) => {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    /*
        5555555555          
        555-555-5555        
        1 555-555-5555      
        1 555 555 5555      
        (555)555-5555       
        1 (555) 555-5555    
        1(555)555-5555      
        1 (555) 555-5555    

        Landline Number: 00-1-703-555-1234
 
        00 - Exit code (when calling from UK)
        1 - US country code
        703 - Area code
        555 - Exchange code
        1234 - Subscriber’s landline number
    */

    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const spacesDashes = "[\\s\\-]?";
    const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";

    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement("p");
    pTag.className = "results-text";

    phoneRegex.test(input)
        ? (pTag.style.color = "#00471b")
        : (pTag.style.color = "#4d3800");

    pTag.appendChild(
        document.createTextNode(
            `${
                phoneRegex.test(input) ? "Valid" : "Invalid"
            } US number: ${input}`
        )
    );

    resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);

    userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkValidNumber(userInput.value);

        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});

/*
    Valid US number:    Length:      Spaces:    Hyphen:            
    5555555555          // 10           0       0
    555-555-5555        // 10           0       2
    1 555-555-5555      // 11           1       2
    1 555 555 5555      // 11           3       0
    1 456 789 4444      // 11           3       0
    (555)555-5555       // 12           0       1
    1 (555) 555-5555    // 13           2       1
    1(555)555-5555      // 13           0       1
    1 (555) 555-5555    // 13           2       1

    factors to be considered:
    Length
    


    Invalid US number:
    555-5555            // 7            0       1
    55555555            // 8            0       0
    55 55-55-555-5      // 10           1       3
    2 757 622-7382      // 11           2       1
    27576227382         // 11           0       0
    555)-555-5555       // 11           0       2
    (555-555-5555       // 11           0       2
    1 555)555-5555      // 12           1       1
    (6054756961)        // 12           0       0
    11 555-555-5555     // 12           1       2
    2 (757) 622-7382    // 13           2       1
    123**&!!asdf#       // 13           0       0
    0 (757) 622-7382    // 13           2       1
    -1 (757) 622-7382   // 13           2       1
    (275)76227382       // 13           0       0
    2(757)6227382       // 13           0       0
    2(757)622-7382      // 13           0       1
    10 (757) 622-7382   // 14           2       1
    (555)5(55?)-5555    // 15           0       1
*/
