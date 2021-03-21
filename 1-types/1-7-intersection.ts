{
	/**
	 * Intersection Types: &
	 * 
	 * 발생하는 모든 케이스 중엔 그 모든 것을 합한 것
	 * 다양한 타입들을 하나로 묶어서 선언을 가능하게 해줌.
	 */

	type Student = {
		name: string;
		score: number;
	} 
	
	type Worker = {
		emploteeId: number;
		work: () => void;
	}

	function internWork(person: Student & Worker){
		console.log(person.name, person.emploteeId, person.work());
	}
	internWork({
		name: 'ellie',
		score: 1,
		emploteeId: 123,
		work: () => {}
	})
}