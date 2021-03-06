{
	/**
	 * Let's make a game ๐น
	 */


	/**
	 * In my opinion
	 * 
	 * calculator์์ ์ฌ์ฉ๋ union type์ ์ด์ฉํด ํ์ด 
	 * 
	 * position ๊ฐ์ฒด๋ฅผ ๊ตณ์ด ๋ฐ๊ฟ์ค ํ์๊ฐ ์๋ค. ๊ฐ์ฒด ์์ ์์๋ง ๋ฐ๊ฟ์ค ์ ์๋ค. 
	 * react์์ state ๋ฐ๊ฟ๋ ๋ ์ด๋ฐ์์ผ๋ก ํ๋ค๋ณด๋ ์ต๊ด์ด ๋๋ค. 
	 */

	type Position = {
		x: number,
		y: number,
	}
	let myPosition: Position = {
		x: 0,
		y: 0
	}
	type Command = 'up' | 'down' | 'left' | 'right';

	function myMove(command: Command) {
		switch (command) {
			case 'up':
				myPosition = { ...position, y: position.y + 1 }
				break;
			case 'down':
				myPosition = { ...position, y: position.y - 1 }
				break;
			case 'left':
				myPosition = { ...position, x: position.x + 1 }
				break;
			case 'right':
				myPosition = { ...position, x: position.x - 1 }
				break;
			default:
				throw new Error('unkown command');
		}
	}

	const position = { x: 0, y: 0 };
	function move(direction: 'up' | 'down' | 'left' | 'right') {
		switch (direction) {
			case 'up':
				position.y += 1
				break;
			case 'down':
				position.y -= 1
				break;
			case 'left':
				position.x += 1
				break;
			case 'right':
				position.x -= 1
				break;
			default:
				throw new Error(`unkown directio: ${direction}`);
		}
	};

	console.log(position); // { x: 0, y: 0}
	move('up');
	console.log(position); // { x: 0, y: 1}
	move('down');
	console.log(position); // { x: 0, y: 0}
	move('left');
	console.log(position); // { x: -1, y: 0}
	move('right');
	console.log(position); // { x: 0, y: 0}
}