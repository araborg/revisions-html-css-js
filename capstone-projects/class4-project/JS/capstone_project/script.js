let price = 3.26;

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

const displayChangeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");

const purchaseBtn = document.getElementById("purchase-btn");

const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

const checkResults = () => {
    if (!cash.value) {
        return;
    }

    checkCashRegister();
};

purchaseBtn.addEventListener("click", checkResults);

cash.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkResults();
    }
});

const checkCashRegister = () => {
    const cashinCents = Math.round(Number(cash.value) * 100);
    const priceInCents = Math.round(price * 100);

    if (cashinCents < priceInCents) {
        alert("Customer does not have enough money to purchase the item");

        cash.value = "";

        return;
    }

    if (cashinCents === priceInCents) {
        displayChangeDue.innerHTML = `
            <p>
                No change due - customer paid with exact cash
            </p>
        `;

        cash.value = ``;

        return;
    }

    let changeDue = cashinCents - priceInCents;

    const reversedCid = [...cid]
        .reverse()
        .map(([denominationName, amount]) => [
            denominationName,
            Math.round(amount * 100),
        ]);

    const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

    const result = {
        status: "OPEN",
        change: [],
    };

    const totalCID = reversedCid.reduce(
        (prev, [denominationName, amount]) => prev + amount,
        0
    );

    if (totalCID < changeDue) {
        displayChangeDue.innerHTML = `
            <p>
                Status: INSUFFICIENT_FUNDS
            </p>
        `;

        return;
    }

    if (totalCID === changeDue) {
        result.status = "CLOSED";
    }

    for (let i = 0; i <= reversedCid.length; i++) {
        if (changeDue >= denominations[i] && changeDue > 0) {
            const [denominationName, amount] = reversedCid[i];

            const possibleChange = Math.min(amount, changeDue);

            console.log(total);
        }
    }
};
