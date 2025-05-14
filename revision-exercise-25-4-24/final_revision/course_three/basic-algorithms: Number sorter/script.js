const sortButton = document.getElementById("sort");

const sortInputArray = (e) => {
    e.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdownVal) => Number(dropdownVal.value));

    console.log(inputValues);

    updateUI(inputValues);
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

// bubble sort
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        //
        console.log(array[i]);

        //

        for (let j = 0; j < array.length - 1; j++) {
            console.log(array[j]);
        }
    }
};

// =============================

// array: 8, 2, 4, 1, 3

// index i: 0, 1, 2, 3, 4

// index j: 0, 1, 2, 3, 4

// selection sort

// =============================

// array: 8, 2, 4, 1, 3

// index i: 0, 1, 2, 3, 4

// index j: 0, 1, 2, 3, 4

// insertion sort

sortButton.addEventListener("click", sortInputArray);

/*
Courage knows no bounds, it begins where comfort ends.
*/
