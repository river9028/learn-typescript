{
	// Array
	// 배열의 정의하는 방법
	const fruits: string[] = ['🍅', '🍌'];
	const score: Array<number> = [1, 3, 4];

	// readonly: 전달된 인자를 읽을 수만 있고, 절대로 변경할 수 없다. (오브젝트의 불변성 보장)
	// 위의 형식을 사용하려면 제네릭 형식을 사용할 수 없다. 일관적인 코드 작성을 위해 첫번째 방법으로 작성
	function printArray(fruits: readonly string[]) {
		// fruits.push(); 오류 발생
	}

	// Tuple => interface, type alias, class
	// 서로 다른 타입의 데이타를 담을 수 있는 배열
	// 가독성이 현저히 떨어지기 때문에 interface, type alias, class로 대체해 사용하는걸 추천
	let student: [string, number];
	student = ['name', 123];
	student[0] // 'name'
	student[1] // 123
	const [name, age] = student; // Tuple은 React에서의 useState()에서 사용됨.
}