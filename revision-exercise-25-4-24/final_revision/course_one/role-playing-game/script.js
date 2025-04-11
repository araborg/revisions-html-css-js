/*

// levels r: 2, 8, 20,
// d experience, xp += monsters[fighting].level;
let xp = 0;

// initial value of player's health
let playerHealth = 100;

// initial gold value
let gold = 1050;

// current weapon index: wc new weapon did u buy?
let currentWeapon = 0;

// monster index: wc monster r u fighting?
let fighting;

// initial monster health: 15, 60, 300
let monsterHealth;

// weapon collections with index: 0 and length: 1
let inventory = ["stick"];

// btns
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// text for player's: xp, health and gold
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

// hidden elements
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// display text e.g: Welcome to Dragon Repeller.....
const text = document.querySelector("#text");

// provided (4) weapons with: name, power
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

// dse r (3) monsters with: name, level, health but dragon is vip
const monsters = [
    // index: 0
    {
        name: "slime",
        level: 2,
        health: 15,
    },

    // index: 1
    {
        name: "fanged beast",
        level: 8,
        health: 60,
    },

    // index: 2
    {
        name: "dragon",
        level: 20,
        health: 300,
    },
];

/*
    Initial version of the buttons just like in location[0]:

    <div id="controls">
        <button id="button1"> Go to store </button>
        <button id="button2"> Go to cave </button>
        <button id="button3"> Fight dragon </button>
    </div>


// locations: what to display and what to do wn a btn is pressed.
const locations = [
    // index: 0
    {
        name: "town square",

        "button text": ["Go to store", "Go to cave", "Fight dragon"],
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

// N.B: .onclick() method:

// btns fxns calls: dse fxns will be called wn d btns r clicked
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// update UI: we only need from d locations: button texts/fxns
function update(location) {

    // hidden elements: ds is needed wn a player ran from a monster
    // d hidden elements needs to be hidden after being revealed.
    monsterStats.style.display = "none";

    // btns text using bracket notation
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // btns fxns calls using bracket notation
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}

/*
functions associated with btns:

starting btns:
goStore, 
goCave, 
fightDragon,



On pressing, "Go to store", goStore() (1st btn), 
ds btns showed with associated text:

buyHealth(), Buy 10 health (10 gold) 
buyWeapon(), Buy weapon (30 gold) 
goTown(), Go to town square



On pressing "Go to cave", goCave() (2nd btn)
ds btns showed with associated text:

fightSlime(), Fight slime 
fightBeast(), Fight fanged beast   
goTown(), Go to town square



btns: fightSlime, fightBeast, fightDragon(3rd btn)
calls goFight() wc diplays: 
attack(), Attack
dodge(), Dodge
goTown(), Run:

Attack, (calls lose(), winGame(), defeatMonster())
Dodge calls dodge(), 
Run calls goTown()


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


N.B: goTown() text can either be 
"Go to town square" or Run



// =======================================

// Go to store btn
function goStore() {
    update(locations[1]);
}

// Go to cave btn
function goCave() {
    update(locations[2]);
}

// Go to town square / Run
function goTown() {
    update(locations[0]);
}

function buyHealth() {
    // if gold >= 10
    if (gold >= 10) {
        // remove 10 golds 4rm player's gold & add 10 health to player's health
        gold -= 10;
        playerHealth += 10;

        // update d UI for both player's gold and health
        goldText.innerText = gold;
        healthText.innerText = playerHealth;

        //
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

/* 

    currentWeapon only increase after each click. 
    i.e. click b4 increase in currentWeapon. 
    
    Only 3 clicks r allowed b4 currentWeapon === 3 
    and 3 weaons r expected to be added to inventory
    to mk a total of 4 weapons.


    initial value of currentWeapon: 0

    true:
    1st click: currentWeapon = 0 (0 < 3)
    2nd click: currentWeapon = 1 (1 < 3)
    3rd click: currentWeapon = 2 (2 < 3)

    false:
    4th click: currentWeapon = 3 (3 < 3)
    


function buyWeapon() {
    // if currentWeapon[0, 1, 2] < weapons.length(3)
    if (currentWeapon < weapons.length - 1) {
        // if gold >= 30
        if (gold >= 30) {
            gold -= 30;

            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;

            // weapon collections increases
            inventory.push(newWeapon);

            // update UI
            goldText.innerText = gold;
            text.innerText = `You now have a ${newWeapon}. In your inventory you have: ${inventory}`;

            //
        } else {
            // if gold < 30

            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        // if currentWeapon === 3

        // update UI
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";

        // change d fxn of button2 wn d condition in if statemt is met
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    // d inventory (weapon collection) must av atleast 1 weapon.
    if (inventory.length > 1) {
        // for 1 weapon add 15 golds
        gold += 15;

        // remove weapon from d front i.e index[0]
        let soldWeapon = inventory.shift();

        // update UI
        goldText.innerText = gold;
        text.innerText = `You sold a ${soldWeapon}. In your inventory you have ${inventory}`;
    } else {
        text.innerText = `Don't sell your only weapon!: ${inventory[0]}`;
    }
}

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

// goFight(): only update d UI
function goFight() {
    // locations[3]:  fxns: attack(), dodge(), goTown()
    update(locations[3]);

    // display hidden elemts: monsterStats
    monsterStats.style.display = "block";

    // get d health of d monster wc meant to reduce as fighting continue
    monsterHealth = monsters[fighting].health;

    // update UI: monsterName, monsterHealthText
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
 


function attack() {
    text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}.`;

    /* 
        reduce player's health wc r: 15, 60, 300

        while levels r: 2, 8, 20.
    
        number is passed into: getMonsterAttackValue()

        getMonsterAttackValue(): means d effect d monser 
        has on d player
    

    playerHealth -= getMonsterAttackValue(monsters[fighting].level);

    // isMonsterHit(): means d effect d player has on d monsters
    if (isMonsterHit()) {
        /* monsterHealth r: 15, 60, 300

           weapon powers r: 5, 30, 50, 100 
        monsterHealth -=
            weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += " You miss.";
    }

    // update UI
    healthText.innerText = playerHealth;
    monsterHealthText.innerText = monsterHealth;

    if (playerHealth <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        // for dragon: fighting = 2 & u will only win wn u kill dragon
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }

    // mk a player lose his weapon(s)
    if (Math.random() <= 0.1 && inventory.length !== 1) {
        text.innerText += ` Your ${inventory.pop()} breaks.`;

        currentWeapon--;
    }
}

function getMonsterAttackValue(level) {
    /* hit: d impact on monster depends on substracting
       d product of (random num & xp) from (5 * level). 

       xp: increase only wn a monster is deafeated by 
       monster's level
       
       xp += monsters[fighting].level;
    
       available monsters level: 2, 8, 20
    

    const hit = level * 5 - Math.floor(Math.random() * xp);

    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    const randomNum = Math.random > 0.2;

    return randomNum || playerHealth < 20;
}

function dodge() {
    text.innerText = `You dodge the attack from the ${monsters[fighting].name}.`;
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function defeatMonster() {
    // levels: 2, 8, 20,
    const impact = monsters[fighting].level * 6.7;

    gold += Math.floor(impact);
    xp += monsters[fighting].level;

    // update UI
    goldText.innerText = gold;
    xpText.innerText = xp;

    /**
     * index: 4
     * Wn mosnter is defeated, u can either return to
     * town square or pick a luck, easterEgg
     * 
        "button text": [
            "Go to town square",
            "Go to town square",
            "Go to town square",
        ],

        "button functions": [goTown, goTown, easterEgg],

    
    update(locations[4]);
}

/**

* restart() is called wn there is:
 * winGame()
 * lose()



// used in indexes: 5 & 6
function restart() {
    // update UI: return it back to initial values
    xp = 0;
    playerHealth = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];

    xpText.innerText = xp;
    healthText.innerText = health;
    goldText.innerText = gold;

    // return to initial/home UI
    goTown();
}

/**
 * easterEgg() calls:
 * pickTwo()
 * pickEight()
 *  
 * while pick(guess) was d place holder for
 * pickTwo()
 * pickEight()
 * 
 * index: 7
   
 "button text": ["2", "8", "Go to town square?"],
 "button functions": [pickTwo, pickEight, goTown],
    


function easterEgg() {
    update(locations[7]);
}

function pick(guess) {
    const numbers = [];

    // populate d number arr 10x
    while (number.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = `You picked ${guess}. Here are the random numbers: \n`;

    for (let i = 0; i < 10; i++) {
        text.innerText += `${numbers[i]} \n`;
    }

    if (numbers.includes(guess)) {
        text.innerText += "Right! You win 20 gold!";

        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!";

        playerHealth -= 10;
        healthText.innerText = playerHealth;

        if (playerHealth <= 0) {
            lose();
        }
    }
}

function pickTwo() {
    pick(2);
}

function pickEight() {
    pick(8);
}


*/

