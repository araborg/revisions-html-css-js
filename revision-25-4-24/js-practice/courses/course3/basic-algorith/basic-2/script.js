const sortBtn = document.getElementById("sort");

// console.log(selectedValues);

sortBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedValues = document.getElementsByClassName("values-dropdown");

    const inputValue = [...selectedValues].map((dropdown) =>
        Number(dropdown.value)
    );

    const displayUI = bubbleSort(inputValue);

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

// Selection sort algorithm

// Insertion sort algorithm
