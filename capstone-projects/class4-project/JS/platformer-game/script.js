const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");

const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p");

// canvas
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas.height);

const gravity = 0.5;

const isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10),
            y: proportionalSize(400),
        };

        this.velocity = {
            x: 0,
            y: 0,
        };

        this.width = proportionalSize(40);
        this.height = proportionalSize(40);
    }

    draw() {
        ctx.fillStyle = "#99c9ff";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

//

/*
Canvas methods:
const ctx = canvas.getContext("2d")
ctx.fillStyle = "#99c9ff";




canvas variables:
canvas.width
canvas.height


*/
