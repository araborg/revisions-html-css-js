const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const removeSpace = (str) => {
    // const regex = /([\s*\-*[()]#&a-z"!?])/gi;
    const regex = /[\s-]/gi;

    return str.replace(regex, "");
};

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

checkBtn.addEventListener("click", () => {
    const input = removeSpace(userInput.value);
    const outcome = input.split("");
    console.log(outcome, outcome.length);

    // const parseNum = parseInt(removeSpace(userInput.value));
    // console.log(parseNum);
    // console.log(removeSpace(userInput.value));

    // if (!userInput.value || isNaN(parseNum)) {
    //     // if (!userInput.value) {
    //     alert("Please provide a phone number");
    // } else {
    //     const outcome = removeSpace(userInput.value);

    //     let displayText;

    //     if (
    //         outcome.length >= 10 &&
    //         (outcome[0] === "1" || outcome[0] === "5")
    //     ) {
    //         displayText = `Valid US number:  ${userInput.value}`;
    //     } else {
    //         displayText = `Invalid US number:  ${userInput.value}`;
    //     }

    //     result.textContent = displayText;
    // }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";

    result.textContent = "";
});
