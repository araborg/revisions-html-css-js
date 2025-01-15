const sortBtn = document.getElementById("sort");

sortBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const values = [...document.getElementsByClassName("values-dropdown")].map(
        (el) => Number(el.value)
    );

    updateUI(values);
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
        for (let j = 0; j < array.length - 1; j++) {}
    }
};

// selection sort

// insertion sort
