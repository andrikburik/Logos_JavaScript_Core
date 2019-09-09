// Завдання 1

var valueNumber = -2;  

if (valueNumber > 0) {
	console.log('1');
} else if (valueNumber < 0) {
	console.log('-1');
} else {
	console.log('0');
};

// Завдання 2

console.log("Begin");
console.log("Who's there?");

var login = "Admin";
var password = "TheMaster"

if (login === "Admin") {
	console.log(login);
	console.log("Password?");
	
	if (password === "TheMaster") {
		console.log(password);
		console.log("Welcome!");
	} else if (password === "Cancel") {
		console.log("Canceled.");
	} else {
		console.log(password);
		console.log("Wrong password");
	}

} else if (login === "Cancel") {
	console.log("Canceled.")
} else {
	console.log(login);
	console.log("I don't know you")
}

