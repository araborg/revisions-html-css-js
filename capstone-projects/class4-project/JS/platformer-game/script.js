const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");

const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p");

// canvas
const ctx = canvas.getContext("2d");

canvas.width = innerWidth; // 1366
canvas.height = innerHeight; // 654

// ds is responsible for bringing d player dw after each jump
const gravity = 0.5;

// ds records d status for the checkpoint collision detection
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

// ======== player ========
// Using innerHeight / canvas.height: @ 654 and innerWidth @ 1366
// player: width:40, height:40
class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10), // 10
            y: proportionalSize(400), // 400
        };

        // it store the player's speed in the x and y directions
        this.velocity = {
            x: 0,
            y: 0,
        };

        /*
            Set the width and height properties to be 
            proportional to the height of the screen.
        */
        this.width = proportionalSize(40); // 40
        this.height = proportionalSize(40); // 40
    }

    draw() {
        ctx.fillStyle = "#99c9ff";

        // player's shape    10              400             20          20
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // updates the player's position and velocity as it moves throughout the game
    update() {
        // player is continually drawn on the screen as the game updates.
        this.draw();

        // When the player moves to the right, you will need to adjust its velocity/position?
        this.position.x += this.velocity.x;

        // When the player jumps up, you will need to add the logic for adjusting its velocity/position?
        this.position.y += this.velocity.y;

        // When the player jumps up, it is possible for it to move past the height of the canvas
        //          400          40         heighest value = 14    654
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            if (this.position.y < 0) {
                this.position.y = 0;

                this.velocity.y = gravity;
            }
            // if this.position.y > 0
            this.velocity.y += gravity;

            // if dse r greater than canvas.height: 654
        } else {
            this.velocity.y = 0;
        }

        // This ensures the player doesn't move too far off to the left.
        //       10+40            40
        if (this.position.x < this.width) {
            this.position.x = this.width;
        }

        // This ensures the player does not accidentally go off screen to the right
        //        10+40+           654      -     2(40)
        if (this.position.x >= canvas.width - 2 * this.width) {
            this.position.x = canvas.width - 2 * this.width;
        }
    }
}

const player = new Player();

/*
const platforms = platformPositions.map((platform) => {
    const platformNew = new Platform(platform.x, platform.y);

    return platformNew;
});
*/

// ======== animateIt ========
const animateIt = () => {
    requestAnimationFrame(animateIt);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ********* player *********
    // update the player's position as it moves throughout the game
    player.update();

    /*
        ds increase or decrease a player's velocity 
        based on if they move to the left or right
        of the screen.
    */
    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
        player.velocity.x = 5;
    } else if (
        keys.leftKey.pressed &&
        player.position.x > proportionalSize(100)
    ) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        // ============================
        if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
            // As the player moves to the right, the Platform moves with it.
            platforms.forEach((platform) => {
                platform.position.x -= 5;
            });

            checkpoints.forEach((checkpoint) => {
                checkpoint.position.x -= 5;
            });
        } else if (
            keys.leftKey.pressed &&
            isCheckpointCollisionDetectionActive
        ) {
            // As the player moves to the left, the Platform moves away it.
            platforms.forEach((platform) => {
                platform.position.x += 5;
            });

            checkpoints.forEach((checkpoint) => {
                checkpoint.position.x += 5;
            });
        }
        // ============================
    }

    // ********* platforms *********
    platforms.forEach((platform) => {
        // this helps to draw each platform value in an array generated by .map()
        platform.draw();
    });

    /*
        If the player tries to jump below one of the platforms, 
        this prevent it from jumping right through it
    */
    platforms.forEach((platform) => {
        const collisionDetectionRules = [
            player.position.y + player.height <= platform.position.y,

            player.position.y + player.height + player.velocity.y >=
                platform.position.y,

            player.position.x >= platform.position.x - player.width / 2,

            player.position.x <=
                platform.position.x + platform.width - player.width / 3,
        ];

        if (collisionDetectionRules.every((rule) => rule)) {
            player.velocity.y = 0;

            return;
        }

        const platformDetectionRules = [
            player.position.x >= platform.position.x - player.width / 2,

            player.position.x <=
                platform.position.x + platform.width - player.width / 3,

            player.position.y + player.height >= platform.position.y,

            player.position.y <= platform.position.y + platform.height,
        ];

        if (platformDetectionRules.every((rule) => rule)) {
            player.position.y = platform.position.y + player.height;

            player.velocity.y = gravity;

            // console.log(`player.position.x: ${player.position.x}`); // 458
            // console.log(`platform.position.x: ${platform.position.x}`); //440
            // console.log(`player.width: ${player.width}`); // 40
            // console.log(`platform.width: ${platform.width}`); //200
            // console.log(`player.position.y: ${player.position.y}`); // 440
            // console.log(` player.height: ${player.height}`); // 40
            // console.log(`platform.position.y: ${platform.position.y}`); // 400
            // console.log(`platform.height: ${platform.height}`); //40
        }
    });

    // ********* checkpoints *********
    // draws each of the checkpoints onto the canvas.
    checkpoints.forEach((checkpoint) => {
        checkpoint.draw();
    });

    checkpoints.forEach((checkpoint, index, checkpoints) => {
        const checkpointDetectionRules = [
            player.position.x >= checkpoint.position.x,

            player.position.y >= checkpoint.position.y, // false

            player.position.y + player.height <=
                checkpoint.position.y + checkpoint.height,

            isCheckpointCollisionDetectionActive,

            player.position.x - player.width <=
                checkpoint.position.x - checkpoint.width + player.width * 0.9,

            index === 0 || checkpoints[index - 1].claimed === true,
        ];

        if (checkpointDetectionRules.every((rule) => rule)) {
            checkpoint.claim();

            if (index === checkpoints.length - 1) {
                isCheckpointCollisionDetectionActive = false;

                showCheckpointScreen("You reached the final checkpoint!");

                movePlayer("ArrowRight", 0, false);
            } else if (
                player.position.x >= checkpoint.position.x &&
                player.position.x <= checkpoint.position.x + 40
            ) {
                showCheckpointScreen("You reached a checkpoint!");
            }

            // console.log(`player.position.x: ${player.position.x}`);
            // console.log(`checkpoint.position.x: ${checkpoint.position.x}`);
            // console.log(`player.position.y: ${player.position.y}`);
            // console.log(`checkpoint.position.y: ${checkpoint.position.y}`);
            // console.log(`player.height: ${player.height}`);
            // console.log(`checkpoint.height: ${checkpoint.height}`);
            // console.log(isCheckpointCollisionDetectionActive);
            // console.log(`player.width: ${player.width}`);
            // console.log(`checkpoint.width: ${checkpoint.width}`);
            // console.log(index);
            // console.log(checkpoints[index].claimed === true);
            // console.log(player.position.y >= checkpoint.position.y);
        }
    });
};

