{
	interface Employee {
		pay(): void;
	}

	class FullTimeEmployee implements Employee {
		pay() {
			console.log('full time!!');
		}
		workFullTime() {

		}
	}

	class PartTimeEmployee implements Employee {
		pay() {
			console.log('part time!!');
		}
		workPartTime() {

		}
	}

	// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
	function payBad(employee: Employee): Employee {
		employee.pay();
		return employee;
	}

	const ellie = new FullTimeEmployee();
	const bob = new PartTimeEmployee();
	ellie.workFullTime();
	bob.workPartTime();

	// 인터페이스 Employee를 받아와서 구현된 클래스를 고려하지 않고 
	// 동일한 Employee로 리턴해 
	// 세부클래스(FullTimeEmployee, PartTimeEmployee) 타입을 잃어버림 💩💩💩
	// const ellieAfterPayBad = payBad(ellie);
	// ellieAfterPayBad.pay();

	// constarins: 제네릭에 세부적인 조건을 달아줄 수 있음.
	// "일반타입이나 Employee를 확장한 아이들만 가능해"
	function pay<T extends Employee>(employee: T): T {
		employee.pay();
		return employee;
	}


	const ellieAfterPay = pay(ellie);
	const bobAfterPay = pay(bob);
	ellieAfterPay.workFullTime();
	bobAfterPay.workPartTime();

	// 다양한 정보가 들어있는 object를 받고, object의 키를 받아 
	// 받아온 object의 key에 해당하는 value를 받아오는 함수를 구현  
	const obj = {
		name: 'ellie',
		age: 20,
	};

	const obj2 = {
		animal: '🐕',
	};

	function myGetValue<T>(obj: object, key: string): T {
		return obj[key];
	}

	// T라는 어떠한 오브젝트도 받을 수 있고
	// K는 object T에 있는 key중에 하나라고 extends를 이용해 상속
	// 리턴되는 값은 T에 있는 K 키의 값이 된다. 
	function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
		return obj[key];
	}

	console.log(getValue(obj, 'name')); // ellie
	// obj에 'score'라는 key가 없기 떄문에 오류 발생
	// console.log(getValue(obj, 'score')); 
	console.log(getValue(obj, 'age')); // 20
	console.log(getValue(obj2, 'animal')); // 🐕
	// obj2에 'name'이라는 key가 없기 떄문에 오류 발생 
	// console.log(getValue(obj2, 'name')); 
}