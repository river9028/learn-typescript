/* module1.js */

// 다른 모듈에서 사용시, export를 해줘야 함
// default 키워드 이용하면, 사용하는 쪽에서 변수명, 함수명을 바꿀 수 있다. 한 파일 안에서 default는 꼭 하나!
export default function add(a, b) {
	return a + b;
}

export function print() { };
export const number = 10;