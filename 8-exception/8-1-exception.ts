{
	/**
	 * Java: Exception
	 * Javascript: Error
	 */

	// const array = new Array(10000000000000000000); RangeError: Invalid array length

	// Error(Exception) Handling: try -> catch -> finally
	// 에러가 발생할 수 있는 부분을 시도(try)
	// 에러가 발생(catch)
	// 에러가 발생하든 말든 마무리(finally) 
	// * 메모리에 문제가 있거나 복구할 수 없는 심각한 문제라면 💩  

	function readFile(fileName: string): string {
		if (fileName === 'not exist!💩') {
			throw new Error(`file not exist! ${fileName}`);
		}
		return 'file content📋'
	}

	function closeFile(fileName: string) {
	}

	function run() {
		// const fileName = 'exist';
		const fileName = 'not exist!💩';
		try {
			// 에러가 발생하는 부분만 담는게 좋음.
			console.log(readFile(fileName));
		} catch (error) {
			console.log('catthed!!')
			return;
		} finally {
			// try와 연관되어 있어 항상 마지막에 마무리해야 하는 것들은 finally 안에서 작업.
			// 에러가 발생하고 catch되어서 실행 보장.
			closeFile(fileName);
			console.log('finally!!')
		}
		closeFile(fileName);
		console.log('closed !')
	}

	run();
}