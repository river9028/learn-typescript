{
	/**
	 * Discriminated Union
	 * 
	 * 유니온 타입의 차별화되는 이름이 동일한 타입을 둠으로서 간편하게 구분할 수 있는 것
	 * 동일한 키와 하지만 state 별로 다른 값을 가지고 있도록 만듦.
	 * 타입이 보장되면서 다른 state를 간편하게 만들 수 있다.
	 */

	// function: login -> success, fail ⏱
	type SuccessState = {
		result: 'success'; // 동일한 키, 다른 값 ⭕
		response: {
			body: string;
		}
	};
	type FailState = {
		result: 'fail'; // 동일한 키, 다른 값 ❌
		reason: string;
	}
	type LoginState = SuccessState | FailState;

	function login(id: string, password: string): LoginState {
		// 발생할 수 있는 다양한 케이스 중 하나만 정하고 싶을 때 사용
		return {
			result: "success",
			response: {
				body: 'logged in!'
			}
		}
	}

	// printLoginState(state: LoginState)
	// success -> 🎉 body
	// fail -> 😭 reason
	// 로그인은 성공할 수도, 실패할 수도 있다. 
	// 성공했을시 받아온 response 리턴, 실패시 이유를 알려주는 함수를 Union을 활용해 만들어보자!

	function printLoginState(state: LoginState) {
		state.result // success or fail
		// 유니온 타입을 사용할 때 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로서 조금 더 구분하기 쉽게 만든다. 직관적인 코드 작성에 유리.
		if (state.result === "success") {
			console.log(`🎉${state.response.body}`)
		} else {
			console.log(`😭${state.reason}`)
		}
	}
}