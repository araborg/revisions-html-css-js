const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value.map((el) => Number(el)).filter((el) => !isNaN(el));
    // .sort((a, b) => a - b);

    const mean = getMean(modNum);
    const median = getMedian(modNum);

    console.log(median);

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
const getMedian = (array) => {
    const sort = array.sort((a, b) => a - b);

    // const firstNum = sort.length / 2 - 1;
    // const secondNum = sort.length / 2;

    const median =
        sort.length % 2 === 0
            ? getMean([array[sort.length / 2 - 1], array[ort.length / 2]])
            : array[Math.floor(sort.length / 2)];

    return median;
    // console.log(firstNum, secondNum);
};

// mode

// range

// variance

// standard deviation
