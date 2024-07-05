/*
Ths learnt:
1. Creating a refernce (obj) that has a copy and initial values of variables.
2. Sort method and how to use it.
3. Map method and how to use it.
4. Find method and how to use it.

5. Spread opreator [...]

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
The indexOf() method of Array instances returns the first index at which a 
given element can be found in the array, or -1 if it is not present.
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
