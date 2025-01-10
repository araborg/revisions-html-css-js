const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    const inputValues = document.getElementsByClassName("values-dropdown");

    console.log(inputValues);
};

sortButton.addEventListener("click", sortInputArray);
