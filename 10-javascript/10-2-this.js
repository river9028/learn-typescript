// // JS에서 this는 호출한 문맥을 나타낸다
// console.log(this); // 브라우저 환경시, Window / Node.js 환경시 global

// function simpleFunc() {
// 	console.log(this);
// }
// // global에서 함수를 호출하는건 window에서 호출하는 것과 동일.
// simpleFunc();
// console.clear();
// class Counter {
// 	conut = 0;
// 	// increase = function () {
// 	// 	console.log(this);
// 	// }
// 	// arrow function을 이용하면 따로 bind를 하지 않아도 연결이 되어 있음.
// 	// arrow function는 선언될 당시의 문맥의 this context를 유지. 
// 	increase = () => {
// 		console.log(this);
// 	};
// }
// const counter = new Counter();
// counter.increase();
// // let, const로 선언한 변수는 window에 등록되어 있지 않으므로 
// // caller를 호출하는 것은 window가 아니라
// // 그 어떤 오브젝트도 아니기 때문에 undefined을 호출.

// // const caller = counter.increase;

// // caller(); // undefined
// // this의 정보를 잃어버리지 않으려면 할당시, bind를 이용

// // const caller = counter.increase.bind(counter);
// // caller(); // counter

// // JS에서 함수를 정의하면, 기본적으로 선언된 함수는 글로벌 객체에서 접근  가능
// function helloWorld() { console.log('hello'); };
// // 함수 선언하면 window/global에서 접근 가능.
// window.helloWorld();
// // 하지만 let/const 키워드를 사용해 변수를 선언하게 되면, window에 등록되지 않음. 글로벌 객체에서 접근  불가능.
// const ellie = 'ellie';
// let bob1 = 'bob';

// // 블럭을 이용해 로컬스코프에서 작성한 함수나 변수가 아니라
// // 글로벌적으로, 파일 최상위에서 선언하면 글로벌 접근이 가능하다.
// // 하지만 함수는 글로벌 객체에 등록이 돼 글로벌 객체에서도 사용이 가능하지만, 변수는 글로벌객체 안에 등록이 되지 않는다.
// // But var 키워드를 사용하면 사용이 가능하다.
// var badVar = 'bad';
// window.badVar; // 💩

// class Bob {

// }
// const bob = new Bob();
// bob.run = counter.increase;
// bob.run(); // Bob {run: ƒ}


"use strict";
function test() {
	let a = 'a';
	console.log(this);
	function inner() {		
		console.log(this);
	}
	inner();
}
test();