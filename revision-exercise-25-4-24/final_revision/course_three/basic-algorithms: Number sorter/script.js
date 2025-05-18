const sortBtn = document.getElementById("sort");

const sortValue = (e) => {
    e.preventDefault();

    const valuesDropdown = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((input) => parseInt(input.value));

    const sortedValue = bubbleSort(valuesDropdown);

    displayUI(sortedValue);
};

const displayUI = (arr) => {
    arr.forEach((el, i) => {
        document.getElementById(`output-value-${i}`).textContent = arr[i];
    });
};

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            console.log(i, j);
        }
    }
};

sortBtn.addEventListener("click", sortValue);
