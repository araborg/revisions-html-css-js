const sortButton = document.getElementById("sort");

const sortInputArray = (e) => {
    e.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdownVal) => Number(dropdownVal.value));

    // const sortedValue = bubbleSort(inputValues);
    const sortedValue = selectionSort(inputValues);

    updateUI(sortedValue);
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);

        outputValueNode.textContent = num;
    });
};

// array: 8, 2, 4, 1, 3

// index i: 0, 1, 2, 3, 4

// index j: 0, 1, 2, 3

// bubble sort: sorts to d right
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        // outer loop runs once

        //

        for (let j = 0; j < array.length - 1; j++) {
            // inner loop runs 0, 1, 2, 3 times and
            // starts 4rm index 0 wn a loop ends.

            if (array[j] > array[j + 1]) {
                // j is d current index while j+1 is
                // d immediate index
                const temp = array[j];

                array[j] = array[j + 1];

                array[j + 1] = temp;

                // 1 = temp; 2 = array[j]; 3 = array[j + 1]
                // 1 ----------> 2
                // 2 ----------> 3
                // 3 ----------> 1
            }
        }
    }

    return array;
};

// =============================

// array: 8, 2, 4, 1, 3

// index i: 0, 1, 2, 3, 4

// index j: 0, 1, 2, 3, 4

// selection sort: sorts to d left
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        // minIndex will always changes 4rm 0, 1, 2, 3, 4
        let minIndex = i;

        console.log(array[i]);

        // i = 0: array: 8, 2, 4, 1, 3
        // i = 1: array: 2, 8, 4, 1, 3
        // i = 2: array: 2, 4, 8, 1, 3
        // i = 3: array: 2, 4, 1, 8, 3

        // ds changes d index of minindex
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                // ds is d cause of d changes
                minIndex = j;
            }
        }

        // i = 0: array: 2, 8, 4, 1, 3
        // i = 1: array: 2, 4, 8, 1, 3
        // i = 2: array: 2, 4, 1, 8, 3
        // i = 3: array: 2, 4, 1, 3, 8

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        console.log(array);
    }

    return array;
};

// =============================

// array: 8, 2, 4, 1, 3

// index i: 0, 1, 2, 3, 4

// index j: 0, 1, 2, 3, 4

// insertion sort

sortButton.addEventListener("click", sortInputArray);

/*
Courage knows no bounds, it begins where comfort ends.
*/
