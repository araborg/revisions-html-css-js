/*

return change to the customer based on:
the price of the item, 
the amount of cash provided by the customer
the amount of cash in the cash drawer. 

show different messages to the user in different 
scenarios, such as when:
customer provides too little cash or 
when the cash drawer doesn't have enough to issue 
the correct change.

Msg:
"Status: INSUFFICIENT_FUNDS": 
if cash-in-drawer is less than the change due, or 
if you cannot return the exact change.

"Status: CLOSED": 
if cash-in-drawer is equal to the change due.

"Status: OPEN": 
if cash-in-drawer is greater than the change due and 
you can return change, with the change due in coins 
and bills sorted in highest to lowest order.


*/

// the price of the item
// let price = 1.87;

// cash-in-drawer
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

const cashEl = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");

const changeDue = document.getElementById("change-due");

// let price = 1.87;
// let price = 19.5;
let price = 3.26;

let currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 20],
];

let cashValue;
let diff;

const getPrice = () => {
    cashValue = parseFloat(cashEl.value);

    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
    }

    if (cashValue === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
    }

    if (cashValue > price) {
        cid.forEach((item, index) => {
            const cashInDrawer = item[1];

            diff = cashValue - price;

            // console.log(cashInDrawer)
            if (diff <= cashInDrawer) {
                // console.log(cashInDrawer)
                changeDue.textContent += `Status: OPEN ${item[0]}: $${diff}`;
            }

            if (diff >= cashInDrawer) {
                console.log(cashInDrawer);
            }

            // else if (cashInDrawer >= cashValue) {
            //   console.log(cashInDrawer);
            //   console.log(cashValue);

            // }
        });

        currency.forEach((curr) => {
            // console.log(diff)
            // console.log(typeof curr[1])

            const reminder = diff % curr[1];
            // console.log(reminder)
        });
    }
};

purchaseBtn.addEventListener("click", getPrice);
