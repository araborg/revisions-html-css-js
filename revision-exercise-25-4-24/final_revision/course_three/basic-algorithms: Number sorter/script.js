const sortButton = document.getElementById("sort");

const sortInputArray = (e) => {
    e.preventDefault();

    const inputValues = [...document.getElementsByClassName("values-dropdown")];

    console.log(inputValues);
};

sortButton.addEventListener("click", sortInputArray);
