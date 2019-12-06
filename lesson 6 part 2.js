function show(argument) {
	console.log(argument);
};

function min(numbers) {
	var minNumber = numbers[0];
	for (var i = 0; i < numbers.length; i++) {
		if (minNumber > numbers[i+1]) {
			minNumber = numbers[i+1];
		}
	};
	return minNumber;
}

var numbers = [10, 2, -18, 27, 237, 0]

show(min(numbers));

