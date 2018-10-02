const sum = require("lodash/sum");
const map = require("lodash/map");

module.exports = function stdBy(iterator, key) {
	const n = iterator.length;
	const mean = sum(iterator.map(obj => obj[key])) / n;
	const std = Math.sqrt(
		sum(map(iterator, x => Math.pow(x[key] - mean, 2) / n))
	);
	return std;
};
