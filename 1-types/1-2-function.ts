{
	// JavaScript π©
	/* function jsAdd(num1, num2) {
		return num1 + num2;
	}
	// TypeScript β¨
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript π©
	function jsFetchNum(id) {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}
	// TypeScript β¨
	function fetchNum(id: string): Promise<number> {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	} */

	// => 
	// νμ μ λ³΄λ₯Ό κΈ°μν¨μΌλ‘μ¨ μ‘°κΈ λ λμ λ¬Έμν ν¨κ³Ό.
	// "ν¨μλ μ΄λ°κ±°λ₯Ό λ°μμ μ΄λ°μΌμ νλκ΅¬λ" μ§κ΄μ μΈ μ΄ν΄μ λμ

	// JavaScript β¨ => TypeScript 
	// μλ°μ€ν¬λ¦½νΈμμ μ¬μ© κ°λ₯νκ³ , νμμ€ν¬λ¦½νΈμμ λ νμ©λλ₯Ό λμΌ μ μλ ν¨μ μ μ λ°©λ²

	// Optional parameter
	// ? : μ λ¬ν΄λ λκ³ , μ λ¬νμ§ μμλ λλ€. 
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
	// λ°°μ΄ννλ‘ μΈμλ₯Ό λ°μμ¬ μ μλ€.
	function addNumber(...numbers: number[]): number {
		return numbers.reduce((a,b) => a + b);
	} 

	console.log(addNumber(1, 2));
	console.log(addNumber(1, 2, 3, 4));
	console.log(addNumber(1, 2, 3, 4, 5, 0));
}