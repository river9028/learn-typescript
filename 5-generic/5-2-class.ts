{
	// either: a or b
	// 유연하게 어떤 타입이든 받을 수 있는 Either 함수
	interface Either<L, R> {
		left: () => L;
		right: () => R;
	}
	// 제네릭이 정의된 인터페이스를 구현할 떄 동일하게 제네릭을 정의해주면 된다.
	// 클래스에서 사용시 임의로 I(tem)나 K, V(alue)를 주로 사용된다.
	class SimpleEither<L, R> implements Either<L, R> {
		constructor(private leftValue: L, private rightValue: R) { }
		left(): L {
			return this.leftValue;
		}
		right(): R {
			return this.rightValue;
		}
	}
	const either: Either<number, number> = new SimpleEither(4, 5);
	either.left(); // 4
	either.right(); // 5
	const best = new SimpleEither({name: 'either'}, 'hello');
}