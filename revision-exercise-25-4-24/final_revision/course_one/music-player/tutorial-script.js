/*
Learn Basic String and Array Methods by Building a Music Player:

Now let's learn some essential string and array methods like the 
find(), forEach(), map(), and join(). These methods are crucial 
for developing dynamic web applications.

In this project, you'll code a basic MP3 player using HTML, CSS, 
and JavaScript. The project covers fundamental concepts such as 
handling audio playback, managing a playlist, implementing play, 
pause, next, previous, and shuffle functionalities. You'll even 
learn how to dynamically update your user interface based on 
the current song.


const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },

    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },

    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },

    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },

    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },

    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    },

    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
    },

    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },

    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },

    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },
];


Lesson 1:
In this project you will learn basic string and array methods 
by building a music player app. You will be able to play, pause, 
skip, and shuffle songs.

Start by accessing the #playlist-songs, #play, and #pause 
elements with the getElementById() method. Assign them to 
variables playlistSongs, playButton and pauseButton respectively.

const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");


Lesson 2:
Access the #next, #previous and #shuffle elements from the HTML 
file.

Assign them to variables named nextButton, previousButton, and 
shuffleButton, respectively.

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");


Lesson 3:
Next, create an array to store all the songs.

Create an empty allSongs array.

const allSongs = []


Lesson 4:
Inside the allSongs array, create an object with the following 
properties and values:

id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",

const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
];


Lesson 5:
Add a second object with the following keys and values:

id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",


Lesson 6:
Add a third object with the following properties and values:

id: 2,
title: "Still Learning",
artist: "Quincy Larson",
duration: "3:51",
src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",


Lesson 7:
We've added the rest of the songs to the allSongs array for you.

You'll learn about the Web Audio API and how to use it to play songs. 
All modern browsers support the Web Audio API, which lets you 
generate and process audio in web applications.

Use const to create a variable named audio and set it equal to 
new Audio(). This will create a new HTML5 audio element.

const audio = new Audio();
console.log(audio) // <audio preload="auto"></audio>


Lesson 8:
Your music player should keep track of the songs, the current song 
playing, and the time of the current song. To do this, you will 
need to create an object to store this information.

Start by using the let keyword to declare a new variable called 
userData and assign it an empty object.

{ songs, currentSong, songCurrentTime };


Lesson 9:
Since users will be able to shuffle and delete songs from the playlist, 
you will need to create a copy of the allSongs array without mutating 
the original. This is where the spread operator comes in handy.

The spread operator (...) allows you to COPY all elements from one 
array into another. It can also be used to CONCATENATE multiple 
arrays into one. In the example below, both arr1 and arr2 have been 
spread into combinedArr:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

Inside the userData object create a songs property. For the value, spread 
allSongs into an array.

let userData = {
    songs: [...allSongs]
};


Lesson 10:
To handle the current song's information and track its playback time, 
create a currentSong and songCurrentTime properties. Set the values to 
null and 0 respectively.

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};


Lesson 11:
In the previous projects, you used regular functions. But in the 
rest of the projects, you will be working with arrow functions. The 
next few steps will focus on teaching you the basics of arrow 
functions.

An arrow function is an anonymous function expression and a shorter 
way to write functions. Anonymous means that the function does not 
have a name. Arrow functions are always anonymous.

Here is the basic syntax:

() => {}

To create a named arrow function, you can assign the function to 
a variable:

const exampleFunction = () => {
    // code goes here
}

Create a new named arrow function called printGreeting. Inside the 
body of that function use the console.log() method to print the 
string "Hello there!".

const printGreeting = () => {
    console.log("Hello there!")
};


Lesson 12:
To call a named arrow function expression, you can reference the 
function by its name.

exampleArrowFunction();

Below your printGreeting function definition, call the function. 
Open up the console to see the output.

const printGreeting = () => {
    console.log('Hello there!'); 
}

printGreeting();


Lesson 13:
Just like regular functions, arrow functions can accept multiple 
parameters.

Here is an example of a named arrow function with one parameter:

const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

If the function only has one parameter, you can omit the parentheses 
around the parameter list like this:

const greet = name => {
    console.log(`Hello, ${name}!`);
};

Create a new named arrow function called printMessage that has one 
parameter called org. Inside the body of that function, add a 
console statement. Inside that console statement, add the template 
literal ${org} is awesome!.

Below your printMessage function, call the function and pass in the 
string "freeCodeCamp" as an argument.

Open up the console to see the result.

const printMessage = org => {
    console.log(`${org} is awesome!`);
}

printMessage("freeCodeCamp");


Lesson 14:
Just like regular functions, arrow functions can return values.

Here is an example of an arrow function returning the result of 
multiplying two numbers:

const multiplyTwoNumbers = (num1, num2) => {
    return num1 * num2;
}

// Output: 12
console.log(multiplyTwoNumbers(3, 4)); 

Create a new variable called addTwoNumbers and assign it an arrow 
function. This arrow function should take two parameters called 
num1 and num2. Inside the body of the function, return the 
expression of adding num1 and num2.

Below the addTwoNumbers function, add a console statement. Inside 
that console statement, call the addTwoNumbers function and pass 
in the numbers 3 and 4 as arguments.

Open up the console to see the output.

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwoNumbers(3, 4))


Lesson 15:
If the arrow function is returning a simple expression, you can 
omit the return keyword and the curly braces {}. This is called 
an implicit return.

const multiplyTwoNumbers = (num1, num2) => num1 * num2;

If your arrow function has multiple lines of code in the function 
body, then you need to use the return keyword and the curly braces 
{}.

const getTax = (price) => {
    const taxRate = 0.08;
    const tax = price * taxRate;
    return tax;
};

Refactor, or update, your addTwoNumbers function to remove the 
return keyword and the curly braces {}. Your addTwoNumbers 
function should instead use an implicit return.

Open up the console to make sure that you are still getting the 
correct output.

const addTwoNumbers = (num1, num2) => num1 + num2


Lesson 16:
Now it is time to apply what you have learned about arrow functions 
to your music player project.

Start by removing the printGreeting, printMessage, and addTwoNumbers 
functions. Also, remove all of the console statements and function 
calls.


Lesson 17:
To display the songs in the UI (User Interface), you'll need to 
create a function.

Use the arrow function syntax to create a renderSongs function 
that takes in array as its parameter.

const renderSongs = (array) => {};


Lesson 18:
When the songs are displayed on the page, it should show the title, 
artist, duration of each song and a delete button.

In the next few steps, you will learn how to add new HTML for each 
song using the map() method. This method will be explained in more 
detail in the next step.

Start by using const to declare a variable named songsHTML and 
assign it array.map().

const renderSongs = (array) => {
    const songsHTML = array.map();
};


Lesson 19:
The map() method is used to iterate through an array and return a 
new array. It's helpful when you want to create a new array based 
on the values of an existing array. For example:

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => number * 2); 
// doubledNumbers will be [2, 4, 6]

Notice that the map() method takes a function as an argument. This 
is called a CALLBACK function, which is a function that is passed 
to another function as an argument. In the example above, the 
callback function is (number) => number * 2, and it runs on each 
element in the numbers array. The map() method then returns a new 
array with the results.

Pass in a callback function to the map() method. The callback 
function should take song as a parameter, use the arrow function 
syntax, and have an empty body.

const renderSongs = (array) => {
    const songsHTML = array.map((song)=> {})
};


Lesson 20;
Inside the map(), add a return statement with backticks where you 
will interpolate all the elements responsible to displaying the 
song details.

Inside the backticks, create an li element with an id attribute 
of song-${song.id} and a class attribute of playlist-song.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song"></li>
            `;
        })
};

// start correction here


Lesson 21:
Create a button element with class playlist-song-info. Inside the 
button, add a span element with the class playlist-song-title, then 
interpolate song.title as the text.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info">
                        <span class="playlist-song-title">${song.title}</span>
                    </button>
                </li>
            `;
        })
};


Lesson 22:
Inside the button element, create two more span elements.

The first span element should have a class of playlist-song-artist. 
In between the span tags, add ${song.artist}.

The second span element should have a class of playlist-song-duration. 
In between the span tags, add ${song.duration}.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>
                </li>
            `;
        })
};


Lesson 23:
Create another button element with the class playlist-song-delete and 
the aria-label attribute set to Delete interpolated with song.title. 
For the content of the delete icon, paste in the following SVG:

<svg 
    width="20" 
    height="20" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
>
    <circle cx="8" cy="8" r="8" fill="#4d4d62"/>
    <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" 
        fill="white"
    />
</svg>

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
        return `
            <li id="song-${song.id}" class="playlist-song">
                <button class="playlist-song-info">
                    <span class="playlist-song-title">${song.title}</span>
                    <span class="playlist-song-artist">${song.artist}</span>
                    <span class="playlist-song-duration">${song.duration}</span>
                </button>
                
                <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                </button>
            </li>
        `;
        })
};


Lesson 24:
Right now the songsHTML is an array. If you tried to display this as 
is, you would see the songs separated by commas. This is not the desired 
outcome because you want to display the songs as a list. To fix this, 
you will need to join the array into a single string by using the join() 
method.

The join() method is used to concatenate all the elements of an array into 
a single string. It takes an optional parameter called a separator which 
is used to separate each element of the array. For example:

const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"

Chain the join() method to your map() method and pass in an empty string 
for the separator.

To chain multiple methods together, you can call the join() method on the 
result of the map() method. For example:

array.map().join();

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>

                    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                </li>
            `;
        })
        .join("");
};


Lesson 25:
Next, you will need to update the playlist in your HTML document to 
display the songs.

Assign songsHTML to the innerHTML property of the playlistSongs 
element. This will insert the li element you just created into the 
ul element in the already provided HTML file.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>

                    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                </li>
            `;
        })
        .join("");

    playlistSongs.innerHTML = songsHTML;
};


Lesson 26:
Now you need to call the renderSongs function and pass in userData?.songs 
in order to finally display the songs in the UI.

Optional chaining (?.) helps prevent errors when accessing nested 
properties that might be null or undefined. For example:

const user = {
    name: "Quincy",
    address: {
        city: "San Francisco",
        state: "CA",
        country: "USA",
    },
};

// Accessing nested properties without optional chaining:
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining:
const zipCode = user.address?.zipCode; 
// Returns undefined instead of throwing an error

Call the renderSongs function with the songs property of userData. This 
will render the songs in the playlist.

renderSongs(userData?.songs);


Lesson 27:
Now that you have the list of songs displayed on the screen, it would 
be nice to sort them in alphabetical order by title.

Start by creating an arrow function called sortSongs.

const sortSongs = () => {};


Lesson 28:
Now that you have the list of songs displayed on the screen, it would 
be nice to sort them in alphabetical order by title. You could manually 
update the allSongs array, but JavaScript has an array method you can 
use called sort().

The sort() method converts elements of an array into strings and sorts 
them in place based on their values in the UTF-16 encoding.

const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]

Inside your sortSongs function, add the sort() method to userData?.songs.

const sortSongs = () => {
    userData?.songs.sort();
};


Lesson 29:
To sort the songs in alphabetical order by title, you will need to pass 
in a compare callback function into your sort() method.

Here is an example of sorting a list of fruits by name.

const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

In the next few steps, you will learn what each of those if statements is 
doing inside that callback function. But for now, add an empty callback 
function to your sort() method and use a and b for the parameter names.

const sortSongs = () => {
    userData?.songs.sort((a,b) => {});
};


Lesson 30:
The sort() method accepts a compare callback function that defines the 
sort order.

In this example, the first condition (a.name < b.name) checks if the name 
of the first fruit is less than the name of the second fruit. If so, the 
first fruit is sorted before the second fruit.

Strings are compared lexicographically which means they are compared 
character by character. For example, "Apples" is less than "Bananas" 
because "A" comes before "B" in the alphabet.

The reason why this example is returning numbers is because the sort() 
method is expecting a number to be returned. If you return a negative 
number, the first item is sorted before the second item.

const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

Inside your callback function, add an if statement to check if a.title 
is less than b.title. If so, return -1.

const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }
    });
}


Lesson 31:
The second condition in this example checks if a.name > b.name. If so, 
the function returns 1, which sorts the first fruit after the second 
fruit.

const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

Inside your callback function, add another if statement to check if 
a.title is greater than b.title. If so, return the number 1.

const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }
    });
};


Lesson 32:
In the example, if a.name is equal to b.name, then the function 
returns 0. This means that nothing changes and the order of a 
and b remains the same.

const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});

Below your if statements, return the number 0 to leave the order 
of the two elements unchanged.

if (a.name === b.name) {
    return 0;
}

less than (<)       equal(=)        greater than(>)
    -1                  0               1    

const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });
};


Lesson 33:
The last step for the sortSongs function is to return 
userData?.songs.

const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    });

    return userData?.songs;
};


Lesson 34:
Right now the song order has not changed. That is because the 
updates you made using the sort method will not happen until 
the sortSongs function is called.

Change your renderSongs function to call the sortSongs function.
Now you should see the songs in alphabetical order.

From this: renderSongs(userData?.songs);
To: renderSongs(sortSongs());


Lesson 35:
It's time to begin implementing the functionality for playing 
the displayed songs.

Define a playSong function using const. The function should 
take an id parameter which will represent the UNIQUE IDENTIFIER 
of the song you want to play.

const playSong = (id) => {};


Lesson 36:
The find() method retrieves the first element within an array that 
fulfills the conditions specified in the provided callback function. 
If no element satisfies the condition, the method returns undefined.

In the example below, the find() method is used to find the first 
number greater than 25:

const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);

console.log(foundNumber); // Output: 30

Use const to create a variable named song and assign it result of 
the find() method call on the userData?.songs array. Use song as 
the parameter of the find() callback and check if song.id is 
strictly equal to id.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
}

This will iterate through the userData?.songs array, searching 
for a song (with id) that corresponds to the id passed into the 
playSong function.


Lesson 37:
Inside the playSong function, set the audio.src property equal 
to song.src. This tells the audio element where to find the 
audio data for the selected song.

Also, set the audio.title property equal to song.title. This 
tells the audio element what to display as the title of the 
song.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);

    audio.src = song.src;
    audio.title = song.title;
};


Lesson 38:
Before playing the song, you need to make sure it starts from 
the beginning. This can be achieved by the use of the currentTime 
property of the audio object.

Add an if statement to check whether the userData?.currentSong 
is null or if userData?.currentSong.id is strictly not equal 
song.id. Inside if block, set the currentTime property of the 
audio object to 0.

if (userData?.currentSong === null || 
    userData?.currentSong.id !== song.id) { 
    audio.currentTime = 0;
}


Lesson 39:
Add an else block to handle the current song's position in the 
playlist. Within the else block, set the currentTime property 
of the audio object to the value stored in 
userData?.songCurrentTime.

if (userData?.currentSong === null || 
    userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
} else {
    audio.currentTime = userData?.songCurrentTime;
}

Que:
What will this give:
console.log(userData?.currentSong.id); // returns null

Y include it then?
At d beginning wn no song is playing, userData?.currentSong === null 
is true. When another song totally diff 4rm d previous one is clicked
userData?.currentSong.id !== song.id bcoms true.

userData?.currentSong.id: returns d previous clicked song id
song.id: returns d latest clicked song id

1st click ever:
currentSong.id = undefined
song.id = d song clicked on

2nd or other click:
currentSong.id = previous song.id
song.id = d song clicked on

d else{} statement is used in cases d song is already playing and 
click again either after being paused or not. Making it to start 
again from d begining. i.e d same song is clicked again (and again).

audio.currentTime = userData?.songCurrentTime

if (
    userData?.currentSong === null ||
    userData?.currentSong.id !== song.id
) {
    audio.currentTime = 0;
} else {
    // both expression will work perfectly:
    // audio.currentTime = userData?.songCurrentTime;
    audio.currentTime = 0;
}


Lesson 40:
You need to update the current song being played as well as the 
appearance of the playButton element.

Start by accessing the userData object and its currentSong property. 
Set its value equal to the song variable.

Note: You should not use the optional chaining operator ?. in this 
step because userData.currentSong will not be null or undefined at 
this point.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || 
        userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;
};


Lesson 41:
Next, use the classList property and the add() method to add the 
playing class to the playButton element. This will look for the 
class playing in the CSS file and add it to the playButton element.

To finally play the song, use the play() method on the audio variable. 
play() is a method from the web audio API for playing an mp3 file.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || 
        userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;
    playButton.classList.add("playing");

    audio.play();
};


Lesson 42:
In previous steps you built out the functionality for playing a 
song. Now you need to add the functionality to the play button 
so that it will play the current song when it is clicked on.

Use the addEventListener() method.

playButton.addEventListener("click", () => {}


Lesson 43:
Within the arrow function of the event listener, add an if to 
check if userData?.currentSong is falsey(i.e no song selected).

Inside the if block, call the playSong() function with the id 
of the first song in the userData?.songs array. This will ensure 
the first song in the playlist is played first.

playButton.addEventListener("click", () => {
    if (!userData?.currentSong) {
        playSong(userData?.songs[0].id)
    }
});


Lesson 44:
Add an else block. Inside the else block, call the playSong 
function with the id of the currently playing song as an 
argument.

This ensures that the currently playing song will continue 
to play (in case it was paused) when the play button is 
clicked (again).

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    }else {
        playSong(userData?.currentSong.id)
    }
});


Lesson 45:
To play the song anytime the user clicks on it, add an onclick 
attribute to the first button element. Inside the onclick, call 
the playSong function with song.id.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info" onclick="playSong(${song.id})">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>

                    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                </li>
        `;
        })
        .join("");

    playlistSongs.innerHTML = songsHTML;
};


Lesson 46:
Now you need to work on pausing the currently playing song.

Define a pauseSong function using the const keyword and arrow 
function syntax. The function should take no parameters.

const pauseSong = () => {};


Lesson 47:
To store the current time of the song when it is paused, set 
the songCurrentTime of the userData object to the currentTime 
of the audio variable.

Note: You should not use optional chaining for this step because 
userData.songCurrentTime will not be null or undefined at this 
point.

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;
};


Lesson 48:
Use classList and remove() method to remove the .playing class 
from the playButton, since the song will be paused at this point.

To finally pause the song, use the pause() method on the audio 
variable. pause() is a method of the Web Audio API for pausing 
music files.

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;
    playButton.classList.remove('playing');
    audio.pause();
};


Lesson 49:
Now it is time to test out the pause button.

Add a "click" event listener to the pauseButton element, then pass 
in pauseSong as the second argument of the event listener. This is 
the function the event listener will run.

Test out your app by first clicking on the play button followed by 
the pause button. You should see that everything is working as 
expected.

pauseButton.addEventListener("click",  pauseSong);


Lesson 50:
Before you start working on playing the next and previous song, 
you need to get the index of each song in the songs property 
of userData.

const getCurrentSongIndex = () => {}


Lesson 51:
To get the index for the current song, you can use the indexOf() method. 
The indexOf() array method returns the first index at which a given 
element can be found in the array, or -1 if the element is not present.

const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1

Inside your getCurrentSongIndex function, return userData?.songs.indexOf(). 
For the indexOf() argument, set it to userData?.currentSong.

const getCurrentSongIndex = () =>
    userData?.songs.indexOf(userData?.currentSong);


Lesson 52:
You need to work on playing the next song and the previous song. For this, 
you will need a playNextSong and playPreviousSong function.

Use const and arrow syntax to create an empty playNextSong function.

const playNextSong = () => {}


Lesson 53:
Inside the playNextSong function, create an if statement to check if 
the currentSong of userData is strictly equal to null. This will check 
if there's no current song playing in the userData object.

If the condition is true, call the playSong function with the id of 
the first song in the userData?.songs array as an argument.

const playNextSong = () => {
    if(userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    }
}


Lesson 54:
Add an else block to the if statement. Inside the else block, call the 
getCurrentSongIndex() function and assign it to a constant named 
currentSongIndex.

const playNextSong = () => {

    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    }else {
        const currentSongIndex = getCurrentSongIndex() 
    }
}


Lesson 55:
Next, you will need to retrieve the next song in the playlist. For that, 
you will need to get the index of the current song and then add 1 to it.

Create a constant called nextSong and assign 
userData?.songs[currentSongIndex + 1] to it.

Lastly, call the playSong function and pass in nextSong.id as the argument.

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];

        playSong(nextSong.id);
    }
};


Lesson 56:
Now it is time to test out the playNextSong function.

Add a click event listener to the nextButton element, then pass in 
playNextSong as the second argument of your event listener. This is 
the function the event listener will run.

Test out your app by first clicking on the play button followed by 
the next button. You should see that everything is working as 
expected.

nextButton.addEventListener('click', playNextSong)


Lesson 57:
Use const and arrow syntax to create an empty playPreviousSong 
function.

const playPreviousSong = () => {};


Lesson 58:
Within the playPreviousSong function, add an if statement with a 
condition of userData?.currentSong === null. This will check if 
there is currently no song playing. If there isn't any, exit the 
function using a return.

Inside the else block, create a constant named currentSongIndex 
and assign it getCurrentSongIndex().

const playPreviousSong = () => {
    if(userData?.currentSong === null) {
        return;
    } else {
        const currentSongIndex = getCurrentSongIndex();
    }
};


Lesson 59:
To get the previous song, subtract 1 from the currentSongIndex of 
userData?.songs and assign it to the constant previousSong. After 
that, call the playSong function and pass previousSong.id as an 
argument.
const playPreviousSong = () => {
    if (userData?.currentSong === null) return;
      else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong =  userData?.songs[currentSongIndex -1]
        playSong(previousSong.id)
    }
}


Lesson 60:
Add a "click" event listener to the previousButton element, then 
pass in playPreviousSong as the second argument.

previousButton.addEventListener("click", playPreviousSong);


Lesson 61:
If you check closely, you'd see the currently playing song is not 
highlighted in the playlist, so you don't really know which song 
is playing. You can fix this by creating a function to highlight 
any song that is being played.

Using an arrow syntax, create a highlightCurrentSong function. 
Inside the function, use querySelectorAll to get all the 
.playlist-song element and assign to a playlistSongElements 
constant.

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
};
  

Lesson 62:
You need to get the id of the currently playing song. For this, you 
can use userData?.currentSong?.id.

Use getElementById() to get the id of the currently playing song, then 
use template literals to prefix it with song-. Assign it to the constant 
songToHighlight.

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    
    const songToHighlight  = document.getElementById(`song-${userData?.currentSong?.id}`);
};


Lesson 63:
Loop through the playlistSongElements with a forEach method.

The forEach method is used to loop through an array and perform 
a function on each element of the array. For example, suppose you 
have an array of numbers and you want to log each number to the 
console.

const numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate through the array
numbers.forEach((number) => {
    console.log(number); // 1, 2, 3, 4, 5
});

Use the forEach method on playlistSongElements. Pass in songEl as the 
parameter and use arrow syntax to add in an empty callback.

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight  = document.getElementById(`song-${userData?.currentSong?.id}`);
    
    playlistSongElements.forEach((songEl)=>{})
};


Lesson 64:
Within the callback function, use the removeAttribute() method to 
remove the "aria-current" attribute. This will remove the attribute 
for each of the songs.

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight  = document.getElementById(`song-${userData?.currentSong?.id}`);

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current")
    });
};

A non-null aria-current state on an element indicates that this 
element represents the current item within a container or set of 
related elements

The aria-current attribute accepts a limited list of values 
including page, step, location, date, time, true, and false. 
Any non-null string value not included in this list of enumerated 
values is treated as if aria-current="true" were set, not the 
default false value.


Lesson 65:
Now you need to add the attribute back to the currently playing song.

Create an if statement with the condition songToHighlight. For the 
statement, use setAttribute on songToHighlight to pass in "aria-current" 
and "true" as the first and second arguments.

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(
        `song-${userData?.currentSong?.id}`
    );

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};


Lesson 66:
Inside the playSong function, call the highlightCurrentSong function.

After that, play around with the control buttons to see how the 
highlightCurrentSong function works.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;
    playButton.classList.add("playing");

    highlightCurrentSong();
    audio.play();
};


Lesson 67:
Next, you need to display the current song title and artist in the 
player display. Use const and arrow syntax to create an empty 
setPlayerDisplay function.

const setPlayerDisplay = () => {};
  

Lesson 68:
Inside the function, obtain references to the HTML elements <p> 
responsible for displaying the song title and artist.

Access the #player-song-title and #player-song-artist elements with the 
getElementById() method. Assign them to variables playingSong and 
songArtist respectively.

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
};


Lesson 69:
Access the userData?.currentSong?.title and userData?.currentSong?.artist 
properties and assign them to a currentTitle and currentArtist variables 
respectively.

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");

    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
}


Lesson 70:
textContent sets the text of a node and allows you to set or retrieve 
the text content of an HTML element.

<div id="example">This is some text content</div>

const element = document.getElementById('example');
console.log(element.textContent); // Output: This is some text content

Use a ternary operator to check if currentTitle evaluates to a truthy 
value. If it does, set playingSong.textContent to currentTitle. 
Otherwise, set it to an empty string.

Then below that, use a ternary operator to check if currentArtist is 
truthy. If so, set songArtist.textContent to currentArtist. Otherwise, 
set it to empty string.

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;

    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
};


Lesson 71:
To ensure the player's display updates whenever a new song begins playing, 
call the setPlayerDisplay() function within the playSong() function.

Now you should see the song title and the artist show up in the display.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;
    playButton.classList.add("playing");

    highlightCurrentSong();
    setPlayerDisplay();
    audio.play();
};


Lesson 72:
To make the application more accessible, it is important that the play 
button describes the current song or the first song in the playlist.

Start by creating an empty arrow function called setPlayButtonAccessibleText.

This function will set the aria-label attribute to the current song, 
or to the first song in the playlist. And if the playlist is empty, 
it sets the aria-label to "Play".

const setPlayButtonAccessibleText = () => {};


Lesson 73:
You need to get the currently playing song or the first song in the 
playlist. To do that, create a song constant and use the OR operator 
(||) to set it to the current song of userData, or the first song in 
the userData?.songs array.

Don't forget to use optional chaining.

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];
};


Lesson 74:
The setPlayButtonAccessibleText function will set the aria-label attribute 
to the current song, or to the first song in the playlist. And if the 
playlist is empty, it sets the aria-label to "Play".

Use the setAttribute method on the playButton element to set an attribute 
named "aria-label". For the value, use a ternary to set song?.title to 
Play ${song.title} or "Play" if there's no song.title available.

Don't forget you need template interpolation here, so you need to use 
backticks.

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];

    playButton.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : "Play"
    );
};


Lesson 75:
Now, call the setPlayButtonAccessibleText function inside the playSong 
function.

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData?.songCurrentTime;
    }

    userData.currentSong = song;
    playButton.classList.add("playing");

    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    audio.play();
};


Lesson 76:
Use const and arrow syntax to create an empty function called shuffle.

This function is responsible for shuffling the songs in the playlist and 
performing necessary state management updates after the shuffling.

const shuffle = () => {};


Lesson 77:
In earlier steps, you learned how to work with the sort() method to 
sort the songs in alphabetical order. Another use case for the 
callback function is to randomize an array.

One way to randomize an array of items would be to subtract 0.5 from 
Math.random() which produces random values that are either positive 
or negative. This makes the comparison result a mix of positive and 
negative values, leading to a random ordering of elements.

const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5);

Use the sort() method on the userData?.songs array. Pass a callback 
to the method, and return the result of Math.random() - 0.5.

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
}


Lesson 78:
When the shuffle button is pressed, you want to set the currentSong 
to nothing and the songCurrentTime to 0.

Set userData.currentSong to null and userData.songCurrentTime to 0.

Note: You should not use optional chaining for this step because you 
are explicitly setting the currentSong and songCurrentTime properties 
to be null and 0 respectively.

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;
};


Lesson 79:
You should also re-render the songs, pause the currently playing song, 
set the player display, and set the play button accessible text again.

Call the renderSongs function and pass in userData?.songs as an argument. 
Also, call the pauseSong, setPlayerDisplay, and setPlayButtonAccessibleText 
functions.

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};


Lesson 80:
Add a click event listener to the shuffleButton element. For the function 
to run, pass in the shuffle function.

Note: You don't need a callback inside this particular event listener. You 
also don't need to call the shuffle function, just pass in its identifier.

shuffleButton.addEventListener("click", shuffle);


Lesson 81:
It's time to implement a delete functionality for the playlist. This would 
manage the removal of a song from the playlist, handle other related actions 
when a song is deleted, and create a Reset Playlist button.

Use const and arrow syntax to create an empty deleteSong function and pass 
in id as a parameter.

const deleteSong = (id) => {};
  

Lesson 82:
Use the filter() method to remove the song object that matches the id parameter 
from the userData?.songs array.

The filter method keeps only the elements of an array that satisfy the callback 
function passed to it:

const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);

console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]

Use the filter() method on userData?.songs. Pass in song as the parameter of 
the arrow function callback and use implicit return to check if song.id is 
strictly not equal to id. Assign all of that to the userData.songs.

Note: You should not use optional chaining when you assign the result of 
userData?.songs.filter to userData.songs because the allSongs array will not 
be undefined or null at that point.

const deleteSong = (id) => {
    userData.songs = userData?.songs.filter((song) => song.id !== id);
};


Lesson 83:
You need to re-render the songs, highlight it and set the play button's 
accessible text since the song list will change.

Call the renderSongs function and pass in the userData?.songs array as 
an argument, this displays the modified playlist.

After that, call the highlightCurrentSong function to highlight the current 
song if there is any also and the setPlayButtonAccessibleText function to 
update the play button's accessible text.

const deleteSong = (id) => {
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 
};


Lesson 84:
Before deleting a song, you need to check if the song is currently playing. 
If it is, you need to pause the song and play the next song in the playlist.

Use an if statement to check if the userData?.currentSong?.id is equal to 
the id of the song you want to delete.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {}

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 
};


Lesson 85:
If there is a match then set userData.currentSong to null and 
userData.songCurrentTime to 0.

After that, call the pauseSong() function to stop the playback and the 
setPlayerDisplay() function to update the player display.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 
};


Lesson 86:
Within the button element in the renderSongs function, add an onclick 
attribute. For the value, call the deleteSong function and interpolate 
song.id.

const renderSongs = (array) => {
    const songsHTML = array
        .map((song)=> {
            return `
                <li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info" onclick="playSong(${song.id})">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>

                    <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                </li>
            `;
        })
        .join("");

    playlistSongs.innerHTML = songsHTML;
};


Lesson 87:
Next, you need to check if the playlist is empty. If it is, you should reset 
the userData object to its original state.

Use an if statement to check if the userData?.songs has a length of 0.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {}
};


Lesson 88:
If the playlist is empty, you need to create a resetButton element and a 
text for it. This button will only show up if the playlist is empty.

createElement() is a DOM method you can use to dynamically create an element 
using JavaScript. To use createElement(), you call it, then pass in the tag 
name as a string:

// syntax
document.createElement(tagName)

// example
document.createElement('div')
You can also assign it to a variable:

const divElement = document.createElement('div')

Inside your if statement, declare a resetButton constant, then use 
createElement() to create a button.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
    }
};


Lesson 89:
Now that you've created the button, you need to assign it a text. To do 
this, you need to use the createTextNode() method of DOM.

The createTextNode() method is used to create a text node. To use it, 
you call it and pass in the text as a string:

document.createTextNode("your text")
You can also assign it to a variable:

const myText = document.createTextNode("your text")

Use the createTextNode() method to create a Reset Playlist text, then 
assign it to a resetText constant.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");
    }
};


Lesson 90:
Now that you've created the resetButton, you need to assign it an id and 
aria-label attributes. JavaScript provides the id and ariaLabel properties 
you need to use for this.

For example, element.id would set an id attribute, and element.ariaLabel 
would set an aria-label attribute. Both of them accept their values as a 
string.

Set the id attribute of resetButton to reset and its aria-label attribute 
to Reset playlist.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
    }
}


Lesson 91:
You need to add the resetText to the resetButton element as a child, and 
also the resetButton to the playlistSongs element as a child. For this, 
there is an appendChild() method to use.

appendChild() lets you add a node or an element as the child of another 
element. In the example below, the text "Click me" would be attached to 
the button:

const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Click me")

// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)

Use appendChild() to attach resetText to resetButton element, and resetButton 
to the playlistSongs element.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
 
    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);
    }
}


Lesson 92:
Now, it's time to add the reset functionality to the resetButton. This will 
bring back the songs in the playlist when clicked.

Add a click event listener to the resetButton variable. Pass in a callback 
using arrow syntax and leave it empty for now.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {});
    }
}


Lesson 93:
To reset the playlist to its original state, spread allSongs into an array 
and assign it to userData.songs.

Note: You should not use optional chaining for the userData.songs because 
the song will not be null or undefined at this point.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];
        });

    }
}


Lesson 94:
Finally, you should render the songs again, update the play button's 
accessible text, and remove the reset button from the playlist. You 
also need to remove the resetButton from the DOM.

Call the renderSongs() function with sortSongs() as an argument to 
render the songs again in alphabetical order.

Call the setPlayButtonAccessibleText() function to update the play 
button's accessible text.

Remove the reset button from the playlist by calling the remove() method 
on the resetButton variable.

Note: Now you can try removing all the songs to see what happens.

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);

    renderSongs(userData?.songs); 
    highlightCurrentSong(); 
    setPlayButtonAccessibleText(); 

    if (userData?.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];

            renderSongs(sortSongs()); 
            setPlayButtonAccessibleText();
            resetButton.remove();
        });
    }
};


Lesson 95:
All the core functionalities are now in place. The only issue now is that 
the next song does not automatically play when the currently playing song 
ends.

To fix that, you can set up an event listener which will detect when the 
currently playing song ends. The ended event listener is appropriate for 
this. It is fired when the playback of a media reaches the end.

Add an event listener to the audio element which listens for the ended 
event. Pass in a callback using arrow syntax with empty curly braces.

audio.addEventListener('ended', ()=> {})


Lesson 96:
const allSongs = [
    {
        id: 0,
        title: "Hello World",
        artist: "Rafael",
        duration: "0:23",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/hello-world.mp3",
    },
    {
        id: 1,
        title: "In the Zone",
        artist: "Rafael",
        duration: "0:11",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/in-the-zone.mp3",
    },
    {
        id: 2,
        title: "Camper Cat",
        artist: "Rafael",
        duration: "0:21",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/camper-cat.mp3",
    },
    {
        id: 3,
        title: "Electronic",
        artist: "Rafael",
        duration: "0:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/electronic.mp3",
    },
    {
        id: 4,
        title: "Sailing Away",
        artist: "Rafael",
        duration: "0:22",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/sailing-away.mp3",
    },
];

Notice that the album art in the HTML and songs in the userData.songs 
array have changed. We've swapped out the original songs for shorter 
ones that you can use to test your app in the upcoming steps.

Next, you need to check if there is a next song to play. Retrieve the 
current song index by calling the getCurrentSongIndex() function, and 
save it in a currentSongIndex constant.

After that, create a nextSongExists constant that contains the boolean 
value true or false depending on if the next song exists.

const nextSongExists = userData.songs.length - 1 > currentSongIndex ? true : false;

Or:

const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;


audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
});


Lesson 97:
Use an if statement to check if nextSongExists exists, then call the 
playNextSong() function in the if block. This will automatically play 
the next song when the current song ends.

audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } 
});


Lesson 98:
If there is no next song in the playlist, use the else block to reset 
the currentSong key of userData to null, and its songCurrentTime property 
to 0.

audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;  
    }
});


Lesson 99:
With everything set in place, call the pauseSong(), setPlayerDisplay(), 
highlightCurrentSong(), and setPlayButtonAccessibleText() functions to 
correctly update the player.

audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
});

*/
