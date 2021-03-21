{
	// 타입도 condition(조건)을 줄 수 있다!
	type Check<T> = T extends string ? boolean : number;
	type Type = Check<string>;

	// 전달된 T에 따라 달라지는 타입.
	type TypeName<T> = T extends string
		? 'string'
		: T extends number
		? 'number'
		: T extends boolean
		? 'boolean'
		: T extends undefined
		? 'undefined'
		: T extends Function
		? 'function'
		: 'object';

	type T0 = TypeName<string>; 'string';
	type T1 = TypeName<'a'>; 'string';
	type T2 = TypeName<() => void>; 'function';
}