// =========== revise ============

let xp = 0;
// let playerHealth = 100;
let playerHealth = 100000;

// let gold = 50;
let gold = 500;

let currentWeapon = 0;

// monster index: wc monster r u fighting with?
let fighting;

let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const playerHealthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");

const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    // index = 0
    { name: "stick", power: 5 },

    // index = 1
    { name: "dagger", power: 30 },

    // index = 2
    { name: "claw hammer", power: 50 },

    // index = 3
    { name: "sword", power: 100 },
];

const monsters = [
    // index = 0
    {
        name: "slime",
        level: 2,
        health: 15,
    },

    // index = 1
    {
        name: "fanged beast",
        level: 8,
        health: 60,
    },

    // index = 2
    {
        name: "dragon",
        level: 20,
        health: 300,
    },
];

const locations = [
    // index = 0
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sign that says "Store".',
    },

    // index = 1
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

    // index = 2
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

    // index = 3
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster.",
    },

    // index = 4
    {
        name: "kill monster",
        "button text": [
            "Go to town square",
            "Go to town square",
            "Go to town square",
        ],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
        "button functions": [goTown, goTown, easterEgg],
    },

    // index = 5
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;",
    },

    // index = 6
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    // index = 7
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
];

// add Events to d btns
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// update UI
function updateUI(location) {
    monsterStats.style.display = "none";

    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    text.innerText = location.text;
}

