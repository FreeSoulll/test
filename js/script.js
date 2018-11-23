/*let number = 5;
//console.log(number);
//alert(" Вход")
//let answer = confirm('Есть ли вам 18?');
let answer = prompt('Есть ли вам 18?');

console.log(answer);*/


/*let answers = [],
	questions = [
	'как ваше имя?',
	'как ваша фамилия?',
	'сколько вам лет?'
	];
for( let i = 0; i < questions.length; i++) {
	answers[i] = prompt(questions [i])
}

document.write(answers)
*/

/*let age = prompt(' Сколько вам лет?');

if (age > 18) {
	alert('вы можете войти');
} else{
	alert('рановато');
}*/

/*function humanSayHello(obj) {
	document.write('Hello ' + obj + "!");
}
humanSayHello("Ivan");*/

/*function calc(a,b) {
	console.log(a + b)
};
calc(4,5);
calc(4,5);
calc(5,15);*/

function myFirstApp(name, age){
	alert('Привет меня зовут ' + name +' и это моя первая программа');

	function showSkills() {
		let skills =['html ', 'css ', 'git'];
		for (let i =0; i < skills.length; i++) {
			document.write('Я владею ' + skills[i] , '<br>');
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			alert(' Еще не поздно начать');

		} else {
			alert('Самое время');

		}
	}
	checkAge();

	function calcPow(num) {
		console.log(num * num);

	}
	calcPow(4);
}
myFirstApp("Gregory" , 25);