const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);

  const median =
    array.length % 2 === 0
      ? getMean([
          sorted[array.length / 2 - 1],
          sorted[array.length / 2],
        ])
      : sorted[Math.floor(array.length / 2)];

  return median;
};

const array = [1, 2, 3, 4, 5];

console.log(getMedian(array));
