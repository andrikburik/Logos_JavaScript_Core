function show(data) {
	console.log(data);
}

function Robot() {

	var message = 'Я Robot – я просто працюю';

	this.setRobotMessage = function(amount) {
		message = amount;
	}

	this.getRobotMessage = function() {
		return message;
	}

	this.work = function() {
		show(message);
	}
}

var robot = new Robot();
robot.work();

////////////////////////////////////////////////////////////////////// CoffeRobot

var coffeRobot = new CoffeRobot();

function CoffeRobot() {
	Robot.call(this);
}

coffeRobot.setRobotMessage('Я CoffeRobot – я варю каву');
coffeRobot.work();

////////////////////////////////////////////////////////////////////// RobotDancer

var robotDancer = new RobotDancer();

function RobotDancer() {
	Robot.call(this);
}

robotDancer.setRobotMessage('Я RobotDancer – я просто танцюю');
robotDancer.work();

////////////////////////////////////////////////////////////////////// RobotCoocker

var robotCoocker = new RobotCoocker();

function RobotCoocker() {
	Robot.call(this);
}

robotCoocker.setRobotMessage('Я RobotCoocker – я просто готую');
robotCoocker.work();


var RobotArray = [robot, coffeRobot, robotDancer, robotCoocker];

for (var i = 0; i < RobotArray.length; i++) {
	RobotArray[i].work();
}
