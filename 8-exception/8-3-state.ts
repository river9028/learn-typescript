{
	type SuccessState = {
		result: 'success';
	}
	type NetworkErrorState = {
		result: 'fail';
		reason: 'offline' | 'down' | 'timeout';
	}
	type ResultState = SuccessState | NetworkErrorState;
	class NetworkClient {
		// 코드를 작성할때 예상할 수 있는 에러는 
		// (네트워크 연결이 성공할지 실패할지? 실패한다면 어떻게?) 
		// throw Error를 남발하기보단 
		// 어떤 상태를 리턴하는지 만드는 것이 더 좋음

		// 프로그래밍을 할 때, 
		// 예상할 수 있는 상태(성공/실패)를 
		// 타입으로 정의하는 것이 조금 더 깔끔하고 안정적으로, 예상 가능!  
		tryConnect(): ResultState {
			return {result: 'success'};
		}
	}
	class UserService {
		constructor(private client: NetworkClient) { }

		login() {
			this.client.tryConnect();
		}
	}

	class App {
		constructor(private userService: UserService) { }

		run() {
			try {
				this.userService.login();
			} catch (error) {
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
