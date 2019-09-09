console.log("Begin");
console.log("Who's there?");

var login = "Admin";
var password = "TheMaster";

switch(login) {
	case 'Admin':
		console.log("Admin");
		console.log("Password?");

		switch(password) {
			case "TheMaster":
				console.log(password);
				console.log("Welcome!");
				break;

			case "Cancel":
				console.log("Canceled.");
				break;

			default:
				console.log(password);
				console.log("Wrong password");
				break;
		}

		break;

	case 'Cancel': 
		console.log("Canceled.");
		break;

	default: 
		console.log(login);
		console.log("I don't know you")
}