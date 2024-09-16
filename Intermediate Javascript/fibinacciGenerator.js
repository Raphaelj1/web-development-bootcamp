function fibonacciGenerator(n) {
	// starting with an empty array
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
}

//test run the code
// fibonacciGenerator(3);