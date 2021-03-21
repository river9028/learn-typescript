{
	// 어떻게 활용할 수 있을까?
	type ToDo = {
		title: string;
		description: string;
	};

	// Todo를 보여주기만 하는 함수
	function display(todo: Readonly<ToDo>) {
		// 개발자가 todo의 내용을 바꾸는 경우가 생길 수 있음.
		// 가변성의, 수정이 가능한 타입의 오브젝트를 전달하는 것은 위험. 
		// todo.title = 'jaja'; 오류 발생


		// Readonly, Partial(앞서 구현한 Optional), ... 유틸리티 타입은 이미 만들어져있음. 
	}
}