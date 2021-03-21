{
	/**
	 * Type Assertions 💩
	 *
	 * 타입이 없는 자바스크립트와 연동되는 경우에 불가피하게 사용 
	 * 장담하지 않는 경우에는 사용하지 않는 것이 좋다
	 */

	// (예시) 자바스크립트 함수 중 스트링 관련된 함수를 이용시,
	// 자바스크립트는 타입이 없기때문에 어떤 값을 리턴하는지 알 수 없음. (any 타입으로 지정)
	// 하지만 이 함수는 암묵적으로 무조건, 분명히 스트링을 리턴함.
	function jsStrFunc(): any {
		return 'hello';
		// return 2;
	}
	const result = jsStrFunc();
	// any 타입이기 때문에 문자열 타입에서 이용가능한 API를 사용할 수 없음.
	// 타입을 확신하는 경우 아래처럼 Type Assertions을 사용
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	// 확신했지만, 아닌 경우에는 
	// 컴파일 과정에서는 오류가 발생하지 않고 
	// 런타임 과정에서 어플리케이션이 꺼질 수 있음.
	console.log((wrong as Array<number>).push(1)); // 😱 

	function findNumbers(): number[] | undefined {
		return undefined;
	}
	const numbers = findNumbers();
	// 타입을 확신하는 경우에는 !를 사용 ("이건 옵션이 아니다!")
	numbers!.push(2) // 😱

	const button = document.querySelector('class')!;
}