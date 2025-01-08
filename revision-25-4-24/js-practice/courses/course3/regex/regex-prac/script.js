const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageBtn = document.getElementById("check-message-btn");

// console.log(messageInput, result, checkMessageBtn);
/*
1. case-insensitive: i

2. alternate sequence: |

3. character class: []

4. one or more occurence: + 

5. capture group: ()

6. non-capturing group: (?:)

7. optional: ?

8. spaces, tabs, and line breaks: \s

9. beginning: ^  

10. end: $ 

helpRegex: please help or assist me
dollarRegex: num hundred thousand million billion
freeRegex: free money
stockRegex: stock alert
dearRegex:
denyList
*/

const helpRegex = /please help|assist me/i;

const dollarRegex = //
    /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

const freeRegex = //
    /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

const stockRegex = //
    /(?:\s|^)[s5][t7][0o][c{[(]k [a@4]l[e3]rt(?:\s|$)/i;

const dearRegex = //
    /(?:^|\s)d[e3][a@4]r fr[i1][e3]nd(?:$|\s)/i;
// /d[e3][a@4]r fr[i1][e3]nd/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// .match() was called on d parameter
// const isSpam = (msg) => msg.match(helpRegex);

// .test() was called on d regexp
// const isSpam = (msg) => helpRegex.test(msg);
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageBtn.addEventListener("click", () => {
    if (!messageInput.value) {
        alert("Please enter a message..");

        return;
    }

    console.log(isSpam(messageInput.value));

    result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message.."
        : "This message does not seem to contain any spam.";

    messageInput.value = "";
});
