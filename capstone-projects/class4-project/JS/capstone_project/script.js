let price = 3.26;
// let price = 19.5;

let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];

/* selected element*/
const cashEl = document.getElementById("cash");
const changeDueDisplay = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

// logic: Using price: 3.26 and cash: 20 changeDue: 1674
const cashRegister = () => {
    const cashInCents = Math.round(Number(cash.value) * 100);
    const priceInCents = Math.round(price * 100);

    if (cashInCents < priceInCents) {
        alert("Customer does not have enough money to purchase the item");

        cash.value = "";

        return;
    }

    if (cashInCents === priceInCents) {
        changeDueDisplay.innerHTML =
            "<p>No change due - customer paid with exact cash</p>";

        cash.value = "";

        return;
    }

    // needed variables:
    let changeDue = cashInCents - priceInCents;
    const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    const result = { status: "OPEN", change: [] };

    const reversedCid = [...cid] // adds the key-value pairs to the object being created.
        .reverse()
        .map(([denominationName, amount]) => [
            denominationName,
            Math.round(amount * 100),
        ]);

    const totalCID = reversedCid.reduce(
        (prev, [_, amount]) => prev + amount,
        0
    ); // 33541

    if (totalCID < changeDue) {
        changeDueDisplay.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";

        return;
    }

    // e.g: if totalCID = 33541 and changeDue = 33541
    if (totalCID === changeDue) {
        result.status = "CLOSED";
    }

    // 1. itierate through d reversedCid array. d loop will go 10 times (0 - 9)
    for (let i = 0; i <= reversedCid.length; i++) {
        //

        // 2. compare changeDue with denominations[i] and it must be greater than 0
        if (changeDue >= denominations[i] && changeDue > 0) {
            // console.log(
            //     `changeDue: ${changeDue}`,
            //     `denominations[i]: ${denominations[i]}`,
            //     `index, i: ${i}`
            // );

            // 3. use d iteratn index to select d cid array elemt and destructure it
            const [denominationName, amount] = reversedCid[i];
            // console.log(
            //     `denominationName: ${denominationName}`,
            //     `amount: ${amount}`,
            //     `reversedCid[i]: ${reversedCid[i]}`
            // );

            // 4. choose d lowest value btw d amount with d changeDue as d possibleChange
            // e.g: possibleChange = 1674, amount = 2000, changeDue = 1674
            // e.g: possibleChange = 674, amount = 5500, changeDue = 674
            const possibleChange = Math.min(amount, changeDue);
            // console.log(
            //     `possibleChange: ${possibleChange}`,
            //     `amount: ${amount}`,
            //     `changeDue: ${changeDue}`
            // );

            // 5. How many of d denominations[i] can be used to make up d possibleChange?
            // e.g: possibleChange = 1674, denominations[i] = 1000, count = 1
            // e.g: possibleChange = 674, denominations[i] = 500, count = 1
            // e.g: possibleChange = 174, denominations[i] = 100, count = 1
            // e.g: possibleChange = 74, denominations[i] = 25, count = 2
            // e.g: possibleChange = 24, denominations[i] = 10, count = 2
            // e.g: possibleChange = 4, denominations[i] = 1, count = 4
            const count = Math.floor(possibleChange / denominations[i]);
            // console.log(
            //     `possibleChange: ${possibleChange}`,
            //     `denominations[i]: ${denominations[i]}`,
            //     `count: ${count}`
            // );

            // 6. With count known, what is the closest change to d amount?
            const amountInChange = count * denominations[i];
            // console.log(`amountInChange: ${amountInChange}`);

            // 7. remove ds total amt of change from initial changeDue to get a new changeDue
            changeDue -= amountInChange;
            // console.log(`changeDue: ${changeDue}`);

            // console.log(`count: ${count}`);
            if (count > 0) {
                // 8. If count > 0, push d initial decimal amount and denominationName into empty result.change array
                result.change.push([denominationName, amountInChange / 100]);
            }
        }
    }

    // changeDue is expected to be 0 after it's passed via d for loop
    if (changeDue > 0) {
        displayChangeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";

        return;
    }

    showResult(result.status, result.change);
    updateUI(result.change);
};

const showResult = (status, change) => {
    changeDueDisplay.innerHTML = `
        <p>
            Status: ${status}
        </p>
    `;

    changeDueDisplay.innerHTML += change
        .map(
            ([denominationName, amt]) => `
                <p>
                    ${denominationName}: $${amt}
                </p>
            `
        )
        .join("");
};

const updateUI = (change) => {
    const currencyNames = {
        PENNY: "Pennies",
        NICKEL: "Nickels",
        DIME: "Dimes",
        QUARTER: "Quarters",
        ONE: "Ones",
        FIVE: "Fives",
        TEN: "Tens",
        TWENTY: "Twenties",
        "ONE HUNDRED": "Hundreds",
    };

    /*
        Pennies: $1.01
        Nickels: $2.05
        Dimes: $3.1
        Quarters: $4.25
        Ones: $90
        Fives: $55
        Tens: $20
        Twenties: $60
        Hundreds: $100
    */

    // Update cid if change is passed in
    if (change) {
        // find d cid array dt correspond with change and update d diff in amount
        change.forEach(([changeDenomination, changeAmount]) => {
            // using change to find cid dt correlate
            const targetArr = cid.find(
                ([denominationName]) => denominationName === changeDenomination
            );

            // substract change from cid amount and modify ds value as d new amt for cid
            // ds returns d remaining amt after changeDue has been removed
            targetArr[1] =
                (Math.round(targetArr[1] * 100) -
                    Math.round(changeAmount * 100)) /
                100;
        });
    }

    cash.value = "";

    // priceScreen.textContent = `Total: $${price}`;

    // show d UI update in cashDrawerDisplay
    cashDrawerDisplay.innerHTML = `
            <p><strong>Change in drawer:</strong></p>

            ${cid
                .map(
                    ([denominationName, amount]) =>
                        `<p>${currencyNames[denominationName]}: $${amount}</p>`
                )
                .join("")}
      `;
};

const checkResults = () => {
    if (!cash.value) {
        return;
    }

    cashRegister();
};

// eventListeners
purchaseBtn.addEventListener("click", checkResults);

cash.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkResults();
    }
});
