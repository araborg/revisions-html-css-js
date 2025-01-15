const sortBtn = document.getElementById("sort");

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const values = [...document.getElementsByClassName("values-dropdown")].map(
        (el) => Number(el.value)
    );

    const sortedArray = bubbleSort(values);

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
        for (let j = i + 1; j < array.length - 1; j++) {
            if (array[j] > array[i]) {
                const temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    console.log(array);

    return array;
};

// selection sort

// insertion sort
