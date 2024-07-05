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
N.B: The index starts at zero, 0.


9.
10.
11.
12.

13.
14.
15.

16.
17.
18.
19.
20.


*/
