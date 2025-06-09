const getMean = (array) =>
	array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
	const sorted = array.slice().sort((a, b) => a - b);

	const median =
		// divisn happens bf minus
		array.length % 2 === 0
			? getMean([
					sorted[array.length / 2 - 1],
					sorted[array.length / 2],
			  ])
			: sorted[Math.floor(array.length / 2)];

	return median;
};

const getMode = (array) => {
	const counts = {};

	array.forEach((el) => {
		counts[el] = (counts[el] || 0) + 1;
	});

	// If the size property of this Set is equal to 1, that
	// tells you every value appears the same number of times
	if (new Set(Object.values(counts)).size === 1) {
		return null;
	}

	const highest = Object.keys(counts).sort(
		(a, b) => counts[b] - counts[a]
	)[0];

	const mode = Object.keys(counts).filter(
		(el) => counts[el] === counts[highest]
	);

	return mode.join(", ");
};

const getRange = (array) => {
	return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
	const mean = getMean(array);

	const variance =
		array.reduce((acc, el) => {
			const difference = el - mean;

			const squared = difference ** 2;

			return acc + squared;
		}, 0) / array.length;

	return variance;
};

const getStandardDeviation = (array) => {
	const variance = getVariance(array);

	const standardDeviation = Math.sqrt(variance);

	return standardDeviation;
};

const calculate = () => {
	const value = document.querySelector("#numbers").value;

	const array = value.split(/,\s*/g);

	console.log(array);
};

const array = [1, 2, 3, 3, 4, 4, 5, 6];

// console.log(getMode(array));
