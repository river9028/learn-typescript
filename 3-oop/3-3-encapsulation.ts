{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}
	/**
	 * 클래스 생성시 외부에서 보일 수 있는, 접근할 수 있는 것은 무엇인지,
	 * 내부적으로만 가지고 있어야 하는 데이타는 무엇인지 결정 가능.
	 * 외부에 노출해도 되는건 무엇인지 잘 생각해서 클래스 디자인 중요. 
	 */

	// 외부에 보이면 안되는, 설정하면 안되는 정보를 은닉할 수 있는 방법
	// public: 기본적으로 외부에서 볼 수 있는, 접근할 수 있음. 
	// private: 외부에서 볼 수 없고, 접근할 수 없음.
	// protected: 외부에서 접근 불가. 상속시 자식 클래스에서는 접근 가능.
	class CoffeeMaker {
		private static BEANS_COOFEE_PER_SHOT: number = 7;
		private coffeeeBeans: number = 0;

		// 생성자 금지
		private constructor(beans: number) {
			this.coffeeeBeans = beans;
		}

		// static을 이용해 오브젝트를 생성할 수 있는 함수를 제공한다면 생성자를 이용해 오브젝트를 만드는 걸 금지하는 경우에 사용됨. 
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans)
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error('value for beans should be greater than 0');
			}
			this.coffeeeBeans += beans;
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeeBeans < shots * CoffeeMaker.BEANS_COOFEE_PER_SHOT) {
				throw new Error('Not enough coffee beans!');
			}
			this.coffeeeBeans -= shots * CoffeeMaker.BEANS_COOFEE_PER_SHOT;
			return {
				shots,
				hasMilk: false
			}
		}
	}

	const maker = CoffeeMaker.makeMachine(32);
	maker.fillCoffeeBeans(32);
	// maker.coffeeeBeans = -34; // invalid 제약사항이 없어 오브젝트 상태를 외부에서 유효하지 않은 상태로 만들 수 있는 위험한 상황  

	class User {
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`
		}
		private internalAge = 4;
		get age(): number {
			return this.internalAge;
		}
		set age(num: number) {
			if(num < 0) {
			}
			this.internalAge = num;
		}
		constructor(private firstName: string, private lastName: string) {
		}
	}
	const user = new User('Steve', 'Jobs');
	console.log(user.age);
	user.age = 6;
	console.log(user.age);
}