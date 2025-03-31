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

/* selected element*/
const cashEl = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

// logic
const checkCashRegister = () => {
    const cashInCents = Math.round(Number(cash.value) * 100);
    const priceInCents = Math.round(price * 100);

    if (cashInCents < priceInCents) {
        alert("Customer does not have enough money to purchase the item");
        cash.value = "";
        return;
    }

    if (cashInCents === priceInCents) {
        displayChangeDue.innerHTML =
            "<p>No change due - customer paid with exact cash</p>";
        cash.value = "";
        return;
    }
};
