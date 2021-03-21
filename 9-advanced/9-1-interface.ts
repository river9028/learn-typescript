{
	type PositionType = {
		x: number;
		y: number;
	}

	interface PositionInterface {
		x: number;
		y: number;
	}

	// object⭐
	// type, interface 둘 다 object를 정의하고, 할당할 수 있음.
	const obj1: PositionType = {
		x: 1,
		y: 1,
	}
	const obj2: PositionInterface = {
		x: 1,
		y: 1,
		z: 1,
	}

	// class⭐
	// type, interface 둘 다 class에서 구현이 가능
	class Pos1 implements PositionType {
		x: number;
		y: number;
	}
	class Pos2 implements PositionInterface {
		x: number;
		y: number;
		z: number;
	}

	// Extends
	// type, interface 둘 다 확장이 가능하다
	interface ZPositionInterface extends PositionInterface {
		z: number;
	}
	// Intersection(&)을 이용해 두 가지를 묶은 타입(초창기에는 불가)
	type ZPositionType = PositionType & { z: number }

	// 😀 only interfaces can be merged.
	// 결합은 interface만 가능
	// 최초 정의 이후에 재정의해 규격사항 추가 가능
	interface PositionInterface {
		z: number;
	}
	// type PositionType = {} 오류 발생

	// 😀 Type aliases can use computed properties
	// 유틸리티, 맵, 인덱스 이용 가능
	type Person = {
		name: string,
		age: number,
	}
	type Name = Person['name']; // string
	type NumberType = number;
	type Direction = 'left' | 'right';
}