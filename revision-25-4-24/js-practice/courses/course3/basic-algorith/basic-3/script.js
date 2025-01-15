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
