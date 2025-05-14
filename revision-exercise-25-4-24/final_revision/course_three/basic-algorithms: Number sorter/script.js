const sortButton = document.getElementById("sort");

const sortInputArray = (e) => {
    e.preventDefault();

    const inputValues = [
        ...document.getElementsByClassName("values-dropdown"),
    ].map((dropdownVal) => Number(dropdownVal.value));

    // console.log(inputValues);

    updateUI(inputValues);
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);

        outputValueNode.textContent = num;
    });
};

sortButton.addEventListener("click", sortInputArray);
