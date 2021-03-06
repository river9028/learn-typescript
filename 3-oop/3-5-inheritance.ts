{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_COOFEE_PER_SHOT: number = 7;
		private coffeeeBeans: number = 0;

		public constructor(beans: number) {
			this.coffeeeBeans = beans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans)
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error('value for beans should be greater than 0');
			}
			this.coffeeeBeans += beans;
		}
		clean() {
			console.log('cleaning the machine... ๐งผ')
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeeBeans < shots * CoffeeMachine.BEANS_COOFEE_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeeBeans -= shots * CoffeeMachine.BEANS_COOFEE_PER_SHOT;
		}
		private preheat() {
			console.log('heating up... ๐ฅ');
		};
		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... โ`);
			return {
				shots,
				hasMilk: false
			}
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	// extends ํค์๋๋ฅผ ํตํด์ ํด๋์ค๋ฅผ ์์ํ๋ค.
	class CaffeLatteMachine extends CoffeeMachine {
		// ์์์์ ํด๋์ค ์์ฑ์๋ฅผ ๋ฐ๋ก ๊ตฌํํ๋ ๊ฒฝ์ฐ์๋ 
		// ์์ ์์ฑ์ ์์์super() ํตํด ๋ถ๋ชจ ์์ฑ์ ํธ์ถ.
		// ๋ถ๋ชจ ํด๋์ค ์์ฑ์์์ ํ์ํ ๋ฐ์ดํฐ๋ ๊ฐ์ด ๋ฐ์์ ์ ๋ฌํด์ผ ํ๋ค.
		constructor(beans: number, public readonly serialNumber: string){
			super(beans);

		}
		private steamMilk(): void {
			console.log('Steaming some milk... ๐ฅ')
		}
		// ์์ํ ํด๋์ค์์ ๋ถ๋ชจํด๋์ค์ ๋ค๋ฅธ ํ๋์ ํ๊ณ  ์ถ๋ค๋ฉด,
		// ์์ ํด๋์ค์์ ๋ถ๋ชจํด๋์ค์ ์๋ ํจ์๋ฅผ ๋ฎ์ด ์์ธ ์ ์๋ค. ์ด๊ฒ์ overwriting(์ค๋ฒ๋ผ์ดํ)์ด๋ผ ํ๋ค.
		makeCoffee(shots: number): CoffeeCup {
			// super ํค์๋๋ฅผ ํตํด ๋ถ๋ชจํด๋์ค์ ์๋ ํจ์์ ์ ๊ทผํ๊ฑฐ๋ ํธ์ถํ  ์ ์๋ค.
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			}
		}
	}

	const machine = new CoffeeMachine(23);
	const latteMachine = new CaffeLatteMachine(23, 'SSSS');
	const coffee = latteMachine.makeCoffee(1);
	console.log(coffee);
	console.log(latteMachine.serialNumber);
}