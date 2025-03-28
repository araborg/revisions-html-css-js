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



*/

// the price of the item
let price = 1.87;

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
