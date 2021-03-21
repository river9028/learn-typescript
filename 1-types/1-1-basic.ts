{
	/**
	 * JavaScript
	 * Primitive: number, string, boolean, bigint, symbol, null, undefined
	 * Object: function, array....
	 */

	// number
	const num: number = 1;

	// string
	const str: string = 'hello';

	// boolean
	const boal: boolean = false;

	// undefined: 값이 있는지 없는지 결정되지 않은 상태
	let name: undefined; // 💩 단독으로 사용하지 않음
	let age: number | undefined; // 옵셔널 타입일때 이런식으로 사용
	age = undefined;
	age = 1;
	function find(): number | undefined {
		return undefined;
	}

	// null: 텅텅 비어있는 상태
	let person: null; // 💩 단독으로 사용하지 않음
	let person2: string | null; // null보단 undefined를 주로 사용

	// unknown 💩 가능하면 사용하지 않는걸 추천.
	// 타입이 없는 JS와 연동해서 사용하기 위해. 라이브러리 사용시 타입을 모르는 경우에 이용.
	let notSure: unknown = 0;
	notSure = 'hello';
	notSure = true;

	// any 💩 가능하면 사용하지 않는걸 추천.
	let anything: any = 0;
	anything = 'hello';

	// void : 텅 빈, 공허한 (생략 가능) 함수에서 아무것도 리턴하지 않을 경우 사용
	function print(): void {
		console.log('hello');
	}

	let unusable: void = undefined; // 💩

	// never 절대, 아무것도 리턴하지 않는 경우에 명시해 사용. 에러를 던지거나, 절대 끝나지 않는 코드.  
	function throwError(message: string): never {
		// message => server (log)
		throw new Error(message);
		while (true) {
		}
	}

	let neverEnding: never; // 💩

	// object 원시타입을 제외한 모든 object타입 할당 가능, 배열도 가능. 
	let obj: object = [1, 4]; // 💩
	function acceptSomeObject(obj: object) {

	}
	acceptSomeObject({ name: 'ellie' });
	acceptSomeObject({ animal: 'dog' });

}