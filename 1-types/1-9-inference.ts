{
	/**
	 * Type Inference : 타입 추론
	 */

	let text = 'hello'; // 생략 가능
	// text = 1; 에러 발생

	// 타입을 지정하지 않을시 'any' 형식으로 지정
	function print(message: string = 'hello') {
		console.log(message);
	}
	print('hello');

	// 연산 값에 의해서 리턴 값도 자동 추론 
	function add(x: number, y: number) {
		return x + y;
	}
	const result = add(1,2);

	/**
	 * 원시타입이나 void 외에는 웬만하면 타입을 정확하게 명시하는 것이 좋다.
	 * 프로젝트시 가이드를 명확하게 정하고, 가독성을 생각하며 일관성있게 코드를 작성하는 습관!  
	 */
}