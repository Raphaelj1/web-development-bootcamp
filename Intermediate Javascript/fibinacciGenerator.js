function fibonacciGenerator(n) {
	// starting with an empty array
	let output = [];
	if (n === 1) {
		output = [0];
	}
    else if (n === 2) {
		output = [0, 1];
	} 
    else {
		output = [0, 1];
		for (let i = 2; i < n; i++) {
			let sum = output[output.length - 2] + output[output.length - 1];
			output.push(sum);
		}
	}

	return output;
}

//test run the code
// fibonacciGenerator(3);


// Here is another version (which is slower)

/*
let output = [];
	if (n === 1) {
		output = [0];
	}
    if (n === 2) {
		output = [0, 1];
	} 
    while (n > 2) {
		output = [0, 1];
		while (output.length < n) {
			let sum = output[output.length - 2] + output[output.length - 1];
			output.push(sum);
		}
	}

	return output;
*/