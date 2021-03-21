{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	/**
	 * 외부에서 클래스를 바라봤을 때, 
	 * "인터페이스가 너무 복잡해요"
	 * "사용해야 할 함수가 너무 많아서 어떤걸 사용해야 할 지 모르겠어요"
	 * 
	 * => Abstraction(추상화)를 통해서 필요한 인터페이스만 노출함으로써 클래스 사용을 쉽게 만듦.
	 * */

	/**
	 * interface
	 * 
	 * "이런이런 규약을 가지고 있어! 이런 행동을 할 수 있어!"등을 
	 *	명시해 놓는 contractor 계약서 같은 개념.
	 * 
	 * 인터페이스를 만들때 I라는 prefix를 붙이거나, 
	 * 구현하는 클래스에서 그에 맞는 이름을 지정하거나 
	 * 클래스 이름 제일 뒤에 implementation(구현)이라고 붙임.
	 *  
	 * 인터페이스의 규격을 따라가는 클래스는 인터페이스에 규약된 모든 함수를 구현해야 함.
	 * 얼마만큼의 행동을 약속할건지, 보장할건지, 허용할건지 결정 가능
	 */
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;

	}

	// 클래스 CoffeeMachine는 인터페이스 CoffeeMaker 구현하는 클래스이다.
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_COOFEE_PER_SHOT: number = 7;
		private coffeeeBeans: number = 0;

		private constructor(beans: number) {
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

	/**
	 *  추상화는 인터페이스를 간단하게 만듦으로서 
	 * 사용하는 사람이 간편하게 많은 생각을 하지 않고 사용할 수 있도록 도와줌.
	 * 추상화를 할 수 있는 방법은 언어마다 여러가지 방식이 있음.
	 * 
	 * 1) 접근제어자를 통한, 인캡슐레이션을 통한 추상화. 호출하면 안되는 함수에 private 지정.
	 * 2) 인터페이스를 통한 추상화. 
	 */
	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	maker.fillCoffeeBeans(32);
	maker.makeCoffee(2);

	// 인터페이스로 타입을 지정. 인터페이스에 규약된 함수만 사용 가능.
	const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
	// maker2.fillCoffeeBeans(32);
	maker2.makeCoffee(2);
	maker2.clean();

	class AmateurUser {
		constructor(private machine: CoffeeMaker) { }
		makeCoffe() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}
	class ProBarista {
		constructor(private machine: CommercialCoffeeMaker) { }
		makeCoffe() {
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(45);
			this.machine.clean();
		}
	}

	const amateur = new AmateurUser(maker);
	const pro = new ProBarista(maker);
	amateur.makeCoffe();
	pro.makeCoffe();
}