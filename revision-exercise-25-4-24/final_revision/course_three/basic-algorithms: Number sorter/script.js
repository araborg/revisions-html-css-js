const sortButton = document.getElementById("sort");

const sortInputArray = (e) => {
    e.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdownVal) => Number(dropdownVal.value));

    console.log(inputValues);
};

sortButton.addEventListener("click", sortInputArray);
