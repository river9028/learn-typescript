{
	/**
	 * Type Aliases
	 * 기본적인 타입 정의부터 복잡하고 다양한 새로운 타입을 정의할 수 있다. 
	 */
	
	// 원시 타입 정의
	type Text = string;
	const name: Text = 'ellie';
	const address: Text = 'korea';
	type Num = number;
	// object 타입 정의 
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: 'ellie',
		age: 12,
	}
	
	/**
	 * String Literal Types
	 * 타입을 문자열로도 지정할 수 있다!
	 */
	type Name = 'name';
	let ellieName: Name;
	ellieName = 'name';
	type JSON = 'json';
	const json: JSON = "json";

	type Boal = true;
	// const isCat: Boal = false; 오류!

	
}