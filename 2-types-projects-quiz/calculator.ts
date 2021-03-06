{
	/**
	 * Let's make a calculator ๐งฎ
	 */

	/**
	 * In my opinion
	 * 
	 * ์ค์์น๋ฅผ ์ด์ฉํด ๊ฐ๋จํ๊ฒ ๊ตฌํํ  ์ ์๋ ์ฌ์ด ์์ ์ด์ง๋ง
	 * TS๋ฅผ ์ด์ฉํด ์ด๋ฐ์์ผ๋ก ํด๊ฒฐํ๋ ๋ฌธ์ ๋ ์๋๋ผ๊ณ  ์๊ฐํด
	 * ํ์ด๋ฐฉ๋ฒ์ ํ์ธํด๋ด์ผ ํ๋ค๊ณ  ์๊ฐํจ.  
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
	 * calculate ํจ์๊ฐ ์ด๋ป๊ฒ ์ฐ์ด๊ณ  ์๋์ง, ํจ์์ ์ฉ๋๋ฅผ ํ์ธ
	 * ๋ค์ฏ๊ฐ์ง์ ๋ช๋ น์ด๊ฐ ์๊ณ , ์์์ ๋ฌธ์์ด์ด ์๋ ๊ฐฏ์๊ฐ ์ ํ๋ ๋ช๋ น์ด. => ์ง์ ๋ ๋ช๋ น์ด๊ฐ ์์
	 * ์ฐ์ ํ๊ณ ์ ํ๋ ๋ ๊ฐ์ง ์ซ์๋ฅผ ๋ฐ์์จ๋ค. 
	 */

	// command๋ ์์์ ๋ฌธ์์ด์ด ์๋๋ผ ์ง์ ๋ ๋ช๋ น์ด๊ฐ ์๊ธฐ ๋๋ฌธ์ union ํ์์ ์ด์ฉ 
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
			// ๋ชจ๋  ์ผ์ด์ค์ ํด๋นํ์ง ์์ ๋์๋ ์๋ฌ๋ฅผ ๋์ ธ์ค๋ค.
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