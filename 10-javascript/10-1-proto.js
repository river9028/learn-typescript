const x = {};
const y = {};
// JS에서 모든 오브젝트는 Object라는 프로토를 상속.
// console.log(x);
// console.log(y);
// console.log(x.toString());
// x와 y는 동일한 오브젝트의 프로토를 상속
// console.log(x.__proto__ === y.__proto__); // true

const array = [];
// console.log(array);
// console.log(array.toString());
// 변수 array는 오브젝트 Array라는 프로토를 상속, Array는 오브젝트 Object라는 프로토를 상속.

function CoffeeMachine(beans) {
	this.beans = beans;
	// 만들어진 오브젝트(인스턴스)마다 공통된 함수를 가지고 있다.
	// Instance number level
	// this.makeCoffe = (shots) => {
	// 	console.log('making coffee... ☕');
	// };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = shots => {
	console.log('making coffee... ☕');
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}
// LatteMachine => CoffeeMachine => Object 상속.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine =  new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();