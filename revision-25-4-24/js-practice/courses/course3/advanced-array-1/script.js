const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);

    const numbers = array
        .map((el) => Number(el))
        // .filter((el) => !isNaN(el) !== NaN);
        .filter((el) => !isNaN(el));

    const mean = getMean(numbers);

    document.querySelector("#mean").textContent = mean;
};

const getMean = (array) => {
    const sum = array.reduce((accu, el) => accu + el, 0);

    const mean = sum / array.length;

    return mean;
};

const getMedian = (array) => {};
