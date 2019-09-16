function show(argument) {
	console.log(argument)
}

////////// 5 ///////////
show('-----5-----');

var a = 2;
var b = 3;
var c = 1;

if (a !== 0 && b !== 0 && c !== 0) {
	var discriminant = b*b - 4*a*c;

	if (discriminant > 0) {
		var x1 = (-b + Math.sqrt(discriminant)) / 2*a;
		var x2 = (-b - Math.sqrt(discriminant)) / 2*a;
		show('Рівняння має два корені: ');
		show('Перший корінь: ' + x1 + ', ' + 'Другий корінь: ' + x2)
	} else if (discriminant = 0) {
		var x = -(b / 2*a);
		show('Рівняння має один корінь: ' + x)
	} else {
		show('Рівняння не має коренів.')
	}
}

if (a === 0) {
	show('Квадратне рівняння не повинне містити в змінних число 0!')
}


// 5. У три змінні a, b і c записані три дійсних числа. Створити програму, яка буде знаходити і 
// виводити на екран речові корені квадратного рівняння ax2 + bx + c = 0, або повідомляти, що 
// кореня немає. 