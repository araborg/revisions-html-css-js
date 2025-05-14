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

// index: 0, 1, 2, 3, 4

// bubble sort
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        //

        //

        for (let j = 0; j < array.length - 1; j++) {}
    }
};

// selection sort

// insertion sort

sortButton.addEventListener("click", sortInputArray);

/*
Courage knows no bounds, it begins where comfort ends.
*/
