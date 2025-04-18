const sortBtn = document.getElementById("sort");

// console.log(selectedValues);

sortBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedValues = document.getElementsByClassName("values-dropdown");

    const inputValue = [...selectedValues].map((dropdown) =>
        Number(dropdown.value)
    );

    // const displayUI = insertionSort(inputValue);

    const displayUI = inputValue.sort((a, b) => a - b);

    updateuI(displayUI);
});

const updateuI = (array) => {
    array.forEach((num, i) => {
        const HTMLCollectionText = document.getElementById(`output-value-${i}`);

        HTMLCollectionText.textContent = num;
    });
};

// sort algorithm

// Bubble sort algorithm
const bubbleSort = (array) => {
    //

    for (let i = 0; i < array.length; i++) {
        //

        for (let j = 0; j < array.length - 1; j++) {
            //

            if (array[j] > array[j + 1]) {
                //

                // const temp = array[j + 1];
                // array[j + 1] = array[j];
                // array[j] = temp;

                // or

                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                //
            }

            //
        }

        //
    }

    return array;
};

// Selection sort algorithm
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

// Insertion sort algorithm
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let b4currVal = i - 1;
        let currValue = i;

        /*
            b4       curr    after
            i - 1      i     i + 1
        */

        while (b4currVal >= 0 && array[b4currVal] > array[currValue]) {
            array[b4currVal + 1] = array[b4currVal];

            b4currVal--;
        }

        array[b4currVal + 1] = currValue;
    }

    return array;
};
