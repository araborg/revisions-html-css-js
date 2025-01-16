const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value
        .map((el) => Number(el))
        .filter((el) => !isNaN(el))
        .sort((a, b) => a - b);

    const mean = getMean(modNum);

    document.querySelector("#mean").textContent = mean;
};

// mean
const getMean = (array) => {
    const mean =
        array.reduce((accu, el) => {
            return accu + el;
        }, 0) / array.length;

    return mean;
};

// median
const getMedian = (array) => {};

// mode

// range

// variance

// standard deviation
