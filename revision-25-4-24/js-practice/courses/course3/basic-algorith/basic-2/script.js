const sortBtn = document.getElementById("sort");
const selectedValues = document.getElementsByClassName("values-dropdown");

// console.log(selectedValues);

sortBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = [...selectedValues].map((dropdown) =>
        Number(dropdown.value)
    );

    console.log(inputValue);
});
