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

// logic
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

    /*
        1. Identify the Change Amount:
        Determine the total amount of change that needs to be 
        given.

        let changeDue = cashInCents - priceInCents;
    */

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

    // e.g: totalCID = 33541 and changeDue = 33541
    if (totalCID === changeDue) {
        result.status = "CLOSED";
    }

    /*
        2. Start with the Largest Denomination:
        Begin with the largest denomination of currency 
        (e.g., 100 Naira note, 1000 Naira note) that is less 
        than or equal to the change amount.

        if (changeDue >= denominations[i] && changeDue > 0) {
            const [denominationName, total] = reversedCid[i];

            const possibleChange = Math.min(total, changeDue);
        }


        3. Subtract and Repeat:
        Subtract the value of that denomination from the change 
        amount and repeat the process with the next smaller 
        denomination.

        for (let i = 0; i <= reversedCid.length; i++) {
            if (changeDue >= denominations[i] && changeDue > 0) {
                const count = Math.floor(possibleChange / denominations[i]);

                const amountInChange = count * denominations[i];

                changeDue -= amountInChange;

                if (count > 0) {
                    result.change.push([denominationName, amountInChange / 100]);
                }
            }
        }


        4. Example:
        If the change is 127 Naira, you'd start with a 100 Naira 
        note, leaving 27 Naira. Then you'd use a 20 Naira note, 
        leaving 7 Naira. Finally, you'd give 5 Naira and 2 Naira, 
        totaling 127 Naira.

    */

    // Using price: 3.26 and cash: 20
    for (let i = 0; i <= reversedCid.length; i++) {
        if (changeDue >= denominations[i] && changeDue > 0) {
            console.log(
                `changeDue: ${changeDue}`,
                `denominations[i]: ${denominations[i]}`,
                `reversedCid[i]: ${reversedCid[i]}`
            );

            const [denominationName, total] = reversedCid[i];
            console.log(
                `denominationName: ${denominationName}`,
                `total: ${total}`
            );

            const possibleChange = Math.min(total, changeDue);
            console.log(
                `possibleChange: ${possibleChange}`,
                `total: ${total}`,
                `changeDue: ${changeDue}`
            );

            const count = Math.floor(possibleChange / denominations[i]);
            console.log(
                `possibleChange: ${possibleChange}`,
                `denominations[i]: ${denominations[i]}`,
                `count: ${count}`
            );

            const amountInChange = count * denominations[i];
            console.log(`amountInChange: ${amountInChange}`);

            changeDue -= amountInChange;
            console.log(`changeDue: ${changeDue}`);

            if (count > 0) {
                result.change.push([denominationName, amountInChange / 100]);
            }
        }

        console.log(`result.change: ${result.change}`);
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

/*
    Status: OPEN
    TEN: $10
    FIVE: $5
    ONE: $1
    QUARTER: $0.5
    DIME: $0.2
    PENNY: $0.04

2script.js:161 result.change: 
script.js:124 changeDue: 1674 denominations[i]: 1000 reversedCid[i]: TEN,2000
script.js:131 denominationName: TEN total: 2000
script.js:137 possibleChange: 1674 total: 2000 changeDue: 1674
script.js:144 possibleChange: 1674 denominations[i]: 1000 count: 1
script.js:151 amountInChange: 1000
script.js:154 changeDue: 674
script.js:161 result.change: TEN,10
script.js:124 changeDue: 674 denominations[i]: 500 reversedCid[i]: FIVE,5500
script.js:131 denominationName: FIVE total: 5500
script.js:137 possibleChange: 674 total: 5500 changeDue: 674
script.js:144 possibleChange: 674 denominations[i]: 500 count: 1
script.js:151 amountInChange: 500
script.js:154 changeDue: 174
script.js:161 result.change: TEN,10,FIVE,5
script.js:124 changeDue: 174 denominations[i]: 100 reversedCid[i]: ONE,9000
script.js:131 denominationName: ONE total: 9000
script.js:137 possibleChange: 174 total: 9000 changeDue: 174
script.js:144 possibleChange: 174 denominations[i]: 100 count: 1
script.js:151 amountInChange: 100
script.js:154 changeDue: 74
script.js:161 result.change: TEN,10,FIVE,5,ONE,1
script.js:124 changeDue: 74 denominations[i]: 25 reversedCid[i]: QUARTER,425
script.js:131 denominationName: QUARTER total: 425
script.js:137 possibleChange: 74 total: 425 changeDue: 74
script.js:144 possibleChange: 74 denominations[i]: 25 count: 2
script.js:151 amountInChange: 50
script.js:154 changeDue: 24
script.js:161 result.change: TEN,10,FIVE,5,ONE,1,QUARTER,0.5
script.js:124 changeDue: 24 denominations[i]: 10 reversedCid[i]: DIME,310
script.js:131 denominationName: DIME total: 310
script.js:137 possibleChange: 24 total: 310 changeDue: 24
script.js:144 possibleChange: 24 denominations[i]: 10 count: 2
script.js:151 amountInChange: 20
script.js:154 changeDue: 4
2script.js:161 result.change: TEN,10,FIVE,5,ONE,1,QUARTER,0.5,DIME,0.2
script.js:124 changeDue: 4 denominations[i]: 1 reversedCid[i]: PENNY,101
script.js:131 denominationName: PENNY total: 101
script.js:137 possibleChange: 4 total: 101 changeDue: 4
script.js:144 possibleChange: 4 denominations[i]: 1 count: 4
script.js:151 amountInChange: 4
script.js:154 changeDue: 0
2script.js:161 result.change: TEN,10,FIVE,5,ONE,1,QUARTER,0.5,DIME,0.2,PENNY,0.04


*/
