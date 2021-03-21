{
	/**
	 * 상속의 문제점
	 * 
	 * "족보가 꼬인다"
	 * 상속의 깊이가 깊어질수록 서로간의 관계가 복잡해진다.
	 * 
	 * 부모클래스의 행동을 수정하면 수정된 사항을 상속하는 모든 자식클래스의 영향을 미칠 수 있음.
	 * 새로운 기능을 도입하려고 할 때, 상속의 구조가 복잡해짐.
	 * TS에서는 한 가지 이상의 부모클래스를 상속할 수 없음.
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

		public constructor(
			beans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {
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
			const coffee = this.extract(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}

	/**
	 * Composition
	 *  
	 * 다양한 클래스에서 필요로 하는 기능을 매번 구현하는 것이 아니라
	 * 각각의 기능별로 클래스를 따로 외부에 만들어 둠으로써
	 * 재사용이 필요한 공통적인 기능을 필요로 하는 곳에서 가져와서 사용.
	 * 
	 * 복잡한 상속의 수직관계를 피하면서 상속을 한 단계로 유지하면서 필요한 코드의 재사용 가능🎊
	 * 
	 * 치명적인 단점? 
	 * 클래스간의 타이트한 커플링으로 업데이트시, 연관된 클래스를 업데이트 필요 💩
	 * 
	 * 클래스간에 상호작용을 하는 경우, 클래스간에 서로 대화하는 의사소통이 발생하는 경우,
	 * 클래스 자기자신을 노출하는 것이 아니라 계약서를 통해서, 계약서에 의거해서 의사소통을 해야 한다.
	 * 
	 * 계약서는 바로 인터페이스. 인터페이스를 통해 클래스간 의사소통하는 것을 디커플링의 원칙.
	 * 
	 * 상속을 전혀 사용하지 않고도 
	 * 클래스에 필요한 기능을 컴포지션을 통해 주입함으로써 
	 * 다양한 형태의 오브젝트를 만들 수 있다.
	 * 
	 * 상속이 나쁘다는 것이 아니라 상속의 관계가 복잡하고, 수직관계가 깊어지면 
	 * 컴포지션을 통해 필요한 기능을 조립해 확장이 가능하고, 재사용성이 높고,
	 * 유지보수가 쉽고, 조금 더 퀄리티 높은 코드를 만들 수 있는지 고민하는게 중요.
	 * 
	 * 허나 오버엔지니어링은 경계! 정해진 기간 내에 기능 구현해야 기능이 있는 경우에
	 * 기능 구현보다 코드개선에 우선점을 두거나,
	 * 발생하지 않을 상황에 대비해 확장성을 대비해 코드를 복잡하게 디자인하는걸 경계해야 한다.
	 */


	interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup;
	}

	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
	}

	// 싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Steaming some milk... 🥛')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			}
		}
	}

	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Fancy Steaming some milk... 🥛')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			}
		}
	}

	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Cold Steaming some milk... 🥛')
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			}
		}
	}

	class NoMilk implements MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup {
			return {
				...cup,
			}
		}
	}

	// 설탕제조기
	class CandySugarMixer implements SugarProvider {
		private getSugar() {
			console.log('Getting some suger from candy 🍭');
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			}
		}
	}

	class SugarMixer implements SugarProvider {
		private getSugar() {
			console.log('Getting some suger from jar 🍯');
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			}
		}
	}

	class NoSugar implements SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup {
			return {
				...cup,
			}
		}
	}

	// Milk
	const cheapMilkSteamer = new CheapMilkSteamer();
	const fancyMilkSteamer = new FancyMilkSteamer();
	const coldMilkSteamer = new ColdMilkSteamer();
	const noMilk = new NoMilk();

	// Suger
	const candySugar = new CandySugarMixer();
	const sugar = new SugarMixer();
	const noSugar = new NoSugar();

	//
	const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
	const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

	const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
	const fancylatteMachine = new CoffeeMachine(12, fancyMilkSteamer, noSugar);
	const coldlatteMachine = new CoffeeMachine(12, coldMilkSteamer, noSugar);

	const sweetLatteMachine = new CoffeeMachine(
		12,
		cheapMilkSteamer,
		candySugar
	);
}