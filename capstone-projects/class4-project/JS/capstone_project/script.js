// let price = 3.26;
let price = 19.5;

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
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
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
        changeDue.innerHTML =
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
        displayChangeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
        return;
    }

    // e.g: totalCID = 33541 and changeDue = 33541
    if (totalCID === changeDue) {
        result.status = "CLOSED";
    }

    for (let i = 0; i <= reversedCid.length; i++) {
        if (changeDue >= denominations[i] && changeDue > 0) {
            const [denominationName, total] = reversedCid[i];

            const possibleChange = Math.min(total, changeDue);

            const count = Math.floor(possibleChange / denominations[i]);

            const amountInChange = count * denominations[i];

            changeDue -= amountInChange;

            if (count > 0) {
                result.change.push([denominationName, amountInChange / 100]);
            }
        }
    }

    updateUI(result.change);
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

    // ?????????
    // Update cid if change is passed in
    if (change) {
        change.forEach(([changeDenomination, changeAmount]) => {
            console.log(change);
            const targetArr = cid.find(
                ([denominationName]) => denominationName === changeDenomination
            );

            targetArr[1] =
                (Math.round(targetArr[1] * 100) -
                    Math.round(changeAmount * 100)) /
                100;
        });
    }

    cash.value = "";
    // priceScreen.textContent = `Total: $${price}`;
    cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    
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
