{
	/**
	 * Print Loading State
	 */
	type LoadingState = {
		state: 'loading';
	};

	type SuccessState = {
		state: 'success';
		response: {
			body: string;
		};
	};

	type FailState = {
		state: 'fail';
		reason: string;
	};

	type ResourceLoadState = LoadingState | SuccessState | FailState;


	function printLoginState(status: ResourceLoadState) {
		switch (status.state) {
			case 'loading':
				console.log('👀 loading...');
				break
			case 'success':
				console.log(`😃 ${status.response.body}`);
				break
			case 'fail':
				console.log(`😱 ${status.reason}`);
				break
			default:
				throw new Error(`unkown state: ${status}`);
		}
	}

	printLoginState({ state: 'loading' }); // 👀 loading...
	printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
	printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
