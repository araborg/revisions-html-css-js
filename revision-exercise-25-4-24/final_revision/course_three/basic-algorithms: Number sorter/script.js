const sortBtn = document.getElementById("sort");
// const valuesDropdown = document.getElementsByClassName("values-dropdown");

// console.log(valuesDropdown);

const sortValue = (e) => {
    e.preventDefault();

    const valuesDropdown = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((input) => parseInt(input.value));

    console.log(valuesDropdown);
};

sortBtn.addEventListener("click", sortValue);
