// variables
let xp = 0;
let playerHealth = 100;
let gold = 450;

let weaponIndex = 0;

let monsterIndex;
let monsterHealth;

let armoury = ["stick"];

// buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

// player stats
const xpText = document.querySelector("#xpText");
const playerHealthText = document.querySelector("#playerHealthText");
const goldText = document.querySelector("#goldText");

// monsterStats
const monsterStats = document.getElementById("monsterStats");
const monsterName = document.getElementById("monsterName");
const monsterHealthText = document.getElementById("monsterHealthText");

// text
const text = document.getElementById("text");

const weapons = [
    // currentWeapon: 0 i.e stick
    { name: "stick", power: 5 },
    { name: "dagger", power: 30 },
    { name: "claw hammer", power: 50 },
    { name: "sword", power: 100 },
];

const monsters = [
    {
        name: "Slime",
        level: 2,
        health: 15,
    },

    {
        name: "Fanged beast",
        level: 8,
        health: 60,
    },

    {
        name: "Dragon",
        level: 20,
        health: 300,
    },
];

const locations = [
    // 0
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: 'You are in the town square. You see a sign that says "Store".',
    },

    // 1
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

    // 2
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

    // 3: for displaying slime. beast and dragon
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster.",
    },

    // 4
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

    // 5
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;",
    },

    // 6
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
    },

    // 7
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
    },
];

// init btns
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// fxns
function update(location) {
    // hide monster stats wn u r nt attacking
    monsterStats.style.display = "none";

    // btns text
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    // btns fxn calls on click
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    // modified this to show &#x2620;
    // text.innerText = location.text;

    text.innerHTML = location.text;
}

function goTown() {
    // go to town square btn fxn
    // monsterStats.style.display = "none";
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        playerHealth += 10;

        playerHealthText.innerText = playerHealth;
        goldText.innerText = gold;
    } else {
        text.innerText = `You do not have enough gold $${gold} to buy health.`;
    }
}

function buyWeapon() {
    // if (gold >= 30 && weaponIndex < weapons.length - 1) {
    //     // if (weaponIndex < weapons.length - 1) {
    //     gold -= 30;
    //     goldText.innerText = gold;
    //     weaponIndex++;

    //     const newWeapon = weapons[weaponIndex].name;

    //     armoury.push(newWeapon);

    //     text.innerText = `You now have a ${newWeapon}. In your inventory you have: ${armoury}`;
    // } else if (weaponIndex === weapons.length - 1 && weapons.length !== 1) {
    //     button2.innerText = "Sell weapon for 15 gold";
    //     text.innerText = "You already have the most powerful weapon!";

    //     button2.onclick = sellWeapon;
    // } else {
    //     text.innerText = "You do not have enough gold to buy a weapon.";
    // }

    /*
        1. Check if d weaponIndex doesn't equal weapons length 
        2. Check if there is enough gold to buy more health
    */
    if (weaponIndex < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            weaponIndex++;

            console.log(`inside buyWeapon fxn: ${weaponIndex}`);
            goldText.innerText = gold;
            const newWeapon = weapons[weaponIndex].name;

            text.innerText = `You now have a ${newWeapon}.`;
            armoury.push(newWeapon);
            text.innerText += ` In your inventory you have: ${armoury}`;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
        }
    } else {
        button2.innerText = "Sell weapon for 15 gold";
        text.innerText = "You already have the most powerful weapon!";

        button2.onclick = sellWeapon;
    }

    // if (gold >= 30) {
    //     if (weaponIndex < weapons.length - 1) {
    //         gold -= 30;
    //         weaponIndex++;

    //         goldText.innerText = gold;
    //         const newWeapon = weapons[weaponIndex].name;

    //         text.innerText = `You now have a ${newWeapon}.`;
    //         armoury.push(newWeapon);
    //         text.innerText += ` In your inventory you have: ${armoury}`;
    //     } else {
    //         button2.innerText = "Sell weapon for 15 gold";
    //         text.innerText = "You already have the most powerful weapon!";

    //         button2.onclick = sellWeapon;
    //     }
    // } else {
    //     text.innerText = "You do not have enough gold to buy a weapon.";
    // }
}

function sellWeapon() {
    if (armoury.length > 1) {
        gold += 15;
        goldText.innerText = gold;

        // const soldWeapon = armoury.shift();
        const soldWeapon = armoury.pop();

        text.innerText = `You sold a ${soldWeapon}.`;
        text.innerText += ` Your weapons remain ${armoury}`;
    } else {
        text.innerText = "Don't sell your only weapon!";

        // personal modifications [0, 1, 2, 3]
        weaponIndex = weapons.length - 2;
        console.log(`before d while loop: ${weaponIndex}`); // 2

        while (armoury.length === 1 && weaponIndex > 0) {
            weaponIndex--;

            button2.innerText = "Buy weapon (30 gold)";
            button2.onclick = buyWeapon;

            console.log(`inside d while loop: ${weaponIndex}`); // 1, 0
        }
        console.log(`after d while loop: ${weaponIndex}`); // 0
    }
}

