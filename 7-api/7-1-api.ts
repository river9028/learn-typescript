{
	Array;

	type Student = {
		passed: boolean;
	}
	const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }]
	const result = students.every(student => student.passed);
	console.log(result);

	class Animal { }
	class Cat extends Animal {
		isCat: boolean = true;
	}
	class Dog extends Animal {
		isDog: boolean = true;
	}
	const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

	// predicate 함수는 일반 결과값을 확인하는 것이 아니라
	// S 타입은 배열에서 지정된 T라는 타입을 상속하는 어떤 타입도 사용 가능
	// predicate는 배열의 모든 요소를 빙글빙글 돌면서 value가 S 타입인지 확인하는 함수.
	// 리턴하는 배열이 S타입의 배열인지 확인 가능
	// (is타입은 User-defined types, type predicate)
	// https://www.typescriptlang.org/docs/handbook/advanced-types.html

	// every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
	function isCat(animal: Animal): animal is Cat {
		return (animal as Cat).isCat !== undefined;
	}
	console.log(animals.every<Cat>(isCat));
}