class Car {
	engine = 0;
	move() {
		const engine = this.engine + 1;
		// 임의의 오류 발생 🐛
		console.log('engine🐛');
		console.log(engine);
	}
}
const car = new Car();
car.move();