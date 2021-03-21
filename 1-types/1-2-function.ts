{
	// JavaScript 💩
	/* function jsAdd(num1, num2) {
		return num1 + num2;
	}
	// TypeScript ✨
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript 💩
	function jsFetchNum(id) {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}
	// TypeScript ✨
	function fetchNum(id: string): Promise<number> {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	} */

	// => 
	// 타입 정보를 기입함으로써 조금 더 높은 문서화 효과.
	// "함수는 이런거를 받아서 이런일을 하는구나" 직관적인 이해에 도움

	// JavaScript ✨ => TypeScript 
	// 자바스크립트에서 사용 가능하고, 타입스크립트에서 더 활용도를 높일 수 있는 함수 정의 방법

	// Optional parameter
	// ? : 전달해도 되고, 전달하지 않아도 된다. 
	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}
	printName('Steve', 'Jobs');
	printName('Ellie');
	printName('Anna', undefined); // undefined
	
	// Default parameter
	function printMessage(message: string = 'default message') {
		console.log(message);
	}
	
	printMessage();

	// Rest parameter
	// 배열형태로 인자를 받아올 수 있다.
	function addNumber(...numbers: number[]): number {
		return numbers.reduce((a,b) => a + b);
	} 

	console.log(addNumber(1, 2));
	console.log(addNumber(1, 2, 3, 4));
	console.log(addNumber(1, 2, 3, 4, 5, 0));
}