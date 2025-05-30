const startBtn = document.getElementById("start-btn");

const startScreen = document.querySelector(".start-screen");

const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

let isCheckpointCollisionDetectionActive = true;

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";

    // animate()
};

startBtn.addEventListener("click", startGame);

// d determinant here is: innerHeight in case it is < 500
const proportionalSize = (size) => {
    // console.log(`innerHeight: ${innerHeight}, size: ${size}`);

    size =
        innerHeight < 500 //
            ? Math.ceil((size / 500) * innerHeight)
            : size;

    // console.log(size);
    return size;
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
    }
}

// proportionalSize(400);

// console.log(Math.floor(5 / 2));
