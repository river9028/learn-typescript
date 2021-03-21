{
	const obj = {
		name: 'ellie',
	};
	obj.name; // ellie
	obj['name']; // ellie

	// 타입도 인덱스를 기반으로 타입을 결정할 수 있다!?
	type Animal = {
		name: string;
		age: number;
		gender: 'male' | 'female';
	};

	// Name의 타입을 Animal 객체 안의 name의 type으로 선언	
	type Name = Animal['name']; // string
	const text: Name = 'hello';

	type Gender = Animal['gender']; // 'male' | 'female'

	// Animal의 있는 모든 Keys를 타입으로 할당
	type Keys = keyof Animal; // 'name' | 'age' | 'gender'(문자열 유니온)
	const key: Keys = 'age';

	type Person = {
		name: string;
		gender: Animal['gender'];
	};
	const person: Person = {
		name: 'ellie',
		gender: 'female',
	}
	// 인덱스 타입을 이용하면 다른 타입에 있는 키에 접근해서 그 키의 밸류의 타입을 그대로 선언할 수 있다!
}