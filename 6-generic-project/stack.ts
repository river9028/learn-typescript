{
	/**
	 * 기존 구현 스택 단점: 문자열만 넣고, 뺄 수 있음.
	 */
	interface Stack<T> {
		readonly size: number;
		push(value: T): void;
		pop(): T;
	}

	type StackNode<T> = {
		readonly value: T;
		readonly next?: StackNode<T>;
	}

	class StackImpl<T> implements Stack<T> {
		private _size: number = 0;
		private head?: StackNode<T>; 
		constructor(private capacity: number) { }
		get size() {
			return this._size;
		}
		push(value: T): void {
			if (this._size === this.capacity) {
				throw new Error('Stack is full!');
			}
			// 타입 추론 가능
			const node = { value, next: this.head };
			this.head = node;
			this._size++;
		};
		pop(): T {
			if (this.head == null) { 
				throw new Error('Stack is empty!'); 
			}
			const node = this.head;
			this.head = this.head.next;
			this._size--;
			return node.value;
		};
	}

	const stack = new StackImpl<string>(10);
	stack.push('Ellie 1');
	stack.push('Bob 2');
	stack.push('Steve 3');
	while (stack.size !== 0) {
		console.log(stack.pop());
	}
	
	// number
	const stack2 = new StackImpl<number>(10);
	stack2.push(123);
	stack2.push(456);
	stack2.push(789);
	while (stack2.size !== 0) {
		console.log(stack2.pop());
	}
}