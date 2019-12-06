function show(argument) {
	console.log(argument);
};

function checkAge(age) {
	age >= 18 ? show(true) : show('Do you have permision?');
}

checkAge(12);

