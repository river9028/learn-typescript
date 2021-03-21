{

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}
	/**
	 * 
	 * 클래스? 서로 관련있는 데이터나 함수를 한 곳에 묶어 
	 * 어떤 모양의 데이터가 될거라는 것을 정의하는 청사진/템플릿 기능.
	 * 정의된 클래스를 이용해 데이터를 넣어 오브젝트를 생성. 
	 *
	 * 오브젝트마다 새로 만들어야 하는 데이터나 함수가 있다면 멤버 변수로 만들고
	 * 클래스 레벨에서 공유될 수 있는거라면 static을 이용
	 *   
	 */

	Math.abs(-15) // 클래스 레벨의 실사용 예
	Math.PI

	class CoffeeMaker {
		static BEANS_COOFEE_PER_SHOT: number = 7; // class level. 클래스와 연결되어 있기 때문에 오브젝트 생성시 마다 멤버변수로 생성되지 않음. (메모리 낭비 방지) 클래스명을 통해 접근. 
		coffeeeBeans: number = 0; // instance (object) level. 

		constructor(beans: number) {
			this.coffeeeBeans = beans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans)
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

	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(14);
	console.log(maker2);

	const maker3 = CoffeeMaker.makeMachine(3);
}