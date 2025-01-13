const sortBtn = document.getElementById("sort");

// console.log(selectedValues);

sortBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedValues = document.getElementsByClassName("values-dropdown");

    const inputValue = [...selectedValues].map((dropdown) =>
        Number(dropdown.value)
    );

    updateuI(inputValue);
});

const updateuI = (array) => {
    array.forEach((num, i) => {
        const HTMLCollectionText = document.getElementById(`output-value-${i}`);

        HTMLCollectionText.textContent = num;
    });
};

// sort algorithm

// bubble sort algorithm

// selection sort algorithm
