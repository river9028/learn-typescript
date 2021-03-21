{
	class TimeoutError extends Error {}
	class OfflineError extends Error {}
	
	class NetworkClient {
		tryConnect(): void {
			throw new Error('no network!');
			// 예상하지 못한 에러가 발생하는 경우가 있다면 
			// 이 에러를 try catch Handling 어디서 처리할지 고민!
		}
	}
	class UserService {
		constructor(private client: NetworkClient) { }

		login() {
			// login.....

			// 에러 발생시 정확하게 고급스럽게 처리할 수 있는게 아니라면
			// catch하지 않는 것이 더 낫다!!!
			// try {
			// 	this.client.tryConnect();
			// } catch (error) {
			// 	console.log('catched!')
			// }
			this.client.tryConnect();
		}
	}

	class App {
		constructor(private userService: UserService) { }

		run() {
			try {
				this.userService.login();

				// catch를 통해 전달되는 error의 타입은 any
				// 타입에 대한 정보가 사라져 instanceOf 사용 불가!
				// error instanceOf OfflineError : 사용불가!!!
			} catch (error) {
				// 어정쩡하게 에러를 잡기보단.. 
				// 의미있는 행동을 할 수 있는 곳에서 에러를 잡고 처리한다! 
				// show dialog to user 
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
