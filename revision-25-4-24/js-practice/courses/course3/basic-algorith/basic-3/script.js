const sortBtn = document.getElementById("sort");

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const values = [...document.getElementsByClassName("values-dropdown")].map(
        (el) => Number(el.value)
    );

    const sortedArray = insertionSort(values);

    updateUI(sortedArray);
});

const updateUI = (array) => {
    array.forEach((el, i) => {
        const HTMLText = document.getElementById(`output-value-${i}`);

        HTMLText.textContent = el;
    });
};

// bubble sort
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[i]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    return array;
};

// selection sort
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let currIndex = i;

        // This works
        // for (let j = i; j < array.length; j++) {
        //     if (array[j] < array[currIndex]) {
        //         currIndex = j;
        //     }
        // }

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[currIndex]) {
                currIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[currIndex];
        array[currIndex] = temp;
    }

    return array;
};

// insertion sort
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let prevIndex = i - 1;
        let currIndex = i;

        // prev     curr    after

        while (prevIndex >= 0 && array[prevIndex] > array[currIndex]) {
            array[prevIndex + 1] = array[prevIndex];

            prevIndex--;
        }

        array[prevIndex + 1] = currIndex;
    }

    console.log(array);

    return array;
};
