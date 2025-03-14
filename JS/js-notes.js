/*
Ths learnt:
1. Creating a refernce (obj) that has a copy and initial values of variables.

2. Sort method and how to use it.
A function that determines the order of the elements. The function is called 
with the following arguments: a, b
It should return a number where:
    A negative value indicates that a should come before b.
    A positive value indicates that a should come after b.
    Zero or NaN indicates that a and b are considered equal.


3. Map method:
Returns a new array with each element being the result of the callback function.
The map() method is an iterative method. It calls a provided callbackFn function 
once for each element in an array and constructs a new array from the results. 


4. Find method:
The find() method of Array instances returns the first element in the provided 
array that satisfies the provided testing function. If no values satisfy the 
testing function, undefined is returned.


5. Spread opreator [...]
Spread syntax is the opposite of Rest syntax. Spread syntax "expands" an array 
into its elements, while Rest syntax collects multiple elements and "condenses" 
them into a single element.


6. Splitting this:
    if (
        userData?.currentSong === null || 
        userData?.currentSong.id !== song.id 
    ) {
       
    } else {
       
    }

    into this:
    if (userData?.selectedSong === null) {

    } else if (userData?.selectedSong.id !== song.id) {

    } else {

    }

7. 
    if (userData?.prevSong === null || userData?.prevSong?.id !== song.id) {
        userData?.prevSong === null
            ? console.log("null")
            : console.log("userData?.prevSong?.id !== song.id");

    } else {
        console.log("else statement");
    }

8. indexOf():
The indexOf() method returns the first index at which a given element can 
be found in the array, or -1 if it is not present.
N.B: The index in indexOf starts at zero, 0.


9. Diff btw these:
    userData?.currentTime = audio.currentTime; //SyntaxError: Invalid left-hand side in assignment
    userData.currentTime = audio.currentTime;

10. Return
The return statement ends function execution and specifies a value to be 
returned to the function caller.
The return statement can only be used within function bodies. When a return 
statement is used in a function body, the execution of the function is 
stopped. The return statement has different effects when placed in different 
functions:

11. Shuffle:
Math.random() - 0.5

12. Diff between this:
    const songId = id ? id : userData?.prevSong.id;
    
    and this:
    const songId = id ? userData?.prevSong.id : id;


13. Diff btw song.id and song index using indexOf
14. Making undefined to serve as a boolean: !undefined

15. Assigning an existing variable to d result of an array method:     
userData.songs = userData?.songs.filter((song) => song.id !== id);


16. Array/Obj destructuring:
    const [min, sec] = ["0", "22"];
    const { min, sec } = {};



17. Element: remove method:
The Element.remove() method removes the element from the DOM.

18. Element: append() method
The Element.append() method inserts a set of Node objects or 
string objects after the last child of the Element. String 
objects are inserted as equivalent Text nodes.

19. Same code diff usage/purpose
    Nt reusable but avoid declaration of new variable:
    const displaySong = () => {
        const eachSong = userData.songs.map((song) => {})
    }

    reusable fxn: 
    const displaySong = (songs) => {
        const eachSong = songs.map((song) => {})
    }

19. clearTimeout(), clearInterval(), setTimeout(), setInterval()
JavaScript offers two functions clearTimeout() and clearInterval() 
to cancel or stop the timer and halt the execution of code. The 
setTimeout() and setInterval() both return a unique IDs. These IDs 
are used by the clearTimeout() and clearInterval() to clear the 
timer and stop the code execution beforehand.

20. arrow fxn (() => {}) is an anonymous fxn expression
21. optional chaining (?.) for nested obj ppties dt might be null or undefined.

22. why .join() method is used on .map() method
23. .find() method returns d 1st elemt dt fulfilled d stipulated condition

24. .indexOf()
25. .removeAttribute()

26. .setAttribute(arg1, arg2)
27. Math.random() - 0.5

28. .filter()
29. .createElement()

30. .createTextNode()
31. .appendChild()

32. .remove()
33. ended event

34. setPlayButtonAccessibleText() called in: 
    playSong()
    shuffle()
    deleteSong()
        resetButton()
    audio.addEventListener()


35. append, appendChild


36. innerText, innerHTML, textConteny


37. remove(), removeChild()


38. getAttribute(), setAttribute(), removeAttribute()


39. data attribute


40. classList attribute


41. Style attribute


===================================
Football Team Cards:
1. Object.freeze():
The next step is to ensure that you can't modify this object by 
adding or removing any properties. We are going to use a method 
called Object.freeze(obj) which will freeze this object and 
prevent any changes being made to it.

Use the Object.freeze() method to freeze the myFavoriteFootballTeam 
object.

Object.freeze(myFavoriteFootballTeam);

The Object.freeze() static method freezes an object. Freezing 
an object prevents extensions and makes existing properties 
non-writable and non-configurable. A frozen object can no 
longer be changed: new properties cannot be added, existing 
properties cannot be removed, their enumerability, 
configurability, writability, or value cannot be changed, 
and the object's prototype cannot be re-assigned. freeze() 
returns the same object that was passed in.


2. Object destructuring:
const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;

In the last two steps, you have been accessing properties 
from the myFavoriteFootballTeam object using dot notation 
and assigning them to new const variables. But in JavaScript, 
there is an easier way to accomplish the same goal.

N.B: The object destructuring syntax allows you to unpack 
values from arrays and objects:

const developerObj = {
    name: "Jessica Wilkins",
    isDeveloper: true
};

// Object destructuring
const { name, isDeveloper } = developerObj;

Rewrite the two lines of code below using the new 
destructuring syntax. Your answer should be one line 
of code.

const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;

const {sport, team} = myFavoriteFootballTeam;


3. Destructuring obj inside an obj:
Now you need to access the coachName value from the 
myFavoriteFootballTeam.headCoach object using the 
destructuring syntax.

const {coachName} = myFavoriteFootballTeam.headCoach;


4. Function parameters:
Function parameters can be initialized with default values. 
If a function is called without an argument, then the default 
value will be used:

const greeting = (name = "Anonymous") => {
    return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


5. Event, e
playersDropdownList.addEventListener("change", (e) => {}


6. Note the diff btw these two: one will work while the 
other doesn't

Does not work/display the change:
const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr
        .map(({ name, position, number, isCaptain, nickname }) => {
            `
                <div class="player-card">
                    <h2>
                        ${isCaptain ? "(Captain)" : ""} 
                        ${name}
                    </h2>

                    <p>Position: ${position}</p>

                    <p>Number: ${number}</p>

                    <p>
                        Nickname: ${nickname !== null ? nickname : "N/A"}
                    </p>
                </div>
            `;
        })
        .join("");
};


This works:
const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr
        .map(
            ({ name, position, number, isCaptain, nickname }) =>
            `
                <div class="player-card">
                    <h2>
                        ${isCaptain ? "(Captain)" : ""} 
                        ${name}
                    </h2>

                    <p>Position: ${position}</p>

                    <p>Number: ${number}</p>

                    <p>
                        Nickname: ${nickname !== null ? nickname : "N/A"}
                    </p>
                </div>
            `
        )
        .join("");
};


Diff btw the two:
First one has:
=>{;} after the callback fxn while the 2nd does not.




===================================

Local storage

1. showModal() method:
The HTML dialog element has a showModal() method that can 
be used to display a modal dialog box on a web page.

dialogElement.showModal();


2. close() method:
If the user clicks the Cancel button, you want to cancel 
the process and close the modal so the user can continue 
editing. The HTML dialog element has a close() method that 
can be used to close a modal dialog box on a web page.

dialogElement.close();


3. Function of: e.preventDefault():

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

To start, add a submit event listener to your taskForm 
element and pass in e as the parameter of your arrow 
function. 

Inside the curly braces, use the preventDefault() method 
to stop the browser from refreshing the page after 
submitting the form.


4.
const taskData = [];

Create a taskData constant and set it to an empty array. 

This array will store all the tasks along with their 
associated data, including title, due date, and description. 
This storage will enable you to keep track of tasks, display 
them on the page, and save them to localStorage.



5.
let currentTask = {};

Use let to create a currentTask variable and set it to an 
empty object. 

This variable will be used to track the state when editing 
and discarding tasks.


6. toggle() method:
In earlier projects, you learned how to add and remove 
classes from an element with el.classList.add() and 
el.classList.remove(). 
Another method to use with the classList property is the 
toggle method.

The toggle method will add the class if it is not present 
on the element, and remove the class if it is present on 
the element.

element.classList.toggle("class-to-toggle");


7. unshift() method:
unshift() is an array method that is used to add one or more 
elements to the beginning of an array.


8. this keyword:
To enable editing and deleting for each task, add an 
onclick attribute to both buttons. Set the value of 
the onclick attribute to editTask(this) for the Edit 
button and deleteTask(this) for the Delete button. 

The editTask(this) function will handle editing, while 
the deleteTask(this) function will handle deletion.

this is a keyword that refers to the current context. 

In this case, this points to the element that triggers 
the event – the buttons.


9. parentElement:
You need to find the index of the task you want to delete 
first.

Create a dataArrIndex variable and set its value using the 
findIndex() method on the taskData array. Pass item as the 
parameter for the arrow callback function, and within the 
callback, check if the id of item is equal to the id of 
the parentElement of buttonEl.

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );
}


10. DOM:
You need to remove the task from the DOM using remove() 
and from the taskData array using splice().


11. splice(index, items, replacement)
splice() is an array method that modifies arrays by 
removing, replacing, or adding elements at a specified 
index, while also returning the removed elements. 

It can take up to three arguments: the first one is the 
mandatory index at which to start, the second is the 
number of items to remove, and the third is an optional 
replacement element. 


12. localStorage:
const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
];

localStorage offers methods for saving, retrieving, and 
deleting items. The items you save can be of any JavaScript 
data type.

For instance, the setItem() method is used to save an item, 
and the getItem() method retrieves the item. To delete a 
specific item, you can utilize the removeItem() method, or 
if you want to delete all items in the storage, you can use 
clear().

Here's how you can save an item:

Example Code
localStorage.setItem("key", value); // value could be string, 
number, or any other data type.

A myTaskArr array has been provided for you. Use the setItem() 
method to save it with a key of data.

After that, open your browser console and go to the 
Applications tab, select Local Storage, and the freeCodeCamp 
domain you see.

localStorage.setItem("data", myTaskArr);


13.
If you check the "Application" tab of your browser console, 
you'll notice a series of [object Object]. This is because 
everything you save in localStorage needs to be in string 
format.

To resolve the issue, wrap the data you're saving in the 
JSON.stringify() method. Then, check local storage again 
to observe the results.

localStorage.setItem("data", JSON.stringify(myTaskArr));


14.
Now that you have the myTaskArr array saved in localStorage 
correctly, you can retrieve it with getItem() by specifying 
the key you used to save the item.

Use the getItem() method to retrieve the myTaskArr array 
and assign it to the variable getTaskArr. Then, log the 
getTaskArr variable to the console to see the result.

localStorage.setItem("data", JSON.stringify(myTaskArr));

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)


15.
The item you retrieve is a string, as you saved it with 
JSON.stringify(). To view it in its original form before 
saving, you need to use JSON.parse().

Use getItem() to retrieve the myTaskArr array again. This 
time, wrap it inside JSON.parse(), assign it to the 
variable getTaskArrObj and log the getTaskArrObj to the 
console.

Check the console to see the difference between getTaskArr 
and getTaskObj.

localStorage.setItem("data", JSON.stringify(myTaskArr));

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);


16.
You can use localStorage.removeItem() to remove a specific 
item and localStorage.clear() to clear all items in the 
local storage.

Remove the data item from local storage and open the console 
to observe the result. You should see null.

localStorage.setItem("data", JSON.stringify(myTaskArr));

localStorage.removeItem("data");

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);


17.
Using localStorage.clear() won't just delete a single 
item from local storage but will remove all items.

Remove localStorage.removeItem() and use 
localStorage.clear() instead. You don't need to pass in 
anything. You should also see null in the console.

const myTaskArr = [
    { task: "Walk the Dog", date: "22-04-2022" },
    { task: "Read some books", date: "02-11-2023" },
    { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("data", JSON.stringify(myTaskArr));

localStorage.clear();

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);


18. trim():

String.prototype.trim()
The trim() method of String values removes whitespace from 
both ends of this string and returns a new string, without 
modifying the original string.

To return a new string with whitespace trimmed from just 
one end, use trimStart() or trimEnd().


19. 
attributes: NamedNodeMap {0: value, 1: type, 2: name, 3: id, 4: class, value: value, type: type, name: name, id: id, class: class, …}


20.




Recursion:
1. Recursion is a programming concept where a function 
calls itself. 

This can reduce a complex problem into simpler sub-problems,
until they become straightforward to solve.

In most cases, d fxn being called inside d other fxn (both
of wc r d same), only changes d value of d argument of d fxn
e.g
const countdown = (number) => {
    console.log(number);

    // base case:
    if (number === 0) {
        console.log("Reached base case");

        return;
    } else {
        // recursive case:
        countdown(number - 1); <=========

        console.log(number);
    }
};

const decimatToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
    } else {
        return 
            decimatToBinary(Math.floor(input / 2)) <=========
            + 
            (input % 2);
    }
};


2. keydown event listener:
The keydown event fires every time a user presses a key on their 
keyboard, and is a good way to add more interactivity to input 
elements.

numberInput.addEventListener("keydown", () => {});

In d above case, d eventlistener was added to d input elemt.


3. event object
Whenever an event listener is triggered by an event, an event 
object is created automatically. You don't always need to use 
this object, like with your click handler above, but it can be 
useful to access information about the event that was triggered.

First, pass e as a parameter to your callback function. Remember 
that e is a common parameter name for the event object. Next, 
log e to the console in the body of your callback function.


4. falsy values:
 In JavaScript, 
some common falsy values you'll see are null, undefined, the 
number 0, and empty strings.

Rather than check if a value is equal to a falsy value, you can 
use the logical NOT operator (!) to check if the value itself 
is falsy. For example:

const num = 0;
console.log(num === 0); // true
console.log(!num); // true


5. parseInt()
A good way to check and normalize numbers in JavaScript is 
to use the built-in parseInt() function, which converts a 
string into an integer or whole number. 

parseInt() function to convert string into number.

parseInt() takes at least one argument, a string to be 
converted into an integer, and returns either an integer 
or NaN which stands for Not a Number. For example:

parseInt(takes at least one string argument, to be 
converted into an integer, and returns either an integer 
or NaN).

parseInt() returns either a Number or NaN.

parseInt(2.2); // 2
parseInt("2e+3"); // 2
parseInt("e") // NaN


6. isNaN()
isNaN() function. This function takes in a string or number 
as an argument, and returns true if it evaluates to NaN. 

For example:
isNaN(string or number) returbs true wn d string/number === NaN
else it returns false.

isNaN() returns trues for argumts dt r nt a Number.

isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false


7. window.alert():
Note that alert() is a method on the window object in the browser, 
so you can use either window.alert() or alert().


8. Binary numbers:
Binary numbers are a base-2 number system. Unlike the base-10 or 
decimal number system we use every day that uses 10 digits (0-9) 
to form numbers, the binary number system only has two digits, 
0 and 1. 

In computer science, these binary digits are called bits, 
and are the smallest unit of data computers can process. For 
computers, 0 represents false or "off", and 1 represents true or 
"on".

Note: Binary numbers can be long sequences that start with 0, so 
they are often represented as strings.


9.
In the base-2 number system, the rightmost digit represents the 
ones place, the next digit to the left represents the twos place, 
then the fours place, then the eights place, and so on. In this 
system, each digit's place value is two times greater than the 
digit to its right.

Here are numbers zero to nine in the base-10 and base-2 number 
systems:

| Base-10 | Base-2 |
| ------- | ------ |
|    0    |  0     |
|    1    |  1     |
|    2    |  10    |
|    3    |  11    |
|    4    |  100   |
|    5    |  101   |
|    6    |  110   |
|    7    |  111   |
|    8    |  1000  |
|    9    |  1001  |

Notice that binary numbers are formed from left to right, from 
the digit with the greatest place value on the left, to the least 
significant on the right. For example, the number 3 in binary is 
11, or 1 in the twos place and 1 in the ones place. Then for the 
number 4, a digit to represent the fours place is included on the 
left and set to 1, the twos place is 0, and the ones place is 0.

In your decimalToBinary function, convert the number 10 into 
binary and return it as a string.


10.
Bits are often grouped into an octet, which is an 8-bit set known 
as a byte. A byte can represent any number between 0 and 255. Here 
are the placement values for each bit in a byte:

128 | 64 | 32 | 16 | 8 | 4 | 2 | 1

Because bits are often grouped into bytes, it's common to see 
binary numbers represented in groups of eight, sometimes with 
leading zeros. 

For example, the number 52 can be represented as 110100, or 
00110100 with leading zeros. Here's how that breaks down with 
the placement values:

128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
  0 |  0 |  1 |  1 | 0 | 1 | 0 | 0


11. while loop:
A while loop is used to run a block of code as long 
as the condition evaluates to true, and the condition 
is checked before the code block is executed.

The tricky part about while loops is that, if you're not careful, 
they can run forever. This is called an infinite loop, and can 
cause your browser to crash.

To avoid infinite loops, you need to make sure that the condition 
for the while loop eventually becomes false. In this case, you want 
to make sure that the input variable eventually becomes 0.

while (input > 0) {}


12. Math.floor():
Math.floor() function to round down the number.


13. call stack:
const a = () => {
    return "freeCodeCamp " + b();
};

const b = () => {
    return "is " + c();
};

const c = () => {
    return "awesome!";
};

console.log(a()); // freeCodeCamp is awesome!


14.
In computer science, a stack is a data structure where items 
are stored in a LIFO (last-in-first-out) manner. If you imagine 
a stack of books, the last book you add to the stack is the first 
book you can take off the stack. Or an array where you can only 
.push() and .pop() elements.

The call stack is a collection of function calls stored in a 
stack structure. When you call a function, it is added to the 
top of the stack, and when it returns, it is removed from 
the top / end of the stack.

Remember that the call stack is a LIFO data structure, so 
the last function is added to the top or end of the stack, 
similar to pushing an element into an array.


15. recursive function:
A recursive function is a function that calls itself over 
and over. But you have to be careful because you can easily 
create an infinite loop. 

base case:
That's where the base case comes in. The base case is when 
the function stops calling itself, and it is a good idea 
to write it first.

Since your countdown() function will count down from a given 
number to zero, the base case is when the number parameter is 
equal to 0. Then it should return to break out of its 
recursive loop.


16. recursive case:
Recursive functions also have a recursive case, which is where 
the function calls itself.

When writing the recursive case, you need to remember two things:

1. What is the base case?
2. What is the least amount of work you need to do to get closer 
to the base case?


17. log number to the console after your recursive 
countDownAndUp(number - 1) function call.

const countDownAndUp = (number) => {
    console.log(number);

    if (number === 0) {
        console.log("Reached base case");
        
        return;
    } else {
        countDownAndUp(number - 1);

        console.log(number);
    }
};

countDownAndUp(3);

3
2
1
0

Reached base case

1
2
3

Now you should see a countdown from 3 to 0, followed by Reached 
base case, and a count from 1 to 3. 

This is because, after the 
recursive loop is finished, the function will continue to execute 
the code after the recursive call. This is why you see Reached 
base case before the count from 1 to 3.


18. String() function:
For a reliable way to convert a value into a string, even falsy 
values like null and undefined, you can use the String() 
function. For example:

const num = 5;

console.log(String(num)); // "5"
console.log(String(null)); // "null"


19. setTimeout function:
The setTimeout function takes two arguments: a callback function 
and a number representing the time in milliseconds to wait before 
executing the callback function.

For example, if you wanted to log Hello, world! to the console 
after 3 seconds, you would write:

setTimeout(() => {
    console.log("Hello, world!");
}, 3000);

setTimeout() function is asynchronous, meaning that it doesn't 
stop the execution of the rest of your code.


20. Recursion challenges:
https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php#google_vignette


https://dev.to/codeguppy/practice-recursion-in-javascript-with-these-8-coding-challenges-for-beginners-25bm

https://www.freecodecamp.org/news/recursion-in-javascript-1608032c7a1f/



21. LIFO
Recall that the call stack is a LIFO (last in, first out) 
data structure. This means that, as functions are CALLED, 
they are added to the top or end of the stack, and as 
functions RETURN, they are removed from the top of the 
stack.


22.
const convertToRoman = (input) => {
    const romans = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    const result = [];

    romans.forEach((arr) => {
        while (input >= arr[1]) {
            result.push(arr[0]);

            input -= arr[1];
        }
    });

    return result.join("");
};


23.
An array item can be assigned another array item or an index.

    array[b4currVal + 1] = array[b4currVal];

    array[b4currVal + 1] = currValue;


24.
Insertion sort algorithm:
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let b4currVal = i - 1;
        let currValue = i;

        ***********************
        b4       curr    after
        i - 1      i     i + 1
        ***********************

            while (b4currVal >= 0 && array[b4currVal] > array[currValue]) {
                array[b4currVal + 1] = array[b4currVal];
    
                b4currVal--;
            }
    
            array[b4currVal + 1] = currValue;
        }
    
        return array;
    };

25. Set:
A Set is a data structure that only allows unique values. 
If you pass an array into the Set constructor, it will 
remove any duplicate values.

if (new Set(Object.values(counts)).size === 1) {
    return null;
}


26.


27.


28.


29.


30.



1.


2.


3.


4.


5.


6.


7.


8.


9.


10.

*/
