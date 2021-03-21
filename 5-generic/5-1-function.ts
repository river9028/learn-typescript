{
	/**
	 * Generic : '통상적인, 일반적인'
	 * 
	 * 어느 언어에도 통상적으로 볼 수 있는, 재사용성이 높음.
	 * 
	 * 다양한 형태의, 타입의 데이터를 다룰 수 있도록 해
	 * 활용성과 재사용성을 높임
	 * 유연하고, 타입도 보장 가능, 재사용성 ↑ 
	 * API 문서를 읽거나 오픈소스 프로젝트를 볼 떄 이해 ↑ 
	 */

	// 아이템이 null인지 확인하는 유효성 확인 함수
	// 숫자만 확인 가능, 타입별로 만드는 건... 💩 
	function checkNotNullBad(arg: number | null): number {
		if (arg === null) {
			throw new Error('not vaild number!');
		}
		return arg;
	}

	// any 타입을 사용해 만든 유효성 확인 함수
	// 타입이 보장되지 않음... 💩💩💩 
	function checkNotNullAnyBad(arg: any | null): number {
		if (arg === null) {
			throw new Error('not vaild number!');
		}
		return arg;
	}

	// Generi를 이용해 만든 유효성 확인 함수
	// 어떤 타입이든지 받을 수 있음.
	// 코딩을 할 떄, 함수를 사용할 때 타입이 결정 => 타입을 보장 받을 수 있음.
	// Generic은 일반적으로 대문자 하나만 사용해 정의 
	function checkNotNull<T>(arg: T | null): T {
		if (arg === null) {
			throw new Error('not vaild number!');
		}
		return arg;
	}
	const number = checkNotNull(123);
	// 타입스크립트에선 어떤 것도 타입이 될 수 있기때문에, 
	// 사용시 구체적으로 명시해서 사용자가 타입을			정할 수 있다.  
	// const boal = checkNotNull(true); :true
	const boal: boolean = checkNotNull(true);
	// const boal: string = checkNotNull(true); 오류 발생
}