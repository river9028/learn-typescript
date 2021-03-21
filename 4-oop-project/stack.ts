{
	// stack 구현하기
	class MyStack {
		private id = 0;
		private names = {};

		push(name: string) {
			console.log(`Adding ${name} in Stack... 🎈`);
			this.names[this.id] = name;
			this.id++;
		}

		pop(): string | void {
			if (this.id <= 0) {
				console.log('Empty stack... ⬜');
				return;
			}
			console.log(`Deleting last Data... 🗑 `);
			const result = this.names[this.id - 1];
			delete this.names[this.id - 1];
			this.id--;
			return result;
		}
	}

	const nameStack = new MyStack();
	console.log(nameStack)
	nameStack.push('Ellie');
	nameStack.push('Bob');
	let popResult = nameStack.pop();
	console.log('popResult:', popResult);
	popResult = nameStack.pop();
	console.log('popResult:', popResult);
	popResult = nameStack.pop();

	// -------------------------------------------------------------

	/** 
	 * hint.
	 * 1) 인터페이스를 이용해 규격을 지정
	 * 2) 단일 연결 리스트를 이용해 구현(head -> 'bob' -> 'ellie)
	 * */

	interface Stack {
		readonly size: number;
		push(value: string): void;
		pop(): string;
	}

	// 단일 연결 리스트에서 사용할 타입 정의.
	// 사용자가 데이터를 넣어서 한단계 감싸는 데이터를 만들땐 
	// readonly 키워드로 불변성 유지하는 것이 좋다.
	type StackNode = {
		readonly value: string;
		readonly next?: StackNode; // 옵셔널을 이용해 없을 수도 있도록 만듦.
	}

	class StackImpl implements Stack {
		/**
		 * 외부에서 사이즈의 정보를 변경 X
		 * 하지만 구현시 readonly 키워드를 사용하면 내부에서도 size에 접근할 수 없다.
		 * private _size 따로 둠. 
		 * (외부에서, 내부에서 쓰는 이름과 동일한 경우,
		 * 동일한 변수명에 _(underscore)를 앞에 붙여준다.)
		 * 외부에서 접근이 가능한 getter 이용해 사이즈를 정의(읽을 수 만 있고, 내부에서 변경할 수 있도록)
		 */
		 
		private _size: number = 0;
		private head?: StackNode; // head는 StackNode 타입의 값을 갖거나 안가질 수도 있다. 
		constructor(private capacity: number) { } // 사이즈 제한을 인자로 전달
		get size() {
			return this._size;
		}
		push(value: string): void {
			if (this._size === this.capacity) {
				throw new Error('Stack is full!');
			}
			const node: StackNode = { value, next: this.head };
			this.head = node;
			this._size++;
		};
		pop(): string {
			// 값이 있는지 없는지 api에서 자체적으로 정의하기 보단
			// 메소드 호출시 스택의 데이터를 무조건 리턴한다고 보장해주도록 만드는게 좋음.
			// why?
			// string | undefined 이런식으로 만든다면 해당 api를 사용하는 사람이 
			// 사용할 때마다 null chceck를 해줘야하는 번거로움이 생김.
			// 대신 해당 api 호출시 스택이 비어있는지 아닌지 확인을 강요.

			// stict null을 통해 엄격한 확인을 하지만
			// 자바스크립트 코드와 연동시, 변수에 null이나 undefined를 할당 받을 수 있음.
			// this.head === undefined로 체크시, null은 통과가 되버림. 에러 발생.
			// null == undefined, null !== undefined
			if (this.head == null) { 
				// 정해진 사이즈 내에서 사용할 수 있도록 제한.
				throw new Error('Stack is empty!'); 
			}
			const node = this.head;
			this.head = this.head.next;
			this._size--;
			return node.value;
		};
	}

	const stack = new StackImpl(10);
	stack.push('Ellie 1');
	stack.push('Bob 2');
	stack.push('Steve 3');
	while (stack.size !== 0) {
		console.log(stack.pop());
	}
	stack.pop();
}