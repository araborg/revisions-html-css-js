const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);
};
