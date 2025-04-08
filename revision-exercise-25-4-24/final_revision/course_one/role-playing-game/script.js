// d experience,xp
let xp = 0;

// initial value of monster health
let health = 100;

// let gold = 50;
let gold = 1050;

// current weapon index
let currentWeapon = 0;

// monster index: wc monster r u fighting?
let fighting;

// initial monster health: 15, 60, 300
let monsterHealth;

// weapon collections
let inventory = ["stick"];

// btns
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// display text
const text = document.querySelector("#text");

// hidden elements
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// modem 09058603826

// provided weapons
const weapons = [
    // index: 0
    {
        name: "stick",
        power: 5,
    },

    // index: 1

    {
        name: "dagger",
        power: 30,
    },

    // index: 2
    {
        name: "claw hammer",
        power: 50,
    },

    // index: 3
    {
        name: "sword",
        power: 100,
    },
];

// dse r monsters but dragon is vip
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15,
    },

    {
        name: "fanged beast",
        level: 8,
        health: 60,
    },

    {
        name: "dragon",
        level: 20,
        health: 300,
    },
];

// locations
const locations = [
    // index: 0
    {
        name: "town square",

        "button text": ["Go to store", "Go to cave", "Fight dragon"],

        /*
            Initial version of the buttons:
            <div id="controls">
                <button id="button1">Go to store</button>
                <button id="button2">Go to cave</button>
                <button id="button3">Fight dragon</button>
            </div>
        */

        "button functions": [goStore, goCave, fightDragon],

        text: 'You are in the town square. You see a sign that says "Store".',
    },

    // index: 1
    {
        name: "store",

        "button text": [
            "Buy 10 health (10 gold)",
            "Buy weapon (30 gold)",
            "Go to town square",
        ],
        "button functions": [buyHealth, buyWeapon, goTown],

        text: "You enter the store.",
    },

    // index: 2
    {
        name: "cave",

        "button text": [
            "Fight slime",
            "Fight fanged beast",
            "Go to town square",
        ],
        "button functions": [fightSlime, fightBeast, goTown],

        text: "You enter the cave. You see some monsters.",
    },

    // index: 3
    {
        name: "fight",

        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],

        text: "You are fighting a monster.",
    },

    // index: 4
    {
        name: "kill monster",

        "button text": [
            "Go to town square",

            "Go to town square",
            "Go to town square",
        ],
        "button functions": [goTown, goTown, easterEgg],

        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    },

    // index: 5
    {
        name: "lose",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You die. &#x2620;",
    },

    // index: 6
    {
        name: "win",

        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],

        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    // index: 7
    {
        name: "easter egg",

        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],

        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
];

// btns fxns calls
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// update UI
function update(location) {
    // hidden elements
    monsterStats.style.display = "none";

    // btns text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // btns fxns calls
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}

/*
functions associated with btns

starting btns:
goStore, 
goCave, 
fightDragon,

On pressing Go to store(1st btn):
buyHealth, 
buyWeapon, 
goTown

On pressing Go to cave(2nd btn):
fightSlime, 
fightBeast, 
goTown

btns: fightSlime, fightBeast, fightDragon(3rd btn)
calls goFight() then attack(), dodge(), run/goTown():
attack, (calls defeatMonster, lose, winGame)
dodge, 
goTown


defeatMonster calls these:
goTown, 
goTown,
easterEgg,


win or lose:
restart, 
restart, 
restart, 


btn: easterEgg calls these:
pickTwo, 
pickEight, 
goTown,

*/

// =======================================

/*

starting btns:
goStore, 
goCave, 
fightDragon,

1st btn: Go to store
buyHealth, 
buyWeapon, 
goTown

*/

function goStore() {
    update(locations[1]);
}

/*
2nd btn: Go to cave
fightSlime, 
fightBeast, 
goTown
*/

function goCave() {
    update(locations[2]);
}

/*
returns us back to starting btns:
goStore, 
goCave, 
fightDragon,
*/

function goTown() {
    update(locations[0]);
}

