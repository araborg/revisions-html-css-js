const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value.map((el) => Number(el)).filter((el) => !isNaN(el));
    // .sort((a, b) => a - b);

    const mean = getMean(modNum);
    const median = getMedian(modNum);
    const mode = getMode(modNum);
    const range = getRange(modNum);
    const variance = getVariance(modNum);

    console.log(variance);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
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

    const median =
        sort.length % 2 === 0
            ? getMean([array[sort.length / 2 - 1], array[sort.length / 2]])
            : array[Math.floor(sort.length / 2)];

    return median;
};

// mode
const getMode = (array) => {
    const obj = {};

    array.forEach((el) => {
        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    });

    // array.forEach((el) => {
    //     obj[el] = obj(el || 0) + 1;
    // });

    // console.log(new Set(Object.values(obj)).size);

    if (new Set(Object.values(obj)).size === 1) {
        return null;
    }

    const highest = Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];

    const mode = Object.keys(obj).filter((el) => obj[el] === obj[highest]);

    return mode.join(", ");
};

// range
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

// variance
const getVariance = (array) => {
    // const mean = getMean(array);

    // const difference = array.map((el) => el - mean);

    // const squared = difference.map((el) => el ** 2);

    // const variance =
    //     squared.reduce((accu, el) => {
    //         return accu + el;
    //     }, 0) / array.length;

    // Or:

    const variance =
        array.reduce((accu, el) => {
            const mean = getMean(array);

            const difference = el - mean;

            const squared = difference ** 2;

            return accu + squared;
        }, 0) / array.length;

    return variance;
};

// standard deviation
