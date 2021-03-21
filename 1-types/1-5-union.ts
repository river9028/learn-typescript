{
	/**
	 * Union Types : OR
	 * 이거 또는 저거 
	 * 모든 가능한 케이스 중에 발생할 수 있는 딱 하나를 담을 수 있는 타입을 만들고 싶을 때 이용
	 */

	type Direction = 'left' | 'right' | 'up' | 'down';
	function move(direction: Direction) {
		console.log(direction);
	}

	move('right');
	move('left');

	type TileSize = 8 | 16 | 32;
	const tile: TileSize = 8; // 세 가지 중에 하나만 할당 가능

	// function: login -> success, fail ⏱
	type SuccessState = {
		response: {
			body: string;
		}
	};
	type FailState = {
		reason: string;
	}
	type LoginState = SuccessState | FailState;

	function login(id: string, password: string): LoginState {
		// 발생할 수 있는 다양한 케이스 중 하나만 정하고 싶을 때 사용
		return {
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
		// LoginState는 SuccessState | FailState 둘 중 하나가 될 수 있기때문에 코드를 작성하는 시점에는 어떤 속성이 존재하는지 모르기 때문에 
		// 1. in을 사용한 조건문 사용 
		if ('response' in state) {
			console.log(`🎉${state.response.body}`)
		} else {
			console.log(`😭${state.reason}`)
		}
	}
}