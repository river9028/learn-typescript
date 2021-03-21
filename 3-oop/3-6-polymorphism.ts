{
	/**
	 * Polymorphism (다형성)
	 * 
	 * 다형성이란? 하나의 인터페이스나 부모의 클래스를 상속한 자식 클래스들이 
	 * 인터페이스와 부모클래스에 있는 함수들을 다른 방식으로 다양하게 구성함으로써 
	 * 조금 더 다양성을 만들어 볼 수 있음. 
	 * 
	 * 인터페이스와 부모클래스에 있는 동일한 함수 API를 통해서 
	 * 각각의 구현된 내부 구현 사항을 신경쓰지 않고 약속된 한 가지의 API를 호출함으로써 
	 * 사용자는 간편하게 다양한 기능을 사용하도록 도와준다.
	 */

	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean; // 옵셔널 타입으로 작성하지 않으면 적용 X
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

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);

		}
		private steamMilk(): void {
			console.log('Steaming some milk... 🥛')
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			}
		}
	}

	type Syrup = 'vanilla' | 'caramel' | 'hazelnut' | 'classic';
	class MySweetCoffeeMaker extends CoffeeMachine {
		constructor(beans: number, private readonly syrup: Syrup) {
			super(beans);
		}

		addSyrup() {
			console.log(`Add ${this.syrup} syrup... 🍯`)
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.addSyrup();
			return {
				...coffee,
			}
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return {
				...coffee,
				hasSugar: true,
			}
		}
	}

	// 다형성을 이용하면 한가지의 클래스나 인터페이스를 통해서 다른 방식으로 구현한 클래스를 만들 수 있다. 

	// 내부적으로 구현된 다양한 클래스들이 
	// 한 가지 인터페이스로 구현하거나 
	// 또는 
	// 동일한 부모클래스를 상속했을 때,
	// 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API를 호출할 수 있음.
	const machines: CoffeeMaker[] = [
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
	];
	machines.forEach(machine => {
		console.log('--------------------');
		machine.makeCoffee(1);
	})
}