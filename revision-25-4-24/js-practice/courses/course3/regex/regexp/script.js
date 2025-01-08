const msgInput = document.getElementById("message-input");
const checkBtn = document.getElementById("check-message-btn");
const result = document.getElementById("result");

const helpRegex = /pl[e3][a4][s5][e3] h[e3][l1]p|assist me/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
const freeRegex = /(?:^|\s)[7f]r[3e][e3] m[o0]n[e3]y(?:$|\s)/;

const stockRegex = /[s5]t[o0][c{([]k [a@][l1][e3]rt/;
const dearRegex = /(?:^|\s)dear friend(?:$|\s)/;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

const checkSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkBtn.addEventListener("click", () => {
    if (!msgInput.value) {
        alert("Please enter a message..");

        return;
    }

    console.log(checkSpam(msgInput.value));

    result.textContent = checkSpam(msgInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
});

/*
helpRegex: please help or assist me
dollarRegex: num hundred thousand million billion
freeRegex: free money
stockRegex: stock alert
dearRegex: dear friend
denyList: []
*/
