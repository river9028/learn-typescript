{
	type PageInfo = {
		title: string;
	};
	type Page = 'home' | 'about' | 'contact';

	// Record 타입 하나와 다른 타입을 연결하고 묶어줄 때 이용
	// 타입 하나를 키로 사용하고, 나머지 하나를 타입으로 묶을때 사용.
	// (자료구조 맵과 유사)
	// type Record<K extends keyof any, T> = {
	// 	[P in K]: T;
	// };
	type Nav = Record<Page, PageInfo>;

	// 한 Page 당 PageInfo를 연결
	const nav: Nav = {
		home: { title: 'Home' },
		about: { title: 'About' },
		contact: { title: 'Contect' },
	};

	type Product = 'cat' | 'dog';
	type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}