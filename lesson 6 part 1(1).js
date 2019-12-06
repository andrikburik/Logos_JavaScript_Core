function show(argument) {
	console.log(argument);
};

function checkAge(age) { 
    var title = age >= 18  || 'Do You have permission?';
    return title;
};


show(checkAge(12));