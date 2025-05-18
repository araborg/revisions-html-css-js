const sortBtn = document.getElementById("sort");

const sortValue = (e) => {
    e.preventDefault();

    const valuesDropdown = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((input) => parseInt(input.value));

    // const sortedValue = bubbleSort(valuesDropdown);
    const sortedValue = selectionSort(valuesDropdown);

    displayUI(sortedValue);
};

const displayUI = (arr) => {
    arr.forEach((el, i) => {
        document.getElementById(`output-value-${i}`).textContent = arr[i];
    });
};

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //

        for (let j = 0; j < arr.length - 1; j++) {
            //

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            //
        }

        //
    }

    return arr;
};

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {}
    }
};

sortBtn.addEventListener("click", sortValue);
