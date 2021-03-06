{
	// stack κ΅¬ννκΈ°
	class MyStack {
		private id = 0;
		private names = {};

		push(name: string) {
			console.log(`Adding ${name} in Stack... π`);
			this.names[this.id] = name;
			this.id++;
		}

		pop(): string | void {
			if (this.id <= 0) {
				console.log('Empty stack... β¬');
				return;
			}
			console.log(`Deleting last Data... π `);
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
	 * 1) μΈν°νμ΄μ€λ₯Ό μ΄μ©ν΄ κ·κ²©μ μ§μ 
	 * 2) λ¨μΌ μ°κ²° λ¦¬μ€νΈλ₯Ό μ΄μ©ν΄ κ΅¬ν(head -> 'bob' -> 'ellie)
	 * */

	interface Stack {
		readonly size: number;
		push(value: string): void;
		pop(): string;
	}

	// λ¨μΌ μ°κ²° λ¦¬μ€νΈμμ μ¬μ©ν  νμ μ μ.
	// μ¬μ©μκ° λ°μ΄ν°λ₯Ό λ£μ΄μ νλ¨κ³ κ°μΈλ λ°μ΄ν°λ₯Ό λ§λ€λ 
	// readonly ν€μλλ‘ λΆλ³μ± μ μ§νλ κ²μ΄ μ’λ€.
	type StackNode = {
		readonly value: string;
		readonly next?: StackNode; // μ΅μλμ μ΄μ©ν΄ μμ μλ μλλ‘ λ§λ¦.
	}

	class StackImpl implements Stack {
		/**
		 * μΈλΆμμ μ¬μ΄μ¦μ μ λ³΄λ₯Ό λ³κ²½ X
		 * νμ§λ§ κ΅¬νμ readonly ν€μλλ₯Ό μ¬μ©νλ©΄ λ΄λΆμμλ sizeμ μ κ·Όν  μ μλ€.
		 * private _size λ°λ‘ λ . 
		 * (μΈλΆμμ, λ΄λΆμμ μ°λ μ΄λ¦κ³Ό λμΌν κ²½μ°,
		 * λμΌν λ³μλͺμ _(underscore)λ₯Ό μμ λΆμ¬μ€λ€.)
		 * μΈλΆμμ μ κ·Όμ΄ κ°λ₯ν getter μ΄μ©ν΄ μ¬μ΄μ¦λ₯Ό μ μ(μ½μ μ λ§ μκ³ , λ΄λΆμμ λ³κ²½ν  μ μλλ‘)
		 */
		 
		private _size: number = 0;
		private head?: StackNode; // headλ StackNode νμμ κ°μ κ°κ±°λ μκ°μ§ μλ μλ€. 
		constructor(private capacity: number) { } // μ¬μ΄μ¦ μ νμ μΈμλ‘ μ λ¬
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
			// κ°μ΄ μλμ§ μλμ§ apiμμ μμ²΄μ μΌλ‘ μ μνκΈ° λ³΄λ¨
			// λ©μλ νΈμΆμ μ€νμ λ°μ΄ν°λ₯Ό λ¬΄μ‘°κ±΄ λ¦¬ν΄νλ€κ³  λ³΄μ₯ν΄μ£Όλλ‘ λ§λλκ² μ’μ.
			// why?
			// string | undefined μ΄λ°μμΌλ‘ λ§λ λ€λ©΄ ν΄λΉ apiλ₯Ό μ¬μ©νλ μ¬λμ΄ 
			// μ¬μ©ν  λλ§λ€ null chceckλ₯Ό ν΄μ€μΌνλ λ²κ±°λ‘μμ΄ μκΉ.
			// λμ  ν΄λΉ api νΈμΆμ μ€νμ΄ λΉμ΄μλμ§ μλμ§ νμΈμ κ°μ.

			// stict nullμ ν΅ν΄ μκ²©ν νμΈμ νμ§λ§
			// μλ°μ€ν¬λ¦½νΈ μ½λμ μ°λμ, λ³μμ nullμ΄λ undefinedλ₯Ό ν λΉ λ°μ μ μμ.
			// this.head === undefinedλ‘ μ²΄ν¬μ, nullμ ν΅κ³Όκ° λλ²λ¦Ό. μλ¬ λ°μ.
			// null == undefined, null !== undefined
			if (this.head == null) { 
				// μ ν΄μ§ μ¬μ΄μ¦ λ΄μμ μ¬μ©ν  μ μλλ‘ μ ν.
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