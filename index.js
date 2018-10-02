const sumBy = require("lodash/sumBy");

function squareDifference(mean, key) {
	const cachedX = new Map();
	return function(x) {
		const value = x[key] || 0;
		const cachedResult = cachedX.get(value);
		if (cachedResult) return cachedResult;
		const diff = value - mean;
		const result = diff * diff;
		cachedX.set(value, result);
		return result;
	};
}

module.exports = function stdBy(iteranda, key) {
	const n = iteranda.length;
	if (!n) return Number.NaN;
	if (n === 1) return 0;
	const mean = sumBy(iteranda, key) / n;
	const std = Math.sqrt(sumBy(iteranda, squareDifference(mean, key)) / n);
	return std;
};