/*
These (buyHealth(), buyWeapon())
are called by goStore().

buyWeapon() calls sellWeapon()

*/
function buyHealth() {
    if (gold >= 10) {
        // remove 10 golds 4rm gold & add 10 health to health
        gold -= 10;
        health += 10;

        // update d UI for both gold and health
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

/**
 *   currentWeapon        inventory.length    weapons.length - 1
 *    initial stage:
 *       0                     1                   3
 *
 *  ===============================
 *
 *    1st click:
 *       1                     2                   3
 *
 *    2nd click:
 *       2                     3                   3
 *
 *    3rd click:
 *       3                     4                    3
 *
 *    4th click:
 *       4  :(current = inventory.shift()Weapon
 * (3) < weapons.length - 1 (3): false)
 */

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;

            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;

            // weapon collections
            inventory.push(newWeapon);

            // console.log(currentWeapon, inventory.length);

            // update UI
            goldText.innerText = gold;

            // text.innerText = "You now have a " + newWeapon + ".";
            // text.innerText += " In your inventory you have: " + inventory;

            text.innerText = `You now have a ${newWeapon}. In your inventory you have: ${inventory}`;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        text.innerText = "You already have the most powerful weapon!";

        button2.innerText = "Sell weapon for 15 gold";

        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;

        let currentWeapon = inventory.shift();

        // update UI
        goldText.innerText = gold;
        text.innerText = `You sold a ${currentWeapon}. In your inventory you have ${inventory}`;
    } else {
        text.innerText = `Don't sell your only weapon!: ${inventory[0]}`;
    }
}

/*

2nd btn: Go to cave
fightSlime, 
fightBeast, 
goTown

btns: fightSlime, fightBeast, fightDragon(3rd btn),
attack, (calls defeatMonster, lose, winGame)
dodge, 
goTown

fightSlime(), fightBeast() calls attack(), dodge(),
and goTown()

fightDragon() calls attack(), dodge(), and goTown()

*/

function fightSlime() {
    // fight monster at index: 0 i.e slime
    fighting = 0;

    goFight();
}

function fightBeast() {
    // fight monster at index: 1 i.e beast
    fighting = 1;

    goFight();
}

function fightDragon() {
    // fight monster at index: 2 i.e dragon
    fighting = 2;

    goFight();
}

/*

goFight() is called in:
fightSlime()
fightBeast()
fightDragon()

and all dse calls: [attack, dodge, goTown]
*/

function goFight() {
    // locations[3]:  fxns: [attack, dodge, goTown]
    update(locations[3]);

    // get d health of d monster wc meant to reduce as fighting continue
    monsterHealth = monsters[fighting].health;

    // display hidden elemts: monsterStats, monsterName, monsterHealthText
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

/**
 
 * attack() calls:
 * getMonsterAttackValue(level)
 * isMonsterHit()
 * lose()
 * winGame()
 * defeatMonster()
 
 */
function attack() {
    text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}.`;

    /* reduce monster health: 15, 60, 300
    while levels r: 2, 8, 20 */
    health -= getMonsterAttackValue(monsters[fighting].level);

    if (isMonsterHit()) {
        console.log(isMonsterHit());
    }
    // console.log(health);
    healthText.innerText = health;
}

function getMonsterAttackValue(level) {
    /* hit, impact on monster depends substracting
       d product of random num & xp from 5 * level. 

       xp: increase only wn a monster is deafeated
    
       available monsters level: 2, 8, 20
    */
    const hit = level * 5 - Math.floor(Math.random() * xp);

    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    const randomNum = Math.random > 0.2;
    console.log(randomNum);

    return randomNum || health < 20;
}

function dodge() {}

function lose() {}

function winGame() {}

function defeatMonster() {}

/**

* restart() is called wn there is:
 * winGame()
 * lose()

*/
function restart() {}

/**
 * easterEgg() calls:
 * pickTwo()
 * pickEight()
 *  
 * while pick(guess) was d place holder for
 * pickTwo()
 * pickEight()
    
 */
function easterEgg() {}

function pickTwo() {}

function pickEight() {}

function pick(guess) {}