console.log(88 >= Infinity);
// ======== keys: obj of objs ========
const keys = {
    rightKey: {
        pressed: false,
    },

    leftKey: {
        pressed: false,
    },
};

// ======== move player ========
const movePlayer = (key, xVelocity, isPressed) => {
    // ds happens at the last platform, wn ds is shown: "You reached the final checkpoint!"

    // If the isCheckpointCollisionDetectionActive is false, stop the player's movements on the x and y axes.
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;

        return;
    }

    switch (key) {
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed;

            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }

            player.velocity.x -= xVelocity;
            break;

        case "ArrowUp":
        case " ":
        case "Spacebar":
            player.velocity.y -= 8;
            break;

        case "ArrowRight":
            keys.rightKey.pressed = isPressed;

            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }

            player.velocity.x += xVelocity;
    }
};

window.addEventListener("keydown", ({ key }) => {
    movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
    // this help remove the keydown effect. Comment it out to see this.
    movePlayer(key, 0, false);
});

// ======== platforms ========
class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y,
        };

        this.width = 200;
        this.height = proportionalSize(40); // 40
    }

    draw() {
        ctx.fillStyle = "#acd157";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const platformPositions = [
    { x: 500, y: proportionalSize(450) },
    { x: 700, y: proportionalSize(400) },
    { x: 850, y: proportionalSize(350) },
    { x: 900, y: proportionalSize(350) },
    { x: 1050, y: proportionalSize(150) },

    { x: 2500, y: proportionalSize(450) },
    { x: 2900, y: proportionalSize(400) },
    { x: 3150, y: proportionalSize(350) },

    { x: 3900, y: proportionalSize(450) },
    { x: 4200, y: proportionalSize(400) },
    { x: 4400, y: proportionalSize(200) },
    { x: 4700, y: proportionalSize(150) },
];

// this helps to populate the platforms array
const platforms = platformPositions.map(
    (platform) => new Platform(platform.x, platform.y)
);

// ======== showCheckpointScreen ========
const showCheckpointScreen = (msg) => {
    checkpointScreen.style.display = "block";

    checkpointMessage.textContent = msg;

    if (isCheckpointCollisionDetectionActive) {
        setTimeout(() => {
            checkpointScreen.style.display = "none";
        }, 2000);
    }
};

// ======== check point ========
class CheckPoint {
    constructor(x, y, z) {
        this.position = {
            x,
            y,
        };

        this.width = proportionalSize(40); // 40
        this.height = proportionalSize(70); // 70

        // This is used to check if the player has reached the checkpoint.
        this.claimed = false;
    }

    draw() {
        ctx.fillStyle = "#f1be32";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    claim() {
        // ds mks d checkpt to disappear
        this.width = 0;
        this.height = 0;

        this.position.y = Infinity;

        // d claimed ppty was changed inside d claim method
        this.claimed = true;
    }
}

const checkpointPositions = [
    {
        x: 1170,
        y: proportionalSize(80),
        z: 1,
    },

    {
        x: 2900,
        y: proportionalSize(330),
        z: 2,
    },

    {
        x: 4800,
        y: proportionalSize(80),
        z: 3,
    },

    // { x: 5200, y: proportionalSize(120), z: 3 },
];

const checkpoints = checkpointPositions.map(
    (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);

/*
const checkpoints = checkpointPositions.map((checkpoint) => {
    new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z);

    console.log(new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z));
});
*/

// ======== start game ========
const startGame = () => {
    startScreen.style.display = "none";

    canvas.style.display = "block";

    // player.draw();

    animateIt();
};

startBtn.addEventListener("click", startGame);
