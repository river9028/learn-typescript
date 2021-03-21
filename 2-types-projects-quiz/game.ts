{
	/**
	 * Let's make a game 🕹
	 */


	/**
	 * In my opinion
	 * 
	 * calculator에서 사용된 union type을 이용해 풀이 
	 * 
	 * position 객체를 굳이 바꿔줄 필요가 없다. 객체 안의 요소만 바꿔줄 수 있다. 
	 * react에서 state 바꿀때 늘 이런식으로 하다보니 습관이 됐다. 
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