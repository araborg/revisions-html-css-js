const sortBtn = document.getElementById("sort");

// console.log(selectedValues);

sortBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedValues = document.getElementsByClassName("values-dropdown");

    const inputValue = [...selectedValues].map((dropdown) =>
        Number(dropdown.value)
    );

    const displayUI = selectionSort(inputValue);

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

        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            const temp = array[i];

            console.log(temp);

            // array[i] = array[minIndex];
            // array[minIndex] = temp;
        }
    }

    return array;
};

// Insertion sort algorithm
