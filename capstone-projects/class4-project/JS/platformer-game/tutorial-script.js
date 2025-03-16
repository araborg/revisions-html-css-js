/*
Coding a game is a great way to grasp fundamental programming 
principles, while also creating an interactive gaming 
experience.

In this platformer game project, you'll continue to learn 
about classes, objects, inheritance, and encapsulation. 

You'll also learn how to design and organize game elements 
efficiently and gain insights into problem-solving and code 
reusability.


Lesson 1:
In this project, you are going to learn intermediate Object 
Oriented Programming principles by building a platformer game. 

Start by using document.getElementById() to get the #start-btn 
and #canvas elements.

Store them in const variables named startBtn and canvas 
respectively.

const startBtn = document.getElementById('start-btn');
const canvas = document.getElementById('canvas');


Lesson 2:
Next, you will need to use document.querySelector to get the 
.start-screen and .checkpoint-screen elements.

Store them in const variables called startScreen and 
checkpointScreen respectively.

const startScreen = document.querySelector('.start-screen');
const checkpointScreen = document.querySelector('.checkpoint-screen')


Lesson 3:
The next step is to target the paragraph element inside the 
.checkpoint-screen element.

Use document.querySelector and the child combinator > to target 
the paragraph element.

Assign that value to a const variable called checkpointMessage.

const checkpointMessage = document
                        .querySelector('.checkpoint-screen > p');


Lesson 4:
Before you can begin building out the functionality for the game, 
you will need to set up the ability to add 2D graphics.

The Canvas API can be used to create graphics in games using 
JavaScript and the HTML canvas element.

You will need to use the getContext method which will provide 
the context for where the graphics will be rendered.

canvas.getContext("2d");

Assign that getContext method to a const variable called ctx.

const ctx = canvas.getContext("2d");


Lesson 5:
The canvas element has a width property which is a positive number 
that represents the width of the canvas.

canvas.width

Below your const declarations, append the width property to the 
canvas variable.

canvas.width;


Lesson 6:
The innerWidth property is a number that represents the interior 
width of the browser window.

Assign innerWidth to canvas.width.

canvas.width = innerWidth;


Lesson 7:
The innerHeight property is a number that represents the interior 
height of the browser window.

Below your canvas.width, append the height property to the canvas 
variable and assign it innerHeight.

canvas.height = innerHeight;


Lesson 8:
In your platformer game, the main player will need to jump 
between the different platforms. When the player jumps, you 
will need to apply gravity to bring them back down.

Create a new const variable called gravity and assign it 
the number 0.5.

const gravity = 0.5;


Lesson 9:
In the game, the player will have the opportunity to cross 
different checkpoints. You will need to keep track of the 
status for the checkpoint collision detection.

Use let to create a new variable called 
isCheckpointCollisionDetectionActive and assign it the 
value of true.

let isCheckpointCollisionDetectionActive = true;


Lesson 10:
As you are designing the game, you will need to make sure 
that the size of the elements in the game are responsive 
and adapt to different screen sizes.

Start by creating an arrow function called proportionalSize 
that takes in a size parameter.

const proportionalSize = (size) => {};


Lesson 11:
The width and the height of the main player, platforms and 
checkpoints will be proportional sized relative to the 
innerHeight of the browser screen. The goal is to make the 
game responsive and visually consistent across different 
screen sizes.

Inside your proportionalSize function, you will need to 
return a ternary that checks if innerHeight is less than 
500. If so, return Math.ceil((size / 500) * innerHeight), 
otherwise return size.

const proportionalSize = (size) => {
    return innerHeight < 500 
        ? Math.ceil((size / 500) * innerHeight) 
        : size;
};


Lesson 12:
The next step is to define some characteristics for the main 
player of the game.

Start by creating a new class called Player.

class Player {}


Lesson 13:
Inside your Player class, you will need to define the 
player's position, velocity, width, and height values. 

All of these values will be defined inside the constructor 
method.

Create an empty constructor inside your Player class.

class Player {
    constructor() {

    }
}


Lesson 14:
Inside your constructor, use the this keyword to set the 
position property to an empty object.

class Player {
    constructor() {
        this.position = {};
    }
}


Lesson 15:
Inside your position object, add a new key called x with a 
value of proportionalSize(10). After that, add another key 
called y with a value of proportionalSize(400).

You need to use the proportionalSize function here to make 
sure that the player's position is always proportional to 
the screen size. This is important because you want the 
player to be able to move around the screen regardless of 
the screen size.

class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10),
            y: proportionalSize(400)
        }
    }
}


Lesson 16:
Below your position object, use the "this" keyword to set the 
velocity property to an object.

Inside that new velocity object, create a key called x with 
a value of 0 and a new key called y with a value of 0.

The velocity property will be used to store the player's 
speed in the x and y directions.

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


Lesson 17:
Below your velocity object, use the "this" keyword to set the 
width property to proportionalSize(40).

Below your width property, use the "this" keyword to set the 
height property to proportionalSize(40).

You are using the proportionalSize() function here to set 
the width and height properties of your class to be 
proportional to the height of the screen.

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
}


Lesson 18:
The next step is to create a draw() method, which will be 
responsible for creating the player's width, height, position, 
and fill color.

Below your constructor, create an empty draw() method.

draw(){};


Lesson 19:
Now, you need to set the color for your player.

Inside the draw() method, assign the string "#99c9ff" to 
ctx.fillStyle.

draw() {
    ctx.fillStyle = "#99c9ff";
}


Lesson 20:
Below your ctx.fillStyle, you need to create the player's 
shape by calling the fillRect() method on the ctx object 
which you instantiated earlier.

fillRect(x, y, width, height)

Inside the fillRect() method add the this.position.x, 
this.position.y, this.width and this.height values.

draw() {
    ctx.fillStyle = "#99c9ff";

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}


Lesson 21:
The next step is to create an update() method which will 
be responsible for updating the player's position and 
velocity as it moves throughout the game.

Below your draw() method, create an empty update() method.

update(){};


Lesson 22:
Inside the update() method, call the draw() method to ensure 
that the player is continually drawn on the screen as the game 
updates.

Don't forget to include the this keyword.

update() {
    this.draw();    
}


Lesson 23:
When the player moves to the right, you will need to adjust 
its velocity/position?.

Use the addition assignment operator to add the velocity's x 
coordinate to the player's x position.

Don't forget to include the "this" keyword for the velocity 
and position.

update() {
    this.draw();

    this.position.x += this.velocity.x; // moves right
}


Lesson 24:
When the player jumps up, you will need to add the logic 
for adjusting its velocity/position.

Use the addition assignment operator to add the velocity's 
y coordinate to the player's y position.

Don't forget to include the "this" keyword for the velocity 
and position.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;
}


Lesson 25:
Right now, when the player jumps up, it is possible for it 
to move past the height of the canvas.

To fix that, you will need to add a condition to stop the 
player from falling past the height of the canvas.

Create an empty if statement that checks if the sum of the 
player's y position, height, and y velocity is less than or 
equal to the height of the canvas.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {}
}



Lesson 26:
In the if statement, add another if statement to check if the 
player's y position is less than 0.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {
        if (this.position.y < 0) {}
    }
}


Lesson 27:
Inside the inner if statement, assign 0 to the player's 
y position.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {
        if (this.position.y < 0) {
            this.position.y = 0
        }
    }
}


Lesson 28:
Below the this.position.y = 0, assign gravity to the velocity's 
y position.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {
        if (this.position.y < 0) {
            this.position.y = 0

            this.velocity.y = gravity;
        }
    }
}


Lesson 29:
Below your inner if statement, use the addition assignment 
operator to add gravity to the y velocity.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {
        if (this.position.y < 0) {
            this.position.y = 0

            this.velocity.y = gravity;
        }

        this.velocity.y += gravity;
    }
}


Lesson 30:
Add an else clause that assigns 0 to this.velocity.y.

update() {
    this.draw();

    this.position.x += this.velocity.x; 
    
    this.position.y += this.velocity.y;

    if (
        this.position.y  + 
        this.height + 
        this.velocity.y <= canvas.height
    ) {
        if (this.position.y < 0) {
            this.position.y = 0

            this.velocity.y = gravity;
        }

        this.velocity.y += gravity;
    }else {
        this.velocity.y = 0;
    }
}


Lesson 31:
The final condition you need to add inside the Player class is 
to ensure that the player stays within the boundaries of the 
canvas screen and doesn't move too far off to the left.

That is, if the player decides to move far left outside of 
the canvas and it position bcoms lesser than the player's 
width. The condition will ensure it starting pt is the 
player's width (of 40)

Create an if statement, to check if the player's x position 
is less than the width (of the player).

if(this.position.x < this.width) {}


Lesson 32:
Inside the if statement, assign the width to the player's x 
position.

if (this.position.x < this.width) {
    this.position.x = this.width;
}


Lesson 33:
For the last condition, you will need to check if the player's 
x position has exceeded the right edge of the canvas. If it has, 
you will need to set the player's x position to the maximum 
value so the player does not accidentally go off screen to 
the right.

Inside your update method, create an if statement that checks 
if this.position.x >= canvas.width - 2 * this.width.

if (this.position.x >= canvas.width - 2 * this.width) {}


Lesson 34:
Inside your if statement, assign canvas.width - 2 * this.width 
to this.position.x.

This will ensure that the player's x position will never exceed 
the right edge of the canvas.

if (this.position.x >= canvas.width - 2 * this.width) {
    this.position.x = canvas.width - 2 * this.width
}


Lesson 35:
The next step is to use the new keyword to create a new 
instance of the Player object and assign it to a new 
const variable called player.

const player = new Player();


Lesson 36:
Now it is time to see your new player drawn on the screen.
Start by creating an empty arrow function called startGame.

const startGame  = () => {}


Lesson 37:
Inside your startGame function, you will need to display the 
canvas element and hide the startScreen container.

Use canvas.style.display to change the display value to 
"block".

Below that, use startScreen.style.display to change the 
display value to "none".

const startGame = () => {
    canvas.style.display = "block";

    startScreen.style.display = "none";
}


Lesson 38:
To visualize the player on the screen, you need to draw it on 
the canvas.

Inside the startGame function, call the .draw() method of your 
player object.

const startGame = () => {
    canvas.style.display = "block";
    
    startScreen.style.display = "none";
    
    player.draw();
}

Lesson 39:
Now it's time to add the functionality for the start game 
button.

Add an addEventListener to the startBtn and pass in a 
click event and a reference to the startGame function.

Click on the start game button, and you should see a light 
blue square on the screen which represents the main player.

startBtn.addEventListener('click', startGame)


Lesson 40:
Now that you can see the player on the screen, it is 
time to start adding the functionality for moving the 
player across the screen.

Create a new empty arrow function called animate.

const animate = () => {}


Lesson 41:
The requestAnimationFrame() web API, takes in a callback 
and is used to update the animation on the screen. The 
animate function will be responsible for updating the 
player's position and continually drawing it on the 
canvas.

The window.requestAnimationFrame() method tells the 
browser you wish to perform an animation. It requests 
the browser to call a user-supplied callback function 
before the next repaint.

requestAnimationFrame(parentFxn) 

Inside the animate function, call the requestAnimationFrame() 
API and pass animate as the argument.

const animate = () => {
    requestAnimationFrame(animate);
}


Lesson 42:
As the player moves through the game, you will need to clear 
the canvas before rendering the next frame of the animation.

You can use the clearRect() Web API to accomplish this. It 
takes in an x, y, width, and height arguments.

Below your requestAnimationFrame, call the clearRect() method 
on the ctx variable and pass in 0, 0, canvas.width, 
canvas.height as the arguments.

const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


Lesson 43:
The next step is to update the player's position as it moves 
throughout the game.

Below your ctx.clearRect(), call the update() method on the 
player.

const animate = () => {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    player.update();
}


Lesson 44:
To manage the player's movement in the game, you will need to 
monitor when the left and right arrow keys are pressed.

Create a new const variable called keys and assign it an empty 
object.

const keys = {}


Lesson 45:
Inside the keys object, add a new key called rightKey 
and assign it an object with the key-value pair of 
pressed: false.

Below the rightKey object, create a leftKey object and 
assign it an object with the key-value pair of 
pressed: false.

const keys = {
    rightKey: {
        pressed: false,
    },

    leftKey: {
        pressed: false,
    },
};


Lesson 46:
The next step is to add the logic for increasing or decreasing a 
player's velocity based on if they move to the left or right of 
the screen.

Inside the animate function, create an if statement where the 
condition checks if the right key was pressed and the player's 
x position is less than proportionalSize(400).

You need to use the proportionalSize function here to make 
sure the player's x position is always proportional to the 
screen size.

Remember that the "this" keyword should not be used here 
because that is only for the Player class and not for the 
player object.

if (
    keys.rightKey.pressed && 
    player.position.x < proportionalSize(400)
) {}


Lesson 47:
Inside the if statement, assign the number 5 to the player's 
x velocity.

if (
    keys.rightKey.pressed && 
    player.position.x < proportionalSize(400)
) {
    player.velocity.x = 5;
}
    

Lesson 48:
Add an else if statement where the condition checks if the 
left key was pressed and the player's x position is greater 
than proportionalSize(100). Y

ou need to use the proportionalSize function here to make 
sure the player's x position is always proportional to 
the screen size.

Inside the else if statement, assign the number -5 to the 
player's x velocity.

if (
    keys.rightKey.pressed && 
    player.position.x < proportionalSize(400)
) {
    player.velocity.x = 5;
} else if(
        keys.leftKey.pressed &&
        player.position.x > proportionalSize(100) // 70
) {
    player.velocity.x = -5;
}


Lesson 49:
Add an else clause that assigns the number 0 to the player's 
x velocity.

if (
    keys.rightKey.pressed && 
    player.position.x < proportionalSize(400)
) {
    player.velocity.x = 5;
} else if(
        keys.leftKey.pressed &&
        player.position.x > proportionalSize(100) // 70
) {
    player.velocity.x = -5;
} else {
    player.velocity.x = 0;
}


Lesson 50:
The next step is to add the functionality that will be 
responsible for moving the player across the screen.

Create a new arrow function called movePlayer that has 
three parameters called key, xVelocity, isPressed.

const movePlayer = (key, xVelocity, isPressed) => {}


Lesson 51:
In the game, the player will interact with different checkpoints. 

If the isCheckpointCollisionDetectionActive is false, then you 
will need to stop the player's movements on the x and y axes.

Start by creating an if statement where the condition checks 
if the isCheckpointCollisionDetectionActive is false.

Remember that you can use the ! operator to check if the 
variable is false.

if (!isCheckpointCollisionDetectionActive){}


Lesson 52:
Inside the if statement, set the player's x velocity to 0 
and the player's y velocity to 0.

Below that, add a return statement.

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        
        return;
    }
}


Lesson 53:
Below the if statement, create a switch statement with a 
value of key.

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        
        return;
    }

    switch(key) {}
}


Lesson 54:
The first case you will want to add is when the left arrow 
key is pressed.
Inside the switch statement, add a new case called "ArrowLeft".

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        
        return;
    }

    switch(key) {
        case "ArrowLeft": 
    
    }
}


Lesson 55:
Inside the case clause, assign isPressed to keys.leftKey.pressed.

Below that, add an if statement that checks if xVelocity is equal 
to 0. If so, assign the xVelocity to player.velocity.x.

const movePlayer = (key, xVelocity, isPressed) => {
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
    }
}


Lesson 56:
Below your if statement, use the subtraction assignment operator 
to subtract the xVelocity from player.velocity.x.

To close out this case, make sure to add a break statement.

const movePlayer = (key, xVelocity, isPressed) => {
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
    }
}


Lesson 57:
The player can jump up by using the up arrow key or the spacebar.

Add three new cases for "ArrowUp", " ", and "Spacebar". Remember 
that you can group cases together when they share the same 
operation.

Inside those cases, use the subtraction assignment operator to 
subtract 8 from player.velocity.y.

To close out these cases, make sure to add a break statement.

const movePlayer = (key, xVelocity, isPressed) => {
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
    }
}


Lesson 58:
The last case you will need to add will be for "ArrowRight".

Inside that case, assign isPressed to keys.rightKey.pressed.

Add an if statement that checks if xVelocity is equal to 0. 
If so, assign the xVelocity to player.velocity.x.

Below that if statement, use the addition assignment operator 
to assign the xVelocity to player.velocity.x.

const movePlayer = (key, xVelocity, isPressed) => {
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
  
      case  "ArrowRight":
          keys.rightKey.pressed = isPressed;
          if (xVelocity === 0) {
              player.velocity.x = xVelocity;
          }
  
          player.velocity.x += xVelocity;
  }
}


Lesson 59:
Now it is time to add the event listeners that will be 
responsible for calling the movePlayer function.

Start by adding an addEventListener to the global window 
object.

For the arguments, pass in the "keydown" event and an arrow 
function that uses the destructuring assignment to get the 
key property from the event object in the event listener 
parameter.

window.addEventListener('keydown', ({ key }) => { })


Lesson 60:
Inside the arrow function, call the movePlayer function and 
pass in key, 8, and true as arguments.

N.B: Nothing special abt number 8 used. Any number can be used
provided it is greater than 0.

window.addEventListener("keydown", ({ key }) => {
    movePlayer(key, 8, true);
});


Lesson 61:
Add another addEventListener to the global window object 
and pass in the "keyup" event and use destructuring to 
pass in the key property from the event.

window.addEventListener("keyup", ({ key }) => {});


Lesson 62:
Inside the callback function, call the movePlayer function 
and pass in key, 0, and false as arguments.

N.B: This (movePlayer(key, 0, false);) help remove the keydown 
effect. Comment it out to see this. False here stops the true
effect.

window.addEventListener("keyup", ({ key }) => {
    movePlayer(key, 0, false);
});


Lesson 63:
Before you can start moving your player across the screen, 
you will need to use the animate function.

Inside the startGame function, delete player.draw() and call 
the animate function.

Click the Start Game button and use the left and right arrow 
keys to move the player across the screen. You can also use 
the spacebar or the up arrow key to jump up.

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";

    // player.draw();

    animate();
}


Lesson 64:
The next step is to create the platforms and platform logic.
Start by creating a new Platform class.

class Platform {}


Lesson 65:
Inside the Platform class, create a constructor that takes in 
the x and y coordinates.

class Platform {
    constructor(x, y){}
}


Lesson 66:
When working with objects where the property name and value are 
the same, you can use the shorthand property name syntax. This 
syntax allows you to omit the property value if it is the same 
as the property name.

// using shorthand property name syntax
obj = {
    a, 
    b, 
    c,
}

The following code is the same as:
obj = {
    a: a,
    b: b,
    c: c,
}

Inside the constructor, add this.position and assign it an 
object with the x and y coordinates. Make sure to use the 
shorthand property syntax .

class Platform {
    constructor(x, y) {
        this.position = {
            x, 
            y
        }
    }
}


Lesson 67:
Next, add a width property to the constructor and assign it 
the number 200.
Don't forget to use the "this" keyword to access the properties.

class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y,
        };

        this.width = 200;
    }
}


Lesson 68:
Below that, add a height property and assign it the number 
proportionalSize(40). You need to use the proportionalSize() 
function to make sure the height is proportional to the screen 
size.
Remember to use the "this" keyword to access the properties.

class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y,
        };

        this.width = 200;
        this.height = proportionalSize(40);
    }
}


Lesson 69:
Next, add a draw method to the Platform class.

class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y,
        };

        this.width = 200;
        this.height = proportionalSize(40);
    }

    draw() {}
}


Lesson 70:
Inside the draw method, assign "#acd157" to the ctx.fillStyle.

Below that, call the ctx.fillRect method and pass in the x and 
y coordinates, along with the width and height properties. 
Remember to include "this" before each property.

class Platform {
    constructor(x, y) {
        this.position = {
            x,
            y,
        };

        this.width = 200;
        this.height = proportionalSize(40);
    }

    draw() {
        ctx.fillStyle = "#acd157";

        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


Lesson 71:
The next step will be to create a list of positions for the 
platforms.

Start by creating a new const variable called platformPositions 
and assign it an empty array.

const platformPositions = [];


Lesson 72:
Inside the platformPositions, you will need to add the list 
of positions for the platforms.

Add a new object that has an x property with a value of 500 
and a y property with a value of proportionalSize(450).

const platformPositions = [
    {
        x: 500,
        y: proportionalSize(450)
    }
];


Lesson 73:
Below that, add another object with an x property with a 
value of 700 and a y property with a value of 
proportionalSize(400).

const platformPositions = [
    { x: 500, y: proportionalSize(450) },
    { x: 700, y: proportionalSize(400) },
];


Lesson 74:
Add the rest of the platform positions to the 
platformPositions array with the following values:

x=850  y=proportionalSize(350)
x=900  y=proportionalSize(350)
x=1050 y=proportionalSize(150)
x=2500 y=proportionalSize(450)
x=2900 y=proportionalSize(400)
x=3150 y=proportionalSize(350)
x=3900 y=proportionalSize(450)
x=4200 y=proportionalSize(400)
x=4400 y=proportionalSize(200)
x=4700 y=proportionalSize(150)

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


Lesson 75:
The next step is to create a list of new platform 
instances using the Platform class. You will later 
reference this list to draw the platforms on the 
canvas.

Start by creating a new const variable called 
platforms and assign it platformPositions.map().

const platforms = platformPositions.map();


Lesson 76:
In the map callback function, pass in platform for 
the parameter and implicitly return the creation of 
a new Platform instance with the platform.x and 
platform.y values passed in as arguments.

N.B: platform.x and platform.y values are expected to 
change dynamically while the this.width and this.height 
are statically provided. The platform.draw() method is
expected to make use of these values.

const platforms = platformPositions.map(
    (platform) => new Platform(platform.x, platform.y)
);


Lesson 77:
Inside the animate function, you will need to draw each 
of the platforms onto the canvas.

Add a forEach loop that iterates through the platforms 
array.

Inside the callback function, add a platform parameter 
and for the body of the function call the draw method 
on each platform.

platforms.forEach((platform) => {
    platform.draw()
});


Lesson 78:
If you try to start the game, you will notice that the 
platforms are rendered on the screen. But as the player 
moves to the right, the platform does not move with it.

To fix this issue, you will need to update the platform's 
x position as the player moves across the screen.

Inside the animate function, add a condition (inside the 
else block) to check if the right key was pressed and if 
the isCheckpointCollisionDetectionActive is true.

if (
    keys.rightKey.pressed && 
    isCheckpointCollisionDetectionActive
) {}


Lesson 79:
Inside your condition, add a forEach loop to iterate through 
the platforms array.

Inside the loop, use the subtraction assignment operator to 
subtract 5 from the platform's x position.

if (
    keys.rightKey.pressed && 
    isCheckpointCollisionDetectionActive
) {
    platforms.forEach(platform => { platform.position.x -= 5 })
}


Lesson 80:
Next, add an else if statement to check if the left key 
was pressed and if isCheckpointCollisionDetectionActive 
is true.

Inside that condition, add a forEach loop to iterate 
through the platforms array.

Inside the loop, use the addition assignment operator to 
add 5 to the platform's x position.

if (
    keys.rightKey.pressed && 
    isCheckpointCollisionDetectionActive
) {
    platforms.forEach((platform) => {
        platform.position.x -= 5;
    });
} else if (
    keys.leftKey.pressed && 
    isCheckpointCollisionDetectionActive
) {
    platforms.forEach((platform) => {
        platform.position.x += 5;
    });
}


Lesson 81:
When you start the game, you will notice that the position 
of the platforms is animating alongside the player. But if 
you try to jump below one of the platforms, then you will 
jump right through it.

To fix this issue, you will need to add collision detection 
logic to the game.

Start by calling the forEach method on the platforms array. 
For the callback function pass in platform as the parameter.

platforms.forEach(platform => {});


Lesson 82:
Inside the callback function, create a new const variable 
called collisionDetectionRules and assign it an empty array.

Inside that array, add a boolean expression that checks 
whether the player's y position plus the player's height 
is less than or equal to the platform's y position.

platforms.forEach((platform) => {
    const collisionDetectionRules = [
        player.position.y + player.height <= platform.position.y,
    ];
});


Lesson 83:
Add another boolean expression that checks if the sum of 
the player's y position, height, and y velocity is greater 
than or equal to the platform's y position.

platforms.forEach((platform) => {
    const collisionDetectionRules = [
        player.position.y + player.height <= 
            platform.position.y,

        player.position.y + player.height + player.velocity.y >= 
            platform.position.y,
    ];
});


Lesson 84:
Below that boolean expression, add another boolean 
expression that checks if the player's x position is 
greater than or equal to the platform's x position 
minus half of the player's width.

platforms.forEach((platform) => {
    const collisionDetectionRules = [
        player.position.y + player.height <= 
            platform.position.y,

        player.position.y + player.height + player.velocity.y >= 
            platform.position.y,
        
        player.position.x >= 
            platform.position.x - player.width / 2,
    ];
});


Lesson 85:
Add one last boolean expression that checks if the player's 
x position is less than or equal to the sum of the platform's 
x position plus the platform's width minus one-third of the 
player's width.

platforms.forEach((platform) => {
    const collisionDetectionRules = [
        player.position.y + player.height <= 
            platform.position.y,

        player.position.y + player.height + player.velocity.y >= 
            platform.position.y,

        player.position.x >= 
            platform.position.x - player.width / 2,

        player.position.x <= 
            platform.position.x + platform.width - player.width / 3,
    ];
});


Lesson 86:
Next, add an if statement that checks if every rule in the 
collisionDetectionRules array is true. Make sure to use the every 
method for this.

Inside the body of the if statement, assign the number 0 to the 
player's y velocity followed by a return statement.

if (collisionDetectionRules.every(rule => rule)) {
    player.velocity.y = 0;
    return;
}


Lesson 87:
Create a new const variable called platformDetectionRules and 
assign it an empty array.


Lesson 88:
Inside that array, add a boolean expression that checks if 
the player's x position is greater than or equal to the 
platform's x position minus half of the player's width.

const platformDetectionRules = [
    player.position.x >= platform.position.x - player.width / 2,
];


Lesson 89:
Below that boolean expression, add another boolean expression 
that checks if the player's x position is less than or equal 
to the sum of the platform's x position plus the platform's 
width minus one-third of the player's width.

player.position.x <= platform.position.x + platform.width - player.width / 3


Lesson 90:
Add another boolean expression that checks if the player's y 
position plus the player's height is greater than or equal 
to the platform's y position.

Below that, add another boolean expression that checks if 
the player's y position is less than or equal to the sum 
of the platform's y position plus the platform's height.

player.position.y + player.height >= platform.position.y,
player.position.y <= platform.position.y + platform.height,


Lesson 91:
Add an if statement that checks if every platform detection 
rule is true. Make sure to use the every method for this.

if (platformDetectionRules.every(rule => rule)){}


Lesson 92:
Inside the body of the if statement, assign 
platform.position.y + player.height to the player's y position.

Then, assign gravity to the player's y velocity.

Now, when you start the game, you will be able to jump 
underneath the platform and collide with it.

if (platformDetectionRules.every(rule => rule)) {
    player.position.y = platform.position.y + player.height;
    player.velocity.y = gravity;
};


Lesson 93:
The last portion of the project is to add the logic for the 
checkpoints. When a player collides with a checkpoint, the 
checkpoint screen should appear.

Start by creating a new class called CheckPoint.


Lesson 94:
Inside that CheckPoint class, add a constructor with x, y and 
z parameters.


Lesson 95:
Inside the constructor, create an object with x and y parameters 
and assign it to the position.
Remember to use the this keyword to access the properties.

You should have a this.position property.

class CheckPoint {
    constructor(x, y, z) {
        this.position = {x, y}
    };
};


Lesson 96:
The next step is to add the width and height to the CheckPoint class.
The width and height should be proportionalSize(40) and 
proportionalSize(70) respectively.

this.width = proportionalSize(40);
this.height = proportionalSize(70);


Lesson 97:
Below the checkpoint's width and height properties, use the this 
keyword to add a new claimed property and assign it the value of 
false. This property will be used to check if the player has 
reached the checkpoint.

this.claimed = false;


Lesson 98:
Now you need to create a draw method for the CheckPoint class.

Inside the draw method, add a fillStyle property to the ctx object 
and set it to "#f1be32".

Below the fillStyle property, use the fillRect method on the ctx 
object and pass in the x, y, width, and height properties as 
arguments.

Don't forget the this keyword.

draw(){
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
}


Lesson 99:
The last method you will need to add to the CheckPoint class is the 
claim method.

Inside the claim method, assign 0 to the width and height properties 
of the CheckPoint instance.

Below those properties, assign Infinity to the y position.

Lastly, assign true to the claimed property.

claim() {
    this.width = 0;
    this.height = 0;
    this.position.y = Infinity;
    this.claimed = true;
}


Lesson 100:
Use const to create a new array called checkpointPositions.
Inside that array, add an object for each of the following 
positions:

x: 1170, y: proportionalSize(80), z: 1
x: 2900, y: proportionalSize(330), z: 2 
x: 4800, y: proportionalSize(80), z: 3 

const checkpointPositions = [
    {x: 1170, y: proportionalSize(80), z: 1},
    {x: 2900, y: proportionalSize(330), z: 2},
    {x: 4800, y: proportionalSize(80), z: 3},
]


Lesson 101:
The next step is to create a list of new checkpoint instances using 
the CheckPoint class.

Start by creating a new const variable called checkpoints and assign 
it checkpointPositions.map().

For the map callback function, pass in checkpoint for the parameter 
and implicitly return the creation of a new CheckPoint instance 
with the checkpoint.x, checkpoint.y and checkpoint.z values passed 
in as arguments.

const checkpoints = checkpointPositions
                        .map(checkpoint 
                        => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z))


Lesson 102:
Inside the animate function, you will need to draw each of the 
checkpoints onto the canvas.

Add a forEach loop that iterates through the checkpoints array.

Inside the callback function, add a checkpoint parameter and for 
the body of the function call the draw method on each checkpoint.

checkpoints.forEach(checkpoint => checkpoint.draw())


Lesson 103:
Inside your condition, add a forEach loop to iterate through the 
checkpoints array. Use checkpoint as the parameter name for the 
callback function.

Inside the loop, use the subtraction assignment operator to 
subtract 5 from the checkpoints's x position.

checkpoints.forEach(checkpoint => {checkpoint.position.x -= 5})


Lesson 104:
Inside your else if statement, add a forEach loop to iterate through 
the checkpoints array. Use checkpoint as the parameter name for the 
callback function.

Inside the loop, use the addition assignment operator to add 5 to 
the checkpoints's x position.

checkpoints.forEach(checkpoint => {checkpoint.position.x += 5})


Lesson 105:
The next step is to create a function that will show the checkpoint 
message when the player reaches a checkpoint.

Create a new arrow function called showCheckpointScreen that takes 
in a msg parameter.


Lesson 106:
Inside the showCheckpointScreen function, set the checkpointScreen 
style.display property to "block".

const showCheckpointScreen = (msg) => {
    checkpointScreen.style.display = "block";
};


Lesson 107:
Set the checkpointMessage's textContent property to the msg parameter.

checkpointMessage.textContent = msg;


Lesson 108:
Create an if statement that checks if 
isCheckpointCollisionDetectionActive is true.

Inside the if statement, add a setTimeout() that takes in a callback 
function and a delay of 2000 milliseconds.

For the callback function, it should set the checkpointScreen 
style.display property to "none".

if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => {checkpointScreen.style.display = "none"}, 2000)
}


Lesson 109:
The last few steps involve updating the animate function to display 
the checkpoint screen when the player reaches a checkpoint.

Start by adding a forEach to the checkpoints array. For the callback 
function, use checkpoint, index and checkpoints for the parameters.

checkpoints.forEach((checkpoint, index, checkpoints) => {})


Lesson 110:
Create a new const variable called checkpointDetectionRules and assign 
it an empty array.

Inside that array, add a boolean expression that checks if the 
player's position.x is greater than or equal to the checkpoint's 
position.x.

checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules = [
        player.position.x >= checkpoint.position.x,
    ];
});


Lesson 111:
Add another boolean expression that checks if the player's position.y 
is greater than or equal to the checkpoint's position.y.

Below that statement, add another boolean expression that checks if 
the player's position.y plus the player's height is less than or 
equal to the checkpoint's position.y plus the checkpoint's height.

Below that statement, add the isCheckpointCollisionDetectionActive 
variable.

checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules =[
        player.position.x >= checkpoint.position.x,
        player.position.y >= checkpoint.position.y,
        player.position.y + player.height <= checkpoint.position.y + checkpoint.height,

        isCheckpointCollisionDetectionActive
    ]
});


Lesson 112:
You will need to add two more checkpoint detection rules to the 
checkpointDetectionRules array.

The first rule should check if the player's x position minus 
the player's width is less than or equal to the checkpoint's 
x position minus the checkpoint's width plus the player's 
width multiplied by 0.9. This will ensure that the player is 
close enough to the checkpoint to claim it.

The second rule should check if index is strictly equal to 0 
or if the previous checkpoint(checkpoints[index - 1].claimed) 
is true. This will ensure that the player can only claim the 
first checkpoint or a checkpoint that has already been 
claimed.

player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9,
index === 0 || checkpoints[index - 1].claimed === true,


Lesson 113:
Next, add an if statement that checks if every rule in the 
checkpointDetectionRules array is true.
Make sure to use the every method for this.

if (checkpointDetectionRules.every(rule => rule)) {}


Lesson 114:
Inside the if statement, call the claim method on the checkpoint object.

if (checkpointDetectionRules.every((rule) => rule)) {
    checkpoint.claim();
};


Lesson 115:
The next step is to write a condition that checks if the player has 
reached the last checkpoint.

Start by adding an if statement that checks if the index is equal 
to the length of the checkpoints array minus one.

You should have an empty if statement with the condition 
index === checkpoints.length - 1

if (index === checkpoints.length - 1) {}


Lesson 116:
Inside the condition, you want to first set the 
isCheckpointCollisionDetectionActive to false.

Then you will need to call the showCheckpointScreen function and 
pass in the string "You reached the final checkpoint!" as an 
argument.

Lastly, you will need to call the movePlayer function and pass 
in the string "ArrowRight" as the first argument, the number 0 
as the second argument, and the boolean false as the third 
argument.

if (index === checkpoints.length - 1) {
    isCheckpointCollisionDetectionActive = false;
    showCheckpointScreen("You reached the final checkpoint!");
    movePlayer("ArrowRight", 0, false);
};


Lesson 117:
The last thing you will need to do is add an else if statement.

Your condition should check if the player's x position is greater 
than or equal to the checkpoint's x position and less than or equal 
to the checkpoint's x position plus 40.

Inside the body of the else if statement, you will need to call 
the showCheckpointScreen function and pass in the string "You 
reached a checkpoint!" as an argument.

if (index === checkpoints.length - 1) {
    isCheckpointCollisionDetectionActive = false;
    showCheckpointScreen("You reached the final checkpoint!");
    movePlayer("ArrowRight", 0, false);
}else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
    showCheckpointScreen("You reached a checkpoint!");
}
*/
