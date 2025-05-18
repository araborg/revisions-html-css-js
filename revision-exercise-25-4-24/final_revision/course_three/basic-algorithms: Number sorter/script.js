const sortBtn = document.getElementById("sort");
// const valuesDropdown = document.getElementsByClassName("values-dropdown");

// console.log(valuesDropdown);

const sortValue = (e) => {
    e.preventDefault();

    const valuesDropdown = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((input) => parseInt(input.value));

    const sortedValue = bubbleSort(valuesDropdown);
    // console.log(sortedValue);

    displayUI(sortedValue);

    console.log(displayUI(sortedValue));
};

const displayUI = (arr) => {
    arr.forEach((el, i) => {
        document.getElementById(`output-value-${i}`).textContent = arr[i];
    });
};

const bubbleSort = (arr) => {
    console.log(arr);

    return arr;
};

sortBtn.addEventListener("click", sortValue);