function goFight() {
    update(locations[3]);

    button2.onclick = dodge;

    monsterStats.style.display = "block";

    const currentMonster = monsters[monsterIndex].name;
    monsterHealth = monsters[monsterIndex].health;

    monsterHealthText.innerText = monsterHealth;
    monsterName.innerText = currentMonster;
    // console.log(currentMonster, monsterHealth);
}

function fightSlime() {
    monsterIndex = 0;
    goFight();
}

function fightBeast() {
    monsterIndex = 1;
    goFight();
}

function fightDragon() {
    monsterIndex = 2;
    goFight();
}

function dodge() {
    text.innerText =
        "You dodge the attack from the " + monsters[monsterIndex].name;
}

// fxns based on game states
function attack() {
    const monsterName = monsters[monsterIndex].name;
    const chosenWeapon = weapons[weaponIndex].name;
    text.innerText = `The ${monsterName} attacks.`;
    text.innerText += ` You attack it with your ${chosenWeapon}.`;

    // reduce health with getMonsterAttackValue(level)
    playerHealth -= getMonsterAttackValue(monsters[monsterIndex].level);
    playerHealthText.innerText = playerHealth;

    // if monster is Hit
    if (isMonsterHit()) {
        // reduce monster health using weapon power & random number with xp
        // weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1
        monsterHealth -=
            weapons[weaponIndex].power + Math.floor(Math.random() * xp) + 1;

        monsterHealthText.innerText = monsterHealth;

        // health less than 0
        if (playerHealth <= 0) {
            playerHealth = 0;
            playerHealthText.innerText = playerHealth;

            // call lose()
            lose();

            // monster health less than zero
        } else if (monsterHealth <= 0) {
            monsterHealth = 0;
            monsterHealthText.innerText = monsterHealth;

            // monster index is 2
            if (monsterIndex === 2) {
                // call win game
                winGame();
            } else {
                // call defeat monster
                defeatMonster();
            }
        }
    } else {
        //     update text element: " You miss.";
        text.innerText += " You miss.";
    }

    // weapon break
    // if Math random is less or equal .1 and armoury length not equal 1
    if (Math.random() <= 0.1 && armoury.length !== 1) {
        // update text = " Your sword breaks.";
        text.innerText == " Your sword breaks.";
        weaponIndex--;
    }
    // reduce weaponIndex
}

function getMonsterAttackValue(level) {
    // declare hit and cal it using level * 5 minus random number * xp
    const hit = level * 5 - Math.floor(Math.random() * xp);
    // return hit if it greater than 0 or return 0
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    // random greater than .2 or health less than 20
    const value = Math.random() > 0.2 || playerHealth < 20;
    // console.log(value);
    return value;
    // return Math.random() > 0.2 || playerHealth < 20;
}

function lose() {
    // call update with d lose obj
    update(locations[5]);
}

function winGame() {
    // call win obj
    update(locations[6]);
}

function defeatMonster() {
    // add to gold: monster lever * 6.7
    gold += Math.floor(monsters[monsterIndex].level * 6.7);

    // add to xp using monster level
    xp += monsters[monsterIndex].level;

    // display d new gold and xp value
    goldText.innerText = gold;
    xpText.innerText = xp;

    // call update with kill monster obj
    update(locations[4]);

    // monsterStats.style.display = "none";
}

function easterEgg() {
    // call easter egg obj
    update(locations[7]);
}

function pick(guess) {
    // declare an empty arr
    const numbers = [];

    // use while loop to populate d empty arr with random number btw 0-10
    while (numbers.length < 10) {
        const randomNum = Math.floor(Math.random() * 10);
        numbers.push(randomNum);
    }

    // update text: "You picked " + guess + ". Here are the random numbers:\n";
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    // show d number by updating text using for loop
    for (let i = 0; i < numbers.length; i++) {
        // text.innerText += numbers[i] + "\n";
        text.innerText += `${numbers[i]} \n`;
    }

    // if number includes guess
    if (numbers.includes(guess)) {
        // update text: "Right! You win 20 gold!";
        text.innerText += "Right! You win 20 gold!";

        // increase gold by 20
        gold += 20;

        // update gold text
        goldText.innerText = gold;
    } else {
        // update text: "Wrong! You lose 10 health!";
        text.innerText += "Wrong! You lose 10 health!";

        // decreate health by 10
        playerHealth -= 10;

        // update health text
        playerHealthText.innerText = playerHealth;

        // check if health is less or equal 0:
        if (playerHealth <= 0) {
            // call lose
            lose();
        }
    }
}

function pickTwo() {
    // call pick with 2
    pick(2);
}

function pickEight() {
    // call pick with 8
    pick(8);
}

function restart() {
    // reset xp, playerHealth, gold, weaponIndex, armoury to initial values
    xp = 0;
    playerHealth = 100;
    gold = 50;
    weaponIndex = 0;
    armoury = ["stick"];

    // display xp, playerHealth, gold
    xpText.innerText = xp;
    playerHealthText.innerText = playerHealth;
    goldText.innerText = gold;

    // monsterStats.style.display = "none";

    // call go to town obj
    update(locations[0]);
}

// button2.addEventListener("click", dodge);
