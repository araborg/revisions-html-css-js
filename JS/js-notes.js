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


5
*/
