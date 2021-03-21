{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}
	const BEANS_COOFEE_PER_SHOT: number = 7;

	let coffeeeBeans: number = 0;
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeeBeans < shots * BEANS_COOFEE_PER_SHOT) {
			throw new Error('Not enough coffee beans!');
		}
		coffeeeBeans -= shots * BEANS_COOFEE_PER_SHOT;
		return {
			shots,
			hasMilk: false
		}
	}

	coffeeeBeans += 3 * BEANS_COOFEE_PER_SHOT;
	const coffee = makeCoffee(2);
	console.log(coffee);
}