function show(data) {
	console.log(data);
}

function Robot() {
	this.message = 'Я Robot – я просто працюю';
}

Robot.prototype.setRobotMessage = function(amount) {
		this.message = amount;
}

Robot.prototype.getRobotMessage = function() {
		return this.message;
}

Robot.prototype.work = function() {
		show(this.message);
}

var robot = new Robot();
robot.work();

////////////////////////////////////////////////////////////////////// CoffeRobot

function CoffeRobot() {};

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;


var coffeRobot = new CoffeRobot();
coffeRobot.setRobotMessage('Я CoffeRobot – я варю каву');
coffeRobot.work();

////////////////////////////////////////////////////////////////////// RobotDancer


function RobotDancer() {};

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

var robotDancer = new RobotDancer();
robotDancer.setRobotMessage('Я RobotDancer – я просто танцюю');
robotDancer.work();

////////////////////////////////////////////////////////////////////// RobotCoocker



function RobotCoocker() {};

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var robotCoocker = new RobotCoocker();
robotCoocker.setRobotMessage('Я RobotCoocker – я просто готую');
robotCoocker.work();


var RobotArray = [robot, coffeRobot, robotDancer, robotCoocker];

for (var i = 0; i < RobotArray.length; i++) {
	RobotArray[i].work();
}
