/* module2.js */

// 다른 모듈을 불러올시 import 사용
// defualt가 아닐시에서, "{ }"를 사용해 동일한 이름으로 가져와야 함
// { } 으로 가져온 걸 이름을 바꾸고 싶다면 as로 바꿀 수 있음. 
import sum, { print as printMessage } from './10-3-module1';

// * 전부다 불러오기
import * as calculator from './10-3-module1';

// 모듈화를 하지 않으면 글로벌 스코프로 측정돼 Window 객체 접근해 사용가능.
console.log(sum(1, 2));
printMessage();

console.log(calculator.number);
calculator.print();

// 이름 충돌 발생! 어떤게 먼저 호출될지 예상할 수 없음.
// function add(a, b) {
// 	return a * b;
// }