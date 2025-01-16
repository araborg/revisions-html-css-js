const calculate = () => {
    const numbers = document.querySelector("#numbers").value;

    const value = numbers.split(/,\s*/g);

    const modNum = value.map((el) => Number(el)).filter((el) => !isNaN(el));
    // .sort((a, b) => a - b);

    const mean = getMean(modNum);
    const median = getMedian(modNum);
    const mode = getMode(modNum);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
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

    return mode;
};

// range

// variance

// standard deviation
