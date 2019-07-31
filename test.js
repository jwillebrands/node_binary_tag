const fs = require("fs");

const raw = fs.readFileSync("testdata.json");
const testdata = JSON.parse(raw);
const expected = [0, 1, 1, 2, 3, 5, 8];

if (!testdata || !Array.isArray(testdata)) {
	throw new Error("no testdata");
}

if (testdata.length !== expected.length) {
	throw new Error("Arrays not same length");
}

function matchesExpected(value, index) {
	return value === expected[index];
}

if (!testdata.every(matchesExpected)) {
	throw new Error("content differs from expected");
}