// name: "town square",
function goTown() {
    updateUI(locations[0]);
}

// name: "store",
function goStore() {
    updateUI(locations[1]);
}

// name: "cave",
function goCave() {
    updateUI(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        playerHealth += 10;

        goldText.innerText = gold;
        playerHealthText.innerText = playerHealth;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;

            const newWeapon = weapons[currentWeapon].name;
            inventory.push("  " + newWeapon);

            // update UI
            goldText.innerText = gold;
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
        currentWeapon--;

        const soldWeapon = inventory.shift();

        // update UI
        goldText.innerText = gold;
        text.innerText = `You sold a ${soldWeapon}. In your inventory you have: ${inventory}`;
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}

function fightSlime() {
    fighting = 0;

    goFight();
}

function fightBeast() {
    fighting = 1;

    goFight();
}

function fightDragon() {
    fighting = 2;

    goFight();
}

function goFight() {
    updateUI(locations[3]);

    monsterHealth = monsters[fighting].health;
    // console.log(monsters[fighting].health);

    // update UI
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;

    monsterHealthText.innerText = monsterHealth;
    // monsterHealthText.innerText = monsters[fighting].health;
}

function attack() {
    playerHealth -= getMonsterAttackValue(monsters[fighting].level);

    // Y is monsterHealth not effective here?????
    // monsterHealth = monsters[fighting].health;

    if (isMonsterHit()) {
        monsterHealth -=
            weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    }

    if (playerHealth <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }

    console.log(monsterHealth, playerHealth);

    // if (playerHealth > 0) {
    //     playerHealth -= getMonsterAttackValue(monsters[fighting].level);

    //     // Y is monsterHealth not effective here?????
    //     // monsterHealth = monsters[fighting].health;

    //     if (isMonsterHit()) {
    //         monsterHealth -=
    //             weapons[currentWeapon].power +
    //             Math.floor(Math.random() * xp) +
    //             1;
    //     }

    //     text.innerText = `The ${monsters[fighting].name} attacks. You attack it with your ${weapons[currentWeapon].name}.`;
    // } else {
    //     if (playerHealth <= 0) {
    //         lose();
    //     } else if (monsterHealth <= 0) {
    //         if (fighting === 2) {
    //             winGame();
    //         } else {
    //             defeatMonster();
    //         }
    //     }
    // }

    // monsterHealth -= playerHit;
    // console.log(monsterHealth);

    // update UI
    // playerHealthText.innerText = playerHealth;
    // monsterHealthText.innerText = monsterHealth;
}

function getMonsterAttackValue(level) {
    const hit = 5 * level - Math.floor(Math.random() * xp);

    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    const randomNum = Math.random() > 0.2;

    const value = randomNum || playerHealth < 20;

    return value;
}

function dodge() {
    text.innerText = `You dodge the attack from the ${monsters[fighting].name}`;
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
}

function lose() {
    updateUI(locations[5]);
}

function winGame() {
    updateUI(locations[6]);
}

function restart() {}

function easterEgg() {}

function pickTwo() {}

function pickEight() {}

function pick(guess) {}
