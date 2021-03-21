{
	/**
	 * Abstract
	 * 
	 * 조금 더 안전하게 우리가 의도한대로 공통적인 기능을 수행하고,
	 * 달라져야 하는 것만 상속하는 클래스에 구현하도록 강조할 수 있다.
	 */

	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	}

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	// abstract 클래스는 오브젝트를 생성할 수 없는 클래스. 추상적인 클래스.
	// 인스턴스로 만들어지는것 목적으로 하지 않고, abstract 클래스는 부모클래스로서 필요한 것들을 정의해놓음.
	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_COOFEE_PER_SHOT: number = 7;
		private coffeeeBeans: number = 0;

		public constructor(beans: number) {
			this.coffeeeBeans = beans;
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
		// 자식클래스마다 달라질 수 있는 행동이 있다면 그 행동하는 함수 앞에 
		// protected abstract 키워드를 붙이고, 추상적인 메소드이기 때문에 구현사항은 적지 않음. 상속하는 클래스에서 따로 구현해야 함.
		// 인터페이스에서 규격을 정하는 것처럼 함수의 이름, 어떤 인자를 받는지, 어떤걸 리턴하는지만 지정할 수 있음.
		protected abstract extract(shots: number): CoffeeCup;

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
		/*
			자식클래스에서 super를 호출해 커피를 만드는 것이 아니라 
			임의로 커피를 만들어 버릴 수 있다. 이러는 경우,
			부모클래스에서 예상했던 grind, preheat, extract 등의 
			예상된 절차들을 놓칠 수 있다. => abstarct 사용!

			makeCoffee(shots: number): CoffeeCup {
				return {
					shots,
					hasMilk: true
				}
			}
		 */
		protected extract(shots: number): CoffeeCup {
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			}
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		protected extract(shots: number): CoffeeCup {
			return {
				shots,
				hasSugar: true,
			}
		}	}

	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
		new CaffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
	];
	machines.forEach(machine => {
		console.log('--------------------');
		machine.makeCoffee(1);
	})
}