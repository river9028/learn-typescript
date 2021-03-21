{
	// map type: 기존의 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것 

	// 변경사항이 생기면 하나하나씩 계속 수정이 필요 
	// Optionalt옵션 추가 => description 추가 => readonly 추가 => 💩

	// 이런 과정을 간편하게 하고, 재사용성을 높일 수 있는게 맵 타입.
	type Video = {
		title: string;
		author: string;
		description: string;
	};
	// [1, 2].map(item => item * item) // [2, 4]
	type Optional<T> = {
		// type 오브젝트 정의 안에서 []을 열면
		// 그 안에서 for...in 처럼 사용 가능.
		// *옵셔널 옵션 추가, 타입은 T[P]와 동일. 
		[P in keyof T]?: T[P]; // for...in 
	};
	type ReadOnly<T> = {
		// *readonly 옵션 추가, 타입은 T[P]와 동일. 
		readonly [P in keyof T]: T[P];
	}
	type VideoOptional = Optional<Video>;
	const videoOp: VideoOptional = {
		// animal: 'dog', 오류 발생
	}

	type Animal = {
		name: string;
		age: number;
	}
	const animal: Optional<Animal> = {
		name: 'dog',
	}

	const video: Readonly<Video> = {
		title: 'hi',
		author: 'ellie',
		description: '...'
	};
	// video.title = 'hello' 오류발생

	// type VideoOptional = {
	// 	title?: string;
	// 	author?: string;
	// 	description: string;
	// };

	// type VideoOptionalOnly = {
	// 	readonly title?: string;
	// 	readonly author?: string;
	// 	readonly description: string;
	// };

	type Nullable<T> = {
		[P in keyof T]: T[P] | null;
	};
	const obj2: Nullable<Video> = {
		title: 'hi',
		author: null,
		description: null,
	}

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	}
	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	}
}