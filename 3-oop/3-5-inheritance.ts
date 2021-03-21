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
			console.log('cleaning the machine... 🧼')
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeeBeans < shots * CoffeeMachine.BEANS_COOFEE_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeeBeans -= shots * CoffeeMachine.BEANS_COOFEE_PER_SHOT;
		}
		private preheat() {
			console.log('heating up... 🔥');
		};
		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕`);
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

	// extends 키워드를 통해서 클래스를 상속한다.
	class CaffeLatteMachine extends CoffeeMachine {
		// 자식에서 클래스 생성자를 따로 구현하는 경우에는 
		// 자식 생성자 안에서super() 통해 부모 생성자 호출.
		// 부모 클래스 생성자에서 필요한 데이터도 같이 받아와 전달해야 한다.
		constructor(beans: number, public readonly serialNumber: string){
			super(beans);

		}
		private steamMilk(): void {
			console.log('Steaming some milk... 🥛')
		}
		// 상속한 클래스에서 부모클래스와 다른 행동을 하고 싶다면,
		// 자식 클래스에서 부모클래스에 있는 함수를 덮어 씌울 수 있다. 이것을 overwriting(오버라이팅)이라 한다.
		makeCoffee(shots: number): CoffeeCup {
			// super 키워드를 통해 부모클래스에 있는 함수에 접근하거나 호출할 수 있다.
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