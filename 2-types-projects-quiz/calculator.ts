{
	/**
	 * Let's make a calculator 🧮
	 */

	/**
	 * In my opinion
	 * 
	 * 스위치를 이용해 간단하게 구현할 수 있는 쉬운 예제이지만
	 * TS를 이용해 이런식으로 해결하는 문제는 아니라고 생각해
	 * 풀이방법을 확인해봐야 한다고 생각함.  
	 */

	function myCalculate(operator: string, num1: number, num2: number): number | void {
		switch (operator) {
			case 'add':
				return num1 + num2;
			case 'substract':
				return num1 - num2;
			case 'multiply':
				return num1 * num2;
			case 'divide':
				return num1 / num2;
			case 'remainder':
				return num1 % num2;
		}
	}

	/**
	 * calculate 함수가 어떻게 쓰이고 있는지, 함수의 용도를 확인
	 * 다섯가지의 명령어가 있고, 임의의 문자열이 아닌 갯수가 제한된 명령어. => 지정된 명령어가 있음
	 * 산술하고자 하는 두 가지 숫자를 받아온다. 
	 */

	// command는 임의의 문자열이 아니라 지정된 명령어가 있기 때문에 union 타입을 이용 
	type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
	function calculate(command: Command, a: number, b: number): number {
		switch (command) {
			case 'add':
				return a + b;
			case 'substract':
				return a - b;
			case 'multiply':
				return a * b;
			case 'divide':
				return a / b;
			case 'remainder':
				return a % b;
			// 모든 케이스에 해당하지 않을 때에는 에러를 던져준다.
			default:
				throw new Error("unknown command");
		}
	}
	console.log(calculate('add', 1, 3)); // 4
	console.log(calculate('substract', 3, 1)); // 2
	console.log(calculate('multiply', 4, 2)); // 8
	console.log(calculate('divide', 4, 2)); // 2
	console.log(calculate('remainder', 5, 2)); // 1
}