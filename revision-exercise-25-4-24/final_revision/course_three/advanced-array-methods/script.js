const getMean = (array) =>
	array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
	// slice() helps mk a copy of d array
	const sorted = array.slice().sort((a, b) => a - b);

	const median =
		// divisn happens bf minus: array.length / 2 - 1
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
	// tells you every value appears the same number of times.
	if (new Set(Object.values(counts)).size === 1) {
		return null;
	}

	const highest = Object.keys(counts).sort(
		// we mk use of d value despite d fact we started with d key
		(a, b) => counts[b] - counts[a] // arrange d keys in a descending order
	)[0];

	// get only d key(s) dt equals d highest value
	const mode = Object.keys(counts).filter(
		(el) => counts[el] === counts[highest]
	);

	// d mode is returned as an array
	return mode.join(", ");
};

const getRange = (array) => {
	// array needs to be destructure for it to be iterable hence [...array]
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

	const numbers = array
		.map((el) => Number(el))
		.filter((el) => !isNaN(el));

	const mean = getMean(numbers);
	const median = getMedian(numbers);
	const mode = getMode(numbers);

	const range = getRange(numbers);

	const variance = getVariance(numbers);
	const standardDeviation = getStandardDeviation(numbers);

	// add event listeners
	document.querySelector("#mean").textContent = mean;
	document.querySelector("#median").textContent = median;
	document.querySelector("#mode").textContent = mode;

	document.querySelector("#range").textContent = range;

	document.querySelector("#variance").textContent =
		variance;
	document.querySelector(
		"#standardDeviation"
	).textContent = standardDeviation;
};
